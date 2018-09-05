<?php use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;

if (!defined('TL_ROOT')) die('You cannot access this file directly!');

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
 * Table tl_c4g_maps
 */
$GLOBALS['TL_DCA']['tl_c4g_maps'] = array
(

    // Config
    'config' => array
    (
        'label'                       => $GLOBALS['TL_LANG']['MOD']['c4g_maps'][0],
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onload_callback'             => array(
            array('tl_c4g_maps', 'updateDCA')),
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
        )
    ),

    // List
    'list' => array
    (
        'sorting' => array
        (
            'mode'                    => 5,
            'icon'                    => 'bundels/con4gisMapsBundle/images/core.png',
            'fields'                  => array('name'),
            'panelLayout'             => 'filter;sort,search,limit',
            'flag'                    => 1
        ),
        'label' => array
        (
            'fields'                  => array('name'),
            'format'                  => '%s',
            'label_callback'          => array('tl_c4g_maps','generateLabel')
        ),
        'global_operations' => array
        (
//            'update_db' => array
//            (
//                'label'               => &$GLOBALS['TL_LANG']['c4g_maps']['update_db'],
//                'href'                => 'key=update_db',
//                'class'               => 'navigation',
//                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="i"'
//            ),
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'copyChilds' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['copyChilds'],
                'href'                => 'act=paste&amp;mode=copy&amp;childs=1',
                'icon'                => 'copychilds.gif',
                'attributes'          => 'onclick="Backend.getScrollOffset();"',
                'button_callback'     => array('tl_c4g_maps', 'copyPageWithSubpages')
            ),
            'cut' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cut'],
                'href'                => 'act=paste&amp;mode=cut',
                'icon'                => 'cut.gif',
                'attributes'          => 'onclick="Backend.getScrollOffset();"'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'toggle' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'],
                'icon'                => 'visible.gif',
                'attributes'          => 'onclick="Backend.getScrollOffset(); return AjaxRequest.toggleVisibility(this, %s);"',
                'button_callback'     => array('tl_c4g_maps', 'toggleIcon')
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),

    // Palettes
    'palettes' => array
    (
        '__selector__'                => array( 'is_map', 'profile','location_type', 'tab_source', 'show_locations', 'popup_extend', 'protect_element', 'use_specialprofile', 'cluster_locations'),
        'default'                     => '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,cssClass,zoom_locations, hover_location,loc_minzoom,loc_maxzoom;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{expert_legend:hide},use_specialprofile;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'single'                      => '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,loc_geox,loc_geoy,locstyle,loc_only_in_parent,loc_label,tooltip, tooltip_length,enablePopup,showPopupOnActive,popup_info,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'table'                      =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,tab_source,tab_pid,tab_pid1,tab_labeldisplay,tab_tooltipdisplay,tab_directlink,tab_force_target_blank,tab_whereclause,tab_orderby,tab_filter_alias,locstyle,routing_to,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,cluster_locations,async_content,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'gpx'                        =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,data_file,data_url,locstyle,loc_label,tooltip, tooltip_length,enablePopup,popup_info,popup_async,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'kml'                        =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,data_file,data_url,loc_label,tooltip, tooltip_length,enablePopup,popup_info,popup_async,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'geojson'                    =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,data_file,split_geojson,data_content,data_projection,locstyle,loc_label,tooltip, tooltip_length,enablePopup,popup_info,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'osm'                        =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,data_file,data_url,data_forcenodes,locstyle,loc_label,tooltip, tooltip_length,enablePopup,popupType,popup_info,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,cluster_locations,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'overpass'                   =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,ovp_request,ovp_bbox_limited,data_forcenodes,data_additionalgeometries,locstyle,loc_label,tooltip, tooltip_length,enablePopup,popupType,popup_info,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,cluster_locations,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'link'                       =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,data_hidelayer,link_id;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'c4gForum'                   =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,forums,forum_jumpto,forum_reassign_layer,loc_label,tooltip, tooltip_length,enablePopup,popup_info,routing_to,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'startab'                    =>  '{general_legend},name,profile,profile_mobile,published;' .
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,awesomeicon;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
        'folder'                     =>  '{general_legend},name,profile,profile_mobile,published;'.
                                         '{map_legend},is_map;'.
                                         '{location_legend},location_type,data_layername,hide_child,data_hidelayer,data_folder,locstyle,loc_label,tooltip, tooltip_length,enablePopup,popup_info,routing_to,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{backend_legend:hide},be_optimize_checkboxes_limit;',
    ),

    // Subpalettes
    'subpalettes' => array
    (
        'use_specialprofile'          => 'specialprofile, specialprofile_mobile, specialprofile_groups',
        //'enablePopup'                 => 'popup_info,routing_to',
        'protect_element'             => 'permitted_groups',
        'popup_extend'                => 'forums',
        'is_map'                      => '',  // is set in updateDCA
        'cluster_locations'           => 'cluster_distance, cluster_fillcolor, cluster_fontcolor, cluster_zoom,cluster_popup',
        'split_geojson'               => 'geojson_attributes'
    ),

    // Fields
    'fields' => array
    (
        'id' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL auto_increment",
            'search'                  => true
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
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['name'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>255 ),
            'sql'                     => "varchar(100) NOT NULL default ''",
            'search'                  => true
        ),
        'profile' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['profile'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_c4g_map_profiles.name',
            'eval'                    => array('tl_class'=>'w50',
                                               'includeBlankOption'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
                                               'submitOnChange' => true, 'chosen' => true, 'alwaysSave' => true ),
            'load_callback'           => array(array('tl_c4g_maps','getDefaultProfile')),
            'relation'                => array('type'=>'belongsTo', 'load'=>'eager'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"

        ),
        'profile_mobile' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['profile_mobile'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_c4g_map_profiles.name',
            'eval'                    => array(
                                            'tl_class'=>'w50',
                                            'chosen' => true,
                                            'includeBlankOption'=>true
                                              ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'published' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['published'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('tl_class'=>'clr'),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'is_map' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['is_map'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'width' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['width'],
            'exclude'                 => true,
            'inputType'               => 'inputUnit',
            'options'                 => array('px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'),
            'eval'                    => array(
                                            'rgxp'=>'digit_auto_inherit',
                                            'tl_class'=>'long',
                                            'includeBlankOption'=>true
                                        ),
            'sql'                     => "varchar(64) NOT NULL default ''"
        ),
        'height' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['height'],
            'exclude'                 => true,
            'inputType'               => 'inputUnit',
            'options'                 => array('px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'),
            'eval'                    => array(
                                            'rgxp'=>'digit_auto_inherit',
                                            'tl_class'=>'long',
                                            'includeBlankOption'=>true
                                        ),
            'sql'                     => "varchar(64) NOT NULL default ''"
        ),
        'margin' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['margin'],
            'exclude'                 => true,
            'inputType'               => 'trbl',
            'options'                 => array('px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'),
            'eval'                    => array(
                                            'rgxp'=>'digit_auto_inherit',
                                            'includeBlankOption'=>true
                                        ),
            'sql'                     => "varchar(128) NOT NULL default ''"
        ),
        // 'auto_width' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width'],
        //  'exclude'                 => true,
        //  'default'                 => '',
        //  'inputType'               => 'checkbox',
        //  'eval'                    => array('submitOnChange' => true, 'tl_class'=>'w50' )
        // ),
        // 'auto_width_min' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_min'],
        //  'exclude'                 => true,
        //  'inputType'               => 'c4g_text',
        //     'default'                 => '0',
        //  'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50')
        // ),
        // 'auto_width_max' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_max'],
        //  'exclude'                 => true,
        //  'inputType'               => 'c4g_text',
        //     'default'                 => '0',
        //  'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50')
        // ),
        // 'auto_width_gap' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_width_gap'],
        //  'exclude'                 => true,
        //  'inputType'               => 'c4g_text',
        //     'default'                 => '0',
        //  'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50')
        // ),
        // 'auto_height' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height'],
        //  'exclude'                 => true,
        //  'default'                 => '',
        //  'inputType'               => 'checkbox',
        //  'eval'                    => array('submitOnChange' => true, 'tl_class'=>'w50' )
        // ),
        // 'auto_height_min' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_min'],
        //  'exclude'                 => true,
        //  'inputType'               => 'c4g_text',
        //     'default'                 => '0',
        //  'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50')
        // ),
        // 'auto_height_max' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_max'],
        //  'exclude'                 => true,
        //  'inputType'               => 'c4g_text',
        //     'default'                 => '0',
        //  'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50')
        // ),
        // 'auto_height_gap' => array
        // (
        //  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['auto_height_gap'],
        //  'exclude'                 => true,
        //  'inputType'               => 'c4g_text',
        //     'default'                 => '0',
        //  'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50')
        // ),
        'calc_extent' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['calc_extent'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options'                 => array('LOCATIONS','CENTERZOOM'),
            #'default'                 => 'LOCATIONS',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
            #'eval'                    => array('submitOnChange'=>true,'tl_class'=>'clr'),
            'load_callback'           => array(array('tl_c4g_maps','setOldValue')),
            'sql'                     => "varchar(10) NOT NULL default ''"
        ),
        'show_locations' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['show_locations'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'default'                 => '0',
            'eval'                    => array('submitOnChange'=>true,'tl_class'=>'clr'),
            'load_callback'           => array(array('tl_c4g_maps','getOldValue')),

            'sql'                     => "char(1) NOT NULL default '2'"
        ),
        'min_gap' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['min_gap'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'awesomeicon' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['awesomeicon'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'clr'),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'center_geox' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geox'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true ),
            'save_callback'           => array(array('tl_c4g_maps','setCenterLon')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'center_geoy' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geoy'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true),
            'save_callback'           => array(array('tl_c4g_maps','setCenterLat')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'zoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '10',
            'eval'                    => array('tl_class'=>'clr'),
            'sql'                     => "varchar(20) NOT NULL default '10'"
        ),
        'geolocation' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'geolocation_zoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation_zoom'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '16',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '16'"
        ),
        'hide_when_in_tab' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_when_in_tab'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'restrict_area' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restrict_area'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'restr_bottomleft_geox' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geox'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true ),
            'save_callback'           => array(array('tl_c4g_maps','setRestrLon')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'restr_bottomleft_geoy' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geoy'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true ),
            'save_callback'           => array(array('tl_c4g_maps','setRestrLat')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'restr_topright_geox' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geox'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true ),
            'save_callback'           => array(array('tl_c4g_maps','setRestrLon')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'restr_topright_geoy' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geoy'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true ),
            'save_callback'           => array(array('tl_c4g_maps','setRestrLat')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'include_sublocations' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['include_sublocations'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'location_type' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['location_type'],
            'exclude'                 => true,
            'default'                 => 'none',
            'inputType'               => 'radio',
            'options_callback'        => array('tl_c4g_maps','getLocationTypes'),
            'eval'                    => array('submitOnChange' => true),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
            'sql'                     => "char(10) NOT NULL default ''"
        ),
        'loc_geox' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geox'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard' ),
            'save_callback'           => array(array('tl_c4g_maps','setLocLon')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),

        'loc_geoy' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geoy'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'),
            'save_callback'           => array(array('tl_c4g_maps','setLocLat')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        ),
        'locstyle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps','getLocStyles'),
            'eval'                    => array('tl_class'=>'clr', 'chosen' => true),
            'wizard' => array
            (
                array('tl_c4g_maps', 'editLocationStyle')
            ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'loc_only_in_parent' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_only_in_parent'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'loc_label' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_label'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'tooltip' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('tl_class'=>'long'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'tooltip_length' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip_length'],
            'inputType'               => 'c4g_text',
            'default'                 => '30',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(100) NOT NULL default '30'"
        ),
        'enablePopup' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['enablePopup'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'popupType' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popupType'],
            'exclude'                 => true,
            'default'                 => 'text',
            'inputType'               => 'radio',
            'options'                 => array('text','template','popup_info'),
            'eval'                    => array('mandatory'=>true, 'submitOnChange' => true),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType'],
            'sql'                     => "char(10) NOT NULL default 'text'"
        ),
        'popupTemplate' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popupTemplate'],
            'exclude'                 => true,
            'default'                 => 'popup_default',
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps', 'getPopupTemplates'),
            'eval'                    => array('mandatore'=>true, 'chosen'=>true),
            'sql'                     => "varchar(64) NOT NULL default ''"
        ),
        'popup_info' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_info'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('rte'=>'tinyMCE'),
            'sql'                     => "text NULL"
        ),
        'popup_async' => array
        (
            //@Todo Asynchrone Abfrage (GPX,KML) reparieren und einblenden
            #'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_async'],
            #'exclude'                 => true,
            'default'                 => false,
            #'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'popup_extend' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_extend'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default '0'"
        ),
        'routing_to' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['routing_to'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'loc_linkurl' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_linkurl'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'),
            'wizard'                  => array(array('tl_c4g_maps', 'pickUrl')),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'loc_onclick_zoomto' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_onclick_zoomto'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'loc_minzoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_minzoom'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'loc_maxzoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_maxzoom'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'tab_source' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_source'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps','getTabSources'),
            'eval'                    => array('submitOnChange' => true,  'chosen' => true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'async_content' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['async_content'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'tab_pid' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps','getTabParentList'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'",
            'eval'                    =>  array('tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true)
        ),
        'tab_pid1' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid1'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps','getTabParentList1'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'",
            'eval'                    => array('tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true)
        ),
//        'tab_tag' => array
//        (
//            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_tag'],
//            'exclude'                 => true,
//            'inputType'               => 'select',
//            'options_callback'        => array('tl_c4g_maps','getTabTag'),
//            'sql'                     => "char(10) unsigned NOT NULL default ''",
//            'eval'                    => array('tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true)
//        ),
        'tab_labeldisplay' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_labeldisplay'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options'                 => array('OFF','1ST','1ST_MORE','1ST_COUNT','ALL'),
            'default'                 => '1ST_MORE',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
            'sql'                     => "char(10) NOT NULL default '1ST_MORE'"
        ),
        'tab_tooltipdisplay' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_tooltipdisplay'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options'                 => array('OFF','1ST','1ST_MORE','1ST_COUNT','ALL'),
            'default'                 => '1ST_MORE',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
            'sql'                     => "char(10) NOT NULL default '1ST_MORE'"
        ),
        'tab_directlink' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_directlink'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'tab_force_target_blank' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_force_target_blank'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'tab_whereclause' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_whereclause'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('decodeEntities'=>true), // -> hier werden die HTML Entities deaktiviert
            'sql'                     => "text NULL"
        ),
        'tab_orderby' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_orderby'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>128),
            'sql'                     => "varchar(128) NOT NULL default ''"
        ),
        'tab_filter_alias' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_filter_alias'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'data_file' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_file'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => array( 'trailingSlash' => false, 'files' => true, 'fieldType' => 'radio' ),
            'sql'                     => "binary(16) NULL"
        ),
        'data_folder' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_folder'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => array( 'trailingSlash' => false, 'files' => false, 'fieldType' => 'radio' ),
            'sql'                     => "binary(16) NULL"
        ),
        'split_geojson' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['split_geojson'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'geojson_attributes' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geojson_attributes'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('rte'=>'tinyMCE'),
            'sql'                     => "text NULL"
        ),
        'data_url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'),
            'wizard'                  => array(array('tl_c4g_maps', 'pickUrl')),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'data_content' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_content'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('tl_class'=>'wizard', 'preserve_tags'=>true),
            // 'save_callback'           => array(array('tl_c4g_maps','setLocData')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoEditor', 'getEditorLink')),
            'sql'                     => "text NULL"
        ),
        'data_projection' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_projection'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options'                 => array('MERC','WGS84'),
            'default'                 => 'MERC',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
            'sql'                     => "char(5) NOT NULL default ''"
        ),
        'data_forcenodes' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_forcenodes'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'data_additionalgeometries' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_additionalgeometries'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'data_layername' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_layername'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>254),
            'sql'                     => "varchar(254) NOT NULL default ''",
            'search'                  => true
        ),
        'data_hidelayer' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_hidelayer'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'hide_child' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_child'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'showPopupOnActive' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['showPopupOnActive'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'forums' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['forums'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_maps','getMapForums'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),
        'forum_jumpto' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_jumpto'],
            'exclude'                 => true,
            'inputType'               => 'pageTree',
            'eval'                    => array('fieldType'=>'radio'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'forum_reassign_layer' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_reassign_layer'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options'                 => array('NO','THREAD'),
            'default'                 => 'NO',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
            'sql'                     => "char(10) NOT NULL default 'NO'"
        ),
        'ovp_request' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_request'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('allowHtml'=>true, 'preserveTags'=>true),
            'sql'                     => "text NULL"
        ),
        'ovp_bbox_limited' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_bbox_limited'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default '1'"
        ),
        'link_id' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['link_id'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps', 'get_link_items'),
            'eval'                    => array( 'chosen' => true ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'protect_element' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['protect_element'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'permitted_groups' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['permitted_groups'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'foreignKey'              => 'tl_member_group.name',
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),
        'use_specialprofile' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['use_specialprofile'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'specialprofile' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_c4g_map_profiles.name',
            'eval'                    => array('tl_class'=>'w50', 'submitOnChange' => true, 'alwaysSave' => true,  'chosen' => true ),
            'load_callback'           => array(array('tl_c4g_maps','getDefaultProfile')),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'specialprofile_mobile' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_mobile'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_c4g_map_profiles.name',
            'eval'                    => array('tl_class'=>'w50',
                                               'includeBlankOption'=>true,  'chosen' => true),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'specialprofile_groups' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_groups'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'foreignKey'              => 'tl_member_group.name',
            'eval'                    => array('tl_class'=>'clr', 'mandatory'=>false, 'multiple'=>true),
            'sql'                     => "blob NULL"
        ),
        'cluster_locations' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_locations'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'cluster_distance' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_distance'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>100),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'cluster_fillcolor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fillcolor'],
            'inputType'               => 'text',
            'default'                 => '4975A8',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard', 'mandatory'=>true),
            'sql'                     => "varchar(6) NOT NULL default '4975A8'"
        ),
        'cluster_fontcolor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fontcolor'],
            'default'                 => 'ffffff',
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
            'sql'                     => "varchar(6) NOT NULL default 'ffffff'"
        ),'cluster_zoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_zoom'],
            'default'                 => '17',
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '17'"
        ),'cluster_popup' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_popup'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'zoom_locations' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom_locations'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'hover_location' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_location'],
            'exclude'                 => true,
            'default'                 => false,
            'eval'                    => array('submitOnChange' => true),
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'hover_style' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_style'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_maps','getLocStyles'),
            'eval'                    => array('tl_class'=>'clr',  'chosen' => true),
            'wizard' => array
            (
                array('tl_c4g_maps', 'editLocationStyle')
            ),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'be_optimize_checkboxes_limit' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['be_optimize_checkboxes_limit'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '10',
            'eval'                    => array('rgxp'=>'digit', 'submitOnChange' => true),
            'sql'                     => "int(10) unsigned NOT NULL default '10'"
        ),
        'cssClass' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cssClass'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('tl_class'=>'w50 clr'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
    )
);

