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
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['name']             = array('Nimi', 'Kirjoita sijainnin tyylin nimi.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['styletype']        = array('Tyylin tyyppi','Valitse tyylin tyyppi jota käytetään.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokecolor']      = array('Stroken väri','Määritä stroke väri.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokewidth']      = array('Stroken leveys','Valitse stroke leveys.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokeopacity']    = array('Stroken opasiteetti','Laita stroken opasiteetti %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillcolor']        = array('Täytön väri','Valitse täytön väri.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillopacity']      = array('Täytön opasiteetti','Laita täytön opasiteetti % täällä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['radius']           = array('Kantomatka','Laita kantomatka pikseleinä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon']          = array('OpenLayers Kuvake','Valitse sisäisestä OpenLayers kuvakkeista.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon_size']     = array('Kuvakkeen koko','Kuvakkeen koko. Skaalattu kun tarvittu.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon_offset']   = array('Offset kuvakkeelle pikseleinä (X/Y)','offset "0" tarkoittaa että ylempi vasen nurkka on printattu sijaintiin. X>0 => Siirtää kuvaketta oikealle. X<0 => vasemmalle. Y>0 => alas. Y<0 => ylös.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_src']         = array('Kuvakkeen lähde','Valitse kuvake joka näytetään listalta sijainnissa .');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_size']        = array('Kuvakkeen koko','Kuvakkeen koko. Skaalataan kun tarvitaan.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_scale']       = array('Scale icon','1.0 = 100%');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_offset']      = array('Offset kuvakkeelle pikseleinä (X/Y)','offset "0" means, tarkoittaa että ylempi vasen nurkka on printattu sijaintiin. X>0 => Siirtää kuvaketta oikealle. X<0 => vasemmalle. Y>0 => alas. Y<0 => ylös.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_opacity']     = array('Kuvakkeen opasiteetti','Laita kuvakkeen opasiteetti %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onhover_locstyle'] = array('Sijainnin tyyli hiiren hoverille','Valitse sijainnin tyyli, jota käytetään, kun hiiri lepää sijainnin kohdalla.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['style_function_js']   = array('Code for StyleFunction','Enter code for your custom OpenLayers StyleFunction (Enter only the function\'s body. Your function should change the feature\'s style or return an instance of ol.style)');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows']      = array('Aktivoi rivin suuntanuolet','Nuolia riville');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_back'] = array('Näytä back nuolet','Näyttääksesi nuolia molemmille suunnille.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_radius']= array('Nuolipäiden kantomatka (pixel)','Nuolipäitä näytetään kolmio symboleina(">"). Laita kantomatka pikseleinä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_minzoom'] = array('Min. zoomlevel','Näyttää nuolenpäät vain, kun zoomlevelillä on annettu arvo. Jos tämä arvo on alle nolla, nuolenpäät näkyy vain, jos ne ei ole suurempia kuin niiden arrowlinet. (0=näytä aina, -1=auto)');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label'] 		 	 = array('Label', 'Label näytettäväksi kartalla paikkamerkinnän kanssa. Ohittaa labelin määriteltynä kartan rakenteen kohteessa.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_hor']  = array('Horisontaalinen linjaus','Määritä horisontaalisessa linjauksessa labelin suhteellinen sijainti.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_ver']  = array('Pystytasaus ','Määritä pystytasauksen label sijaintiin.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_offset']     = array('Offset labelille pikseleinä (X/Y)','Laita offset labelille pikseleinä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_family']      = array('Fontin family','fontin family labelille annettavaksi kuten CSS:ssä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_color']       = array('Fontin väri','Fontin väri labelille.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_size']        = array('Fontin koko','Fontin koko labelille, jotka on annettava kuten CSS:ssä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_color'] = array('Label ääriviivan väri','Anna ääriviivojen väri labelille jos halutaan.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_width'] = array('Label ääriviivan leveys','Anna ääriviivän leveys labelille jos halutaan.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_opacity']     = array('Fontin opasiteetti','Fontin opasiteetti labelille %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_style']       = array('Fontin tyyli','Fontin tyyli labelille annettavaksi kuten CSS:ssä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_weight']      = array('Fontin paino','Fontin paino labelille annettavaksi kuten CSS:ssä.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['tooltip'] 		 = array('Tooltip for icons', 'Tooltip to be displayed when mouse pointer rests on the location for a while. Overrides tooltip defined at map structure items.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_info'] 		 = array('Popup tietoa', 'Tietoa näytettäväksi popupissa sen jälkeen kun hiirellä klikataan sijaintia tai kun hiiri laitetaan sijainnin kohdalle (Riippuen kartan profiilin asetuksista.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_kind']       = array('Popup laji','Valitse mitä popup lajia käytetään.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_size']       = array('Popup koko','Anna popupin koko.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_offset']     = array('paikaltaa popup:n vuoksi pikselissä (X/Y)','"0":n pikselin offset tarkottaa sitä, että vasen yläkulma on tulostettu sijaintiin. X>0 => siirtää popupin oikealle. X<0 => vasemalla. Y>0 => alas Y<0 => ylös');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onclick_zoomto'] 	 = array('Hiirtä klikkaamalla zoomaa zoom leveliä', 'Laita zoom level, johon zoomata kun kohdetta on klikattu. Toimii vain kun ei ole suoraa linkkiä. Kumoaa asetuksen joka on määriteltynä kartan rakennelma kohteessa.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['minzoom'] 		 = array('Min. zoomaus', 'Anna vähintään minimi zoom level siihen mitkä kohteet näkyvät. 0 tarkoittaa että ei rajoitusta. Kumoaa asetuksen joka on määritelty kartan rakenteet kohteissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['maxzoom'] 		 = array('Max. zoomaus', 'Anna vähintään maksimi zoom level siihen mitkä kohteet näkyvät. 0 tarkoittaa että ei rajoitusta. Kumoaa asetuksen joka on määritelty kartan rakenteet kohteissa.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_icon'] 	 = array('Editori kuvake','Kuvaketta käytetään lisäämään enemmän funktionaalisuutta editoriin (korvaa oletus kuvakkeen).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_sort']      = array('Lajittelujärjestys','Järjestys editorissa tähän sijaintityyliin.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_vars']      = array('Muita kenttiä','Kenttiä saatavilla geometrioille tässä sijaintityylissä. Voidaan ratkaista käyttämällä ${key} popupissa, labelissa ja tooltipissä. ');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_collect'] 	 = array('Tuo kaikki geometriat tähän sijaintityyppiin jotka editoidaan yhdessä yhdeksi geometriseksi kokoelmaksi.');

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['point']       = 'Piste';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['square']      = 'Neliö';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['star']        = 'Tähti';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['x']           = 'X';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cross']       = 'Risti';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['triangle']    = 'Kolmio';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['ol_icon']     = 'OpenLayers Sisäinen kuvake';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cust_icon']   = 'Custom kuvake';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker.png']        = 'Punainen merkki';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-blue.png']   = 'Sininen merkki';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-gold.png']   = 'Kultainen merkki';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-green.png']  = 'Vihreä merkki';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['left']              = 'Vasemman labelin sijainti';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['center']            = 'Keskus';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['right']             = 'Oikean labelin sijainti';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['top']               = 'Sijainti labelin yläpuolella';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['middle']            = 'Keski';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['bottom']            = 'Sijainti labelin alla';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['bubble']            = 'Kupla';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cloud']             = 'Pilvi';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['new']        = array('Uuden sijainnin tyyli', 'Luo uusi sijainnin tyyli');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['edit']       = array('Muokkaa sijainnin tyyliä', 'Muokkaa sijainnin tyyliä ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['copy']       = array('Monista sijainnin tyyli', 'Monista sijainnin tyyli ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['delete']     = array('Poista sijainnin tyyli', 'Poista sijainnin tyyli ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['show']       = array('Yksityiskohdat', 'Näytä sijainnin tyylin yksityiskohdat ID %s');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['arrow_legend'] 	= 'Suuntanuolet';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_legend'] 	= 'Label asetukset';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_legend'] 	= 'Popup asetukset';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['zoom_legend']  	= 'Zoom asetukset';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_legend']	= 'Editori asetukset (GeoJSON ja con4gis-Forum)';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Editor label';
