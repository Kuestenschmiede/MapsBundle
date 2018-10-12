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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-sideboard.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtbWlzYy1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnN0YW50IiwiJCIsImkxOG4iLCJleHRlbmQiLCJMQU5HIiwiTkFNRSIsIkhJREUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfRURJVE9SIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJDVFJMX0lORk9QQUdFIiwiQ1RSTF9BRERJVElPTkFMUEFORUwiLCJDVFJMX0FDQ09VTlQiLCJDVFJMX1pPT01MRVZFTCIsIkNUUkxfTU9VU0VDT09SRFMiLCJDVFJMX0dFT1NFQVJDSCIsIkNUUkxfU1RBUlRfU0VBUkNIIiwiQ1RSTF9PVkVSVklFV01BUCIsIkNUUkxfR0VPQk9PS01BUktTIiwiQ1RSTF9TSURFQk9BUkQiLCJDVFJMX1NUQVJCT0FSRCIsIkNUUkxfQVRUUklCVVRJT04iLCJDVFJMX0dSSUQiLCJDVFJMX1BFUk1BTElOSyIsIkNUUkxfRlVMTFNDUkVFTiIsIkNUUkxfUFJJTlQiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0JBU0VMQVlFUiIsIlNUQVJCT0FSRF9MQVlFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTSURFQk9BUkQiLCJST1VURVJfVklFV19BRERSRVNTX0lOUFVUIiwiUk9VVEVSX0ZST01fTEFCRUwiLCJST1VURVJfT1ZFUl9MQUJFTCIsIlJPVVRFUl9UT19MQUJFTCIsIlJPVVRFUl9DTEVBUl9USVRMRSIsIlJPVVRFUl9DTEVBUl9IVE1MIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX0ZST00iLCJST1VURVJfVE8iLCJST1VURVJfRklORF9ST1VURSIsIlJPVVRFUl9MT0NfUk9VVEVfVE8iLCJST1VURVJfUk9VVEVERVNDIiwiUk9VVEVSX1JPVVRFTkFNRSIsIlJPVVRFUl9ESVNUQU5DRSIsIlJPVVRFUl9USU1FIiwiUk9VVEVSX1JFVl9HRU9DT0RJTkciLCJST1VURVJfRVJST1JfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9TRUFSQ0hJTkciLCJST1VURVJfRVJST1JfU0VBUkNISU5HIiwiUk9VVEVSX0NBTENfUk9VVEUiLCJST1VURVJfRVJST1JfQ0FMQ19ST1VURSIsIk1FQVNVUkVUT09MUyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJHRU9CT09LTUFSS1NfUExBQ0VIT0xERVIiLCJJTkZPUEFHRSIsIkFERElUSU9OQUxQQU5FTCIsIkFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwiTk9ORSIsImpRdWVyeSIsImxhbmdDb25zdGFudHMiLCJjc3MiLCJPUEVOIiwiQ0xPU0VBQkxFIiwiRU5BQkxFRCIsIkRJU0FCTEVEIiwiSUNPTiIsIkNPTlRST0wiLCJDT1BZIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJMT0FESU5HIiwiQU5JTUFUSU9OX1NQSU4iLCJMQVJHRSIsIlNNQUxMIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiQVRUUklCVVRJT05fTE9HTyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsIkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQiLCJFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkciLCJFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT04iLCJFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRSIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfRFJBV19PUFRJT05TIiwiR0VPU0VBUkNIIiwiR0VPU0VBUkNIX1dSQVBQRVIiLCJHRU9TRUFSQ0hfVFJJR0dFUiIsIkdFT1NFQVJDSF9TVEFSVCIsIkdSQVRJQ1VMRSIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUUiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUiIsIlRPT0xUSVBfUE9QVVAiLCJaT09NX0xFVkVMIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfQ0xFQVIiLCJST1VURVJfQlVUVE9OQkFSIiwiUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUiIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX0hHViIsIlJPVVRFUl9QUk9GSUxFX0JJS0UiLCJST1VURVJfUFJPRklMRV9GT09UIiwiUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU0iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU4iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9PVkVSTEFZQ09OVEFJTkVSIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRSIsIk9MX1ZJRVdQT1JUIiwiT0xfWk9PTSIsIk9MX1pPT01fSU4iLCJPTF9aT09NX0VYVCIsIk9MX1pPT01fSE9NRSIsIk9MX1pPT01fUE9TIiwiT0xfWk9PTV9XSVRIX0VYVCIsIk9MX1pPT01fV0lUSF9IT01FIiwiT0xfWk9PTV9XSVRIX1BPUyIsIk9MX1pPT01fU0xJREVSIiwiT0xfWk9PTV9XSVRIX1NMSURFUiIsImNzc0NvbnN0YW50cyIsImNvbnRyb2wiLCJTaWRlYm9hcmQiLCJvcHRpb25zIiwiY3JlYXRlIiwiZXh0RGl2IiwiZGVmYXVsdE9wZW4iLCJtYXBDb250cm9sbGVyIiwidW5kZWZpbmVkIiwibmFtZSIsImRpcmVjdGlvbiIsImlkZW50aWZpZXIiLCJjc3NuYW1lIiwiaW5pdGlhbGl6ZWQiLCJ0aXBMYWJlbCIsImhlYWRsaW5lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsImJ1dHRvbiIsInNwaW5uZXIiLCJ3cmFwcGVyIiwidGl0bGVCYXIiLCJ0b3BUb29sYmFyIiwiY29udGVudENvbnRhaW5lciIsImJvdHRvbVRvb2xiYXIiLCJzdGF0dXNCYXIiLCJzZWN0aW9ucyIsInZpZXdUcmlnZ2VyQmFyIiwidmlld3MiLCJhY3RpdmVWaWV3IiwicGF1c2VkVmlldyIsIm9sIiwiQ29udHJvbCIsImNhbGwiLCJ0YXJnZXQiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsInNlbGYiLCJpbml0Q2xhc3MiLCJ0aXRsZUJ1dHRvbkJhciIsImNsb3NlQnV0dG9uIiwiY2FwaXRhbGl6ZWROYW1lIiwiaGlkZUJ1dHRvbiIsImNhY2hpbmciLCJ1dGlscyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIm9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInRvZ2dsZSIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJhZGRDbGFzcyIsInN0eWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJnZXRUYXJnZXQiLCJhcHBlbmQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJjbGFzc05hbWUiLCJhZGRTZWN0aW9uIiwiY29udGVudEhlYWRsaW5lIiwiaW5uZXJIVE1MIiwiU3Bpbm5lciIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjbG9zZSIsInVwZGF0ZSIsImdldFZhbHVlIiwib3BlbiIsIm9wdF9ldmVudCIsImNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCIsImNvbnRhaW5lck9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJkaXNwbGF5Iiwib2Zmc2V0V2lkdGgiLCJmb3JFYWNoIiwib3B0X29wdGlvbnMiLCJpbml0IiwicHJlT3BlbkZ1bmN0aW9uIiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmF0ZSIsImhhc0NsYXNzIiwic3RvcmVWYWx1ZSIsInBvc3RPcGVuRnVuY3Rpb24iLCJpc09wZW4iLCJvcHRfaGlkZSIsIm9wdF9vcGVuT3RoZXJTaWRlYm9hcmQiLCJwcmVIaWRlRnVuY3Rpb24iLCJwcmVDbG9zZUZ1bmN0aW9uIiwiZGVhY3RpdmF0ZSIsIm1ha2VCdXR0b24iLCJsYWJlbCIsImNsaWNrQWN0aW9uIiwiaWQiLCJzZWN0aW9uIiwidHlwZSIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwibmV3RWxlbWVudCIsInJlbW92ZUNoaWxkIiwicHVzaCIsImFkZFZpZXciLCJvcHRfdmlld1Njb3BlIiwidmlld1Njb3BlIiwiYWRkaXRpb25hbFRyaWdnZXJDbGFzcyIsInRyaWdnZXIiLCJ2aWV3IiwidHJpZ2dlckNvbmZpZyIsInNlY3Rpb25FbGVtZW50cyIsImluaXRGdW5jdGlvbiIsImFjdGl2YXRlRnVuY3Rpb24iLCJkZWFjdGl2YXRlRnVuY3Rpb24iLCJwYXVzZWQiLCJvcHRfb3BlblNpZGVib2FyZCIsImkiLCJ3aXRoSGVhZGxpbmUiLCJsZW5ndGgiLCJvcHRfcGF1c2UiLCJab29tbGV2ZWwiLCJ1cGRhdGVab29tbGV2ZWwiLCJtYXBWaWV3IiwidW5kZWZpbmVkSFRNTCIsImdldFpvb20iLCJwYXJzZUludCIsIm1pc2MiLCJzcGlubmVyU3BhbiIsImFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciIsInNob3ciLCJoaWRlIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImdldFVuaXF1ZUlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlR2VvSnNvblByb3BlcnR5IiwiaW5wdXQiLCJvdXRwdXQiLCJyZXBsYWNlIiwiZGVjb2RlR2VvSnNvblByb3BlcnR5Iiwic2V0VXJsUGFyYW0iLCJwYXJhbSIsIm9wdF9nZXRLZXkiLCJvcHRfZXhlY3V0ZSIsImxpbmsiLCJzZWFyY2hQYXJhbSIsInBhcmFtUmVwbGFjZWQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiaGFzaCIsInNlYXJjaCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJrZXkiLCJ2YWx1ZSIsIm9mZnNldCIsIm9yaWdpblN0cmluZyIsImdldFVybFBhcmFtIiwicmVnRXgiLCJzdWJzdHJpbmciLCJSZWdFeHAiLCJleGVjIiwiZGVsdGFFbmNvZGUiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsInNvcnQiLCJhIiwiYiIsImRlbHRhRGVjb2RlIiwiaXNOYU4iLCJjYWxsSG9va0Z1bmN0aW9ucyIsImFyckhvb2tGdW5jdGlvbnMiLCJwYXJhbWV0ZXJzIiwiaiIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsImhleCIsIm9wdF9vcGFjaXR5Iiwib3B0X2FycmF5IiwiYmlnaW50IiwiciIsImciLCJyZWR1Y2VTdHlsZSIsInN0eWxlSWQiLCJyZWR1Y2VkU3R5bGUiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxvY2F0aW9uU3R5bGVzIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsInNldFdpZHRoIiwiU3R5bGUiLCJpbWFnZSIsIkNpcmNsZSIsImZpbGwiLCJzdHJva2UiLCJyYWRpdXMiLCJtZWFzdXJlR2VvbWV0cnkiLCJnZW9tZXRyeSIsIm9wdF9mb3JjZUxpbmVNZWFzdXJlIiwib3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUiLCJzcGhlcmUiLCJjb29yZGluYXRlcyIsImNvb3JkMSIsImNvb3JkMiIsInJlc3VsdCIsImdlb20iLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImdldENvb3JkaW5hdGVzIiwicHJvaiIsInRyYW5zZm9ybSIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsInRvRml4ZWQiLCJodG1sVmFsdWUiLCJhYnMiLCJnZXRBcmVhIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwiZWRnZUNvb3JkaW5hdGUiLCJQSSIsInNxcnQiLCJnZXRFeHRlbnRGb3JHZW9tZXRyaWVzIiwiYXJyR2VvbWV0cmllcyIsImV4dGVudFNvdXJjZSIsInNvdXJjZSIsIlZlY3RvciIsImFkZEZlYXR1cmVzIiwiZ2V0RXh0ZW50IiwiRXh0ZW50IiwiZml0VG9FeHRlbnRzIiwiZXh0ZW50cyIsIm9wdF9wYWRkaW5nIiwib3B0X2FuaW1hdGlvbkR1cmF0aW9uIiwicGFkZGluZyIsImV4dGVudCIsImhhc093blByb3BlcnR5IiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwiZ2V0VmlldyIsIm1pblJlc29sdXRpb24iLCJtaW5ab29tIiwibWF4Wm9vbSIsImFuaW1hdGUiLCJzdGFydCIsIkRhdGUiLCJkdXJhdGlvbiIsInJlc29sdXRpb24iLCJnZXRSZXNvbHV0aW9uIiwiZml0IiwiZ2V0U2l6ZSIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJzdHJJbnB1dCIsImZlYXR1cmUiLCJvcHRfbGF5ZXIiLCJzdHJPdXRwdXQiLCJyZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMiLCJyZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyIsInJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMiLCJsYXllciIsImZ1bmN0aW9uTmFtZSIsIndpbmRvdyIsImdldFN0eWxlIiwiZ2V0IiwiZXZLZXkiLCJlZGl0b3JWYXJzIiwiYXR0ciIsIm9iamVjdFRvQXJyYXkiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZ2V0VmVjdG9yTGF5ZXIiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsImhyZWYiLCJyZWRyYXdNYXBWaWV3IiwibWFwRGF0YSIsImRhdGEiLCJjb250cm9sQ29udGFpbmVyVG9wTGVmdCIsInByZXBlbmQiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCIsImFmdGVyIiwibGVmdFNsaWRlRWxlbWVudHMiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiIsInNjYWxlbGluZSIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9scyIsIlNjYWxlTGluZSIsImFkZENvbnRyb2wiLCJ6b29tbGV2ZWwiLCJtb3VzZXBvc2l0aW9uIiwiTW91c2VQb3NpdGlvbiIsInByb2plY3Rpb24iLCJjb29yZGluYXRlRm9ybWF0IiwiY29vcmRpbmF0ZSIsInRvU3RyaW5nSERNUyIsImxvY2FsU3RvcmFnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFDQSxLQUFLQSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxJQUFZLEVBQXZCO0FBQ0EsS0FBS0EsR0FBTCxDQUFTQyxJQUFULEdBQWdCLEtBQUtELEdBQUwsQ0FBU0MsSUFBVCxJQUFpQixFQUFqQztBQUNBLEtBQUtELEdBQUwsQ0FBU0MsSUFBVCxDQUFjQyxRQUFkLEdBQXlCLEtBQUtGLEdB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UUFBUWMsYUFBWixFQUEyQjtBQUN6QjdTLHNCQUFjdUQsR0FBZCxDQUFrQmlQLGFBQWxCLENBQWdDeFMsY0FBY3lTLFFBQWQsQ0FBdUJJLGFBQXZEO0FBQ0E3UyxzQkFBY3lTLFFBQWQsQ0FBdUJJLGFBQXZCLEdBQXVDLElBQUluUixHQUFHaEMsT0FBSCxDQUFXb1QsYUFBZixDQUE2QjtBQUNsRUMsc0JBQVksV0FEc0Q7QUFFbEVDLDRCQUFrQnRSLEdBQUd1UixVQUFILENBQWNDLFlBRmtDO0FBR2xFclIsa0JBQVF5USw2QkFIMEQ7QUFJbEUzSyx5QkFBZTtBQUptRCxTQUE3QixDQUF2QztBQU1BM0gsc0JBQWN1RCxHQUFkLENBQWtCb1AsVUFBbEIsQ0FBNkIzUyxjQUFjeVMsUUFBZCxDQUF1QkksYUFBcEQ7QUFDRDtBQUNGLEtBaDNCdUM7QUFpM0J4Q3pPLGNBQVUsa0JBQVUyRixHQUFWLEVBQWU7QUFDckIsYUFBT29KLGFBQWFwSixHQUFiLEtBQXFCLEVBQTVCO0FBQ0gsS0FuM0J1QztBQW8zQnhDM0UsZ0JBQVksb0JBQVUyRSxHQUFWLEVBQWVDLEtBQWYsRUFBc0I7QUFDaENtSixtQkFBYXBKLEdBQWIsSUFBb0JDLEtBQXBCLENBRGdDLENBQ0w7QUFDNUI7QUF0M0J1QyxHQUF6QixDQUFqQjtBQXkzQkQsQ0EvM0JBLEVBKzNCQzdSLE1BLzNCRCxFQSszQlMsS0FBS3hJLEdBLzNCZCxDQUFEOztBQWk0Qk8sSUFBSTRTLFFBQVEsS0FBSzVTLEdBQUwsQ0FBU0MsSUFBVCxDQUFjMlMsS0FBMUIsQyIsImZpbGUiOiJjNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZjY0YmIwMmRjNWMzZTkwYmQ5NyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvbnN0YW50cyAoZW4pXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5pMThuID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuaTE4biwge1xuXG4gICAgTEFORzogJ2RlJyxcblxuICAgIE5BTUU6ICdOYW1lJyxcbiAgICBISURFOiAnWnVrbGFwcGVuJyxcbiAgICBDTE9TRTogJ1NjaGxpZcOfZW4nLFxuICAgIFBPSU5UOiAnUE9JJyxcbiAgICBGUkVFSEFORDogJ0ZyZWloYW5kJyxcbiAgICBMSU5FOiAnTGluaWUnLFxuICAgIFBPTFlHT046ICdGbMOkY2hlJyxcbiAgICBDSVJDTEU6ICdSYWRpdXMnLFxuICAgIFBFUklNRVRFUjogJ1VtZmFuZycsXG4gICAgTEVOR1RIOiAnTMOkbmdlJyxcbiAgICBTVVJGQUNFQVJFQTogJ0Zsw6RjaGVuaW5oYWx0JyxcbiAgICBSQURJVVM6ICdSYWRpdXMnLFxuICAgIFJFRlJFU0g6ICdBa3R1YWxpc2llcmVuJyxcbiAgICBDT1BZX1RPX0NMSVBCT0FSRDogJ0luIFp3aXNjaGVuYWJsYWdlIGtvcGllcmVuJyxcblxuICAgIENUUkxfWk9PTV9JTjogJ1Zlcmdyw7bDn2VybicsXG4gICAgQ1RSTF9aT09NX09VVDogJ1ZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fRVhUOiAnTWF4aW1hbCB2ZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0hPTUU6ICdadXIgdXJzcHLDvG5nbGljaGVuIFBvc2l0aW9uJyxcbiAgICBDVFJMX1pPT01fUE9TOiAnWnVtIGFrdHVlbGxlbiBTdGFuZG9ydCcsXG4gICAgQ1RSTF9aT09NX1NMSURFUjogJ1pvb20gU2xpZGVyJyxcbiAgICBDVFJMX1JFU0VUX1JPVEFUSU9OOiAnUm90YXRpb24gKHRvdWNoLCBhbHQrbW91c2UpIHp1csO8Y2tzZXR6ZW4nLFxuICAgIENUUkxfUE9SVFNJREU6ICdQb3J0c2lkZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUk9VVEVSOiAnUm91dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9FRElUT1I6ICdFZGl0b3IgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX01FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0lORk9QQUdFOiAnSW5mb3NlaXRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BRERJVElPTkFMUEFORUw6ICdQYW5lbCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQUNDT1VOVDogJ0FjY291bnQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1pPT01MRVZFTDogJ1pvb20nLFxuICAgIENUUkxfTU9VU0VDT09SRFM6ICdMb24vTGF0JyxcbiAgICBDVFJMX0dFT1NFQVJDSDogJ1N1Y2hlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgICBDVFJMX09WRVJWSUVXTUFQOiAnw5xiZXJzaWNodHNrYXJ0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfR0VPQk9PS01BUktTOiAnRmF2b3JpdGVuIHZlcndhbHRlbicsXG4gICAgQ1RSTF9TSURFQk9BUkQ6ICdTaWRlYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJCT0FSRDogJ1N0YXJib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQVRUUklCVVRJT046ICdBdHRyaWJ1dGlvbiBhbnplaWdlbicsXG4gICAgQ1RSTF9HUklEOiAnR2l0dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9QRVJNQUxJTks6ICdQZXJtYWxpbmsgZ2VuZXJpZXJlbicsXG4gICAgQ1RSTF9GVUxMU0NSRUVOOiAnVm9sbGJpbGRtb2R1cyBlaW4tL2F1c3NjaGFsdGVuJyxcbiAgICBDVFJMX1BSSU5UOiAnS2FydGUgZXhwb3J0aWVyZW4nLFxuXG4gICAgRURJVE9SOiAnRWRpdG9yJyxcbiAgICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFZGl0aWVyZW4gYmVlbmRlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRWxlbWVudCBsw7ZzY2hlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnRWxlbWVudCBlZGl0aWVyZW4gLyB2ZXJzY2hpZWJlbicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPOiAnWnVyIEF1c3dhaGwgZWluIEVsZW1lbnQgYXVmIGRlciBLYXJ0ZSBhbmtsaWNrZW4uJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdLYXJ0ZW5lbGVtZW50ZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmR3ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG5cbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnUm91dGUgdm9uIGhpZXInLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG5cbiAgICBTVEFSQk9BUkQ6ICdTdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX0xBWUVSOiAnRWJlbmVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ0thcnRlbmVsZW1lbnRlJyxcblxuICAgIFNJREVCT0FSRDogJ1NpZGVib2FyZCcsXG5cbiAgICBST1VURVJfVklFV19BRERSRVNTX0lOUFVUOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfRlJPTV9MQUJFTDogJ1N0YXJ0JyxcbiAgICBST1VURVJfT1ZFUl9MQUJFTDogJ1p3aXNjaGVuemllbCcsXG4gICAgUk9VVEVSX1RPX0xBQkVMOiAnWmllbCcsXG4gICAgUk9VVEVSX0NMRUFSX1RJVExFOiAnTMO2c2NoZW4nLFxuICAgIFJPVVRFUl9DTEVBUl9IVE1MOiAnJyxcbiAgICBST1VURVJfTGFiZWxfSW50ZXJpbTogJ1p3aXNjaGVuemllbCcsXG5cbiAgICBST1VURVJfU1dJVENIOidXZWNoc2VsIHZvbiBTdGFydCB1bmQgWmllbCcsXG4gICAgUk9VVEVSX09WRVI6J1p3aXNjaGVuemllbCBoaW56dWbDvGdlbicsXG4gICAgUk9VVEVSX1BSSU5UOidSb3V0ZW5iZXNjaHJlaWJ1bmcgZHJ1Y2tlbicsXG5cbiAgICBST1VURVJfVklFV19MQUJFTF9ST1VURTogJ1JvdXRlOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0U6ICdFbnRmZXJudW5nOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfVElNRTogJ1plaXQ6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9QUk9GSUxFOiAnUHJvZmlsOicsXG5cbiAgICBST1VURVJfVklFV19BTEVSVF9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbi4nLFxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HOiAnWnVncmlmZiBhdWYgR2VvY29kZXIgZmVobGdlc2NobGFnZW4uJyxcblxuICAgIFJPVVRFUjogJ1JvdXRlcicsXG4gICAgUk9VVEVSX046ICdOb3JkZW4nLFxuICAgIFJPVVRFUl9FOiAnT3N0JyxcbiAgICBST1VURVJfUzogJ1PDvGRlbicsXG4gICAgUk9VVEVSX1c6ICdXZXN0ZW4nLFxuICAgIFJPVVRFUl9ORTogJ05vcmRvc3QnLFxuICAgIFJPVVRFUl9TRTogJ1PDvGRvc3QnLFxuICAgIFJPVVRFUl9TVzogJ1PDvGR3ZXN0JyxcbiAgICBST1VURVJfTlc6ICdOb3Jkd2VzdCcsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8wOiAnVW5iZWthbm50ZSBBbndlaXN1bmdbIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE6ICdHZXJhZGVhdXMgd2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8yOiAnTGVpY2h0IHJlY2h0cyBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMzogJ1JlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNDogJ1NjaGFyZiByZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzU6ICdXZW5kZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzY6ICdTY2hhcmYgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzc6ICdMaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fODogJ0xlaWNodCBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTA6ICdGYWhyZW4gU2llIFJpY2h0dW5nIDxiPiVkPC9iPlsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTEnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlcnN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHp3ZWl0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGRyaXR0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHZpZXJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGbDvG5mdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTYnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzZWNoc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS03JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2llYnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS04JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgYWNodGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTknOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBuZXVudGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLXgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlaW5lciBkZXIgdmllbGVuIE3DtmdsaWNoa2VpdGVuWyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xNTogJ1NpZSBoYWJlbiBJaHIgWmllbCBlcnJlaWNodCcsXG5cbiAgICAnUk9VVEVSXzUuWF9UWVBFXzAnOiAnICVtIGZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMSc6ICcgJW0gZGVtIFN0cmHDn2VudmVybGF1ZiBmb2xnZW5bIGFscyA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzInOiAnIEZhaHJlbiBTaWVbIGF1ZiA8Yj4lczwvYj5dIGxvcycsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8zJzogJyBEYXMgWmllbCBiZWZpbmRldCBzaWNoIDxiPiVtPC9iPicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV80JzogJyBXZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzUnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hdWZmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNic6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWFiZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzcnOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzgnOiAnICVtIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV85JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMCc6ICcgJW0gZmFocmVuIHVtIGF1ZiBkZXIgU3RyYcOfZSB6dSBibGVpYmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzExJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMic6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTMnOiAnICVtIGZhaHJlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTQnOiAnIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG5cbiAgICAnUk9VVEVSXzUuWF9NT0RfMCcgIDogJ1V0dXJuJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMScgIDogJ1NjaGFyZiByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8yJyAgOiAnUmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMycgIDogJ0xlaWNodCByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF80JyAgOiAnR2VyYWRlYXVzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNScgIDogJ0xlaWNodCBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzYnICA6ICdMaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzcnICA6ICdTY2hhcmYgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF84JyAgOiAnaW4gZGVyIE7DpGhlJyxcblxuICAgIFJPVVRFUl9GUk9NOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9UTzogJ1ppZWwnLFxuICAgIFJPVVRFUl9GSU5EX1JPVVRFOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfTE9DX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG4gICAgUk9VVEVSX1JPVVRFREVTQzogJ1JvdXRlbmJlc2NocmVpYnVuZycsXG4gICAgUk9VVEVSX1JPVVRFTkFNRTogJ1JvdXRlJyxcbiAgICBST1VURVJfRElTVEFOQ0U6ICdEaXN0YW56JyxcbiAgICBST1VURVJfVElNRTogJ1plaXQnLFxuICAgIFJPVVRFUl9SRVZfR0VPQ09ESU5HOiAnRXJtaXR0bGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkc6ICdGZWhsZXIgYmVpbSBFcm1pdHRlbG4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9TRUFSQ0hJTkc6ICdTdWNoZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfU0VBUkNISU5HOiAnRmVobGVyIGJlaW0gU3VjaGVuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfQ0FMQ19ST1VURTogJ0JlcmVjaG5lIFJvdXRlLi4uJyxcbiAgICBST1VURVJfRVJST1JfQ0FMQ19ST1VURTogJ0ZlaGxlciBiZWltIEJlcmVjaG5lbiBkZXIgUm91dGUnLFxuXG4gICAgTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZScsXG4gICAgTUVBU1VSRVRPT0xTX0lORk86ICdXw6RobGVuIFNpZSB3ZWl0ZXIgdW50ZW4gZWluZW4gTWVzc3R5cCBhdXMgdW5kIHN0YXJ0ZW4gU2llIGRpZSBNZXNzdW5nIGR1cmNoIGRhcyBLbGlja2VuIGF1ZiBkZXIgS2FydGUuJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMOiAnKEVpbnplbG5lIE1lc3N1bmdlbiBrw7ZubmVuIG1pdCBlaW5lbSBEb3BwZWxrbGljayBiZWVuZGV0IHdlcmRlbi4pJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ1JhZGl1cyBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kIG1lc3NlbicsXG5cbiAgICBHRU9CT09LTUFSS1NfUExBQ0VIT0xERVI6ICdOZXVlIEJlemVpY2hudW5nJyxcblxuICAgIElORk9QQUdFOiAnSW5mb3JtYXRpb25lbicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnUGFuZWwnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdQYW5lbCBhbnplaWdlbicsXG4gICAgQUNDT1VOVDogJ0FjY291bnQnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnQWNjb3VudCBhbnplaWdlbicsXG5cbiAgICBTRUFSQ0hfTk9UX0ZPVU5EOiAnRGllIExva2F0aW9uIGtvbm50ZSBuaWNodCBnZWZ1bmRlbiB3ZXJkZW4uIEJpdHRlIHZlcnN1Y2hlbiBTaWUgZWluZSBhbmRlcmUgRWluZ2FiZS4nLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJsYW5ndWFnZSBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuaTE4bjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGUuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lclwiO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHNpZGVib2FyZCBzdHJ1Y3R1cmVzLiBQcm92aWRlcyBzdGFuZGFyZCBjb25maWd1cmF0aW9ucyB3aGljaCBhcmUgZXF1YWwgZm9yIGVhY2ggc2lkZWJvYXJkIGVsZW1lbnQuXG4gKi9cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICAgIG9wdGlvbnMgIG1pc2MgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBleHREaXY6IGZhbHNlLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogJ3NpZGVib2FyZCcsXG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICAvL2FjdGl2ZSBJZGVudGlmaWVyICh3aGljaCBzaWRlIGlzIHRoaXMgZWxlbWVudCBvbj8pXG4gICAgLy9jc3NuYW1lIG5lZWRlZCB0byBzZXQgdGhlIGNzcyBjbGFzcyBjb3JyZWN0bHlcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSAnUG9ydHNpZGUnO1xuICAgICAgICB0aGlzLmNzc25hbWUgPSAncG9ydHNpZGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gJ1N0YXJib2FyZCc7XG4gICAgICAgIHRoaXMuY3NzbmFtZSA9ICdzdGFyYm9hcmQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy90aGlzLmNzc25hbWUgPSB0aGlzLmlkZW50aWZpZXIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB0aGlzLmlkZW50aWZpZXIuc2xpY2UoMSk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9ucy50aXBMYWJlbCA9IHRoaXMub3B0aW9ucy50aXBMYWJlbCB8fCB0aGlzLm9wdGlvbnMuaGVhZGxpbmUgfHwgbGFuZ0NvbnN0YW50cy5DVFJMX1NJREVCT0FSRDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3Bpbm5lciA9IHVuZGVmaW5lZDtcbiAgICAvLyBtYWluc3RydWN0dXJlIGVsZW1lbnRzXG4gICAgdGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGl0bGVCYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkbGluZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcFRvb2xiYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYm90dG9tVG9vbGJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXR1c0JhciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZpZXdUcmlnZ2VyQmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXVzZWRWaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jcmVhdGUgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0IHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuICAvLyBBZGQgbWV0aG9kc1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2ljIGh0bWwtZWxlbWVudHMgZm9yIHRoZSBzaWRlYm9hcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgJ3RydWUnIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIGluaXRDbGFzcyxcbiAgICAgICAgICB0aXRsZUJ1dHRvbkJhcixcbiAgICAgICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICAgICBjYXBpdGFsaXplZE5hbWUsXG4gICAgICAgICAgaGlkZUJ1dHRvbixcbiAgICAgICAgICBjYWNoaW5nO1xuXG4gICAgICBjYWNoaW5nID0gdGhpcy5vcHRpb25zLmNhY2hpbmc7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgLy8gRG8gbm90IGhpZGUgd2hlbiBpdCBpcyBpbml0aWFsaXplZCBvcGVuLCBvciBpbiBhbiBleHRlcm5hbCBkaXZcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIGluaXRDbGFzcyA9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzEnKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdENsYXNzID0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzAnKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICQodGhpcy5idXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gW25vdGVdIFwidGhpcy5ibHVyKClcIiBkb2VzIG5vdCB3b3JrIGluIElFLWZ1bGxzY3JlZW4tbW9kZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjYXBpdGFsaXplZE5hbWUgPT0gXCJSb3V0ZXJcIiB8fCBjYXBpdGFsaXplZE5hbWUgPT0gXCJNZWFzdXJlXCIgfHwgY2FwaXRhbGl6ZWROYW1lID09IFwiRWRpdG9yXCIpe1xuICAgICAgICAgICAgICBzZWxmLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi50aXRsZSA9IHRoaXMub3B0aW9ucy50aXBMYWJlbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgICQodGhpcy5jb250YWluZXIpLmFkZENsYXNzKCdjNGctJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJyAnICsgJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jb250YWluZXInICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArIGluaXRDbGFzcyk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy0nICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNvbnRyb2wnICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgaW5pdENsYXNzKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgZGltZW5zaW9uc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcyNTBweCc7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTE5MjBweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xMDAlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xOTIwcHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTAwJSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlIGNvbnRhaW5lclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmV4dERpdikuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgICAgICAvLyAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICQoJyMnICsgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFRhcmdldCgpICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9PVkVSTEFZQ09OVEFJTkVSX1NFKS5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGNvbnRlbnQtYXJlYVxuICAgICAgLy9cbiAgICAgIC8vIFdyYXBwZXJcbiAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctd3JhcHBlcic7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgLy8gVGl0bGViYXJcbiAgICAgIHRoaXMudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudGl0bGVCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy10aXRsZWJhcic7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUJhcik7XG5cbiAgICAgIC8vIFRyaWdnZXJiYXJcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy12aWV3dHJpZ2dlcmJhcic7XG5cbiAgICAgIC8vIFRvcC1Ub29sYmFyXG4gICAgICB0aGlzLnRvcFRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctdG9wLXRvb2xiYXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbnRlbnQtQ29udGFpbmVyXG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY29udGVudC1jb250YWluZXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBjb250ZW50IGhlYWRsaW5lXG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb250ZW50SGVhZGxpbmUuY2xhc3NOYW1lID0gJ2NvbnRlbnRIZWFkbGluZSc7XG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRIZWFkbGluZSk7XG5cbiAgICAgIC8vIEJvdHRvbS1Ub29sYmFyXG4gICAgICB0aGlzLmJvdHRvbVRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1ib3R0b20tdG9vbGJhciBjNGctY2xvc2UnLFxuICAgICAgICAgIHRhcmdldDogdGhpcy53cmFwcGVyXG4gICAgICB9KTtcblxuICAgICAgIC8vIFN0YXR1c2JhclxuICAgICAgdGhpcy5zdGF0dXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctc3RhdHVzYmFyIGM0Zy1jbG9zZSc7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zdGF0dXNCYXIpO1xuXG4gICAgICAvLyBBZGQgc3Bpbm5lclxuICAgICAgdGhpcy5zcGlubmVyID0gbmV3IFNwaW5uZXIoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udGVudENvbnRhaW5lcixcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuTEFSR0VcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGaWxsIHRpdGxlYmFyXG4gICAgICAvL1xuICAgICAgLy8gSGVhZGxpbmVcbiAgICAgIHRoaXMuaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLmhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctaGVhZGxpbmUnO1xuICAgICAgdGhpcy5oZWFkbGluZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaGVhZGxpbmU7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGxpbmUpO1xuICAgICAgLy8gQnV0dG9uYmFyXG4gICAgICB0aXRsZUJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGVCdXR0b25CYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0wgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWJ1dHRvbmJhcic7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uQmFyKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAvLyBIaWRlYnV0dG9uXG4gICAgICAgIGhpZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaGlkZUJ1dHRvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUE9SVFNJREVfSElERTtcbiAgICAgICAgaGlkZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuSElERTtcbiAgICAgICAgJChoaWRlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuY2xvc2UodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGl0bGVCdXR0b25CYXIuYXBwZW5kQ2hpbGQoaGlkZUJ1dHRvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIENsb3NlYnV0dG9uXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jbG9zZSc7XG4gICAgICBjbG9zZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ0xPU0U7XG4gICAgICAkKGNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRpdGxlQnV0dG9uQmFyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgLy9BZGQgc3Bpbm5lciBmb3IgbGVmdCBzaWRlZCBzaWRlYm9hcmQgZWxlbWVudHNcbiAgICAgIHRoaXMuc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnRlbnRDb250YWluZXIsXG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkxBUkdFXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGV4dGVybmFsIERJViBhbmQgZGVmYXVsdCBzdGF0ZVxuICAgICAgLy8gY2F0Y2ggdG91Y2ggZXZlbnRzIGFuZCBzdG9wIHRoZWlyIHByb3BhZ2F0aW9uXG4gICAgICAvLyBvdGhlcndpc2UgdG91Y2gtc2Nyb2xsaW5nIHdpbGwgYmUgc3RvcHBlZCBieSBvbDNcbiAgICAgICQodGhpcy5jb250YWluZXIpLm9uKCd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHRoZSB1cGRhdGUgbWV0aG9kIHRvIHRoZSBtYXAtcmVzaXplIGV2ZW50XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAub24oJ2NoYW5nZTpzaXplJywgdGhpcy51cGRhdGUsIHRoaXMpO1xuXG4gICAgICAvLyBTaG93IG9wZW4gaWYgZGVzaXJlZFxuICAgICAgaWYgKCh0aGlzLm9wdGlvbnMuZGVmYXVsdE9wZW4pIHx8ICh0aGlzLm9wdGlvbnMuY2FjaGluZyAmJiAodXRpbHMuZ2V0VmFsdWUodGhpcy5vcHRpb25zLm5hbWUpID09ICcxJykpKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJjcmVhdGVcIlxuXG4gICAgLyoqXG4gICAgICogICBVcGRhdGUgdGhlIHNpZGVib2FyZHMgaHRtbC1lbGVtZW50c1xuICAgICAqICAgcmVzaXplcyB0aGUgY29udGVudC1jb250YWluZXJcbiAgICAgKiAgIGFuZCB0aGUgdG9wLXRvb2xiYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2V2ZW50LW9iamVjdH0gIG9wdF9ldmVudCAgKm9wdGlvbmFsKiAgSnVzdCBuZWVkZWQgYnkgdGhlIG9sLWJpbmQtbWV0aG9kLFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0IG5vdCB1c2VkIGluIHRoZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9wdF9ldmVudCkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQsXG4gICAgICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGg7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvKlxuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIGNhcGl0YWxpemVkTmFtZSA9IHV0aWxzLmNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm9wdGlvbnMubmFtZSk7XG4gICAgICB9Ki9cblxuICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0ID0gJCh0aGlzLndyYXBwZXIpLmhlaWdodCgpIC0gKCQodGhpcy50aXRsZUJhcikub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKHRoaXMuc3RhdHVzQmFyKS5vdXRlckhlaWdodCh0cnVlKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gJiYgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBpZiAodGhpcyAhPT0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG9wLVRvb2xiYXJcbiAgICAgIGlmICh0aGlzLnRvcFRvb2xiYXIpIHtcbiAgICAgICAgICBpZiAodGhpcy50b3BUb29sYmFyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvLyB0aGlzLnRvcFRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgIHRoaXMudG9wVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCAtPSAkKHRoaXMudG9wVG9vbGJhcikub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b3BUb29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20tdG9vbGJhclxuICAgICAgaWYgKHRoaXMuYm90dG9tVG9vbGJhcikge1xuICAgICAgICAgIGlmICh0aGlzLmJvdHRvbVRvb2xiYXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21Ub29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IC09ICQodGhpcy5ib3R0b21Ub29sYmFyKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbVRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRlbnQtY29udGFpbmVyXG4gICAgICAkKHRoaXMuY29udGVudENvbnRhaW5lcikub3V0ZXJIZWlnaHQoY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0KTtcblxuICAgICAgLy8gQ29ycmVjdCB3aWR0aFxuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlclt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHNlbGYub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy9vbmx5IG1vdmUgdGhlIHRvZ2dsZSBidXR0b24gb24gc3RhcmJvYXJkIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgLy8gZW5kIG9mIFwidXBkYXRlXCJcblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoaXMgc2lkZWJvYXJkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICpvcHRpb25hbCogb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIGluaXRpYWxpemUtZnVuY3Rpb24gaWYgaXQgZXhpc3RzXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAndHJ1ZScgYW4gc3VjY2Vzc1xuICAgICAqL1xuICAgIG9wZW46IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIGNvbnRhaW5lck9mZnNldFdpZHRoLFxuICAgICAgICAgIHNlbGY7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBDYWxsIGluaXRpYWxpemUtZnVuY3Rpb25zLCBpZiBleGlzdGVudFxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRoaXMuaW5pdChvcHRfb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FsbCBwcmVPcGVuRnVuY3Rpb25zXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJlT3BlbkZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJlT3BlbkZ1bmN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIC8vIE5vdCBhdmFpbGFibGUgb24gZXh0ZXJuYWwgZGl2c1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW5ub3QgdXNlIHRoaXMgZnVuY3Rpb24gb24gZXh0ZXJuYWwgZW1iZWRkZWQgc2lkZWJvYXJkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY2xvc2Ugb3RoZXIgYWN0aXZlIHNpZGVib2FyZCBvbiB0aGlzIHNpZGVcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXS5jbG9zZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzbGlkZSBvdGhlciBlbGVtZW50cyB3aGVuIG5vIG90aGVyIHNpZGVib2FyZCB3YXMgYWN0aXZlIG9uIHRoaXMgc2lkZVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW3RoaXMub3B0aW9ucy5kaXJlY3Rpb24gKyBcIlNsaWRlRWxlbWVudHNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moc2VsZi5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIDApO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoaXMgYXMgYWN0aXZlIFNpZGVib2FyZFxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXM7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYSB2aWV3IG5lZWRzIHRvIGJlIHJlYWN0aXZhdGVkXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKHRoaXMuc3RhdHVzQmFyKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgJCh0aGlzLnN0YXR1c0JhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJCh0aGlzLmJvdHRvbVRvb2xiYXIpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAkKHRoaXMuYm90dG9tVG9vbGJhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhY2hpbmcpIHtcbiAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCBwb3N0T3BlbkZ1bmN0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucG9zdE9wZW5GdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucG9zdE9wZW5GdW5jdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgLy8gZW5kIG9mIFwib3BlblwiXG5cbiAgICBpc09wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhpcyBzaWRlYm9hcmQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBvcHRfaGlkZSAgICAgICAgICAgICAgICpvcHRpb25hbCogQ2hvb3NlIGlmIHRoaXMgZnVuY3Rpb24gc2hvdWxkIHRyaWdnZXIgfHByZUhpZGVGdW5jdGlvbnxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGVhZCBvZiB8cHJlQ2xvc2VGdW5jdGlvbnwuIERlZmF1bHQgaXMgfGZhbHNlfC5cbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQgICpvcHRpb25hbCogSW5kaWNhdGVzIGlmIGFub3RoZXIgc2lkZWJvYXJkIGVsZW1lbnQgd2lsbCBiZSBvcGVuZWQgaW5zdGVhZC5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyB8ZmFsc2V8LlxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgIHx0cnVlfCBvbiBzdWNjZXNzLlxuICAgICAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbiAob3B0X2hpZGUsIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQpIHtcbiAgICAgIHZhciBjb250YWluZXJPZmZzZXRXaWR0aCxcbiAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgIGRpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG5cbiAgICAgIGlmIChvcHRfaGlkZSApIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZUhpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucHJlSGlkZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgLy8gTm90IGF2YWlsYWJsZSBvbiBleHRlcm5hbCBkaXZzXG4gICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbm5vdCB1c2UgdGhpcyBmdW5jdGlvbiBvbiBleHRlcm5hbCBlbWJlZGRlZCBzaWRlYm9hcmQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gIT09IHRoaXMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJy1lbGVtZW50ICgnICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnKSBpcyBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuY3NzKGRpcmVjdGlvbiwgLWNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmNzcyhkaXJlY3Rpb24sIDApO1xuXG4gICAgICAgIGlmICghb3B0X29wZW5PdGhlclNpZGVib2FyZCkge1xuICAgICAgICAgIC8vIHNsaWRlIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKGRpcmVjdGlvbiwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoaWRlIGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgdmlldyBuZWVkcyB0byBiZSBkZWFjdGl2YXRlZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVWaWV3LmRlYWN0aXZhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIFNpZGVib2FyZGVudHJ5XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWNoaW5nKSB7XG4gICAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNsb3NlXCJcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGlzIHNpZGVib2FyZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3MuXG4gICAgICovXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAob3B0X2hpZGUpIHtcbiAgICAgIHZhciBjYXBpdGFsaXplZE5hbWU7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKG9wdF9oaWRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICB9LCAvLyBlbmQgb2YgXCJ0b2dnbGVcIlxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1dHRvbiB3aGljaCBjaGFyYWN0ZXJpc3RpY3MgYXJlIGRlZmluZWQgYnkgdGhlIG9wdGlvbnMgcGFyYW1ldGVyXG4gICAgICogVGhlc2Ugb3B0aW9ucyBpbmNsdWRlIGUuZy4gdGhlIHRhcmdldCBjb250YWluZXIgd2hlcmUgdGhlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIGFuZCB0aGUgY2xpY2sgYWN0aW9uIG9mIHRoZSBidXR0b25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICBvcHRfb3B0aW9ucyAgVGhlIGJ1dHRvbiBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1ha2VCdXR0b246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICBidXR0b247XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIHRpcExhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgICAgICBjbGlja0FjdGlvbjogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgICBvcHRpb25zLmNsYXNzTmFtZSA9ICcgJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLm9wdGlvbnMubmFtZSArICctYnV0dG9uJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgaWYob3B0aW9ucy5pZCkge1xuICAgICAgICBidXR0b24uaWQgPSBvcHRpb25zLmlkO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGlwTGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IG9wdGlvbnMudGlwTGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmxhYmVsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQob3B0aW9ucy5sYWJlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jbGlja0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAkKGJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9ucy5jbGlja0FjdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgICQob3B0aW9ucy50YXJnZXQpLmFwcGVuZChidXR0b24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0sIC8vIGVuZCBvZiBcIm1ha2VCdXR0b25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkU2VjdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkU2VjdGlvbjogZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIC8vIHRyeSB0byBjcmVhdGUgdGhlIG5ldyBzZWN0aW9uXG4gICAgICB0cnkge1xuICAgICAgICBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnR5cGUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBjcmVhdGUgc2VjdGlvbi4gXCInICsgb3B0aW9ucy50eXBlICsgJyBpcyBub3QgYSB2YWxpZCBIVE1MLW5vZGUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcblxuICAgICAgLy8gdHJ5IHRvIGFwcGVuZCB0aGUgc2VjdGlvbiB0byB0aGUgZ2l2ZW4gdGFyZ2V0XG4gICAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnRhcmdldC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZ2V0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgfHwgZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBzZWN0aW9uLnNldEVsZW1lbnQgPSBmdW5jdGlvbiAobmV3RWxlbWVudCkge1xuICAgICAgICBpZiAobmV3RWxlbWVudCAmJiB0eXBlb2YgbmV3RWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoIShlbGVtZW50ICYmIGVsZW1lbnQgPT09IG5ld0VsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICAvLyBhZGQgdG8gc2VjdGlvbnMtYXJyYXlcbiAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sIC8vIGVuZCBvZiBcImFkZFNlY3Rpb25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkVmlldyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRWaWV3OiBmdW5jdGlvbiAob3B0aW9ucywgb3B0X3ZpZXdTY29wZSkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICB2aWV3U2NvcGUsXG4gICAgICAgICAgYWRkaXRpb25hbFRyaWdnZXJDbGFzcyxcbiAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgIHZpZXc7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdmlld1Njb3BlID0gb3B0X3ZpZXdTY29wZSB8fCB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAvLyBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHVuZGVmaW5lZCwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IHtvcHRfdGFyZ2V0OiBbc3RyaW5nfGh0bWxPYmplY3RdLCBvcHRfY2xhc3NOYW1lOiBbc3RyaW5nXSwgb3B0X3RpcExhYmVsOiBbc3RyaW5nXX1cbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXSwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IFt7c2VjdGlvbjogW3NlY3Rpb25PYmplY3RdLCBlbGVtZW50OiBbZWxlbWVudE9iamVjdF19XVxuICAgICAgICBpbml0RnVuY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBhZGQgYSB2aWV3IHdpdGhvdXQgYSBuYW1lIChvZiB0eXBlIFwic3RyaW5nXCIpLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSB7fTtcblxuICAgICAgdmlldy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgdmlldy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgdmlldy5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfb3BlblNpZGVib2FyZCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBpZiAob3B0aW9ucy50cmlnZ2VyQ29uZmlnLndpdGhIZWFkbGluZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gb3B0aW9ucy50cmlnZ2VyQ29uZmlnLnRpcExhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3BlbiBTaWRlYm9hcmQgaWYgY2xvc2VkXG4gICAgICAgIGlmIChvcHRfb3BlblNpZGVib2FyZCAmJiAhc2VsZi5pc09wZW4oKSkge1xuICAgICAgICAgIHNlbGYub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVhY3RpdmF0ZSBjdXJyZW50IGFjdGl2ZVZpZXcsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1Njb3BlLmFjdGl2ZVZpZXcgPT09ICdvYmplY3QnICYmIHZpZXdTY29wZS5hY3RpdmVWaWV3ICE9PSB2aWV3KSB7XG4gICAgICAgICAgdmlld1Njb3BlLmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdTY29wZS5hY3RpdmVWaWV3ID0gdmlldztcblxuICAgICAgICAvLyBIYW5kbGUgc3ViLXZpZXdzXG4gICAgICAgIGlmICh2aWV3LmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgaW5pdGlhbGl6ZS1mdW5jdGlvbnMsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICghdmlldy5pbml0aWFsaXplZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZpZXcuaW5pdGlhbGl6ZWQgPSBvcHRpb25zLmluaXRGdW5jdGlvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGVsZW1lbnRzIGluIGdpdmVuIHNlY3Rpb25zXG4gICAgICAgIGlmIChvcHRpb25zLnNlY3Rpb25FbGVtZW50cyAmJiBvcHRpb25zLnNlY3Rpb25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNlY3Rpb25FbGVtZW50c1tpXS5zZWN0aW9uLnNldEVsZW1lbnQob3B0aW9ucy5zZWN0aW9uRWxlbWVudHNbaV0uZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRyaWdnZXItc3RhdGUsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBhY3RpdmF0ZSBmdW5jdGlvbiwgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHZpZXcuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfcGF1c2UpIHtcblxuICAgICAgICB2aWV3LnBhdXNlZCA9IG9wdF9wYXVzZSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIHZpZXdTY29wZS5hY3RpdmVWaWV3ID09PSAnb2JqZWN0JyAmJiB2aWV3U2NvcGUuYWN0aXZlVmlldyA9PT0gdmlldykge1xuICAgICAgICAgIGlmICh0cmlnZ2VyICYmICF2aWV3LnBhdXNlZCkge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5yZW1vdmVDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhhbmRsZSBzdWItdmlld3NcbiAgICAgICAgICBpZiAodmlldy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSh2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbCBkZWFjdGl2YXRlIGZ1bmN0aW9uLCBpZiBleGlzdGVudFxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50cmlnZ2VyQ29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zLnRyaWdnZXJDb25maWcgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnZpZXdUcmlnZ2VyQmFyLFxuICAgICAgICAgIHRpcExhYmVsOiBvcHRpb25zLm5hbWUsXG4gICAgICAgIH0sIG9wdGlvbnMudHJpZ2dlckNvbmZpZyk7XG5cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsaWNrQWN0aW9uID0gdmlldy5hY3RpdmF0ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyAnICsgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgYWRkaXRpb25hbFRyaWdnZXJDbGFzcztcbiAgICAgICAgLy8gQFRPRE8gY2hlY2s6IHRyaWdnZXIgPSB0aGlzLm1ha2VCdXR0b24ob3B0aW9ucy50cmlnZ2VyQ29uZmlnKTtcbiAgICAgICAgdHJpZ2dlciA9IHRoaXMubWFrZUJ1dHRvbihvcHRpb25zLnRyaWdnZXJDb25maWcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZpZXdzLnB1c2godmlldyk7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9IC8vIGVuZCBvZiBcImFkZFZpZXdcIlxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFNpZGVib2FyZCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMubWlzYyA9IHRoaXMuYzRnLm1hcHMubWlzYyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW1NwaW5uZXIgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIENvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lciA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgc3Bpbm5lclNwYW47XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHRhcmdldDogJy4nICsgY3NzQ29uc3RhbnRzLk9MX1ZJRVdQT1JUXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3NOYW1lID0gJyAnICsgb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5TUElOTkVSICsgb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjc3NDb25zdGFudHMuSElERTtcbiAgICAkKG9wdGlvbnMudGFyZ2V0KS5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgIHNwaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwaW5uZXJTcGFuLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLkFOSU1BVElPTl9TUElOO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGlubmVyU3Bhbik7XG5cbiAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciA9IDA7XG5cbiAgfTtcblxuICAvLyBBZGQgbWV0aG9kcyB0byBzcGlubmVyXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5taXNjLlNwaW5uZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtzaG93IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5ISURFKSkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbaGlkZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ1NwaW5uZXIgaXMgYWxyZWFkeSBoaWRkZW4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgfSk7IC8vIEVuZCBvZiBcImFkZCBtZXRob2RzIHRvIHNwaW5uZXJcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBTcGlubmVyID0gdGhpcy5jNGcubWFwcy5taXNjLlNwaW5uZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtab29tbGV2ZWx9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsXCJcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBjNGctTWFwcyB1dGlsaXR5IGZ1bmN0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMudXRpbHMgPSAkLmV4dGVuZChjNGcubWFwcy51dGlscywge1xuICAgIC8qKlxuICAgICAqICBDb252ZXJ0cyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgZ2l2ZW4gc3RyaW5nIHRvIHVwcGVyY2FzZSwgbGVhdmluZyB0aGUgcmVtYWluaW5nIHN0cmluZyB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiAgQHBhcmFtICAgIHtzdHJpbmd9ICAgIHRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZVxuICAgICAqXG4gICAgICogIEByZXR1cm4gICB7c3RyaW5nfSAgICB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIHVuaXF1ZSBpZC5cbiAgICAgKlxuICAgICAqIFRoZSBpZCBpcyA5IGNoYXJhY3RlcnMgbG9uZyBhbmQgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gIFRoZSBnZW5lcmF0ZWQgaWQuXG4gICAgICovXG4gICAgZ2V0VW5pcXVlSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gICAgICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAgICAgLy8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG4gICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBub3QgYnJlYWsgdGhlIENvZGUuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcIC0+IFxcXFw7XG4gICAgICogICBcIiAtPiAnJztcbiAgICAgKiAgIMOEIC0+ICZBdW1sO1xuICAgICAqICAgw6QgLT4gJmF1bWw7XG4gICAgICogICDDliAtPiAmT3VtbDtcbiAgICAgKiAgIMO2IC0+ICZvdW1sO1xuICAgICAqICAgw5wgLT4gJlV1bWw7XG4gICAgICogICDDvCAtPiAmdXVtbDtcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZW5jb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcL2csICdcXFxcXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFxcIi9nLCAnXFwnXFwnJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DhC9nLCAnJkF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DpC9nLCAnJmF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dli9nLCAnJk91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dti9nLCAnJm91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DnC9nLCAnJlV1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DvC9nLCAnJnV1bWw7J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZW5jb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIGJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcXFwgICAgIC0+IFxcO1xuICAgICAqICAgJycgICAgIC0+IFwiO1xuICAgICAqICAgJkF1bWw7IC0+IMOEXG4gICAgICogICAmYXVtbDsgLT4gw6RcbiAgICAgKiAgICZPdW1sOyAtPiDDllxuICAgICAqICAgJm91bWw7IC0+IMO2XG4gICAgICogICAmVXVtbDsgLT4gw5xcbiAgICAgKiAgICZ1dW1sOyAtPiDDvFxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcXFxcXC9nLCAnXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFwnXFwnL2csICdcXFwiJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mQXVtbDsvZywgJ8OEJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mYXVtbDsvZywgJ8OkJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mT3VtbDsvZywgJ8OWJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mb3VtbDsvZywgJ8O2J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mVXVtbDsvZywgJ8OcOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJnV1bWw7L2csICfDvCdcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGRlY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3IgcmVwbGFjZSBhbiBVUkwtcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAgdGhlIGdpdmVuIHBhcmFtZXRlciwgYHBhcmFtYCxcbiAgICAgKiB3aWxsIGJlIGFwcGxpZWQgYXMgXCJoYXNoLXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzI3BhcmFtXG4gICAgICogTm90ZSwgdGhhdCBhbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogd2hlcmVhcyBleGlzdGluZyBcIkdFVC1wYXJhbWV0ZXJzXCIgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgc2V0LCBpdCB3aWxsIGJlIGFwcGxpZWQgYXMgXCJHRVQtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHM/b3B0X2dldEtleT1wYXJhbVxuICAgICAqIElmIHRoZSBrZXkgZGVzY3JpYmVkIGJ5IGBvcHRfZ2V0S2V5YCBpcyBhbHJlYWR5IGV4aXN0aW5nLCBpdHMgdmFsdWUgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogb3RoZXJ3aXNlIHRoZSBrZXktdmFsdWUtcGFpciB3aWxsIGJlIGFwcGVuZGVkIGFwcHJvcHJpYXRseS5cbiAgICAgKiBBbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZXhlY3V0ZWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBuZXcgbGluayBhcyBgc3RyaW5nYCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIFwiaHJlZi9sb2NhdGlvblwiIHdpbGwgYmUgY2hhbmdlZCBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlciwgd2hpY2ggY2FuIGNhdXNlIGEgcGFnZXJlbG9hZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIHBhcmFtICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW58c3RyaW5nfSAgb3B0X2dldEtleSAgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgb3B0X2V4ZWN1dGUgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgc2V0VXJsUGFyYW06IGZ1bmN0aW9uIChwYXJhbSwgb3B0X2dldEtleSwgb3B0X2V4ZWN1dGUpIHtcbiAgICAgIHZhciBsaW5rLFxuICAgICAgICAgIHNlYXJjaFBhcmFtLFxuICAgICAgICAgIHBhcmFtUmVwbGFjZWQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGluayA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgLy8gdXNlIGhhc2gtcGFyYW1ldGVyXG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IGxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhcmFtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIEdFVC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIC8vIHRoZXJlIGFyZSBhbHJlYWR5IHNlYXJjaC1wYXJhbWV0ZXJzXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgIG9wdF9nZXRLZXkgPSBvcHRfZ2V0S2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgLy8gcmVwbGFjZSBwYXJhbWV0ZXIgaWYgYWxyZWFkeSBleGlzdGVudFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC8oW149XFw/XFwmXSspPShbXiZdKykvZ2ksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBvcHRfZ2V0S2V5KSB7XG4gICAgICAgICAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYXBwZW5kIGFzIG5ldyBwYXJhbWV0ZXJcbiAgICAgICAgICBpZiAoIXBhcmFtUmVwbGFjZWQpIHtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtICs9ICcmJyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBvbmx5IHNlYXJjaC1wYXJhbWV0ZXIgaW4gdGhlIFVSTFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gJz8nICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaCA9IHNlYXJjaFBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gc2VhcmNoUGFyYW0gKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluaztcbiAgICB9LCAvLyBlbmQgb2Ygc2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCBvciBoYXNoIFVSTC1wYXJhbWV0ZXIgYXMgc3RyaW5nLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBoYXNoLXBhcmFtZXRlciBvZiB0aGUgVVJMIGlzIHJldHVybmVkLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHNlYXJjaCBmb3IgYSBHRVQtcGFyYW1ldGVyIGFuZCByZXR1cm4gaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0ZW50LCBvciBlbXB0eSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfHN0cmluZ30gIG9wdF9nZXRLZXkgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb3VuZCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChvcHRfZ2V0S2V5KSB7XG4gICAgICB2YXIgcGFyYW0sXG4gICAgICAgICAgcmVnRXg7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICBwYXJhbSA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICBwYXJhbSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ0V4ID0gbmV3IFJlZ0V4cCgnW1xcP1xcJl0nICsgb3B0X2dldEtleSArICc9KFteJl0rKScsICdpJyk7XG4gICAgICAgICAgcGFyYW0gPSByZWdFeC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWx0YS1lbmNvZGUgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFycmF5IHdpbGwgYmUgc29ydGVkIChsb3dlc3QgdG8gaGlnaGVzdClcbiAgICAgKiBiZWZvcmUgZW5jb2RpbmcuXG4gICAgICpcbiAgICAgKiBTbyBhZnRlciB0aGUgZW5jb2RpbmcgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBvdXRwdXQgY29udGFpbnNcbiAgICAgKiB0aGUgc21hbGxlc3QgbnVtYmVyIG9mIHRoZSBzZXQgYW5kIGVhY2ggZm9sbG93aW5nIG51bWJlciBqdXN0XG4gICAgICogcmVwcmVzZW50cyB0aGUgb2Zmc2V0IHRvIGl0cyBwcmV2aW91cyBuZWlnaGJvci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbW9zdGx5IGVmZmljaWVudCBmb3IgaGlnaCBudW1iZXJzLCB0aGF0IGFyZSBcImNsb3NlIHRvIGVhY2ggb3RoZXJcIi5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICBbMTMzNywgMTEsIDEwMSwgMTIzLCA5NiwgNjksIDQyLCA0Ml1cbiAgICAgKiAgIHdpbGwgYmUgc29ydGVkXG4gICAgICogICBbMTEsIDQyLCA0MiwgNjksIDk2LCAxMDEsIDEyMywgMTMzN11cbiAgICAgKiAgIGFuZCBlbmNvZGVkIHRvXG4gICAgICogICBbMTEsIDMxLCAwLCAyNywgMjcsIDUsIDIyLCAxMjE0XVxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFFbmNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcnJJbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFycklucHV0O1xuICAgICAgfVxuXG4gICAgICBhcnJJbnB1dC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH0pO1xuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IGFycklucHV0WzBdO1xuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IGFycklucHV0W2ldIC0gYXJySW5wdXRbaSAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRW5jb2RlKClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIGRlbHRhLWVuY29kZWQgYXJyYXkuXG4gICAgICogU2VlIGBkZWx0YUVuY29kZWAgZnVuY3Rpb24gZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YURlY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IHBhcnNlSW50KGFycklucHV0WzBdLCAxMCk7XG4gICAgICBpZiAoaXNOYU4oYXJySW5wdXRbMF0pKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBwYXJzZUludChhcnJJbnB1dFtpXSwgMTApICsgYXJyT3V0cHV0W2kgLSAxXTtcbiAgICAgICAgaWYgKGlzTmFOKGFyck91dHB1dFtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YURlY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgY2FsbCBmdW5jdGlvbnMgaW4gYGFyckhvb2tGdW5jdGlvbnNgIHdpdGggZ2l2ZW4gYHBhcmFtZXRlcnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PGZ1bmN0aW9uPn0gICBhcnJIb29rRnVuY3Rpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge21peGVkfSAgICAgICAgICAgICBwYXJhbWV0ZXJzICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY2FsbEhvb2tGdW5jdGlvbnM6IGZ1bmN0aW9uIChhcnJIb29rRnVuY3Rpb25zLCBwYXJhbWV0ZXJzKSB7XG4gICAgICB2YXIgajtcblxuICAgICAgaWYgKGFyckhvb2tGdW5jdGlvbnMgJiYgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcnJIb29rRnVuY3Rpb25zW2pdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcnJIb29rRnVuY3Rpb25zW2pdKHBhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImNhbGxIb29rRnVuY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGhleC1mb3JtYXRlZCBjb2xvciB2YWx1ZSBpbnRvIHJnYmEoKS1mb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIGhleCAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBvcHRfb3BhY2l0eSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eTogZnVuY3Rpb24gKGhleCwgb3B0X29wYWNpdHksIG9wdF9hcnJheSkge1xuXG4gICAgICB2YXIgYmlnaW50LCByLCBnLCBiLCBhO1xuXG4gICAgICBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICBvcHRfb3BhY2l0eS52YWx1ZSA9IHBhcnNlSW50KG9wdF9vcGFjaXR5LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIHR5cGVvZiBvcHRfb3BhY2l0eSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRfb3BhY2l0eSA9PT0gJ29iamVjdCcgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IG9wdF9vcGFjaXR5LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHIgPSAoYmlnaW50ID4+IDE2KSAmIDI1NTtcbiAgICAgIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgYiA9IGJpZ2ludCAmIDI1NTtcbiAgICAgIGEgPSBvcHRfb3BhY2l0eSA/IChvcHRfb3BhY2l0eSAvIDEwMCkgOiAxO1xuICAgICAgaWYob3B0X2FycmF5KXtcbiAgICAgICAgcmV0dXJuIFtyLGcsYixhXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVkdWNlIGEgZGVmaW5lZCBzdHlsZSwgdG8gYSBzaW1wbGVyIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBUaGUgcmVkdWNlZCBzdHlsZSBpcyB0aGUgZmlyc3Qgc3R5bGUgb2YgdGhlIGRlZmluZWQgc3R5bGVzZXQsXG4gICAgICogd2l0aCBhIDFweCB0aGljayBzdHJva2UgYW5kIGEgY2lyY2xlIHdpdGggYSA1cHggcmFkaXVzLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGFkZGl0aW9uYWwgZ2VvbWV0cmllcyB3aXRoIGEgbWFpbi1nZW9tZXRyeSxcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSB3aG9sZSBuZXcgc3R5bGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfHN0cmluZ30gICAgICAgICAgIHN0eWxlSWQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxvbC5zdHlsZS5TdHlsZT59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlZHVjZVN0eWxlOiBmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgdmFyIHN0eWxlLFxuICAgICAgICAgIHJlZHVjZWRTdHlsZSxcbiAgICAgICAgICBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlU3R5bGU7XG5cbiAgICAgIGlmICghYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0gfHwgIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUgPSBjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSgpWzBdO1xuXG4gICAgICBmaWxsU3R5bGUgPSBzdHlsZS5nZXRGaWxsKCk7XG4gICAgICBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgICAgc3Ryb2tlU3R5bGUuc2V0V2lkdGgoMSk7XG5cbiAgICAgIHJlZHVjZWRTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHRleHQ6IHN0eWxlLmdldFRleHQoKSxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFtyZWR1Y2VkU3R5bGVdO1xuICAgIH0sIC8vIGVuZCBvZiBcInJlZHVjZVN0eWxlXCJcblxuICAgIC8qKlxuICAgICAqIE1lYXN1cmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdpdmVuIGdlb21ldHJ5LlxuICAgICAqXG4gICAgICogSWYgdGhlIGdlb21ldHJ5IGlzIGEgYExpbmVTdHJpbmdgIHRoZSBmdW5jdGlvbiB3aWxsIG1lYXN1cmUgaXRzIGxlbmd0aCxcbiAgICAgKiBpcyBpdCBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgdGhlIGFjcmVhZ2UsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIGAwYC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBvcHRpb25hbCBgb3B0X2ZvcmNlTGluZU1lYXN1cmVgIHBhcmFtZXRlciBpcyBgdHJ1ZWBcbiAgICAgKiBhbmQgdGhlIGdlb21ldHJ5IGlzIGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSBpdHMgcGVyaW1ldGVyIGluc3RlYWRcbiAgICAgKiBvZiBpdHMgYWNyZWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5nZW9tLkxpbmVTdHJpbmd8b2wuZ2VvbS5Qb2x5Z29ufSAgIGdlb21ldHJ5ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgICAgICAgICAgICAgb3B0X2ZvcmNlTGluZU1lYXN1cmUgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxzdHJpbmc+fG51bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbWVhc3VyZUdlb21ldHJ5OiBmdW5jdGlvbiAoZ2VvbWV0cnksIG9wdF9mb3JjZUxpbmVNZWFzdXJlLCBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgIHNwaGVyZSxcbiAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICBjb29yZDEsXG4gICAgICAgICAgY29vcmQyLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9zcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZyB8fCAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24gJiYgb3B0X2ZvcmNlTGluZU1lYXN1cmUpKSB7XG5cbiAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICAgIGNvb3JkMSA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2ldLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIGNvb3JkMiA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2kgKyAxXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICB2YWx1ZSArPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoY29vcmQxLCBjb29yZDIsIDYzNzgxMzcpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgLy9nZW9tZXRyeSA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyhnZW9tZXRyeS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpKTtcbiAgICAgICAgLy9jb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldExpbmVhclJpbmcoMCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhvbC5zcGhlcmUuZ2V0QXJlYShnZW9tZXRyeSkpO1xuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlICYmIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFsdWUgPSBNYXRoLlBJICogTWF0aC5zcXJ0KHZhbHVlKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH1cblxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yYXdWYWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCgodmFsdWUgKiAxMDApIC8gMTAwKSAvIDEwMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZXh0ZW50IGZvciBhbiBhcnJheSBvZiBnZW9tZXRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0FycmF5LjxvbC5nZW9tLnNpbXBsZUdlb21ldHJ5Pn0gIGFyckdlb21ldHJpZXMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtvbC5FeHRlbnR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllczogZnVuY3Rpb24gKGFyckdlb21ldHJpZXMpIHtcbiAgICAgIHZhciBleHRlbnRTb3VyY2U7XG5cbiAgICAgIGlmICghYXJyR2VvbWV0cmllcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dlb21ldHJpZXMgbWlzc2luZyBmb3IgZXh0ZW50IGNhbGN1bGF0aW9uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW50U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIGV4dGVudFNvdXJjZS5hZGRGZWF0dXJlcyhhcnJHZW9tZXRyaWVzKTtcblxuICAgICAgcmV0dXJuIGV4dGVudFNvdXJjZS5nZXRFeHRlbnQoKSB8fCBvbC5FeHRlbnQoWzAsIDAsIDAsIDBdKTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcygpXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGFycmF5IG9mIGBleHRlbnRzYC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICBleHRlbnRzICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudHM6IGZ1bmN0aW9uIChleHRlbnRzLCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgIGtleTtcblxuICAgICAgaWYgKCFleHRlbnRzIHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL2V4dGVudCA9IG9sLmV4dGVudC5jcmVhdGVFbXB0eSgpO1xuXG4gICAgICBmb3IgKGtleSBpbiBleHRlbnRzKSB7XG4gICAgICAgIGlmIChleHRlbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGV4dGVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW50ID0gZXh0ZW50c1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbC5leHRlbnQuZXh0ZW5kKGV4dGVudCwgZXh0ZW50c1trZXldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpdFRvRXh0ZW50KGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgNSwgMCwgMCwgMik7XG5cblxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudHNcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYGV4dGVudGAuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuRXh0ZW50fSAgZXh0ZW50ICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHthcnJheX0gICAgICBvcHRfcGFkZGluZyAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5ab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWF4Wm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblJlc29sdXRpb24gICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnQ6IGZ1bmN0aW9uIChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbiwgb3B0X21pblpvb20sIG9wdF9tYXhab29tLCBvcHRfbWluUmVzb2x1dGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBmaXRPcHRpb25zO1xuXG4gICAgICBpZiAoIWV4dGVudCB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2aWV3ID0gbWFwLmdldFZpZXcoKTtcblxuICAgICAgZml0T3B0aW9ucyA9IHtcbiAgICAgICAgJ3BhZGRpbmcnOiBvcHRfcGFkZGluZyB8fCBbMjUsIDI1LCAyNSwgMjVdXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0X21pblJlc29sdXRpb24gJiYgb3B0X21pblJlc29sdXRpb24gPiAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluUmVzb2x1dGlvbiA9IG9wdF9taW5SZXNvbHV0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21pblpvb20gJiYgb3B0X21pblpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblpvb20gPSBvcHRfbWluWm9vbTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9tYXhab29tICYmIG9wdF9tYXhab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5tYXhab29tID0gb3B0X21heFpvb207XG4gICAgICB9XG5cbiAgICAgIC8vIGFuaW1hdGUgdGhlIFwiZml0dGluZ1wiIHdoZW4gYSBkdXJhdGlvbiBpcyBnaXZlbiBhbmQgaXRzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICBpZiAob3B0X2FuaW1hdGlvbkR1cmF0aW9uICYmIG9wdF9hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICBjZW50ZXI6IFswLCAwXVxuICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1hcC5iZWZvcmVSZW5kZXIoXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24ucGFuKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICBzb3VyY2U6IHZpZXcuZ2V0Q2VudGVyKClcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnpvb20oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCksIHtwYWRkaW5nOiBbMjUsIDI1LCAyNSwgMjVdfSk7XG4gICAgICAgIC8vdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgICAgLy92aWV3LnNldFpvb20odmlldy5nZXRab29tKCktMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50KClcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJ1biBhbGwgcGxhY2Vob2xkZXIgZnVuY3Rpb25zIGF0IG9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBzdHJJbnB1dCAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICAgICAgICAgICAgICBmZWF0dXJlICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXIgfCB1bmRlZmluZWR9ICBvcHRfbGF5ZXIgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaXJzdCB0d28gcGFyYW1ldGVycyBhcyB0aGV5IHdpbGwgYmUgdXNlZCBieSBhbGwgcGxhY2Vob2xkZXItZnVuY3Rpb25zXG4gICAgICAvLyAtPiBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyhzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQWxsUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke0ZOZnVuY3Rpb25OYW1lfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGB3aW5kb3cuZnVuY3Rpb25OYW1lKGZlYXR1cmUsIHN0eWxlKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqIFN0eWxlIHdpbGwgYmUgdGFrZW4gZWl0aGVyIGZyb20gdGhlIGZlYXR1cmUsIG9yIHRoZSBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXJ9ICBsYXllciAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgIWxheWVyKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7Rk4oW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGZ1bmN0aW9uTmFtZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZnVuY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1tmdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBzdHlsZVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgZmVhdHVyZS5nZXRTdHlsZSgpICYmIHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlKCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGF5ZXIuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgbGF5ZXIuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tmdW5jdGlvbk5hbWVdKGZlYXR1cmUsIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHBsYWNlaG9sZGVycywgaW4gYHN0cklucHV0YCwgZm9yIHZhcmlhYmxlcyBzZXQgYnkgdGhlIGdlb0VkaXRvci5cbiAgICAgKiBWYWxpZCBwbGFjZWhvbGRlcnMgYXJlOiAoW2tleV0gcmVwcmVzZW50cyB0aGUgc3RyaW5nbmFtZSBvZiB0aGUgdmFyaWFibGVzIGtleSlcbiAgICAgKiAgIGAke0VMW2tleV19YCAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVkxba2V5XX1gICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZSwgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICogICBgJHtFVltrZXldfWAgICA9PiAgVmFsdWUgb2YgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVlZba2V5XX1gICA9PiAgU2FtZSBhcyBgJHtFVltrZXldfWBcbiAgICAgKlxuICAgICAqIElmIG5vIGFwcHJvcHJpYXRlIHZhbHVlIGNhbiBiZSBmb3VuZCBmb3IgYSBwbGFjZWhvbGRlclxuICAgICAqIGl0IHdpbGwgc2ltcGx5IGJlIHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoRVY/W0xWXSkoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIHR5cGUsIGV2S2V5LCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIGVkaXRvclZhcnMsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBoYXMgZWRpdG9yVmFyc1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJykpIHtcbiAgICAgICAgICAgICAgZWRpdG9yVmFycyA9IGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJyk7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBmb3IgZWRpdG9yVmFyIHdpdGgga2V5ID09IGV2S2V5XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlZGl0b3JWYXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvclZhcnNbaV0ua2V5ID09PSBldktleSkge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgdHlwZSBpcyAnRVZMJyBkaXNwbGF5IGxhYmVsIG9ubHkgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0VMJyB8fCAodHlwZSA9PT0gJ0VWTCcgJiYgZWRpdG9yVmFyc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke2F0dHJ9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYGZlYXR1cmUuZ2V0KGF0dHIpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGF0dHIsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5nZXQoYXR0cikgfHwgJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKClcblxuICAgIG9iamVjdFRvQXJyYXk6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sIC8vIGVuZCBvZiBvYmplY3RUb0FycmF5KClcblxuICAgIGdldFZlY3RvckxheWVyKHNvdXJjZSwgc3R5bGUpIHtcbiAgICAgICAgdmFyIGZuU3R5bGU7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHN0eWxlIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm5TdHlsZSA9IHN0eWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgc3R5bGU6IGZuU3R5bGVcbiAgICAgICAgfSk7XG4gICAgfSwvLyBlbmQgb2YgXCJnZXRWZWN0b3JMYXllcigpXCJcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBzdWJkb21haW4gZnJvbSB0aGUgY3VycmVudCByZXF1ZXN0IGhvc3QgYW5kIHJldHVybnMgaXQuXG4gICAgICogQHJldHVybnMge3N0cmluZyB8ICp9XG4gICAgICovXG4gICAgZ2V0Q3VycmVudFN1YmRvbWFpbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgcmVkcmF3TWFwVmlldzogZnVuY3Rpb24gKG1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHZhciBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyVG9wTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgbWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQucHJlcGVuZChjb250cm9sQ29udGFpbmVyVG9wTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgICQoY29udHJvbENvbnRhaW5lclRvcExlZnQpLmFmdGVyKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcbiAgICAgIG1hcENvbnRyb2xsZXIubGVmdFNsaWRlRWxlbWVudHMucHVzaChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAgIGlmIChtYXBEYXRhLnNjYWxlbGluZSkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUgPSBuZXcgb2wuY29udHJvbC5TY2FsZUxpbmUoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgIH1cblxuICAgICAgJChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCkuYXBwZW5kKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViKTtcblxuICAgICAgaWYgKG1hcERhdGEuem9vbWxldmVsKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCA9IG5ldyBab29tbGV2ZWwoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbiA9IG5ldyBvbC5jb250cm9sLk1vdXNlUG9zaXRpb24oe1xuICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGNvb3JkaW5hdGVGb3JtYXQ6IG9sLmNvb3JkaW5hdGUudG9TdHJpbmdIRE1TLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XSB8fCAnJztcbiAgICB9LFxuICAgIHN0b3JlVmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlOyAvLyBvbmx5IHN0cmluZ3NcbiAgICB9XG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciB1dGlscyA9IHRoaXMuYzRnLm1hcHMudXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=