<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');

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
 * Table tl_c4g_map_baselayers
 */
$GLOBALS['TL_DCA']['tl_c4g_map_baselayers'] = array
(

    // Config
    'config' => array
    (
        'label'                       => $GLOBALS['TL_LANG']['MOD']['c4g_map_baselayers'][0],
        'dataContainer'               => 'Table',
        'ctable'                      => array('tl_c4g_map_overlays'),
        'enableVersioning'            => true,
        'onsubmit_callback'             => array(
            array('\con4gis\CoreBundle\Resources\contao\classes\C4GAutomator', 'purgeApiCache')
        ),
        'sql'                         => array
        (
            'keys' => array
            (
                'id' => 'primary',
                'pid' => 'index'
            )
        ),
    ),

    // List
    'list' => array
    (

        'sorting' => array
        (
            'mode'                    => 5,
            'icon'                    => 'bundels/con4gisMapsBundle/images/core.png',
            'panelLayout'             => 'search',
            'paste_button_callback'   => array('tl_c4g_map_baselayers', 'pasteElement')
        ),
        'label' => array
        (
            'fields'                  => array('name','display_name','minzoomlevel','maxzoomlevel'),
            'format'                  => '<span style="color:#303E4D"><b>%s</b></span> -> %s [˅%s,˄%s]',
            'label_callback'          => array('tl_c4g_map_baselayers', 'addIcon')
        ),
        'global_operations' => array
        (
            'all' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            )
        ),
        'operations' => array
        (
            'edit' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['copy'],
                'href'                => 'act=paste&amp;mode=copy&amp;childs=1',
                'icon'                => 'copy.gif',
                'attributes'          => 'onclick="Backend.getScrollOffset();"',
            ),
            'cut' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cut'],
                'href'                => 'act=paste&amp;mode=cut&amp;childs=1',
                'icon'                => 'cut.gif',
                'attributes'          => 'onclick="Backend.getScrollOffset();"',
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            ),
            'overlays' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['overlays'],
                'href'                => 'table=tl_c4g_map_overlays',
                'icon'                => 'bundles/con4gismaps/images/be-icons/overlays.png'
            ),
        )
    ),


    // Palettes
    'palettes' => array
    (
        '__selector__'                => array('provider','osm_style','protect_baselayer'),
        'default'                     => '{general_legend},name,display_name,provider,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'osm'                         => '{general_legend},name,display_name,provider,osm_style,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'mapbox'                      => '{general_legend},name,display_name,provider,mapbox_type,app_id,api_key,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'here'                        => '{general_legend},name,display_name,provider,here_type,app_id,api_key,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'thunder'                     => '{general_legend},name,display_name,provider,thunderforest_type,api_key,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
//        'google'                      => '{general_legend},name,display_name,provider,google_style,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
//                                         '{protection_legend:hide},protect_baselayer;',
        'bing'                        => '{general_legend},name,display_name,provider,bing_style,bing_key,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'klokan'                      => '{general_legend},name,display_name,provider,klokan_type,url,api_key,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'wms'                         => '{general_legend},name,display_name,provider,wms_url,wms_params_layers,wms_params_version,wms_params_format,wms_params_transparent,wms_gutter,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
        'owm'                         => '{general_legend},name,display_name,provider,app_id,api_key,attribution,minzoomlevel,maxzoomlevel;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer;',
    ),




    // Subpalettes
    'subpalettes' => array
    (
        'protect_baselayer' => 'permitted_groups',
        'osm_style_Mapnik' => '',
        'osm_style_CycleMap' => '',
        'osm_style_German' => '',
        'osm_style_GermanTransport' => '',
        'osm_style_TransportMap' => '',
        'osm_style_LandscapeMap' => '',
        //'osm_style_MapQuestOpen' => '',
        'osm_style_Toner'=> '',
        'osm_style_Terrain'=> '',
        'osm_style_Watercolor'=> '',
        'osm_style_osm_custom' => 'osm_style_url1,osm_style_url2,osm_style_url3,osm_style_url4,osm_keyname',
    ),

    // Fields
    'fields' => array
    (
        'id' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ),
        'pid' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'sorting' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'tstamp' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'name' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['name'],
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>254, 'tl_class'=>'w50'),
            'sql'                     => "varchar(254) NOT NULL default ''"
        ),

        'display_name' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['display_name'],
            'exclude'                 => true,
            'search'                  => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254, 'tl_class'=>'w50'),
            'sql'                     => "varchar(254) NOT NULL default ''"
        ),

        'provider' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider'],
            'filter'                  => true,
            'inputType'               => 'select',
            'default'                 => 'osm',
            'options'                 => array('osm' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm'],
                                               'mapbox' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox'],
                                               'here' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here'],
                                               'thunder' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'],
                                               //'google' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google'],
                                               'bing' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing'],
                                               'klokan' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan'],
                                               'wms' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms'],
                                              ),
            'eval'                    => array('submitOnChange'=>true, 'tl_class'=>'clr'),
            'sql'                     => "varchar(10) NOT NULL default ''"
        ),

        'osm_style' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'Mapnik',
            'options'                 => array('Mapnik'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'],
                                               #'CycleMap'        => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_cycle'],
                                               'German'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german'],
                                               'GermanTransport' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german_transport'],
                                               #'TransportMap'    => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_transport'],
                                               #'LandscapeMap'    => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_landscape'],
                                               // 'MapQuestOpen'    => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapquestopen'],
                                               'Toner'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_toner'],
                                               'Terrain'         => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_terrain'],
                                               'Watercolor'      => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_watercolor'],
                                               'osm_custom'      => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_custom']
                                               ),
            'eval'                    => array('submitOnChange'=>true, 'tl_class'=>'clr'),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'osm_style_url1' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url1'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'osm_style_url2' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url2'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'osm_style_url3' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url3'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'osm_style_url4' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url4'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'osm_keyname' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_keyname'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'mapbox_type' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapbox_type'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'Mapbox',
            'options'                 => array(
                'Mapbox'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox'],
                'MapboxClassic'       => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic'],
            ),
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'klokan_type' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['klokan_type'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'OpenMapTiles',
            'options'                 => array(
                'OpenMapTiles'        => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_openmaptiles'],
                'basic'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_basic'],
                'bright'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_bright'],
                'darkmatter'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_darkmatter'],
                'positron'            => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_positron'],
                'streets'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_streets'],
                'hybrid'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_hybrid'],
            ),
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'here_type' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['here_type'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'normal',
            'options'                 => array(
                'normal'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_normal'],
                'transit'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_transit'],
                'pedestrian'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_pedestrian'],
                'terrain'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_terrain'],
                'satellite'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_satellite'],
                'hybrid'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_hybrid'],
            ),
            'eval'                    => array('submitOnChange' => false),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'thunderforest_type' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['thunderforest_type'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'cycle',
            'options'                 => array(
                'cycle'               => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_opencyclemap'],
                'transport'           => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_transport'],
                'landscape'           => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_landscape'],
                'outdoors'            => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_outdoors'],
                'transport-dark'      => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_transport_dark'],
                'spinal-map'          => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_spinal_map'],
                'pioneer'             => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_pioneer'],
                'mobile-atlas'        => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_mobile_atlas'],
                'neighbourhood'       => $GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_neighbourhood'],
            ),
            'eval'                    => array('submitOnChange' => false),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'google_style' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['google_style'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'streets',
            'options'                 => array('streets' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_streets'],
                                               'hybrid' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_hybrid'],
                                               'satellite' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_satellite'],
                                               'terrain' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_terrain']
                                              ),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),

        'bing_style' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_style'],
            'filter'                  => false,
            'inputType'               => 'select',
            'default'                 => 'Shaded',
            'options'                 => array('Road' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_road'],
                                               'AerialWithLabels' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_hybrid'],
                                               'Aerial' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_aerial']
                                              ),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),
        'bing_key' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_key'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'long clr', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_url'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_layers' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_layers'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_version' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_version'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_format' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_format'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_transparent' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_transparent'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => false, 'tl_class'=>'w50 m12'),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'wms_params_srs' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_srs'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_gutter' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_gutter'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'minzoomlevel' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['minzoomlevel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => array( 'tl_class'=>'w50', 'rgxp'=>'digit'),
            'sql'                     => "int(10) NOT NULL default '0'"
        ),
        'maxzoomlevel' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['maxzoomlevel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '19',
            'eval'                    => array( 'tl_class'=>'w50', 'rgxp'=>'digit'),
            'sql'                     => "int(10) NOT NULL default '19'"
        ),
        'protect_baselayer' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protect_baselayer'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'permitted_groups' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['permitted_groups'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'foreignKey'              => 'tl_member_group.name',
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),
        'url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['url'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'api_key' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['api_key'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'app_id' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['app_id'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'cesium' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array(),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

    )
);

