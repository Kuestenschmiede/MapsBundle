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

/**
 * Fields
 */

/** Allgemeine Daten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name'] = ['Name', 'Enter a name for the map profile.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme'] = ['Theme', 'Select your own theme.'];

/** Basiskarten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'] = ['Base layers', 'Check the baselayers you wish to see in the Starboard. Default: all'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer'] = ['Default Base Layer', 'Select the base layer to be pre-selected when the map is laoded.'];

/** Lokationsstile */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles'] = ['Location styles', 'Check the location styles available for map structure items using this profile. Default: all'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['label_color'] = ['Label Color', 'Select the default color for labels. Can be overriden by the settings in the location style.'];

/** Navigation */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel'] = ['Zoom Panel', 'Creates buttons to zoom in and out of the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button'] = ['Additional Button in Zoom Panel', 'Display an additional button in the zoom panel. Clicking the button centers the map to the selected position.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider'] = ['Zoom Panel Slider', 'Creates a slider instead of buttons to zoom in and out.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav'] = ['Navigation with Mouse', 'Activates the ability to zoom in and out and move the map with your mouse.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel'] = ['Mousewheel Zoom', 'If checked, the user can zoom in and out using the mouse wheel.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = ['Zoom with Double Click', 'If checked, the user can zoom in with a double click.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox'] = ['Zoombox with [Shift + Click]', 'Activates the ability to zoom in by selecting a rectangle by clicking the map while holding the shift key.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode'] = ['Rotate Map with [Ctrl + Shift + Click]', 'Activates the ability to rotate the map by clicking it while holding the shift and ctrl keys.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic'] = ['Kinetic Mouse Scrolling','If checked, scrolling with the mouse will continue for a short period after the mouse button was let go (as opposed to stopping instantly.).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav'] = ['Touch Navigation', 'Enables touch screen navigation (requires touch screen device).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav'] = ['Keyboadr Navigation', 'Enables moving the map with the arrow keys and zooming in and out with the + and - keys, respectively.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen'] = ['Full Screen Mode', 'Shows a button to switch to full screen mode.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['print'] = ['Map Export', 'Shows a button to export the map as an image file.'];

/** Kartenstruktur */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard'] = ['Enable Starboard','Enables the Starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher'] = ['Show Map Elements', 'If checked the map elements are shown in the starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label'] = ['Starboard Header Map Elements', 'Default: "Map Elements"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher'] = ['Show Base Maps', 'If checked, the base maps can be selected in the Starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'] = ['Starboard Header Map Elements', 'Default: "Base Maps"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open'] = ['Open Starboard Automatically', 'If checked, the starboard is open by default.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label'] = ['Starboard Header', 'General Starboard Header.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter'] = ['Enable Starboard Filter', 'Shows the Starboard Filter.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button'] = ['Activate Button for Starboard','Creates a Button in order to show and hide all elements in the starboard with one click.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div'] = ['DIV for Starboard',
    'Enter the ID of an existing DIV element if you want to put the Starboard somewhere else on your page.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all'] = ['Cluster über alle Layer', 'Erstellt ein Cluster über alle Layer. Überschreibt die Einstellungen im Strukturelement. Achtung! Diese Funktion ist nicht für alle Strukturelemente geeignet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance'] = ['Cluster distance',
    'Cluster distance (default 20px)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor']     = ['Fill color', 'Select the fill color of the cluster bubble.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor']     = ['Font color', 'Select the font color of the cluster bubble.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom']          = ['Maximal zoom', 'Select the maximal zoomlevel. The cluster is splitted on click afterwards '];


/** Karteninformationen */

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution']           = ['Attribution', 'Shows the attribution. Deactivate only when you are sure it is allowed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = ['Show initially collapsed', 'Collapse the attribution by default. Otherwise the Attribution will be visible when entering the page, but is still collapsible.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = ['Show con4gis-logo', 'Shows the con4gis-logo on the map. You can turn it off, but we would appreciate it if you\'d mention "con4gis" at a different location on your page.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution']       = ['DIV attribution', 'Enter the ID of an existing DIV element if you want to put the attributon outside the map.'];


