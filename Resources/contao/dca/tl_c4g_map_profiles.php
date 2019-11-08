<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/**
 * Table tl_c4g_stuffprofiles
 */
$GLOBALS['TL_DCA']['tl_c4g_map_profiles'] =
    [
    // Config
    'config' =>
        [
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onload_callback'             => [['tl_c4g_map_profiles', 'updateDCA']],
        'onsubmit_callback'             => [
            ['\con4gis\CoreBundle\Resources\contao\classes\C4GAutomator', 'purgeApiCache']
        ],
        'sql'                         =>
            [
            'keys' =>
                [
                'id' => 'primary'
                ]
            ]
        ],

    // List
    'list' =>
        [
        'sorting' =>
            [
            'mode'                    => 1,
            'fields'                  => ['name'],
            'flag'                    => 1
            ],
        'label' =>
            [
            'fields'                  => ['name'],
            'format'                  => '%s'
            ],
        'global_operations' =>
            [
            'all' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
                ]
            ],
        'operations' =>
            [
            'edit' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
                ]
            ]
        ],

    // Palettes
    'palettes' =>
        [
        '__selector__'                => ['resize_locstyles_zoom', 'mouse_nav','starboard','cluster_all','baselayerswitcher','layerswitcher','attribution','hover_popups','permalink','geosearch','geopicker','overpassEngine', 'cesium'],
        'default'                     => '{general_legend},name,theme;'.
                                         '{baselayer_legend:hide},baselayers, default_baselayer;'.
                                         '{locstyle_legend:hide},locstyles, label_color,resize_locstyles_zoom;'.
                                         '{navigation_legend:hide},zoom_panel,zoom_panel_button,zoom_panel_slider,mouse_nav,touch_nav,keyboard_nav,fullscreen,print;'.
                                         '{starboard_legend:hide},starboard;'.
                                         '{information_legend:hide},attribution,overviewmap,graticule,scaleline,mouseposition,permalink,zoomlevel,infopage;'.
                                         '{geosearch_legend:hide},geosearch;'.
                                         '{measure_legend:hide},measuretool;'.
                                         '{geopicker_legend:hide},is_backend_geopicker_default,geopicker;'.
                                         '{click_legend:hide},link_newwindow,link_open_on,hover_popups, popupHandling;'.
                                         '{cesium_legend:hide},cesium;'.
                                         '{overpassLegend:hide},overpassEngine;'.
                                         '{miscellaneous_legend:hide},script,custom_div,account,be_optimize_checkboxes_limit,caching,geobookmarks;'
        ],


    // Subpalettes
    'subpalettes' =>
        [
        'mouse_nav'                   => 'mouse_nav_wheel,mouse_nav_doubleclick_zoom,mouse_nav_zoombox,mouse_nav_dragmode,mouse_nav_kinetic',
        'starboard'                   => 'baselayerswitcher,layerswitcher,starboard_open,starboard_label,starboard_button,starboard_div,cluster_all',
        'cluster_all'                 => 'cluster_distance,cluster_fillcolor,cluster_fontcolor,cluster_zoom, cluster_dist_spider',
        'baselayerswitcher'           => 'baselayerswitcher_label,baselayer_filter',
        'layerswitcher'               => 'layerswitcher_label,layer_filter',
        'attribution'                 => 'collapsed_attribution,add_attribution,cfg_logo_attribution,div_attribution',
        'hover_popups'                => 'hover_popups_stay',
        'permalink'                   => 'permalink_get_param',
        'geosearch'                   => 'geosearch_engine,geosearch_show,geosearchParams,geosearch_results,geosearch_zoomto,geosearch_zoombounds,geosearch_animate,geosearch_markresult,geosearch_popup,geosearch_attribution,geosearch_collapsed,geosearch_div',
        'geopicker'                   => 'geopicker_fieldx,geopicker_fieldy,geopicker_searchdiv,geopicker_attribution,geopicker_disabled,geopicker_anonymous',
        'cesium'                      => 'cesium_always',
        'overpassEngine_1'            => 'overpass_url',
        'overpassEngine_2'            => '',
        'overpassEngine_3'            => '',
        'resize_locstyles_zoom'       => 'resize_src_zoom,resize_scale_factor,resize_min_scale,resize_max_scale'
        ],

    // Fields
    'fields' =>
        [
        'id' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
            ],
        'tstamp' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'name' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>true, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'theme' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_map_profiles', 'getAllThemes'],
            'eval'                    => ['tl_class'=>'clr', 'includeBlankOption' => true, 'blankOptionLabel' => $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
            'sql'                     => "char(10) NOT NULL default ''"
            ],


        'baselayers' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => ['tl_c4g_map_profiles','getAllBaseLayers'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true],
            'sql'                     => "blob NULL"
            ],

        'default_baselayer' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_map_profiles','getAllBaseLayers'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false],
            'sql'                     => "blob NULL"
            ],

        'locstyles' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => ['tl_c4g_map_profiles','getAllLocStyles'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true],
            'sql'                     => "blob NULL"
            ],

        'label_color' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['label_color'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
    
        'resize_locstyles_zoom' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_locstyles_zoom'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
        ],
    
        'resize_src_zoom' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_src_zoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => 18,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) NOT NULL default '18'"
        ],

        'resize_scale_factor' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_scale_factor'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0.1',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "double(3,3) NOT NULL default '0.100'"
        ],
    
        'resize_min_scale' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_min_scale'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0.1',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "double(3,3) NOT NULL default '0.100'"
        ],
    
        'resize_max_scale' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_max_scale'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '1.0',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "double(3,3) NOT NULL default '1.000'"
        ],
        
        'zoom_panel' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'zoom_panel_button' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'options'                 => ['1','2','3'],
            'eval'                    => ['multiple' => true],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button'],
            'sql'                     => "blob NULL"
            ],

        'zoom_panel_slider' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
            ],

        'mouse_nav' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'mouse_nav_wheel' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'mouse_nav_doubleclick_zoom' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'mouse_nav_zoombox' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'mouse_nav_kinetic' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'mouse_nav_dragmode' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'radio',
            'options'                 => ['0','1','2'],
            //'eval'                    => array('submitOnChange' => true),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode'],
            'sql'                     => "char(1) NOT NULL default '0'"
            ],

        'keyboard_nav' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'touch_nav' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'nav_history' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['nav_history'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'fullscreen' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'print' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['print'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'starboard' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'starboard_open' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'starboard_label' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>254],
            'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'starboard_div' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>254],
            'sql'                     => "varchar(254) NOT NULL default ''"
            ],
