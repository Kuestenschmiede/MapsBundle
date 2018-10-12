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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-portside-measuretools.js");
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

/***/ "./Resources/public/js/c4g-maps-control-portside-measuretools.js":
/*!***********************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-measuretools.js ***!
  \***********************************************************************/
/*! exports provided: Measuretools */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Measuretools", function() { return Measuretools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_control_sideboard__ = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};






(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */

  c4g.maps.control.Measuretools = function (opt_options) {

    // extend options
    this.options = $.extend({
      name: 'measure',
      headline: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].MEASURETOOLS,
      create: true,
      mapController: undefined,
      direction: 'left',
      firstElement: true
    }, opt_options);

    this.mainSection = document.createElement('div');

    // call parent constructor
    __WEBPACK_IMPORTED_MODULE_3__c4g_maps_control_sideboard__["Sideboard"].call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Measuretools, __WEBPACK_IMPORTED_MODULE_3__c4g_maps_control_sideboard__["Sideboard"]);

  /**
   * Methods
   */
  c4g.maps.control.Measuretools.prototype = $.extend(c4g.maps.control.Measuretools.prototype, {

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    init: function init() {

      this.spinner.show();

      // Add measure layers
      this.measureLineLayer = new ol.layer.Vector({ source: new ol.source.Vector() });
      this.measurePolygonLayer = new ol.layer.Vector({ source: new ol.source.Vector() });
      this.measureCircleLayer = new ol.layer.Vector({ source: new ol.source.Vector() });
      this.measureFreehandLayer = new ol.layer.Vector({ source: new ol.source.Vector() });

      this.measureLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([this.measureFreehandLayer, this.measureCircleLayer, this.measurePolygonLayer, this.measureLineLayer]),
        visible: true
      });
      this.options.mapController.map.addLayer(this.measureLayerGroup);

      // Add and activate measure-Views
      this.viewMeasureSelect = this.addSelectView();
      this.viewMeasureSelect.activate();
      this.viewMeasureLine = this.addMeasureView({ type: 'LineString' });
      this.viewMeasureArea = this.addMeasureView({ type: 'Polygon' });
      this.viewMeasureRadius = this.addMeasureView({ type: 'Circle' });
      this.viewMeasureFreehand = this.addMeasureView({ type: 'Freehand' });

      // set content-section
      this.mainSectionInfo = document.createElement('p');
      this.mainSectionInfo.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].MEASURETOOLS_INFO;
      this.mainSectionInfo.innerHTML += '<br><br><sub>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].MEASURETOOLS_INFO_ADDITIONAL + '<sub>';
      this.mainSection.appendChild(this.mainSectionInfo);
      this.contentContainer.appendChild(this.mainSection);

      this.spinner.hide();
      return true;
    }, // end of "init()"

    /**
     * Executed before panel will be closed
     *
     * @return  {[type]}  [description]
     */
    preCloseFunction: function preCloseFunction() {
      var lineFeatures, polygonFeatures, circleFeatures, freehandFeatures, i;

      if (this.measureLayerGroup.getVisible()) {
        this.measureLayerGroup.setVisible(false);

        // hide line-feature tooltips
        lineFeatures = this.measureLineLayer.getSource().getFeatures();
        for (i = 0; i < lineFeatures.length; i += 1) {
          lineFeatures[i].get('tooltip').hide();
        }
        // hide polygon-feature tooltips
        polygonFeatures = this.measurePolygonLayer.getSource().getFeatures();
        for (i = 0; i < polygonFeatures.length; i += 1) {
          polygonFeatures[i].get('tooltip').hide();
        }
        // hide circle-feature tooltips
        circleFeatures = this.measureCircleLayer.getSource().getFeatures();
        for (i = 0; i < circleFeatures.length; i += 1) {
          circleFeatures[i].get('tooltip').hide();
        }
        // hide freehand-feature tooltips
        freehandFeatures = this.measureFreehandLayer.getSource().getFeatures();
        for (i = 0; i < freehandFeatures.length; i += 1) {
          freehandFeatures[i].get('tooltip').hide();
        }
      }
    }, // end of "preCloseFunction()"

    /**
     * Executed before panel will be opened
     *
     * @return  {[type]}  [description]
     */
    preOpenFunction: function preOpenFunction() {
      var lineFeatures, polygonFeatures, circleFeatures, freehandFeatures, i;

      if (!this.measureLayerGroup.getVisible()) {
        this.measureLayerGroup.setVisible(true);

        // show line-feature tooltips
        lineFeatures = this.measureLineLayer.getSource().getFeatures();
        for (i = 0; i < lineFeatures.length; i += 1) {
          lineFeatures[i].get('tooltip').show();
        }
        // show polygon-feature tooltips
        polygonFeatures = this.measurePolygonLayer.getSource().getFeatures();
        for (i = 0; i < polygonFeatures.length; i += 1) {
          polygonFeatures[i].get('tooltip').show();
        }
        // show circle-feature tooltips
        circleFeatures = this.measureCircleLayer.getSource().getFeatures();
        for (i = 0; i < circleFeatures.length; i += 1) {
          circleFeatures[i].get('tooltip').show();
        }
        // show freehand-feature tooltips
        freehandFeatures = this.measureFreehandLayer.getSource().getFeatures();
        for (i = 0; i < freehandFeatures.length; i += 1) {
          freehandFeatures[i].get('tooltip').show();
        }
      }
    }, // end of "preOpenFunction()"

    /**
     * @TODO: [addSelectView description]
     */
    addSelectView: function addSelectView() {
      var selectView;

      selectView = this.addView({
        name: 'select',
        triggerConfig: {
          tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].MEASURETOOLS_VIEW_TRIGGER_SELECT,
          className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].MEASURETOOLS_VIEW_TRIGGER_SELECT,
          withHeadline: true
        },
        sectionElements: [{ section: this.contentContainer, element: this.mainSection }, { section: this.topToolbar, element: this.viewTriggerBar }]
      });

      return selectView;
    }, // end of "addSelectView()"

    /**
     * @TODO: [addMeasureView description]
     *
     * @param  {[type]}  options  [description]
     */
    addMeasureView: function addMeasureView(options) {
      var self, TRIGGER_DRAW, measureView, source, interaction, features, olType;

      self = this;

      options = $.extend({
        type: 'LineString'
      }, options);

      TRIGGER_DRAW = 'MEASURETOOLS_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();

      measureView = self.addView({
        name: 'draw:' + options.type.toLowerCase(),
        triggerConfig: {
          tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"][TRIGGER_DRAW],
          className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"][TRIGGER_DRAW],
          withHeadline: true
        },
        sectionElements: [{ section: self.topToolbar, element: self.viewTriggerBar }],
        initFunction: function initFunction() {
          var featureIdCount, activeSketch, activeTooltip, addMeasureFeature, updateMeasureFeature, getValueOfGeometry, getLengthOfMeasure, removeMeasureFeature;

          // Show loading animation
          self.spinner.show();

          featureIdCount = 1;

          if (options.type.toLowerCase() === 'freehand') {
            source = self.measureFreehandLayer.getSource();
          } else if (options.type.toLowerCase() === 'circle') {
            source = self.measureCircleLayer.getSource();
          } else if (options.type.toLowerCase() === 'polygon') {
            source = self.measurePolygonLayer.getSource();
          } else {
            source = self.measureLineLayer.getSource();
          }

          features = new ol.Collection();

          olType = options.type;
          if (olType == 'Freehand') {
            olType = 'LineString';
          }
          interaction = new ol.interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: options.type == 'Freehand'
            // @TODO: use custom style? (BE-option)
            // style: use default style
          });

          addMeasureFeature = function addMeasureFeature(feature) {
            var listElement, headlineElement, labelElement, inputElement, paragraphElement, strongElement, spanElement, strLabel, strType, measureArea, measureRadius;

            if (!feature instanceof ol.Feature) {
              return false;
            }

            // check if the infomessage needs to be removed
            if (self.mainSection.childElementCount === 1 && self.mainSection.children[0] === self.mainSectionInfo) {
              self.mainSection.removeChild(self.mainSectionInfo);
            }

            // check feature-type
            if (feature.getGeometry() instanceof ol.geom.LineString) {
              strLabel = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].LENGTH;
              strType = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].LINE;
              measureArea = false;
              measureRadius = false;
            } else if (feature.getGeometry() instanceof ol.geom.Polygon) {
              strLabel = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].PERIMETER;
              strType = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].POLYGON;
              measureArea = true;
              measureRadius = false;
            } else if (feature.getGeometry() instanceof ol.geom.Circle) {
              strLabel = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].RADIUS;
              strType = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].CIRCLE;
              measureArea = true;
              measureRadius = true;
            } else {
              //freehand ist LineString too
              strLabel = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].LENGTH;
              strType = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].FREEHAND;
              measureArea = false;
              measureRadius = false;
            }

            // create list element
            listElement = document.createElement('div');

            // create and append headline
            headlineElement = document.createElement('div');
            headlineElement.className = 'c4g_maps_portside_measure_element';
            if (self.options.firstElement) {
              headlineElement.className = 'c4g_maps_portside_measure_element c4g_maps_portside_measure_element_first';
              self.options.firstElement = false;
            }
            listElement.appendChild(headlineElement);

            // create and append label for name-inputfield
            labelElement = document.createElement('label');
            labelElement.setAttribute('for', 'measureElement_' + featureIdCount);
            labelElement.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].NAME + ': ';
            headlineElement.appendChild(labelElement);

            // create and append name-inputfield
            inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.name = 'measureElement_' + featureIdCount;
            inputElement.value = strType + ' ' + featureIdCount;
            // attach-change-handler
            $(inputElement).change(function (event) {
              updateMeasureFeature(feature);
            });
            headlineElement.appendChild(inputElement);
            feature.set('listElementValueName', inputElement);

            // create and append paragraphs
            paragraphElement = document.createElement('p');
            paragraphElement.className = 'c4g_maps_portside_measure_paragraph';
            strongElement = document.createElement('strong');
            strongElement.innerHTML = strLabel + ': ';
            paragraphElement.appendChild(strongElement);
            spanElement = document.createElement('span');
            spanElement.innerHTML = '...';
            paragraphElement.appendChild(spanElement);
            listElement.appendChild(paragraphElement);
            feature.set('listElementValueLine', spanElement);

            if (measureArea) {
              paragraphElement = document.createElement('p');
              paragraphElement.className = 'c4g_maps_portside_measure_paragraph_surfacearea';
              strongElement = document.createElement('strong');
              strongElement.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].SURFACEAREA + ': ';
              paragraphElement.appendChild(strongElement);
              spanElement = document.createElement('span');
              spanElement.innerHTML = '...';
              paragraphElement.appendChild(spanElement);
              listElement.appendChild(paragraphElement);
              feature.set('listElementValueArea', spanElement);
            }

            if (measureRadius) {
              // paragraphElement = document.createElement('p');
              // paragraphElement.className = 'c4g_maps_portside_measure_paragraph_surfacearea';
              // strongElement = document.createElement('strong');
              // strongElement.innerHTML = langConstants.SURFACEAREA + ': ';
              // paragraphElement.appendChild(strongElement);
              // spanElement = document.createElement('span');
              // spanElement.innerHTML = '...';
              // paragraphElement.appendChild(spanElement);
              // listElement.appendChild(paragraphElement);
              feature.set('listElementValueRadius', spanElement);
            }

            // increase the id-counter
            featureIdCount += 1;

            // append element to the list
            self.mainSection.appendChild(listElement);
            // attach element to the feature
            feature.set('listElement', listElement);

            self.update();
          }; // end of "addMeasureFeature()"

          updateMeasureFeature = function updateMeasureFeature(feature) {
            var featureTooltip, newContent, name, length, area, radius;

            featureTooltip = feature.get('tooltip');
            name = feature.get('listElementValueName').value;
            length = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].measureGeometry(feature.getGeometry(), true);
            newContent = '<strong>' + name + '</strong><br>';

            feature.set('measuredLength', length);
            feature.get('listElementValueLine').innerHTML = length.htmlValue;
            if (feature.get('geometryType') === 'circle') {
              radius = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].measureGeometry(feature.getGeometry());
              feature.set('measuredRadius', radius);
              feature.get('listElementValueRadius').innerHTML = radius.htmlValue;
              newContent += radius.htmlValue;

              area = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].measureGeometry(feature.getGeometry(), false, true);
              feature.set('measuredArea', area);
              feature.get('listElementValueArea').innerHTML = area.htmlValue;
              // newContent += area.htmlValue;
            } else if (feature.get('geometryType') === 'polygon') {
              area = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].measureGeometry(feature.getGeometry());
              feature.set('measuredArea', area);
              feature.get('listElementValueArea').innerHTML = area.htmlValue;
              newContent += area.htmlValue;
            } else {
              newContent += length.htmlValue;
            }
            featureTooltip.setContent(newContent);
          }; // end of "updateMeasureFeature()"

          removeMeasureFeature = function removeMeasureFeature(feature) {
            self.mainSection.removeChild(feature.get('listElement'));

            // last element? -> add infomessage
            if (self.mainSection.childElementCount < 1) {
              self.mainSection.appendChild(self.mainSectionInfo);
              self.update();
            }
          }; // end of "removeMeasureFeature()"

          //Start Workaround
          getValueOfGeometry = function getValueOfGeometry(feature) {
            var leng = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].measureGeometry(feature.getGeometry(), true);
            // feature.set('measuredLength', length);
            var val = leng.htmlValue;
            var valuenumb = val.match(/\d/g);
            valuenumb = valuenumb.join("");
            return valuenumb;
          };

          getLengthOfMeasure = function getLengthOfMeasure() {
            var length = '0.00 m';
            var lengthnumb = length.match(/\d/g);
            lengthnumb = lengthnumb.join("");
            lengthnumb = +8;
            return lengthnumb;
          }; // End Workaround

          interaction.on('drawstart', function (event) {
            activeSketch = event.feature;
            // create tooltip
            activeTooltip = new c4g.maps.misc.TooltipPopUp({
              map: self.options.mapController.map,
              position: event.coordinate,
              horizontal: true,
              closeable: true,
              closeFunction: function closeFunction() {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();
                if (val != leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  source.removeFeature(event.feature);
                } else {
                  removeMeasureFeature(event.feature);
                }
              }
            });

            activeSketch.set('tooltip', activeTooltip);
            activeSketch.set('geometryType', options.type.toLowerCase());
            addMeasureFeature(activeSketch);
          }, self);

          self.options.mapController.map.on('pointermove', function (event) {
            if (activeSketch && activeTooltip) {
              activeTooltip.setPosition(event.coordinate);
              updateMeasureFeature(activeSketch);
            }
          }, self);

          interaction.on('drawend', function (event) {
            if (activeSketch && activeTooltip) {
              updateMeasureFeature(activeSketch);
              activeSketch = null;
              activeTooltip = null;
            }
          }, self);

          self.spinner.hide();
          return true;
        },
        activateFunction: function activateFunction() {

          // disable mapHover
          self.options.mapController.mapHover.deactivate();

          features.clear();

          // Enable interaction
          self.options.mapController.map.addInteraction(interaction);
        },
        deactivateFunction: function deactivateFunction() {

          // reactivate mapHover
          self.options.mapController.mapHover.activate();

          if (options.type.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {
              // 0_o
            }
          }

          // Remove from map
          self.options.mapController.map.removeInteraction(interaction);
        }
      });

      return measureView;
    } // end of "addMeasureView()"

  });
})(jQuery, this.c4g);