$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap'] = ['Übersichtskarte', 'Schafft die Möglichkeit, über einen Schalter, rechts auf der Karte, eine kleine Umgebungskarte darzustellen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule'] = ['Geografisches Netz', 'Blendet einen Schalter ein, welcher ein Geografisches Netz anzeigt, das mit Hilfe von horizontalen und vertikalen Linien die Längen- und Breitengrade visualisiert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline'] = ['Maßstabsleiste', 'Zeigt eine Leiste, die den aktuellen Kartenmaßstab visualisiert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition'] = ['Mauskoordinaten', 'Blendet die Geo-Koordinaten des Punktes ein, der sich unterhalb des Mauszeigers befindet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel'] = ['Zoom-Level anzeigen', 'Zeigt den aktuellen Zoom-Level an.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage'] = ['Infoseite (Legende)', 'Sobald Sie dieses Feld befüllen, wird der Infobutton in der Karte angezeigt. Bei klick werden sämtliche Inhalte entsprechend Ihrer Eingaben dargestellt.'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap']           = ['Overview map', 'Adds a button in the lower right corner of the map, which when pressed shows an overwiew map.'];


/** Kartenwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool'] = ['Messwerkzeuge', 'Blendet einen Schalter ein, mit dem Werkzeuge zum Messen von Entfernungen und Flächen aktiviert werden können.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink'] = ['Permalinkgenerator', 'Berechnet einen kopierbaren Link, der den aktuellen Kartenausschnitt der Karte repräsentiert und der z.B. in E-Mails verschickt werden kann.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param'] = ['GET-Parameter für Permalink-Werte verwenden', 'Vergeben Sie hier einen Namen für einen GET-Parameter, wenn Sie die Permanlink-Werte nicht im Hash-Teil der URL übergeben wollen (z.B. weil dieser bereits von anderen Erweiterungen verwendet wird).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geobookmarks'] = ['Favoriten (beta)', 'Favorisierte Kartenpositionen könnne so im Browser gespeichert werden.'];

/** Suchwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch'] = ['Suchwerkzeuge (Voraussetzung für Suche und Router)', 'Aktiviert die Suchengine, über die Orte, Adressen und POIs (Vorwärtssuche), aber auch Koordinaten (Rückwärtssuche) gesucht werden können.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine'] = ['Suchengine', 'ACHTUNG! Bitte beachten Sie eventuell geltende Beschränkungen des gewählten Anbieters. Sollten Sie eine benutzerdefinierte URL angeben, achten Sie darauf die Attribution des Anbieters anzugeben, wenn es sich nicht um Ihren eigenen Server handelt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url'] = ['Benutzerdefinierte Suchengine-URL', 'Die URL unter der die Suchengine erreichbar ist.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution'] = ['Benutzerdefinierte Suchengine-Attribution', 'WICHTIG! Der Copyright-Text des Anbieters der Suchengine.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key'] = ['Authentifizierungsschlüssel für die Suchengine', 'Wenn der Provider der gewählten Suchengine einen Schlüssel (Key) für die Benutzung seines Dienstes verlangt kann dieser hier eingetragen werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show'] = ['Suche in der Karte anzeigen', 'Stellt Button und Suchfeld in der Karte dar.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams'] = ['Parameter der Suche', 'Geben Sie hier Schlüssel und Parameter ein, mit denen die Suche eingeschränkt werden soll. Beispielsweise können Sie mit countrycodes die Suche auf bestimmte Länder einschränken (<a href=https://wiki.openstreetmap.org/wiki/DE:Nominatim>Dokumentation</a>).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results'] = ['Suche mit Ergebnisliste', 'Stellt die ersten Ergebnisse der Suche unterhalb des Suchfeldes zu Auswahl in einer Liste dar.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto'] = ['Zoomlevel', 'Zoomlevel nach einer erfolgreichen Suche, z.B. 16'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds'] = ['Auf Gebiete zoomen', 'Zoomt auf die Gebietsumrisse, falls sie vom Such-Service (Nominatim) mitgeliefert wurden, an Stelle des angegebenen Zoomlevels.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate'] = ['Suche animieren', 'Die Karte führt nach der Suche einen animierten Flug zu dem gefundenen Ort durch.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult'] = ['Fund hervorheben', 'Markiert nach der Suche den gefundenen Ort für eine kurze Zeit.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup'] = ['Popup öffnen', 'Öffnet nach dem Suchen das Popup einer am Suchziel liegenden Lokation (Funktioniert am Besten mit Polygonen).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = ['Copyright für die Suche anzeigen', 'Fügt eine Attribution des verwendeten Suchservice (Nominatim) hinzu. Deaktivierung nicht empfohlen!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_collapsed'] = ['Suchfeld initial einklappen', 'Das Eingabefeld für die Sucheingabe wird erst nach Klick auf die Lupe geöffnet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div'] = ['DIV für die Suche', 'DIV zur Positionierung der Suche. Nur nötig, falls die Suche nicht direkt vor der Karte angezeigt werden soll. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement.'];

/** Editor */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor'] = ['Editor aktivieren', 'Blendet einen Schalter ein, der den Editor auf der Karte anzeigt, mit dem Punkte, Strecken und Flächen auf die Karte gezeichnet werden können.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_point'] = ['Lokationsstile für POIs', 'Ausgewählte Lokationsstile werden im Editor angeboten.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_line'] = ['Lokationsstile für Strecken', 'Ausgewählte Lokationsstile werden im Editor angeboten.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_polygon'] = ['Lokationsstile für Flächen', 'Ausgewählte Lokationsstile werden im Editor angeboten.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_circle'] = ['Lokationsstile für Kreise', 'Ausgewählte Lokationsstile werden im Editor angeboten.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_freehand'] = ['Lokationsstile fürs Freihandzeichnen', 'Ausgewählte Lokationsstile werden im Editor angeboten.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_vars'] = ['Zusatzfelder', 'Zusatzfelder stehen für POIs, Strecken und Flächen zur Verfügung und können über ${Schlüssel} im Popup, Label und Tooltip in die Karte eingefügt werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_show_items'] = ['Alle Karteneinträge im Editor anzeigen', 'Zeigt im Editor nicht nur den zu bearbeitenden Karteneintrag an, sondern auch alle Anderen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_helpurl'] = ['Hilfe-Link', 'Wenn hier eine URL eingetragen wird, so erscheint ein "Hilfe" Link im Editor, der zu der angegebenen URL führt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_editor_default'] = ['Als Standardprofil für Backend-Geoeditor verwenden', 'Setzen Sie diese Checkbox, um das Kartenprofil als Standardwert im Backend-Geoeditor zu verwenden (Kartenstrukturelement GeoJson).'];

