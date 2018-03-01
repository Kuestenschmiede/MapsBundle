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
$GLOBALS['TL_LANG']['tl_c4g_maps']['name'] = array('Nimi', 'Kartan/sijainnin nimi');
$GLOBALS['TL_LANG']['tl_c4g_maps']['profile'] = array('Kartan profiili', 'Valitse kartan profiili, jota käytetään. Kartan profiileja ylläpidetään valitsemalla "Kartan profiilit" "Asettelu" osiossa. Kun mitään karttaa ei määritellä, niin "OpenStreetMap Mapnikkiä" käytetään oletuksena.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['profile_mobile'] = array('Kartan profiili mobiilina', 'Valinnainen: Kartan profiilia käytetään mobiililaitteissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['published'] = array('Julkaistu', 'Määrittää, jos kartta/sijainti on julkaistu.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['is_map'] = array('Käytä karttana', 'Ruksita, jos haluat käyttää karttana.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['mapsize'] = array('Kartan koko (leveys, pituus)', 'Anna kartan koko frontendissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['width'] = array('Kartan leveys', 'Anna kartan leveys frontendissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['height'] = array('Kartan korkeus', 'Anna kartan korkeus frontendissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['margin'] = array('Kartan marginaali', 'Anna kartan marginaali frontendissa.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width'] = array('Kohdista kartan leveys selaimen leveyteen', '.');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_gap'] = array('Oikea väli (px)', '');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_min'] = array('Minimi kartan leveys (px)', '');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_max'] = array('Maksimi kartan leveys (px)', '');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height'] = array('Kohdista kartan korkeus selaimen korkeuteen', '');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_gap'] = array('Pohja väli (px)', '');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_min'] = array('Minimi kartan korkeus (px)', '');
// $GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_max'] = array('Maksimi kartan korkeus (px)', '');
$GLOBALS['TL_LANG']['tl_c4g_maps']['show_locations'] = array('Show all Locations', 'Adjusts the view of the map to fit all locations. Does not work with locations from asynchronous request (e.g. Overpass).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['min_gap'] = array('Minimi väli pikseleinä sijainneista kartan rajoihin', ' Käytä tätä asetusta, kun kuvakkeesi ylittää kartan rajan laajuuden määrittämisen jälkeen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geox'] = array('GEO leveysaste', 'Anna GEO X-koordinaatit (leveysaste, WGS-84) kartan keskustasta.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geoy'] = array('GEO pituusaste', 'Anna GEO Y-koordinaatit (pituus, WGS-84) kartan keskustasta.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom'] = array('Zoomaustaso', 'Anna aluksi näytetyn kartan zoomaustaso.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restrict_area'] = array('Rajoita navigointialue', 'Tämän vaihtoehdon päälle laittaminen antaa sinun määrittää alueen,, jossa käyttäjä ei voi panoroida pois. Myös napsauttamalla zoom paneelin maailma symboolia se zoomaa määritetyn alueen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geox'] = array('GEO leveysaste vasen', 'GEO X-koordinaatit (leveysaste, WGS-84) vasemman alakulmassa rajoitetussa alueessa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geoy'] = array('GEO pituusaste pohja', 'GEO Y-koordinaatit (pituusaste, WGS-84) vasemman alakulmassa rajoitetussa navigointi alueessa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geox'] = array('GEO leveysaste oikea', 'GEO X-koordinaatit (pituusaste, WGS-84) oikeassa yläkulmassa rajoitetussa navigointialueessa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geoy'] = array('Geo pituusaste ylin', 'GEO Y-koordinaatit (pituusaste, WGS-84) oikeassa yläkulmassa rajoitetussa navigointialueessa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['location_type'] = array('Sijainnin tyyppi', 'Valitse kuinka määrittää yksi tai useampi sijainteja. Huomioi, että on mahdollista määrittää useita sijannin kohteita karttaan');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geox'] = array('GEO leveysaste', 'Anna GEO X-koordinaatit (leveysaste, WGS-84) sijainnista.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geoy'] = array('GEO pituusaste', 'Anna GEO Y-koordinaatit (pituusaste, WGS-84) kartan keskustasta.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyle'] = array('Sijainnin tyyli', 'Sijainnin tyyli, joka on määritelty kartan profiilissa, määrittää sijainnin merkkaajan. Ilman sijainnin tyylejä määriteltynä, punainen piste on jokaisessa sijainnissa oletuksena');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_only_in_parent'] = array('Näytä sijaini vain parentin childina', 'Jos et valitse tätä vaihtoehtoa, sijainti näytetään myös jos kohde on näytettynä kartalla.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_label'] = array('Label', 'Merkitse näytettäväksi kartalla sijainnin merkkaajan kanssa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip'] = array('Työkaluohje', 'Työkaluohje näytetään, kun hiiri leijuu sijainnin kohdalla.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip_length'] = array('Length of the tooltip', 'Number of characters, before the tooltip is cut of.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['enablePopup'] = array('Activate popup', 'With the checkbox you can enable the popup for this structure element.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_info'] = array('Popup tietoa', 'Tiedot näytetään popupissa sen jälkeen, kun hiirellä ollaan napsautettu sijaintia tai kun hiiri leijuu sijainnin kohdalla (Riippuen kartan profiili asetuksista).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_extend'] = array('Laajenna popup tietoa foorumi viestissä', 'Antaa kyvyn renderöidä ylimääräisen popup tiedon foorumiviestissä.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['routing_to'] = array('Lisää reititys linkkejä popuppiin', 'Lisää linkkejä reititys-vaihtoehtoja popuppiin. Toimii vain, kun reititys on aktivoitu kartan profiilissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_async'] = array('Load Popup Information later', 'Enables the loading of popup information during runtime.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_linkurl'] = array('Suora linkki', 'Anna URL (http://) tai napsauta symboolia valitaksesi contao sivun. Jos määrittelet linkin, niin käyttäjä menee linkkiin hiiren napsautuksella tai hiiren tupla napsautuksella (riippuen kartan profiiliasetuksista) ');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_onclick_zoomto'] = array('Hiireä napsauttamalla zoomaus tasolle', 'Anna zoomaustaso siihen, mitä zoomataan, kun klikataan kartan rakenne kohdetta. Toimii vain, kun ei ole suoraa linkkiä.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_minzoom'] = array('Minimi zoomaustaso', 'Anna minimi zoomaustaso siihen, mitkä kohteet näkyvät. 0 tarkoittaa, että ei rajoitusta.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_maxzoom'] = array('Maksimi zoomaustaso', 'Anna maksimi zoomaustaso siihen, mitkä kohteet näkyvät. 0 tarkoittaa, että ei rajoitusta.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['async_content'] = array('Load location asynchronous', 'Simple locations are loaded asynchronous in order to enhance initial performance.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_source'] = array('Lähdetaulukko', 'Valitse jokin käytettävistä lähdetaulukoista. Pystyt lisäämään omia taulukoita, katso config.php.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid'] = array('Parent taulukon entry', 'Jos parent taulukko on määritelty kokoonpanoon, niin valitse entry josta haluat sijainnit ottaa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid1'] = array('Second entry of parent table (optional)', 'If a parent table is defined in the configuration, then select the entry you want to take the locations from.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_labeldisplay'] = array('Labelin näyttö', 'Määrittele jos label on näkyvissä ja miten merkintä label koostuu kun niitä on enemmän kuin yksi kohde samassa geo sijainnissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_tooltipdisplay'] = array('Tooltip display', 'Define if the tooltip is displayed and how the tooltip is composed when there is more than one item at the same geo location.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_directlink'] = array('Luo suora linkki', 'Jos valittu, niin käyttäjä voi hypätä linkattuun sisältöön hiiren napsautuksella tai tuplanapsautuksella (riippuen kartan profiilin asetuksesta).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_force_target_blank'] = array('Avaa popup-linkkejä uudessa ikkunassa', 'Pakota linkit popupissa aina avaamaan uuden ikkunan/tabin (Tämä riippuu käyttäjän selain asetuksista).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_whereclause'] = array('Kunto', 'Valitse lisäehto, joka on lisättävä WHERE lausekkeeseen luodussa SQL lausunnossa rajoittamaan tulosta tarvittaessa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_orderby'] = array('Järjestely', 'Määrittele ylimääräinen MySQL-järjestys kontrolloimaan kohteiden lajittelua.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_filter_alias'] = array('Näytä vain nykyinen entry', 'Aseta tämä vain näyttääksesi taulukon entryn sijainnin kanssa joka vastaa nykyistä "PageID:tä" sivuilla jotka hostaavat "Reader" moduuleja. Hyödyllisiä esim. jos haluat sijoittaa kartan yhteen tapahtumat lukijan kanssa, joka näyttää vain nykyiset tapahtumat. Alias kentän on oltava käytettävissä, jos käytät tätä vaihtoehtoa!');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_file'] = array('Tiedosto', 'Jos sinulla on palvelimen tiedosto sisältäen sinun dataa, valitse tiedosto täällä.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_url'] = array('URL', 'Jos haluat, tiedot voidaan ladata URL kautta, kirjoita se tähän.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_content'] = array('Data', 'Anna tiedot suoraan tähän kenttään tallentaaksesi sen tietokantaan.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_projection'] = array('Projektio');
$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_request'] = array('Pyyntö julkea API (XML-Format) läpi', 'Pyyntö lähetetään AJAX:lla kohti välityspalvelinta (C4GOverpass.php) kohti Overpass API. Muoto: näe http://www.overpass-api.de.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_bbox_limited'] = array('Pyyntö ylikulkea API muokkausalueen läpi.', 'Sends the request on change of the displayed area (bounding box). The request itself has to contain the placeholder "(bbox)", which will be replaced by a "bbox-query" tag on runtime.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_forcenodes'] = array('Muunna tapoja solmuissa', 'Muuntaa OSM-tavat solmuiksi. Erityisen hyödyllisiä kun POI:ssit ovat OSM datan sisällä, jotkut edustetuilla tavoilla (rakennusmuoto), muut solmuina.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_additionalgeometries'] = array('Näytä ylimääräiset geometriat', 'OSM-datalla joskus on ylimääräisiä geometrioita kuten "entryjä". Ruksita tämä, jos haluat näyttää ne myös.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_layername'] = array('Kerroksen nimi', 'Anna nimi, jos haluat tämän kerroksen olevan valittavissa kerroksen vaihtajassa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_child'] = array('Hide childs in starboard', 'Hide this elements` childs. They are activated trough this element.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['data_hidelayer'] = array('Piilota kerros', 'Ruksita tämä, jos et halua näyttää tätä kerrosta oletuksena.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['showPopupOnActive'] = array('Show Popup on active layer', 'Automatically activates the Popup, if the layer is activated.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['forums'] = array('Foorumit','Valitse kartalta foorumit käytössä.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_jumpto'] = array('Foorumin sivu','Valitse sivu, joka hostaa con4gis-Foorumeita.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_reassign_layer'] = array('Määritä kerros','Menetelmä liikkuvien foorumin luodun kartan merkinnät muihin kerroksiin.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation'] = array('Geolocation','Suorita soitto HTML5 Geolocation API:hin selvittääksesi nykyisen sijainnin.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation_zoom'] = array('Geolocation - zoomlevel','Zoom to this zoomlevel after successful determination of the current location.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['include_sublocations'] = array('Sisällytä elementin sijainnit', 'Kun ei ruksitettu, vain ensimmäisen tason elementit näkyvät kartalla.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['link_id'] = array('Kartan rakenne kohde', 'Kohde linkattavaksi karttaan.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['protect_element'] = array('Suojele tätä entryä', 'Tee tästä entrystä näkyvä vain valituille ryhmille.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['permitted_groups'] = array('Sallitut ryhmät', 'Ryhmät, joiden entry on näkyvissä.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['use_specialprofile'] = array('Aktivoi erikoisprofiili', 'Aktivoi erikois profiili valituille jäsenrryhmille.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile'] = array('Erikoisprofiili', 'Profiili jota haluat käyttää valituille ryhmille.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_mobile'] = array('Erikoisprofiili mobiili', 'Valinnainen: Erityinen kartta profiili jota käytetään mobiililaitteissa.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_groups'] = array('Ryhmät', 'Ryhmät, joille erikoisprofiili on aktiivinen.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['be_optimize_checkboxes_limit']    = array('Rajoitus optimointia varten suuremmille checkbox-listoille',
                                      'Määrittää kuinka paljon entryjä pitää olla sen jälkeen, kun checkbox-listat muunnetaan valituiksi kentiksi (0=älä muunna)');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_locations'] = array('Cluster sijainnit','BCluster sijainnit');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_distance'] = array('Cluster etäisyys','Cluster etäisyys (oletus 20px)');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fillcolor'] = array('Fill color', 'Select the fill color of the cluster bubble.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fontcolor'] = array('Font color', 'Select the font color of the cluster bubble.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_zoom'] = array('Maximal zoom', 'Select the maximal zoomlevel. The cluster is splitted on click afterwards ');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_popup'] = array('Popup for clusters', 'Instead of splitting the cluster, a shared popup is openend on click.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom_locations'] = array('Zoom to locations','On activating the locations in the starboard, the view is focused on the locations and potential childrens. This does not work with data from asynchronous requests (e.g. Overpass).');
