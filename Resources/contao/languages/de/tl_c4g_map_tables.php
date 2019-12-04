<?php
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

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['name']           			= ['Name', 'Bitte geben Sie den Namen der Datenanbindung an.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableSource']    			= ['Quelltabelle', 'Bitte geben Sie die Quelltabelle an, aus der die Daten geladen werden sollen.'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptable']    			    = ['Elterntabellen', 'Bitte geben Sie die Elterntabellen an, anhand derer die geladenen Daten eingeschränkt werden sollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableOptions']    		= ['Felder der Elterntabellen im Backend', 'Bitte wählen Sie die Felder der Elterntabellen aus, die im Backend (Kartenstrukturelement) angezeigt werden sollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableBlob']    			= ['Blob', 'Lesen Sie den Sourcecode.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableField']    			= ['Verweis auf Elterntabellen', 'Bitte wählen Sie das Feld der Quelltabelle aus, das auf die Elterntabellen verweist (meist pid).'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableCompareField']      = ['Verweis auf Quelltabelle', 'Bitte wählen Sie die Felder der Elterntabellen aus, die auf die Quelltabelle verweisen (meist ID).'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geox']                    = ['Geo X-Koordinate', 'Geben Sie hier das Feld ein, das die X-Koordinate (Breitengrad, WGS-84) enthält.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoy']                    = ['Geo Y-Koordinate', 'Geben Sie hier das Feld ein, das die Y-Koordinate (Längengrad, WGS-84) enthält.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geolocation']             = ['Geolokation', 'Geben Sie hier das Feld ein, das das Koordinatenpaar, WKT oder WKB enthält'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['label']                   = ['Label', 'Geben Sie hier das Feld ein, das das Label enthält'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['locstyle']                = ['Lokationsstil', 'Geben Sie hier das Feld ein, das die ID des Lokationstils enthält'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch']             = ['Popup-Mechanismus', 'Wählen Sie den Popup-Mechanismus aus, den Sie zur Befüllung des Popups in der Karte verwenden wollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popup']                   = ['Popup (Expertenkonfiguration)', 'Geben Sie Platzhalter für einzelne Felder an, die Sie im Popup darstellen wollen. Möglichkeiten und Funktionen für dieses Feld sind <a href="https://docs.con4gis.org/kartenstrukturen-quelltabellen" style="color: red" target="_blank">hier</a> beschrieben.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSelection']          = ['Popup (Feldauswahl)', 'Wählen Sie Felder aus, aus denen das Popup zusammengesetzt werden soll (die einzelnen Feldinhalte werden mit einem Zeilenumbruch voneinander getrennt).'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tooltip']                 = ['Tooltip', 'Geben Sie hier das Feld ein, das den Tooltip enthält'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['cutTextAtLength']                 = ['Texte ab bestimmter Länge kürzen', 'Geben Sie hier eine Anzahl Zeichen an, bei der der Rest des Textes durch ein "..." ersetzt werden soll. 0 bedeutet keine Kürzung. Beachten Sie, dass ggf. mehr Zeichen als angegeben dargestellt werden, da die Ersetzung immer nur hinter vollständigen Worten durchgeführt wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['openLinksInTab']                 = ['Links in neuem Tab öffnen', 'Wenn Sie diese Checkbox setzen, werden alle generierten Hyperlinks in einem neuen Browser-Tab geöffnet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataType']                 = ['Datentyp', 'Wählen Sie den vorliegenden Datentyp'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projName']                 = ['Projektion', 'Geben Sie den Namen der Projection an'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projCode']                 = ['Projektions-Code', 'Geben Sie die Eigentschaften der Projektion im Proj4js-Format an'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_default'] = 'Feldauswahl';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_expert'] = 'Expertenkonfiguration (flexibler, mehr Funktionen)';

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataTypeCoords'] = 'Koordinatenpaar';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataTypeWKT'] = 'Well-Kown-Text (WKT)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataTypeWKB'] = 'Well-Kown-Binary (WKB)';

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][0] = 'Koordinatenpaar';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][1] = 'Well-Kown-Text (WKT)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][2] = 'Well-Kown-Binary (WKB)';
/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['new']        = ['Neue Datenanbindung', 'Eine neue Datenanbindung erstellen'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['edit']       = ['Datenanbindung bearbeiten', 'Datenanbindung ID %s bearbeiten'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['delete']     = ['Datenanbindung löschen', 'Datenanbindung ID %s löschen'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['defaultLegend']		= 'Allgemeine Daten';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['parentLegend']		= 'Elterntabellen (optional)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoLegend']		    = 'Lokation (setzen Sie entweder X- und Y-Koordinate oder die Geolokation)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projLegend']		    = 'Eigene Projektion';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableInformation']	= 'Zuordnung der Tabellenspalten (optional)';
