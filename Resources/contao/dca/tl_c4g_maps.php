<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

use con4gis\CoreBundle\Classes\C4GVersionProvider;
use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use Contao\Image;

if (!defined('TL_ROOT')) die('You cannot access this file directly!');

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
 * Table tl_c4g_maps
 */
$GLOBALS['TL_DCA']['tl_c4g_maps'] =
    [

    // Config
    'config' =>
        [
        'label'                       => $GLOBALS['TL_LANG']['MOD']['c4g_maps'][0],
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'markAsCopy'                  => 'name',
        'onload_callback'             => [['tl_c4g_maps', 'updateDCA'], ['tl_c4g_maps', 'showInfoMessage']],
        'onsubmit_callback'             => [
            [\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator::class, 'purgeLayerApiCache']
        ],
        'sql'                         =>
            [
            'keys' =>
                [
                'id' => 'primary',
                'pid' => 'index'
                ]
            ]
        ],

    // List
    'list' =>
        [
        'sorting' =>
            [
            'mode'                    => 5,
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
            'fields'                  => ['name','profile'],
            'panelLayout'             => 'filter;sort,search,limit',
            'flag'                    => 1
            ],
        'label' =>
            [
            'fields'                  => ['name','profile:tl_c4g_map_profiles.name'],
            'format'                  => ' %s ('.$GLOBALS['TL_LANG']['tl_c4g_maps']['profile'][0].': %s)',
            'label_callback'          => ['tl_c4g_maps','generateLabel']
            ],
        'global_operations' =>
            [
                'toggleNodes' => [
                    'href'                => 'ptg=all',
                    'class'               => 'header_toggle',
                    'showOnSelect'        => true
                ],
                'all' => [
                    'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                    'href'                => 'act=select',
                    'class'               => 'header_edit_all',
                    'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
                ],
                'back' => [
                    'href'                => 'key=back',
                    'class'               => 'header_back',
                    'button_callback'     => ['\con4gis\CoreBundle\Classes\Helper\DcaHelper', 'back'],
                    'icon'                => 'back.svg',
                    'label'               => &$GLOBALS['TL_LANG']['MSC']['backBT'],
                ],
            ],
        'operations' =>
            [
            'edit' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['copy'],
                'href'                => 'act=paste&amp;mode=copy',
                'icon'                => 'copy.svg'
                ],
            'copyChilds' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['copyChilds'],
                'href'                => 'act=paste&amp;mode=copy&amp;childs=1',
                'icon'                => 'copychilds.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset();"',
                'button_callback'     => ['tl_c4g_maps', 'copyPageWithSubpages']
                ],
            'cut' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cut'],
                'href'                => 'act=paste&amp;mode=cut',
                'icon'                => 'cut.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset();"'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                ],
            'toggle' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'],
                'icon'                => 'visible.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset(); return AjaxRequest.toggleVisibility(this, %s);"',
                'button_callback'     => ['tl_c4g_maps', 'toggleIcon']
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
                ]
            ]
        ],


    // Palettes
    'palettes' =>
        [
        '__selector__'                => ['location_type', 'tab_source', 'show_locations', 'enablePopup', 'popup_extend', 'protect_element', 'use_specialprofile', 'cluster_locations', 'split_geojson'],

        'map'                         => '{general_legend},name,location_type;'.
                                         '{map_legend},width,height,margin,show_locations,center_geox,center_geoy,center_rotation,zoom,geolocation,restrict_area;'.
                                         '{profile_legend},profile,profile_mobile,use_specialprofile;',

        'none'                        => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,hide_child,data_hidelayer,hideInStarboard,addZoom,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},be_optimize_checkboxes_limit;',

        'single'                      => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,hide_child,data_hidelayer,hideInStarboard,addZoom,loc_geox,loc_geoy,locstyle,zIndex,loc_only_in_parent,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'table'                       => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,tab_source,tab_pid,tab_pid1,tab_labeldisplay,tab_tooltipdisplay,tab_directlink,tab_force_target_blank,tab_whereclause,tabJoinclause,tab_orderby,tab_filter_alias,routing_to,locstyle,zIndex,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,cluster_locations,async_content,zoom_locations,hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'gpx'                         => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,data_file,data_url,locstyle,zIndex,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'kml'                         => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,data_file,data_url,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'geojson'                     => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,data_file,split_geojson,data_content,data_projection,locstyle,zIndex,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'osm'                         => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,data_file,data_url,data_forcenodes,locstyle,zIndex,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,cluster_locations,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'overpass'                    => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,ovp_request,ovp_bbox_limited,data_forcenodes,data_additionalgeometries,locstyle,zIndex,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,cluster_locations,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'link'                        => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,data_hidelayer,hideInStarboard,addZoom,initial_opened,link_id;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},be_optimize_checkboxes_limit;',

        'c4gForum'                    => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,forums,forum_jumpto,forum_reassign_layer,loc_label,tooltip, tooltip_length,enablePopup,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;',

        'startab'                     => '{general_legend},name,location_type;' .
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,awesomeicon;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},be_optimize_checkboxes_limit;',

        'folder'                      => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,data_hidelayer,hideInStarboard,addZoom,data_folder,locstyle,zIndex,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,hide_when_in_tab,cssClass;'.
                                         '{protection_legend:hide},protect_element;'.
                                         '{publish_legend:hide},published,publishStart,publishStop;'.
                                         '{expert_legend:hide},be_optimize_checkboxes_limit;',
        ],

    // Subpalettes
    'subpalettes' =>
        [
        'use_specialprofile'          => 'specialprofile, specialprofile_mobile, specialprofile_groups',
        'enablePopup'                 => 'popup_info,routing_to',
        'protect_element'             => 'permitted_groups',
        'popup_extend'                => 'forums',
        'cluster_locations'           => 'cluster_distance, cluster_fillcolor, cluster_fontcolor, cluster_zoom,cluster_popup',
        'split_geojson'               => 'geojson_attributes, geojson_zoom'
        ],

    // Fields
    'fields' =>
        [
        'id' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment",
            'search'                  => true
            ],
        'pid' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'importId' =>
            [
            'sql'                     => "bigint(20) unsigned NOT NULL default '0'",
            'eval'                    => ['doNotCopy' => true]
            ],
        'sorting' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'tstamp' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'name' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['name'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => ['mandatory'=>true, 'maxlength'=>255],
            'sql'                     => "varchar(100) NOT NULL default ''",
            'search'                  => true
            ],
        'location_type' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['location_type'],
                'exclude'                 => true,
                'default'                 => 'map',
                'inputType'               => 'radio',
                'options_callback'        => ['tl_c4g_maps','getLocationTypes'],
                'eval'                    => ['submitOnChange' => true],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "varchar(100) NOT NULL default 'map'"
            ],
        'width' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['width'],
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'options'                 => ['px', '%'],
                'eval'                    => [
                    'rgxp'=>'digit_auto_inherit',
                    'tl_class'=>'long',
                    'includeBlankOption'=>true
                ],
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'height' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['height'],
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'options'                 => ['px', '%', 'vh'],
                'eval'                    => [
                    'rgxp'=>'digit_auto_inherit',
                    'tl_class'=>'long',
                    'includeBlankOption'=>true
                ],
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'margin' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['margin'],
                'exclude'                 => true,
                'inputType'               => 'trbl',
                'options'                 => ['px', '%', 'em', 'vh', 'vw'],
                'eval'                    => [
                    'rgxp'=>'digit_auto_inherit',
                    'includeBlankOption'=>true
                ],
                'sql'                     => "varchar(128) NOT NULL default ''"
            ],
        'show_locations' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['show_locations'],
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['0', '1', '2'],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['show_locations'],
                'default'                 => '0',
                'eval'                    => ['submitOnChange'=>true,'tl_class'=>'clr'],
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'min_gap' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['min_gap'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'center_geox' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geox'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setCenterLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'center_geoy' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['center_geoy'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setCenterLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'center_rotation' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['center_rotation'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(3) unsigned NOT NULL default '0'"
            ],
        'zoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '10',
                'eval'                    => ['tl_class'=>'clr'],
                'sql'                     => "varchar(20) NOT NULL default '10'"
            ],
        'geolocation' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geolocation_zoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geolocation_zoom'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '16',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '16'"
            ],
        'restrict_area' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restrict_area'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'restr_bottomleft_geox' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geox'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_bottomleft_geoy' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_bottomleft_geoy'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_topright_geox' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geox'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_topright_geoy' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['restr_topright_geoy'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'profile' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['profile'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_c4g_map_profiles.name',
            'eval'                    => ['tl_class'=>'long',
                                               'includeBlankOption'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
                                               'submitOnChange' => true, 'chosen' => true, 'alwaysSave' => true],
            'load_callback'           => [['tl_c4g_maps','getDefaultProfile']],
            'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'",
            'xlabel' => array
            (
                array('tl_c4g_maps', 'profilesLink')
            )

            ],
        'profile_mobile' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['profile_mobile'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_c4g_map_profiles.name',
            'eval'                    => [
                                            'tl_class'=>'long',
                                            'chosen' => true,
                                            'includeBlankOption'=>true
            ],
            'sql'                     => "int(10) unsigned NOT NULL default '0'",
            'xlabel' => array
            (
                array('tl_c4g_maps', 'profilesLink')
            )
            ],
        'use_specialprofile' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['use_specialprofile'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class'=>'long','submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'specialprofile' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'foreignKey'              => 'tl_c4g_map_profiles.name',
                'eval'                    => ['tl_class'=>'long','submitOnChange' => true, 'alwaysSave' => true,  'chosen' => true],
                'load_callback'           => [['tl_c4g_maps','getDefaultProfile']],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => array
                (
                    array('tl_c4g_maps', 'profilesLink')
                )
            ],
        'specialprofile_mobile' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_mobile'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'foreignKey'              => 'tl_c4g_map_profiles.name',
                'eval'                    => ['tl_class'=>'long', 'includeBlankOption'=>true,  'chosen' => true],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => array
                (
                    array('tl_c4g_maps', 'profilesLink')
                )
            ],
        'specialprofile_groups' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialprofile_groups'],
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'foreignKey'              => 'tl_member_group.name',
                'eval'                    => ['tl_class'=>'clr', 'mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'data_layername' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_layername'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(254) NOT NULL default ''",
                'search'                  => true
            ],
        'initial_opened' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['initial_opened'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'exemptFromFilter' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['exemptFromFilter'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'exemptFromRealFilter' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['exemptFromRealFilter'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'filterByBaseLayer' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['filterByBaseLayer'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_maps','getAllBaselayers'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true, 'multiple' => true],
            'sql'                     => "blob NULL",
            'xlabel' => array
            (
                array('tl_c4g_maps', 'baselayersLink')
            )
        ],
        'loc_geox' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geox'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
                'save_callback'           => [['tl_c4g_maps','setLocLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],

        'loc_geoy' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_geoy'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
                'save_callback'           => [['tl_c4g_maps','setLocLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'tab_source' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_source'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getTabSources'],
                'eval'                    => ['submitOnChange' => true,  'chosen' => true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tab_pid' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getTabParentList'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'eval'                    =>  ['tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true]
            ],
        'tab_pid1' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_pid1'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getTabParentList1'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'eval'                    => ['tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true]
            ],
        'tab_labeldisplay' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_labeldisplay'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['OFF','1ST','1ST_MORE','1ST_COUNT','ALL'],
                'default'                 => '1ST_MORE',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(10) NOT NULL default '1ST_MORE'"
            ],
        'tab_tooltipdisplay' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_tooltipdisplay'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['OFF','1ST','1ST_MORE','1ST_COUNT','ALL'],
                'default'                 => '1ST_MORE',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(10) NOT NULL default '1ST_MORE'"
            ],
        'tab_directlink' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_directlink'],
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'tab_force_target_blank' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_force_target_blank'],
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'tab_whereclause' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_whereclause'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['decodeEntities'=>true], // -> hier werden die HTML Entities deaktiviert
                'sql'                     => "text NULL"
            ],
        'tabJoinclause' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tabJoinclause'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['decodeEntities'=>true], // -> hier werden die HTML Entities deaktiviert
                'sql'                     => "text NULL"
            ],
        'tab_orderby' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_orderby'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>128],
                'sql'                     => "varchar(128) NOT NULL default ''"
            ],
        'tab_filter_alias' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tab_filter_alias'],
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'data_file' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_file'],
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['trailingSlash' => false, 'extensions' => 'geojson,kml,gpx,osm', 'files' => true, 'fieldType' => 'radio'],
                'sql'                     => "binary(16) NULL"
            ],
        'data_url' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_url'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'],
                'wizard'                  => [['tl_c4g_maps', 'pickUrl']],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'split_geojson' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['split_geojson'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geojson_attributes' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geojson_attributes'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'sql'                     => "text NULL"
            ],
        'geojson_zoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['geojson_zoom'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'addZoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['addZoom'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'ovp_request' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_request'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['allowHtml'=>true, 'preserveTags'=>true],
                'sql'                     => "text NULL"
            ],
        'ovp_bbox_limited' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['ovp_bbox_limited'],
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'link_id' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['link_id'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps', 'get_link_items'],
                'eval'                    => ['chosen' => true],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'forums' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['forums'],
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'options_callback'        => ['tl_c4g_maps','getMapForums'],
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'forum_jumpto' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_jumpto'],
                'exclude'                 => true,
                'inputType'               => 'pageTree',
                'eval'                    => ['fieldType'=>'radio'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'forum_reassign_layer' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['forum_reassign_layer'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['NO','THREAD'],
                'default'                 => 'NO',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(10) NOT NULL default 'NO'"
            ],
        'awesomeicon' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['awesomeicon'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'clr'],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'data_folder' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_folder'],
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['trailingSlash' => false, 'files' => false, 'fieldType' => 'radio'],
                'sql'                     => "binary(16) NULL"
            ],
        'data_content' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_content'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['tl_class'=>'wizard', 'preserve_tags'=>true],
                // 'save_callback'           => array(array('tl_c4g_maps','setLocData')),
                'wizard'                  => array(array('con4gis\MapsBundle\Classes\Contao\GeoEditor', 'getEditorLink')),
                'sql'                     => "text NULL"
            ],
        'data_projection' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_projection'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['MERC','WGS84'],
                'default'                 => 'WGS84',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(5) NOT NULL default 'WGS84'"
            ],
        'data_forcenodes' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_forcenodes'],
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'data_additionalgeometries' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_additionalgeometries'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'locstyle' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyle'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getLocStyles'],
                'eval'                    => ['tl_class'=>'clr', 'chosen' => true],
                'wizard' =>
                    [
                        ['tl_c4g_maps', 'editLocationStyle']
                    ],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => array
                (
                    array('tl_c4g_maps', 'locstylesLink')
                )
            ],
        'zIndex' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['zIndex'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'loc_onclick_zoomto' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_onclick_zoomto'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'loc_minzoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_minzoom'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'loc_maxzoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_maxzoom'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'cluster_locations' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_locations'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cluster_distance' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_distance'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>100],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'cluster_fillcolor' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fillcolor'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '4975A8',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard', 'mandatory'=>true],
                'sql'                     => "varchar(6) NOT NULL default '4975A8'"
            ],
        'cluster_fontcolor' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_fontcolor'],
                'exclude'                 => true,
                'default'                 => 'ffffff',
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'],
                'sql'                     => "varchar(6) NOT NULL default 'ffffff'"
            ],
        'cluster_zoom' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_zoom'],
                'default'                 => '17',
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '17'"
            ],
        'cluster_popup' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cluster_popup'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'async_content' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['async_content'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'loc_only_in_parent' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_only_in_parent'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'loc_label' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_label'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tooltip' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['tl_class'=>'long'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tooltip_length' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tooltip_length'],
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '30',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(100) NOT NULL default '30'"
            ],
        'enablePopup' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['enablePopup'],
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'popupType' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popupType'],
                'exclude'                 => true,
                'default'                 => 'text',
                'inputType'               => 'radio',
                'options'                 => ['text','template','popup_info'],
                'eval'                    => ['mandatory'=>true, 'submitOnChange' => true],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['popupType'],
                'sql'                     => "char(10) NOT NULL default 'text'"
            ],
        'popupTemplate' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popupTemplate'],
                'exclude'                 => true,
                'default'                 => 'popup_default',
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps', 'getPopupTemplates'],
                'eval'                    => ['mandatore'=>true, 'chosen'=>true],
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popup_info' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_info'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['rte'=>'tinyMCE'],
                'sql'                     => "text NULL"
            ],
        'popup_async' =>
            [
                //@Todo Asynchrone Abfrage (GPX,KML) reparieren und einblenden
                #'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_async'],
                #'exclude'                 => true,
                'default'                 => false,
                #'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'popup_extend' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['popup_extend'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'loc_linkurl' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['loc_linkurl'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'],
                'wizard'                  => [['tl_c4g_maps', 'pickUrl']],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'zoom_locations' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['zoom_locations'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hover_location' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_location'],
                'exclude'                 => true,
                'default'                 => false,
                'eval'                    => ['submitOnChange' => true],
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hover_style' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hover_style'],
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getLocStyles'],
                'eval'                    => ['tl_class'=>'clr',  'chosen' => true],
                'wizard' =>
                    [
                        ['tl_c4g_maps', 'editLocationStyle']
                    ],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => array
                (
                    array('tl_c4g_maps', 'locstylesLink')
                )
            ],
        'hide_when_in_tab' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_when_in_tab'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hide_child' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hide_child'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'data_hidelayer' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['data_hidelayer'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hideInStarboard' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['hideInStarboard'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cssClass' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['cssClass'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['tl_class'=>'w50 clr'],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'protect_element' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['protect_element'],
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'permitted_groups' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['permitted_groups'],
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'foreignKey'              => 'tl_member_group.name',
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'published' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['published'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['tl_class'=>'clr'],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'publishStart' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['publishStart'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '',
                'eval'                    => array('rgxp'=>'datim', 'datepicker'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'publishStop' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['publishStop'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '',
                'eval'                    => array('rgxp'=>'datim', 'datepicker'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'excludeFromSingleLayer' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['excludeFromSingleLayer'],
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['2','1','0'],
                'eval'                    => ['mandatory'=>true, 'submitOnChange' => true],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['excludeFromSingleLayer'],
                'default'                 => '2',
                'sql'                     => "char(1) NOT NULL default '2'"
            ],
        'be_optimize_checkboxes_limit' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['be_optimize_checkboxes_limit'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '10',
                'eval'                    => ['rgxp'=>'digit', 'submitOnChange' => true],
                'sql'                     => "int(10) unsigned NOT NULL default '10'"
            ],


        //Backwards compatibility
        'is_map' =>
            [
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'routing_to' => [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['routing_to'],
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ]

//ToDo check fields

//        'include_sublocations' =>
//            [
//            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['include_sublocations'],
//            'exclude'                 => true,
//            'default'                 => true,
//            'inputType'               => 'checkbox',
//            'sql'                     => "char(1) NOT NULL default '1'"
//            ],

//        'showPopupOnActive' =>
//            [
//            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['showPopupOnActive'],
//            'exclude'                 => true,
//            'default'                 => false,
//            'inputType'               => 'checkbox',
//            'sql'                     => "char(1) NOT NULL default ''"
//            ],
        ]

    ];

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
            return '<a href="'.$this->addToUrl($href.'&amp;id='.$row['id']).'" title="'.specialchars($title).'"'.$attributes.'>'.Image::getHtml($icon, $label).'</a> ';
        } else {
            return Image::getHtml(preg_replace('/\.svg/i', '_.svg', $icon)).' ';
        }
    }

    /**
     * Return all Location Styles for current Maps Profile as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")->execute();
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
        $return = [];
        $objTables = C4gMapTablesModel::findAll();
        while ($objTables && $objTables->next()) {
            $return[$objTables->id] = \Contao\Controller::replaceInsertTags($objTables->name);
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
        $return = \con4gis\MapsBundle\Classes\Utils::getLocationTypes();
        if (C4GVersionProvider::isInstalled('con4gis/forum')) {
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
        $forumHelper = new \con4gis\ForumBundle\Classes\C4GForumHelper($this->Database);
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
        $return = [];
        if ($dc->activeRecord->tab_source<>'') {
            $tabsource = C4gMapTablesModel::findByPk($dc->activeRecord->tab_source);
        } else {
            $objTables = C4gMapTablesModel::findAll();
            $tabsource = $objTables[0];
        }
        $ptable = unserialize($tabsource->ptable)[0];
        $ptableOptions = str_replace($ptable . '.','', unserialize($tabsource->ptableOptions)[0]);
        $ptableCompareField = str_replace($ptable . '.','', unserialize($tabsource->ptableCompareField)[0]);
        if($ptable && $ptableOptions && $ptableCompareField) {
            $strSelect = "SELECT $ptableCompareField, $ptableOptions FROM $ptable";
            $objResult = $this->Database->prepare($strSelect)->execute();
            while ($objResult->next()) {
                $return[$objResult->$ptableCompareField] = $objResult->$ptableOptions;
            }
        }
        return $return;

    }

    /**
     * Return all entries in the parent table for the selection
     * @param object
     * @return array
     */
    public function getTabParentList1(DataContainer $dc)
    {
        $return = [];
        if ($dc->activeRecord->tab_source<>'') {
            $tabsource = C4gMapTablesModel::findByPk($dc->activeRecord->tab_source);
        } else {
            $objTables = C4gMapTablesModel::findAll();
            $tabsource = $objTables[0];
        }
        $ptable = unserialize($tabsource->ptable)[1];
        $ptableOptions = str_replace($ptable . '.','', unserialize($tabsource->ptableOptions)[1]);
        $ptableCompareField = str_replace($ptable . '.','', unserialize($tabsource->ptableCompareField)[1]);
        if($ptable && $ptableOptions && $ptableCompareField){
            $strSelect = "SELECT $ptableCompareField, $ptableOptions FROM $ptable";
            $objResult = $this->Database->prepare($strSelect)->execute();
            while ($objResult->next()) {
                $return[$objResult->$ptableCompareField] = $objResult->$ptableOptions;
            }
        }
        return $return;
    }

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
    public function generateLabel($row, $label, $dc)
    {
        $image = 'bundles/con4gismaps/images/be-icons/';

        //Backwards compatibility (data < con4gis 7): so that maps are set as maps again. is_map can removed in later versions.
        if (($row['location_type'] == 'none') && ($row['is_map'] == '1')){
            $row['location_type'] = 'map';
            $row['is_map'] = '0';
            Database::getInstance()->prepare("UPDATE tl_c4g_maps SET location_type=?, is_map=? WHERE is_map=?")->execute($row['location_type'],$row['is_map'],'1');
        }

        switch ($row['location_type']) {
            case 'map':
                $image .= 'map';
                break;
            case 'none':
                $image .= 'mapfolder';
                break;
            case 'single':
                $image .= 'location';
                break;
            case 'table':
                $image .= 'table';
                break;
            case 'gpx':
                $image .= 'gpx';
                break;
            case 'kml':
                $image .= 'kml';
                break;
            case 'geojson':
                $image .= 'geojson';
                break;
            case 'osm':
                $image .= 'osm';
                break;
            case 'overpass':
                $image .= 'overpass';
                break;
            case 'link':
                $image .= 'link';
                break;
            case 'c4gForum':
                $image .= 'c4gforum';
                break;
            case 'startab':
                $image .= 'starboard';
                break;
            case 'folder':
                $image .= 'from_path';
                break;
            case 'gnrcPrjct':
                $image .= 'editor';
                break;
            case 'tPois':
                $image .= 'tracking_pois';
                break;
            case 'tTracks':
                $image .= 'tracking_tracks';
                break;
            case 'tLive':
                $image .= 'tracking_live';
                break;
            case 'ffOperat':
                $image .= 'operation';
                break;
            case 'mpCntnt':
                $image .= 'data_category';
                break;
            case 'mpCntnt_directory':
                $image .= 'data_directory';
                break;
            default:
                $image .= '';
                break;
        }

        if (!$row['published']) {
            $image .= '_1';
        }
        $image .= '.svg';

        if ($row['location_type'] != 'map') {
            $label = ' '.$row['name'];
        }

        return Image::getHtml($image) . $label;
    }

    /**
     * Update the palette information that depend on other values
     */
    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) return;

        $objMap = $this->Database->prepare("SELECT location_type, show_locations, hover_location, restrict_area, geolocation, be_optimize_checkboxes_limit, popupType FROM tl_c4g_maps WHERE id=?")
            ->limit(1)
            ->execute($dc->id);

        if ($objMap->numRows > 0) {
            if ($objMap->location_type == 'map' && $objMap->show_locations == '1') {
                $calcExtentFields = 'min_gap,';
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map'] = str_replace(",show_locations,", ",show_locations,".$calcExtentFields, $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map']);
            }

            if($objMap->hover_location == '1') {
                foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $paletteKey=>$paletteString)
                {
                    if (!is_array($paletteString) && strpos($paletteString, "hover_location")!==false)
                    {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$paletteKey] = str_replace("hover_location", "hover_location,hover_style", $paletteString);

                    }
                }
            }

            if ($objMap->location_type == 'map' && $objMap->geolocation) {
                $geolocationFields = 'geolocation_zoom,';
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map'] = str_replace(",geolocation,", ",geolocation,".$geolocationFields, $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map']);
            }

            if ($objMap->location_type == 'map' && $objMap->restrict_area) {
                $restrictAreaFields = ',restr_bottomleft_geox,restr_bottomleft_geoy,restr_topright_geox,restr_topright_geoy';
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map'] = str_replace(",restrict_area;", ",restrict_area".$restrictAreaFields.';', $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map']);
            }

            //additional popup fields
            switch ($objMap->location_type) {
//ToDo where is showPopupOnActivate?
//                case 'single':
//                    $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "showPopupOnActivate,popup_info", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
//                    break;
                case 'gpx':
                case 'kml':
                    $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popup_info,popup_async", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    break;
                case 'osm':
                case 'overpass':
                    if ($objMap->popupType == "template") {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popupType,popupTemplate", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    } else if ($objMap->popupType == "popup_info") {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popupType", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    } else {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popupType,popup_info", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    }

                    if (C4GVersionProvider::isInstalled('con4gis/forum')) {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace('popup_info', 'popup_info,popup_extend', $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    }

                    break;
                default:
                    break;
            }

            // convert checkboxes to chosenfields, if there are to many locationstyles
            if (intval($objMap->be_optimize_checkboxes_limit) > 0) {
                // subforums-options
                if (C4GVersionProvider::isInstalled('con4gis/forum')) {
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
                    $varValue = $profiles[$length-1]->id;
                }
            }
        }
        return $varValue;
    }


    /**
     * Validate Center Lon
     */
    public function setCenterLon($varValue, DataContainer $dc)
    {
        if ($dc->activeRecord->show_locations > 0) {
            if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
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
        if ($dc->activeRecord->show_locations > 0) {
            if (!\con4gis\MapsBundle\Classes\Utils::validateLat($varValue)) {
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
            if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
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
            if (!\con4gis\MapsBundle\Classes\Utils::validateLat($varValue)) {
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
        if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }

    /**
     * Validate Location Lat
     */
    public function setLocLat($varValue, DataContainer $dc)
    {
        if (!\con4gis\MapsBundle\Classes\Utils::validateLat($varValue)) {
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
            $icon = 'invisible.svg';
        }

        return '<a href="'.$this->addToUrl($href).'" title="'.specialchars($title).'"'.$attributes.'>'.\Image::getHtml($icon, $label).'</a> ';
    }


    /**
     * Disable/enable an element
     * @param integer
     * @param boolean
     */
    public function toggleVisibility($intId, $blnVisible, Contao\DataContainer $dc=null)
    {
        // Check permissions to publish
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_maps::published', 'alexf')) {
            C4gLogModel::addLogEntry('maps','Not enough permissions to publish/unpublish con4gis\MapsBundle\Classes\Utils ID "'.$intId.'"');
            $this->redirect('contao/main.php?act=error');
        }

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

//ToDo Label Icons on toggle
//        // Trigger the label_callback
//        $callback = $GLOBALS['TL_DCA']['tl_c4g_maps']['list']['label']['label_callback'];
//        $row = ['id' => $intId];
//        $this->import($callback[0]);
//        $image = $this->{$callback[0]}->{$callback[1]}($row,'');

        // Trigger the onsubmit_callback
        if (is_array($GLOBALS['TL_DCA']['tl_c4g_maps']['config']['onsubmit_callback']))
        {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['config']['onsubmit_callback'] as $callback)
            {
                if (is_array($callback))
                {
                    $this->import($callback[0]);
                    $this->{$callback[0]}->{$callback[1]}($dc);
                }
                elseif (is_callable($callback))
                {
                    $callback($dc);
                }
            }
        }

        $objVersions = new Versions('tl_c4g_maps', $intId);
        $objVersions->initialize();
    }

    /**
     * Return the page pick wizard for the linkUrl
     * @param DataContainer $dc
     */
    public function pickUrl(DataContainer $dc)
    {
        return ' <a href="contao/page.php?do='.Input::get('do').'&amp;table='.$dc->table.'&amp;field='.$dc->field.'&amp;value='.str_replace(array('{{link_url::', '}}'), '', $dc->value).'" title="'.specialchars($GLOBALS['TL_LANG']['MSC']['pagepicker']).'" onclick="Backend.getScrollOffset();Backend.openModalSelector({\'width\':765,\'title\':\''.specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['MOD']['page'][0])).'\',\'url\':this.href,\'id\':\''.$dc->field.'\',\'tag\':\'ctrl_'.$dc->field . ((Input::get('act') == 'editAll') ? '_' . $dc->id : '').'\',\'self\':this});return false">' . Image::getHtml('pickpage.svg', $GLOBALS['TL_LANG']['MSC']['pagepicker'], 'style="vertical-align:top;cursor:pointer"') . '</a>';
    }

    //editLocationType
    /**
   	 * Return the edit location style wizard
   	 * @param \DataContainer
   	 * @return string
   	 */
   	public function editLocationStyle(DataContainer $dc)
   	{
   		return ($dc->value < 1) ? '' : ' <a href="contao/main.php?do=c4g_map_locstyles&amp;act=edit&amp;id=' . $dc->value . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . sprintf(specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1]), $dc->value) . '" style="padding-left:3px" onclick="Backend.openModalIframe({\'width\':768,\'title\':\'' . specialchars(str_replace("'", "\\'", sprintf($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1], $dc->value))) . '\',\'url\':this.href});return false">' . Image::getHtml('alias.svg', $GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][0], 'style="vertical-align:top"') . '</a>';
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
    public function getAllBaseLayers(DataContainer $dc)
    {
        $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers ORDER BY name")
            ->execute();
        while ($baseLayers->next()) {
            $return[$baseLayers->id] = $baseLayers->name;
        }
        return $return;
    }

    public function baselayersLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_map_baselayers&amp;table=tl_c4g_map_baselayers&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editBaselayers']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_maps']['editBaselayers'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    public function locstylesLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_map_locstyles&amp;table=tl_c4g_map_locstyles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editLocstyles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_maps']['editLocstyles'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    public function profilesLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_map_profiles&amp;table=tl_c4g_map_profiles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editProfiles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_maps']['editProfiles'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }


    /**
     * @param \Contao\DataContainer $dc
     */
    public function showInfoMessage(Contao\DataContainer $dc)
    {
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_maps']['infotext']);
    }

}
