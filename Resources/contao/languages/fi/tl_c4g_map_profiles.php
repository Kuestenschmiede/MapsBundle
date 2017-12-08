<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name']                  = array('Nimi',
                                                                            'Anna nimi kartan profiilille.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_default']            = array('Oletusprofiili',
                                                                            'Raksita käyttääksesi tätä profiilia oletuksena uusille kartoille.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_editor_default']    = array('Is this the standard profile for backend editor?',
    'If checked, it will used for the backend editor (structur element: geoJson)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'] = array('Is this the standard profile for backend geopicker?',
    'If checked, it will used for the backend geopicker (structur elements, events, ...).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme']                 = array('Teema',
                                                                            'Valitse oma teema.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers']            = array('Pohjakerros',
                                                                            'Tarkista pohjakerrokset jotka haluat nähdä Staboardissa. Oletus: kaikki');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles']             = array('Sijainnin tyylit',
                                                                            'Tarkista sijaintityylit jotka ovat saatavilla kartan rakennetta varten käyttäen tätä profiilia. Oletus: kaikki');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel']            = array('Zoom paneeli',
                                                                            'Lisää paneelin nappien kera jotka zoomaavat sisään ja ulos');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button']     = array('Addition button in zoom panel',
                                                                            'Display a additional button in the zoom panel. Clicks jumps to selected position.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider']     = array('Zoom panel with slider',
                                                                            'Zoom panel with slider.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav']             = array('Hiiren navigointi',
                                                                            'Lisää kyvyn zoomata ja panoroida käyttäen hiirellä.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel']       = array('Hiiren rullan zoomaaminen',
                                                                            'Lisää funktion zoomata sisään ja ulos käyttäen hiiren rullaa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = array('Tuplaklikkaus zoomaus',
                                                                            'Lisää funktion zoomata käyttäen tuplaklikkausta.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox']     = array('Zoombox [Shift + Click]',
                                                                            'Kyky vetää laatikon zoomiin hiiren kanssa painaen SHIFT näppäintä.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode']    = array('Kierrä karttaa näppäimillä [Alt + Click]',
                                                                            'Kyky kiertää (ja zoomata) karttaa hiiren avulla samaan aikaan painaen ALT näppäintä.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic']     = array('Kinetic scrollaaminen panoroinnin jälkeen hiirellä',
                                                                            'Scrollaus jatkuu hitaasti hiiren painamisen jälkeen kunnes se pysähtyy.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav']             = array('Kosketus navigointi',
                                                                            'Salli kosketusnavigointi kartalla (Vaatii kosketusnäytön)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav']          = array('Näppäimistöllä navigointi',
                                                                            'Navigoi kartalla näppäimistön kanssa (nuolinäppäimet panorointi, zoomaus "+" ja "-" näppäin.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['nav_history']           = array('Navigointi historia',
                                                                            'Luo "seuraava" ja "edellinen" napit, samanlaisia kuin Internet-selaimissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap']           = array('Yleiskuvakartta',
                                                                            'Lisää napin alemman oikealle kartan nurkkaan, mikä sitten kun painetaan, näyttää yleiskuvakartan.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline']             = array('Skaalaus asteikko',
                                                                            'Näyttää linjan, joka demonstroi kartan mittakaavan.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition']         = array('Hiiren koordinaatit',
                                                                            'Näyttää hiiren nykyisen sijainnin GEO koordinaatit.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink']             = array('Permalink',
                                                                            'Näyttää linkin joka edustaa nykyistä kartan tilaa, joka voi olla bookmarkattu tai lähetetty E-Maililla esimerkiksi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param']   = array('Käytä GET-parametriä permalink-arvoja varten',
                                                                            'Jos haluat käyttää GET-parametriä permalinkkiä varten URL-hashin sijan niin voit nimetä sen tästä.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel']             = array('Näytä zoomlevel',
                                                                            'Näyttää nykyisen zoomlevelin.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen']            = array('Kokonäyttö kontrolli',
                                                                            'Näyttää painikkeen joka vaihtaa selaimen kokonäyttöön (HTML5). Varoitus: tämä ei ole tuettu jokaisessa selaimessa!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard']             = array('Ota käyttöön Starboard',
                                                                            'Aktivoi starboard voidaksesi muuttaa pohjakerroksia ja päällyskerroksia.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open']        = array('Avaa starboard',
                                                                            'Aluksi avaa starboardin.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label']       = array('Starboard titel',
                                                                            'Oletus "Starboard"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div']         = array('DIV  Starboardia varten',
                                                                            'Anna tunnus olemassaolevasta DIV elementistä jos haluat laittaa Starboardin muualle sivullasi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter']      = array('Activate starboard filter',
                                                                            'Toggle search field for starboard content.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button']      = array('Activate Button for Starboard',
                                                                            'Creates a Button in order to show and hide all elements in the starboard with one click.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all']           = array('Cluster over all layers',
                                                                            'Clusters all layers. Overwrites options of the structures');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance']      = array('Cluster distance',
    'Cluster distance (default 20px)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor']     = array('Fill color',
                                                                            'Select the fill color of the cluster bubble.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor']     = array('Font color',
                                                                            'Select the font color of the cluster bubble.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom']          = array('Maximal zoom',
                                                                            'Select the maximal zoomlevel. The cluster is splitted on click afterwards ');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher']     = array('Näytä pohjakerroksen-vaihtaja',
                                                                            'Näytä pohjakerros-vaihtaja jotta voit muuttaa pohjakerrokset.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'] = array('Kuvaus pohjakerroksista starboardissa',
                                                                                'Oletus: "Base layer"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher']         = array('Näytä kerroksen vaihtaja',
                                                                            'Näytä kerroksen vaihtaja jotta voit muuttaa pohjakerrokset.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label']   = array('Kuvaus kerroksista starboardissa',
                                                                            'Oletus "Overlays"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool']           = array('Mittaus työkalut',
                                                                            'Näyttää painikkeen joka aktivoi työkalut etäisyyksien ja alueiden mittaamiseen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule']             = array('Asteikkolevy',
                                                                            'Näyttää painikkeen mikä aktivoi asteikkolevyn joka visualisoi leveyden ja pituuden kartalla..');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor']                = array('Näytä editori kartalla',
                                                                            'Näyttää painikkeen, joka aktivoi editorin piirtmään sijainteja, viivoja ja alueita kartalle.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['libsource']             = array('OpenLayers kokoelma',
                                                                            'Valitse mistä haluat ottaa OpenLayers JavaScript kokoelman.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['imagepath']             = array('Käyttäjämääritelty OpenLayers kuva polku (valinnainen)',
                                                                            'Vain kun käytetään oletus teemaa: Aseta polku omaan OpenLayera /img/ hakemistoon siltä varalta jos haluat käyttää userdefined kuvakkeita. HUOMIO: Tämä asetus ei muuta kuvakkeita OpenLayers /themes/img/directory, jonka voit vaihtaa käyttäen CSS:sää!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow']        = array('Avaa linkkejä uusiin ikkunoihin',
                                                                            'Älä avaa linkkejä samaan ikkunaan, mutta näytä linkatut sivut uudessa ikkunassa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on']          = array('Avaa linkkejä',
                                                                            'Valitse mihin hiiren toiminta pitäisi avata, jos linkki on määritelty.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups']          = array('Popuppeja hiiren hoverilla',
                                                                            'Näytä popup kun hiiren osoitin lepää sijainnin kohdallla.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay']     = array('Hiiren hoverin popupit pysyvät auki',
                                                                            'Popupit jotka ovat avattu hiiren hoverilla eivät ole suljettu kun hiiren osoitin lähtee sijainnista.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution']           = array('Attribuutio',
                                                                            'Näyttää attribuution. Deaktivoi vain kun olet varma, että se on sallittua.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = array('Näytä aluksi kokoontaitettavat',
                                                                            'Kokoontaita attribuutio oletusarvoisesti. Muuten Attribuutti on näkyvissä kun tullaan sivulle, mutta silti kokoontaitettavissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = array('Näytä con4gis-logo',
                                                                            'Näyttää con4gis-logon kartalla. Voit ottaa sen pois, mutta me arvostaisimme sitä, jos mainitsisit con4gis eri paikoissa sivullasi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution']       = array('DIV attribuutti',
                                                                            'Laita olemassaoleva tunnus DIV elementistä jos haluat laittaa attribuutin kartan ulkopuolelle.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution']       = array('Lisä- attribuutti',
                                                                            'Tämä teksti on lisätyy generoivaan attribuuttiin. Deaktivoi vain jos olet varma, että se on sallittua.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch']             = array('Näytä etsi (search / router)',
                                                                            'Aktivoi syöttökentän etsimispaikkoihin.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine']      = array('Hakukone',
                                                                            'HUOMIO! Huomioi rajoitukset jotka saattavat koskea valittuun palveluntarjoajaan. Jos olet päättänyt käyttää custom URL, muista lisätä attribuutti tarjoaajaan jos se ei ole sinun omalla palvelimellasi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show']        = array('Show search area',
                                                                            'Shows the search button and input field on map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url']            = array('Custom hakukone-URL',
                                                                                            'URL joka johtaa hakukoneeseen.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution']    = array('Custom hakukone-attribuutti',
                                                                                            'TÄRKEÄ! Tekijänoikeusteksti hakukoneen tarjoajalle.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key']         = array('Avain hakukoneille',
                                                                            'Jos valittu hakukone tarvitsee avaimen palvelun käyttöön niin voit kirjoittaa sen tähän.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results']     =array('Search with a list of results',
                                                                           'Shows the results as a list');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div']         = array('DIV etsimiselle',
                                                                            'Anna olemassaoleva tunnus DIV elementistä jos haluat laittaa hakukentän muualle kuin sivullesi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto']      = array('Zoomaustaso',
                                                                            'Zoomaustaso asettaa haun jälkeen esim. 16');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds']  = array('Zoomaamalla rajoja',
                                                                            'Zoomaa alueen rajoille, jos hakupalvelu antaa (Nominatim).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate']     = array('Ota käyttöön animaatio',
                                                                            'Lennä löydetty sijainti.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult']  = array('Merkkaa löydetty sijainti',
                                                                            'Korosta löydetty sijainti lyhyen ajan.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = array('Näytä hakupalvelun attribuutit',
                                                                            'Lisää hakupalvelun (Nominatiimin) attribuutin. Deaktivoi vain jos olet varma, että se on sallittua.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker']             = array('Näytä geopicker (frontend)',
                                                                            'Lisää geopickerin frontendista backendiin poimimaan koordinaatteja. Voidaan käyttää syöttökenttien kanssa mukautetuissa muodoissa');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx']      = array('Muodosta kenttä GEO leveysasteelle',
                                                                            'Syöttökentän tunnus, johon leveysasteen valittu paikka tallennetaan.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy']      = array('Muodosta kenttä GEO pituusasteelle',
                                                                            'Syöttökentän tunnus, johon valitun paikan pituusaste on tallennettu.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv']   = array('DIV geopickerille',
                                                                            'Anna tunnus olemassaolevalle DIV elementille, johon haluat laittaa geopicking kentät. Voidaan määritellä esim. HTML lomakekentässä.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = array('Näytä geocoding palvelun attribuutit',
                                                                            'Adds an attribution of the search service (Nominatim).  Deactivate only when you are sure it is allowed.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div']            = array('DIV kartalle',
                                                                            'Anna tunnus olemassaolevalle DIV elementille jos haluat laittaa kartan muualle kuin siullesi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url']          = array('Overpass-API:n URL (<a href="http://overpass-api.de/" target="_blank">Website of the default API-Server provider</a>)',
                                                                            'Oletus: http://overpass-api.de/api/interpreter');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router']                = array('Aktivoi reititys (Tarkista <a href="https://github.com/DennisOSRM/Project-OSRM/wiki/Api-usage-policy" target="_blank">Käyttöehdot</a> oletus API:lle!)',
                                                                            'Lisää ylimääräisen napin reitityksen toiminnallisuuden aktivoimiseksi.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url']   = array('Vaihtoehtoinen URL OSRM-API:lle',
                                                                            'Oletus: http://router.project-osrm.org/viaroute');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution']    = array('Ohita OSRM attributio',
                                                                            'Ohita attribuutti vain, jos käytät toista API-palvelinta, tai jos laitat attribuutin jonnekkin näkyvästi muualle sivullasi!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_point']   = array('Sijaintityylit POIs:lle',
                                                                            'Valitse sijaintityylit, joita voidaan käyttää editorissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_line']    = array('Sijaintityyli viivoille',
                                                                            'Valitse sijaintityylit, joita voidaan käyttää editorissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_polygon'] = array('Sijaintityylit polygoneille',
                                                                            'Valitse sijaintityylit joita voidaan käyttää editorissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_circle']  = array('Location styles for circles',
                                                                            'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_freehand'] = array('Location styles for freehand drawing',
                                                                             'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_vars']           = array('Ylimääräiset kentät',
                                                                            'Kenttiä jotka ovat saatavilla POIs:lle, viivoille ja polygoneille voidaan ratkaista käyttämällä ${key} popupissa, labelissa ja vihjetekstissä.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_show_items']     = array('Näytä muun kartan rakenteen kohteet muokattaessa',
                                                                            'Ruksita tämä jos et halua piilottaa muita kartan rakenteen kohteita editorissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_helpurl']        = array('Ohje sivun URL',
                                                                            'Jos annat URL tässä, apulinkki näytetään editorin sisällä, joka avaa annetun URL.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit']      = array('Rajoitus isojen checkboxien listojen optimoimiselle',
                                                                            'Määrittää, kuinka paljon pääsyjä pitää olla sen jälkeen kun checkbox-lista muunnetaan valituille kentille (0 = ei muunna)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = array('Selection of API-version','Old API only works with own servers');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = array('Locstyle for start-location', '\'Locstyle for start-location');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = array('Locstyle for goal-location', '\'Locstyle for goal-location');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = array('Locstyle for on-the-fly hints', '\'Locstyle for on-the-fly hints');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = array('Locstyle for interim-locations', '\'Locstyle for interim-locations');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = array('Alternative routes','Do you want to allow alternative routes?');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = array('Use cesium', 'With cesium you can transform the 2D map in a globe.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always']  = array('Use cesium always', 'Do you want to use cesium for every basemap? If not you can activate single maps in the basemap settings.');