/**
 * Class tl_c4g_maps
 */
class tl_c4g_maps extends Backend
{

    /**
     * value of first source table
     */
    protected $firstTabSource = null;

    /**
     * Import BackendUser object
     */
    public function __construct()
    {
        parent::__construct();

        $this->import('BackendUser', 'User');
    }

    /**
     * Return the copy page with subpages button
     * @param array
     * @param string
     * @param string
     * @param string
     * @param string
     * @param string
     * @param string
     * @return string
     */
    public function copyPageWithSubpages($row, $href, $label, $title, $icon, $attributes, $table)
    {

        $objSubpages = $this->Database->prepare("SELECT id FROM tl_c4g_maps WHERE pid=?")
                                      ->limit(1)
                                      ->execute($row['id']);

        if ($objSubpages->numRows > 0) {
            return '<a href="'.$this->addToUrl($href.'&amp;id='.$row['id']).'" title="'.specialchars($title).'"'.$attributes.'>'.$this->generateImage($icon, $label).'</a> ';
        } else {
            return $this->generateImage(preg_replace('/\.gif$/i', '_.gif', $icon)).' ';
        }
    }

    /**
     * Return all Location Styles for current Maps Profile as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $profile = $this->Database->prepare("SELECT locstyles FROM tl_c4g_map_profiles WHERE id=?")->execute($dc->activeRecord->profile);
        $ids = deserialize($profile->locstyles,true);
        if (count($ids)>0) {
            $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles WHERE id IN (".implode(',',$ids).") ORDER BY name")->execute();
        } else {
            $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")->execute();
        }
        while ($locStyles->next()) {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }

    /**
     * Return all available Sources for Maps
     * @param object
     * @return array
     */
    public function getTabSources(DataContainer $dc)
    {
        $return = array();
        foreach ($GLOBALS['con4gis']['maps']['sourcetable'] as $key=>$sourcetable) {
            if (!isset($this->firstTabSource)) {
                $this->firstTabSource = $key;
            }
            if (!$GLOBALS['TL_LANG']['c4g_maps']['sourcetable'][$key]['name'] && !$GLOBALS['con4gis']['maps']['sourcetable'][$key]['name']) {
                $return[$key] = $key;
            } else {
                if ($GLOBALS['con4gis']['maps']['sourcetable'][$key]['name']) {
                    $return[$key] = $GLOBALS['con4gis']['maps']['sourcetable'][$key]['name'];
                } else {
                    $return[$key] = $GLOBALS['TL_LANG']['c4g_maps']['sourcetable'][$key]['name'];
                }

            }
        }
        return $return;
    }