/** Geopicker (Position bestimmen) */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'] = ['Als Standardprofil für Backend-Geopicker verwenden', 'Setzen Sie diese Checkbox, um das Kartenprofil standardmäßig für den Backend-Geopicker zu verwenden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker'] = ['Geopicker anzeigen (Frontend)', 'Zeigt einen Geopicker, wie er im Backend zur Auswahl der Koordinaten verwendet wird im Frontend an. Nützlich z.B. in einem Formular.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx'] = ['Formularfeld für die x-Koordinate', 'Ein INPUT Feld, in das die gewählte X-Koordinate geschrieben wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy'] = ['Formularfeld für die y-Koordinate', 'Ein INPUT Feld, in das die gewählte Y-Koordinate geschrieben wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv'] = ['DIV für Geopicker', 'DIV zur Positionierung des Geopickers. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Formularfeld.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = ['Copyright für Geopicker anzeigen', 'Fügt eine Attribution des verwendeten Suchservice (Nominatim) hinzu. Deaktivierung nicht empfohlen!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled'] = ['Geopicker deaktivieren', 'Wenn Sie nur eine Position anzeigen wollen, können Sie den Geopicker hiermit deaktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous'] = ['Geopicker anonymisieren', 'Der Geopicker wird so manipuliert, dass eine genaue Bestimmung der Position nicht mehr möglich ist.'];

/** Cesium */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = ['Cesium verwenden', 'Mit Cesium wird die 2D Karte in einen Globus umgewandelt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always'] = ['Cesium immer verwenden', 'Soll Cesium für jede Basiskarte aktiviert sein? Falls nicht, kann Cesium auch für einzelne Karten in den Basiskarteneinstellungen aktiviert werden.'];

