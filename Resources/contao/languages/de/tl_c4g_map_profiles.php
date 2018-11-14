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
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name']                  = array('Name',
                                                                            'Bitte geben Sie den Namen des Kartenprofils an.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_editor_default']    = array('Als Standardprofil für Backend-Geoeditor verwenden',
                                                                            'Setzen Sie diese Checkbox, um das Kartenprofil als Standardwert im Backend-Geoeditor zu verwenden (Kartenstrukturelement GeoJson).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'] = array('Als Standardprofil für Backend-Geopicker verwenden',
                                                                            'Setzen Sie diese Checkbox, um das Kartenprofil als Standardwert im Backend-Geopicker zu verwenden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme']                 = array('Theme',
                                                                            'Wählen Sie Ihr eigenes Theme aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers']            = array('Basiskarten',
                                                                            'Wählen Sie die Basiskarten, die in Karten dieses Profils im Starboard verfügbar sein sollen. Standard: alle');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer']            = array('Standard-Basiskarte',
    'Wählen Sie die Basiskarte, die standardmäßig angezeigt werden soll, wenn neue Strukturelemente eingetragen werden.');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles']             = array('Lokationsstile',
                                                                            'Wählen Sie die Lokationsstile, die in Kartenstrukturelementen dieses Profils auswählbar sein sollen. Standard: alle');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['label_color']             = array('Label-Farbe',
    'Wählen Sie die Standardfarbe für Labels aus. Dies kann durch die Einstellung am Lokationsstil überschrieben werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel']            = array('Steuerelement zum Zoomen',
                                                                            'Erzeugen von Buttons zum Hinein- und Herauszoomen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button']     = array('Zusatzbutton im Steuerelement zum Zoomen',
                                                                            'Erzeugt einen Zusatzbutton im Zoom-Steuerelement. Ein Klick auf das Icon zoomt an die ausgewählte Position. Hinweis: mit Slider steht die Komponente nicht zur Verfügung.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider']     = array('Slider zum Zoomen',
                                                                            'Erzeugt einen Slider mit Steuerelementen zum Zoomen. Hiermit werden alle anderen Zoom-Button ausgeblendet.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav']             = array('Navigation mit der Maus',
                                                                            'Aktiviert die Möglichkeit, mit Hilfe der Maus zu zoomen und den angezeigten Kartenausschnitt zu verschieben.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel']       = array('Mausrad zum Zoomen benutzen',
                                                                            'Setzen Sie diese Checkbox, um das Hinein- und Herauszoomen mit dem Mausrad zu aktivieren.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = array('Doppelklick zum Zoomen benutzen',
                                                                            'Setzen Sie diese Checkbox, um das Hineinzoomen per Doppelklick zu aktivieren.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox']     = array('Zoombox mit [Shift + Klick]',
                                                                            'Aktiviert die Möglichkeit, mit Hilfe der Shift- und der linken Maustaste ein Rechteck aufzuziehen, um in die Karte hineinzuzoomen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode']    = array('Karte rotieren mit [Alt + Klick]',
                                                                            'Aktiviert die Möglichkeit, mit Hilfe der Alt- und der linken Maustaste die Karte zu drehen (und zu zoomen).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic']     = array('Kinetisches Scrollen nach Verschieben mit der Maus',
                                                                            'Wenn gesetzt, dann hört nach dem Verschieben des Kartenausschnitts mit der Maus die Scrollbewegung nicht sofort auf, sondern sie wird langsam verzögert, bis sie zum Stillstand kommt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav']             = array('Touch-Navigation',
                                                                            'Touch-Navigation (Zoom & Drehen der Karte mit zwei Fingern) auf der Karte erlauben. (Erfordert einen Touchbildschirm)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav']          = array('Navigation mit der Tastatur',
                                                                            'Aktiviert die Möglichkeit, mit Hilfe der Tastatur zu navigieren (Pfeiltasten zum Verschieben, Zoomen mit den Tasten "+" und "-").');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['nav_history']           = array('Navigations-Historie',
                                                                            'Erzeugt einen Vor- und einen Zurück-Schalter, vergleichbar mit denen eines Internet-Browsers.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen']            = array('Vollbildmodus',
                                                                            'Blendet einen Schalter ein, mit dem man in den Vollbildmodus des Browsers wechseln kann (HTML5). Achtung: wird nicht von jedem Browser unterstützt!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['print']                 = array('Kartenexport',
                                                                            'Blendet einen Schalter ein, der einen Export der Karte als PNG ermöglicht. Bitte achten Sie auf die Copyright-Hinweise des Kartenanbieters.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard']             = array('Starboard aktivieren',
                                                                            'Wenn Sie diese Checkbox auswählen, dann bekommt die Karte ein Starboard (erreichbar über ein Stern-Symbol rechts), das es ermöglicht, zwischen den im Kartenprofil definierten Basiskarten zu wechseln. Außerdem können im Starboard ggfs. in der Kartenstruktur definierte Ebenen ein- und ausgeschaltet werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open']        = array('Starboard automatisch öffnen',
                                                                            'Wenn Sie diese Checkbox auswählen, dann wird das Starboard sofort geöffnet angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label']       = array('Starboard Überschrift',
                                                                            '');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div']         = array('DIV für das Starboard',
                                                                            'DIV zur Positionierung des Starboards außerhalb der Karte. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter']      = array('Starboardfilter aktivieren',
                                                                            'Blendet Suchfilter für die Starboardeinträge oberhalb des Baumes ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button']      = array('Button für Starboard aktivieren',
                                                                            'Erstellt einen Button, mit dem alle Elemente des Starboards ein- und ausgeblendet werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all']           = array('Cluster über alle Layer',
                                                                            'Erstellt ein Cluster über alle Layer. Überschreibt die Einstellungen im Strukturelement.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance']      = array('Cluster-Distanz',
                                                                            'Ab welcher Entfernung in Pixeln soll geclustert werden? (Standard beträgt 20px)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor']     = array('Füllfarbe',
                                                                            'Wählen Sie die Füllfarbe der Clusterblasen aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor']     = array('Schriftfarbe',
                                                                            'Wählen Sie die Schriftfarbe der Clusterblasen aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom']          = array('Minimale Zoomstufe (Spinne)',
                                                                            'Wählen Sie die Zoomstufe, bis zu der hereingezoomt wird. Ab dieser Stufe werden die Cluster per Klick aufgelöst und verteilt dargestellt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['async_content']         = array('Lokationen asynchron nachladen',
                                                                            'Einfache Lokationen werden asynchron nachgeladen, um die initiale Performance zu verbessern.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher']     = array('Basiskarten-Auswahl anzeigen',
                                                                            'Wenn Sie diese Checkbox auswählen, wird im Starboard die Auswahlliste der Basiskarten angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label']   = array('Bezeichnung der Basiskarten im Starboard',
                                                                                'Standard: "Basiskarten"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher']         = array('Kartenelement-Auswahl anzeigen',
                                                                            'Wenn Sie diese Checkbox auswählen, wird im Starboard die Auswahlliste der Kartenelemente angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label']       = array('Bezeichnung der Ebenen im Starboard ',
                                                                                'Standard: "Kartenelemente"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool']           = array('Messwerkzeuge',
                                                                            'Blendet einen Schalter ein, mit dem Werkzeuge zum Messen von Entfernungen/Gebieten aktiviert werden können.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule']             = array('Geografisches Netz',
                                                                            'Blendet einen Schalter ein, welcher ein Geografisches Netz anzeigt, das mit Hilfe von horizontalen und vertikalen Linien die Längen- und Breitengrade visualisiert.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor']                = array('Editor auf der Karte aktivieren',
                                                                            'Blendet einen Schalter ein, der den Editor auf der Karte anzeigt, mit dem Punkte, Strecken und Flächen auf die Karte gezeichnet werden können.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap']           = array('Übersichtskarte',
                                                                            'Schafft die Möglichkeit, über einen Schalter, rechts unten auf der Karte, eine Umgebungskarte einzublenden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geobookmarks']          = array('Favoriten (beta)',
                                                                            'Damit kannst Du favorisierte Kartenposition im Browser speichern.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline']             = array('Maßstabsleiste',
                                                                            'Zeigt eine Leiste, die den aktuellen Kartenmaßstab visuell darstellt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition']         = array('Maus-Koordinaten',
                                                                            'Blendet die Geo-Koordinaten des Punktes ein, der sich unterhalb des Mauszeigers befindet.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink']             = array('Permalink',
                                                                            'Blendet einen Link ein, der den aktuellen Kartenausschnitt der Karte repräsentiert und der z.B. in E-Mails verschickt werden kann.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param']   = array('GET-Parameter für Permalink-Werte verwenden',
                                                                            'Vergeben Sie hier einen Namen für einen GET-Parameter, wenn Sie die Permanlink-Werte nicht im Hash-Teil der URL übergeben wollen (z.B. weil dieser bereits von anderen Erweiterungen verwendet wird).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel']             = array('Zoom-Level anzeigen',
                                                                            'Zeigt den aktuellen Zoom-Level an.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['libsource']             = array('Zu verwendende OpenLayers Bibliothek',
                                                                            'Wählen Sie die Herkunft der OpenLayers JavaScript Bibliothek aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['imagepath']             = array('Benutzerdefinierter Pfad für OpenLayers Icons (optional)',
                                                                            'Nur beim Standard-Theme: Setzt den Pfad zu einem benutzerdefinierten OpenLayers /img/ Verzeichnis für den Fall, dass Sie OpenLayers Standardicons auswechseln möchten. ACHTUNG: Diese Einstellung betrifft NICHT Grafiken aus dem OpenLayers /themes/default/img/ Verzeichnis, die Sie über CSS austauschen können!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage']              = array('Inhalt der Infoseite',
                                                                            'Sobald Sie dieses Feld befüllen, wird der Infobutton in der Karte angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['account']               = array('Accountbutton',
                                                                            'Sobald Sie ein Frontendmodul auswählen, wird der Accountbutton dargestellt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow']        = array('Direktlink in neuem Fenster öffnen',
                                                                            'Direktlinks nicht im selben Fenster, sondern in einem neuen Fenster öffnen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on']          = array('Direktlinks öffnen bei',
                                                                            'Hier können Sie wählen, nach welcher Mausaktion ein Direktlink geöffnet wird, falls er bei der Lokation angegeben ist.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups']          = array('Popups über Maus-Hover-Effekt anzeigen',
                                                                            'Popups anzeigen sobald der Mauszeiger über der Lokation verweilt, und nicht erst nach einem Mausklick.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay']     = array('Maus-Hover-Popups geöffnet lassen',
                                                                            'Popups nicht automatisch schließen, wenn der Mauszeiger die Lokation verlässt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupAutoPan']                  = array('Kartenausschnitt an Popup anpassen',
                                                                            'Passt beim Öffnen eines Popups den Kartenausschnitt an ');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution']           = array('Copyright-Text (Attribution)',
                                                                            'Blendet einen Copyright-Text (eine sogenannte Attribution) ein. Deaktivierung nicht empfohlen!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = array('Initial geschlossen',
                                                                            'Zeigt den Copyright-Text initial geschlossen an. Auch wenn diese Option nicht gewählt ist kann die Attribution vom Benutzer geschlossen werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = array('con4gis-Logo einblenden',
                                                                            'Blendet das con4gis-Logo auf der Karte ein. Sie können diese Option deaktivieren, jedoch würden wir uns in diesem Fall über eine Erwähung von "con4gis" an einer anderen Stelle, auf Ihrer Seite freuen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution']       = array('DIV für Copyright-Text (Attribution)',
                                                                            'DIV zur Positionierung des Copyrights. Nur nötig, falls das Copyright außerhalb der Karte angezeigt werden soll. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution']       = array('Zusätzlicher Copyright-Text',
                                                                            'wird an den Copyright-Text des verwendeten Kartendienstes angefügt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch']             = array('Suche aktivieren (Voraussetzung für Suche und Router)',
                                                                            'Aktiviert die Suchengine, über die Orte, Adressen und POIs (Vorwärtssuche), aber auch Koordinaten (Rückwärtssuche) gesucht werden können.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine']      = array('Suchengine',
                                                                            'ACHTUNG! Bitte beachten Sie eventuell geltende Beschränkungen des gewählten Anbieters. Sollten Sie eine benutzerdefinierte URL angeben, achten Sie darauf die Attribution des Anbieters anzugeben, wenn es sich nicht um Ihren eigenen Server handelt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show']        = array('Suche in der Karte anzeigen',
                                                                            'Stellt Button und Suchfeld in der Karte dar.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url']            = array('Benutzerdefinierte Suchengine-URL',
                                                                                            'Die URL unter der die Suchengine erreichbar ist.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution']    = array('Benutzerdefinierte Suchengine-Attribution',
                                                                                            'WICHTIG! Der Copyright-Text des Anbieters der Suchengine.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results']     =array('Suche mit Ergebnisliste',
                                                                            'Stellt die Ergebnisse der Suche in einer Liste dar');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div']         = array('DIV für die Suche',
                                                                            'DIV zur Positionierung der Suche. Nur nötig, falls die Suche nicht direkt vor der Karte angezeigt werden soll. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key']         = array('Authentifizierungsschlüssel für die Suchengine',
                                                                            'Wenn der Provider der gewählten Suchengine einen Schlüssel (Key) für die Benutzung seines Dienstes verlangt kann dieser hier eingetragen werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto']      = array('Zoomlevel',
                                                                            'Zoomlevel nach einer erfolgreichen Suche, z.B. 16');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds']  = array('Auf Gebiete zoomen',
                                                                            'Zoomt auf die Gebietsumrisse, falls sie vom Such-Service (Nominatim) mitgeliefert wurden, an Stelle des angegebenen Zoomlevels.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate']     = array('Suche animieren',
                                                                            'Die Karte führt nach der Suche einen animierten Flug zu dem gefundenen Ort durch.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult']  = array('Fund hervorheben',
                                                                            'Markiert nach der Suche den gefundenen Ort für eine kurze Zeit.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup']       = array('Popup öffnen',
                                                                            'Öffnet nach dem Suchen das Popup einer am Suchziel liegenden Lokation (Funktioniert am Besten mit Polygonen).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = array('Copyright für die Suche anzeigen',
                                                                            'Fügt eine Attribution des verwendeten Suchservice (Nominatim) hinzu. Deaktivierung nicht empfohlen!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_collapsed']   = array('Suchfeld initial einklappen',
                                                                            'Das Eingabefeld für die Sucheingabe wird erst nach Klick auf die Lupe geöffnet.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker']             = array('Geopicker anzeigen (Frontend)',
                                                                            'Zeigt einen Geopicker, wie er im Backend zur Auswahl der Koordinaten verwendet wird im Frontend an. Nützlich z.B. in einem Formular.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx']      = array('Formularfeld für die x-Koordinate',
                                                                            'Ein INPUT Feld, in das die gewählte X-Koordinate geschrieben wird.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy']      = array('Formularfeld für die y-Koordinate',
                                                                            'Ein INPUT Feld, in das die gewählte Y-Koordinate geschrieben wird.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv']   = array('DIV für Geopicker',
                                                                            'DIV zur Positionierung des Geopickers. Muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Formularfeld.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = array('Copyright für Geopicker anzeigen',
                                                                            'Fügt eine Attribution des verwendeten Suchservice (Nominatim) hinzu. Deaktivierung nicht empfohlen!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled']    = array('Geopicker deaktivieren',
                                                                            'Wenn Sie nur eine Position anzeigen wollen, können Sie den Geopicker hiermit deaktivieren.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous']   = array('Geopicker anonymisieren',
                                                                            'Der Geopicker wird so manipuliert, dass eine genaue Bestimmung der Position nicht mehr möglich ist.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div']            = array('DIV für den Kartenbereich',
                                                                            'DIV zur Umpositionierung des Kartenbereichs. Mit Hilfe dieser Einstellung lässt sich die Karte z.B. mitten in ein Formular hinein verschieben. Das DIV muss manuell auf der Seite erzeugt werden, z.B. mit einem HTML Inhaltselement oder HTML Formularfeld.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url']          = array('Alternative URL der Overpass-API (<a href="http://overpass-api.de/" target="_blank">Website des voreingestellten API-Server Anbieters</a>)',
                                                                            'Geben Sie hier die URL des Overpass API Servers ein, wenn Sie z.B. einen eigenen Overpass API Server nutzen möchten. Standardmäßig wird http://overpass-api.de/api/interpreter verwendet');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router']                = array('Router aktivieren (Beachten Sie bitte die <a href="https://github.com/DennisOSRM/Project-OSRM/wiki/Api-usage-policy" target="_blank">Nutzungsbedingungen des Standard-Anbieters</a>!)',
                                                                            'Fügt einen zusätzlichen Schalter in die Karte ein, über den der Router aktiviert werden kann. Unterstützt wird zurzeit nur die alte OSRM API.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url']   = array('Alternative URL (verfplichtend für OSRM-API 4)',
                                                                            'Geben Sie hier die URL des ORS oder OSRM Servers ein, wenn Sie z.B. einen eigenen Server nutzen möchten. Standardmäßig wird http://router.project-osrm.org/ oder https://api.openrouteservice.org/directions verwendet.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_key']        = array('API-Key',
                                                                            'Geben Sie hier Ihren ORS-API-Key ein. Den Key können Sie <a href="https://openrouteservice.org/sign-up/" target="_blank">hier</a> generieren.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution']    = array('Copyright für Router überschreiben',
                                                                            'Überschreibt die Standard-Attribution. Dies ist nur dann empfehlenswert, wenn Sie einen alternativen API-Server nutzen, oder die Attribution an einer anderen, offensichtlichen Stelle, auf der Seite platziert haben!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles']       = array('Router-Profile',
                                                                            'Legt die OpenRouteService-Profile fest.');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_point']   = array('Lokationsstile für POIs',
                                                                            'Ausgewählte Lokationsstile werden im Editor angeboten.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_line']    = array('Lokationsstile für Strecken',
                                                                            'Ausgewählte Lokationsstile werden im Editor angeboten.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_polygon'] = array('Lokationsstile für Flächen',
                                                                            'Ausgewählte Lokationsstile werden im Editor angeboten.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_circle'] = array('Lokationsstile für Kreise',
                                                                            'Ausgewählte Lokationsstile werden im Editor angeboten.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_freehand'] = array('Lokationsstile fürs Freihandzeichnen',
                                                                            'Ausgewählte Lokationsstile werden im Editor angeboten.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_vars']           = array('Zusatzfelder',
                                                                            'Zusatzfelder stehen für POIs, Strecken und Flächen zur Verfügung und können über ${Schlüssel} im Popup, Label und Tooltip in die Karte eingefügt werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_show_items']     = array('Alle Karteneinträge im Editor anzeigen',
                                                                            'Zeigt im Editor nicht nur den zu bearbeitenden Karteneintrag an, sondern auch alle Anderen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_helpurl']        = array('Hilfe-Link',
                                                                            'Wenn hier eine URL eingetragen wird, so erscheint ein "Hilfe" Link im Editor, der zu der angegebenen URL führt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit']      = array('Grenzwert für Optimierung großer Checkbox-Listen',
                                                                            'Definiert wie viele Einträge enthalten sein müssen, bis die Checkbox-Listen in Chosenfields umgewandelt werden. (0 = niemals umwandeln)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = array('Auswahl der API-Version','Alte API funktioniert nur mit eingenem ORSM-Server');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = array('Location-Stil für Start-Location', 'Location-Stil für Start-Location');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = array('Location-Stil für Ziel-Location', 'Location-Stil für Ziel-Location');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = array('Location-Stil für Unterwegs-Hinweise', 'Location-Stil für Unterwegs-Hinweise');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = array('Location-Stil für Zwischenziele', 'Location-Stil für Zwischenziele');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = array('Alternativroute','Sollen Alternativrouten dargestellt werden?');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = array('Cesium verwenden', 'Mit Cesium wird die 2D Karte in einen Globus umgewandelt.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always'] = array('Cesium immer verwenden', 'Soll Cesium für jede Basiskarte aktiviert sein? Falls nicht, kann Cesium auch für einzelne Karten in den Basiskarteneinstellungen aktiviert werden.');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'] = array('Kartensituation merken', 'Buttonstatus u.Ä. werden im Browser zwischengespeichert.');

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK'] = 'einfachem Mausklick';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL'] = 'Maus-Doppelklick';