/**
 * Class tl_c4g_map_baselayers
 */
class tl_c4g_map_baselayers extends Backend
{

    public function pasteElement(DataContainer $dc, $row, $table, $cr, $arrClipboard=null)
    {
        if ($row['id'] > 0) {
            $imagePasteAfter = Image::getHtml('pasteafter.gif', sprintf($GLOBALS['TL_LANG'][$table]['pasteafter'][1], $row['id']));
            return '<a href="'.$this->addToUrl('act='.$arrClipboard["mode"].'&mode=1&childs=1&pid='.$row['id']).'" title="'.
            specialchars(sprintf($GLOBALS['TL_LANG'][$table]['pasteafter'][1], $row['id'])).'" onclick="Backend.getScrollOffset()">'.$imagePasteAfter.'</a> ';
        } else {
            $imagePasteInto = Image::getHtml('pasteinto.gif', sprintf($GLOBALS['TL_LANG'][$table]['pasteinto'][1], $row['id']));
            return '<a href="'.$this->addToUrl('act='.$arrClipboard["mode"].'&mode=2&childs=1&pid='.$row['id']).'" title="'.
            specialchars(sprintf($GLOBALS['TL_LANG'][$table]['pasteafter'][1], $row['id'])).'" onclick="Backend.getScrollOffset()">'.$imagePasteInto.'</a> ';
        }
    }

    public function addIcon($row, $label, DataContainer $dc=null, $imageAttribute='', $blnReturnImage=false, $blnProtected=false)
    {
        return \Image::getHtml('bundles/con4gismaps/images/be-icons/baselayers.png', '', $imageAttribute).' '.$label;
    }
}
