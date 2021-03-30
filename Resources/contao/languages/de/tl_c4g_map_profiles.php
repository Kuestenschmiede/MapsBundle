<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/**
 * Fields
 */

/** Allgemeine Daten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name'] = ['Name', 'Geben Sie Ihrem Kartenprofil einen Namen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme'] = ['Kartenlayout', 'Wählen Sie Ihr selbst erstelltes Kartenlayout aus oder verwenden das con4gis Standard-Theme.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions'] = ['Bedienelemente (Buttonleiste in der Karte)', 'Button auswählen und Reihenfolge individuell bestimmen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['external_elements'] = ['Elemente außerhalb der Karte', 'Hier können Sie auswählen, welche Bestandteile außerhalb der Karte dargestellt werden sollen. Diese sind als Modul anzulegen und einzubinden.'];

/** Basiskarten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'] = ['Basiskarten', 'Legen Sie die Basiskarten fest, die über den Button "Basiskartenauswahl" in der Karte individuell ausgewählt werden können.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_filter'] = ['Basiskartenfilter aktivieren', 'Blendet einen Suchfilter für die Basiskarten oberhalb des Baumes ein.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer'] = ['Standard-Basiskarte', 'Wählen Sie die Basiskarte, die beim Laden der Karte vorausgewählt sein soll.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'] = ['Überschrift der Basiskartenauswahl', 'Standard: "Basiskarten"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_filter'] = ['Basiskartenfilter aktivieren', 'Blendet einen Suchfilter für die Basiskarten oberhalb des Baumes im Frontend ein.'];

/** Lokationsstile */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles'] = ['Lokationsstile', 'Wählen Sie die Lokationsstile, die in den Kartenstrukturelementen dieses Profils geladen werden sollen. Standard: alle (d.h. wenn nichts ausgewählt ist, werden alle Lokationsstile übergeben.)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['label_color'] = ['Label-Farbe', 'Wählen Sie die Standardfarbe für Labels aus. Dies kann durch die Einstellung am Lokationsstil überschrieben werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_locstyles_zoom'] = ['Lokationen beim Zoom skalieren', 'Setzen Sie diese Checkbox, wenn die Lokationen (mit Icons) beim Zoomen der Zoomstufe entsprechend skaliert werden sollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_src_zoom'] = ['Initialer Zoom', 'Geben Sie den Zoomlevel an, bei dem die Lokationen ihre normale Größe haben sollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_scale_factor'] = ['Skalierungsfaktor', 'Geben Sie einen Skalierungsfaktor (zwischen 0 und 1) an, um den die Lokationen beim Zoomen hoch- oder herunterskaliert werden sollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_min_scale'] = ['Minimale Skalierung', 'Geben Sie eine Skalierung an, die nicht unterschritten werden soll (Lokationen werden nicht kleiner skaliert als dieser Wert).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_max_scale'] = ['Maximale Skalierung', 'Geben Sie eine Skalierung an, die nicht überschritten werden soll (Lokationen werden nicht größer skaliert als dieser Wert).'];

/** Navigation */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav'] = ['Navigation mit der Maus', 'Aktiviert die Möglichkeit, mit Hilfe der Maus zu zoomen und den angezeigten Kartenausschnitt zu verschieben.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel'] = ['Mausrad zum Zoomen benutzen', 'Setzen Sie diese Checkbox, um das Hinein- und Herauszoomen mit dem Mausrad zu aktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = ['Doppelklick zum Zoomen benutzen', 'Setzen Sie diese Checkbox, um das Hineinzoomen per Doppelklick zu aktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox'] = ['Zoombox mit [Shift + Klick]', 'Aktiviert die Möglichkeit, mit Hilfe der Shift- und der linken Maustaste ein Rechteck aufzuziehen, um in die Karte hineinzuzoomen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic'] = ['Kinetisches Scrollen nach Verschieben mit der Maus','Wenn gesetzt, dann wird nach dem Verschieben des Kartenausschnitts mit der Maus die Scrollbewegung auslaufend fortgesetzt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav'] = ['Touch-Navigation', 'Touch-Navigation zum zoomen & drehen der Karte mit zwei Fingern erlauben (erfordert einen Touchbildschirm).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav'] = ['Navigation mit der Tastatur', 'Aktiviert die Möglichkeit, mit Hilfe der Tastatur zu navigieren (Pfeiltasten zum Verschieben, Zoomen mit den Tasten "+" und "-").'];