//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['dark']            = 'Dark Theme (angepasst)';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['modern']          = 'Modern Trans Theme';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['metro']           = 'Metro Theme';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['blue']            = 'Blue Theme (basierend auf dem angepassten Dark-Theme)';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['red']             = 'Red Theme (basierend auf dem angepassten Dark-Theme)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Standard-Theme';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['0'] = 'Aus';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['1'] = 'Karte drehen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['2'] = 'Karte drehen und zoomen';

//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['0'] = 'Aus';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['1'] = 'mit Welt-Icon (zoomt zurück in die kleinstmögliche Zoomstufe)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['2'] = 'mit Haus-Icon (zoomt zurück in die voreingestellte Position der Karte)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['3'] = 'mit Positions-Icon (zoomt auf sicheren Seiten zur aktuellen Geräteposition)';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['4'] = 'mit Favoriten-Icon (zoomt nach Auswahl auf eine Deiner Lieblingspositionen)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim bei Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim bei MapQuest (<a href="http://developer.mapquest.com/web/products/open/nominatim" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Benutzerdefiniert';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis Kartendienste (<a href="https://con4gis.org/kartendienste.html" target="_blank">Nutzungsbestimmungen</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['0'] = 'OpenSourceRoutingMachine (API 4.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['1'] = 'OpenSourceRoutingMachine (API 5.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['2'] = 'OpenRouteService';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['0'] = 'Auto';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['1'] = 'Lastwagen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['2'] = 'Fahrrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['3'] = 'Rennrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['4'] = 'Fahrrad (sicher)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['5'] = 'Moutainbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['6'] = 'Trekkingrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['7'] = 'Elekrofahrrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['8'] = 'FußgängerIn';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['9'] = 'WandererIn';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['10']= 'Rollstuhl';


/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new']        = array('Neues Kartenprofil', 'Ein neues Kartenprofil erstellen');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit']       = array('Kartenprofil bearbeiten', 'Kartenprofil ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy']       = array('Kartenprofil duplizieren', 'Kartenprofil ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete']     = array('Kartenprofil löschen', 'Kartenprofil ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show']       = array('Details', 'Die Details des Kartenprofils ID %s anzeigen');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend']        = 'Allgemeine Daten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend']      = 'Basiskarten';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend']       = 'Lokationsstile';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend']     = 'Karten-Navigation';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend']      = 'Starboard-Einstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend']    = 'Karten-Informationen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['expert_legend']         = 'Experten-Einstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['info_legend']           = 'Informationsseite (Legende)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend']          = 'Einstellungen zum Klick-Verhalten';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['misc_legend']         = 'Sonstige Einstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend']      = 'Suche & Router';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_legend']      = 'Geopicker-Einstellungen';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_legend']         = 'Router (OSRM)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_legend']         = 'Editor-Einstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['backend_legend']        = 'Backend-Einstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend']         = 'Cesium-Einstellungen';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Label im Editor';