    /**
     * Return all available locations types
     * @param object
     * @return array
     */
    public function getLocationTypes(DataContainer $dc)
    {
        $return = array('none','single','table','gpx','kml','geojson','osm','folder','overpass','link', 'startab');
        if ($GLOBALS['con4gis']['forum']['installed']) {
            $return[] = 'c4gForum';
        }
        if (isset($GLOBALS['c4g_locationtypes']) && is_array($GLOBALS['c4g_locationtypes']))
        {
            $return = array_merge($return, $GLOBALS['c4g_locationtypes']);
        }
        return $return;
    }


    /**
     * Return all available map enabled forums
     * @param object
     * @return array
     */
    public function getMapForums(DataContainer $dc)
    {
        //ToDo what if forum not installed?
        $forumHelper = new \con4gis\ForumBundle\Resources\contao\classes\C4GForumHelper($this->Database);
        $forums = $forumHelper->getMapForums();
        foreach ($forums AS $forum) {
            $return[$forum['id']] = $forum['name'];
        }
        return $return;
    }

    /**
     * Return all entries in the parent table for the selection
     * @param object
     * @return array
     */
    public function getTabParentList(DataContainer $dc)
    {
        if ($dc->activeRecord->tab_source<>'') {
            $tabsource = $dc->activeRecord->tab_source;
        } else {
            $tabsource = $this->firstTabSource;
        }

        $source = $GLOBALS['con4gis']['maps']['sourcetable'][$tabsource];
        $ptable = explode(',', $source['ptable']);
        $ptable_option = explode(',', $source['ptable_option']);
        if (is_array($source) && $ptable && $ptable_option) {
            if (($ptable[0]) && ($ptable_option[0])) {
                $obj = $this->Database->prepare(
                    "SELECT id, ".$ptable_option[0]." FROM ".$ptable[0])->execute();
                while ($obj->next()) {
                    $name = $ptable_option[0];
                    $return[$obj->id] = $obj->$name;
                }
                return $return;
            }
        }
    }

