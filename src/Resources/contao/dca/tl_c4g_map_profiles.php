<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

use con4gis\CoreBundle\Classes\C4GVersionProvider;
use Contao\Image;
use Contao\Backend;
use Contao\DC_Table;
use Contao\StringUtil;
use Contao\System;

$GLOBALS['TL_DCA']['tl_c4g_map_profiles'] =
    [
    'config' =>
        [
        'dataContainer'               => DC_Table::class,
        'enableVersioning'            => true,
        'markAsCopy'                  => 'name',
        'onload_callback'             => [['tl_c4g_map_profiles', 'updateDCA'],['tl_c4g_map_profiles', 'showInfoMessage']],
        'onsubmit_callback'           => [
            ['\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeMapApiCache']
        ],
        'sql' =>
            [
            'keys' =>
                [
                'id' => 'primary'
                ]
            ]
        ],
    'list' =>
        [
        'sorting' =>
            [
            'mode'                    => 2,
            'fields'                  => ['name'],
            'panelLayout'             => 'filter,search',
            'headerFields'            => ['name','theme'],
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
            ],
        'label' =>
            [
            'flag'                    => 1,
            'fields'                  => ['name','theme:tl_c4g_map_themes.name'],
            'showColumns'             => true
            ],
        'global_operations' =>
            [
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.svg'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . ($GLOBALS['TL_LANG']['MSC']['deleteConfirm'] ?? null) . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
                ]
            ]
        ],
    'palettes' =>
        [
        '__selector__'                => ['resize_locstyles_zoom', 'mouse_nav','cluster_all','attribution','hover_popups','overpassEngine', 'cesium','starboard_filter', 'popupHandling','geopicker','consentBanner', 'userLocation'],
        'default'                     => '{general_legend},name,theme,mapFunctions,initial_open_comp;'.
                                         '{navigation_legend:hide},mouse_nav,touch_nav,twoFingers,keyboard_nav;'.
                                         '{click_legend:hide},tooltipOrientation,link_newwindow,link_open_on,hover_popups,popupHandling;'.
                                         '{baselayer_legend:hide},baselayers, default_baselayer,dummyBaselayer,baselayerswitcher_label,baselayer_filter;'.
                                         '{starboard_legend:hide},layerswitcher_label,starboard_filter,starboard_label,starboard_button,starboard_locstyles,starboardInvertZoomActivate,colorZoomMarker,maxZoomStarboard,openPopup,cluster_all;'.
                                         '{geosearch_legend:hide},geosearch_headline,geosearch_engine,geosearchParams,geosearch_result_locstyle,geosearch_placeholder,geosearch_results,geosearch_zoomto,geosearch_zoombounds,geosearch_animate,geosearch_markresult,geosearch_attribution,geosearch_popup,geosearch_animate_duration,geosearch_result_duration;'.
                                         '{editor_legend:hide},editorConfig;'.
                                         '{routing_legend::hide},routerConfig;'.
                                         '{information_legend:hide},attribution,scaleline,mouseposition,permalink_get_param,permalinkSaveId,permalinkWithoutGenerator,zoomlevel,infopage,label_color,resize_locstyles_zoom;'.
                                         '{expert_legend:hide},userLocation,overpassEngine,caching,cesium,external_elements,minZoomStarboardScope,custom_div,geopicker,filters,filterHandling,filterResetButton,be_optimize_checkboxes_limit,consentBanner;'
        ],
    'subpalettes' =>
    [
        'mouse_nav'                   => 'mouse_nav_wheel,mouse_nav_doubleclick_zoom,mouse_nav_zoombox,mouse_nav_kinetic',
        'cluster_all'                 => 'cluster_distance,cluster_fillcolor,cluster_fontcolor,cluster_zoom, cluster_dist_spider, cluster_scale',
        'attribution'                 => 'always_show_attribution,collapsed_attribution,add_attribution,cfg_logo_attribution,div_attribution',
        'hover_popups'                => 'hover_popups_stay',
        'cesium'                      => 'cesium_always',
        'starboard_filter'            => 'starboard_filter_placeholder',
        'overpassEngine_1'            => 'overpass_url',
        'overpassEngine_2'            => '',
        'overpassEngine_3'            => '',
        'resize_locstyles_zoom'       => 'resize_src_zoom,resize_scale_factor,resize_min_scale,resize_max_scale',
        'geopicker'                   => 'geopicker_fieldx,geopicker_fieldy,geopicker_searchdiv,geopicker_attribution,geopicker_disabled,geopicker_anonymous',
        'popupHandling_4'             => 'popupMultiple',
        'popupHandling_1'             => 'popupMultiple',
        'popupHandling_3'             => 'popupHeadline',
        'consentBanner'               => 'cookieInfo,cookieName,cookieValue',
        'userLocation'                => 'userLocationStyle'
    ],
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
        'importId' =>
        [
            'sql'                     => "bigint(20) unsigned NOT NULL default '0'",
            'eval'                    => ['doNotCopy' => true]
        ],
        'name' =>
            [
                'search'				  => true,
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['mandatory'=>true, 'tl_class'=>'long'],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'theme' =>
            [
                'search'				  => true,
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_map_profiles', 'getAllThemes'],
                'eval'                    => ['tl_class'=>'clr', 'includeBlankOption' => true, 'blankOptionLabel' => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
                'sql'                     => "char(10) NOT NULL default ''",
                'xlabel' => array
                (
                    array('tl_c4g_map_profiles', 'themesLink')
                )
            ],
        'mapFunctions' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkboxWizard',
                'default'                 => ['zoom'],
                'options'                 => ['zoom', 'zoomPosition','zoomHome','zoomExtent','fullscreen','print','rotate','graticule', 'layerswitcher', 'starboardscope', 'baselayerswitcher', 'geosearch', 'legend', 'measure', 'overview', 'permalink', 'routing'],
                'eval'                    => ['multiple'=>true, 'helpwizard'=>true],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference'],
                'sql'                     => "text NOT NULL"
            ],
        'initial_open_comp' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => '',
                'options'                 => ['', 'starboard', 'search', 'baselayers','starboardscope', 'measuretools', 'legend', 'routing'],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs'],
                'eval'                    => ['tl_class'=>'clr'],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'mouse_nav' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'mouse_nav_wheel' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'mouse_nav_doubleclick_zoom' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'mouse_nav_zoombox' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'mouse_nav_kinetic' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'touch_nav' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'twoFingers' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'keyboard_nav' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'link_newwindow' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'link_open_on' =>
            [
                'exclude'                 => true,
                'default'                 => 'CLICK',
                'inputType'               => 'radio',
                'options'                 => ['CLICK','DBLCL'],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
                'sql'                     => "char(5) NOT NULL default 'CLICK'"
            ],
        'tooltipOrientation' =>
            [
                'exclude'                 => true,
                'default'                 => '0',
                'inputType'               => 'radio',
                'options'                 => ['0','1','2','3'],
                'eval'                    => ['includeBlankOption' => false],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences'],
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'hover_popups' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'hover_popups_stay' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'popupHandling' => [
            'exclude'                 => true,
            'default'                 => '3',
            'inputType'               => 'radio',
            'options'                 => ['3','4','1','2'],
            'eval'                    => ['submitOnChange' => true,'includeBlankOption' => false],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences'],
            'sql'                     => "char(1) NOT NULL default '3'"
        ],
        'popupHeadline' =>
        [
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => 'Details',
            'eval'                    => ['maxlength'=>254],
            'sql'                     => "varchar(254) NOT NULL default 'Details'"
        ],
        'popupMultiple' =>
        [
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'baselayers' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'options_callback'        => ['tl_c4g_map_profiles','getAllBaseLayers'],
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL",
                'xlabel' => array
                (
                    array('tl_c4g_map_profiles', 'baselayersLink')
                )
            ],

        'default_baselayer' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_map_profiles','getAllBaseLayers'],
                'eval'                    => ['mandatory'=>false, 'multiple'=>false],
                'sql'                     => "blob NULL"
            ],
        'dummyBaselayer' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr'],
                'sql'                     => "binary(16) NULL"
            ],
        'baselayerswitcher_label' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'baselayer_filter' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'layerswitcher_label' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'starboard_filter' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'starboard_filter_placeholder' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'starboard_label' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'starboard_button' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'starboard_locstyles' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'starboardInvertZoomActivate' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'colorZoomMarker' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '4975A8',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'wizard'],
                'sql'                     => "varchar(6) NOT NULL default 'BADA55'"
            ],
        'maxZoomStarboard' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => 22,
                'eval'                    => ['maxlength'=>22, 'rgxp' => 'digit'],
                'sql'                     => "varchar(100) NOT NULL default '22'"
            ],
        'openPopup' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cluster_all' =>
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
                'eval'                    => ['maxlength'=>100, 'rgxp' => 'digit'],
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
        'cluster_dist_spider' =>
            [
                'default'                 => '20',
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '20'"
            ],
        'cluster_scale' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geosearch_headline' =>
            [
                'exclude'                 => true,
                'default'                 => "Suche",
                'inputType'               => 'text',
                'sql'                     => "varchar(255) NOT NULL default 'Suche'"
            ],
        'geosearch_engine' =>
            [
                'exclude'                 => true,
                'default'                 => '4',
                'inputType'               => 'radio',
                'options'                 => ['4','1','2','5','6','3'],
                'eval'                    => ['submitOnChange' => true,'includeBlankOption' => false],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine'],
                'sql'                     => "char(1) NOT NULL default '4'"
            ],
        'geosearch_customengine_url' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'geosearch_customengine_attribution' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],

        'geosearch_key' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>254],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'geosearchParams' =>
            [
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'        => ['tl_c4g_map_profiles','getSearchParams']
            ],
            'sql'                     => 'blob NULL'
            ],
        'geosearch_result_locstyle' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_map_profiles','getAllLocStyles'],
                'eval'                    => ['mandatory'=>false,'chosen' => true,'includeBlankOption'=>true],
                'sql'                     => "int(11) NOT NULL default '0'",
                'xlabel' => array
                (
                    array('tl_c4g_map_profiles', 'locstylesLink')
                )
            ],
        'geosearch_placeholder' =>
            [
                'exclude'                 => true,
                'default'                 => "Adresse",
                'inputType'               => 'text',
                'sql'                     => "varchar(255) NOT NULL default 'Adresse'"
            ],
        'geosearch_results' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'geosearch_results_headline' =>
            [
                'exclude'                 => true,
                'default'                 => "Suchergebnisse",
                'inputType'               => 'text',
                'sql'                     => "varchar(255) NOT NULL default 'Suchergebnisse'"
            ],
        'geosearch_result_count' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '10',
                'eval'                    => ['rgxp'=>'digit'],
                'sql'                     => "int(10) unsigned NOT NULL default '10'"
            ],
        'geosearch_zoomto' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '18',
                'eval'                    => ['rgxp'=>'digit'],
                'sql'                     => "int(10) unsigned NOT NULL default '18'"
            ],
        'geosearch_zoombounds' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'",
                'eval'                    => array('tl_class'=>'w50 clr'),
            ],

        'geosearch_animate' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],

        'geosearch_animate_duration' =>
            [
                'inputType'         => 'text',
                'default'           => '2000',
                'eval'              => array('rgxp'=>'digit', 'mandatory'=>false, 'tl_class'=>'w50 clr'),
                'sql'               => "smallint(5) unsigned NOT NULL default 2000"
            ],

        'geosearch_result_duration' =>
            [
                'inputType'         => 'text',
                'default'           => '3000',
                'eval'              => array('rgxp'=>'digit', 'mandatory'=>false, 'tl_class'=>'w50'),
                'sql'               => "smallint(5) unsigned NOT NULL default 3000"
            ],

        'geosearch_markresult' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'",
                'eval'                    => array('tl_class'=>'w50 clr'),
            ],
        'geosearch_popup' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],

        'geosearch_attribution' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        
        'attribution' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'always_show_attribution' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'collapsed_attribution' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'add_attribution' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'cfg_logo_attribution' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'div_attribution' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>30],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'scaleline' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'mouseposition' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'permalink_get_param' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>50],
                'sql'                     => "varchar(50) NOT NULL default ''"
            ],
        'permalinkSaveId' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'permalinkWithoutGenerator' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'zoomlevel' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'infopage' =>
            [
                'exclude'               => true,
                'search'				=> false,
                'inputType'				=> 'textarea',
                'eval'                  => ['mandatory'=>false, 'rte'=>'tinyMCE', 'helpwizard'=>true],
                'explanation'           => 'insertTags',
                'sql'                   => "text NULL"
            ],
        'label_color' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'],
                'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'resize_locstyles_zoom' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'resize_src_zoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => 18,
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) NOT NULL default '18'"
            ],
        'resize_scale_factor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0.1',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "double NOT NULL default 0.1"
            ],
        'resize_min_scale' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0.1',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "double NOT NULL default 0.1"
            ],
        'resize_max_scale' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '1.0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "double NOT NULL default 1.0"
            ],
        'overpassEngine' =>
            [
                'exclude'                 => true,
                'inputType'               => 'radio',
                'default'                 => '2',
                'options'                 => ['2','3','1'],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine'],
                'eval'                    => ['tl_class'=>'clr long','submitOnChange' => true],
                'sql'                     => "varchar(255) NOT NULL default '1'"
            ],
        'overpass_url' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'caching' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => false],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cesium' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'cesium_always' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => [],
                'sql'                     => "char(1) NOT NULL default ''"
            ],

        'magnific_popup' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class' => 'clr m12'],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'external_elements' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'options'                 => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs'],
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'minZoomStarboardScope' =>
            [
                'default'                 => '0',
                'exclude'                 => true,
                'inputType'               => 'c4g_text',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'filters' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ["tl_c4g_map_profiles",'getFilters'],
                'eval'                    => ['chosen' => true, 'multiple' => true],
                'sql'                     => "blob NULL"
            ],
        'filterHandling' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'filterResetButton' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '0'"
            ],
        'geopicker' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geopicker_fieldx' =>
            [
                'default'                 => 'c4g_brick_geopicker_geox',
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>30, 'mandatory'=>false],
                'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker_geoy'"
            ],
        'geopicker_fieldy' =>
            [
                'default'                 => 'c4g_brick_geopicker_geoy',
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>30, 'mandatory'=>false],
                'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker_geoy'"
            ],
        'geopicker_searchdiv' =>
            [
                'default'                 => 'c4g_brick_geopicker',
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>30, 'mandatory'=>false],
                'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_geopicker'"
            ],
        'geopicker_attribution' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'geopicker_disabled' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => false],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'geopicker_anonymous' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => false],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'custom_div' =>
            [
                'default'                 => 'c4g_brick_map',
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>30],
                'sql'                     => "varchar(30) NOT NULL default 'c4g_brick_map'"
            ],
        'be_optimize_checkboxes_limit' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '10',
                'eval'                    => ['rgxp'=>'digit', 'submitOnChange' => true, "tl_class" => "clr m12"],
                'sql'                     => "int(10) unsigned NOT NULL default '10'"
            ],
        'router' => [
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'consentBanner' => [
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'cookieInfo' => [
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => ['rte'=>'tinyMCE'],
            'sql'                     => "text NULL"
        ],
        'cookieName' => [
            'exclude'                 => true,
            'default'                 => 'allow_maps',
            'inputType'               => 'text',
            'sql'                     => "varchar(255) NOT NULL default 'allow_maps'"
        ],
        'cookieValue' => [
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'text',
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
    
        'routerConfig' => [
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [\con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gRoutingConfiguration::class,'getRouterConfigs'],
            'eval'                    => ['tl_class'=>'clr','chosen' => true,'includeBlankOption'=>true],
            'sql'                     => "int(10) NOT NULL default '0'",
            'xlabel'                  => [[\con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gRoutingConfiguration::class, 'configurationLink']]
        ],
        'userLocation' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'userLocationStyle' =>
            [
                'exclude'                 => true,
                'inputType'               => 'select',
                'options_callback'        => ['tl_c4g_map_profiles','getAllLocStyles'],
                'eval'                    => ['tl_class'=>'clr', 'chosen' => true],
                'wizard' =>
                    [
                        ['tl_c4g_map_profiles', 'editLocationStyle']
                    ],
                'sql'                     => "int(10) unsigned NOT NULL default '0'",
                'xlabel' => array
                (
                    array('tl_c4g_map_profiles', 'locstylesLink')
                )
            ],
        'editorConfig' => [
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('\con4gis\MapsBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getEditorProfiles'),
            'eval'                    => array('tl_class'=>'clr', 'chosen' => true, 'includeBlankOption' => true),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ]

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
    public function getOlSources(DC_TABLE $dc)
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
    public function getAllLocStyles(DC_TABLE $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
            ->execute();
        $return = [];
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
    public function getAllBaseLayers(DC_TABLE $dc)
    {
        $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers ORDER BY sorting")
            ->execute();
        $return = [];
        while ($baseLayers->next()) {
            $return[$baseLayers->id] = $baseLayers->name;
        }
        return $return;
    }

    /**
     * Update the palette information that depend on other values
     */
    public function updateDCA(DC_Table $dc)
    {
        if (!$dc->id) {
            return;
        }

        $objProfile = $this->Database->prepare("SELECT geosearch_engine, be_optimize_checkboxes_limit, geosearch_results FROM tl_c4g_map_profiles WHERE id=?")
        ->limit(1)
        ->execute($dc->id);
        if ($objProfile->numRows > 0) {

            if ($objProfile->geosearch_engine == '2') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
                // make key-field mandatory
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['geosearch_key']['eval']['mandatory'] = true;
            } elseif ($objProfile->geosearch_engine == '3') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_customengine_url,geosearch_customengine_attribution,geosearch_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
            } elseif ($objProfile->geosearch_engine == '5') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_customengine_url,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
            } elseif ($objProfile->geosearch_engine == '6') {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
                    str_replace('geosearch_engine,','geosearch_engine,geosearch_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
            }
            
            if ($objProfile->geosearch_results) {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
                    str_replace(',geosearch_results,', ",geosearch_results,geosearch_results_headline,geosearch_result_count,",
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
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

            if (C4GVersionProvider::isInstalled('con4gis/projects')) {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] =
                    str_replace(',external_elements', ', magnific_popup,external_elements',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);

            }
        }

    }

    /**
     * Return the page pick wizard for the editor_helpurl
     * @param DC_TABLE $dc
     */
    public function pickUrl(DC_TABLE $dc)
    {
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'/page.php?do='.\Contao\Input::get('do').'&amp;table='.$dc->table.'&amp;field='.$dc->field.'&amp;value='.str_replace(array('{{link_url::', '}}'), '', $dc->value).'" title="'.StringUtil::specialchars($GLOBALS['TL_LANG']['MSC']['pagepicker'][0]).'" onclick="Backend.getScrollOffset();Backend.openModalSelector({\'width\':765,\'title\':\''.StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['MOD']['page'][0])).'\',\'url\':this.href,\'id\':\''.$dc->field.'\',\'tag\':\'ctrl_'.$dc->field . ((\Contao\Input::get('act') == 'editAll') ? '_' . $dc->id : '').'\',\'self\':this});return false">' . Image::getHtml('pickpage.svg', $GLOBALS['TL_LANG']['MSC']['pagepicker'], 'style="vertical-align:top;cursor:pointer"') . '</a>';
    }

    /**
   	 * Return the edit location style wizard
   	 * @param DC_Table
   	 * @return string
   	 */
   	public function editLocationStyle(DC_TABLE $dc)
   	{
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ($dc->value < 1) ? '' : ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_locstyles&amp;act=edit&amp;id=' . $dc->value . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . sprintf(StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1]), $dc->value) . '" style="padding-left:3px" onclick="Backend.openModalIframe({\'width\':768,\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", sprintf($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1], $dc->value))) . '\',\'url\':this.href});return false">' . Image::getHtml('alias.svg', $GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][0], 'style="vertical-align:top"') . '</a>';
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
     * @param DC_TABLE $dc
     *
     * @return string
     */
    public function editModule(DC_TABLE $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ($dc->value < 1) ? '' : ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $dc->value . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . sprintf(StringUtil::specialchars($GLOBALS['TL_LANG']['tl_content']['editalias'][1]), $dc->value) . '" onclick="Backend.openModalIframe({\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", sprintf($GLOBALS['TL_LANG']['tl_content']['editalias'][1], $dc->value))) . '\',\'url\':this.href});return false">' . Image::getHtml('alias.svg', $GLOBALS['TL_LANG']['tl_content']['editalias'][0]) . '</a>';
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
    /**
     * Get all modules and return them as array
     *
     * @return array
     */
    public function getFilters(DC_TABLE $dc)
    {
        $return = [];
        $filters = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_filters ORDER BY name")
            ->execute();
        while ($filters->next()) {
            $return[$filters->id] = $filters->name;
        }
        return $return;
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

    public function baselayersLink(DC_TABLE $dc)
    {
        if (!($dc->activeRecord->pid ?? null)) {
            return '';
        }

        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_baselayers&amp;table=tl_c4g_map_baselayers&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editBaselayers'][0]) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editBaselayers'][0])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    public function themesLink(DC_TABLE $dc)
    {
        if (!($dc->activeRecord->pid ?? null)) {
            return '';
        }

        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_themes&amp;table=tl_c4g_map_themes&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editThemes'][0]) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editThemes'][0])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    public function locstylesLink(DC_TABLE $dc)
    {
        if (!($dc->activeRecord->pid ?? null)) {
            return '';
        }

        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_locstyles&amp;table=tl_c4g_map_locstyles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editLocstyles'][0]) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editLocstyles'][0])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    /**
     * @param DC_TABLE $dc
     */
    public function showInfoMessage(DC_TABLE $dc)
    {
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infotext']);
    }

}