/** Kartenstruktur */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label'] = ['Überschrift der Ebenen im Starboard ', 'Standard: leer'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter'] = ['Kartenelementfilter aktivieren', 'Blendet einen Suchfilter für die Starboardeinträge (Kartenelemente) oberhalb des Baumes ein.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open'] = ['Starboard automatisch öffnen', 'Wenn Sie diese Checkbox auswählen, dann wird das Starboard initial geöffnet angezeigt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label'] = ['Starboard Überschrift', 'Die Überschrift erscheint ganz oben im Starboard, gilt für alle Tabreiter und sollte nicht allzu lang sein. Standard: Kartenelemente.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filters'] = ['Filter', 'Wählen Sie die seperat erstellten Filter aus'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filterHandling'] = ['Filter als Mehrfachauswahl', 'Stellt die Filter auf Mehrfachauswahl um (Logisches Oder statt Und).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filterResetButton'] = ['Knopf zum Filter zurücksetzen', 'Blendet einen Knopf ein, der das zurücksetzen aller Filter triggert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button'] = ['Auswahl-Button aktivieren','Erstellt einen Button, mit dem alle Elemente des Starboards zeitgleich ein- und ausgeblendet werden. Achtung! Abhängig von der Struktur kann das zu langen Ladezeiten führen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_locstyles'] = ['Lokationsstile im Starboard anzeigen','Wenn möglich, werden die Lokationsstile der Karte am zugehörigen Element im Starboard dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboardInvertZoomActivate'] = ['Elementtext Zoombutton','Statt den Layer ein- und auszuschalten, wird bei Klick auf den Text auf den entsprechenden Layer gezoomt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['colorZoomMarker'] = ['Farbe Zoom-Markierung','Bei einem Zoom auf die Lokationen werden dieser mit der hier eingestellten Farbe markiert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxZoomStarboard'] = ['Maximaler Zoom', 'Bei einem Zoom auf die Lokation wird höchstens auf diese Zoomstufe gezoomt (1-22)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all'] = ['Cluster über alle Layer', 'Erstellt ein Cluster über alle Layer. Überschreibt die Einstellungen im Strukturelement. Achtung! Diese Funktion ist nicht für alle Strukturelemente geeignet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance'] = ['Cluster-Distanz', 'Ab welcher Entfernung in Pixeln soll geclustert werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor'] = ['Füllfarbe', 'Wählen Sie die Füllfarbe der Clusterblasen aus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor'] = ['Schriftfarbe', 'Wählen Sie die Schriftfarbe der Clusterblasen aus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom'] = ['Minimale Zoomstufe (Spinne)','Wählen Sie die Zoomstufe, bis zu der hereingezoomt wird. Ab dieser Stufe werden die Cluster per Klick aufgelöst und verteilt dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_dist_spider'] = ['Cluster-Distanz (aufgelöst)','Wählen Sie die Distanz, die zwischen den aufgelösten Punkten eines Clusters dargestellt werden soll.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_scale'] = ['Cluster-Elemente skalieren','Wählen Sie, ob CLuster mit mehr Elementen größer dargestellt werden sollen als kleinere.'];

/** Karteninformationen */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution'] = ['Copyright-Text (Attribution)', 'Blendet einen Copyright-Text (eine sogenannte Attribution) ein. Deaktivierung nicht empfohlen!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['always_show_attribution'] = ['Immer anzeigen', 'Der Copyright-Text wird immer angezeigt und darf nicht geschlossen werden (empfohlen).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = ['Initial geschlossen', 'Zeigt den Copyright-Text initial geschlossen an. Auch wenn diese Option nicht gewählt ist kann die Attribution vom Benutzer geschlossen werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution'] = ['Zusätzlicher Copyright-Text', 'wird an den Copyright-Text des verwendeten Kartendienstes angefügt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = ['con4gis-Logo einblenden', 'Blendet das con4gis-Logo auf der Karte ein. Sie können diese Option deaktivieren. Wir würden uns in diesem Fall über eine Erwähnung von "con4gis" an anderer Stelle freuen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution'] = ['DIV für Copyright-Text (Attribution)', 'DIV zur Positionierung des Copyrights. Nur nötig, falls das Copyright außerhalb der Karte angezeigt werden soll. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline'] = ['Maßstabsleiste', 'Zeigt eine Leiste, die den aktuellen Kartenmaßstab visualisiert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition'] = ['Mauskoordinaten', 'Blendet die Geo-Koordinaten des Punktes ein, der sich unterhalb des Mauszeigers befindet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel'] = ['Zoom-Level anzeigen', 'Zeigt den aktuellen Zoom-Level an.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage'] = ['Infoseite (Legende)', 'Hier kann die Infoseite befüllt werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp'] = ['Initial geöffnetes Kartenelement', 'Hier können Sie auswählen, ob ein Element initial geöffnet dargestellt werden soll und wenn ja welches.'];

/** Kartenwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param'] = ['GET-Parameter für Permalink-Werte verwenden', 'Vergeben Sie hier einen Namen für einen GET-Parameter, wenn Sie die Permanlink-Werte nicht im Hash-Teil der URL übergeben wollen (z.B. weil dieser bereits von anderen Erweiterungen verwendet wird).'];

/** Suchwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch'] = ['Suchwerkzeuge (Voraussetzung für Suche und Router)', 'Aktiviert die Suchengine, über die Orte, Adressen und POIs (Vorwärtssuche), aber auch Koordinaten (Rückwärtssuche) gesucht werden können.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_headline'] = ['Überschrift Suche', 'Geben Sie eine Überschrift für die Suche ein oder nichts, falls keine Überschrift angezeigt werden soll.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine'] = ['Suchengine', 'ACHTUNG! Bitte beachten Sie eventuell geltende Beschränkungen des gewählten Anbieters. Sollten Sie eine benutzerdefinierte URL angeben, achten Sie darauf die Attribution des Anbieters anzugeben, wenn es sich nicht um Ihren eigenen Server handelt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url'] = ['Benutzerdefinierte Suchengine-URL', 'Die URL unter der die Suchengine erreichbar ist.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution'] = ['Benutzerdefinierte Suchengine-Attribution', 'WICHTIG! Der Copyright-Text des Anbieters der Suchengine.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key'] = ['Authentifizierungsschlüssel für die Suchengine', 'Wenn der Provider der gewählten Suchengine einen Schlüssel (Key) für die Benutzung seines Dienstes verlangt kann dieser hier eingetragen werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams'] = ['Parameter der Suche', 'Geben Sie hier Schlüssel und Parameter ein, mit denen die Suche eingeschränkt werden soll. Beispielsweise können Sie mit countrycodes die Suche auf bestimmte Länder einschränken (Schlüssel = countrycodes, Paramenter = de)  (<a href="https://wiki.openstreetmap.org/wiki/DE:Nominatim" rel="noopener" target="_blank">Dokumentation</a>).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results'] = ['Suche mit Ergebnisliste', 'Stellt die ersten Ergebnisse der Suche unterhalb des Suchfeldes zu Auswahl in einer Liste dar.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_count'] = ['Anzahl Ergebnisse', 'Geben Sie die maximale Anzahl an Suchergebnissen an.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results_headline'] = ['Überschrift Ergebnisliste', 'Geben Sie eine Überschrift für die Ergebnisliste an.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_locstyle'] = ['Lokationsstil Ergebnis', 'Wählen Sie einen Lokationsstil aus, mit dem das Suchergebnis auf der Karte markiert werden soll. Wenn nichts ausgewählt ist, werden rote konzentrische Kreise verwendet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto'] = ['Zoomlevel', 'Zoomlevel nach einer erfolgreichen Suche, z.B. 16'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds'] = ['Auf Gebiete zoomen', 'Zoomt auf die Gebietsumrisse, falls sie vom gewählten Such-Service (z.B. Nominatim) mitgeliefert wurden, an Stelle des angegebenen Zoomlevels.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate'] = ['Suche animieren', 'Die Karte führt nach der Suche einen animierten Flug zum gefundenen Ort durch.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult'] = ['Suchergebnis hervorheben', 'Markiert nach der Suche den gefundenen Ort für eine kurze Zeit.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup'] = ['Popup öffnen', 'Öffnet nach dem Suchen das Popup einer am Suchziel liegenden Lokation.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = ['Copyright für die Suche anzeigen', 'Fügt einen Copyright-Hinweis des verwendeten Suchservices (z.B. Nominatim) hinzu. Deaktivierung nicht empfohlen!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_placeholder'] = ["Platzhalter für Suchfeld", "Geben Sie einen Platzhaltertext für das Eingabefeld an."];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate_duration'] = ["Animationsdauer", "Geben Sie die Zeit in Millisekungen für die Animationsdauer zum Suchergebnis an. Standard: 2000"];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_duration'] = ["Ergebnisdauer", "Geben Sie die Zeit in Millisekungen für das Hervorheber des Suchergebnises an. Standard: 3000"];

/** Geopicker (Koordinaten per Klick auf die Karte bestimmen) */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker'] = ['Frontend-Geopicker anzeigen', 'Zeigt einen Geopicker mit dem Sie die Koordinaten per Klick in die Karte ermitteln können im Frontend an. Nützlich z.B. in einem Formular.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx'] = ['Formularfeld für die x-Koordinate', 'Ein INPUT Feld, in das die gewählte X-Koordinate geschrieben wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy'] = ['Formularfeld für die y-Koordinate', 'Ein INPUT Feld, in das die gewählte Y-Koordinate geschrieben wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv'] = ['DIV für Geopicker', 'DIV zur Positionierung des Geopickers. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Formularfeld.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = ['Copyright für Geopicker anzeigen', 'Fügt eine Attribution des verwendeten Suchservice (z.B. Nominatim) hinzu. Deaktivierung nicht empfohlen!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled'] = ['Geopicker deaktivieren', 'Wenn Sie nur eine Position anzeigen wollen, können Sie den Geopicker hiermit deaktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous'] = ['Geopicker anonymisieren', 'Der Geopicker wird so manipuliert, dass eine genaue Bestimmung der Position nicht mehr möglich ist. Nützlich damit z.B. Einsatzorte nicht auf eine Adresse bezogen werden können.'];

/** Cesium */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = ['Cesium verwenden', 'Sofern in der/den gewählten Basiskarte(n) die Option Cesium (Globusdarstellung) aktiviert wurde, wird/werden diese als Globus dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always'] = ['Cesium immer verwenden', 'Ist die Globus-Darstellung aller hier im Kartenprofil gewählten Basiskarten gewünscht, ist diese Option zu aktivieren. Keine weiteren Vorgaben in den Basiskarten notwendig.'];

/** Einstellungen zum Klick-Verhalten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientation'] = ['Tooltip-Positionierung', 'Positionierung des Tooltips im Verhältnis zur Maus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow'] = ['Direktlinks in neuem Tab öffnen', 'Direktlinks werden nicht im selben Tab, sondern in einem neuen Tab geöffnet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on'] = ['Direktlinks öffnen bei', 'Hier können Sie wählen, nach welcher Mausaktion ein Direktlink geöffnet wird, falls er bei der Lokation angegeben ist.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups'] = ['Popups über Maus-Hover-Effekt anzeigen', 'Popups werden angezeigt sobald der Mauszeiger über der Lokation verweilt und nicht erst nach einem Mausklick.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay'] = ['Maus-Hover-Popups geöffnet lassen', 'Popups bleiben geöffnet auch, wenn der Mauszeiger die Lokation verlässt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandling'] = ['Popupverhalten', 'Popup- oder Kartenposition anpassen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHeadline'] = ['Überschrift Popup', 'Hier können Sie eine Überschrift für das Popup setzen.'];

/** Sonstiges */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpassEngine'] = ['Overpass-Servertechnik', 'Auswahl der Overpass-Servertechnik'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url'] = ['Alternative URL der Overpass-API ', 'Geben Sie hier die URL des Overpass API Servers ein, wenn Sie z.B. einen eigenen Overpass API Server nutzen möchten.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div'] = ['DIV für den Kartenbereich', 'DIV zur Umpositionierung des Kartenbereichs. Mit Hilfe dieser Einstellung lässt sich die Karte z.B. mitten in ein Formular hinein verschieben. Das DIV muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement oder HTML Formularfeld.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'] = ['Kartensituation merken', 'Buttonstatus und Kartensituation werden im Browser zwischengespeichert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit'] = ['Grenzwert für Optimierung großer Checkbox-Listen', 'Definiert wie viele Einträge enthalten sein müssen, bis die Checkbox-Listen in Chosenfields umgewandelt werden. (0 = niemals umwandeln)'];

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoom'] = ['Steuerelemente zum Zoomen','Erzeugen von Buttons zum Hinein- und Herauszoomen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoomPosition'] = ['Zur Position zoomen','Zoomt auf sicheren Seiten zur aktuellen Geräteposition.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoomHome'] = ['Zurück zoomen (Haus)','Zoomt zurück in die voreingestellte Position der Karte.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoomExtent'] = ['Raus zoomen (Welt)','Zoomt zurück in die kleinstmögliche Zoomstufe.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['fullscreen'] = ['Vollbildmodus','Blendet einen Schalter ein, mit dem man in den Vollbildmodus des Browsers wechseln kann.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['print'] = ['Kartenexport','Blendet einen Schalter ein, der einen Export der Karte als PNG ermöglicht. Bitte achten Sie auf die Copyright-Hinweise des Kartenanbieters.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['graticule'] = ['Geographisches Netz','Blendet einen Schalter ein, der ein geografisches Netz anzeigt, das mit Hilfe von horizontalen und vertikalen Linien die Längen- und Breitengrade visualisiert.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['layerswitcher'] = ['Kartenelementeauswahl (Starboard)','Wenn Sie diese Checkbox auswählen, wird im Starboard die Auswahlliste der Kartenstrukturelemente in einem eigenen Tab angezeigt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['baselayerswitcher'] = ['Basiskartenauswahl','Wenn Sie diese Checkbox auswählen, wird im Starboard die Auswahlliste der Basiskarten in einem eigenen Tab angezeigt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['geosearch'] = ['Kartensuche','Stellt Button und Suchfeld in der Karte dar.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['legend'] = ['Legende','Hier können Sie eigene Informationen (z.B. als Legende) hinterlegen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['rotate'] = ['Karte rotieren mit [Ctrl + Shift + Klick]','Aktiviert die Möglichkeit, mit Hilfe der Tasten Strg+Shift und der linken Maustaste die Karte zu drehen (und zu zoomen). Funktioniert auch per 2-Finger-Touch'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['measure'] = ['Messwerkzeuge','Blendet einen Schalter ein, mit dem Werkzeuge zum Messen von Entfernungen und Flächen aktiviert werden können.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['overview'] = ['Übersichtskarte','Button zum Einblenden einer zusätzlichen Übersichtkarte auf der regulären Karte.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['permalink'] = ['Permalinkgenerator','Berechnet einen kopierbaren Link, der den aktuellen Kartenausschnitt der Karte repräsentiert und der z.B. in E-Mails verschickt werden kann.'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK'] = 'einfachem Mausklick';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL'] = 'Maus-Doppelklick';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Standard-Layout';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim bei Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim bei MapQuest (<a href="https://developer.mapquest.com/web/products/open/nominatim" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Benutzerdefiniert';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis.io Kartendienste (<a href="https://con4gis.io" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['5'] = 'Pelias (<a href="https://pelias.io/" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['1'] = 'Benutzerdefinierter Overpass-Server';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['2'] = 'con4gis.io Kartendienste (<a href="https://con4gis.io" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['3'] = 'Öffentlicher Overpass-Server (<a href="https://overpass-api.de/" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['0'] = 'Klassisches Handling (Das Popup verweist auf das geöffnete Feature. Die Karte bewegt sich nicht.)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['1'] = 'Kartenausschnitt an Popup anpassen (Das Popup verweist auf das geöffnete Feature. Die Karte bewegt sich, sodass dass Popup sichtbar ist.)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['2'] = 'Zentriertes Popup (Das Popup wird in der Mitte der Karte angezeigt.)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['3'] = 'Das Popup wird in einer eigenen Leiste am rechten Kartenrand dargestellt (Standard).';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['0'] = 'Unten links';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['1'] = 'Oben links';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['2'] = 'Unten rechts';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['3'] = 'Oben rechts';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['keys']       = ['Schlüssel','Beispiel:countrycodes'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['params']     = ['Parameter', 'Beispiel: de'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs'][''] = 'keines';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['starboard'] = 'Starboard';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['search'] = 'Suche';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['baselayers'] = 'Basiskartenwechsler';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['measuretools'] = 'Messwerkzeuge';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['legend'] = 'Legende';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new']        = ['Neues Kartenprofil', 'Ein neues Kartenprofil erstellen'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit']       = ['Kartenprofil bearbeiten', 'Kartenprofil ID %s bearbeiten'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy']       = ['Kartenprofil duplizieren', 'Kartenprofil ID %s duplizieren'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete']     = ['Kartenprofil löschen', 'Kartenprofil ID %s löschen'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show']       = ['Details', 'Die Details des Kartenprofils ID %s anzeigen'];

/**
 * xlabel buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editBaselayers'] = ['Basiskarten bearbeiten'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editLocstyles'] = ['Lokationsstile bearbeiten'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editThemes'] = ['Kartenlayout bearbeiten'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend'] = 'Allgemeine Daten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend'] = 'Basiskarten (Kartenbilder wechseln)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend'] = 'Lokationsstile';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend'] = 'Navigation';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend'] = 'Starboard (Karteninhalte schalten)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution_legend'] = 'Copyright Informationen (Attributionen)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend'] = 'Zusätzliche Karteninformationen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend'] = 'Kartensuche';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend'] = 'Cesium (Globusdarstellung)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend'] = 'Einstellungen zum Klick-Verhalten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['expert_legend'] = 'Experteneinstellungen';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Label im Editor';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['starboard'] = "Starboard";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['baselayer'] = "Baselayerswitcher";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['permalink'] = "Permalink";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['search'] = "Suche";
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['measuretools'] = "Messwerkzeuge";
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['legend'] = "Legende";
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['overviewmap'] = "Übersichtskarte";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['filter'] = "Kartenfilter";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['popup'] = "Popup";

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infotext'] = 'Im Kartenprofil werden die Steuerungs- und Auswahlbutton für die Karte festgelegt. Die Funktionen zu/hinter den Button können individuell eingestellt werden. Außerdem Einstellungen zum Popup, zu Copyright-Hinweisen und zur Adresssuche. '.
    'Mehr auf <a href="https://docs.con4gis.org/kartenprofile-con4gis-maps" title="con4gis Docs Kartenprofile" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';