<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

use con4gis\CoreBundle\Classes\C4GVersionProvider;
use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use Contao\Image;

\Contao\System::loadLanguageFile('tl_c4g_maps');

$GLOBALS['TL_DCA']['tl_c4g_maps'] =
    [
    'config' =>
        [
        'label'                       => &$GLOBALS['TL_LANG']['MOD']['c4g_maps'][0],
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
    'palettes' =>
        [
        '__selector__'                => ['location_type', 'tab_source', 'show_locations', 'enablePopup', 'popup_extend', 'protect_element', 'use_specialprofile', 'cluster_locations', 'split_geojson', 'c4gioType'],

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
        'con4gisio'                   => '{general_legend},name,location_type;'.
                                         '{con4gisio_legend},c4gioType;'.
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,locstyle,zIndex,loc_label,tooltip,tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
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
    'subpalettes' =>
        [
        'use_specialprofile'          => 'specialprofile, specialprofile_mobile, specialprofile_groups',
        'enablePopup'                 => 'popup_info,routing_to',
        'protect_element'             => 'permitted_groups',
        'popup_extend'                => 'forums',
        'cluster_locations'           => 'cluster_distance, cluster_fillcolor, cluster_fontcolor, cluster_zoom,cluster_popup',
        'split_geojson'               => 'geojson_attributes, geojson_zoom',
        'c4gioType_1'                 => 'c4gioString',
        'c4gioType_2'                 => 'c4gioDropdown'
        ],
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
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => ['mandatory'=>true, 'maxlength'=>255],
            'sql'                     => "varchar(100) NOT NULL default ''",
            'search'                  => true
            ],
        'location_type' =>
            [
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
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'center_geox' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setCenterLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'center_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setCenterLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'center_rotation' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(3) unsigned NOT NULL default '0'"
            ],
        'zoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '10',
                'eval'                    => ['tl_class'=>'clr'],
                'sql'                     => "varchar(20) NOT NULL default '10'"
            ],
        'geolocation' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geolocation_zoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '16',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '16'"
            ],
        'restrict_area' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'restr_bottomleft_geox' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_bottomleft_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_topright_geox' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_topright_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [['tl_c4g_maps','setRestrLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'profile' =>
            [
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
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class'=>'long','submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'specialprofile' =>
            [
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
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'foreignKey'              => 'tl_member_group.name',
                'eval'                    => ['tl_class'=>'clr', 'mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'data_layername' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(254) NOT NULL default ''",
                'search'                  => true
            ],
        'initial_opened' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'exemptFromFilter' => [
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'exemptFromRealFilter' => [
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'filterByBaseLayer' => [
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
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
                'save_callback'           => [['tl_c4g_maps','setLocLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],

        'loc_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
                'save_callback'           => [['tl_c4g_maps','setLocLat']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'tab_source' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getTabSources'],
                'eval'                    => ['submitOnChange' => true,  'chosen' => true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tab_pid' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getTabParentList'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'eval'                    =>  ['tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true]
            ],
        'tab_pid1' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getTabParentList1'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'eval'                    => ['tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true]
            ],
        'tab_labeldisplay' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['OFF','1ST','1ST_MORE','1ST_COUNT','ALL'],
                'default'                 => '1ST_MORE',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(10) NOT NULL default '1ST_MORE'"
            ],
        'tab_tooltipdisplay' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['OFF','1ST','1ST_MORE','1ST_COUNT','ALL'],
                'default'                 => '1ST_MORE',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(10) NOT NULL default '1ST_MORE'"
            ],
        'tab_directlink' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'tab_force_target_blank' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'tab_whereclause' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['decodeEntities'=>true],
                'sql'                     => "text NULL"
            ],
        'tabJoinclause' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['decodeEntities'=>true],
                'sql'                     => "text NULL"
            ],
        'tab_orderby' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>128],
                'sql'                     => "varchar(128) NOT NULL default ''"
            ],
        'tab_filter_alias' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'data_file' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['trailingSlash' => false, 'extensions' => 'geojson,kml,gpx,osm', 'files' => true, 'fieldType' => 'radio'],
                'sql'                     => "binary(16) NULL"
            ],
        'data_url' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'],
                'wizard'                  => [['tl_c4g_maps', 'pickUrl']],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'split_geojson' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geojson_attributes' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'sql'                     => "text NULL"
            ],
        'geojson_zoom' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'addZoom' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'ovp_request' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['allowHtml'=>true, 'preserveTags'=>true],
                'sql'                     => "text NULL"
            ],
        'ovp_bbox_limited' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'link_id' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps', 'get_link_items'],
                'eval'                    => ['chosen' => true],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'forums' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'options_callback'        => ['tl_c4g_maps','getMapForums'],
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'forum_jumpto' =>
            [
                'exclude'                 => true,
                'inputType'               => 'pageTree',
                'eval'                    => ['fieldType'=>'radio'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'forum_reassign_layer' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['NO','THREAD'],
                'default'                 => 'NO',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(10) NOT NULL default 'NO'"
            ],
        'awesomeicon' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'clr'],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'data_folder' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['trailingSlash' => false, 'files' => false, 'fieldType' => 'radio'],
                'sql'                     => "binary(16) NULL"
            ],
        'data_content' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['tl_class'=>'wizard', 'preserve_tags'=>true, 'style'=>'width: calc(100% - 50px); max-height: 480px'],
                'wizard'                  => array(array('con4gis\MapsBundle\Classes\Contao\GeoEditor', 'getEditorLink')),
                'sql'                     => "text NULL"
            ],
        'data_projection' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options'                 => ['MERC','WGS84'],
                'default'                 => 'WGS84',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references'],
                'sql'                     => "char(5) NOT NULL default 'WGS84'"
            ],
        'data_forcenodes' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'data_additionalgeometries' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'locstyle' =>
            [
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
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'loc_onclick_zoomto' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'loc_minzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'loc_maxzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'cluster_locations' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cluster_distance' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>100],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'cluster_fillcolor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '4975A8',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard', 'mandatory'=>true],
                'sql'                     => "varchar(6) NOT NULL default '4975A8'"
            ],
        'cluster_fontcolor' =>
            [
                'exclude'                 => true,
                'default'                 => 'ffffff',
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'],
                'sql'                     => "varchar(6) NOT NULL default 'ffffff'"
            ],
        'cluster_zoom' =>
            [
                'default'                 => '17',
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '17'"
            ],
        'cluster_popup' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'async_content' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'loc_only_in_parent' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'loc_label' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tooltip' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['tl_class'=>'long'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tooltip_length' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'default'                 => '30',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(100) NOT NULL default '30'"
            ],
        'enablePopup' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'popupType' =>
            [
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
                'exclude'                 => true,
                'default'                 => 'popup_default',
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps', 'getPopupTemplates'],
                'eval'                    => ['mandatore'=>true, 'chosen'=>true],
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popup_info' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['rte'=>'tinyMCE'],
                'sql'                     => "text NULL"
            ],
        'popup_async' =>
            [
                'default'                 => false,
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'popup_extend' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'loc_linkurl' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'],
                'wizard'                  => [['tl_c4g_maps', 'pickUrl']],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'zoom_locations' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hover_location' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'eval'                    => ['submitOnChange' => true],
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hover_style' =>
            [
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
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hide_child' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'data_hidelayer' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hideInStarboard' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cssClass' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['tl_class'=>'w50 clr'],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'protect_element' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'permitted_groups' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'foreignKey'              => 'tl_member_group.name',
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'published' =>
            [
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['tl_class'=>'clr'],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'publishStart' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '',
                'eval'                    => array('rgxp'=>'datim', 'datepicker'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'publishStop' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '',
                'eval'                    => array('rgxp'=>'datim', 'datepicker'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'excludeFromSingleLayer' =>
            [
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['2','1','0'],
                'eval'                    => ['mandatory'=>true, 'submitOnChange' => true],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['excludeFromSingleLayer'],
                'default'                 => '2',
                'sql'                     => "char(1) NOT NULL default '2'"
            ],
        'c4gioType' =>
            [
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['1','2'],
                'eval'                    => ['mandatory'=>true, 'submitOnChange' => true],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['references']['c4gioType'],
                'default'                 => '1',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'c4gioString' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>100, "regxp" => "^[0-9]{5}(,[0-9]{5})*$"],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'c4gioDropdown' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_maps','getC4gIoDropdown'],
                'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'multiple' => true],
                'sql'                     => "blob NULL"
            ],
        'be_optimize_checkboxes_limit' =>
            [
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
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ]
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
    public function getC4gIoDropdown(DataContainer $dc) {
        $currentType = $dc->activeRecord->c4gioType;
        $response = [];
        if ($currentType == 2) {
            $response = [
                "NDS"   => "Niedersachsen",
                "SH"    => "Schleswig-Holstein",
                "MV"    => "Mecklenburg-Vorpommern",
                "BB"    => "Brandenburg",
                "SN"    => "Sachsen",
                "ST"    => "Sachsen-Anhalt",
                "TH"    => "Thüringen",
                "BY"    => "Bayern",
                "BW"    => "Baden-Württemberg",
                "SL"    => "Saarland",
                "RLP"   => "Rheinland-Pfalz",
                "H"     => "Hessen",
                "NRW"   => "Nordrhein-Westfalen",
                "HB"    => "Bremen",
                "HH"    => "Hamburg",
                "B"     => "Berlin"
            ];
        }
        return $response;
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
        $ptable = \Contao\StringUtil::deserialize($tabsource->ptable)[0];
        $ptableOptions = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableOptions)[0]);
        $ptableCompareField = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableCompareField)[0]);
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
        $ptable = \Contao\StringUtil::deserialize($tabsource->ptable)[1];
        $ptableOptions = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableOptions)[1]);
        $ptableCompareField = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableCompareField)[1]);
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