    /**
     * Return all entries in the parent table for the selection
     * @param object
     * @return array
     */
    public function getTabParentList1(DataContainer $dc)
    {
        if ($dc->activeRecord->tab_source<>'') {
            $tabsource = $dc->activeRecord->tab_source;
        } else {
            $tabsource = $this->firstTabSource;
        }

        $source = $GLOBALS['con4gis']['maps']['sourcetable'][$tabsource];
        if($GLOBALS['BE_FFL']['tag'])
        {
            $source = $GLOBALS['con4gis']['maps']['sourcetable'][$tabsource.'_with_tags'];
        }
        $ptable = explode(',', $source['ptable']);
        $ctable = explode(',', $source['ctable']);
        $ctable_option = explode(',', $source['ctable_option']);
        $ptable_option = explode(',', $source['ptable_option']);
        $ptype = $source['ptype'];
        $sqlwhere = $source['ctable_where'];
        if (is_array($source) && $ptable && $ptable_option) {
            if (($ptable[1]) && ($ptable_option[1])) {
                if($ptype == 'tag')
                {
                    $obj = $this->Database->prepare(
                        "SELECT id, ".$ptable_option[1]." FROM ".$ptable[1]." WHERE ".$sqlwhere[1])->execute();
                }
                else
                {
                    $obj = $this->Database->prepare(
                        "SELECT id, ".$ptable_option[1]." FROM ".$ptable[1])->execute();
                }
                while ($obj->next()) {
                    $name = $ptable_option[1];
                    $return[$obj->id] = $obj->$name;

                }
                $return = array_unique($return);
                return $return;
            }
            else if (($ctable[0]) && ($ctable_option[0])) {
                if($ptype == 'tag')
                {
                    $obj = $this->Database->prepare(
                        "SELECT id, ".$ctable_option[0]." FROM ".$ctable[0]." WHERE ".$sqlwhere)->execute();
                }
                else
                {
                    $obj = $this->Database->prepare(
                        "SELECT id, ".$ctable_option[0]." FROM ".$ctable[0])->execute();
                }
                while ($obj->next()) {
                    $name = $ctable_option[0];
                    $return[$obj->id] = $obj->$name;

                }
                $return = array_unique($return);
                return $return;
            }
        }


    }

//    public function getTabTag(DataContainer $dc)
//    {
//        if ($dc->activeRecord->tab_source<>'') {
//            $tabsource = $dc->activeRecord->tab_source;
//        } else {
//            $tabsource = $this->firstTabSource;
//        }
//        $id = $dc->activeRecord->tab_pid;
//        $objEvent = $this->Database->prepare("SELECT * FROM tl_calendar_events WHERE pid = ?")->execute($id);
//        $stringSQL = "SELECT DISTINCT tag FROM tl_tag WHERE from_table = ?";
//        while($objEvent->next())
//        {
//            if(substr($stringSQL,-1)=='?')
//            {
//                $stringSQL .= " AND tid = ".$objEvent->id;
//            }
//            else
//            {
//                $stringSQL .= " OR tid = ".$objEvent->id;
//            }
//
//        }
//
//        $obj = $this->Database->prepare($stringSQL)->execute($tabsource,$dc->activeRecord->id);
//        while ($obj->next()) {
//
//            $return[$obj->tag] = $obj->tag;
//        }
//        return $return;
//
//    }


