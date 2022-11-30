<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_module']['c4g_map_id'] = array('Kartenstruktur', 'Wählen Sie die anzuzeigende Kartenstruktur aus.');
// $GLOBALS['TL_LANG']['tl_module']['c4g_map_mapsize'] = array('Größe der Karte', 'Geben Sie hier die Größe der Karte im Frontend ein, wenn Sie eine vom definierten Standardwert abweichende Größe definieren möchten.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_width'] = array('Breite der Karte', 'Geben Sie hier die Breite der Karte im Frontend ein, wenn Sie eine vom definierten Standardwert abweichende Größe definieren möchten.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_height'] = array('Höhe der Karte', 'Geben Sie hier die Höhe der Karte im Frontend ein, wenn Sie eine vom definierten Standardwert abweichende Größe definieren möchten.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoom'] = array('Zoom-Level', 'Geben Sie hier den Zoom-Level der Karte ein, wenn Sie einen vom definierten Standardwert abweichenden Zoom-Level definieren möchten');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_default_mapservice'] = array('Standardbasiskarte', 'Wählen Sie hier eine der im Kartenprofil der verwendeten Karte zugewiesenen Basiskarten aus, die beim Öffnen der Karte verwendet werden soll. Ist keine Basiskarte ausgewählt, dann wird die Standardbasiskarte aus dem Kartenprofil verwendet.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_site_id'] = array('Kartenseite', 'Wählen Sie die Kartenseite aus, auf die die Suche weiterleiten soll.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoomlevel'] = array('Zoomstufe', 'Geben Sie den Zoomlevel an, der bei Weiterleitung auf die Karte eingestellt sein soll.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_placeholder'] = array('Platzhalter für Suchfeld', 'Geben Sie hier einen Platzhalter für das Suchfeld an. Dieser wird angezeigt, solange keine Eingabe getätigt wurde.');
$GLOBALS['TL_LANG']['tl_module']['c4g_element_type'] = array('Art des Elements', 'Wählen Sie das Element aus, welches Sie außerhalb der Karte darstellen möchten.');

$GLOBALS['TL_LANG']['tl_module']['editMaps'] = ['Strukturelemente bearbeiten'];

$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['starboard'] = "Starboard";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['baselayer'] = "Baselayerswitcher";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['permalink'] = "Permalink";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['search'] = "Suche";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['results'] = "Suchergebnisse";
//$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['measuretools'] = "Messwerkzeuge";
//$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['legend'] = "Legende";
//$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['overviewmap'] = "Übersichtskarte";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['filter'] = "Kartenfilter";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['popup'] = "Popup";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['routing'] = "Router";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['routingResults'] = "Routing-Ergebnisse";

/**
 * Legend
 */
$GLOBALS['TL_LANG']['tl_module']['c4g_map_legend'] = 'Kartenkonfiguration';
$GLOBALS['TL_LANG']['tl_module']['c4g_search_legend'] = 'Angaben zur Suche';
$GLOBALS['TL_LANG']['tl_module']['c4g_external_legend'] = 'Kartenkomponenten ausßerhalb der Karte darstellen';
