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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-starboard.js");
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

/***/ "./Resources/public/js/c4g-maps-control-sideboard.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-sideboard.js ***!
  \***********************************************************/
/*! exports provided: Sideboard */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sideboard", function() { return Sideboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__ = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};






/**
 * Base class for sideboard structures. Provides standard configurations which are equal for each sideboard element.
 */
(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              options  misc configuration options
   *
   */

  c4g.maps.control.Sideboard = function (options) {

    this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'sideboard',
      direction: 'right'
    }, options);

    //active Identifier (which side is this element on?)
    //cssname needed to set the css class correctly
    switch (this.options.direction) {
      case 'left':
        this.identifier = 'Portside';
        this.cssname = 'portside';
        break;
      case 'right':
        this.identifier = 'Starboard';
        this.cssname = 'starboard';
        break;
    }
    //this.cssname = this.identifier.charAt(0).toLowerCase() + this.identifier.slice(1);
    this.initialized = false;
    this.options.tipLabel = this.options.tipLabel || this.options.headline || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].CTRL_SIDEBOARD;
    this.container = document.createElement('div');
    this.element = document.createElement('div');
    this.button = undefined;
    this.spinner = undefined;
    // mainstructure elements
    this.wrapper = undefined;
    this.titleBar = undefined;
    this.headline = undefined;
    this.topToolbar = undefined;
    this.contentContainer = undefined;
    this.bottomToolbar = undefined;
    this.statusBar = undefined;

    this.sections = [];
    this.viewTriggerBar = undefined;
    this.views = [];
    this.activeView = undefined;
    this.pausedView = undefined;

    if (this.options.create && this.options.mapController) {
      this.create();
    }

    if (!this.options.extDiv) {
      ol.control.Control.call(this, {
        element: this.element,
        target: this.options.target || undefined
      });
    }
  };
  ol.inherits(c4g.maps.control.Sideboard, ol.control.Control);

  // Add methods
  c4g.maps.control.Sideboard.prototype = $.extend(c4g.maps.control.Sideboard.prototype, {

    /**
     * Creates the basic html-elements for the sideboard
     *
     * @return  {boolean}  'true' on success
     */
    create: function create() {
      var self, initClass, titleButtonBar, closeButton, capitalizedName, hideButton, caching;

      caching = this.options.caching;
      capitalizedName = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].capitalizeFirstLetter(this.options.name);
      self = this;

      // Do not hide when it is initialized open, or in an external div
      if (this.options.extDiv) {
        initClass = ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN;
        // if (caching) {
        //     utils.storeValue(this.options.name, '1');
        // }
      } else {
        initClass = ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE;
        // if (caching) {
        //     utils.storeValue(this.options.name, '0');
        // }
        this.options.mapController["active" + this.identifier] = this.options.mapController["active" + this.identifier] || false;

        this.button = document.createElement('button');
        $(this.button).on('click', function (event) {
          event.stopPropagation();
          // loose focus, otherwise it looks messy
          try {
            this.blur();
          } catch (e) {
            // [note] "this.blur()" does not work in IE-fullscreen-mode
            console.warn(e.name + ': ' + e.message);
          }
          if (capitalizedName == "Router" || capitalizedName == "Measure" || capitalizedName == "Editor") {
            self.toggle(true);
          } else {
            self.toggle();
          }
        });
        this.button.title = this.options.tipLabel;
        this.element.appendChild(this.button);
      }

      // Set attributes
      $(this.container).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-container' + ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE + initClass);
      $(this.element).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-control' + ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE + ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OL_CONTROL + initClass);

      // Set initial dimensions
      if (this.options.direction === 'right') {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      } else {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      }

      // Place container
      if (this.options.extDiv) {
        document.getElementById(this.options.extDiv).appendChild(this.container);
        //     this.options.mapController["active" + this.identifier] = this;
      } else {
        if (this.options.direction === 'left') {
          $('#' + this.options.mapController.map.getTarget() + ' .' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OL_OVERLAYCONTAINER_SE).append(this.container);
        } else {
          this.options.mapController.$overlaycontainer_stopevent.append(this.container);
        }
      }

      // Build content-area
      //
      // Wrapper
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'c4g-' + this.cssname + '-wrapper';
      this.container.appendChild(this.wrapper);
      // Titlebar
      this.titleBar = document.createElement('div');
      this.titleBar.className = 'c4g-' + this.cssname + '-titlebar';
      this.wrapper.appendChild(this.titleBar);

      // Triggerbar
      this.viewTriggerBar = document.createElement('div');
      this.viewTriggerBar.className = 'c4g-' + this.cssname + '-viewtriggerbar';

      // Top-Toolbar
      this.topToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-top-toolbar',
        target: this.wrapper
      });

      // Content-Container
      this.contentContainer = this.addSection({
        className: 'c4g-' + this.cssname + '-content-container',
        target: this.wrapper
      });

      // add content headline
      this.contentHeadline = document.createElement('div');
      this.contentHeadline.className = 'contentHeadline';
      this.contentHeadline.innerHTML = '';
      this.contentContainer.appendChild(this.contentHeadline);

      // Bottom-Toolbar
      this.bottomToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-bottom-toolbar c4g-close',
        target: this.wrapper
      });

      // Statusbar
      this.statusBar = document.createElement('div');
      this.statusBar.className = 'c4g-' + this.cssname + '-statusbar c4g-close';
      this.wrapper.appendChild(this.statusBar);

      // Add spinner
      this.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["Spinner"]({
        target: this.contentContainer,
        className: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].LARGE
      });

      // Fill titlebar
      //
      // Headline
      this.headline = document.createElement('span');
      this.headline.className = 'c4g-' + this.cssname + '-headline';
      this.headline.innerHTML = this.options.headline;
      this.titleBar.appendChild(this.headline);
      // Buttonbar
      titleButtonBar = document.createElement('div');
      titleButtonBar.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CONTROL + ' ' + 'c4g-' + this.cssname + '-buttonbar';
      this.titleBar.appendChild(titleButtonBar);

      if (this.options.direction === 'left') {
        // Hidebutton
        hideButton = document.createElement('button');
        hideButton.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].PORTSIDE_HIDE;
        hideButton.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].HIDE;
        $(hideButton).click(function (event) {
          event.preventDefault();
          self.close(true);
          return false;
        });
        titleButtonBar.appendChild(hideButton);
      }

      // Closebutton
      closeButton = document.createElement('button');
      closeButton.className = 'c4g-' + this.cssname + '-close';
      closeButton.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].CLOSE;
      $(closeButton).click(function (event) {
        event.preventDefault();
        self.close();
        return false;
      });
      titleButtonBar.appendChild(closeButton);

      //Add spinner for left sided sideboard elements
      this.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["Spinner"]({
        target: this.contentContainer,
        className: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].LARGE
      });

      // Handle external DIV and default state
      // catch touch events and stop their propagation
      // otherwise touch-scrolling will be stopped by ol3
      $(this.container).on('touchstart touchmove touchend', function (event) {
        event.stopPropagation();
      });

      // Bind the update method to the map-resize event
      this.options.mapController.map.on('change:size', this.update, this);

      // Show open if desired
      if (this.options.defaultOpen || this.options.caching && __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getValue(this.options.name) == '1') {
        this.open();
      }

      return true;
    }, // end of "create"

    /**
     *   Update the sideboards html-elements
     *   resizes the content-container
     *   and the top-toolbar
     *
     * @param  {event-object}  opt_event  *optional*  Just needed by the ol-bind-method,
     *                                                but not used in the function
     */
    update: function update(opt_event) {

      var self, contentContainerOuterHeight, containerOffsetWidth;

      self = this;

      /*
      if (this.options && this.options.name) {
          capitalizedName = utils.capitalizeFirstLetter(this.options.name);
      }*/

      contentContainerOuterHeight = $(this.wrapper).height() - ($(this.titleBar).outerHeight(true) + $(this.statusBar).outerHeight(true));
      if (this.options && this.options.direction && this.options.direction != "undefined" && this.options.direction === 'left') {
        if (this !== this.options.mapController["active" + this.identifier]) {
          containerOffsetWidth = 0;
        }
      }

      // Top-Toolbar
      if (this.topToolbar) {
        if (this.topToolbar.innerHTML) {
          // this.topToolbar.style.display = 'block';
          this.topToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.topToolbar).outerHeight(true);
        } else {
          this.topToolbar.style.display = 'none';
        }
      }

      // Bottom-toolbar
      if (this.bottomToolbar) {
        if (this.bottomToolbar.innerHTML) {
          // this.bottomToolbar.style.display = 'block';
          this.bottomToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.bottomToolbar).outerHeight(true);
        } else {
          this.bottomToolbar.style.display = 'none';
        }
      }

      // Content-container
      $(this.contentContainer).outerHeight(contentContainerOuterHeight);

      // Correct width
      if (this.options) {
        if (this.options.mapController["active" + this.identifier] === this) {
          //this.container.style.width = 'auto';
          containerOffsetWidth = this.container.offsetWidth;
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });

          //only move the toggle button on starboard elements
          if (this.options.direction === 'right') {
            $(this.element).css(this.options.direction, containerOffsetWidth);
          }
        }
      }
    }, // end of "update"

    /**
     * Opens this sideboard element
     *
     * @param   {object}    *optional* options to be passed to the initialize-function if it exists
     * @return  {boolean}  'true' an success
     */
    open: function open(opt_options) {
      var containerOffsetWidth, self;

      self = this;

      // Call initialize-functions, if existent
      if (!this.initialized) {
        if (typeof this.init === 'function') {
          this.initialized = this.init(opt_options);
        } else {
          this.initialized = true;
        }
      }

      // call preOpenFunctions
      if (typeof this.preOpenFunction === 'function') {
        this.preOpenFunction();
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier]) {
          if (this.options.mapController["active" + this.identifier] === this) {
            return false;
          }
          //close other active sideboard on this side
          this.options.mapController["active" + this.identifier].close(true, true);
        } else {
          // slide other elements when no other sideboard was active on this side
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });
        }

        $(this.container).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN).css(this.options.direction, 0);
        if (this.options.direction === 'left') {
          $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN);
        } else {
          $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN).css(this.options.direction, containerOffsetWidth);
        }

        // set this as active Sideboard
        this.options.mapController["active" + this.identifier] = this;

        // check if a view needs to be reactivated
        if (this.activeView) {
          this.activeView.activate();
        }

        if ($(this.statusBar).hasClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE)) {
          $(this.statusBar).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN);
        }

        if ($(this.bottomToolbar).hasClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE)) {
          $(this.bottomToolbar).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN);
        }

        // show container to fix resizing issue
        $(this.container).css('visibility', 'visible');

        this.update();
        if (this.options.caching) {
          __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].storeValue(this.options.name, '1');
        }

        // call postOpenFunctions
        if (typeof this.postOpenFunction === 'function') {
          this.postOpenFunction();
        }

        return true;
      }
      return false;
    }, // end of "open"

    isOpen: function isOpen() {
      return this.options.mapController["active" + this.identifier] && this.options.mapController["active" + this.identifier] === this;
    },

    /**
     * Closes this sideboard element
     *
     * @param   {boolean}  opt_hide               *optional* Choose if this function should trigger |preHideFunction|
     *                                            instead of |preCloseFunction|. Default is |false|.
     * @param   {boolean}  opt_openOtherSideboard  *optional* Indicates if another sideboard element will be opened instead.
     *                                            Default is |false|.
     *
     * @return  {boolean}                         |true| on success.
     */
    close: function close(opt_hide, opt_openOtherSideboard) {
      var containerOffsetWidth, direction;

      direction = this.options.direction;

      if (opt_hide) {
        if (typeof this.preHideFunction === 'function') {
          this.preHideFunction();
        }
      } else {
        if (typeof this.preCloseFunction === 'function') {
          this.preCloseFunction();
        }
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier] !== this) {
          console.warn('This ' + this.options.name + '-element (' + this.options.name + ') is already closed.');
          return false;
        }
        $(this.container).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).css(direction, -containerOffsetWidth);
        $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].CLOSE).css(direction, 0);

        if (!opt_openOtherSideboard) {
          // slide other elements
          this.options.mapController[direction + "SlideElements"].forEach(function (element) {
            $(element).css(direction, 0);
          });
        }

        // hide container to fix resizing issue
        $(this.container).css('visibility', 'hidden');

        // check if a view needs to be deactivated
        if (this.activeView) {
          this.activeView.deactivate(true);
        }

        // Remove active Sideboardentry
        this.options.mapController["active" + this.identifier] = false;

        if (this.options.caching) {
          __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].storeValue(this.options.name, '0');
        }
        return true;
      }
      return false;
    }, // end of "close"

    /**
     * Toggle this sideboard element
     *
     * @return  {boolean}  Returns |true| on success.
     */
    toggle: function toggle(opt_hide) {
      var capitalizedName;
      capitalizedName = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].capitalizeFirstLetter(this.options.name);
      if (this.options.mapController["active" + this.identifier] === this) {
        return this.close(opt_hide);
      }
      return this.open();
    }, // end of "toggle"

    /**
     * Creates a button which characteristics are defined by the options parameter
     * These options include e.g. the target container where the button will be appended and the click action of the button
     *
     * @param   {object}  opt_options  The button configuration
     *
     * @return  {[type]}           [description]
     */
    makeButton: function makeButton(opt_options) {

      var options, button;

      options = $.extend({
        label: undefined,
        tipLabel: undefined,
        className: '',
        target: undefined,
        clickAction: undefined
      }, opt_options);

      if (options.className) {
        options.className = ' ' + options.className;
      }

      button = document.createElement('button');
      button.className = 'c4g-' + this.options.name + '-button' + options.className;
      if (options.id) {
        button.id = options.id;
      }

      if (typeof options.tipLabel === 'string') {
        button.title = options.tipLabel;
      }

      if (typeof options.label === 'string') {
        button.innerHTML = options.label;
      } else if (_typeof(options.label) === 'object') {
        button.appendChild(options.label);
      }

      if (typeof options.clickAction === 'function') {
        $(button).click(function () {
          try {
            this.blur();
          } catch (e) {
            console.warn(e.message);
          }
          options.clickAction();
        });
      }

      if (options.target) {
        $(options.target).append(button);
      }

      return button;
    }, // end of "makeButton"

    /**
     * @TODO
     * [addSection description]
     *
     * @param  {[type]}  opt_options  [description]
     */
    addSection: function addSection(opt_options) {

      var options, section, element;

      options = $.extend({
        type: 'div',
        className: '',
        target: undefined
      }, opt_options);

      // try to create the new section
      try {
        section = document.createElement(options.type);
      } catch (e) {
        console.warn('Cannot create section. "' + options.type + ' is not a valid HTML-node.');
        return false;
      }

      section.className = options.className;

      // try to append the section to the given target
      if (options.target) {
        try {
          options.target.appendChild(section);
        } catch (e) {
          console.warn(e.message);
        }
      }

      section.getElement = function () {
        return element || false;
      };

      section.setElement = function (newElement) {
        if (newElement && (typeof newElement === "undefined" ? "undefined" : _typeof(newElement)) === 'object') {
          if (!(element && element === newElement)) {
            if (element) {
              this.removeChild(element);
            }
            this.appendChild(newElement);
            element = newElement;
          }
        }
      };

      // add to sections-array
      this.sections.push(section);
      return section;
    }, // end of "addSection"

    /**
     * @TODO
     * [addView description]
     *
     * @param  {[type]}  options  [description]
     */
    addView: function addView(options, opt_viewScope) {

      var self, viewScope, additionalTriggerClass, trigger, view;

      self = this;
      viewScope = opt_viewScope || this;

      options = $.extend({
        // name: undefined,
        triggerConfig: undefined, // @TODO doku format: {opt_target: [string|htmlObject], opt_className: [string], opt_tipLabel: [string]}
        sectionElements: [], // @TODO doku format: [{section: [sectionObject], element: [elementObject]}]
        initFunction: undefined,
        activateFunction: undefined,
        deactivateFunction: undefined
      }, options);

      if (typeof options.name !== 'string') {
        console.warn('Cannot add a view without a name (of type "string").');
        return false;
      }

      view = {};

      view.initialized = false;
      view.paused = false;

      view.activate = function (opt_openSideboard) {
        var i;

        if (options.triggerConfig.withHeadline) {
          self.contentHeadline.innerHTML = options.triggerConfig.tipLabel;
        }

        // open Sideboard if closed
        if (opt_openSideboard && !self.isOpen()) {
          self.open();
        }

        // Deactivate current activeView, if existent
        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView !== view) {
          viewScope.activeView.deactivate();
        }
        viewScope.activeView = view;

        // Handle sub-views
        if (view.activeView) {
          view.activeView.activate();
        }

        // Call initialize-functions, if existent
        if (!view.initialized) {
          if (typeof options.initFunction === 'function') {
            view.initialized = options.initFunction();
          } else {
            view.initialized = true;
          }
        }

        // Display elements in given sections
        if (options.sectionElements && options.sectionElements.length > 0) {
          for (i = 0; i < options.sectionElements.length; i += 1) {
            options.sectionElements[i].section.setElement(options.sectionElements[i].element);
          }
        }

        // Change trigger-state, if existent
        if (trigger) {
          $(trigger).addClass('c4g-active');
        }

        // Call activate function, if existent
        if (typeof options.activateFunction === 'function') {
          if (!options.activateFunction(view.paused)) {
            return false;
          }
        }

        view.paused = false;
        self.update();
        return true;
      };

      view.deactivate = function (opt_pause) {

        view.paused = opt_pause || false;

        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView === view) {
          if (trigger && !view.paused) {
            $(trigger).removeClass('c4g-active');
          }

          // Handle sub-views
          if (view.activeView) {
            view.activeView.deactivate(view.paused);
          }

          // Call deactivate function, if existent
          if (typeof options.deactivateFunction === 'function') {
            return options.deactivateFunction(view.paused);
          }
        }

        return true;
      };

      if (_typeof(options.triggerConfig) === 'object') {
        options.triggerConfig = $.extend({
          target: this.viewTriggerBar,
          tipLabel: options.name
        }, options.triggerConfig);

        options.triggerConfig.clickAction = view.activate;
        if (options.triggerConfig.className) {
          additionalTriggerClass = ' ' + options.triggerConfig.className;
        } else {
          additionalTriggerClass = '';
        }
        options.triggerConfig.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ICON + additionalTriggerClass;
        // @TODO check: trigger = this.makeButton(options.triggerConfig);
        trigger = this.makeButton(options.triggerConfig);
      }

      this.views.push(view);
      return view;
    } // end of "addView"

  }); // end of "add methods"
})(jQuery, this.c4g);

var Sideboard = this.c4g.maps.control.Sideboard;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboard.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboard.js ***!
  \***********************************************************/
/*! exports provided: Starboard */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Starboard", function() { return Starboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__ = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_control_starboardplugin_baselayerswitcher__ = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-baselayerswitcher */ "./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_control_starboardplugin_layerswitcher__ = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-layerswitcher */ "./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__c4g_maps_control_starboardplugin_customtab__ = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-customtab */ "./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

var c4g = this.c4g;







(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   * @param   {object}              opt_options  *optional* misc configuration options
   */

  c4g.maps.control.Starboard = function (opt_options) {

    this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'starboard',
      direction: 'right',
      filter: false
    }, opt_options);

    //c4g.maps.hook.starboard_loadPlugins = [];

    //set headline, since the definition above does not work for headline
    if (!this.options.headline || this.options.headline.length === 0) {
      //this.options.headline = c4g.maps.constant.i18n.STARBOARD;
    }

    this.hook_layerswitcher_loaded = this.hook_layerswitcher_loaded || [];

    //call Sideboard (parent) constructor
    __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__["Sideboard"].call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Starboard, __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__["Sideboard"]);

  // Add methods
  c4g.maps.control.Starboard.prototype = $.extend(c4g.maps.control.Starboard.prototype, {

    /**
     * Creates the basic html-elements for the starboard
     *
     * @return  {boolean}  'true' on success
     */
    init: function init() {

      var plugin,
          renderLayertree,
          key,
          layer,
          self,
          fnRender,
          displayLayerswitcher = false;

      if (this.initialized) {
        return true;
      }

      self = this;

      // Load Starboard plugins
      this.plugins = {};

      // creates and renders the starboard plugins
      fnRender = function fnRender() {
        // loop through layers and check if there is any normal layertree to render
        for (key in self.options.mapController.proxy.layerController.arrLayers) {
          if (self.options.mapController.proxy.layerController.arrLayers.hasOwnProperty(key)) {
            layer = self.options.mapController.proxy.layerController.arrLayers[key];
            if (!layer.renderSpecial) {
              renderLayertree = true;
              break;
            }
          }
        }

        if (renderLayertree) {
          // do not display layerswitcher if there is nothing to switch
          if (self.options.mapController.proxy.layerController.arrLayers) {
            for (var id in self.options.mapController.proxy.layerController.arrLayers) {
              if (self.options.mapController.proxy.layerController.arrLayers[id].display) {
                displayLayerswitcher = true;
              }
            }
          }
        }

        // - load "Layerswitcher"
        if (self.options.layerSwitcherCreate && renderLayertree && displayLayerswitcher) {
          self.plugins.layerswitcher = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_control_starboardplugin_layerswitcher__["Layerswitcher"](self);
        }

        // call hook to load additional starboard tabs (layers)
        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(self.hook_layerswitcher_loaded);

        // - check & load other Starboard-plugins (via hook)
        // called functions have to add themselves to this.plugins
        if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.starboard_loadPlugins) === 'object') {
          __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.starboard_loadPlugins, self);
          // - activate new plugins if they are not activated already
          for (plugin in self.plugins) {
            // Check if plugin is a real plugin and not a property of the object prototype
            if (self.plugins.hasOwnProperty(plugin)) {
              self.plugins[plugin].activate();
            }
          }
        }

        // - load "Baselayerswitcher"
        if (self.options.baselayerSwitcherCreate) {
          self.plugins.baselayerswitcher = new __WEBPACK_IMPORTED_MODULE_2__c4g_maps_control_starboardplugin_baselayerswitcher__["Baselayerswitcher"](self);
          self.plugins.baselayerswitcher.activate();
        }
        if (self.plugins.layerswitcher) {
          self.plugins.layerswitcher.activate();
        }
      }; // end of "fnRender()"


      if (!this.options.mapController.proxy.layers_loaded) {
        this.spinner.show();
        this.options.mapController.proxy.hook_layer_loaded.push(function (layerIds) {
          self.spinner.hide();
          fnRender();
        });
      } else {
        // layers are already loaded
        fnRender();
      }

      this.initialized = true;

      return true;
    } // end of "init"

  }); // End of add methods
})(jQuery, c4g);

var Starboard = this.c4g.maps.control.Starboard;

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

/***/ "./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js":
/*!***************************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js ***!
  \***************************************************************************/
/*! exports provided: Customtab */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customtab", function() { return Customtab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};
this.c4g.maps.control.starboardplugin = this.c4g.maps.control.starboardplugin || {};





(function ($, c4g) {
  'use strict';

  /**
   *
   * @param starboard
   * @param plugin
   * @param projectConf
   * @returns {boolean}
   * @constructor
   */

  c4g.maps.control.starboardplugin.Customtab = function (starboard, projectConf) {
    if (!starboard) {
      console.warn('Cannot initialize Project-tab without a starboard.');
      return false;
    }
    projectConf = $.extend({
      tabId: null,
      name: "Customtab",
      awesomeicon: ''
    }, projectConf);

    if (!projectConf.tabId) {
      console.warn('Cannot initialize Project-tab without an id.');
      return false;
    }

    this.initialized = false;
    //this.plugin = plugin || false;
    this.contentLoaded = false;
    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;
    this.map = this.proxy.options.mapController.map;
    this.layers = {};
    this.tabId = projectConf.tabId;
    this.name = projectConf.name;
    this.awesomeicon = projectConf.awesomeicon.replace('&#92;', "\\");
    starboard.plugins["customTab" + this.tabId] = this;
    this.create();
  };

  // Add methods
  c4g.maps.control.starboardplugin.Customtab.prototype = $.extend(c4g.maps.control.starboardplugin.Customtab.prototype, {

    /**
     * @TODO: [create description]
     *
     * @return  {[type]}  [description]
     */
    create: function create() {
      var self, contentWrapper, contentHeadline, contentHeadlineLink, selector, layerSwitcherTitle;

      self = this;
      contentWrapper = document.createElement('div');
      contentHeadline = document.createElement('div');
      contentHeadline.className = 'contentHeadline';

      layerSwitcherTitle = this.starboard.options.layerSwitcherTitle;

      if (self.name) {
        layerSwitcherTitle = self.name;
      }

      if (!this.starboard.options.button) {
        contentHeadline.innerHTML = layerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
      } else {
        $(contentHeadline).addClass("c4g-starboard-headline");
        contentHeadlineLink = document.createElement('a');
        contentHeadlineLink.onclick = function () {
          if ($(this).hasClass("c4g-active") !== false) {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.hideLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-active");
            $(this).addClass("c4g-inactive");
          } else {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.showLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-inactive");
            $(this).addClass("c4g-active");
          }
        };
        $(contentHeadlineLink).addClass("c4g-inactive c4g-starboard-headline-link");
        contentHeadlineLink.innerHTML = layerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
        contentHeadlineLink.innerHTML = contentHeadlineLink.innerHTML + ' ';
        contentHeadline.appendChild(contentHeadlineLink);
      }

      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = 'c4g_starboardplugin_content';
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: self.name,
        triggerConfig: {
          tipLabel: self.name,
          className: 'c4g-starboard-view-trigger-starboardplugin-' + self.tabId,
          withHeadline: false
        },
        sectionElements: [{ section: self.starboard.contentContainer, element: contentWrapper }, { section: self.starboard.topToolbar, element: self.starboard.viewTriggerBar }]
      });
      if (this.awesomeicon.substring(0, 1) === "\\") {
        this.awesomeicon = this.awesomeicon.substring(1, this.awesomeicon.length);
      }
      selector = 'button.c4g-starboard-view-trigger-starboardplugin-' + self.tabId;
      //ToDo möglicherweise standard icon ?
      if (this.awesomeicon.length > 0) {
        var styleEl = document.createElement('style'),
            styleSheet;

        // Append style element to head
        document.head.appendChild(styleEl);

        // Grab style sheet
        styleSheet = styleEl.sheet;
        // catch firefox, because FF does not know "addRule"
        if (styleSheet.addRule && typeof document.styleSheets[0].addRule === 'function') {
          styleSheet.addRule(selector + ':before', 'content: "\\' + this.awesomeicon + '";');
        } else {
          styleSheet.insertRule(selector + ':before { content: "\\' + this.awesomeicon + '";}', 0);
        }
      }
      this.activate();
    },

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */
    activate: function activate() {
      this.view.activate();
      if (!this.contentLoaded) {
        this.loadContent();
      }
    },

    /**
     * @TODO: [setContent description]
     *
     * @param  {Node}  newContent  [description]
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

    /**
     * @TODO: [loadContent description]
     *
     * @return  {[type]}  [description]
     */
    loadContent: function loadContent() {
      var self, fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function fnDrawContent(layerIds) {
        self.treeControl = document.createElement('div');
        $(self.treeControl).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_LAYERTREE);
        self.setContent(self.treeControl);
        self.addItems(layerIds, self.treeControl, { parseAsList: true });
        self.initialized = true;
        self.contentLoaded = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      fnDrawContent(this.proxy.layerIds);
    }, // end of "loadContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */
    addItems: function addItems(itemData, wrapperElement, options) {
      var i, wrapper, item, layer, uid, listItem, entry, $entry, handleEntryClick, self, pWrapper, toggle, childWrapper;

      options = options || {};
      options = $.extend({
        parseAsList: true
      }, options);

      self = this;

      handleEntryClick = function handleEntryClick(event) {
        var itemUid;

        event.preventDefault();
        // "this" is the event sending entry
        itemUid = $(this).data('uid');
        if (self.proxy.activeLayerIds[itemUid]) {
          // hide layer
          $(this).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
          $(this).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
          self.hideLayer(itemUid);
        } else {
          // show layer
          $(this).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
          $(this).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
          self.showLayer(itemUid);
        }
      };

      // register hook to switch childs of layers as well
      this.proxy.hook_layer_visibility.push(function (layerId) {
        var j, changedLayer;

        changedLayer = self.layers[layerId];
        if (changedLayer && changedLayer.$entries) {
          for (j = 0; j < changedLayer.$entries.length; j += 1) {
            if (self.proxy.activeLayerIds[layerId]) {
              changedLayer.$entries[j].addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
            } else {
              changedLayer.$entries[j].addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
            }
          }
        }
      }); // end of hook

      // add hook function for changed zoom
      //   needed to change the entry-classes
      this.proxy.hook_map_zoom.push(function () {
        var j, id, layer;

        for (id in self.layers) {
          if (self.layers.hasOwnProperty(id)) {
            layer = self.layers[id];
            if (layer && layer.$entries) {
              for (j = 0; j < layer.$entries.length; j += 1) {
                if (self.proxy.checkLayerIsActiveForZoom(id)) {
                  layer.$entries[j].removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].DISABLED);
                } else {
                  layer.$entries[j].addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].DISABLED);
                }
              }
            }
          }
        }
      }); // end of hook

      // build the layer tree
      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
      if (itemData && itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {
          uid = itemData[i];
          //layer = this.plugin.customTabs[this.tabId].drawnFeatures[uid];
          layer = this.proxy.layerController.arrLayers[uid];
          // skip layer if it doesn't belong to this tab
          if (!(layer.renderSpecial == true && layer.tabId == this.tabId)) {
            continue;
          }
          // do not render the startab layer itself as parent level
          if (layer.type === "startab") {
            continue;
          }
          // check if layer wants to be displayed in starboard tab
          if (layer.hideWhenInTab === true) {
            continue;
          }
          if (layer.hide === "1") {
            if (this.proxy.activeLayerIds[layer.id]) {
              // this.hideLayer(layer.id);
            }
          }
          // check if the layer should be displayed
          if (!layer.display) {
            continue;
          }
          item = {};
          this.layers[uid] = item;
          listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
          item.entryWrappers = item.entryWrappers || [];
          item.entryWrappers.push(listItem);
          entry = document.createElement('a');
          entry.setAttribute('href', '#');
          entry.appendChild(document.createTextNode(layer.layername || layer.name));
          listItem.appendChild(entry);
          $entry = $(entry);
          item.$entries = item.$entries || [];
          item.$entries.push($entry);
          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

          // prepare insertion of childs
          if (layer.visibleChilds) {
            toggle = document.createElement('span');
            $(listItem).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
            $(toggle).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON);
            $(toggle).click(function () {
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
            });
            $(toggle).insertBefore($entry);
            childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
            item.childWrappers = item.childWrappers || [];
            item.childWrappers.push(childWrapper);
            listItem.appendChild(childWrapper);
          }

          if (this.proxy.activeLayerIds[uid]) {
            $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
          } else {
            $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
          }
          if (this.layers[layer.pid]) {
            // is child-element
            pWrapper = this.layers[layer.pid].childWrappers;
            if (pWrapper) {
              pWrapper[pWrapper.length - 1].appendChild(listItem);
            }
          } else {
            wrapper.appendChild(listItem);
          }
        } // end of for-loop
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

            // do not react immediately but allow for some keystrokes
            setTimeout(function () {
              // two or zero letters are required
              if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-layertree > ul:nth-child(2)'));
            }, 350);
          };

          wrapperElement.appendChild(dv);
        }
        wrapperElement.appendChild(wrapper);
      }
    }, // end of "addItems()"

    showLayer: function showLayer(itemUid) {
      if (this.proxy.activeLayerIds[itemUid]) {
        return true;
      } else {
        this.proxy.layerController.showLayer(itemUid);
      }
    }, // end of "showLayer()"

    hideLayer: function hideLayer(itemUid) {
      if (!this.proxy.activeLayerIds[itemUid]) {
        return true;
      } else {
        this.proxy.layerController.hideLayer(itemUid);
      }
    } // end of "hideLayer()"


  }); // end of "add methods"
})(jQuery, this.c4g);