    /**
     * Recursively step through map item tree
     */
    private function getMapItemTree($tree, $return, $pid,$level)
    {
        if (array_key_exists($pid, $tree)) {
            foreach ($tree[$pid] AS $key=>$item) {
                $return[$key] = str_repeat('+',$level).$item;
                if (array_key_exists($key, $tree)) {
                    $return = $this->getMapItemTree($tree, $return, $key, $level+1);
                }
            }
        }
        return $return;
    }

    /**
     * Return all map items ready to be linked
     * @param object
     * @return array
     */
    public function get_link_items(DataContainer $dc)
    {

        $maps = $this->Database->prepare ( "SELECT id,pid,name FROM tl_c4g_maps WHERE published=1 AND location_type<>'link' ORDER BY pid,sorting" )->execute ();
        if ($maps->numRows > 0) {
            while ( $maps->next () ) {
                $tree [$maps->pid][$maps->id] = $maps->name;
            }
        }
        return $this->getMapItemTree($tree,array(),0,0);
    }

    /**
     * Generate the icons to be used
     */
    public function generateLabel($row, $label, $dc_table, $folderAttribute)
    {
        $image = 'bundles/con4gismaps/images/be-icons/';
        if ($row['is_map']) {
            if ($row['location_type']<>'none') {
                $image .= 'map_location';
            } else {
                $image .= 'map';
            }
        } elseif ($row['location_type']=='link') {
            $image .= 'link';
        } elseif ($row['location_type']<>'none') {
            $image .= 'location';
        } else {
            $image .= 'mapfolder';
        }
        if (!$row['published']) {
            $image .= '_1';
        }
        $image .= '.png';
        return $this->generateImage($image, '', $folderAttribute) . ' ' . $label;
    }