$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_location'] = array('Hover on locations','Change the location style on hover above a location.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_style'] = array('Location style on hover','Pick the location style to show on hover.');
$GLOBALS['TL_LANG']['tl_c4g_maps']['popupType'] = array("Popup tyyppi","Kuinka luoda popup informaatiota");
$GLOBALS['TL_LANG']['tl_c4g_maps']['popupTemplate'] = array("Popup malli","Lataa popup informaatiota mallista");
$GLOBALS['TL_LANG']['tl_c4g_maps']['cssClass'] = array("CSS class", "css class for starboard listelements");

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['new']    = array('Uusi kartan rakenne kohde', 'Luo uusi kartan rakenne kohde');
$GLOBALS['TL_LANG']['tl_c4g_maps']['edit']   = array('Muokkaa kartan rakenne kohdetta', 'Muokkaa kartan rakenne kohdetta ID %s');
$GLOBALS['TL_LANG']['tl_c4g_maps']['copy']   = array('Monista kartan rakenne kohdetta', 'Monista kartan rakenne kohdetta ID %s');
$GLOBALS['TL_LANG']['tl_c4g_maps']['copyChilds']   = array('Monista kartan rakenne kohdetta alakohteilla', 'Monista kartan rakenne kohde ID %s alakohteella');
$GLOBALS['TL_LANG']['tl_c4g_maps']['cut']    = array('Siirrä kartan rakenne kohdetta', 'Siirrä kartan rakenne kohdetta ID');
$GLOBALS['TL_LANG']['tl_c4g_maps']['delete'] = array('Poista kartan rakenne kohde', 'Poista kartan rakenne kohde ID %s');
$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'] = array('Julkaise/älä julkaise kartan rakenne kohdetta', 'Julkaise/älä julkaise kartan rakenne kohdetta ID %s');
$GLOBALS['TL_LANG']['tl_c4g_maps']['show']   = array('Yksityiskohdat', 'Näytä kartan rakenne kohteen yksityiskohdat ID %s');