//        'starboard_filter' =>
//            [
//            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter'],
//            'exclude'                 => true,
//            'default'                 => false,
//            'inputType'               => 'checkbox',
//            'sql'                     => "char(1) NOT NULL default '0'"
//            ],
        'starboard_button' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'cluster_all' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cluster_distance' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>100],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'cluster_fillcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor'],
            'inputType'               => 'text',
            'default'                 => '4975A8',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard', 'mandatory'=>true],
            'sql'                     => "varchar(6) NOT NULL default '4975A8'"
            ],
        'cluster_fontcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor'],
            'default'                 => 'ffffff',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'],
            'sql'                     => "varchar(6) NOT NULL default 'ffffff'"
            ],
        'cluster_zoom' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom'],
            'default'                 => '17',
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '17'"
            ],
            'cluster_dist_spider' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_dist_spider'],
            'default'                 => '20',
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '20'"
            ],
        'baselayerswitcher' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'baselayerswitcher_label' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>254],
            'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'baselayer_filter' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_filter'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'layerswitcher' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'layerswitcher_label' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>254],
            'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'layer_filter' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layer_filter'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'measuretool' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
            ],

        'graticule' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'collapsed_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
            ],

        'cfg_logo_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'div_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30],
            'sql'                     => "varchar(30) NOT NULL default ''"
            ],

        'add_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'overviewmap' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'geobookmarks' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geobookmarks'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'scaleline' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'mouseposition' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'permalink' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'permalink_get_param' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>50],
            'sql'                     => "varchar(50) NOT NULL default ''"
            ],

        'zoomlevel' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'account' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['account'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_map_profiles', 'getModules'],
            'eval'                    => ['includeBlankOption'=>true, 'mandatory'=>false, 'chosen'=>true, 'submitOnChange'=>false, 'tl_class'=>'w50 wizard'],
            'wizard' =>
                [
                ['tl_c4g_map_profiles', 'editModule']
                ],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],

        'geosearch' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'geosearch_engine' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine'],
            'exclude'                 => true,
            'default'                 => '3',
            'inputType'               => 'radio',
            'options'                 => ['3','4','2','1','5'],
            'eval'                    => ['submitOnChange' => true,'includeBlankOption' => false],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine'],
            'sql'                     => "char(1) NOT NULL default '3'"
            ],

        'geosearch_show' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'geosearchParams' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams'],
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'        => ['tl_c4g_map_profiles','getSearchParams']
            ],
            'sql'                     => 'blob NULL'
        ],
        'geosearch_results' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'geosearch_customengine_url' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'geosearch_customengine_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'geosearch_key' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>254],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'geosearch_div' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30],
            'sql'                     => "varchar(30) NOT NULL default ''"
            ],

        'geosearch_zoomto' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '18',
            'eval'                    => ['rgxp'=>'digit'],
            'sql'                     => "int(10) unsigned NOT NULL default '18'"
            ],

        'geosearch_zoombounds' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'geosearch_animate' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'geosearch_markresult' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'geosearch_popup' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
            ],

        'geosearch_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'geosearch_collapsed' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_collapsed'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'is_backend_geopicker_default' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class'=>'long'],
