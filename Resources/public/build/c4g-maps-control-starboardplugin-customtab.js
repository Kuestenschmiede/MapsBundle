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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2M2YmQ4ODMwMmE0ZDU2NjdhNDEiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1jdXN0b210YWIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb25zdGFudCIsIiQiLCJpMThuIiwiZXh0ZW5kIiwiTEFORyIsIk5BTUUiLCJISURFIiwiQ0xPU0UiLCJQT0lOVCIsIkZSRUVIQU5EIiwiTElORSIsIlBPTFlHT04iLCJDSVJDTEUiLCJQRVJJTUVURVIiLCJMRU5HVEgiLCJTVVJGQUNFQVJFQSIsIlJBRElVUyIsIlJFRlJFU0giLCJDT1BZX1RPX0NMSVBCT0FSRCIsIkNUUkxfWk9PTV9JTiIsIkNUUkxfWk9PTV9PVVQiLCJDVFJMX1pPT01fRVhUIiwiQ1RSTF9aT09NX0hPTUUiLCJDVFJMX1pPT01fUE9TIiwiQ1RSTF9aT09NX1NMSURFUiIsIkNUUkxfUkVTRVRfUk9UQVRJT04iLCJDVFJMX1BPUlRTSURFIiwiQ1RSTF9ST1VURVIiLCJDVFJMX0VESVRPUiIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiQ1RSTF9JTkZPUEFHRSIsIkNUUkxfQURESVRJT05BTFBBTkVMIiwiQ1RSTF9BQ0NPVU5UIiwiQ1RSTF9aT09NTEVWRUwiLCJDVFJMX01PVVNFQ09PUkRTIiwiQ1RSTF9HRU9TRUFSQ0giLCJDVFJMX1NUQVJUX1NFQVJDSCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJDVFJMX0dFT0JPT0tNQVJLUyIsIkNUUkxfU0lERUJPQVJEIiwiQ1RSTF9TVEFSQk9BUkQiLCJDVFJMX0FUVFJJQlVUSU9OIiwiQ1RSTF9HUklEIiwiQ1RSTF9QRVJNQUxJTksiLCJDVFJMX0ZVTExTQ1JFRU4iLCJDVFJMX1BSSU5UIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIlBPUFVQX1JPVVRFX0ZST00iLCJQT1BVUF9ST1VURV9UTyIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9CQVNFTEFZRVIiLCJTVEFSQk9BUkRfTEFZRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwiU0lERUJPQVJEIiwiUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCIsIlJPVVRFUl9GUk9NX0xBQkVMIiwiUk9VVEVSX09WRVJfTEFCRUwiLCJST1VURVJfVE9fTEFCRUwiLCJST1VURVJfQ0xFQVJfVElUTEUiLCJST1VURVJfQ0xFQVJfSFRNTCIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwiUk9VVEVSX1NXSVRDSCIsIlJPVVRFUl9PVkVSIiwiUk9VVEVSX1BSSU5UIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEUiLCJST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1RJTUUiLCJST1VURVJfVklFV19MQUJFTF9QUk9GSUxFIiwiUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyIsIlJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HIiwiUk9VVEVSIiwiUk9VVEVSX04iLCJST1VURVJfRSIsIlJPVVRFUl9TIiwiUk9VVEVSX1ciLCJST1VURVJfTkUiLCJST1VURVJfU0UiLCJST1VURVJfU1ciLCJST1VURVJfTlciLCJST1VURVJfRElSRUNUSU9OXzAiLCJST1VURVJfRElSRUNUSU9OXzEiLCJST1VURVJfRElSRUNUSU9OXzIiLCJST1VURVJfRElSRUNUSU9OXzMiLCJST1VURVJfRElSRUNUSU9OXzQiLCJST1VURVJfRElSRUNUSU9OXzUiLCJST1VURVJfRElSRUNUSU9OXzYiLCJST1VURVJfRElSRUNUSU9OXzciLCJST1VURVJfRElSRUNUSU9OXzgiLCJST1VURVJfRElSRUNUSU9OXzEwIiwiUk9VVEVSX0RJUkVDVElPTl8xNSIsIlJPVVRFUl9GUk9NIiwiUk9VVEVSX1RPIiwiUk9VVEVSX0ZJTkRfUk9VVEUiLCJST1VURVJfTE9DX1JPVVRFX1RPIiwiUk9VVEVSX1JPVVRFREVTQyIsIlJPVVRFUl9ST1VURU5BTUUiLCJST1VURVJfRElTVEFOQ0UiLCJST1VURVJfVElNRSIsIlJPVVRFUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkciLCJST1VURVJfU0VBUkNISU5HIiwiUk9VVEVSX0VSUk9SX1NFQVJDSElORyIsIlJPVVRFUl9DQUxDX1JPVVRFIiwiUk9VVEVSX0VSUk9SX0NBTENfUk9VVEUiLCJNRUFTVVJFVE9PTFMiLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiR0VPQk9PS01BUktTX1BMQUNFSE9MREVSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUwiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQUNDT1VOVCIsIkFDQ09VTlRfVklFV19UUklHR0VSIiwiU0VBUkNIX05PVF9GT1VORCIsIk5PTkUiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiY3NzIiwiT1BFTiIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIkFDVElWRSIsIklOQUNUSVZFIiwiTE9BRElORyIsIkFOSU1BVElPTl9TUElOIiwiTEFSR0UiLCJTTUFMTCIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkFUVFJJQlVUSU9OX0xPR08iLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIkNPTlRST0xfQ09OVEFJTkVSX1RSIiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIiLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQiLCJFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEUiLCJFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1QiLCJFRElUT1JfRFJBV19UUklHR0VSIiwiRURJVE9SX0NPTlRFTlRfU0VMRUNUIiwiRURJVE9SX0RSQVdfT1BUSU9OUyIsIkdFT1NFQVJDSCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiR0VPU0VBUkNIX1RSSUdHRVIiLCJHRU9TRUFSQ0hfU1RBUlQiLCJHUkFUSUNVTEUiLCJQUklOVCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIk9WRVJWSUVXTUFQIiwiT1ZFUlZJRVdNQVBfV1JBUFBFUiIsIkdFT0JPT0tNQVJLUyIsIlBFUk1BTElOSyIsIlBFUk1BTElOS19QT1BVUCIsIlBPUFVQX0NMT1NFIiwiUE9QVVBfUk9VVEVfV1JBUFBFUiIsIlBPUlRTSURFIiwiUE9SVFNJREVfQ09OVEFJTkVSIiwiUE9SVFNJREVfQ09OVFJPTCIsIlBPUlRTSURFX1dSQVBQRVIiLCJQT1JUU0lERV9USVRMRUJBUiIsIlBPUlRTSURFX1RPUF9UT09MQkFSIiwiUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVIiLCJQT1JUU0lERV9CT1RUT01fVE9PTEJBUiIsIlBPUlRTSURFX1NUQVRVU0JBUiIsIlBPUlRTSURFX1ZJRVdUUklHR0VSQkFSIiwiUE9SVFNJREVfSEVBRExJTkUiLCJQT1JUU0lERV9CVVRUT05CQVIiLCJQT1JUU0lERV9CVVRUT04iLCJQT1JUU0lERV9ISURFIiwiUE9SVFNJREVfQ0xPU0UiLCJTUElOTkVSIiwiU1RBUkJPQVJEX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9DT05UUk9MIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfVElUTEVCQVIiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVIiLCJTVEFSQk9BUkRfU1RBVFVTQkFSIiwiU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiU1RBUkJPQVJEX0JVVFRPTkJBUiIsIlNUQVJCT0FSRF9CVVRUT04iLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJjc3NDb25zdGFudHMiLCJjb250cm9sIiwic3RhcmJvYXJkcGx1Z2luIiwiQ3VzdG9tdGFiIiwic3RhcmJvYXJkIiwicHJvamVjdENvbmYiLCJjb25zb2xlIiwid2FybiIsInRhYklkIiwibmFtZSIsImF3ZXNvbWVpY29uIiwiaW5pdGlhbGl6ZWQiLCJjb250ZW50TG9hZGVkIiwicHJveHkiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImxheWVycyIsInJlcGxhY2UiLCJwbHVnaW5zIiwiY3JlYXRlIiwicHJvdG90eXBlIiwic2VsZiIsImNvbnRlbnRXcmFwcGVyIiwiY29udGVudEhlYWRsaW5lIiwiY29udGVudEhlYWRsaW5lTGluayIsInNlbGVjdG9yIiwibGF5ZXJTd2l0Y2hlclRpdGxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaW5uZXJIVE1MIiwiYWRkQ2xhc3MiLCJvbmNsaWNrIiwiaGFzQ2xhc3MiLCJpIiwibGF5ZXJJZHMiLCJsZW5ndGgiLCJsYXllckNvbnRyb2xsZXIiLCJoaWRlTGF5ZXIiLCJyZW1vdmVDbGFzcyIsInNob3dMYXllciIsImFwcGVuZENoaWxkIiwiY29udGVudERpdiIsInZpZXciLCJhZGRWaWV3IiwidHJpZ2dlckNvbmZpZyIsInRpcExhYmVsIiwid2l0aEhlYWRsaW5lIiwic2VjdGlvbkVsZW1lbnRzIiwic2VjdGlvbiIsImNvbnRlbnRDb250YWluZXIiLCJlbGVtZW50IiwidG9wVG9vbGJhciIsInZpZXdUcmlnZ2VyQmFyIiwic3Vic3RyaW5nIiwic3R5bGVFbCIsInN0eWxlU2hlZXQiLCJoZWFkIiwic2hlZXQiLCJhZGRSdWxlIiwic3R5bGVTaGVldHMiLCJpbnNlcnRSdWxlIiwiYWN0aXZhdGUiLCJsb2FkQ29udGVudCIsInNldENvbnRlbnQiLCJuZXdDb250ZW50IiwiZmlyc3RDaGlsZCIsInJlcGxhY2VDaGlsZCIsImUiLCJtZXNzYWdlIiwiZm5EcmF3Q29udGVudCIsInNwaW5uZXIiLCJzaG93IiwidHJlZUNvbnRyb2wiLCJhZGRJdGVtcyIsInBhcnNlQXNMaXN0IiwiaGlkZSIsInVwZGF0ZSIsIml0ZW1EYXRhIiwid3JhcHBlckVsZW1lbnQiLCJ3cmFwcGVyIiwiaXRlbSIsImxheWVyIiwidWlkIiwibGlzdEl0ZW0iLCJlbnRyeSIsIiRlbnRyeSIsImhhbmRsZUVudHJ5Q2xpY2siLCJwV3JhcHBlciIsInRvZ2dsZSIsImNoaWxkV3JhcHBlciIsImV2ZW50IiwiaXRlbVVpZCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImFjdGl2ZUxheWVySWRzIiwiaG9va19sYXllcl92aXNpYmlsaXR5IiwicHVzaCIsImxheWVySWQiLCJqIiwiY2hhbmdlZExheWVyIiwiJGVudHJpZXMiLCJob29rX21hcF96b29tIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20iLCJhcnJMYXllcnMiLCJyZW5kZXJTcGVjaWFsIiwidHlwZSIsImhpZGVXaGVuSW5UYWIiLCJkaXNwbGF5IiwiZW50cnlXcmFwcGVycyIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZVRleHROb2RlIiwibGF5ZXJuYW1lIiwiY2xpY2siLCJ2aXNpYmxlQ2hpbGRzIiwicGFyZW50IiwicmlnaHRTbGlkZUVsZW1lbnRzIiwiZm9yRWFjaCIsImNvbnRhaW5lciIsIm9mZnNldFdpZHRoIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRXcmFwcGVycyIsInBpZCIsImZpbHRlciIsImR2IiwicGxhY2Vob2xkZXIiLCJvbmtleXVwIiwiZmlsdGVyX3VsbGkiLCJzaG93U3VidHJlZSIsImdldENoaWxkcmVuQnlUYWdOYW1lIiwidGFnTmFtZSIsImZvdW5kIiwiY2hpbGRyZW4iLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoRmxhZ1VsIiwic3VidHJlZU1hdGNoZXMiLCJzdHlsZSIsImlzTWF0Y2giLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluZGV4T2YiLCJ2YWx1ZSIsInVsIiwiaGFzU3VidHJlZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwibWFwVmlldyIsInVuZGVmaW5lZEhUTUwiLCJnZXRab29tIiwicGFyc2VJbnQiLCJvbiIsIm9sIiwiQ29udHJvbCIsImNhbGwiLCJ0YXJnZXQiLCJpbmhlcml0cyIsInV0aWxzIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0Iiwic2xpY2UiLCJnZXRVbmlxdWVJZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImVuY29kZUdlb0pzb25Qcm9wZXJ0eSIsImlucHV0Iiwib3V0cHV0IiwiZGVjb2RlR2VvSnNvblByb3BlcnR5Iiwic2V0VXJsUGFyYW0iLCJwYXJhbSIsIm9wdF9nZXRLZXkiLCJvcHRfZXhlY3V0ZSIsImxpbmsiLCJzZWFyY2hQYXJhbSIsInBhcmFtUmVwbGFjZWQiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiaGFzaCIsInNlYXJjaCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJrZXkiLCJvZmZzZXQiLCJvcmlnaW5TdHJpbmciLCJnZXRVcmxQYXJhbSIsInJlZ0V4IiwiUmVnRXhwIiwiZXhlYyIsImRlbHRhRW5jb2RlIiwiYXJySW5wdXQiLCJhcnJPdXRwdXQiLCJzb3J0IiwiYSIsImIiLCJkZWx0YURlY29kZSIsImlzTmFOIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJhcnJIb29rRnVuY3Rpb25zIiwicGFyYW1ldGVycyIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsImhleCIsIm9wdF9vcGFjaXR5Iiwib3B0X2FycmF5IiwiYmlnaW50IiwiciIsImciLCJyZWR1Y2VTdHlsZSIsInN0eWxlSWQiLCJyZWR1Y2VkU3R5bGUiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxvY2F0aW9uU3R5bGVzIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsInNldFdpZHRoIiwiU3R5bGUiLCJpbWFnZSIsIkNpcmNsZSIsImZpbGwiLCJzdHJva2UiLCJyYWRpdXMiLCJtZWFzdXJlR2VvbWV0cnkiLCJnZW9tZXRyeSIsIm9wdF9mb3JjZUxpbmVNZWFzdXJlIiwib3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUiLCJzcGhlcmUiLCJjb29yZGluYXRlcyIsImNvb3JkMSIsImNvb3JkMiIsInJlc3VsdCIsImdlb20iLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImdldENvb3JkaW5hdGVzIiwicHJvaiIsInRyYW5zZm9ybSIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsInRvRml4ZWQiLCJodG1sVmFsdWUiLCJhYnMiLCJnZXRBcmVhIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwiZWRnZUNvb3JkaW5hdGUiLCJQSSIsInNxcnQiLCJnZXRFeHRlbnRGb3JHZW9tZXRyaWVzIiwiYXJyR2VvbWV0cmllcyIsImV4dGVudFNvdXJjZSIsInNvdXJjZSIsIlZlY3RvciIsImFkZEZlYXR1cmVzIiwiZ2V0RXh0ZW50IiwiRXh0ZW50IiwiZml0VG9FeHRlbnRzIiwiZXh0ZW50cyIsIm9wdF9wYWRkaW5nIiwib3B0X2FuaW1hdGlvbkR1cmF0aW9uIiwicGFkZGluZyIsImV4dGVudCIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsImdldFZpZXciLCJtaW5SZXNvbHV0aW9uIiwibWluWm9vbSIsIm1heFpvb20iLCJhbmltYXRlIiwic3RhcnQiLCJEYXRlIiwiZHVyYXRpb24iLCJyZXNvbHV0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsImZpdCIsImdldFNpemUiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwic3RySW5wdXQiLCJmZWF0dXJlIiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwiZnVuY3Rpb25OYW1lIiwid2luZG93IiwiZ2V0U3R5bGUiLCJnZXQiLCJldktleSIsImVkaXRvclZhcnMiLCJsYWJlbCIsImF0dHIiLCJvYmplY3RUb0FycmF5Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImdldFZlY3RvckxheWVyIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJocmVmIiwicmVkcmF3TWFwVmlldyIsIm1hcERhdGEiLCJjb250cm9sQ29udGFpbmVyVG9wTGVmdCIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsInByZXBlbmQiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCIsImFmdGVyIiwibGVmdFNsaWRlRWxlbWVudHMiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiIsInNjYWxlbGluZSIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9scyIsIlNjYWxlTGluZSIsImFkZENvbnRyb2wiLCJhcHBlbmQiLCJ6b29tbGV2ZWwiLCJtb3VzZXBvc2l0aW9uIiwiTW91c2VQb3NpdGlvbiIsInByb2plY3Rpb24iLCJjb29yZGluYXRlRm9ybWF0IiwiY29vcmRpbmF0ZSIsInRvU3RyaW5nSERNUyIsImdldFZhbHVlIiwibG9jYWxTdG9yYWdlIiwic3RvcmVWYWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNB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QUFkLENBQXVCSyxhQUFwRDtBQUNEO0FBQ0YsS0FoM0J1QztBQWkzQnhDTSxjQUFVLGtCQUFVakosR0FBVixFQUFlO0FBQ3JCLGFBQU9rSixhQUFhbEosR0FBYixLQUFxQixFQUE1QjtBQUNILEtBbjNCdUM7QUFvM0J4Q21KLGdCQUFZLG9CQUFVbkosR0FBVixFQUFlakQsS0FBZixFQUFzQjtBQUNoQ21NLG1CQUFhbEosR0FBYixJQUFvQmpELEtBQXBCLENBRGdDLENBQ0w7QUFDNUI7QUF0M0J1QyxHQUF6QixDQUFqQjtBQXkzQkQsQ0EvM0JBLEVBKzNCQ3RRLE1BLzNCRCxFQSszQlMsS0FBS3hJLEdBLzNCZCxDQUFEOztBQWk0Qk8sSUFBSWthLFFBQVEsS0FBS2xhLEdBQUwsQ0FBU0MsSUFBVCxDQUFjaWEsS0FBMUIsQyIsImZpbGUiOiJjNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1jdXN0b210YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tY3VzdG9tdGFiLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNjNmJkODgzMDJhNGQ1NjY3YTQxIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbiA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4gfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdGFyYm9hcmRcbiAgICogQHBhcmFtIHBsdWdpblxuICAgKiBAcGFyYW0gcHJvamVjdENvbmZcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4uQ3VzdG9tdGFiID0gZnVuY3Rpb24gKHN0YXJib2FyZCwgcHJvamVjdENvbmYpIHtcbiAgICBpZiAoIXN0YXJib2FyZCkge1xuICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgaW5pdGlhbGl6ZSBQcm9qZWN0LXRhYiB3aXRob3V0IGEgc3RhcmJvYXJkLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwcm9qZWN0Q29uZiA9ICQuZXh0ZW5kKHtcbiAgICAgIHRhYklkOiBudWxsLFxuICAgICAgbmFtZTogXCJDdXN0b210YWJcIixcbiAgICAgIGF3ZXNvbWVpY29uOiAnJ1xuICAgIH0sIHByb2plY3RDb25mKTtcblxuICAgIGlmICghcHJvamVjdENvbmYudGFiSWQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGluaXRpYWxpemUgUHJvamVjdC10YWIgd2l0aG91dCBhbiBpZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAvL3RoaXMucGx1Z2luID0gcGx1Z2luIHx8IGZhbHNlO1xuICAgIHRoaXMuY29udGVudExvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcmJvYXJkID0gc3RhcmJvYXJkO1xuICAgIHRoaXMucHJveHkgPSBzdGFyYm9hcmQub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5O1xuICAgIHRoaXMubWFwID0gdGhpcy5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwO1xuICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgdGhpcy50YWJJZCA9IHByb2plY3RDb25mLnRhYklkO1xuICAgIHRoaXMubmFtZSA9IHByb2plY3RDb25mLm5hbWU7XG4gICAgdGhpcy5hd2Vzb21laWNvbiA9IHByb2plY3RDb25mLmF3ZXNvbWVpY29uLnJlcGxhY2UoJyYjOTI7JywgXCJcXFxcXCIpO1xuICAgIHN0YXJib2FyZC5wbHVnaW5zW1wiY3VzdG9tVGFiXCIrIHRoaXMudGFiSWRdID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9O1xuXG4gIC8vIEFkZCBtZXRob2RzXG4gIGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkN1c3RvbXRhYi5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5DdXN0b210YWIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2NyZWF0ZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgY29udGVudFdyYXBwZXIsXG4gICAgICAgIGNvbnRlbnRIZWFkbGluZSxcbiAgICAgICAgY29udGVudEhlYWRsaW5lTGluayxcbiAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIGxheWVyU3dpdGNoZXJUaXRsZTtcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250ZW50SGVhZGxpbmUuY2xhc3NOYW1lID0gJ2NvbnRlbnRIZWFkbGluZSc7XG5cbiAgICAgIGxheWVyU3dpdGNoZXJUaXRsZSA9IHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMubGF5ZXJTd2l0Y2hlclRpdGxlO1xuXG4gICAgICBpZiAoc2VsZi5uYW1lKSB7XG4gICAgICAgICAgbGF5ZXJTd2l0Y2hlclRpdGxlID0gc2VsZi5uYW1lO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5zdGFyYm9hcmQub3B0aW9ucy5idXR0b24pIHtcbiAgICAgICAgY29udGVudEhlYWRsaW5lLmlubmVySFRNTCA9IChsYXllclN3aXRjaGVyVGl0bGUgfHwgbGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgJChjb250ZW50SGVhZGxpbmUpLmFkZENsYXNzKFwiYzRnLXN0YXJib2FyZC1oZWFkbGluZVwiKTtcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjNGctYWN0aXZlXCIpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnByb3h5LmxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZUxheWVyKHNlbGYucHJveHkubGF5ZXJJZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImM0Zy1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYzRnLWluYWN0aXZlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnByb3h5LmxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvd0xheWVyKHNlbGYucHJveHkubGF5ZXJJZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImM0Zy1pbmFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjNGctYWN0aXZlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICAkKGNvbnRlbnRIZWFkbGluZUxpbmspLmFkZENsYXNzKFwiYzRnLWluYWN0aXZlIGM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGlua1wiKTtcbiAgICAgICAgICBjb250ZW50SGVhZGxpbmVMaW5rLmlubmVySFRNTCA9IChsYXllclN3aXRjaGVyVGl0bGUgfHwgbGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIpO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZUxpbmsuaW5uZXJIVE1MID0gY29udGVudEhlYWRsaW5lTGluay5pbm5lckhUTUwrJyAnO1xuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZS5hcHBlbmRDaGlsZChjb250ZW50SGVhZGxpbmVMaW5rKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRsaW5lKTtcblxuICAgICAgdGhpcy5jb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ2M0Z19zdGFyYm9hcmRwbHVnaW5fY29udGVudCc7XG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnREaXYpO1xuXG4gICAgICBzZWxmLnZpZXcgPSBzZWxmLnN0YXJib2FyZC5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogc2VsZi5uYW1lLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IHNlbGYubmFtZSxcbiAgICAgICAgICBjbGFzc05hbWU6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1zdGFyYm9hcmRwbHVnaW4tJyArIHNlbGYudGFiSWQsXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi5zdGFyYm9hcmQuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogY29udGVudFdyYXBwZXJ9LFxuICAgICAgICAgIHtzZWN0aW9uOiBzZWxmLnN0YXJib2FyZC50b3BUb29sYmFyLCBlbGVtZW50OiBzZWxmLnN0YXJib2FyZC52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hd2Vzb21laWNvbi5zdWJzdHJpbmcoMCwgMSkgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgIHRoaXMuYXdlc29tZWljb24gPSB0aGlzLmF3ZXNvbWVpY29uLnN1YnN0cmluZygxLCB0aGlzLmF3ZXNvbWVpY29uLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBzZWxlY3RvciA9ICdidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItc3RhcmJvYXJkcGx1Z2luLScgKyBzZWxmLnRhYklkO1xuICAgICAgLy9Ub0RvIG3DtmdsaWNoZXJ3ZWlzZSBzdGFuZGFyZCBpY29uID9cbiAgICAgIGlmICh0aGlzLmF3ZXNvbWVpY29uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgc3R5bGUgZWxlbWVudCB0byBoZWFkXG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblxuICAgICAgICAgIC8vIEdyYWIgc3R5bGUgc2hlZXRcbiAgICAgICAgICBzdHlsZVNoZWV0ID0gc3R5bGVFbC5zaGVldDtcbiAgICAgICAgLy8gY2F0Y2ggZmlyZWZveCwgYmVjYXVzZSBGRiBkb2VzIG5vdCBrbm93IFwiYWRkUnVsZVwiXG4gICAgICAgIGlmIChzdHlsZVNoZWV0LmFkZFJ1bGUgJiYgdHlwZW9mIGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdLmFkZFJ1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuYWRkUnVsZShzZWxlY3RvciArICc6YmVmb3JlJywgJ2NvbnRlbnQ6IFwiXFxcXCcrIHRoaXMuYXdlc29tZWljb24gKydcIjsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShzZWxlY3RvciArICc6YmVmb3JlIHsgY29udGVudDogXCJcXFxcJysgdGhpcy5hd2Vzb21laWNvbiArJ1wiO30nLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbYWN0aXZhdGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnZpZXcuYWN0aXZhdGUoKTtcbiAgICAgIGlmICghdGhpcy5jb250ZW50TG9hZGVkKSB7XG4gICAgICAgIHRoaXMubG9hZENvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtzZXRDb250ZW50IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gIG5ld0NvbnRlbnQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAobmV3Q29udGVudCkge1xuICAgICAgaWYgKG5ld0NvbnRlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50RGl2LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnREaXYucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIHRoaXMuY29udGVudERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBAVE9ET1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50RGl2LmlubmVySFRNTDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtsb2FkQ29udGVudCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbG9hZENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICBmbkRyYXdDb250ZW50O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc3RhcmJvYXJkLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBmbkRyYXdDb250ZW50ID0gZnVuY3Rpb24gKGxheWVySWRzKSB7XG4gICAgICAgIHNlbGYudHJlZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgJChzZWxmLnRyZWVDb250cm9sKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRSk7XG4gICAgICAgIHNlbGYuc2V0Q29udGVudChzZWxmLnRyZWVDb250cm9sKTtcbiAgICAgICAgc2VsZi5hZGRJdGVtcyhsYXllcklkcywgc2VsZi50cmVlQ29udHJvbCwge3BhcnNlQXNMaXN0OiB0cnVlfSk7XG4gICAgICAgIHNlbGYuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLnN0YXJib2FyZC5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgc2VsZi5zdGFyYm9hcmQudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJmbkRyYXdDb250ZW50KClcIlxuXG4gICAgICBmbkRyYXdDb250ZW50KHRoaXMucHJveHkubGF5ZXJJZHMpO1xuICAgIH0sIC8vIGVuZCBvZiBcImxvYWRDb250ZW50KClcIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFthZGRJdGVtcyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIGl0ZW1EYXRhICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgd3JhcHBlckVsZW1lbnQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBvcHRpb25zICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFkZEl0ZW1zOiBmdW5jdGlvbiAoaXRlbURhdGEsIHdyYXBwZXJFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgd3JhcHBlcixcbiAgICAgICAgaXRlbSxcbiAgICAgICAgbGF5ZXIsXG4gICAgICAgIHVpZCxcbiAgICAgICAgbGlzdEl0ZW0sXG4gICAgICAgIGVudHJ5LFxuICAgICAgICAkZW50cnksXG4gICAgICAgIGhhbmRsZUVudHJ5Q2xpY2ssXG4gICAgICAgIHNlbGYsXG4gICAgICAgIHBXcmFwcGVyLFxuICAgICAgICB0b2dnbGUsXG4gICAgICAgIGNoaWxkV3JhcHBlcjtcblxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICBwYXJzZUFzTGlzdDogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBoYW5kbGVFbnRyeUNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGl0ZW1VaWQ7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIGV2ZW50IHNlbmRpbmcgZW50cnlcbiAgICAgICAgaXRlbVVpZCA9ICQodGhpcykuZGF0YSgndWlkJyk7XG4gICAgICAgIGlmIChzZWxmLnByb3h5LmFjdGl2ZUxheWVySWRzW2l0ZW1VaWRdKSB7XG4gICAgICAgICAgLy8gaGlkZSBsYXllclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgIHNlbGYuaGlkZUxheWVyKGl0ZW1VaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNob3cgbGF5ZXJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICBzZWxmLnNob3dMYXllcihpdGVtVWlkKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gcmVnaXN0ZXIgaG9vayB0byBzd2l0Y2ggY2hpbGRzIG9mIGxheWVycyBhcyB3ZWxsXG4gICAgICB0aGlzLnByb3h5Lmhvb2tfbGF5ZXJfdmlzaWJpbGl0eS5wdXNoKGZ1bmN0aW9uIChsYXllcklkKSB7XG4gICAgICAgIHZhciBqLFxuICAgICAgICAgIGNoYW5nZWRMYXllcjtcblxuICAgICAgICBjaGFuZ2VkTGF5ZXIgPSBzZWxmLmxheWVyc1tsYXllcklkXTtcbiAgICAgICAgaWYgKGNoYW5nZWRMYXllciAmJiBjaGFuZ2VkTGF5ZXIuJGVudHJpZXMpIHtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2hhbmdlZExheWVyLiRlbnRyaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllcklkXSkge1xuICAgICAgICAgICAgICBjaGFuZ2VkTGF5ZXIuJGVudHJpZXNbal0uYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoYW5nZWRMYXllci4kZW50cmllc1tqXS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7IC8vIGVuZCBvZiBob29rXG5cbiAgICAgIC8vIGFkZCBob29rIGZ1bmN0aW9uIGZvciBjaGFuZ2VkIHpvb21cbiAgICAgIC8vICAgbmVlZGVkIHRvIGNoYW5nZSB0aGUgZW50cnktY2xhc3Nlc1xuICAgICAgdGhpcy5wcm94eS5ob29rX21hcF96b29tLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaixcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBsYXllcjtcblxuICAgICAgICBmb3IgKGlkIGluIHNlbGYubGF5ZXJzKSB7XG4gICAgICAgICAgaWYgKHNlbGYubGF5ZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgbGF5ZXIgPSBzZWxmLmxheWVyc1tpZF07XG4gICAgICAgICAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuJGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGxheWVyLiRlbnRyaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkuY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbShpZCkpIHtcbiAgICAgICAgICAgICAgICAgIGxheWVyLiRlbnRyaWVzW2pdLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5ESVNBQkxFRCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxheWVyLiRlbnRyaWVzW2pdLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ESVNBQkxFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTsgLy8gZW5kIG9mIGhvb2tcblxuICAgICAgLy8gYnVpbGQgdGhlIGxheWVyIHRyZWVcbiAgICAgIHdyYXBwZXIgPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWYgKGl0ZW1EYXRhICYmIGl0ZW1EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdWlkID0gaXRlbURhdGFbaV07XG4gICAgICAgICAgLy9sYXllciA9IHRoaXMucGx1Z2luLmN1c3RvbVRhYnNbdGhpcy50YWJJZF0uZHJhd25GZWF0dXJlc1t1aWRdO1xuICAgICAgICAgIGxheWVyID0gdGhpcy5wcm94eS5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzW3VpZF07XG4gICAgICAgICAgLy8gc2tpcCBsYXllciBpZiBpdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHRhYlxuICAgICAgICAgIGlmICghKGxheWVyLnJlbmRlclNwZWNpYWwgPT0gdHJ1ZSAmJiAobGF5ZXIudGFiSWQgPT0gdGhpcy50YWJJZCkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZG8gbm90IHJlbmRlciB0aGUgc3RhcnRhYiBsYXllciBpdHNlbGYgYXMgcGFyZW50IGxldmVsXG4gICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09IFwic3RhcnRhYlwiKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hlY2sgaWYgbGF5ZXIgd2FudHMgdG8gYmUgZGlzcGxheWVkIGluIHN0YXJib2FyZCB0YWJcbiAgICAgICAgICBpZiAobGF5ZXIuaGlkZVdoZW5JblRhYiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsYXllci5oaWRlID09PSBcIjFcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXIuaWRdKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuaGlkZUxheWVyKGxheWVyLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGxheWVyIHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICBpZiAoIWxheWVyLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtID0ge307XG4gICAgICAgICAgdGhpcy5sYXllcnNbdWlkXSA9IGl0ZW07XG4gICAgICAgICAgbGlzdEl0ZW0gPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGl0ZW0uZW50cnlXcmFwcGVycyA9IGl0ZW0uZW50cnlXcmFwcGVycyB8fCBbXTtcbiAgICAgICAgICBpdGVtLmVudHJ5V3JhcHBlcnMucHVzaChsaXN0SXRlbSk7XG4gICAgICAgICAgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYXllci5sYXllcm5hbWUgfHwgbGF5ZXIubmFtZSkpO1xuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAkZW50cnkgPSAkKGVudHJ5KTtcbiAgICAgICAgICBpdGVtLiRlbnRyaWVzID0gaXRlbS4kZW50cmllcyB8fCBbXTtcbiAgICAgICAgICBpdGVtLiRlbnRyaWVzLnB1c2goJGVudHJ5KTtcbiAgICAgICAgICAkZW50cnkuZGF0YSgndWlkJywgdWlkKTtcbiAgICAgICAgICAkZW50cnkuY2xpY2soaGFuZGxlRW50cnlDbGljayk7XG5cbiAgICAgICAgICAvLyBwcmVwYXJlIGluc2VydGlvbiBvZiBjaGlsZHNcbiAgICAgICAgICBpZiAobGF5ZXIudmlzaWJsZUNoaWxkcykge1xuICAgICAgICAgICAgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgJChsaXN0SXRlbSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICAgICAgICAgICQodG9nZ2xlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSUNPTik7XG4gICAgICAgICAgICAkKHRvZ2dsZSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5yaWdodFNsaWRlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5yaWdodFNsaWRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3MoJ3JpZ2h0Jywgc2VsZi5zdGFyYm9hcmQuY29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkKHNlbGYuc3RhcmJvYXJkLmVsZW1lbnQpLmNzcygncmlnaHQnLCBzZWxmLnN0YXJib2FyZC5jb250YWluZXIub2Zmc2V0V2lkdGgpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodG9nZ2xlKS5pbnNlcnRCZWZvcmUoJGVudHJ5KTtcbiAgICAgICAgICAgIGNoaWxkV3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmNoaWxkV3JhcHBlcnMgPSBpdGVtLmNoaWxkV3JhcHBlcnMgfHwgW107XG4gICAgICAgICAgICBpdGVtLmNoaWxkV3JhcHBlcnMucHVzaChjaGlsZFdyYXBwZXIpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRXcmFwcGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1t1aWRdKSB7XG4gICAgICAgICAgICAkZW50cnkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5sYXllcnNbbGF5ZXIucGlkXSkge1xuICAgICAgICAgICAgLy8gaXMgY2hpbGQtZWxlbWVudFxuICAgICAgICAgICAgcFdyYXBwZXIgPSB0aGlzLmxheWVyc1tsYXllci5waWRdLmNoaWxkV3JhcHBlcnM7XG4gICAgICAgICAgICBpZiAocFdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgcFdyYXBwZXJbcFdyYXBwZXIubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gZW5kIG9mIGZvci1sb29wXG4gICAgICAgIC8vIFN0YXJib2FyZCBGaWx0ZXJcbiAgICAgICAgaWYgKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgdmFyIGR2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZHYuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWZpbHRlciBjNGctY29udGVudC1zZWxlY3RcIjtcbiAgICAgICAgICB2YXIgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICBmaWx0ZXIudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBmaWx0ZXIucGxhY2Vob2xkZXIgPSBcIlwiOyAvL0ZvbnQgQXdlc29tZVxuICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgIGkuY2xhc3NOYW1lID0gJ2ZhcyBmYS1maWx0ZXInO1xuICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgIGR2LmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgICAgZHYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgICAgZmlsdGVyLm9ua2V5dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmaWx0ZXJfdWxsaShlbGVtZW50LCBzaG93U3VidHJlZSkge1xuXG4gICAgICAgICAgICAgIC8vIGRvIG5vdCBhcHBseSBmaWx0ZXIgZm9yIHNob3J0IHNlYXJjaCB0ZXJtc1xuXG4gICAgICAgICAgICAgIHNob3dTdWJ0cmVlID0gc2hvd1N1YnRyZWUgfHwgZmFsc2U7ICAvLyB1c2VkIHdoaWxlIHRyYXZlcnNpbmcgZG93biB0aGUgdHJlZVxuXG4gICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IChtb2RpZmllZDogZmlyc3QgZWxlbWVudCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRzLiBPbmx5IGZpbmRzIGNoaWxkcmVuIG9mIHRoZSBnaXZlbiBwYXJlbnQgZWxlbWVudCwgYnV0XG4gICAgICAgICAgICAgICAqIG5vIGZ1cnRoZXIgZGVzY2VuZGFudHMgbGlrZSBnZXRFbGVtZW50c0J5VGFnTmFtZSBkb2VzLlxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2hpbGRyZW5CeVRhZ05hbWUoZWxlbWVudCwgdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0udGFnTmFtZS50b1VwcGVyQ2FzZSgpID09IHRhZ05hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZC5wdXNoKGVsZW1lbnQuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kWzBdOyAvLyAhISFcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIG1hdGNoRmxhZ1VsID0gZmFsc2U7XG4gICAgICAgICAgICAgIHZhciBzdWJ0cmVlTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBMSSBkb1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIGN1cnJlbnQgTEkgZm9yIGZpbHRlciB0ZXJtXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5pbm5lckhUTUwudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpdCdzIGEgbWF0Y2hcbiAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaWYgYSBzdWJ0cmVlIChVTCkgZXhpc3RzIGluIGN1cnJlbnQgTEkgKG1heCAxIGV4cGVjdGVkKVxuICAgICAgICAgICAgICAgIHZhciB1bCA9IGdldENoaWxkcmVuQnlUYWdOYW1lKGVsZW1lbnQuY2hpbGRyZW5baV0sIFwidWxcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAodWwpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgICAgdmFyIGhhc1N1YnRyZWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc3VidHJlZU1hdGNoZXMgPSBmaWx0ZXJfdWxsaSh1bCwgc2hvd1N1YnRyZWUgfHwgaXNNYXRjaCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBoYXNTdWJ0cmVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2ggfHwgc3VidHJlZU1hdGNoZXMgfHwgc2hvd1N1YnRyZWUpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoRmxhZ1VsID0gdHJ1ZTsgLy8gdXNlZCB3aGlsZSB0cmF2ZXJzaW5nIHVwIHRoZSB0cmVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAvLyBzZXQgY3VycmVudCBMSSB2aXNpYmxlIGFuZCBvcGVuXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJjNGctb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLXN0YXJib2FyZC1maWx0ZXItbWF0Y2hcIik7IC8vIGFsd2F5cyByZW1vdmVcbiAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoICYmIGZpbHRlci52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIHNldCBjdXJyZW50IExJIGludmlzaWJsZVxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjNGctb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1jbG9zZVwiKTtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1hdGNoRmxhZ1VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRvIG5vdCByZWFjdCBpbW1lZGlhdGVseSBidXQgYWxsb3cgZm9yIHNvbWUga2V5c3Ryb2tlc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIHR3byBvciB6ZXJvIGxldHRlcnMgYXJlIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGlmIChmaWx0ZXIudmFsdWUubGVuZ3RoICE9IDEpIGZpbHRlcl91bGxpKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jNGctbGF5ZXJ0cmVlID4gdWw6bnRoLWNoaWxkKDIpJykpXG4gICAgICAgICAgICB9LCAzNTApO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZHYpO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImFkZEl0ZW1zKClcIlxuXG4gICAgc2hvd0xheWVyOiBmdW5jdGlvbihpdGVtVWlkKSB7XG4gICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tpdGVtVWlkXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3dMYXllcihpdGVtVWlkKTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJzaG93TGF5ZXIoKVwiXG5cbiAgICBoaWRlTGF5ZXI6IGZ1bmN0aW9uKGl0ZW1VaWQpIHtcbiAgICAgIGlmICghdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tpdGVtVWlkXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGVMYXllcihpdGVtVWlkKTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJoaWRlTGF5ZXIoKVwiXG5cblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBDdXN0b210YWIgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkN1c3RvbXRhYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zdGFyYm9hcmRwbHVnaW4tY3VzdG9tdGFiLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY3VycmVudCB6b29tbGV2ZWwgb24gdGhlIG1hcC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICB1cGRhdGVab29tbGV2ZWw7XG5cbiAgICBzZWxmID0gdGhpcztcblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5tYXBWaWV3KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1pvb21sZXZlbCBjb250cm9sIG5lZWRzIHRvIGtub3cgdGhlIG1hcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuWk9PTV9MRVZFTCxcbiAgICAgIHVuZGVmaW5lZEhUTUw6ICcnXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMubWFwVmlldy5nZXRab29tKCk7XG5cbiAgICB1cGRhdGVab29tbGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhcnNlSW50KG9wdGlvbnMubWFwVmlldy5nZXRab29tKCkpO1xuICAgIH07XG5cbiAgICBvcHRpb25zLm1hcFZpZXcub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgdXBkYXRlWm9vbWxldmVsKTtcbiAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBvcHRpb25zLnRhcmdldFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUsIHtcblxuICAgIC8vIG5vdGhpbmcgdG8gYWRkIGhlcmVcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgWm9vbWxldmVsID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlpvb21sZXZlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Wm9vbWxldmVsfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbFwiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIGM0Zy1NYXBzIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAqL1xuICBjNGcubWFwcy51dGlscyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLnV0aWxzLCB7XG4gICAgLyoqXG4gICAgICogIENvbnZlcnRzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG8gdXBwZXJjYXNlLCBsZWF2aW5nIHRoZSByZW1haW5pbmcgc3RyaW5nIHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqICBAcGFyYW0gICAge3N0cmluZ30gICAgdGhlIHN0cmluZyB0byBjYXBpdGFsaXplXG4gICAgICpcbiAgICAgKiAgQHJldHVybiAgIHtzdHJpbmd9ICAgIHRoZSBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkLlxuICAgICAqXG4gICAgICogVGhlIGlkIGlzIDkgY2hhcmFjdGVycyBsb25nIGFuZCBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgVGhlIGdlbmVyYXRlZCBpZC5cbiAgICAgKi9cbiAgICBnZXRVbmlxdWVJZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgICAgIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gICAgICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIG5vdCBicmVhayB0aGUgQ29kZS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFwgLT4gXFxcXDtcbiAgICAgKiAgIFwiIC0+ICcnO1xuICAgICAqICAgw4QgLT4gJkF1bWw7XG4gICAgICogICDDpCAtPiAmYXVtbDtcbiAgICAgKiAgIMOWIC0+ICZPdW1sO1xuICAgICAqICAgw7YgLT4gJm91bWw7XG4gICAgICogICDDnCAtPiAmVXVtbDtcbiAgICAgKiAgIMO8IC0+ICZ1dW1sO1xuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBlbmNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFwvZywgJ1xcXFxcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXFwiL2csICdcXCdcXCcnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OEL2csICcmQXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OkL2csICcmYXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OWL2csICcmT3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O2L2csICcmb3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OcL2csICcmVXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O8L2csICcmdXVtbDsnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBlbmNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgYmUgZGlzcGxheWVkIGNvcnJlY3RseS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFxcXCAgICAgLT4gXFw7XG4gICAgICogICAnJyAgICAgLT4gXCI7XG4gICAgICogICAmQXVtbDsgLT4gw4RcbiAgICAgKiAgICZhdW1sOyAtPiDDpFxuICAgICAqICAgJk91bWw7IC0+IMOWXG4gICAgICogICAmb3VtbDsgLT4gw7ZcbiAgICAgKiAgICZVdW1sOyAtPiDDnFxuICAgICAqICAgJnV1bWw7IC0+IMO8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFxcXFxcL2csICdcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXCdcXCcvZywgJ1xcXCInXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZBdW1sOy9nLCAnw4QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZhdW1sOy9nLCAnw6QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZPdW1sOy9nLCAnw5YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZvdW1sOy9nLCAnw7YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZVdW1sOy9nLCAnw5w7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mdXVtbDsvZywgJ8O8J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZGVjb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciByZXBsYWNlIGFuIFVSTC1wYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBgcGFyYW1gLFxuICAgICAqIHdpbGwgYmUgYXBwbGllZCBhcyBcImhhc2gtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHMjcGFyYW1cbiAgICAgKiBOb3RlLCB0aGF0IGFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiB3aGVyZWFzIGV4aXN0aW5nIFwiR0VULXBhcmFtZXRlcnNcIiBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBzZXQsIGl0IHdpbGwgYmUgYXBwbGllZCBhcyBcIkdFVC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcz9vcHRfZ2V0S2V5PXBhcmFtXG4gICAgICogSWYgdGhlIGtleSBkZXNjcmliZWQgYnkgYG9wdF9nZXRLZXlgIGlzIGFscmVhZHkgZXhpc3RpbmcsIGl0cyB2YWx1ZSB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGtleS12YWx1ZS1wYWlyIHdpbGwgYmUgYXBwZW5kZWQgYXBwcm9wcmlhdGx5LlxuICAgICAqIEFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9leGVjdXRlYCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG5ldyBsaW5rIGFzIGBzdHJpbmdgLFxuICAgICAqIG90aGVyd2lzZSB0aGUgXCJocmVmL2xvY2F0aW9uXCIgd2lsbCBiZSBjaGFuZ2VkIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLCB3aGljaCBjYW4gY2F1c2UgYSBwYWdlcmVsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgcGFyYW0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbnxzdHJpbmd9ICBvcHRfZ2V0S2V5ICAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICBvcHRfZXhlY3V0ZSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBzZXRVcmxQYXJhbTogZnVuY3Rpb24gKHBhcmFtLCBvcHRfZ2V0S2V5LCBvcHRfZXhlY3V0ZSkge1xuICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgc2VhcmNoUGFyYW0sXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsaW5rID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICAvLyB1c2UgaGFzaC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gbG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgR0VULXBhcmFtZXRlclxuICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGFscmVhZHkgc2VhcmNoLXBhcmFtZXRlcnNcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgb3B0X2dldEtleSA9IG9wdF9nZXRLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAvLyByZXBsYWNlIHBhcmFtZXRlciBpZiBhbHJlYWR5IGV4aXN0ZW50XG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcbiAgICAgICAgICAgICAgLyhbXj1cXD9cXCZdKyk9KFteJl0rKS9naSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG9wdF9nZXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBhcHBlbmQgYXMgbmV3IHBhcmFtZXRlclxuICAgICAgICAgIGlmICghcGFyYW1SZXBsYWNlZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW0gKz0gJyYnICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG9ubHkgc2VhcmNoLXBhcmFtZXRlciBpbiB0aGUgVVJMXG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSAnPycgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uc2VhcmNoID0gc2VhcmNoUGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBzZWFyY2hQYXJhbSArIGxvY2F0aW9uLmhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0sIC8vIGVuZCBvZiBzZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIG9yIGhhc2ggVVJMLXBhcmFtZXRlciBhcyBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGhhc2gtcGFyYW1ldGVyIG9mIHRoZSBVUkwgaXMgcmV0dXJuZWQsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgc2VhcmNoIGZvciBhIEdFVC1wYXJhbWV0ZXIgYW5kIHJldHVybiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciBpcyBub3QgZXhpc3RlbnQsIG9yIGVtcHR5LCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8c3RyaW5nfSAgb3B0X2dldEtleSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvdW5kIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKG9wdF9nZXRLZXkpIHtcbiAgICAgIHZhciBwYXJhbSxcbiAgICAgICAgICByZWdFeDtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIHBhcmFtID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIHBhcmFtID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnRXggPSBuZXcgUmVnRXhwKCdbXFw/XFwmXScgKyBvcHRfZ2V0S2V5ICsgJz0oW14mXSspJywgJ2knKTtcbiAgICAgICAgICBwYXJhbSA9IHJlZ0V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSwgLy8gZW5kIG9mIGdldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIERlbHRhLWVuY29kZSBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYXJyYXkgd2lsbCBiZSBzb3J0ZWQgKGxvd2VzdCB0byBoaWdoZXN0KVxuICAgICAqIGJlZm9yZSBlbmNvZGluZy5cbiAgICAgKlxuICAgICAqIFNvIGFmdGVyIHRoZSBlbmNvZGluZyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAqIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGhlIHNldCBhbmQgZWFjaCBmb2xsb3dpbmcgbnVtYmVyIGp1c3RcbiAgICAgKiByZXByZXNlbnRzIHRoZSBvZmZzZXQgdG8gaXRzIHByZXZpb3VzIG5laWdoYm9yLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBtb3N0bHkgZWZmaWNpZW50IGZvciBoaWdoIG51bWJlcnMsIHRoYXQgYXJlIFwiY2xvc2UgdG8gZWFjaCBvdGhlclwiLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiAgIFsxMzM3LCAxMSwgMTAxLCAxMjMsIDk2LCA2OSwgNDIsIDQyXVxuICAgICAqICAgd2lsbCBiZSBzb3J0ZWRcbiAgICAgKiAgIFsxMSwgNDIsIDQyLCA2OSwgOTYsIDEwMSwgMTIzLCAxMzM3XVxuICAgICAqICAgYW5kIGVuY29kZWQgdG9cbiAgICAgKiAgIFsxMSwgMzEsIDAsIDI3LCAyNywgNSwgMjIsIDEyMTRdXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YUVuY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKGFycklucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGFycklucHV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSk7XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gYXJySW5wdXRbMF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gYXJySW5wdXRbaV0gLSBhcnJJbnB1dFtpIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFFbmNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgZGVsdGEtZW5jb2RlZCBhcnJheS5cbiAgICAgKiBTZWUgYGRlbHRhRW5jb2RlYCBmdW5jdGlvbiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRGVjb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gcGFyc2VJbnQoYXJySW5wdXRbMF0sIDEwKTtcbiAgICAgIGlmIChpc05hTihhcnJJbnB1dFswXSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IHBhcnNlSW50KGFycklucHV0W2ldLCAxMCkgKyBhcnJPdXRwdXRbaSAtIDFdO1xuICAgICAgICBpZiAoaXNOYU4oYXJyT3V0cHV0W2ldKSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRGVjb2RlKClcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBjYWxsIGZ1bmN0aW9ucyBpbiBgYXJySG9va0Z1bmN0aW9uc2Agd2l0aCBnaXZlbiBgcGFyYW1ldGVyc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8ZnVuY3Rpb24+fSAgIGFyckhvb2tGdW5jdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7bWl4ZWR9ICAgICAgICAgICAgIHBhcmFtZXRlcnMgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjYWxsSG9va0Z1bmN0aW9uczogZnVuY3Rpb24gKGFyckhvb2tGdW5jdGlvbnMsIHBhcmFtZXRlcnMpIHtcbiAgICAgIHZhciBqO1xuXG4gICAgICBpZiAoYXJySG9va0Z1bmN0aW9ucyAmJiBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyckhvb2tGdW5jdGlvbnNbal0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyckhvb2tGdW5jdGlvbnNbal0ocGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiY2FsbEhvb2tGdW5jdGlvbnMoKVwiXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgaGV4LWZvcm1hdGVkIGNvbG9yIHZhbHVlIGludG8gcmdiYSgpLWZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgaGV4ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIG9wdF9vcGFjaXR5ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5OiBmdW5jdGlvbiAoaGV4LCBvcHRfb3BhY2l0eSwgb3B0X2FycmF5KSB7XG5cbiAgICAgIHZhciBiaWdpbnQsIHIsIGcsIGIsIGE7XG5cbiAgICAgIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgIG9wdF9vcGFjaXR5LnZhbHVlID0gcGFyc2VJbnQob3B0X29wYWNpdHkudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgdHlwZW9mIG9wdF9vcGFjaXR5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdF9vcGFjaXR5ID09PSAnb2JqZWN0JyAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gb3B0X29wYWNpdHkudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICBiID0gYmlnaW50ICYgMjU1O1xuICAgICAgYSA9IG9wdF9vcGFjaXR5ID8gKG9wdF9vcGFjaXR5IC8gMTAwKSA6IDE7XG4gICAgICBpZihvcHRfYXJyYXkpe1xuICAgICAgICByZXR1cm4gW3IsZyxiLGFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgYSBkZWZpbmVkIHN0eWxlLCB0byBhIHNpbXBsZXIgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSByZWR1Y2VkIHN0eWxlIGlzIHRoZSBmaXJzdCBzdHlsZSBvZiB0aGUgZGVmaW5lZCBzdHlsZXNldCxcbiAgICAgKiB3aXRoIGEgMXB4IHRoaWNrIHN0cm9rZSBhbmQgYSBjaXJjbGUgd2l0aCBhIDVweCByYWRpdXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYWRkaXRpb25hbCBnZW9tZXRyaWVzIHdpdGggYSBtYWluLWdlb21ldHJ5LFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGRlZmluZSBhIHdob2xlIG5ldyBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ8c3RyaW5nfSAgICAgICAgICAgc3R5bGVJZCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG9sLnN0eWxlLlN0eWxlPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVkdWNlU3R5bGU6IGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICB2YXIgc3R5bGUsXG4gICAgICAgICAgcmVkdWNlZFN0eWxlLFxuICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2VTdHlsZTtcblxuICAgICAgaWYgKCFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXSB8fCAhYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IGM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKClbMF07XG5cbiAgICAgIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgICBzdHJva2VTdHlsZS5zZXRXaWR0aCgxKTtcblxuICAgICAgcmVkdWNlZFN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdGV4dDogc3R5bGUuZ2V0VGV4dCgpLFxuICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3JlZHVjZWRTdHlsZV07XG4gICAgfSwgLy8gZW5kIG9mIFwicmVkdWNlU3R5bGVcIlxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZ2l2ZW4gZ2VvbWV0cnkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2VvbWV0cnkgaXMgYSBgTGluZVN0cmluZ2AgdGhlIGZ1bmN0aW9uIHdpbGwgbWVhc3VyZSBpdHMgbGVuZ3RoLFxuICAgICAqIGlzIGl0IGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSB0aGUgYWNyZWFnZSxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYDBgLlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIGBvcHRfZm9yY2VMaW5lTWVhc3VyZWAgcGFyYW1ldGVyIGlzIGB0cnVlYFxuICAgICAqIGFuZCB0aGUgZ2VvbWV0cnkgaXMgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIGl0cyBwZXJpbWV0ZXIgaW5zdGVhZFxuICAgICAqIG9mIGl0cyBhY3JlYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLmdlb20uTGluZVN0cmluZ3xvbC5nZW9tLlBvbHlnb259ICAgZ2VvbWV0cnkgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICBvcHRfZm9yY2VMaW5lTWVhc3VyZSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PHN0cmluZz58bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtZWFzdXJlR2VvbWV0cnk6IGZ1bmN0aW9uIChnZW9tZXRyeSwgb3B0X2ZvcmNlTGluZU1lYXN1cmUsIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgc3BoZXJlLFxuICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIGNvb3JkMSxcbiAgICAgICAgICBjb29yZDIsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL3NwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nIHx8IChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbiAmJiBvcHRfZm9yY2VMaW5lTWVhc3VyZSkpIHtcblxuICAgICAgICBjb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgY29vcmQxID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgY29vcmQyID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaSArIDFdLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIHZhbHVlICs9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShjb29yZDEsIGNvb3JkMiwgNjM3ODEzNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAvL2dlb21ldHJ5ID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovKGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpO1xuICAgICAgICAvL2Nvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0TGluZWFyUmluZygwKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKG9sLnNwaGVyZS5nZXRBcmVhKGdlb21ldHJ5KSk7XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUgJiYgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YWx1ZSA9IE1hdGguUEkgKiBNYXRoLnNxcnQodmFsdWUpO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnJhd1ZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKCh2YWx1ZSAqIDEwMCkgLyAxMDApIC8gMTAwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBleHRlbnQgZm9yIGFuIGFycmF5IG9mIGdlb21ldHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG9sLmdlb20uc2ltcGxlR2VvbWV0cnk+fSAgYXJyR2VvbWV0cmllcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge29sLkV4dGVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzOiBmdW5jdGlvbiAoYXJyR2VvbWV0cmllcykge1xuICAgICAgdmFyIGV4dGVudFNvdXJjZTtcblxuICAgICAgaWYgKCFhcnJHZW9tZXRyaWVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR2VvbWV0cmllcyBtaXNzaW5nIGZvciBleHRlbnQgY2FsY3VsYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBleHRlbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgZXh0ZW50U291cmNlLmFkZEZlYXR1cmVzKGFyckdlb21ldHJpZXMpO1xuXG4gICAgICByZXR1cm4gZXh0ZW50U291cmNlLmdldEV4dGVudCgpIHx8IG9sLkV4dGVudChbMCwgMCwgMCwgMF0pO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzKClcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYXJyYXkgb2YgYGV4dGVudHNgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgIGV4dGVudHMgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50czogZnVuY3Rpb24gKGV4dGVudHMsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBpZiAoIWV4dGVudHMgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vZXh0ZW50ID0gb2wuZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgICAgIGZvciAoa2V5IGluIGV4dGVudHMpIHtcbiAgICAgICAgaWYgKGV4dGVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnQgPSBleHRlbnRzW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sLmV4dGVudC5leHRlbmQoZXh0ZW50LCBleHRlbnRzW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0VG9FeHRlbnQoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCA1LCAwLCAwLCAyKTtcblxuXG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50c1xuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBgZXh0ZW50YC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5FeHRlbnR9ICBleHRlbnQgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2FycmF5fSAgICAgIG9wdF9wYWRkaW5nICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9tYXhab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluUmVzb2x1dGlvbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudDogZnVuY3Rpb24gKGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uLCBvcHRfbWluWm9vbSwgb3B0X21heFpvb20sIG9wdF9taW5SZXNvbHV0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGZpdE9wdGlvbnM7XG5cbiAgICAgIGlmICghZXh0ZW50IHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBmaXRPcHRpb25zID0ge1xuICAgICAgICAncGFkZGluZyc6IG9wdF9wYWRkaW5nIHx8IFsyNSwgMjUsIDI1LCAyNV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRfbWluUmVzb2x1dGlvbiAmJiBvcHRfbWluUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5SZXNvbHV0aW9uID0gb3B0X21pblJlc29sdXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWluWm9vbSAmJiBvcHRfbWluWm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluWm9vbSA9IG9wdF9taW5ab29tO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21heFpvb20gJiYgb3B0X21heFpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1heFpvb20gPSBvcHRfbWF4Wm9vbTtcbiAgICAgIH1cblxuICAgICAgLy8gYW5pbWF0ZSB0aGUgXCJmaXR0aW5nXCIgd2hlbiBhIGR1cmF0aW9uIGlzIGdpdmVuIGFuZCBpdHMgZ3JlYXRlciB0aGFuIDBcbiAgICAgIGlmIChvcHRfYW5pbWF0aW9uRHVyYXRpb24gJiYgb3B0X2FuaW1hdGlvbkR1cmF0aW9uID4gMCkge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gbWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHNvdXJjZTogdmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSwge3BhZGRpbmc6IFsyNSwgMjUsIDI1LCAyNV19KTtcbiAgICAgICAgLy92aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCkpO1xuICAgICAgICAvL3ZpZXcuc2V0Wm9vbSh2aWV3LmdldFpvb20oKS0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnQoKVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcnVuIGFsbCBwbGFjZWhvbGRlciBmdW5jdGlvbnMgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIHN0cklucHV0ICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgICAgICAgICAgICAgIGZlYXR1cmUgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllciB8IHVuZGVmaW5lZH0gIG9wdF9sYXllciAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUFsbFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpcnN0IHR3byBwYXJhbWV0ZXJzIGFzIHRoZXkgd2lsbCBiZSB1c2VkIGJ5IGFsbCBwbGFjZWhvbGRlci1mdW5jdGlvbnNcbiAgICAgIC8vIC0+IGZvciBwZXJmb3JtYW5jZVxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7Rk5mdW5jdGlvbk5hbWV9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYHdpbmRvdy5mdW5jdGlvbk5hbWUoZmVhdHVyZSwgc3R5bGUpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICogU3R5bGUgd2lsbCBiZSB0YWtlbiBlaXRoZXIgZnJvbSB0aGUgZmVhdHVyZSwgb3IgdGhlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllcn0gIGxheWVyICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBsYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCAhbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHtGTihbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZnVuY3Rpb25OYW1lLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmdW5jdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHN0eWxlXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldFN0eWxlKCkgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYXllci5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2Z1bmN0aW9uTmFtZV0oZmVhdHVyZSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzLCBpbiBgc3RySW5wdXRgLCBmb3IgdmFyaWFibGVzIHNldCBieSB0aGUgZ2VvRWRpdG9yLlxuICAgICAqIFZhbGlkIHBsYWNlaG9sZGVycyBhcmU6IChba2V5XSByZXByZXNlbnRzIHRoZSBzdHJpbmduYW1lIG9mIHRoZSB2YXJpYWJsZXMga2V5KVxuICAgICAqICAgYCR7RUxba2V5XX1gICAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWTFtrZXldfWAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlLCBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgKiAgIGAke0VWW2tleV19YCAgID0+ICBWYWx1ZSBvZiB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWVltrZXldfWAgID0+ICBTYW1lIGFzIGAke0VWW2tleV19YFxuICAgICAqXG4gICAgICogSWYgbm8gYXBwcm9wcmlhdGUgdmFsdWUgY2FuIGJlIGZvdW5kIGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogaXQgd2lsbCBzaW1wbHkgYmUgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhFVj9bTFZdKShbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgZXZLZXksIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGhhcyBlZGl0b3JWYXJzXG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKSkge1xuICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBlZGl0b3JWYXIgd2l0aCBrZXkgPT0gZXZLZXlcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVkaXRvclZhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yVmFyc1tpXS5rZXkgPT09IGV2S2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0eXBlIGlzICdFVkwnIGRpc3BsYXkgbGFiZWwgb25seSBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRUwnIHx8ICh0eXBlID09PSAnRVZMJyAmJiBlZGl0b3JWYXJzW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7YXR0cn1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgZmVhdHVyZS5nZXQoYXR0cilgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgYXR0ciwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldChhdHRyKSB8fCAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoKVxuXG4gICAgb2JqZWN0VG9BcnJheTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmplY3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwgLy8gZW5kIG9mIG9iamVjdFRvQXJyYXkoKVxuXG4gICAgZ2V0VmVjdG9yTGF5ZXIoc291cmNlLCBzdHlsZSkge1xuICAgICAgICB2YXIgZm5TdHlsZTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3R5bGUgaXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm5TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBzdHlsZTogZm5TdHlsZVxuICAgICAgICB9KTtcbiAgICB9LC8vIGVuZCBvZiBcImdldFZlY3RvckxheWVyKClcIlxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHN1YmRvbWFpbiBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgaG9zdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgKn1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3ViZG9tYWluKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICByZWRyYXdNYXBWaWV3OiBmdW5jdGlvbiAobWFwQ29udHJvbGxlcikge1xuICAgICAgdmFyIG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICBtYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgbWFwQ29udHJvbGxlci5sZWZ0U2xpZGVFbGVtZW50cy5wdXNoKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgICAgaWYgKG1hcERhdGEuc2NhbGVsaW5lKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSA9IG5ldyBvbC5jb250cm9sLlNjYWxlTGluZSh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuXG4gICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IFpvb21sZXZlbCh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8ICcnO1xuICAgIH0sXG4gICAgc3RvcmVWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7IC8vIG9ubHkgc3RyaW5nc1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIHV0aWxzID0gdGhpcy5jNGcubWFwcy51dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==