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

use Contao\DC_Table;
use Contao\System;
use Contao\DataContainer;
use con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator;
use con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMaps;
use con4gis\MapsBundle\Classes\GeoPicker;
use con4gis\MapsBundle\Classes\Contao\GeoEditor;
use con4gis\CoreBundle\Classes\Helper\DcaHelper;

System::loadLanguageFile('tl_c4g_maps');
$cbClass = TlC4gMaps::class;

$GLOBALS['TL_DCA']['tl_c4g_maps'] =
    [
    'config' =>
        [
        'label'                       => &$GLOBALS['TL_LANG']['MOD']['c4g_maps'][0],
        'dataContainer'               => DC_Table::class,
        'enableVersioning'            => true,
        'markAsCopy'                  => 'name',
        'onload_callback'             => [[$cbClass, 'updateDCA'], [$cbClass, 'showInfoMessage']],
        'onsubmit_callback'             => [
            [C4GMapsAutomator::class, 'purgeLayerApiCache']
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
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
            'panelLayout'             => 'filter;search',
            'mode'                    => DataContainer::MODE_TREE,
			'rootPaste'               => true,
			'showRootTrails'          => true,
//			'paste_button_callback'   => ['tl_page', 'pastePage'),
			'defaultSearchField'      => 'name'
            ],
        'label' =>
            [
            'fields'                  => ['name','profile:tl_c4g_map_profiles.name'],
            'format'                  => ' %s ('.$GLOBALS['TL_LANG']['tl_c4g_maps']['profile'][0].': %s)',
            'label_callback'          => [$cbClass,'generateLabel']
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
                    'button_callback'     => [DcaHelper::class, 'back'],
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
                'button_callback'     => [$cbClass, 'copyPageWithSubpages']
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
                'attributes'          => 'onclick="if (!confirm(\'' . (isset($GLOBALS['TL_LANG']['MSC']['deleteConfirm']) ? $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] : null) . '\')) return false; Backend.getScrollOffset();"'
                ],
            'toggle' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'],
                'icon'                => 'visible.svg',
                'button_callback'     => [$cbClass, 'toggleIcon']
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
                                         '{location_legend},data_layername,hide_child,initial_opened,exemptFromRealFilter,exemptFromFilter,filterByBaseLayer,data_hidelayer,hideInStarboard,addZoom,data_file,split_geojson,data_content,data_projection,locstyleGeoJson,locstyle,zIndex,loc_label,tooltip, tooltip_length,enablePopup,loc_linkurl,loc_onclick_zoomto,loc_minzoom,loc_maxzoom,zoom_locations, hover_location,hide_when_in_tab,cssClass;'.
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
        'wfs'                         => '{general_legend},name,location_type;'.
                                         '{location_legend},data_layername,wfsCapabilities,wfsLayers,hide_child,initial_opened,addZoom,locstyle,zIndex,loc_label,tooltip,tooltip_length,hide_when_in_tab,cssClass;'.
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
                'options_callback'        => [$cbClass,'getLocationTypes'],
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
                'save_callback'           => [[$cbClass,'setCenterLon']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'center_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [[$cbClass,'setCenterLat']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
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
                'save_callback'           => [[$cbClass,'setRestrLon']],
                'wizard'                  => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_bottomleft_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [[$cbClass,'setRestrLat']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_topright_geox' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [[$cbClass,'setRestrLon']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'restr_topright_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['maxlength'=>20, 'tl_class'=>'w50 wizard', 'require_input'=>true],
                'save_callback'           => [[$cbClass,'setRestrLat']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
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
            'load_callback'           => [[$cbClass,'getDefaultProfile']],
            'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'",
            'xlabel' => [
                [$cbClass, 'profilesLink']
            ]

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
            'xlabel' => [
                [$cbClass, 'profilesLink']
            ]
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
                'load_callback'           => [[$cbClass,'getDefaultProfile']],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => [
                    [$cbClass, 'profilesLink']
                ]
            ],
        'specialprofile_mobile' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'foreignKey'              => 'tl_c4g_map_profiles.name',
                'eval'                    => ['tl_class'=>'long', 'includeBlankOption'=>true,  'chosen' => true],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => [
                    [$cbClass, 'profilesLink']
                ]
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
            'options_callback'        => [$cbClass,'getAllBaselayers'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true, 'multiple' => true],
            'sql'                     => "blob NULL",
            'xlabel' => [
                ['tl_c4g_maps', $cbClass]
            ]
        ],
        'loc_geox' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
                'save_callback'           => [[$cbClass,'setLocLon']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],

        'loc_geoy' =>
            [
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['mandatory'=>true, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
                'save_callback'           => [[$cbClass,'setLocLat']],
                'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
                'sql'                     => "varchar(20) NOT NULL default ''"
            ],
        'tab_source' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => [$cbClass,'getTabSources'],
                'eval'                    => ['submitOnChange' => true,  'chosen' => true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tab_pid' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => [$cbClass,'getTabParentList'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'eval'                    =>  ['tl_class'=>'clr', 'chosen'=>true, 'includeBlankOption' => true]
            ],
        'tab_pid1' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => [$cbClass,'getTabParentList1'],
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
        'wfsCapabilities' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['submitOnChange' => true, 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wfsLayers' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => [$cbClass, 'getWfsOptions'],
                'eval'                    => ['chosen' => true],
                'sql'                     => "blob NULL"
            ],
        'link_id' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => [$cbClass, 'get_link_items'],
                'eval'                    => ['chosen' => true],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'forums' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'options_callback'        => [$cbClass,'getMapForums'],
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
                'wizard'                  => [[GeoEditor::class, 'getEditorLink']],
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
                'options_callback'        => [$cbClass,'getLocStyles'],
                'eval'                    => ['tl_class'=>'clr', 'chosen' => true],
                'wizard' =>
                    [
                        [$cbClass, 'editLocationStyle']
                    ],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => [
                    [$cbClass, 'locstylesLink']
                ]
            ],
        'locstyleGeoJson' => [
                'exclude'                 => true,
                'default'                 => 'a:0:{}',
                'inputType'               => 'multiColumnWizard',
                'eval'                    => [
                    'columnsCallback'     => [$cbClass, 'locstyleGeoJson']
                ],
                'sql'                     => 'blob'
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
                'options_callback'        => [$cbClass, 'getPopupTemplates'],
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
                'wizard'                  => [[$cbClass, 'pickUrl']],
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
                'options_callback'        => [$cbClass,'getLocStyles'],
                'eval'                    => ['tl_class'=>'clr',  'chosen' => true],
                'wizard' =>
                    [
                        [$cbClass, 'editLocationStyle']
                    ],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => [
                    [$cbClass, 'locstylesLink']
                 ]
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
                'eval'                    => ['rgxp'=>'datim', 'datepicker'=>true, 'tl_class'=>'w50 wizard'],
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'publishStop' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '',
                'eval'                    => ['rgxp'=>'datim', 'datepicker'=>true, 'tl_class'=>'w50 wizard'],
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
                'options_callback'        => [$cbClass,'getC4gIoDropdown'],
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