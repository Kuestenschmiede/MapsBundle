<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

$GLOBALS['TL_LANG']['tl_c4g_settings']['disabledC4gMapObjects'] = ["Deaktivierte Quellen", "Wählen Sie die Quellen aus, die Sie im Backend deaktivieren möchten."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['c4g_maps_legend'] = "Karteneinstellungen (con4gis/maps)";
$GLOBALS['TL_LANG']['tl_c4g_settings']['caching'] = ["Caching aktivieren", "Caching für con4gis-Dienste aktivieren. Die Sinnhaftigkeit des Cachings ist von Fall zu Fall unterschiedlich und bedarf eigener Tests."];

$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultprofile'] = ["Standardprofil", "Wählen Sie ein Kartenprofil aus, welches als Standardprofil genutzt werden soll. Das Profil wird dann geladen, wenn kein anderes Profil gesetzt wurde. Zum Beispiel für den Geopicker."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['beGeopickerProfile'] = ['Backend-Geopicker Profil', 'Den Geopicker benötigen Sie zum Eintrag der POIs um die Koordinaten per Klick zu ermitteln. Sollten Sie in Ihrem Anwendungsfall oft Standorte setzen, dann sollte Sie sich für das Geopicker Profil etwas Zeit nehmen. Bspw. um die Kartensuche und den Vollbildmodus zu integrieren.'];

$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultData'] = ["Beispieldatensätze generieren", "Wählen Sie, ob Beispieldatensätze generiert werden sollen."];

$GLOBALS['TL_LANG']['tl_c4g_settings']['editProfiles'] = ['Kartenprofile bearbeiten'];

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