var Customtab = this.c4g.maps.control.starboardplugin.Customtab;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js":
/*!*******************************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js ***!
  \*******************************************************************************/
/*! exports provided: Layerswitcher */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layerswitcher", function() { return Layerswitcher; });
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

  c4g.maps.control.starboardplugin.Layerswitcher = function (starboard) {
    if (!starboard) {
      console.warn('Cannot initialize Layerswitcher without a starboard.');
      return false;
    }

    this.initialized = false;
    this.layers = {};

    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;
    this.create();
    this.loadContent();
  };

  // Add methods
  c4g.maps.control.starboardplugin.Layerswitcher.prototype = $.extend(c4g.maps.control.starboardplugin.Layerswitcher.prototype, {

    create: function create() {
      var self, contentWrapper, contentHeadline, contentHeadlineLink, contentInfo, layerSwitcherTitle;

      layerSwitcherTitle = this.starboard.options.layerSwitcherTitle;

      self = this;

      contentWrapper = document.createElement('div');
      contentHeadline = document.createElement('div');
      contentHeadline.className = 'contentHeadline';

      if (!this.starboard.options.button) {
        contentHeadline.innerHTML = layerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
      } else {
        $(contentHeadline).addClass("c4g-starboard-headline");
        contentHeadlineLink = document.createElement('a');
        contentHeadlineLink.onclick = function () {
          if ($(this).hasClass("c4g-active") !== false) {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.hideLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-active");
            $(this).addClass("c4g-inactive");
          } else {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.showLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-inactive");
            $(this).addClass("c4g-active");
          }
        };
        $(contentHeadlineLink).addClass("c4g-inactive c4g-starboard-headline-link");
        contentHeadlineLink.innerHTML = layerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
        contentHeadlineLink.innerHTML = contentHeadlineLink.innerHTML + ' ';
        contentHeadline.appendChild(contentHeadlineLink);
      }

      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_CONTENT_LAYERSWITCHER;
      contentInfo = document.createElement('p');
      this.contentDiv.appendChild(contentInfo);
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: 'layerswitcher',
        triggerConfig: {
          tipLabel: layerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,
          className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,
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
    }, // end of "activate()"

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
    }, // end of "setContent()"

    /**
     * @TODO: [loadContent description]
     *
     * @return  {[type]}  [description]
     */
    loadContent: function loadContent() {
      var self, fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function fnDrawContent(layerIds) {
        self.treeControl = document.createElement('div');
        $(self.treeControl).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_LAYERTREE);
        self.setContent(self.treeControl);

        self.addItems(layerIds, self.treeControl);

        self.initialized = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      if (this.proxy.layers_loaded) {
        fnDrawContent(this.proxy.layerIds);
      } else {
        this.proxy.hook_layer_loaded.push(fnDrawContent);
      }
    }, // end of "loadContent()"

    /**
     * @TODO: [drawContent description]
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
      var i, self, filter, wrapper, childWrapper, pWrapper, item, layer, uid, listItem, entry, $entry, toggle, fnHandleEntryClick, fnChildEntryClick, fnChildEntryShow, zoomToExtent, layerClass;

      self = this;

      options = options || {};
      options = $.extend({
        parseAsList: true
      }, options);

      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');

      // create handler for entry-clicks
      fnHandleEntryClick = function fnHandleEntryClick(event) {
        var itemUid, layerItem;

        event.preventDefault();

        itemUid = $(this).data('uid');
        layerItem = self.proxy.layerController.arrLayers[itemUid];

        if (self.proxy.activeLayerIds[itemUid]) {
          // hide layer
          self.proxy.layerController.hideLayer(itemUid);
          if (parseInt(layer.pid, 10) == 0) {
            // hide all childs, because clicked layer is the map itself
            for (var id in self.proxy.activeLayerIds) {
              if (self.proxy.activeLayerIds.hasOwnProperty(id)) {
                self.proxy.layerController.hideLayer(id);
              }
            }
          }
        } else {
          // show layer
          self.proxy.layerController.showLayer(itemUid);
          //zooom to extent
          zoomToExtent(itemUid);
        }
        if (self.handleSelectedChilds(this)) {
          self.updateParentLayers(this, itemUid, layerItem);
        }

        // c4g.maps.layers[itemUid] = layerItem;
      }; // end of "fnHandleEntryClick()"
      fnChildEntryClick = function fnChildEntryClick(event) {
        event.preventDefault();
        var itemUid = $(this).data('uid');
        var parent = $(this).parent().parent().parent();
        var childs = $(parent).children();
        var parentUid = $(childs[1]).data('uid');
        if ($(this).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE)) {
          self.proxy.layerController.hideChildLayer(parentUid, itemUid);
          $(this).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
        } else if ($(this).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE)) {
          self.proxy.layerController.showChildLayer(parentUid, itemUid);
          $(this).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
        }
      };
      fnChildEntryShow = function fnChildEntryShow(event) {
        event.preventDefault();
        var parent = this.parentElement;
        var uid = $(parent.firstChild).data('uid');
        parent = $(this).parent().parent().parent();
        var childs = $(parent).children();
        var parentUid = $(childs[1]).data('uid');
        uid = uid.replace(parentUid, '');
        var layer = self.proxy.layerController.arrLayers[parentUid].vectorLayer;
        if (layer) {
          var singleLayer = layer.getLayers().getArray()[uid];
          var feature = singleLayer.getSource().getFeatures()[0];
          self.proxy.options.mapController.map.getView().fit(feature.getGeometry());
        }
      };

      zoomToExtent = function zoomToExtent(itemUid) {
        //function to zoom to the extent of a map structure and its children
        var layerItem,
            vectorArray,
            layerGroup,
            coords,
            geometry,
            featureList,
            featureArray,
            coordinates = [],
            extent,
            center,
            key;
        layerItem = self.proxy.layerController.arrLayers[itemUid];
        if (layerItem && layerItem.zoom_locations === "1") {
          if (layerItem.hasChilds) {
            for (key in layerItem.childs) {
              if (layerItem.childs.hasOwnProperty(key)) {
                layer = layerItem.childs[key];
                if (layer.type == "overpass") {
                  continue;
                }
                vectorArray = layer.content;
                if (vectorArray === undefined) {
                  // catch case of linked layers
                  continue;
                }
                if ((typeof vectorArray === "undefined" ? "undefined" : _typeof(vectorArray)) === "object") {
                  vectorArray = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].objectToArray(vectorArray);
                }
                layerGroup = layer.vectorLayer;
                if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                  vectorArray.forEach(function (vectorLayer) {
                    if (vectorLayer && vectorLayer.data && vectorLayer.data.geometry && vectorLayer.data.geometry.coordinates) {
                      if (vectorLayer.data.geometry.type === "Point") {
                        coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]), parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                        geometry = new ol.geom.Point(coords);
                        coordinates.push(geometry.getCoordinates());
                      }
                    }
                  });
                }
                if (layerGroup) {
                  // handle more complex geometries
                  featureList = layerGroup.getLayers();
                  featureArray = featureList.getArray();
                  featureArray.forEach(function (feature) {
                    if (layer.type === "kml") {
                      var source = feature.getSource();
                      //var sourceFeatures = source.getFeatures();
                      source.getExtent().forEach(function (coordinate) {
                        coordinates.push(coordinate);
                      });
                    } else {
                      if (ol.extent.getTopRight(feature.getSource().getExtent())['0'] != "Infinity" && ol.extent.getTopRight(feature.getSource().getExtent())['0'] != "-Infinity") {

                        coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                        coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                        coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                        coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                      }
                    }
                  });
                }
              }
            }
          }

          if (layerItem.type !== "overpass" && layerItem.vectorLayer) {
            vectorArray = layer.content;
            if (vectorArray !== undefined) {
              // catch case of linked layers
              if ((typeof vectorArray === "undefined" ? "undefined" : _typeof(vectorArray)) === "object") {
                vectorArray = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].objectToArray(vectorArray);
              }
              layerGroup = layer.vectorLayer;
              if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                vectorArray.forEach(function (vectorLayer) {
                  if (vectorLayer && vectorLayer.data && vectorLayer.data.geometry && vectorLayer.data.geometry.coordinates) {
                    if (vectorLayer.data.geometry.type === "Point") {
                      coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]), parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                      geometry = new ol.geom.Point(coords);
                      coordinates.push(geometry.getCoordinates());
                    }
                  }
                });
              }
              if (layerGroup) {
                // handle more complex geometries
                featureList = layerGroup.getLayers();
                featureArray = featureList.getArray();
                featureArray.forEach(function (feature) {
                  if (layer.type !== "overpass") {
                    if (layer.type === "kml") {
                      var source = feature.getSource();
                      //var sourceFeatures = source.getFeatures();
                      source.getExtent().forEach(function (coordinate) {
                        coordinates.push(coordinate);
                      });
                    } else {
                      coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                      coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                      coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                      coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                    }
                  }
                });
              }
            }
          }

          extent = ol.extent.boundingExtent(coordinates);
          if (extent[0] === Infinity || extent[0] === -Infinity) {
            return;
          }
          self.proxy.options.mapController.map.getView().fit(extent, self.proxy.options.mapController.map.getSize());
          center = self.proxy.options.mapController.map.getView().getCenter();
          if (isNaN(center[0])) {
            self.proxy.options.mapController.map.getView().setCenter([50, 10]);
            self.proxy.options.mapController.map.getView().setZoom(mapData.minZoom || 10);
          }
        }
      }; //end of zoom to extent
      // add hook function for changed layer-visibility
      //   needed to change the entry-classes
      this.proxy.hook_layer_visibility.push(function (layerId) {
        var j, changedLayer;

        changedLayer = self.layers[layerId];
        if (changedLayer && changedLayer.$entries) {
          for (j = 0; j < changedLayer.$entries.length; j += 1) {
            if (self.proxy.activeLayerIds[layerId]) {
              changedLayer.$entries[j].addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
            } else {
              changedLayer.$entries[j].addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
            }
            self.handleSelectedChilds(changedLayer.$entries[j]);
          }
        }
      });

      // add hook function for changed zoom
      //   needed to change the entry-classes
      this.proxy.hook_map_zoom.push(function () {
        var j, id, layer;

        for (id in self.layers) {
          if (self.layers.hasOwnProperty(id)) {
            layer = self.layers[id];
            if (layer && layer.$entries) {
              for (j = 0; j < layer.$entries.length; j += 1) {
                if (self.proxy.checkLayerIsActiveForZoom(id)) {
                  layer.$entries[j].removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].DISABLED);
                } else {
                  layer.$entries[j].addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].DISABLED);
                }
              }
            }
          }
        }
      }); // end of hook

      if (itemData && itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {
          uid = itemData[i];
          layer = self.proxy.layerController.arrLayers[uid];
          item = {};
          this.layers[uid] = item;
          // renderSpecial is set when a layer is rendered in its own tab
          if (layer.renderSpecial) {
            continue;
          }

          if (layer && layer.display) {
            listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
            item.entryWrappers = item.entryWrappers || [];
            item.entryWrappers.push(listItem);

            entry = document.createElement('a');
            entry.setAttribute('href', '#');
            entry.appendChild(document.createTextNode(layer.name));
            listItem.appendChild(entry);

            $entry = $(entry);
            item.$entries = item.$entries || [];
            item.$entries.push($entry);

            if (!this.proxy.checkLayerIsActiveForZoom(uid)) {
              $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].DISABLED);
            }

            $entry.data('uid', uid);
            $entry.click(fnHandleEntryClick);

            if (layer.visibleChilds || layer.split_geojson) {
              toggle = document.createElement('span');

              if (layer.hide_child !== '1') {
                $(listItem).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
                $(toggle).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON);
              }
              $(toggle).click(function () {
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
              });
              $(toggle).insertBefore($entry);
              childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
              item.childWrappers = item.childWrappers || [];
              item.childWrappers.push(childWrapper);
              if (layer.hide_child !== '1') {
                listItem.appendChild(childWrapper);
              }
              if (layer.split_geojson && layer.content[0]) {
                var data = layer.content[0].data;
                if (data && data.features) {
                  for (var _i = 0; _i < data.features.length; _i++) {
                    var feature = data.features[_i];
                    var childListItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
                    var childItem = {};
                    childItem.entryWrappers = childItem.entryWrappers || [];
                    childItem.entryWrappers.push(childListItem);
                    var childEntry = document.createElement('a');
                    childEntry.setAttribute('href', '#');
                    childEntry.appendChild(document.createTextNode(feature.properties[layer.geojson_attributes.split(',')[0]]));
                    childListItem.appendChild(childEntry);
                    var childUid = uid + "" + _i;
                    var $childEntry = $(childEntry);
                    childItem.$entries = item.$entries || [];
                    childItem.$entries.push($entry);
                    childWrapper.appendChild(childListItem);
                    $childEntry.data('uid', childUid);
                    if (layer.geojson_zoom) {
                      $childEntry.click(fnChildEntryShow);
                      $childEntry.addClass('c4g-geojson-button');
                    } else {
                      $childEntry.click(fnChildEntryClick);
                      if (this.proxy.activeLayerIds[uid]) {
                        $childEntry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
                      } else {
                        $childEntry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
                      }
                    }
                    if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.addChilds) === 'object') {
                      __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.addChilds);
                    }

                    if (c4g.maps.hook.starboard_layer_activate && c4g.maps.hook.starboard_layer_activate.length > 0) {
                      var paramObj = { 'feature': feature, 'parentItem': childListItem, 'entry': $childEntry };
                      __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.starboard_layer_activate, paramObj);
                    }
                  }
                }
              }
            }

            if (this.proxy.activeLayerIds[uid]) {
              $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
            } else {
              $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
            }

            // [info]:  In order for this to work,
            //          the parent layers need to be
            //          listed before their childs
            if (this.layers[layer.pid]) {
              // is child-element
              pWrapper = this.layers[layer.pid].childWrappers;
              pWrapper[pWrapper.length - 1].appendChild(listItem);
            } else if (parseInt(layer.pid, 10) == 0) {
              // layer is map itself with a layer
              toggle = document.createElement('span');
              if (layer.hide_child !== '1') {
                $(listItem).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
              }
              $(toggle).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON);
              $(toggle).click(function () {
                if ($(this).parent().hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE)) {
                  $(this).parent().removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
                } else {
                  $(this).parent().removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
                }
              });
              $(toggle).insertBefore($entry);
              childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
              item.childWrappers = item.childWrappers || [];
              item.childWrappers.push(childWrapper);
              listItem.appendChild(childWrapper);
              wrapper.appendChild(listItem);
            } else {
              // is not a child-element (pid == mapId)
              wrapper.appendChild(listItem);
            }

            if (layer.id) {
              var idstr = layer.id.toString();
              layerClass = encodeURIComponent(idstr.toLowerCase()).replace(/%[0-9A-F]{2}/gi, '');
              $(listItem).addClass('c4g_starboard_item_' + layerClass);
            }

            if (layer.cssClass) {
              $(listItem).addClass(layer.cssClass);
            }

            // call hook "layerswitcher_forEachItem"
            if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.layerswitcher_forEachItem) === "object") {
              __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.layerswitcher_forEachItem, { that: this, item: item, entry: $entry });
            }
          }
        } // end of for-loop

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
                  };
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
            // do not react immediately but allow for some keystrokes 
            setTimeout(function () {
              // two or zero letters are required
              if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-layertree > ul:nth-child(2)'));
            }, 350);
          };

          wrapperElement.appendChild(dv);
        }
        wrapperElement.appendChild(wrapper);
      }
    }, // end of "addItems()"
    /**
     * Function which checks for a given layer id, if any of the childs are currently selected.
     * @param layerUid
     * @returns {boolean}
     */
    checkChildSelections: function checkChildSelections(layerUid) {
      var layer, childActive, self;
      self = this;
      childActive = 0;
      layer = self.proxy.layerController.arrLayers[layerUid];
      if (layer && layer.childs && layer.childs.length > 0) {
        // layer has childs
        layer.childs.forEach(function (child) {
          if (self.proxy.activeLayerIds[child.id]) {
            childActive = childActive + 1;
          } else {
            // check if any childs of childs are active
            childActive = childActive + self.checkChildSelections(child.uid);
          }
        });
      }
      return childActive;
    }, // end of "checkChildSelections()"

    /**
     * Function for coloring the layerswitcher entries, if there are any sublayers selected
     * @param entry
     */
    handleSelectedChilds: function handleSelectedChilds(entry) {
      if (this.checkChildSelections($(entry).data('uid')) >= 1) {
        $(entry).css('font-weight', 'bold');
      } else {
        $(entry).css('font-weight', 'normal');
      }
      this.starboard.update();
      return true;
    },

    updateParentLayers: function updateParentLayers(entry, layerUid, clickedLayer) {
      var layer, parentEntry, parentLayer;

      layer = this.proxy.layerController.arrLayers[layerUid];
      if (layer.pid != this.starboard.options.mapController.data.mapId) {
        // the layer has parents
        // by this we can access only the single span where the parent entry is in
        parentLayer = this.proxy.layerController.arrLayers[layer.pid];
        if (parentLayer) {
          parentEntry = entry.parentNode.parentNode.parentNode.getElementsByTagName('a')[0];
          if (parentEntry) {
            if (this.proxy.activeLayerIds[clickedLayer.id]) {
              $(parentEntry).css('font-weight', 'bold');
            } else {
              if (this.checkChildSelections($(parentEntry).data('uid')) >= 1) {
                $(parentEntry).css('font-weight', 'bold');
              } else {
                $(parentEntry).css('font-weight', 'normal');
                //$(parentEntry).addClass(cssConstants.INACTIVE);
              }
            }
            this.updateParentLayers(parentEntry, parentLayer.id, parentLayer);
          }
        }
      } else {
        return false;
      }
    }

  }); // end of "add methods"
})(jQuery, this.c4g);

var Layerswitcher = this.c4g.maps.control.starboardplugin.Layerswitcher;

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

/***/ "./Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************/
/*! exports provided: Spinner */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};



(function ($, c4g) {
  'use strict';

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */

  c4g.maps.misc.Spinner = function (opt_options) {

    var options, target, spinnerSpan;

    options = opt_options || {};

    // default options
    options = $.extend({
      className: '',
      target: '.' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].SPINNER + options.className + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE;
    $(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;
  };

  // Add methods to spinner
  c4g.maps.misc.Spinner.prototype = $.extend(c4g.maps.misc.Spinner.prototype, {

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */
    show: function show() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE)) {
        $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    },

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */
    hide: function hide() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          $(this.element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }

  }); // End of "add methods to spinner"
})(jQuery, this.c4g);

