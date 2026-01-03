<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @author  	con4gis contributors (see "authors.md")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */


$strName = 'tl_c4g_editor_configuration';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Name", "Geben Sie einen Namen für die Editorkonfiguration an.");
$GLOBALS['TL_LANG'][$strName]['types'] = array("Elemente", "Wählen Sie die Lokationsstile aus, mit welchen im Editor gezeichnet werden soll.");
$GLOBALS['TL_LANG'][$strName]['editor_vars'] = ['Zusatzfelder', 'Zusatzfelder stehen für POIs, Strecken und Flächen zur Verfügung und können über ${Schlüssel} im Popup, Label und Tooltip in die Karte eingefügt werden.'];
$GLOBALS['TL_LANG'][$strName]['editor_show_items'] = ['Alle Karteneinträge im Editor anzeigen', 'Zeigt im Editor nicht nur den zu bearbeitenden Karteneintrag an, sondern auch alle Anderen.'];
$GLOBALS['TL_LANG'][$strName]['editor_helpurl'] = ['Hilfe-Link', 'Wenn hier eine URL eingetragen wird, so erscheint ein "Hilfe" Link im Editor, der zu der angegebenen URL führt.'];
//$GLOBALS['TL_LANG'][$strName]['is_backend_editor_default'] = ['Als Standardprofil für Backend-Geoeditor verwenden', 'Setzen Sie diese Checkbox, um das Kartenprofil als Standardwert im Backend-Geoeditor zu verwenden (Kartenstrukturelement GeoJson).'];
$GLOBALS['TL_LANG'][$strName]['editor_project_group'] = ['Projektgruppe', 'Wählen Sie hier die Gruppe aus, die als Projektgruppe verwendet werden soll. Über diese Gruppe werden die Berechtigungen für die Editorprojekte verwaltet.'];

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "Allgemeine Information";

/** OPERATIONS **/
$singular = 'Editorkonfiguration';
$GLOBALS['TL_LANG'][$strName]['new'] = array("$singular hinzufügen","$singular hinzufügen");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("$singular bearbeiten","Bearbeiten der $singular ID %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("$singular kopieren","Kopieren der $singular ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("$singular löschen","Löschen der $singular ID %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("$singular anzeigen","Anzeigen der $singular ID %s");

/** OPTIONS **/
$GLOBALS['TL_LANG'][$strName]['references']['frontend'] = 'Frontend';
$GLOBALS['TL_LANG'][$strName]['references']['backend'] = 'Backend';

$GLOBALS['TL_LANG'][$strName]['references']['point'] = 'POI';
$GLOBALS['TL_LANG'][$strName]['references']['linestring'] = 'Strecke';
$GLOBALS['TL_LANG'][$strName]['references']['polygon'] = 'Fläche';
$GLOBALS['TL_LANG'][$strName]['references']['circle'] = 'Kreis';

/** Types **/
$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['type'] = "Lokationstyp";
$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['caption'] = "Name";
$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['locstyle'] = "Lokationsstil";

/** ADDVARS **/

$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['name'] = "Name";
$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['key'] = "Schlüssel";