    /**
     * Update the palette information that depend on other values
     */
    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) return;

        $objMap = $this->Database->prepare("SELECT is_map, show_locations, hover_location, restrict_area, geolocation, be_optimize_checkboxes_limit, popupType FROM tl_c4g_maps WHERE id=?")
            ->limit(1)
            ->execute($dc->id);
        if ($objMap->numRows > 0) {
            if($objMap->show_locations == '1') {
                $calcExtentFields = 'min_gap,';
            }
            if($objMap->hover_location == '1') {
                $hover_style = 'hover_style';
                foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $paletteKey=>$paletteString)
                {
                    if (!is_array($paletteString) && strpos($paletteString, "hover_location")!==false)
                    {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$paletteKey] = str_replace("hover_location", "hover_location,hover_style", $paletteString);

                    }
                }
            }
            if ($objMap->geolocation) {
                $geolocationFields = 'geolocation_zoom,';
            } else {
                $geolocationFields = '';
            }
            if ($objMap->restrict_area) {
                $restrictAreaFields = 'restr_bottomleft_geox,restr_bottomleft_geoy,restr_topright_geox,restr_topright_geoy,';
            } else {
                $restrictAreaFields = '';
            }
            if ($objMap->popupType == "template")
            {
                // we have to use this, because of current table naming with underscores
                foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $paletteKey=>$paletteString)
                {
                    if (!is_array($paletteString) && strpos($paletteString, "popup_info")!==false)
                    {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$paletteKey] = str_replace("popup_info", "popupTemplate", $paletteString);
                    }
                }
            }
            if ($objMap->popupType == "popup_info")
            {
                // we have to use this, because of current table naming with underscores
                foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $paletteKey=>$paletteString)
                {
                    if (!is_array($paletteString) && strpos($paletteString, "popup_info")!==false)
                    {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$paletteKey] = str_replace("popup_info", "", $paletteString);
                       # $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$paletteKey] = str_replace("hover_location", "hover_location,hover_style", $paletteString);

                    }
                }
            }

            $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['is_map'] =
                'width,height,margin,show_locations,'.$calcExtentFields.'center_geox,center_geoy,zoom,geolocation,'.$geolocationFields.'restrict_area,'.$restrictAreaFields.',include_sublocations';

            if ($GLOBALS['con4gis']['forum']['installed']) {
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['overpass'] = str_replace('popup_info,routing_to', 'popup_info,popup_extend,routing_to', $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['overpass']);
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['osm'] = str_replace('popup_info,routing_to', 'popup_info,popup_extend,routing_to', $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['osm']);
            }

            // convert checkboxes to chosenfields, if there are to many locationstyles
            if (intval($objMap->be_optimize_checkboxes_limit) > 0) {
                // subforums-options
                if ($GLOBALS['con4gis']['forum']['installed']) {
                    $objForumCount = $this->Database->prepare("SELECT COUNT(id) AS entry_count FROM tl_c4g_forum WHERE enable_maps = 1")->execute();
                    if ($objForumCount->numRows > 0) {
                        if (intval($objForumCount->entry_count) > intval($objMap->be_optimize_checkboxes_limit)) {
                            $GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['forums']['inputType'] = 'select';
                            $GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['forums']['eval']['chosen'] = true;
                        }
                    }
                }
            }
        }

    }

    /**
     * determine the default profile
     */
    public function getDefaultProfile($varValue, DataContainer $dc)
    {
        if (!$varValue) {
            if ($dc->activeRecord->pid) {
                // take default profile from parent entry
                $objParent = $this->Database->prepare("SELECT profile FROM tl_c4g_maps WHERE id=?")
                    ->limit(1)->execute($dc->activeRecord->pid);
                if ($objParent->numRows > 0) {
                    $varValue = $objParent->profile;
                }
            }
            if (!$varValue) {
                // get default profile
                $settings = C4gSettingsModel::findAll();
                $varValue = $settings[0]->defaultprofile;
            }

            if (!$varValue) {
                $profiles = C4gMapProfilesModel::findAll();
                if ($profiles && (count($profiles) > 0)) {
                    $length = count($profiles);
                    $varValue = $profiles[$length-1];
                }
            }
        }
        return $varValue;
    }
    public function getOldValue($varValue, DataContainer $dc)
    {
        if($varValue == '2'){
            if ($dc->activeRecord->calc_extent == "LOCATIONS") {
                $varValue = 1;
            } else {
                $varValue = 0;
            }
        }
        return $varValue;

    }
    public function setOldValue($varValue, DataContainer $dc)
    {
        if($dc->activeRecord->show_locations == '1'){
            $varValue = "LOCATIONS";
            $dc->activeRecord->calc_extent = "LOCATIONS";
        }
        else if($dc->activeRecord->show_locations == ''){
            $varValue = "CENTERZOOM";
            $dc->activeRecord->calc_extent = "CENTERZOOM";
        }
        return $varValue;
    }


    /**
     * Validate Center Lon
     */
    public function setCenterLon($varValue, DataContainer $dc)
    {
        if ($dc->activeRecord->calc_extent == 'CENTERZOOM') {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate Center Lat
     */
    public function setCenterLat($varValue, DataContainer $dc)
    {
        if ($dc->activeRecord->calc_extent == 'CENTERZOOM') {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLat($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }


    /**
     * Validate restricted Lon
     */
    public function setRestrLon($varValue, DataContainer $dc)
    {
        if ($dc->activeRecord->restrict_area) {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate restricted Lat
     */
    public function setRestrLat($varValue, DataContainer $dc)
    {
        if ($dc->activeRecord->restrict_area) {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLat($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate Location Lon
     */
    public function setLocLon($varValue, DataContainer $dc)
    {
        if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }

    /**
     * Validate Location Lat
     */
    public function setLocLat($varValue, DataContainer $dc)
    {
        if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLat($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
        }
        return $varValue;
    }
    
    /**
     * Return the "toggle visibility" button
     */
    public function toggleIcon($row, $href, $label, $title, $icon, $attributes)
    {
        if (strlen($this->Input->get('tid'))) {
            $this->toggleVisibility($this->Input->get('tid'), ($this->Input->get('state') == 1));
            $this->redirect($this->getReferer());
        }

        // Check permissions AFTER checking the tid, so hacking attempts are logged
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_maps::published', 'alexf')) {
            return '';
        }

        $href .= '&amp;tid='.$row['id'].'&amp;state='.($row['published'] ? '' : 1);

        if (!$row['published']) {
            $icon = 'invisible.gif';
        }

        \con4gis\CoreBundle\Resources\contao\classes\C4GAutomator::purgeApiCache();

        return '<a href="'.$this->addToUrl($href).'" title="'.specialchars($title).'"'.$attributes.'>'.\Image::getHtml($icon, $label).'</a> ';
    }


    /**
     * Disable/enable an element
     * @param integer
     * @param boolean
     */
    public function toggleVisibility($intId, $blnVisible)
    {
        // Check permissions to publish
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_maps::published', 'alexf')) {

            //ToDo loggerService
            $this->log('Not enough permissions to publish/unpublish con4gis\MapsBundle\Resources\contao\classes\Utils ID "'.$intId.'"', 'tl_c4g_maps toggleVisibility', TL_ERROR);
            $this->redirect('contao/main.php?act=error');
        }
        $this->createInitialVersion('tl_c4g_maps', $intId);
        #$this->Versions->initialize('tl_c4g_maps', $intId);

        $objVersions = new Versions('tl_c4g_maps', $intId);
        $objVersions->initialize();

        // Trigger the save_callback
        if (is_array($GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['published']['save_callback'])) {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['published']['save_callback'] as $callback) {
                $str_class = $callback[0];
                $str_function = $callback[1];

                if ($str_class && $str_function) {
                    $this->import($str_class);
                    $blnVisible = $this->$str_class->$str_function($blnVisible, $this);
                }
            }
        }


        // Update the database
        $this->Database->prepare("UPDATE tl_c4g_maps SET tstamp=". time() .", published='" . ($blnVisible ? 1 : '') . "' WHERE id=?")
                       ->execute($intId);

        $this->createNewVersion('tl_c4g_maps', $intId);
        #x$this->Versions->create('tl_c4g_maps', $intId);
    }

    /**
     * Return the page pick wizard for the linkUrl
     * @param DataContainer $dc
     */
    public function pickUrl(DataContainer $dc)
    {
        return ' <a href="contao/page.php?do='.Input::get('do').'&amp;table='.$dc->table.'&amp;field='.$dc->field.'&amp;value='.str_replace(array('{{link_url::', '}}'), '', $dc->value).'" title="'.specialchars($GLOBALS['TL_LANG']['MSC']['pagepicker']).'" onclick="Backend.getScrollOffset();Backend.openModalSelector({\'width\':765,\'title\':\''.specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['MOD']['page'][0])).'\',\'url\':this.href,\'id\':\''.$dc->field.'\',\'tag\':\'ctrl_'.$dc->field . ((Input::get('act') == 'editAll') ? '_' . $dc->id : '').'\',\'self\':this});return false">' . $this->generateImage('pickpage.gif', $GLOBALS['TL_LANG']['MSC']['pagepicker'], 'style="vertical-align:top;cursor:pointer"') . '</a>';
    }

    //editLocationType
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
     * Return all navigation templates as array
     *
     * @return array
     */
    public function getPopupTemplates()
    {
        return $this->getTemplateGroup('popup_');
    }
}