/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK']   = 'Yksittäinen hiiren napsautus';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL']   = 'Hiiren tuplanapsautus';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['dark']            = 'Synkkä teema (muokattu)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['modern']          = 'Moderni Trans teema';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['metro']           = 'Metro Teema';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['blue']            = 'Sininen teema (Perustuu muokattuun synkkään teemaan)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['red']             = 'Punainen teema (Perustuu muokattuun synkkään teemaan)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Oletus-teema';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['0'] = 'Off';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['1'] = 'Rotate map';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['2'] = 'Rotate and zoom map';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['0'] = 'Off';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['1'] = 'with World-Icon (to 0 coordinate and min zoom)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['2'] = 'with Home-Icon (to configured map zoom)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['3'] = 'with Position-Icon (to browser/device position)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim by Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank">käyttökäytäntö</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim by MapQuest (<a href="http://developer.mapquest.com/web/products/open/nominatim" target="_blank">käyttökäytäntö</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Mukautettu';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis mapservices (<a href="https://con4gis.org/kartendienste.html" target="_blank">usage policy</a>)';


/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new']        = array('Uusi kartan profiili', 'Luo uusi kartan profiili');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit']       = array('Muokkaa kartan profiilia', 'Muokkaa kartan profiilia ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy']       = array('Monista kartan profiilia', 'Monista kartan profiilia ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete']     = array('Poista kartan profiili', 'Poista kartan profiili ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show']       = array('Yksityiskohdat', 'Näytä kartan profiilin yksityiskohdat ID %s');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend']        = 'Yleinen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend']      = 'Peruskerrokset';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend']       = 'Sijainnintyylit';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend']     = 'Kartan navigaatio';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend']      = 'Starboard asetukset';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend']    = 'Kartan tietoa';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['expert_legend']         = 'Expertin asetukset';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['misc_legend']           = 'Sekalainen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend']      = 'Etsi & Router';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_legend']      = 'Geopicker';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_legend']         = 'Reititin (OSRM)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_legend']         = 'Editorin asetukset';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['backend_legend']        = 'Backend asetukset';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['info_legend']           = 'Information page';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend']          = 'Click settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend']         = 'Cesium settings';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Editorin label';
