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

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['new']     = array('Neues Kartenlayout', 'Ein neues Kartenlayout erstellen');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['edit']    = array('Kartenlayout bearbeiten', 'Kartenlayout ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['copy']    = array('Kartenlayout duplizieren', 'Kartenlayout ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['delete']  = array('Kartenlayout löschen', 'Kartenlayout ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['show']    = array('Kartenlayout anzeigen', 'Kartenlayout ID %s anzeigen');

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['name']        = array('Name', 'Bitte geben Sie den Namen des Kartenlayouts an.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['useglobal']   = array('Einstellungen global setzen', 'Einige Einstellungen wie Farben und Formen werden im CSS als Variable gesetzt und können auch global, also außerhalb der Karte, zur Verfügung gestellt werden.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonradius']  = array('Radius der Button', 'Geben Sie den Radius für die Button in Prozent ein. 0 = eckig');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonsize'] = array('Größe der Button', 'Geben Sie die Größe der Button (Bedienelemente links) in Pixel an. Standard ist 36 px.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['button_fontsize'] = array('Größe der Buttonschrift (Icon)', 'Geben Sie die Größe der Buttonschrift an. Dadurch verändert sich die Größe des Icons. Standard ist 18 px.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['maincolor']  = array('Hauptfarbe und Deckkraft', 'Zum Beispiel für Button und Dialoge. Die Deckkraft in % angeben. Überschreibt die voreingestellte con4gis CSS-Farbeinstellung.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontcolor']  = array('Schriftfarbe und Deckkraft', 'Die Deckkraft in % angeben. Überschreibt die voreingestellten con4gis CSS-Einstellungen.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaincolor']  = array('Popup Hintergrundfarbe und Deckkraft', 'Gilt nur für klassisches Popup. Die Deckkraft in % angeben. Überschreibt die voreingestellten con4gis CSS-Einstellungen. Wenn dieser Wert leer bleibt, wird automatisch die Hauptfarbe auch für das Popup gesetzt.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupFontcolor']  = array('Popup Schriftfarbe und Deckkraft', 'Gilt nur für klassisches Popup. Die Deckkraft in % angeben. Überschreibt die voreingestellten con4gis CSS-Einstellungen. Wenn dieser Wert leer bleibt, wird automatisch die Schriftfarbe auch für das Popup gesetzt.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaxWidth'] = array('Maximale Popup-Breite', 'Gilt nur für Standard-Popup. Die maximale Breite des Popups (wenn als "Sideboard" am rechten Rand dargestellt). Standard: 42%.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowcolor']  = array('Zweitfarbe und Deckkraft', 'Zum Beispiel für Hover-Effekte, Rahmen oder Formularelemente. Die Deckkraft in % angeben. Überschreibt die voreingestellten con4gis CSS-Einstellungen.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons']   = array('Icons-CSS', 'Wählen Sie einen Stil für die Icons aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_icons'] = array('Eigene Icon-CSS', 'Wählen Sie diese Option, wenn Sie eine eigene CSS-Datei verwenden wollen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_icons']  = array('Eigene Icons', 'Laden Sie Ihre eigene CSS-Datei hoch (Beispiele unter files/con4gis).');

// Palettes
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['theme_legend']   = 'Layouteinstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttons_legend'] = 'Größe und Form der Bedienelemente (Button) der Karte';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['colors_legend']  = 'Farben für Karten-Button, Dialoge und Schriften';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['effects_legend'] = 'Effekte';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons_legend']   = 'Icons';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['expert_legend']  = 'Experteneinstellungen';


/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['infotext'] = 'Das Kartenlayout gibt Euch die Möglichkeiten die Farben der Karte und Formen der Bedienelemente auf einfache Art und Weise zu überschreiben. '.
    'Mehr auf <a href="https://docs.con4gis.org/kartenlayouts-con4gis-maps" title="con4gis Docs Kartenlayout" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';