/** Einstellungen zum Klick-Verhalten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow'] = ['Direktlinks in neuem Fenster öffnen', 'Direktlinks nicht im selben Fenster, sondern in einem neuen Fenster öffnen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on'] = ['Direktlinks öffnen bei', 'Hier können Sie wählen, nach welcher Mausaktion ein Direktlink geöffnet wird, falls er bei der Lokation angegeben ist.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups'] = ['Popups über Maus-Hover-Effekt anzeigen', 'Popups anzeigen sobald der Mauszeiger über der Lokation verweilt, und nicht erst nach einem Mausklick.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay'] = ['Maus-Hover-Popups geöffnet lassen', 'Popups nicht automatisch schließen, wenn der Mauszeiger die Lokation verlässt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupAutoPan'] = ['Kartenausschnitt an Popup anpassen', 'Passt beim Öffnen eines Popups den Kartenausschnitt an '];

/** Sonstiges */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url'] = ['Alternative URL der Overpass-API (<a href="http://overpass-api.de/" target="_blank">Website des voreingestellten API-Server Anbieters</a>)', 'Geben Sie hier die URL des Overpass API Servers ein, wenn Sie z.B. einen eigenen Overpass API Server nutzen möchten. Standardmäßig wird http://overpass-api.de/api/interpreter verwendet'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div'] = ['DIV für den Kartenbereich', 'DIV zur Umpositionierung des Kartenbereichs. Mit Hilfe dieser Einstellung lässt sich die Karte z.B. mitten in ein Formular hinein verschieben. Das DIV muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement oder HTML Formularfeld.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['account'] = ['Accountbutton', 'Sobald Sie ein Frontendmodul auswählen, wird der Accountbutton dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'] = ['Kartensituation merken', 'Buttonstatus und Kartensituation werden im Browser zwischengespeichert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit'] = ['Grenzwert für Optimierung großer Checkbox-Listen', 'Definiert wie viele Einträge enthalten sein müssen, bis die Checkbox-Listen in Chosenfields umgewandelt werden. (0 = niemals umwandeln)'];


/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK'] = 'einfachem Mausklick';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL'] = 'Maus-Doppelklick';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Standard-Theme';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['0'] = 'Aus';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['1'] = 'Karte drehen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['2'] = 'Karte drehen und zoomen';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['1'] = 'mit Welt-Icon (zoomt zurück in die kleinstmögliche Zoomstufe)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['2'] = 'mit Haus-Icon (zoomt zurück in die voreingestellte Position der Karte)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['3'] = 'mit Positions-Icon (zoomt auf sicheren Seiten zur aktuellen Geräteposition)';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['4'] = 'mit Favoriten-Icon (zoomt nach Auswahl auf eine Deiner Lieblingspositionen)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim bei Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim bei MapQuest (<a href="http://developer.mapquest.com/web/products/open/nominatim" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Benutzerdefiniert';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis Kartendienste (<a href="https://con4gis.org/kartendienste.html" target="_blank">Nutzungsbestimmungen</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['keys']       = ['Schlüssel','Beispiel:countrycodes'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['params']     = ['Parameter', 'Beispiel: de'];

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new']        = ['Neues Kartenprofil', 'Ein neues Kartenprofil erstellen'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit']       = ['Kartenprofil bearbeiten', 'Kartenprofil ID %s bearbeiten'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy']       = ['Kartenprofil duplizieren', 'Kartenprofil ID %s duplizieren'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete']     = ['Kartenprofil löschen', 'Kartenprofil ID %s löschen'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show']       = ['Details', 'Die Details des Kartenprofils ID %s anzeigen'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend'] = 'Allgemeine Daten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend'] = 'Basiskarten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend'] = 'Lokationsstile';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend'] = 'Navigation';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend'] = 'Kartenstruktur';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend'] = 'Karteninformationen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measure_legend'] = 'Messwerkzeuge';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend'] = 'Kartensuche';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_legend'] = 'Karteneditor';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_legend'] = 'Geopicker (Position bestimmen)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend'] = 'Cesium (Globusdarstellung)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend'] = 'Einstellungen zum Klick-Verhalten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['miscellaneous_legend'] = 'Sonstiges';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Label im Editor';



