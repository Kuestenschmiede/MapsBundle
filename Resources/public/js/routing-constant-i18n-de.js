/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
'use strict';

/**
 *  constants
 */
export var routingConstantsGerman = {
  CTRL_ROUTER: 'Router öffnen/schließen',
  ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_OVER_LABEL: 'Zwischenziel',
  ROUTER_TO_LABEL: 'Ziel',
  ROUTER_CLEAR_TITLE: 'Löschen',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Zwischenziel',

  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Umkreissuche',

  ROUTER_SWITCH:'Wechsel von Start und Ziel',
  ROUTER_OVER:'Zwischenziel hinzufügen',
  ROUTER_PRINT:'Routenbeschreibung drucken',
  ROUTER_DOWNLOAD:'Route als GPX herunterladen',

  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
  ROUTER_VIEW_LABEL_TIME: 'Zeit:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profil:',

  ROUTER_VIEW_ALERT_ERROR: 'Fehler',
  ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
  ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',
  ROUTER_ERROR_POLYLINE: 'Route konnte nicht berechnet werden.',

  POPUP_ROUTE_FROM: 'Route von hier',
  POPUP_ROUTE_TO: 'Route hierhin',

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

  'ROUTER_5.X_MOD_0'  : 'Uturn',
  'ROUTER_5.X_MOD_1'  : 'Scharf rechts',
  'ROUTER_5.X_MOD_2'  : 'Rechts',
  'ROUTER_5.X_MOD_3'  : 'Leicht rechts',
  'ROUTER_5.X_MOD_4'  : 'Geradeaus',
  'ROUTER_5.X_MOD_5'  : 'Leicht links',
  'ROUTER_5.X_MOD_6'  : 'Links',
  'ROUTER_5.X_MOD_7'  : 'Scharf links',
  'ROUTER_5.X_MOD_8'  : 'in der Nähe',

  ROUTER_FROM: 'Start',
  ROUTER_TO: 'Ziel',
  ROUTER_CENTER: 'Zentrum',
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
  ROUTER_SETTINGS: 'Routeneinstellungen',

  //new Router
  AREA_NAME:            'Umkreissuche',
  AREA_PROFILE:         'Profil',
  AREA_FEATURECOUNT:    'Gefundene Elemente',
  ROUTE_DETOUR:         'Umweg',
  AREA_DETOUR:          'Radius',
  INSTRUCTION_HEADLINE: 'Routenbeschreibung',
  FEATURES_HEADLINE:    'Lokationen',
  ROUTE_POSITION:       'Position ermitteln',
  START_ROUTE:          'Suche starten',
  REMOVE_ADDRESS:       'Adresse löschen',

  CAR:                  'Auto',
  BIKE:                 'Fahrrad',
  ROADBIKE:             'Rennrad',
  MOUNTAINBIKE:         'Mountainbike',
  ELECTRICBIKE:         'E-Bike',
  TRUCK:                'Lastkraftwagen',
  WALK:                 'FußgängerIn',
  WANDER:               'WandererIn',
  WHEEL:                'Rollstuhl',
  SCOOT:                'Roller',
  MOTORBIKE:            'Motorrad',

  CLOSE: 'Schließen',

  NONE: '' // last line
}; // end of "css constants" ---
