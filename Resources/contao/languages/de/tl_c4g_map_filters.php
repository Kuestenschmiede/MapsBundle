<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version    7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */


$strName = "tl_c4g_map_filters";

/**
 * Fields
 */
$GLOBALS['TL_LANG'][$strName]['name'] = ["Name"];
$GLOBALS['TL_LANG'][$strName]['filters'] = ["Filter"];
$GLOBALS['TL_LANG'][$strName]['translation'] = ["Übersetzung"];
$GLOBALS['TL_LANG'][$strName]['identifier'] = ["Bezeichner"];
$GLOBALS['TL_LANG'][$strName]['value'] = ["Wert"];


/**
 * Legends
 */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = "Filtereinstellungen";

/**
 * Operations
 */
$GLOBALS['TL_LANG'][$strName]['new']        = array('Neuer Filter', 'Einen neuen Filter erstellen');
$GLOBALS['TL_LANG'][$strName]['edit']       = array('Filter bearbeiten', 'Filter ID %s bearbeiten');
$GLOBALS['TL_LANG'][$strName]['copy']       = array('Filter duplizieren', 'Filter ID %s duplizieren');
$GLOBALS['TL_LANG'][$strName]['delete']     = array('Filter löschen', 'Filter ID %s löschen');
$GLOBALS['TL_LANG'][$strName]['show']       = array('Details', 'Die Details des Filters ID %s anzeigen');

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_filters']['infotext'] = 'Mit den Kartenfiltern können Sie außerhalb der Karte mit Hilfe der Filterkomponente (siehe Experteneinstellungen im Kartenprofil) zusätzliche Filter anbieten - also Daten filtern die ein bestimmtes Key/value-Paar haben. '.
    'Dies geht bspw. mit Abfragen aus der OpenStreetMap oder Kartenstrukturelementen im GeoJson-Format. Desweiteren nutzt der con4gis-Baustein Data diese Funktion. '.
    'Mehr auf <a href="https://docs.con4gis.org/kartenfilter_con4gis-Maps" title="con4gis Docs Kartenfilter" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';