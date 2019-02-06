<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

$GLOBALS['TL_LANG']['tl_c4g_settings']['disabledC4gMapObjects'] = ["Deaktivierte Quellen", "Wählen Sie die Quellen aus, die Sie im Backend deaktivieren möchten."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['c4g_maps_legend'] = "Karteneinstellungen";
$GLOBALS['TL_LANG']['tl_c4g_settings']['caching'] = ["Caching aktivieren", "Caching für con4gis-Dienste aktivieren. Die Sinnhaftigkeit des Cachings ist von Fall zu Fall unterschiedlich und bedarf eigener Tests."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultprofile'] = ["Standardprofil", "Wählen Sie ein Profil aus, welches als Standardprofil genutzt werden soll."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultData'] = ["Beispieldatensätze generieren", "Wählen Sie, ob Beispieldatensätze generiert werden sollen."];

/** References */
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['baseLayerService'] ='Basiskarten';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['layerService'] ='Kartenstrukturen';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['layerContentService'] ='Kartendaten';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['editorService'] ='Editor';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['locationStyleService'] ='Lokationsstile';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['infoWindowService'] ='Popupdaten';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['nominatimService'] ='Suche';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['reverseNominatimService'] ='Rückwärtssuche';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['defaultData']['tables'] ='Datenverbindungen';