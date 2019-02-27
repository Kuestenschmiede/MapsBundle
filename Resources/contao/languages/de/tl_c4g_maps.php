<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['name'] = array('Name', 'Name der Karte bzw. der Lokation');
$GLOBALS['TL_LANG']['tl_c4g_maps']['profile'] = array('Kartenprofil', 'Wählen Sie hier bitte ein Kartenprofil, das die Darstellung bestimmt. Kartenprofile werden über den Menüpunkt "Kartenprofile" unter "Layout" gepfegt. Falls Sie kein eigenes Kartenprofil wählen, dann wird standardmäßig mit OpenStreetMaps Mapnik Karten gearbeitet.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['profile_mobile'] = array('Kartenprofil mobil', 'Optional: Kartenprofil, das für mobile Endgeräte verwendet wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['published'] = array('Veröffentlicht', 'Legt fest, ob die Karte bzw. die Lokation veröffentlicht wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['is_map'] = array('Als Karte verwenden', 'Soll dieses Element eine im Frontend darstellbare Karte repräsentieren?');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['mapsize'] = array('Größe der Karte (Breite, Höhe)', 'Geben Sie hier die Größe der Karte im Frontend ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['width'] = array('Breite der Karte', 'Geben Sie hier die Breite der Karte im Frontend ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['height'] = array('Höhe der Karte', 'Geben Sie hier die Höhe der Karte im Frontend ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['margin'] = array('Abstand der Karte', 'Geben Sie hier den Abstand der Karte zu umliegenden Elementen ein.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width'] = array('Rechten Kartenrand am Browser ausrichten', 'Wählen Sie diese Option, um den rechten Kartenrand am Browserfenster auszurichten.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_gap'] = array('Abstand zum rechten Rand (Pixel)', 'Geben Sie den Abstand des rechten Randes des Browserfensters zum rechten Rand der Karte in Pixeln ein.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_min'] = array('Mindestbreite (Pixel)', 'Geben Sie die Mindestbreite der Karte ein, die nicht unterschritten werden darf.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_max'] = array('Maximale Breite (Pixel)', 'Geben Sie die maximale Breite der Karte ein, die nicht überschritten werden darf.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height'] = array('Unteren Kartenrand am Browser ausrichten', 'Wählen Sie diese Option, um den unteren Kartenrand am Browserfenster auszurichten.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_gap'] = array('Abstand zum unteren Rand (Pixel)', 'Geben Sie den Abstand des unteren Randes des Browserfensters zum unteren Rand der Karte in Pixeln ein.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_min'] = array('Mindesthöhe (Pixel)', 'Geben Sie die Mindesthöhe der Karte ein, die nicht unterschritten werden darf.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_max'] = array('Maximale Höhe (Pixel)', 'Geben Sie die maximale Höhe der Karte ein, die nicht überschritten werden darf.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['show_locations'] = array('Alle Lokationen anzeigen', 'Passt den Kartenausschnitt so an, dass alle Lokationen gezeigt werden. Funktioniert nicht mit Daten, die erst zur Laufzeit geladen werden (z.B. Overpass-Abfragen).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['min_gap'] = array('Mindestabstand der Lokationen zum Kartenrand in Pixeln', 'Diese Einstellung ist sinnvoll, wenn nach der automatischen Ermittlung des anzuzeigenden Kartenausschnitts Ihre Icons aufgrund ihrer Größe über den Kartenrand hinausgehen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geox'] = array('Geo X-Koordinate', 'Geben Sie hier die X-Koordinate (Breitengrad, WGS-84) der Kartenmitte ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geoy'] = array('Geo Y-Koordinate', 'Geben Sie hier die Y-Koordinate (Längengrad, WGS-84) der Kartenmitte ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom'] = array('Zoom-Level', 'Geben Sie hier den Zoom-Level der Karte ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restrict_area'] = array('Kartenausschnitt einschränken', 'Mit dieser Option können Sie setzen, aus welchem "Rechteck" der Nutzer nicht herausnavigieren können soll. Außerdem wird bei einem Klick auf das Weltkugel-Symbol des Zoom-Steuerelements auf die hier angegebenen Koordinaten gezoomt.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geox'] = array('Geo X-Koordinate links', 'Geo X-Koordinate (Breitengrad, WGS-84) der linken, unteren Ecke für den eingeschränkten Navigationsbereich.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geoy'] = array('Geo Y-Koordinate unten', 'Geo Y-Koordinate (Längengrad, WGS-84) der linken, unteren Ecke für den eingeschränkten Navigationsbereich.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geox'] = array('Geo X-Koordinate rechts', 'Geo X-Koordinate (Breitengrad, WGS-84) der rechten, oberen Ecke für den eingeschränkten Navigationsbereich.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geoy'] = array('Geo Y-Koordinate oben', 'Geo Y-Koordinate (Längengrad, WGS-84) der rechten, oberen Ecke für den eingeschränkten Navigationsbereich.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['location_type'] = array('Typ des Kartenelements (Lokationstyp)', 'Legen Sie fest, welche Art von Lokation bzw. Lokationen dieses Element repräsentieren soll. Es ist möglich, im Baum beliebig viele Lokationselemente pro Karte als Kindelement zu definieren.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geox'] = array('Geo X-Koordinate', 'Geben Sie hier die X-Koordinate (Breitengrad, WGS-84) der Lokation ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geoy'] = array('Geo Y-Koordinate', 'Geben Sie hier die Y-Koordinate (Längengrad, WGS-84) der Lokation ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyle'] = array('Lokationsstil', 'Über den Lokationsstil, der beim Kartenprofil definiert wird, legen Sie das Aussehen der Lokation fest. Ist keine Lokationsstil definiert, dann wird standardmäßig ein roter Punkt gezeichnet. ');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_only_in_parent'] = array('Lokation nur in übergeordneten Karten anzeigen', 'Wenn Sie diese Checkbox NICHT setzen, dann wird diese Lokation auch angezeigt, sobald Sie dieses Element als Karte darstellen lassen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['exemptFromFilter'] = ['Lokation von Starboard-Filter ausnehmen','Bei gesetzter Checkbox, wird diese Lokation vom Starboard-Filter ignoriert.'];
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_label'] = array('Label', 'Geben Sie hier ein Label ein, das auf der Karte bei der Lokation mit angezeigt wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip'] = array('Tooltip', 'Kurze Information, die angezeigt wird, wenn sich der Mauszeiger über der Lokation befindet.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip_length'] = array('Länge des Tooltips', 'Anzahl der Zeichen, nach der das Tooltip abgeschnitten wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['enablePopup'] = array('Popup aktivieren', 'Setzen Sie diese Checkbox um das Popup für dieses Element zu aktivieren.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_info'] = array('Popup Information', 'Wird eine Popup-Information gesetzt, so wird sie durch einen Mausklick oder via Hover (abhängig von der Einstellung im Kartenprofil) auf der Lokation angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_extend'] = array('Popup Information durch Forenbeitrag erweitern', 'Ermöglicht es zusätzliche Popup-Information aus einem Forenbeitrag zu generieren.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_async'] = array('Inhalt des Popup nachladen', 'Ermöglicht das Nachladen des Inhalts des Popups zur Laufzeit (Empfehlenswert bei großen Datenmengen).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_linkurl'] = array('Direktverlinkung', 'Geben Sie eine URL ein (mit http://) oder wählen Sie über das Symbol eine Contao-Seite aus. Wird eine Direktverlinkung angegeben, so wird sie über Mausklick oder Maus-Doppelklick (abhängig von der Einstellung im Kartenprofil) angesprungen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_onclick_zoomto'] = array('Zoomen bei Mausklick auf Zoomstufe', 'Geben Sie die Zoomstufe ein, auf die bei Mausklick gezoomt werden soll. Funktioniert nur, wenn keine Direktverlinkung angegeben ist.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_minzoom'] = array('Mindest-Zoomstufe', 'Geben Sie die Zoomstufe ein, ab der die Elemente des Karteneintrags angezeigt werden. 0=keine Einschränkung.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_maxzoom'] = array('Maximale Zoomstufe', 'Geben Sie die Zoomstufe ein, bis zu der die Elemente des Karteneintrags angezeigt werden. 0=keine Einschränkung.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['async_content'] = array('Lokationen asynchron nachladen', 'Einfache Lokationen werden asynchron nachgeladen, um die initiale Performance zu verbessern.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_source'] = array('Quelltabelle', 'Wählen Sie die Quelltabelle aus, aus der die anzuzeigenden Lokationen geladen werden. Sie können eigene Tabellen hinzuprogrammieren, siehe CONFIG.PHP.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid']  = array('Eintrag aus Elterntabelle (optional)', 'Falls eine Elterntabelle vorhanden ist, wählen Sie hier den Eintrag der Elterntabelle aus, auf den die Auswahl eingeschränkt werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid1'] = array('Zweiter Eintrag aus Elterntabelle (optional)', 'Falls eine Elterntabelle vorhanden ist, wählen Sie hier den Eintrag der Elterntabelle aus, auf den die Auswahl eingeschränkt werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_labeldisplay'] = array('Anzeige von Labels', 'Geben Sie hier an, ob das Label angezeigt werden soll, und wie das Label zusammengesetzt sein soll, wenn in der Tabelle mehrere Datensätze für die gleichen Koordinaten gefunden werden.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_tooltipdisplay'] = array('Anzeige von Tooltips', 'Geben Sie hier an, ob das Tooltip angezeigt werden soll, und wie das Tooltip zusammengesetzt sein soll, wenn in der Tabelle mehrere Datensätze für die gleichen Koordinaten gefunden werden.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_directlink'] = array('Direktlink generieren', 'Wenn Sie dieses Häkchen setzen, dann kann der Nutzer mit einem Mausklick oder Maus-Doppelklick (Einstellung im Kartenprofil) direkt zum mit der Lokation verknüpften Inhalt springen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_force_target_blank'] = array('Popup-Links immer in neuem Fenster öffnen', 'Mit dieser Einstellung werden Links innerhalb eines PopUps immer in einem neuen Fenster, oder Tab (das ist abhängig von der Browsereinstellung des Benutzers), geöffnet.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_whereclause'] = array('WHERE-Bedingungen', 'Geben Sie hier zusätzliche Bedingungen ein, die an die WHERE-Klausel des generierten SQL-Statements angehängt werden sollen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tabJoinclause'] = array('Join-Bedingungen', 'Geben Sie hier ein Join-Statement zusätzlich für das generierte SQL-Statement ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_orderby'] = array('Sortierung', 'Geben Sie hier zusätzliche MySQL Sortierregeln ein, um die Reihenfolge der Elemente zu beeinflussen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_filter_alias'] = array('Nur aktuellen Eintrag anzeigen', 'Wenn Sie diesen Eintrag setzen, dann wird nur der Eintrag in der Tabelle angezeigt, bei dem der Inhalt des Alias-Feldes der ID der aktuellen Seite entspricht. So können Sie beispielsweise erreichen, dass beim Eventleser eine Karte nur mit dem aktuellen Event angezeigt wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_file'] = array('Datei', 'Falls Ihre Daten in einer Datei auf dem Server liegen, dann geben Sie diese hier an.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_folder'] = array('Verzeichnis', 'Falls Ihre Daten in einem Verzeichnis auf dem Server liegen, dann geben Sie diese hier an.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_url'] = array('URL', 'Falls Ihre Daten von einer URL heruntergeladen werden sollen, dann geben Sie diese hier an.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_content'] = array('Daten', 'Falls Sie Ihre Daten direkt in die Datenbank speichern möchten, dann geben Sie diese hier ein.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['split_geojson'] = array('Geojson aufteilen','Hier klicken, umd die einzelnen Features eine Geojsons im Starboard schaltbar zu machen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['geojson_attributes'] = array('Attribute des Geojson','Kommagetrennte Aufzählung der Attribute des GeoJsons. Der erste Wert dient als Überschrift des Features im Starboard.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['geojson_zoom'] = array('Zoombutton für GeoJson','Fügt einen Zoombutton hinzu, mit dem auf das Feld gezoomt wird. Dieser ersetzt den Button zum Ein/Ausschalten des Features.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_projection'] = array('Koordinatensystem');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_forcenodes'] = array('Flächen und Wege in Knoten umwandeln', 'Generiert aus allen Flächen und Wegen in den OSM-Daten Knoten. Das ist oft sinnvoll, wenn die generierten Daten Gebäudeumrisse o.ä. enthalten.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_additionalgeometries'] = array('Zusätzliche Geometrien anzeigen', 'OSM-Daten liefern manchmal zusätzliche Geometrien, wie z.B. "Eingänge" mit. Mit dieser Option werden diese Daten ebenfalls auf der Karte angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_request'] = array('Anfrage an Overpass API (XML-Format)', 'Diese Anfrage wird via AJAX browserseitig über einen Proxy (C4GOverpass.php) an die Overpass API geschickt. Doku zum Format: http://www.overpass-api.de.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_bbox_limited'] = array('Anfrage an Overpass API auf den angezeigten Kartenbereich (BBOX) beschränken.', 'Sendet die Anfrage immer, wenn sich der Kartenausschnitt durch Benutzereingaben ändert. In der Anfrage muss an geeigneter Stelle der Platzhalter "(bbox)" eingetragen sein. Dieser wird dann durch ein "bbox-query"-Tag ersetzt.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_layername'] = array('Bezeichnung im Starboard', 'Falls Sie die Daten dieser Ebene im Starboard schaltbar machen möchten, dann geben Sie hier den Namen ein, der im Starboard angezeigt werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_child'] = array('Kinder im Starboard ausblenden', 'Untergeordnete Kartenstrukturelemente werden im Starboard ausgeblendet. Sie werden als Kinder dieses Elements aktivert und deaktiviert.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_hidelayer'] = array('Initial ausblenden', 'Falls dieses Element initial in der Karte nicht angezeigt werden soll, dann setzen Sie die Checkbox. Die Ebene wird dann erst nach Aktivierung im Starboard auf der Karte sichtbar.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['showPopupOnActive'] = array('Popup bei aktiver Ebene einschalten', 'Automatische Aktivierung des Popups bei aktivierter Ebene.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['forums'] = array('Diskussionsforen','Wählen Sie aus den Diskussionsforen, in denen Kartenlokationen definiert werden können, diejenigen aus, die Sie berücksichtigen möchten.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_jumpto'] = array('Weiterleitungsseite mit Forum','Wählen Sie hier die Seite aus, die Ihr con4gis-Forum-Frontendmodul enthält, falls Sie Links auf Themen und Beiträge im Forum aktiviert haben.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_reassign_layer'] = array('Forum - in andere Ebene verschieben','Wählen Sie eine Methode, um bestimmte Foreneinträge in andere, bereits definierte Ebenen zu verschieben.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation'] = array('Aktuelle Position ermitteln','Wenn die Karte geöffnet wird, wird versucht, über die HTML5 Geolocation API vom Browser die aktuellen Geokoordinaten zu ermitteln. Funktioniert nur auf sicheren Seiten (https).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation_zoom'] = array('Aktuelle Position - Zoomlevel','Konnte vom Browser die aktuelle Position ermittelt werden, dann zoomt die Karte automatisch zu den erhaltenen Koordinaten mit dem angegebenen Zoomlevel');
$GLOBALS['TL_LANG']['tl_c4g_maps']['include_sublocations'] = array('Hierarchisch untergeordnete Kartenstrukturelemente berücksichtigen', 'Bei Deaktivierung dieser Einstellung werden nur Elemente der ersten Ebene auf der Karte dargestellt.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['link_id'] = array('Kartenstrukturelement', 'Zu verknüpfendes Kartenstrukturelement.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['protect_element'] = array('Diesen Eintrag schützen', 'Macht diesen Eintrag nur für ausgewählte Gruppen sichtbar.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['permitted_groups'] = array('Berechtigte Gruppen', 'Die Gruppen, für die dieser Eintrag sichtbar ist.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['use_specialprofile'] = array('Spezialprofil aktivieren', 'Aktiviert ein Spezialprofil, welches für die ausgewählten Gruppen gilt.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile'] = array('Spezialprofil', 'Das Profil, was für die ausgewählten Gruppen aktiviert wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_mobile'] = array('Spezialprofil mobil', 'Optional: Spezialprofil, das für mobile Endgeräte verwendet wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_groups'] = array('Betroffene Gruppen', 'Die Gruppen, für die das Spezialprofil aktiviert wird.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['be_optimize_checkboxes_limit']    = array('Grenzwert für Optimierung großer Checkbox-Listen',
                                      'Definiert wie viele Einträge enthalten sein müssen, bis die Checkbox-Listen in Chosenfields umgewandelt werden. (0 = niemals umwandeln)');

$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_locations'] = array('Lokationen clustern','Beim Clustern werden Strecken und Flächen in Punkte umgerechnet');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_distance'] = array('Cluster-Distanz','Ab welcher Entfernung in Pixeln soll geclustert werden? (Standard beträgt 20px)');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fillcolor'] = array('Füllfarbe', 'Wählen Sie die Füllfarbe der Clusterblasen aus.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fontcolor'] = array('Schriftfarbe', 'Wählen Sie die Schriftfarbe der Clusterblasen aus.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_zoom'] = array('Minimale Zoomstufe (Spinne)', 'Wählen Sie die Zoomstufe, bis zu der hereingezoomt wird. Ab dieser Stufe werden die Cluster per Klick aufgelöst und verteilt dargestellt oder das Popup geöffnet.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_popup'] = array('Popup beim Clustern', 'Statt das Cluster aufzulösen wird ein gemeinsames Popup erstellt und geöffnet.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom_locations'] = array('Zoom auf Lokationen','Beim Aktivieren der Lokationen im Starboard wird auf sie und eventuelle Kindelemente gezoomt. Dies funktioniert nicht mit Lokationen aus asynchronen Abfragen (z.B. Overpass).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_location'] = array('Hover-Effekt bei Lokationen','Ändern des Lokationsstils beim Hovern über einer Lokation');
$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_style'] = array('Lokationsstil bei Hover-Effekt','Lokationsstil, der beim Hovern über die Lokation angezeigt werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popupType'] = array("Art der Popup-Generierung","Art der Popup-Generierung");
$GLOBALS['TL_LANG']['tl_c4g_maps']['popupTemplate'] = array("Popup Template","Popupinformationen aus einem Template laden");
$GLOBALS['TL_LANG']['tl_c4g_maps']['awesomeicon'] = array("Icon für den Reiter", "Hier können Sie einen Unicode eingeben, der in ein Awesome-Font Icon umgewandelt wird (http://fontawesome.io/icons/).");
$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_when_in_tab'] = array("Ausblenden wenn im Starboard-Reiter", "Wenn Sie diese Checkbox setzen, wird die Ebene im Starboard nicht angezeigt, wenn es in einem eigenen Starboardreiter liegt. Das ist hilfreich, wenn Sie das Elternelement einer bereits vorhandenen Strukturebene im Reiter nicht anzeigen wollen.");
$GLOBALS['TL_LANG']['tl_c4g_maps']['cssClass'] = array("CSS Klasse", "Die CSS Klasse wird am Listenelement im Starboard gesetzt.");
/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['new']    = array('Neues Kartenstrukturelement', 'Ein neues Kartenstrukturelement erstellen');
$GLOBALS['TL_LANG']['tl_c4g_maps']['edit']   = array('Kartenstrukturelement bearbeiten', 'Kartenstrukturelement ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_maps']['copy']   = array('Kartenstrukturelement duplizieren', 'Kartenstrukturelement ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_maps']['copyChilds']   = array('Kartenstrukturelement inklusive Unterelemente duplizieren', 'Kartenstrukturelement ID %s inklusive Unterelemente duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cut']    = array('Kartenstrukturelement verschieben', 'Kartenstrukturelement ID %s verschieben');
$GLOBALS['TL_LANG']['tl_c4g_maps']['delete'] = array('Kartenstrukturelement löschen', 'Kartenstrukturelement ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'] = array('Kartenstrukturelement veröffentlichen/unveröffentlichen', 'Kartenstrukturelement ID %s veröffentlichen/unveröffentlichen');
$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'] = array('Kartenstrukturelement veröffentlichen/unveröffentlichen', 'Kartenstrukturelement ID %s veröffentlichen/unveröffentlichen');
$GLOBALS['TL_LANG']['tl_c4g_maps']['show']   = array('Details', 'Die Details des Kartenstrukturelements ID %s anzeigen');

/**
 * Misc
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'] = 'Internes Standardprofil (OpenStreetMap)';

/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['CENTERZOOM'] = 'Angabe von Center und Zoom-Level';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['LOCATIONS'] = 'Alle Lokationen sollen sichtbar sein';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['none']      = 'Keine Lokation';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['single']    = 'Einzelne Geo-Koordinate';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['table']     = 'Aus anderer Tabelle';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['gpx']       = 'Daten im GPX-Format';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['kml']       = 'Daten im KML-Format';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['geojson']   = 'Daten im GeoJSON-Format';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['osm']   	  = 'Daten im OSM-Format';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['folder']    = 'Daten im Verzeichnis';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['overpass']  = 'Anfrage an Overpass API (OSM)';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['link']      = 'Verknüpfung zu anderem Kartenstrukturelement';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['c4gForum']  = 'Forenbereiche aus con4gis-Forum';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['startab']  = 'Eigener Starboardreiter';


$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['OFF']       = 'Nicht anzeigen';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['1ST']       = 'Zeige einen Eintrag';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['1ST_MORE']  = 'Zeige einen Eintrag und (...) bei mehreren Einträgen';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['1ST_COUNT'] = 'Zeige einen Eintrag und (Anzahl) bei mehreren Einträgen';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['ALL']       = 'Zeige alle Einträge';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['MERC']      = 'Spherical Mercator (EPSG:900913/EPSG:3857)';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['WGS84']     = 'WGS-84 (EPSG:4326)';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['NO']       = 'Nicht verschieben';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['THREAD']   = 'Verschieben, wenn der Themenname einem Namen in der Starboardstruktur entspricht';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType']['text'] = "Text";
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType']['template'] = "Template-Datei";
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType']['popup_info'] = "con4gis Vorgaben";

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['general_legend']		= 'Allgemeine Daten';
$GLOBALS['TL_LANG']['tl_c4g_maps']['map_legend']		    = 'Karte';
$GLOBALS['TL_LANG']['tl_c4g_maps']['location_legend']	    = 'Lokation';
$GLOBALS['TL_LANG']['tl_c4g_maps']['protection_legend']	    = 'Zugriffsschutz';
$GLOBALS['TL_LANG']['tl_c4g_maps']['expert_legend']	    	= 'Experteneinstellungen';
$GLOBALS['TL_LANG']['tl_c4g_maps']['backend_legend']        = 'Backendeinstellungen';

$GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'] = array('Quellelement bearbeiten', 'Das Quellelement ID %s bearbeiten');

