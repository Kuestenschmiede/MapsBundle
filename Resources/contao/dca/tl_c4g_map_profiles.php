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
 * Table tl_c4g_stuffprofiles
 */
$GLOBALS['TL_DCA']['tl_c4g_map_profiles'] = array
(

    // Config
    'config' => array
    (
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onload_callback'             => array(array('tl_c4g_map_profiles', 'updateDCA')),
        'onsubmit_callback'             => array(
            array('\con4gis\CoreBundle\Resources\contao\classes\C4GAutomator', 'purgeApiCache')
        ),
        'sql'                         => array
        (
            'keys' => array
            (
                'id' => 'primary'
            )
        )
    ),

    // List
    'list' => array
    (
        'sorting' => array
        (
            'mode'                    => 1,
            'fields'                  => array('name'),
            'flag'                    => 1
        ),
        'label' => array
        (
            'fields'                  => array('name'),
            'format'                  => '%s'
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),

    // Palettes
    'palettes' => array
    (
        '__selector__'                => array('mouse_nav','starboard','cluster_all','baselayerswitcher','layerswitcher','attribution','hover_popups','permalink','geosearch','geopicker','router', 'cesium'),
        'default'                     => '{general_legend},name,is_default,theme;'.
                                         '{baselayer_legend:hide},baselayers, default_baselayer;'.
                                         '{locstyle_legend:hide},locstyles;'.
                                         '{navigation_legend},zoom_panel,zoom_panel_button,zoom_panel_slider,mouse_nav,touch_nav,keyboard_nav,fullscreen;'.
                                         '{starboard_legend:hide},starboard;'.
                                         '{information_legend},attribution,overviewmap,measuretool,graticule,scaleline,mouseposition,permalink,zoomlevel;'.
                                         '{geosearch_legend:hide},geosearch,router;'.
                                         '{info_legend:hide},infopage;'.
                                         '{click_legend:hide},link_newwindow,link_open_on,hover_popups;'.
                                         '{geopicker_legend:hide},is_backend_geopicker_default,geopicker;'.
                                         '{editor_legend:hide},editor,editor_styles_point,editor_styles_line,editor_styles_polygon,editor_styles_circle,editor_styles_freehand,editor_vars,editor_show_items,editor_helpurl,is_backend_editor_default;'.
                                         '{cesium_legend:hide},cesium;'.
                                         '{expert_legend:hide},script,overpass_url,custom_div;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;'
    ),


    // Subpalettes
    'subpalettes' => array
    (
        'mouse_nav'                   => 'mouse_nav_wheel,mouse_nav_doubleclick_zoom,mouse_nav_zoombox,mouse_nav_dragmode,mouse_nav_kinetic',
        'starboard'                   => 'starboard_open,starboard_div,starboard_label,baselayerswitcher,layerswitcher,starboard_filter,starboard_button,cluster_all',
        'cluster_all'                 => 'cluster_distance,cluster_fillcolor,cluster_fontcolor,cluster_zoom',
        'baselayerswitcher'           => 'baselayerswitcher_label',
        'layerswitcher'               => 'layerswitcher_label',
        'attribution'                 => 'collapsed_attribution,cfg_logo_attribution,div_attribution,add_attribution',
        'hover_popups'                => 'hover_popups_stay',
        'permalink'                   => 'permalink_get_param',
        'geosearch'                   => 'geosearch_engine,geosearch_results,geosearch_show,geosearch_div,geosearch_zoomto,geosearch_zoombounds,geosearch_animate,geosearch_markresult,geosearch_attribution,geosearch_collapsed',
        'geopicker'                   => 'geopicker_fieldx,geopicker_fieldy,geopicker_searchdiv,geopicker_attribution',
        'router'                      => 'router_api_selection,router_alternative,router_viaroute_url,router_attribution,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle',
        'cesium'                      => 'cesium_always',
    ),

    // Fields
    'fields' => array
    (
        'id' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ),
        'tstamp' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'name' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>30, 'tl_class'=>'w50'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'is_default' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_default'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('tl_class'=>'w50', 'maxlength'=>30),
            'save_callback'           => array(array('tl_c4g_map_profiles','set_default')),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'theme' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_profiles', 'getAllThemes'),
            'eval'                    => array('tl_class'=>'clr', 'includeBlankOption' => true, blankOptionLabel => $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
            'sql'                     => "char(10) NOT NULL default ''"
        ),

        'is_backend_editor_default' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_editor_default'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('tl_class'=>'long'),
//            'save_callback'           => array(array('tl_c4g_map_profiles','set_backend_default')),
            'sql'                     => "char(1) NULL"
        ),

        'is_backend_geopicker_default' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('tl_class'=>'long'),
//            'save_callback'           => array(array('tl_c4g_map_profiles','set_backend_default')),
            'sql'                     => "char(1) NULL"
        ),

        'baselayers' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllBaseLayers'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'default_baselayer' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_profiles','getAllBaseLayers'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "blob NULL"
        ),

        'locstyles' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'zoom_panel' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'zoom_panel_button' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button'],
            'exclude'                 => true,
            'default'                 => true,
            'default'                 => '',
            'inputType'               => 'radio',
            'options'                 => array('0','1','2','3'),
            //'eval'                    => array('submitOnChange' => true),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button'],
            'sql'                     => "char(1) NOT NULL default '0'"
        ),

        'zoom_panel_slider' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
        ),

        'mouse_nav' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'mouse_nav_wheel' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'mouse_nav_doubleclick_zoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'mouse_nav_zoombox' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'mouse_nav_kinetic' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'mouse_nav_dragmode' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'radio',
            'options'                 => array('0','1','2'),
            //'eval'                    => array('submitOnChange' => true),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode'],
            'sql'                     => "char(1) NOT NULL default '0'"
        ),

        'keyboard_nav' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'touch_nav' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'nav_history' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['nav_history'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'fullscreen' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'starboard' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'starboard_open' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'starboard_label' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254),
            'sql'                     => "varchar(254) NOT NULL default ''"
        ),
        'starboard_div' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254),
            'sql'                     => "varchar(254) NOT NULL default ''"
        ),
        'starboard_filter' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
        ),
        'starboard_button' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
        ),
        'cluster_all' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'cluster_distance' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>100),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'cluster_fillcolor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor'],
            'inputType'               => 'text',
            'default'                 => '4975A8',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard', 'mandatory'=>true),
            'sql'                     => "varchar(6) NOT NULL default '4975A8'"
        ),
        'cluster_fontcolor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor'],
            'default'                 => 'ffffff',
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
            'sql'                     => "varchar(6) NOT NULL default 'ffffff'"
        ),
        'cluster_zoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom'],
            'default'                 => '17',
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '17'"
        ),
        'baselayerswitcher' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'baselayerswitcher_label' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254),
            'sql'                     => "varchar(254) NOT NULL default ''"
        ),
        'layerswitcher' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'layerswitcher_label' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254),
            'sql'                     => "varchar(254) NOT NULL default ''"
        ),

        'measuretool' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
        ),

        'graticule' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'editor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('mandatory'=>false),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'collapsed_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
        ),

        'cfg_logo_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'div_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),

        'add_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'overviewmap' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'scaleline' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'mouseposition' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'permalink' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'permalink_get_param' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>50),
            'sql'                     => "varchar(50) NOT NULL default ''"
        ),

        'zoomlevel' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'geosearch' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'geosearch_engine' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine'],
            'exclude'                 => true,
            'default'                 => '1',
            'inputType'               => 'radio',
            'options'                 => array('4','1','2','3'),
            'eval'                    => array('submitOnChange' => true,'includeBlankOption' => false ),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine'],
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'geosearch_show' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'geosearch_results' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '0'"
        ),


        'geosearch_customengine_url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'geosearch_customengine_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'geosearch_key' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'geosearch_div' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30),
            'sql'                     => "varchar(30) NOT NULL default ''"
        ),

        'geosearch_zoomto' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '18',
            'eval'                    => array('rgxp'=>'digit'),
            'sql'                     => "int(10) unsigned NOT NULL default '18'"
        ),

        'geosearch_zoombounds' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'geosearch_animate' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'geosearch_markresult' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'geosearch_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'geosearch_collapsed' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_collapsed'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'geopicker' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'geopicker_fieldx' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx'],
            'default'                 => 'c4g_brick_geopicker_geox',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30, 'mandatory'=>false),
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker_geoy'"
        ),

        'geopicker_fieldy' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy'],
            'default'                 => 'c4g_brick_geopicker_geoy',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30, 'mandatory'=>false),
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker_geoy'"
        ),

        'geopicker_searchdiv' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv'],
            'default'                 => 'c4g_brick_geopicker',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30, 'mandatory'=>false),
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker'"
        ),

        'geopicker_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),

        'router' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true, 'tl_class'=>'clr'),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'router_viaroute_url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'router_attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'libsource' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['libsource'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => 'DEFAULT',
            'options_callback'        => array('tl_c4g_map_profiles','getOlSources'),
            'eval'                    => array('submitOnChange' => true, 'tl_class' => 'long'),
            'sql'                     => "varchar(10) NOT NULL default 'DEFAULT'"
        ),

        'overpass_url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'custom_div' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div'],
            'default'                 => 'c4g_brick_map',
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>30),
            'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_map'"
        ),

        'infopage' => array
        (
            'label'					=> &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage'],
            'search'				=> true,
            'inputType'				=> 'textarea',
            'eval'                  => array('mandatory'=>false, 'rte'=>'tinyMCE', 'helpwizard'=>true),
            'explanation'           => 'insertTags',
            'sql'                   => "text NULL"
        ),

        'link_newwindow' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'link_open_on' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on'],
            'exclude'                 => true,
            'default'                 => 'CLICK',
            'inputType'               => 'radio',
            'options'                 => array('CLICK','DBLCL'),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
            'sql'                     => "char(5) NOT NULL default 'CLICK'"
        ),

        'hover_popups' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'hover_popups_stay' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'editor_styles_point' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_point'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'editor_styles_line' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_line'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'editor_styles_polygon' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_polygon'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'editor_styles_circle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_circle'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'editor_styles_freehand' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_freehand'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),

        'editor_vars' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_vars'],
            'inputType'               => 'keyValueWizard',
            'exclude'                 => true,
            'sql'                     => "text NULL"
        ),

        'editor_show_items' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_show_items'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'editor_helpurl' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_helpurl'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'),
            'wizard'                  => array(array('tl_c4g_map_profiles', 'pickUrl')),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'be_optimize_checkboxes_limit' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '10',
            'eval'                    => array('rgxp'=>'digit', 'submitOnChange' => true),
            'sql'                     => "int(10) unsigned NOT NULL default '10'"
        ),
        'router_api_selection' => array
        (
            'label'                   => $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '1',
            'options'                 => array('0','1'),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection'],
            'eval'                    => array('tl_class'=>'clr long'),
            'sql'                     => "char(1) NOT NULL default '1'"

        ),
        'router_alternative'=> array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'router_from_locstyle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('tl_class'=>'clr w50'),
            'wizard' => array
            (
                array('tl_c4g_map_profiles', 'editLocationStyle')
            ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'router_to_locstyle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('tl_class'=>'w50'),
            'wizard' => array
            (
                array('tl_c4g_map_profiles', 'editLocationStyle')
            ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'router_point_locstyle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('tl_class'=>'w50'),
            'wizard' => array
            (
                array('tl_c4g_map_profiles', 'editLocationStyle')
            ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'router_interim_locstyle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_profiles','getAllLocStyles'),
            'eval'                    => array('tl_class'=>'w50'),
            'wizard' => array
            (
                array('tl_c4g_map_profiles', 'editLocationStyle')
            ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'cesium' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'cesium_always' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array(),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
    )
);

/**
 * Class tl_c4g_map_profiles
 */
class tl_c4g_map_profiles extends Backend
{

    public function set_default($varValue, DataContainer $dc)
    {
        if ($varValue) {
            $this->Database->query('UPDATE tl_c4g_map_profiles SET is_default="" WHERE id <> '.$dc->id);
        }
        return $varValue;
    }
//
//    public function set_backend_default($varValue, DataContainer $dc)
//    {
//        if ($varValue) {
//            $this->Database->query('UPDATE tl_c4g_map_profiles SET is_backend_editor_default="" WHERE id <> '.$dc->id);
//        }
//        return $varValue;
//    }

    /**
     * Return all available OpenLayers Libraries
     * @param object
     * @return array
     */
    public function getOlSources(DataContainer $dc)
    {
        $return = array();
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
            // if ($objProfile->zoom_panel == '1') {
            //     $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
            //         str_replace(',zoom_panel,',',zoom_panel,zoom_panel_world,',
            //             $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
            // }
            if ($objProfile->geosearch_engine == '2') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch'] =
                    str_replace(',geosearch_div,',',geosearch_key,geosearch_div,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch']);
                // make key-field mandatory
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['geosearch_key']['eval']['mandatory'] = true;
            } elseif ($objProfile->geosearch_engine == '3') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch'] =
                    str_replace(',geosearch_div,',',geosearch_customengine_url,geosearch_customengine_attribution,geosearch_key,geosearch_div,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch']);
            } elseif ($objProfile->geosearch_engine == '4') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['geosearch'] =
                    str_replace(',geosearch_div,',',geosearch_key,geosearch_div,',
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

                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_point']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_point']['eval']['chosen'] = true;

                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_line']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_line']['eval']['chosen'] = true;

                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_polygon']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_polygon']['eval']['chosen'] = true;

                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_circle']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_circle']['eval']['chosen'] = true;

                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_freehand']['inputType'] = 'select';
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['editor_styles_freehand']['eval']['chosen'] = true;
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
        $return = array();
        $themes = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_themes ORDER BY name")
            ->execute();
        while ($themes->next()) {
            $return[$themes->id] = $themes->name;
        }
        return $return;
    }
}
