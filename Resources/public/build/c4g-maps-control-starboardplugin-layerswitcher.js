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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGUwMTRhM2EyZjA5ZWE4Y2FkODMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1sYXllcnN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29uc3RhbnQiLCIkIiwiaTE4biIsImV4dGVuZCIsIkxBTkciLCJOQU1FIiwiSElERSIsIkNMT1NFIiwiUE9JTlQiLCJGUkVFSEFORCIsIkxJTkUiLCJQT0xZR09OIiwiQ0lSQ0xFIiwiUEVSSU1FVEVSIiwiTEVOR1RIIiwiU1VSRkFDRUFSRUEiLCJSQURJVVMiLCJSRUZSRVNIIiwiQ09QWV9UT19DTElQQk9BUkQiLCJDVFJMX1pPT01fSU4iLCJDVFJMX1pPT01fT1VUIiwiQ1RSTF9aT09NX0VYVCIsIkNUUkxfWk9PTV9IT01FIiwiQ1RSTF9aT09NX1BPUyIsIkNUUkxfWk9PTV9TTElERVIiLCJDVFJMX1JFU0VUX1JPVEFUSU9OIiwiQ1RSTF9QT1JUU0lERSIsIkNUUkxfUk9VVEVSIiwiQ1RSTF9FRElUT1IiLCJDVFJMX01FQVNVUkVUT09MUyIsIkNUUkxfSU5GT1BBR0UiLCJDVFJMX0FERElUSU9OQUxQQU5FTCIsIkNUUkxfQUNDT1VOVCIsIkNUUkxfWk9PTUxFVkVMIiwiQ1RSTF9NT1VTRUNPT1JEUyIsIkNUUkxfR0VPU0VBUkNIIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJDVFJMX09WRVJWSUVXTUFQIiwiQ1RSTF9HRU9CT09LTUFSS1MiLCJDVFJMX1NJREVCT0FSRCIsIkNUUkxfU1RBUkJPQVJEIiwiQ1RSTF9BVFRSSUJVVElPTiIsIkNUUkxfR1JJRCIsIkNUUkxfUEVSTUFMSU5LIiwiQ1RSTF9GVUxMU0NSRUVOIiwiQ1RSTF9QUklOVCIsIkVESVRPUiIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJQT1BVUF9ST1VURV9GUk9NIiwiUE9QVVBfUk9VVEVfVE8iLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQkFTRUxBWUVSIiwiU1RBUkJPQVJEX0xBWUVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsIlNJREVCT0FSRCIsIlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQiLCJST1VURVJfRlJPTV9MQUJFTCIsIlJPVVRFUl9PVkVSX0xBQkVMIiwiUk9VVEVSX1RPX0xBQkVMIiwiUk9VVEVSX0NMRUFSX1RJVExFIiwiUk9VVEVSX0NMRUFSX0hUTUwiLCJST1VURVJfTGFiZWxfSW50ZXJpbSIsIlJPVVRFUl9TV0lUQ0giLCJST1VURVJfT1ZFUiIsIlJPVVRFUl9QUklOVCIsIlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UiLCJST1VURVJfVklFV19MQUJFTF9USU1FIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRSIsIlJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1MiLCJST1VURVJfVklFV19BTEVSVF9HT0NPRElORyIsIlJPVVRFUiIsIlJPVVRFUl9OIiwiUk9VVEVSX0UiLCJST1VURVJfUyIsIlJPVVRFUl9XIiwiUk9VVEVSX05FIiwiUk9VVEVSX1NFIiwiUk9VVEVSX1NXIiwiUk9VVEVSX05XIiwiUk9VVEVSX0RJUkVDVElPTl8wIiwiUk9VVEVSX0RJUkVDVElPTl8xIiwiUk9VVEVSX0RJUkVDVElPTl8yIiwiUk9VVEVSX0RJUkVDVElPTl8zIiwiUk9VVEVSX0RJUkVDVElPTl80IiwiUk9VVEVSX0RJUkVDVElPTl81IiwiUk9VVEVSX0RJUkVDVElPTl82IiwiUk9VVEVSX0RJUkVDVElPTl83IiwiUk9VVEVSX0RJUkVDVElPTl84IiwiUk9VVEVSX0RJUkVDVElPTl8xMCIsIlJPVVRFUl9ESVJFQ1RJT05fMTUiLCJST1VURVJfRlJPTSIsIlJPVVRFUl9UTyIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiUk9VVEVSX0xPQ19ST1VURV9UTyIsIlJPVVRFUl9ST1VURURFU0MiLCJST1VURVJfUk9VVEVOQU1FIiwiUk9VVEVSX0RJU1RBTkNFIiwiUk9VVEVSX1RJTUUiLCJST1VURVJfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX1NFQVJDSElORyIsIlJPVVRFUl9FUlJPUl9TRUFSQ0hJTkciLCJST1VURVJfQ0FMQ19ST1VURSIsIlJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFIiwiTUVBU1VSRVRPT0xTIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkdFT0JPT0tNQVJLU19QTEFDRUhPTERFUiIsIklORk9QQUdFIiwiQURESVRJT05BTFBBTkVMIiwiQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUiIsIkFDQ09VTlQiLCJBQ0NPVU5UX1ZJRVdfVFJJR0dFUiIsIlNFQVJDSF9OT1RfRk9VTkQiLCJOT05FIiwialF1ZXJ5IiwibGFuZ0NvbnN0YW50cyIsImNzcyIsIk9QRU4iLCJDTE9TRUFCTEUiLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiUFJJTlQiLCJJTkZPUEFHRV9WSUVXX1RSSUdHRVIiLCJPVkVSVklFV01BUCIsIk9WRVJWSUVXTUFQX1dSQVBQRVIiLCJHRU9CT09LTUFSS1MiLCJQRVJNQUxJTksiLCJQRVJNQUxJTktfUE9QVVAiLCJQT1BVUF9DTE9TRSIsIlBPUFVQX1JPVVRFX1dSQVBQRVIiLCJQT1JUU0lERSIsIlBPUlRTSURFX0NPTlRBSU5FUiIsIlBPUlRTSURFX0NPTlRST0wiLCJQT1JUU0lERV9XUkFQUEVSIiwiUE9SVFNJREVfVElUTEVCQVIiLCJQT1JUU0lERV9UT1BfVE9PTEJBUiIsIlBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSIiwiUE9SVFNJREVfQk9UVE9NX1RPT0xCQVIiLCJQT1JUU0lERV9TVEFUVVNCQVIiLCJQT1JUU0lERV9WSUVXVFJJR0dFUkJBUiIsIlBPUlRTSURFX0hFQURMSU5FIiwiUE9SVFNJREVfQlVUVE9OQkFSIiwiUE9SVFNJREVfQlVUVE9OIiwiUE9SVFNJREVfSElERSIsIlBPUlRTSURFX0NMT1NFIiwiU1BJTk5FUiIsIlNUQVJCT0FSRF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQ09OVFJPTCIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU1RBUkJPQVJEX1RJVExFQkFSIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSIiwiU1RBUkJPQVJEX1NUQVRVU0JBUiIsIlNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUiIsIlNUQVJCT0FSRF9IRUFETElORSIsIlNUQVJCT0FSRF9CVVRUT05CQVIiLCJTVEFSQk9BUkRfQlVUVE9OIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRSIsIlNUQVJCT0FSRF9MQVlFUlRSRUUiLCJTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSIiwiVE9PTFRJUF9QT1BVUCIsIlpPT01fTEVWRUwiLCJST1VURVJfSU5QVVRfV1JBUFBFUiIsIlJPVVRFUl9QUk9GSUxFX1dSQVBQRVIiLCJST1VURVJfSU5QVVRfRlJPTSIsIlJPVVRFUl9JTlBVVF9UTyIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSIiwiUk9VVEVSX1BST0ZJTEVfQ0FSIiwiUk9VVEVSX1BST0ZJTEVfSEdWIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX09WRVJMQVlDT05UQUlORVIiLCJPTF9PVkVSTEFZQ09OVEFJTkVSX1NFIiwiT0xfVklFV1BPUlQiLCJPTF9aT09NIiwiT0xfWk9PTV9JTiIsIk9MX1pPT01fRVhUIiwiT0xfWk9PTV9IT01FIiwiT0xfWk9PTV9QT1MiLCJPTF9aT09NX1dJVEhfRVhUIiwiT0xfWk9PTV9XSVRIX0hPTUUiLCJPTF9aT09NX1dJVEhfUE9TIiwiT0xfWk9PTV9TTElERVIiLCJPTF9aT09NX1dJVEhfU0xJREVSIiwiY3NzQ29uc3RhbnRzIiwiY29udHJvbCIsInN0YXJib2FyZHBsdWdpbiIsIkxheWVyc3dpdGNoZXIiLCJzdGFyYm9hcmQiLCJjb25zb2xlIiwid2FybiIsImluaXRpYWxpemVkIiwibGF5ZXJzIiwicHJveHkiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsImNyZWF0ZSIsImxvYWRDb250ZW50IiwicHJvdG90eXBlIiwic2VsZiIsImNvbnRlbnRXcmFwcGVyIiwiY29udGVudEhlYWRsaW5lIiwiY29udGVudEhlYWRsaW5lTGluayIsImNvbnRlbnRJbmZvIiwibGF5ZXJTd2l0Y2hlclRpdGxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaW5uZXJIVE1MIiwiYWRkQ2xhc3MiLCJvbmNsaWNrIiwiaGFzQ2xhc3MiLCJpIiwibGF5ZXJJZHMiLCJsZW5ndGgiLCJsYXllckNvbnRyb2xsZXIiLCJoaWRlTGF5ZXIiLCJyZW1vdmVDbGFzcyIsInNob3dMYXllciIsImFwcGVuZENoaWxkIiwiY29udGVudERpdiIsInZpZXciLCJhZGRWaWV3IiwibmFtZSIsInRyaWdnZXJDb25maWciLCJ0aXBMYWJlbCIsIndpdGhIZWFkbGluZSIsInNlY3Rpb25FbGVtZW50cyIsInNlY3Rpb24iLCJjb250ZW50Q29udGFpbmVyIiwiZWxlbWVudCIsInRvcFRvb2xiYXIiLCJ2aWV3VHJpZ2dlckJhciIsImFjdGl2YXRlIiwic2V0Q29udGVudCIsIm5ld0NvbnRlbnQiLCJmaXJzdENoaWxkIiwicmVwbGFjZUNoaWxkIiwiZSIsIm1lc3NhZ2UiLCJmbkRyYXdDb250ZW50Iiwic3Bpbm5lciIsInNob3ciLCJ0cmVlQ29udHJvbCIsImFkZEl0ZW1zIiwiaGlkZSIsInVwZGF0ZSIsImxheWVyc19sb2FkZWQiLCJob29rX2xheWVyX2xvYWRlZCIsInB1c2giLCJkcmF3Q29udGVudCIsImNvbnRlbnREYXRhIiwiaXRlbURhdGEiLCJ3cmFwcGVyRWxlbWVudCIsImZpbHRlciIsIndyYXBwZXIiLCJjaGlsZFdyYXBwZXIiLCJwV3JhcHBlciIsIml0ZW0iLCJsYXllciIsInVpZCIsImxpc3RJdGVtIiwiZW50cnkiLCIkZW50cnkiLCJ0b2dnbGUiLCJmbkhhbmRsZUVudHJ5Q2xpY2siLCJmbkNoaWxkRW50cnlDbGljayIsImZuQ2hpbGRFbnRyeVNob3ciLCJ6b29tVG9FeHRlbnQiLCJsYXllckNsYXNzIiwicGFyc2VBc0xpc3QiLCJldmVudCIsIml0ZW1VaWQiLCJsYXllckl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJhcnJMYXllcnMiLCJhY3RpdmVMYXllcklkcyIsInBhcnNlSW50IiwicGlkIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhhbmRsZVNlbGVjdGVkQ2hpbGRzIiwidXBkYXRlUGFyZW50TGF5ZXJzIiwicGFyZW50IiwiY2hpbGRzIiwiY2hpbGRyZW4iLCJwYXJlbnRVaWQiLCJoaWRlQ2hpbGRMYXllciIsInNob3dDaGlsZExheWVyIiwicGFyZW50RWxlbWVudCIsInJlcGxhY2UiLCJ2ZWN0b3JMYXllciIsInNpbmdsZUxheWVyIiwiZ2V0TGF5ZXJzIiwiZ2V0QXJyYXkiLCJmZWF0dXJlIiwiZ2V0U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJtYXAiLCJnZXRWaWV3IiwiZml0IiwiZ2V0R2VvbWV0cnkiLCJ2ZWN0b3JBcnJheSIsImxheWVyR3JvdXAiLCJjb29yZHMiLCJnZW9tZXRyeSIsImZlYXR1cmVMaXN0IiwiZmVhdHVyZUFycmF5IiwiY29vcmRpbmF0ZXMiLCJleHRlbnQiLCJjZW50ZXIiLCJrZXkiLCJ6b29tX2xvY2F0aW9ucyIsImhhc0NoaWxkcyIsInR5cGUiLCJjb250ZW50IiwidW5kZWZpbmVkIiwidXRpbHMiLCJvYmplY3RUb0FycmF5IiwiZm9yRWFjaCIsIm9sIiwicHJvaiIsInRyYW5zZm9ybSIsInBhcnNlRmxvYXQiLCJnZW9tIiwiUG9pbnQiLCJnZXRDb29yZGluYXRlcyIsInNvdXJjZSIsImdldEV4dGVudCIsImNvb3JkaW5hdGUiLCJnZXRUb3BSaWdodCIsImdldFRvcExlZnQiLCJnZXRCb3R0b21SaWdodCIsImdldEJvdHRvbUxlZnQiLCJib3VuZGluZ0V4dGVudCIsIkluZmluaXR5IiwiZ2V0U2l6ZSIsImdldENlbnRlciIsImlzTmFOIiwic2V0Q2VudGVyIiwic2V0Wm9vbSIsIm1hcERhdGEiLCJtaW5ab29tIiwiaG9va19sYXllcl92aXNpYmlsaXR5IiwibGF5ZXJJZCIsImoiLCJjaGFuZ2VkTGF5ZXIiLCIkZW50cmllcyIsImhvb2tfbWFwX3pvb20iLCJjaGVja0xheWVySXNBY3RpdmVGb3Jab29tIiwicmVuZGVyU3BlY2lhbCIsImRpc3BsYXkiLCJlbnRyeVdyYXBwZXJzIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGljayIsInZpc2libGVDaGlsZHMiLCJzcGxpdF9nZW9qc29uIiwiaGlkZV9jaGlsZCIsInJpZ2h0U2xpZGVFbGVtZW50cyIsImNvbnRhaW5lciIsIm9mZnNldFdpZHRoIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRXcmFwcGVycyIsImZlYXR1cmVzIiwiY2hpbGRMaXN0SXRlbSIsImNoaWxkSXRlbSIsImNoaWxkRW50cnkiLCJwcm9wZXJ0aWVzIiwiZ2VvanNvbl9hdHRyaWJ1dGVzIiwic3BsaXQiLCJjaGlsZFVpZCIsIiRjaGlsZEVudHJ5IiwiZ2VvanNvbl96b29tIiwiaG9vayIsImFkZENoaWxkcyIsImNhbGxIb29rRnVuY3Rpb25zIiwic3RhcmJvYXJkX2xheWVyX2FjdGl2YXRlIiwicGFyYW1PYmoiLCJpZHN0ciIsInRvU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9Mb3dlckNhc2UiLCJjc3NDbGFzcyIsImxheWVyc3dpdGNoZXJfZm9yRWFjaEl0ZW0iLCJ0aGF0IiwiZHYiLCJwbGFjZWhvbGRlciIsIm9ua2V5dXAiLCJmaWx0ZXJfdWxsaSIsInNob3dTdWJ0cmVlIiwiZ2V0Q2hpbGRyZW5CeVRhZ05hbWUiLCJ0YWdOYW1lIiwiZm91bmQiLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoRmxhZ1VsIiwic3VidHJlZU1hdGNoZXMiLCJzdHlsZSIsImlzTWF0Y2giLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluZGV4T2YiLCJ2YWx1ZSIsInVsIiwiaGFzU3VidHJlZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tDaGlsZFNlbGVjdGlvbnMiLCJsYXllclVpZCIsImNoaWxkQWN0aXZlIiwiY2hpbGQiLCJjbGlja2VkTGF5ZXIiLCJwYXJlbnRFbnRyeSIsInBhcmVudExheWVyIiwibWFwSWQiLCJwYXJlbnROb2RlIiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwibWFwVmlldyIsInVuZGVmaW5lZEhUTUwiLCJnZXRab29tIiwib24iLCJDb250cm9sIiwiY2FsbCIsInRhcmdldCIsImluaGVyaXRzIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0Iiwic2xpY2UiLCJnZXRVbmlxdWVJZCIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJlbmNvZGVHZW9Kc29uUHJvcGVydHkiLCJpbnB1dCIsIm91dHB1dCIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImhhc2giLCJzZWFyY2giLCJtYXRjaCIsIm9mZnNldCIsIm9yaWdpblN0cmluZyIsImdldFVybFBhcmFtIiwicmVnRXgiLCJzdWJzdHJpbmciLCJSZWdFeHAiLCJleGVjIiwiZGVsdGFFbmNvZGUiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsInNvcnQiLCJhIiwiYiIsImRlbHRhRGVjb2RlIiwiYXJySG9va0Z1bmN0aW9ucyIsInBhcmFtZXRlcnMiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJoZXgiLCJvcHRfb3BhY2l0eSIsIm9wdF9hcnJheSIsImJpZ2ludCIsInIiLCJnIiwicmVkdWNlU3R5bGUiLCJzdHlsZUlkIiwicmVkdWNlZFN0eWxlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsb2NhdGlvblN0eWxlcyIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJzZXRXaWR0aCIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJmaWxsIiwic3Ryb2tlIiwicmFkaXVzIiwibWVhc3VyZUdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkMSIsImNvb3JkMiIsInJlc3VsdCIsIkxpbmVTdHJpbmciLCJQb2x5Z29uIiwiZ2V0RGlzdGFuY2UiLCJyYXdWYWx1ZSIsInJvdW5kIiwidG9GaXhlZCIsImh0bWxWYWx1ZSIsImFicyIsImdldEFyZWEiLCJnZXRSYWRpdXMiLCJlZGdlQ29vcmRpbmF0ZSIsIlBJIiwic3FydCIsImdldEV4dGVudEZvckdlb21ldHJpZXMiLCJhcnJHZW9tZXRyaWVzIiwiZXh0ZW50U291cmNlIiwiVmVjdG9yIiwiYWRkRmVhdHVyZXMiLCJFeHRlbnQiLCJmaXRUb0V4dGVudHMiLCJleHRlbnRzIiwib3B0X3BhZGRpbmciLCJvcHRfYW5pbWF0aW9uRHVyYXRpb24iLCJwYWRkaW5nIiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwibWluUmVzb2x1dGlvbiIsIm1heFpvb20iLCJhbmltYXRlIiwic3RhcnQiLCJEYXRlIiwiZHVyYXRpb24iLCJyZXNvbHV0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJzdHJJbnB1dCIsIm9wdF9sYXllciIsInN0ck91dHB1dCIsInJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyIsInJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzIiwicmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyIsImZ1bmN0aW9uTmFtZSIsIndpbmRvdyIsImdldFN0eWxlIiwiZ2V0IiwiZXZLZXkiLCJlZGl0b3JWYXJzIiwibGFiZWwiLCJhdHRyIiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImdldFZlY3RvckxheWVyIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJocmVmIiwicmVkcmF3TWFwVmlldyIsImNvbnRyb2xDb250YWluZXJUb3BMZWZ0IiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwicHJlcGVuZCIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0IiwiYWZ0ZXIiLCJsZWZ0U2xpZGVFbGVtZW50cyIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViIiwic2NhbGVsaW5lIiwicmVtb3ZlQ29udHJvbCIsImNvbnRyb2xzIiwiU2NhbGVMaW5lIiwiYWRkQ29udHJvbCIsImFwcGVuZCIsInpvb21sZXZlbCIsIm1vdXNlcG9zaXRpb24iLCJNb3VzZVBvc2l0aW9uIiwicHJvamVjdGlvbiIsImNvb3JkaW5hdGVGb3JtYXQiLCJ0b1N0cmluZ0hETVMiLCJnZXRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsInN0b3JlVmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7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VixNQS8zQkQsRUErM0JTLEtBQUt4SSxHQS8zQmQsQ0FBRDs7QUFpNEJPLElBQUlxWSxRQUFRLEtBQUtyWSxHQUFMLENBQVNDLElBQVQsQ0FBY29ZLEtBQTFCLEMiLCJmaWxlIjoiYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tbGF5ZXJzd2l0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1sYXllcnN3aXRjaGVyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBlMDE0YTNhMmYwOWVhOGNhZDgzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbiA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4gfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBleHRlbmRzIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgICBzdGFyYm9hcmRcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkxheWVyc3dpdGNoZXIgPSBmdW5jdGlvbiAoc3RhcmJvYXJkKSB7XG4gICAgaWYgKCFzdGFyYm9hcmQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGluaXRpYWxpemUgTGF5ZXJzd2l0Y2hlciB3aXRob3V0IGEgc3RhcmJvYXJkLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgdGhpcy5zdGFyYm9hcmQgPSBzdGFyYm9hcmQ7XG4gICAgdGhpcy5wcm94eSA9IHN0YXJib2FyZC5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHk7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLmxvYWRDb250ZW50KCk7XG4gIH07XG5cbiAgLy8gQWRkIG1ldGhvZHNcbiAgYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4uTGF5ZXJzd2l0Y2hlci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5MYXllcnN3aXRjaGVyLnByb3RvdHlwZSwge1xuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBjb250ZW50V3JhcHBlcixcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmUsXG4gICAgICAgICAgY29udGVudEhlYWRsaW5lTGluayxcbiAgICAgICAgICBjb250ZW50SW5mbyxcbiAgICAgICAgICBsYXllclN3aXRjaGVyVGl0bGU7XG5cbiAgICAgIGxheWVyU3dpdGNoZXJUaXRsZSA9IHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMubGF5ZXJTd2l0Y2hlclRpdGxlO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudEhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjb250ZW50SGVhZGxpbmUnO1xuXG4gICAgICBpZighdGhpcy5zdGFyYm9hcmQub3B0aW9ucy5idXR0b24pIHtcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gKGxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICAkKGNvbnRlbnRIZWFkbGluZSkuYWRkQ2xhc3MoXCJjNGctc3RhcmJvYXJkLWhlYWRsaW5lXCIpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgY29udGVudEhlYWRsaW5lTGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImM0Zy1hY3RpdmVcIikgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYucHJveHkubGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlTGF5ZXIoc2VsZi5wcm94eS5sYXllcklkc1tpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYzRnLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjNGctaW5hY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYucHJveHkubGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93TGF5ZXIoc2VsZi5wcm94eS5sYXllcklkc1tpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYzRnLWluYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImM0Zy1hY3RpdmVcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgICQoY29udGVudEhlYWRsaW5lTGluaykuYWRkQ2xhc3MoXCJjNGctaW5hY3RpdmUgYzRnLXN0YXJib2FyZC1oZWFkbGluZS1saW5rXCIpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsuaW5uZXJIVE1MID0gKGxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUik7XG4gICAgICAgICAgY29udGVudEhlYWRsaW5lTGluay5pbm5lckhUTUwgPSBjb250ZW50SGVhZGxpbmVMaW5rLmlubmVySFRNTCsnICc7XG4gICAgICAgICAgY29udGVudEhlYWRsaW5lLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkbGluZUxpbmspO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50SGVhZGxpbmUpO1xuXG4gICAgICB0aGlzLmNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuY29udGVudERpdi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjtcbiAgICAgIGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGhpcy5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRJbmZvKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudERpdik7XG5cbiAgICAgIHNlbGYudmlldyA9IHNlbGYuc3RhcmJvYXJkLmFkZFZpZXcoe1xuICAgICAgICBuYW1lOiAnbGF5ZXJzd2l0Y2hlcicsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICB0aXBMYWJlbDogKGxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiksXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSLFxuICAgICAgICAgIHdpdGhIZWFkbGluZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAge3NlY3Rpb246IHNlbGYuc3RhcmJvYXJkLmNvbnRlbnRDb250YWluZXIsIGVsZW1lbnQ6IGNvbnRlbnRXcmFwcGVyfSxcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi5zdGFyYm9hcmQudG9wVG9vbGJhciwgZWxlbWVudDogc2VsZi5zdGFyYm9hcmQudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2FjdGl2YXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy52aWV3LmFjdGl2YXRlKCk7XG4gICAgfSwgLy8gZW5kIG9mIFwiYWN0aXZhdGUoKVwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW3NldENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBuZXdDb250ZW50ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0Q29udGVudDogZnVuY3Rpb24gKG5ld0NvbnRlbnQpIHtcbiAgICAgIGlmIChuZXdDb250ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHRoaXMuY29udGVudERpdi5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50RGl2LnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCB0aGlzLmNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY29udGVudERpdi5pbm5lckhUTUw7XG4gICAgfSwgLy8gZW5kIG9mIFwic2V0Q29udGVudCgpXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbbG9hZENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGxvYWRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBmbkRyYXdDb250ZW50O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc3RhcmJvYXJkLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBmbkRyYXdDb250ZW50ID0gZnVuY3Rpb24gKGxheWVySWRzKSB7XG4gICAgICAgIHNlbGYudHJlZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgJChzZWxmLnRyZWVDb250cm9sKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRSk7XG4gICAgICAgIHNlbGYuc2V0Q29udGVudChzZWxmLnRyZWVDb250cm9sKTtcblxuICAgICAgICBzZWxmLmFkZEl0ZW1zKGxheWVySWRzLCBzZWxmLnRyZWVDb250cm9sKTtcblxuICAgICAgICBzZWxmLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5zdGFyYm9hcmQuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgIHNlbGYuc3RhcmJvYXJkLnVwZGF0ZSgpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwiZm5EcmF3Q29udGVudCgpXCJcblxuICAgICAgaWYgKHRoaXMucHJveHkubGF5ZXJzX2xvYWRlZCkge1xuICAgICAgICBmbkRyYXdDb250ZW50KHRoaXMucHJveHkubGF5ZXJJZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm94eS5ob29rX2xheWVyX2xvYWRlZC5wdXNoKGZuRHJhd0NvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImxvYWRDb250ZW50KClcIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtkcmF3Q29udGVudCBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3Q29udGVudDogZnVuY3Rpb24gKGNvbnRlbnREYXRhKSB7XG4gICAgICAvLyBQQVNTXG4gICAgfSwgLy8gZW5kIG9mIFwiZHJhd0NvbnRlbnQoKVwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2FkZEl0ZW1zIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbURhdGEgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICB3cmFwcGVyRWxlbWVudCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkSXRlbXM6IGZ1bmN0aW9uIChpdGVtRGF0YSwgd3JhcHBlckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgY2hpbGRXcmFwcGVyLFxuICAgICAgICAgIHBXcmFwcGVyLFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgdWlkLFxuICAgICAgICAgIGxpc3RJdGVtLFxuICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICRlbnRyeSxcbiAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgZm5IYW5kbGVFbnRyeUNsaWNrLFxuICAgICAgICAgIGZuQ2hpbGRFbnRyeUNsaWNrLFxuICAgICAgICAgIGZuQ2hpbGRFbnRyeVNob3csXG4gICAgICAgICAgem9vbVRvRXh0ZW50LFxuICAgICAgICAgIGxheWVyQ2xhc3M7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIHBhcnNlQXNMaXN0OiB0cnVlXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgd3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIC8vIGNyZWF0ZSBoYW5kbGVyIGZvciBlbnRyeS1jbGlja3NcbiAgICAgIGZuSGFuZGxlRW50cnlDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaXRlbVVpZCxcbiAgICAgICAgICAgIGxheWVySXRlbTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGl0ZW1VaWQgPSAkKHRoaXMpLmRhdGEoJ3VpZCcpO1xuICAgICAgICBsYXllckl0ZW0gPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbaXRlbVVpZF07XG5cbiAgICAgICAgaWYgKHNlbGYucHJveHkuYWN0aXZlTGF5ZXJJZHNbaXRlbVVpZF0pIHtcbiAgICAgICAgICAvLyBoaWRlIGxheWVyXG4gICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZUxheWVyKGl0ZW1VaWQpO1xuICAgICAgICAgIGlmIChwYXJzZUludChsYXllci5waWQsIDEwKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyBoaWRlIGFsbCBjaGlsZHMsIGJlY2F1c2UgY2xpY2tlZCBsYXllciBpcyB0aGUgbWFwIGl0c2VsZlxuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gc2VsZi5wcm94eS5hY3RpdmVMYXllcklkcykge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlTGF5ZXIoaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNob3cgbGF5ZXJcbiAgICAgICAgICBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93TGF5ZXIoaXRlbVVpZCk7XG4gICAgICAgICAgLy96b29vbSB0byBleHRlbnRcbiAgICAgICAgICB6b29tVG9FeHRlbnQoaXRlbVVpZCk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5oYW5kbGVTZWxlY3RlZENoaWxkcyh0aGlzKSkge1xuICAgICAgICAgIHNlbGYudXBkYXRlUGFyZW50TGF5ZXJzKHRoaXMsIGl0ZW1VaWQsIGxheWVySXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjNGcubWFwcy5sYXllcnNbaXRlbVVpZF0gPSBsYXllckl0ZW07XG4gICAgICB9OyAvLyBlbmQgb2YgXCJmbkhhbmRsZUVudHJ5Q2xpY2soKVwiXG4gICAgICAgIGZuQ2hpbGRFbnRyeUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGl0ZW1VaWQgPSAkKHRoaXMpLmRhdGEoJ3VpZCcpO1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCk7XG4gICAgICAgICAgICBsZXQgY2hpbGRzID0gJChwYXJlbnQpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBsZXQgcGFyZW50VWlkID0gJChjaGlsZHNbMV0pLmRhdGEoJ3VpZCcpO1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKSl7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZUNoaWxkTGF5ZXIocGFyZW50VWlkLCBpdGVtVWlkKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKSl7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvd0NoaWxkTGF5ZXIocGFyZW50VWlkLCBpdGVtVWlkKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm5DaGlsZEVudHJ5U2hvdyA9IGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIGxldCB1aWQgPSAkKHBhcmVudC5maXJzdENoaWxkKS5kYXRhKCd1aWQnKTtcbiAgICAgICAgICBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpO1xuICAgICAgICAgIGxldCBjaGlsZHMgPSAkKHBhcmVudCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICBsZXQgcGFyZW50VWlkID0gJChjaGlsZHNbMV0pLmRhdGEoJ3VpZCcpO1xuICAgICAgICAgIHVpZCA9IHVpZC5yZXBsYWNlKHBhcmVudFVpZCwnJylcbiAgICAgICAgICBsZXQgbGF5ZXIgPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbcGFyZW50VWlkXS52ZWN0b3JMYXllcjtcbiAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgIGxldCBzaW5nbGVMYXllciA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KClbdWlkXTtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlID0gc2luZ2xlTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB6b29tVG9FeHRlbnQgPSBmdW5jdGlvbihpdGVtVWlkKXsgLy9mdW5jdGlvbiB0byB6b29tIHRvIHRoZSBleHRlbnQgb2YgYSBtYXAgc3RydWN0dXJlIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgICAgICAgIHZhciBsYXllckl0ZW0sXG4gICAgICAgICAgICAgICAgdmVjdG9yQXJyYXksXG4gICAgICAgICAgICAgICAgbGF5ZXJHcm91cCxcbiAgICAgICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgZmVhdHVyZUxpc3QsXG4gICAgICAgICAgICAgICAgZmVhdHVyZUFycmF5LFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW10sXG4gICAgICAgICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgICAgICAgIGNlbnRlcixcbiAgICAgICAgICAgICAgICBrZXk7XG4gICAgICAgICAgICBsYXllckl0ZW0gPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbaXRlbVVpZF07XG4gICAgICAgICAgICBpZiAobGF5ZXJJdGVtICYmIGxheWVySXRlbS56b29tX2xvY2F0aW9ucyA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJJdGVtLmhhc0NoaWxkcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBsYXllckl0ZW0uY2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJJdGVtLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBsYXllckl0ZW0uY2hpbGRzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSBcIm92ZXJwYXNzXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JBcnJheSA9IGxheWVyLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggY2FzZSBvZiBsaW5rZWQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZlY3RvckFycmF5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckFycmF5ID0gdXRpbHMub2JqZWN0VG9BcnJheSh2ZWN0b3JBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXAgPSBsYXllci52ZWN0b3JMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVjdG9yQXJyYXkgJiYgdmVjdG9yQXJyYXkuZm9yRWFjaCAmJiB0eXBlb2YgdmVjdG9yQXJyYXkuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2ZWN0b3JMYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckxheWVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmRhdGEuZ2VvbWV0cnkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckxheWVyLmRhdGEuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2ludFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IG9sLnByb2oudHJhbnNmb3JtKFtwYXJzZUZsb2F0KHZlY3RvckxheWVyLmRhdGEuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdKV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IG9sLmdlb20uUG9pbnQoY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgbW9yZSBjb21wbGV4IGdlb21ldHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3QgPSBsYXllckdyb3VwLmdldExheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlQXJyYXkgPSBmZWF0dXJlTGlzdC5nZXRBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09IFwia21sXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZmVhdHVyZS5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBzb3VyY2VGZWF0dXJlcyA9IHNvdXJjZS5nZXRGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5nZXRFeHRlbnQoKS5mb3JFYWNoKGZ1bmN0aW9uIChjb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9sLmV4dGVudC5nZXRUb3BSaWdodChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKVsnMCddICE9XCJJbmZpbml0eVwiICYmIG9sLmV4dGVudC5nZXRUb3BSaWdodChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKVsnMCddICE9XCItSW5maW5pdHlcIil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0VG9wUmlnaHQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG9sLmV4dGVudC5nZXRUb3BMZWZ0KGZlYXR1cmUuZ2V0U291cmNlKCkuZ2V0RXh0ZW50KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0Qm90dG9tUmlnaHQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG9sLmV4dGVudC5nZXRCb3R0b21MZWZ0KGZlYXR1cmUuZ2V0U291cmNlKCkuZ2V0RXh0ZW50KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGxheWVySXRlbS50eXBlICE9PSBcIm92ZXJwYXNzXCIgJiYgbGF5ZXJJdGVtLnZlY3RvckxheWVyKXtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yQXJyYXkgPSBsYXllci5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVjdG9yQXJyYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggY2FzZSBvZiBsaW5rZWQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZlY3RvckFycmF5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yQXJyYXkgPSB1dGlscy5vYmplY3RUb0FycmF5KHZlY3RvckFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXAgPSBsYXllci52ZWN0b3JMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZWN0b3JBcnJheSAmJiB2ZWN0b3JBcnJheS5mb3JFYWNoICYmIHR5cGVvZiB2ZWN0b3JBcnJheS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmVjdG9yTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlY3RvckxheWVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVjdG9yTGF5ZXIuZGF0YS5nZW9tZXRyeS50eXBlID09PSBcIlBvaW50XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBvbC5wcm9qLnRyYW5zZm9ybShbcGFyc2VGbG9hdCh2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh2ZWN0b3JMYXllci5kYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdKV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllckdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIG1vcmUgY29tcGxleCBnZW9tZXRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3QgPSBsYXllckdyb3VwLmdldExheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVBcnJheSA9IGZlYXR1cmVMaXN0LmdldEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5ZXIudHlwZSAhPT0gXCJvdmVycGFzc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllci50eXBlID09PSBcImttbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGZlYXR1cmUuZ2V0U291cmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgc291cmNlRmVhdHVyZXMgPSBzb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZ2V0RXh0ZW50KCkuZm9yRWFjaChmdW5jdGlvbiAoY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG9sLmV4dGVudC5nZXRUb3BSaWdodChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0VG9wTGVmdChmZWF0dXJlLmdldFNvdXJjZSgpLmdldEV4dGVudCgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChvbC5leHRlbnQuZ2V0Qm90dG9tUmlnaHQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2gob2wuZXh0ZW50LmdldEJvdHRvbUxlZnQoZmVhdHVyZS5nZXRTb3VyY2UoKS5nZXRFeHRlbnQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGV4dGVudCA9IG9sLmV4dGVudC5ib3VuZGluZ0V4dGVudChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVudFswXSA9PT0gSW5maW5pdHkgfHwgZXh0ZW50WzBdID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwgc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKSk7XG4gICAgICAgICAgICAgICAgY2VudGVyID0gc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oY2VudGVyWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihbNTAsIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Wm9vbShtYXBEYXRhLm1pblpvb20gfHwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgLy9lbmQgb2Ygem9vbSB0byBleHRlbnRcbiAgICAgIC8vIGFkZCBob29rIGZ1bmN0aW9uIGZvciBjaGFuZ2VkIGxheWVyLXZpc2liaWxpdHlcbiAgICAgIC8vICAgbmVlZGVkIHRvIGNoYW5nZSB0aGUgZW50cnktY2xhc3Nlc1xuICAgICAgdGhpcy5wcm94eS5ob29rX2xheWVyX3Zpc2liaWxpdHkucHVzaChmdW5jdGlvbiAobGF5ZXJJZCkge1xuICAgICAgICB2YXIgaixcbiAgICAgICAgICAgIGNoYW5nZWRMYXllcjtcblxuICAgICAgICBjaGFuZ2VkTGF5ZXIgPSBzZWxmLmxheWVyc1tsYXllcklkXTtcbiAgICAgICAgaWYgKGNoYW5nZWRMYXllciAmJiBjaGFuZ2VkTGF5ZXIuJGVudHJpZXMpIHtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2hhbmdlZExheWVyLiRlbnRyaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllcklkXSkge1xuICAgICAgICAgICAgICBjaGFuZ2VkTGF5ZXIuJGVudHJpZXNbal0uYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoYW5nZWRMYXllci4kZW50cmllc1tqXS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5oYW5kbGVTZWxlY3RlZENoaWxkcyggY2hhbmdlZExheWVyLiRlbnRyaWVzW2pdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgaG9vayBmdW5jdGlvbiBmb3IgY2hhbmdlZCB6b29tXG4gICAgICAvLyAgIG5lZWRlZCB0byBjaGFuZ2UgdGhlIGVudHJ5LWNsYXNzZXNcbiAgICAgIHRoaXMucHJveHkuaG9va19tYXBfem9vbS5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGosXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGxheWVyO1xuXG4gICAgICAgIGZvciAoaWQgaW4gc2VsZi5sYXllcnMpIHtcbiAgICAgICAgICBpZiAoc2VsZi5sYXllcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICBsYXllciA9IHNlbGYubGF5ZXJzW2lkXTtcbiAgICAgICAgICAgIGlmIChsYXllciAmJiBsYXllci4kZW50cmllcykge1xuICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGF5ZXIuJGVudHJpZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5jaGVja0xheWVySXNBY3RpdmVGb3Jab29tKGlkKSkge1xuICAgICAgICAgICAgICAgICAgbGF5ZXIuJGVudHJpZXNbal0ucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkRJU0FCTEVEKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGF5ZXIuJGVudHJpZXNbal0uYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkRJU0FCTEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTsgLy8gZW5kIG9mIGhvb2tcblxuICAgICAgaWYgKGl0ZW1EYXRhICYmIGl0ZW1EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdWlkID0gaXRlbURhdGFbaV07XG4gICAgICAgICAgbGF5ZXIgPSBzZWxmLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbdWlkXTtcbiAgICAgICAgICBpdGVtID0ge307XG4gICAgICAgICAgdGhpcy5sYXllcnNbdWlkXSA9IGl0ZW07XG4gICAgICAgICAgLy8gcmVuZGVyU3BlY2lhbCBpcyBzZXQgd2hlbiBhIGxheWVyIGlzIHJlbmRlcmVkIGluIGl0cyBvd24gdGFiXG4gICAgICAgICAgaWYgKGxheWVyLnJlbmRlclNwZWNpYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsYXllciAmJiBsYXllci5kaXNwbGF5KSB7XG4gICAgICAgICAgICBsaXN0SXRlbSA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmVudHJ5V3JhcHBlcnMgPSBpdGVtLmVudHJ5V3JhcHBlcnMgfHwgW107XG4gICAgICAgICAgICBpdGVtLmVudHJ5V3JhcHBlcnMucHVzaChsaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICAgIGVudHJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxheWVyLm5hbWUpKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVudHJ5KTtcblxuICAgICAgICAgICAgJGVudHJ5ID0gJChlbnRyeSk7XG4gICAgICAgICAgICBpdGVtLiRlbnRyaWVzID0gaXRlbS4kZW50cmllcyB8fCBbXTtcbiAgICAgICAgICAgIGl0ZW0uJGVudHJpZXMucHVzaCgkZW50cnkpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJveHkuY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbSh1aWQpKSB7XG4gICAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuRElTQUJMRUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkZW50cnkuZGF0YSgndWlkJywgdWlkKTtcbiAgICAgICAgICAgICRlbnRyeS5jbGljayhmbkhhbmRsZUVudHJ5Q2xpY2spO1xuXG4gICAgICAgICAgICBpZiAobGF5ZXIudmlzaWJsZUNoaWxkcyB8fCBsYXllci5zcGxpdF9nZW9qc29uKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICBpZiAobGF5ZXIuaGlkZV9jaGlsZCAhPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICAgICAgJCh0b2dnbGUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkKHRvZ2dsZSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLnJpZ2h0U2xpZGVFbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLnJpZ2h0U2xpZGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKCdyaWdodCcsIHNlbGYuc3RhcmJvYXJkLmNvbnRhaW5lci5vZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkKHNlbGYuc3RhcmJvYXJkLmVsZW1lbnQpLmNzcygncmlnaHQnLCBzZWxmLnN0YXJib2FyZC5jb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgJCh0b2dnbGUpLmluc2VydEJlZm9yZSgkZW50cnkpO1xuICAgICAgICAgICAgICBjaGlsZFdyYXBwZXIgPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBpdGVtLmNoaWxkV3JhcHBlcnMgPSBpdGVtLmNoaWxkV3JhcHBlcnMgfHwgW107XG4gICAgICAgICAgICAgIGl0ZW0uY2hpbGRXcmFwcGVycy5wdXNoKGNoaWxkV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLmhpZGVfY2hpbGQgIT09ICcxJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihsYXllci5zcGxpdF9nZW9qc29uICYmIGxheWVyLmNvbnRlbnRbMF0pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGxheWVyLmNvbnRlbnRbMF0uZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlID0gZGF0YS5mZWF0dXJlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRMaXN0SXRlbSA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9e307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtLmVudHJ5V3JhcHBlcnMgPSBjaGlsZEl0ZW0uZW50cnlXcmFwcGVycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEl0ZW0uZW50cnlXcmFwcGVycy5wdXNoKGNoaWxkTGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVudHJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZlYXR1cmUucHJvcGVydGllc1tsYXllci5nZW9qc29uX2F0dHJpYnV0ZXMuc3BsaXQoJywnKVswXV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkRW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZFVpZCA9IHVpZCArIFwiXCIgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkY2hpbGRFbnRyeSA9ICQoY2hpbGRFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtLiRlbnRyaWVzID0gaXRlbS4kZW50cmllcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEl0ZW0uJGVudHJpZXMucHVzaCgkZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkV3JhcHBlci5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hpbGRFbnRyeS5kYXRhKCd1aWQnLCBjaGlsZFVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF5ZXIuZ2VvanNvbl96b29tKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGlsZEVudHJ5LmNsaWNrKGZuQ2hpbGRFbnRyeVNob3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNoaWxkRW50cnkuYWRkQ2xhc3MoJ2M0Zy1nZW9qc29uLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNoaWxkRW50cnkuY2xpY2soZm5DaGlsZEVudHJ5Q2xpY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbdWlkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hpbGRFbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGlsZEVudHJ5LmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2suYWRkQ2hpbGRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5hZGRDaGlsZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYzRnLm1hcHMuaG9vay5zdGFyYm9hcmRfbGF5ZXJfYWN0aXZhdGUgJiYgYzRnLm1hcHMuaG9vay5zdGFyYm9hcmRfbGF5ZXJfYWN0aXZhdGUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbU9iaiA9IHsnZmVhdHVyZSc6IGZlYXR1cmUsICdwYXJlbnRJdGVtJzogY2hpbGRMaXN0SXRlbSwgJ2VudHJ5JzokY2hpbGRFbnRyeX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suc3RhcmJvYXJkX2xheWVyX2FjdGl2YXRlLCBwYXJhbU9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1t1aWRdKSB7XG4gICAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBbaW5mb106ICBJbiBvcmRlciBmb3IgdGhpcyB0byB3b3JrLFxuICAgICAgICAgICAgLy8gICAgICAgICAgdGhlIHBhcmVudCBsYXllcnMgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gICAgICAgICAgbGlzdGVkIGJlZm9yZSB0aGVpciBjaGlsZHNcbiAgICAgICAgICAgIGlmICh0aGlzLmxheWVyc1tsYXllci5waWRdKSB7XG4gICAgICAgICAgICAgIC8vIGlzIGNoaWxkLWVsZW1lbnRcbiAgICAgICAgICAgICAgcFdyYXBwZXIgPSB0aGlzLmxheWVyc1tsYXllci5waWRdLmNoaWxkV3JhcHBlcnM7XG4gICAgICAgICAgICAgIHBXcmFwcGVyW3BXcmFwcGVyLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChsYXllci5waWQsIDEwKSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGxheWVyIGlzIG1hcCBpdHNlbGYgd2l0aCBhIGxheWVyXG4gICAgICAgICAgICAgIHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgaWYobGF5ZXIuaGlkZV9jaGlsZCAhPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICQodG9nZ2xlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSUNPTik7XG4gICAgICAgICAgICAgICQodG9nZ2xlKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAkKHRvZ2dsZSkuaW5zZXJ0QmVmb3JlKCRlbnRyeSk7XG4gICAgICAgICAgICAgIGNoaWxkV3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGl0ZW0uY2hpbGRXcmFwcGVycyA9IGl0ZW0uY2hpbGRXcmFwcGVycyB8fCBbXTtcbiAgICAgICAgICAgICAgaXRlbS5jaGlsZFdyYXBwZXJzLnB1c2goY2hpbGRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBpcyBub3QgYSBjaGlsZC1lbGVtZW50IChwaWQgPT0gbWFwSWQpXG4gICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRzdHIgPSBsYXllci5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxheWVyQ2xhc3MgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIGlkc3RyLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICApLnJlcGxhY2UoLyVbMC05QS1GXXsyfS9naSwnJyk7XG4gICAgICAgICAgICAgICAgJChsaXN0SXRlbSkuYWRkQ2xhc3MoJ2M0Z19zdGFyYm9hcmRfaXRlbV8nK2xheWVyQ2xhc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF5ZXIuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhsYXllci5jc3NDbGFzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhbGwgaG9vayBcImxheWVyc3dpdGNoZXJfZm9yRWFjaEl0ZW1cIlxuICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5sYXllcnN3aXRjaGVyX2ZvckVhY2hJdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgYzRnLm1hcHMuaG9vay5sYXllcnN3aXRjaGVyX2ZvckVhY2hJdGVtLFxuICAgICAgICAgICAgICAgICAge3RoYXQ6IHRoaXMsIGl0ZW06IGl0ZW0sIGVudHJ5OiAkZW50cnl9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGVuZCBvZiBmb3ItbG9vcFxuXG4gICAgICAgIC8vIFN0YXJib2FyZCBGaWx0ZXJcbiAgICAgICAgaWYgKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICB2YXIgZHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR2LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1maWx0ZXIgYzRnLWNvbnRlbnQtc2VsZWN0XCI7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZpbHRlci50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgZmlsdGVyLnBsYWNlaG9sZGVyID0gXCJcIjsgLy9Gb250IEF3ZXNvbWVcbiAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgaS5jbGFzc05hbWUgPSAnZmFzIGZhLWZpbHRlcic7XG4gICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGR2LmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgICAgICBkdi5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgIGZpbHRlci5vbmtleXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlsdGVyX3VsbGkoZWxlbWVudCwgc2hvd1N1YnRyZWUpIHtcblxuICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFwcGx5IGZpbHRlciBmb3Igc2hvcnQgc2VhcmNoIHRlcm1zXG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd1N1YnRyZWUgPSBzaG93U3VidHJlZSB8fCBmYWxzZTsgIC8vIHVzZWQgd2hpbGUgdHJhdmVyc2luZyBkb3duIHRoZSB0cmVlXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgKG1vZGlmaWVkOiBmaXJzdCBlbGVtZW50KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudHMuIE9ubHkgZmluZHMgY2hpbGRyZW4gb2YgdGhlIGdpdmVuIHBhcmVudCBlbGVtZW50LCBidXRcbiAgICAgICAgICAgICAgICAgICAgICogbm8gZnVydGhlciBkZXNjZW5kYW50cyBsaWtlIGdldEVsZW1lbnRzQnlUYWdOYW1lIGRvZXMuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRDaGlsZHJlbkJ5VGFnTmFtZShlbGVtZW50LCB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuW2ldLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PSB0YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQucHVzaChlbGVtZW50LmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kWzBdOyAvLyAhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoRmxhZ1VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJ0cmVlTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBMSSBkb1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBjdXJyZW50IExJIGZvciBmaWx0ZXIgdGVybVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5pbm5lckhUTUwudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBhIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaWYgYSBzdWJ0cmVlIChVTCkgZXhpc3RzIGluIGN1cnJlbnQgTEkgKG1heCAxIGV4cGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVsID0gZ2V0Q2hpbGRyZW5CeVRhZ05hbWUoZWxlbWVudC5jaGlsZHJlbltpXSxcInVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNTdWJ0cmVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlTWF0Y2hlcyA9IGZpbHRlcl91bGxpKHVsLCBzaG93U3VidHJlZSB8fCBpc01hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc1N1YnRyZWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2ggfHwgc3VidHJlZU1hdGNoZXMgfHwgc2hvd1N1YnRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEZsYWdVbCA9IHRydWU7IC8vIHVzZWQgd2hpbGUgdHJhdmVyc2luZyB1cCB0aGUgdHJlZSBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjdXJyZW50IExJIHZpc2libGUgYW5kIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1jbG9zZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYzRnLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLXN0YXJib2FyZC1maWx0ZXItbWF0Y2hcIik7IC8vIGFsd2F5cyByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCAmJiBmaWx0ZXIudmFsdWUubGVuZ3RoID4gMCkge2VsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGN1cnJlbnQgTEkgaW52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hGbGFnVWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCByZWFjdCBpbW1lZGlhdGVseSBidXQgYWxsb3cgZm9yIHNvbWUga2V5c3Ryb2tlcyBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgLy8gdHdvIG9yIHplcm8gbGV0dGVycyBhcmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIudmFsdWUubGVuZ3RoICE9IDEpIGZpbHRlcl91bGxpKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jNGctbGF5ZXJ0cmVlID4gdWw6bnRoLWNoaWxkKDIpJykpXG4gICAgICAgICAgICAgICAgfSwgMzUwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZHYpO1xuXG4gICAgICAgIH1cbiAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiYWRkSXRlbXMoKVwiXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gd2hpY2ggY2hlY2tzIGZvciBhIGdpdmVuIGxheWVyIGlkLCBpZiBhbnkgb2YgdGhlIGNoaWxkcyBhcmUgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqIEBwYXJhbSBsYXllclVpZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNoZWNrQ2hpbGRTZWxlY3Rpb25zOiBmdW5jdGlvbiAobGF5ZXJVaWQpIHtcbiAgICAgIHZhciBsYXllcixcbiAgICAgICAgICBjaGlsZEFjdGl2ZSxcbiAgICAgICAgICBzZWxmO1xuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICBjaGlsZEFjdGl2ZSA9IDA7XG4gICAgICBsYXllciA9IHNlbGYucHJveHkubGF5ZXJDb250cm9sbGVyLmFyckxheWVyc1tsYXllclVpZF07XG4gICAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuY2hpbGRzICYmIGxheWVyLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxheWVyIGhhcyBjaGlsZHNcbiAgICAgICAgbGF5ZXIuY2hpbGRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKHNlbGYucHJveHkuYWN0aXZlTGF5ZXJJZHNbY2hpbGQuaWRdKSB7XG4gICAgICAgICAgICBjaGlsZEFjdGl2ZSA9IGNoaWxkQWN0aXZlICsgMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYW55IGNoaWxkcyBvZiBjaGlsZHMgYXJlIGFjdGl2ZVxuICAgICAgICAgICAgY2hpbGRBY3RpdmUgPSBjaGlsZEFjdGl2ZSArIHNlbGYuY2hlY2tDaGlsZFNlbGVjdGlvbnMoY2hpbGQudWlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkQWN0aXZlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNoZWNrQ2hpbGRTZWxlY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gZm9yIGNvbG9yaW5nIHRoZSBsYXllcnN3aXRjaGVyIGVudHJpZXMsIGlmIHRoZXJlIGFyZSBhbnkgc3VibGF5ZXJzIHNlbGVjdGVkXG4gICAgICogQHBhcmFtIGVudHJ5XG4gICAgICovXG4gICAgaGFuZGxlU2VsZWN0ZWRDaGlsZHM6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tDaGlsZFNlbGVjdGlvbnMoJChlbnRyeSkuZGF0YSgndWlkJykpID49IDEpIHtcbiAgICAgICAgJChlbnRyeSkuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGVudHJ5KS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ25vcm1hbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFyYm9hcmQudXBkYXRlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlUGFyZW50TGF5ZXJzOiBmdW5jdGlvbiAoZW50cnksIGxheWVyVWlkLCBjbGlja2VkTGF5ZXIpIHtcbiAgICAgIHZhciBsYXllcixcbiAgICAgICAgICBwYXJlbnRFbnRyeSxcbiAgICAgICAgICBwYXJlbnRMYXllcjtcblxuICAgICAgbGF5ZXIgPSB0aGlzLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbbGF5ZXJVaWRdO1xuICAgICAgaWYgKGxheWVyLnBpZCAhPSB0aGlzLnN0YXJib2FyZC5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5tYXBJZCkge1xuICAgICAgICAvLyB0aGUgbGF5ZXIgaGFzIHBhcmVudHNcbiAgICAgICAgLy8gYnkgdGhpcyB3ZSBjYW4gYWNjZXNzIG9ubHkgdGhlIHNpbmdsZSBzcGFuIHdoZXJlIHRoZSBwYXJlbnQgZW50cnkgaXMgaW5cbiAgICAgICAgcGFyZW50TGF5ZXIgPSB0aGlzLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbbGF5ZXIucGlkXTtcbiAgICAgICAgaWYgKHBhcmVudExheWVyKSB7XG4gICAgICAgICAgcGFyZW50RW50cnkgPSBlbnRyeS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdO1xuICAgICAgICAgIGlmIChwYXJlbnRFbnRyeSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbY2xpY2tlZExheWVyLmlkXSkge1xuICAgICAgICAgICAgICAkKHBhcmVudEVudHJ5KS5jc3MoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ2hpbGRTZWxlY3Rpb25zKCQocGFyZW50RW50cnkpLmRhdGEoJ3VpZCcpKSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgJChwYXJlbnRFbnRyeSkuY3NzKCdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChwYXJlbnRFbnRyeSkuY3NzKCdmb250LXdlaWdodCcsICdub3JtYWwnKTtcbiAgICAgICAgICAgICAgICAvLyQocGFyZW50RW50cnkpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFyZW50TGF5ZXJzKHBhcmVudEVudHJ5LCBwYXJlbnRMYXllci5pZCwgcGFyZW50TGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBMYXllcnN3aXRjaGVyID0gdGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5MYXllcnN3aXRjaGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tbGF5ZXJzd2l0Y2hlci5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1pvb21sZXZlbH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWxcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBjNGctTWFwcyB1dGlsaXR5IGZ1bmN0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMudXRpbHMgPSAkLmV4dGVuZChjNGcubWFwcy51dGlscywge1xuICAgIC8qKlxuICAgICAqICBDb252ZXJ0cyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgZ2l2ZW4gc3RyaW5nIHRvIHVwcGVyY2FzZSwgbGVhdmluZyB0aGUgcmVtYWluaW5nIHN0cmluZyB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiAgQHBhcmFtICAgIHtzdHJpbmd9ICAgIHRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZVxuICAgICAqXG4gICAgICogIEByZXR1cm4gICB7c3RyaW5nfSAgICB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIHVuaXF1ZSBpZC5cbiAgICAgKlxuICAgICAqIFRoZSBpZCBpcyA5IGNoYXJhY3RlcnMgbG9uZyBhbmQgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gIFRoZSBnZW5lcmF0ZWQgaWQuXG4gICAgICovXG4gICAgZ2V0VW5pcXVlSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gICAgICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAgICAgLy8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG4gICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBub3QgYnJlYWsgdGhlIENvZGUuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcIC0+IFxcXFw7XG4gICAgICogICBcIiAtPiAnJztcbiAgICAgKiAgIMOEIC0+ICZBdW1sO1xuICAgICAqICAgw6QgLT4gJmF1bWw7XG4gICAgICogICDDliAtPiAmT3VtbDtcbiAgICAgKiAgIMO2IC0+ICZvdW1sO1xuICAgICAqICAgw5wgLT4gJlV1bWw7XG4gICAgICogICDDvCAtPiAmdXVtbDtcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZW5jb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcL2csICdcXFxcXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFxcIi9nLCAnXFwnXFwnJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DhC9nLCAnJkF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DpC9nLCAnJmF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dli9nLCAnJk91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dti9nLCAnJm91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DnC9nLCAnJlV1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DvC9nLCAnJnV1bWw7J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZW5jb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIGJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcXFwgICAgIC0+IFxcO1xuICAgICAqICAgJycgICAgIC0+IFwiO1xuICAgICAqICAgJkF1bWw7IC0+IMOEXG4gICAgICogICAmYXVtbDsgLT4gw6RcbiAgICAgKiAgICZPdW1sOyAtPiDDllxuICAgICAqICAgJm91bWw7IC0+IMO2XG4gICAgICogICAmVXVtbDsgLT4gw5xcbiAgICAgKiAgICZ1dW1sOyAtPiDDvFxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcXFxcXC9nLCAnXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFwnXFwnL2csICdcXFwiJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mQXVtbDsvZywgJ8OEJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mYXVtbDsvZywgJ8OkJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mT3VtbDsvZywgJ8OWJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mb3VtbDsvZywgJ8O2J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mVXVtbDsvZywgJ8OcOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJnV1bWw7L2csICfDvCdcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGRlY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3IgcmVwbGFjZSBhbiBVUkwtcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAgdGhlIGdpdmVuIHBhcmFtZXRlciwgYHBhcmFtYCxcbiAgICAgKiB3aWxsIGJlIGFwcGxpZWQgYXMgXCJoYXNoLXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzI3BhcmFtXG4gICAgICogTm90ZSwgdGhhdCBhbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogd2hlcmVhcyBleGlzdGluZyBcIkdFVC1wYXJhbWV0ZXJzXCIgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgc2V0LCBpdCB3aWxsIGJlIGFwcGxpZWQgYXMgXCJHRVQtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHM/b3B0X2dldEtleT1wYXJhbVxuICAgICAqIElmIHRoZSBrZXkgZGVzY3JpYmVkIGJ5IGBvcHRfZ2V0S2V5YCBpcyBhbHJlYWR5IGV4aXN0aW5nLCBpdHMgdmFsdWUgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogb3RoZXJ3aXNlIHRoZSBrZXktdmFsdWUtcGFpciB3aWxsIGJlIGFwcGVuZGVkIGFwcHJvcHJpYXRseS5cbiAgICAgKiBBbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZXhlY3V0ZWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBuZXcgbGluayBhcyBgc3RyaW5nYCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIFwiaHJlZi9sb2NhdGlvblwiIHdpbGwgYmUgY2hhbmdlZCBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlciwgd2hpY2ggY2FuIGNhdXNlIGEgcGFnZXJlbG9hZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIHBhcmFtICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW58c3RyaW5nfSAgb3B0X2dldEtleSAgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgb3B0X2V4ZWN1dGUgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgc2V0VXJsUGFyYW06IGZ1bmN0aW9uIChwYXJhbSwgb3B0X2dldEtleSwgb3B0X2V4ZWN1dGUpIHtcbiAgICAgIHZhciBsaW5rLFxuICAgICAgICAgIHNlYXJjaFBhcmFtLFxuICAgICAgICAgIHBhcmFtUmVwbGFjZWQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGluayA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgLy8gdXNlIGhhc2gtcGFyYW1ldGVyXG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IGxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhcmFtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIEdFVC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIC8vIHRoZXJlIGFyZSBhbHJlYWR5IHNlYXJjaC1wYXJhbWV0ZXJzXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgIG9wdF9nZXRLZXkgPSBvcHRfZ2V0S2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgLy8gcmVwbGFjZSBwYXJhbWV0ZXIgaWYgYWxyZWFkeSBleGlzdGVudFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC8oW149XFw/XFwmXSspPShbXiZdKykvZ2ksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBvcHRfZ2V0S2V5KSB7XG4gICAgICAgICAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYXBwZW5kIGFzIG5ldyBwYXJhbWV0ZXJcbiAgICAgICAgICBpZiAoIXBhcmFtUmVwbGFjZWQpIHtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtICs9ICcmJyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBvbmx5IHNlYXJjaC1wYXJhbWV0ZXIgaW4gdGhlIFVSTFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gJz8nICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaCA9IHNlYXJjaFBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gc2VhcmNoUGFyYW0gKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluaztcbiAgICB9LCAvLyBlbmQgb2Ygc2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCBvciBoYXNoIFVSTC1wYXJhbWV0ZXIgYXMgc3RyaW5nLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBoYXNoLXBhcmFtZXRlciBvZiB0aGUgVVJMIGlzIHJldHVybmVkLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHNlYXJjaCBmb3IgYSBHRVQtcGFyYW1ldGVyIGFuZCByZXR1cm4gaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0ZW50LCBvciBlbXB0eSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfHN0cmluZ30gIG9wdF9nZXRLZXkgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb3VuZCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChvcHRfZ2V0S2V5KSB7XG4gICAgICB2YXIgcGFyYW0sXG4gICAgICAgICAgcmVnRXg7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICBwYXJhbSA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICBwYXJhbSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ0V4ID0gbmV3IFJlZ0V4cCgnW1xcP1xcJl0nICsgb3B0X2dldEtleSArICc9KFteJl0rKScsICdpJyk7XG4gICAgICAgICAgcGFyYW0gPSByZWdFeC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWx0YS1lbmNvZGUgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFycmF5IHdpbGwgYmUgc29ydGVkIChsb3dlc3QgdG8gaGlnaGVzdClcbiAgICAgKiBiZWZvcmUgZW5jb2RpbmcuXG4gICAgICpcbiAgICAgKiBTbyBhZnRlciB0aGUgZW5jb2RpbmcgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBvdXRwdXQgY29udGFpbnNcbiAgICAgKiB0aGUgc21hbGxlc3QgbnVtYmVyIG9mIHRoZSBzZXQgYW5kIGVhY2ggZm9sbG93aW5nIG51bWJlciBqdXN0XG4gICAgICogcmVwcmVzZW50cyB0aGUgb2Zmc2V0IHRvIGl0cyBwcmV2aW91cyBuZWlnaGJvci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbW9zdGx5IGVmZmljaWVudCBmb3IgaGlnaCBudW1iZXJzLCB0aGF0IGFyZSBcImNsb3NlIHRvIGVhY2ggb3RoZXJcIi5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICBbMTMzNywgMTEsIDEwMSwgMTIzLCA5NiwgNjksIDQyLCA0Ml1cbiAgICAgKiAgIHdpbGwgYmUgc29ydGVkXG4gICAgICogICBbMTEsIDQyLCA0MiwgNjksIDk2LCAxMDEsIDEyMywgMTMzN11cbiAgICAgKiAgIGFuZCBlbmNvZGVkIHRvXG4gICAgICogICBbMTEsIDMxLCAwLCAyNywgMjcsIDUsIDIyLCAxMjE0XVxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFFbmNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcnJJbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFycklucHV0O1xuICAgICAgfVxuXG4gICAgICBhcnJJbnB1dC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH0pO1xuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IGFycklucHV0WzBdO1xuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IGFycklucHV0W2ldIC0gYXJySW5wdXRbaSAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRW5jb2RlKClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIGRlbHRhLWVuY29kZWQgYXJyYXkuXG4gICAgICogU2VlIGBkZWx0YUVuY29kZWAgZnVuY3Rpb24gZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YURlY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IHBhcnNlSW50KGFycklucHV0WzBdLCAxMCk7XG4gICAgICBpZiAoaXNOYU4oYXJySW5wdXRbMF0pKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBwYXJzZUludChhcnJJbnB1dFtpXSwgMTApICsgYXJyT3V0cHV0W2kgLSAxXTtcbiAgICAgICAgaWYgKGlzTmFOKGFyck91dHB1dFtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YURlY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgY2FsbCBmdW5jdGlvbnMgaW4gYGFyckhvb2tGdW5jdGlvbnNgIHdpdGggZ2l2ZW4gYHBhcmFtZXRlcnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PGZ1bmN0aW9uPn0gICBhcnJIb29rRnVuY3Rpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge21peGVkfSAgICAgICAgICAgICBwYXJhbWV0ZXJzICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY2FsbEhvb2tGdW5jdGlvbnM6IGZ1bmN0aW9uIChhcnJIb29rRnVuY3Rpb25zLCBwYXJhbWV0ZXJzKSB7XG4gICAgICB2YXIgajtcblxuICAgICAgaWYgKGFyckhvb2tGdW5jdGlvbnMgJiYgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcnJIb29rRnVuY3Rpb25zW2pdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcnJIb29rRnVuY3Rpb25zW2pdKHBhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImNhbGxIb29rRnVuY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGhleC1mb3JtYXRlZCBjb2xvciB2YWx1ZSBpbnRvIHJnYmEoKS1mb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIGhleCAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBvcHRfb3BhY2l0eSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eTogZnVuY3Rpb24gKGhleCwgb3B0X29wYWNpdHksIG9wdF9hcnJheSkge1xuXG4gICAgICB2YXIgYmlnaW50LCByLCBnLCBiLCBhO1xuXG4gICAgICBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICBvcHRfb3BhY2l0eS52YWx1ZSA9IHBhcnNlSW50KG9wdF9vcGFjaXR5LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIHR5cGVvZiBvcHRfb3BhY2l0eSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRfb3BhY2l0eSA9PT0gJ29iamVjdCcgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IG9wdF9vcGFjaXR5LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHIgPSAoYmlnaW50ID4+IDE2KSAmIDI1NTtcbiAgICAgIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgYiA9IGJpZ2ludCAmIDI1NTtcbiAgICAgIGEgPSBvcHRfb3BhY2l0eSA/IChvcHRfb3BhY2l0eSAvIDEwMCkgOiAxO1xuICAgICAgaWYob3B0X2FycmF5KXtcbiAgICAgICAgcmV0dXJuIFtyLGcsYixhXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVkdWNlIGEgZGVmaW5lZCBzdHlsZSwgdG8gYSBzaW1wbGVyIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBUaGUgcmVkdWNlZCBzdHlsZSBpcyB0aGUgZmlyc3Qgc3R5bGUgb2YgdGhlIGRlZmluZWQgc3R5bGVzZXQsXG4gICAgICogd2l0aCBhIDFweCB0aGljayBzdHJva2UgYW5kIGEgY2lyY2xlIHdpdGggYSA1cHggcmFkaXVzLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGFkZGl0aW9uYWwgZ2VvbWV0cmllcyB3aXRoIGEgbWFpbi1nZW9tZXRyeSxcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSB3aG9sZSBuZXcgc3R5bGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfHN0cmluZ30gICAgICAgICAgIHN0eWxlSWQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxvbC5zdHlsZS5TdHlsZT59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlZHVjZVN0eWxlOiBmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgdmFyIHN0eWxlLFxuICAgICAgICAgIHJlZHVjZWRTdHlsZSxcbiAgICAgICAgICBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlU3R5bGU7XG5cbiAgICAgIGlmICghYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0gfHwgIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUgPSBjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSgpWzBdO1xuXG4gICAgICBmaWxsU3R5bGUgPSBzdHlsZS5nZXRGaWxsKCk7XG4gICAgICBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgICAgc3Ryb2tlU3R5bGUuc2V0V2lkdGgoMSk7XG5cbiAgICAgIHJlZHVjZWRTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHRleHQ6IHN0eWxlLmdldFRleHQoKSxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFtyZWR1Y2VkU3R5bGVdO1xuICAgIH0sIC8vIGVuZCBvZiBcInJlZHVjZVN0eWxlXCJcblxuICAgIC8qKlxuICAgICAqIE1lYXN1cmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdpdmVuIGdlb21ldHJ5LlxuICAgICAqXG4gICAgICogSWYgdGhlIGdlb21ldHJ5IGlzIGEgYExpbmVTdHJpbmdgIHRoZSBmdW5jdGlvbiB3aWxsIG1lYXN1cmUgaXRzIGxlbmd0aCxcbiAgICAgKiBpcyBpdCBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgdGhlIGFjcmVhZ2UsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIGAwYC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBvcHRpb25hbCBgb3B0X2ZvcmNlTGluZU1lYXN1cmVgIHBhcmFtZXRlciBpcyBgdHJ1ZWBcbiAgICAgKiBhbmQgdGhlIGdlb21ldHJ5IGlzIGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSBpdHMgcGVyaW1ldGVyIGluc3RlYWRcbiAgICAgKiBvZiBpdHMgYWNyZWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5nZW9tLkxpbmVTdHJpbmd8b2wuZ2VvbS5Qb2x5Z29ufSAgIGdlb21ldHJ5ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgICAgICAgICAgICAgb3B0X2ZvcmNlTGluZU1lYXN1cmUgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxzdHJpbmc+fG51bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbWVhc3VyZUdlb21ldHJ5OiBmdW5jdGlvbiAoZ2VvbWV0cnksIG9wdF9mb3JjZUxpbmVNZWFzdXJlLCBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgIHNwaGVyZSxcbiAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICBjb29yZDEsXG4gICAgICAgICAgY29vcmQyLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9zcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZyB8fCAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24gJiYgb3B0X2ZvcmNlTGluZU1lYXN1cmUpKSB7XG5cbiAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICAgIGNvb3JkMSA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2ldLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIGNvb3JkMiA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2kgKyAxXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICB2YWx1ZSArPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoY29vcmQxLCBjb29yZDIsIDYzNzgxMzcpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgLy9nZW9tZXRyeSA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyhnZW9tZXRyeS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpKTtcbiAgICAgICAgLy9jb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldExpbmVhclJpbmcoMCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhvbC5zcGhlcmUuZ2V0QXJlYShnZW9tZXRyeSkpO1xuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlICYmIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFsdWUgPSBNYXRoLlBJICogTWF0aC5zcXJ0KHZhbHVlKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH1cblxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yYXdWYWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCgodmFsdWUgKiAxMDApIC8gMTAwKSAvIDEwMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZXh0ZW50IGZvciBhbiBhcnJheSBvZiBnZW9tZXRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0FycmF5LjxvbC5nZW9tLnNpbXBsZUdlb21ldHJ5Pn0gIGFyckdlb21ldHJpZXMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtvbC5FeHRlbnR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllczogZnVuY3Rpb24gKGFyckdlb21ldHJpZXMpIHtcbiAgICAgIHZhciBleHRlbnRTb3VyY2U7XG5cbiAgICAgIGlmICghYXJyR2VvbWV0cmllcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dlb21ldHJpZXMgbWlzc2luZyBmb3IgZXh0ZW50IGNhbGN1bGF0aW9uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW50U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIGV4dGVudFNvdXJjZS5hZGRGZWF0dXJlcyhhcnJHZW9tZXRyaWVzKTtcblxuICAgICAgcmV0dXJuIGV4dGVudFNvdXJjZS5nZXRFeHRlbnQoKSB8fCBvbC5FeHRlbnQoWzAsIDAsIDAsIDBdKTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcygpXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGFycmF5IG9mIGBleHRlbnRzYC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICBleHRlbnRzICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudHM6IGZ1bmN0aW9uIChleHRlbnRzLCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgIGtleTtcblxuICAgICAgaWYgKCFleHRlbnRzIHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL2V4dGVudCA9IG9sLmV4dGVudC5jcmVhdGVFbXB0eSgpO1xuXG4gICAgICBmb3IgKGtleSBpbiBleHRlbnRzKSB7XG4gICAgICAgIGlmIChleHRlbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGV4dGVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW50ID0gZXh0ZW50c1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbC5leHRlbnQuZXh0ZW5kKGV4dGVudCwgZXh0ZW50c1trZXldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpdFRvRXh0ZW50KGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgNSwgMCwgMCwgMik7XG5cblxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudHNcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYGV4dGVudGAuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuRXh0ZW50fSAgZXh0ZW50ICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHthcnJheX0gICAgICBvcHRfcGFkZGluZyAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5ab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWF4Wm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblJlc29sdXRpb24gICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnQ6IGZ1bmN0aW9uIChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbiwgb3B0X21pblpvb20sIG9wdF9tYXhab29tLCBvcHRfbWluUmVzb2x1dGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBmaXRPcHRpb25zO1xuXG4gICAgICBpZiAoIWV4dGVudCB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2aWV3ID0gbWFwLmdldFZpZXcoKTtcblxuICAgICAgZml0T3B0aW9ucyA9IHtcbiAgICAgICAgJ3BhZGRpbmcnOiBvcHRfcGFkZGluZyB8fCBbMjUsIDI1LCAyNSwgMjVdXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0X21pblJlc29sdXRpb24gJiYgb3B0X21pblJlc29sdXRpb24gPiAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluUmVzb2x1dGlvbiA9IG9wdF9taW5SZXNvbHV0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21pblpvb20gJiYgb3B0X21pblpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblpvb20gPSBvcHRfbWluWm9vbTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9tYXhab29tICYmIG9wdF9tYXhab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5tYXhab29tID0gb3B0X21heFpvb207XG4gICAgICB9XG5cbiAgICAgIC8vIGFuaW1hdGUgdGhlIFwiZml0dGluZ1wiIHdoZW4gYSBkdXJhdGlvbiBpcyBnaXZlbiBhbmQgaXRzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICBpZiAob3B0X2FuaW1hdGlvbkR1cmF0aW9uICYmIG9wdF9hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICBjZW50ZXI6IFswLCAwXVxuICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1hcC5iZWZvcmVSZW5kZXIoXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24ucGFuKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICBzb3VyY2U6IHZpZXcuZ2V0Q2VudGVyKClcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnpvb20oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCksIHtwYWRkaW5nOiBbMjUsIDI1LCAyNSwgMjVdfSk7XG4gICAgICAgIC8vdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgICAgLy92aWV3LnNldFpvb20odmlldy5nZXRab29tKCktMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50KClcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJ1biBhbGwgcGxhY2Vob2xkZXIgZnVuY3Rpb25zIGF0IG9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBzdHJJbnB1dCAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICAgICAgICAgICAgICBmZWF0dXJlICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXIgfCB1bmRlZmluZWR9ICBvcHRfbGF5ZXIgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaXJzdCB0d28gcGFyYW1ldGVycyBhcyB0aGV5IHdpbGwgYmUgdXNlZCBieSBhbGwgcGxhY2Vob2xkZXItZnVuY3Rpb25zXG4gICAgICAvLyAtPiBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyhzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQWxsUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke0ZOZnVuY3Rpb25OYW1lfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGB3aW5kb3cuZnVuY3Rpb25OYW1lKGZlYXR1cmUsIHN0eWxlKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqIFN0eWxlIHdpbGwgYmUgdGFrZW4gZWl0aGVyIGZyb20gdGhlIGZlYXR1cmUsIG9yIHRoZSBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXJ9ICBsYXllciAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgIWxheWVyKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7Rk4oW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGZ1bmN0aW9uTmFtZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZnVuY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1tmdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBzdHlsZVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgZmVhdHVyZS5nZXRTdHlsZSgpICYmIHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlKCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGF5ZXIuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgbGF5ZXIuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tmdW5jdGlvbk5hbWVdKGZlYXR1cmUsIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHBsYWNlaG9sZGVycywgaW4gYHN0cklucHV0YCwgZm9yIHZhcmlhYmxlcyBzZXQgYnkgdGhlIGdlb0VkaXRvci5cbiAgICAgKiBWYWxpZCBwbGFjZWhvbGRlcnMgYXJlOiAoW2tleV0gcmVwcmVzZW50cyB0aGUgc3RyaW5nbmFtZSBvZiB0aGUgdmFyaWFibGVzIGtleSlcbiAgICAgKiAgIGAke0VMW2tleV19YCAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVkxba2V5XX1gICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZSwgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICogICBgJHtFVltrZXldfWAgICA9PiAgVmFsdWUgb2YgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVlZba2V5XX1gICA9PiAgU2FtZSBhcyBgJHtFVltrZXldfWBcbiAgICAgKlxuICAgICAqIElmIG5vIGFwcHJvcHJpYXRlIHZhbHVlIGNhbiBiZSBmb3VuZCBmb3IgYSBwbGFjZWhvbGRlclxuICAgICAqIGl0IHdpbGwgc2ltcGx5IGJlIHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoRVY/W0xWXSkoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIHR5cGUsIGV2S2V5LCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIGVkaXRvclZhcnMsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBoYXMgZWRpdG9yVmFyc1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJykpIHtcbiAgICAgICAgICAgICAgZWRpdG9yVmFycyA9IGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJyk7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBmb3IgZWRpdG9yVmFyIHdpdGgga2V5ID09IGV2S2V5XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlZGl0b3JWYXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvclZhcnNbaV0ua2V5ID09PSBldktleSkge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgdHlwZSBpcyAnRVZMJyBkaXNwbGF5IGxhYmVsIG9ubHkgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0VMJyB8fCAodHlwZSA9PT0gJ0VWTCcgJiYgZWRpdG9yVmFyc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke2F0dHJ9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYGZlYXR1cmUuZ2V0KGF0dHIpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGF0dHIsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5nZXQoYXR0cikgfHwgJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKClcblxuICAgIG9iamVjdFRvQXJyYXk6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sIC8vIGVuZCBvZiBvYmplY3RUb0FycmF5KClcblxuICAgIGdldFZlY3RvckxheWVyKHNvdXJjZSwgc3R5bGUpIHtcbiAgICAgICAgdmFyIGZuU3R5bGU7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHN0eWxlIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm5TdHlsZSA9IHN0eWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgc3R5bGU6IGZuU3R5bGVcbiAgICAgICAgfSk7XG4gICAgfSwvLyBlbmQgb2YgXCJnZXRWZWN0b3JMYXllcigpXCJcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBzdWJkb21haW4gZnJvbSB0aGUgY3VycmVudCByZXF1ZXN0IGhvc3QgYW5kIHJldHVybnMgaXQuXG4gICAgICogQHJldHVybnMge3N0cmluZyB8ICp9XG4gICAgICovXG4gICAgZ2V0Q3VycmVudFN1YmRvbWFpbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgcmVkcmF3TWFwVmlldzogZnVuY3Rpb24gKG1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHZhciBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyVG9wTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgbWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQucHJlcGVuZChjb250cm9sQ29udGFpbmVyVG9wTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgICQoY29udHJvbENvbnRhaW5lclRvcExlZnQpLmFmdGVyKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcbiAgICAgIG1hcENvbnRyb2xsZXIubGVmdFNsaWRlRWxlbWVudHMucHVzaChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAgIGlmIChtYXBEYXRhLnNjYWxlbGluZSkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUgPSBuZXcgb2wuY29udHJvbC5TY2FsZUxpbmUoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgIH1cblxuICAgICAgJChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCkuYXBwZW5kKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViKTtcblxuICAgICAgaWYgKG1hcERhdGEuem9vbWxldmVsKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCA9IG5ldyBab29tbGV2ZWwoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbiA9IG5ldyBvbC5jb250cm9sLk1vdXNlUG9zaXRpb24oe1xuICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGNvb3JkaW5hdGVGb3JtYXQ6IG9sLmNvb3JkaW5hdGUudG9TdHJpbmdIRE1TLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XSB8fCAnJztcbiAgICB9LFxuICAgIHN0b3JlVmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlOyAvLyBvbmx5IHN0cmluZ3NcbiAgICB9XG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciB1dGlscyA9IHRoaXMuYzRnLm1hcHMudXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=