var Measuretools = this.c4g.maps.control.Measuretools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLW1lYXN1cmV0b29scy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc2lkZWJvYXJkLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29uc3RhbnQiLCIkIiwiaTE4biIsImV4dGVuZCIsIkxBTkciLCJOQU1FIiwiSElERSIsIkNMT1NFIiwiUE9JTlQiLCJGUkVFSEFORCIsIkxJTkUiLCJQT0xZR09OIiwiQ0lSQ0xFIiwiUEVSSU1FVEVSIiwiTEVOR1RIIiwiU1VSRkFDRUFSRUEiLCJSQURJVVMiLCJSRUZSRVNIIiwiQ09QWV9UT19DTElQQk9BUkQiLCJDVFJMX1pPT01fSU4iLCJDVFJMX1pPT01fT1VUIiwiQ1RSTF9aT09NX0VYVCIsIkNUUkxfWk9PTV9IT01FIiwiQ1RSTF9aT09NX1BPUyIsIkNUUkxfWk9PTV9TTElERVIiLCJDVFJMX1JFU0VUX1JPVEFUSU9OIiwiQ1RSTF9QT1JUU0lERSIsIkNUUkxfUk9VVEVSIiwiQ1RSTF9FRElUT1IiLCJDVFJMX01FQVNVUkVUT09MUyIsIkNUUkxfSU5GT1BBR0UiLCJDVFJMX0FERElUSU9OQUxQQU5FTCIsIkNUUkxfQUNDT1VOVCIsIkNUUkxfWk9PTUxFVkVMIiwiQ1RSTF9NT1VTRUNPT1JEUyIsIkNUUkxfR0VPU0VBUkNIIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJDVFJMX09WRVJWSUVXTUFQIiwiQ1RSTF9HRU9CT09LTUFSS1MiLCJDVFJMX1NJREVCT0FSRCIsIkNUUkxfU1RBUkJPQVJEIiwiQ1RSTF9BVFRSSUJVVElPTiIsIkNUUkxfR1JJRCIsIkNUUkxfUEVSTUFMSU5LIiwiQ1RSTF9GVUxMU0NSRUVOIiwiQ1RSTF9QUklOVCIsIkVESVRPUiIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJQT1BVUF9ST1VURV9GUk9NIiwiUE9QVVBfUk9VVEVfVE8iLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQkFTRUxBWUVSIiwiU1RBUkJPQVJEX0xBWUVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsIlNJREVCT0FSRCIsIlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQiLCJST1VURVJfRlJPTV9MQUJFTCIsIlJPVVRFUl9PVkVSX0xBQkVMIiwiUk9VVEVSX1RPX0xBQkVMIiwiUk9VVEVSX0NMRUFSX1RJVExFIiwiUk9VVEVSX0NMRUFSX0hUTUwiLCJST1VURVJfTGFiZWxfSW50ZXJpbSIsIlJPVVRFUl9TV0lUQ0giLCJST1VURVJfT1ZFUiIsIlJPVVRFUl9QUklOVCIsIlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UiLCJST1VURVJfVklFV19MQUJFTF9USU1FIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRSIsIlJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1MiLCJST1VURVJfVklFV19BTEVSVF9HT0NPRElORyIsIlJPVVRFUiIsIlJPVVRFUl9OIiwiUk9VVEVSX0UiLCJST1VURVJfUyIsIlJPVVRFUl9XIiwiUk9VVEVSX05FIiwiUk9VVEVSX1NFIiwiUk9VVEVSX1NXIiwiUk9VVEVSX05XIiwiUk9VVEVSX0RJUkVDVElPTl8wIiwiUk9VVEVSX0RJUkVDVElPTl8xIiwiUk9VVEVSX0RJUkVDVElPTl8yIiwiUk9VVEVSX0RJUkVDVElPTl8zIiwiUk9VVEVSX0RJUkVDVElPTl80IiwiUk9VVEVSX0RJUkVDVElPTl81IiwiUk9VVEVSX0RJUkVDVElPTl82IiwiUk9VVEVSX0RJUkVDVElPTl83IiwiUk9VVEVSX0RJUkVDVElPTl84IiwiUk9VVEVSX0RJUkVDVElPTl8xMCIsIlJPVVRFUl9ESVJFQ1RJT05fMTUiLCJST1VURVJfRlJPTSIsIlJPVVRFUl9UTyIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiUk9VVEVSX0xPQ19ST1VURV9UTyIsIlJPVVRFUl9ST1VURURFU0MiLCJST1VURVJfUk9VVEVOQU1FIiwiUk9VVEVSX0RJU1RBTkNFIiwiUk9VVEVSX1RJTUUiLCJST1VURVJfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX1NFQVJDSElORyIsIlJPVVRFUl9FUlJPUl9TRUFSQ0hJTkciLCJST1VURVJfQ0FMQ19ST1VURSIsIlJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFIiwiTUVBU1VSRVRPT0xTIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkdFT0JPT0tNQVJLU19QTEFDRUhPTERFUiIsIklORk9QQUdFIiwiQURESVRJT05BTFBBTkVMIiwiQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUiIsIkFDQ09VTlQiLCJBQ0NPVU5UX1ZJRVdfVFJJR0dFUiIsIlNFQVJDSF9OT1RfRk9VTkQiLCJOT05FIiwialF1ZXJ5IiwibGFuZ0NvbnN0YW50cyIsImNzcyIsIk9QRU4iLCJDTE9TRUFCTEUiLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiUFJJTlQiLCJJTkZPUEFHRV9WSUVXX1RSSUdHRVIiLCJPVkVSVklFV01BUCIsIk9WRVJWSUVXTUFQX1dSQVBQRVIiLCJHRU9CT09LTUFSS1MiLCJQRVJNQUxJTksiLCJQRVJNQUxJTktfUE9QVVAiLCJQT1BVUF9DTE9TRSIsIlBPUFVQX1JPVVRFX1dSQVBQRVIiLCJQT1JUU0lERSIsIlBPUlRTSURFX0NPTlRBSU5FUiIsIlBPUlRTSURFX0NPTlRST0wiLCJQT1JUU0lERV9XUkFQUEVSIiwiUE9SVFNJREVfVElUTEVCQVIiLCJQT1JUU0lERV9UT1BfVE9PTEJBUiIsIlBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSIiwiUE9SVFNJREVfQk9UVE9NX1RPT0xCQVIiLCJQT1JUU0lERV9TVEFUVVNCQVIiLCJQT1JUU0lERV9WSUVXVFJJR0dFUkJBUiIsIlBPUlRTSURFX0hFQURMSU5FIiwiUE9SVFNJREVfQlVUVE9OQkFSIiwiUE9SVFNJREVfQlVUVE9OIiwiUE9SVFNJREVfSElERSIsIlBPUlRTSURFX0NMT1NFIiwiU1BJTk5FUiIsIlNUQVJCT0FSRF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQ09OVFJPTCIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU1RBUkJPQVJEX1RJVExFQkFSIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSIiwiU1RBUkJPQVJEX1NUQVRVU0JBUiIsIlNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUiIsIlNUQVJCT0FSRF9IRUFETElORSIsIlNUQVJCT0FSRF9CVVRUT05CQVIiLCJTVEFSQk9BUkRfQlVUVE9OIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRSIsIlNUQVJCT0FSRF9MQVlFUlRSRUUiLCJTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSIiwiVE9PTFRJUF9QT1BVUCIsIlpPT01fTEVWRUwiLCJST1VURVJfSU5QVVRfV1JBUFBFUiIsIlJPVVRFUl9QUk9GSUxFX1dSQVBQRVIiLCJST1VURVJfSU5QVVRfRlJPTSIsIlJPVVRFUl9JTlBVVF9UTyIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSIiwiUk9VVEVSX1BST0ZJTEVfQ0FSIiwiUk9VVEVSX1BST0ZJTEVfSEdWIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX09WRVJMQVlDT05UQUlORVIiLCJPTF9PVkVSTEFZQ09OVEFJTkVSX1NFIiwiT0xfVklFV1BPUlQiLCJPTF9aT09NIiwiT0xfWk9PTV9JTiIsIk9MX1pPT01fRVhUIiwiT0xfWk9PTV9IT01FIiwiT0xfWk9PTV9QT1MiLCJPTF9aT09NX1dJVEhfRVhUIiwiT0xfWk9PTV9XSVRIX0hPTUUiLCJPTF9aT09NX1dJVEhfUE9TIiwiT0xfWk9PTV9TTElERVIiLCJPTF9aT09NX1dJVEhfU0xJREVSIiwiY3NzQ29uc3RhbnRzIiwiY29udHJvbCIsIk1lYXN1cmV0b29scyIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsIm5hbWUiLCJoZWFkbGluZSIsImNyZWF0ZSIsIm1hcENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJkaXJlY3Rpb24iLCJmaXJzdEVsZW1lbnQiLCJtYWluU2VjdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIlNpZGVib2FyZCIsImNhbGwiLCJvbCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwiaW5pdCIsInNwaW5uZXIiLCJzaG93IiwibWVhc3VyZUxpbmVMYXllciIsImxheWVyIiwiVmVjdG9yIiwic291cmNlIiwibWVhc3VyZVBvbHlnb25MYXllciIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVGcmVlaGFuZExheWVyIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsIkNvbGxlY3Rpb24iLCJ2aXNpYmxlIiwibWFwIiwiYWRkTGF5ZXIiLCJ2aWV3TWVhc3VyZVNlbGVjdCIsImFkZFNlbGVjdFZpZXciLCJhY3RpdmF0ZSIsInZpZXdNZWFzdXJlTGluZSIsImFkZE1lYXN1cmVWaWV3IiwidHlwZSIsInZpZXdNZWFzdXJlQXJlYSIsInZpZXdNZWFzdXJlUmFkaXVzIiwidmlld01lYXN1cmVGcmVlaGFuZCIsIm1haW5TZWN0aW9uSW5mbyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY29udGVudENvbnRhaW5lciIsImhpZGUiLCJwcmVDbG9zZUZ1bmN0aW9uIiwibGluZUZlYXR1cmVzIiwicG9seWdvbkZlYXR1cmVzIiwiY2lyY2xlRmVhdHVyZXMiLCJmcmVlaGFuZEZlYXR1cmVzIiwiaSIsImdldFZpc2libGUiLCJzZXRWaXNpYmxlIiwiZ2V0U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJsZW5ndGgiLCJnZXQiLCJwcmVPcGVuRnVuY3Rpb24iLCJzZWxlY3RWaWV3IiwiYWRkVmlldyIsInRyaWdnZXJDb25maWciLCJ0aXBMYWJlbCIsImNsYXNzTmFtZSIsIndpdGhIZWFkbGluZSIsInNlY3Rpb25FbGVtZW50cyIsInNlY3Rpb24iLCJlbGVtZW50IiwidG9wVG9vbGJhciIsInZpZXdUcmlnZ2VyQmFyIiwic2VsZiIsIlRSSUdHRVJfRFJBVyIsIm1lYXN1cmVWaWV3IiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlcyIsIm9sVHlwZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbml0RnVuY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsInVwZGF0ZU1lYXN1cmVGZWF0dXJlIiwiZ2V0VmFsdWVPZkdlb21ldHJ5IiwiZ2V0TGVuZ3RoT2ZNZWFzdXJlIiwicmVtb3ZlTWVhc3VyZUZlYXR1cmUiLCJEcmF3IiwiZnJlZWhhbmQiLCJmZWF0dXJlIiwibGlzdEVsZW1lbnQiLCJoZWFkbGluZUVsZW1lbnQiLCJsYWJlbEVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJwYXJhZ3JhcGhFbGVtZW50Iiwic3Ryb25nRWxlbWVudCIsInNwYW5FbGVtZW50Iiwic3RyTGFiZWwiLCJzdHJUeXBlIiwibWVhc3VyZUFyZWEiLCJtZWFzdXJlUmFkaXVzIiwiRmVhdHVyZSIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGRyZW4iLCJyZW1vdmVDaGlsZCIsImdldEdlb21ldHJ5IiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJQb2x5Z29uIiwiQ2lyY2xlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjaGFuZ2UiLCJldmVudCIsInNldCIsInVwZGF0ZSIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsImFyZWEiLCJyYWRpdXMiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsImh0bWxWYWx1ZSIsInNldENvbnRlbnQiLCJsZW5nIiwidmFsIiwidmFsdWVudW1iIiwibWF0Y2giLCJqb2luIiwibGVuZ3RobnVtYiIsIm9uIiwibWlzYyIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwicmVtb3ZlRmVhdHVyZSIsInNldFBvc2l0aW9uIiwiYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsImNsZWFyIiwiYWRkSW50ZXJhY3Rpb24iLCJkZWFjdGl2YXRlRnVuY3Rpb24iLCJmaW5pc2hEcmF3aW5nIiwiaWdub3JlIiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJleHREaXYiLCJkZWZhdWx0T3BlbiIsImlkZW50aWZpZXIiLCJjc3NuYW1lIiwiaW5pdGlhbGl6ZWQiLCJjb250YWluZXIiLCJidXR0b24iLCJ3cmFwcGVyIiwidGl0bGVCYXIiLCJib3R0b21Ub29sYmFyIiwic3RhdHVzQmFyIiwic2VjdGlvbnMiLCJ2aWV3cyIsImFjdGl2ZVZpZXciLCJwYXVzZWRWaWV3IiwiQ29udHJvbCIsInRhcmdldCIsImluaXRDbGFzcyIsInRpdGxlQnV0dG9uQmFyIiwiY2xvc2VCdXR0b24iLCJjYXBpdGFsaXplZE5hbWUiLCJoaWRlQnV0dG9uIiwiY2FjaGluZyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJlIiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwidG9nZ2xlIiwidGl0bGUiLCJhZGRDbGFzcyIsInN0eWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRUYXJnZXQiLCJhcHBlbmQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhZGRTZWN0aW9uIiwiY29udGVudEhlYWRsaW5lIiwiU3Bpbm5lciIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjbG9zZSIsImdldFZhbHVlIiwib3BlbiIsIm9wdF9ldmVudCIsImNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCIsImNvbnRhaW5lck9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJkaXNwbGF5Iiwib2Zmc2V0V2lkdGgiLCJmb3JFYWNoIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInN0b3JlVmFsdWUiLCJwb3N0T3BlbkZ1bmN0aW9uIiwiaXNPcGVuIiwib3B0X2hpZGUiLCJvcHRfb3Blbk90aGVyU2lkZWJvYXJkIiwicHJlSGlkZUZ1bmN0aW9uIiwibWFrZUJ1dHRvbiIsImxhYmVsIiwiY2xpY2tBY3Rpb24iLCJpZCIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwibmV3RWxlbWVudCIsInB1c2giLCJvcHRfdmlld1Njb3BlIiwidmlld1Njb3BlIiwiYWRkaXRpb25hbFRyaWdnZXJDbGFzcyIsInRyaWdnZXIiLCJ2aWV3IiwicGF1c2VkIiwib3B0X29wZW5TaWRlYm9hcmQiLCJvcHRfcGF1c2UiLCJab29tbGV2ZWwiLCJ1cGRhdGVab29tbGV2ZWwiLCJtYXBWaWV3IiwidW5kZWZpbmVkSFRNTCIsImdldFpvb20iLCJwYXJzZUludCIsInNwaW5uZXJTcGFuIiwiYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyIiwic3RyaW5nIiwiY2hhckF0Iiwic2xpY2UiLCJnZXRVbmlxdWVJZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImVuY29kZUdlb0pzb25Qcm9wZXJ0eSIsImlucHV0Iiwib3V0cHV0IiwicmVwbGFjZSIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImhhc2giLCJzZWFyY2giLCJrZXkiLCJvZmZzZXQiLCJvcmlnaW5TdHJpbmciLCJnZXRVcmxQYXJhbSIsInJlZ0V4Iiwic3Vic3RyaW5nIiwiUmVnRXhwIiwiZXhlYyIsImRlbHRhRW5jb2RlIiwiYXJySW5wdXQiLCJhcnJPdXRwdXQiLCJzb3J0IiwiYSIsImIiLCJkZWx0YURlY29kZSIsImlzTmFOIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJhcnJIb29rRnVuY3Rpb25zIiwicGFyYW1ldGVycyIsImoiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJoZXgiLCJvcHRfb3BhY2l0eSIsIm9wdF9hcnJheSIsImJpZ2ludCIsInIiLCJnIiwicmVkdWNlU3R5bGUiLCJzdHlsZUlkIiwicmVkdWNlZFN0eWxlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsb2NhdGlvblN0eWxlcyIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJzZXRXaWR0aCIsIlN0eWxlIiwiaW1hZ2UiLCJmaWxsIiwic3Ryb2tlIiwiZ2VvbWV0cnkiLCJvcHRfZm9yY2VMaW5lTWVhc3VyZSIsIm9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlIiwic3BoZXJlIiwiY29vcmRpbmF0ZXMiLCJjb29yZDEiLCJjb29yZDIiLCJyZXN1bHQiLCJnZXRDb29yZGluYXRlcyIsInByb2oiLCJ0cmFuc2Zvcm0iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJ0b0ZpeGVkIiwiYWJzIiwiZ2V0QXJlYSIsImNlbnRlciIsImdldENlbnRlciIsImdldFJhZGl1cyIsImVkZ2VDb29yZGluYXRlIiwiUEkiLCJzcXJ0IiwiZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcyIsImFyckdlb21ldHJpZXMiLCJleHRlbnRTb3VyY2UiLCJhZGRGZWF0dXJlcyIsImdldEV4dGVudCIsIkV4dGVudCIsImZpdFRvRXh0ZW50cyIsImV4dGVudHMiLCJvcHRfcGFkZGluZyIsIm9wdF9hbmltYXRpb25EdXJhdGlvbiIsInBhZGRpbmciLCJleHRlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsImdldFZpZXciLCJtaW5SZXNvbHV0aW9uIiwibWluWm9vbSIsIm1heFpvb20iLCJhbmltYXRlIiwic3RhcnQiLCJEYXRlIiwiZHVyYXRpb24iLCJyZXNvbHV0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsImZpdCIsImdldFNpemUiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwic3RySW5wdXQiLCJvcHRfbGF5ZXIiLCJzdHJPdXRwdXQiLCJyZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMiLCJyZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyIsInJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMiLCJmdW5jdGlvbk5hbWUiLCJ3aW5kb3ciLCJnZXRTdHlsZSIsImV2S2V5IiwiZWRpdG9yVmFycyIsImF0dHIiLCJvYmplY3RUb0FycmF5Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImdldFZlY3RvckxheWVyIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJocmVmIiwicmVkcmF3TWFwVmlldyIsIm1hcERhdGEiLCJkYXRhIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJzY2FsZWxpbmUiLCJyZW1vdmVDb250cm9sIiwiY29udHJvbHMiLCJTY2FsZUxpbmUiLCJhZGRDb250cm9sIiwiem9vbWxldmVsIiwibW91c2Vwb3NpdGlvbiIsIk1vdXNlUG9zaXRpb24iLCJwcm9qZWN0aW9uIiwiY29vcmRpbmF0ZUZvcm1hdCIsInRvU3RyaW5nSERNUyIsImxvY2FsU3RvcmFnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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dG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1wb3J0c2lkZS1tZWFzdXJldG9vbHMuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBMYW5ndWFnZSBjb25zdGFudHMgKGVuKVxuICAgKi9cbiAgYzRnLm1hcHMuY29uc3RhbnQuaTE4biA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4sIHtcblxuICAgIExBTkc6ICdkZScsXG5cbiAgICBOQU1FOiAnTmFtZScsXG4gICAgSElERTogJ1p1a2xhcHBlbicsXG4gICAgQ0xPU0U6ICdTY2hsaWXDn2VuJyxcbiAgICBQT0lOVDogJ1BPSScsXG4gICAgRlJFRUhBTkQ6ICdGcmVpaGFuZCcsXG4gICAgTElORTogJ0xpbmllJyxcbiAgICBQT0xZR09OOiAnRmzDpGNoZScsXG4gICAgQ0lSQ0xFOiAnUmFkaXVzJyxcbiAgICBQRVJJTUVURVI6ICdVbWZhbmcnLFxuICAgIExFTkdUSDogJ0zDpG5nZScsXG4gICAgU1VSRkFDRUFSRUE6ICdGbMOkY2hlbmluaGFsdCcsXG4gICAgUkFESVVTOiAnUmFkaXVzJyxcbiAgICBSRUZSRVNIOiAnQWt0dWFsaXNpZXJlbicsXG4gICAgQ09QWV9UT19DTElQQk9BUkQ6ICdJbiBad2lzY2hlbmFibGFnZSBrb3BpZXJlbicsXG5cbiAgICBDVFJMX1pPT01fSU46ICdWZXJncsO2w59lcm4nLFxuICAgIENUUkxfWk9PTV9PVVQ6ICdWZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0VYVDogJ01heGltYWwgdmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9IT01FOiAnWnVyIHVyc3Byw7xuZ2xpY2hlbiBQb3NpdGlvbicsXG4gICAgQ1RSTF9aT09NX1BPUzogJ1p1bSBha3R1ZWxsZW4gU3RhbmRvcnQnLFxuICAgIENUUkxfWk9PTV9TTElERVI6ICdab29tIFNsaWRlcicsXG4gICAgQ1RSTF9SRVNFVF9ST1RBVElPTjogJ1JvdGF0aW9uICh0b3VjaCwgYWx0K21vdXNlKSB6dXLDvGNrc2V0emVuJyxcbiAgICBDVFJMX1BPUlRTSURFOiAnUG9ydHNpZGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1JPVVRFUjogJ1JvdXRlciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9NRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9JTkZPUEFHRTogJ0luZm9zZWl0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQURESVRJT05BTFBBTkVMOiAnUGFuZWwgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FDQ09VTlQ6ICdBY2NvdW50IGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9aT09NTEVWRUw6ICdab29tJyxcbiAgICBDVFJMX01PVVNFQ09PUkRTOiAnTG9uL0xhdCcsXG4gICAgQ1RSTF9HRU9TRUFSQ0g6ICdTdWNoZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUlRfU0VBUkNIOiAnU3VjaGUgc3RhcnRlbicsXG4gICAgQ1RSTF9PVkVSVklFV01BUDogJ8OcYmVyc2ljaHRza2FydGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0dFT0JPT0tNQVJLUzogJ0Zhdm9yaXRlbiB2ZXJ3YWx0ZW4nLFxuICAgIENUUkxfU0lERUJPQVJEOiAnU2lkZWJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSQk9BUkQ6ICdTdGFyYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FUVFJJQlVUSU9OOiAnQXR0cmlidXRpb24gYW56ZWlnZW4nLFxuICAgIENUUkxfR1JJRDogJ0dpdHRlciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUEVSTUFMSU5LOiAnUGVybWFsaW5rIGdlbmVyaWVyZW4nLFxuICAgIENUUkxfRlVMTFNDUkVFTjogJ1ZvbGxiaWxkbW9kdXMgZWluLS9hdXNzY2hhbHRlbicsXG4gICAgQ1RSTF9QUklOVDogJ0thcnRlIGV4cG9ydGllcmVuJyxcblxuICAgIEVESVRPUjogJ0VkaXRvcicsXG4gICAgRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkU6ICdNZXNzZW4gd8OkaHJlbmQgZGVzIFplaWNobmVucycsXG4gICAgRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnRWRpdGllcmVuIGJlZW5kZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ0VsZW1lbnQgbMO2c2NoZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ0VsZW1lbnQgZWRpdGllcmVuIC8gdmVyc2NoaWViZW4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GTzogJ1p1ciBBdXN3YWhsIGVpbiBFbGVtZW50IGF1ZiBkZXIgS2FydGUgYW5rbGlja2VuLicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUw6ICdbU3RyZ10gKyBbS2xpY2tdIGbDvHIgTWVocmZhY2hhdXN3YWhsIDxicj5bU2hpZnRdIGhhbHRlbiBmw7xyIEF1c3dhaGxib3gnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnS2FydGVuZWxlbWVudGUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kd2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVud2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnS3JlaXN3ZXJremV1Z2UnLFxuXG4gICAgUE9QVVBfUk9VVEVfRlJPTTogJ1JvdXRlIHZvbiBoaWVyJyxcbiAgICBQT1BVUF9ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuXG4gICAgU1RBUkJPQVJEOiAnU3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9MQVlFUjogJ0ViZW5lbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdLYXJ0ZW5lbGVtZW50ZScsXG5cbiAgICBTSURFQk9BUkQ6ICdTaWRlYm9hcmQnLFxuXG4gICAgUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVDogJ1JvdXRlIGZpbmRlbicsXG4gICAgUk9VVEVSX0ZST01fTEFCRUw6ICdTdGFydCcsXG4gICAgUk9VVEVSX09WRVJfTEFCRUw6ICdad2lzY2hlbnppZWwnLFxuICAgIFJPVVRFUl9UT19MQUJFTDogJ1ppZWwnLFxuICAgIFJPVVRFUl9DTEVBUl9USVRMRTogJ0zDtnNjaGVuJyxcbiAgICBST1VURVJfQ0xFQVJfSFRNTDogJycsXG4gICAgUk9VVEVSX0xhYmVsX0ludGVyaW06ICdad2lzY2hlbnppZWwnLFxuXG4gICAgUk9VVEVSX1NXSVRDSDonV2VjaHNlbCB2b24gU3RhcnQgdW5kIFppZWwnLFxuICAgIFJPVVRFUl9PVkVSOidad2lzY2hlbnppZWwgaGluenVmw7xnZW4nLFxuICAgIFJPVVRFUl9QUklOVDonUm91dGVuYmVzY2hyZWlidW5nIGRydWNrZW4nLFxuXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEU6ICdSb3V0ZTonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFOiAnRW50ZmVybnVuZzonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1RJTUU6ICdaZWl0OicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRTogJ1Byb2ZpbDonLFxuXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4uJyxcbiAgICBST1VURVJfVklFV19BTEVSVF9HT0NPRElORzogJ1p1Z3JpZmYgYXVmIEdlb2NvZGVyIGZlaGxnZXNjaGxhZ2VuLicsXG5cbiAgICBST1VURVI6ICdSb3V0ZXInLFxuICAgIFJPVVRFUl9OOiAnTm9yZGVuJyxcbiAgICBST1VURVJfRTogJ09zdCcsXG4gICAgUk9VVEVSX1M6ICdTw7xkZW4nLFxuICAgIFJPVVRFUl9XOiAnV2VzdGVuJyxcbiAgICBST1VURVJfTkU6ICdOb3Jkb3N0JyxcbiAgICBST1VURVJfU0U6ICdTw7xkb3N0JyxcbiAgICBST1VURVJfU1c6ICdTw7xkd2VzdCcsXG4gICAgUk9VVEVSX05XOiAnTm9yZHdlc3QnLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMDogJ1VuYmVrYW5udGUgQW53ZWlzdW5nWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xOiAnR2VyYWRlYXVzIHdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMjogJ0xlaWNodCByZWNodHMgYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzM6ICdSZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzQ6ICdTY2hhcmYgcmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl81OiAnV2VuZGVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl82OiAnU2NoYXJmIGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl83OiAnTGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzg6ICdMZWljaHQgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzEwOiAnRmFocmVuIFNpZSBSaWNodHVuZyA8Yj4lZDwvYj5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0xJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZXJzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTInOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB6d2VpdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTMnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBkcml0dGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTQnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB2aWVydGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTUnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBmw7xuZnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS02JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2VjaHN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNpZWJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGFjaHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS05JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgbmV1bnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS14JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZWluZXIgZGVyIHZpZWxlbiBNw7ZnbGljaGtlaXRlblsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTU6ICdTaWUgaGFiZW4gSWhyIFppZWwgZXJyZWljaHQnLFxuXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8wJzogJyAlbSBmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEnOiAnICVtIGRlbSBTdHJhw59lbnZlcmxhdWYgZm9sZ2VuWyBhbHMgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8yJzogJyBGYWhyZW4gU2llWyBhdWYgPGI+JXM8L2I+XSBsb3MnLFxuICAgICdST1VURVJfNS5YX1RZUEVfMyc6ICcgRGFzIFppZWwgYmVmaW5kZXQgc2ljaCA8Yj4lbTwvYj4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNCc6ICcgV2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV81JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYXVmZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzYnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hYmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV83JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV84JzogJyAlbSBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOSc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTAnOiAnICVtIGZhaHJlbiB1bSBhdWYgZGVyIFN0cmHDn2UgenUgYmxlaWJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMSc6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTInOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEzJzogJyAlbSBmYWhyZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzE0JzogJyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuXG4gICAgJ1JPVVRFUl81LlhfTU9EXzAnICA6ICdVdHVybicsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzEnICA6ICdTY2hhcmYgcmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMicgIDogJ1JlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzMnICA6ICdMZWljaHQgcmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNCcgIDogJ0dlcmFkZWF1cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzUnICA6ICdMZWljaHQgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF82JyAgOiAnTGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF83JyAgOiAnU2NoYXJmIGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfOCcgIDogJ2luIGRlciBOw6RoZScsXG5cbiAgICBST1VURVJfRlJPTTogJ1N0YXJ0JyxcbiAgICBST1VURVJfVE86ICdaaWVsJyxcbiAgICBST1VURVJfRklORF9ST1VURTogJ1JvdXRlIGZpbmRlbicsXG4gICAgUk9VVEVSX0xPQ19ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuICAgIFJPVVRFUl9ST1VURURFU0M6ICdSb3V0ZW5iZXNjaHJlaWJ1bmcnLFxuICAgIFJPVVRFUl9ST1VURU5BTUU6ICdSb3V0ZScsXG4gICAgUk9VVEVSX0RJU1RBTkNFOiAnRGlzdGFueicsXG4gICAgUk9VVEVSX1RJTUU6ICdaZWl0JyxcbiAgICBST1VURVJfUkVWX0dFT0NPRElORzogJ0VybWl0dGxlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HOiAnRmVobGVyIGJlaW0gRXJtaXR0ZWxuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfU0VBUkNISU5HOiAnU3VjaGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1NFQVJDSElORzogJ0ZlaGxlciBiZWltIFN1Y2hlbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX0NBTENfUk9VVEU6ICdCZXJlY2huZSBSb3V0ZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX0NBTENfUk9VVEU6ICdGZWhsZXIgYmVpbSBCZXJlY2huZW4gZGVyIFJvdXRlJyxcblxuICAgIE1FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UnLFxuICAgIE1FQVNVUkVUT09MU19JTkZPOiAnV8OkaGxlbiBTaWUgd2VpdGVyIHVudGVuIGVpbmVuIE1lc3N0eXAgYXVzIHVuZCBzdGFydGVuIFNpZSBkaWUgTWVzc3VuZyBkdXJjaCBkYXMgS2xpY2tlbiBhdWYgZGVyIEthcnRlLicsXG4gICAgTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTDogJyhFaW56ZWxuZSBNZXNzdW5nZW4ga8O2bm5lbiBtaXQgZWluZW0gRG9wcGVsa2xpY2sgYmVlbmRldCB3ZXJkZW4uKScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2VuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdSYWRpdXMgbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZCBtZXNzZW4nLFxuXG4gICAgR0VPQk9PS01BUktTX1BMQUNFSE9MREVSOiAnTmV1ZSBCZXplaWNobnVuZycsXG5cbiAgICBJTkZPUEFHRTogJ0luZm9ybWF0aW9uZW4nLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ1BhbmVsJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnUGFuZWwgYW56ZWlnZW4nLFxuICAgIEFDQ09VTlQ6ICdBY2NvdW50JyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ0FjY291bnQgYW56ZWlnZW4nLFxuXG4gICAgU0VBUkNIX05PVF9GT1VORDogJ0RpZSBMb2thdGlvbiBrb25udGUgbmljaHQgZ2VmdW5kZW4gd2VyZGVuLiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVpbmUgYW5kZXJlIEVpbmdhYmUuJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwibGFuZ3VhZ2UgY29uc3RhbnRzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGxhbmdDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmkxOG47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ1NTIGNvbnN0YW50c1xuICAgKi9cbiAgYzRnLm1hcHMuY29uc3RhbnQuY3NzID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuY3NzLCB7XG5cbiAgICBPUEVOOiAnYzRnLW9wZW4nLFxuICAgIENMT1NFOiAnYzRnLWNsb3NlJyxcbiAgICBDTE9TRUFCTEU6ICdjNGctY2xvc2VhYmxlJyxcbiAgICBFTkFCTEVEOiAnYzRnLWVuYWJsZWQnLFxuICAgIERJU0FCTEVEOiAnYzRnLWRpc2FibGVkJyxcbiAgICBISURFOiAnYzRnLWhpZGUnLFxuICAgIElDT046ICdjNGctaWNvbicsXG4gICAgQ09OVFJPTDogJ2M0Zy1jb250cm9sJyxcbiAgICBDT1BZOiAnYzRnLWNvcHknLFxuICAgIFJFRlJFU0g6ICdjNGctcmVmcmVzaCcsXG4gICAgQUNUSVZFOiAnYzRnLWFjdGl2ZScsXG4gICAgSU5BQ1RJVkU6ICdjNGctaW5hY3RpdmUnLFxuICAgIExPQURJTkc6ICdjNGctbG9hZGluZycsXG4gICAgQU5JTUFUSU9OX1NQSU46ICdjNGctYW5pbWF0aW9uLXNwaW4nLFxuICAgIExBUkdFOiAnYzRnLWxhcmdlJyxcbiAgICBTTUFMTDogJ2M0Zy1zbWFsbCcsXG4gICAgSE9SSVpPTlRBTDogJ2M0Zy1ob3Jpem9udGFsJyxcbiAgICBWRVJUSUNBTDogJ2M0Zy12ZXJ0aWNhbCcsXG5cbiAgICBBVFRSSUJVVElPTl9MT0dPOiAnYzRnLWF0dHJpYnV0aW9uLWxvZ28nLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RMOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1sZWZ0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UUjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtcmlnaHQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQtc3ViJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CUjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tcmlnaHQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQ6ICdjNGctZHJhdy1jb250ZW50LXBvaW50JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EOiAnYzRnLWRyYXctY29udGVudC1mcmVlaGFuZCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HOiAnYzRnLWRyYXctY29udGVudC1saW5lJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT046ICdjNGctZHJhdy1jb250ZW50LXBvbHlnb24nLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFOiAnYzRnLWRyYXctY29udGVudC1jaXJjbGUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcHJvamVjdCcsXG4gICAgRURJVE9SX0RSQVdfVFJJR0dFUjogJ2M0Zy1kcmF3LXRyaWdnZXInLFxuICAgIEVESVRPUl9DT05URU5UX1NFTEVDVDogJ2M0Zy1jb250ZW50LXNlbGVjdCcsXG4gICAgRURJVE9SX0RSQVdfT1BUSU9OUzogJ2M0Zy1lZGl0b3ItZHJhdy1vcHRpb25zJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1hcHBseScsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnYzRnLWVkaXRvci1mZWF0dXJlLWRlbGV0ZScsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnYzRnLWVkaXRvci1mZWF0dXJlLW1vZGlmeScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctcG9pbnQnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBHRU9TRUFSQ0g6ICdjNGctZ2Vvc2VhcmNoJyxcbiAgICBHRU9TRUFSQ0hfV1JBUFBFUjogJ2M0Zy1nZW9zZWFyY2gtd3JhcHBlcicsXG4gICAgR0VPU0VBUkNIX1RSSUdHRVI6ICdjNGctZ2Vvc2VhcmNoLXRyaWdnZXInLFxuICAgIEdFT1NFQVJDSF9TVEFSVDogJ2M0Zy1nZW9zZWFyY2gtc3RhcnQnLFxuICAgIEdSQVRJQ1VMRTogJ2M0Zy1ncmF0aWN1bGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgUFJJTlQ6J2M0Zy1wcmludCcsXG4gICAgSU5GT1BBR0VfVklFV19UUklHR0VSOiAnYzRnLWluZm9wYWdlLXZpZXctdHJpZ2dlcicsXG4gICAgSU5GT1BBR0U6ICdjNGctaW5mb3BhZ2UnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdjNGctYWRkaXRpb25hbHBhbmVsLXZpZXctdHJpZ2dlcicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnYzRnLWFkZGl0aW9uYWxwYW5lbCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdjNGctYWNjb3VudC12aWV3LXRyaWdnZXInLFxuICAgIEFDQ09VTlQ6ICdjNGctYWNjb3VudCcsXG4gICAgT1ZFUlZJRVdNQVA6ICdjNGctb3ZlcnZpZXdtYXAnLFxuICAgIE9WRVJWSUVXTUFQX1dSQVBQRVI6ICdjNGctb3ZlcnZpZXdtYXAtd3JhcHBlcicsXG4gICAgR0VPQk9PS01BUktTOiAnYzRnLWdlb2Jvb2ttYXJrcycsXG4gICAgUEVSTUFMSU5LOiAnYzRnLXBlcm1hbGluaycsXG4gICAgUEVSTUFMSU5LX1BPUFVQOiAnYzRnLXBlcm1hbGluay1wb3B1cCcsXG4gICAgUE9QVVBfQ0xPU0U6ICdjNGctcG9wdXAtY2xvc2UnLFxuICAgIFBPUFVQX1JPVVRFX1dSQVBQRVI6ICdjNGctcG9wdXAtcm91dGUtd3JhcHBlcicsXG4gICAgUE9QVVBfUk9VVEVfRlJPTTogJ2M0Zy1wb3B1cC1yb3V0ZS1mcm9tJyxcbiAgICBQT1BVUF9ST1VURV9UTzogJ2M0Zy1wb3B1cC1yb3V0ZS10bycsXG4gICAgUE9SVFNJREU6ICdjNGctcG9ydHNpZGUnLFxuICAgIFBPUlRTSURFX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0NPTlRST0w6ICdjNGctcG9ydHNpZGUtY29udHJvbCcsXG4gICAgUE9SVFNJREVfV1JBUFBFUjogJ2M0Zy1wb3J0c2lkZS13cmFwcGVyJyxcbiAgICBQT1JUU0lERV9USVRMRUJBUjogJ2M0Zy1wb3J0c2lkZS10aXRsZWJhcicsXG4gICAgUE9SVFNJREVfVE9QX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtdG9wLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9CT1RUT01fVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS1ib3R0b20tdG9vbGJhcicsXG4gICAgUE9SVFNJREVfU1RBVFVTQkFSOiAnYzRnLXBvcnRzaWRlLXN0YXR1c2JhcicsXG4gICAgUE9SVFNJREVfVklFV1RSSUdHRVJCQVI6ICdjNGctcG9ydHNpZGUtdmlld3RyaWdnZXJiYXInLFxuICAgIFBPUlRTSURFX0hFQURMSU5FOiAnYzRnLXBvcnRzaWRlLWhlYWRsaW5lJyxcbiAgICBQT1JUU0lERV9CVVRUT05CQVI6ICdjNGctcG9ydHNpZGUtYnV0dG9uYmFyJyxcbiAgICBQT1JUU0lERV9CVVRUT046ICdjNGctcG9ydHNpZGUtYnV0dG9uJyxcbiAgICBQT1JUU0lERV9ISURFOiAnYzRnLXBvcnRzaWRlLWhpZGUnLFxuICAgIFBPUlRTSURFX0NMT1NFOiAnYzRnLXBvcnRzaWRlLWNsb3NlJyxcbiAgICBTUElOTkVSOiAnYzRnLXNwaW5uZXInLFxuICAgIFNUQVJCT0FSRDogJ2M0Zy1zdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9DT05UQUlORVI6ICdjNGctc3RhcmJvYXJkLWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0NPTlRST0w6ICdjNGctc3RhcmJvYXJkLWNvbnRyb2wnLFxuICAgIFNUQVJCT0FSRF9XUkFQUEVSOiAnYzRnLXN0YXJib2FyZC13cmFwcGVyJyxcbiAgICBTVEFSQk9BUkRfVElUTEVCQVI6ICdjNGctc3RhcmJvYXJkLXRpdGxlYmFyJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctc3RhcmJvYXJkLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVI6ICdjNGctc3RhcmJvYXJkLWJvdHRvbS10b29sYmFyJyxcbiAgICBTVEFSQk9BUkRfU1RBVFVTQkFSOiAnYzRnLXN0YXJib2FyZC1zdGF0dXNiYXInLFxuICAgIFNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1zdGFyYm9hcmQtdmlld3RyaWdnZXJiYXInLFxuICAgIFNUQVJCT0FSRF9IRUFETElORTogJ2M0Zy1zdGFyYm9hcmQtaGVhZGxpbmUnLFxuICAgIFNUQVJCT0FSRF9CVVRUT05CQVI6ICdjNGctc3RhcmJvYXJkLWJ1dHRvbmJhcicsXG4gICAgU1RBUkJPQVJEX0JVVFRPTjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItYmFzZWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9DTE9TRTogJ2M0Zy1zdGFyYm9hcmQtY2xvc2UnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSOiAnYzRnLWNvbnRlbnQtYmFzZWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFOiAnYzRnLWJhc2VsYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9MQVlFUlRSRUU6ICdjNGctbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSOiAnYzRnLWNvbnRlbnQtbGF5ZXJzd2l0Y2hlcicsXG4gICAgVE9PTFRJUF9QT1BVUDogJ2M0Zy10b29sdGlwLXBvcHVwJyxcbiAgICBaT09NX0xFVkVMOiAnYzRnLXpvb20tbGV2ZWwnLFxuXG4gICAgUk9VVEVSX0lOUFVUX1dSQVBQRVI6ICdjNGctcm91dGVyLWlucHV0LXdyYXBwZXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX1dSQVBQRVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOUFVUX0ZST006ICdjNGctcm91dGVyLWlucHV0LWZyb20nLFxuICAgIFJPVVRFUl9JTlBVVF9UTzogJ2M0Zy1yb3V0ZXItaW5wdXQtdG8nLFxuICAgIFJPVVRFUl9JTlBVVF9DTEVBUjogJ2M0Zy1yb3V0ZXItaW5wdXQtY2xlYXInLFxuICAgIFJPVVRFUl9CVVRUT05CQVI6ICdjNGctcm91dGVyLWJ1dHRvbmJhcicsXG4gICAgUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVI6ICdjNGctcm91dGVyLWF0dHJpYnV0aW9uLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtaGVhZGVyJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6ICdjNGctcm91dGVyLXN3aXRjaCcsXG4gICAgUk9VVEVSX09WRVI6ICdjNGctcm91dGVyLW92ZXInLFxuICAgIFJPVVRFUl9QUklOVDogJ2M0Zy1yb3V0ZXItcHJpbnQnLFxuXG4gICAgUk9VVEVSX1BST0ZJTEVfQ0FSOiAnYzRnLXJvdXRlci1wcm9maWxlLWNhcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfSEdWOiAnYzRnLXJvdXRlci1wcm9maWxlLWhndicsXG4gICAgUk9VVEVSX1BST0ZJTEVfQklLRTogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1iaWtlJyxcbiAgICBST1VURVJfUFJPRklMRV9GT09UOiAnYzRnLXJvdXRlci1wcm9maWxlLWZvb3QnLFxuICAgIFJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd2hlZWxjaGFpcicsXG5cblxuXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tdGFibGUnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tb2RkJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tZXZlbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24taWNvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX3RleHQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0U6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlzdGFuY2UnLFxuXG4gICAgT0xfQ09OVFJPTDogJ29sLWNvbnRyb2wnLFxuICAgIE9MX1VOU0VMRUNUQUJMRTogJ29sLXVuc2VsZWN0YWJsZScsXG5cbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSOiAnb2wtb3ZlcmxheWNvbnRhaW5lcicsXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRTogJ29sLW92ZXJsYXljb250YWluZXItc3RvcGV2ZW50JyxcbiAgICBPTF9WSUVXUE9SVDogJ29sLXZpZXdwb3J0JyxcbiAgICBPTF9aT09NOiAnb2wtem9vbScsXG4gICAgT0xfWk9PTV9JTjogJ29sLXpvb20taW4nLFxuICAgIE9MX1pPT01fRVhUOiAnb2wtem9vbS1leHRlbnQnLFxuICAgIE9MX1pPT01fSE9NRTogJ29sLXpvb20taG9tZScsXG4gICAgT0xfWk9PTV9QT1M6ICdvbC16b29tLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1dJVEhfRVhUOiAnb2wtem9vbS13aXRoLWV4dGVudCcsXG4gICAgT0xfWk9PTV9XSVRIX0hPTUU6ICdvbC16b29tLXdpdGgtaG9tZScsXG4gICAgT0xfWk9PTV9XSVRIX1BPUzogJ29sLXpvb20td2l0aC1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9TTElERVI6ICdvbC16b29tLXNsaWRlcicsXG4gICAgT0xfWk9PTV9XSVRIX1NMSURFUjogJ29sLXpvb20td2l0aC1zbGlkZXInLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGNzc0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuY3NzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtTaWRlYm9hcmR9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnRyb2wtc2lkZWJvYXJkXCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmQge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBtYXBDb250cm9sbGVyICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLk1lYXN1cmV0b29scyA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgLy8gZXh0ZW5kIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBuYW1lOiAnbWVhc3VyZScsXG4gICAgICBoZWFkbGluZTogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFMsXG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBtYXBDb250cm9sbGVyOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgIGZpcnN0RWxlbWVudDogdHJ1ZVxuICAgIH0sIG9wdF9vcHRpb25zKTtcblxuICAgIHRoaXMubWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGNhbGwgcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgU2lkZWJvYXJkLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5NZWFzdXJldG9vbHMsIFNpZGVib2FyZCk7XG5cbiAgLyoqXG4gICAqIE1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuTWVhc3VyZXRvb2xzLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuTWVhc3VyZXRvb2xzLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZWQgd2hlbiB0aGUgcGFuZWwgd2lsbCBiZSBvcGVuZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICBSZXR1cm5zIHx0cnVlfCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAvLyBBZGQgbWVhc3VyZSBsYXllcnNcbiAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe3NvdXJjZTogbmV3IG9sLnNvdXJjZS5WZWN0b3IoKX0pO1xuICAgICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7c291cmNlOiBuZXcgb2wuc291cmNlLlZlY3RvcigpfSk7XG4gICAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe3NvdXJjZTogbmV3IG9sLnNvdXJjZS5WZWN0b3IoKX0pO1xuICAgICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe3NvdXJjZTogbmV3IG9sLnNvdXJjZS5WZWN0b3IoKX0pO1xuXG4gICAgICB0aGlzLm1lYXN1cmVMYXllckdyb3VwID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgbGF5ZXJzOiBuZXcgb2wuQ29sbGVjdGlvbihbXG4gICAgICAgICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllcixcbiAgICAgICAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllcixcbiAgICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgICAgdGhpcy5tZWFzdXJlTGluZUxheWVyLFxuICAgICAgICBdKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAgIC8vIEFkZCBhbmQgYWN0aXZhdGUgbWVhc3VyZS1WaWV3c1xuICAgICAgdGhpcy52aWV3TWVhc3VyZVNlbGVjdCA9IHRoaXMuYWRkU2VsZWN0VmlldygpO1xuICAgICAgdGhpcy52aWV3TWVhc3VyZVNlbGVjdC5hY3RpdmF0ZSgpO1xuICAgICAgdGhpcy52aWV3TWVhc3VyZUxpbmUgPSB0aGlzLmFkZE1lYXN1cmVWaWV3KHt0eXBlOiAnTGluZVN0cmluZyd9KTtcbiAgICAgIHRoaXMudmlld01lYXN1cmVBcmVhID0gdGhpcy5hZGRNZWFzdXJlVmlldyh7dHlwZTogJ1BvbHlnb24nfSk7XG4gICAgICB0aGlzLnZpZXdNZWFzdXJlUmFkaXVzID0gdGhpcy5hZGRNZWFzdXJlVmlldyh7dHlwZTogJ0NpcmNsZSd9KTtcbiAgICAgIHRoaXMudmlld01lYXN1cmVGcmVlaGFuZCA9IHRoaXMuYWRkTWVhc3VyZVZpZXcoe3R5cGU6ICdGcmVlaGFuZCd9KTtcblxuICAgICAgLy8gc2V0IGNvbnRlbnQtc2VjdGlvblxuICAgICAgdGhpcy5tYWluU2VjdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0aGlzLm1haW5TZWN0aW9uSW5mby5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19JTkZPO1xuICAgICAgdGhpcy5tYWluU2VjdGlvbkluZm8uaW5uZXJIVE1MICs9ICc8YnI+PGJyPjxzdWI+JyArIGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCArICc8c3ViPic7XG4gICAgICB0aGlzLm1haW5TZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMubWFpblNlY3Rpb25JbmZvKTtcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1haW5TZWN0aW9uKTtcblxuICAgICAgdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlZCBiZWZvcmUgcGFuZWwgd2lsbCBiZSBjbG9zZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcHJlQ2xvc2VGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpbmVGZWF0dXJlcyxcbiAgICAgICAgICBwb2x5Z29uRmVhdHVyZXMsXG4gICAgICAgICAgY2lyY2xlRmVhdHVyZXMsXG4gICAgICAgICAgZnJlZWhhbmRGZWF0dXJlcyxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRWaXNpYmxlKCkpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICAvLyBoaWRlIGxpbmUtZmVhdHVyZSB0b29sdGlwc1xuICAgICAgICBsaW5lRmVhdHVyZXMgPSB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpbmVGZWF0dXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGxpbmVGZWF0dXJlc1tpXS5nZXQoJ3Rvb2x0aXAnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGlkZSBwb2x5Z29uLWZlYXR1cmUgdG9vbHRpcHNcbiAgICAgICAgcG9seWdvbkZlYXR1cmVzID0gdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwb2x5Z29uRmVhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBwb2x5Z29uRmVhdHVyZXNbaV0uZ2V0KCd0b29sdGlwJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhpZGUgY2lyY2xlLWZlYXR1cmUgdG9vbHRpcHNcbiAgICAgICAgY2lyY2xlRmVhdHVyZXMgPSB0aGlzLm1lYXN1cmVDaXJjbGVMYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2lyY2xlRmVhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNpcmNsZUZlYXR1cmVzW2ldLmdldCgndG9vbHRpcCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoaWRlIGZyZWVoYW5kLWZlYXR1cmUgdG9vbHRpcHNcbiAgICAgICAgZnJlZWhhbmRGZWF0dXJlcyA9IHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZyZWVoYW5kRmVhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZyZWVoYW5kRmVhdHVyZXNbaV0uZ2V0KCd0b29sdGlwJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwicHJlQ2xvc2VGdW5jdGlvbigpXCJcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVkIGJlZm9yZSBwYW5lbCB3aWxsIGJlIG9wZW5lZFxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBwcmVPcGVuRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaW5lRmVhdHVyZXMsXG4gICAgICAgICAgcG9seWdvbkZlYXR1cmVzLFxuICAgICAgICAgIGNpcmNsZUZlYXR1cmVzLFxuICAgICAgICAgIGZyZWVoYW5kRmVhdHVyZXMsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCF0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldFZpc2libGUoKSkge1xuICAgICAgICB0aGlzLm1lYXN1cmVMYXllckdyb3VwLnNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgLy8gc2hvdyBsaW5lLWZlYXR1cmUgdG9vbHRpcHNcbiAgICAgICAgbGluZUZlYXR1cmVzID0gdGhpcy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaW5lRmVhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBsaW5lRmVhdHVyZXNbaV0uZ2V0KCd0b29sdGlwJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3cgcG9seWdvbi1mZWF0dXJlIHRvb2x0aXBzXG4gICAgICAgIHBvbHlnb25GZWF0dXJlcyA9IHRoaXMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcG9seWdvbkZlYXR1cmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgcG9seWdvbkZlYXR1cmVzW2ldLmdldCgndG9vbHRpcCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzaG93IGNpcmNsZS1mZWF0dXJlIHRvb2x0aXBzXG4gICAgICAgIGNpcmNsZUZlYXR1cmVzID0gdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNpcmNsZUZlYXR1cmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjaXJjbGVGZWF0dXJlc1tpXS5nZXQoJ3Rvb2x0aXAnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2hvdyBmcmVlaGFuZC1mZWF0dXJlIHRvb2x0aXBzXG4gICAgICAgIGZyZWVoYW5kRmVhdHVyZXMgPSB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmcmVlaGFuZEZlYXR1cmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmcmVlaGFuZEZlYXR1cmVzW2ldLmdldCgndG9vbHRpcCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcInByZU9wZW5GdW5jdGlvbigpXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbYWRkU2VsZWN0VmlldyBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRTZWxlY3RWaWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmlldztcblxuICAgICAgc2VsZWN0VmlldyA9IHRoaXMuYWRkVmlldyh7XG4gICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25FbGVtZW50czogW1xuICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLmNvbnRlbnRDb250YWluZXIsIGVsZW1lbnQ6IHRoaXMubWFpblNlY3Rpb259LFxuICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHRoaXMudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZWN0VmlldztcbiAgICB9LCAvLyBlbmQgb2YgXCJhZGRTZWxlY3RWaWV3KClcIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFthZGRNZWFzdXJlVmlldyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRNZWFzdXJlVmlldzogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIFRSSUdHRVJfRFJBVyxcbiAgICAgICAgICBtZWFzdXJlVmlldyxcbiAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgaW50ZXJhY3Rpb24sXG4gICAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgICAgb2xUeXBlO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ0xpbmVTdHJpbmcnXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgVFJJR0dFUl9EUkFXID0gJ01FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV18nICsgb3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIG1lYXN1cmVWaWV3ID0gc2VsZi5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogJ2RyYXc6JyArIG9wdGlvbnMudHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHNbVFJJR0dFUl9EUkFXXSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50c1tUUklHR0VSX0RSQVddLFxuICAgICAgICAgIHdpdGhIZWFkbGluZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi50b3BUb29sYmFyLCBlbGVtZW50OiBzZWxmLnZpZXdUcmlnZ2VyQmFyfVxuICAgICAgICBdLFxuICAgICAgICBpbml0RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgYW5pbWF0aW9uXG4gICAgICAgICAgc2VsZi5zcGlubmVyLnNob3coKTtcblxuICAgICAgICAgIGZlYXR1cmVJZENvdW50ID0gMTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZyZWVoYW5kJykge1xuICAgICAgICAgICAgICBzb3VyY2UgPSBzZWxmLm1lYXN1cmVGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgICAgIHNvdXJjZSA9IHNlbGYubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICAgICAgICBzb3VyY2UgPSBzZWxmLm1lYXN1cmVQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc291cmNlID0gc2VsZi5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZlYXR1cmVzID0gbmV3IG9sLkNvbGxlY3Rpb24oKTtcblxuICAgICAgICAgIG9sVHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgICBpZiAob2xUeXBlID09ICdGcmVlaGFuZCcpIHtcbiAgICAgICAgICAgICAgb2xUeXBlID0gJ0xpbmVTdHJpbmcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnRlcmFjdGlvbiA9IG5ldyBvbC5pbnRlcmFjdGlvbi5EcmF3KHtcbiAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgdHlwZTogb2xUeXBlLFxuICAgICAgICAgICAgZnJlZWhhbmQ6IG9wdGlvbnMudHlwZSA9PSAnRnJlZWhhbmQnLFxuICAgICAgICAgICAgLy8gQFRPRE86IHVzZSBjdXN0b20gc3R5bGU/IChCRS1vcHRpb24pXG4gICAgICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHZhciBsaXN0RWxlbWVudCxcbiAgICAgICAgICAgICAgICBoZWFkbGluZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LFxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LFxuICAgICAgICAgICAgICAgIHN0cm9uZ0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3BhbkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICAgICAgICBtZWFzdXJlUmFkaXVzO1xuXG4gICAgICAgICAgICBpZiAoIWZlYXR1cmUgaW5zdGFuY2VvZiBvbC5GZWF0dXJlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGluZm9tZXNzYWdlIG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIGlmIChzZWxmLm1haW5TZWN0aW9uLmNoaWxkRWxlbWVudENvdW50ID09PSAxICYmIHNlbGYubWFpblNlY3Rpb24uY2hpbGRyZW5bMF0gPT09IHNlbGYubWFpblNlY3Rpb25JbmZvKSB7XG4gICAgICAgICAgICAgIHNlbGYubWFpblNlY3Rpb24ucmVtb3ZlQ2hpbGQoc2VsZi5tYWluU2VjdGlvbkluZm8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBmZWF0dXJlLXR5cGVcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgc3RyTGFiZWwgPSBsYW5nQ29uc3RhbnRzLkxFTkdUSDtcbiAgICAgICAgICAgICAgc3RyVHlwZSA9IGxhbmdDb25zdGFudHMuTElORTtcbiAgICAgICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgICAgICAgc3RyTGFiZWwgPSBsYW5nQ29uc3RhbnRzLlBFUklNRVRFUjtcbiAgICAgICAgICAgICAgc3RyVHlwZSA9IGxhbmdDb25zdGFudHMuUE9MWUdPTjtcbiAgICAgICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlKSB7XG4gICAgICAgICAgICAgIHN0ckxhYmVsID0gbGFuZ0NvbnN0YW50cy5SQURJVVM7XG4gICAgICAgICAgICAgIHN0clR5cGUgPSBsYW5nQ29uc3RhbnRzLkNJUkNMRTtcbiAgICAgICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vZnJlZWhhbmQgaXN0IExpbmVTdHJpbmcgdG9vXG4gICAgICAgICAgICAgIHN0ckxhYmVsID0gbGFuZ0NvbnN0YW50cy5MRU5HVEg7XG4gICAgICAgICAgICAgIHN0clR5cGUgPSBsYW5nQ29uc3RhbnRzLkZSRUVIQU5EO1xuICAgICAgICAgICAgICBtZWFzdXJlQXJlYSA9IGZhbHNlO1xuICAgICAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnRcbiAgICAgICAgICAgIGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIGhlYWRsaW5lXG4gICAgICAgICAgICBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGhlYWRsaW5lRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnX21hcHNfcG9ydHNpZGVfbWVhc3VyZV9lbGVtZW50JztcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZmlyc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaGVhZGxpbmVFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGdfbWFwc19wb3J0c2lkZV9tZWFzdXJlX2VsZW1lbnQgYzRnX21hcHNfcG9ydHNpZGVfbWVhc3VyZV9lbGVtZW50X2ZpcnN0JztcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuZmlyc3RFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChoZWFkbGluZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW5kIGFwcGVuZCBsYWJlbCBmb3IgbmFtZS1pbnB1dGZpZWxkXG4gICAgICAgICAgICBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lYXN1cmVFbGVtZW50XycgKyBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgICAgICBsYWJlbEVsZW1lbnQuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5OQU1FICsgJzogJztcbiAgICAgICAgICAgIGhlYWRsaW5lRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW5kIGFwcGVuZCBuYW1lLWlucHV0ZmllbGRcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5uYW1lID0gJ21lYXN1cmVFbGVtZW50XycgKyBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHN0clR5cGUgKyAnICcgKyBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgICAgIC8vIGF0dGFjaC1jaGFuZ2UtaGFuZGxlclxuICAgICAgICAgICAgJChpbnB1dEVsZW1lbnQpLmNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhlYWRsaW5lRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuZCBhcHBlbmQgcGFyYWdyYXBoc1xuICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuY2xhc3NOYW1lID0gJ2M0Z19tYXBzX3BvcnRzaWRlX21lYXN1cmVfcGFyYWdyYXBoJztcbiAgICAgICAgICAgIHN0cm9uZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgIHN0cm9uZ0VsZW1lbnQuaW5uZXJIVE1MID0gc3RyTGFiZWwgKyAnOiAnO1xuICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5hcHBlbmRDaGlsZChzdHJvbmdFbGVtZW50KTtcbiAgICAgICAgICAgIHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gJy4uLic7XG4gICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmFwcGVuZENoaWxkKHNwYW5FbGVtZW50KTtcbiAgICAgICAgICAgIGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVMaW5lJywgc3BhbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAobWVhc3VyZUFyZWEpIHtcbiAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnX21hcHNfcG9ydHNpZGVfbWVhc3VyZV9wYXJhZ3JhcGhfc3VyZmFjZWFyZWEnO1xuICAgICAgICAgICAgICBzdHJvbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG4gICAgICAgICAgICAgIHN0cm9uZ0VsZW1lbnQuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5TVVJGQUNFQVJFQSArICc6ICc7XG4gICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Ryb25nRWxlbWVudCk7XG4gICAgICAgICAgICAgIHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICBzcGFuRWxlbWVudC5pbm5lckhUTUwgPSAnLi4uJztcbiAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5hcHBlbmRDaGlsZChzcGFuRWxlbWVudCk7XG4gICAgICAgICAgICAgIGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgICBmZWF0dXJlLnNldCgnbGlzdEVsZW1lbnRWYWx1ZUFyZWEnLCBzcGFuRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZWFzdXJlUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgLy8gcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAvLyBwYXJhZ3JhcGhFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGdfbWFwc19wb3J0c2lkZV9tZWFzdXJlX3BhcmFncmFwaF9zdXJmYWNlYXJlYSc7XG4gICAgICAgICAgICAgICAgLy8gc3Ryb25nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgICAgICAgICAgIC8vIHN0cm9uZ0VsZW1lbnQuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5TVVJGQUNFQVJFQSArICc6ICc7XG4gICAgICAgICAgICAgICAgLy8gcGFyYWdyYXBoRWxlbWVudC5hcHBlbmRDaGlsZChzdHJvbmdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAvLyBzcGFuRWxlbWVudC5pbm5lckhUTUwgPSAnLi4uJztcbiAgICAgICAgICAgICAgICAvLyBwYXJhZ3JhcGhFbGVtZW50LmFwcGVuZENoaWxkKHNwYW5FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnNldCgnbGlzdEVsZW1lbnRWYWx1ZVJhZGl1cycsIHNwYW5FbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaWQtY291bnRlclxuICAgICAgICAgICAgZmVhdHVyZUlkQ291bnQgKz0gMTtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICAgICAgICAgIHNlbGYubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICAgICAgICAgICAgLy8gYXR0YWNoIGVsZW1lbnQgdG8gdGhlIGZlYXR1cmVcbiAgICAgICAgICAgIGZlYXR1cmUuc2V0KCdsaXN0RWxlbWVudCcsIGxpc3RFbGVtZW50KTtcblxuICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIHZhciBmZWF0dXJlVG9vbHRpcCxcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50LFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFyZWEsXG4gICAgICAgICAgICAgICAgcmFkaXVzO1xuXG4gICAgICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgICAgICBuYW1lID0gZmVhdHVyZS5nZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJykudmFsdWU7XG4gICAgICAgICAgICBsZW5ndGggPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgICAgIG5ld0NvbnRlbnQgPSAnPHN0cm9uZz4nICsgbmFtZSArICc8L3N0cm9uZz48YnI+JztcblxuICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgICAgIGZlYXR1cmUuZ2V0KCdsaXN0RWxlbWVudFZhbHVlTGluZScpLmlubmVySFRNTCA9IGxlbmd0aC5odG1sVmFsdWU7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgICAgICByYWRpdXMgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpKTtcbiAgICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ21lYXN1cmVkUmFkaXVzJywgcmFkaXVzKTtcbiAgICAgICAgICAgICAgZmVhdHVyZS5nZXQoJ2xpc3RFbGVtZW50VmFsdWVSYWRpdXMnKS5pbm5lckhUTUwgPSByYWRpdXMuaHRtbFZhbHVlO1xuICAgICAgICAgICAgICBuZXdDb250ZW50ICs9IHJhZGl1cy5odG1sVmFsdWU7XG5cbiAgICAgICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ21lYXN1cmVkQXJlYScsIGFyZWEpO1xuICAgICAgICAgICAgICBmZWF0dXJlLmdldCgnbGlzdEVsZW1lbnRWYWx1ZUFyZWEnKS5pbm5lckhUTUwgPSBhcmVhLmh0bWxWYWx1ZTtcbiAgICAgICAgICAgICAgLy8gbmV3Q29udGVudCArPSBhcmVhLmh0bWxWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICAgICAgICBhcmVhID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSk7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ21lYXN1cmVkQXJlYScsIGFyZWEpO1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0KCdsaXN0RWxlbWVudFZhbHVlQXJlYScpLmlubmVySFRNTCA9IGFyZWEuaHRtbFZhbHVlO1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgKz0gYXJlYS5odG1sVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdDb250ZW50ICs9IGxlbmd0aC5odG1sVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgICAgICAgIH07IC8vIGVuZCBvZiBcInVwZGF0ZU1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgc2VsZi5tYWluU2VjdGlvbi5yZW1vdmVDaGlsZChmZWF0dXJlLmdldCgnbGlzdEVsZW1lbnQnKSk7XG5cbiAgICAgICAgICAgIC8vIGxhc3QgZWxlbWVudD8gLT4gYWRkIGluZm9tZXNzYWdlXG4gICAgICAgICAgICBpZiAoc2VsZi5tYWluU2VjdGlvbi5jaGlsZEVsZW1lbnRDb3VudCA8IDEpIHtcbiAgICAgICAgICAgICAgc2VsZi5tYWluU2VjdGlvbi5hcHBlbmRDaGlsZChzZWxmLm1haW5TZWN0aW9uSW5mbyk7XG4gICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgICAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpe1xuICAgICAgICAgICAgICAgIHZhciBsZW5nID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gbGVuZy5odG1sVmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlbnVtYiA9IHZhbC5tYXRjaCgvXFxkL2cpO1xuICAgICAgICAgICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZW51bWI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSA9IGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSAnMC4wMCBtJztcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RobnVtYiA9IGxlbmd0aC5tYXRjaCgvXFxkL2cpO1xuICAgICAgICAgICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgbGVuZ3RobnVtYiA9Kzg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICAgICAgICB9Ly8gRW5kIFdvcmthcm91bmRcblxuICAgICAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBjNGcubWFwcy5taXNjLlRvb2x0aXBQb3BVcCh7XG4gICAgICAgICAgICAgICAgICBtYXA6IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvL1dvcmthcm91bmQsIGZvciBzbWFsbCBvciB6ZXJvIHZhbHVlcyBvZiBGcmVlaGFuZFxuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBnZXRWYWx1ZU9mR2VvbWV0cnkoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9IGxlbmcgJiYgdmFsID4gbGVuZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCd0b29sdGlwJywgYWN0aXZlVG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgnZ2VvbWV0cnlUeXBlJywgb3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICAgIH0sIHNlbGYpO1xuXG4gICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLm9uKCdwb2ludGVybW92ZScsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgYWN0aXZlVG9vbHRpcC5zZXRQb3NpdGlvbihldmVudC5jb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCBzZWxmKTtcblxuICAgICAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3ZW5kJyxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgICAgICAgICAgYWN0aXZlU2tldGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgc2VsZik7XG5cbiAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAvLyBkaXNhYmxlIG1hcEhvdmVyXG4gICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgZmVhdHVyZXMuY2xlYXIoKTtcblxuICAgICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGRlYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgLy8gcmVhY3RpdmF0ZSBtYXBIb3ZlclxuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGludGVyYWN0aW9uLmZpbmlzaERyYXdpbmcoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgICAvLyAwX29cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBtYXBcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG1lYXN1cmVWaWV3O1xuICAgIH0gLy8gZW5kIG9mIFwiYWRkTWVhc3VyZVZpZXcoKVwiXG5cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIE1lYXN1cmV0b29scyA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5NZWFzdXJldG9vbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLW1lYXN1cmV0b29scy5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lclwiO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHNpZGVib2FyZCBzdHJ1Y3R1cmVzLiBQcm92aWRlcyBzdGFuZGFyZCBjb25maWd1cmF0aW9ucyB3aGljaCBhcmUgZXF1YWwgZm9yIGVhY2ggc2lkZWJvYXJkIGVsZW1lbnQuXG4gKi9cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICAgIG9wdGlvbnMgIG1pc2MgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBleHREaXY6IGZhbHNlLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogJ3NpZGVib2FyZCcsXG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICAvL2FjdGl2ZSBJZGVudGlmaWVyICh3aGljaCBzaWRlIGlzIHRoaXMgZWxlbWVudCBvbj8pXG4gICAgLy9jc3NuYW1lIG5lZWRlZCB0byBzZXQgdGhlIGNzcyBjbGFzcyBjb3JyZWN0bHlcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSAnUG9ydHNpZGUnO1xuICAgICAgICB0aGlzLmNzc25hbWUgPSAncG9ydHNpZGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gJ1N0YXJib2FyZCc7XG4gICAgICAgIHRoaXMuY3NzbmFtZSA9ICdzdGFyYm9hcmQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy90aGlzLmNzc25hbWUgPSB0aGlzLmlkZW50aWZpZXIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB0aGlzLmlkZW50aWZpZXIuc2xpY2UoMSk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9ucy50aXBMYWJlbCA9IHRoaXMub3B0aW9ucy50aXBMYWJlbCB8fCB0aGlzLm9wdGlvbnMuaGVhZGxpbmUgfHwgbGFuZ0NvbnN0YW50cy5DVFJMX1NJREVCT0FSRDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3Bpbm5lciA9IHVuZGVmaW5lZDtcbiAgICAvLyBtYWluc3RydWN0dXJlIGVsZW1lbnRzXG4gICAgdGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGl0bGVCYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkbGluZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcFRvb2xiYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYm90dG9tVG9vbGJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXR1c0JhciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZpZXdUcmlnZ2VyQmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXVzZWRWaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jcmVhdGUgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0IHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuICAvLyBBZGQgbWV0aG9kc1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2ljIGh0bWwtZWxlbWVudHMgZm9yIHRoZSBzaWRlYm9hcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgJ3RydWUnIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIGluaXRDbGFzcyxcbiAgICAgICAgICB0aXRsZUJ1dHRvbkJhcixcbiAgICAgICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICAgICBjYXBpdGFsaXplZE5hbWUsXG4gICAgICAgICAgaGlkZUJ1dHRvbixcbiAgICAgICAgICBjYWNoaW5nO1xuXG4gICAgICBjYWNoaW5nID0gdGhpcy5vcHRpb25zLmNhY2hpbmc7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgLy8gRG8gbm90IGhpZGUgd2hlbiBpdCBpcyBpbml0aWFsaXplZCBvcGVuLCBvciBpbiBhbiBleHRlcm5hbCBkaXZcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIGluaXRDbGFzcyA9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzEnKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdENsYXNzID0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzAnKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICQodGhpcy5idXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gW25vdGVdIFwidGhpcy5ibHVyKClcIiBkb2VzIG5vdCB3b3JrIGluIElFLWZ1bGxzY3JlZW4tbW9kZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjYXBpdGFsaXplZE5hbWUgPT0gXCJSb3V0ZXJcIiB8fCBjYXBpdGFsaXplZE5hbWUgPT0gXCJNZWFzdXJlXCIgfHwgY2FwaXRhbGl6ZWROYW1lID09IFwiRWRpdG9yXCIpe1xuICAgICAgICAgICAgICBzZWxmLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi50aXRsZSA9IHRoaXMub3B0aW9ucy50aXBMYWJlbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgICQodGhpcy5jb250YWluZXIpLmFkZENsYXNzKCdjNGctJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJyAnICsgJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jb250YWluZXInICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArIGluaXRDbGFzcyk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy0nICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNvbnRyb2wnICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgaW5pdENsYXNzKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgZGltZW5zaW9uc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcyNTBweCc7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTE5MjBweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xMDAlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xOTIwcHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTAwJSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlIGNvbnRhaW5lclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmV4dERpdikuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgICAgICAvLyAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICQoJyMnICsgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFRhcmdldCgpICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9PVkVSTEFZQ09OVEFJTkVSX1NFKS5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGNvbnRlbnQtYXJlYVxuICAgICAgLy9cbiAgICAgIC8vIFdyYXBwZXJcbiAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctd3JhcHBlcic7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgLy8gVGl0bGViYXJcbiAgICAgIHRoaXMudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudGl0bGVCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy10aXRsZWJhcic7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUJhcik7XG5cbiAgICAgIC8vIFRyaWdnZXJiYXJcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy12aWV3dHJpZ2dlcmJhcic7XG5cbiAgICAgIC8vIFRvcC1Ub29sYmFyXG4gICAgICB0aGlzLnRvcFRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctdG9wLXRvb2xiYXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbnRlbnQtQ29udGFpbmVyXG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY29udGVudC1jb250YWluZXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBjb250ZW50IGhlYWRsaW5lXG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb250ZW50SGVhZGxpbmUuY2xhc3NOYW1lID0gJ2NvbnRlbnRIZWFkbGluZSc7XG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRIZWFkbGluZSk7XG5cbiAgICAgIC8vIEJvdHRvbS1Ub29sYmFyXG4gICAgICB0aGlzLmJvdHRvbVRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1ib3R0b20tdG9vbGJhciBjNGctY2xvc2UnLFxuICAgICAgICAgIHRhcmdldDogdGhpcy53cmFwcGVyXG4gICAgICB9KTtcblxuICAgICAgIC8vIFN0YXR1c2JhclxuICAgICAgdGhpcy5zdGF0dXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctc3RhdHVzYmFyIGM0Zy1jbG9zZSc7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zdGF0dXNCYXIpO1xuXG4gICAgICAvLyBBZGQgc3Bpbm5lclxuICAgICAgdGhpcy5zcGlubmVyID0gbmV3IFNwaW5uZXIoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udGVudENvbnRhaW5lcixcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuTEFSR0VcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGaWxsIHRpdGxlYmFyXG4gICAgICAvL1xuICAgICAgLy8gSGVhZGxpbmVcbiAgICAgIHRoaXMuaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLmhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctaGVhZGxpbmUnO1xuICAgICAgdGhpcy5oZWFkbGluZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaGVhZGxpbmU7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGxpbmUpO1xuICAgICAgLy8gQnV0dG9uYmFyXG4gICAgICB0aXRsZUJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGVCdXR0b25CYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0wgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWJ1dHRvbmJhcic7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uQmFyKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAvLyBIaWRlYnV0dG9uXG4gICAgICAgIGhpZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaGlkZUJ1dHRvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUE9SVFNJREVfSElERTtcbiAgICAgICAgaGlkZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuSElERTtcbiAgICAgICAgJChoaWRlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuY2xvc2UodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGl0bGVCdXR0b25CYXIuYXBwZW5kQ2hpbGQoaGlkZUJ1dHRvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIENsb3NlYnV0dG9uXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jbG9zZSc7XG4gICAgICBjbG9zZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ0xPU0U7XG4gICAgICAkKGNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRpdGxlQnV0dG9uQmFyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgLy9BZGQgc3Bpbm5lciBmb3IgbGVmdCBzaWRlZCBzaWRlYm9hcmQgZWxlbWVudHNcbiAgICAgIHRoaXMuc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnRlbnRDb250YWluZXIsXG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkxBUkdFXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGV4dGVybmFsIERJViBhbmQgZGVmYXVsdCBzdGF0ZVxuICAgICAgLy8gY2F0Y2ggdG91Y2ggZXZlbnRzIGFuZCBzdG9wIHRoZWlyIHByb3BhZ2F0aW9uXG4gICAgICAvLyBvdGhlcndpc2UgdG91Y2gtc2Nyb2xsaW5nIHdpbGwgYmUgc3RvcHBlZCBieSBvbDNcbiAgICAgICQodGhpcy5jb250YWluZXIpLm9uKCd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHRoZSB1cGRhdGUgbWV0aG9kIHRvIHRoZSBtYXAtcmVzaXplIGV2ZW50XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAub24oJ2NoYW5nZTpzaXplJywgdGhpcy51cGRhdGUsIHRoaXMpO1xuXG4gICAgICAvLyBTaG93IG9wZW4gaWYgZGVzaXJlZFxuICAgICAgaWYgKCh0aGlzLm9wdGlvbnMuZGVmYXVsdE9wZW4pIHx8ICh0aGlzLm9wdGlvbnMuY2FjaGluZyAmJiAodXRpbHMuZ2V0VmFsdWUodGhpcy5vcHRpb25zLm5hbWUpID09ICcxJykpKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJjcmVhdGVcIlxuXG4gICAgLyoqXG4gICAgICogICBVcGRhdGUgdGhlIHNpZGVib2FyZHMgaHRtbC1lbGVtZW50c1xuICAgICAqICAgcmVzaXplcyB0aGUgY29udGVudC1jb250YWluZXJcbiAgICAgKiAgIGFuZCB0aGUgdG9wLXRvb2xiYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2V2ZW50LW9iamVjdH0gIG9wdF9ldmVudCAgKm9wdGlvbmFsKiAgSnVzdCBuZWVkZWQgYnkgdGhlIG9sLWJpbmQtbWV0aG9kLFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0IG5vdCB1c2VkIGluIHRoZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9wdF9ldmVudCkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQsXG4gICAgICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGg7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvKlxuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIGNhcGl0YWxpemVkTmFtZSA9IHV0aWxzLmNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm9wdGlvbnMubmFtZSk7XG4gICAgICB9Ki9cblxuICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0ID0gJCh0aGlzLndyYXBwZXIpLmhlaWdodCgpIC0gKCQodGhpcy50aXRsZUJhcikub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKHRoaXMuc3RhdHVzQmFyKS5vdXRlckhlaWdodCh0cnVlKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gJiYgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBpZiAodGhpcyAhPT0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG9wLVRvb2xiYXJcbiAgICAgIGlmICh0aGlzLnRvcFRvb2xiYXIpIHtcbiAgICAgICAgICBpZiAodGhpcy50b3BUb29sYmFyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvLyB0aGlzLnRvcFRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgIHRoaXMudG9wVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCAtPSAkKHRoaXMudG9wVG9vbGJhcikub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b3BUb29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20tdG9vbGJhclxuICAgICAgaWYgKHRoaXMuYm90dG9tVG9vbGJhcikge1xuICAgICAgICAgIGlmICh0aGlzLmJvdHRvbVRvb2xiYXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21Ub29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IC09ICQodGhpcy5ib3R0b21Ub29sYmFyKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbVRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRlbnQtY29udGFpbmVyXG4gICAgICAkKHRoaXMuY29udGVudENvbnRhaW5lcikub3V0ZXJIZWlnaHQoY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0KTtcblxuICAgICAgLy8gQ29ycmVjdCB3aWR0aFxuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlclt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHNlbGYub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy9vbmx5IG1vdmUgdGhlIHRvZ2dsZSBidXR0b24gb24gc3RhcmJvYXJkIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgLy8gZW5kIG9mIFwidXBkYXRlXCJcblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoaXMgc2lkZWJvYXJkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICpvcHRpb25hbCogb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIGluaXRpYWxpemUtZnVuY3Rpb24gaWYgaXQgZXhpc3RzXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAndHJ1ZScgYW4gc3VjY2Vzc1xuICAgICAqL1xuICAgIG9wZW46IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIGNvbnRhaW5lck9mZnNldFdpZHRoLFxuICAgICAgICAgIHNlbGY7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBDYWxsIGluaXRpYWxpemUtZnVuY3Rpb25zLCBpZiBleGlzdGVudFxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRoaXMuaW5pdChvcHRfb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FsbCBwcmVPcGVuRnVuY3Rpb25zXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJlT3BlbkZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJlT3BlbkZ1bmN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIC8vIE5vdCBhdmFpbGFibGUgb24gZXh0ZXJuYWwgZGl2c1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW5ub3QgdXNlIHRoaXMgZnVuY3Rpb24gb24gZXh0ZXJuYWwgZW1iZWRkZWQgc2lkZWJvYXJkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY2xvc2Ugb3RoZXIgYWN0aXZlIHNpZGVib2FyZCBvbiB0aGlzIHNpZGVcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXS5jbG9zZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzbGlkZSBvdGhlciBlbGVtZW50cyB3aGVuIG5vIG90aGVyIHNpZGVib2FyZCB3YXMgYWN0aXZlIG9uIHRoaXMgc2lkZVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW3RoaXMub3B0aW9ucy5kaXJlY3Rpb24gKyBcIlNsaWRlRWxlbWVudHNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moc2VsZi5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIDApO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoaXMgYXMgYWN0aXZlIFNpZGVib2FyZFxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXM7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYSB2aWV3IG5lZWRzIHRvIGJlIHJlYWN0aXZhdGVkXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKHRoaXMuc3RhdHVzQmFyKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgJCh0aGlzLnN0YXR1c0JhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJCh0aGlzLmJvdHRvbVRvb2xiYXIpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAkKHRoaXMuYm90dG9tVG9vbGJhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhY2hpbmcpIHtcbiAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCBwb3N0T3BlbkZ1bmN0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucG9zdE9wZW5GdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucG9zdE9wZW5GdW5jdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgLy8gZW5kIG9mIFwib3BlblwiXG5cbiAgICBpc09wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhpcyBzaWRlYm9hcmQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBvcHRfaGlkZSAgICAgICAgICAgICAgICpvcHRpb25hbCogQ2hvb3NlIGlmIHRoaXMgZnVuY3Rpb24gc2hvdWxkIHRyaWdnZXIgfHByZUhpZGVGdW5jdGlvbnxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGVhZCBvZiB8cHJlQ2xvc2VGdW5jdGlvbnwuIERlZmF1bHQgaXMgfGZhbHNlfC5cbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQgICpvcHRpb25hbCogSW5kaWNhdGVzIGlmIGFub3RoZXIgc2lkZWJvYXJkIGVsZW1lbnQgd2lsbCBiZSBvcGVuZWQgaW5zdGVhZC5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyB8ZmFsc2V8LlxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgIHx0cnVlfCBvbiBzdWNjZXNzLlxuICAgICAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbiAob3B0X2hpZGUsIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQpIHtcbiAgICAgIHZhciBjb250YWluZXJPZmZzZXRXaWR0aCxcbiAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgIGRpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG5cbiAgICAgIGlmIChvcHRfaGlkZSApIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZUhpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucHJlSGlkZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgLy8gTm90IGF2YWlsYWJsZSBvbiBleHRlcm5hbCBkaXZzXG4gICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbm5vdCB1c2UgdGhpcyBmdW5jdGlvbiBvbiBleHRlcm5hbCBlbWJlZGRlZCBzaWRlYm9hcmQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gIT09IHRoaXMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJy1lbGVtZW50ICgnICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnKSBpcyBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuY3NzKGRpcmVjdGlvbiwgLWNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmNzcyhkaXJlY3Rpb24sIDApO1xuXG4gICAgICAgIGlmICghb3B0X29wZW5PdGhlclNpZGVib2FyZCkge1xuICAgICAgICAgIC8vIHNsaWRlIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKGRpcmVjdGlvbiwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoaWRlIGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgdmlldyBuZWVkcyB0byBiZSBkZWFjdGl2YXRlZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVWaWV3LmRlYWN0aXZhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIFNpZGVib2FyZGVudHJ5XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWNoaW5nKSB7XG4gICAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNsb3NlXCJcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGlzIHNpZGVib2FyZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3MuXG4gICAgICovXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAob3B0X2hpZGUpIHtcbiAgICAgIHZhciBjYXBpdGFsaXplZE5hbWU7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKG9wdF9oaWRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICB9LCAvLyBlbmQgb2YgXCJ0b2dnbGVcIlxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1dHRvbiB3aGljaCBjaGFyYWN0ZXJpc3RpY3MgYXJlIGRlZmluZWQgYnkgdGhlIG9wdGlvbnMgcGFyYW1ldGVyXG4gICAgICogVGhlc2Ugb3B0aW9ucyBpbmNsdWRlIGUuZy4gdGhlIHRhcmdldCBjb250YWluZXIgd2hlcmUgdGhlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIGFuZCB0aGUgY2xpY2sgYWN0aW9uIG9mIHRoZSBidXR0b25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICBvcHRfb3B0aW9ucyAgVGhlIGJ1dHRvbiBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1ha2VCdXR0b246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICBidXR0b247XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIHRpcExhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgICAgICBjbGlja0FjdGlvbjogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgICBvcHRpb25zLmNsYXNzTmFtZSA9ICcgJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLm9wdGlvbnMubmFtZSArICctYnV0dG9uJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgaWYob3B0aW9ucy5pZCkge1xuICAgICAgICBidXR0b24uaWQgPSBvcHRpb25zLmlkO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGlwTGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IG9wdGlvbnMudGlwTGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmxhYmVsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQob3B0aW9ucy5sYWJlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jbGlja0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAkKGJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9ucy5jbGlja0FjdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgICQob3B0aW9ucy50YXJnZXQpLmFwcGVuZChidXR0b24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0sIC8vIGVuZCBvZiBcIm1ha2VCdXR0b25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkU2VjdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkU2VjdGlvbjogZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIC8vIHRyeSB0byBjcmVhdGUgdGhlIG5ldyBzZWN0aW9uXG4gICAgICB0cnkge1xuICAgICAgICBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnR5cGUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBjcmVhdGUgc2VjdGlvbi4gXCInICsgb3B0aW9ucy50eXBlICsgJyBpcyBub3QgYSB2YWxpZCBIVE1MLW5vZGUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcblxuICAgICAgLy8gdHJ5IHRvIGFwcGVuZCB0aGUgc2VjdGlvbiB0byB0aGUgZ2l2ZW4gdGFyZ2V0XG4gICAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnRhcmdldC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZ2V0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgfHwgZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBzZWN0aW9uLnNldEVsZW1lbnQgPSBmdW5jdGlvbiAobmV3RWxlbWVudCkge1xuICAgICAgICBpZiAobmV3RWxlbWVudCAmJiB0eXBlb2YgbmV3RWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoIShlbGVtZW50ICYmIGVsZW1lbnQgPT09IG5ld0VsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICAvLyBhZGQgdG8gc2VjdGlvbnMtYXJyYXlcbiAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sIC8vIGVuZCBvZiBcImFkZFNlY3Rpb25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkVmlldyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRWaWV3OiBmdW5jdGlvbiAob3B0aW9ucywgb3B0X3ZpZXdTY29wZSkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICB2aWV3U2NvcGUsXG4gICAgICAgICAgYWRkaXRpb25hbFRyaWdnZXJDbGFzcyxcbiAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgIHZpZXc7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdmlld1Njb3BlID0gb3B0X3ZpZXdTY29wZSB8fCB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAvLyBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHVuZGVmaW5lZCwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IHtvcHRfdGFyZ2V0OiBbc3RyaW5nfGh0bWxPYmplY3RdLCBvcHRfY2xhc3NOYW1lOiBbc3RyaW5nXSwgb3B0X3RpcExhYmVsOiBbc3RyaW5nXX1cbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXSwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IFt7c2VjdGlvbjogW3NlY3Rpb25PYmplY3RdLCBlbGVtZW50OiBbZWxlbWVudE9iamVjdF19XVxuICAgICAgICBpbml0RnVuY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBhZGQgYSB2aWV3IHdpdGhvdXQgYSBuYW1lIChvZiB0eXBlIFwic3RyaW5nXCIpLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSB7fTtcblxuICAgICAgdmlldy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgdmlldy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgdmlldy5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfb3BlblNpZGVib2FyZCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBpZiAob3B0aW9ucy50cmlnZ2VyQ29uZmlnLndpdGhIZWFkbGluZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gb3B0aW9ucy50cmlnZ2VyQ29uZmlnLnRpcExhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3BlbiBTaWRlYm9hcmQgaWYgY2xvc2VkXG4gICAgICAgIGlmIChvcHRfb3BlblNpZGVib2FyZCAmJiAhc2VsZi5pc09wZW4oKSkge1xuICAgICAgICAgIHNlbGYub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVhY3RpdmF0ZSBjdXJyZW50IGFjdGl2ZVZpZXcsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1Njb3BlLmFjdGl2ZVZpZXcgPT09ICdvYmplY3QnICYmIHZpZXdTY29wZS5hY3RpdmVWaWV3ICE9PSB2aWV3KSB7XG4gICAgICAgICAgdmlld1Njb3BlLmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdTY29wZS5hY3RpdmVWaWV3ID0gdmlldztcblxuICAgICAgICAvLyBIYW5kbGUgc3ViLXZpZXdzXG4gICAgICAgIGlmICh2aWV3LmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgaW5pdGlhbGl6ZS1mdW5jdGlvbnMsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICghdmlldy5pbml0aWFsaXplZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZpZXcuaW5pdGlhbGl6ZWQgPSBvcHRpb25zLmluaXRGdW5jdGlvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGVsZW1lbnRzIGluIGdpdmVuIHNlY3Rpb25zXG4gICAgICAgIGlmIChvcHRpb25zLnNlY3Rpb25FbGVtZW50cyAmJiBvcHRpb25zLnNlY3Rpb25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNlY3Rpb25FbGVtZW50c1tpXS5zZWN0aW9uLnNldEVsZW1lbnQob3B0aW9ucy5zZWN0aW9uRWxlbWVudHNbaV0uZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRyaWdnZXItc3RhdGUsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBhY3RpdmF0ZSBmdW5jdGlvbiwgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHZpZXcuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfcGF1c2UpIHtcblxuICAgICAgICB2aWV3LnBhdXNlZCA9IG9wdF9wYXVzZSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIHZpZXdTY29wZS5hY3RpdmVWaWV3ID09PSAnb2JqZWN0JyAmJiB2aWV3U2NvcGUuYWN0aXZlVmlldyA9PT0gdmlldykge1xuICAgICAgICAgIGlmICh0cmlnZ2VyICYmICF2aWV3LnBhdXNlZCkge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5yZW1vdmVDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhhbmRsZSBzdWItdmlld3NcbiAgICAgICAgICBpZiAodmlldy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSh2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbCBkZWFjdGl2YXRlIGZ1bmN0aW9uLCBpZiBleGlzdGVudFxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50cmlnZ2VyQ29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zLnRyaWdnZXJDb25maWcgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnZpZXdUcmlnZ2VyQmFyLFxuICAgICAgICAgIHRpcExhYmVsOiBvcHRpb25zLm5hbWUsXG4gICAgICAgIH0sIG9wdGlvbnMudHJpZ2dlckNvbmZpZyk7XG5cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsaWNrQWN0aW9uID0gdmlldy5hY3RpdmF0ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyAnICsgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgYWRkaXRpb25hbFRyaWdnZXJDbGFzcztcbiAgICAgICAgLy8gQFRPRE8gY2hlY2s6IHRyaWdnZXIgPSB0aGlzLm1ha2VCdXR0b24ob3B0aW9ucy50cmlnZ2VyQ29uZmlnKTtcbiAgICAgICAgdHJpZ2dlciA9IHRoaXMubWFrZUJ1dHRvbihvcHRpb25zLnRyaWdnZXJDb25maWcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZpZXdzLnB1c2godmlldyk7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9IC8vIGVuZCBvZiBcImFkZFZpZXdcIlxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFNpZGVib2FyZCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMubWlzYyA9IHRoaXMuYzRnLm1hcHMubWlzYyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW1NwaW5uZXIgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIENvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lciA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgc3Bpbm5lclNwYW47XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHRhcmdldDogJy4nICsgY3NzQ29uc3RhbnRzLk9MX1ZJRVdQT1JUXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3NOYW1lID0gJyAnICsgb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5TUElOTkVSICsgb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjc3NDb25zdGFudHMuSElERTtcbiAgICAkKG9wdGlvbnMudGFyZ2V0KS5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgIHNwaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwaW5uZXJTcGFuLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLkFOSU1BVElPTl9TUElOO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGlubmVyU3Bhbik7XG5cbiAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciA9IDA7XG5cbiAgfTtcblxuICAvLyBBZGQgbWV0aG9kcyB0byBzcGlubmVyXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5taXNjLlNwaW5uZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtzaG93IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5ISURFKSkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbaGlkZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ1NwaW5uZXIgaXMgYWxyZWFkeSBoaWRkZW4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgfSk7IC8vIEVuZCBvZiBcImFkZCBtZXRob2RzIHRvIHNwaW5uZXJcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBTcGlubmVyID0gdGhpcy5jNGcubWFwcy5taXNjLlNwaW5uZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtab29tbGV2ZWx9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsXCJcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBjNGctTWFwcyB1dGlsaXR5IGZ1bmN0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMudXRpbHMgPSAkLmV4dGVuZChjNGcubWFwcy51dGlscywge1xuICAgIC8qKlxuICAgICAqICBDb252ZXJ0cyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgZ2l2ZW4gc3RyaW5nIHRvIHVwcGVyY2FzZSwgbGVhdmluZyB0aGUgcmVtYWluaW5nIHN0cmluZyB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiAgQHBhcmFtICAgIHtzdHJpbmd9ICAgIHRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZVxuICAgICAqXG4gICAgICogIEByZXR1cm4gICB7c3RyaW5nfSAgICB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIHVuaXF1ZSBpZC5cbiAgICAgKlxuICAgICAqIFRoZSBpZCBpcyA5IGNoYXJhY3RlcnMgbG9uZyBhbmQgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gIFRoZSBnZW5lcmF0ZWQgaWQuXG4gICAgICovXG4gICAgZ2V0VW5pcXVlSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gICAgICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAgICAgLy8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG4gICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBub3QgYnJlYWsgdGhlIENvZGUuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcIC0+IFxcXFw7XG4gICAgICogICBcIiAtPiAnJztcbiAgICAgKiAgIMOEIC0+ICZBdW1sO1xuICAgICAqICAgw6QgLT4gJmF1bWw7XG4gICAgICogICDDliAtPiAmT3VtbDtcbiAgICAgKiAgIMO2IC0+ICZvdW1sO1xuICAgICAqICAgw5wgLT4gJlV1bWw7XG4gICAgICogICDDvCAtPiAmdXVtbDtcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZW5jb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcL2csICdcXFxcXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFxcIi9nLCAnXFwnXFwnJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DhC9nLCAnJkF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DpC9nLCAnJmF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dli9nLCAnJk91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dti9nLCAnJm91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DnC9nLCAnJlV1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DvC9nLCAnJnV1bWw7J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZW5jb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIGJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcXFwgICAgIC0+IFxcO1xuICAgICAqICAgJycgICAgIC0+IFwiO1xuICAgICAqICAgJkF1bWw7IC0+IMOEXG4gICAgICogICAmYXVtbDsgLT4gw6RcbiAgICAgKiAgICZPdW1sOyAtPiDDllxuICAgICAqICAgJm91bWw7IC0+IMO2XG4gICAgICogICAmVXVtbDsgLT4gw5xcbiAgICAgKiAgICZ1dW1sOyAtPiDDvFxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcXFxcXC9nLCAnXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFwnXFwnL2csICdcXFwiJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mQXVtbDsvZywgJ8OEJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mYXVtbDsvZywgJ8OkJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mT3VtbDsvZywgJ8OWJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mb3VtbDsvZywgJ8O2J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mVXVtbDsvZywgJ8OcOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJnV1bWw7L2csICfDvCdcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGRlY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3IgcmVwbGFjZSBhbiBVUkwtcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAgdGhlIGdpdmVuIHBhcmFtZXRlciwgYHBhcmFtYCxcbiAgICAgKiB3aWxsIGJlIGFwcGxpZWQgYXMgXCJoYXNoLXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzI3BhcmFtXG4gICAgICogTm90ZSwgdGhhdCBhbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogd2hlcmVhcyBleGlzdGluZyBcIkdFVC1wYXJhbWV0ZXJzXCIgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgc2V0LCBpdCB3aWxsIGJlIGFwcGxpZWQgYXMgXCJHRVQtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHM/b3B0X2dldEtleT1wYXJhbVxuICAgICAqIElmIHRoZSBrZXkgZGVzY3JpYmVkIGJ5IGBvcHRfZ2V0S2V5YCBpcyBhbHJlYWR5IGV4aXN0aW5nLCBpdHMgdmFsdWUgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogb3RoZXJ3aXNlIHRoZSBrZXktdmFsdWUtcGFpciB3aWxsIGJlIGFwcGVuZGVkIGFwcHJvcHJpYXRseS5cbiAgICAgKiBBbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZXhlY3V0ZWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBuZXcgbGluayBhcyBgc3RyaW5nYCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIFwiaHJlZi9sb2NhdGlvblwiIHdpbGwgYmUgY2hhbmdlZCBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlciwgd2hpY2ggY2FuIGNhdXNlIGEgcGFnZXJlbG9hZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIHBhcmFtICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW58c3RyaW5nfSAgb3B0X2dldEtleSAgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgb3B0X2V4ZWN1dGUgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgc2V0VXJsUGFyYW06IGZ1bmN0aW9uIChwYXJhbSwgb3B0X2dldEtleSwgb3B0X2V4ZWN1dGUpIHtcbiAgICAgIHZhciBsaW5rLFxuICAgICAgICAgIHNlYXJjaFBhcmFtLFxuICAgICAgICAgIHBhcmFtUmVwbGFjZWQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGluayA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgLy8gdXNlIGhhc2gtcGFyYW1ldGVyXG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IGxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhcmFtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIEdFVC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIC8vIHRoZXJlIGFyZSBhbHJlYWR5IHNlYXJjaC1wYXJhbWV0ZXJzXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgIG9wdF9nZXRLZXkgPSBvcHRfZ2V0S2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgLy8gcmVwbGFjZSBwYXJhbWV0ZXIgaWYgYWxyZWFkeSBleGlzdGVudFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC8oW149XFw/XFwmXSspPShbXiZdKykvZ2ksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBvcHRfZ2V0S2V5KSB7XG4gICAgICAgICAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYXBwZW5kIGFzIG5ldyBwYXJhbWV0ZXJcbiAgICAgICAgICBpZiAoIXBhcmFtUmVwbGFjZWQpIHtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtICs9ICcmJyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBvbmx5IHNlYXJjaC1wYXJhbWV0ZXIgaW4gdGhlIFVSTFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gJz8nICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaCA9IHNlYXJjaFBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gc2VhcmNoUGFyYW0gKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluaztcbiAgICB9LCAvLyBlbmQgb2Ygc2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCBvciBoYXNoIFVSTC1wYXJhbWV0ZXIgYXMgc3RyaW5nLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBoYXNoLXBhcmFtZXRlciBvZiB0aGUgVVJMIGlzIHJldHVybmVkLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHNlYXJjaCBmb3IgYSBHRVQtcGFyYW1ldGVyIGFuZCByZXR1cm4gaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0ZW50LCBvciBlbXB0eSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfHN0cmluZ30gIG9wdF9nZXRLZXkgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb3VuZCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChvcHRfZ2V0S2V5KSB7XG4gICAgICB2YXIgcGFyYW0sXG4gICAgICAgICAgcmVnRXg7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICBwYXJhbSA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICBwYXJhbSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ0V4ID0gbmV3IFJlZ0V4cCgnW1xcP1xcJl0nICsgb3B0X2dldEtleSArICc9KFteJl0rKScsICdpJyk7XG4gICAgICAgICAgcGFyYW0gPSByZWdFeC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWx0YS1lbmNvZGUgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFycmF5IHdpbGwgYmUgc29ydGVkIChsb3dlc3QgdG8gaGlnaGVzdClcbiAgICAgKiBiZWZvcmUgZW5jb2RpbmcuXG4gICAgICpcbiAgICAgKiBTbyBhZnRlciB0aGUgZW5jb2RpbmcgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBvdXRwdXQgY29udGFpbnNcbiAgICAgKiB0aGUgc21hbGxlc3QgbnVtYmVyIG9mIHRoZSBzZXQgYW5kIGVhY2ggZm9sbG93aW5nIG51bWJlciBqdXN0XG4gICAgICogcmVwcmVzZW50cyB0aGUgb2Zmc2V0IHRvIGl0cyBwcmV2aW91cyBuZWlnaGJvci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbW9zdGx5IGVmZmljaWVudCBmb3IgaGlnaCBudW1iZXJzLCB0aGF0IGFyZSBcImNsb3NlIHRvIGVhY2ggb3RoZXJcIi5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICBbMTMzNywgMTEsIDEwMSwgMTIzLCA5NiwgNjksIDQyLCA0Ml1cbiAgICAgKiAgIHdpbGwgYmUgc29ydGVkXG4gICAgICogICBbMTEsIDQyLCA0MiwgNjksIDk2LCAxMDEsIDEyMywgMTMzN11cbiAgICAgKiAgIGFuZCBlbmNvZGVkIHRvXG4gICAgICogICBbMTEsIDMxLCAwLCAyNywgMjcsIDUsIDIyLCAxMjE0XVxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFFbmNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcnJJbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFycklucHV0O1xuICAgICAgfVxuXG4gICAgICBhcnJJbnB1dC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH0pO1xuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IGFycklucHV0WzBdO1xuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IGFycklucHV0W2ldIC0gYXJySW5wdXRbaSAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRW5jb2RlKClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIGRlbHRhLWVuY29kZWQgYXJyYXkuXG4gICAgICogU2VlIGBkZWx0YUVuY29kZWAgZnVuY3Rpb24gZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YURlY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IHBhcnNlSW50KGFycklucHV0WzBdLCAxMCk7XG4gICAgICBpZiAoaXNOYU4oYXJySW5wdXRbMF0pKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBwYXJzZUludChhcnJJbnB1dFtpXSwgMTApICsgYXJyT3V0cHV0W2kgLSAxXTtcbiAgICAgICAgaWYgKGlzTmFOKGFyck91dHB1dFtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YURlY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgY2FsbCBmdW5jdGlvbnMgaW4gYGFyckhvb2tGdW5jdGlvbnNgIHdpdGggZ2l2ZW4gYHBhcmFtZXRlcnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PGZ1bmN0aW9uPn0gICBhcnJIb29rRnVuY3Rpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge21peGVkfSAgICAgICAgICAgICBwYXJhbWV0ZXJzICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY2FsbEhvb2tGdW5jdGlvbnM6IGZ1bmN0aW9uIChhcnJIb29rRnVuY3Rpb25zLCBwYXJhbWV0ZXJzKSB7XG4gICAgICB2YXIgajtcblxuICAgICAgaWYgKGFyckhvb2tGdW5jdGlvbnMgJiYgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcnJIb29rRnVuY3Rpb25zW2pdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcnJIb29rRnVuY3Rpb25zW2pdKHBhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImNhbGxIb29rRnVuY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGhleC1mb3JtYXRlZCBjb2xvciB2YWx1ZSBpbnRvIHJnYmEoKS1mb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIGhleCAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBvcHRfb3BhY2l0eSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eTogZnVuY3Rpb24gKGhleCwgb3B0X29wYWNpdHksIG9wdF9hcnJheSkge1xuXG4gICAgICB2YXIgYmlnaW50LCByLCBnLCBiLCBhO1xuXG4gICAgICBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICBvcHRfb3BhY2l0eS52YWx1ZSA9IHBhcnNlSW50KG9wdF9vcGFjaXR5LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIHR5cGVvZiBvcHRfb3BhY2l0eSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRfb3BhY2l0eSA9PT0gJ29iamVjdCcgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IG9wdF9vcGFjaXR5LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHIgPSAoYmlnaW50ID4+IDE2KSAmIDI1NTtcbiAgICAgIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgYiA9IGJpZ2ludCAmIDI1NTtcbiAgICAgIGEgPSBvcHRfb3BhY2l0eSA/IChvcHRfb3BhY2l0eSAvIDEwMCkgOiAxO1xuICAgICAgaWYob3B0X2FycmF5KXtcbiAgICAgICAgcmV0dXJuIFtyLGcsYixhXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVkdWNlIGEgZGVmaW5lZCBzdHlsZSwgdG8gYSBzaW1wbGVyIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBUaGUgcmVkdWNlZCBzdHlsZSBpcyB0aGUgZmlyc3Qgc3R5bGUgb2YgdGhlIGRlZmluZWQgc3R5bGVzZXQsXG4gICAgICogd2l0aCBhIDFweCB0aGljayBzdHJva2UgYW5kIGEgY2lyY2xlIHdpdGggYSA1cHggcmFkaXVzLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGFkZGl0aW9uYWwgZ2VvbWV0cmllcyB3aXRoIGEgbWFpbi1nZW9tZXRyeSxcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSB3aG9sZSBuZXcgc3R5bGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfHN0cmluZ30gICAgICAgICAgIHN0eWxlSWQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxvbC5zdHlsZS5TdHlsZT59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlZHVjZVN0eWxlOiBmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgdmFyIHN0eWxlLFxuICAgICAgICAgIHJlZHVjZWRTdHlsZSxcbiAgICAgICAgICBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlU3R5bGU7XG5cbiAgICAgIGlmICghYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0gfHwgIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUgPSBjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSgpWzBdO1xuXG4gICAgICBmaWxsU3R5bGUgPSBzdHlsZS5nZXRGaWxsKCk7XG4gICAgICBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgICAgc3Ryb2tlU3R5bGUuc2V0V2lkdGgoMSk7XG5cbiAgICAgIHJlZHVjZWRTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHRleHQ6IHN0eWxlLmdldFRleHQoKSxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFtyZWR1Y2VkU3R5bGVdO1xuICAgIH0sIC8vIGVuZCBvZiBcInJlZHVjZVN0eWxlXCJcblxuICAgIC8qKlxuICAgICAqIE1lYXN1cmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdpdmVuIGdlb21ldHJ5LlxuICAgICAqXG4gICAgICogSWYgdGhlIGdlb21ldHJ5IGlzIGEgYExpbmVTdHJpbmdgIHRoZSBmdW5jdGlvbiB3aWxsIG1lYXN1cmUgaXRzIGxlbmd0aCxcbiAgICAgKiBpcyBpdCBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgdGhlIGFjcmVhZ2UsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIGAwYC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBvcHRpb25hbCBgb3B0X2ZvcmNlTGluZU1lYXN1cmVgIHBhcmFtZXRlciBpcyBgdHJ1ZWBcbiAgICAgKiBhbmQgdGhlIGdlb21ldHJ5IGlzIGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSBpdHMgcGVyaW1ldGVyIGluc3RlYWRcbiAgICAgKiBvZiBpdHMgYWNyZWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5nZW9tLkxpbmVTdHJpbmd8b2wuZ2VvbS5Qb2x5Z29ufSAgIGdlb21ldHJ5ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgICAgICAgICAgICAgb3B0X2ZvcmNlTGluZU1lYXN1cmUgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxzdHJpbmc+fG51bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbWVhc3VyZUdlb21ldHJ5OiBmdW5jdGlvbiAoZ2VvbWV0cnksIG9wdF9mb3JjZUxpbmVNZWFzdXJlLCBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgIHNwaGVyZSxcbiAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICBjb29yZDEsXG4gICAgICAgICAgY29vcmQyLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9zcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZyB8fCAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24gJiYgb3B0X2ZvcmNlTGluZU1lYXN1cmUpKSB7XG5cbiAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICAgIGNvb3JkMSA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2ldLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIGNvb3JkMiA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2kgKyAxXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICB2YWx1ZSArPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoY29vcmQxLCBjb29yZDIsIDYzNzgxMzcpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgLy9nZW9tZXRyeSA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyhnZW9tZXRyeS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpKTtcbiAgICAgICAgLy9jb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldExpbmVhclJpbmcoMCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhvbC5zcGhlcmUuZ2V0QXJlYShnZW9tZXRyeSkpO1xuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlICYmIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFsdWUgPSBNYXRoLlBJICogTWF0aC5zcXJ0KHZhbHVlKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH1cblxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yYXdWYWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCgodmFsdWUgKiAxMDApIC8gMTAwKSAvIDEwMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZXh0ZW50IGZvciBhbiBhcnJheSBvZiBnZW9tZXRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0FycmF5LjxvbC5nZW9tLnNpbXBsZUdlb21ldHJ5Pn0gIGFyckdlb21ldHJpZXMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtvbC5FeHRlbnR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllczogZnVuY3Rpb24gKGFyckdlb21ldHJpZXMpIHtcbiAgICAgIHZhciBleHRlbnRTb3VyY2U7XG5cbiAgICAgIGlmICghYXJyR2VvbWV0cmllcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dlb21ldHJpZXMgbWlzc2luZyBmb3IgZXh0ZW50IGNhbGN1bGF0aW9uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW50U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIGV4dGVudFNvdXJjZS5hZGRGZWF0dXJlcyhhcnJHZW9tZXRyaWVzKTtcblxuICAgICAgcmV0dXJuIGV4dGVudFNvdXJjZS5nZXRFeHRlbnQoKSB8fCBvbC5FeHRlbnQoWzAsIDAsIDAsIDBdKTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcygpXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGFycmF5IG9mIGBleHRlbnRzYC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICBleHRlbnRzICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudHM6IGZ1bmN0aW9uIChleHRlbnRzLCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgIGtleTtcblxuICAgICAgaWYgKCFleHRlbnRzIHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL2V4dGVudCA9IG9sLmV4dGVudC5jcmVhdGVFbXB0eSgpO1xuXG4gICAgICBmb3IgKGtleSBpbiBleHRlbnRzKSB7XG4gICAgICAgIGlmIChleHRlbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGV4dGVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW50ID0gZXh0ZW50c1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbC5leHRlbnQuZXh0ZW5kKGV4dGVudCwgZXh0ZW50c1trZXldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpdFRvRXh0ZW50KGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgNSwgMCwgMCwgMik7XG5cblxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudHNcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYGV4dGVudGAuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuRXh0ZW50fSAgZXh0ZW50ICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHthcnJheX0gICAgICBvcHRfcGFkZGluZyAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5ab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWF4Wm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblJlc29sdXRpb24gICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnQ6IGZ1bmN0aW9uIChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbiwgb3B0X21pblpvb20sIG9wdF9tYXhab29tLCBvcHRfbWluUmVzb2x1dGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBmaXRPcHRpb25zO1xuXG4gICAgICBpZiAoIWV4dGVudCB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2aWV3ID0gbWFwLmdldFZpZXcoKTtcblxuICAgICAgZml0T3B0aW9ucyA9IHtcbiAgICAgICAgJ3BhZGRpbmcnOiBvcHRfcGFkZGluZyB8fCBbMjUsIDI1LCAyNSwgMjVdXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0X21pblJlc29sdXRpb24gJiYgb3B0X21pblJlc29sdXRpb24gPiAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluUmVzb2x1dGlvbiA9IG9wdF9taW5SZXNvbHV0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21pblpvb20gJiYgb3B0X21pblpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblpvb20gPSBvcHRfbWluWm9vbTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9tYXhab29tICYmIG9wdF9tYXhab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5tYXhab29tID0gb3B0X21heFpvb207XG4gICAgICB9XG5cbiAgICAgIC8vIGFuaW1hdGUgdGhlIFwiZml0dGluZ1wiIHdoZW4gYSBkdXJhdGlvbiBpcyBnaXZlbiBhbmQgaXRzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICBpZiAob3B0X2FuaW1hdGlvbkR1cmF0aW9uICYmIG9wdF9hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICBjZW50ZXI6IFswLCAwXVxuICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1hcC5iZWZvcmVSZW5kZXIoXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24ucGFuKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICBzb3VyY2U6IHZpZXcuZ2V0Q2VudGVyKClcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnpvb20oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCksIHtwYWRkaW5nOiBbMjUsIDI1LCAyNSwgMjVdfSk7XG4gICAgICAgIC8vdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgICAgLy92aWV3LnNldFpvb20odmlldy5nZXRab29tKCktMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50KClcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJ1biBhbGwgcGxhY2Vob2xkZXIgZnVuY3Rpb25zIGF0IG9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBzdHJJbnB1dCAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICAgICAgICAgICAgICBmZWF0dXJlICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXIgfCB1bmRlZmluZWR9ICBvcHRfbGF5ZXIgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaXJzdCB0d28gcGFyYW1ldGVycyBhcyB0aGV5IHdpbGwgYmUgdXNlZCBieSBhbGwgcGxhY2Vob2xkZXItZnVuY3Rpb25zXG4gICAgICAvLyAtPiBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyhzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQWxsUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke0ZOZnVuY3Rpb25OYW1lfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGB3aW5kb3cuZnVuY3Rpb25OYW1lKGZlYXR1cmUsIHN0eWxlKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqIFN0eWxlIHdpbGwgYmUgdGFrZW4gZWl0aGVyIGZyb20gdGhlIGZlYXR1cmUsIG9yIHRoZSBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXJ9ICBsYXllciAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgIWxheWVyKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7Rk4oW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGZ1bmN0aW9uTmFtZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZnVuY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1tmdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBzdHlsZVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgZmVhdHVyZS5nZXRTdHlsZSgpICYmIHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlKCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGF5ZXIuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgbGF5ZXIuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tmdW5jdGlvbk5hbWVdKGZlYXR1cmUsIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHBsYWNlaG9sZGVycywgaW4gYHN0cklucHV0YCwgZm9yIHZhcmlhYmxlcyBzZXQgYnkgdGhlIGdlb0VkaXRvci5cbiAgICAgKiBWYWxpZCBwbGFjZWhvbGRlcnMgYXJlOiAoW2tleV0gcmVwcmVzZW50cyB0aGUgc3RyaW5nbmFtZSBvZiB0aGUgdmFyaWFibGVzIGtleSlcbiAgICAgKiAgIGAke0VMW2tleV19YCAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVkxba2V5XX1gICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZSwgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICogICBgJHtFVltrZXldfWAgICA9PiAgVmFsdWUgb2YgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVlZba2V5XX1gICA9PiAgU2FtZSBhcyBgJHtFVltrZXldfWBcbiAgICAgKlxuICAgICAqIElmIG5vIGFwcHJvcHJpYXRlIHZhbHVlIGNhbiBiZSBmb3VuZCBmb3IgYSBwbGFjZWhvbGRlclxuICAgICAqIGl0IHdpbGwgc2ltcGx5IGJlIHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoRVY/W0xWXSkoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIHR5cGUsIGV2S2V5LCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIGVkaXRvclZhcnMsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBoYXMgZWRpdG9yVmFyc1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJykpIHtcbiAgICAgICAgICAgICAgZWRpdG9yVmFycyA9IGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJyk7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBmb3IgZWRpdG9yVmFyIHdpdGgga2V5ID09IGV2S2V5XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlZGl0b3JWYXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvclZhcnNbaV0ua2V5ID09PSBldktleSkge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgdHlwZSBpcyAnRVZMJyBkaXNwbGF5IGxhYmVsIG9ubHkgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0VMJyB8fCAodHlwZSA9PT0gJ0VWTCcgJiYgZWRpdG9yVmFyc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke2F0dHJ9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYGZlYXR1cmUuZ2V0KGF0dHIpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGF0dHIsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5nZXQoYXR0cikgfHwgJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKClcblxuICAgIG9iamVjdFRvQXJyYXk6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sIC8vIGVuZCBvZiBvYmplY3RUb0FycmF5KClcblxuICAgIGdldFZlY3RvckxheWVyKHNvdXJjZSwgc3R5bGUpIHtcbiAgICAgICAgdmFyIGZuU3R5bGU7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHN0eWxlIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm5TdHlsZSA9IHN0eWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgc3R5bGU6IGZuU3R5bGVcbiAgICAgICAgfSk7XG4gICAgfSwvLyBlbmQgb2YgXCJnZXRWZWN0b3JMYXllcigpXCJcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBzdWJkb21haW4gZnJvbSB0aGUgY3VycmVudCByZXF1ZXN0IGhvc3QgYW5kIHJldHVybnMgaXQuXG4gICAgICogQHJldHVybnMge3N0cmluZyB8ICp9XG4gICAgICovXG4gICAgZ2V0Q3VycmVudFN1YmRvbWFpbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgcmVkcmF3TWFwVmlldzogZnVuY3Rpb24gKG1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHZhciBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyVG9wTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgbWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQucHJlcGVuZChjb250cm9sQ29udGFpbmVyVG9wTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgICQoY29udHJvbENvbnRhaW5lclRvcExlZnQpLmFmdGVyKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcbiAgICAgIG1hcENvbnRyb2xsZXIubGVmdFNsaWRlRWxlbWVudHMucHVzaChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAgIGlmIChtYXBEYXRhLnNjYWxlbGluZSkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUgPSBuZXcgb2wuY29udHJvbC5TY2FsZUxpbmUoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgIH1cblxuICAgICAgJChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCkuYXBwZW5kKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViKTtcblxuICAgICAgaWYgKG1hcERhdGEuem9vbWxldmVsKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCA9IG5ldyBab29tbGV2ZWwoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbiA9IG5ldyBvbC5jb250cm9sLk1vdXNlUG9zaXRpb24oe1xuICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGNvb3JkaW5hdGVGb3JtYXQ6IG9sLmNvb3JkaW5hdGUudG9TdHJpbmdIRE1TLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XSB8fCAnJztcbiAgICB9LFxuICAgIHN0b3JlVmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlOyAvLyBvbmx5IHN0cmluZ3NcbiAgICB9XG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciB1dGlscyA9IHRoaXMuYzRnLm1hcHMudXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=