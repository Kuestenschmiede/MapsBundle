<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */


$strName = 'tl_c4g_editor_configuration';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Name", "Geben Sie einen Namen für die Editorkonfiguration an.");
$GLOBALS['TL_LANG'][$strName]['type'] = array("Art des Editors", "Wählen Sie aus, ob Sie den Backend- oder den Frontend-Editor konfigurieren wollen.");
$GLOBALS['TL_LANG'][$strName]['categories'] = array("Kategorien", "Wählen Sie die Kategorien aus, die im Editor zur Verfügung stehen sollen..");
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
$GLOBALS['TL_LANG'][$strName]['references']['freehand'] = 'Freihand zeichnen';
$GLOBALS['TL_LANG'][$strName]['references']['circle'] = 'Kreis';
