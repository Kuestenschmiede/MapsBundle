<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_content']['c4g_map_id'] = array('Karte', 'Wählen Sie die anzuzeigende Karte aus.');
// $GLOBALS['TL_LANG']['tl_content']['c4g_map_mapsize'] = array('Größe der Karte', 'Geben Sie hier die Größe der Karte im Frontend ein, wenn Sie eine vom definierten Standardwert abweichende Größe definieren möchten.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_width'] = array('Breite der Karte', 'Geben Sie hier die Breite der Karte im Frontend ein, wenn Sie eine vom definierten Standardwert abweichende Größe definieren möchten.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_height'] = array('Höhe der Karte', 'Geben Sie hier die Höhe der Karte im Frontend ein, wenn Sie eine vom definierten Standardwert abweichende Größe definieren möchten.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_zoom'] = array('Zoom-Level', 'Geben Sie hier den Zoom-Level der Karte ein, wenn Sie einen vom definierten Standardwert abweichenden Zoom-Level definieren möchten');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_default_mapservice'] = array('Standardbasiskarte', 'Wählen Sie hier eine der im Kartenprofil der verwendeten Karte zugewiesenen Basiskarten aus, die beim Öffnen der Karte verwendet werden soll. Ist keine Basiskarte ausgewählt, dann wird die Standardbasiskarte aus dem Kartenprofil verwendet.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_geox']   = array('Geo X-Koordinate', 'Geben Sie hier die X-Koordinate (Breitengrad, WGS-84) der Lokation ein.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_geoy']   = array('Geo Y-Koordinate', 'Geben Sie hier die Y-Koordinate (Längengrad, WGS-84) der Lokation ein.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_tooltip']  = array('Tooltip', 'Geben Sie hier einen Tooltip ein, der auf der Karte beim überfahren mit dem Mauszeiger dargestellt wird.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_label']  = array('Label', 'Geben Sie hier ein Label ein, das auf der Karte bei der Lokation mit angezeigt wird.');
$GLOBALS['TL_LANG']['tl_content']['c4g_locstyle']   = array('Lokationsstil', 'Über den Lokationsstil, der beim Kartenprofil definiert wird, legen Sie das Aussehen der Lokation innerhalb einer übergeordneten Karte fest. Ist kein Lokationsstil definiert, dann wird der beim Karteneintrag definierte Lokationsstil verwendet.');

//xlabel buttons
$GLOBALS['TL_LANG']['tl_content']['editLocstyles'] = 'Lokationsstile bearbeiten';
$GLOBALS['TL_LANG']['tl_content']['editBaselayers'] = 'Basiskarten bearbeiten';
$GLOBALS['TL_LANG']['tl_content']['editMaps'] = 'Strukturelemente bearbeiten';

/**
 * Legend
 */
$GLOBALS['TL_LANG']['tl_content']['c4g_maps_legend'] = 'Ort des Artikels (con4gis-Maps)';
$GLOBALS['TL_LANG']['tl_content']['c4g_map_legend'] = 'Kartenkonfiguration';
