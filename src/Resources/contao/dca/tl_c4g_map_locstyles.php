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

use con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapLocstyles;
use Contao\Backend;
use Contao\BackendUser;
use Contao\DC_Table;
use Contao\Validator;
use Contao\FilesModel;
use Contao\System;
use Contao\Message;

$GLOBALS['TL_DCA']['tl_c4g_map_locstyles'] =
    [
    'config' =>
        [
        'label'                       => &$GLOBALS['TL_LANG']['MOD']['c4g_map_locstyles'][0],
        'dataContainer'               => DC_Table::class,
        'enableVersioning'            => true,
        'markAsCopy'                  => 'name',
        'onsubmit_callback'           => [
            ['\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeLocationstyleApiCache'],
            ['\con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapLocstyles', 'editSvgIcon']
        ],
        'onload_callback' => [['tl_c4g_map_locstyles', 'showInfoMessage']],
        'sql'                         =>
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
            'mode'                    => 1,
            'fields'                  => ['name'],
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => ['name','styletype','minzoom','maxzoom'],
            'flag'                    => 1,
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg'
            ],
        'label' =>
            [
            'fields'                  => ['icon','name','styletype','minzoom','maxzoom'],
            'label_callback'          => ['tl_c4g_map_locstyles', 'addIcon'],
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.svg'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . ($GLOBALS['TL_LANG']['MSC']['deleteConfirm'] ?? null) . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
                ]
            ]
        ],
    'palettes' =>
        [
        '__selector__'                => ['styletype','line_arrows', 'icon_resize_zoom'],
        'default'                     => 'name,styletype,strokewidth,strokecolor,fillcolor,radius;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_style,font_weight,label_minzoom,label_maxzoom;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{expert_legend:hide},line_arrows;',
        'x'                           => 'name,styletype,strokewidth,strokecolor,radius;'.
                                        '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_style,font_weight,label_minzoom,label_maxzoom;'.
                                        '{popup_legend},tooltip,popup_info;'.
                                        '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;',
        'cross'                       => 'name,styletype,strokewidth,strokecolor,radius;'.
                                        '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_style,font_weight,label_minzoom,label_maxzoom;'.
                                        '{popup_legend},tooltip,popup_info;'.
                                        '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;',
        'cust_icon'                   => 'name,styletype,icon_src, icon_scale, icon_size,icon_resize_zoom,icon_opacity,icon_offset;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_style,font_weight,label_minzoom,label_maxzoom;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;',
        'cust_icon_svg'               => 'name, styletype, svgSrc,icon_size,icon_scale,icon_resize_zoom,icon_offset,svg_add_attributes;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_style,font_weight,label_minzoom,label_maxzoom;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;',
        'style_function'              => 'name,styletype,style_function_js;',
        'photo'                       => 'name,styletype,radius,photoKind,icon_src,strokewidth,strokecolor,icon_opacity;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_style,font_weight,label_minzoom,label_maxzoom;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;'
        ],
    'subpalettes' =>
        [
        'line_arrows'                 => 'line_arrows_back,line_arrows_radius,line_arrows_minzoom',
        'icon_resize_zoom'            => 'icon_resize_src_zoom,icon_resize_scale_factor,icon_resize_min_scale,icon_resize_max_scale'
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
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>true, 'maxlength'=>75],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'styletype' =>
            [
            'exclude'                 => true,
            'filter'                  => true,
            'inputType'               => 'select',
            'default'                 => 'point',
            'options'                 => ['point', 'square', 'star', 'x', 'cross', 'triangle', 'cust_icon','cust_icon_svg','style_function','photo'],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => ['submitOnChange'=>'true'],
            'sql'                     => "varchar(15) NOT NULL default ''"
            ],
        'icon_src' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
                'sql'                     => "binary(16) NULL"
            ],
        'icon_size' =>
            [
                'load_callback'           => [['\con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapLocstyles', 'setSizes']],
                'exclude'                 => true,
                'default'                 => ['0','0'],
                'inputType'               => 'imageSize',
                'reference'               => &$GLOBALS['TL_LANG']['MSC'],
                'options'                 => TlC4gMapLocstyles::getFilteredSizes() ?: [],
                'eval'                    => ['rgxp'=>'natural', 'includeBlankOption' => true, 'nospace' => true, 'tl_class'=>'long'],
                'sql'                     => "varchar(128) NOT NULL default ''"
            ],
        'svgSrc' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'svg', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
                'sql'                     => "binary(16) NULL"
            ],
        'svg_add_attributes' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'icon_scale' =>
            [
                'default'                 => '1.00',
                'exclude'                 => true,
                'flag'                    => 1,
                'inputType'               => 'text',
                'eval'                    => ['tl_class'=>'long', 'rgxp'=>'digit', 'mandatory'=>true],
                'sql'                     => "double NOT NULL default 1.0"
            ],
        'icon_resize_zoom' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'icon_resize_src_zoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => 0,
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) NOT NULL default '0'"
            ],
        'icon_resize_scale_factor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => 0,
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "double NOT NULL default 1.0"
            ],
        'icon_resize_min_scale' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0.1',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "double NOT NULL default 0.1"
            ],
        'icon_resize_max_scale' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '1.0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "double NOT NULL default 1.0"
            ],
        'icon_offset' =>
            [
                'exclude'                 => true,
                'default'                 => ['0','0'],
                'inputType'               => 'imageSize',
                'options'                 => TlC4gMapLocstyles::getFilteredSizes() ?: [],
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'icon_opacity' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '100',
                'options'                 => ['%'],
                'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'clr', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'photoKind' =>
            [
                'exclude'                 => true,
                'default'                 => 'popup_default',
                'inputType'               => 'select',
                'options'                 => ['default','square','round','anchored','folio'],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
                'eval'                    => ['mandatore'=>true],
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'style_function_js' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['style'=>'height:120px;', 'preserveTags'=>true],
                'sql'                     => "text NULL"
            ],
        'strokewidth' =>
            [
            'exclude'                 => true,
            'inputType'               => 'inputUnit',
            'default'                 => '2',
            'options'                 => ['px'],
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:2:\"px\";s:5:\"value\";s:1:\"2\";}'"
            ],
        'strokecolor' =>
            [
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => 'ee0016',
            'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'),
            'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'fillcolor' =>
            [
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => 'ee0011',
            'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'),
            'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'radius' =>
            [
            'exclude'                 => true,
            'inputType'               => 'inputUnit',
            'default'                 => '10',
            'options'                 => ['px'],
            'eval'                    => ['rgxp'=>'digit', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'label' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'label_align_hor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['left','center','right'],
                'default'                 => 'center',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'label_align_ver' =>
            [
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['top','middle','bottom'],
                'default'                 => 'top',
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
                'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'label_offset' =>
            [
                'exclude'                 => true,
                'default'                 => ['0','0'],
                'inputType'               => 'imageSize',
                'options'                  => TlC4gMapLocstyles::getFilteredSizes() ?: [],
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'font_family' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'font_color' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'font_size' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '',
                'options'                 => ['px'],
                'eval'                    => ['rgxp'=>'digit', 'tl_class' => 'w50'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'label_outl_color' =>
            [
                'exclude'                 => true,
                'default'                 => 'ee0016',
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'],
                'sql'                     => "varchar(6) NOT NULL default 'ee0016'"
            ],
        'label_outl_width' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '',
                'options'                 => ['px'],
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'w50'],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ],
        'label_outl_box' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class'=>'long clr'],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'font_style' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'font_weight' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'label_minzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'label_maxzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'tooltip' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => ['tl_class'=>'long'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'popup_info' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['rte'=>'tinyMCE'],
                'sql'                     => "text NULL"
            ],
        'popup_kind' =>
            [
                'default'                 => 'cloud',
                'exclude'                 => true,
                'inputType'               => 'radio',
                'options'                 => ['bubble','cloud'],
                'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
                'eval'                    => ['mandatory'=>true],
                'sql'                     => "varchar(30) NOT NULL default 'cloud'"
            ],
        'popup_size' =>
            [
                'default'                 => ['200','200'],
                'exclude'                 => true,
                'inputType'               => 'imageSize',
                'options'                  => TlC4gMapLocstyles::getFilteredSizes() ?: [],
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'w50', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'popup_offset' =>
            [
                'exclude'                 => true,
                'default'                 => ['0','0'],
                'inputType'               => 'imageSize',
                'options'                  => TlC4gMapLocstyles::getFilteredSizes() ?: [],
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'w50'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'onclick_zoomto' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'minzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'maxzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '0',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'line_arrows' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'line_arrows_back' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'line_arrows_radius' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '4',
                'options'                 => ['px'],
                'eval'                    => ['rgxp'=>'digit', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'line_arrows_minzoom' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '-1',
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
                'sql'                     => "int(10) NOT NULL default '0'"
            ],
    ]
];
/**
 * Class tl_c4g_map_locstyles
 */
class tl_c4g_map_locstyles extends Backend
{

    public function __construct()
    {
        parent::__construct();
    }


    /**
     * Add an image to each record
     *
     * @param array                $row
     * @param string               $label
     * @param DC_TABLE $dc
     * @param array                $args
     *
     * @return array
     */
    public function addIcon($row, $label, DC_TABLE $dc, $args)
    {
        $image = null;
        if ($row) {
            if ($row['styletype'] == 'cust_icon_svg') {
                $svg_src = $row['svgSrc'];
                if (Validator::isUuid($svg_src)) {
                    $iconSrc = FilesModel::findByUuid($svg_src);
                    if ($iconSrc) {
                        $image = $iconSrc->path;
                    }
                }
            }

            if ($row['styletype'] == 'cust_icon') {
                $icon_src = $row['icon_src'];
                if (Validator::isUuid($icon_src)) {
                    $iconSrc = FilesModel::findByUuid($icon_src);
                    if ($iconSrc) {
                        $image = $iconSrc->path;
                    }
                }
            }
        }
        if ($image) {
            $args[0] = '<img src="'.$image.'" width="16" alt="">';
        }
        return $args;
    }


    /**
     * @param DC_TABLE $dc
     */
    public function showInfoMessage(DC_TABLE $dc)
    {
        Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['infotext']);
    }
}