/**
 * Misc
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'] = 'Sisäinen oletus (OpenStreetMap)';

/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['CENTERZOOM'] = 'Anna keskus ja zoomaustaso';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['LOCATIONS'] = 'Näytä kaikki sijainnit';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['none']      = 'Ei sijaintia';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['single']    = 'Yksittäinen GEO koordinaatti';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['table']     = 'Toinen taulukko';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['gpx']       = 'GPX';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['kml']       = 'KML';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['geojson']   = 'GeoJSON';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['osm']   	  = 'OSM';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['overpass']  = 'Overpass API pyyntö (OSM)';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['link']      = 'Linkki toisen kartan rakenteen kohteeseen';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['c4gForum']  = 'Foorumit con4gis-foorumilta';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['OFF']       = 'Ei näyttöä';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['1ST']       = 'Näytä yksi kohde';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['1ST_MORE']  = 'Näytä yksi kohde ja (...) jos on lisää';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['1ST_COUNT'] = 'Näytä yksi kohde ja (Laske) jos on lisää';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['ALL']       = 'Näytä kaikki kohteet';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['MERC']      = 'Spherical Mercator (EPSG:900913/EPSG:3857)';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['WGS84']     = 'WGS-84 (EPSG:4326)';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['NO']       = 'Älä liikuta';
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['THREAD']   = 'Liikuta missä kerroksennimi=thread otsikko';

$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType']['text'] = "Teksti";
$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType']['template'] = "Malli tiedosto";
//$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType']['con4gis'] = "con4gis popup";

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['0'] = 'OSRM (API 4.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['1'] = 'OSRM (API 5.x)';

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_maps']['general_legend']		= 'Yleinen';
$GLOBALS['TL_LANG']['tl_c4g_maps']['map_legend']		    = 'Kartta';
$GLOBALS['TL_LANG']['tl_c4g_maps']['location_legend']	    = 'Sijainti';
$GLOBALS['TL_LANG']['tl_c4g_maps']['protection_legend']	    = 'Pääsyn suojaus';
$GLOBALS['TL_LANG']['tl_c4g_maps']['expert_legend']	    	= 'Expertti';
$GLOBALS['TL_LANG']['tl_c4g_maps']['backend_legend']        = 'Backend asetukset';
