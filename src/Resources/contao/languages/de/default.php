<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Miscellaneous
 */
$GLOBALS['TL_LANG']['CTE']['c4g_maps'] 					= array('Karte (con4gis/maps)', 'Anbindung einer Karte aus der Kartenstruktur.');

$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events']['name'] 		= 'Events';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events']['parent'] 		= 'Kalender';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events_with_tags']['name'] = 'Events mit Tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events_with_tags']['parent'] = 'Kalender mit Tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_content']['name'] 		= 'Inhaltselemente';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_content']['parent'] 		= 'Artikel';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_content_with_tags']['name'] = 'Inhaltselemente mit Tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_content_with_tags']['parent'] = 'Artikel mit Tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_member']['name']                 = 'Mitglieder';

$GLOBALS['TL_LANG']['c4g_maps']['geox_invalid'] 		= 'Wert zwischen -180.0 und 180.0 erwartet!';
$GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid'] 		= 'Wert zwischen -90.0 und 90.0 erwartet!';

$GLOBALS['TL_LANG']['c4g_maps']['geopicker'] 			= 'Geo-Koordinaten festlegen';
$GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] 	        = 'Geometrien visuell definieren';
$GLOBALS['TL_LANG']['c4g_maps']['transfer'] 			= 'Übernehmen';
$GLOBALS['TL_LANG']['c4g_maps']['search'] 				= 'Adresse suchen';

$GLOBALS['TL_LANG']['c4g_maps']['update_db'] 			= 'Datenbank aktualisieren';
$GLOBALS['TL_LANG']['c4g_maps']['update_db_success'] 	= 'Datenbank erfolgreich aktualisiert!';
$GLOBALS['TL_LANG']['c4g_maps']['db_status'] 			= 'Status der con4gis-Maps Datenbank';
$GLOBALS['TL_LANG']['c4g_maps']['db_uptodate'] 			= 'Datenbank ist auf dem aktuellsten Stand!';
$GLOBALS['TL_LANG']['c4g_maps']['db_update_necessary'] 	= 'Datenbank muss für con4gis-Maps Version >= 2.0 aktualisiert werden!';

/**
 * Labels
 */
$GLOBALS['TL_LANG']['c4g_maps']['labels']['baseLayer'] 				= 'Basiskarte';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['overlays'] 				= 'Ebenen';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['search_address'] 		= 'Adresse suchen';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['no_geo_results'] 		= 'Keine Ergebnisse für diese Adresse gefunden';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['error_geocoding'] 		= '!! Geokodierung fehlgeschlagen !!';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['geocoding_progress'] 	= 'Suche nach Adressen läuft...';

$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActSelect'] 	= 'Aktion: Selektieren';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActMove'] 		= 'Aktion: Verschieben';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActChange'] 	= 'Aktion: Verändern';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActAdd'] 		= 'Aktion: Hinzufügen';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObjectSelected'] 	= '{0} selektiert';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObjectsSelected'] 	= '{0} Objekte selektiert';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObject'] 		= 'Objekt: {0}';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleOk'] 		= 'Ok (Enter)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleCancel'] 	= 'Abbruch (ESC)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleUndo'] 	= 'Rückgängig (STRG+Z)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleRedo'] 	= 'Widerrufen (STRG+Y)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleSelect'] 	= 'Auswahlmodus';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleModify'] 	= 'Ändern';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleDelete'] 	= 'Löschen';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gArrowsBack'] 	= 'Pfeile in beide Richtungen';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gHelp'] 		= 'Hilfe';

$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtN'] 				= "Norden";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtE'] 				= "Ost";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtS'] 				= "Süden";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtW'] 				= "Westen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtNE'] 			= "Nordost";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSE'] 			= "Südost";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSW'] 			= "Südwest";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtNW'] 			= "Nordwest";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_0'] 	= "Unbekannte Anweisung[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_1'] 	= "Geradeaus weiterfahren[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_2'] 	= "Leicht rechts abbiegen[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_3'] 	= "Rechts abbiegen[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_4'] 	= "Scharf rechts abbiegen[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_5'] 	= "Wenden[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_6'] 	= "Scharf links abbiegen[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_7'] 	= "Links abbiegen[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_8'] 	= "Leicht links abbiegen[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_10'] 	= "Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-1'] = "In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-2'] = "In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-3'] = "In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-4'] = "In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-5'] = "In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-6'] = "In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-7'] = "In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-8'] = "In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-9'] = "In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-x'] = "In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_15'] 	= "Sie haben Ihr Ziel erreicht";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtFROM'] 			= "Start";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtTO'] 			= "Ziel";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtFIND_ROUTE'] 	= "Route finden";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtLOC_ROUTE_TO'] 	= "Route hierhin";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtROUTEDESC'] 		= "Routenbeschreibung";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtROUTENAME'] 		= "Route";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDISTANCE'] 		= "Distanz";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtTIME'] 			= "Zeit";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtREV_GEOCODING'] 	= "Ermittle Adresse...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_REV_GEOCODING'] 	= "Fehler beim Ermitteln der Adresse";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSEARCHING'] 		= "Suche Adresse...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_SEARCHING'] 		= "Fehler beim Suchen der Adresse";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtCALC_ROUTE'] 	= "Berechne Route...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_CALC_ROUTE'] 		= "Fehler beim Berechnen der Route";

$GLOBALS['TL_LANG']['tl_maintenance_jobs']['con4gis_layer'] = array('con4gis Layer-Cache leeren', 'Löscht die temporären con4gis Layer-API-Dateien.');
$GLOBALS['TL_LANG']['tl_maintenance_jobs']['con4gis_baselayer'] = array('con4gis Basiskarten-Cache leeren', 'Löscht die temporären con4gis Basiskarten-API-Dateien.');
$GLOBALS['TL_LANG']['tl_maintenance_jobs']['con4gis_locationstyle'] = array('con4gis Lokationsstil-Cache leeren', 'Löscht die temporären con4gis Lokationsstil-API-Dateien.');
$GLOBALS['TL_LANG']['tl_maintenance_jobs']['con4gis_popup'] = array('con4gis Popup-Cache leeren', 'Löscht die temporären con4gis Popup-API-Dateien.');

$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['0'] = 'Auto';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['1'] = 'Lastwagen';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['2'] = 'Fahrrad';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['3'] = 'Rennrad';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['4'] = 'Fahrrad (sicher)';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['5'] = 'Moutainbike';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['6'] = 'Trekkingrad';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['7'] = 'Elekrofahrrad';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['8'] = 'FußgängerIn';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['9'] = 'WandererIn';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['10']= 'Rollstuhl';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['11']= 'Transporter';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['12']= 'Roller';
$GLOBALS['TL_LANG']['c4g_maps']['router_profiles']['13']= 'Motorrad';