//            'save_callback'           => array(array('tl_c4g_map_profiles','set_backend_default')),
                'sql'                     => "char(1) NULL"
            ],

        'geopicker' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'geopicker_fieldx' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx'],
            'default'                 => 'c4g_brick_geopicker_geox',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30, 'mandatory'=>false],
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker_geoy'"
            ],

        'geopicker_fieldy' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy'],
            'default'                 => 'c4g_brick_geopicker_geoy',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30, 'mandatory'=>false],
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker_geoy'"
            ],

        'geopicker_searchdiv' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv'],
            'default'                 => 'c4g_brick_geopicker',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30, 'mandatory'=>false],
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker'"
            ],

        'geopicker_attribution' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'geopicker_disabled' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => false],
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'geopicker_anonymous' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => false],
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'libsource' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['libsource'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => 'DEFAULT',
            'options_callback'        => ['tl_c4g_map_profiles','getOlSources'],
            'eval'                    => ['submitOnChange' => true, 'tl_class' => 'long'],
            'sql'                     => "varchar(10) NOT NULL default 'DEFAULT'"
            ],
        'overpassEngine' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpassEngine'],
            'inputType'               => 'radio',
            'default'                 => '1',
            'options'                 => ['1','2','3'],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine'],
            'eval'                    => ['tl_class'=>'clr long','submitOnChange' => true],
            'sql'                     => "varchar(255) NOT NULL default '1'"
            ],
        'overpass_url' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'custom_div' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div'],
            'default'                 => 'c4g_brick_map',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30],
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_map'"
            ],

        'infopage' =>
            [
            'label'					=> &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage'],
            'search'				=> true,
            'inputType'				=> 'textarea',
            'eval'                  => ['mandatory'=>false, 'rte'=>'tinyMCE', 'helpwizard'=>true],
            'explanation'           => 'insertTags',
            'sql'                   => "text NULL"
            ],

        'link_newwindow' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'link_open_on' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on'],
            'exclude'                 => true,
            'default'                 => 'CLICK',
            'inputType'               => 'radio',
            'options'                 => ['CLICK','DBLCL'],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
            'sql'                     => "char(5) NOT NULL default 'CLICK'"
            ],

        'hover_popups' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],


        'hover_popups_stay' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'popupHandling' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandling'],
            'exclude'                 => true,
            'default'                 => '0',
            'inputType'               => 'radio',
            'options'                 => ['0','1','2'],
            'eval'                    => ['submitOnChange' => true,'includeBlankOption' => false],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences'],
            'sql'                     => "char(1) NOT NULL default '0'"
        ],
        'be_optimize_checkboxes_limit' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '10',
            'eval'                    => ['rgxp'=>'digit', 'submitOnChange' => true, "tl_class" => "clr m12"],
            'sql'                     => "int(10) unsigned NOT NULL default '10'"
            ],
        'cesium' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cesium_always' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => [],
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'caching' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => false],
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        ]
    ];

/**
 * Class tl_c4g_map_profiles
 */
class tl_c4g_map_profiles extends Backend
{

    /**
     * Return all available OpenLayers Libraries
     * @param object
     * @return array
     */
    public function getOlSources(DataContainer $dc)
    {
        $return = [];
        foreach ($GLOBALS['con4gis']['maps']['js_openlayers'] as $key=>$lib) {
            $return[$key] = $lib;
        }
        return $return;
    }

