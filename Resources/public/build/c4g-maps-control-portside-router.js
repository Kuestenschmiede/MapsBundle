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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-portside-router.js");
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

/***/ "./Resources/public/js/c4g-maps-control-portside-router.js":
/*!*****************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-router.js ***!
  \*****************************************************************/
/*! exports provided: Router */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__ = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};





(function ($, c4g) {
    'use strict';

    /**
     * Constructor
     *
     * @extends {c4g.maps.control.Sideboard}
     *
     * @param  {[type]}  mapController  [description]
     * @param  {[type]}  config         [description]
     */

    c4g.maps.control.Router = function (opt_options) {

        // extend options
        this.options = $.extend({
            name: 'router',
            create: true,
            mapController: undefined,
            headline: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER,
            direction: 'left'
        }, opt_options);

        if (!this.options.mapController) {
            return false;
        }
        this.index = 0;

        // call parent constructor
        __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__["Sideboard"].call(this, this.options);
    };

    /**
     * Inherit from "Sideboard"
     */
    ol.inherits(c4g.maps.control.Router, __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__["Sideboard"]);

    /**
     * Methods
     */
    c4g.maps.control.Router.prototype = $.extend(c4g.maps.control.Router.prototype, {

        init: function init() {

            var self, viewRouter, selectInteraction, profileId;

            self = this;
            this.spinner.show();

            // check and load location styles via map-proxy
            this.options.mapController.proxy.locationStyleController.loadLocationStyles([this.options.mapController.data.router_from_locstyle, this.options.mapController.data.router_to_locstyle, this.options.mapController.data.router_point_locstyle]);

            // Add router layer(s)
            this.routingAltWaySource = new ol.source.Vector();
            this.routingWaySource = new ol.source.Vector();
            this.routerWayLayer = new ol.layer.Vector({
                source: this.routingWaySource,
                zIndex: 1,
                style: [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.6)',
                        width: 8
                    })
                }), new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 51, 119, 0.9)',
                        width: 4
                    })
                })]
            });
            this.routerAltWayLayer = new ol.layer.Vector({
                source: this.routingAltWaySource,
                zIndex: 0,
                style: [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.6)',
                        width: 8
                    })
                }), new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 51, 119, 0.4)',
                        width: 4
                    })
                })]
            });

            selectInteraction = new ol.interaction.Select({
                style: [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.0)',
                        width: 8
                    })
                }), new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 51, 119, 0.0)',
                        width: 4
                    })
                })]

            });
            selectInteraction.on('select', function (event) {

                if (event.selected[0]) {
                    var geometry = event.selected[0].getGeometry();
                    if (geometry && geometry instanceof ol.geom.LineString) {
                        self.showAltRoute(self.response, event.selected[0].getId());
                    }
                }
            });

            self.options.mapController.map.addInteraction(selectInteraction);

            this.routingHintSource = new ol.source.Vector();
            this.routerHintLayer = new ol.layer.Vector({
                source: this.routingHintSource,
                style: function style(feature, resolution) {
                    // console.log(self.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style);
                    return !self.options.mapController.proxy || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
                }
            });

            this.locationsSource = new ol.source.Vector();
            this.locationsLayer = new ol.layer.Vector({
                source: this.locationsSource,
                zIndex: 2
            });

            this.routerLayerGroup = new ol.layer.Group({
                layers: new ol.Collection([this.routerWayLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer]),
                visible: true
            });
            this.options.mapController.map.addLayer(this.routerLayerGroup);

            viewRouter = this.addUserInterface();
            viewRouter.activate();

            // store some vars for ajax-requests
            profileId = this.options.mapController.data.profile;
            this.geoSearchApi = this.options.mapController.data.api.geosearch + '/' + profileId;
            this.geoReverseSearchApi = this.options.mapController.data.api.geosearch_reverse + '/' + profileId;
            this.routingApi = this.options.mapController.data.api.routing + '/' + profileId;

            this.spinner.hide();

            return true;
        },

        preOpenFunction: function preOpenFunction(opt_options) {

            this.addMapInputInteraction();

            if (opt_options && opt_options.toLonLat) {
                this.performReverseSearch(this.$toInput, opt_options.toLonLat);
                this.toValue = new ol.geom.Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
            }
        },

        preHideFunction: function preHideFunction() {
            this.removeMapInputInteraction();
        },

        preCloseFunction: function preCloseFunction() {

            this.routingWaySource.clear();
            this.routingAltWaySource.clear();
            this.routingHintSource.clear();
            this.locationsSource.clear();

            $(this.routerInstructionsWrapper).empty();
            this.clearInput(this.$fromInput);
            if (this.overValue) {
                for (var id in this.overValue) {
                    this.clearOver(this.$overInput, id);
                    var elem = document.getElementById(id);
                    if (elem) {
                        elem.parentNode.parentNode.removeChild(elem.parentNode);
                    }
                }
            }
            this.clearInput(this.$toInput);

            this.removeMapInputInteraction();
        },

        removeMapInputInteraction: function removeMapInputInteraction() {

            var self = this;
            this.options.mapController.map.un('click', self.fnMapRouterInteraction);

            if (self.options.mapController.map.getInteractions() && self.options.mapController.map.getInteractions().getArray() && self.options.mapController.map.getInteractions().getArray()['9']) {
                self.options.mapController.map.getInteractions().getArray()['9'].setActive(false);
            }
        },

        addMapInputInteraction: function addMapInputInteraction() {

            var self = this,
                coordinate;

            self.fnMapRouterInteraction = function (evt) {

                coordinate = ol.proj.toLonLat(evt.coordinate);

                if (self.$fromInput.val() === "") {
                    //self.$fromInput.val(ol.proj.toLonLat(evt.coordinate));
                    self.performReverseSearch(self.$fromInput, coordinate);
                    self.fromValue = new ol.geom.Point(coordinate);

                    //self.$fromInput.trigger('change');
                } else if (self.$toInput.val() === "") {
                    //self.$toInput.val(ol.proj.toLonLat(evt.coordinate));
                    self.performReverseSearch(self.$toInput, coordinate);
                    self.toValue = new ol.geom.Point(coordinate);
                } else if (self.$overInput) {
                    if (self.$overInput.val() === "") {
                        self.performReverseSearch(self.$overInput, coordinate);
                        if (!self.overValue) {
                            self.overValue = {};
                        }
                        self.overValue[self.index] = new ol.geom.Point(coordinate);
                        self.$buttonOver.prop("disabled", false);
                    }
                }
            };

            this.options.mapController.map.on('click', self.fnMapRouterInteraction);
            // if(self.options.mapController.map.getInteractions().getArray()['9']){
            //     self.options.mapController.map.getInteractions().getArray()['9'].setActive(true);
            // }
            // else{
            //     self.options.mapController.map.getInteractions().getArray()['8'].setActive(true)
            // }
        },

        addUserInterface: function addUserInterface() {
            var _this = this;

            var self = void 0,
                routerView = void 0,
                routerViewInputWrapper = void 0,
                routerViewContentWrapper = void 0,
                routerViewContentHeadline = void 0,
                print = void 0,
                routeProfile = [],
                routerFromLabel = void 0,
                routerOverLabel = void 0,
                routerToLabel = void 0,
                routerFromClear = void 0,
                routerOverClear = void 0,
                routerToClear = void 0,
                switchFromTo = void 0,
                buttonOver = void 0;

            self = this;

            routerViewInputWrapper = document.createElement('div');
            routerViewContentWrapper = document.createElement('div');

            self.routerViewContentWrapper = routerViewContentWrapper;

            // @TODO: Add router-info-text
            // routerViewContentHeadline = document.createElement('h4');
            // routerViewContentHeadline.innerHTML = langConstants.ROUTER_VIEW_ADDRESS_INPUT;
            // routerViewContentWrapper.appendChild(routerViewContentHeadline);

            this.fromInputWrapper = document.createElement('div');
            this.fromInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_WRAPPER;

            this.fromInput = document.createElement("input");
            this.fromInput.type = "text";
            this.fromInput.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_FROM;
            this.fromInput.id = this.fromInput.name = "routingFrom";

            routerFromLabel = document.createElement('label');
            routerFromLabel.setAttribute('for', 'routingFrom');
            routerFromLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_FROM_LABEL;

            routerFromClear = document.createElement('button');
            routerFromClear.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_CLEAR;
            routerFromClear.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_CLEAR_TITLE;
            routerFromClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_CLEAR_HTML;
            this.$routerFromClear = $(routerFromClear);

            switchFromTo = document.createElement('button');
            switchFromTo.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_SWITCH;
            switchFromTo.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_SWITCH;
            this.$switchFromTo = $(switchFromTo);

            buttonOver = document.createElement('button');
            buttonOver.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_OVER;
            buttonOver.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_OVER;
            this.$buttonOver = $(buttonOver);

            print = document.createElement('button');
            print.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PRINT;
            print.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_PRINT;
            this.$print = $(print);

            this.routerButtonBar = document.createElement('div');
            this.routerButtonBar.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_BUTTONBAR;
            this.routerButtonBar.appendChild(switchFromTo);
            this.routerButtonBar.appendChild(buttonOver);
            this.routerButtonBar.appendChild(print);

            // $(print).insertBefore(document.getElementsByClassName("c4g-portside-hide")[0]);

            if (this.options.mapController.data.router_api_selection == '2') {
                //OpenRouteService
                if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {
                    //check for single profile and set this as  active routing profile
                    this.routeProfile = [];
                    this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
                } else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) {
                    //check for multiple profiles and add profile-changer
                    this.routeProfile = document.createElement('div');
                    $(this.routeProfile).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PROFILE_WRAPPER);
                    if (this.options.mapController.data.router_profiles['0']) {
                        //add button for profile driving-car
                        routeProfile.car = document.createElement('button');
                        $(routeProfile.car).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PROFILE_CAR);
                        this.$routeProfileCar = $(routeProfile.car);
                        this.routeProfile.appendChild(routeProfile.car);
                        this.$routeProfileCar.click(function (event) {
                            self.clearSiblings(this);
                            self.routeProfile.active = '0';
                            self.recalculateRoute();
                        });
                    }

                    if (this.options.mapController.data.router_profiles['1']) {
                        //add button for profile driving-hgv
                        routeProfile.hgv = document.createElement('button');
                        $(routeProfile.hgv).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PROFILE_HGV);
                        this.routeProfile.appendChild(routeProfile.hgv);
                        this.$routeProfileHgv = $(routeProfile.hgv);

                        this.$routeProfileHgv.click(function (event) {
                            self.clearSiblings(this);
                            self.routeProfile.active = '1';
                            self.recalculateRoute();
                        });
                    }
                    if (this.options.mapController.data.router_profiles['2'] || this.options.mapController.data.router_profiles['3'] || this.options.mapController.data.router_profiles['4'] || this.options.mapController.data.router_profiles['5'] || this.options.mapController.data.router_profiles['6'] || this.options.mapController.data.router_profiles['7']) {
                        //add button and dropdown for cycling profiles
                        var spanBike = document.createElement('span');
                        routeProfile.bike = document.createElement('button');
                        routeProfile.bike.list = document.createElement('ul');
                        this.$routeProfileBike = $(routeProfile.bike);
                        for (var i = 2; i < 8; i++) {
                            //iterate over all possible cycling profiles
                            if (this.options.mapController.data.router_profiles[i]) {
                                (function () {
                                    var child = document.createElement('li');
                                    child.innerHTML = _this.options.mapController.data.router_profiles[i];
                                    $(child).data('profile', [i]);
                                    $(child).click(function (event) {
                                        self.childClick($(child));
                                    });
                                    if (!_this.$routeProfileBike.data('profile')) {
                                        //add existing default profile to button
                                        _this.$routeProfileBike.data('profile', i);
                                        $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ACTIVE);
                                    }
                                    routeProfile.bike.list.appendChild(child);
                                })();
                            }
                        }

                        $(routeProfile.bike).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PROFILE_BIKE);

                        if (routeProfile.bike.list.children.length == 1) {
                            //ignore dropdown list, if only one cycling profile is enabled
                            this.routeProfile.appendChild(routeProfile.bike);
                            this.$routeProfileBike.click(function (event) {
                                self.clearSiblings(this);
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        } else {
                            //append with dropdown, if multiple cycling profiles are enabled
                            spanBike.appendChild(routeProfile.bike);
                            spanBike.appendChild(routeProfile.bike.list);
                            this.routeProfile.appendChild(spanBike);
                            this.$routeProfileBike.click(function (event) {
                                self.clearSiblings($(this).parent());
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        }
                    }
                    if (this.options.mapController.data.router_profiles['8'] || this.options.mapController.data.router_profiles['9']) {
                        //add button and dropdown for walking profiles
                        var spanFoot = document.createElement('span');
                        routeProfile.foot = document.createElement('button');
                        routeProfile.foot.list = document.createElement('ul');
                        this.$routeProfileFoot = $(routeProfile.foot);
                        for (var _i = 8; _i < 10; _i++) {
                            //iterate over possible profiles
                            if (this.options.mapController.data.router_profiles[_i]) {
                                var child = document.createElement('li');
                                child.innerHTML = this.options.mapController.data.router_profiles[_i];
                                $(child).data('profile', [_i]);
                                $(child).click(function (event) {
                                    self.childClick($(this));
                                });
                                if (!this.$routeProfileFoot.data('profile')) {
                                    //add existing default profile to button
                                    this.$routeProfileFoot.data('profile', _i);
                                    $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ACTIVE);
                                }
                                routeProfile.foot.list.appendChild(child);
                            }
                        }

                        $(routeProfile.foot).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PROFILE_FOOT);

                        if (routeProfile.foot.list.children.length == 1) {
                            //ignore dropdown list, if only one walking profile is enabled
                            this.routeProfile.appendChild(routeProfile.foot);
                            this.$routeProfileFoot.click(function (event) {
                                self.clearSiblings(this);
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        } else {
                            //append with dropdown, if multiple walking profiles are enabled
                            spanFoot.appendChild(routeProfile.foot);
                            spanFoot.appendChild(routeProfile.foot.list);
                            this.routeProfile.appendChild(spanFoot);
                            this.$routeProfileFoot.click(function (event) {
                                self.clearSiblings($(this).parent());
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        }
                    }
                    if (this.options.mapController.data.router_profiles['10']) {
                        //add button for profile wheelchair
                        routeProfile.wheelchair = document.createElement('button');
                        $(routeProfile.wheelchair).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_PROFILE_WHEELCHAIR);
                        this.$routeProfileWheelchair = $(routeProfile.wheelchair);
                        this.routeProfile.appendChild(routeProfile.wheelchair);
                        this.$routeProfileWheelchair.click(function (event) {
                            self.clearSiblings(this);
                            self.routeProfile.active = '10';
                            self.recalculateRoute();
                        });
                    }
                    this.childClick = function ($element) {
                        //handle the click inside the profile dropdown
                        self.routeProfile.active = $element.data('profile'); //activate selected profile
                        self.clearSiblings($element);
                        self.recalculateRoute(); //update the route
                    };
                    this.clearSiblings = function (element) {
                        //function to adjust css-classes after changing profile
                        var siblings = $(element).parent().children();
                        for (var _i2 = 0; _i2 < siblings.length; _i2++) {
                            $(siblings[_i2]).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ACTIVE);
                        }
                        $(element).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ACTIVE);
                    };
                    for (var profile in this.options.mapController.data.router_profiles) {
                        //set default value for initial routing
                        if (this.options.mapController.data.router_profiles.hasOwnProperty(profile)) {
                            this.routeProfile.active = profile;
                            break;
                        }
                    }
                } else {
                    console.warn('No Router Profiles enabled');
                }
            }

            this.fromInputWrapper.appendChild(routerFromLabel);
            this.fromInputWrapper.appendChild(this.fromInput);
            this.fromInputWrapper.appendChild(routerFromClear);
            if (buttonOver && this.options.mapController.data.router_api_selection == '0') {
                this.$buttonOver.hide();
            }

            this.$routerFromClear.hide();

            this.$routerFromClear.click(function (event) {
                event.preventDefault();
                self.clearInput(self.$fromInput);
            });

            this.$buttonOver.click(function (event) {
                event.preventDefault();
                self.index++;
                self.$buttonOver.prop("disabled", true);

                self.overInputWrapper = document.createElement('div');
                self.overInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_WRAPPER;

                self.overInput = document.createElement("input");
                self.overInput.type = "text";
                self.overInput.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_FROM;
                self.overInput.id = self.overInput.name = "routingOver";

                routerOverLabel = document.createElement('label');
                routerOverLabel.setAttribute('for', 'routingFrom');
                routerOverLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_Label_Interim;

                routerOverClear = document.createElement('button');
                routerOverClear.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_CLEAR;
                routerOverClear.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_CLEAR_TITLE;
                routerOverClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_CLEAR_HTML;
                routerOverClear.id = self.index;
                self.$routerOverClear = $(routerOverClear);

                self.overInputWrapper.appendChild(routerOverLabel);
                self.overInputWrapper.appendChild(self.overInput);
                self.overInputWrapper.appendChild(routerOverClear);

                routerViewInputWrapper.appendChild(self.overInputWrapper);
                self.$routerOverClear.click(function (event) {
                    event.preventDefault();
                    self.clearOver(self.$overInput, this.id);
                    $(this).parent().remove();
                    //buttonOver.show();
                });
                self.$overInput = $(self.overInput);
                self.$overInput.on('change', function () {
                    self.performSearch(self.$overInput, "overValue");
                });
            });

            this.$switchFromTo.click(function (event) {
                event.preventDefault();
                var switchVarName = document.getElementById("routingFrom").value;
                document.getElementById("routingFrom").value = document.getElementById("routingTo").value;
                document.getElementById("routingTo").value = switchVarName;
                var switchVarVal = self.fromValue;
                self.fromValue = self.toValue;
                self.toValue = switchVarVal;
                self.recalculateRoute();
            });
            this.$print.click(function (event) {
                event.preventDefault();
                var routingContent = document.getElementsByClassName("c4g-router-instructions-wrapper")[0];
                if (!routingContent) return;
                var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write(routingContent.innerHTML);
                WinPrint.document.close();
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
            });

            this.$fromInput = $(this.fromInput);
            this.$fromInput.on('change', function () {
                self.performSearch(self.$fromInput, "fromValue");
                if (self.$fromInput.val() !== "") {
                    self.$routerFromClear.show();
                } else {
                    self.$routerFromClear.hide();
                }
            });

            routerViewInputWrapper.appendChild(this.routerButtonBar);
            if (this.routeProfile && this.routeProfile.children) {
                routerViewInputWrapper.appendChild(this.routeProfile);
            }
            routerViewInputWrapper.appendChild(this.fromInputWrapper);

            this.toInputWrapper = document.createElement('div');
            this.toInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_WRAPPER;

            this.toInput = document.createElement("input");
            this.toInput.type = "text";
            this.toInput.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_TO;
            this.toInput.id = this.toInput.name = "routingTo";

            routerToLabel = document.createElement('label');
            routerToLabel.setAttribute('for', 'routingTo');
            routerToLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_TO_LABEL;

            routerToClear = document.createElement('button');
            routerToClear.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INPUT_CLEAR;
            routerToClear.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_CLEAR_TITLE;
            routerToClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_CLEAR_HTML;
            this.$routerToClear = $(routerToClear);

            this.toInputWrapper.appendChild(routerToLabel);
            this.toInputWrapper.appendChild(this.toInput);
            this.toInputWrapper.appendChild(routerToClear);

            this.$routerToClear.hide();

            self.$routerToClear.click(function (event) {
                event.preventDefault();
                self.clearInput(self.$toInput);
            });

            this.$toInput = $(this.toInput);
            this.$toInput.on('change', function () {
                self.performSearch(self.$toInput, "toValue");
                if (self.$toInput.val() !== "") {
                    self.$routerToClear.show();
                } else {
                    self.$routerToClear.hide();
                }
            });

            routerViewInputWrapper.appendChild(this.toInputWrapper);

            self.statusBar.appendChild(this.getAttribution());

            routerView = this.addView({
                name: 'router-view',
                triggerConfig: {
                    tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_ADDRESS_INPUT,
                    className: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_VIEW_ADDRESS_INPUT,
                    withHeadline: false
                },
                sectionElements: [{ section: this.topToolbar, element: routerViewInputWrapper }, { section: this.contentContainer, element: routerViewContentWrapper }]
            });

            return routerView;
        },

        setInput: function setInput(from, coordinate) {
            // perform geoSearch on given location
            // fill from/to field
            //

            if (!coordinate) {
                return false;
            }

            coordinate = ol.proj.toLonLat(coordinate);

            if (from) {
                this.performReverseSearch(this.$fromInput, coordinate);
                this.fromValue = new ol.geom.Point(coordinate);

                //this.$fromInput.trigger('change');
            } else {
                this.performReverseSearch(this.$toInput, coordinate);
                this.toValue = new ol.geom.Point(coordinate);
            }

            this.recalculateRoute();
        },

        getAttribution: function getAttribution() {
            var self = this,
                attributionSearch = void 0,
                attributionRouter = void 0,
                attributionRouterHost = void 0,
                attributionWrapper = void 0,
                attributionHtml = void 0;
            switch (self.options.mapController.data.router_api_selection) {
                case "0":
                    attributionRouter = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';
                    break;
                case "1":
                    attributionRouter = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';
                    break;
                case "2":
                    attributionRouter = '<a target="_blank" href="https://openrouteservice.org/">openrouteservice</a>';
                    break;
            }
            switch (self.options.mapController.data.geosearch.geosearch_engine) {
                case "1":
                    //OSM
                    attributionSearch = '- Geocoder by <a target="_blank" href="https://nominatim.openstreetmap.org/">OpenStreetMap</a> ';
                    break;
                case "2":
                    //Mapquest
                    attributionSearch = '- Geocoder by <a target="_blank" href="http://www.mapquest.com/">MapQuest</a> ';
                    break;
                case "3":
                    //custom
                    attributionSearch = '- Nominatim-Geocoder ';
                    break;
                case "4":
                    //con4gis
                    attributionSearch = '- Geocoder by <a target="_blank" href="https://www.con4gis.org/kartendienste.html">con4gis</a> ';
                    break;
            }
            switch (self.options.mapController.data.router_api_selection) {
                case "0":
                    attributionRouterHost = '- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';
                    break;
                case "1":
                    attributionRouterHost = '- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';
                    break;
                case "2":
                    attributionRouterHost = '\'- ORS hosting by <a target="_blank" href="https://www.geog.uni-heidelberg.de/gis/heigit_en.html">HeiGIT</a>\'';
                    break;
            }

            //ToDo check params
            attributionHtml = attributionRouter + attributionSearch + attributionRouterHost;
            attributionWrapper = document.createElement('div');
            attributionWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_ATTRIBUTION_WRAPPER;

            attributionWrapper.innerHTML = attributionHtml;

            if (self.options.mapController.data.router_attribution) {
                attributionWrapper.innerHTML = self.options.mapController.data.router_attribution;
            }

            return attributionWrapper;
        },

        recalculateRoute: function recalculateRoute() {
            var tmpFeature,
                proxy = this.options.mapController.proxy;

            this.locationsSource.clear();
            if (this.fromValue) {
                tmpFeature = new ol.Feature({
                    geometry: this.fromValue.clone().transform('EPSG:4326', 'EPSG:3857')
                });
                if (this.options.mapController.data.router_from_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle]) {
                    tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle].style);
                }
                this.locationsSource.addFeature(tmpFeature);
            }
            if (this.toValue) {
                tmpFeature = new ol.Feature({
                    geometry: this.toValue.clone().transform('EPSG:4326', 'EPSG:3857')
                });
                if (this.options.mapController.data.router_to_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle]) {
                    tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle].style);
                }
                this.locationsSource.addFeature(tmpFeature);
            }
            if (this.overValue) {
                for (var propt in this.overValue) {
                    tmpFeature = new ol.Feature({
                        geometry: this.overValue[propt].clone().transform('EPSG:4326', 'EPSG:3857')
                    });
                    if (this.options.mapController.data.router_interim_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle]) {
                        tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle].style);
                    }
                    this.locationsSource.addFeature(tmpFeature);
                }
            }
            if (this.fromValue && this.toValue) {
                if (this.overValue) {
                    this.performViaRoute(this.fromValue, this.toValue, this.overValue);
                } else {
                    this.performViaRoute(this.fromValue, this.toValue);
                }
            }
        },

        performViaRoute: function performViaRoute(fromPoint, toPoint, overPoint) {

            var url, self, fromCoord, toCoord, overCoord;

            self = this;

            fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
            toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
            if (overPoint) {
                overCoord = new Array();
                for (var propt in overPoint) {
                    overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
                }
            }
            if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {
                //OSRM-API:5.x or ORS- API
                url = self.routingApi + '/' + fromCoord;

                if (overPoint) {
                    for (var i = 0; i < overCoord.length; i++) {
                        url += '/' + overCoord[i];
                    }
                }
                url += '/' + toCoord;
                if (this.routeProfile && this.routeProfile.active) {
                    url += '?profile=' + this.routeProfile.active;
                }
                this.spinner.show();

                jQuery.ajax({
                    'url': url }).done(function (response) {
                    self.response = response;
                    if (response) {
                        self.showRoute(response);
                    }
                }).always(function () {
                    self.spinner.hide();
                    self.update();
                });

                return '';
            } else {
                //OSRM-API:<5
                url = self.routingApi + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
                this.spinner.show();

                jQuery.ajax({
                    'url': url }).done(function (response) {

                    if (response) {
                        self.showRoute(response);
                    }
                }).always(function () {
                    self.spinner.hide();
                    self.update();
                });

                return '';
            }
        },

        showRoute: function showRoute(routeResponse) {

            this.showRouteLayer(routeResponse, 0);
            this.showRouteInstructions(routeResponse, 0);
        },
        showAltRoute: function showAltRoute(routeResponse, routeNumber) {
            this.showRouteLayer(routeResponse, routeNumber);
            this.showRouteInstructions(routeResponse, routeNumber);
        },

        showRouteLayer: function showRouteLayer(routeResponse, routeNumber) {

            var mapView,
                wayPolyline,
                routeFeatures,
                altRouteFeatures,
                rightPadding,
                leftPadding,
                routeNumber = routeNumber || 0;

            if (routeResponse) {
                this.routingWaySource.clear();
                this.routingAltWaySource.clear();
                mapView = this.options.mapController.map.getView();

                if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {
                    //OSRM-API:5.x
                    wayPolyline = new ol.format.Polyline();

                    // add route

                    if (routeResponse.routes && routeResponse.routes[1]) {
                        //check for alternative route
                        if (routeNumber == 1) {
                            altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: mapView.getProjection()
                            });
                            altRouteFeatures[0].setId(0);
                        } else {
                            altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[1].geometry, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: mapView.getProjection()
                            });
                            altRouteFeatures[0].setId(1);
                        }
                    }
                    routeFeatures = wayPolyline.readFeatures(routeResponse.routes[routeNumber].geometry, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: mapView.getProjection()
                    });
                    routeFeatures[0].setId(routeNumber);
                } else {
                    //OSRM-API:<5
                    wayPolyline = new ol.format.Polyline({
                        'factor': this.options.mapController.data.router_viaroute_precision || 1e6
                    });

                    // add route
                    routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: mapView.getProjection()
                    });
                }
                if (this.options.mapController.data.router_alternative == '1') {
                    if (routeResponse.routes && routeResponse.routes.length > 1 && routeResponse.routes[1]) {
                        this.routingAltWaySource.addFeatures(altRouteFeatures);
                    }
                }
                this.routingWaySource.addFeatures(routeFeatures);
                // render view
                // so the route gets drawn before the animation starts
                this.options.mapController.map.renderSync();

                // animation
                mapView.animate({
                    start: +new Date(),
                    duration: 2000,
                    resolution: mapView.getResolution(),
                    center: [0, 0]
                    //rotation: Math.PI
                });
                // this.options.mapController.map.beforeRender(
                //     ol.animation.pan({
                //       start: +new Date(),
                //       duration: 2000,
                //       source: mapView.getCenter()
                //     }),
                //     ol.animation.zoom({
                //       start: +new Date(),
                //       duration: 2000,
                //       resolution: mapView.getResolution()
                //     })
                // );

                // calculate padding
                leftPadding = 0;
                if (this.options.mapController.activePortside && this.options.mapController.activePortside.container) {
                    leftPadding = $(this.options.mapController.activePortside.container).outerWidth();
                }

                rightPadding = 0;
                if (this.options.mapController.activeStarboard && this.options.mapController.activeStarboard.container) {
                    rightPadding = $(this.options.mapController.activeStarboard.container).outerWidth();
                }

                // center on route
                mapView.fit(routeFeatures[0].getGeometry(), this.options.mapController.map.getSize(), {
                    padding: [0, rightPadding, 0, leftPadding]
                });
            }
        },

        getInstructionIcon: function getInstructionIcon(strMod, strType) {
            var image = "";

            switch (strMod) {
                case "right":
                    image = "turn-right.png";
                    break;
                case "left":
                    image = "turn-left.png";
                    break;
                case "sharp left":
                    image = "sharp-left.png";
                    break;
                case "sharp right":
                    image = "sharp-right.png";
                    break;
                case "slight left":
                    image = "slight-left.png";
                    break;
                case "slight right":
                    image = "slight-right.png";
                    break;
                case "uturn":
                    image = "u-turn.png";
                    break;
                case "straight":
                    image = "continue.png";
                    break;
                default:
                    image = "default.png";
                    break;
            }
            switch (strType) {
                case "depart":
                    image = "head.png";
                    break;
                case "arrive":
                    image = "target.png";
                    break;
                case "roundabout":
                    image = "round-about.png";
                    break;
                default:
                    break;
            }

            return "bundles/con4gismaps/vendor/osrm/images/" + image;
        },
        getInstructionIconORS: function getInstructionIconORS(intType) {
            var image = void 0;
            switch (intType) {
                case 0:
                    image = "turn-left.png";
                    break;
                case 1:
                    image = "turn-right.png";
                    break;
                case 2:
                    image = "sharp-left.png";
                    break;
                case 3:
                    image = "sharp-right.png";
                    break;
                case 4:
                    image = "slight-left.png";
                    break;
                case 5:
                    image = "slight-right.png";
                    break;
                case 6:
                    image = "continue.png";
                    break;
                case 7:
                    image = "round-about.png";
                    break;
                case 8:
                    image = "round-about.png";
                    break;
                case 9:
                    image = "u-turn.png";
                    break;
                case 10:
                    image = "target.png";
                    break;
                case 11:
                    image = "head.png";
                    break;
                case 12:
                    image = "slight-left.png";
                    break;
                case 13:
                    image = "slight-right.png";
                    break;

            }
            return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
        },

        getTypeText: function getTypeText(strType) {
            var textID;

            switch (strType) {
                case "turn":
                    textID = "ROUTER_5.X_TYPE_0";
                    break;
                case "new name":
                    textID = "ROUTER_5.X_TYPE_1";
                    break;
                case "depart":
                    textID = "ROUTER_5.X_TYPE_2";
                    break;
                case "arrive":
                    textID = "ROUTER_5.X_TYPE_3";
                    break;
                case "merge":
                    textID = "ROUTER_5.X_TYPE_4";
                    break;
                case "on ramp":
                    textID = "ROUTER_5.X_TYPE_5";
                    break;
                case "off ramp":
                    textID = "ROUTER_5.X_TYPE_6";
                    break;
                case "fork":
                    textID = "ROUTER_5.X_TYPE_7";
                    break;
                case "end of road":
                    textID = "ROUTER_5.X_TYPE_8";
                    break;
                case "use lane":
                    textID = "ROUTER_5.X_TYPE_9";
                    break;
                case "continue":
                    textID = "ROUTER_5.X_TYPE_10";
                    break;
                case "roundabout":
                case "exit roundabout":
                    textID = "ROUTER_5.X_TYPE_11";
                    break;
                case "rotary":
                case "exit rotary":
                    textID = "ROUTER_5.X_TYPE_12";
                    break;
                case "roundabout turn":
                    textID = "ROUTER_5.X_TYPE_13";
                    break;
                case "notification":
                    textID = "ROUTER_5.X_TYPE_14";
                    break;
                default:
                    break;
            }
            return __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"][textID];
        },

        getModifierText: function getModifierText(strModifier) {
            var textID;

            switch (strModifier) {
                case "uturn":
                    textID = "ROUTER_5.X_MOD_0";
                    break;
                case "sharp right":
                    textID = "ROUTER_5.X_MOD_1";
                    break;
                case "right":
                    textID = "ROUTER_5.X_MOD_2";
                    break;
                case "slight right":
                    textID = "ROUTER_5.X_MOD_3";
                    break;
                case "straight":
                    textID = "ROUTER_5.X_MOD_4";
                    break;
                case "slight left":
                    textID = "ROUTER_5.X_MOD_5";
                    break;
                case "left":
                    textID = "ROUTER_5.X_MOD_6";
                    break;
                case "sharp left":
                    textID = "ROUTER_5.X_MOD_7";
                    break;
                default:
                    textID = "ROUTER_5.X_MOD_8";
            }
            return __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"][textID];
        },
        getDrivingInstructionIcon: function getDrivingInstructionIcon(instructionId) {
            var id, image;

            id = instructionId.replace(/^11-\d{1,}$/, "11"); // dumb check, if there is a roundabout (all have the same icon)

            image = 'default.png';

            switch (id) {
                case '1':
                    image = 'continue.png';
                    break;
                case '2':
                    image = 'slight-right.png';
                    break;
                case '3':
                    image = 'turn-right.png';
                    break;
                case '4':
                    image = 'sharp-right.png';
                    break;
                case '5':
                    image = 'u-turn.png';
                    break;
                case '6':
                    image = 'sharp-left.png';
                    break;
                case '7':
                    image = 'turn-left.png';
                    break;
                case '8':
                    image = 'slight-left.png';
                    break;
                case '10':
                    image = 'head.png';
                    break;
                case '11':
                    image = 'round-about.png';
                    break;
                case '15':
                    image = 'target.png';
                    break;
            }
            return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
        },
        getText: function getText(id) {

            var text_id = "ROUTER_" + id;

            if (__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"][text_id] === undefined) {
                console.warn(text_id + " can't find in language files.");
            }
            return __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"][text_id];
        },

        getDrivingInstruction: function getDrivingInstruction(instructionId) {

            var id, description;

            id = "DIRECTION_" + instructionId.replace(/^11-\d{2,}$/, "11-x"); // dumb check, if there are 10+ exits on a roundabout (say the same for exit 10+)

            description = this.getText(id);
            if (!description) {
                description = this.getText('DIRECTION_0');
            }

            return description;
        },
        showRouteInstructions: function showRouteInstructions(routeResponse, routeNumber) {

            var self,
                routerInstruction,
                routerInstructionsHeader,
                routerInstructionsHtml,
                instr,
                strType,
                strMod,
                rowstyle,
                routeNumber = routeNumber || 0,
                i,
                j,
                route_name_0 = "",
                route_name_1 = "",
                total_distance = "",
                total_time = "";

            self = this;

            if (self.routerInstructionsWrapper === undefined) {
                self.routerInstructionsWrapper = document.createElement('div');
                self.routerInstructionsWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_WRAPPER;
                self.routerViewContentWrapper.appendChild(self.routerInstructionsWrapper);
            } else {
                $(self.routerInstructionsWrapper).empty();
            }

            routerInstructionsHeader = document.createElement('div');
            routerInstructionsHeader.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_HEADER;

            if (routeResponse) {
                if (this.options.mapController.data.router_api_selection == '1') {
                    //OSRM-API:5.x
                    if (routeResponse.routes[routeNumber].legs[0].summary) {
                        route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
                        route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];
                        if (routeResponse.routes[routeNumber].legs[1]) {
                            route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
                        }
                    }
                    total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].distance);
                    total_time = this.toHumanTime(routeResponse.routes[routeNumber].duration);
                } else if (this.options.mapController.data.router_api_selection == '0') {
                    //OSRM-API:<5
                    if (routeResponse.route_name) {
                        route_name_0 = routeResponse.route_name[0];
                        route_name_1 = routeResponse.route_name[1];
                    }

                    if (routeResponse.route_summary) {
                        total_distance = this.toHumanDistance(routeResponse.route_summary.total_distance);
                        total_time = this.toHumanTime(routeResponse.route_summary.total_time);
                    }
                } else if (this.options.mapController.data.router_api_selection == '2') {
                    //OSR-API
                    total_time = this.toHumanTime(routeResponse.routes[routeNumber].summary.duration);
                    total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].summary.distance);
                }

                if (route_name_0 && route_name_1) {
                    routerInstructionsHeader.innerHTML = '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
                } else if (this.routeProfile.active) {
                    routerInstructionsHeader.innerHTML = '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.options.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
                }

                self.routerInstructionsWrapper.appendChild(routerInstructionsHeader);

                routerInstruction = document.createElement('div');

                routerInstructionsHtml = '<table class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';
                if (this.options.mapController.data.router_api_selection === '1') {
                    //OSRM-API:5.x
                    for (j = 0; j < routeResponse.routes[routeNumber].legs.length; j += 1) {
                        for (i = 0; i < routeResponse.routes[routeNumber].legs[j].steps.length; i += 1) {
                            instr = routeResponse.routes[routeNumber].legs[j].steps[i];

                            strType = instr.maneuver.type;
                            if (instr.maneuver.modifier) {
                                strMod = instr.maneuver.modifier;
                            }
                            rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_ODD;

                            if (i % 2 === 0) {
                                rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_EVEN;
                            }

                            rowstyle += " " + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM;

                            routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                            routerInstructionsHtml += '<img class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIcon(strMod, strType) + '" alt=""/>';
                            routerInstructionsHtml += '</td>';

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';

                            // build route description
                            var instructiontext = this.getTypeText(instr.maneuver.type).replace(/%s/, instr.name).replace(/%m/, this.getModifierText(instr.maneuver.modifier)).replace(/%z/, instr.maneuver.exit);
                            if (instr.name.length < 1) {
                                instructiontext = instructiontext.replace(/\[.*?\]/g, '');
                            } else {
                                instructiontext = instructiontext.replace(/\[(.*)\]/, "$1");
                            }
                            routerInstructionsHtml += instructiontext;

                            routerInstructionsHtml += '</div>';
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                            if (i !== routeResponse.routes[routeNumber].legs[0].steps.length - 1) {
                                routerInstructionsHtml += this.toHumanDistance(instr.distance);
                            }
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += "</tr>";
                        }
                    }
                } else if (this.options.mapController.data.router_api_selection === '0') {
                    //OSRM-API:<5
                    for (i = 0; i < routeResponse.route_instructions.length; i += 1) {
                        instr = routeResponse.route_instructions[i];
                        rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_ODD;

                        if (i % 2 === 0) {
                            rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_EVEN;
                        }

                        rowstyle += " " + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM;

                        routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                        routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                        routerInstructionsHtml += '<img class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getDrivingInstructionIcon(instr[0]) + '" alt=""/>';
                        routerInstructionsHtml += '</td>';

                        routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr[3] + '">';

                        // build route description
                        if (instr[1] !== "") {
                            routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "$1").replace(/%s/, instr[1]).replace(/%d/, this.getText(instr[6]));
                        } else {
                            routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "").replace(/%d/, this.getText(instr[6]));
                        }

                        routerInstructionsHtml += '</div>';
                        routerInstructionsHtml += "</td>";

                        routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                        if (i !== routeResponse.route_instructions.length - 1) {
                            routerInstructionsHtml += this.toHumanDistance(instr[5]);
                        }
                        routerInstructionsHtml += "</td>";

                        routerInstructionsHtml += "</tr>";
                    }
                } else if (this.options.mapController.data.router_api_selection === '2') {
                    //OpenRouteService
                    for (j = 0; j < routeResponse.routes[routeNumber].segments.length; j += 1) {
                        for (i = 0; i < routeResponse.routes[routeNumber].segments[j].steps.length; i += 1) {
                            instr = routeResponse.routes[routeNumber].segments[j].steps[i];

                            strType = instr.type;

                            rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_ODD;

                            if (i % 2 === 0) {
                                rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_EVEN;
                            }

                            rowstyle += " " + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM;

                            routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                            routerInstructionsHtml += '<img class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIconORS(strType) + '" alt=""/>';
                            routerInstructionsHtml += '</td>';

                            if (instr.maneuver) {
                                routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';
                            } else {
                                routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + 0 + '">';
                            }

                            // build route description

                            routerInstructionsHtml += instr.instruction;

                            routerInstructionsHtml += '</div>';
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["cssConstants"].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                            if (i !== routeResponse.routes[routeNumber].segments[0].steps.length - 1) {
                                routerInstructionsHtml += this.toHumanDistance(instr.distance);
                            }
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += "</tr>";
                        }
                    }
                }

                routerInstructionsHtml += '</table>';

                routerInstruction.innerHTML = routerInstructionsHtml;

                self.routerInstructionsWrapper.appendChild(routerInstruction);

                this.adjustInstructionMapInteraction();
            }
        },

        adjustInstructionMapInteraction: function adjustInstructionMapInteraction(routerInstruction) {
            var self = this,
                fnItemClick,
                fnItemOver,
                fnItemOut;

            fnItemClick = function fnItemClick(element) {
                if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
                    var feature = self.routingWaySource.getFeatures()[0];
                    if (feature) {
                        var currentCoordinates = feature.getGeometry().getCoordinates()[element.data('pos')];
                        self.routingHintSource.clear();
                        var currentHintFeature = new ol.Feature({
                            geometry: new ol.geom.Point(currentCoordinates)
                        });
                        self.routingHintSource.addFeature(currentHintFeature);
                        self.options.mapController.map.getView().setCenter(currentCoordinates);
                    }
                }
                if (self.routingWaySource && self.options.mapController.data.router_api_selection >= '1') {
                    self.routingHintSource.clear();
                    var coordLonLat = element.data('pos');
                    var stringlonlat = coordLonLat.split(",");
                    stringlonlat[0] = parseFloat(stringlonlat[0]);
                    stringlonlat[1] = parseFloat(stringlonlat[1]);
                    var newCoord = ol.proj.fromLonLat(stringlonlat);
                    var currentHintFeature = new ol.Feature({
                        geometry: new ol.geom.Point(newCoord)
                    });
                    self.routingHintSource.addFeature(currentHintFeature);
                    self.options.mapController.map.getView().setCenter(newCoord);
                }
            };

            fnItemOver = function fnItemOver(element) {
                if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
                    var feature = self.routingWaySource.getFeatures()[0];
                    if (feature) {
                        self.routingHintSource.clear();
                        var currentHintFeature = new ol.Feature({
                            geometry: new ol.geom.Point(feature.getGeometry().getCoordinates()[element.data('pos')])
                        });
                        self.routingHintSource.addFeature(currentHintFeature);
                    }
                }
                if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
                    var feature = self.routingWaySource.getFeatures()[0];
                    if (feature) {
                        self.routingHintSource.clear();
                        var coordLonLat = element.data('pos');
                        var stringlonlat = coordLonLat.split(",");
                        stringlonlat[0] = parseFloat(stringlonlat[0]);
                        stringlonlat[1] = parseFloat(stringlonlat[1]);
                        var newCoord = ol.proj.fromLonLat(stringlonlat);
                        var currentHintFeature = new ol.Feature({
                            geometry: new ol.geom.Point(newCoord)
                        });
                        self.routingHintSource.addFeature(currentHintFeature);
                    }
                }
            };

            fnItemOut = function fnItemOut() {
                self.routingHintSource.clear();
            };

            $('[data-pos]', routerInstruction).each(function (index, element) {

                var $element = $(element);

                $element.click(function () {
                    fnItemClick($element);
                });

                $element.on('mouseenter', function () {
                    fnItemOver($element);
                });

                $element.on('mouseleave', function () {
                    fnItemOut();
                });
            });
        },

        clearInput: function clearInput($input) {

            $input.val('');
            $input.trigger('change');
            this.routingWaySource.clear();
            this.routingAltWaySource.clear();
            this.routingHintSource.clear();

            $(this.routerInstructionsWrapper).empty();
            this.recalculateRoute();
            this.update();
        },
        clearOver: function clearOver($input, index) {
            if (this.overValue) {
                delete this.overValue[index];
            }
            this.$buttonOver.prop("disabled", false);
            $(this.routerInstructionsWrapper).empty();
            this.recalculateRoute();
            this.update();
        },

        performReverseSearch: function performReverseSearch($input, value) {

            var self = this,
                url;

            url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];
            this.spinner.show();

            jQuery.ajax({
                'url': url }).done(function (response) {

                if (response) {
                    var value = "";
                    if (response.address) {
                        if (response.address.city) {
                            value = response.address.city;
                            if (response.address.road) {
                                value = ', ' + value;
                            }
                        }
                        if (response.address.town) {
                            value = response.address.town;
                            if (response.address.road) {
                                value = ', ' + value;
                            }
                        }
                        if (response.address.road) {
                            if (response.address.house_number) {
                                value = ' ' + response.address.house_number + value;
                            }
                            value = response.address.road + value;
                        }
                    }

                    if (value === "") {
                        value = response.display_name;
                    }
                    $input.val(value);

                    if ($input.attr('name') === "routingFrom") {
                        self.$routerFromClear.show();
                    } else if ($input.attr('name') === "routingTo") {
                        self.$routerToClear.show();
                    }

                    self.recalculateRoute();
                }
            }).always(function () {
                self.spinner.hide();
            });
        },

        performSearch: function performSearch($input, value) {

            var map, bounds, viewbox, self, url;

            self = this;

            if ($input.val() === "") {
                //self.clearInput($input);
                delete self[value];
                return "";
            }

            map = self.options.mapController.map;
            bounds = map.getView().calculateExtent(map.getSize());
            bounds = ol.proj.transformExtent(bounds, map.getView().getProjection(), 'EPSG:4326');
            viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];

            url = self.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;

            jQuery.ajax({
                'url': url
            }).done(function (response) {

                if (response.length > 0) {
                    if (value === "overValue") {
                        if (!self.overValue) {
                            self.overValue = {};
                        }
                        self.overValue[self.index] = new ol.geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
                        self.$buttonOver.prop("disabled", false);
                    } else {
                        self[value] = new ol.geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
                    }
                } else {
                    alert(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_ALERT_ADDRESS);
                    self.clearInput($input);
                    delete self[value];
                }

                self.recalculateRoute();
            }).error(function () {
                alert(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].ROUTER_VIEW_ALERT_GEOCODING);
            });

            return "";
        },

        toHumanDistance: function toHumanDistance(distanceInMeters) {

            // copied from old sources

            var distance, humanDistance;

            distance = parseInt(distanceInMeters, 10);
            distance = distance / 1000;

            if (distance >= 100) {
                humanDistance = distance.toFixed(0) + '&nbsp;' + 'km';
            } else if (distance >= 10) {
                humanDistance = distance.toFixed(1) + '&nbsp;' + 'km';
            } else if (distance >= 0.1) {
                humanDistance = distance.toFixed(2) + '&nbsp;' + 'km';
            } else {
                humanDistance = (distance * 1000).toFixed(0) + '&nbsp;' + 'm';
            }

            return humanDistance;
        },

        toHumanTime: function toHumanTime(timeInSeconds) {

            // copied from old sources

            var seconds, minutes, hours, humanTime;

            seconds = parseInt(timeInSeconds, 10);
            minutes = parseInt(seconds / 60, 10);
            seconds = seconds % 60;

            hours = parseInt(minutes / 60, 10);
            minutes = minutes % 60;

            if (hours === 0 && minutes === 0) {
                humanTime = seconds + '&nbsp;' + 's';
            } else if (hours === 0) {
                humanTime = minutes + '&nbsp;' + 'min';
            } else {
                humanTime = hours + '&nbsp;' + 'h' + '&nbsp;' + minutes + '&nbsp;' + 'min';
            }

            return humanTime;
        }

    });
})(jQuery, this.c4g);

