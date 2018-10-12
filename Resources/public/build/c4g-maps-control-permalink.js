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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-permalink.js");
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

/***/ "./Resources/public/js/c4g-maps-control-permalink.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-permalink.js ***!
  \***********************************************************/
/*! exports provided: Permalink */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permalink", function() { return Permalink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};





(function ($, c4g) {
  'use strict';

  /**
   * Control to generate a permalink to the current Map state.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              options  control options.
   */

  c4g.maps.control.Permalink = function (options) {

    var self, button, copyButton, refreshButton;

    this.config = options || {};
    self = this;

    // default options
    this.config = $.extend({
      className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].PERMALINK,
      // mapController: undefined,
      tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].CTRL_PERMALINK,
      getParameter: false,
      label: 'P',
      target: undefined
    }, this.config);

    if (!this.config.mapController) {
      return false;
    }

    // wrapper div
    this.element = document.createElement('div');
    this.element.className = this.config.className + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_CONTROL;

    // button
    button = document.createElement('button');
    button.title = this.config.tipLabel;
    this.element.appendChild(button);

    // set onClick to the toggle-function
    // button.addEventListener('click', this.toggle, false);
    // button.addEventListener('touchstart', this.toggle, false);
    $(button).click(function () {
      try {
        this.blur();
      } catch (ignore) {}
      self.toggle();
    });

    // popup
    // will be attached when opened the first time
    // to make sure its really the last element in the container
    this.popupAttached = false;
    this.popup = document.createElement('div');
    this.popup.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].PERMALINK_POPUP + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE;

    // textfield
    this.textfield = document.createElement('input');
    this.textfield.type = 'text';
    this.popup.appendChild(this.textfield);

    // copy button
    copyButton = document.createElement('button');
    copyButton.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].COPY + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON;
    copyButton.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].COPY_TO_CLIPBOARD;
    copyButton.setAttribute('data-clipboard-target', '.' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].PERMALINK_POPUP + ' > input[type="text"]');
    this.popup.appendChild(copyButton);
    new Clipboard(copyButton);

    // refresh button
    refreshButton = document.createElement('button');
    refreshButton.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].REFRESH + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON;
    refreshButton.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].REFRESH;
    $(refreshButton).click(function () {
      self.generateLinkFromCurrentState({ target: self.textfield });
    });
    this.popup.appendChild(refreshButton);

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: this.element,
      target: this.config.target
    });
  };
  ol.inherits(c4g.maps.control.Permalink, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Permalink.prototype = $.extend(c4g.maps.control.Permalink.prototype, {

    open: function open() {
      if (!this.popupAttached) {
        $(this.popup).slideDown(1);
        this.config.target.appendChild(this.popup);
        this.popupAttached = true;
      }
      $(this.popup).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
      $(this.element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
      this.generateLinkFromCurrentState({ target: this.textfield });
    },

    close: function close() {
      $(this.popup).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
      $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
    },

    toggle: function toggle() {
      if ($(this.popup).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    },

    generateLinkFromCurrentState: function generateLinkFromCurrentState(opt_options) {
      var options, proxy, mapView, parameters, link, center, baseLayerIdx, layerIdx, layers;

      options = opt_options || {};
      if (!options.paramCount || !(options.paramCount === 6 || options.paramCount === 2 || options.paramCount === 1)) {
        options.paramCount = 6;
      }

      parameters = [];
      mapView = this.config.mapController.map.getView();
      proxy = this.config.mapController.proxy;

      center = mapView.getCenter();
      center = ol.proj.transform([center[0], center[1]], 'EPSG:3857', 'EPSG:4326');

      parameters.push(+center[0].toFixed(5));
      parameters.push(+center[1].toFixed(5));
      parameters.push(mapView.getZoom());
      parameters.push(+mapView.getRotation().toFixed(2));

      // find active baselayer
      if (proxy.activeBaselayerId) {
        parameters.push(proxy.activeBaselayerId);
      } else {
        parameters.push(0);
      }

      // find active layers
      layers = [];
      for (layerIdx in proxy.activeLayerIds) {
        if (proxy.activeLayerIds.hasOwnProperty(layerIdx)) {
          layers.push(parseInt(layerIdx, 10));
        }
      }
      // delta-decode if there are more than one layer
      if (layers.length > 1) {
        layers = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].deltaEncode(layers);
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }
      parameters.push(layers);
      parameters = parameters.join('/');

      // build link
      link = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].setUrlParam(parameters, this.config.getParameter);

      if (options.target) {
        options.target.value = link;
      } else {
        return link;
      }
    }, // end of generateLinkFromCurrentState

    generateLink: function generateLink(parameters) {
      if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
        return false;
      }

      // build and return link
      return __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].setUrlParam(parameters.join('/'), this.config.getParameter);
    } // end of generateLink

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var Permalink = this.c4g.maps.control.Permalink;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBlcm1hbGluay5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnN0YW50IiwiJCIsImkxOG4iLCJleHRlbmQiLCJMQU5HIiwiTkFNRSIsIkhJREUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfRURJVE9SIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJDVFJMX0lORk9QQUdFIiwiQ1RSTF9BRERJVElPTkFMUEFORUwiLCJDVFJMX0FDQ09VTlQiLCJDVFJMX1pPT01MRVZFTCIsIkNUUkxfTU9VU0VDT09SRFMiLCJDVFJMX0dFT1NFQVJDSCIsIkNUUkxfU1RBUlRfU0VBUkNIIiwiQ1RSTF9PVkVSVklFV01BUCIsIkNUUkxfR0VPQk9PS01BUktTIiwiQ1RSTF9TSURFQk9BUkQiLCJDVFJMX1NUQVJCT0FSRCIsIkNUUkxfQVRUUklCVVRJT04iLCJDVFJMX0dSSUQiLCJDVFJMX1BFUk1BTElOSyIsIkNUUkxfRlVMTFNDUkVFTiIsIkNUUkxfUFJJTlQiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0JBU0VMQVlFUiIsIlNUQVJCT0FSRF9MQVlFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTSURFQk9BUkQiLCJST1VURVJfVklFV19BRERSRVNTX0lOUFVUIiwiUk9VVEVSX0ZST01fTEFCRUwiLCJST1VURVJfT1ZFUl9MQUJFTCIsIlJPVVRFUl9UT19MQUJFTCIsIlJPVVRFUl9DTEVBUl9USVRMRSIsIlJPVVRFUl9DTEVBUl9IVE1MIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX0ZST00iLCJST1VURVJfVE8iLCJST1VURVJfRklORF9ST1VURSIsIlJPVVRFUl9MT0NfUk9VVEVfVE8iLCJST1VURVJfUk9VVEVERVNDIiwiUk9VVEVSX1JPVVRFTkFNRSIsIlJPVVRFUl9ESVNUQU5DRSIsIlJPVVRFUl9USU1FIiwiUk9VVEVSX1JFVl9HRU9DT0RJTkciLCJST1VURVJfRVJST1JfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9TRUFSQ0hJTkciLCJST1VURVJfRVJST1JfU0VBUkNISU5HIiwiUk9VVEVSX0NBTENfUk9VVEUiLCJST1VURVJfRVJST1JfQ0FMQ19ST1VURSIsIk1FQVNVUkVUT09MUyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJHRU9CT09LTUFSS1NfUExBQ0VIT0xERVIiLCJJTkZPUEFHRSIsIkFERElUSU9OQUxQQU5FTCIsIkFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwiTk9ORSIsImpRdWVyeSIsImxhbmdDb25zdGFudHMiLCJjc3MiLCJPUEVOIiwiQ0xPU0VBQkxFIiwiRU5BQkxFRCIsIkRJU0FCTEVEIiwiSUNPTiIsIkNPTlRST0wiLCJDT1BZIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJMT0FESU5HIiwiQU5JTUFUSU9OX1NQSU4iLCJMQVJHRSIsIlNNQUxMIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiQVRUUklCVVRJT05fTE9HTyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsIkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQiLCJFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkciLCJFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT04iLCJFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRSIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfRFJBV19PUFRJT05TIiwiR0VPU0VBUkNIIiwiR0VPU0VBUkNIX1dSQVBQRVIiLCJHRU9TRUFSQ0hfVFJJR0dFUiIsIkdFT1NFQVJDSF9TVEFSVCIsIkdSQVRJQ1VMRSIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUUiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUiIsIlRPT0xUSVBfUE9QVVAiLCJaT09NX0xFVkVMIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfQ0xFQVIiLCJST1VURVJfQlVUVE9OQkFSIiwiUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUiIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX0hHViIsIlJPVVRFUl9QUk9GSUxFX0JJS0UiLCJST1VURVJfUFJPRklMRV9GT09UIiwiUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU0iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU4iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9PVkVSTEFZQ09OVEFJTkVSIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRSIsIk9MX1ZJRVdQT1JUIiwiT0xfWk9PTSIsIk9MX1pPT01fSU4iLCJPTF9aT09NX0VYVCIsIk9MX1pPT01fSE9NRSIsIk9MX1pPT01fUE9TIiwiT0xfWk9PTV9XSVRIX0VYVCIsIk9MX1pPT01fV0lUSF9IT01FIiwiT0xfWk9PTV9XSVRIX1BPUyIsIk9MX1pPT01fU0xJREVSIiwiT0xfWk9PTV9XSVRIX1NMSURFUiIsImNzc0NvbnN0YW50cyIsImNvbnRyb2wiLCJQZXJtYWxpbmsiLCJvcHRpb25zIiwic2VsZiIsImJ1dHRvbiIsImNvcHlCdXR0b24iLCJyZWZyZXNoQnV0dG9uIiwiY29uZmlnIiwiY2xhc3NOYW1lIiwidGlwTGFiZWwiLCJnZXRQYXJhbWV0ZXIiLCJsYWJlbCIsInRhcmdldCIsInVuZGVmaW5lZCIsIm1hcENvbnRyb2xsZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwiYmx1ciIsImlnbm9yZSIsInRvZ2dsZSIsInBvcHVwQXR0YWNoZWQiLCJwb3B1cCIsInRleHRmaWVsZCIsInR5cGUiLCJzZXRBdHRyaWJ1dGUiLCJDbGlwYm9hcmQiLCJnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlIiwib2wiLCJDb250cm9sIiwiY2FsbCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwib3BlbiIsInNsaWRlRG93biIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjbG9zZSIsImhhc0NsYXNzIiwib3B0X29wdGlvbnMiLCJwcm94eSIsIm1hcFZpZXciLCJwYXJhbWV0ZXJzIiwibGluayIsImNlbnRlciIsImJhc2VMYXllcklkeCIsImxheWVySWR4IiwibGF5ZXJzIiwicGFyYW1Db3VudCIsIm1hcCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJwcm9qIiwidHJhbnNmb3JtIiwicHVzaCIsInRvRml4ZWQiLCJnZXRab29tIiwiZ2V0Um90YXRpb24iLCJhY3RpdmVCYXNlbGF5ZXJJZCIsImFjdGl2ZUxheWVySWRzIiwiaGFzT3duUHJvcGVydHkiLCJwYXJzZUludCIsImxlbmd0aCIsInV0aWxzIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJ2YWx1ZSIsImdlbmVyYXRlTGluayIsIlpvb21sZXZlbCIsInVwZGF0ZVpvb21sZXZlbCIsImNvbnNvbGUiLCJ3YXJuIiwidW5kZWZpbmVkSFRNTCIsImlubmVySFRNTCIsIm9uIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImdldFVuaXF1ZUlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlR2VvSnNvblByb3BlcnR5IiwiaW5wdXQiLCJvdXRwdXQiLCJyZXBsYWNlIiwiZGVjb2RlR2VvSnNvblByb3BlcnR5IiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJzZWFyY2hQYXJhbSIsInBhcmFtUmVwbGFjZWQiLCJpIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImhhc2giLCJzZWFyY2giLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwia2V5Iiwib2Zmc2V0Iiwib3JpZ2luU3RyaW5nIiwiZ2V0VXJsUGFyYW0iLCJyZWdFeCIsInN1YnN0cmluZyIsIlJlZ0V4cCIsImV4ZWMiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsInNvcnQiLCJhIiwiYiIsImRlbHRhRGVjb2RlIiwiaXNOYU4iLCJjYWxsSG9va0Z1bmN0aW9ucyIsImFyckhvb2tGdW5jdGlvbnMiLCJqIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInN0eWxlIiwicmVkdWNlZFN0eWxlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsb2NhdGlvblN0eWxlcyIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJzZXRXaWR0aCIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJmaWxsIiwic3Ryb2tlIiwicmFkaXVzIiwibWVhc3VyZUdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJvcHRfZm9yY2VMaW5lTWVhc3VyZSIsIm9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlIiwic3BoZXJlIiwiY29vcmRpbmF0ZXMiLCJjb29yZDEiLCJjb29yZDIiLCJyZXN1bHQiLCJnZW9tIiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJnZXRDb29yZGluYXRlcyIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsImh0bWxWYWx1ZSIsImFicyIsImdldEFyZWEiLCJnZXRSYWRpdXMiLCJlZGdlQ29vcmRpbmF0ZSIsIlBJIiwic3FydCIsImdldEV4dGVudEZvckdlb21ldHJpZXMiLCJhcnJHZW9tZXRyaWVzIiwiZXh0ZW50U291cmNlIiwic291cmNlIiwiVmVjdG9yIiwiYWRkRmVhdHVyZXMiLCJnZXRFeHRlbnQiLCJFeHRlbnQiLCJmaXRUb0V4dGVudHMiLCJleHRlbnRzIiwib3B0X3BhZGRpbmciLCJvcHRfYW5pbWF0aW9uRHVyYXRpb24iLCJ2aWV3IiwicGFkZGluZyIsImV4dGVudCIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsIm1pblJlc29sdXRpb24iLCJtaW5ab29tIiwibWF4Wm9vbSIsImFuaW1hdGUiLCJzdGFydCIsIkRhdGUiLCJkdXJhdGlvbiIsInJlc29sdXRpb24iLCJnZXRSZXNvbHV0aW9uIiwiZml0IiwiZ2V0U2l6ZSIsImUiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwic3RySW5wdXQiLCJmZWF0dXJlIiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwibGF5ZXIiLCJmdW5jdGlvbk5hbWUiLCJ3aW5kb3ciLCJnZXRTdHlsZSIsImdldCIsImV2S2V5IiwiZWRpdG9yVmFycyIsImF0dHIiLCJvYmplY3RUb0FycmF5Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImdldFZlY3RvckxheWVyIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJocmVmIiwicmVkcmF3TWFwVmlldyIsIm1hcERhdGEiLCJkYXRhIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJzY2FsZWxpbmUiLCJyZW1vdmVDb250cm9sIiwiY29udHJvbHMiLCJTY2FsZUxpbmUiLCJhZGRDb250cm9sIiwiYXBwZW5kIiwiem9vbWxldmVsIiwibW91c2Vwb3NpdGlvbiIsIk1vdXNlUG9zaXRpb24iLCJwcm9qZWN0aW9uIiwiY29vcmRpbmF0ZUZvcm1hdCIsImNvb3JkaW5hdGUiLCJ0b1N0cmluZ0hETVMiLCJnZXRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsInN0b3JlVmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQ0EsS0FBS0EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWSxFQUF2QjtBQUNBLEtBQUtBLEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLRCxHQUFMLENBQVNDLElBQVQsSUFBaUIsRUFBakM7QUFDQSxLQUFLRCxHQUFMLENBQVNDLElBQVQsQ0FBY0MsUUFBZCxHQUF5QixL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SyxhQUF2QixHQUF1QyxJQUFJck4sR0FBRy9CLE9BQUgsQ0FBV3FQLGFBQWYsQ0FBNkI7QUFDbEVDLHNCQUFZLFdBRHNEO0FBRWxFQyw0QkFBa0J4TixHQUFHeU4sVUFBSCxDQUFjQyxZQUZrQztBQUdsRTdPLGtCQUFRZ08sNkJBSDBEO0FBSWxFaEsseUJBQWU7QUFKbUQsU0FBN0IsQ0FBdkM7QUFNQTlELHNCQUFjc0MsR0FBZCxDQUFrQjZMLFVBQWxCLENBQTZCbk8sY0FBY2lPLFFBQWQsQ0FBdUJLLGFBQXBEO0FBQ0Q7QUFDRixLQWgzQnVDO0FBaTNCeENNLGNBQVUsa0JBQVUvSSxHQUFWLEVBQWU7QUFDckIsYUFBT2dKLGFBQWFoSixHQUFiLEtBQXFCLEVBQTVCO0FBQ0gsS0FuM0J1QztBQW8zQnhDaUosZ0JBQVksb0JBQVVqSixHQUFWLEVBQWVyQyxLQUFmLEVBQXNCO0FBQ2hDcUwsbUJBQWFoSixHQUFiLElBQW9CckMsS0FBcEIsQ0FEZ0MsQ0FDTDtBQUM1QjtBQXQzQnVDLEdBQXpCLENBQWpCO0FBeTNCRCxDQS8zQkEsRUErM0JDN0wsTUEvM0JELEVBKzNCUyxLQUFLeEksR0EvM0JkLENBQUQ7O0FBaTRCTyxJQUFJaVUsUUFBUSxLQUFLalUsR0FBTCxDQUFTQyxJQUFULENBQWNnVSxLQUExQixDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtcGVybWFsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcGVybWFsaW5rLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNjRiYjAyZGM1YzNlOTBiZDk3IiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDb250cm9sIHRvIGdlbmVyYXRlIGEgcGVybWFsaW5rIHRvIHRoZSBjdXJyZW50IE1hcCBzdGF0ZS5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdGlvbnMgIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUGVybWFsaW5rID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmLFxuICAgICAgICBidXR0b24sXG4gICAgICAgIGNvcHlCdXR0b24sXG4gICAgICAgIHJlZnJlc2hCdXR0b247XG5cbiAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnMgfHwge307XG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlBFUk1BTElOSyxcbiAgICAgIC8vIG1hcENvbnRyb2xsZXI6IHVuZGVmaW5lZCxcbiAgICAgIHRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLkNUUkxfUEVSTUFMSU5LLFxuICAgICAgZ2V0UGFyYW1ldGVyOiBmYWxzZSxcbiAgICAgIGxhYmVsOiAnUCcsXG4gICAgICB0YXJnZXQ6IHVuZGVmaW5lZFxuICAgIH0sIHRoaXMuY29uZmlnKTtcblxuICAgIGlmICghdGhpcy5jb25maWcubWFwQ29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuY29uZmlnLmNsYXNzTmFtZSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcblxuICAgIC8vIGJ1dHRvblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMuY29uZmlnLnRpcExhYmVsO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLCBmYWxzZSk7XG4gICAgLy8gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnRvZ2dsZSwgZmFsc2UpO1xuICAgICQoYnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuXG4gICAgICB9XG4gICAgICBzZWxmLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gcG9wdXBcbiAgICAvLyB3aWxsIGJlIGF0dGFjaGVkIHdoZW4gb3BlbmVkIHRoZSBmaXJzdCB0aW1lXG4gICAgLy8gdG8gbWFrZSBzdXJlIGl0cyByZWFsbHkgdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgY29udGFpbmVyXG4gICAgdGhpcy5wb3B1cEF0dGFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucG9wdXAuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0wgKyAnICcgKyBjc3NDb25zdGFudHMuUEVSTUFMSU5LX1BPUFVQICsgJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuXG4gICAgLy8gdGV4dGZpZWxkXG4gICAgdGhpcy50ZXh0ZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMudGV4dGZpZWxkLnR5cGUgPSAndGV4dCc7XG4gICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZCh0aGlzLnRleHRmaWVsZCk7XG5cbiAgICAvLyBjb3B5IGJ1dHRvblxuICAgIGNvcHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb3B5QnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT1BZICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT047XG4gICAgY29weUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ09QWV9UT19DTElQQk9BUkQ7XG4gICAgY29weUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcGJvYXJkLXRhcmdldCcsICcuJyArIGNzc0NvbnN0YW50cy5QRVJNQUxJTktfUE9QVVAgKyAnID4gaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcbiAgICB0aGlzLnBvcHVwLmFwcGVuZENoaWxkKGNvcHlCdXR0b24pO1xuICAgIG5ldyBDbGlwYm9hcmQoY29weUJ1dHRvbik7XG5cbiAgICAvLyByZWZyZXNoIGJ1dHRvblxuICAgIHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZWZyZXNoQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5SRUZSRVNIICsgJyAnICsgY3NzQ29uc3RhbnRzLklDT047XG4gICAgcmVmcmVzaEJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuUkVGUkVTSDtcbiAgICAkKHJlZnJlc2hCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSh7dGFyZ2V0OiBzZWxmLnRleHRmaWVsZH0pO1xuICAgIH0pO1xuICAgIHRoaXMucG9wdXAuYXBwZW5kQ2hpbGQocmVmcmVzaEJ1dHRvbik7XG5cbiAgICAvLyBpbmhlcml0YW5jZS1zdHVmZlxuICAgIG9sLmNvbnRyb2wuQ29udHJvbC5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5jb25maWcudGFyZ2V0XG4gICAgfSk7XG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuUGVybWFsaW5rLCBvbC5jb250cm9sLkNvbnRyb2wpO1xuXG5cbiAgLypcbiAgICogQWRkIG1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUGVybWFsaW5rLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuUGVybWFsaW5rLnByb3RvdHlwZSwge1xuXG4gICAgb3BlbjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLnBvcHVwQXR0YWNoZWQpIHtcbiAgICAgICAgJCh0aGlzLnBvcHVwKS5zbGlkZURvd24oMSk7XG4gICAgICAgIHRoaXMuY29uZmlnLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcbiAgICAgICAgdGhpcy5wb3B1cEF0dGFjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgICQodGhpcy5wb3B1cCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgdGhpcy5nZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKHt0YXJnZXQ6IHRoaXMudGV4dGZpZWxkfSk7XG4gICAgfSxcblxuICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMucG9wdXApLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLnBvcHVwKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlOiBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIHByb3h5LFxuICAgICAgICAgIG1hcFZpZXcsXG4gICAgICAgICAgcGFyYW1ldGVycyxcbiAgICAgICAgICBsaW5rLFxuICAgICAgICAgIGNlbnRlcixcbiAgICAgICAgICBiYXNlTGF5ZXJJZHgsXG4gICAgICAgICAgbGF5ZXJJZHgsXG4gICAgICAgICAgbGF5ZXJzO1xuXG4gICAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gICAgICBpZiAoIW9wdGlvbnMucGFyYW1Db3VudCB8fCAhKG9wdGlvbnMucGFyYW1Db3VudCA9PT0gNiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDIgfHwgb3B0aW9ucy5wYXJhbUNvdW50ID09PSAxKSkge1xuICAgICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgICAgfVxuXG4gICAgICBwYXJhbWV0ZXJzID0gW107XG4gICAgICBtYXBWaWV3ID0gdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgICAgcHJveHkgPSB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLnByb3h5O1xuXG4gICAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgICAgY2VudGVyID0gb2wucHJvai50cmFuc2Zvcm0oW2NlbnRlclswXSwgY2VudGVyWzFdXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcblxuICAgICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg1KSk7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goK2NlbnRlclsxXS50b0ZpeGVkKDUpKTtcbiAgICAgIHBhcmFtZXRlcnMucHVzaChtYXBWaWV3LmdldFpvb20oKSk7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgYmFzZWxheWVyXG4gICAgICBpZiAocHJveHkuYWN0aXZlQmFzZWxheWVySWQpIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKHByb3h5LmFjdGl2ZUJhc2VsYXllcklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCgwKTtcbiAgICAgIH1cblxuICAgICAgLy8gZmluZCBhY3RpdmUgbGF5ZXJzXG4gICAgICBsYXllcnMgPSBbXTtcbiAgICAgIGZvciAobGF5ZXJJZHggaW4gcHJveHkuYWN0aXZlTGF5ZXJJZHMpIHtcbiAgICAgICAgaWYgKHByb3h5LmFjdGl2ZUxheWVySWRzLmhhc093blByb3BlcnR5KGxheWVySWR4KSkge1xuICAgICAgICAgIGxheWVycy5wdXNoKHBhcnNlSW50KGxheWVySWR4LCAxMCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBkZWx0YS1kZWNvZGUgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbGF5ZXJcbiAgICAgIGlmIChsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICBsYXllcnMgPSB1dGlscy5kZWx0YUVuY29kZShsYXllcnMpO1xuICAgICAgICBsYXllcnMgPSBsYXllcnMuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlcnMucHVzaChsYXllcnMpO1xuICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuam9pbignLycpO1xuXG4gICAgICAvLyBidWlsZCBsaW5rXG4gICAgICBsaW5rID0gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycywgdGhpcy5jb25maWcuZ2V0UGFyYW1ldGVyKTtcblxuICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIG9wdGlvbnMudGFyZ2V0LnZhbHVlID0gbGluaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsaW5rO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgICBnZW5lcmF0ZUxpbms6IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICAgIHJldHVybiB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLmpvaW4oJy8nKSwgdGhpcy5jb25maWcuZ2V0UGFyYW1ldGVyKTtcbiAgICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgUGVybWFsaW5rID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlBlcm1hbGluaztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcGVybWFsaW5rLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY3VycmVudCB6b29tbGV2ZWwgb24gdGhlIG1hcC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICB1cGRhdGVab29tbGV2ZWw7XG5cbiAgICBzZWxmID0gdGhpcztcblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5tYXBWaWV3KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1pvb21sZXZlbCBjb250cm9sIG5lZWRzIHRvIGtub3cgdGhlIG1hcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuWk9PTV9MRVZFTCxcbiAgICAgIHVuZGVmaW5lZEhUTUw6ICcnXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMubWFwVmlldy5nZXRab29tKCk7XG5cbiAgICB1cGRhdGVab29tbGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhcnNlSW50KG9wdGlvbnMubWFwVmlldy5nZXRab29tKCkpO1xuICAgIH07XG5cbiAgICBvcHRpb25zLm1hcFZpZXcub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgdXBkYXRlWm9vbWxldmVsKTtcbiAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBvcHRpb25zLnRhcmdldFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUsIHtcblxuICAgIC8vIG5vdGhpbmcgdG8gYWRkIGhlcmVcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgWm9vbWxldmVsID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlpvb21sZXZlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Wm9vbWxldmVsfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbFwiXG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogYzRnLU1hcHMgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLnV0aWxzID0gJC5leHRlbmQoYzRnLm1hcHMudXRpbHMsIHtcbiAgICAvKipcbiAgICAgKiAgQ29udmVydHMgdGhlIGZpcnN0IGxldHRlciBvZiBhIGdpdmVuIHN0cmluZyB0byB1cHBlcmNhc2UsIGxlYXZpbmcgdGhlIHJlbWFpbmluZyBzdHJpbmcgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogIEBwYXJhbSAgICB7c3RyaW5nfSAgICB0aGUgc3RyaW5nIHRvIGNhcGl0YWxpemVcbiAgICAgKlxuICAgICAqICBAcmV0dXJuICAge3N0cmluZ30gICAgdGhlIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcjogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiB1bmlxdWUgaWQuXG4gICAgICpcbiAgICAgKiBUaGUgaWQgaXMgOSBjaGFyYWN0ZXJzIGxvbmcgYW5kIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICBUaGUgZ2VuZXJhdGVkIGlkLlxuICAgICAqL1xuICAgIGdldFVuaXF1ZUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAgICAgLy8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcbiAgICAgIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICAgICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgbm90IGJyZWFrIHRoZSBDb2RlLlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXCAtPiBcXFxcO1xuICAgICAqICAgXCIgLT4gJyc7XG4gICAgICogICDDhCAtPiAmQXVtbDtcbiAgICAgKiAgIMOkIC0+ICZhdW1sO1xuICAgICAqICAgw5YgLT4gJk91bWw7XG4gICAgICogICDDtiAtPiAmb3VtbDtcbiAgICAgKiAgIMOcIC0+ICZVdW1sO1xuICAgICAqICAgw7wgLT4gJnV1bWw7XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGVuY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXC9nLCAnXFxcXFxcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcXCIvZywgJ1xcJ1xcJydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw4QvZywgJyZBdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw6QvZywgJyZhdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5YvZywgJyZPdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7YvZywgJyZvdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5wvZywgJyZVdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7wvZywgJyZ1dW1sOydcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGVuY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBiZSBkaXNwbGF5ZWQgY29ycmVjdGx5LlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXFxcICAgICAtPiBcXDtcbiAgICAgKiAgICcnICAgICAtPiBcIjtcbiAgICAgKiAgICZBdW1sOyAtPiDDhFxuICAgICAqICAgJmF1bWw7IC0+IMOkXG4gICAgICogICAmT3VtbDsgLT4gw5ZcbiAgICAgKiAgICZvdW1sOyAtPiDDtlxuICAgICAqICAgJlV1bWw7IC0+IMOcXG4gICAgICogICAmdXVtbDsgLT4gw7xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVjb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXFxcXFwvZywgJ1xcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcJ1xcJy9nLCAnXFxcIidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJkF1bWw7L2csICfDhCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJmF1bWw7L2csICfDpCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJk91bWw7L2csICfDlidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJm91bWw7L2csICfDtidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJlV1bWw7L2csICfDnDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZ1dW1sOy9nLCAnw7wnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBkZWNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yIHJlcGxhY2UgYW4gVVJMLXBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIGBwYXJhbWAsXG4gICAgICogd2lsbCBiZSBhcHBsaWVkIGFzIFwiaGFzaC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcyNwYXJhbVxuICAgICAqIE5vdGUsIHRoYXQgYWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIHdoZXJlYXMgZXhpc3RpbmcgXCJHRVQtcGFyYW1ldGVyc1wiIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIHNldCwgaXQgd2lsbCBiZSBhcHBsaWVkIGFzIFwiR0VULXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzP29wdF9nZXRLZXk9cGFyYW1cbiAgICAgKiBJZiB0aGUga2V5IGRlc2NyaWJlZCBieSBgb3B0X2dldEtleWAgaXMgYWxyZWFkeSBleGlzdGluZywgaXRzIHZhbHVlIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIG90aGVyd2lzZSB0aGUga2V5LXZhbHVlLXBhaXIgd2lsbCBiZSBhcHBlbmRlZCBhcHByb3ByaWF0bHkuXG4gICAgICogQWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2V4ZWN1dGVgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgbmV3IGxpbmsgYXMgYHN0cmluZ2AsXG4gICAgICogb3RoZXJ3aXNlIHRoZSBcImhyZWYvbG9jYXRpb25cIiB3aWxsIGJlIGNoYW5nZWQgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIsIHdoaWNoIGNhbiBjYXVzZSBhIHBhZ2VyZWxvYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBwYXJhbSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufHN0cmluZ30gIG9wdF9nZXRLZXkgICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgIG9wdF9leGVjdXRlICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqL1xuICAgIHNldFVybFBhcmFtOiBmdW5jdGlvbiAocGFyYW0sIG9wdF9nZXRLZXksIG9wdF9leGVjdXRlKSB7XG4gICAgICB2YXIgbGluayxcbiAgICAgICAgICBzZWFyY2hQYXJhbSxcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkLFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxpbmsgPSBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIC8vIHVzZSBoYXNoLXBhcmFtZXRlclxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gcGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBsb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBHRVQtcGFyYW1ldGVyXG4gICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYWxyZWFkeSBzZWFyY2gtcGFyYW1ldGVyc1xuICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICBvcHRfZ2V0S2V5ID0gb3B0X2dldEtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIC8vIHJlcGxhY2UgcGFyYW1ldGVyIGlmIGFscmVhZHkgZXhpc3RlbnRcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFxuICAgICAgICAgICAgICAvKFtePVxcP1xcJl0rKT0oW14mXSspL2dpLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gb3B0X2dldEtleSkge1xuICAgICAgICAgICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFwcGVuZCBhcyBuZXcgcGFyYW1ldGVyXG4gICAgICAgICAgaWYgKCFwYXJhbVJlcGxhY2VkKSB7XG4gICAgICAgICAgICBzZWFyY2hQYXJhbSArPSAnJicgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCBiZSB0aGUgb25seSBzZWFyY2gtcGFyYW1ldGVyIGluIHRoZSBVUkxcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9ICc/JyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5zZWFyY2ggPSBzZWFyY2hQYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IHNlYXJjaFBhcmFtICsgbG9jYXRpb24uaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSwgLy8gZW5kIG9mIHNldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIEdldCBzZWFyY2ggb3IgaGFzaCBVUkwtcGFyYW1ldGVyIGFzIHN0cmluZy5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgaGFzaC1wYXJhbWV0ZXIgb2YgdGhlIFVSTCBpcyByZXR1cm5lZCxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCBzZWFyY2ggZm9yIGEgR0VULXBhcmFtZXRlciBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIElmIGEgcGFyYW1ldGVyIGlzIG5vdCBleGlzdGVudCwgb3IgZW1wdHksIGFuIGVtcHR5IHN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxzdHJpbmd9ICBvcHRfZ2V0S2V5ICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm91bmQgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGdldFVybFBhcmFtOiBmdW5jdGlvbiAob3B0X2dldEtleSkge1xuICAgICAgdmFyIHBhcmFtLFxuICAgICAgICAgIHJlZ0V4O1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgcGFyYW0gPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgcGFyYW0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWdFeCA9IG5ldyBSZWdFeHAoJ1tcXD9cXCZdJyArIG9wdF9nZXRLZXkgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICAgIHBhcmFtID0gcmVnRXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogRGVsdGEtZW5jb2RlIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAgICogTm90ZSB0aGF0IHRoZSBhcnJheSB3aWxsIGJlIHNvcnRlZCAobG93ZXN0IHRvIGhpZ2hlc3QpXG4gICAgICogYmVmb3JlIGVuY29kaW5nLlxuICAgICAqXG4gICAgICogU28gYWZ0ZXIgdGhlIGVuY29kaW5nIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvbnRhaW5zXG4gICAgICogdGhlIHNtYWxsZXN0IG51bWJlciBvZiB0aGUgc2V0IGFuZCBlYWNoIGZvbGxvd2luZyBudW1iZXIganVzdFxuICAgICAqIHJlcHJlc2VudHMgdGhlIG9mZnNldCB0byBpdHMgcHJldmlvdXMgbmVpZ2hib3IuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG1vc3RseSBlZmZpY2llbnQgZm9yIGhpZ2ggbnVtYmVycywgdGhhdCBhcmUgXCJjbG9zZSB0byBlYWNoIG90aGVyXCIuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgWzEzMzcsIDExLCAxMDEsIDEyMywgOTYsIDY5LCA0MiwgNDJdXG4gICAgICogICB3aWxsIGJlIHNvcnRlZFxuICAgICAqICAgWzExLCA0MiwgNDIsIDY5LCA5NiwgMTAxLCAxMjMsIDEzMzddXG4gICAgICogICBhbmQgZW5jb2RlZCB0b1xuICAgICAqICAgWzExLCAzMSwgMCwgMjcsIDI3LCA1LCAyMiwgMTIxNF1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRW5jb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoYXJySW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBhcnJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgYXJySW5wdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICB9KTtcblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBhcnJJbnB1dFswXTtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBhcnJJbnB1dFtpXSAtIGFycklucHV0W2kgLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YUVuY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBkZWx0YS1lbmNvZGVkIGFycmF5LlxuICAgICAqIFNlZSBgZGVsdGFFbmNvZGVgIGZ1bmN0aW9uIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFEZWNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBwYXJzZUludChhcnJJbnB1dFswXSwgMTApO1xuICAgICAgaWYgKGlzTmFOKGFycklucHV0WzBdKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gcGFyc2VJbnQoYXJySW5wdXRbaV0sIDEwKSArIGFyck91dHB1dFtpIC0gMV07XG4gICAgICAgIGlmIChpc05hTihhcnJPdXRwdXRbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFEZWNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGNhbGwgZnVuY3Rpb25zIGluIGBhcnJIb29rRnVuY3Rpb25zYCB3aXRoIGdpdmVuIGBwYXJhbWV0ZXJzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxmdW5jdGlvbj59ICAgYXJySG9va0Z1bmN0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHttaXhlZH0gICAgICAgICAgICAgcGFyYW1ldGVycyAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNhbGxIb29rRnVuY3Rpb25zOiBmdW5jdGlvbiAoYXJySG9va0Z1bmN0aW9ucywgcGFyYW1ldGVycykge1xuICAgICAgdmFyIGo7XG5cbiAgICAgIGlmIChhcnJIb29rRnVuY3Rpb25zICYmIGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJySG9va0Z1bmN0aW9uc1tqXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJySG9va0Z1bmN0aW9uc1tqXShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJjYWxsSG9va0Z1bmN0aW9ucygpXCJcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBoZXgtZm9ybWF0ZWQgY29sb3IgdmFsdWUgaW50byByZ2JhKCktZm9ybWF0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBoZXggICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgb3B0X29wYWNpdHkgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHk6IGZ1bmN0aW9uIChoZXgsIG9wdF9vcGFjaXR5LCBvcHRfYXJyYXkpIHtcblxuICAgICAgdmFyIGJpZ2ludCwgciwgZywgYiwgYTtcblxuICAgICAgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgb3B0X29wYWNpdHkudmFsdWUgPSBwYXJzZUludChvcHRfb3BhY2l0eS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiB0eXBlb2Ygb3B0X29wYWNpdHkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0X29wYWNpdHkgPT09ICdvYmplY3QnICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSBvcHRfb3BhY2l0eS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgICBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICAgIGIgPSBiaWdpbnQgJiAyNTU7XG4gICAgICBhID0gb3B0X29wYWNpdHkgPyAob3B0X29wYWNpdHkgLyAxMDApIDogMTtcbiAgICAgIGlmKG9wdF9hcnJheSl7XG4gICAgICAgIHJldHVybiBbcixnLGIsYV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZHVjZSBhIGRlZmluZWQgc3R5bGUsIHRvIGEgc2ltcGxlciB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogVGhlIHJlZHVjZWQgc3R5bGUgaXMgdGhlIGZpcnN0IHN0eWxlIG9mIHRoZSBkZWZpbmVkIHN0eWxlc2V0LFxuICAgICAqIHdpdGggYSAxcHggdGhpY2sgc3Ryb2tlIGFuZCBhIGNpcmNsZSB3aXRoIGEgNXB4IHJhZGl1cy5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBhZGRpdGlvbmFsIGdlb21ldHJpZXMgd2l0aCBhIG1haW4tZ2VvbWV0cnksXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gZGVmaW5lIGEgd2hvbGUgbmV3IHN0eWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcnxzdHJpbmd9ICAgICAgICAgICBzdHlsZUlkICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8b2wuc3R5bGUuU3R5bGU+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZWR1Y2VTdHlsZTogZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHZhciBzdHlsZSxcbiAgICAgICAgICByZWR1Y2VkU3R5bGUsXG4gICAgICAgICAgZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZVN0eWxlO1xuXG4gICAgICBpZiAoIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdIHx8ICFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHN0eWxlID0gYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUoKVswXTtcblxuICAgICAgZmlsbFN0eWxlID0gc3R5bGUuZ2V0RmlsbCgpO1xuICAgICAgc3Ryb2tlU3R5bGUgPSBzdHlsZS5nZXRTdHJva2UoKTtcbiAgICAgIHN0cm9rZVN0eWxlLnNldFdpZHRoKDEpO1xuXG4gICAgICByZWR1Y2VkU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pLFxuICAgICAgICAvLyB0ZXh0OiBzdHlsZS5nZXRUZXh0KCksXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBbcmVkdWNlZFN0eWxlXTtcbiAgICB9LCAvLyBlbmQgb2YgXCJyZWR1Y2VTdHlsZVwiXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBnaXZlbiBnZW9tZXRyeS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBnZW9tZXRyeSBpcyBhIGBMaW5lU3RyaW5nYCB0aGUgZnVuY3Rpb24gd2lsbCBtZWFzdXJlIGl0cyBsZW5ndGgsXG4gICAgICogaXMgaXQgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIHRoZSBhY3JlYWdlLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiBgMGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgb3B0aW9uYWwgYG9wdF9mb3JjZUxpbmVNZWFzdXJlYCBwYXJhbWV0ZXIgaXMgYHRydWVgXG4gICAgICogYW5kIHRoZSBnZW9tZXRyeSBpcyBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgaXRzIHBlcmltZXRlciBpbnN0ZWFkXG4gICAgICogb2YgaXRzIGFjcmVhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuZ2VvbS5MaW5lU3RyaW5nfG9sLmdlb20uUG9seWdvbn0gICBnZW9tZXRyeSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgIG9wdF9mb3JjZUxpbmVNZWFzdXJlICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8c3RyaW5nPnxudW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1lYXN1cmVHZW9tZXRyeTogZnVuY3Rpb24gKGdlb21ldHJ5LCBvcHRfZm9yY2VMaW5lTWVhc3VyZSwgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICBzcGhlcmUsXG4gICAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgICAgY29vcmQxLFxuICAgICAgICAgIGNvb3JkMixcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vc3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcgfHwgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uICYmIG9wdF9mb3JjZUxpbmVNZWFzdXJlKSkge1xuXG4gICAgICAgIGNvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgICBjb29yZDEgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICBjb29yZDIgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpICsgMV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgdmFsdWUgKz0gb2wuc3BoZXJlLmdldERpc3RhbmNlKGNvb3JkMSwgY29vcmQyLCA2Mzc4MTM3KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgIC8vZ2VvbWV0cnkgPSAvKiogQHR5cGUge29sLmdlb20uUG9seWdvbn0gKi8oZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSk7XG4gICAgICAgIC8vY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRMaW5lYXJSaW5nKDApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnMob2wuc3BoZXJlLmdldEFyZWEoZ2VvbWV0cnkpKTtcbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSAmJiBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhbHVlID0gTWF0aC5QSSAqIE1hdGguc3FydCh2YWx1ZSk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChyZXN1bHQucmF3VmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQoKHZhbHVlICogMTAwKSAvIDEwMCkgLyAxMDAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV4dGVudCBmb3IgYW4gYXJyYXkgb2YgZ2VvbWV0cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheS48b2wuZ2VvbS5zaW1wbGVHZW9tZXRyeT59ICBhcnJHZW9tZXRyaWVzICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7b2wuRXh0ZW50fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEV4dGVudEZvckdlb21ldHJpZXM6IGZ1bmN0aW9uIChhcnJHZW9tZXRyaWVzKSB7XG4gICAgICB2YXIgZXh0ZW50U291cmNlO1xuXG4gICAgICBpZiAoIWFyckdlb21ldHJpZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHZW9tZXRyaWVzIG1pc3NpbmcgZm9yIGV4dGVudCBjYWxjdWxhdGlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGV4dGVudFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICBleHRlbnRTb3VyY2UuYWRkRmVhdHVyZXMoYXJyR2VvbWV0cmllcyk7XG5cbiAgICAgIHJldHVybiBleHRlbnRTb3VyY2UuZ2V0RXh0ZW50KCkgfHwgb2wuRXh0ZW50KFswLCAwLCAwLCAwXSk7XG4gICAgfSwgLy8gZW5kIG9mIGdldEV4dGVudEZvckdlb21ldHJpZXMoKVxuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBhcnJheSBvZiBgZXh0ZW50c2AuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgZXh0ZW50cyAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnRzOiBmdW5jdGlvbiAoZXh0ZW50cywgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICBrZXk7XG5cbiAgICAgIGlmICghZXh0ZW50cyB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9leHRlbnQgPSBvbC5leHRlbnQuY3JlYXRlRW1wdHkoKTtcblxuICAgICAgZm9yIChrZXkgaW4gZXh0ZW50cykge1xuICAgICAgICBpZiAoZXh0ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHRlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGV4dGVudCA9IGV4dGVudHNba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2wuZXh0ZW50LmV4dGVuZChleHRlbnQsIGV4dGVudHNba2V5XSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maXRUb0V4dGVudChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIDUsIDAsIDAsIDIpO1xuXG5cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnRzXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGBleHRlbnRgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLkV4dGVudH0gIGV4dGVudCAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7YXJyYXl9ICAgICAgb3B0X3BhZGRpbmcgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluWm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21heFpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5SZXNvbHV0aW9uICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50OiBmdW5jdGlvbiAoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24sIG9wdF9taW5ab29tLCBvcHRfbWF4Wm9vbSwgb3B0X21pblJlc29sdXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZml0T3B0aW9ucztcblxuICAgICAgaWYgKCFleHRlbnQgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGZpdE9wdGlvbnMgPSB7XG4gICAgICAgICdwYWRkaW5nJzogb3B0X3BhZGRpbmcgfHwgWzI1LCAyNSwgMjUsIDI1XVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdF9taW5SZXNvbHV0aW9uICYmIG9wdF9taW5SZXNvbHV0aW9uID4gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblJlc29sdXRpb24gPSBvcHRfbWluUmVzb2x1dGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9taW5ab29tICYmIG9wdF9taW5ab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5ab29tID0gb3B0X21pblpvb207XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWF4Wm9vbSAmJiBvcHRfbWF4Wm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWF4Wm9vbSA9IG9wdF9tYXhab29tO1xuICAgICAgfVxuXG4gICAgICAvLyBhbmltYXRlIHRoZSBcImZpdHRpbmdcIiB3aGVuIGEgZHVyYXRpb24gaXMgZ2l2ZW4gYW5kIGl0cyBncmVhdGVyIHRoYW4gMFxuICAgICAgaWYgKG9wdF9hbmltYXRpb25EdXJhdGlvbiAmJiBvcHRfYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgY2VudGVyOiBbMCwgMF1cbiAgICAgICAgICAvL3JvdGF0aW9uOiBNYXRoLlBJXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtYXAuYmVmb3JlUmVuZGVyKFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnBhbih7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgc291cmNlOiB2aWV3LmdldENlbnRlcigpXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi56b29tKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpLCB7cGFkZGluZzogWzI1LCAyNSwgMjUsIDI1XX0pO1xuICAgICAgICAvL3ZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSk7XG4gICAgICAgIC8vdmlldy5zZXRab29tKHZpZXcuZ2V0Wm9vbSgpLTEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudCgpXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBydW4gYWxsIHBsYWNlaG9sZGVyIGZ1bmN0aW9ucyBhdCBvbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgc3RySW5wdXQgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgICAgICAgICAgICAgZmVhdHVyZSAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyIHwgdW5kZWZpbmVkfSAgb3B0X2xheWVyICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQWxsUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgLy8gb25seSBjaGVjayB0aGUgZmlyc3QgdHdvIHBhcmFtZXRlcnMgYXMgdGhleSB3aWxsIGJlIHVzZWQgYnkgYWxsIHBsYWNlaG9sZGVyLWZ1bmN0aW9uc1xuICAgICAgLy8gLT4gZm9yIHBlcmZvcm1hbmNlXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcik7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUFsbFBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHtGTmZ1bmN0aW9uTmFtZX1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgd2luZG93LmZ1bmN0aW9uTmFtZShmZWF0dXJlLCBzdHlsZSlgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKiBTdHlsZSB3aWxsIGJlIHRha2VuIGVpdGhlciBmcm9tIHRoZSBmZWF0dXJlLCBvciB0aGUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyfSAgbGF5ZXIgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8ICFsYXllcikge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxce0ZOKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBmdW5jdGlvbk5hbWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZ1bmN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSAmJiB0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSgpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxheWVyLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGxheWVyLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbZnVuY3Rpb25OYW1lXShmZWF0dXJlLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMsIGluIGBzdHJJbnB1dGAsIGZvciB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBnZW9FZGl0b3IuXG4gICAgICogVmFsaWQgcGxhY2Vob2xkZXJzIGFyZTogKFtrZXldIHJlcHJlc2VudHMgdGhlIHN0cmluZ25hbWUgb2YgdGhlIHZhcmlhYmxlcyBrZXkpXG4gICAgICogICBgJHtFTFtrZXldfWAgICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZMW2tleV19YCAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGUsIGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAqICAgYCR7RVZba2V5XX1gICAgPT4gIFZhbHVlIG9mIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZWW2tleV19YCAgPT4gIFNhbWUgYXMgYCR7RVZba2V5XX1gXG4gICAgICpcbiAgICAgKiBJZiBubyBhcHByb3ByaWF0ZSB2YWx1ZSBjYW4gYmUgZm91bmQgZm9yIGEgcGxhY2Vob2xkZXJcbiAgICAgKiBpdCB3aWxsIHNpbXBseSBiZSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KEVWP1tMVl0pKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB0eXBlLCBldktleSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBlZGl0b3JWYXJzLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaGFzIGVkaXRvclZhcnNcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpKSB7XG4gICAgICAgICAgICAgIGVkaXRvclZhcnMgPSBmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpO1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggZm9yIGVkaXRvclZhciB3aXRoIGtleSA9PSBldktleVxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWRpdG9yVmFycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChlZGl0b3JWYXJzW2ldLmtleSA9PT0gZXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgJ0VWTCcgZGlzcGxheSBsYWJlbCBvbmx5IGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdFTCcgfHwgKHR5cGUgPT09ICdFVkwnICYmIGVkaXRvclZhcnNbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHthdHRyfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGBmZWF0dXJlLmdldChhdHRyKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBhdHRyLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0KGF0dHIpIHx8ICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycygpXG5cbiAgICBvYmplY3RUb0FycmF5OiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iamVjdCA9IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LCAvLyBlbmQgb2Ygb2JqZWN0VG9BcnJheSgpXG5cbiAgICBnZXRWZWN0b3JMYXllcihzb3VyY2UsIHN0eWxlKSB7XG4gICAgICAgIHZhciBmblN0eWxlO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzdHlsZSBpcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHN0eWxlOiBmblN0eWxlXG4gICAgICAgIH0pO1xuICAgIH0sLy8gZW5kIG9mIFwiZ2V0VmVjdG9yTGF5ZXIoKVwiXG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgc3ViZG9tYWluIGZyb20gdGhlIGN1cnJlbnQgcmVxdWVzdCBob3N0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCAqfVxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdWJkb21haW4oKSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIHJlZHJhd01hcFZpZXc6IGZ1bmN0aW9uIChtYXBDb250cm9sbGVyKSB7XG4gICAgICB2YXIgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lclRvcExlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgIG1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LnByZXBlbmQoY29udHJvbENvbnRhaW5lclRvcExlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAkKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KS5hZnRlcihjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG4gICAgICBtYXBDb250cm9sbGVyLmxlZnRTbGlkZUVsZW1lbnRzLnB1c2goY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgICBpZiAobWFwRGF0YS5zY2FsZWxpbmUpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lID0gbmV3IG9sLmNvbnRyb2wuU2NhbGVMaW5lKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCxcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICB9XG5cbiAgICAgICQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpLmFwcGVuZChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yik7XG5cbiAgICAgIGlmIChtYXBEYXRhLnpvb21sZXZlbCkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwgPSBuZXcgWm9vbWxldmVsKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXBEYXRhLm1vdXNlcG9zaXRpb24pIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24gPSBuZXcgb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uKHtcbiAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBjb29yZGluYXRlRm9ybWF0OiBvbC5jb29yZGluYXRlLnRvU3RyaW5nSERNUyxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgJyc7XG4gICAgfSxcbiAgICBzdG9yZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTsgLy8gb25seSBzdHJpbmdzXG4gICAgfVxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgdXRpbHMgPSB0aGlzLmM0Zy5tYXBzLnV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9