    /**
     * Return all Location Styles as array
     * @param object
     * @return array
     */
    public function getAllLocStyles(DataContainer $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
            ->execute();
        while ($locStyles->next()) {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }

    /**
     * Return all Base Layers as array
     * @param object
     * @return array
     */
    public function getAllBaseLayers(DataContainer $dc)
    {
        $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers ORDER BY name")
            ->execute();
        while ($baseLayers->next()) {
            $return[$baseLayers->id] = $baseLayers->name;
        }
        return $return;
    }

    /**
     * Update the palette information that depend on other values
     */
    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) {
            return;
        }
        $objProfile = $this->Database->prepare("SELECT zoom_panel, geosearch_engine, be_optimize_checkboxes_limit FROM tl_c4g_map_profiles WHERE id=?")
        ->limit(1)
        ->execute($dc->id);
        if ($objProfile->numRows > 0) {

            if ($objProfile->geosearch_engine == '2') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch']);
                // make key-field mandatory
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['geosearch_key']['eval']['mandatory'] = true;
            } elseif ($objProfile->geosearch_engine == '3') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_customengine_url,geosearch_customengine_attribution,geosearch_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch']);
            } elseif ($objProfile->geosearch_engine == '5') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_customengine_url,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch']);
            }


            // convert checkboxes to chosenfields, if there are to many locationstyles
            if (intval($objProfile->be_optimize_checkboxes_limit) > 0) {
                // basemap-options
                $objLocCount = $this->Database->prepare("SELECT COUNT(id) AS entry_count FROM tl_c4g_map_baselayers")->execute();
                if ($objLocCount->numRows > 0) {
                    if (intval($objLocCount->entry_count) >= intval($objProfile->be_optimize_checkboxes_limit)) {
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['baselayers']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['baselayers']['eval']['chosen'] = true;
                    }
                }
                // locationstyle-options
                $objLocCount = $this->Database->prepare("SELECT COUNT(id) AS entry_count FROM tl_c4g_map_locstyles")->execute();
                if ($objLocCount->numRows > 0) {
                    if (intval($objLocCount->entry_count) >= intval($objProfile->be_optimize_checkboxes_limit)) {
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['locstyles']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['locstyles']['eval']['chosen'] = true;
                    }
                }
            }
        }

    }

    /**
     * Return the page pick wizard for the editor_helpurl
     * @param DataContainer $dc
     */
    public function pickUrl(DataContainer $dc)
    {
        return ' <a href="contao/page.php?do='.Input::get('do').'&amp;table='.$dc->table.'&amp;field='.$dc->field.'&amp;value='.str_replace(array('{{link_url::', '}}'), '', $dc->value).'" title="'.specialchars($GLOBALS['TL_LANG']['MSC']['pagepicker']).'" onclick="Backend.getScrollOffset();Backend.openModalSelector({\'width\':765,\'title\':\''.specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['MOD']['page'][0])).'\',\'url\':this.href,\'id\':\''.$dc->field.'\',\'tag\':\'ctrl_'.$dc->field . ((Input::get('act') == 'editAll') ? '_' . $dc->id : '').'\',\'self\':this});return false">' . $this->generateImage('pickpage.gif', $GLOBALS['TL_LANG']['MSC']['pagepicker'], 'style="vertical-align:top;cursor:pointer"') . '</a>';
    }

    /**
   	 * Return the edit location style wizard
   	 * @param \DataContainer
   	 * @return string
   	 */
   	public function editLocationStyle(DataContainer $dc)
   	{
   		return ($dc->value < 1) ? '' : ' <a href="contao/main.php?do=c4g_map_locstyles&amp;act=edit&amp;id=' . $dc->value . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . sprintf(specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1]), $dc->value) . '" style="padding-left:3px" onclick="Backend.openModalIframe({\'width\':768,\'title\':\'' . specialchars(str_replace("'", "\\'", sprintf($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1], $dc->value))) . '\',\'url\':this.href});return false">' . Image::getHtml('alias.gif', $GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][0], 'style="vertical-align:top"') . '</a>';
   	}

    /**
     * Return all themes as array
     * @return array
     */
    public function getAllThemes()
    {
        $return = [];
        $themes = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_themes ORDER BY name")
            ->execute();
        while ($themes->next()) {
            $return[$themes->id] = $themes->name;
        }
        return $return;
    }

    /**
     * Return the edit module wizard
     *
     * @param DataContainer $dc
     *
     * @return string
     */
    public function editModule(DataContainer $dc)
    {
        return ($dc->value < 1) ? '' : ' <a href="contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $dc->value . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . sprintf(StringUtil::specialchars($GLOBALS['TL_LANG']['tl_content']['editalias'][1]), $dc->value) . '" onclick="Backend.openModalIframe({\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", sprintf($GLOBALS['TL_LANG']['tl_content']['editalias'][1], $dc->value))) . '\',\'url\':this.href});return false">' . Image::getHtml('alias.svg', $GLOBALS['TL_LANG']['tl_content']['editalias'][0]) . '</a>';
    }

    /**
     * Get all modules and return them as array
     *
     * @return array
     */
    public function getModules()
    {
        $arrModules = [];
        $objModules = $this->Database->execute("SELECT m.id, m.name, t.name AS theme FROM tl_module m LEFT JOIN tl_theme t ON m.pid=t.id ORDER BY t.name, m.name");

        while ($objModules->next())
        {
            $arrModules[$objModules->theme][$objModules->id] = $objModules->name . ' (ID ' . $objModules->id . ')';
        }

        return $arrModules;
    }
    public function getSearchParams($multiColumnWizard)
    {
        $arrColumnKeys = [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['keys'],
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'w50']
        ];
        $arrColumnParams = [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['params'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'w50']
        ];
        $return = [
            'keys'    => $arrColumnKeys,
            'params'  => $arrColumnParams
        ];
        return $return;
    }

}