var Router = this.c4g.maps.control.Router;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc2lkZWJvYXJkLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29uc3RhbnQiLCIkIiwiaTE4biIsImV4dGVuZCIsIkxBTkciLCJOQU1FIiwiSElERSIsIkNMT1NFIiwiUE9JTlQiLCJGUkVFSEFORCIsIkxJTkUiLCJQT0xZR09OIiwiQ0lSQ0xFIiwiUEVSSU1FVEVSIiwiTEVOR1RIIiwiU1VSRkFDRUFSRUEiLCJSQURJVVMiLCJSRUZSRVNIIiwiQ09QWV9UT19DTElQQk9BUkQiLCJDVFJMX1pPT01fSU4iLCJDVFJMX1pPT01fT1VUIiwiQ1RSTF9aT09NX0VYVCIsIkNUUkxfWk9PTV9IT01FIiwiQ1RSTF9aT09NX1BPUyIsIkNUUkxfWk9PTV9TTElERVIiLCJDVFJMX1JFU0VUX1JPVEFUSU9OIiwiQ1RSTF9QT1JUU0lERSIsIkNUUkxfUk9VVEVSIiwiQ1RSTF9FRElUT1IiLCJDVFJMX01FQVNVUkVUT09MUyIsIkNUUkxfSU5GT1BBR0UiLCJDVFJMX0FERElUSU9OQUxQQU5FTCIsIkNUUkxfQUNDT1VOVCIsIkNUUkxfWk9PTUxFVkVMIiwiQ1RSTF9NT1VTRUNPT1JEUyIsIkNUUkxfR0VPU0VBUkNIIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJDVFJMX09WRVJWSUVXTUFQIiwiQ1RSTF9HRU9CT09LTUFSS1MiLCJDVFJMX1NJREVCT0FSRCIsIkNUUkxfU1RBUkJPQVJEIiwiQ1RSTF9BVFRSSUJVVElPTiIsIkNUUkxfR1JJRCIsIkNUUkxfUEVSTUFMSU5LIiwiQ1RSTF9GVUxMU0NSRUVOIiwiQ1RSTF9QUklOVCIsIkVESVRPUiIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJQT1BVUF9ST1VURV9GUk9NIiwiUE9QVVBfUk9VVEVfVE8iLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQkFTRUxBWUVSIiwiU1RBUkJPQVJEX0xBWUVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsIlNJREVCT0FSRCIsIlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQiLCJST1VURVJfRlJPTV9MQUJFTCIsIlJPVVRFUl9PVkVSX0xBQkVMIiwiUk9VVEVSX1RPX0xBQkVMIiwiUk9VVEVSX0NMRUFSX1RJVExFIiwiUk9VVEVSX0NMRUFSX0hUTUwiLCJST1VURVJfTGFiZWxfSW50ZXJpbSIsIlJPVVRFUl9TV0lUQ0giLCJST1VURVJfT1ZFUiIsIlJPVVRFUl9QUklOVCIsIlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UiLCJST1VURVJfVklFV19MQUJFTF9USU1FIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRSIsIlJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1MiLCJST1VURVJfVklFV19BTEVSVF9HT0NPRElORyIsIlJPVVRFUiIsIlJPVVRFUl9OIiwiUk9VVEVSX0UiLCJST1VURVJfUyIsIlJPVVRFUl9XIiwiUk9VVEVSX05FIiwiUk9VVEVSX1NFIiwiUk9VVEVSX1NXIiwiUk9VVEVSX05XIiwiUk9VVEVSX0RJUkVDVElPTl8wIiwiUk9VVEVSX0RJUkVDVElPTl8xIiwiUk9VVEVSX0RJUkVDVElPTl8yIiwiUk9VVEVSX0RJUkVDVElPTl8zIiwiUk9VVEVSX0RJUkVDVElPTl80IiwiUk9VVEVSX0RJUkVDVElPTl81IiwiUk9VVEVSX0RJUkVDVElPTl82IiwiUk9VVEVSX0RJUkVDVElPTl83IiwiUk9VVEVSX0RJUkVDVElPTl84IiwiUk9VVEVSX0RJUkVDVElPTl8xMCIsIlJPVVRFUl9ESVJFQ1RJT05fMTUiLCJST1VURVJfRlJPTSIsIlJPVVRFUl9UTyIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiUk9VVEVSX0xPQ19ST1VURV9UTyIsIlJPVVRFUl9ST1VURURFU0MiLCJST1VURVJfUk9VVEVOQU1FIiwiUk9VVEVSX0RJU1RBTkNFIiwiUk9VVEVSX1RJTUUiLCJST1VURVJfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX1NFQVJDSElORyIsIlJPVVRFUl9FUlJPUl9TRUFSQ0hJTkciLCJST1VURVJfQ0FMQ19ST1VURSIsIlJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFIiwiTUVBU1VSRVRPT0xTIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkdFT0JPT0tNQVJLU19QTEFDRUhPTERFUiIsIklORk9QQUdFIiwiQURESVRJT05BTFBBTkVMIiwiQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUiIsIkFDQ09VTlQiLCJBQ0NPVU5UX1ZJRVdfVFJJR0dFUiIsIlNFQVJDSF9OT1RfRk9VTkQiLCJOT05FIiwialF1ZXJ5IiwibGFuZ0NvbnN0YW50cyIsImNzcyIsIk9QRU4iLCJDTE9TRUFCTEUiLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiUFJJTlQiLCJJTkZPUEFHRV9WSUVXX1RSSUdHRVIiLCJPVkVSVklFV01BUCIsIk9WRVJWSUVXTUFQX1dSQVBQRVIiLCJHRU9CT09LTUFSS1MiLCJQRVJNQUxJTksiLCJQRVJNQUxJTktfUE9QVVAiLCJQT1BVUF9DTE9TRSIsIlBPUFVQX1JPVVRFX1dSQVBQRVIiLCJQT1JUU0lERSIsIlBPUlRTSURFX0NPTlRBSU5FUiIsIlBPUlRTSURFX0NPTlRST0wiLCJQT1JUU0lERV9XUkFQUEVSIiwiUE9SVFNJREVfVElUTEVCQVIiLCJQT1JUU0lERV9UT1BfVE9PTEJBUiIsIlBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSIiwiUE9SVFNJREVfQk9UVE9NX1RPT0xCQVIiLCJQT1JUU0lERV9TVEFUVVNCQVIiLCJQT1JUU0lERV9WSUVXVFJJR0dFUkJBUiIsIlBPUlRTSURFX0hFQURMSU5FIiwiUE9SVFNJREVfQlVUVE9OQkFSIiwiUE9SVFNJREVfQlVUVE9OIiwiUE9SVFNJREVfSElERSIsIlBPUlRTSURFX0NMT1NFIiwiU1BJTk5FUiIsIlNUQVJCT0FSRF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQ09OVFJPTCIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU1RBUkJPQVJEX1RJVExFQkFSIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSIiwiU1RBUkJPQVJEX1NUQVRVU0JBUiIsIlNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUiIsIlNUQVJCT0FSRF9IRUFETElORSIsIlNUQVJCT0FSRF9CVVRUT05CQVIiLCJTVEFSQk9BUkRfQlVUVE9OIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRSIsIlNUQVJCT0FSRF9MQVlFUlRSRUUiLCJTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSIiwiVE9PTFRJUF9QT1BVUCIsIlpPT01fTEVWRUwiLCJST1VURVJfSU5QVVRfV1JBUFBFUiIsIlJPVVRFUl9QUk9GSUxFX1dSQVBQRVIiLCJST1VURVJfSU5QVVRfRlJPTSIsIlJPVVRFUl9JTlBVVF9UTyIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSIiwiUk9VVEVSX1BST0ZJTEVfQ0FSIiwiUk9VVEVSX1BST0ZJTEVfSEdWIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX09WRVJMQVlDT05UQUlORVIiLCJPTF9PVkVSTEFZQ09OVEFJTkVSX1NFIiwiT0xfVklFV1BPUlQiLCJPTF9aT09NIiwiT0xfWk9PTV9JTiIsIk9MX1pPT01fRVhUIiwiT0xfWk9PTV9IT01FIiwiT0xfWk9PTV9QT1MiLCJPTF9aT09NX1dJVEhfRVhUIiwiT0xfWk9PTV9XSVRIX0hPTUUiLCJPTF9aT09NX1dJVEhfUE9TIiwiT0xfWk9PTV9TTElERVIiLCJPTF9aT09NX1dJVEhfU0xJREVSIiwiY3NzQ29uc3RhbnRzIiwiY29udHJvbCIsIlJvdXRlciIsIm9wdF9vcHRpb25zIiwib3B0aW9ucyIsIm5hbWUiLCJjcmVhdGUiLCJtYXBDb250cm9sbGVyIiwidW5kZWZpbmVkIiwiaGVhZGxpbmUiLCJkaXJlY3Rpb24iLCJpbmRleCIsIlNpZGVib2FyZCIsImNhbGwiLCJvbCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwiaW5pdCIsInNlbGYiLCJ2aWV3Um91dGVyIiwic2VsZWN0SW50ZXJhY3Rpb24iLCJwcm9maWxlSWQiLCJzcGlubmVyIiwic2hvdyIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJkYXRhIiwicm91dGVyX2Zyb21fbG9jc3R5bGUiLCJyb3V0ZXJfdG9fbG9jc3R5bGUiLCJyb3V0ZXJfcG9pbnRfbG9jc3R5bGUiLCJyb3V0aW5nQWx0V2F5U291cmNlIiwic291cmNlIiwiVmVjdG9yIiwicm91dGluZ1dheVNvdXJjZSIsInJvdXRlcldheUxheWVyIiwibGF5ZXIiLCJ6SW5kZXgiLCJzdHlsZSIsIlN0eWxlIiwic3Ryb2tlIiwiU3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsInJvdXRlckFsdFdheUxheWVyIiwiaW50ZXJhY3Rpb24iLCJTZWxlY3QiLCJvbiIsImV2ZW50Iiwic2VsZWN0ZWQiLCJnZW9tZXRyeSIsImdldEdlb21ldHJ5IiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJzaG93QWx0Um91dGUiLCJyZXNwb25zZSIsImdldElkIiwibWFwIiwiYWRkSW50ZXJhY3Rpb24iLCJyb3V0aW5nSGludFNvdXJjZSIsInJvdXRlckhpbnRMYXllciIsImZlYXR1cmUiLCJyZXNvbHV0aW9uIiwiYXJyTG9jU3R5bGVzIiwibG9jYXRpb25zU291cmNlIiwibG9jYXRpb25zTGF5ZXIiLCJyb3V0ZXJMYXllckdyb3VwIiwiR3JvdXAiLCJsYXllcnMiLCJDb2xsZWN0aW9uIiwidmlzaWJsZSIsImFkZExheWVyIiwiYWRkVXNlckludGVyZmFjZSIsImFjdGl2YXRlIiwicHJvZmlsZSIsImdlb1NlYXJjaEFwaSIsImFwaSIsImdlb3NlYXJjaCIsImdlb1JldmVyc2VTZWFyY2hBcGkiLCJnZW9zZWFyY2hfcmV2ZXJzZSIsInJvdXRpbmdBcGkiLCJyb3V0aW5nIiwiaGlkZSIsInByZU9wZW5GdW5jdGlvbiIsImFkZE1hcElucHV0SW50ZXJhY3Rpb24iLCJ0b0xvbkxhdCIsInBlcmZvcm1SZXZlcnNlU2VhcmNoIiwiJHRvSW5wdXQiLCJ0b1ZhbHVlIiwiUG9pbnQiLCJwcmVIaWRlRnVuY3Rpb24iLCJyZW1vdmVNYXBJbnB1dEludGVyYWN0aW9uIiwicHJlQ2xvc2VGdW5jdGlvbiIsImNsZWFyIiwicm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlciIsImVtcHR5IiwiY2xlYXJJbnB1dCIsIiRmcm9tSW5wdXQiLCJvdmVyVmFsdWUiLCJpZCIsImNsZWFyT3ZlciIsIiRvdmVySW5wdXQiLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInVuIiwiZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbiIsImdldEludGVyYWN0aW9ucyIsImdldEFycmF5Iiwic2V0QWN0aXZlIiwiY29vcmRpbmF0ZSIsImV2dCIsInByb2oiLCJ2YWwiLCJmcm9tVmFsdWUiLCIkYnV0dG9uT3ZlciIsInByb3AiLCJyb3V0ZXJWaWV3Iiwicm91dGVyVmlld0lucHV0V3JhcHBlciIsInJvdXRlclZpZXdDb250ZW50V3JhcHBlciIsInJvdXRlclZpZXdDb250ZW50SGVhZGxpbmUiLCJwcmludCIsInJvdXRlUHJvZmlsZSIsInJvdXRlckZyb21MYWJlbCIsInJvdXRlck92ZXJMYWJlbCIsInJvdXRlclRvTGFiZWwiLCJyb3V0ZXJGcm9tQ2xlYXIiLCJyb3V0ZXJPdmVyQ2xlYXIiLCJyb3V0ZXJUb0NsZWFyIiwic3dpdGNoRnJvbVRvIiwiYnV0dG9uT3ZlciIsImNyZWF0ZUVsZW1lbnQiLCJmcm9tSW5wdXRXcmFwcGVyIiwiY2xhc3NOYW1lIiwiZnJvbUlucHV0IiwidHlwZSIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInRpdGxlIiwiJHJvdXRlckZyb21DbGVhciIsIiRzd2l0Y2hGcm9tVG8iLCIkcHJpbnQiLCJyb3V0ZXJCdXR0b25CYXIiLCJhcHBlbmRDaGlsZCIsInJvdXRlcl9hcGlfc2VsZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsInJvdXRlcl9wcm9maWxlcyIsImxlbmd0aCIsImFjdGl2ZSIsImFkZENsYXNzIiwiY2FyIiwiJHJvdXRlUHJvZmlsZUNhciIsImNsaWNrIiwiY2xlYXJTaWJsaW5ncyIsInJlY2FsY3VsYXRlUm91dGUiLCJoZ3YiLCIkcm91dGVQcm9maWxlSGd2Iiwic3BhbkJpa2UiLCJiaWtlIiwibGlzdCIsIiRyb3V0ZVByb2ZpbGVCaWtlIiwiaSIsImNoaWxkIiwiY2hpbGRDbGljayIsImNoaWxkcmVuIiwicGFyZW50Iiwic3BhbkZvb3QiLCJmb290IiwiJHJvdXRlUHJvZmlsZUZvb3QiLCJ3aGVlbGNoYWlyIiwiJHJvdXRlUHJvZmlsZVdoZWVsY2hhaXIiLCIkZWxlbWVudCIsImVsZW1lbnQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsInByZXZlbnREZWZhdWx0Iiwib3ZlcklucHV0V3JhcHBlciIsIm92ZXJJbnB1dCIsIiRyb3V0ZXJPdmVyQ2xlYXIiLCJyZW1vdmUiLCJwZXJmb3JtU2VhcmNoIiwic3dpdGNoVmFyTmFtZSIsInZhbHVlIiwic3dpdGNoVmFyVmFsIiwicm91dGluZ0NvbnRlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiV2luUHJpbnQiLCJ3aW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImZvY3VzIiwidG9JbnB1dFdyYXBwZXIiLCJ0b0lucHV0IiwiJHJvdXRlclRvQ2xlYXIiLCJzdGF0dXNCYXIiLCJnZXRBdHRyaWJ1dGlvbiIsImFkZFZpZXciLCJ0cmlnZ2VyQ29uZmlnIiwidGlwTGFiZWwiLCJ3aXRoSGVhZGxpbmUiLCJzZWN0aW9uRWxlbWVudHMiLCJzZWN0aW9uIiwidG9wVG9vbGJhciIsImNvbnRlbnRDb250YWluZXIiLCJzZXRJbnB1dCIsImZyb20iLCJhdHRyaWJ1dGlvblNlYXJjaCIsImF0dHJpYnV0aW9uUm91dGVyIiwiYXR0cmlidXRpb25Sb3V0ZXJIb3N0IiwiYXR0cmlidXRpb25XcmFwcGVyIiwiYXR0cmlidXRpb25IdG1sIiwiZ2Vvc2VhcmNoX2VuZ2luZSIsInJvdXRlcl9hdHRyaWJ1dGlvbiIsInRtcEZlYXR1cmUiLCJGZWF0dXJlIiwiY2xvbmUiLCJ0cmFuc2Zvcm0iLCJzZXRTdHlsZSIsImFkZEZlYXR1cmUiLCJwcm9wdCIsInJvdXRlcl9pbnRlcmltX2xvY3N0eWxlIiwicGVyZm9ybVZpYVJvdXRlIiwiZnJvbVBvaW50IiwidG9Qb2ludCIsIm92ZXJQb2ludCIsInVybCIsImZyb21Db29yZCIsInRvQ29vcmQiLCJvdmVyQ29vcmQiLCJnZXRDb29yZGluYXRlcyIsIkFycmF5IiwicHVzaCIsImFqYXgiLCJkb25lIiwic2hvd1JvdXRlIiwiYWx3YXlzIiwidXBkYXRlIiwicm91dGVSZXNwb25zZSIsInNob3dSb3V0ZUxheWVyIiwic2hvd1JvdXRlSW5zdHJ1Y3Rpb25zIiwicm91dGVOdW1iZXIiLCJtYXBWaWV3Iiwid2F5UG9seWxpbmUiLCJyb3V0ZUZlYXR1cmVzIiwiYWx0Um91dGVGZWF0dXJlcyIsInJpZ2h0UGFkZGluZyIsImxlZnRQYWRkaW5nIiwiZ2V0VmlldyIsImZvcm1hdCIsIlBvbHlsaW5lIiwicm91dGVzIiwicmVhZEZlYXR1cmVzIiwiZGF0YVByb2plY3Rpb24iLCJmZWF0dXJlUHJvamVjdGlvbiIsImdldFByb2plY3Rpb24iLCJzZXRJZCIsInJvdXRlcl92aWFyb3V0ZV9wcmVjaXNpb24iLCJyb3V0ZV9nZW9tZXRyeSIsInJvdXRlcl9hbHRlcm5hdGl2ZSIsImFkZEZlYXR1cmVzIiwicmVuZGVyU3luYyIsImFuaW1hdGUiLCJzdGFydCIsIkRhdGUiLCJkdXJhdGlvbiIsImdldFJlc29sdXRpb24iLCJjZW50ZXIiLCJhY3RpdmVQb3J0c2lkZSIsImNvbnRhaW5lciIsIm91dGVyV2lkdGgiLCJhY3RpdmVTdGFyYm9hcmQiLCJmaXQiLCJnZXRTaXplIiwicGFkZGluZyIsImdldEluc3RydWN0aW9uSWNvbiIsInN0ck1vZCIsInN0clR5cGUiLCJpbWFnZSIsImdldEluc3RydWN0aW9uSWNvbk9SUyIsImludFR5cGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhyZWYiLCJnZXRUeXBlVGV4dCIsInRleHRJRCIsImdldE1vZGlmaWVyVGV4dCIsInN0ck1vZGlmaWVyIiwiZ2V0RHJpdmluZ0luc3RydWN0aW9uSWNvbiIsImluc3RydWN0aW9uSWQiLCJyZXBsYWNlIiwiZ2V0VGV4dCIsInRleHRfaWQiLCJnZXREcml2aW5nSW5zdHJ1Y3Rpb24iLCJkZXNjcmlwdGlvbiIsInJvdXRlckluc3RydWN0aW9uIiwicm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyIiwicm91dGVySW5zdHJ1Y3Rpb25zSHRtbCIsImluc3RyIiwicm93c3R5bGUiLCJqIiwicm91dGVfbmFtZV8wIiwicm91dGVfbmFtZV8xIiwidG90YWxfZGlzdGFuY2UiLCJ0b3RhbF90aW1lIiwibGVncyIsInN1bW1hcnkiLCJzcGxpdCIsInRvSHVtYW5EaXN0YW5jZSIsImRpc3RhbmNlIiwidG9IdW1hblRpbWUiLCJyb3V0ZV9uYW1lIiwicm91dGVfc3VtbWFyeSIsInN0ZXBzIiwibWFuZXV2ZXIiLCJtb2RpZmllciIsImxvY2F0aW9uIiwiaW5zdHJ1Y3Rpb250ZXh0IiwiZXhpdCIsInJvdXRlX2luc3RydWN0aW9ucyIsInNlZ21lbnRzIiwiaW5zdHJ1Y3Rpb24iLCJhZGp1c3RJbnN0cnVjdGlvbk1hcEludGVyYWN0aW9uIiwiZm5JdGVtQ2xpY2siLCJmbkl0ZW1PdmVyIiwiZm5JdGVtT3V0IiwiZ2V0RmVhdHVyZXMiLCJjdXJyZW50Q29vcmRpbmF0ZXMiLCJjdXJyZW50SGludEZlYXR1cmUiLCJzZXRDZW50ZXIiLCJjb29yZExvbkxhdCIsInN0cmluZ2xvbmxhdCIsInBhcnNlRmxvYXQiLCJuZXdDb29yZCIsImZyb21Mb25MYXQiLCJlYWNoIiwiJGlucHV0IiwidHJpZ2dlciIsImFkZHJlc3MiLCJjaXR5Iiwicm9hZCIsInRvd24iLCJob3VzZV9udW1iZXIiLCJkaXNwbGF5X25hbWUiLCJhdHRyIiwiYm91bmRzIiwidmlld2JveCIsImNhbGN1bGF0ZUV4dGVudCIsInRyYW5zZm9ybUV4dGVudCIsImVuY29kZVVSSSIsImxvbiIsImxhdCIsImFsZXJ0IiwiZXJyb3IiLCJST1VURVJfVklFV19BTEVSVF9HRU9DT0RJTkciLCJkaXN0YW5jZUluTWV0ZXJzIiwiaHVtYW5EaXN0YW5jZSIsInBhcnNlSW50IiwidG9GaXhlZCIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwiZXh0RGl2IiwiZGVmYXVsdE9wZW4iLCJpZGVudGlmaWVyIiwiY3NzbmFtZSIsImluaXRpYWxpemVkIiwiYnV0dG9uIiwid3JhcHBlciIsInRpdGxlQmFyIiwiYm90dG9tVG9vbGJhciIsInNlY3Rpb25zIiwidmlld1RyaWdnZXJCYXIiLCJ2aWV3cyIsImFjdGl2ZVZpZXciLCJwYXVzZWRWaWV3IiwiQ29udHJvbCIsInRhcmdldCIsImluaXRDbGFzcyIsInRpdGxlQnV0dG9uQmFyIiwiY2xvc2VCdXR0b24iLCJjYXBpdGFsaXplZE5hbWUiLCJoaWRlQnV0dG9uIiwiY2FjaGluZyIsInV0aWxzIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImUiLCJtZXNzYWdlIiwidG9nZ2xlIiwiZ2V0VGFyZ2V0IiwiYXBwZW5kIiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwiYWRkU2VjdGlvbiIsImNvbnRlbnRIZWFkbGluZSIsIlNwaW5uZXIiLCJnZXRWYWx1ZSIsIm9wdF9ldmVudCIsImNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCIsImNvbnRhaW5lck9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJkaXNwbGF5Iiwib2Zmc2V0V2lkdGgiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJzdG9yZVZhbHVlIiwicG9zdE9wZW5GdW5jdGlvbiIsImlzT3BlbiIsIm9wdF9oaWRlIiwib3B0X29wZW5PdGhlclNpZGVib2FyZCIsImRlYWN0aXZhdGUiLCJtYWtlQnV0dG9uIiwibGFiZWwiLCJjbGlja0FjdGlvbiIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwibmV3RWxlbWVudCIsIm9wdF92aWV3U2NvcGUiLCJ2aWV3U2NvcGUiLCJhZGRpdGlvbmFsVHJpZ2dlckNsYXNzIiwidmlldyIsImluaXRGdW5jdGlvbiIsImFjdGl2YXRlRnVuY3Rpb24iLCJkZWFjdGl2YXRlRnVuY3Rpb24iLCJwYXVzZWQiLCJvcHRfb3BlblNpZGVib2FyZCIsIm9wdF9wYXVzZSIsIlpvb21sZXZlbCIsInVwZGF0ZVpvb21sZXZlbCIsInVuZGVmaW5lZEhUTUwiLCJnZXRab29tIiwibWlzYyIsInNwaW5uZXJTcGFuIiwiYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImdldFVuaXF1ZUlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlR2VvSnNvblByb3BlcnR5IiwiaW5wdXQiLCJvdXRwdXQiLCJkZWNvZGVHZW9Kc29uUHJvcGVydHkiLCJzZXRVcmxQYXJhbSIsInBhcmFtIiwib3B0X2dldEtleSIsIm9wdF9leGVjdXRlIiwibGluayIsInNlYXJjaFBhcmFtIiwicGFyYW1SZXBsYWNlZCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiaGFzaCIsInNlYXJjaCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJrZXkiLCJvZmZzZXQiLCJvcmlnaW5TdHJpbmciLCJnZXRVcmxQYXJhbSIsInJlZ0V4Iiwic3Vic3RyaW5nIiwiUmVnRXhwIiwiZXhlYyIsImRlbHRhRW5jb2RlIiwiYXJySW5wdXQiLCJhcnJPdXRwdXQiLCJzb3J0IiwiYSIsImIiLCJkZWx0YURlY29kZSIsImlzTmFOIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJhcnJIb29rRnVuY3Rpb25zIiwicGFyYW1ldGVycyIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsImhleCIsIm9wdF9vcGFjaXR5Iiwib3B0X2FycmF5IiwiYmlnaW50IiwiciIsImciLCJyZWR1Y2VTdHlsZSIsInN0eWxlSWQiLCJyZWR1Y2VkU3R5bGUiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxvY2F0aW9uU3R5bGVzIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsInNldFdpZHRoIiwiQ2lyY2xlIiwiZmlsbCIsInJhZGl1cyIsIm1lYXN1cmVHZW9tZXRyeSIsIm9wdF9mb3JjZUxpbmVNZWFzdXJlIiwib3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUiLCJzcGhlcmUiLCJjb29yZGluYXRlcyIsImNvb3JkMSIsImNvb3JkMiIsInJlc3VsdCIsIlBvbHlnb24iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJodG1sVmFsdWUiLCJhYnMiLCJnZXRBcmVhIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwiZWRnZUNvb3JkaW5hdGUiLCJQSSIsInNxcnQiLCJnZXRFeHRlbnRGb3JHZW9tZXRyaWVzIiwiYXJyR2VvbWV0cmllcyIsImV4dGVudFNvdXJjZSIsImdldEV4dGVudCIsIkV4dGVudCIsImZpdFRvRXh0ZW50cyIsImV4dGVudHMiLCJvcHRfcGFkZGluZyIsIm9wdF9hbmltYXRpb25EdXJhdGlvbiIsImV4dGVudCIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsIm1pblJlc29sdXRpb24iLCJtaW5ab29tIiwibWF4Wm9vbSIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJzdHJJbnB1dCIsIm9wdF9sYXllciIsInN0ck91dHB1dCIsInJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyIsInJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzIiwicmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyIsImZ1bmN0aW9uTmFtZSIsImdldFN0eWxlIiwiZ2V0IiwiZXZLZXkiLCJlZGl0b3JWYXJzIiwib2JqZWN0VG9BcnJheSIsIm9iamVjdCIsImdldFZlY3RvckxheWVyIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJyZWRyYXdNYXBWaWV3IiwibWFwRGF0YSIsImNvbnRyb2xDb250YWluZXJUb3BMZWZ0IiwicHJlcGVuZCIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0IiwiYWZ0ZXIiLCJsZWZ0U2xpZGVFbGVtZW50cyIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViIiwic2NhbGVsaW5lIiwicmVtb3ZlQ29udHJvbCIsImNvbnRyb2xzIiwiU2NhbGVMaW5lIiwiYWRkQ29udHJvbCIsInpvb21sZXZlbCIsIm1vdXNlcG9zaXRpb24iLCJNb3VzZVBvc2l0aW9uIiwicHJvamVjdGlvbiIsImNvb3JkaW5hdGVGb3JtYXQiLCJ0b1N0cmluZ0hETVMiLCJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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LElBQW9CelIsS0FBcEIsQ0FEZ0MsQ0FDTDtBQUM1QjtBQXQzQnVDLEdBQXpCLENBQWpCO0FBeTNCRCxDQS8zQkEsRUErM0JDbFQsTUEvM0JELEVBKzNCUyxLQUFLeEksR0EvM0JkLENBQUQ7O0FBaTRCTyxJQUFJcW9CLFFBQVEsS0FBS3JvQixHQUFMLENBQVNDLElBQVQsQ0FBY29vQixLQUExQixDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtcm91dGVyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNjRiYjAyZGM1YzNlOTBiZDk3IiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge1NpZGVib2FyZH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC1zaWRlYm9hcmRcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBtYXBDb250cm9sbGVyICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvbmZpZyAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAvLyBleHRlbmQgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIG5hbWU6ICdyb3V0ZXInLFxuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgaGVhZGxpbmU6IGxhbmdDb25zdGFudHMuUk9VVEVSLFxuICAgICAgZGlyZWN0aW9uOiAnbGVmdCdcbiAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaW5kZXg9MDtcblxuICAgIC8vIGNhbGwgcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgU2lkZWJvYXJkLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5oZXJpdCBmcm9tIFwiU2lkZWJvYXJkXCJcbiAgICovXG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyLCBTaWRlYm9hcmQpO1xuXG4gIC8qKlxuICAgKiBNZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlJvdXRlci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlJvdXRlci5wcm90b3R5cGUsIHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgdmlld1JvdXRlcixcbiAgICAgICAgICBzZWxlY3RJbnRlcmFjdGlvbixcbiAgICAgICAgICBwcm9maWxlSWQ7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuXG4gICAgICAvLyBjaGVjayBhbmQgbG9hZCBsb2NhdGlvbiBzdHlsZXMgdmlhIG1hcC1wcm94eVxuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXG4gICAgICBdKTtcblxuXG4gICAgICAvLyBBZGQgcm91dGVyIGxheWVyKHMpXG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdXYXlTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDUxLCAxMTksIDAuOSknLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDUxLCAxMTksIDAuNCknLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgc2VsZWN0SW50ZXJhY3Rpb24gPSBuZXcgb2wuaW50ZXJhY3Rpb24uU2VsZWN0KHtcbiAgICAgICAgICBzdHlsZTpbXG4gICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApJyxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDUxLCAxMTksIDAuMCknLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIF1cblxuICAgICAgfSk7XG4gICAgICBzZWxlY3RJbnRlcmFjdGlvbi5vbignc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICBpZihldmVudC5zZWxlY3RlZFswXSApIHtcbiAgICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gZXZlbnQuc2VsZWN0ZWRbMF0uZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgICAgICAgaWYoZ2VvbWV0cnkgJiYgZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpe1xuICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QWx0Um91dGUoc2VsZi5yZXNwb25zZSxldmVudC5zZWxlY3RlZFswXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHNlbGVjdEludGVyYWN0aW9uKTtcblxuXG4gICAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0ZXJIaW50TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdIaW50U291cmNlLFxuICAgICAgICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgIHJldHVybiAoIXNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5KSB8fCBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5sb2NhdGlvbnNMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMubG9jYXRpb25zU291cmNlLFxuICAgICAgICB6SW5kZXg6IDJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJvdXRlckxheWVyR3JvdXAgPSBuZXcgb2wubGF5ZXIuR3JvdXAoe1xuICAgICAgICBsYXllcnM6IG5ldyBvbC5Db2xsZWN0aW9uKFtcbiAgICAgICAgICB0aGlzLnJvdXRlcldheUxheWVyLFxuICAgICAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIsXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbnNMYXllcixcbiAgICAgICAgICB0aGlzLnJvdXRlckhpbnRMYXllclxuICAgICAgICBdKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5yb3V0ZXJMYXllckdyb3VwKTtcblxuICAgICAgdmlld1JvdXRlciA9IHRoaXMuYWRkVXNlckludGVyZmFjZSgpO1xuICAgICAgdmlld1JvdXRlci5hY3RpdmF0ZSgpO1xuXG4gICAgICAvLyBzdG9yZSBzb21lIHZhcnMgZm9yIGFqYXgtcmVxdWVzdHNcbiAgICAgIHByb2ZpbGVJZCA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucHJvZmlsZTtcbiAgICAgIHRoaXMuZ2VvU2VhcmNoQXBpID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgJy8nICsgcHJvZmlsZUlkO1xuICAgICAgdGhpcy5nZW9SZXZlcnNlU2VhcmNoQXBpID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoX3JldmVyc2UgKyAnLycgKyBwcm9maWxlSWQ7XG4gICAgICB0aGlzLnJvdXRpbmdBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5yb3V0aW5nICsgJy8nICsgcHJvZmlsZUlkO1xuXG4gICAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcHJlT3BlbkZ1bmN0aW9uOiBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgICAgdGhpcy5hZGRNYXBJbnB1dEludGVyYWN0aW9uKCk7XG5cbiAgICAgIGlmIChvcHRfb3B0aW9ucyAmJiBvcHRfb3B0aW9ucy50b0xvbkxhdCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHRoaXMuJHRvSW5wdXQsIG9wdF9vcHRpb25zLnRvTG9uTGF0KTtcbiAgICAgICAgdGhpcy50b1ZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQoW29wdF9vcHRpb25zLnRvTG9uTGF0WzFdLCBvcHRfb3B0aW9ucy50b0xvbkxhdFswXV0pO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHByZUhpZGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZW1vdmVNYXBJbnB1dEludGVyYWN0aW9uKCk7XG4gICAgfSxcblxuICAgIHByZUNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmNsZWFyKCk7XG5cbiAgICAgICQodGhpcy5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKS5lbXB0eSgpO1xuICAgICAgdGhpcy5jbGVhcklucHV0KHRoaXMuJGZyb21JbnB1dCk7XG4gICAgICBpZih0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgZm9yKHZhciBpZCBpbiB0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJPdmVyKHRoaXMuJG92ZXJJbnB1dCxpZCk7XG4gICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgICAgICBpZihlbGVtKXtcbiAgICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNsZWFySW5wdXQodGhpcy4kdG9JbnB1dCk7XG5cbiAgICAgIHRoaXMucmVtb3ZlTWFwSW5wdXRJbnRlcmFjdGlvbigpO1xuXG4gICAgfSxcblxuICAgIHJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnVuKCdjbGljaycsIHNlbGYuZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbik7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0SW50ZXJhY3Rpb25zKCkgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldEludGVyYWN0aW9ucygpLmdldEFycmF5KCkgJiZcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0SW50ZXJhY3Rpb25zKCkuZ2V0QXJyYXkoKVsnOSddKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRJbnRlcmFjdGlvbnMoKS5nZXRBcnJheSgpWyc5J10uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkTWFwSW5wdXRJbnRlcmFjdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgY29vcmRpbmF0ZTtcblxuICAgICAgc2VsZi5mbk1hcFJvdXRlckludGVyYWN0aW9uID0gZnVuY3Rpb24gKGV2dCkge1xuXG4gICAgICAgIGNvb3JkaW5hdGUgPSBvbC5wcm9qLnRvTG9uTGF0KGV2dC5jb29yZGluYXRlKTtcblxuICAgICAgICBpZiAoc2VsZi4kZnJvbUlucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICAgICAgLy9zZWxmLiRmcm9tSW5wdXQudmFsKG9sLnByb2oudG9Mb25MYXQoZXZ0LmNvb3JkaW5hdGUpKTtcbiAgICAgICAgICBzZWxmLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHNlbGYuJGZyb21JbnB1dCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgc2VsZi5mcm9tVmFsdWUgPSBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZGluYXRlKTtcblxuICAgICAgICAgIC8vc2VsZi4kZnJvbUlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuJHRvSW5wdXQudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAvL3NlbGYuJHRvSW5wdXQudmFsKG9sLnByb2oudG9Mb25MYXQoZXZ0LmNvb3JkaW5hdGUpKTtcbiAgICAgICAgICBzZWxmLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHNlbGYuJHRvSW5wdXQsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgIHNlbGYudG9WYWx1ZSA9IG5ldyBvbC5nZW9tLlBvaW50KGNvb3JkaW5hdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuJG92ZXJJbnB1dCkge1xuICAgICAgICAgICAgaWYoc2VsZi4kb3ZlcklucHV0LnZhbCgpID09PVwiXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHNlbGYuJG92ZXJJbnB1dCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLm92ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm92ZXJWYWx1ZT17fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5vdmVyVmFsdWVbc2VsZi5pbmRleF09bmV3IG9sLmdlb20uUG9pbnQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgc2VsZi4kYnV0dG9uT3Zlci5wcm9wKFwiZGlzYWJsZWRcIixmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5vbignY2xpY2snLCBzZWxmLmZuTWFwUm91dGVySW50ZXJhY3Rpb24pO1xuICAgICAgLy8gaWYoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldEludGVyYWN0aW9ucygpLmdldEFycmF5KClbJzknXSl7XG4gICAgICAvLyAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldEludGVyYWN0aW9ucygpLmdldEFycmF5KClbJzknXS5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNle1xuICAgICAgLy8gICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRJbnRlcmFjdGlvbnMoKS5nZXRBcnJheSgpWyc4J10uc2V0QWN0aXZlKHRydWUpXG4gICAgICAvLyB9XG4gICAgfSxcblxuXG4gICAgYWRkVXNlckludGVyZmFjZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICBsZXQgc2VsZixcbiAgICAgICAgICByb3V0ZXJWaWV3LFxuICAgICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIsXG4gICAgICAgICAgcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyLFxuICAgICAgICAgIHJvdXRlclZpZXdDb250ZW50SGVhZGxpbmUsXG4gICAgICAgICAgcHJpbnQsXG4gICAgICAgICAgcm91dGVQcm9maWxlID1bXSxcbiAgICAgICAgICByb3V0ZXJGcm9tTGFiZWwsXG4gICAgICAgICAgcm91dGVyT3ZlckxhYmVsLFxuICAgICAgICAgIHJvdXRlclRvTGFiZWwsXG4gICAgICAgICAgcm91dGVyRnJvbUNsZWFyLFxuICAgICAgICAgIHJvdXRlck92ZXJDbGVhcixcbiAgICAgICAgICByb3V0ZXJUb0NsZWFyLFxuICAgICAgICAgIHN3aXRjaEZyb21UbyxcbiAgICAgICAgICBidXR0b25PdmVyO1xuXG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgc2VsZi5yb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIgPSByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXI7XG5cbiAgICAgIC8vIEBUT0RPOiBBZGQgcm91dGVyLWluZm8tdGV4dFxuICAgICAgLy8gcm91dGVyVmlld0NvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAvLyByb3V0ZXJWaWV3Q29udGVudEhlYWRsaW5lLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVDtcbiAgICAgIC8vIHJvdXRlclZpZXdDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJWaWV3Q29udGVudEhlYWRsaW5lKTtcblxuICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICB0aGlzLmZyb21JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRoaXMuZnJvbUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIHRoaXMuZnJvbUlucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfRlJPTTtcbiAgICAgIHRoaXMuZnJvbUlucHV0LmlkID0gdGhpcy5mcm9tSW5wdXQubmFtZSA9IFwicm91dGluZ0Zyb21cIjtcblxuICAgICAgcm91dGVyRnJvbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHJvdXRlckZyb21MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyb3V0aW5nRnJvbScpO1xuICAgICAgcm91dGVyRnJvbUxhYmVsLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0ZST01fTEFCRUw7XG5cbiAgICAgIHJvdXRlckZyb21DbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcm91dGVyRnJvbUNsZWFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfQ0xFQVI7XG4gICAgICByb3V0ZXJGcm9tQ2xlYXIudGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9USVRMRTtcbiAgICAgIHJvdXRlckZyb21DbGVhci5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9IVE1MO1xuICAgICAgdGhpcy4kcm91dGVyRnJvbUNsZWFyID0gJChyb3V0ZXJGcm9tQ2xlYXIpO1xuXG4gICAgICBzd2l0Y2hGcm9tVG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHN3aXRjaEZyb21Uby5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX1NXSVRDSDtcbiAgICAgIHN3aXRjaEZyb21Uby50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX1NXSVRDSDtcbiAgICAgIHRoaXMuJHN3aXRjaEZyb21UbyA9ICQoc3dpdGNoRnJvbVRvKTtcblxuICAgICAgYnV0dG9uT3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uT3Zlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX09WRVI7XG4gICAgICBidXR0b25PdmVyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfT1ZFUjtcbiAgICAgIHRoaXMuJGJ1dHRvbk92ZXIgPSAkKGJ1dHRvbk92ZXIpO1xuXG4gICAgICBwcmludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJpbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9QUklOVDtcbiAgICAgIHByaW50LnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfUFJJTlQ7XG4gICAgICB0aGlzLiRwcmludCA9ICQocHJpbnQpO1xuXG5cblxuXG4gICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9CVVRUT05CQVI7XG4gICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhci5hcHBlbmRDaGlsZChzd2l0Y2hGcm9tVG8pO1xuICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIuYXBwZW5kQ2hpbGQoYnV0dG9uT3Zlcik7XG4gICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhci5hcHBlbmRDaGlsZChwcmludCk7XG5cbiAgICAgICAgLy8gJChwcmludCkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjNGctcG9ydHNpZGUtaGlkZVwiKVswXSk7XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicpeyAvL09wZW5Sb3V0ZVNlcnZpY2VcbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKS5sZW5ndGggPT0gMSl7Ly9jaGVjayBmb3Igc2luZ2xlIHByb2ZpbGUgYW5kIHNldCB0aGlzIGFzICBhY3RpdmUgcm91dGluZyBwcm9maWxlXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcylbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKS5sZW5ndGggPiAxKXsgLy9jaGVjayBmb3IgbXVsdGlwbGUgcHJvZmlsZXMgYW5kIGFkZCBwcm9maWxlLWNoYW5nZXJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICQodGhpcy5yb3V0ZVByb2ZpbGUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9XUkFQUEVSKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMCddKXsgLy9hZGQgYnV0dG9uIGZvciBwcm9maWxlIGRyaXZpbmctY2FyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5jYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUuY2FyKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfQ0FSKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQ2FyID0gJChyb3V0ZVByb2ZpbGUuY2FyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmNhcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUNhci5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzEnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgZHJpdmluZy1oZ3ZcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmhndiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5oZ3YpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9IR1YpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuaGd2KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlSGd2ID0gJChyb3V0ZVByb2ZpbGUuaGd2KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVIZ3YuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMiddXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyczJ11cbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzQnXVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNSddXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc2J11cbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzcnXSl7IC8vYWRkIGJ1dHRvbiBhbmQgZHJvcGRvd24gZm9yIGN5Y2xpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5CaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuYmlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuYmlrZS5saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZSA9ICQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAyOyBpIDwgODsgaSsrKXsgLy9pdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIGN5Y2xpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmRhdGEoJ3Byb2ZpbGUnLCBbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGlsZENsaWNrKCQoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcm91dGVQcm9maWxlQmlrZS5kYXRhKCdwcm9maWxlJykpeyAvL2FkZCBleGlzdGluZyBkZWZhdWx0IHByb2ZpbGUgdG8gYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuZGF0YSgncHJvZmlsZScsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuYmlrZS5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmJpa2UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9CSUtFKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZVByb2ZpbGUuYmlrZS5saXN0LmNoaWxkcmVuLmxlbmd0aCA9PSAxKXsgLy9pZ25vcmUgZHJvcGRvd24gbGlzdCwgaWYgb25seSBvbmUgY3ljbGluZyBwcm9maWxlIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5iaWtlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7IC8vYXBwZW5kIHdpdGggZHJvcGRvd24sIGlmIG11bHRpcGxlIGN5Y2xpbmcgcHJvZmlsZXMgYXJlIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5CaWtlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5iaWtlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5CaWtlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQoc3BhbkJpa2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKCQodGhpcykucGFyZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzgnXVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snOSddKXsgLy9hZGQgYnV0dG9uIGFuZCBkcm9wZG93biBmb3Igd2Fsa2luZyBwcm9maWxlc1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbkZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5mb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5mb290Lmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290ID0gJChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDg7IGkgPCAxMDsgaSsrKXsgLy9pdGVyYXRlIG92ZXIgcG9zc2libGUgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmRhdGEoJ3Byb2ZpbGUnLCBbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGlsZENsaWNrKCQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmRhdGEoJ3Byb2ZpbGUnKSl7IC8vYWRkIGV4aXN0aW5nIGRlZmF1bHQgcHJvZmlsZSB0byBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5kYXRhKCdwcm9maWxlJyxpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5mb290Lmxpc3QuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUuZm9vdCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0ZPT1QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlUHJvZmlsZS5mb290Lmxpc3QuY2hpbGRyZW4ubGVuZ3RoID09IDEpeyAvL2lnbm9yZSBkcm9wZG93biBsaXN0LCBpZiBvbmx5IG9uZSB3YWxraW5nIHByb2ZpbGUgaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmZvb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXsgLy9hcHBlbmQgd2l0aCBkcm9wZG93biwgaWYgbXVsdGlwbGUgd2Fsa2luZyBwcm9maWxlcyBhcmUgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbkZvb3QuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmZvb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbkZvb3QuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmZvb3QubGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChzcGFuRm9vdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJCh0aGlzKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMTAnXSl7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSB3aGVlbGNoYWlyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICQocm91dGVQcm9maWxlLndoZWVsY2hhaXIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9XSEVFTENIQUlSKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlV2hlZWxjaGFpciA9ICQocm91dGVQcm9maWxlLndoZWVsY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZVdoZWVsY2hhaXIuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZENsaWNrID0gZnVuY3Rpb24oJGVsZW1lbnQpeyAvL2hhbmRsZSB0aGUgY2xpY2sgaW5zaWRlIHRoZSBwcm9maWxlIGRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICRlbGVtZW50LmRhdGEoJ3Byb2ZpbGUnKTsgLy9hY3RpdmF0ZSBzZWxlY3RlZCBwcm9maWxlXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpOyAvL3VwZGF0ZSB0aGUgcm91dGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTaWJsaW5ncyA9IGZ1bmN0aW9uKGVsZW1lbnQpeyAvL2Z1bmN0aW9uIHRvIGFkanVzdCBjc3MtY2xhc3NlcyBhZnRlciBjaGFuZ2luZyBwcm9maWxlXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaWJsaW5ncyA9ICQoZWxlbWVudCkucGFyZW50KCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpYmxpbmdzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHNpYmxpbmdzW2ldKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9maWxlIGluIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKXsgLy9zZXQgZGVmYXVsdCB2YWx1ZSBmb3IgaW5pdGlhbCByb3V0aW5nXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzLmhhc093blByb3BlcnR5KHByb2ZpbGUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSA9IHByb2ZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBSb3V0ZXIgUHJvZmlsZXMgZW5hYmxlZCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlckZyb21MYWJlbCk7XG4gICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5mcm9tSW5wdXQpO1xuICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlckZyb21DbGVhcik7XG4gICAgICBpZiAoYnV0dG9uT3ZlciAmJiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJyl7XG4gICAgICAgICAgdGhpcy4kYnV0dG9uT3Zlci5oaWRlKCk7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy4kcm91dGVyRnJvbUNsZWFyLmhpZGUoKTtcblxuICAgICAgdGhpcy4kcm91dGVyRnJvbUNsZWFyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLmNsZWFySW5wdXQoc2VsZi4kZnJvbUlucHV0KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRidXR0b25PdmVyLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLmluZGV4Kys7XG4gICAgICAgICAgc2VsZi4kYnV0dG9uT3Zlci5wcm9wKFwiZGlzYWJsZWRcIix0cnVlKTtcblxuICAgICAgICAgIHNlbGYub3ZlcklucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0V3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX1dSQVBQRVI7XG5cbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9GUk9NO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0LmlkID0gc2VsZi5vdmVySW5wdXQubmFtZSA9IFwicm91dGluZ092ZXJcIjtcblxuICAgICAgICAgIHJvdXRlck92ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgcm91dGVyT3ZlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JvdXRpbmdGcm9tJyk7XG4gICAgICAgICAgcm91dGVyT3ZlckxhYmVsLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0xhYmVsX0ludGVyaW07XG5cbiAgICAgICAgICByb3V0ZXJPdmVyQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICByb3V0ZXJPdmVyQ2xlYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9DTEVBUjtcbiAgICAgICAgICByb3V0ZXJPdmVyQ2xlYXIudGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9USVRMRTtcbiAgICAgICAgICByb3V0ZXJPdmVyQ2xlYXIuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfSFRNTDtcbiAgICAgICAgICByb3V0ZXJPdmVyQ2xlYXIuaWQgPSBzZWxmLmluZGV4O1xuICAgICAgICAgIHNlbGYuJHJvdXRlck92ZXJDbGVhciA9ICQocm91dGVyT3ZlckNsZWFyKTtcblxuICAgICAgICAgIHNlbGYub3ZlcklucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJPdmVyTGFiZWwpO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLm92ZXJJbnB1dCk7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlck92ZXJDbGVhcik7XG5cbiAgICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGYub3ZlcklucHV0V3JhcHBlcik7XG4gICAgICAgICAgc2VsZi4kcm91dGVyT3ZlckNsZWFyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBzZWxmLmNsZWFyT3ZlcihzZWxmLiRvdmVySW5wdXQsdGhpcy5pZCk7XG4gICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIC8vYnV0dG9uT3Zlci5zaG93KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi4kb3ZlcklucHV0ID0gJChzZWxmLm92ZXJJbnB1dCk7XG4gICAgICAgICAgc2VsZi4kb3ZlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYucGVyZm9ybVNlYXJjaChzZWxmLiRvdmVySW5wdXQsIFwib3ZlclZhbHVlXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cblxuXG5cbiAgICAgIHRoaXMuJHN3aXRjaEZyb21Uby5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciBzd2l0Y2hWYXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nRnJvbVwiKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdGcm9tXCIpLnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nVG9cIikudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nVG9cIikudmFsdWUgPSBzd2l0Y2hWYXJOYW1lO1xuICAgICAgICAgIHZhciBzd2l0Y2hWYXJWYWwgPSBzZWxmLmZyb21WYWx1ZTtcbiAgICAgICAgICBzZWxmLmZyb21WYWx1ZSA9IHNlbGYudG9WYWx1ZTtcbiAgICAgICAgICBzZWxmLnRvVmFsdWUgPSBzd2l0Y2hWYXJWYWw7XG4gICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG5cbiAgICAgIH0pO1xuICAgICAgdGhpcy4kcHJpbnQuY2xpY2soZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGxldCByb3V0aW5nQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyXCIpWzBdO1xuICAgICAgICAgIGlmKCFyb3V0aW5nQ29udGVudCkgcmV0dXJuO1xuICAgICAgICAgIGxldCBXaW5QcmludCA9IHdpbmRvdy5vcGVuKCcnLCAnJywgJ2xlZnQ9MCx0b3A9MCx3aWR0aD04MDAsaGVpZ2h0PTkwMCx0b29sYmFyPTAsc2Nyb2xsYmFycz0wLHN0YXR1cz0wJyk7XG4gICAgICAgICAgV2luUHJpbnQuZG9jdW1lbnQud3JpdGUocm91dGluZ0NvbnRlbnQuaW5uZXJIVE1MKTtcbiAgICAgICAgICBXaW5QcmludC5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICAgIFdpblByaW50LmZvY3VzKCk7XG4gICAgICAgICAgV2luUHJpbnQucHJpbnQoKTtcbiAgICAgICAgICBXaW5QcmludC5jbG9zZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJGZyb21JbnB1dCA9ICQodGhpcy5mcm9tSW5wdXQpO1xuICAgICAgdGhpcy4kZnJvbUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucGVyZm9ybVNlYXJjaChzZWxmLiRmcm9tSW5wdXQsIFwiZnJvbVZhbHVlXCIpO1xuICAgICAgICBpZiAoc2VsZi4kZnJvbUlucHV0LnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgc2VsZi4kcm91dGVyRnJvbUNsZWFyLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJGcm9tQ2xlYXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnJvdXRlckJ1dHRvbkJhcik7XG4gICAgICBpZih0aGlzLnJvdXRlUHJvZmlsZSAmJiB0aGlzLnJvdXRlUHJvZmlsZS5jaGlsZHJlbil7XG4gICAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnJvdXRlUHJvZmlsZSk7XG4gICAgICB9XG4gICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZnJvbUlucHV0V3JhcHBlcik7XG5cbiAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICB0aGlzLnRvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0aGlzLnRvSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGhpcy50b0lucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfVE87XG4gICAgICB0aGlzLnRvSW5wdXQuaWQgPSB0aGlzLnRvSW5wdXQubmFtZSA9IFwicm91dGluZ1RvXCI7XG5cbiAgICAgIHJvdXRlclRvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgcm91dGVyVG9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyb3V0aW5nVG8nKTtcbiAgICAgIHJvdXRlclRvTGFiZWwuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfVE9fTEFCRUw7XG5cbiAgICAgIHJvdXRlclRvQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJvdXRlclRvQ2xlYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9DTEVBUjtcbiAgICAgIHJvdXRlclRvQ2xlYXIudGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9USVRMRTtcbiAgICAgIHJvdXRlclRvQ2xlYXIuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfSFRNTDtcbiAgICAgIHRoaXMuJHJvdXRlclRvQ2xlYXIgPSAkKHJvdXRlclRvQ2xlYXIpO1xuXG4gICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlclRvTGFiZWwpO1xuICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnRvSW5wdXQpO1xuICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJUb0NsZWFyKTtcblxuXG4gICAgICB0aGlzLiRyb3V0ZXJUb0NsZWFyLmhpZGUoKTtcblxuICAgICAgc2VsZi4kcm91dGVyVG9DbGVhci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5jbGVhcklucHV0KHNlbGYuJHRvSW5wdXQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJHRvSW5wdXQgPSAkKHRoaXMudG9JbnB1dCk7XG4gICAgICB0aGlzLiR0b0lucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucGVyZm9ybVNlYXJjaChzZWxmLiR0b0lucHV0LCBcInRvVmFsdWVcIik7XG4gICAgICAgIGlmIChzZWxmLiR0b0lucHV0LnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgc2VsZi4kcm91dGVyVG9DbGVhci5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi4kcm91dGVyVG9DbGVhci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMudG9JbnB1dFdyYXBwZXIpO1xuXG4gICAgICBzZWxmLnN0YXR1c0Jhci5hcHBlbmRDaGlsZCh0aGlzLmdldEF0dHJpYnV0aW9uKCkpO1xuXG4gICAgICByb3V0ZXJWaWV3ID0gdGhpcy5hZGRWaWV3KHtcbiAgICAgICAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgICAgICAgdHJpZ2dlckNvbmZpZzoge1xuICAgICAgICAgIHRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCxcbiAgICAgICAgICB3aXRoSGVhZGxpbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25FbGVtZW50czogW1xuICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHJvdXRlclZpZXdJbnB1dFdyYXBwZXJ9LFxuICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLmNvbnRlbnRDb250YWluZXIsIGVsZW1lbnQ6IHJvdXRlclZpZXdDb250ZW50V3JhcHBlcn1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByb3V0ZXJWaWV3O1xuXG4gICAgfSxcblxuICAgIHNldElucHV0OiBmdW5jdGlvbiAoZnJvbSwgY29vcmRpbmF0ZSkge1xuICAgICAgLy8gcGVyZm9ybSBnZW9TZWFyY2ggb24gZ2l2ZW4gbG9jYXRpb25cbiAgICAgIC8vIGZpbGwgZnJvbS90byBmaWVsZFxuICAgICAgLy9cblxuICAgICAgaWYgKCFjb29yZGluYXRlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY29vcmRpbmF0ZSA9IG9sLnByb2oudG9Mb25MYXQoY29vcmRpbmF0ZSk7XG5cbiAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2godGhpcy4kZnJvbUlucHV0LCBjb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy5mcm9tVmFsdWUgPSBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZGluYXRlKTtcblxuICAgICAgICAvL3RoaXMuJGZyb21JbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHRoaXMuJHRvSW5wdXQsIGNvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLnRvVmFsdWUgPSBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZGluYXRlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgfSxcblxuICAgIGdldEF0dHJpYnV0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgYXR0cmlidXRpb25TZWFyY2gsXG4gICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXIsXG4gICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXJIb3N0LFxuICAgICAgICAgIGF0dHJpYnV0aW9uV3JhcHBlcixcbiAgICAgICAgICBhdHRyaWJ1dGlvbkh0bWw7XG4gICAgICBzd2l0Y2goc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbil7XG4gICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXIgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9wcm9qZWN0LW9zcm0ub3JnL1wiPlByb2plY3QgT1NSTTwvYT4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlciA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3Byb2plY3Qtb3NybS5vcmcvXCI+UHJvamVjdCBPU1JNPC9hPic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVyID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL29wZW5yb3V0ZXNlcnZpY2Uub3JnL1wiPm9wZW5yb3V0ZXNlcnZpY2U8L2E+JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzd2l0Y2goc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guZ2Vvc2VhcmNoX2VuZ2luZSl7XG4gICAgICAgICAgY2FzZSBcIjFcIjogLy9PU01cbiAgICAgICAgICAgICAgYXR0cmlidXRpb25TZWFyY2ggPSAnLSBHZW9jb2RlciBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvXCI+T3BlblN0cmVldE1hcDwvYT4gJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIjJcIjogLy9NYXBxdWVzdFxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblNlYXJjaCA9ICctIEdlb2NvZGVyIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm1hcHF1ZXN0LmNvbS9cIj5NYXBRdWVzdDwvYT4gJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIjNcIjogLy9jdXN0b21cbiAgICAgICAgICAgICAgYXR0cmlidXRpb25TZWFyY2ggPSAnLSBOb21pbmF0aW0tR2VvY29kZXIgJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIjRcIjogLy9jb240Z2lzXG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uU2VhcmNoID0gJy0gR2VvY29kZXIgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNvbjRnaXMub3JnL2thcnRlbmRpZW5zdGUuaHRtbFwiPmNvbjRnaXM8L2E+ICc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgICBzd2l0Y2goc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbil7XG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVySG9zdCA9ICctIE9TUk0gaG9zdGluZyBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2FsZ28yLml0aS5raXQuZWR1L1wiPktJVDwvYT4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlckhvc3QgPSAnLSBPU1JNIGhvc3RpbmcgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9hbGdvMi5pdGkua2l0LmVkdS9cIj5LSVQ8L2E+JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXJIb3N0ID0gJ1xcJy0gT1JTIGhvc3RpbmcgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmdlb2cudW5pLWhlaWRlbGJlcmcuZGUvZ2lzL2hlaWdpdF9lbi5odG1sXCI+SGVpR0lUPC9hPlxcJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy9Ub0RvIGNoZWNrIHBhcmFtc1xuICAgICAgYXR0cmlidXRpb25IdG1sID0gYXR0cmlidXRpb25Sb3V0ZXIgKyBhdHRyaWJ1dGlvblNlYXJjaCArIGF0dHJpYnV0aW9uUm91dGVySG9zdDtcbiAgICAgIGF0dHJpYnV0aW9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYXR0cmlidXRpb25XcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjtcblxuICAgICAgYXR0cmlidXRpb25XcmFwcGVyLmlubmVySFRNTCA9IGF0dHJpYnV0aW9uSHRtbDtcblxuICAgICAgaWYgKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2F0dHJpYnV0aW9uKSB7XG4gICAgICAgIGF0dHJpYnV0aW9uV3JhcHBlci5pbm5lckhUTUwgPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hdHRyaWJ1dGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJpYnV0aW9uV3JhcHBlcjtcblxuICAgIH0sXG5cbiAgICByZWNhbGN1bGF0ZVJvdXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdG1wRmVhdHVyZSxcbiAgICAgIHByb3h5ID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmNsZWFyKCk7XG4gICAgICBpZiAodGhpcy5mcm9tVmFsdWUpIHtcbiAgICAgICAgdG1wRmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5mcm9tVmFsdWUuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Zyb21fbG9jc3R5bGUgJiYgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Zyb21fbG9jc3R5bGVdKSB7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b1ZhbHVlKSB7XG4gICAgICAgIHRtcEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IHRoaXMudG9WYWx1ZS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGUgJiYgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlXSkge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUocHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuYWRkRmVhdHVyZSh0bXBGZWF0dXJlKTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMub3ZlclZhbHVlKXtcbiAgICAgICAgICBmb3IodmFyIHByb3B0IGluIHRoaXMub3ZlclZhbHVlKXtcbiAgICAgICAgICAgICAgdG1wRmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLm92ZXJWYWx1ZVtwcm9wdF0uY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2ludGVyaW1fbG9jc3R5bGUgJiYgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2ludGVyaW1fbG9jc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9pbnRlcmltX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuYWRkRmVhdHVyZSh0bXBGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5mcm9tVmFsdWUgJiYgdGhpcy50b1ZhbHVlKSB7XG4gICAgICAgICAgaWYodGhpcy5vdmVyVmFsdWUpe1xuICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1WaWFSb3V0ZSh0aGlzLmZyb21WYWx1ZSwgdGhpcy50b1ZhbHVlLCB0aGlzLm92ZXJWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1WaWFSb3V0ZSh0aGlzLmZyb21WYWx1ZSwgdGhpcy50b1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgcGVyZm9ybVZpYVJvdXRlOiBmdW5jdGlvbiAoZnJvbVBvaW50LCB0b1BvaW50LCBvdmVyUG9pbnQpIHtcblxuICAgICAgdmFyIHVybCxcbiAgICAgICAgICBzZWxmLFxuICAgICAgICAgIGZyb21Db29yZCxcbiAgICAgICAgICB0b0Nvb3JkLFxuICAgICAgICAgIG92ZXJDb29yZDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZyb21Db29yZCA9IFtmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgICAgdG9Db29yZCA9IFt0b1BvaW50LmdldENvb3JkaW5hdGVzKClbMV0sIHRvUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVswXV07XG4gICAgICBpZihvdmVyUG9pbnQpe1xuICAgICAgICAgIG92ZXJDb29yZCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgIGZvcih2YXIgcHJvcHQgaW4gb3ZlclBvaW50KXtcbiAgICAgICAgICAgICAgb3ZlckNvb3JkLnB1c2goW292ZXJQb2ludFtwcm9wdF0uZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgb3ZlclBvaW50W3Byb3B0XS5nZXRDb29yZGluYXRlcygpWzBdXSk7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcxJyB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJyl7Ly9PU1JNLUFQSTo1Lnggb3IgT1JTLSBBUElcbiAgICAgICAgICAgIHVybCA9IHNlbGYucm91dGluZ0FwaSArICcvJyArIGZyb21Db29yZCA7XG5cbiAgICAgICAgICAgIGlmKG92ZXJQb2ludCl7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDtpPG92ZXJDb29yZC5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgICAgIHVybCArPScvJytvdmVyQ29vcmRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmwgKz0nLycrdG9Db29yZDtcbiAgICAgICAgICAgIGlmKHRoaXMucm91dGVQcm9maWxlICYmIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgdXJsICs9ICc/cHJvZmlsZT0nK3RoaXMucm91dGVQcm9maWxlLmFjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG5cbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICAndXJsJzogdXJsfSlcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93Um91dGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICB9IGVsc2V7Ly9PU1JNLUFQSTo8NVxuICAgICAgICAgICAgdXJsID0gc2VsZi5yb3V0aW5nQXBpICsgJz9vdXRwdXQ9anNvbiZpbnN0cnVjdGlvbnM9dHJ1ZSZhbHQ9ZmFsc2UmbG9jX2Zyb209JyArIGZyb21Db29yZCArICcmbG9jX3RvPScgKyB0b0Nvb3JkO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICd1cmwnOiB1cmx9KVxuICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93Um91dGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuXG4gICAgfSxcblxuICAgIHNob3dSb3V0ZTogZnVuY3Rpb24gKHJvdXRlUmVzcG9uc2UpIHtcblxuICAgICAgdGhpcy5zaG93Um91dGVMYXllcihyb3V0ZVJlc3BvbnNlLDApO1xuICAgICAgdGhpcy5zaG93Um91dGVJbnN0cnVjdGlvbnMocm91dGVSZXNwb25zZSwwKTtcbiAgICB9LFxuICAgIHNob3dBbHRSb3V0ZTogZnVuY3Rpb24gKHJvdXRlUmVzcG9uc2UsIHJvdXRlTnVtYmVyKXtcbiAgICAgIHRoaXMuc2hvd1JvdXRlTGF5ZXIocm91dGVSZXNwb25zZSxyb3V0ZU51bWJlcik7XG4gICAgICB0aGlzLnNob3dSb3V0ZUluc3RydWN0aW9ucyhyb3V0ZVJlc3BvbnNlLHJvdXRlTnVtYmVyKTtcbiAgICB9LFxuXG4gICAgc2hvd1JvdXRlTGF5ZXI6IGZ1bmN0aW9uIChyb3V0ZVJlc3BvbnNlLHJvdXRlTnVtYmVyKSB7XG5cbiAgICAgIHZhciBtYXBWaWV3LFxuICAgICAgICAgIHdheVBvbHlsaW5lLFxuICAgICAgICAgIHJvdXRlRmVhdHVyZXMsXG4gICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyxcbiAgICAgICAgICByaWdodFBhZGRpbmcsXG4gICAgICAgICAgbGVmdFBhZGRpbmcsXG4gICAgICAgICAgcm91dGVOdW1iZXIgPSByb3V0ZU51bWJlciB8fCAwO1xuXG4gICAgICBpZihyb3V0ZVJlc3BvbnNlKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nQWx0V2F5U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgbWFwVmlldyA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMScgfHx0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJyApIHsvL09TUk0tQVBJOjUueFxuICAgICAgICAgICAgICB3YXlQb2x5bGluZSA9IG5ldyBvbC5mb3JtYXQuUG9seWxpbmUoKTtcblxuICAgICAgICAgICAgICAvLyBhZGQgcm91dGVcblxuICAgICAgICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZXMgJiYgcm91dGVSZXNwb25zZS5yb3V0ZXNbMV0pIHsvL2NoZWNrIGZvciBhbHRlcm5hdGl2ZSByb3V0ZVxuICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlTnVtYmVyID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2Uucm91dGVzWzBdLmdlb21ldHJ5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlc1swXS5zZXRJZCgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS5yb3V0ZXNbMV0uZ2VvbWV0cnksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzWzBdLnNldElkKDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmdlb21ldHJ5LCB7XG4gICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJvdXRlRmVhdHVyZXNbMF0uc2V0SWQocm91dGVOdW1iZXIpO1xuXG5cbiAgICAgICAgICB9IGVsc2Ugey8vT1NSTS1BUEk6PDVcbiAgICAgICAgICAgICAgd2F5UG9seWxpbmUgPSBuZXcgb2wuZm9ybWF0LlBvbHlsaW5lKHtcbiAgICAgICAgICAgICAgICAgICdmYWN0b3InOiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl92aWFyb3V0ZV9wcmVjaXNpb24gfHwgMWU2XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIGFkZCByb3V0ZVxuICAgICAgICAgICAgICByb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2Uucm91dGVfZ2VvbWV0cnksIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FsdGVybmF0aXZlID09ICcxJykge1xuICAgICAgICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZXMgJiYgKHJvdXRlUmVzcG9uc2Uucm91dGVzLmxlbmd0aCA+IDEpICYmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZS5hZGRGZWF0dXJlcyhhbHRSb3V0ZUZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UuYWRkRmVhdHVyZXMocm91dGVGZWF0dXJlcyk7XG4gICAgICAgICAgLy8gcmVuZGVyIHZpZXdcbiAgICAgICAgICAvLyBzbyB0aGUgcm91dGUgZ2V0cyBkcmF3biBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHNcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAucmVuZGVyU3luYygpO1xuXG4gICAgICAgICAgLy8gYW5pbWF0aW9uXG4gICAgICAgICAgbWFwVmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbjogbWFwVmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYmVmb3JlUmVuZGVyKFxuICAgICAgICAgIC8vICAgICBvbC5hbmltYXRpb24ucGFuKHtcbiAgICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgLy8gICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgLy8gICAgICAgc291cmNlOiBtYXBWaWV3LmdldENlbnRlcigpXG4gICAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIC8vICAgICAgIHJlc29sdXRpb246IG1hcFZpZXcuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgLy8gKTtcblxuICAgICAgICAgIC8vIGNhbGN1bGF0ZSBwYWRkaW5nXG4gICAgICAgICAgbGVmdFBhZGRpbmcgPSAwO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5hY3RpdmVQb3J0c2lkZSAmJiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5hY3RpdmVQb3J0c2lkZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgbGVmdFBhZGRpbmcgPSAkKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVBvcnRzaWRlLmNvbnRhaW5lcikub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJpZ2h0UGFkZGluZyA9IDA7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVN0YXJib2FyZCAmJiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5hY3RpdmVTdGFyYm9hcmQuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIHJpZ2h0UGFkZGluZyA9ICQodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuYWN0aXZlU3RhcmJvYXJkLmNvbnRhaW5lcikub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNlbnRlciBvbiByb3V0ZVxuICAgICAgICAgIG1hcFZpZXcuZml0KFxuICAgICAgICAgICAgICByb3V0ZUZlYXR1cmVzWzBdLmdldEdlb21ldHJ5KCksXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRTaXplKCksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCByaWdodFBhZGRpbmcsIDAsIGxlZnRQYWRkaW5nXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cblxuICAgICAgZ2V0SW5zdHJ1Y3Rpb25JY29uOiBmdW5jdGlvbihzdHJNb2Qsc3RyVHlwZSkge1xuICAgICAgICAgIHZhciBpbWFnZSA9IFwiXCI7XG5cbiAgICAgICAgICBzd2l0Y2goc3RyTW9kKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNoYXJwIGxlZnRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzaGFycCByaWdodFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzbGlnaHQgbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzbGlnaHQgcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInV0dXJuXCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzdHJhaWdodFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9XCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXRjaChzdHJUeXBlKXtcbiAgICAgICAgICAgICAgY2FzZSBcImRlcGFydFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPVwiaGVhZC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiYXJyaXZlXCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9XCJ0YXJnZXQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInJvdW5kYWJvdXRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID1cInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICAgICAgfSxcbiAgICAgIGdldEluc3RydWN0aW9uSWNvbk9SUzogZnVuY3Rpb24oaW50VHlwZSl7XG4gICAgICAgIGxldCBpbWFnZTtcbiAgICAgICAgc3dpdGNoKGludFR5cGUpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWYgKyBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gICAgICB9LFxuXG4gICAgICBnZXRUeXBlVGV4dDogZnVuY3Rpb24oc3RyVHlwZSkge1xuICAgICAgICAgIHZhciB0ZXh0SUQ7XG5cbiAgICAgICAgICBzd2l0Y2goc3RyVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFwidHVyblwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJuZXcgbmFtZVwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMVwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJkZXBhcnRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzJcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiYXJyaXZlXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8zXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm1lcmdlXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV80XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm9uIHJhbXBcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzVcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwib2ZmIHJhbXBcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzZcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiZm9ya1wiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfN1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmQgb2Ygcm9hZFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfOFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1c2UgbGFuZVwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfOVwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJjb250aW51ZVwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMTBcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwicm91bmRhYm91dFwiOlxuICAgICAgICAgICAgICBjYXNlIFwiZXhpdCByb3VuZGFib3V0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8xMVwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJyb3RhcnlcIjpcbiAgICAgICAgICAgICAgY2FzZSBcImV4aXQgcm90YXJ5XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8xMlwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJyb3VuZGFib3V0IHR1cm5cIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzEzXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm5vdGlmaWNhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMTRcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYW5nQ29uc3RhbnRzW3RleHRJRF07XG4gICAgICB9LFxuXG4gICAgICBnZXRNb2RpZmllclRleHQ6IGZ1bmN0aW9uKHN0ck1vZGlmaWVyKSB7XG4gICAgICAgICAgdmFyIHRleHRJRDtcblxuICAgICAgICAgIHN3aXRjaChzdHJNb2RpZmllcikge1xuICAgICAgICAgICAgICBjYXNlIFwidXR1cm5cIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfMFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzaGFycCByaWdodFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF8xXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzJcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2xpZ2h0IHJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzNcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic3RyYWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfNFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzbGlnaHQgbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF81XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfNlwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzaGFycCBsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF84XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYW5nQ29uc3RhbnRzW3RleHRJRF07XG4gICAgICB9LFxuICAgICAgZ2V0RHJpdmluZ0luc3RydWN0aW9uSWNvbjogZnVuY3Rpb24gKGluc3RydWN0aW9uSWQpIHtcbiAgICAgICAgICB2YXIgaWQsXG4gICAgICAgICAgICAgIGltYWdlO1xuXG4gICAgICAgICAgaWQgPSBpbnN0cnVjdGlvbklkLnJlcGxhY2UoL14xMS1cXGR7MSx9JC8sIFwiMTFcIik7ICAgIC8vIGR1bWIgY2hlY2ssIGlmIHRoZXJlIGlzIGEgcm91bmRhYm91dCAoYWxsIGhhdmUgdGhlIHNhbWUgaWNvbilcblxuICAgICAgICAgIGltYWdlID0gJ2RlZmF1bHQucG5nJztcblxuICAgICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdjb250aW51ZS5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAnc2xpZ2h0LXJpZ2h0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICd0dXJuLXJpZ2h0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdzaGFycC1yaWdodC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAndS10dXJuLnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnNic6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdzaGFycC1sZWZ0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnNyc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICd0dXJuLWxlZnQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICc4JzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3NsaWdodC1sZWZ0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnMTAnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAnaGVhZC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzExJzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3JvdW5kLWFib3V0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnMTUnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAndGFyZ2V0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZiArIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcblxuICAgICAgfSxcbiAgICAgIGdldFRleHQ6IGZ1bmN0aW9uIChpZCkge1xuXG4gICAgICAgICAgdmFyIHRleHRfaWQgPSBcIlJPVVRFUl9cIiArIGlkO1xuXG4gICAgICAgICAgaWYgKGxhbmdDb25zdGFudHNbdGV4dF9pZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGV4dF9pZCArIFwiIGNhbid0IGZpbmQgaW4gbGFuZ3VhZ2UgZmlsZXMuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFuZ0NvbnN0YW50c1t0ZXh0X2lkXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldERyaXZpbmdJbnN0cnVjdGlvbjogZnVuY3Rpb24gKGluc3RydWN0aW9uSWQpIHtcblxuICAgICAgICAgIHZhciBpZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb247XG5cbiAgICAgICAgICBpZCA9IFwiRElSRUNUSU9OX1wiICsgaW5zdHJ1Y3Rpb25JZC5yZXBsYWNlKC9eMTEtXFxkezIsfSQvLCBcIjExLXhcIik7ICAgLy8gZHVtYiBjaGVjaywgaWYgdGhlcmUgYXJlIDEwKyBleGl0cyBvbiBhIHJvdW5kYWJvdXQgKHNheSB0aGUgc2FtZSBmb3IgZXhpdCAxMCspXG5cbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0VGV4dChpZCk7XG4gICAgICAgICAgaWYgKCFkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0VGV4dCgnRElSRUNUSU9OXzAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgICB9LFxuICAgICAgc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zOiBmdW5jdGlvbiAocm91dGVSZXNwb25zZSxyb3V0ZU51bWJlcikge1xuXG4gICAgICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uLFxuICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIsXG4gICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwsXG4gICAgICAgICAgICAgIGluc3RyLFxuICAgICAgICAgICAgICBzdHJUeXBlLFxuICAgICAgICAgICAgICBzdHJNb2QsXG4gICAgICAgICAgICAgIHJvd3N0eWxlLFxuICAgICAgICAgICAgICByb3V0ZU51bWJlciA9IHJvdXRlTnVtYmVyIHx8IDAsXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIGosXG4gICAgICAgICAgICAgIHJvdXRlX25hbWVfMCA9IFwiXCIsXG4gICAgICAgICAgICAgIHJvdXRlX25hbWVfMSA9IFwiXCIsXG4gICAgICAgICAgICAgIHRvdGFsX2Rpc3RhbmNlID0gXCJcIixcbiAgICAgICAgICAgICAgdG90YWxfdGltZSA9IFwiXCI7XG5cbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuXG4gICAgICAgICAgaWYgKHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUjtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlcikuZW1wdHkoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSO1xuXG4gICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzEnKSB7Ly9PU1JNLUFQSTo1LnhcbiAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1swXS5zdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVfbmFtZV8wID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeS5zcGxpdChcIixcIilbMF07XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVfbmFtZV8xID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeS5zcGxpdChcIixcIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlX25hbWVfMSA9IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzFdLnN1bW1hcnkuc3BsaXQoXCIsXCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdG90YWxfZGlzdGFuY2UgPSB0aGlzLnRvSHVtYW5EaXN0YW5jZShyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgdG90YWxfdGltZSA9IHRoaXMudG9IdW1hblRpbWUocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgZWxzZSBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJykgey8vT1NSTS1BUEk6PDVcbiAgICAgICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgcm91dGVfbmFtZV8wID0gcm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lWzBdO1xuICAgICAgICAgICAgICAgICAgcm91dGVfbmFtZV8xID0gcm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lWzFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVfc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgdG90YWxfZGlzdGFuY2UgPSB0aGlzLnRvSHVtYW5EaXN0YW5jZShyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkudG90YWxfZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgdG90YWxfdGltZSA9IHRoaXMudG9IdW1hblRpbWUocm91dGVSZXNwb25zZS5yb3V0ZV9zdW1tYXJ5LnRvdGFsX3RpbWUpO1xuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJyl7Ly9PU1ItQVBJXG4gICAgICAgICAgICAgICAgICB0b3RhbF90aW1lID0gdGhpcy50b0h1bWFuVGltZShyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc3VtbWFyeS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IHRoaXMudG9IdW1hbkRpc3RhbmNlKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5zdW1tYXJ5LmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocm91dGVfbmFtZV8wICYmIHJvdXRlX25hbWVfMSl7XG4gICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlci5pbm5lckhUTUwgPSAnPGxhYmVsPicgKyBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFICsgJzwvbGFiZWw+IDxlbT4nICsgcm91dGVfbmFtZV8wICsgJyAmIzg1OTQ7ICcgKyByb3V0ZV9uYW1lXzEgKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF9kaXN0YW5jZSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9USU1FICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfdGltZSArICc8L2VtPjxicj4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSl7XG4gICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlci5pbm5lckhUTUwgPSAnPGxhYmVsPicgKyBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUgKyAnPC9sYWJlbD4gPGVtPicrdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlXSAgKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF9kaXN0YW5jZSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9USU1FICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfdGltZSArICc8L2VtPjxicj4nO1xuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICBzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyKTtcblxuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sID0gJzx0YWJsZSBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSArICdcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIj4nO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMScpIHsvL09TUk0tQVBJOjUueFxuICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3MubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1tqXS5zdGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGluc3RyID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3Nbal0uc3RlcHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICBzdHJUeXBlID0gaW5zdHIubWFuZXV2ZXIudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdHIubWFuZXV2ZXIubW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyTW9kID0gaW5zdHIubWFuZXV2ZXIubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRyIGNsYXNzPVwiJyArIHJvd3N0eWxlICsgJ1wiPic7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04gKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8aW1nIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04gKyAnXCIgc3JjPVwiJyArIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uKHN0ck1vZCwgc3RyVHlwZSkgKyAnXCIgYWx0PVwiXCIvPic7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC90ZD4nO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCArICdcIiBkYXRhLXBvcz1cIicgKyBpbnN0ci5tYW5ldXZlci5sb2NhdGlvbiArICdcIj4nO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBidWlsZCByb3V0ZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0cnVjdGlvbnRleHQgPSB0aGlzLmdldFR5cGVUZXh0KGluc3RyLm1hbmV1dmVyLnR5cGUpLnJlcGxhY2UoLyVzLywgaW5zdHIubmFtZSkucmVwbGFjZSgvJW0vLCB0aGlzLmdldE1vZGlmaWVyVGV4dChpbnN0ci5tYW5ldXZlci5tb2RpZmllcikpLnJlcGxhY2UoLyV6LywgaW5zdHIubWFuZXV2ZXIuZXhpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RyLm5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnRleHQgPSBpbnN0cnVjdGlvbnRleHQucmVwbGFjZSgvXFxbLio/XFxdL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnRleHQgPSBpbnN0cnVjdGlvbnRleHQucmVwbGFjZSgvXFxbKC4qKVxcXS8sIFwiJDFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gaW5zdHJ1Y3Rpb250ZXh0O1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RkPlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzBdLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSB0aGlzLnRvSHVtYW5EaXN0YW5jZShpbnN0ci5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RkPlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdHI+XCI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMCcpey8vT1NSTS1BUEk6PDVcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdXRlUmVzcG9uc2Uucm91dGVfaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBpbnN0ciA9IHJvdXRlUmVzcG9uc2Uucm91dGVfaW5zdHJ1Y3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgcm93c3R5bGUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDtcblxuICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJvd3N0eWxlICs9IFwiIFwiICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTtcblxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRyIGNsYXNzPVwiJyArIHJvd3N0eWxlICsgJ1wiPic7XG5cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPGltZyBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OICsgJ1wiIHNyYz1cIicgKyB0aGlzLmdldERyaXZpbmdJbnN0cnVjdGlvbkljb24oaW5zdHJbMF0pICsgJ1wiIGFsdD1cIlwiLz4nO1xuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC90ZD4nO1xuXG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCArICdcIiBkYXRhLXBvcz1cIicgKyBpbnN0clszXSArICdcIj4nO1xuXG4gICAgICAgICAgICAgICAgICAvLyBidWlsZCByb3V0ZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaWYgKGluc3RyWzFdICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSB0aGlzLmdldERyaXZpbmdJbnN0cnVjdGlvbihpbnN0clswXSkucmVwbGFjZSgvXFxbKC4qKVxcXS8sIFwiJDFcIikucmVwbGFjZSgvJXMvLCBpbnN0clsxXSkucmVwbGFjZSgvJWQvLCB0aGlzLmdldFRleHQoaW5zdHJbNl0pKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSB0aGlzLmdldERyaXZpbmdJbnN0cnVjdGlvbihpbnN0clswXSkucmVwbGFjZSgvXFxbKC4qKVxcXS8sIFwiXCIpLnJlcGxhY2UoLyVkLywgdGhpcy5nZXRUZXh0KGluc3RyWzZdKSk7XG4gICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RkPlwiO1xuXG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UgKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgIGlmIChpICE9PSByb3V0ZVJlc3BvbnNlLnJvdXRlX2luc3RydWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSB0aGlzLnRvSHVtYW5EaXN0YW5jZShpbnN0cls1XSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90ZD5cIjtcblxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdHI+XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMicgKXsvL09wZW5Sb3V0ZVNlcnZpY2VcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5zZWdtZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5zZWdtZW50c1tqXS5zdGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGluc3RyID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnNlZ21lbnRzW2pdLnN0ZXBzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgc3RyVHlwZSA9IGluc3RyLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlICs9IFwiIFwiICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ciBjbGFzcz1cIicgKyByb3dzdHlsZSArICdcIj4nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPGltZyBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OICsgJ1wiIHNyYz1cIicgKyB0aGlzLmdldEluc3RydWN0aW9uSWNvbk9SUyhzdHJUeXBlKSArICdcIiBhbHQ9XCJcIi8+JztcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L3RkPic7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZihpbnN0ci5tYW5ldXZlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUICsgJ1wiIGRhdGEtcG9zPVwiJyArIGluc3RyLm1hbmV1dmVyLmxvY2F0aW9uICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUICsgJ1wiIGRhdGEtcG9zPVwiJyArIDAgKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1aWxkIHJvdXRlIGRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IGluc3RyLmluc3RydWN0aW9uO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RkPlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5zZWdtZW50c1swXS5zdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gdGhpcy50b0h1bWFuRGlzdGFuY2UoaW5zdHIuZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90ZD5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RyPlwiO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L3RhYmxlPic7XG5cbiAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbi5pbm5lckhUTUwgPSByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sO1xuXG4gICAgICAgICAgc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlckluc3RydWN0aW9uKTtcblxuICAgICAgICAgIHRoaXMuYWRqdXN0SW5zdHJ1Y3Rpb25NYXBJbnRlcmFjdGlvbigpO1xuXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb246IGZ1bmN0aW9uIChyb3V0ZXJJbnN0cnVjdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgIGZuSXRlbUNsaWNrLFxuICAgICAgICAgIGZuSXRlbU92ZXIsXG4gICAgICAgICAgZm5JdGVtT3V0O1xuXG4gICAgICBmbkl0ZW1DbGljayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgaWYgKHNlbGYucm91dGluZ1dheVNvdXJjZSAmJiBzZWxmLnJvdXRpbmdXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJyApIHtcbiAgICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBzZWxmLnJvdXRpbmdXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKVtlbGVtZW50LmRhdGEoJ3BvcycpXTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbC5nZW9tLlBvaW50KGN1cnJlbnRDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihjdXJyZW50Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHNlbGYucm91dGluZ1dheVNvdXJjZSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID49ICcxJyl7XG4gICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgdmFyIGNvb3JkTG9uTGF0ID0gZWxlbWVudC5kYXRhKCdwb3MnKTtcbiAgICAgICAgICAgICAgdmFyIHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgICAgICAgIHZhciBuZXdDb29yZCA9IG9sLnByb2ouZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICAgICAgICB2YXIgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbC5nZW9tLlBvaW50KG5ld0Nvb3JkKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIobmV3Q29vcmQpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZuSXRlbU92ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoc2VsZi5yb3V0aW5nV2F5U291cmNlICYmIHNlbGYucm91dGluZ1dheVNvdXJjZS5nZXRGZWF0dXJlcygpICYmIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzAnKSB7XG4gICAgICAgICAgICB2YXIgZmVhdHVyZSA9IHNlbGYucm91dGluZ1dheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbC5nZW9tLlBvaW50KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpW2VsZW1lbnQuZGF0YSgncG9zJyldKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLnJvdXRpbmdXYXlTb3VyY2UgJiYgc2VsZi5yb3V0aW5nV2F5U291cmNlLmdldEZlYXR1cmVzKCkgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA+PSAnMScpIHtcbiAgICAgICAgICAgIHZhciBmZWF0dXJlID0gc2VsZi5yb3V0aW5nV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRMb25MYXQgPSBlbGVtZW50LmRhdGEoJ3BvcycpO1xuICAgICAgICAgICAgICAgIHZhciBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q29vcmQgPSBvbC5wcm9qLmZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQobmV3Q29vcmQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm5JdGVtT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICB9O1xuXG5cbiAgICAgICQoJ1tkYXRhLXBvc10nLCByb3V0ZXJJbnN0cnVjdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcblxuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgICRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbkl0ZW1DbGljaygkZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuSXRlbU92ZXIoJGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkZWxlbWVudC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbkl0ZW1PdXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjbGVhcklucHV0OiBmdW5jdGlvbiAoJGlucHV0KSB7XG5cbiAgICAgICRpbnB1dC52YWwoJycpO1xuICAgICAgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcblxuXG4gICAgICAkKHRoaXMucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlcikuZW1wdHkoKTtcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LFxuICAgIGNsZWFyT3ZlcjogZnVuY3Rpb24gKCRpbnB1dCwgaW5kZXgpe1xuICAgICAgICBpZih0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vdmVyVmFsdWVbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsZmFsc2UpO1xuICAgICAgICAkKHRoaXMucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlcikuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSxcblxuICAgIHBlcmZvcm1SZXZlcnNlU2VhcmNoOiBmdW5jdGlvbiAoJGlucHV0LCB2YWx1ZSkge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgdXJsO1xuXG4gICAgICB1cmwgPSB0aGlzLmdlb1JldmVyc2VTZWFyY2hBcGkgKyAnP2Zvcm1hdD1qc29uJmxhdD0nICsgdmFsdWVbMV0gKyAnJmxvbj0nICsgdmFsdWVbMF07XG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICd1cmwnOiB1cmx9KVxuICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MuY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3BvbnNlLmFkZHJlc3MuY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3Mucm9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnLCAnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MudG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3BvbnNlLmFkZHJlc3MudG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3Mucm9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnLCAnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3Mucm9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyAnICsgcmVzcG9uc2UuYWRkcmVzcy5ob3VzZV9udW1iZXIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3BvbnNlLmFkZHJlc3Mucm9hZCArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXNwb25zZS5kaXNwbGF5X25hbWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCRpbnB1dC5hdHRyKCduYW1lJykgPT09IFwicm91dGluZ0Zyb21cIikge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlckZyb21DbGVhci5zaG93KCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRpbnB1dC5hdHRyKCduYW1lJykgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXJUb0NsZWFyLnNob3coKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIHBlcmZvcm1TZWFyY2g6IGZ1bmN0aW9uICgkaW5wdXQsIHZhbHVlKSB7XG5cbiAgICAgIHZhciBtYXAsXG4gICAgICAgICAgYm91bmRzLFxuICAgICAgICAgIHZpZXdib3gsXG4gICAgICAgICAgc2VsZixcbiAgICAgICAgICB1cmw7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoJGlucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICAgIC8vc2VsZi5jbGVhcklucHV0KCRpbnB1dCk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW3ZhbHVlXTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG1hcCA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgIGJvdW5kcyA9IG1hcC5nZXRWaWV3KCkuY2FsY3VsYXRlRXh0ZW50KG1hcC5nZXRTaXplKCkpO1xuICAgICAgYm91bmRzID0gb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoYm91bmRzLCBtYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKSwgJ0VQU0c6NDMyNicpO1xuICAgICAgdmlld2JveCA9ICcmdmlld2JveD0nICsgYm91bmRzWzBdICsgJywnICsgYm91bmRzWzFdICsgJywnICsgYm91bmRzWzJdICsgJywnICsgYm91bmRzWzNdO1xuXG4gICAgICB1cmwgPSBzZWxmLmdlb1NlYXJjaEFwaSArICc/Zm9ybWF0PWpzb24mbGltaXQ9MSZxPScgKyBlbmNvZGVVUkkoJGlucHV0LnZhbCgpKSArIHZpZXdib3g7XG5cbiAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgJ3VybCc6IHVybFxuICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlmKHZhbHVlID09PVwib3ZlclZhbHVlXCIpe1xuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLm92ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3ZlclZhbHVlPXt9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2VsZi5vdmVyVmFsdWVbc2VsZi5pbmRleF09bmV3IG9sLmdlb20uUG9pbnQoW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLiRidXR0b25PdmVyLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgc2VsZlt2YWx1ZV0gPSBuZXcgb2wuZ2VvbS5Qb2ludChcbiAgICAgICAgICAgICAgICAgICAgICBbcGFyc2VGbG9hdChyZXNwb25zZVswXS5sb24pLCBwYXJzZUZsb2F0KHJlc3BvbnNlWzBdLmxhdCldXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxlcnQobGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICAgICAgICAgICAgc2VsZi5jbGVhcklucHV0KCRpbnB1dCk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBzZWxmW3ZhbHVlXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFsZXJ0KGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUxFUlRfR0VPQ09ESU5HKTtcbiAgICAgIH0pO1xuXG5cblxuICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICB9LFxuXG4gICAgdG9IdW1hbkRpc3RhbmNlOiBmdW5jdGlvbiAoZGlzdGFuY2VJbk1ldGVycykge1xuXG4gICAgICAvLyBjb3BpZWQgZnJvbSBvbGQgc291cmNlc1xuXG4gICAgICB2YXIgZGlzdGFuY2UsXG4gICAgICAgICAgaHVtYW5EaXN0YW5jZTtcblxuICAgICAgZGlzdGFuY2UgPSBwYXJzZUludChkaXN0YW5jZUluTWV0ZXJzLCAxMCk7XG4gICAgICBkaXN0YW5jZSA9IGRpc3RhbmNlIC8gMTAwMDtcblxuICAgICAgaWYgKGRpc3RhbmNlID49IDEwMCkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgwKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMTApIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMSkgKyAnJm5ic3A7JyArICdrbSc7XG4gICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDAuMSkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgyKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSAoZGlzdGFuY2UgKiAxMDAwKS50b0ZpeGVkKDApICsgJyZuYnNwOycgKyAnbSc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBodW1hbkRpc3RhbmNlO1xuICAgIH0sXG5cbiAgICB0b0h1bWFuVGltZTogZnVuY3Rpb24gKHRpbWVJblNlY29uZHMpIHtcblxuICAgICAgLy8gY29waWVkIGZyb20gb2xkIHNvdXJjZXNcblxuICAgICAgdmFyIHNlY29uZHMsXG4gICAgICAgICAgbWludXRlcyxcbiAgICAgICAgICBob3VycyxcbiAgICAgICAgICBodW1hblRpbWU7XG5cbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lSW5TZWNvbmRzLCAxMCk7XG4gICAgICBtaW51dGVzID0gcGFyc2VJbnQoc2Vjb25kcyAvIDYwLCAxMCk7XG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgICBob3VycyA9IHBhcnNlSW50KG1pbnV0ZXMgLyA2MCwgMTApO1xuICAgICAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICAgICAgaWYgKGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgaHVtYW5UaW1lID0gc2Vjb25kcyArICcmbmJzcDsnICsgJ3MnO1xuICAgICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgICBodW1hblRpbWUgPSBtaW51dGVzICsgJyZuYnNwOycgKyAnbWluJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh1bWFuVGltZSA9IGhvdXJzICsgJyZuYnNwOycgKyAnaCcgKyAnJm5ic3A7JyArIG1pbnV0ZXMgKyAnJm5ic3A7JyArICdtaW4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHVtYW5UaW1lO1xuICAgIH1cblxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgUm91dGVyID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtcm91dGVyLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSBcIi4vYzRnLW1hcHMtbWlzYy1zcGlubmVyXCI7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3Igc2lkZWJvYXJkIHN0cnVjdHVyZXMuIFByb3ZpZGVzIHN0YW5kYXJkIGNvbmZpZ3VyYXRpb25zIHdoaWNoIGFyZSBlcXVhbCBmb3IgZWFjaCBzaWRlYm9hcmQgZWxlbWVudC5cbiAqL1xuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAZXh0ZW5kcyB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICAgICAgb3B0aW9ucyAgbWlzYyBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICpcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICAgIGV4dERpdjogZmFsc2UsXG4gICAgICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gICAgICBtYXBDb250cm9sbGVyOiB1bmRlZmluZWQsXG4gICAgICBuYW1lOiAnc2lkZWJvYXJkJyxcbiAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vYWN0aXZlIElkZW50aWZpZXIgKHdoaWNoIHNpZGUgaXMgdGhpcyBlbGVtZW50IG9uPylcbiAgICAvL2Nzc25hbWUgbmVlZGVkIHRvIHNldCB0aGUgY3NzIGNsYXNzIGNvcnJlY3RseVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9ICdQb3J0c2lkZSc7XG4gICAgICAgIHRoaXMuY3NzbmFtZSA9ICdwb3J0c2lkZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSAnU3RhcmJvYXJkJztcbiAgICAgICAgdGhpcy5jc3NuYW1lID0gJ3N0YXJib2FyZCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvL3RoaXMuY3NzbmFtZSA9IHRoaXMuaWRlbnRpZmllci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHRoaXMuaWRlbnRpZmllci5zbGljZSgxKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zLnRpcExhYmVsID0gdGhpcy5vcHRpb25zLnRpcExhYmVsIHx8IHRoaXMub3B0aW9ucy5oZWFkbGluZSB8fCBsYW5nQ29uc3RhbnRzLkNUUkxfU0lERUJPQVJEO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zcGlubmVyID0gdW5kZWZpbmVkO1xuICAgIC8vIG1haW5zdHJ1Y3R1cmUgZWxlbWVudHNcbiAgICB0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50aXRsZUJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRsaW5lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9wVG9vbGJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ib3R0b21Ub29sYmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdHVzQmFyID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuICAgIHRoaXMudmlld1RyaWdnZXJCYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aWV3cyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlVmlldyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdXNlZFZpZXcgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNyZWF0ZSAmJiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcikge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgIG9sLmNvbnRyb2wuQ29udHJvbC5jYWxsKHRoaXMsIHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICB0YXJnZXQ6IHRoaXMub3B0aW9ucy50YXJnZXQgfHwgdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkLCBvbC5jb250cm9sLkNvbnRyb2wpO1xuXG4gIC8vIEFkZCBtZXRob2RzXG4gIGM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYmFzaWMgaHRtbC1lbGVtZW50cyBmb3IgdGhlIHNpZGVib2FyZFxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAndHJ1ZScgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgaW5pdENsYXNzLFxuICAgICAgICAgIHRpdGxlQnV0dG9uQmFyLFxuICAgICAgICAgIGNsb3NlQnV0dG9uLFxuICAgICAgICAgIGNhcGl0YWxpemVkTmFtZSxcbiAgICAgICAgICBoaWRlQnV0dG9uLFxuICAgICAgICAgIGNhY2hpbmc7XG5cbiAgICAgIGNhY2hpbmcgPSB0aGlzLm9wdGlvbnMuY2FjaGluZztcbiAgICAgIGNhcGl0YWxpemVkTmFtZSA9IHV0aWxzLmNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm9wdGlvbnMubmFtZSk7XG4gICAgICBzZWxmID0gdGhpcztcblxuXG4gICAgICAvLyBEbyBub3QgaGlkZSB3aGVuIGl0IGlzIGluaXRpYWxpemVkIG9wZW4sIG9yIGluIGFuIGV4dGVybmFsIGRpdlxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgaW5pdENsYXNzID0gJyAnICsgY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgICAgIC8vIGlmIChjYWNoaW5nKSB7XG4gICAgICAgIC8vICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMScpO1xuICAgICAgICAvLyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0Q2xhc3MgPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgICAgIC8vIGlmIChjYWNoaW5nKSB7XG4gICAgICAgIC8vICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gfHwgZmFsc2U7XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgJCh0aGlzLmJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBbbm90ZV0gXCJ0aGlzLmJsdXIoKVwiIGRvZXMgbm90IHdvcmsgaW4gSUUtZnVsbHNjcmVlbi1tb2RlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5uYW1lICsgJzogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGNhcGl0YWxpemVkTmFtZSA9PSBcIlJvdXRlclwiIHx8IGNhcGl0YWxpemVkTmFtZSA9PSBcIk1lYXN1cmVcIiB8fCBjYXBpdGFsaXplZE5hbWUgPT0gXCJFZGl0b3JcIil7XG4gICAgICAgICAgICAgIHNlbGYudG9nZ2xlKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBzZWxmLnRvZ2dsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnRpdGxlID0gdGhpcy5vcHRpb25zLnRpcExhYmVsO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgICAgJCh0aGlzLmNvbnRhaW5lcikuYWRkQ2xhc3MoJ2M0Zy0nICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNvbnRhaW5lcicgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgaW5pdENsYXNzKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcygnYzRnLScgKyB0aGlzLm9wdGlvbnMubmFtZSArICcgJyArICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY29udHJvbCcgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0wgKyBpbml0Q2xhc3MpO1xuXG4gICAgICAvLyBTZXQgaW5pdGlhbCBkaW1lbnNpb25zXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzI1MHB4JztcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTkyMHB4JztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTEwMCUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcyNTBweCc7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTE5MjBweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xMDAlJztcbiAgICAgIH1cblxuICAgICAgLy8gUGxhY2UgY29udGFpbmVyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4dERpdikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuZXh0RGl2KS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIC8vICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgJCgnIycgKyB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VGFyZ2V0KCkgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX09WRVJMQVlDT05UQUlORVJfU0UpLmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgY29udGVudC1hcmVhXG4gICAgICAvL1xuICAgICAgLy8gV3JhcHBlclxuICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLndyYXBwZXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy13cmFwcGVyJztcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAvLyBUaXRsZWJhclxuICAgICAgdGhpcy50aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy50aXRsZUJhci5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLXRpdGxlYmFyJztcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlQmFyKTtcblxuICAgICAgLy8gVHJpZ2dlcmJhclxuICAgICAgdGhpcy52aWV3VHJpZ2dlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy52aWV3VHJpZ2dlckJhci5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLXZpZXd0cmlnZ2VyYmFyJztcblxuICAgICAgLy8gVG9wLVRvb2xiYXJcbiAgICAgIHRoaXMudG9wVG9vbGJhciA9IHRoaXMuYWRkU2VjdGlvbih7XG4gICAgICAgIGNsYXNzTmFtZTogJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy10b3AtdG9vbGJhcicsXG4gICAgICAgIHRhcmdldDogdGhpcy53cmFwcGVyXG4gICAgICB9KTtcblxuICAgICAgLy8gQ29udGVudC1Db250YWluZXJcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHRoaXMuYWRkU2VjdGlvbih7XG4gICAgICAgIGNsYXNzTmFtZTogJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgICAgIHRhcmdldDogdGhpcy53cmFwcGVyXG4gICAgICB9KTtcblxuICAgICAgLy8gYWRkIGNvbnRlbnQgaGVhZGxpbmVcbiAgICAgIHRoaXMuY29udGVudEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZS5jbGFzc05hbWUgPSAnY29udGVudEhlYWRsaW5lJztcbiAgICAgIHRoaXMuY29udGVudEhlYWRsaW5lLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEhlYWRsaW5lKTtcblxuICAgICAgLy8gQm90dG9tLVRvb2xiYXJcbiAgICAgIHRoaXMuYm90dG9tVG9vbGJhciA9IHRoaXMuYWRkU2VjdGlvbih7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWJvdHRvbS10b29sYmFyIGM0Zy1jbG9zZScsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLndyYXBwZXJcbiAgICAgIH0pO1xuXG4gICAgICAgLy8gU3RhdHVzYmFyXG4gICAgICB0aGlzLnN0YXR1c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5zdGF0dXNCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1zdGF0dXNiYXIgYzRnLWNsb3NlJztcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnN0YXR1c0Jhcik7XG5cbiAgICAgIC8vIEFkZCBzcGlubmVyXG4gICAgICB0aGlzLnNwaW5uZXIgPSBuZXcgU3Bpbm5lcih7XG4gICAgICAgIHRhcmdldDogdGhpcy5jb250ZW50Q29udGFpbmVyLFxuICAgICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5MQVJHRVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEZpbGwgdGl0bGViYXJcbiAgICAgIC8vXG4gICAgICAvLyBIZWFkbGluZVxuICAgICAgdGhpcy5oZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuaGVhZGxpbmUuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1oZWFkbGluZSc7XG4gICAgICB0aGlzLmhlYWRsaW5lLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5oZWFkbGluZTtcbiAgICAgIHRoaXMudGl0bGVCYXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkbGluZSk7XG4gICAgICAvLyBCdXR0b25iYXJcbiAgICAgIHRpdGxlQnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aXRsZUJ1dHRvbkJhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTCArICcgJyArICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctYnV0dG9uYmFyJztcbiAgICAgIHRoaXMudGl0bGVCYXIuYXBwZW5kQ2hpbGQodGl0bGVCdXR0b25CYXIpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIC8vIEhpZGVidXR0b25cbiAgICAgICAgaGlkZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBoaWRlQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5QT1JUU0lERV9ISURFO1xuICAgICAgICBoaWRlQnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ISURFO1xuICAgICAgICAkKGhpZGVCdXR0b24pLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5jbG9zZSh0cnVlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aXRsZUJ1dHRvbkJhci5hcHBlbmRDaGlsZChoaWRlQnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xvc2VidXR0b25cbiAgICAgIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNsb3NlJztcbiAgICAgIGNsb3NlQnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DTE9TRTtcbiAgICAgICQoY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGl0bGVCdXR0b25CYXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgICAvL0FkZCBzcGlubmVyIGZvciBsZWZ0IHNpZGVkIHNpZGVib2FyZCBlbGVtZW50c1xuICAgICAgdGhpcy5zcGlubmVyID0gbmV3IFNwaW5uZXIoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udGVudENvbnRhaW5lcixcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuTEFSR0VcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgZXh0ZXJuYWwgRElWIGFuZCBkZWZhdWx0IHN0YXRlXG4gICAgICAvLyBjYXRjaCB0b3VjaCBldmVudHMgYW5kIHN0b3AgdGhlaXIgcHJvcGFnYXRpb25cbiAgICAgIC8vIG90aGVyd2lzZSB0b3VjaC1zY3JvbGxpbmcgd2lsbCBiZSBzdG9wcGVkIGJ5IG9sM1xuICAgICAgJCh0aGlzLmNvbnRhaW5lcikub24oJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEJpbmQgdGhlIHVwZGF0ZSBtZXRob2QgdG8gdGhlIG1hcC1yZXNpemUgZXZlbnRcbiAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5vbignY2hhbmdlOnNpemUnLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG5cbiAgICAgIC8vIFNob3cgb3BlbiBpZiBkZXNpcmVkXG4gICAgICBpZiAoKHRoaXMub3B0aW9ucy5kZWZhdWx0T3BlbikgfHwgKHRoaXMub3B0aW9ucy5jYWNoaW5nICYmICh1dGlscy5nZXRWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSkgPT0gJzEnKSkpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNyZWF0ZVwiXG5cbiAgICAvKipcbiAgICAgKiAgIFVwZGF0ZSB0aGUgc2lkZWJvYXJkcyBodG1sLWVsZW1lbnRzXG4gICAgICogICByZXNpemVzIHRoZSBjb250ZW50LWNvbnRhaW5lclxuICAgICAqICAgYW5kIHRoZSB0b3AtdG9vbGJhclxuICAgICAqXG4gICAgICogQHBhcmFtICB7ZXZlbnQtb2JqZWN0fSAgb3B0X2V2ZW50ICAqb3B0aW9uYWwqICBKdXN0IG5lZWRlZCBieSB0aGUgb2wtYmluZC1tZXRob2QsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXQgbm90IHVzZWQgaW4gdGhlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAob3B0X2V2ZW50KSB7XG5cbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCxcbiAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8qXG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgY2FwaXRhbGl6ZWROYW1lID0gdXRpbHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMub3B0aW9ucy5uYW1lKTtcbiAgICAgIH0qL1xuXG4gICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQgPSAkKHRoaXMud3JhcHBlcikuaGVpZ2h0KCkgLSAoJCh0aGlzLnRpdGxlQmFyKS5vdXRlckhlaWdodCh0cnVlKSArICQodGhpcy5zdGF0dXNCYXIpLm91dGVySGVpZ2h0KHRydWUpKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiAmJiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGlmICh0aGlzICE9PSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSkge1xuICAgICAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUb3AtVG9vbGJhclxuICAgICAgaWYgKHRoaXMudG9wVG9vbGJhcikge1xuICAgICAgICAgIGlmICh0aGlzLnRvcFRvb2xiYXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMudG9wVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgdGhpcy50b3BUb29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IC09ICQodGhpcy50b3BUb29sYmFyKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvcFRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdHRvbS10b29sYmFyXG4gICAgICBpZiAodGhpcy5ib3R0b21Ub29sYmFyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYm90dG9tVG9vbGJhci5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5ib3R0b21Ub29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbVRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQgLT0gJCh0aGlzLmJvdHRvbVRvb2xiYXIpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ29udGVudC1jb250YWluZXJcbiAgICAgICQodGhpcy5jb250ZW50Q29udGFpbmVyKS5vdXRlckhlaWdodChjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQpO1xuXG4gICAgICAvLyBDb3JyZWN0IHdpZHRoXG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICAgICAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW3RoaXMub3B0aW9ucy5kaXJlY3Rpb24gKyBcIlNsaWRlRWxlbWVudHNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moc2VsZi5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvL29ubHkgbW92ZSB0aGUgdG9nZ2xlIGJ1dHRvbiBvbiBzdGFyYm9hcmQgZWxlbWVudHNcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcy5lbGVtZW50KS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAvLyBlbmQgb2YgXCJ1cGRhdGVcIlxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhpcyBzaWRlYm9hcmQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgKm9wdGlvbmFsKiBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byB0aGUgaW5pdGlhbGl6ZS1mdW5jdGlvbiBpZiBpdCBleGlzdHNcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICd0cnVlJyBhbiBzdWNjZXNzXG4gICAgICovXG4gICAgb3BlbjogZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG4gICAgICB2YXIgY29udGFpbmVyT2Zmc2V0V2lkdGgsXG4gICAgICAgICAgc2VsZjtcblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIENhbGwgaW5pdGlhbGl6ZS1mdW5jdGlvbnMsIGlmIGV4aXN0ZW50XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdGhpcy5pbml0KG9wdF9vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjYWxsIHByZU9wZW5GdW5jdGlvbnNcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVPcGVuRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcmVPcGVuRnVuY3Rpb24oKTtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgLy8gTm90IGF2YWlsYWJsZSBvbiBleHRlcm5hbCBkaXZzXG4gICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbm5vdCB1c2UgdGhpcyBmdW5jdGlvbiBvbiBleHRlcm5hbCBlbWJlZGRlZCBzaWRlYm9hcmQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9jbG9zZSBvdGhlciBhY3RpdmUgc2lkZWJvYXJkIG9uIHRoaXMgc2lkZVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdLmNsb3NlKHRydWUsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNsaWRlIG90aGVyIGVsZW1lbnRzIHdoZW4gbm8gb3RoZXIgc2lkZWJvYXJkIHdhcyBhY3RpdmUgb24gdGhpcyBzaWRlXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbdGhpcy5vcHRpb25zLmRpcmVjdGlvbiArIFwiU2xpZGVFbGVtZW50c1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyhzZWxmLm9wdGlvbnMuZGlyZWN0aW9uLCBjb250YWluZXJPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgMCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmNzcyh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLCBjb250YWluZXJPZmZzZXRXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhpcyBhcyBhY3RpdmUgU2lkZWJvYXJkXG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gdGhpcztcblxuICAgICAgICAvLyBjaGVjayBpZiBhIHZpZXcgbmVlZHMgdG8gYmUgcmVhY3RpdmF0ZWRcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVmlldykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVmlldy5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQodGhpcy5zdGF0dXNCYXIpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAkKHRoaXMuc3RhdHVzQmFyKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKHRoaXMuYm90dG9tVG9vbGJhcikuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgICAgICQodGhpcy5ib3R0b21Ub29sYmFyKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNob3cgY29udGFpbmVyIHRvIGZpeCByZXNpemluZyBpc3N1ZVxuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FjaGluZykge1xuICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUodGhpcy5vcHRpb25zLm5hbWUsICcxJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHBvc3RPcGVuRnVuY3Rpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wb3N0T3BlbkZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wb3N0T3BlbkZ1bmN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJvcGVuXCJcblxuICAgIGlzT3BlbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSAmJiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGlzIHNpZGVib2FyZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gIG9wdF9oaWRlICAgICAgICAgICAgICAgKm9wdGlvbmFsKiBDaG9vc2UgaWYgdGhpcyBmdW5jdGlvbiBzaG91bGQgdHJpZ2dlciB8cHJlSGlkZUZ1bmN0aW9ufFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0ZWFkIG9mIHxwcmVDbG9zZUZ1bmN0aW9ufC4gRGVmYXVsdCBpcyB8ZmFsc2V8LlxuICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgb3B0X29wZW5PdGhlclNpZGVib2FyZCAgKm9wdGlvbmFsKiBJbmRpY2F0ZXMgaWYgYW5vdGhlciBzaWRlYm9hcmQgZWxlbWVudCB3aWxsIGJlIG9wZW5lZCBpbnN0ZWFkLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIHxmYWxzZXwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgfHRydWV8IG9uIHN1Y2Nlc3MuXG4gICAgICovXG4gICAgY2xvc2U6IGZ1bmN0aW9uIChvcHRfaGlkZSwgb3B0X29wZW5PdGhlclNpZGVib2FyZCkge1xuICAgICAgdmFyIGNvbnRhaW5lck9mZnNldFdpZHRoLFxuICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgZGlyZWN0aW9uID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblxuICAgICAgaWYgKG9wdF9oaWRlICkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlSGlkZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wcmVIaWRlRnVuY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZUNsb3NlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnByZUNsb3NlRnVuY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4dERpdikge1xuICAgICAgICAvLyBOb3QgYXZhaWxhYmxlIG9uIGV4dGVybmFsIGRpdnNcbiAgICAgICAgY29uc29sZS53YXJuKCdZb3UgY2Fubm90IHVzZSB0aGlzIGZ1bmN0aW9uIG9uIGV4dGVybmFsIGVtYmVkZGVkIHNpZGVib2FyZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSAhPT0gdGhpcykge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyAnICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnLWVsZW1lbnQgKCcgKyB0aGlzLm9wdGlvbnMubmFtZSArICcpIGlzIGFscmVhZHkgY2xvc2VkLicpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5jc3MoZGlyZWN0aW9uLCAtY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuY3NzKGRpcmVjdGlvbiwgMCk7XG5cbiAgICAgICAgaWYgKCFvcHRfb3Blbk90aGVyU2lkZWJvYXJkKSB7XG4gICAgICAgICAgLy8gc2xpZGUgb3RoZXIgZWxlbWVudHNcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltkaXJlY3Rpb24gKyBcIlNsaWRlRWxlbWVudHNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5jc3MoZGlyZWN0aW9uLCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhpZGUgY29udGFpbmVyIHRvIGZpeCByZXNpemluZyBpc3N1ZVxuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYSB2aWV3IG5lZWRzIHRvIGJlIGRlYWN0aXZhdGVkXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhY3RpdmUgU2lkZWJvYXJkZW50cnlcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhY2hpbmcpIHtcbiAgICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUodGhpcy5vcHRpb25zLm5hbWUsICcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgLy8gZW5kIG9mIFwiY2xvc2VcIlxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoaXMgc2lkZWJvYXJkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgUmV0dXJucyB8dHJ1ZXwgb24gc3VjY2Vzcy5cbiAgICAgKi9cbiAgICB0b2dnbGU6IGZ1bmN0aW9uIChvcHRfaGlkZSkge1xuICAgICAgdmFyIGNhcGl0YWxpemVkTmFtZTtcbiAgICAgIGNhcGl0YWxpemVkTmFtZSA9IHV0aWxzLmNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm9wdGlvbnMubmFtZSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2Uob3B0X2hpZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMub3BlbigpO1xuICAgIH0sIC8vIGVuZCBvZiBcInRvZ2dsZVwiXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYnV0dG9uIHdoaWNoIGNoYXJhY3RlcmlzdGljcyBhcmUgZGVmaW5lZCBieSB0aGUgb3B0aW9ucyBwYXJhbWV0ZXJcbiAgICAgKiBUaGVzZSBvcHRpb25zIGluY2x1ZGUgZS5nLiB0aGUgdGFyZ2V0IGNvbnRhaW5lciB3aGVyZSB0aGUgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgYW5kIHRoZSBjbGljayBhY3Rpb24gb2YgdGhlIGJ1dHRvblxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gIG9wdF9vcHRpb25zICBUaGUgYnV0dG9uIGNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbWFrZUJ1dHRvbjogZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIGJ1dHRvbjtcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICAgICAgdGlwTGFiZWw6IHVuZGVmaW5lZCxcbiAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgdGFyZ2V0OiB1bmRlZmluZWQsXG4gICAgICAgIGNsaWNrQWN0aW9uOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdF9vcHRpb25zKTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NOYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY2xhc3NOYW1lID0gJyAnICsgb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJy1idXR0b24nICsgb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgICBpZihvcHRpb25zLmlkKSB7XG4gICAgICAgIGJ1dHRvbi5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aXBMYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gb3B0aW9ucy50aXBMYWJlbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gb3B0aW9ucy5sYWJlbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMubGFiZWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChvcHRpb25zLmxhYmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNsaWNrQWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICQoYnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zLmNsaWNrQWN0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgJChvcHRpb25zLnRhcmdldCkuYXBwZW5kKGJ1dHRvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidXR0b247XG4gICAgfSwgLy8gZW5kIG9mIFwibWFrZUJ1dHRvblwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFthZGRTZWN0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgb3B0X29wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRTZWN0aW9uOiBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgICAgdmFyIG9wdGlvbnMsXG4gICAgICAgICAgc2VjdGlvbixcbiAgICAgICAgICBlbGVtZW50O1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICB0eXBlOiAnZGl2JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgdGFyZ2V0OiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdF9vcHRpb25zKTtcblxuICAgICAgLy8gdHJ5IHRvIGNyZWF0ZSB0aGUgbmV3IHNlY3Rpb25cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMudHlwZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGNyZWF0ZSBzZWN0aW9uLiBcIicgKyBvcHRpb25zLnR5cGUgKyAnIGlzIG5vdCBhIHZhbGlkIEhUTUwtbm9kZS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lO1xuXG4gICAgICAvLyB0cnkgdG8gYXBwZW5kIHRoZSBzZWN0aW9uIHRvIHRoZSBnaXZlbiB0YXJnZXRcbiAgICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMudGFyZ2V0LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5nZXRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudCB8fCBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIHNlY3Rpb24uc2V0RWxlbWVudCA9IGZ1bmN0aW9uIChuZXdFbGVtZW50KSB7XG4gICAgICAgIGlmIChuZXdFbGVtZW50ICYmIHR5cGVvZiBuZXdFbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmICghKGVsZW1lbnQgJiYgZWxlbWVudCA9PT0gbmV3RWxlbWVudCkpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudCA9IG5ld0VsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG5cbiAgICAgIC8vIGFkZCB0byBzZWN0aW9ucy1hcnJheVxuICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSwgLy8gZW5kIG9mIFwiYWRkU2VjdGlvblwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFthZGRWaWV3IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgb3B0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFkZFZpZXc6IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRfdmlld1Njb3BlKSB7XG5cbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIHZpZXdTY29wZSxcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzLFxuICAgICAgICAgIHRyaWdnZXIsXG4gICAgICAgICAgdmlldztcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICB2aWV3U2NvcGUgPSBvcHRfdmlld1Njb3BlIHx8IHRoaXM7XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIC8vIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdHJpZ2dlckNvbmZpZzogdW5kZWZpbmVkLCAvLyBAVE9ETyBkb2t1IGZvcm1hdDoge29wdF90YXJnZXQ6IFtzdHJpbmd8aHRtbE9iamVjdF0sIG9wdF9jbGFzc05hbWU6IFtzdHJpbmddLCBvcHRfdGlwTGFiZWw6IFtzdHJpbmddfVxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtdLCAvLyBAVE9ETyBkb2t1IGZvcm1hdDogW3tzZWN0aW9uOiBbc2VjdGlvbk9iamVjdF0sIGVsZW1lbnQ6IFtlbGVtZW50T2JqZWN0XX1dXG4gICAgICAgIGluaXRGdW5jdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGRlYWN0aXZhdGVGdW5jdGlvbjogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGFkZCBhIHZpZXcgd2l0aG91dCBhIG5hbWUgKG9mIHR5cGUgXCJzdHJpbmdcIikuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmlldyA9IHt9O1xuXG4gICAgICB2aWV3LmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICB2aWV3LnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICB2aWV3LmFjdGl2YXRlID0gZnVuY3Rpb24gKG9wdF9vcGVuU2lkZWJvYXJkKSB7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnRyaWdnZXJDb25maWcud2l0aEhlYWRsaW5lKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSBvcHRpb25zLnRyaWdnZXJDb25maWcudGlwTGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvcGVuIFNpZGVib2FyZCBpZiBjbG9zZWRcbiAgICAgICAgaWYgKG9wdF9vcGVuU2lkZWJvYXJkICYmICFzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgICAgc2VsZi5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWFjdGl2YXRlIGN1cnJlbnQgYWN0aXZlVmlldywgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3U2NvcGUuYWN0aXZlVmlldyA9PT0gJ29iamVjdCcgJiYgdmlld1Njb3BlLmFjdGl2ZVZpZXcgIT09IHZpZXcpIHtcbiAgICAgICAgICB2aWV3U2NvcGUuYWN0aXZlVmlldy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmlld1Njb3BlLmFjdGl2ZVZpZXcgPSB2aWV3O1xuXG4gICAgICAgIC8vIEhhbmRsZSBzdWItdmlld3NcbiAgICAgICAgaWYgKHZpZXcuYWN0aXZlVmlldykge1xuICAgICAgICAgIHZpZXcuYWN0aXZlVmlldy5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBpbml0aWFsaXplLWZ1bmN0aW9ucywgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKCF2aWV3LmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmluaXRGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmlldy5pbml0aWFsaXplZCA9IG9wdGlvbnMuaW5pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgZWxlbWVudHMgaW4gZ2l2ZW4gc2VjdGlvbnNcbiAgICAgICAgaWYgKG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzICYmIG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5zZWN0aW9uRWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzW2ldLnNlY3Rpb24uc2V0RWxlbWVudChvcHRpb25zLnNlY3Rpb25FbGVtZW50c1tpXS5lbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGFuZ2UgdHJpZ2dlci1zdGF0ZSwgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKCdjNGctYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGFjdGl2YXRlIGZ1bmN0aW9uLCBpZiBleGlzdGVudFxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWN0aXZhdGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5hY3RpdmF0ZUZ1bmN0aW9uKHZpZXcucGF1c2VkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXcucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcblxuICAgICAgdmlldy5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKG9wdF9wYXVzZSkge1xuXG4gICAgICAgIHZpZXcucGF1c2VkID0gb3B0X3BhdXNlIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1Njb3BlLmFjdGl2ZVZpZXcgPT09ICdvYmplY3QnICYmIHZpZXdTY29wZS5hY3RpdmVWaWV3ID09PSB2aWV3KSB7XG4gICAgICAgICAgaWYgKHRyaWdnZXIgJiYgIXZpZXcucGF1c2VkKSB7XG4gICAgICAgICAgICAkKHRyaWdnZXIpLnJlbW92ZUNsYXNzKCdjNGctYWN0aXZlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHN1Yi12aWV3c1xuICAgICAgICAgIGlmICh2aWV3LmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICAgIHZpZXcuYWN0aXZlVmlldy5kZWFjdGl2YXRlKHZpZXcucGF1c2VkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsIGRlYWN0aXZhdGUgZnVuY3Rpb24sIGlmIGV4aXN0ZW50XG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmRlYWN0aXZhdGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGVhY3RpdmF0ZUZ1bmN0aW9uKHZpZXcucGF1c2VkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyaWdnZXJDb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbnMudHJpZ2dlckNvbmZpZyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMudmlld1RyaWdnZXJCYXIsXG4gICAgICAgICAgdGlwTGFiZWw6IG9wdGlvbnMubmFtZSxcbiAgICAgICAgfSwgb3B0aW9ucy50cmlnZ2VyQ29uZmlnKTtcblxuICAgICAgICBvcHRpb25zLnRyaWdnZXJDb25maWcuY2xpY2tBY3Rpb24gPSB2aWV3LmFjdGl2YXRlO1xuICAgICAgICBpZiAob3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZSkge1xuICAgICAgICAgIGFkZGl0aW9uYWxUcmlnZ2VyQ2xhc3MgPSAnICcgKyBvcHRpb25zLnRyaWdnZXJDb25maWcuY2xhc3NOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZGl0aW9uYWxUcmlnZ2VyQ2xhc3MgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnRyaWdnZXJDb25maWcuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLklDT04gKyBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzO1xuICAgICAgICAvLyBAVE9ETyBjaGVjazogdHJpZ2dlciA9IHRoaXMubWFrZUJ1dHRvbihvcHRpb25zLnRyaWdnZXJDb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gdGhpcy5tYWtlQnV0dG9uKG9wdGlvbnMudHJpZ2dlckNvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmlld3MucHVzaCh2aWV3KTtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0gLy8gZW5kIG9mIFwiYWRkVmlld1wiXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCJcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgU2lkZWJvYXJkID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlNpZGVib2FyZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc2lkZWJvYXJkLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY3VycmVudCB6b29tbGV2ZWwgb24gdGhlIG1hcC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICB1cGRhdGVab29tbGV2ZWw7XG5cbiAgICBzZWxmID0gdGhpcztcblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5tYXBWaWV3KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1pvb21sZXZlbCBjb250cm9sIG5lZWRzIHRvIGtub3cgdGhlIG1hcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuWk9PTV9MRVZFTCxcbiAgICAgIHVuZGVmaW5lZEhUTUw6ICcnXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMubWFwVmlldy5nZXRab29tKCk7XG5cbiAgICB1cGRhdGVab29tbGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhcnNlSW50KG9wdGlvbnMubWFwVmlldy5nZXRab29tKCkpO1xuICAgIH07XG5cbiAgICBvcHRpb25zLm1hcFZpZXcub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgdXBkYXRlWm9vbWxldmVsKTtcbiAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBvcHRpb25zLnRhcmdldFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUsIHtcblxuICAgIC8vIG5vdGhpbmcgdG8gYWRkIGhlcmVcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgWm9vbWxldmVsID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlpvb21sZXZlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5taXNjID0gdGhpcy5jNGcubWFwcy5taXNjIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbU3Bpbm5lciBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgQ29udHJvbCBvcHRpb25zLlxuICAgKi9cbiAgYzRnLm1hcHMubWlzYy5TcGlubmVyID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBzcGlubmVyU3BhbjtcblxuICAgIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgdGFyZ2V0OiAnLicgKyBjc3NDb25zdGFudHMuT0xfVklFV1BPUlRcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgb3B0aW9ucy5jbGFzc05hbWUgPSAnICcgKyBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlNQSU5ORVIgKyBvcHRpb25zLmNsYXNzTmFtZSArICcgJyArIGNzc0NvbnN0YW50cy5ISURFO1xuICAgICQob3B0aW9ucy50YXJnZXQpLmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgc3Bpbm5lclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bpbm5lclNwYW4uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLklDT04gKyAnICcgKyBjc3NDb25zdGFudHMuQU5JTUFUSU9OX1NQSU47XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNwaW5uZXJTcGFuKTtcblxuICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyID0gMDtcblxuICB9O1xuXG4gIC8vIEFkZCBtZXRob2RzIHRvIHNwaW5uZXJcbiAgYzRnLm1hcHMubWlzYy5TcGlubmVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLm1pc2MuU3Bpbm5lci5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICogW3Nob3cgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSElERSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciArPSAxO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtoaWRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5ISURFKSkge1xuICAgICAgICAvL2NvbnNvbGUud2FybignU3Bpbm5lciBpcyBhbHJlYWR5IGhpZGRlbi4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciA9PT0gMCkge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSElERSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSxcblxuICB9KTsgLy8gRW5kIG9mIFwiYWRkIG1ldGhvZHMgdG8gc3Bpbm5lclwiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFNwaW5uZXIgPSB0aGlzLmM0Zy5tYXBzLm1pc2MuU3Bpbm5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lci5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1pvb21sZXZlbH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWxcIlxuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIGM0Zy1NYXBzIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAqL1xuICBjNGcubWFwcy51dGlscyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLnV0aWxzLCB7XG4gICAgLyoqXG4gICAgICogIENvbnZlcnRzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG8gdXBwZXJjYXNlLCBsZWF2aW5nIHRoZSByZW1haW5pbmcgc3RyaW5nIHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqICBAcGFyYW0gICAge3N0cmluZ30gICAgdGhlIHN0cmluZyB0byBjYXBpdGFsaXplXG4gICAgICpcbiAgICAgKiAgQHJldHVybiAgIHtzdHJpbmd9ICAgIHRoZSBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkLlxuICAgICAqXG4gICAgICogVGhlIGlkIGlzIDkgY2hhcmFjdGVycyBsb25nIGFuZCBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgVGhlIGdlbmVyYXRlZCBpZC5cbiAgICAgKi9cbiAgICBnZXRVbmlxdWVJZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgICAgIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gICAgICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIG5vdCBicmVhayB0aGUgQ29kZS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFwgLT4gXFxcXDtcbiAgICAgKiAgIFwiIC0+ICcnO1xuICAgICAqICAgw4QgLT4gJkF1bWw7XG4gICAgICogICDDpCAtPiAmYXVtbDtcbiAgICAgKiAgIMOWIC0+ICZPdW1sO1xuICAgICAqICAgw7YgLT4gJm91bWw7XG4gICAgICogICDDnCAtPiAmVXVtbDtcbiAgICAgKiAgIMO8IC0+ICZ1dW1sO1xuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBlbmNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFwvZywgJ1xcXFxcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXFwiL2csICdcXCdcXCcnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OEL2csICcmQXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OkL2csICcmYXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OWL2csICcmT3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O2L2csICcmb3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OcL2csICcmVXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O8L2csICcmdXVtbDsnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBlbmNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgYmUgZGlzcGxheWVkIGNvcnJlY3RseS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFxcXCAgICAgLT4gXFw7XG4gICAgICogICAnJyAgICAgLT4gXCI7XG4gICAgICogICAmQXVtbDsgLT4gw4RcbiAgICAgKiAgICZhdW1sOyAtPiDDpFxuICAgICAqICAgJk91bWw7IC0+IMOWXG4gICAgICogICAmb3VtbDsgLT4gw7ZcbiAgICAgKiAgICZVdW1sOyAtPiDDnFxuICAgICAqICAgJnV1bWw7IC0+IMO8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFxcXFxcL2csICdcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXCdcXCcvZywgJ1xcXCInXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZBdW1sOy9nLCAnw4QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZhdW1sOy9nLCAnw6QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZPdW1sOy9nLCAnw5YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZvdW1sOy9nLCAnw7YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZVdW1sOy9nLCAnw5w7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mdXVtbDsvZywgJ8O8J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZGVjb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciByZXBsYWNlIGFuIFVSTC1wYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBgcGFyYW1gLFxuICAgICAqIHdpbGwgYmUgYXBwbGllZCBhcyBcImhhc2gtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHMjcGFyYW1cbiAgICAgKiBOb3RlLCB0aGF0IGFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiB3aGVyZWFzIGV4aXN0aW5nIFwiR0VULXBhcmFtZXRlcnNcIiBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBzZXQsIGl0IHdpbGwgYmUgYXBwbGllZCBhcyBcIkdFVC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcz9vcHRfZ2V0S2V5PXBhcmFtXG4gICAgICogSWYgdGhlIGtleSBkZXNjcmliZWQgYnkgYG9wdF9nZXRLZXlgIGlzIGFscmVhZHkgZXhpc3RpbmcsIGl0cyB2YWx1ZSB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGtleS12YWx1ZS1wYWlyIHdpbGwgYmUgYXBwZW5kZWQgYXBwcm9wcmlhdGx5LlxuICAgICAqIEFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9leGVjdXRlYCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG5ldyBsaW5rIGFzIGBzdHJpbmdgLFxuICAgICAqIG90aGVyd2lzZSB0aGUgXCJocmVmL2xvY2F0aW9uXCIgd2lsbCBiZSBjaGFuZ2VkIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLCB3aGljaCBjYW4gY2F1c2UgYSBwYWdlcmVsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgcGFyYW0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbnxzdHJpbmd9ICBvcHRfZ2V0S2V5ICAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICBvcHRfZXhlY3V0ZSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBzZXRVcmxQYXJhbTogZnVuY3Rpb24gKHBhcmFtLCBvcHRfZ2V0S2V5LCBvcHRfZXhlY3V0ZSkge1xuICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgc2VhcmNoUGFyYW0sXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsaW5rID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICAvLyB1c2UgaGFzaC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gbG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgR0VULXBhcmFtZXRlclxuICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGFscmVhZHkgc2VhcmNoLXBhcmFtZXRlcnNcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgb3B0X2dldEtleSA9IG9wdF9nZXRLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAvLyByZXBsYWNlIHBhcmFtZXRlciBpZiBhbHJlYWR5IGV4aXN0ZW50XG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcbiAgICAgICAgICAgICAgLyhbXj1cXD9cXCZdKyk9KFteJl0rKS9naSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG9wdF9nZXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBhcHBlbmQgYXMgbmV3IHBhcmFtZXRlclxuICAgICAgICAgIGlmICghcGFyYW1SZXBsYWNlZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW0gKz0gJyYnICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG9ubHkgc2VhcmNoLXBhcmFtZXRlciBpbiB0aGUgVVJMXG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSAnPycgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uc2VhcmNoID0gc2VhcmNoUGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBzZWFyY2hQYXJhbSArIGxvY2F0aW9uLmhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0sIC8vIGVuZCBvZiBzZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIG9yIGhhc2ggVVJMLXBhcmFtZXRlciBhcyBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGhhc2gtcGFyYW1ldGVyIG9mIHRoZSBVUkwgaXMgcmV0dXJuZWQsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgc2VhcmNoIGZvciBhIEdFVC1wYXJhbWV0ZXIgYW5kIHJldHVybiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciBpcyBub3QgZXhpc3RlbnQsIG9yIGVtcHR5LCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8c3RyaW5nfSAgb3B0X2dldEtleSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvdW5kIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKG9wdF9nZXRLZXkpIHtcbiAgICAgIHZhciBwYXJhbSxcbiAgICAgICAgICByZWdFeDtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIHBhcmFtID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIHBhcmFtID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnRXggPSBuZXcgUmVnRXhwKCdbXFw/XFwmXScgKyBvcHRfZ2V0S2V5ICsgJz0oW14mXSspJywgJ2knKTtcbiAgICAgICAgICBwYXJhbSA9IHJlZ0V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSwgLy8gZW5kIG9mIGdldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIERlbHRhLWVuY29kZSBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYXJyYXkgd2lsbCBiZSBzb3J0ZWQgKGxvd2VzdCB0byBoaWdoZXN0KVxuICAgICAqIGJlZm9yZSBlbmNvZGluZy5cbiAgICAgKlxuICAgICAqIFNvIGFmdGVyIHRoZSBlbmNvZGluZyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAqIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGhlIHNldCBhbmQgZWFjaCBmb2xsb3dpbmcgbnVtYmVyIGp1c3RcbiAgICAgKiByZXByZXNlbnRzIHRoZSBvZmZzZXQgdG8gaXRzIHByZXZpb3VzIG5laWdoYm9yLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBtb3N0bHkgZWZmaWNpZW50IGZvciBoaWdoIG51bWJlcnMsIHRoYXQgYXJlIFwiY2xvc2UgdG8gZWFjaCBvdGhlclwiLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiAgIFsxMzM3LCAxMSwgMTAxLCAxMjMsIDk2LCA2OSwgNDIsIDQyXVxuICAgICAqICAgd2lsbCBiZSBzb3J0ZWRcbiAgICAgKiAgIFsxMSwgNDIsIDQyLCA2OSwgOTYsIDEwMSwgMTIzLCAxMzM3XVxuICAgICAqICAgYW5kIGVuY29kZWQgdG9cbiAgICAgKiAgIFsxMSwgMzEsIDAsIDI3LCAyNywgNSwgMjIsIDEyMTRdXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YUVuY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKGFycklucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGFycklucHV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSk7XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gYXJySW5wdXRbMF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gYXJySW5wdXRbaV0gLSBhcnJJbnB1dFtpIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFFbmNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgZGVsdGEtZW5jb2RlZCBhcnJheS5cbiAgICAgKiBTZWUgYGRlbHRhRW5jb2RlYCBmdW5jdGlvbiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRGVjb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gcGFyc2VJbnQoYXJySW5wdXRbMF0sIDEwKTtcbiAgICAgIGlmIChpc05hTihhcnJJbnB1dFswXSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IHBhcnNlSW50KGFycklucHV0W2ldLCAxMCkgKyBhcnJPdXRwdXRbaSAtIDFdO1xuICAgICAgICBpZiAoaXNOYU4oYXJyT3V0cHV0W2ldKSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRGVjb2RlKClcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBjYWxsIGZ1bmN0aW9ucyBpbiBgYXJySG9va0Z1bmN0aW9uc2Agd2l0aCBnaXZlbiBgcGFyYW1ldGVyc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8ZnVuY3Rpb24+fSAgIGFyckhvb2tGdW5jdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7bWl4ZWR9ICAgICAgICAgICAgIHBhcmFtZXRlcnMgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjYWxsSG9va0Z1bmN0aW9uczogZnVuY3Rpb24gKGFyckhvb2tGdW5jdGlvbnMsIHBhcmFtZXRlcnMpIHtcbiAgICAgIHZhciBqO1xuXG4gICAgICBpZiAoYXJySG9va0Z1bmN0aW9ucyAmJiBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyckhvb2tGdW5jdGlvbnNbal0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyckhvb2tGdW5jdGlvbnNbal0ocGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiY2FsbEhvb2tGdW5jdGlvbnMoKVwiXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgaGV4LWZvcm1hdGVkIGNvbG9yIHZhbHVlIGludG8gcmdiYSgpLWZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgaGV4ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIG9wdF9vcGFjaXR5ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5OiBmdW5jdGlvbiAoaGV4LCBvcHRfb3BhY2l0eSwgb3B0X2FycmF5KSB7XG5cbiAgICAgIHZhciBiaWdpbnQsIHIsIGcsIGIsIGE7XG5cbiAgICAgIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgIG9wdF9vcGFjaXR5LnZhbHVlID0gcGFyc2VJbnQob3B0X29wYWNpdHkudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgdHlwZW9mIG9wdF9vcGFjaXR5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdF9vcGFjaXR5ID09PSAnb2JqZWN0JyAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gb3B0X29wYWNpdHkudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICBiID0gYmlnaW50ICYgMjU1O1xuICAgICAgYSA9IG9wdF9vcGFjaXR5ID8gKG9wdF9vcGFjaXR5IC8gMTAwKSA6IDE7XG4gICAgICBpZihvcHRfYXJyYXkpe1xuICAgICAgICByZXR1cm4gW3IsZyxiLGFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgYSBkZWZpbmVkIHN0eWxlLCB0byBhIHNpbXBsZXIgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSByZWR1Y2VkIHN0eWxlIGlzIHRoZSBmaXJzdCBzdHlsZSBvZiB0aGUgZGVmaW5lZCBzdHlsZXNldCxcbiAgICAgKiB3aXRoIGEgMXB4IHRoaWNrIHN0cm9rZSBhbmQgYSBjaXJjbGUgd2l0aCBhIDVweCByYWRpdXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYWRkaXRpb25hbCBnZW9tZXRyaWVzIHdpdGggYSBtYWluLWdlb21ldHJ5LFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGRlZmluZSBhIHdob2xlIG5ldyBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ8c3RyaW5nfSAgICAgICAgICAgc3R5bGVJZCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG9sLnN0eWxlLlN0eWxlPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVkdWNlU3R5bGU6IGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICB2YXIgc3R5bGUsXG4gICAgICAgICAgcmVkdWNlZFN0eWxlLFxuICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2VTdHlsZTtcblxuICAgICAgaWYgKCFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXSB8fCAhYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IGM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKClbMF07XG5cbiAgICAgIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgICBzdHJva2VTdHlsZS5zZXRXaWR0aCgxKTtcblxuICAgICAgcmVkdWNlZFN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdGV4dDogc3R5bGUuZ2V0VGV4dCgpLFxuICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3JlZHVjZWRTdHlsZV07XG4gICAgfSwgLy8gZW5kIG9mIFwicmVkdWNlU3R5bGVcIlxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZ2l2ZW4gZ2VvbWV0cnkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2VvbWV0cnkgaXMgYSBgTGluZVN0cmluZ2AgdGhlIGZ1bmN0aW9uIHdpbGwgbWVhc3VyZSBpdHMgbGVuZ3RoLFxuICAgICAqIGlzIGl0IGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSB0aGUgYWNyZWFnZSxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYDBgLlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIGBvcHRfZm9yY2VMaW5lTWVhc3VyZWAgcGFyYW1ldGVyIGlzIGB0cnVlYFxuICAgICAqIGFuZCB0aGUgZ2VvbWV0cnkgaXMgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIGl0cyBwZXJpbWV0ZXIgaW5zdGVhZFxuICAgICAqIG9mIGl0cyBhY3JlYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLmdlb20uTGluZVN0cmluZ3xvbC5nZW9tLlBvbHlnb259ICAgZ2VvbWV0cnkgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICBvcHRfZm9yY2VMaW5lTWVhc3VyZSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PHN0cmluZz58bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtZWFzdXJlR2VvbWV0cnk6IGZ1bmN0aW9uIChnZW9tZXRyeSwgb3B0X2ZvcmNlTGluZU1lYXN1cmUsIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgc3BoZXJlLFxuICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIGNvb3JkMSxcbiAgICAgICAgICBjb29yZDIsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL3NwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nIHx8IChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbiAmJiBvcHRfZm9yY2VMaW5lTWVhc3VyZSkpIHtcblxuICAgICAgICBjb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgY29vcmQxID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgY29vcmQyID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaSArIDFdLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIHZhbHVlICs9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShjb29yZDEsIGNvb3JkMiwgNjM3ODEzNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAvL2dlb21ldHJ5ID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovKGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpO1xuICAgICAgICAvL2Nvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0TGluZWFyUmluZygwKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKG9sLnNwaGVyZS5nZXRBcmVhKGdlb21ldHJ5KSk7XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUgJiYgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YWx1ZSA9IE1hdGguUEkgKiBNYXRoLnNxcnQodmFsdWUpO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnJhd1ZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKCh2YWx1ZSAqIDEwMCkgLyAxMDApIC8gMTAwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBleHRlbnQgZm9yIGFuIGFycmF5IG9mIGdlb21ldHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG9sLmdlb20uc2ltcGxlR2VvbWV0cnk+fSAgYXJyR2VvbWV0cmllcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge29sLkV4dGVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzOiBmdW5jdGlvbiAoYXJyR2VvbWV0cmllcykge1xuICAgICAgdmFyIGV4dGVudFNvdXJjZTtcblxuICAgICAgaWYgKCFhcnJHZW9tZXRyaWVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR2VvbWV0cmllcyBtaXNzaW5nIGZvciBleHRlbnQgY2FsY3VsYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBleHRlbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgZXh0ZW50U291cmNlLmFkZEZlYXR1cmVzKGFyckdlb21ldHJpZXMpO1xuXG4gICAgICByZXR1cm4gZXh0ZW50U291cmNlLmdldEV4dGVudCgpIHx8IG9sLkV4dGVudChbMCwgMCwgMCwgMF0pO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzKClcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYXJyYXkgb2YgYGV4dGVudHNgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgIGV4dGVudHMgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50czogZnVuY3Rpb24gKGV4dGVudHMsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBpZiAoIWV4dGVudHMgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vZXh0ZW50ID0gb2wuZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgICAgIGZvciAoa2V5IGluIGV4dGVudHMpIHtcbiAgICAgICAgaWYgKGV4dGVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnQgPSBleHRlbnRzW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sLmV4dGVudC5leHRlbmQoZXh0ZW50LCBleHRlbnRzW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0VG9FeHRlbnQoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCA1LCAwLCAwLCAyKTtcblxuXG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50c1xuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBgZXh0ZW50YC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5FeHRlbnR9ICBleHRlbnQgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2FycmF5fSAgICAgIG9wdF9wYWRkaW5nICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9tYXhab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluUmVzb2x1dGlvbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudDogZnVuY3Rpb24gKGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uLCBvcHRfbWluWm9vbSwgb3B0X21heFpvb20sIG9wdF9taW5SZXNvbHV0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGZpdE9wdGlvbnM7XG5cbiAgICAgIGlmICghZXh0ZW50IHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBmaXRPcHRpb25zID0ge1xuICAgICAgICAncGFkZGluZyc6IG9wdF9wYWRkaW5nIHx8IFsyNSwgMjUsIDI1LCAyNV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRfbWluUmVzb2x1dGlvbiAmJiBvcHRfbWluUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5SZXNvbHV0aW9uID0gb3B0X21pblJlc29sdXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWluWm9vbSAmJiBvcHRfbWluWm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluWm9vbSA9IG9wdF9taW5ab29tO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21heFpvb20gJiYgb3B0X21heFpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1heFpvb20gPSBvcHRfbWF4Wm9vbTtcbiAgICAgIH1cblxuICAgICAgLy8gYW5pbWF0ZSB0aGUgXCJmaXR0aW5nXCIgd2hlbiBhIGR1cmF0aW9uIGlzIGdpdmVuIGFuZCBpdHMgZ3JlYXRlciB0aGFuIDBcbiAgICAgIGlmIChvcHRfYW5pbWF0aW9uRHVyYXRpb24gJiYgb3B0X2FuaW1hdGlvbkR1cmF0aW9uID4gMCkge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gbWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHNvdXJjZTogdmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSwge3BhZGRpbmc6IFsyNSwgMjUsIDI1LCAyNV19KTtcbiAgICAgICAgLy92aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCkpO1xuICAgICAgICAvL3ZpZXcuc2V0Wm9vbSh2aWV3LmdldFpvb20oKS0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnQoKVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcnVuIGFsbCBwbGFjZWhvbGRlciBmdW5jdGlvbnMgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIHN0cklucHV0ICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgICAgICAgICAgICAgIGZlYXR1cmUgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllciB8IHVuZGVmaW5lZH0gIG9wdF9sYXllciAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUFsbFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpcnN0IHR3byBwYXJhbWV0ZXJzIGFzIHRoZXkgd2lsbCBiZSB1c2VkIGJ5IGFsbCBwbGFjZWhvbGRlci1mdW5jdGlvbnNcbiAgICAgIC8vIC0+IGZvciBwZXJmb3JtYW5jZVxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7Rk5mdW5jdGlvbk5hbWV9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYHdpbmRvdy5mdW5jdGlvbk5hbWUoZmVhdHVyZSwgc3R5bGUpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICogU3R5bGUgd2lsbCBiZSB0YWtlbiBlaXRoZXIgZnJvbSB0aGUgZmVhdHVyZSwgb3IgdGhlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllcn0gIGxheWVyICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBsYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCAhbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHtGTihbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZnVuY3Rpb25OYW1lLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmdW5jdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHN0eWxlXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldFN0eWxlKCkgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYXllci5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2Z1bmN0aW9uTmFtZV0oZmVhdHVyZSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzLCBpbiBgc3RySW5wdXRgLCBmb3IgdmFyaWFibGVzIHNldCBieSB0aGUgZ2VvRWRpdG9yLlxuICAgICAqIFZhbGlkIHBsYWNlaG9sZGVycyBhcmU6IChba2V5XSByZXByZXNlbnRzIHRoZSBzdHJpbmduYW1lIG9mIHRoZSB2YXJpYWJsZXMga2V5KVxuICAgICAqICAgYCR7RUxba2V5XX1gICAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWTFtrZXldfWAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlLCBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgKiAgIGAke0VWW2tleV19YCAgID0+ICBWYWx1ZSBvZiB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWVltrZXldfWAgID0+ICBTYW1lIGFzIGAke0VWW2tleV19YFxuICAgICAqXG4gICAgICogSWYgbm8gYXBwcm9wcmlhdGUgdmFsdWUgY2FuIGJlIGZvdW5kIGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogaXQgd2lsbCBzaW1wbHkgYmUgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhFVj9bTFZdKShbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgZXZLZXksIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGhhcyBlZGl0b3JWYXJzXG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKSkge1xuICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBlZGl0b3JWYXIgd2l0aCBrZXkgPT0gZXZLZXlcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVkaXRvclZhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yVmFyc1tpXS5rZXkgPT09IGV2S2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0eXBlIGlzICdFVkwnIGRpc3BsYXkgbGFiZWwgb25seSBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRUwnIHx8ICh0eXBlID09PSAnRVZMJyAmJiBlZGl0b3JWYXJzW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7YXR0cn1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgZmVhdHVyZS5nZXQoYXR0cilgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgYXR0ciwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldChhdHRyKSB8fCAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoKVxuXG4gICAgb2JqZWN0VG9BcnJheTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmplY3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwgLy8gZW5kIG9mIG9iamVjdFRvQXJyYXkoKVxuXG4gICAgZ2V0VmVjdG9yTGF5ZXIoc291cmNlLCBzdHlsZSkge1xuICAgICAgICB2YXIgZm5TdHlsZTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3R5bGUgaXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm5TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBzdHlsZTogZm5TdHlsZVxuICAgICAgICB9KTtcbiAgICB9LC8vIGVuZCBvZiBcImdldFZlY3RvckxheWVyKClcIlxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHN1YmRvbWFpbiBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgaG9zdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgKn1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3ViZG9tYWluKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICByZWRyYXdNYXBWaWV3OiBmdW5jdGlvbiAobWFwQ29udHJvbGxlcikge1xuICAgICAgdmFyIG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICBtYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgbWFwQ29udHJvbGxlci5sZWZ0U2xpZGVFbGVtZW50cy5wdXNoKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgICAgaWYgKG1hcERhdGEuc2NhbGVsaW5lKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSA9IG5ldyBvbC5jb250cm9sLlNjYWxlTGluZSh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuXG4gICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IFpvb21sZXZlbCh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8ICcnO1xuICAgIH0sXG4gICAgc3RvcmVWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7IC8vIG9ubHkgc3RyaW5nc1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIHV0aWxzID0gdGhpcy5jNGcubWFwcy51dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==