var Spinner = this.c4g.maps.misc.Spinner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmMwMTgxNDhhYzFmYmRjZmNmYzQiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc3RhcmJvYXJkLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tYmFzZWxheWVyc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1jdXN0b210YWIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1sYXllcnN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29uc3RhbnQiLCIkIiwiaTE4biIsImV4dGVuZCIsIkxBTkciLCJOQU1FIiwiSElERSIsIkNMT1NFIiwiUE9JTlQiLCJGUkVFSEFORCIsIkxJTkUiLCJQT0xZR09OIiwiQ0lSQ0xFIiwiUEVSSU1FVEVSIiwiTEVOR1RIIiwiU1VSRkFDRUFSRUEiLCJSQURJVVMiLCJSRUZSRVNIIiwiQ09QWV9UT19DTElQQk9BUkQiLCJDVFJMX1pPT01fSU4iLCJDVFJMX1pPT01fT1VUIiwiQ1RSTF9aT09NX0VYVCIsIkNUUkxfWk9PTV9IT01FIiwiQ1RSTF9aT09NX1BPUyIsIkNUUkxfWk9PTV9TTElERVIiLCJDVFJMX1JFU0VUX1JPVEFUSU9OIiwiQ1RSTF9QT1JUU0lERSIsIkNUUkxfUk9VVEVSIiwiQ1RSTF9FRElUT1IiLCJDVFJMX01FQVNVUkVUT09MUyIsIkNUUkxfSU5GT1BBR0UiLCJDVFJMX0FERElUSU9OQUxQQU5FTCIsIkNUUkxfQUNDT1VOVCIsIkNUUkxfWk9PTUxFVkVMIiwiQ1RSTF9NT1VTRUNPT1JEUyIsIkNUUkxfR0VPU0VBUkNIIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJDVFJMX09WRVJWSUVXTUFQIiwiQ1RSTF9HRU9CT09LTUFSS1MiLCJDVFJMX1NJREVCT0FSRCIsIkNUUkxfU1RBUkJPQVJEIiwiQ1RSTF9BVFRSSUJVVElPTiIsIkNUUkxfR1JJRCIsIkNUUkxfUEVSTUFMSU5LIiwiQ1RSTF9GVUxMU0NSRUVOIiwiQ1RSTF9QUklOVCIsIkVESVRPUiIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJQT1BVUF9ST1VURV9GUk9NIiwiUE9QVVBfUk9VVEVfVE8iLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQkFTRUxBWUVSIiwiU1RBUkJPQVJEX0xBWUVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsIlNJREVCT0FSRCIsIlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQiLCJST1VURVJfRlJPTV9MQUJFTCIsIlJPVVRFUl9PVkVSX0xBQkVMIiwiUk9VVEVSX1RPX0xBQkVMIiwiUk9VVEVSX0NMRUFSX1RJVExFIiwiUk9VVEVSX0NMRUFSX0hUTUwiLCJST1VURVJfTGFiZWxfSW50ZXJpbSIsIlJPVVRFUl9TV0lUQ0giLCJST1VURVJfT1ZFUiIsIlJPVVRFUl9QUklOVCIsIlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UiLCJST1VURVJfVklFV19MQUJFTF9USU1FIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRSIsIlJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1MiLCJST1VURVJfVklFV19BTEVSVF9HT0NPRElORyIsIlJPVVRFUiIsIlJPVVRFUl9OIiwiUk9VVEVSX0UiLCJST1VURVJfUyIsIlJPVVRFUl9XIiwiUk9VVEVSX05FIiwiUk9VVEVSX1NFIiwiUk9VVEVSX1NXIiwiUk9VVEVSX05XIiwiUk9VVEVSX0RJUkVDVElPTl8wIiwiUk9VVEVSX0RJUkVDVElPTl8xIiwiUk9VVEVSX0RJUkVDVElPTl8yIiwiUk9VVEVSX0RJUkVDVElPTl8zIiwiUk9VVEVSX0RJUkVDVElPTl80IiwiUk9VVEVSX0RJUkVDVElPTl81IiwiUk9VVEVSX0RJUkVDVElPTl82IiwiUk9VVEVSX0RJUkVDVElPTl83IiwiUk9VVEVSX0RJUkVDVElPTl84IiwiUk9VVEVSX0RJUkVDVElPTl8xMCIsIlJPVVRFUl9ESVJFQ1RJT05fMTUiLCJST1VURVJfRlJPTSIsIlJPVVRFUl9UTyIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiUk9VVEVSX0xPQ19ST1VURV9UTyIsIlJPVVRFUl9ST1VURURFU0MiLCJST1VURVJfUk9VVEVOQU1FIiwiUk9VVEVSX0RJU1RBTkNFIiwiUk9VVEVSX1RJTUUiLCJST1VURVJfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX1NFQVJDSElORyIsIlJPVVRFUl9FUlJPUl9TRUFSQ0hJTkciLCJST1VURVJfQ0FMQ19ST1VURSIsIlJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFIiwiTUVBU1VSRVRPT0xTIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkdFT0JPT0tNQVJLU19QTEFDRUhPTERFUiIsIklORk9QQUdFIiwiQURESVRJT05BTFBBTkVMIiwiQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUiIsIkFDQ09VTlQiLCJBQ0NPVU5UX1ZJRVdfVFJJR0dFUiIsIlNFQVJDSF9OT1RfRk9VTkQiLCJOT05FIiwialF1ZXJ5IiwibGFuZ0NvbnN0YW50cyIsImNzcyIsIk9QRU4iLCJDTE9TRUFCTEUiLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiUFJJTlQiLCJJTkZPUEFHRV9WSUVXX1RSSUdHRVIiLCJPVkVSVklFV01BUCIsIk9WRVJWSUVXTUFQX1dSQVBQRVIiLCJHRU9CT09LTUFSS1MiLCJQRVJNQUxJTksiLCJQRVJNQUxJTktfUE9QVVAiLCJQT1BVUF9DTE9TRSIsIlBPUFVQX1JPVVRFX1dSQVBQRVIiLCJQT1JUU0lERSIsIlBPUlRTSURFX0NPTlRBSU5FUiIsIlBPUlRTSURFX0NPTlRST0wiLCJQT1JUU0lERV9XUkFQUEVSIiwiUE9SVFNJREVfVElUTEVCQVIiLCJQT1JUU0lERV9UT1BfVE9PTEJBUiIsIlBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSIiwiUE9SVFNJREVfQk9UVE9NX1RPT0xCQVIiLCJQT1JUU0lERV9TVEFUVVNCQVIiLCJQT1JUU0lERV9WSUVXVFJJR0dFUkJBUiIsIlBPUlRTSURFX0hFQURMSU5FIiwiUE9SVFNJREVfQlVUVE9OQkFSIiwiUE9SVFNJREVfQlVUVE9OIiwiUE9SVFNJREVfSElERSIsIlBPUlRTSURFX0NMT1NFIiwiU1BJTk5FUiIsIlNUQVJCT0FSRF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQ09OVFJPTCIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU1RBUkJPQVJEX1RJVExFQkFSIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSIiwiU1RBUkJPQVJEX1NUQVRVU0JBUiIsIlNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUiIsIlNUQVJCT0FSRF9IRUFETElORSIsIlNUQVJCT0FSRF9CVVRUT05CQVIiLCJTVEFSQk9BUkRfQlVUVE9OIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRSIsIlNUQVJCT0FSRF9MQVlFUlRSRUUiLCJTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSIiwiVE9PTFRJUF9QT1BVUCIsIlpPT01fTEVWRUwiLCJST1VURVJfSU5QVVRfV1JBUFBFUiIsIlJPVVRFUl9QUk9GSUxFX1dSQVBQRVIiLCJST1VURVJfSU5QVVRfRlJPTSIsIlJPVVRFUl9JTlBVVF9UTyIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSIiwiUk9VVEVSX1BST0ZJTEVfQ0FSIiwiUk9VVEVSX1BST0ZJTEVfSEdWIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX09WRVJMQVlDT05UQUlORVIiLCJPTF9PVkVSTEFZQ09OVEFJTkVSX1NFIiwiT0xfVklFV1BPUlQiLCJPTF9aT09NIiwiT0xfWk9PTV9JTiIsIk9MX1pPT01fRVhUIiwiT0xfWk9PTV9IT01FIiwiT0xfWk9PTV9QT1MiLCJPTF9aT09NX1dJVEhfRVhUIiwiT0xfWk9PTV9XSVRIX0hPTUUiLCJPTF9aT09NX1dJVEhfUE9TIiwiT0xfWk9PTV9TTElERVIiLCJPTF9aT09NX1dJVEhfU0xJREVSIiwiY3NzQ29uc3RhbnRzIiwiY29udHJvbCIsIlNpZGVib2FyZCIsIm9wdGlvbnMiLCJjcmVhdGUiLCJleHREaXYiLCJkZWZhdWx0T3BlbiIsIm1hcENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJuYW1lIiwiZGlyZWN0aW9uIiwiaWRlbnRpZmllciIsImNzc25hbWUiLCJpbml0aWFsaXplZCIsInRpcExhYmVsIiwiaGVhZGxpbmUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiYnV0dG9uIiwic3Bpbm5lciIsIndyYXBwZXIiLCJ0aXRsZUJhciIsInRvcFRvb2xiYXIiLCJjb250ZW50Q29udGFpbmVyIiwiYm90dG9tVG9vbGJhciIsInN0YXR1c0JhciIsInNlY3Rpb25zIiwidmlld1RyaWdnZXJCYXIiLCJ2aWV3cyIsImFjdGl2ZVZpZXciLCJwYXVzZWRWaWV3Iiwib2wiLCJDb250cm9sIiwiY2FsbCIsInRhcmdldCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwic2VsZiIsImluaXRDbGFzcyIsInRpdGxlQnV0dG9uQmFyIiwiY2xvc2VCdXR0b24iLCJjYXBpdGFsaXplZE5hbWUiLCJoaWRlQnV0dG9uIiwiY2FjaGluZyIsInV0aWxzIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwib24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJlIiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwidG9nZ2xlIiwidGl0bGUiLCJhcHBlbmRDaGlsZCIsImFkZENsYXNzIiwic3R5bGUiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsImdldFRhcmdldCIsImFwcGVuZCIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsImNsYXNzTmFtZSIsImFkZFNlY3Rpb24iLCJjb250ZW50SGVhZGxpbmUiLCJpbm5lckhUTUwiLCJTcGlubmVyIiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlIiwidXBkYXRlIiwiZ2V0VmFsdWUiLCJvcGVuIiwib3B0X2V2ZW50IiwiY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IiwiY29udGFpbmVyT2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsImRpc3BsYXkiLCJvZmZzZXRXaWR0aCIsImZvckVhY2giLCJvcHRfb3B0aW9ucyIsImluaXQiLCJwcmVPcGVuRnVuY3Rpb24iLCJyZW1vdmVDbGFzcyIsImFjdGl2YXRlIiwiaGFzQ2xhc3MiLCJzdG9yZVZhbHVlIiwicG9zdE9wZW5GdW5jdGlvbiIsImlzT3BlbiIsIm9wdF9oaWRlIiwib3B0X29wZW5PdGhlclNpZGVib2FyZCIsInByZUhpZGVGdW5jdGlvbiIsInByZUNsb3NlRnVuY3Rpb24iLCJkZWFjdGl2YXRlIiwibWFrZUJ1dHRvbiIsImxhYmVsIiwiY2xpY2tBY3Rpb24iLCJpZCIsInNlY3Rpb24iLCJ0eXBlIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJuZXdFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJwdXNoIiwiYWRkVmlldyIsIm9wdF92aWV3U2NvcGUiLCJ2aWV3U2NvcGUiLCJhZGRpdGlvbmFsVHJpZ2dlckNsYXNzIiwidHJpZ2dlciIsInZpZXciLCJ0cmlnZ2VyQ29uZmlnIiwic2VjdGlvbkVsZW1lbnRzIiwiaW5pdEZ1bmN0aW9uIiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsInBhdXNlZCIsIm9wdF9vcGVuU2lkZWJvYXJkIiwiaSIsIndpdGhIZWFkbGluZSIsImxlbmd0aCIsIm9wdF9wYXVzZSIsIlN0YXJib2FyZCIsImZpbHRlciIsImhvb2tfbGF5ZXJzd2l0Y2hlcl9sb2FkZWQiLCJwbHVnaW4iLCJyZW5kZXJMYXllcnRyZWUiLCJrZXkiLCJsYXllciIsImZuUmVuZGVyIiwiZGlzcGxheUxheWVyc3dpdGNoZXIiLCJwbHVnaW5zIiwicHJveHkiLCJsYXllckNvbnRyb2xsZXIiLCJhcnJMYXllcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbmRlclNwZWNpYWwiLCJsYXllclN3aXRjaGVyQ3JlYXRlIiwibGF5ZXJzd2l0Y2hlciIsIkxheWVyc3dpdGNoZXIiLCJjYWxsSG9va0Z1bmN0aW9ucyIsImhvb2siLCJzdGFyYm9hcmRfbG9hZFBsdWdpbnMiLCJiYXNlbGF5ZXJTd2l0Y2hlckNyZWF0ZSIsImJhc2VsYXllcnN3aXRjaGVyIiwiQmFzZWxheWVyc3dpdGNoZXIiLCJsYXllcnNfbG9hZGVkIiwic2hvdyIsImhvb2tfbGF5ZXJfbG9hZGVkIiwibGF5ZXJJZHMiLCJoaWRlIiwic3RhcmJvYXJkcGx1Z2luIiwic3RhcmJvYXJkIiwiYmFzZWxheWVycyIsImxvYWRDb250ZW50IiwiY29udGVudFdyYXBwZXIiLCJjb250ZW50SW5mbyIsImJhc2VsYXllclN3aXRjaGVyVGl0bGUiLCJjb250ZW50RGl2Iiwic2V0Q29udGVudCIsIm5ld0NvbnRlbnQiLCJmaXJzdENoaWxkIiwicmVwbGFjZUNoaWxkIiwiZm5EcmF3Q29udGVudCIsImJhc2VsYXllcklkcyIsImJhc2VMYXllckNvbnRyb2wiLCJhZGRJdGVtcyIsImJhc2VsYXllcnNfbG9hZGVkIiwiYmFzZWxheWVyQ29udHJvbGxlciIsImhvb2tfYmFzZWxheWVyX2xvYWRlZCIsImRyYXdDb250ZW50IiwiY29udGVudERhdGEiLCJpdGVtRGF0YSIsIndyYXBwZXJFbGVtZW50IiwiaiIsIml0ZW0iLCJ1aWQiLCJsaXN0SXRlbSIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkRW50cnkiLCJlbnRyeSIsIiRlbnRyeSIsImhhbmRsZUVudHJ5Q2xpY2siLCJoYW5kbGVDaGFuZ2VCYXNlbGF5ZXJWaXNpYmlsaXR5IiwicGFyc2VBc0xpc3QiLCJpdGVtVWlkIiwic2libGluZ3MiLCJiYXNlbGF5ZXJJdGVtIiwicGFyZW50IiwiYXJyQmFzZWxheWVycyIsImFjdGl2ZUJhc2VsYXllcklkIiwiaGFzT3ZlcmxheXMiLCJvdmVybGF5Q29udHJvbGxlciIsImFyck92ZXJsYXlzIiwicmVtb3ZlTGF5ZXIiLCJkYXRhIiwicmlnaHRTbGlkZUVsZW1lbnRzIiwic2hvd0Jhc2VMYXllciIsImFkZExheWVyIiwiYmFzZWxheWVyX2NoYW5nZWQiLCJiYXNlbGF5ZXJDb25maWciLCJlbnRyeVdyYXBwZXIiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm92ZXJsYXlzIiwib3ZlcmxheUlkIiwiY2hhbmdlT3BhY2l0eSIsIm9wYWNpdHkiLCJ2YWx1ZSIsImRlZmF1bHRfYmFzZWxheWVyIiwicGFyc2VJbnQiLCJkdiIsInBsYWNlaG9sZGVyIiwib25rZXl1cCIsImZpbHRlcl91bGxpIiwic2hvd1N1YnRyZWUiLCJnZXRDaGlsZHJlbkJ5VGFnTmFtZSIsInRhZ05hbWUiLCJmb3VuZCIsImNoaWxkcmVuIiwidG9VcHBlckNhc2UiLCJtYXRjaEZsYWdVbCIsInN1YnRyZWVNYXRjaGVzIiwiaXNNYXRjaCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5kZXhPZiIsInVsIiwiaGFzU3VidHJlZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiaG9va19iYXNlbGF5ZXJfdmlzaWJpbGl0eSIsIkN1c3RvbXRhYiIsInByb2plY3RDb25mIiwidGFiSWQiLCJhd2Vzb21laWNvbiIsImNvbnRlbnRMb2FkZWQiLCJsYXllcnMiLCJyZXBsYWNlIiwiY29udGVudEhlYWRsaW5lTGluayIsInNlbGVjdG9yIiwibGF5ZXJTd2l0Y2hlclRpdGxlIiwib25jbGljayIsImhpZGVMYXllciIsInNob3dMYXllciIsInN1YnN0cmluZyIsInN0eWxlRWwiLCJzdHlsZVNoZWV0IiwiaGVhZCIsInNoZWV0IiwiYWRkUnVsZSIsInN0eWxlU2hlZXRzIiwiaW5zZXJ0UnVsZSIsInRyZWVDb250cm9sIiwicFdyYXBwZXIiLCJjaGlsZFdyYXBwZXIiLCJhY3RpdmVMYXllcklkcyIsImhvb2tfbGF5ZXJfdmlzaWJpbGl0eSIsImxheWVySWQiLCJjaGFuZ2VkTGF5ZXIiLCIkZW50cmllcyIsImhvb2tfbWFwX3pvb20iLCJjaGVja0xheWVySXNBY3RpdmVGb3Jab29tIiwiaGlkZVdoZW5JblRhYiIsImVudHJ5V3JhcHBlcnMiLCJsYXllcm5hbWUiLCJ2aXNpYmxlQ2hpbGRzIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRXcmFwcGVycyIsInBpZCIsImZuSGFuZGxlRW50cnlDbGljayIsImZuQ2hpbGRFbnRyeUNsaWNrIiwiZm5DaGlsZEVudHJ5U2hvdyIsInpvb21Ub0V4dGVudCIsImxheWVyQ2xhc3MiLCJsYXllckl0ZW0iLCJoYW5kbGVTZWxlY3RlZENoaWxkcyIsInVwZGF0ZVBhcmVudExheWVycyIsImNoaWxkcyIsInBhcmVudFVpZCIsImhpZGVDaGlsZExheWVyIiwic2hvd0NoaWxkTGF5ZXIiLCJwYXJlbnRFbGVtZW50IiwidmVjdG9yTGF5ZXIiLCJzaW5nbGVMYXllciIsImdldExheWVycyIsImdldEFycmF5IiwiZmVhdHVyZSIsImdldFNvdXJjZSIsImdldEZlYXR1cmVzIiwiZ2V0VmlldyIsImZpdCIsImdldEdlb21ldHJ5IiwidmVjdG9yQXJyYXkiLCJsYXllckdyb3VwIiwiY29vcmRzIiwiZ2VvbWV0cnkiLCJmZWF0dXJlTGlzdCIsImZlYXR1cmVBcnJheSIsImNvb3JkaW5hdGVzIiwiZXh0ZW50IiwiY2VudGVyIiwiem9vbV9sb2NhdGlvbnMiLCJoYXNDaGlsZHMiLCJjb250ZW50Iiwib2JqZWN0VG9BcnJheSIsInByb2oiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwiZ2VvbSIsIlBvaW50IiwiZ2V0Q29vcmRpbmF0ZXMiLCJzb3VyY2UiLCJnZXRFeHRlbnQiLCJjb29yZGluYXRlIiwiZ2V0VG9wUmlnaHQiLCJnZXRUb3BMZWZ0IiwiZ2V0Qm90dG9tUmlnaHQiLCJnZXRCb3R0b21MZWZ0IiwiYm91bmRpbmdFeHRlbnQiLCJJbmZpbml0eSIsImdldFNpemUiLCJnZXRDZW50ZXIiLCJpc05hTiIsInNldENlbnRlciIsInNldFpvb20iLCJtYXBEYXRhIiwibWluWm9vbSIsInNwbGl0X2dlb2pzb24iLCJoaWRlX2NoaWxkIiwiZmVhdHVyZXMiLCJjaGlsZExpc3RJdGVtIiwicHJvcGVydGllcyIsImdlb2pzb25fYXR0cmlidXRlcyIsInNwbGl0IiwiY2hpbGRVaWQiLCIkY2hpbGRFbnRyeSIsImdlb2pzb25fem9vbSIsImFkZENoaWxkcyIsInN0YXJib2FyZF9sYXllcl9hY3RpdmF0ZSIsInBhcmFtT2JqIiwiaWRzdHIiLCJ0b1N0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvTG93ZXJDYXNlIiwiY3NzQ2xhc3MiLCJsYXllcnN3aXRjaGVyX2ZvckVhY2hJdGVtIiwidGhhdCIsImNoZWNrQ2hpbGRTZWxlY3Rpb25zIiwibGF5ZXJVaWQiLCJjaGlsZEFjdGl2ZSIsImNoaWxkIiwiY2xpY2tlZExheWVyIiwicGFyZW50RW50cnkiLCJwYXJlbnRMYXllciIsIm1hcElkIiwicGFyZW50Tm9kZSIsIlpvb21sZXZlbCIsInVwZGF0ZVpvb21sZXZlbCIsIm1hcFZpZXciLCJ1bmRlZmluZWRIVE1MIiwiZ2V0Wm9vbSIsIm1pc2MiLCJzcGlubmVyU3BhbiIsImFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciIsInN0cmluZyIsImNoYXJBdCIsInNsaWNlIiwiZ2V0VW5pcXVlSWQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyIiwiZW5jb2RlR2VvSnNvblByb3BlcnR5IiwiaW5wdXQiLCJvdXRwdXQiLCJkZWNvZGVHZW9Kc29uUHJvcGVydHkiLCJzZXRVcmxQYXJhbSIsInBhcmFtIiwib3B0X2dldEtleSIsIm9wdF9leGVjdXRlIiwibGluayIsInNlYXJjaFBhcmFtIiwicGFyYW1SZXBsYWNlZCIsImxvY2F0aW9uIiwib3JpZ2luIiwicGF0aG5hbWUiLCJoYXNoIiwic2VhcmNoIiwibWF0Y2giLCJvZmZzZXQiLCJvcmlnaW5TdHJpbmciLCJnZXRVcmxQYXJhbSIsInJlZ0V4IiwiUmVnRXhwIiwiZXhlYyIsImRlbHRhRW5jb2RlIiwiYXJySW5wdXQiLCJhcnJPdXRwdXQiLCJzb3J0IiwiYSIsImIiLCJkZWx0YURlY29kZSIsImFyckhvb2tGdW5jdGlvbnMiLCJwYXJhbWV0ZXJzIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInJlZHVjZWRTdHlsZSIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibG9jYXRpb25TdHlsZXMiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwic2V0V2lkdGgiLCJTdHlsZSIsImltYWdlIiwiQ2lyY2xlIiwiZmlsbCIsInN0cm9rZSIsInJhZGl1cyIsIm1lYXN1cmVHZW9tZXRyeSIsIm9wdF9mb3JjZUxpbmVNZWFzdXJlIiwib3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUiLCJzcGhlcmUiLCJjb29yZDEiLCJjb29yZDIiLCJyZXN1bHQiLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsInRvRml4ZWQiLCJodG1sVmFsdWUiLCJhYnMiLCJnZXRBcmVhIiwiZ2V0UmFkaXVzIiwiZWRnZUNvb3JkaW5hdGUiLCJQSSIsInNxcnQiLCJnZXRFeHRlbnRGb3JHZW9tZXRyaWVzIiwiYXJyR2VvbWV0cmllcyIsImV4dGVudFNvdXJjZSIsIlZlY3RvciIsImFkZEZlYXR1cmVzIiwiRXh0ZW50IiwiZml0VG9FeHRlbnRzIiwiZXh0ZW50cyIsIm9wdF9wYWRkaW5nIiwib3B0X2FuaW1hdGlvbkR1cmF0aW9uIiwicGFkZGluZyIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsIm1pblJlc29sdXRpb24iLCJtYXhab29tIiwiYW5pbWF0ZSIsInN0YXJ0IiwiRGF0ZSIsImR1cmF0aW9uIiwicmVzb2x1dGlvbiIsImdldFJlc29sdXRpb24iLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwic3RySW5wdXQiLCJvcHRfbGF5ZXIiLCJzdHJPdXRwdXQiLCJyZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMiLCJyZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyIsInJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMiLCJmdW5jdGlvbk5hbWUiLCJ3aW5kb3ciLCJnZXRTdHlsZSIsImdldCIsImV2S2V5IiwiZWRpdG9yVmFycyIsImF0dHIiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZ2V0VmVjdG9yTGF5ZXIiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsImhyZWYiLCJyZWRyYXdNYXBWaWV3IiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJzY2FsZWxpbmUiLCJyZW1vdmVDb250cm9sIiwiY29udHJvbHMiLCJTY2FsZUxpbmUiLCJhZGRDb250cm9sIiwiem9vbWxldmVsIiwibW91c2Vwb3NpdGlvbiIsIk1vdXNlUG9zaXRpb24iLCJwcm9qZWN0aW9uIiwiY29vcmRpbmF0ZUZvcm1h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OztBQWk0Qk8sSUFBSTRTLFFBQVEsS0FBSzVTLEdBQUwsQ0FBU0MsSUFBVCxDQUFjMlMsS0FBMUIsQyIsImZpbGUiOiJjNGctbWFwcy1jb250cm9sLXN0YXJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYzAxODE0OGFjMWZiZGNmY2ZjNCIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvbnN0YW50cyAoZW4pXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5pMThuID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuaTE4biwge1xuXG4gICAgTEFORzogJ2RlJyxcblxuICAgIE5BTUU6ICdOYW1lJyxcbiAgICBISURFOiAnWnVrbGFwcGVuJyxcbiAgICBDTE9TRTogJ1NjaGxpZcOfZW4nLFxuICAgIFBPSU5UOiAnUE9JJyxcbiAgICBGUkVFSEFORDogJ0ZyZWloYW5kJyxcbiAgICBMSU5FOiAnTGluaWUnLFxuICAgIFBPTFlHT046ICdGbMOkY2hlJyxcbiAgICBDSVJDTEU6ICdSYWRpdXMnLFxuICAgIFBFUklNRVRFUjogJ1VtZmFuZycsXG4gICAgTEVOR1RIOiAnTMOkbmdlJyxcbiAgICBTVVJGQUNFQVJFQTogJ0Zsw6RjaGVuaW5oYWx0JyxcbiAgICBSQURJVVM6ICdSYWRpdXMnLFxuICAgIFJFRlJFU0g6ICdBa3R1YWxpc2llcmVuJyxcbiAgICBDT1BZX1RPX0NMSVBCT0FSRDogJ0luIFp3aXNjaGVuYWJsYWdlIGtvcGllcmVuJyxcblxuICAgIENUUkxfWk9PTV9JTjogJ1Zlcmdyw7bDn2VybicsXG4gICAgQ1RSTF9aT09NX09VVDogJ1ZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fRVhUOiAnTWF4aW1hbCB2ZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0hPTUU6ICdadXIgdXJzcHLDvG5nbGljaGVuIFBvc2l0aW9uJyxcbiAgICBDVFJMX1pPT01fUE9TOiAnWnVtIGFrdHVlbGxlbiBTdGFuZG9ydCcsXG4gICAgQ1RSTF9aT09NX1NMSURFUjogJ1pvb20gU2xpZGVyJyxcbiAgICBDVFJMX1JFU0VUX1JPVEFUSU9OOiAnUm90YXRpb24gKHRvdWNoLCBhbHQrbW91c2UpIHp1csO8Y2tzZXR6ZW4nLFxuICAgIENUUkxfUE9SVFNJREU6ICdQb3J0c2lkZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUk9VVEVSOiAnUm91dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9FRElUT1I6ICdFZGl0b3IgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX01FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0lORk9QQUdFOiAnSW5mb3NlaXRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BRERJVElPTkFMUEFORUw6ICdQYW5lbCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQUNDT1VOVDogJ0FjY291bnQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1pPT01MRVZFTDogJ1pvb20nLFxuICAgIENUUkxfTU9VU0VDT09SRFM6ICdMb24vTGF0JyxcbiAgICBDVFJMX0dFT1NFQVJDSDogJ1N1Y2hlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgICBDVFJMX09WRVJWSUVXTUFQOiAnw5xiZXJzaWNodHNrYXJ0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfR0VPQk9PS01BUktTOiAnRmF2b3JpdGVuIHZlcndhbHRlbicsXG4gICAgQ1RSTF9TSURFQk9BUkQ6ICdTaWRlYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJCT0FSRDogJ1N0YXJib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQVRUUklCVVRJT046ICdBdHRyaWJ1dGlvbiBhbnplaWdlbicsXG4gICAgQ1RSTF9HUklEOiAnR2l0dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9QRVJNQUxJTks6ICdQZXJtYWxpbmsgZ2VuZXJpZXJlbicsXG4gICAgQ1RSTF9GVUxMU0NSRUVOOiAnVm9sbGJpbGRtb2R1cyBlaW4tL2F1c3NjaGFsdGVuJyxcbiAgICBDVFJMX1BSSU5UOiAnS2FydGUgZXhwb3J0aWVyZW4nLFxuXG4gICAgRURJVE9SOiAnRWRpdG9yJyxcbiAgICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFZGl0aWVyZW4gYmVlbmRlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRWxlbWVudCBsw7ZzY2hlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnRWxlbWVudCBlZGl0aWVyZW4gLyB2ZXJzY2hpZWJlbicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPOiAnWnVyIEF1c3dhaGwgZWluIEVsZW1lbnQgYXVmIGRlciBLYXJ0ZSBhbmtsaWNrZW4uJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdLYXJ0ZW5lbGVtZW50ZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmR3ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG5cbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnUm91dGUgdm9uIGhpZXInLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG5cbiAgICBTVEFSQk9BUkQ6ICdTdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX0xBWUVSOiAnRWJlbmVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ0thcnRlbmVsZW1lbnRlJyxcblxuICAgIFNJREVCT0FSRDogJ1NpZGVib2FyZCcsXG5cbiAgICBST1VURVJfVklFV19BRERSRVNTX0lOUFVUOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfRlJPTV9MQUJFTDogJ1N0YXJ0JyxcbiAgICBST1VURVJfT1ZFUl9MQUJFTDogJ1p3aXNjaGVuemllbCcsXG4gICAgUk9VVEVSX1RPX0xBQkVMOiAnWmllbCcsXG4gICAgUk9VVEVSX0NMRUFSX1RJVExFOiAnTMO2c2NoZW4nLFxuICAgIFJPVVRFUl9DTEVBUl9IVE1MOiAnJyxcbiAgICBST1VURVJfTGFiZWxfSW50ZXJpbTogJ1p3aXNjaGVuemllbCcsXG5cbiAgICBST1VURVJfU1dJVENIOidXZWNoc2VsIHZvbiBTdGFydCB1bmQgWmllbCcsXG4gICAgUk9VVEVSX09WRVI6J1p3aXNjaGVuemllbCBoaW56dWbDvGdlbicsXG4gICAgUk9VVEVSX1BSSU5UOidSb3V0ZW5iZXNjaHJlaWJ1bmcgZHJ1Y2tlbicsXG5cbiAgICBST1VURVJfVklFV19MQUJFTF9ST1VURTogJ1JvdXRlOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0U6ICdFbnRmZXJudW5nOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfVElNRTogJ1plaXQ6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9QUk9GSUxFOiAnUHJvZmlsOicsXG5cbiAgICBST1VURVJfVklFV19BTEVSVF9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbi4nLFxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HOiAnWnVncmlmZiBhdWYgR2VvY29kZXIgZmVobGdlc2NobGFnZW4uJyxcblxuICAgIFJPVVRFUjogJ1JvdXRlcicsXG4gICAgUk9VVEVSX046ICdOb3JkZW4nLFxuICAgIFJPVVRFUl9FOiAnT3N0JyxcbiAgICBST1VURVJfUzogJ1PDvGRlbicsXG4gICAgUk9VVEVSX1c6ICdXZXN0ZW4nLFxuICAgIFJPVVRFUl9ORTogJ05vcmRvc3QnLFxuICAgIFJPVVRFUl9TRTogJ1PDvGRvc3QnLFxuICAgIFJPVVRFUl9TVzogJ1PDvGR3ZXN0JyxcbiAgICBST1VURVJfTlc6ICdOb3Jkd2VzdCcsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8wOiAnVW5iZWthbm50ZSBBbndlaXN1bmdbIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE6ICdHZXJhZGVhdXMgd2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8yOiAnTGVpY2h0IHJlY2h0cyBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMzogJ1JlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNDogJ1NjaGFyZiByZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzU6ICdXZW5kZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzY6ICdTY2hhcmYgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzc6ICdMaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fODogJ0xlaWNodCBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTA6ICdGYWhyZW4gU2llIFJpY2h0dW5nIDxiPiVkPC9iPlsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTEnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlcnN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHp3ZWl0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGRyaXR0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHZpZXJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGbDvG5mdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTYnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzZWNoc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS03JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2llYnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS04JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgYWNodGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTknOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBuZXVudGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLXgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlaW5lciBkZXIgdmllbGVuIE3DtmdsaWNoa2VpdGVuWyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xNTogJ1NpZSBoYWJlbiBJaHIgWmllbCBlcnJlaWNodCcsXG5cbiAgICAnUk9VVEVSXzUuWF9UWVBFXzAnOiAnICVtIGZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMSc6ICcgJW0gZGVtIFN0cmHDn2VudmVybGF1ZiBmb2xnZW5bIGFscyA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzInOiAnIEZhaHJlbiBTaWVbIGF1ZiA8Yj4lczwvYj5dIGxvcycsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8zJzogJyBEYXMgWmllbCBiZWZpbmRldCBzaWNoIDxiPiVtPC9iPicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV80JzogJyBXZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzUnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hdWZmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNic6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWFiZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzcnOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzgnOiAnICVtIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV85JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMCc6ICcgJW0gZmFocmVuIHVtIGF1ZiBkZXIgU3RyYcOfZSB6dSBibGVpYmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzExJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMic6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTMnOiAnICVtIGZhaHJlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTQnOiAnIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG5cbiAgICAnUk9VVEVSXzUuWF9NT0RfMCcgIDogJ1V0dXJuJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMScgIDogJ1NjaGFyZiByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8yJyAgOiAnUmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMycgIDogJ0xlaWNodCByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF80JyAgOiAnR2VyYWRlYXVzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNScgIDogJ0xlaWNodCBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzYnICA6ICdMaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzcnICA6ICdTY2hhcmYgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF84JyAgOiAnaW4gZGVyIE7DpGhlJyxcblxuICAgIFJPVVRFUl9GUk9NOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9UTzogJ1ppZWwnLFxuICAgIFJPVVRFUl9GSU5EX1JPVVRFOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfTE9DX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG4gICAgUk9VVEVSX1JPVVRFREVTQzogJ1JvdXRlbmJlc2NocmVpYnVuZycsXG4gICAgUk9VVEVSX1JPVVRFTkFNRTogJ1JvdXRlJyxcbiAgICBST1VURVJfRElTVEFOQ0U6ICdEaXN0YW56JyxcbiAgICBST1VURVJfVElNRTogJ1plaXQnLFxuICAgIFJPVVRFUl9SRVZfR0VPQ09ESU5HOiAnRXJtaXR0bGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkc6ICdGZWhsZXIgYmVpbSBFcm1pdHRlbG4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9TRUFSQ0hJTkc6ICdTdWNoZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfU0VBUkNISU5HOiAnRmVobGVyIGJlaW0gU3VjaGVuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfQ0FMQ19ST1VURTogJ0JlcmVjaG5lIFJvdXRlLi4uJyxcbiAgICBST1VURVJfRVJST1JfQ0FMQ19ST1VURTogJ0ZlaGxlciBiZWltIEJlcmVjaG5lbiBkZXIgUm91dGUnLFxuXG4gICAgTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZScsXG4gICAgTUVBU1VSRVRPT0xTX0lORk86ICdXw6RobGVuIFNpZSB3ZWl0ZXIgdW50ZW4gZWluZW4gTWVzc3R5cCBhdXMgdW5kIHN0YXJ0ZW4gU2llIGRpZSBNZXNzdW5nIGR1cmNoIGRhcyBLbGlja2VuIGF1ZiBkZXIgS2FydGUuJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMOiAnKEVpbnplbG5lIE1lc3N1bmdlbiBrw7ZubmVuIG1pdCBlaW5lbSBEb3BwZWxrbGljayBiZWVuZGV0IHdlcmRlbi4pJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ1JhZGl1cyBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kIG1lc3NlbicsXG5cbiAgICBHRU9CT09LTUFSS1NfUExBQ0VIT0xERVI6ICdOZXVlIEJlemVpY2hudW5nJyxcblxuICAgIElORk9QQUdFOiAnSW5mb3JtYXRpb25lbicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnUGFuZWwnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdQYW5lbCBhbnplaWdlbicsXG4gICAgQUNDT1VOVDogJ0FjY291bnQnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnQWNjb3VudCBhbnplaWdlbicsXG5cbiAgICBTRUFSQ0hfTk9UX0ZPVU5EOiAnRGllIExva2F0aW9uIGtvbm50ZSBuaWNodCBnZWZ1bmRlbiB3ZXJkZW4uIEJpdHRlIHZlcnN1Y2hlbiBTaWUgZWluZSBhbmRlcmUgRWluZ2FiZS4nLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJsYW5ndWFnZSBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuaTE4bjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGUuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lclwiO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHNpZGVib2FyZCBzdHJ1Y3R1cmVzLiBQcm92aWRlcyBzdGFuZGFyZCBjb25maWd1cmF0aW9ucyB3aGljaCBhcmUgZXF1YWwgZm9yIGVhY2ggc2lkZWJvYXJkIGVsZW1lbnQuXG4gKi9cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICAgIG9wdGlvbnMgIG1pc2MgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBleHREaXY6IGZhbHNlLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogJ3NpZGVib2FyZCcsXG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICAvL2FjdGl2ZSBJZGVudGlmaWVyICh3aGljaCBzaWRlIGlzIHRoaXMgZWxlbWVudCBvbj8pXG4gICAgLy9jc3NuYW1lIG5lZWRlZCB0byBzZXQgdGhlIGNzcyBjbGFzcyBjb3JyZWN0bHlcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSAnUG9ydHNpZGUnO1xuICAgICAgICB0aGlzLmNzc25hbWUgPSAncG9ydHNpZGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gJ1N0YXJib2FyZCc7XG4gICAgICAgIHRoaXMuY3NzbmFtZSA9ICdzdGFyYm9hcmQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy90aGlzLmNzc25hbWUgPSB0aGlzLmlkZW50aWZpZXIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB0aGlzLmlkZW50aWZpZXIuc2xpY2UoMSk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9ucy50aXBMYWJlbCA9IHRoaXMub3B0aW9ucy50aXBMYWJlbCB8fCB0aGlzLm9wdGlvbnMuaGVhZGxpbmUgfHwgbGFuZ0NvbnN0YW50cy5DVFJMX1NJREVCT0FSRDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3Bpbm5lciA9IHVuZGVmaW5lZDtcbiAgICAvLyBtYWluc3RydWN0dXJlIGVsZW1lbnRzXG4gICAgdGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGl0bGVCYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkbGluZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcFRvb2xiYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYm90dG9tVG9vbGJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXR1c0JhciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZpZXdUcmlnZ2VyQmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXVzZWRWaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jcmVhdGUgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0IHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuICAvLyBBZGQgbWV0aG9kc1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2ljIGh0bWwtZWxlbWVudHMgZm9yIHRoZSBzaWRlYm9hcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgJ3RydWUnIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIGluaXRDbGFzcyxcbiAgICAgICAgICB0aXRsZUJ1dHRvbkJhcixcbiAgICAgICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICAgICBjYXBpdGFsaXplZE5hbWUsXG4gICAgICAgICAgaGlkZUJ1dHRvbixcbiAgICAgICAgICBjYWNoaW5nO1xuXG4gICAgICBjYWNoaW5nID0gdGhpcy5vcHRpb25zLmNhY2hpbmc7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgLy8gRG8gbm90IGhpZGUgd2hlbiBpdCBpcyBpbml0aWFsaXplZCBvcGVuLCBvciBpbiBhbiBleHRlcm5hbCBkaXZcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIGluaXRDbGFzcyA9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzEnKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdENsYXNzID0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzAnKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICQodGhpcy5idXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gW25vdGVdIFwidGhpcy5ibHVyKClcIiBkb2VzIG5vdCB3b3JrIGluIElFLWZ1bGxzY3JlZW4tbW9kZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjYXBpdGFsaXplZE5hbWUgPT0gXCJSb3V0ZXJcIiB8fCBjYXBpdGFsaXplZE5hbWUgPT0gXCJNZWFzdXJlXCIgfHwgY2FwaXRhbGl6ZWROYW1lID09IFwiRWRpdG9yXCIpe1xuICAgICAgICAgICAgICBzZWxmLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi50aXRsZSA9IHRoaXMub3B0aW9ucy50aXBMYWJlbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgICQodGhpcy5jb250YWluZXIpLmFkZENsYXNzKCdjNGctJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJyAnICsgJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jb250YWluZXInICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArIGluaXRDbGFzcyk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy0nICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNvbnRyb2wnICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgaW5pdENsYXNzKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgZGltZW5zaW9uc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcyNTBweCc7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTE5MjBweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xMDAlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xOTIwcHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTAwJSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlIGNvbnRhaW5lclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmV4dERpdikuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgICAgICAvLyAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICQoJyMnICsgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFRhcmdldCgpICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9PVkVSTEFZQ09OVEFJTkVSX1NFKS5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGNvbnRlbnQtYXJlYVxuICAgICAgLy9cbiAgICAgIC8vIFdyYXBwZXJcbiAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctd3JhcHBlcic7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgLy8gVGl0bGViYXJcbiAgICAgIHRoaXMudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudGl0bGVCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy10aXRsZWJhcic7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUJhcik7XG5cbiAgICAgIC8vIFRyaWdnZXJiYXJcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy12aWV3dHJpZ2dlcmJhcic7XG5cbiAgICAgIC8vIFRvcC1Ub29sYmFyXG4gICAgICB0aGlzLnRvcFRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctdG9wLXRvb2xiYXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbnRlbnQtQ29udGFpbmVyXG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY29udGVudC1jb250YWluZXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBjb250ZW50IGhlYWRsaW5lXG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb250ZW50SGVhZGxpbmUuY2xhc3NOYW1lID0gJ2NvbnRlbnRIZWFkbGluZSc7XG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRIZWFkbGluZSk7XG5cbiAgICAgIC8vIEJvdHRvbS1Ub29sYmFyXG4gICAgICB0aGlzLmJvdHRvbVRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1ib3R0b20tdG9vbGJhciBjNGctY2xvc2UnLFxuICAgICAgICAgIHRhcmdldDogdGhpcy53cmFwcGVyXG4gICAgICB9KTtcblxuICAgICAgIC8vIFN0YXR1c2JhclxuICAgICAgdGhpcy5zdGF0dXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctc3RhdHVzYmFyIGM0Zy1jbG9zZSc7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zdGF0dXNCYXIpO1xuXG4gICAgICAvLyBBZGQgc3Bpbm5lclxuICAgICAgdGhpcy5zcGlubmVyID0gbmV3IFNwaW5uZXIoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udGVudENvbnRhaW5lcixcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuTEFSR0VcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGaWxsIHRpdGxlYmFyXG4gICAgICAvL1xuICAgICAgLy8gSGVhZGxpbmVcbiAgICAgIHRoaXMuaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLmhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctaGVhZGxpbmUnO1xuICAgICAgdGhpcy5oZWFkbGluZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaGVhZGxpbmU7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGxpbmUpO1xuICAgICAgLy8gQnV0dG9uYmFyXG4gICAgICB0aXRsZUJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGVCdXR0b25CYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0wgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWJ1dHRvbmJhcic7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uQmFyKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAvLyBIaWRlYnV0dG9uXG4gICAgICAgIGhpZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaGlkZUJ1dHRvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUE9SVFNJREVfSElERTtcbiAgICAgICAgaGlkZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuSElERTtcbiAgICAgICAgJChoaWRlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuY2xvc2UodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGl0bGVCdXR0b25CYXIuYXBwZW5kQ2hpbGQoaGlkZUJ1dHRvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIENsb3NlYnV0dG9uXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jbG9zZSc7XG4gICAgICBjbG9zZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ0xPU0U7XG4gICAgICAkKGNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRpdGxlQnV0dG9uQmFyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgLy9BZGQgc3Bpbm5lciBmb3IgbGVmdCBzaWRlZCBzaWRlYm9hcmQgZWxlbWVudHNcbiAgICAgIHRoaXMuc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnRlbnRDb250YWluZXIsXG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkxBUkdFXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGV4dGVybmFsIERJViBhbmQgZGVmYXVsdCBzdGF0ZVxuICAgICAgLy8gY2F0Y2ggdG91Y2ggZXZlbnRzIGFuZCBzdG9wIHRoZWlyIHByb3BhZ2F0aW9uXG4gICAgICAvLyBvdGhlcndpc2UgdG91Y2gtc2Nyb2xsaW5nIHdpbGwgYmUgc3RvcHBlZCBieSBvbDNcbiAgICAgICQodGhpcy5jb250YWluZXIpLm9uKCd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHRoZSB1cGRhdGUgbWV0aG9kIHRvIHRoZSBtYXAtcmVzaXplIGV2ZW50XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAub24oJ2NoYW5nZTpzaXplJywgdGhpcy51cGRhdGUsIHRoaXMpO1xuXG4gICAgICAvLyBTaG93IG9wZW4gaWYgZGVzaXJlZFxuICAgICAgaWYgKCh0aGlzLm9wdGlvbnMuZGVmYXVsdE9wZW4pIHx8ICh0aGlzLm9wdGlvbnMuY2FjaGluZyAmJiAodXRpbHMuZ2V0VmFsdWUodGhpcy5vcHRpb25zLm5hbWUpID09ICcxJykpKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJjcmVhdGVcIlxuXG4gICAgLyoqXG4gICAgICogICBVcGRhdGUgdGhlIHNpZGVib2FyZHMgaHRtbC1lbGVtZW50c1xuICAgICAqICAgcmVzaXplcyB0aGUgY29udGVudC1jb250YWluZXJcbiAgICAgKiAgIGFuZCB0aGUgdG9wLXRvb2xiYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2V2ZW50LW9iamVjdH0gIG9wdF9ldmVudCAgKm9wdGlvbmFsKiAgSnVzdCBuZWVkZWQgYnkgdGhlIG9sLWJpbmQtbWV0aG9kLFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0IG5vdCB1c2VkIGluIHRoZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9wdF9ldmVudCkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQsXG4gICAgICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGg7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvKlxuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIGNhcGl0YWxpemVkTmFtZSA9IHV0aWxzLmNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm9wdGlvbnMubmFtZSk7XG4gICAgICB9Ki9cblxuICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0ID0gJCh0aGlzLndyYXBwZXIpLmhlaWdodCgpIC0gKCQodGhpcy50aXRsZUJhcikub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKHRoaXMuc3RhdHVzQmFyKS5vdXRlckhlaWdodCh0cnVlKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gJiYgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBpZiAodGhpcyAhPT0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG9wLVRvb2xiYXJcbiAgICAgIGlmICh0aGlzLnRvcFRvb2xiYXIpIHtcbiAgICAgICAgICBpZiAodGhpcy50b3BUb29sYmFyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvLyB0aGlzLnRvcFRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgIHRoaXMudG9wVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCAtPSAkKHRoaXMudG9wVG9vbGJhcikub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b3BUb29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20tdG9vbGJhclxuICAgICAgaWYgKHRoaXMuYm90dG9tVG9vbGJhcikge1xuICAgICAgICAgIGlmICh0aGlzLmJvdHRvbVRvb2xiYXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21Ub29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IC09ICQodGhpcy5ib3R0b21Ub29sYmFyKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbVRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRlbnQtY29udGFpbmVyXG4gICAgICAkKHRoaXMuY29udGVudENvbnRhaW5lcikub3V0ZXJIZWlnaHQoY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0KTtcblxuICAgICAgLy8gQ29ycmVjdCB3aWR0aFxuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlclt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHNlbGYub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy9vbmx5IG1vdmUgdGhlIHRvZ2dsZSBidXR0b24gb24gc3RhcmJvYXJkIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgLy8gZW5kIG9mIFwidXBkYXRlXCJcblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoaXMgc2lkZWJvYXJkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICpvcHRpb25hbCogb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIGluaXRpYWxpemUtZnVuY3Rpb24gaWYgaXQgZXhpc3RzXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAndHJ1ZScgYW4gc3VjY2Vzc1xuICAgICAqL1xuICAgIG9wZW46IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIGNvbnRhaW5lck9mZnNldFdpZHRoLFxuICAgICAgICAgIHNlbGY7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBDYWxsIGluaXRpYWxpemUtZnVuY3Rpb25zLCBpZiBleGlzdGVudFxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRoaXMuaW5pdChvcHRfb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FsbCBwcmVPcGVuRnVuY3Rpb25zXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJlT3BlbkZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJlT3BlbkZ1bmN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIC8vIE5vdCBhdmFpbGFibGUgb24gZXh0ZXJuYWwgZGl2c1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW5ub3QgdXNlIHRoaXMgZnVuY3Rpb24gb24gZXh0ZXJuYWwgZW1iZWRkZWQgc2lkZWJvYXJkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY2xvc2Ugb3RoZXIgYWN0aXZlIHNpZGVib2FyZCBvbiB0aGlzIHNpZGVcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXS5jbG9zZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzbGlkZSBvdGhlciBlbGVtZW50cyB3aGVuIG5vIG90aGVyIHNpZGVib2FyZCB3YXMgYWN0aXZlIG9uIHRoaXMgc2lkZVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW3RoaXMub3B0aW9ucy5kaXJlY3Rpb24gKyBcIlNsaWRlRWxlbWVudHNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moc2VsZi5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIDApO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoaXMgYXMgYWN0aXZlIFNpZGVib2FyZFxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXM7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYSB2aWV3IG5lZWRzIHRvIGJlIHJlYWN0aXZhdGVkXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKHRoaXMuc3RhdHVzQmFyKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgJCh0aGlzLnN0YXR1c0JhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJCh0aGlzLmJvdHRvbVRvb2xiYXIpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAkKHRoaXMuYm90dG9tVG9vbGJhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhY2hpbmcpIHtcbiAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCBwb3N0T3BlbkZ1bmN0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucG9zdE9wZW5GdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucG9zdE9wZW5GdW5jdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgLy8gZW5kIG9mIFwib3BlblwiXG5cbiAgICBpc09wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhpcyBzaWRlYm9hcmQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBvcHRfaGlkZSAgICAgICAgICAgICAgICpvcHRpb25hbCogQ2hvb3NlIGlmIHRoaXMgZnVuY3Rpb24gc2hvdWxkIHRyaWdnZXIgfHByZUhpZGVGdW5jdGlvbnxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGVhZCBvZiB8cHJlQ2xvc2VGdW5jdGlvbnwuIERlZmF1bHQgaXMgfGZhbHNlfC5cbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQgICpvcHRpb25hbCogSW5kaWNhdGVzIGlmIGFub3RoZXIgc2lkZWJvYXJkIGVsZW1lbnQgd2lsbCBiZSBvcGVuZWQgaW5zdGVhZC5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyB8ZmFsc2V8LlxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgIHx0cnVlfCBvbiBzdWNjZXNzLlxuICAgICAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbiAob3B0X2hpZGUsIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQpIHtcbiAgICAgIHZhciBjb250YWluZXJPZmZzZXRXaWR0aCxcbiAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgIGRpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG5cbiAgICAgIGlmIChvcHRfaGlkZSApIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZUhpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucHJlSGlkZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgLy8gTm90IGF2YWlsYWJsZSBvbiBleHRlcm5hbCBkaXZzXG4gICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbm5vdCB1c2UgdGhpcyBmdW5jdGlvbiBvbiBleHRlcm5hbCBlbWJlZGRlZCBzaWRlYm9hcmQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gIT09IHRoaXMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJy1lbGVtZW50ICgnICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnKSBpcyBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuY3NzKGRpcmVjdGlvbiwgLWNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmNzcyhkaXJlY3Rpb24sIDApO1xuXG4gICAgICAgIGlmICghb3B0X29wZW5PdGhlclNpZGVib2FyZCkge1xuICAgICAgICAgIC8vIHNsaWRlIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKGRpcmVjdGlvbiwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoaWRlIGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgdmlldyBuZWVkcyB0byBiZSBkZWFjdGl2YXRlZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVWaWV3LmRlYWN0aXZhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIFNpZGVib2FyZGVudHJ5XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWNoaW5nKSB7XG4gICAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNsb3NlXCJcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGlzIHNpZGVib2FyZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3MuXG4gICAgICovXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAob3B0X2hpZGUpIHtcbiAgICAgIHZhciBjYXBpdGFsaXplZE5hbWU7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKG9wdF9oaWRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICB9LCAvLyBlbmQgb2YgXCJ0b2dnbGVcIlxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1dHRvbiB3aGljaCBjaGFyYWN0ZXJpc3RpY3MgYXJlIGRlZmluZWQgYnkgdGhlIG9wdGlvbnMgcGFyYW1ldGVyXG4gICAgICogVGhlc2Ugb3B0aW9ucyBpbmNsdWRlIGUuZy4gdGhlIHRhcmdldCBjb250YWluZXIgd2hlcmUgdGhlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIGFuZCB0aGUgY2xpY2sgYWN0aW9uIG9mIHRoZSBidXR0b25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICBvcHRfb3B0aW9ucyAgVGhlIGJ1dHRvbiBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1ha2VCdXR0b246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICBidXR0b247XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIHRpcExhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgICAgICBjbGlja0FjdGlvbjogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgICBvcHRpb25zLmNsYXNzTmFtZSA9ICcgJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLm9wdGlvbnMubmFtZSArICctYnV0dG9uJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgaWYob3B0aW9ucy5pZCkge1xuICAgICAgICBidXR0b24uaWQgPSBvcHRpb25zLmlkO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGlwTGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IG9wdGlvbnMudGlwTGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmxhYmVsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQob3B0aW9ucy5sYWJlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jbGlja0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAkKGJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9ucy5jbGlja0FjdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgICQob3B0aW9ucy50YXJnZXQpLmFwcGVuZChidXR0b24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0sIC8vIGVuZCBvZiBcIm1ha2VCdXR0b25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkU2VjdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkU2VjdGlvbjogZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIC8vIHRyeSB0byBjcmVhdGUgdGhlIG5ldyBzZWN0aW9uXG4gICAgICB0cnkge1xuICAgICAgICBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnR5cGUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBjcmVhdGUgc2VjdGlvbi4gXCInICsgb3B0aW9ucy50eXBlICsgJyBpcyBub3QgYSB2YWxpZCBIVE1MLW5vZGUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcblxuICAgICAgLy8gdHJ5IHRvIGFwcGVuZCB0aGUgc2VjdGlvbiB0byB0aGUgZ2l2ZW4gdGFyZ2V0XG4gICAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnRhcmdldC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZ2V0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgfHwgZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBzZWN0aW9uLnNldEVsZW1lbnQgPSBmdW5jdGlvbiAobmV3RWxlbWVudCkge1xuICAgICAgICBpZiAobmV3RWxlbWVudCAmJiB0eXBlb2YgbmV3RWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoIShlbGVtZW50ICYmIGVsZW1lbnQgPT09IG5ld0VsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICAvLyBhZGQgdG8gc2VjdGlvbnMtYXJyYXlcbiAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sIC8vIGVuZCBvZiBcImFkZFNlY3Rpb25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkVmlldyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRWaWV3OiBmdW5jdGlvbiAob3B0aW9ucywgb3B0X3ZpZXdTY29wZSkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICB2aWV3U2NvcGUsXG4gICAgICAgICAgYWRkaXRpb25hbFRyaWdnZXJDbGFzcyxcbiAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgIHZpZXc7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdmlld1Njb3BlID0gb3B0X3ZpZXdTY29wZSB8fCB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAvLyBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHVuZGVmaW5lZCwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IHtvcHRfdGFyZ2V0OiBbc3RyaW5nfGh0bWxPYmplY3RdLCBvcHRfY2xhc3NOYW1lOiBbc3RyaW5nXSwgb3B0X3RpcExhYmVsOiBbc3RyaW5nXX1cbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXSwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IFt7c2VjdGlvbjogW3NlY3Rpb25PYmplY3RdLCBlbGVtZW50OiBbZWxlbWVudE9iamVjdF19XVxuICAgICAgICBpbml0RnVuY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBhZGQgYSB2aWV3IHdpdGhvdXQgYSBuYW1lIChvZiB0eXBlIFwic3RyaW5nXCIpLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSB7fTtcblxuICAgICAgdmlldy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgdmlldy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgdmlldy5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfb3BlblNpZGVib2FyZCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBpZiAob3B0aW9ucy50cmlnZ2VyQ29uZmlnLndpdGhIZWFkbGluZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gb3B0aW9ucy50cmlnZ2VyQ29uZmlnLnRpcExhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3BlbiBTaWRlYm9hcmQgaWYgY2xvc2VkXG4gICAgICAgIGlmIChvcHRfb3BlblNpZGVib2FyZCAmJiAhc2VsZi5pc09wZW4oKSkge1xuICAgICAgICAgIHNlbGYub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVhY3RpdmF0ZSBjdXJyZW50IGFjdGl2ZVZpZXcsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1Njb3BlLmFjdGl2ZVZpZXcgPT09ICdvYmplY3QnICYmIHZpZXdTY29wZS5hY3RpdmVWaWV3ICE9PSB2aWV3KSB7XG4gICAgICAgICAgdmlld1Njb3BlLmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdTY29wZS5hY3RpdmVWaWV3ID0gdmlldztcblxuICAgICAgICAvLyBIYW5kbGUgc3ViLXZpZXdzXG4gICAgICAgIGlmICh2aWV3LmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgaW5pdGlhbGl6ZS1mdW5jdGlvbnMsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICghdmlldy5pbml0aWFsaXplZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZpZXcuaW5pdGlhbGl6ZWQgPSBvcHRpb25zLmluaXRGdW5jdGlvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGVsZW1lbnRzIGluIGdpdmVuIHNlY3Rpb25zXG4gICAgICAgIGlmIChvcHRpb25zLnNlY3Rpb25FbGVtZW50cyAmJiBvcHRpb25zLnNlY3Rpb25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNlY3Rpb25FbGVtZW50c1tpXS5zZWN0aW9uLnNldEVsZW1lbnQob3B0aW9ucy5zZWN0aW9uRWxlbWVudHNbaV0uZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRyaWdnZXItc3RhdGUsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBhY3RpdmF0ZSBmdW5jdGlvbiwgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHZpZXcuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfcGF1c2UpIHtcblxuICAgICAgICB2aWV3LnBhdXNlZCA9IG9wdF9wYXVzZSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIHZpZXdTY29wZS5hY3RpdmVWaWV3ID09PSAnb2JqZWN0JyAmJiB2aWV3U2NvcGUuYWN0aXZlVmlldyA9PT0gdmlldykge1xuICAgICAgICAgIGlmICh0cmlnZ2VyICYmICF2aWV3LnBhdXNlZCkge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5yZW1vdmVDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhhbmRsZSBzdWItdmlld3NcbiAgICAgICAgICBpZiAodmlldy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSh2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbCBkZWFjdGl2YXRlIGZ1bmN0aW9uLCBpZiBleGlzdGVudFxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50cmlnZ2VyQ29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zLnRyaWdnZXJDb25maWcgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnZpZXdUcmlnZ2VyQmFyLFxuICAgICAgICAgIHRpcExhYmVsOiBvcHRpb25zLm5hbWUsXG4gICAgICAgIH0sIG9wdGlvbnMudHJpZ2dlckNvbmZpZyk7XG5cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsaWNrQWN0aW9uID0gdmlldy5hY3RpdmF0ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyAnICsgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgYWRkaXRpb25hbFRyaWdnZXJDbGFzcztcbiAgICAgICAgLy8gQFRPRE8gY2hlY2s6IHRyaWdnZXIgPSB0aGlzLm1ha2VCdXR0b24ob3B0aW9ucy50cmlnZ2VyQ29uZmlnKTtcbiAgICAgICAgdHJpZ2dlciA9IHRoaXMubWFrZUJ1dHRvbihvcHRpb25zLnRyaWdnZXJDb25maWcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZpZXdzLnB1c2godmlldyk7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9IC8vIGVuZCBvZiBcImFkZFZpZXdcIlxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFNpZGVib2FyZCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxudmFyIGM0ZyA9IHRoaXMuYzRnO1xuXG5pbXBvcnQge1NpZGVib2FyZH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC1zaWRlYm9hcmRcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0Jhc2VsYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1iYXNlbGF5ZXJzd2l0Y2hlclwiO1xuaW1wb3J0IHtMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1sYXllcnN3aXRjaGVyXCI7XG5pbXBvcnQge0N1c3RvbXRhYn0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tY3VzdG9tdGFiXCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICAgICAgb3B0X29wdGlvbnMgICpvcHRpb25hbCogbWlzYyBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuU3RhcmJvYXJkID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBleHREaXY6IGZhbHNlLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogJ3N0YXJib2FyZCcsXG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICBmaWx0ZXI6IGZhbHNlXG4gICAgfSwgb3B0X29wdGlvbnMpO1xuXG4gICAgLy9jNGcubWFwcy5ob29rLnN0YXJib2FyZF9sb2FkUGx1Z2lucyA9IFtdO1xuXG4gICAgLy9zZXQgaGVhZGxpbmUsIHNpbmNlIHRoZSBkZWZpbml0aW9uIGFib3ZlIGRvZXMgbm90IHdvcmsgZm9yIGhlYWRsaW5lXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaGVhZGxpbmUgfHwgdGhpcy5vcHRpb25zLmhlYWRsaW5lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy90aGlzLm9wdGlvbnMuaGVhZGxpbmUgPSBjNGcubWFwcy5jb25zdGFudC5pMThuLlNUQVJCT0FSRDtcbiAgICB9XG5cbiAgICB0aGlzLmhvb2tfbGF5ZXJzd2l0Y2hlcl9sb2FkZWQgPSB0aGlzLmhvb2tfbGF5ZXJzd2l0Y2hlcl9sb2FkZWQgfHwgW107XG5cbiAgICAvL2NhbGwgU2lkZWJvYXJkIChwYXJlbnQpIGNvbnN0cnVjdG9yXG4gICAgU2lkZWJvYXJkLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5TdGFyYm9hcmQsIFNpZGVib2FyZCk7XG5cbiAgLy8gQWRkIG1ldGhvZHNcbiAgYzRnLm1hcHMuY29udHJvbC5TdGFyYm9hcmQucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5TdGFyYm9hcmQucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBiYXNpYyBodG1sLWVsZW1lbnRzIGZvciB0aGUgc3RhcmJvYXJkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICd0cnVlJyBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgcGx1Z2luLFxuICAgICAgICAgIHJlbmRlckxheWVydHJlZSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgc2VsZixcbiAgICAgICAgICBmblJlbmRlcixcbiAgICAgICAgICBkaXNwbGF5TGF5ZXJzd2l0Y2hlciA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIExvYWQgU3RhcmJvYXJkIHBsdWdpbnNcbiAgICAgIHRoaXMucGx1Z2lucyA9IHt9O1xuXG4gICAgICAvLyBjcmVhdGVzIGFuZCByZW5kZXJzIHRoZSBzdGFyYm9hcmQgcGx1Z2luc1xuICAgICAgZm5SZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGxheWVycyBhbmQgY2hlY2sgaWYgdGhlcmUgaXMgYW55IG5vcm1hbCBsYXllcnRyZWUgdG8gcmVuZGVyXG4gICAgICAgIGZvciAoa2V5IGluIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnMpIHtcbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmFyckxheWVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBsYXllciA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNba2V5XTtcbiAgICAgICAgICAgIGlmICghbGF5ZXIucmVuZGVyU3BlY2lhbCkge1xuICAgICAgICAgICAgICByZW5kZXJMYXllcnRyZWUgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVuZGVyTGF5ZXJ0cmVlKSB7XG4gICAgICAgICAgLy8gZG8gbm90IGRpc3BsYXkgbGF5ZXJzd2l0Y2hlciBpZiB0aGVyZSBpcyBub3RoaW5nIHRvIHN3aXRjaFxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzKSB7XG4gICAgICAgICAgICBmb3IobGV0IGlkIGluIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnMpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbaWRdLmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGF5ZXJzd2l0Y2hlciA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtIGxvYWQgXCJMYXllcnN3aXRjaGVyXCJcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sYXllclN3aXRjaGVyQ3JlYXRlICYmIHJlbmRlckxheWVydHJlZSAmJiBkaXNwbGF5TGF5ZXJzd2l0Y2hlcikge1xuICAgICAgICAgIHNlbGYucGx1Z2lucy5sYXllcnN3aXRjaGVyID0gbmV3IExheWVyc3dpdGNoZXIoc2VsZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIGhvb2sgdG8gbG9hZCBhZGRpdGlvbmFsIHN0YXJib2FyZCB0YWJzIChsYXllcnMpXG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHNlbGYuaG9va19sYXllcnN3aXRjaGVyX2xvYWRlZCk7XG5cblxuICAgICAgICAvLyAtIGNoZWNrICYgbG9hZCBvdGhlciBTdGFyYm9hcmQtcGx1Z2lucyAodmlhIGhvb2spXG4gICAgICAgIC8vIGNhbGxlZCBmdW5jdGlvbnMgaGF2ZSB0byBhZGQgdGhlbXNlbHZlcyB0byB0aGlzLnBsdWdpbnNcbiAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5zdGFyYm9hcmRfbG9hZFBsdWdpbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5zdGFyYm9hcmRfbG9hZFBsdWdpbnMsIHNlbGYpO1xuICAgICAgICAgIC8vIC0gYWN0aXZhdGUgbmV3IHBsdWdpbnMgaWYgdGhleSBhcmUgbm90IGFjdGl2YXRlZCBhbHJlYWR5XG4gICAgICAgICAgZm9yIChwbHVnaW4gaW4gc2VsZi5wbHVnaW5zKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBwbHVnaW4gaXMgYSByZWFsIHBsdWdpbiBhbmQgbm90IGEgcHJvcGVydHkgb2YgdGhlIG9iamVjdCBwcm90b3R5cGVcbiAgICAgICAgICAgIGlmIChzZWxmLnBsdWdpbnMuaGFzT3duUHJvcGVydHkocGx1Z2luKSkge1xuICAgICAgICAgICAgICBzZWxmLnBsdWdpbnNbcGx1Z2luXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0gbG9hZCBcIkJhc2VsYXllcnN3aXRjaGVyXCJcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5iYXNlbGF5ZXJTd2l0Y2hlckNyZWF0ZSkge1xuICAgICAgICAgIHNlbGYucGx1Z2lucy5iYXNlbGF5ZXJzd2l0Y2hlciA9IG5ldyBCYXNlbGF5ZXJzd2l0Y2hlcihzZWxmKTtcbiAgICAgICAgICBzZWxmLnBsdWdpbnMuYmFzZWxheWVyc3dpdGNoZXIuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5wbHVnaW5zLmxheWVyc3dpdGNoZXIpIHtcbiAgICAgICAgICBzZWxmLnBsdWdpbnMubGF5ZXJzd2l0Y2hlci5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBlbmQgb2YgXCJmblJlbmRlcigpXCJcblxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyc19sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19sYXllcl9sb2FkZWQucHVzaChmdW5jdGlvbihsYXllcklkcykge1xuICAgICAgICAgIHNlbGYuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgZm5SZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBsYXllcnMgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGZuUmVuZGVyKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG5cblxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIGVuZCBvZiBcImluaXRcIlxuXG4gIH0pOyAvLyBFbmQgb2YgYWRkIG1ldGhvZHNcbn0oalF1ZXJ5LCBjNGcpKTtcblxuZXhwb3J0IHZhciBTdGFyYm9hcmQgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuU3RhcmJvYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmQuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luID0gdGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbiB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICAgIHN0YXJib2FyZFxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4uQmFzZWxheWVyc3dpdGNoZXIgPSBmdW5jdGlvbiAoc3RhcmJvYXJkKSB7XG4gICAgaWYgKCFzdGFyYm9hcmQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGluaXRpYWxpemUgQmFzZWxheWVyc3dpdGNoZXIgd2l0aG91dCBhIHN0YXJib2FyZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5iYXNlbGF5ZXJzID0ge307XG5cbiAgICB0aGlzLnN0YXJib2FyZCA9IHN0YXJib2FyZDtcbiAgICB0aGlzLnByb3h5ID0gc3RhcmJvYXJkLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eTtcblxuICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5sb2FkQ29udGVudCgpO1xuICB9O1xuXG4gIC8vIEFkZCBtZXRob2RzXG4gIGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkJhc2VsYXllcnN3aXRjaGVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkJhc2VsYXllcnN3aXRjaGVyLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtjcmVhdGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgY29udGVudFdyYXBwZXIsXG4gICAgICAgICAgY29udGVudEhlYWRsaW5lLFxuICAgICAgICAgIGNvbnRlbnRJbmZvO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgY29udGVudEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMuYmFzZWxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIpO1xuICAgICAgY29udGVudEhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjb250ZW50SGVhZGxpbmUnO1xuICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRsaW5lKTtcblxuICAgICAgdGhpcy5jb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmNvbnRlbnREaXYuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSO1xuICAgICAgY29udGVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0aGlzLmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudEluZm8pO1xuICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RGl2KTtcblxuICAgICAgc2VsZi52aWV3ID0gc2VsZi5zdGFyYm9hcmQuYWRkVmlldyh7XG4gICAgICAgIG5hbWU6ICdsYXllcnN3aXRjaGVyJyxcbiAgICAgICAgdHJpZ2dlckNvbmZpZzoge1xuICAgICAgICAgIHRpcExhYmVsOiAodGhpcy5zdGFyYm9hcmQub3B0aW9ucy5iYXNlbGF5ZXJTd2l0Y2hlclRpdGxlIHx8IGxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUiksXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUixcbiAgICAgICAgICB3aXRoSGVhZGxpbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25FbGVtZW50czogW1xuICAgICAgICAgIHtzZWN0aW9uOiBzZWxmLnN0YXJib2FyZC5jb250ZW50Q29udGFpbmVyLCBlbGVtZW50OiBjb250ZW50V3JhcHBlcn0sXG4gICAgICAgICAge3NlY3Rpb246IHNlbGYuc3RhcmJvYXJkLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHNlbGYuc3RhcmJvYXJkLnZpZXdUcmlnZ2VyQmFyfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFthY3RpdmF0ZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudmlldy5hY3RpdmF0ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW3NldENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBuZXdDb250ZW50ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0Q29udGVudDogZnVuY3Rpb24gKG5ld0NvbnRlbnQpIHtcbiAgICAgIGlmIChuZXdDb250ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHRoaXMuY29udGVudERpdi5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50RGl2LnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCB0aGlzLmNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY29udGVudERpdi5pbm5lckhUTUw7XG4gICAgfSxcblxuICAgIGxvYWRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBmbkRyYXdDb250ZW50O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc3RhcmJvYXJkLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBmbkRyYXdDb250ZW50ID0gZnVuY3Rpb24gKGJhc2VsYXllcklkcykge1xuICAgICAgICBzZWxmLmJhc2VMYXllckNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgJChzZWxmLmJhc2VMYXllckNvbnRyb2wpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfQkFTRUxBWUVSVFJFRSk7XG4gICAgICAgIHNlbGYuc2V0Q29udGVudChzZWxmLmJhc2VMYXllckNvbnRyb2wpO1xuXG4gICAgICAgIHNlbGYuYWRkSXRlbXMoYmFzZWxheWVySWRzLCBzZWxmLmJhc2VMYXllckNvbnRyb2wpO1xuXG4gICAgICAgIHNlbGYuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLnN0YXJib2FyZC5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgc2VsZi5zdGFyYm9hcmQudXBkYXRlKCk7XG4gICAgICB9IC8vIGVuZCBvZiBcImZuRHJhd0NvbnRlbnQoKVwiXG5cbiAgICAgIGlmICh0aGlzLnByb3h5LmJhc2VsYXllcnNfbG9hZGVkKSB7XG4gICAgICAgIGZuRHJhd0NvbnRlbnQodGhpcy5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmJhc2VsYXllcklkcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZC5wdXNoKGZuRHJhd0NvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImxvYWRDb250ZW50KClcIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtkcmF3Q29udGVudCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtbdHlwZV19ICBjb250ZW50RGF0YSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXdDb250ZW50OiBmdW5jdGlvbiAoY29udGVudERhdGEpIHtcbiAgICAgIC8vIFBBU1NcbiAgICB9LCAvLyBlbmQgb2YgXCJkcmF3Q29udGVudCgpXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbYWRkSXRlbXMgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBpdGVtRGF0YSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIHdyYXBwZXJFbGVtZW50ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgb3B0aW9ucyAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRJdGVtczogZnVuY3Rpb24gKGl0ZW1EYXRhLCB3cmFwcGVyRWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgdmFyIGksXG4gICAgICAgICAgaixcbiAgICAgICAgICBzZWxmLFxuICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgaXRlbSxcbiAgICAgICAgICB1aWQsXG4gICAgICAgICAgbGlzdEl0ZW0sXG4gICAgICAgICAgY2hpbGRMaXN0LFxuICAgICAgICAgIGNoaWxkSXRlbSxcbiAgICAgICAgICBjaGlsZEVudHJ5LFxuICAgICAgICAgIHRvZ2dsZSxcbiAgICAgICAgICBlbnRyeSxcbiAgICAgICAgICAkZW50cnksXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIGhhbmRsZUVudHJ5Q2xpY2ssXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlQmFzZWxheWVyVmlzaWJpbGl0eTtcblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIHBhcnNlQXNMaXN0OiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUVudHJ5Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgdmFyIGl0ZW1VaWQsXG4gICAgICAgICAgICBzaWJsaW5ncyxcbiAgICAgICAgICAgIGJhc2VsYXllckl0ZW07XG4gICAgICAgICAgc2libGluZ3MgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCk7XG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaTwgc2libGluZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBpZiAoc2libGluZ3NbaV0gJiYgJChzaWJsaW5nc1tpXSkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pKSB7XG4gICAgICAgICAgICAgICAgICBpZihzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1tzZWxmLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkXSAmJiBzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1tzZWxmLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkXS5oYXNPdmVybGF5cyl7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiBpbiBzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1tzZWxmLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cyl7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbc2VsZi5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMuaGFzT3duUHJvcGVydHkoaikpXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3NlbGYucHJveHkuYWN0aXZlQmFzZWxheWVySWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2pdLmxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJChzaWJsaW5nc1tpXSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbVVpZCA9ICQodGhpcykuZGF0YSgndWlkJyk7XG5cbiAgICAgICAgICBpZiAoc2VsZi5zdGFyYm9hcmQub3B0aW9ucy5jYWNoaW5nKSB7XG4gICAgICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2Jhc2VsYXllcicsIGl0ZW1VaWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5yaWdodFNsaWRlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5yaWdodFNsaWRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcygncmlnaHQnLCBzZWxmLnN0YXJib2FyZC5jb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChzZWxmLnN0YXJib2FyZC5lbGVtZW50KS5jc3MoJ3JpZ2h0Jywgc2VsZi5zdGFyYm9hcmQuY29udGFpbmVyLm9mZnNldFdpZHRoKTtcblxuICAgICAgICAgIGlmIChzZWxmLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkICE9PSBpdGVtVWlkKSB7XG4gICAgICAgICAgICBzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuc2hvd0Jhc2VMYXllcihpdGVtVWlkKTtcbiAgICAgICAgICAgIGlmKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW2l0ZW1VaWRdLmhhc092ZXJsYXlzKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogaW4gc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbaXRlbVVpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMpe1xuICAgICAgICAgICAgICAgICAgaWYoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbaXRlbVVpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMuaGFzT3duUHJvcGVydHkoaikpe1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1tpdGVtVWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tqXS5sYXllcik7ICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcblxuICAgICAgICAgICAgLy8gaWYodGhpcy5uZXh0U2libGluZyl7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5uZXh0U2libGluZy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgLy8gICAgIGZvcihpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgJChjaGlsZHJlbltpXS5maXJzdENoaWxkKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGM0Zy5tYXBzLmhvb2suYmFzZWxheWVyX2NoYW5nZWQgPSBjNGcubWFwcy5ob29rLmJhc2VsYXllcl9jaGFuZ2VkIHx8IFtdO1xuICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5iYXNlbGF5ZXJfY2hhbmdlZCwgaXRlbVVpZCk7XG4gICAgICAgICAgfVxuICAgICAgfTsgLy8gZW5kIG9mIFwiaGFuZGxlRW50cnlDbGljaygpXCJcblxuICAgICAgaGFuZGxlQ2hhbmdlQmFzZWxheWVyVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChiYXNlbGF5ZXJDb25maWcpIHtcbiAgICAgICAgdmFyIGlkO1xuXG4gICAgICAgIGZvciAoaWQgaW4gc2VsZi5iYXNlbGF5ZXJzKSB7XG4gICAgICAgICAgaWYgKHNlbGYuYmFzZWxheWVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gYmFzZWxheWVyQ29uZmlnLmlkKSB7XG4gICAgICAgICAgICAgIHNlbGYuYmFzZWxheWVyc1tpZF0uJGVudHJ5LmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLmJhc2VsYXllcnNbaWRdLiRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICB3cmFwcGVyID0gb3B0aW9ucy5wYXJzZUFzTGlzdCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaWYgKGl0ZW1EYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbURhdGEubGVuZ3RoOyBpICs9IDEpIHtcblxuICAgICAgICAgIHVpZCA9IGl0ZW1EYXRhW2ldO1xuICAgICAgICAgIHRoaXMuYmFzZWxheWVyc1t1aWRdID0ge307XG5cbiAgICAgICAgICBsaXN0SXRlbSA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGhpcy5iYXNlbGF5ZXJzW3VpZF0uZW50cnlXcmFwcGVyID0gbGlzdEl0ZW07XG4gICAgICAgICAgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1t1aWRdLm5hbWUpKTtcbiAgICAgICAgICAkKGVudHJ5KS5kYXRhKCdpZCcsIHVpZCk7XG4gICAgICAgICAgaWYoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5oYXNPdmVybGF5cyl7XG5cblxuICAgICAgICAgICAgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5cy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgIGNoaWxkSXRlbSA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGNoaWxkRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgIGlmKHNlbGYucHJveHkuYWN0aXZlQmFzZWxheWVySWQgPT0gdWlkKXtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGRFbnRyeSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICBsZXQgb3ZlcmxheUlkID0gc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXS5pZDtcbiAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbb3ZlcmxheUlkXS5jaGFuZ2VPcGFjaXR5KHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0ub3BhY2l0eSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGRFbnRyeSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoaWxkRW50cnkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXS5uYW1lKSk7XG4gICAgICAgICAgICAgICQoY2hpbGRFbnRyeSkuZGF0YSgnaWQnLHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0uaWQpO1xuICAgICAgICAgICAgICAkKGNoaWxkRW50cnkpLmRhdGEoJ3BpZCcsdWlkKTtcbiAgICAgICAgICAgICAgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTmFtZSA9ICdjNGctb3ZlcmxheS10b2dnbGUnO1xuICAgICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCd0eXBlJywncmFuZ2UnKTtcbiAgICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnbWluJywwKTtcbiAgICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnbWF4JywxMDApO1xuICAgICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXS5vcGFjaXR5KTtcbiAgICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnc3RlcHMnLDEwKTtcbiAgICAgICAgICAgICAgJCh0b2dnbGUpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdwaWQnKV0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdpZCcpXS5jaGFuZ2VPcGFjaXR5KHRoaXMudmFsdWUpXG4gICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICBjaGlsZEVudHJ5LmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmRDaGlsZChjaGlsZEVudHJ5KTtcbiAgICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZENoaWxkKGNoaWxkSXRlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgIGlmKGNoaWxkTGlzdCl7XG4gICAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XG4gICAgICAgICAgICAgIGNoaWxkTGlzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkZW50cnkgPSAkKGVudHJ5KTtcbiAgICAgICAgICB0aGlzLmJhc2VsYXllcnNbdWlkXS4kZW50cnkgPSAkZW50cnk7XG5cbiAgICAgICAgICBpZiAodGhpcy5zdGFyYm9hcmQub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuZGVmYXVsdF9iYXNlbGF5ZXIgJiYgcGFyc2VJbnQodWlkLCAxMCkgPT09IHBhcnNlSW50KHNlbGYuc3RhcmJvYXJkLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmRlZmF1bHRfYmFzZWxheWVyLCAxMCkpIHtcbiAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICQobGlzdEl0ZW0pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgICAgICAgaWYoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5oYXNPdmVybGF5cyl7XG4gICAgICAgICAgICAgICAgICBmb3IobGV0IGogaW4gc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzLmhhc093blByb3BlcnR5KGopKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2pdLmNoYW5nZU9wYWNpdHkoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tqXS5vcGFjaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgICAgJChsaXN0SXRlbSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkZW50cnkuZGF0YSgndWlkJywgdWlkKTtcbiAgICAgICAgICAkZW50cnkuY2xpY2soaGFuZGxlRW50cnlDbGljayk7XG5cbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgICAgLy8gU3RhcmJvYXJkIEZpbHRlclxuICAgICAgICAgIGlmICh0aGlzLnN0YXJib2FyZC5vcHRpb25zLmZpbHRlcikge1xuICAgICAgICAgICAgICB2YXIgZHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgZHYuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWZpbHRlciBjNGctY29udGVudC1zZWxlY3RcIjtcbiAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIGZpbHRlci50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICBmaWx0ZXIucGxhY2Vob2xkZXIgPSBcIlwiOyAvL0ZvbnQgQXdlc29tZVxuICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgaS5jbGFzc05hbWUgPSAnZmFzIGZhLWZpbHRlcic7XG4gICAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICBkdi5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICAgICAgICBkdi5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgICAgZmlsdGVyLm9ua2V5dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaWx0ZXJfdWxsaShlbGVtZW50LCBzaG93U3VidHJlZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFwcGx5IGZpbHRlciBmb3Igc2hvcnQgc2VhcmNoIHRlcm1zXG5cbiAgICAgICAgICAgICAgICAgICAgICBzaG93U3VidHJlZSA9IHNob3dTdWJ0cmVlIHx8IGZhbHNlOyAgLy8gdXNlZCB3aGlsZSB0cmF2ZXJzaW5nIGRvd24gdGhlIHRyZWVcblxuICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgKG1vZGlmaWVkOiBmaXJzdCBlbGVtZW50KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudHMuIE9ubHkgZmluZHMgY2hpbGRyZW4gb2YgdGhlIGdpdmVuIHBhcmVudCBlbGVtZW50LCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgKiBubyBmdXJ0aGVyIGRlc2NlbmRhbnRzIGxpa2UgZ2V0RWxlbWVudHNCeVRhZ05hbWUgZG9lcy5cbiAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRDaGlsZHJlbkJ5VGFnTmFtZShlbGVtZW50LCB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuW2ldLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PSB0YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZC5wdXNoKGVsZW1lbnQuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRbMF07IC8vICEhIVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoRmxhZ1VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnRyZWVNYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGVhY2ggTEkgZG9cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoIGN1cnJlbnQgTEkgZm9yIGZpbHRlciB0ZXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbltpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdLmlubmVySFRNTC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIGEgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzZSBpZiBhIHN1YnRyZWUgKFVMKSBleGlzdHMgaW4gY3VycmVudCBMSSAobWF4IDEgZXhwZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdWwgPSBnZXRDaGlsZHJlbkJ5VGFnTmFtZShlbGVtZW50LmNoaWxkcmVuW2ldLCBcInVsXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWN1cnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzU3VidHJlZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidHJlZU1hdGNoZXMgPSBmaWx0ZXJfdWxsaSh1bCwgc2hvd1N1YnRyZWUgfHwgaXNNYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNTdWJ0cmVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoIHx8IHN1YnRyZWVNYXRjaGVzIHx8IHNob3dTdWJ0cmVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hGbGFnVWwgPSB0cnVlOyAvLyB1c2VkIHdoaWxlIHRyYXZlcnNpbmcgdXAgdGhlIHRyZWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgY3VycmVudCBMSSB2aXNpYmxlIGFuZCBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIudmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjNGctY2xvc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1vcGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpOyAvLyBhbHdheXMgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2ggJiYgZmlsdGVyLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYzRnLXN0YXJib2FyZC1maWx0ZXItbWF0Y2hcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgY3VycmVudCBMSSBpbnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjNGctb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJjNGctY2xvc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLXN0YXJib2FyZC1maWx0ZXItbWF0Y2hcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaEZsYWdVbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IHJlYWN0IGltbWVkaWF0ZWx5IGJ1dCBhbGxvdyBmb3Igc29tZSBrZXlzdHJva2VzXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0d28gb3IgemVybyBsZXR0ZXJzIGFyZSByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIudmFsdWUubGVuZ3RoICE9IDEpIGZpbHRlcl91bGxpKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jNGctYmFzZWxheWVydHJlZSA+IHVsOm50aC1jaGlsZCgyKScpKVxuICAgICAgICAgICAgICAgICAgfSwgMzUwKTtcblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGR2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm94eS5ob29rX2Jhc2VsYXllcl92aXNpYmlsaXR5LnB1c2goaGFuZGxlQ2hhbmdlQmFzZWxheWVyVmlzaWJpbGl0eSk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9IC8vIGVuZCBvZiBcImFkZEl0ZW1zKClcIlxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIEJhc2VsYXllcnN3aXRjaGVyID0gdGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5CYXNlbGF5ZXJzd2l0Y2hlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc3RhcmJvYXJkcGx1Z2luLWJhc2VsYXllcnN3aXRjaGVyLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbiA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4gfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdGFyYm9hcmRcbiAgICogQHBhcmFtIHBsdWdpblxuICAgKiBAcGFyYW0gcHJvamVjdENvbmZcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4uQ3VzdG9tdGFiID0gZnVuY3Rpb24gKHN0YXJib2FyZCwgcHJvamVjdENvbmYpIHtcbiAgICBpZiAoIXN0YXJib2FyZCkge1xuICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgaW5pdGlhbGl6ZSBQcm9qZWN0LXRhYiB3aXRob3V0IGEgc3RhcmJvYXJkLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwcm9qZWN0Q29uZiA9ICQuZXh0ZW5kKHtcbiAgICAgIHRhYklkOiBudWxsLFxuICAgICAgbmFtZTogXCJDdXN0b210YWJcIixcbiAgICAgIGF3ZXNvbWVpY29uOiAnJ1xuICAgIH0sIHByb2plY3RDb25mKTtcblxuICAgIGlmICghcHJvamVjdENvbmYudGFiSWQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGluaXRpYWxpemUgUHJvamVjdC10YWIgd2l0aG91dCBhbiBpZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAvL3RoaXMucGx1Z2luID0gcGx1Z2luIHx8IGZhbHNlO1xuICAgIHRoaXMuY29udGVudExvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcmJvYXJkID0gc3RhcmJvYXJkO1xuICAgIHRoaXMucHJveHkgPSBzdGFyYm9hcmQub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5O1xuICAgIHRoaXMubWFwID0gdGhpcy5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwO1xuICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgdGhpcy50YWJJZCA9IHByb2plY3RDb25mLnRhYklkO1xuICAgIHRoaXMubmFtZSA9IHByb2plY3RDb25mLm5hbWU7XG4gICAgdGhpcy5hd2Vzb21laWNvbiA9IHByb2plY3RDb25mLmF3ZXNvbWVpY29uLnJlcGxhY2UoJyYjOTI7JywgXCJcXFxcXCIpO1xuICAgIHN0YXJib2FyZC5wbHVnaW5zW1wiY3VzdG9tVGFiXCIrIHRoaXMudGFiSWRdID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9O1xuXG4gIC8vIEFkZCBtZXRob2RzXG4gIGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkN1c3RvbXRhYi5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5DdXN0b210YWIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2NyZWF0ZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgY29udGVudFdyYXBwZXIsXG4gICAgICAgIGNvbnRlbnRIZWFkbGluZSxcbiAgICAgICAgY29udGVudEhlYWRsaW5lTGluayxcbiAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIGxheWVyU3dpdGNoZXJUaXRsZTtcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250ZW50SGVhZGxpbmUuY2xhc3NOYW1lID0gJ2NvbnRlbnRIZWFkbGluZSc7XG5cbiAgICAgIGxheWVyU3dpdGNoZXJUaXRsZSA9IHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMubGF5ZXJTd2l0Y2hlclRpdGxlO1xuXG4gICAgICBpZiAoc2VsZi5uYW1lKSB7XG4gICAgICAgICAgbGF5ZXJTd2l0Y2hlclRpdGxlID0gc2VsZi5uYW1lO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5zdGFyYm9hcmQub3B0aW9ucy5idXR0b24pIHtcbiAgICAgICAgY29udGVudEhlYWRsaW5lLmlubmVySFRNTCA9IChsYXllclN3aXRjaGVyVGl0bGUgfHwgbGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgJChjb250ZW50SGVhZGxpbmUpLmFkZENsYXNzKFwiYzRnLXN0YXJib2FyZC1oZWFkbGluZVwiKTtcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjNGctYWN0aXZlXCIpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnByb3h5LmxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZUxheWVyKHNlbGYucHJveHkubGF5ZXJJZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImM0Zy1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYzRnLWluYWN0aXZlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnByb3h5LmxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvd0xheWVyKHNlbGYucHJveHkubGF5ZXJJZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImM0Zy1pbmFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjNGctYWN0aXZlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICAkKGNvbnRlbnRIZWFkbGluZUxpbmspLmFkZENsYXNzKFwiYzRnLWluYWN0aXZlIGM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGlua1wiKTtcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmVMaW5rLmlubmVySFRNTCA9IChsYXllclN3aXRjaGVyVGl0bGUgfHwgbGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsuaW5uZXJIVE1MID0gY29udGVudEhlYWRsaW5lTGluay5pbm5lckhUTUwrJyAnO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZS5hcHBlbmRDaGlsZChjb250ZW50SGVhZGxpbmVMaW5rKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRsaW5lKTtcblxuICAgICAgdGhpcy5jb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ2M0Z19zdGFyYm9hcmRwbHVnaW5fY29udGVudCc7XG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnREaXYpO1xuXG4gICAgICBzZWxmLnZpZXcgPSBzZWxmLnN0YXJib2FyZC5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogc2VsZi5uYW1lLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IHNlbGYubmFtZSxcbiAgICAgICAgICBjbGFzc05hbWU6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1zdGFyYm9hcmRwbHVnaW4tJyArIHNlbGYudGFiSWQsXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi5zdGFyYm9hcmQuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogY29udGVudFdyYXBwZXJ9LFxuICAgICAgICAgIHtzZWN0aW9uOiBzZWxmLnN0YXJib2FyZC50b3BUb29sYmFyLCBlbGVtZW50OiBzZWxmLnN0YXJib2FyZC52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hd2Vzb21laWNvbi5zdWJzdHJpbmcoMCwgMSkgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgIHRoaXMuYXdlc29tZWljb24gPSB0aGlzLmF3ZXNvbWVpY29uLnN1YnN0cmluZygxLCB0aGlzLmF3ZXNvbWVpY29uLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBzZWxlY3RvciA9ICdidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItc3RhcmJvYXJkcGx1Z2luLScgKyBzZWxmLnRhYklkO1xuICAgICAgLy9Ub0RvIG3DtmdsaWNoZXJ3ZWlzZSBzdGFuZGFyZCBpY29uID9cbiAgICAgIGlmICh0aGlzLmF3ZXNvbWVpY29uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgc3R5bGUgZWxlbWVudCB0byBoZWFkXG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblxuICAgICAgICAgIC8vIEdyYWIgc3R5bGUgc2hlZXRcbiAgICAgICAgICBzdHlsZVNoZWV0ID0gc3R5bGVFbC5zaGVldDtcbiAgICAgICAgLy8gY2F0Y2ggZmlyZWZveCwgYmVjYXVzZSBGRiBkb2VzIG5vdCBrbm93IFwiYWRkUnVsZVwiXG4gICAgICAgIGlmIChzdHlsZVNoZWV0LmFkZFJ1bGUgJiYgdHlwZW9mIGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdLmFkZFJ1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuYWRkUnVsZShzZWxlY3RvciArICc6YmVmb3JlJywgJ2NvbnRlbnQ6IFwiXFxcXCcrIHRoaXMuYXdlc29tZWljb24gKydcIjsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShzZWxlY3RvciArICc6YmVmb3JlIHsgY29udGVudDogXCJcXFxcJysgdGhpcy5hd2Vzb21laWNvbiArJ1wiO30nLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbYWN0aXZhdGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnZpZXcuYWN0aXZhdGUoKTtcbiAgICAgIGlmICghdGhpcy5jb250ZW50TG9hZGVkKSB7XG4gICAgICAgIHRoaXMubG9hZENvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtzZXRDb250ZW50IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gIG5ld0NvbnRlbnQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAobmV3Q29udGVudCkge1xuICAgICAgaWYgKG5ld0NvbnRlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50RGl2LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnREaXYucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIHRoaXMuY29udGVudERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBAVE9ET1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50RGl2LmlubmVySFRNTDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtsb2FkQ29udGVudCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbG9hZENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICBmbkRyYXdDb250ZW50O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc3RhcmJvYXJkLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBmbkRyYXdDb250ZW50ID0gZnVuY3Rpb24gKGxheWVySWRzKSB7XG4gICAgICAgIHNlbGYudHJlZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgJChzZWxmLnRyZWVDb250cm9sKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRSk7XG4gICAgICAgIHNlbGYuc2V0Q29udGVudChzZWxmLnRyZWVDb250cm9sKTtcbiAgICAgICAgc2VsZi5hZGRJdGVtcyhsYXllcklkcywgc2VsZi50cmVlQ29udHJvbCwge3BhcnNlQXNMaXN0OiB0cnVlfSk7XG4gICAgICAgIHNlbGYuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLnN0YXJib2FyZC5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgc2VsZi5zdGFyYm9hcmQudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJmbkRyYXdDb250ZW50KClcIlxuXG4gICAgICBmbkRyYXdDb250ZW50KHRoaXMucHJveHkubGF5ZXJJZHMpO1xuICAgIH0sIC8vIGVuZCBvZiBcImxvYWRDb250ZW50KClcIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFthZGRJdGVtcyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIGl0ZW1EYXRhICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgd3JhcHBlckVsZW1lbnQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBvcHRpb25zICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFkZEl0ZW1zOiBmdW5jdGlvbiAoaXRlbURhdGEsIHdyYXBwZXJFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgd3JhcHBlcixcbiAgICAgICAgaXRlbSxcbiAgICAgICAgbGF5ZXIsXG4gICAgICAgIHVpZCxcbiAgICAgICAgbGlzdEl0ZW0sXG4gICAgICAgIGVudHJ5LFxuICAgICAgICAkZW50cnksXG4gICAgICAgIGhhbmRsZUVudHJ5Q2xpY2ssXG4gICAgICAgIHNlbGYsXG4gICAgICAgIHBXcmFwcGVyLFxuICAgICAgICB0b2dnbGUsXG4gICAgICAgIGNoaWxkV3JhcHBlcjtcblxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICBwYXJzZUFzTGlzdDogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBoYW5kbGVFbnRyeUNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGl0ZW1VaWQ7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIGV2ZW50IHNlbmRpbmcgZW50cnlcbiAgICAgICAgaXRlbVVpZCA9ICQodGhpcykuZGF0YSgndWlkJyk7XG4gICAgICAgIGlmIChzZWxmLnByb3h5LmFjdGl2ZUxheWVySWRzW2l0ZW1VaWRdKSB7XG4gICAgICAgICAgLy8gaGlkZSBsYXllclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgIHNlbGYuaGlkZUxheWVyKGl0ZW1VaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNob3cgbGF5ZXJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICBzZWxmLnNob3dMYXllcihpdGVtVWlkKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gcmVnaXN0ZXIgaG9vayB0byBzd2l0Y2ggY2hpbGRzIG9mIGxheWVycyBhcyB3ZWxsXG4gICAgICB0aGlzLnByb3h5Lmhvb2tfbGF5ZXJfdmlzaWJpbGl0eS5wdXNoKGZ1bmN0aW9uIChsYXllcklkKSB7XG4gICAgICAgIHZhciBqLFxuICAgICAgICAgIGNoYW5nZWRMYXllcjtcblxuICAgICAgICBjaGFuZ2VkTGF5ZXIgPSBzZWxmLmxheWVyc1tsYXllcklkXTtcbiAgICAgICAgaWYgKGNoYW5nZWRMYXllciAmJiBjaGFuZ2VkTGF5ZXIuJGVudHJpZXMpIHtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2hhbmdlZExheWVyLiRlbnRyaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllcklkXSkge1xuICAgICAgICAgICAgICBjaGFuZ2VkTGF5ZXIuJGVudHJpZXNbal0uYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoYW5nZWRMYXllci4kZW50cmllc1tqXS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7IC8vIGVuZCBvZiBob29rXG5cbiAgICAgIC8vIGFkZCBob29rIGZ1bmN0aW9uIGZvciBjaGFuZ2VkIHpvb21cbiAgICAgIC8vICAgbmVlZGVkIHRvIGNoYW5nZSB0aGUgZW50cnktY2xhc3Nlc1xuICAgICAgdGhpcy5wcm94eS5ob29rX21hcF96b29tLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaixcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBsYXllcjtcblxuICAgICAgICBmb3IgKGlkIGluIHNlbGYubGF5ZXJzKSB7XG4gICAgICAgICAgaWYgKHNlbGYubGF5ZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgbGF5ZXIgPSBzZWxmLmxheWVyc1tpZF07XG4gICAgICAgICAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuJGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxheWVyLiRlbnRyaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkuY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbShpZCkpIHtcbiAgICAgICAgICAgICAgICAgIGxheWVyLiRlbnRyaWVzW2pdLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5ESVNBQkxFRCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxheWVyLiRlbnRyaWVzW2pdLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ESVNBQkxFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTsgLy8gZW5kIG9mIGhvb2tcblxuICAgICAgLy8gYnVpbGQgdGhlIGxheWVyIHRyZWVcbiAgICAgIHdyYXBwZXIgPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWYgKGl0ZW1EYXRhICYmIGl0ZW1EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdWlkID0gaXRlbURhdGFbaV07XG4gICAgICAgICAgLy9sYXllciA9IHRoaXMucGx1Z2luLmN1c3RvbVRhYnNbdGhpcy50YWJJZF0uZHJhd25GZWF0dXJlc1t1aWRdO1xuICAgICAgICAgIGxheWVyID0gdGhpcy5wcm94eS5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzW3VpZF07XG4gICAgICAgICAgLy8gc2tpcCBsYXllciBpZiBpdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHRhYlxuICAgICAgICAgIGlmICghKGxheWVyLnJlbmRlclNwZWNpYWwgPT0gdHJ1ZSAmJiAobGF5ZXIudGFiSWQgPT0gdGhpcy50YWJJZCkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZG8gbm90IHJlbmRlciB0aGUgc3RhcnRhYiBsYXllciBpdHNlbGYgYXMgcGFyZW50IGxldmVsXG4gICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09IFwic3RhcnRhYlwiKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hlY2sgaWYgbGF5ZXIgd2FudHMgdG8gYmUgZGlzcGxheWVkIGluIHN0YXJib2FyZCB0YWJcbiAgICAgICAgICBpZiAobGF5ZXIuaGlkZVdoZW5JblRhYiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsYXllci5oaWRlID09PSBcIjFcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXIuaWRdKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuaGlkZUxheWVyKGxheWVyLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGxheWVyIHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICBpZiAoIWxheWVyLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtID0ge307XG4gICAgICAgICAgdGhpcy5sYXllcnNbdWlkXSA9IGl0ZW07XG4gICAgICAgICAgbGlzdEl0ZW0gPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGl0ZW0uZW50cnlXcmFwcGVycyA9IGl0ZW0uZW50cnlXcmFwcGVycyB8fCBbXTtcbiAgICAgICAgICBpdGVtLmVudHJ5V3JhcHBlcnMucHVzaChsaXN0SXRlbSk7XG4gICAgICAgICAgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYXllci5sYXllcm5hbWUgfHwgbGF5ZXIubmFtZSkpO1xuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAkZW50cnkgPSAkKGVudHJ5KTtcbiAgICAgICAgICBpdGVtLiRlbnRyaWVzID0gaXRlbS4kZW50cmllcyB8fCBbXTtcbiAgICAgICAgICBpdGVtLiRlbnRyaWVzLnB1c2goJGVudHJ5KTtcbiAgICAgICAgICAkZW50cnkuZGF0YSgndWlkJywgdWlkKTtcbiAgICAgICAgICAkZW50cnkuY2xpY2soaGFuZGxlRW50cnlDbGljayk7XG5cbiAgICAgICAgICAvLyBwcmVwYXJlIGluc2VydGlvbiBvZiBjaGlsZHNcbiAgICAgICAgICBpZiAobGF5ZXIudmlzaWJsZUNoaWxkcykge1xuICAgICAgICAgICAgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgJChsaXN0SXRlbSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICAgICAgICAgICQodG9nZ2xlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSUNPTik7XG4gICAgICAgICAgICAkKHRvZ2dsZSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5yaWdodFNsaWRlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5yaWdodFNsaWRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3MoJ3JpZ2h0Jywgc2VsZi5zdGFyYm9hcmQuY29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkKHNlbGYuc3RhcmJvYXJkLmVsZW1lbnQpLmNzcygncmlnaHQnLCBzZWxmLnN0YXJib2FyZC5jb250YWluZXIub2Zmc2V0V2lkdGgpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodG9nZ2xlKS5pbnNlcnRCZWZvcmUoJGVudHJ5KTtcbiAgICAgICAgICAgIGNoaWxkV3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmNoaWxkV3JhcHBlcnMgPSBpdGVtLmNoaWxkV3JhcHBlcnMgfHwgW107XG4gICAgICAgICAgICBpdGVtLmNoaWxkV3JhcHBlcnMucHVzaChjaGlsZFdyYXBwZXIpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRXcmFwcGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1t1aWRdKSB7XG4gICAgICAgICAgICAkZW50cnkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5sYXllcnNbbGF5ZXIucGlkXSkge1xuICAgICAgICAgICAgLy8gaXMgY2hpbGQtZWxlbWVudFxuICAgICAgICAgICAgcFdyYXBwZXIgPSB0aGlzLmxheWVyc1tsYXllci5waWRdLmNoaWxkV3JhcHBlcnM7XG4gICAgICAgICAgICBpZiAocFdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgcFdyYXBwZXJbcFdyYXBwZXIubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gZW5kIG9mIGZvci1sb29wXG4gICAgICAgIC8vIFN0YXJib2FyZCBGaWx0ZXJcbiAgICAgICAgaWYgKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgdmFyIGR2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZHYuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWZpbHRlciBjNGctY29udGVudC1zZWxlY3RcIjtcbiAgICAgICAgICB2YXIgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICBmaWx0ZXIudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBmaWx0ZXIucGxhY2Vob2xkZXIgPSBcIlwiOyAvL0ZvbnQgQXdlc29tZVxuICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgIGkuY2xhc3NOYW1lID0gJ2ZhcyBmYS1maWx0ZXInO1xuICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgIGR2LmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgICAgZHYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgICAgZmlsdGVyLm9ua2V5dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmaWx0ZXJfdWxsaShlbGVtZW50LCBzaG93U3VidHJlZSkge1xuXG4gICAgICAgICAgICAgIC8vIGRvIG5vdCBhcHBseSBmaWx0ZXIgZm9yIHNob3J0IHNlYXJjaCB0ZXJtc1xuXG4gICAgICAgICAgICAgIHNob3dTdWJ0cmVlID0gc2hvd1N1YnRyZWUgfHwgZmFsc2U7ICAvLyB1c2VkIHdoaWxlIHRyYXZlcnNpbmcgZG93biB0aGUgdHJlZVxuXG4gICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IChtb2RpZmllZDogZmlyc3QgZWxlbWVudCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRzLiBPbmx5IGZpbmRzIGNoaWxkcmVuIG9mIHRoZSBnaXZlbiBwYXJlbnQgZWxlbWVudCwgYnV0XG4gICAgICAgICAgICAgICAqIG5vIGZ1cnRoZXIgZGVzY2VuZGFudHMgbGlrZSBnZXRFbGVtZW50c0J5VGFnTmFtZSBkb2VzLlxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2hpbGRyZW5CeVRhZ05hbWUoZWxlbWVudCwgdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0udGFnTmFtZS50b1VwcGVyQ2FzZSgpID09IHRhZ05hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZC5wdXNoKGVsZW1lbnQuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kWzBdOyAvLyAhISFcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIG1hdGNoRmxhZ1VsID0gZmFsc2U7XG4gICAgICAgICAgICAgIHZhciBzdWJ0cmVlTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBMSSBkb1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIGN1cnJlbnQgTEkgZm9yIGZpbHRlciB0ZXJtXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5pbm5lckhUTUwudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpdCdzIGEgbWF0Y2hcbiAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaWYgYSBzdWJ0cmVlIChVTCkgZXhpc3RzIGluIGN1cnJlbnQgTEkgKG1heCAxIGV4cGVjdGVkKVxuICAgICAgICAgICAgICAgIHZhciB1bCA9IGdldENoaWxkcmVuQnlUYWdOYW1lKGVsZW1lbnQuY2hpbGRyZW5baV0sIFwidWxcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAodWwpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgICAgdmFyIGhhc1N1YnRyZWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3VidHJlZU1hdGNoZXMgPSBmaWx0ZXJfdWxsaSh1bCwgc2hvd1N1YnRyZWUgfHwgaXNNYXRjaCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBoYXNTdWJ0cmVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2ggfHwgc3VidHJlZU1hdGNoZXMgfHwgc2hvd1N1YnRyZWUpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoRmxhZ1VsID0gdHJ1ZTsgLy8gdXNlZCB3aGlsZSB0cmF2ZXJzaW5nIHVwIHRoZSB0cmVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAvLyBzZXQgY3VycmVudCBMSSB2aXNpYmxlIGFuZCBvcGVuXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJjNGctb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLXN0YXJib2FyZC1maWx0ZXItbWF0Y2hcIik7IC8vIGFsd2F5cyByZW1vdmVcbiAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoICYmIGZpbHRlci52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIHNldCBjdXJyZW50IExJIGludmlzaWJsZVxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjNGctb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1jbG9zZVwiKTtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1hdGNoRmxhZ1VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRvIG5vdCByZWFjdCBpbW1lZGlhdGVseSBidXQgYWxsb3cgZm9yIHNvbWUga2V5c3Ryb2tlc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIHR3byBvciB6ZXJvIGxldHRlcnMgYXJlIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGlmIChmaWx0ZXIudmFsdWUubGVuZ3RoICE9IDEpIGZpbHRlcl91bGxpKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jNGctbGF5ZXJ0cmVlID4gdWw6bnRoLWNoaWxkKDIpJykpXG4gICAgICAgICAgICB9LCAzNTApO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZHYpO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImFkZEl0ZW1zKClcIlxuXG4gICAgc2hvd0xheWVyOiBmdW5jdGlvbihpdGVtVWlkKSB7XG4gICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tpdGVtVWlkXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3dMYXllcihpdGVtVWlkKTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJzaG93TGF5ZXIoKVwiXG5cbiAgICBoaWRlTGF5ZXI6IGZ1bmN0aW9uKGl0ZW1VaWQpIHtcbiAgICAgIGlmICghdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tpdGVtVWlkXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGVMYXllcihpdGVtVWlkKTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJoaWRlTGF5ZXIoKVwiXG5cblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBDdXN0b210YWIgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkN1c3RvbXRhYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tY3VzdG9tdGFiLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbiA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4gfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBleHRlbmRzIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgICBzdGFyYm9hcmRcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkxheWVyc3dpdGNoZXIgPSBmdW5jdGlvbiAoc3RhcmJvYXJkKSB7XG4gICAgaWYgKCFzdGFyYm9hcmQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGluaXRpYWxpemUgTGF5ZXJzd2l0Y2hlciB3aXRob3V0IGEgc3RhcmJvYXJkLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgdGhpcy5zdGFyYm9hcmQgPSBzdGFyYm9hcmQ7XG4gICAgdGhpcy5wcm94eSA9IHN0YXJib2FyZC5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHk7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLmxvYWRDb250ZW50KCk7XG4gIH07XG5cbiAgLy8gQWRkIG1ldGhvZHNcbiAgYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4uTGF5ZXJzd2l0Y2hlci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5MYXllcnN3aXRjaGVyLnByb3RvdHlwZSwge1xuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBjb250ZW50V3JhcHBlcixcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmUsXG4gICAgICAgICAgY29udGVudEhlYWRsaW5lTGluayxcbiAgICAgICAgICBjb250ZW50SW5mbyxcbiAgICAgICAgICBsYXllclN3aXRjaGVyVGl0bGU7XG5cbiAgICAgIGxheWVyU3dpdGNoZXJUaXRsZSA9IHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMubGF5ZXJTd2l0Y2hlclRpdGxlO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudEhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjb250ZW50SGVhZGxpbmUnO1xuXG4gICAgICBpZighdGhpcy5zdGFyYm9hcmQub3B0aW9ucy5idXR0b24pIHtcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gKGxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICAkKGNvbnRlbnRIZWFkbGluZSkuYWRkQ2xhc3MoXCJjNGctc3RhcmJvYXJkLWhlYWRsaW5lXCIpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgY29udGVudEhlYWRsaW5lTGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImM0Zy1hY3RpdmVcIikgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYucHJveHkubGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlTGF5ZXIoc2VsZi5wcm94eS5sYXllcklkc1tpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYzRnLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjNGctaW5hY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYucHJveHkubGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93TGF5ZXIoc2VsZi5wcm94eS5sYXllcklkc1tpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYzRnLWluYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImM0Zy1hY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgICQoY29udGVudEhlYWRsaW5lTGluaykuYWRkQ2xhc3MoXCJjNGctaW5hY3RpdmUgYzRnLXN0YXJib2FyZC1oZWFkbGluZS1saW5rXCIpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsuaW5uZXJIVE1MID0gKGxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUik7XG4gICAgICAgICAgY29udGVudEhlYWRsaW5lTGluay5pbm5lckhUTUwgPSBjb250ZW50SGVhZGxpbmVMaW5rLmlubmVySFRNTCsnICc7XG4gICAgICAgICAgY29udGVudEhlYWRsaW5lLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkbGluZUxpbmspO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50SGVhZGxpbmUpO1xuXG4gICAgICB0aGlzLmNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuY29udGVudERpdi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjtcbiAgICAgIGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGhpcy5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRJbmZvKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudERpdik7XG5cbiAgICAgIHNlbGYudmlldyA9IHNlbGYuc3RhcmJvYXJkLmFkZFZpZXcoe1xuICAgICAgICBuYW1lOiAnbGF5ZXJzd2l0Y2hlcicsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICB0aXBMYWJlbDogKGxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiksXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSLFxuICAgICAgICAgIHdpdGhIZWFkbGluZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAge3NlY3Rpb246IHNlbGYuc3RhcmJvYXJkLmNvbnRlbnRDb250YWluZXIsIGVsZW1lbnQ6IGNvbnRlbnRXcmFwcGVyfSxcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi5zdGFyYm9hcmQudG9wVG9vbGJhciwgZWxlbWVudDogc2VsZi5zdGFyYm9hcmQudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2FjdGl2YXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy52aWV3LmFjdGl2YXRlKCk7XG4gICAgfSwgLy8gZW5kIG9mIFwiYWN0aXZhdGUoKVwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW3NldENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBuZXdDb250ZW50ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0Q29udGVudDogZnVuY3Rpb24gKG5ld0NvbnRlbnQpIHtcbiAgICAgIGlmIChuZXdDb250ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHRoaXMuY29udGVudERpdi5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50RGl2LnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCB0aGlzLmNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY29udGVudERpdi5pbm5lckhUTUw7XG4gICAgfSwgLy8gZW5kIG9mIFwic2V0Q29udGVudCgpXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbbG9hZENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGxvYWRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBmbkRyYXdDb250ZW50O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc3RhcmJvYXJkLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBmbkRyYXdDb250ZW50ID0gZnVuY3Rpb24gKGxheWVySWRzKSB7XG4gICAgICAgIHNlbGYudHJlZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgJChzZWxmLnRyZWVDb250cm9sKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRSk7XG4gICAgICAgIHNlbGYuc2V0Q29udGVudChzZWxmLnRyZWVDb250cm9sKTtcblxuICAgICAgICBzZWxmLmFkZEl0ZW1zKGxheWVySWRzLCBzZWxmLnRyZWVDb250cm9sKTtcblxuICAgICAgICBzZWxmLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5zdGFyYm9hcmQuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgIHNlbGYuc3RhcmJvYXJkLnVwZGF0ZSgpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwiZm5EcmF3Q29udGVudCgpXCJcblxuICAgICAgaWYgKHRoaXMucHJveHkubGF5ZXJzX2xvYWRlZCkge1xuICAgICAgICBmbkRyYXdDb250ZW50KHRoaXMucHJveHkubGF5ZXJJZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm94eS5ob29rX2xheWVyX2xvYWRlZC5wdXNoKGZuRHJhd0NvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImxvYWRDb250ZW50KClcIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtkcmF3Q29udGVudCBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3Q29udGVudDogZnVuY3Rpb24gKGNvbnRlbnREYXRhKSB7XG4gICAgICAvLyBQQVNTXG4gICAgfSwgLy8gZW5kIG9mIFwiZHJhd0NvbnRlbnQoKVwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2FkZEl0ZW1zIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbURhdGEgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICB3cmFwcGVyRWxlbWVudCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkSXRlbXM6IGZ1bmN0aW9uIChpdGVtRGF0YSwgd3JhcHBlckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgY2hpbGRXcmFwcGVyLFxuICAgICAgICAgIHBXcmFwcGVyLFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgdWlkLFxuICAgICAgICAgIGxpc3RJdGVtLFxuICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICRlbnRyeSxcbiAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgZm5IYW5kbGVFbnRyeUNsaWNrLFxuICAgICAgICAgIGZuQ2hpbGRFbnRyeUNsaWNrLFxuICAgICAgICAgIGZuQ2hpbGRFbnRyeVNob3csXG4gICAgICAgICAgem9vbVRvRXh0ZW50LFxuICAgICAgICAgIGxheWVyQ2xhc3M7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIHBhcnNlQXNMaXN0OiB0cnVlXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgd3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIC8vIGNyZWF0ZSBoYW5kbGVyIGZvciBlbnRyeS1jbGlja3NcbiAgICAgIGZuSGFuZGxlRW50cnlDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaXRlbVVpZCxcbiAgICAgICAgICAgIGxheWVySXRlbTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGl0ZW1VaWQgPSAkKHRoaXMpLmRhdGEoJ3VpZCcpO1xuICAgICAgICBsYXllckl0ZW0gPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbaXRlbVVpZF07XG5cbiAgICAgICAgaWYgKHNlbGYucHJveHkuYWN0aXZlTGF5ZXJJZHNbaXRlbVVpZF0pIHtcbiAgICAgICAgICAvLyBoaWRlIGxheWVyXG4gICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZUxheWVyKGl0ZW1VaWQpO1xuICAgICAgICAgIGlmIChwYXJzZUludChsYXllci5waWQsIDEwKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyBoaWRlIGFsbCBjaGlsZHMsIGJlY2F1c2UgY2xpY2tlZCBsYXllciBpcyB0aGUgbWFwIGl0c2VsZlxuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gc2VsZi5wcm94eS5hY3RpdmVMYXllcklkcykge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlTGF5ZXIoaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNob3cgbGF5ZXJcbiAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93TGF5ZXIoaXRlbVVpZCk7XG4gICAgICAgICAgLy96b29vbSB0byBleHRlbnRcbiAgICAgICAgICB6b29tVG9FeHRlbnQoaXRlbVVpZCk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5oYW5kbGVTZWxlY3RlZENoaWxkcyh0aGlzKSkge1xuICAgICAgICAgIHNlbGYudXBkYXRlUGFyZW50TGF5ZXJzKHRoaXMsIGl0ZW1VaWQsIGxheWVySXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjNGcubWFwcy5sYXllcnNbaXRlbVVpZF0gPSBsYXllckl0ZW07XG4gICAgICB9OyAvLyBlbmQgb2YgXCJmbkhhbmRsZUVudHJ5Q2xpY2soKVwiXG4gICAgICAgIGZuQ2hpbGRFbnRyeUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGl0ZW1VaWQgPSAkKHRoaXMpLmRhdGEoJ3VpZCcpO1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCk7XG4gICAgICAgICAgICBsZXQgY2hpbGRzID0gJChwYXJlbnQpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBsZXQgcGFyZW50VWlkID0gJChjaGlsZHNbMV0pLmRhdGEoJ3VpZCcpO1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKSl7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZUNoaWxkTGF5ZXIocGFyZW50VWlkLCBpdGVtVWlkKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKSl7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvd0NoaWxkTGF5ZXIocGFyZW50VWlkLCBpdGVtVWlkKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm5DaGlsZEVudHJ5U2hvdyA9IGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIGxldCB1aWQgPSAkKHBhcmVudC5maXJzdENoaWxkKS5kYXRhKCd1aWQnKTtcbiAgICAgICAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpO1xuICAgICAgICAgIGxldCBjaGlsZHMgPSAkKHBhcmVudCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICBsZXQgcGFyZW50VWlkID0gJChjaGlsZHNbMV0pLmRhdGEoJ3VpZCcpO1xuICAgICAgICAgIHVpZCA9IHVpZC5yZXBsYWNlKHBhcmVudFVpZCwnJylcbiAgICAgICAgICBsZXQgbGF5ZXIgPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbcGFyZW50VWlkXS52ZWN0b3JMYXllcjtcbiAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgIGxldCBzaW5nbGVMYXllciA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KClbdWlkXTtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlID0gc2luZ2xlTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB6b29tVG9FeHRlbnQgPSBmdW5jdGlvbihpdGVtVWlkKXsgLy9mdW5jdGlvbiB0byB6b29tIHRvIHRoZSBleHRlbnQgb2YgYSBtYXAgc3RydWN0dXJlIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgICAgICAgIHZhciBsYXllckl0ZW0sXG4gICAgICAgICAgICAgICAgdmVjdG9yQXJyYXksXG4gICAgICAgICAgICAgICAgbGF5ZXJHcm91cCxcbiAgICAgICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAgICAgZmVhdHVyZUFycmF5LFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW10sXG4gICAgICAgICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgICAgICAgIGNlbnRlcixcbiAgICAgICAgICAgICAgICBrZXk7XG4gICAgICAgICAgICBsYXllckl0ZW0gPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbaXRlbVVpZF07XG4gICAgICAgICAgICBpZiAobGF5ZXJJdGVtICYmIGxheWVySXRlbS56b29tX2xvY2F0aW9ucyA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJJdGVtLmhhc0NoaWxkcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBsYXllckl0ZW0uY2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJJdGVtLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBsYXllckl0ZW0uY2hpbGRzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSBcIm92ZXJwYXNzXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JBcnJheSA9IGxheWVyLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggY2FzZSBvZiBsaW5rZWQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZlY3RvckFycmF5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckFycmF5ID0gdXRpbHMub2JqZWN0VG9BcnJheSh2ZWN0b3JBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXAgPSBsYXllci52ZWN0b3JMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVjdG9yQXJyYXkgJiYgdmVjdG9yQXJyYXkuZm9yRWFjaCAmJiB0eXBlb2YgdmVjdG9yQXJyYXkuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2ZWN0b3JMYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckxheWVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmRhdGEuZ2VvbWV0cnkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckxheWVyLmRhdGEuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2ludFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IG9sLnByb2oudHJhbnNmb3JtKFtwYXJzZUZsb2F0KHZlY3RvckxheWVyLmRhdGEuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdKV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IG9sLmdlb20uUG9pbnQoY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgbW9yZSBjb21wbGV4IGdlb21ldHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3QgPSBsYXllckdyb3VwLmdldExheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlQXJyYXkgPSBmZWF0dXJlTGlzdC5nZXRBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09IFwia21sXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZmVhdHVyZS5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBzb3VyY2VGZWF0dXJlcyA9IHNvdXJjZS5nZXRGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5nZXRFeHRlbnQoKS5mb3JFYWNoKGZ1bmN0aW9uIChjb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9sLmV4dGVudC5nZXRUb3BSaWdodChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKVsnMCddICE9XCJJbmZpbml0eVwiICYmIG9sLmV4dGVudC5nZXRUb3BSaWdodChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKVsnMCddICE9XCItSW5maW5pdHlcIil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0VG9wUmlnaHQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG9sLmV4dGVudC5nZXRUb3BMZWZ0KGZlYXR1cmUuZ2V0U291cmNlKCkuZ2V0RXh0ZW50KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0Qm90dG9tUmlnaHQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG9sLmV4dGVudC5nZXRCb3R0b21MZWZ0KGZlYXR1cmUuZ2V0U291cmNlKCkuZ2V0RXh0ZW50KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGxheWVySXRlbS50eXBlICE9PSBcIm92ZXJwYXNzXCIgJiYgbGF5ZXJJdGVtLnZlY3RvckxheWVyKXtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yQXJyYXkgPSBsYXllci5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVjdG9yQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggY2FzZSBvZiBsaW5rZWQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZlY3RvckFycmF5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yQXJyYXkgPSB1dGlscy5vYmplY3RUb0FycmF5KHZlY3RvckFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXAgPSBsYXllci52ZWN0b3JMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZWN0b3JBcnJheSAmJiB2ZWN0b3JBcnJheS5mb3JFYWNoICYmIHR5cGVvZiB2ZWN0b3JBcnJheS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmVjdG9yTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckxheWVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVjdG9yTGF5ZXIuZGF0YS5nZW9tZXRyeS50eXBlID09PSBcIlBvaW50XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBvbC5wcm9qLnRyYW5zZm9ybShbcGFyc2VGbG9hdCh2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdKV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllckdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIG1vcmUgY29tcGxleCBnZW9tZXRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3QgPSBsYXllckdyb3VwLmdldExheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVBcnJheSA9IGZlYXR1cmVMaXN0LmdldEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5ZXIudHlwZSAhPT0gXCJvdmVycGFzc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllci50eXBlID09PSBcImttbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGZlYXR1cmUuZ2V0U291cmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgc291cmNlRmVhdHVyZXMgPSBzb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZ2V0RXh0ZW50KCkuZm9yRWFjaChmdW5jdGlvbiAoY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG9sLmV4dGVudC5nZXRUb3BSaWdodChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0VG9wTGVmdChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0Qm90dG9tUmlnaHQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2gob2wuZXh0ZW50LmdldEJvdHRvbUxlZnQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGV4dGVudCA9IG9sLmV4dGVudC5ib3VuZGluZ0V4dGVudChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVudFswXSA9PT0gSW5maW5pdHkgfHwgZXh0ZW50WzBdID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwgc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKSk7XG4gICAgICAgICAgICAgICAgY2VudGVyID0gc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oY2VudGVyWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihbNTAsIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Wm9vbShtYXBEYXRhLm1pblpvb20gfHwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgLy9lbmQgb2Ygem9vbSB0byBleHRlbnRcbiAgICAgIC8vIGFkZCBob29rIGZ1bmN0aW9uIGZvciBjaGFuZ2VkIGxheWVyLXZpc2liaWxpdHlcbiAgICAgIC8vICAgbmVlZGVkIHRvIGNoYW5nZSB0aGUgZW50cnktY2xhc3Nlc1xuICAgICAgdGhpcy5wcm94eS5ob29rX2xheWVyX3Zpc2liaWxpdHkucHVzaChmdW5jdGlvbiAobGF5ZXJJZCkge1xuICAgICAgICB2YXIgaixcbiAgICAgICAgICAgIGNoYW5nZWRMYXllcjtcblxuICAgICAgICBjaGFuZ2VkTGF5ZXIgPSBzZWxmLmxheWVyc1tsYXllcklkXTtcbiAgICAgICAgaWYgKGNoYW5nZWRMYXllciAmJiBjaGFuZ2VkTGF5ZXIuJGVudHJpZXMpIHtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2hhbmdlZExheWVyLiRlbnRyaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllcklkXSkge1xuICAgICAgICAgICAgICBjaGFuZ2VkTGF5ZXIuJGVudHJpZXNbal0uYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoYW5nZWRMYXllci4kZW50cmllc1tqXS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5oYW5kbGVTZWxlY3RlZENoaWxkcyggY2hhbmdlZExheWVyLiRlbnRyaWVzW2pdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgaG9vayBmdW5jdGlvbiBmb3IgY2hhbmdlZCB6b29tXG4gICAgICAvLyAgIG5lZWRlZCB0byBjaGFuZ2UgdGhlIGVudHJ5LWNsYXNzZXNcbiAgICAgIHRoaXMucHJveHkuaG9va19tYXBfem9vbS5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGosXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGxheWVyO1xuXG4gICAgICAgIGZvciAoaWQgaW4gc2VsZi5sYXllcnMpIHtcbiAgICAgICAgICBpZiAoc2VsZi5sYXllcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICBsYXllciA9IHNlbGYubGF5ZXJzW2lkXTtcbiAgICAgICAgICAgIGlmIChsYXllciAmJiBsYXllci4kZW50cmllcykge1xuICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGF5ZXIuJGVudHJpZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5jaGVja0xheWVySXNBY3RpdmVGb3Jab29tKGlkKSkge1xuICAgICAgICAgICAgICAgICAgbGF5ZXIuJGVudHJpZXNbal0ucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkRJU0FCTEVEKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGF5ZXIuJGVudHJpZXNbal0uYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkRJU0FCTEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTsgLy8gZW5kIG9mIGhvb2tcblxuICAgICAgaWYgKGl0ZW1EYXRhICYmIGl0ZW1EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdWlkID0gaXRlbURhdGFbaV07XG4gICAgICAgICAgbGF5ZXIgPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbdWlkXTtcbiAgICAgICAgICBpdGVtID0ge307XG4gICAgICAgICAgdGhpcy5sYXllcnNbdWlkXSA9IGl0ZW07XG4gICAgICAgICAgLy8gcmVuZGVyU3BlY2lhbCBpcyBzZXQgd2hlbiBhIGxheWVyIGlzIHJlbmRlcmVkIGluIGl0cyBvd24gdGFiXG4gICAgICAgICAgaWYgKGxheWVyLnJlbmRlclNwZWNpYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsYXllciAmJiBsYXllci5kaXNwbGF5KSB7XG4gICAgICAgICAgICBsaXN0SXRlbSA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmVudHJ5V3JhcHBlcnMgPSBpdGVtLmVudHJ5V3JhcHBlcnMgfHwgW107XG4gICAgICAgICAgICBpdGVtLmVudHJ5V3JhcHBlcnMucHVzaChsaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICAgIGVudHJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxheWVyLm5hbWUpKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVudHJ5KTtcblxuICAgICAgICAgICAgJGVudHJ5ID0gJChlbnRyeSk7XG4gICAgICAgICAgICBpdGVtLiRlbnRyaWVzID0gaXRlbS4kZW50cmllcyB8fCBbXTtcbiAgICAgICAgICAgIGl0ZW0uJGVudHJpZXMucHVzaCgkZW50cnkpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJveHkuY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbSh1aWQpKSB7XG4gICAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuRElTQUJMRUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkZW50cnkuZGF0YSgndWlkJywgdWlkKTtcbiAgICAgICAgICAgICRlbnRyeS5jbGljayhmbkhhbmRsZUVudHJ5Q2xpY2spO1xuXG4gICAgICAgICAgICBpZiAobGF5ZXIudmlzaWJsZUNoaWxkcyB8fCBsYXllci5zcGxpdF9nZW9qc29uKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICBpZiAobGF5ZXIuaGlkZV9jaGlsZCAhPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICAgICAgJCh0b2dnbGUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkKHRvZ2dsZSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLnJpZ2h0U2xpZGVFbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLnJpZ2h0U2xpZGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKCdyaWdodCcsIHNlbGYuc3RhcmJvYXJkLmNvbnRhaW5lci5vZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkKHNlbGYuc3RhcmJvYXJkLmVsZW1lbnQpLmNzcygncmlnaHQnLCBzZWxmLnN0YXJib2FyZC5jb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgJCh0b2dnbGUpLmluc2VydEJlZm9yZSgkZW50cnkpO1xuICAgICAgICAgICAgICBjaGlsZFdyYXBwZXIgPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBpdGVtLmNoaWxkV3JhcHBlcnMgPSBpdGVtLmNoaWxkV3JhcHBlcnMgfHwgW107XG4gICAgICAgICAgICAgIGl0ZW0uY2hpbGRXcmFwcGVycy5wdXNoKGNoaWxkV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLmhpZGVfY2hpbGQgIT09ICcxJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihsYXllci5zcGxpdF9nZW9qc29uICYmIGxheWVyLmNvbnRlbnRbMF0pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGxheWVyLmNvbnRlbnRbMF0uZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlID0gZGF0YS5mZWF0dXJlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRMaXN0SXRlbSA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9e307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtLmVudHJ5V3JhcHBlcnMgPSBjaGlsZEl0ZW0uZW50cnlXcmFwcGVycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEl0ZW0uZW50cnlXcmFwcGVycy5wdXNoKGNoaWxkTGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVudHJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZlYXR1cmUucHJvcGVydGllc1tsYXllci5nZW9qc29uX2F0dHJpYnV0ZXMuc3BsaXQoJywnKVswXV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkRW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZFVpZCA9IHVpZCArIFwiXCIgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkY2hpbGRFbnRyeSA9ICQoY2hpbGRFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtLiRlbnRyaWVzID0gaXRlbS4kZW50cmllcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEl0ZW0uJGVudHJpZXMucHVzaCgkZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkV3JhcHBlci5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hpbGRFbnRyeS5kYXRhKCd1aWQnLCBjaGlsZFVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5ZXIuZ2VvanNvbl96b29tKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGlsZEVudHJ5LmNsaWNrKGZuQ2hpbGRFbnRyeVNob3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNoaWxkRW50cnkuYWRkQ2xhc3MoJ2M0Zy1nZW9qc29uLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNoaWxkRW50cnkuY2xpY2soZm5DaGlsZEVudHJ5Q2xpY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbdWlkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hpbGRFbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGlsZEVudHJ5LmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2suYWRkQ2hpbGRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5hZGRDaGlsZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYzRnLm1hcHMuaG9vay5zdGFyYm9hcmRfbGF5ZXJfYWN0aXZhdGUgJiYgYzRnLm1hcHMuaG9vay5zdGFyYm9hcmRfbGF5ZXJfYWN0aXZhdGUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbU9iaiA9IHsnZmVhdHVyZSc6IGZlYXR1cmUsICdwYXJlbnRJdGVtJzogY2hpbGRMaXN0SXRlbSwgJ2VudHJ5JzokY2hpbGRFbnRyeX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suc3RhcmJvYXJkX2xheWVyX2FjdGl2YXRlLCBwYXJhbU9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1t1aWRdKSB7XG4gICAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBbaW5mb106ICBJbiBvcmRlciBmb3IgdGhpcyB0byB3b3JrLFxuICAgICAgICAgICAgLy8gICAgICAgICAgdGhlIHBhcmVudCBsYXllcnMgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gICAgICAgICAgbGlzdGVkIGJlZm9yZSB0aGVpciBjaGlsZHNcbiAgICAgICAgICAgIGlmICh0aGlzLmxheWVyc1tsYXllci5waWRdKSB7XG4gICAgICAgICAgICAgIC8vIGlzIGNoaWxkLWVsZW1lbnRcbiAgICAgICAgICAgICAgcFdyYXBwZXIgPSB0aGlzLmxheWVyc1tsYXllci5waWRdLmNoaWxkV3JhcHBlcnM7XG4gICAgICAgICAgICAgIHBXcmFwcGVyW3BXcmFwcGVyLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChsYXllci5waWQsIDEwKSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGxheWVyIGlzIG1hcCBpdHNlbGYgd2l0aCBhIGxheWVyXG4gICAgICAgICAgICAgIHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgaWYobGF5ZXIuaGlkZV9jaGlsZCAhPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICQodG9nZ2xlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSUNPTik7XG4gICAgICAgICAgICAgICQodG9nZ2xlKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAkKHRvZ2dsZSkuaW5zZXJ0QmVmb3JlKCRlbnRyeSk7XG4gICAgICAgICAgICAgIGNoaWxkV3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGl0ZW0uY2hpbGRXcmFwcGVycyA9IGl0ZW0uY2hpbGRXcmFwcGVycyB8fCBbXTtcbiAgICAgICAgICAgICAgaXRlbS5jaGlsZFdyYXBwZXJzLnB1c2goY2hpbGRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBpcyBub3QgYSBjaGlsZC1lbGVtZW50IChwaWQgPT0gbWFwSWQpXG4gICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRzdHIgPSBsYXllci5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxheWVyQ2xhc3MgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIGlkc3RyLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICApLnJlcGxhY2UoLyVbMC05QS1GXXsyfS9naSwnJyk7XG4gICAgICAgICAgICAgICAgJChsaXN0SXRlbSkuYWRkQ2xhc3MoJ2M0Z19zdGFyYm9hcmRfaXRlbV8nK2xheWVyQ2xhc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhsYXllci5jc3NDbGFzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhbGwgaG9vayBcImxheWVyc3dpdGNoZXJfZm9yRWFjaEl0ZW1cIlxuICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5sYXllcnN3aXRjaGVyX2ZvckVhY2hJdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgYzRnLm1hcHMuaG9vay5sYXllcnN3aXRjaGVyX2ZvckVhY2hJdGVtLFxuICAgICAgICAgICAgICAgICAge3RoYXQ6IHRoaXMsIGl0ZW06IGl0ZW0sIGVudHJ5OiAkZW50cnl9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGVuZCBvZiBmb3ItbG9vcFxuXG4gICAgICAgIC8vIFN0YXJib2FyZCBGaWx0ZXJcbiAgICAgICAgaWYgKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICB2YXIgZHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR2LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1maWx0ZXIgYzRnLWNvbnRlbnQtc2VsZWN0XCI7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZpbHRlci50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgZmlsdGVyLnBsYWNlaG9sZGVyID0gXCJcIjsgLy9Gb250IEF3ZXNvbWVcbiAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgaS5jbGFzc05hbWUgPSAnZmFzIGZhLWZpbHRlcic7XG4gICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGR2LmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgICAgICBkdi5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgIGZpbHRlci5vbmtleXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlsdGVyX3VsbGkoZWxlbWVudCwgc2hvd1N1YnRyZWUpIHtcblxuICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFwcGx5IGZpbHRlciBmb3Igc2hvcnQgc2VhcmNoIHRlcm1zXG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd1N1YnRyZWUgPSBzaG93U3VidHJlZSB8fCBmYWxzZTsgIC8vIHVzZWQgd2hpbGUgdHJhdmVyc2luZyBkb3duIHRoZSB0cmVlXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgKG1vZGlmaWVkOiBmaXJzdCBlbGVtZW50KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudHMuIE9ubHkgZmluZHMgY2hpbGRyZW4gb2YgdGhlIGdpdmVuIHBhcmVudCBlbGVtZW50LCBidXRcbiAgICAgICAgICAgICAgICAgICAgICogbm8gZnVydGhlciBkZXNjZW5kYW50cyBsaWtlIGdldEVsZW1lbnRzQnlUYWdOYW1lIGRvZXMuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRDaGlsZHJlbkJ5VGFnTmFtZShlbGVtZW50LCB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuW2ldLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PSB0YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQucHVzaChlbGVtZW50LmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kWzBdOyAvLyAhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoRmxhZ1VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJ0cmVlTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBMSSBkb1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBjdXJyZW50IExJIGZvciBmaWx0ZXIgdGVybVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5pbm5lckhUTUwudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBhIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaWYgYSBzdWJ0cmVlIChVTCkgZXhpc3RzIGluIGN1cnJlbnQgTEkgKG1heCAxIGV4cGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVsID0gZ2V0Q2hpbGRyZW5CeVRhZ05hbWUoZWxlbWVudC5jaGlsZHJlbltpXSxcInVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNTdWJ0cmVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlTWF0Y2hlcyA9IGZpbHRlcl91bGxpKHVsLCBzaG93U3VidHJlZSB8fCBpc01hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc1N1YnRyZWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2ggfHwgc3VidHJlZU1hdGNoZXMgfHwgc2hvd1N1YnRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEZsYWdVbCA9IHRydWU7IC8vIHVzZWQgd2hpbGUgdHJhdmVyc2luZyB1cCB0aGUgdHJlZSBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjdXJyZW50IExJIHZpc2libGUgYW5kIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1jbG9zZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYzRnLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLXN0YXJib2FyZC1maWx0ZXItbWF0Y2hcIik7IC8vIGFsd2F5cyByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoID4gMCkge2VsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGN1cnJlbnQgTEkgaW52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hGbGFnVWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCByZWFjdCBpbW1lZGlhdGVseSBidXQgYWxsb3cgZm9yIHNvbWUga2V5c3Ryb2tlcyBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgLy8gdHdvIG9yIHplcm8gbGV0dGVycyBhcmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIudmFsdWUubGVuZ3RoICE9IDEpIGZpbHRlcl91bGxpKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jNGctbGF5ZXJ0cmVlID4gdWw6bnRoLWNoaWxkKDIpJykpXG4gICAgICAgICAgICAgICAgfSwgMzUwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZHYpO1xuXG4gICAgICAgIH1cbiAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiYWRkSXRlbXMoKVwiXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gd2hpY2ggY2hlY2tzIGZvciBhIGdpdmVuIGxheWVyIGlkLCBpZiBhbnkgb2YgdGhlIGNoaWxkcyBhcmUgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqIEBwYXJhbSBsYXllclVpZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNoZWNrQ2hpbGRTZWxlY3Rpb25zOiBmdW5jdGlvbiAobGF5ZXJVaWQpIHtcbiAgICAgIHZhciBsYXllcixcbiAgICAgICAgICBjaGlsZEFjdGl2ZSxcbiAgICAgICAgICBzZWxmO1xuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICBjaGlsZEFjdGl2ZSA9IDA7XG4gICAgICBsYXllciA9IHNlbGYucHJveHkubGF5ZXJDb250cm9sbGVyLmFyckxheWVyc1tsYXllclVpZF07XG4gICAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuY2hpbGRzICYmIGxheWVyLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxheWVyIGhhcyBjaGlsZHNcbiAgICAgICAgbGF5ZXIuY2hpbGRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKHNlbGYucHJveHkuYWN0aXZlTGF5ZXJJZHNbY2hpbGQuaWRdKSB7XG4gICAgICAgICAgICBjaGlsZEFjdGl2ZSA9IGNoaWxkQWN0aXZlICsgMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYW55IGNoaWxkcyBvZiBjaGlsZHMgYXJlIGFjdGl2ZVxuICAgICAgICAgICAgY2hpbGRBY3RpdmUgPSBjaGlsZEFjdGl2ZSArIHNlbGYuY2hlY2tDaGlsZFNlbGVjdGlvbnMoY2hpbGQudWlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkQWN0aXZlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNoZWNrQ2hpbGRTZWxlY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gZm9yIGNvbG9yaW5nIHRoZSBsYXllcnN3aXRjaGVyIGVudHJpZXMsIGlmIHRoZXJlIGFyZSBhbnkgc3VibGF5ZXJzIHNlbGVjdGVkXG4gICAgICogQHBhcmFtIGVudHJ5XG4gICAgICovXG4gICAgaGFuZGxlU2VsZWN0ZWRDaGlsZHM6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tDaGlsZFNlbGVjdGlvbnMoJChlbnRyeSkuZGF0YSgndWlkJykpID49IDEpIHtcbiAgICAgICAgJChlbnRyeSkuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGVudHJ5KS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ25vcm1hbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFyYm9hcmQudXBkYXRlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlUGFyZW50TGF5ZXJzOiBmdW5jdGlvbiAoZW50cnksIGxheWVyVWlkLCBjbGlja2VkTGF5ZXIpIHtcbiAgICAgIHZhciBsYXllcixcbiAgICAgICAgICBwYXJlbnRFbnRyeSxcbiAgICAgICAgICBwYXJlbnRMYXllcjtcblxuICAgICAgbGF5ZXIgPSB0aGlzLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbbGF5ZXJVaWRdO1xuICAgICAgaWYgKGxheWVyLnBpZCAhPSB0aGlzLnN0YXJib2FyZC5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5tYXBJZCkge1xuICAgICAgICAvLyB0aGUgbGF5ZXIgaGFzIHBhcmVudHNcbiAgICAgICAgLy8gYnkgdGhpcyB3ZSBjYW4gYWNjZXNzIG9ubHkgdGhlIHNpbmdsZSBzcGFuIHdoZXJlIHRoZSBwYXJlbnQgZW50cnkgaXMgaW5cbiAgICAgICAgcGFyZW50TGF5ZXIgPSB0aGlzLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbbGF5ZXIucGlkXTtcbiAgICAgICAgaWYgKHBhcmVudExheWVyKSB7XG4gICAgICAgICAgcGFyZW50RW50cnkgPSBlbnRyeS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdO1xuICAgICAgICAgIGlmIChwYXJlbnRFbnRyeSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbY2xpY2tlZExheWVyLmlkXSkge1xuICAgICAgICAgICAgICAkKHBhcmVudEVudHJ5KS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ2hpbGRTZWxlY3Rpb25zKCQocGFyZW50RW50cnkpLmRhdGEoJ3VpZCcpKSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgJChwYXJlbnRFbnRyeSkuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChwYXJlbnRFbnRyeSkuY3NzKCdmb250LXdlaWdodCcsICdub3JtYWwnKTtcbiAgICAgICAgICAgICAgICAvLyQocGFyZW50RW50cnkpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFyZW50TGF5ZXJzKHBhcmVudEVudHJ5LCBwYXJlbnRMYXllci5pZCwgcGFyZW50TGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBMYXllcnN3aXRjaGVyID0gdGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5MYXllcnN3aXRjaGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tbGF5ZXJzd2l0Y2hlci5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMubWlzYyA9IHRoaXMuYzRnLm1hcHMubWlzYyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW1NwaW5uZXIgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIENvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lciA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgc3Bpbm5lclNwYW47XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHRhcmdldDogJy4nICsgY3NzQ29uc3RhbnRzLk9MX1ZJRVdQT1JUXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3NOYW1lID0gJyAnICsgb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5TUElOTkVSICsgb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjc3NDb25zdGFudHMuSElERTtcbiAgICAkKG9wdGlvbnMudGFyZ2V0KS5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgIHNwaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwaW5uZXJTcGFuLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLkFOSU1BVElPTl9TUElOO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGlubmVyU3Bhbik7XG5cbiAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciA9IDA7XG5cbiAgfTtcblxuICAvLyBBZGQgbWV0aG9kcyB0byBzcGlubmVyXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5taXNjLlNwaW5uZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtzaG93IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5ISURFKSkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbaGlkZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ1NwaW5uZXIgaXMgYWxyZWFkeSBoaWRkZW4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgfSk7IC8vIEVuZCBvZiBcImFkZCBtZXRob2RzIHRvIHNwaW5uZXJcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBTcGlubmVyID0gdGhpcy5jNGcubWFwcy5taXNjLlNwaW5uZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtab29tbGV2ZWx9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsXCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogYzRnLU1hcHMgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLnV0aWxzID0gJC5leHRlbmQoYzRnLm1hcHMudXRpbHMsIHtcbiAgICAvKipcbiAgICAgKiAgQ29udmVydHMgdGhlIGZpcnN0IGxldHRlciBvZiBhIGdpdmVuIHN0cmluZyB0byB1cHBlcmNhc2UsIGxlYXZpbmcgdGhlIHJlbWFpbmluZyBzdHJpbmcgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogIEBwYXJhbSAgICB7c3RyaW5nfSAgICB0aGUgc3RyaW5nIHRvIGNhcGl0YWxpemVcbiAgICAgKlxuICAgICAqICBAcmV0dXJuICAge3N0cmluZ30gICAgdGhlIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcjogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiB1bmlxdWUgaWQuXG4gICAgICpcbiAgICAgKiBUaGUgaWQgaXMgOSBjaGFyYWN0ZXJzIGxvbmcgYW5kIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICBUaGUgZ2VuZXJhdGVkIGlkLlxuICAgICAqL1xuICAgIGdldFVuaXF1ZUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAgICAgLy8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcbiAgICAgIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICAgICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgbm90IGJyZWFrIHRoZSBDb2RlLlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXCAtPiBcXFxcO1xuICAgICAqICAgXCIgLT4gJyc7XG4gICAgICogICDDhCAtPiAmQXVtbDtcbiAgICAgKiAgIMOkIC0+ICZhdW1sO1xuICAgICAqICAgw5YgLT4gJk91bWw7XG4gICAgICogICDDtiAtPiAmb3VtbDtcbiAgICAgKiAgIMOcIC0+ICZVdW1sO1xuICAgICAqICAgw7wgLT4gJnV1bWw7XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGVuY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXC9nLCAnXFxcXFxcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcXCIvZywgJ1xcJ1xcJydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw4QvZywgJyZBdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw6QvZywgJyZhdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5YvZywgJyZPdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7YvZywgJyZvdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5wvZywgJyZVdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7wvZywgJyZ1dW1sOydcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGVuY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBiZSBkaXNwbGF5ZWQgY29ycmVjdGx5LlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXFxcICAgICAtPiBcXDtcbiAgICAgKiAgICcnICAgICAtPiBcIjtcbiAgICAgKiAgICZBdW1sOyAtPiDDhFxuICAgICAqICAgJmF1bWw7IC0+IMOkXG4gICAgICogICAmT3VtbDsgLT4gw5ZcbiAgICAgKiAgICZvdW1sOyAtPiDDtlxuICAgICAqICAgJlV1bWw7IC0+IMOcXG4gICAgICogICAmdXVtbDsgLT4gw7xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVjb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXFxcXFwvZywgJ1xcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcJ1xcJy9nLCAnXFxcIidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJkF1bWw7L2csICfDhCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJmF1bWw7L2csICfDpCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJk91bWw7L2csICfDlidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJm91bWw7L2csICfDtidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJlV1bWw7L2csICfDnDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZ1dW1sOy9nLCAnw7wnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBkZWNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yIHJlcGxhY2UgYW4gVVJMLXBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIGBwYXJhbWAsXG4gICAgICogd2lsbCBiZSBhcHBsaWVkIGFzIFwiaGFzaC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcyNwYXJhbVxuICAgICAqIE5vdGUsIHRoYXQgYWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIHdoZXJlYXMgZXhpc3RpbmcgXCJHRVQtcGFyYW1ldGVyc1wiIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIHNldCwgaXQgd2lsbCBiZSBhcHBsaWVkIGFzIFwiR0VULXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzP29wdF9nZXRLZXk9cGFyYW1cbiAgICAgKiBJZiB0aGUga2V5IGRlc2NyaWJlZCBieSBgb3B0X2dldEtleWAgaXMgYWxyZWFkeSBleGlzdGluZywgaXRzIHZhbHVlIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIG90aGVyd2lzZSB0aGUga2V5LXZhbHVlLXBhaXIgd2lsbCBiZSBhcHBlbmRlZCBhcHByb3ByaWF0bHkuXG4gICAgICogQWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2V4ZWN1dGVgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgbmV3IGxpbmsgYXMgYHN0cmluZ2AsXG4gICAgICogb3RoZXJ3aXNlIHRoZSBcImhyZWYvbG9jYXRpb25cIiB3aWxsIGJlIGNoYW5nZWQgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIsIHdoaWNoIGNhbiBjYXVzZSBhIHBhZ2VyZWxvYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBwYXJhbSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufHN0cmluZ30gIG9wdF9nZXRLZXkgICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgIG9wdF9leGVjdXRlICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqL1xuICAgIHNldFVybFBhcmFtOiBmdW5jdGlvbiAocGFyYW0sIG9wdF9nZXRLZXksIG9wdF9leGVjdXRlKSB7XG4gICAgICB2YXIgbGluayxcbiAgICAgICAgICBzZWFyY2hQYXJhbSxcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkLFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxpbmsgPSBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIC8vIHVzZSBoYXNoLXBhcmFtZXRlclxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gcGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBsb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBHRVQtcGFyYW1ldGVyXG4gICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYWxyZWFkeSBzZWFyY2gtcGFyYW1ldGVyc1xuICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICBvcHRfZ2V0S2V5ID0gb3B0X2dldEtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIC8vIHJlcGxhY2UgcGFyYW1ldGVyIGlmIGFscmVhZHkgZXhpc3RlbnRcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFxuICAgICAgICAgICAgICAvKFtePVxcP1xcJl0rKT0oW14mXSspL2dpLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gb3B0X2dldEtleSkge1xuICAgICAgICAgICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFwcGVuZCBhcyBuZXcgcGFyYW1ldGVyXG4gICAgICAgICAgaWYgKCFwYXJhbVJlcGxhY2VkKSB7XG4gICAgICAgICAgICBzZWFyY2hQYXJhbSArPSAnJicgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCBiZSB0aGUgb25seSBzZWFyY2gtcGFyYW1ldGVyIGluIHRoZSBVUkxcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9ICc/JyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5zZWFyY2ggPSBzZWFyY2hQYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IHNlYXJjaFBhcmFtICsgbG9jYXRpb24uaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSwgLy8gZW5kIG9mIHNldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIEdldCBzZWFyY2ggb3IgaGFzaCBVUkwtcGFyYW1ldGVyIGFzIHN0cmluZy5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgaGFzaC1wYXJhbWV0ZXIgb2YgdGhlIFVSTCBpcyByZXR1cm5lZCxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCBzZWFyY2ggZm9yIGEgR0VULXBhcmFtZXRlciBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIElmIGEgcGFyYW1ldGVyIGlzIG5vdCBleGlzdGVudCwgb3IgZW1wdHksIGFuIGVtcHR5IHN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxzdHJpbmd9ICBvcHRfZ2V0S2V5ICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm91bmQgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGdldFVybFBhcmFtOiBmdW5jdGlvbiAob3B0X2dldEtleSkge1xuICAgICAgdmFyIHBhcmFtLFxuICAgICAgICAgIHJlZ0V4O1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgcGFyYW0gPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgcGFyYW0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWdFeCA9IG5ldyBSZWdFeHAoJ1tcXD9cXCZdJyArIG9wdF9nZXRLZXkgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICAgIHBhcmFtID0gcmVnRXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogRGVsdGEtZW5jb2RlIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAgICogTm90ZSB0aGF0IHRoZSBhcnJheSB3aWxsIGJlIHNvcnRlZCAobG93ZXN0IHRvIGhpZ2hlc3QpXG4gICAgICogYmVmb3JlIGVuY29kaW5nLlxuICAgICAqXG4gICAgICogU28gYWZ0ZXIgdGhlIGVuY29kaW5nIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvbnRhaW5zXG4gICAgICogdGhlIHNtYWxsZXN0IG51bWJlciBvZiB0aGUgc2V0IGFuZCBlYWNoIGZvbGxvd2luZyBudW1iZXIganVzdFxuICAgICAqIHJlcHJlc2VudHMgdGhlIG9mZnNldCB0byBpdHMgcHJldmlvdXMgbmVpZ2hib3IuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG1vc3RseSBlZmZpY2llbnQgZm9yIGhpZ2ggbnVtYmVycywgdGhhdCBhcmUgXCJjbG9zZSB0byBlYWNoIG90aGVyXCIuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgWzEzMzcsIDExLCAxMDEsIDEyMywgOTYsIDY5LCA0MiwgNDJdXG4gICAgICogICB3aWxsIGJlIHNvcnRlZFxuICAgICAqICAgWzExLCA0MiwgNDIsIDY5LCA5NiwgMTAxLCAxMjMsIDEzMzddXG4gICAgICogICBhbmQgZW5jb2RlZCB0b1xuICAgICAqICAgWzExLCAzMSwgMCwgMjcsIDI3LCA1LCAyMiwgMTIxNF1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRW5jb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoYXJySW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBhcnJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgYXJySW5wdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICB9KTtcblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBhcnJJbnB1dFswXTtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBhcnJJbnB1dFtpXSAtIGFycklucHV0W2kgLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YUVuY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBkZWx0YS1lbmNvZGVkIGFycmF5LlxuICAgICAqIFNlZSBgZGVsdGFFbmNvZGVgIGZ1bmN0aW9uIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFEZWNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBwYXJzZUludChhcnJJbnB1dFswXSwgMTApO1xuICAgICAgaWYgKGlzTmFOKGFycklucHV0WzBdKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gcGFyc2VJbnQoYXJySW5wdXRbaV0sIDEwKSArIGFyck91dHB1dFtpIC0gMV07XG4gICAgICAgIGlmIChpc05hTihhcnJPdXRwdXRbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFEZWNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGNhbGwgZnVuY3Rpb25zIGluIGBhcnJIb29rRnVuY3Rpb25zYCB3aXRoIGdpdmVuIGBwYXJhbWV0ZXJzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxmdW5jdGlvbj59ICAgYXJySG9va0Z1bmN0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHttaXhlZH0gICAgICAgICAgICAgcGFyYW1ldGVycyAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNhbGxIb29rRnVuY3Rpb25zOiBmdW5jdGlvbiAoYXJySG9va0Z1bmN0aW9ucywgcGFyYW1ldGVycykge1xuICAgICAgdmFyIGo7XG5cbiAgICAgIGlmIChhcnJIb29rRnVuY3Rpb25zICYmIGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJySG9va0Z1bmN0aW9uc1tqXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJySG9va0Z1bmN0aW9uc1tqXShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJjYWxsSG9va0Z1bmN0aW9ucygpXCJcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBoZXgtZm9ybWF0ZWQgY29sb3IgdmFsdWUgaW50byByZ2JhKCktZm9ybWF0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBoZXggICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgb3B0X29wYWNpdHkgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHk6IGZ1bmN0aW9uIChoZXgsIG9wdF9vcGFjaXR5LCBvcHRfYXJyYXkpIHtcblxuICAgICAgdmFyIGJpZ2ludCwgciwgZywgYiwgYTtcblxuICAgICAgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgb3B0X29wYWNpdHkudmFsdWUgPSBwYXJzZUludChvcHRfb3BhY2l0eS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiB0eXBlb2Ygb3B0X29wYWNpdHkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0X29wYWNpdHkgPT09ICdvYmplY3QnICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSBvcHRfb3BhY2l0eS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgICBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICAgIGIgPSBiaWdpbnQgJiAyNTU7XG4gICAgICBhID0gb3B0X29wYWNpdHkgPyAob3B0X29wYWNpdHkgLyAxMDApIDogMTtcbiAgICAgIGlmKG9wdF9hcnJheSl7XG4gICAgICAgIHJldHVybiBbcixnLGIsYV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZHVjZSBhIGRlZmluZWQgc3R5bGUsIHRvIGEgc2ltcGxlciB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogVGhlIHJlZHVjZWQgc3R5bGUgaXMgdGhlIGZpcnN0IHN0eWxlIG9mIHRoZSBkZWZpbmVkIHN0eWxlc2V0LFxuICAgICAqIHdpdGggYSAxcHggdGhpY2sgc3Ryb2tlIGFuZCBhIGNpcmNsZSB3aXRoIGEgNXB4IHJhZGl1cy5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBhZGRpdGlvbmFsIGdlb21ldHJpZXMgd2l0aCBhIG1haW4tZ2VvbWV0cnksXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gZGVmaW5lIGEgd2hvbGUgbmV3IHN0eWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcnxzdHJpbmd9ICAgICAgICAgICBzdHlsZUlkICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8b2wuc3R5bGUuU3R5bGU+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZWR1Y2VTdHlsZTogZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHZhciBzdHlsZSxcbiAgICAgICAgICByZWR1Y2VkU3R5bGUsXG4gICAgICAgICAgZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZVN0eWxlO1xuXG4gICAgICBpZiAoIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdIHx8ICFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHN0eWxlID0gYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUoKVswXTtcblxuICAgICAgZmlsbFN0eWxlID0gc3R5bGUuZ2V0RmlsbCgpO1xuICAgICAgc3Ryb2tlU3R5bGUgPSBzdHlsZS5nZXRTdHJva2UoKTtcbiAgICAgIHN0cm9rZVN0eWxlLnNldFdpZHRoKDEpO1xuXG4gICAgICByZWR1Y2VkU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pLFxuICAgICAgICAvLyB0ZXh0OiBzdHlsZS5nZXRUZXh0KCksXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBbcmVkdWNlZFN0eWxlXTtcbiAgICB9LCAvLyBlbmQgb2YgXCJyZWR1Y2VTdHlsZVwiXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBnaXZlbiBnZW9tZXRyeS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBnZW9tZXRyeSBpcyBhIGBMaW5lU3RyaW5nYCB0aGUgZnVuY3Rpb24gd2lsbCBtZWFzdXJlIGl0cyBsZW5ndGgsXG4gICAgICogaXMgaXQgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIHRoZSBhY3JlYWdlLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiBgMGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgb3B0aW9uYWwgYG9wdF9mb3JjZUxpbmVNZWFzdXJlYCBwYXJhbWV0ZXIgaXMgYHRydWVgXG4gICAgICogYW5kIHRoZSBnZW9tZXRyeSBpcyBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgaXRzIHBlcmltZXRlciBpbnN0ZWFkXG4gICAgICogb2YgaXRzIGFjcmVhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuZ2VvbS5MaW5lU3RyaW5nfG9sLmdlb20uUG9seWdvbn0gICBnZW9tZXRyeSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgIG9wdF9mb3JjZUxpbmVNZWFzdXJlICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8c3RyaW5nPnxudW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1lYXN1cmVHZW9tZXRyeTogZnVuY3Rpb24gKGdlb21ldHJ5LCBvcHRfZm9yY2VMaW5lTWVhc3VyZSwgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICBzcGhlcmUsXG4gICAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgICAgY29vcmQxLFxuICAgICAgICAgIGNvb3JkMixcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vc3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcgfHwgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uICYmIG9wdF9mb3JjZUxpbmVNZWFzdXJlKSkge1xuXG4gICAgICAgIGNvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgICBjb29yZDEgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICBjb29yZDIgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpICsgMV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgdmFsdWUgKz0gb2wuc3BoZXJlLmdldERpc3RhbmNlKGNvb3JkMSwgY29vcmQyLCA2Mzc4MTM3KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgIC8vZ2VvbWV0cnkgPSAvKiogQHR5cGUge29sLmdlb20uUG9seWdvbn0gKi8oZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSk7XG4gICAgICAgIC8vY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRMaW5lYXJSaW5nKDApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnMob2wuc3BoZXJlLmdldEFyZWEoZ2VvbWV0cnkpKTtcbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSAmJiBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhbHVlID0gTWF0aC5QSSAqIE1hdGguc3FydCh2YWx1ZSk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChyZXN1bHQucmF3VmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQoKHZhbHVlICogMTAwKSAvIDEwMCkgLyAxMDAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV4dGVudCBmb3IgYW4gYXJyYXkgb2YgZ2VvbWV0cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheS48b2wuZ2VvbS5zaW1wbGVHZW9tZXRyeT59ICBhcnJHZW9tZXRyaWVzICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7b2wuRXh0ZW50fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEV4dGVudEZvckdlb21ldHJpZXM6IGZ1bmN0aW9uIChhcnJHZW9tZXRyaWVzKSB7XG4gICAgICB2YXIgZXh0ZW50U291cmNlO1xuXG4gICAgICBpZiAoIWFyckdlb21ldHJpZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHZW9tZXRyaWVzIG1pc3NpbmcgZm9yIGV4dGVudCBjYWxjdWxhdGlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGV4dGVudFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICBleHRlbnRTb3VyY2UuYWRkRmVhdHVyZXMoYXJyR2VvbWV0cmllcyk7XG5cbiAgICAgIHJldHVybiBleHRlbnRTb3VyY2UuZ2V0RXh0ZW50KCkgfHwgb2wuRXh0ZW50KFswLCAwLCAwLCAwXSk7XG4gICAgfSwgLy8gZW5kIG9mIGdldEV4dGVudEZvckdlb21ldHJpZXMoKVxuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBhcnJheSBvZiBgZXh0ZW50c2AuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgZXh0ZW50cyAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnRzOiBmdW5jdGlvbiAoZXh0ZW50cywgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICBrZXk7XG5cbiAgICAgIGlmICghZXh0ZW50cyB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9leHRlbnQgPSBvbC5leHRlbnQuY3JlYXRlRW1wdHkoKTtcblxuICAgICAgZm9yIChrZXkgaW4gZXh0ZW50cykge1xuICAgICAgICBpZiAoZXh0ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHRlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGV4dGVudCA9IGV4dGVudHNba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2wuZXh0ZW50LmV4dGVuZChleHRlbnQsIGV4dGVudHNba2V5XSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maXRUb0V4dGVudChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIDUsIDAsIDAsIDIpO1xuXG5cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnRzXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGBleHRlbnRgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLkV4dGVudH0gIGV4dGVudCAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7YXJyYXl9ICAgICAgb3B0X3BhZGRpbmcgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluWm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21heFpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5SZXNvbHV0aW9uICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50OiBmdW5jdGlvbiAoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24sIG9wdF9taW5ab29tLCBvcHRfbWF4Wm9vbSwgb3B0X21pblJlc29sdXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZml0T3B0aW9ucztcblxuICAgICAgaWYgKCFleHRlbnQgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGZpdE9wdGlvbnMgPSB7XG4gICAgICAgICdwYWRkaW5nJzogb3B0X3BhZGRpbmcgfHwgWzI1LCAyNSwgMjUsIDI1XVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdF9taW5SZXNvbHV0aW9uICYmIG9wdF9taW5SZXNvbHV0aW9uID4gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblJlc29sdXRpb24gPSBvcHRfbWluUmVzb2x1dGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9taW5ab29tICYmIG9wdF9taW5ab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5ab29tID0gb3B0X21pblpvb207XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWF4Wm9vbSAmJiBvcHRfbWF4Wm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWF4Wm9vbSA9IG9wdF9tYXhab29tO1xuICAgICAgfVxuXG4gICAgICAvLyBhbmltYXRlIHRoZSBcImZpdHRpbmdcIiB3aGVuIGEgZHVyYXRpb24gaXMgZ2l2ZW4gYW5kIGl0cyBncmVhdGVyIHRoYW4gMFxuICAgICAgaWYgKG9wdF9hbmltYXRpb25EdXJhdGlvbiAmJiBvcHRfYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgY2VudGVyOiBbMCwgMF1cbiAgICAgICAgICAvL3JvdGF0aW9uOiBNYXRoLlBJXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtYXAuYmVmb3JlUmVuZGVyKFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnBhbih7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgc291cmNlOiB2aWV3LmdldENlbnRlcigpXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi56b29tKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpLCB7cGFkZGluZzogWzI1LCAyNSwgMjUsIDI1XX0pO1xuICAgICAgICAvL3ZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSk7XG4gICAgICAgIC8vdmlldy5zZXRab29tKHZpZXcuZ2V0Wm9vbSgpLTEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudCgpXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBydW4gYWxsIHBsYWNlaG9sZGVyIGZ1bmN0aW9ucyBhdCBvbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgc3RySW5wdXQgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgICAgICAgICAgICAgZmVhdHVyZSAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyIHwgdW5kZWZpbmVkfSAgb3B0X2xheWVyICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQWxsUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgLy8gb25seSBjaGVjayB0aGUgZmlyc3QgdHdvIHBhcmFtZXRlcnMgYXMgdGhleSB3aWxsIGJlIHVzZWQgYnkgYWxsIHBsYWNlaG9sZGVyLWZ1bmN0aW9uc1xuICAgICAgLy8gLT4gZm9yIHBlcmZvcm1hbmNlXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcik7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUFsbFBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHtGTmZ1bmN0aW9uTmFtZX1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgd2luZG93LmZ1bmN0aW9uTmFtZShmZWF0dXJlLCBzdHlsZSlgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKiBTdHlsZSB3aWxsIGJlIHRha2VuIGVpdGhlciBmcm9tIHRoZSBmZWF0dXJlLCBvciB0aGUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyfSAgbGF5ZXIgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8ICFsYXllcikge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxce0ZOKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBmdW5jdGlvbk5hbWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZ1bmN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSAmJiB0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSgpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxheWVyLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGxheWVyLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbZnVuY3Rpb25OYW1lXShmZWF0dXJlLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMsIGluIGBzdHJJbnB1dGAsIGZvciB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBnZW9FZGl0b3IuXG4gICAgICogVmFsaWQgcGxhY2Vob2xkZXJzIGFyZTogKFtrZXldIHJlcHJlc2VudHMgdGhlIHN0cmluZ25hbWUgb2YgdGhlIHZhcmlhYmxlcyBrZXkpXG4gICAgICogICBgJHtFTFtrZXldfWAgICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZMW2tleV19YCAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGUsIGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAqICAgYCR7RVZba2V5XX1gICAgPT4gIFZhbHVlIG9mIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZWW2tleV19YCAgPT4gIFNhbWUgYXMgYCR7RVZba2V5XX1gXG4gICAgICpcbiAgICAgKiBJZiBubyBhcHByb3ByaWF0ZSB2YWx1ZSBjYW4gYmUgZm91bmQgZm9yIGEgcGxhY2Vob2xkZXJcbiAgICAgKiBpdCB3aWxsIHNpbXBseSBiZSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KEVWP1tMVl0pKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB0eXBlLCBldktleSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBlZGl0b3JWYXJzLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaGFzIGVkaXRvclZhcnNcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpKSB7XG4gICAgICAgICAgICAgIGVkaXRvclZhcnMgPSBmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpO1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggZm9yIGVkaXRvclZhciB3aXRoIGtleSA9PSBldktleVxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWRpdG9yVmFycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChlZGl0b3JWYXJzW2ldLmtleSA9PT0gZXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgJ0VWTCcgZGlzcGxheSBsYWJlbCBvbmx5IGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdFTCcgfHwgKHR5cGUgPT09ICdFVkwnICYmIGVkaXRvclZhcnNbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHthdHRyfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGBmZWF0dXJlLmdldChhdHRyKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBhdHRyLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0KGF0dHIpIHx8ICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycygpXG5cbiAgICBvYmplY3RUb0FycmF5OiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iamVjdCA9IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LCAvLyBlbmQgb2Ygb2JqZWN0VG9BcnJheSgpXG5cbiAgICBnZXRWZWN0b3JMYXllcihzb3VyY2UsIHN0eWxlKSB7XG4gICAgICAgIHZhciBmblN0eWxlO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzdHlsZSBpcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHN0eWxlOiBmblN0eWxlXG4gICAgICAgIH0pO1xuICAgIH0sLy8gZW5kIG9mIFwiZ2V0VmVjdG9yTGF5ZXIoKVwiXG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgc3ViZG9tYWluIGZyb20gdGhlIGN1cnJlbnQgcmVxdWVzdCBob3N0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCAqfVxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdWJkb21haW4oKSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIHJlZHJhd01hcFZpZXc6IGZ1bmN0aW9uIChtYXBDb250cm9sbGVyKSB7XG4gICAgICB2YXIgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lclRvcExlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgIG1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LnByZXBlbmQoY29udHJvbENvbnRhaW5lclRvcExlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAkKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KS5hZnRlcihjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG4gICAgICBtYXBDb250cm9sbGVyLmxlZnRTbGlkZUVsZW1lbnRzLnB1c2goY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgICBpZiAobWFwRGF0YS5zY2FsZWxpbmUpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lID0gbmV3IG9sLmNvbnRyb2wuU2NhbGVMaW5lKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCxcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICB9XG5cbiAgICAgICQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpLmFwcGVuZChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yik7XG5cbiAgICAgIGlmIChtYXBEYXRhLnpvb21sZXZlbCkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwgPSBuZXcgWm9vbWxldmVsKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXBEYXRhLm1vdXNlcG9zaXRpb24pIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24gPSBuZXcgb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uKHtcbiAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBjb29yZGluYXRlRm9ybWF0OiBvbC5jb29yZGluYXRlLnRvU3RyaW5nSERNUyxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgJyc7XG4gICAgfSxcbiAgICBzdG9yZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTsgLy8gb25seSBzdHJpbmdzXG4gICAgfVxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgdXRpbHMgPSB0aGlzLmM0Zy5tYXBzLnV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9