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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-overviewmap.js");
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

/***/ "./Resources/public/js/c4g-maps-control-overviewmap.js":
/*!*************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-overviewmap.js ***!
  \*************************************************************/
/*! exports provided: OverviewMap */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewMap", function() { return OverviewMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};




(function ($, c4g) {
  'use strict';

  /**
   * Displays a overviewmap on the map.
   *   This class wraps the ovm a bit differently than
   *   the standard ol-overviemap, to allow proper css-transitions.
   *
   *   Not clean, but unique ;)
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.OverviewMap = function (options) {

    var element, trigger, triggerIcon, ovm;

    // default options
    options = $.extend({
      collapsed: true,
      tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].CTRL_OVERVIEWMAP,
      layers: [new ol.layer.Tile({ source: new ol.source.OSM() })]
    }, options);

    element = document.createElement('div');
    element.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_CONTROL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OVERVIEWMAP + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
    if (options.collapsed) {
      element.className += ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE;
    } else {
      element.className += ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN;
    }
    options.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = options.tipLabel;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON;
    trigger.appendChild(triggerIcon);

    $(trigger).click(function () {
      if ($(element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE)) {
        $(element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
      } else {
        $(element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
      }
      try {
        this.blur();
      } catch (ignore) {}
    });

    ovm = new ol.control.OverviewMap({
      collapsible: false,
      collapsed: false,
      target: element,
      layers: options.layers
    });

    return ovm;
  };

  /*
   * Add methods
   */
  c4g.maps.control.OverviewMap.prototype = $.extend(c4g.maps.control.OverviewMap.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var OverviewMap = this.c4g.maps.control.OverviewMap;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDI2YzAwNTViNzg1MWEyMTE2NDEiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLW92ZXJ2aWV3bWFwLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb25zdGFudCIsIiQiLCJpMThuIiwiZXh0ZW5kIiwiTEFORyIsIk5BTUUiLCJISURFIiwiQ0xPU0UiLCJQT0lOVCIsIkZSRUVIQU5EIiwiTElORSIsIlBPTFlHT04iLCJDSVJDTEUiLCJQRVJJTUVURVIiLCJMRU5HVEgiLCJTVVJGQUNFQVJFQSIsIlJBRElVUyIsIlJFRlJFU0giLCJDT1BZX1RPX0NMSVBCT0FSRCIsIkNUUkxfWk9PTV9JTiIsIkNUUkxfWk9PTV9PVVQiLCJDVFJMX1pPT01fRVhUIiwiQ1RSTF9aT09NX0hPTUUiLCJDVFJMX1pPT01fUE9TIiwiQ1RSTF9aT09NX1NMSURFUiIsIkNUUkxfUkVTRVRfUk9UQVRJT04iLCJDVFJMX1BPUlRTSURFIiwiQ1RSTF9ST1VURVIiLCJDVFJMX0VESVRPUiIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiQ1RSTF9JTkZPUEFHRSIsIkNUUkxfQURESVRJT05BTFBBTkVMIiwiQ1RSTF9BQ0NPVU5UIiwiQ1RSTF9aT09NTEVWRUwiLCJDVFJMX01PVVNFQ09PUkRTIiwiQ1RSTF9HRU9TRUFSQ0giLCJDVFJMX1NUQVJUX1NFQVJDSCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJDVFJMX0dFT0JPT0tNQVJLUyIsIkNUUkxfU0lERUJPQVJEIiwiQ1RSTF9TVEFSQk9BUkQiLCJDVFJMX0FUVFJJQlVUSU9OIiwiQ1RSTF9HUklEIiwiQ1RSTF9QRVJNQUxJTksiLCJDVFJMX0ZVTExTQ1JFRU4iLCJDVFJMX1BSSU5UIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIlBPUFVQX1JPVVRFX0ZST00iLCJQT1BVUF9ST1VURV9UTyIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9CQVNFTEFZRVIiLCJTVEFSQk9BUkRfTEFZRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwiU0lERUJPQVJEIiwiUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCIsIlJPVVRFUl9GUk9NX0xBQkVMIiwiUk9VVEVSX09WRVJfTEFCRUwiLCJST1VURVJfVE9fTEFCRUwiLCJST1VURVJfQ0xFQVJfVElUTEUiLCJST1VURVJfQ0xFQVJfSFRNTCIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwiUk9VVEVSX1NXSVRDSCIsIlJPVVRFUl9PVkVSIiwiUk9VVEVSX1BSSU5UIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEUiLCJST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1RJTUUiLCJST1VURVJfVklFV19MQUJFTF9QUk9GSUxFIiwiUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyIsIlJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HIiwiUk9VVEVSIiwiUk9VVEVSX04iLCJST1VURVJfRSIsIlJPVVRFUl9TIiwiUk9VVEVSX1ciLCJST1VURVJfTkUiLCJST1VURVJfU0UiLCJST1VURVJfU1ciLCJST1VURVJfTlciLCJST1VURVJfRElSRUNUSU9OXzAiLCJST1VURVJfRElSRUNUSU9OXzEiLCJST1VURVJfRElSRUNUSU9OXzIiLCJST1VURVJfRElSRUNUSU9OXzMiLCJST1VURVJfRElSRUNUSU9OXzQiLCJST1VURVJfRElSRUNUSU9OXzUiLCJST1VURVJfRElSRUNUSU9OXzYiLCJST1VURVJfRElSRUNUSU9OXzciLCJST1VURVJfRElSRUNUSU9OXzgiLCJST1VURVJfRElSRUNUSU9OXzEwIiwiUk9VVEVSX0RJUkVDVElPTl8xNSIsIlJPVVRFUl9GUk9NIiwiUk9VVEVSX1RPIiwiUk9VVEVSX0ZJTkRfUk9VVEUiLCJST1VURVJfTE9DX1JPVVRFX1RPIiwiUk9VVEVSX1JPVVRFREVTQyIsIlJPVVRFUl9ST1VURU5BTUUiLCJST1VURVJfRElTVEFOQ0UiLCJST1VURVJfVElNRSIsIlJPVVRFUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkciLCJST1VURVJfU0VBUkNISU5HIiwiUk9VVEVSX0VSUk9SX1NFQVJDSElORyIsIlJPVVRFUl9DQUxDX1JPVVRFIiwiUk9VVEVSX0VSUk9SX0NBTENfUk9VVEUiLCJNRUFTVVJFVE9PTFMiLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiR0VPQk9PS01BUktTX1BMQUNFSE9MREVSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUwiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQUNDT1VOVCIsIkFDQ09VTlRfVklFV19UUklHR0VSIiwiU0VBUkNIX05PVF9GT1VORCIsIk5PTkUiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiY3NzIiwiT1BFTiIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIkFDVElWRSIsIklOQUNUSVZFIiwiTE9BRElORyIsIkFOSU1BVElPTl9TUElOIiwiTEFSR0UiLCJTTUFMTCIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkFUVFJJQlVUSU9OX0xPR08iLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIkNPTlRST0xfQ09OVEFJTkVSX1RSIiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIiLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQiLCJFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEUiLCJFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1QiLCJFRElUT1JfRFJBV19UUklHR0VSIiwiRURJVE9SX0NPTlRFTlRfU0VMRUNUIiwiRURJVE9SX0RSQVdfT1BUSU9OUyIsIkdFT1NFQVJDSCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiR0VPU0VBUkNIX1RSSUdHRVIiLCJHRU9TRUFSQ0hfU1RBUlQiLCJHUkFUSUNVTEUiLCJQUklOVCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIk9WRVJWSUVXTUFQIiwiT1ZFUlZJRVdNQVBfV1JBUFBFUiIsIkdFT0JPT0tNQVJLUyIsIlBFUk1BTElOSyIsIlBFUk1BTElOS19QT1BVUCIsIlBPUFVQX0NMT1NFIiwiUE9QVVBfUk9VVEVfV1JBUFBFUiIsIlBPUlRTSURFIiwiUE9SVFNJREVfQ09OVEFJTkVSIiwiUE9SVFNJREVfQ09OVFJPTCIsIlBPUlRTSURFX1dSQVBQRVIiLCJQT1JUU0lERV9USVRMRUJBUiIsIlBPUlRTSURFX1RPUF9UT09MQkFSIiwiUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVIiLCJQT1JUU0lERV9CT1RUT01fVE9PTEJBUiIsIlBPUlRTSURFX1NUQVRVU0JBUiIsIlBPUlRTSURFX1ZJRVdUUklHR0VSQkFSIiwiUE9SVFNJREVfSEVBRExJTkUiLCJQT1JUU0lERV9CVVRUT05CQVIiLCJQT1JUU0lERV9CVVRUT04iLCJQT1JUU0lERV9ISURFIiwiUE9SVFNJREVfQ0xPU0UiLCJTUElOTkVSIiwiU1RBUkJPQVJEX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9DT05UUk9MIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfVElUTEVCQVIiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVIiLCJTVEFSQk9BUkRfU1RBVFVTQkFSIiwiU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiU1RBUkJPQVJEX0JVVFRPTkJBUiIsIlNUQVJCT0FSRF9CVVRUT04iLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJjc3NDb25zdGFudHMiLCJjb250cm9sIiwiT3ZlcnZpZXdNYXAiLCJvcHRpb25zIiwiZWxlbWVudCIsInRyaWdnZXIiLCJ0cmlnZ2VySWNvbiIsIm92bSIsImNvbGxhcHNlZCIsInRpcExhYmVsIiwibGF5ZXJzIiwib2wiLCJsYXllciIsIlRpbGUiLCJzb3VyY2UiLCJPU00iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0YXJnZXQiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xpY2siLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJibHVyIiwiaWdub3JlIiwiY29sbGFwc2libGUiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQ0EsS0FBS0EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWSxFQUF2QjtBQUNBLEtBQUtBLEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLRCxHQUFMLENBQVNDLElBQVQsSUFBaUIsRUFBakM7QUFDQSxLQUFLRCxHQUFMLENBQVNDLElBQVQsQ0FBY0MsUUFBZCxHQUF5QixLQUFLRixHQUFMLENBQVNDLElBQVQsQ0FBY0MsUUFBZCxJQUEwQixFQUFuRDs7QUFFQyxXQUFVQyxDQUFWLEVBQWFILEdBQWIsRUFBa0I7QUFDakI7O0FBRUE7Ozs7QUFHQUEsTUFBSUMsSUFBSixDQUFTQyxRQUFULENBQWtCRSxJQUFsQixHQUF5QkQsRUFBRUUsTUFBRixDQUFTTCxJQUFJQyxJQUFKLENBQVNDLFFBQVQsQ0FBa0JFLElBQTNCLEVBQWlDOztBQUV4REUsVUFBTSxJQUZrRDs7QUFJeERDLFVBQU0sTUFKa0Q7QUFLeERDLFVBQU0sV0FMa0Q7QUFNeERDLFdBQU8sV0FOaUQ7QUFPeERDLFdBQU8sS0FQaUQ7QUFReERDLGNBQVUsVUFSOEM7QUFTeERDLFVBQU0sT0FUa0Q7QUFVeERDLGFBQVMsUUFWK0M7QUFXeERDLFlBQVEsUUFYZ0Q7QUFZeERDLGVBQVcsUUFaNkM7QUFheERDLFlBQVEsT0FiZ0Q7QUFjeERDLGlCQUFhLGVBZDJDO0FBZXhEQyxZQUFRLFFBZmdEO0FBZ0J4REMsYUFBUyxlQWhCK0M7QUFpQnhEQyx1QkFBbUIsNEJBakJxQzs7QUFtQnhEQyxrQkFBYyxZQW5CMEM7QUFvQnhEQyxtQkFBZSxhQXBCeUM7QUFxQnhEQyxtQkFBZSxxQkFyQnlDO0FBc0J4REMsb0JBQWdCLDZCQXRCd0M7QUF1QnhEQyxtQkFBZSx3QkF2QnlDO0FBd0J4REMsc0JBQWtCLGFBeEJzQztBQXlCeERDLHlCQUFxQiwwQ0F6Qm1DO0FBMEJ4REMsbUJBQWUsMEJBMUJ5QztBQTJCeERDLGlCQUFhLHdCQTNCMkM7QUE0QnhEQyxpQkFBYSx3QkE1QjJDO0FBNkJ4REMsdUJBQW1CLCtCQTdCcUM7QUE4QnhEQyxtQkFBZSwyQkE5QnlDO0FBK0J4REMsMEJBQXNCLHVCQS9Ca0M7QUFnQ3hEQyxrQkFBYyx5QkFoQzBDO0FBaUN4REMsb0JBQWdCLE1BakN3QztBQWtDeERDLHNCQUFrQixTQWxDc0M7QUFtQ3hEQyxvQkFBZ0IsdUJBbkN3QztBQW9DeERDLHVCQUFtQixlQXBDcUM7QUFxQ3hEQyxzQkFBa0IsaUNBckNzQztBQXNDeERDLHVCQUFtQixxQkF0Q3FDO0FBdUN4REMsb0JBQWdCLDJCQXZDd0M7QUF3Q3hEQyxvQkFBZ0IsMkJBeEN3QztBQXlDeERDLHNCQUFrQixzQkF6Q3NDO0FBMEN4REMsZUFBVyx3QkExQzZDO0FBMkN4REMsb0JBQWdCLHNCQTNDd0M7QUE0Q3hEQyxxQkFBaUIsZ0NBNUN1QztBQTZDeERDLGdCQUFZLG1CQTdDNEM7O0FBK0N4REMsWUFBUSxRQS9DZ0Q7QUFnRHhEQyxtQ0FBK0IsOEJBaER5QjtBQWlEeERDLGlDQUE2QixtQkFqRDJCO0FBa0R4REMsMEJBQXNCLG1CQWxEa0M7QUFtRHhEQywyQkFBdUIsaUJBbkRpQztBQW9EeERDLDJCQUF1QixpQ0FwRGlDO0FBcUR4REMsd0JBQW9CLGtEQXJEb0M7QUFzRHhEQyxtQ0FBK0Isd0VBdER5QjtBQXVEeERDLGdDQUE0QixlQXZENEI7QUF3RHhEQyxvQ0FBZ0MsZ0JBeER3QjtBQXlEeERDLHVDQUFtQyxtQkF6RHFCO0FBMER4REMseUNBQXFDLG1CQTFEbUI7QUEyRHhEQyxzQ0FBa0Msa0JBM0RzQjtBQTREeERDLHFDQUFpQyxnQkE1RHVCOztBQThEeERDLHNCQUFrQixnQkE5RHNDO0FBK0R4REMsb0JBQWdCLGVBL0R3Qzs7QUFpRXhEQyxlQUFXLFdBakU2QztBQWtFeERDLHlCQUFxQixhQWxFbUM7QUFtRXhEQyxxQkFBaUIsUUFuRXVDO0FBb0V4REMsOENBQTBDLGFBcEVjO0FBcUV4REMsMENBQXNDLGdCQXJFa0I7O0FBdUV4REMsZUFBVyxXQXZFNkM7O0FBeUV4REMsK0JBQTJCLGNBekU2QjtBQTBFeERDLHVCQUFtQixPQTFFcUM7QUEyRXhEQyx1QkFBbUIsY0EzRXFDO0FBNEV4REMscUJBQWlCLE1BNUV1QztBQTZFeERDLHdCQUFvQixTQTdFb0M7QUE4RXhEQyx1QkFBbUIsRUE5RXFDO0FBK0V4REMsMEJBQXNCLGNBL0VrQzs7QUFpRnhEQyxtQkFBYyw0QkFqRjBDO0FBa0Z4REMsaUJBQVkseUJBbEY0QztBQW1GeERDLGtCQUFhLDRCQW5GMkM7O0FBcUZ4REMsNkJBQXlCLFFBckYrQjtBQXNGeERDLGdDQUE0QixhQXRGNEI7QUF1RnhEQyw0QkFBd0IsT0F2RmdDO0FBd0Z4REMsK0JBQTJCLFNBeEY2Qjs7QUEwRnhEQywrQkFBMkIseUJBMUY2QjtBQTJGeERDLGdDQUE0QixzQ0EzRjRCOztBQTZGeERDLFlBQVEsUUE3RmdEO0FBOEZ4REMsY0FBVSxRQTlGOEM7QUErRnhEQyxjQUFVLEtBL0Y4QztBQWdHeERDLGNBQVUsT0FoRzhDO0FBaUd4REMsY0FBVSxRQWpHOEM7QUFrR3hEQyxlQUFXLFNBbEc2QztBQW1HeERDLGVBQVcsUUFuRzZDO0FBb0d4REMsZUFBVyxTQXBHNkM7QUFxR3hEQyxlQUFXLFVBckc2QztBQXNHeERDLHdCQUFvQixzQ0F0R29DO0FBdUd4REMsd0JBQW9CLHdDQXZHb0M7QUF3R3hEQyx3QkFBb0Isd0NBeEdvQztBQXlHeERDLHdCQUFvQixpQ0F6R29DO0FBMEd4REMsd0JBQW9CLHdDQTFHb0M7QUEyR3hEQyx3QkFBb0Isd0JBM0dvQztBQTRHeERDLHdCQUFvQix1Q0E1R29DO0FBNkd4REMsd0JBQW9CLGdDQTdHb0M7QUE4R3hEQyx3QkFBb0IsdUNBOUdvQztBQStHeERDLHlCQUFxQiwrQ0EvR21DO0FBZ0h4RCw2QkFBeUIsNEZBaEgrQjtBQWlIeEQsNkJBQXlCLDZGQWpIK0I7QUFrSHhELDZCQUF5Qiw2RkFsSCtCO0FBbUh4RCw2QkFBeUIsNkZBbkgrQjtBQW9IeEQsNkJBQXlCLDZGQXBIK0I7QUFxSHhELDZCQUF5Qiw4RkFySCtCO0FBc0h4RCw2QkFBeUIsNkZBdEgrQjtBQXVIeEQsNkJBQXlCLDRGQXZIK0I7QUF3SHhELDZCQUF5Qiw2RkF4SCtCO0FBeUh4RCw2QkFBeUIsd0dBekgrQjtBQTBIeERDLHlCQUFxQiw2QkExSG1DOztBQTRIeEQseUJBQXFCLDRCQTVIbUM7QUE2SHhELHlCQUFxQiwrQ0E3SG1DO0FBOEh4RCx5QkFBcUIsaUNBOUhtQztBQStIeEQseUJBQXFCLG1DQS9IbUM7QUFnSXhELHlCQUFxQiwrQkFoSW1DO0FBaUl4RCx5QkFBcUIsK0JBakltQztBQWtJeEQseUJBQXFCLDhCQWxJbUM7QUFtSXhELHlCQUFxQiwrQ0FuSW1DO0FBb0l4RCx5QkFBcUIsOEJBcEltQztBQXFJeEQseUJBQXFCLCtDQXJJbUM7QUFzSXhELDBCQUFzQix5Q0F0SWtDO0FBdUl4RCwwQkFBc0IsaUVBdklrQztBQXdJeEQsMEJBQXNCLGlFQXhJa0M7QUF5SXhELDBCQUFzQiw0QkF6SWtDO0FBMEl4RCwwQkFBc0IsMkJBMUlrQzs7QUE0SXhELHdCQUFzQixPQTVJa0M7QUE2SXhELHdCQUFzQixlQTdJa0M7QUE4SXhELHdCQUFzQixRQTlJa0M7QUErSXhELHdCQUFzQixlQS9Ja0M7QUFnSnhELHdCQUFzQixXQWhKa0M7QUFpSnhELHdCQUFzQixjQWpKa0M7QUFrSnhELHdCQUFzQixPQWxKa0M7QUFtSnhELHdCQUFzQixjQW5Ka0M7QUFvSnhELHdCQUFzQixhQXBKa0M7O0FBc0p4REMsaUJBQWEsT0F0SjJDO0FBdUp4REMsZUFBVyxNQXZKNkM7QUF3SnhEQyx1QkFBbUIsY0F4SnFDO0FBeUp4REMseUJBQXFCLGVBekptQztBQTBKeERDLHNCQUFrQixvQkExSnNDO0FBMkp4REMsc0JBQWtCLE9BM0pzQztBQTRKeERDLHFCQUFpQixTQTVKdUM7QUE2SnhEQyxpQkFBYSxNQTdKMkM7QUE4SnhEQywwQkFBc0IscUJBOUprQztBQStKeERDLGdDQUE0QixtQ0EvSjRCO0FBZ0t4REMsc0JBQWtCLGtCQWhLc0M7QUFpS3hEQyw0QkFBd0IsZ0NBaktnQztBQWtLeERDLHVCQUFtQixtQkFsS3FDO0FBbUt4REMsNkJBQXlCLGlDQW5LK0I7O0FBcUt4REMsa0JBQWMsZUFySzBDO0FBc0t4REMsdUJBQW1CLHdHQXRLcUM7QUF1S3hEQyxrQ0FBOEIsbUVBdkswQjtBQXdLeERDLHNDQUFrQyxlQXhLc0I7QUF5S3hEQywrQ0FBMkMsaUJBekthO0FBMEt4REMsNENBQXdDLGdCQTFLZ0I7QUEyS3hEQywyQ0FBdUMsZUEzS2lCO0FBNEt4REMsNkNBQXlDLGlCQTVLZTs7QUE4S3hEQyw4QkFBMEIsa0JBOUs4Qjs7QUFnTHhEQyxjQUFVLGVBaEw4QztBQWlMeERDLHFCQUFpQixPQWpMdUM7QUFrTHhEQyxrQ0FBOEIsZ0JBbEwwQjtBQW1MeERDLGFBQVMsU0FuTCtDO0FBb0x4REMsMEJBQXNCLGtCQXBMa0M7O0FBc0x4REMsc0JBQWtCLHFGQXRMc0M7O0FBd0x4REMsVUFBTSxFQXhMa0QsQ0F3TC9DO0FBeEwrQyxHQUFqQyxDQUF6QixDQU5pQixDQStMYjtBQUVMLENBak1BLEVBaU1DQyxNQWpNRCxFQWlNUyxLQUFLeEksR0FqTWQsQ0FBRDs7QUFtTU8sSUFBSXlJLGdCQUFnQixLQUFLekksR0FBTCxDQUFTQyxJQUFULENBQWNDLFFBQWQsQ0FBdUJFLElBQTNDLEM7Ozs7Ozs7Ozs7Ozs7QUN4TVA7QUFBQTtBQUFBO0FBQ0EsS0FBS0osR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWSxFQUF2QjtBQUNBLEtBQUtBLEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLRCxHQUFMLENBQVNDLElBQVQsSUFBaUIsRUFBakM7QUFDQSxLQUFLRCxHQUFMLENBQVNDLElBQVQsQ0FBY0MsUUFBZCxHQUF5QixLQUFLRixHQUFMLENBQVNDLElBQVQsQ0FBY0MsUUFBZCxJQUEwQixFQUFuRDs7QUFFQyxXQUFVQyxDQUFWLEVBQWFILEdBQWIsRUFBa0I7QUFDakI7O0FBRUE7Ozs7QUFHQUEsTUFBSUMsSUFBSixDQUFTQyxRQUFULENBQWtCd0ksR0FBbEIsR0FBd0J2SSxFQUFFRSxNQUFGLENBQVNMLElBQUlDLElBQUosQ0FBU0MsUUFBVCxDQUFrQndJLEdBQTNCLEVBQWdDOztBQUV0REMsVUFBTSxVQUZnRDtBQUd0RGxJLFdBQU8sV0FIK0M7QUFJdERtSSxlQUFXLGVBSjJDO0FBS3REQyxhQUFTLGFBTDZDO0FBTXREQyxjQUFVLGNBTjRDO0FBT3REdEksVUFBTSxVQVBnRDtBQVF0RHVJLFVBQU0sVUFSZ0Q7QUFTdERDLGFBQVMsYUFUNkM7QUFVdERDLFVBQU0sVUFWZ0Q7QUFXdEQ5SCxhQUFTLGFBWDZDO0FBWXREK0gsWUFBUSxZQVo4QztBQWF0REMsY0FBVSxjQWI0QztBQWN0REMsYUFBUyxhQWQ2QztBQWV0REMsb0JBQWdCLG9CQWZzQztBQWdCdERDLFdBQU8sV0FoQitDO0FBaUJ0REMsV0FBTyxXQWpCK0M7QUFrQnREQyxnQkFBWSxnQkFsQjBDO0FBbUJ0REMsY0FBVSxjQW5CNEM7O0FBcUJ0REMsc0JBQWtCLHNCQXJCb0M7QUFzQnREQywwQkFBc0IsZ0NBdEJnQztBQXVCdERDLDBCQUFzQixpQ0F2QmdDO0FBd0J0REMsMEJBQXNCLG1DQXhCZ0M7QUF5QnREQyw4QkFBMEIsdUNBekI0QjtBQTBCdERDLDBCQUFzQixvQ0ExQmdDO0FBMkJ0REMsK0JBQTJCLHdCQTNCMkI7QUE0QnREQyxrQ0FBOEIsMkJBNUJ3QjtBQTZCdERDLG9DQUFnQyx1QkE3QnNCO0FBOEJ0REMsaUNBQTZCLDBCQTlCeUI7QUErQnREQyxnQ0FBNEIseUJBL0IwQjtBQWdDdERDLGlDQUE2QiwwQkFoQ3lCO0FBaUN0REMseUJBQXFCLGtCQWpDaUM7QUFrQ3REQywyQkFBdUIsb0JBbEMrQjtBQW1DdERDLHlCQUFxQix5QkFuQ2lDO0FBb0N0RHJILDBCQUFzQiwwQkFwQ2dDO0FBcUN0REMsMkJBQXVCLDJCQXJDK0I7QUFzQ3REQywyQkFBdUIsMkJBdEMrQjtBQXVDdERHLGdDQUE0QixnQ0F2QzBCO0FBd0N0REMsb0NBQWdDLG9DQXhDc0I7QUF5Q3REQyx1Q0FBbUMsdUNBekNtQjtBQTBDdERDLHlDQUFxQyxtQ0ExQ2lCO0FBMkN0REMsc0NBQWtDLHNDQTNDb0I7QUE0Q3REQyxxQ0FBaUMscUNBNUNxQjtBQTZDdEQ0RyxlQUFXLGVBN0MyQztBQThDdERDLHVCQUFtQix1QkE5Q21DO0FBK0N0REMsdUJBQW1CLHVCQS9DbUM7QUFnRHREQyxxQkFBaUIscUJBaERxQztBQWlEdERDLGVBQVcsZUFqRDJDO0FBa0R0RGxELHNDQUFrQyxzQ0FsRG9CO0FBbUR0REMsK0NBQTJDLHlDQW5EVztBQW9EdERDLDRDQUF3Qyw0Q0FwRGM7QUFxRHREQywyQ0FBdUMsMkNBckRlO0FBc0R0REMsNkNBQXlDLDZDQXREYTtBQXVEdEQrQyxXQUFNLFdBdkRnRDtBQXdEdERDLDJCQUF1QiwyQkF4RCtCO0FBeUR0RDlDLGNBQVUsY0F6RDRDO0FBMER0REUsa0NBQThCLGtDQTFEd0I7QUEyRHRERCxxQkFBaUIscUJBM0RxQztBQTREdERHLDBCQUFzQiwwQkE1RGdDO0FBNkR0REQsYUFBUyxhQTdENkM7QUE4RHRENEMsaUJBQWEsaUJBOUR5QztBQStEdERDLHlCQUFxQix5QkEvRGlDO0FBZ0V0REMsa0JBQWMsa0JBaEV3QztBQWlFdERDLGVBQVcsZUFqRTJDO0FBa0V0REMscUJBQWlCLHFCQWxFcUM7QUFtRXREQyxpQkFBYSxpQkFuRXlDO0FBb0V0REMseUJBQXFCLHlCQXBFaUM7QUFxRXREeEgsc0JBQWtCLHNCQXJFb0M7QUFzRXREQyxvQkFBZ0Isb0JBdEVzQztBQXVFdER3SCxjQUFVLGNBdkU0QztBQXdFdERDLHdCQUFvQix3QkF4RWtDO0FBeUV0REMsc0JBQWtCLHNCQXpFb0M7QUEwRXREQyxzQkFBa0Isc0JBMUVvQztBQTJFdERDLHVCQUFtQix1QkEzRW1DO0FBNEV0REMsMEJBQXNCLDBCQTVFZ0M7QUE2RXREQyxnQ0FBNEIsZ0NBN0UwQjtBQThFdERDLDZCQUF5Qiw2QkE5RTZCO0FBK0V0REMsd0JBQW9CLHdCQS9Fa0M7QUFnRnREQyw2QkFBeUIsNkJBaEY2QjtBQWlGdERDLHVCQUFtQix1QkFqRm1DO0FBa0Z0REMsd0JBQW9CLHdCQWxGa0M7QUFtRnREQyxxQkFBaUIscUJBbkZxQztBQW9GdERDLG1CQUFlLG1CQXBGdUM7QUFxRnREQyxvQkFBZ0Isb0JBckZzQztBQXNGdERDLGFBQVMsYUF0RjZDO0FBdUZ0RHRJLGVBQVcsZUF2RjJDO0FBd0Z0RHVJLHlCQUFxQix5QkF4RmlDO0FBeUZ0REMsdUJBQW1CLHVCQXpGbUM7QUEwRnREQyx1QkFBbUIsdUJBMUZtQztBQTJGdERDLHdCQUFvQix3QkEzRmtDO0FBNEZ0REMsaUNBQTZCLGlDQTVGeUI7QUE2RnREQyw4QkFBMEIsOEJBN0Y0QjtBQThGdERDLHlCQUFxQix5QkE5RmlDO0FBK0Z0REMsOEJBQTBCLDhCQS9GNEI7QUFnR3REQyx3QkFBb0Isd0JBaEdrQztBQWlHdERDLHlCQUFxQix5QkFqR2lDO0FBa0d0REMsc0JBQWtCLHNCQWxHb0M7QUFtR3REOUksOENBQTBDLDhDQW5HWTtBQW9HdERDLDBDQUFzQywwQ0FwR2dCO0FBcUd0RDhJLHFCQUFpQixxQkFyR3FDO0FBc0d0REMseUNBQXFDLCtCQXRHaUI7QUF1R3REQyw2QkFBeUIsbUJBdkc2QjtBQXdHdERDLHlCQUFxQixlQXhHaUM7QUF5R3REQyxxQ0FBaUMsMkJBekdxQjtBQTBHdERDLG1CQUFlLG1CQTFHdUM7QUEyR3REQyxnQkFBWSxnQkEzRzBDOztBQTZHdERDLDBCQUFzQiwwQkE3R2dDO0FBOEd0REMsNEJBQXdCLDRCQTlHOEI7QUErR3REQyx1QkFBbUIsdUJBL0dtQztBQWdIdERDLHFCQUFpQixxQkFoSHFDO0FBaUh0REMsd0JBQW9CLHdCQWpIa0M7QUFrSHREQyxzQkFBa0Isc0JBbEhvQztBQW1IdERDLGdDQUE0QixnQ0FuSDBCO0FBb0h0REMsaUNBQTZCLGlDQXBIeUI7QUFxSHREQyxnQ0FBNEIsZ0NBckgwQjs7QUF1SHREcEosbUJBQWUsbUJBdkh1QztBQXdIdERDLGlCQUFhLGlCQXhIeUM7QUF5SHREQyxrQkFBYyxrQkF6SHdDOztBQTJIdERtSix3QkFBb0Isd0JBM0hrQztBQTRIdERDLHdCQUFvQix3QkE1SGtDO0FBNkh0REMseUJBQXFCLHlCQTdIaUM7QUE4SHREQyx5QkFBcUIseUJBOUhpQztBQStIdERDLCtCQUEyQiwrQkEvSDJCOztBQW1JdERDLCtCQUEyQiw4QkFuSTJCO0FBb0l0REMsOEJBQTBCLDZCQXBJNEI7QUFxSXREQyxrQ0FBOEIsa0NBckl3QjtBQXNJdERDLG1DQUErQixtQ0F0SXVCO0FBdUl0REMsd0NBQW9DLHVDQXZJa0I7QUF3SXREQyw2Q0FBeUMsNENBeElhO0FBeUl0REMsNkNBQXlDLGtDQXpJYTtBQTBJdERDLGlEQUE2QyxzQ0ExSVM7O0FBNEl0REMsZ0JBQVksWUE1STBDO0FBNkl0REMscUJBQWlCLGlCQTdJcUM7O0FBK0l0REMseUJBQXFCLHFCQS9JaUM7QUFnSnREQyw0QkFBd0IsK0JBaEo4QjtBQWlKdERDLGlCQUFhLGFBakp5QztBQWtKdERDLGFBQVMsU0FsSjZDO0FBbUp0REMsZ0JBQVksWUFuSjBDO0FBb0p0REMsaUJBQWEsZ0JBcEp5QztBQXFKdERDLGtCQUFjLGNBckp3QztBQXNKdERDLGlCQUFhLGtCQXRKeUM7QUF1SnREQyxzQkFBa0IscUJBdkpvQztBQXdKdERDLHVCQUFtQixtQkF4Sm1DO0FBeUp0REMsc0JBQWtCLHVCQXpKb0M7QUEwSnREQyxvQkFBZ0IsZ0JBMUpzQztBQTJKdERDLHlCQUFxQixxQkEzSmlDOztBQTZKdER0SCxVQUFNLEVBN0pnRCxDQTZKN0M7QUE3SjZDLEdBQWhDLENBQXhCLENBTmlCLENBb0tiO0FBRUwsQ0F0S0EsRUFzS0NDLE1BdEtELEVBc0tTLEtBQUt4SSxHQXRLZCxDQUFEOztBQXdLTyxJQUFJOFAsZUFBZSxLQUFLOVAsR0FBTCxDQUFTQyxJQUFULENBQWNDLFFBQWQsQ0FBdUJ3SSxHQUExQyxDOzs7Ozs7Ozs7Ozs7O0FDN0tQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQUFLMUksR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWSxFQUF2QjtBQUNBLEtBQUtBLEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLRCxHQUFMLENBQVNDLElBQVQsSUFBaUIsRUFBakM7QUFDQSxLQUFLRCxHQUFMLENBQVNDLElBQVQsQ0FBYzhQLE9BQWQsR0FBd0IsS0FBSy9QLEdBQUwsQ0FBU0MsSUFBVCxDQUFjOFAsT0FBZCxJQUF5QixFQUFqRDs7QUFFQTtBQUNBOztBQUVDLFdBQVU1UCxDQUFWLEVBQWFILEdBQWIsRUFBa0I7QUFDakI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFZQUEsTUFBSUMsSUFBSixDQUFTOFAsT0FBVCxDQUFpQkMsV0FBakIsR0FBK0IsVUFBVUMsT0FBVixFQUFtQjs7QUFFaEQsUUFBSUMsT0FBSixFQUNJQyxPQURKLEVBRUlDLFdBRkosRUFHSUMsR0FISjs7QUFLQTtBQUNBSixjQUFVOVAsRUFBRUUsTUFBRixDQUFTO0FBQ2pCaVEsaUJBQVcsSUFETTtBQUVqQkMsZ0JBQVU5SCx5RUFBYUEsQ0FBQ2xHLGdCQUZQO0FBR2pCaU8sY0FBUSxDQUFDLElBQUlDLEdBQUdDLEtBQUgsQ0FBU0MsSUFBYixDQUFrQixFQUFDQyxRQUFRLElBQUlILEdBQUdHLE1BQUgsQ0FBVUMsR0FBZCxFQUFULEVBQWxCLENBQUQ7QUFIUyxLQUFULEVBSVBaLE9BSk8sQ0FBVjs7QUFNQUMsY0FBVVksU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FiLFlBQVFjLFNBQVIsR0FBb0JsQixnRUFBWUEsQ0FBQ2YsVUFBYixHQUEwQixHQUExQixHQUFnQ2UsZ0VBQVlBLENBQUM5RSxXQUE3QyxHQUEyRCxHQUEzRCxHQUFpRThFLGdFQUFZQSxDQUFDZCxlQUFsRztBQUNBLFFBQUlpQixRQUFRSyxTQUFaLEVBQXVCO0FBQ3JCSixjQUFRYyxTQUFSLElBQXFCLE1BQU1sQixnRUFBWUEsQ0FBQ3JQLEtBQXhDO0FBQ0QsS0FGRCxNQUVPO0FBQ0x5UCxjQUFRYyxTQUFSLElBQXFCLE1BQU1sQixnRUFBWUEsQ0FBQ25ILElBQXhDO0FBQ0Q7QUFDRHNILFlBQVFnQixNQUFSLENBQWVDLFdBQWYsQ0FBMkJoQixPQUEzQjs7QUFFQUMsY0FBVVcsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFWO0FBQ0FaLFlBQVFnQixLQUFSLEdBQWdCbEIsUUFBUU0sUUFBeEI7QUFDQUwsWUFBUWdCLFdBQVIsQ0FBb0JmLE9BQXBCOztBQUVBQyxrQkFBY1UsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFkO0FBQ0FYLGdCQUFZWSxTQUFaLEdBQXdCbEIsZ0VBQVlBLENBQUMvRyxJQUFyQztBQUNBb0gsWUFBUWUsV0FBUixDQUFvQmQsV0FBcEI7O0FBRUFqUSxNQUFFZ1EsT0FBRixFQUFXaUIsS0FBWCxDQUFpQixZQUFZO0FBQzNCLFVBQUlqUixFQUFFK1AsT0FBRixFQUFXbUIsUUFBWCxDQUFvQnZCLGdFQUFZQSxDQUFDclAsS0FBakMsQ0FBSixFQUE2QztBQUMzQ04sVUFBRStQLE9BQUYsRUFBV29CLFdBQVgsQ0FBdUJ4QixnRUFBWUEsQ0FBQ3JQLEtBQXBDLEVBQ0s4USxRQURMLENBQ2N6QixnRUFBWUEsQ0FBQ25ILElBRDNCO0FBRUQsT0FIRCxNQUdPO0FBQ0x4SSxVQUFFK1AsT0FBRixFQUFXcUIsUUFBWCxDQUFvQnpCLGdFQUFZQSxDQUFDclAsS0FBakMsRUFDSzZRLFdBREwsQ0FDaUJ4QixnRUFBWUEsQ0FBQ25ILElBRDlCO0FBRUQ7QUFDRCxVQUFJO0FBQ0YsYUFBSzZJLElBQUw7QUFDRCxPQUZELENBRUUsT0FBT0MsTUFBUCxFQUFlLENBQ2hCO0FBQ0YsS0FaRDs7QUFjQXBCLFVBQU0sSUFBSUksR0FBR1YsT0FBSCxDQUFXQyxXQUFmLENBQTJCO0FBQy9CMEIsbUJBQWEsS0FEa0I7QUFFL0JwQixpQkFBVyxLQUZvQjtBQUcvQlcsY0FBUWYsT0FIdUI7QUFJL0JNLGNBQVFQLFFBQVFPO0FBSmUsS0FBM0IsQ0FBTjs7QUFPQSxXQUFPSCxHQUFQO0FBQ0QsR0FyREQ7O0FBd0RBOzs7QUFHQXJRLE1BQUlDLElBQUosQ0FBUzhQLE9BQVQsQ0FBaUJDLFdBQWpCLENBQTZCMkIsU0FBN0IsR0FBeUN4UixFQUFFRSxNQUFGLENBQVNMLElBQUlDLElBQUosQ0FBUzhQLE9BQVQsQ0FBaUJDLFdBQWpCLENBQTZCMkIsU0FBdEMsRUFBaUQ7O0FBRXhGOztBQUZ3RixHQUFqRCxDQUF6QyxDQTFFaUIsQ0E4RWI7QUFFTCxDQWhGQSxFQWdGQ25KLE1BaEZELEVBZ0ZTLEtBQUt4SSxHQWhGZCxDQUFEOztBQWtGTyxJQUFJZ1EsY0FBYyxLQUFLaFEsR0FBTCxDQUFTQyxJQUFULENBQWM4UCxPQUFkLENBQXNCQyxXQUF4QyxDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtb3ZlcnZpZXdtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1vdmVydmlld21hcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMjZjMDA1NWI3ODUxYTIxMTY0MSIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvbnN0YW50cyAoZW4pXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5pMThuID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuaTE4biwge1xuXG4gICAgTEFORzogJ2RlJyxcblxuICAgIE5BTUU6ICdOYW1lJyxcbiAgICBISURFOiAnWnVrbGFwcGVuJyxcbiAgICBDTE9TRTogJ1NjaGxpZcOfZW4nLFxuICAgIFBPSU5UOiAnUE9JJyxcbiAgICBGUkVFSEFORDogJ0ZyZWloYW5kJyxcbiAgICBMSU5FOiAnTGluaWUnLFxuICAgIFBPTFlHT046ICdGbMOkY2hlJyxcbiAgICBDSVJDTEU6ICdSYWRpdXMnLFxuICAgIFBFUklNRVRFUjogJ1VtZmFuZycsXG4gICAgTEVOR1RIOiAnTMOkbmdlJyxcbiAgICBTVVJGQUNFQVJFQTogJ0Zsw6RjaGVuaW5oYWx0JyxcbiAgICBSQURJVVM6ICdSYWRpdXMnLFxuICAgIFJFRlJFU0g6ICdBa3R1YWxpc2llcmVuJyxcbiAgICBDT1BZX1RPX0NMSVBCT0FSRDogJ0luIFp3aXNjaGVuYWJsYWdlIGtvcGllcmVuJyxcblxuICAgIENUUkxfWk9PTV9JTjogJ1Zlcmdyw7bDn2VybicsXG4gICAgQ1RSTF9aT09NX09VVDogJ1ZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fRVhUOiAnTWF4aW1hbCB2ZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0hPTUU6ICdadXIgdXJzcHLDvG5nbGljaGVuIFBvc2l0aW9uJyxcbiAgICBDVFJMX1pPT01fUE9TOiAnWnVtIGFrdHVlbGxlbiBTdGFuZG9ydCcsXG4gICAgQ1RSTF9aT09NX1NMSURFUjogJ1pvb20gU2xpZGVyJyxcbiAgICBDVFJMX1JFU0VUX1JPVEFUSU9OOiAnUm90YXRpb24gKHRvdWNoLCBhbHQrbW91c2UpIHp1csO8Y2tzZXR6ZW4nLFxuICAgIENUUkxfUE9SVFNJREU6ICdQb3J0c2lkZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUk9VVEVSOiAnUm91dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9FRElUT1I6ICdFZGl0b3IgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX01FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0lORk9QQUdFOiAnSW5mb3NlaXRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BRERJVElPTkFMUEFORUw6ICdQYW5lbCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQUNDT1VOVDogJ0FjY291bnQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1pPT01MRVZFTDogJ1pvb20nLFxuICAgIENUUkxfTU9VU0VDT09SRFM6ICdMb24vTGF0JyxcbiAgICBDVFJMX0dFT1NFQVJDSDogJ1N1Y2hlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgICBDVFJMX09WRVJWSUVXTUFQOiAnw5xiZXJzaWNodHNrYXJ0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfR0VPQk9PS01BUktTOiAnRmF2b3JpdGVuIHZlcndhbHRlbicsXG4gICAgQ1RSTF9TSURFQk9BUkQ6ICdTaWRlYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJCT0FSRDogJ1N0YXJib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQVRUUklCVVRJT046ICdBdHRyaWJ1dGlvbiBhbnplaWdlbicsXG4gICAgQ1RSTF9HUklEOiAnR2l0dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9QRVJNQUxJTks6ICdQZXJtYWxpbmsgZ2VuZXJpZXJlbicsXG4gICAgQ1RSTF9GVUxMU0NSRUVOOiAnVm9sbGJpbGRtb2R1cyBlaW4tL2F1c3NjaGFsdGVuJyxcbiAgICBDVFJMX1BSSU5UOiAnS2FydGUgZXhwb3J0aWVyZW4nLFxuXG4gICAgRURJVE9SOiAnRWRpdG9yJyxcbiAgICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFZGl0aWVyZW4gYmVlbmRlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRWxlbWVudCBsw7ZzY2hlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnRWxlbWVudCBlZGl0aWVyZW4gLyB2ZXJzY2hpZWJlbicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPOiAnWnVyIEF1c3dhaGwgZWluIEVsZW1lbnQgYXVmIGRlciBLYXJ0ZSBhbmtsaWNrZW4uJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdLYXJ0ZW5lbGVtZW50ZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmR3ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG5cbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnUm91dGUgdm9uIGhpZXInLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG5cbiAgICBTVEFSQk9BUkQ6ICdTdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX0xBWUVSOiAnRWJlbmVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ0thcnRlbmVsZW1lbnRlJyxcblxuICAgIFNJREVCT0FSRDogJ1NpZGVib2FyZCcsXG5cbiAgICBST1VURVJfVklFV19BRERSRVNTX0lOUFVUOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfRlJPTV9MQUJFTDogJ1N0YXJ0JyxcbiAgICBST1VURVJfT1ZFUl9MQUJFTDogJ1p3aXNjaGVuemllbCcsXG4gICAgUk9VVEVSX1RPX0xBQkVMOiAnWmllbCcsXG4gICAgUk9VVEVSX0NMRUFSX1RJVExFOiAnTMO2c2NoZW4nLFxuICAgIFJPVVRFUl9DTEVBUl9IVE1MOiAnJyxcbiAgICBST1VURVJfTGFiZWxfSW50ZXJpbTogJ1p3aXNjaGVuemllbCcsXG5cbiAgICBST1VURVJfU1dJVENIOidXZWNoc2VsIHZvbiBTdGFydCB1bmQgWmllbCcsXG4gICAgUk9VVEVSX09WRVI6J1p3aXNjaGVuemllbCBoaW56dWbDvGdlbicsXG4gICAgUk9VVEVSX1BSSU5UOidSb3V0ZW5iZXNjaHJlaWJ1bmcgZHJ1Y2tlbicsXG5cbiAgICBST1VURVJfVklFV19MQUJFTF9ST1VURTogJ1JvdXRlOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0U6ICdFbnRmZXJudW5nOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfVElNRTogJ1plaXQ6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9QUk9GSUxFOiAnUHJvZmlsOicsXG5cbiAgICBST1VURVJfVklFV19BTEVSVF9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbi4nLFxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HOiAnWnVncmlmZiBhdWYgR2VvY29kZXIgZmVobGdlc2NobGFnZW4uJyxcblxuICAgIFJPVVRFUjogJ1JvdXRlcicsXG4gICAgUk9VVEVSX046ICdOb3JkZW4nLFxuICAgIFJPVVRFUl9FOiAnT3N0JyxcbiAgICBST1VURVJfUzogJ1PDvGRlbicsXG4gICAgUk9VVEVSX1c6ICdXZXN0ZW4nLFxuICAgIFJPVVRFUl9ORTogJ05vcmRvc3QnLFxuICAgIFJPVVRFUl9TRTogJ1PDvGRvc3QnLFxuICAgIFJPVVRFUl9TVzogJ1PDvGR3ZXN0JyxcbiAgICBST1VURVJfTlc6ICdOb3Jkd2VzdCcsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8wOiAnVW5iZWthbm50ZSBBbndlaXN1bmdbIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE6ICdHZXJhZGVhdXMgd2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8yOiAnTGVpY2h0IHJlY2h0cyBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMzogJ1JlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNDogJ1NjaGFyZiByZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzU6ICdXZW5kZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzY6ICdTY2hhcmYgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzc6ICdMaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fODogJ0xlaWNodCBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTA6ICdGYWhyZW4gU2llIFJpY2h0dW5nIDxiPiVkPC9iPlsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTEnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlcnN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHp3ZWl0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGRyaXR0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHZpZXJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGbDvG5mdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTYnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzZWNoc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS03JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2llYnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS04JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgYWNodGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTknOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBuZXVudGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLXgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlaW5lciBkZXIgdmllbGVuIE3DtmdsaWNoa2VpdGVuWyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xNTogJ1NpZSBoYWJlbiBJaHIgWmllbCBlcnJlaWNodCcsXG5cbiAgICAnUk9VVEVSXzUuWF9UWVBFXzAnOiAnICVtIGZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMSc6ICcgJW0gZGVtIFN0cmHDn2VudmVybGF1ZiBmb2xnZW5bIGFscyA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzInOiAnIEZhaHJlbiBTaWVbIGF1ZiA8Yj4lczwvYj5dIGxvcycsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8zJzogJyBEYXMgWmllbCBiZWZpbmRldCBzaWNoIDxiPiVtPC9iPicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV80JzogJyBXZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzUnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hdWZmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNic6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWFiZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzcnOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzgnOiAnICVtIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV85JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMCc6ICcgJW0gZmFocmVuIHVtIGF1ZiBkZXIgU3RyYcOfZSB6dSBibGVpYmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzExJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMic6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTMnOiAnICVtIGZhaHJlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTQnOiAnIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG5cbiAgICAnUk9VVEVSXzUuWF9NT0RfMCcgIDogJ1V0dXJuJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMScgIDogJ1NjaGFyZiByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8yJyAgOiAnUmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMycgIDogJ0xlaWNodCByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF80JyAgOiAnR2VyYWRlYXVzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNScgIDogJ0xlaWNodCBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzYnICA6ICdMaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzcnICA6ICdTY2hhcmYgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF84JyAgOiAnaW4gZGVyIE7DpGhlJyxcblxuICAgIFJPVVRFUl9GUk9NOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9UTzogJ1ppZWwnLFxuICAgIFJPVVRFUl9GSU5EX1JPVVRFOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfTE9DX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG4gICAgUk9VVEVSX1JPVVRFREVTQzogJ1JvdXRlbmJlc2NocmVpYnVuZycsXG4gICAgUk9VVEVSX1JPVVRFTkFNRTogJ1JvdXRlJyxcbiAgICBST1VURVJfRElTVEFOQ0U6ICdEaXN0YW56JyxcbiAgICBST1VURVJfVElNRTogJ1plaXQnLFxuICAgIFJPVVRFUl9SRVZfR0VPQ09ESU5HOiAnRXJtaXR0bGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkc6ICdGZWhsZXIgYmVpbSBFcm1pdHRlbG4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9TRUFSQ0hJTkc6ICdTdWNoZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfU0VBUkNISU5HOiAnRmVobGVyIGJlaW0gU3VjaGVuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfQ0FMQ19ST1VURTogJ0JlcmVjaG5lIFJvdXRlLi4uJyxcbiAgICBST1VURVJfRVJST1JfQ0FMQ19ST1VURTogJ0ZlaGxlciBiZWltIEJlcmVjaG5lbiBkZXIgUm91dGUnLFxuXG4gICAgTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZScsXG4gICAgTUVBU1VSRVRPT0xTX0lORk86ICdXw6RobGVuIFNpZSB3ZWl0ZXIgdW50ZW4gZWluZW4gTWVzc3R5cCBhdXMgdW5kIHN0YXJ0ZW4gU2llIGRpZSBNZXNzdW5nIGR1cmNoIGRhcyBLbGlja2VuIGF1ZiBkZXIgS2FydGUuJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMOiAnKEVpbnplbG5lIE1lc3N1bmdlbiBrw7ZubmVuIG1pdCBlaW5lbSBEb3BwZWxrbGljayBiZWVuZGV0IHdlcmRlbi4pJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ1JhZGl1cyBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kIG1lc3NlbicsXG5cbiAgICBHRU9CT09LTUFSS1NfUExBQ0VIT0xERVI6ICdOZXVlIEJlemVpY2hudW5nJyxcblxuICAgIElORk9QQUdFOiAnSW5mb3JtYXRpb25lbicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnUGFuZWwnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdQYW5lbCBhbnplaWdlbicsXG4gICAgQUNDT1VOVDogJ0FjY291bnQnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnQWNjb3VudCBhbnplaWdlbicsXG5cbiAgICBTRUFSQ0hfTk9UX0ZPVU5EOiAnRGllIExva2F0aW9uIGtvbm50ZSBuaWNodCBnZWZ1bmRlbiB3ZXJkZW4uIEJpdHRlIHZlcnN1Y2hlbiBTaWUgZWluZSBhbmRlcmUgRWluZ2FiZS4nLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJsYW5ndWFnZSBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuaTE4bjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGUuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIG92ZXJ2aWV3bWFwIG9uIHRoZSBtYXAuXG4gICAqICAgVGhpcyBjbGFzcyB3cmFwcyB0aGUgb3ZtIGEgYml0IGRpZmZlcmVudGx5IHRoYW5cbiAgICogICB0aGUgc3RhbmRhcmQgb2wtb3ZlcnZpZW1hcCwgdG8gYWxsb3cgcHJvcGVyIGNzcy10cmFuc2l0aW9ucy5cbiAgICpcbiAgICogICBOb3QgY2xlYW4sIGJ1dCB1bmlxdWUgOylcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuT3ZlcnZpZXdNYXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGVsZW1lbnQsXG4gICAgICAgIHRyaWdnZXIsXG4gICAgICAgIHRyaWdnZXJJY29uLFxuICAgICAgICBvdm07XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9PVkVSVklFV01BUCxcbiAgICAgIGxheWVyczogW25ldyBvbC5sYXllci5UaWxlKHtzb3VyY2U6IG5ldyBvbC5zb3VyY2UuT1NNKCl9KV1cbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgJyAnICsgY3NzQ29uc3RhbnRzLk9WRVJWSUVXTUFQICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICBpZiAob3B0aW9ucy5jb2xsYXBzZWQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5DTE9TRTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgfVxuICAgIG9wdGlvbnMudGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyaWdnZXIudGl0bGUgPSBvcHRpb25zLnRpcExhYmVsO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJpZ2dlcik7XG5cbiAgICB0cmlnZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTjtcbiAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHRyaWdnZXJJY29uKTtcblxuICAgICQodHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQoZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSlcbiAgICAgICAgICAgIC5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb3ZtID0gbmV3IG9sLmNvbnRyb2wuT3ZlcnZpZXdNYXAoe1xuICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIHRhcmdldDogZWxlbWVudCxcbiAgICAgIGxheWVyczogb3B0aW9ucy5sYXllcnNcbiAgICB9KTtcblxuICAgIHJldHVybiBvdm07XG4gIH07XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5PdmVydmlld01hcC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLk92ZXJ2aWV3TWFwLnByb3RvdHlwZSwge1xuXG4gICAgLy8gbm90aGluZyB0byBhZGQgaGVyZVxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBPdmVydmlld01hcCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5PdmVydmlld01hcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtb3ZlcnZpZXdtYXAuanMiXSwic291cmNlUm9vdCI6IiJ9