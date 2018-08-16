<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');

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


// set imageSize options (Contao 3&4)
if (method_exists('\System', 'getContainer')) {
    //contao 4
    $imageSizes = \System::getContainer()->get('contao.image.image_sizes')->getAllOptions();
} else {
    //contao 3
    $imageSizes = array('px');
}

/**
 * Table tl_c4g_map_locstyles
 */
$GLOBALS['TL_DCA']['tl_c4g_map_locstyles'] = array
(

    // Config
    'config' => array
    (
        'label'                       => $GLOBALS['TL_LANG']['MOD']['c4g_map_locstyles'][0],
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
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
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => array('name'),
            'flag'                    => 1,
            'icon'                    => 'bundels/con4gisMapsBundle/images/core.png'
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),


    // Palettes
    'palettes' => array
    (
        '__selector__'                => array('styletype','line_arrows'),
        'default'                     => 'name,styletype,strokewidth,strokecolor,strokeopacity,fillcolor,fillopacity,radius;'.
                                         '{arrow_legend},line_arrows;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_sort,editor_vars,editor_collect;',
        'cust_icon'                   => 'name,styletype,icon_src, icon_scale, icon_size,icon_opacity;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_sort,editor_vars,editor_collect;',
        'cust_icon_svg'                   => 'name, styletype, svgSrc, icon_scale, icon_size, icon_opacity, strokewidth, strokecolor, strokeopacity, fillcolor, fillopacity;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_sort,editor_vars,editor_collect;',
        'style_function'              => 'name,styletype,style_function_js;',
        'photo'                       => 'name,styletype,radius,photoKind,icon_src,strokecolor,icon_opacity;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_sort,editor_vars,editor_collect;'


    ),

    // Subpalettes
    'subpalettes' => array
    (
        'line_arrows'                 => 'line_arrows_back,line_arrows_radius,line_arrows_minzoom',
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
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['name'],
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>75),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'styletype' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['styletype'],
            'filter'                  => true,
            'inputType'               => 'select',
            'default'                 => 'point',
            'options'                 => array('point', 'square', 'star', 'x', 'cross', 'triangle', 'cust_icon','cust_icon_svg','style_function','photo' ),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => array('submitOnChange'=>'true'),
            'sql'                     => "varchar(15) NOT NULL default ''"
        ),
        'strokewidth' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokewidth'],
            'inputType'               => 'inputUnit',
            'default'                 => '2',
            'options'                 => array('px'),
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'strokecolor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokecolor'],
            'default'                 => 'ee0016',
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>true ),
            'sql'                     => "varchar(6) NOT NULL default ''"
        ),
        'strokeopacity' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokeopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => array('%'),
            'eval'                    => array('rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'fillcolor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillcolor'],
            'inputType'               => 'text',
            'default'                 => 'ee0011',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'),
            'sql'                     => "varchar(6) NOT NULL default ''"
        ),
        'fillopacity' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '50',
            'options'                 => array('%'),
            'eval'                    => array('rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'radius' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['radius'],
            'inputType'               => 'inputUnit',
            'default'                 => '10',
            'options'                 => array('px'),
            'eval'                    => array('rgxp'=>'digit', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'icon_src' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_src'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => array('fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true),
            'save_callback'           => array(array('tl_c4g_map_locstyles','setSizes')),
            'sql'                     => "binary(16) NULL"
        ),
        'icon_size' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_size'],
            'default'                 => array('0','0'),
            'exclude'                 => true,
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
//        'givenSvgWidth' => array(
//            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['givenSvgWidth'],
//            'exclude'                 => true,
//            'default'                 => 'none',
//            'options'                 => array('true','none'),
//            'inputType'               => 'select',
//            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
//            'eval'                    => array('submitOnChange' => true),
//            'sql'                     => "varchar(100) NOT NULL default 'none'"
//        ),
//        'svgSize' => array
//        (
//            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSize'],
//            'default'                 => array('0','0'),
//            'exclude'                 => true,
//            'inputType'               => 'imageSize',
//            'options'                  => $imageSizes,
//            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>true),
//            'sql'                     => "varchar(100) NOT NULL default ''"
//        ),
        'svgSrc' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSrc'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => array('fieldType'=>'radio', 'files'=>true, 'extensions'=>'svg', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true),
            'save_callback'           => array(array('tl_c4g_map_locstyles','setSizes')),
            'sql'                     => "binary(16) NULL"
        ),
        'icon_scale' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_scale'],
            'default'                 => '1.00',
            'exclude'                 => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => array('tl_class'=>'long', 'rgxp'=>'digit', 'mandatory'=>true),
            'sql'                     => "float(3,3) NOT NULL default '1.000'"
        ),
        'icon_offset' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_offset'],
            'exclude'                 => true,
            'default'                 => array('0','0'),
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'long'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'icon_opacity' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_opacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => array('%'),
            'eval'                    => array('rgxp'=>'prcnt', 'tl_class'=>'clr', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'photoKind' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['photoKind'],
            'exclude'                 => true,
            'default'                 => 'popup_default',
            'inputType'               => 'select',
            'options'                 => array('default','square','round','anchored','folio'),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => array('mandatore'=>true),
            'sql'                     => "varchar(64) NOT NULL default ''"
        ),
        'onhover_locstyle' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onhover_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_locstyles','getLocStyles', 'includeBlankOption' => true),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'style_function_js' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['style_function_js'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('style'=>'height:120px;', 'preserveTags'=>true),
            'sql'                     => "text NULL"
        ),
        'line_arrows' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'line_arrows_back' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_back'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),

        'line_arrows_radius' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_radius'],
            'inputType'               => 'inputUnit',
            'default'                 => '4',
            'options'                 => array('px'),
            'eval'                    => array('rgxp'=>'digit', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'line_arrows_minzoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_minzoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '-1',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) NOT NULL default '0'"
        ),

        'label' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'label_align_hor' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_hor'],
            'exclude'                 => true,
            'inputType'               => 'radio',
            'options'                 => array('left','center','right'),
            'default'                 => 'center',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => array('tl_class'=>'w50'),
            'sql'                     => "varchar(10) NOT NULL default ''"
        ),

        'label_align_ver' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_ver'],
            'exclude'                 => true,
            'inputType'               => 'radio',
            'options'                 => array('top','middle','bottom'),
            'default'                 => 'top',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'sql'                     => "varchar(10) NOT NULL default ''"
        ),
        'label_offset' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_offset'],
            'exclude'                 => true,
            'default'                 => array('0','10'),
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'font_family' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_family'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'font_color' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_color'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
            'sql'                     => "varchar(6) NOT NULL default ''"
        ),
        'font_size' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_size'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'digit', 'tl_class' => 'w50'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'label_outl_color' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_color'],
            'default'                 => 'ee0016',
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
            'sql'                     => "varchar(6) NOT NULL default ''"
        ),
        'label_outl_width' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_width'],
            'inputType'               => 'inputUnit',
            'default'                 => '',
            'options'                 => array('px'),
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'font_opacity' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_opacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => array('%'),
            'eval'                    => array('rgxp'=>'prcnt', 'tl_class'=>'clr'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'font_style' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_style'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'font_weight' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_weight'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'tooltip' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['tooltip'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('tl_class'=>'long'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'popup_info' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_info'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('rte'=>'tinyMCE'),
            'sql'                     => "text NULL"
        ),
        'popup_kind' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_kind'],
            'default'                 => 'cloud',
            'exclude'                 => true,
            'inputType'               => 'radio',
            'options'                 => array('bubble','cloud'),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => array('mandatory'=>true),
            'sql'                     => "varchar(30) NOT NULL default 'cloud'"
        ),
        'popup_size' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_size'],
            'default'                 => array('200','200'),
            'exclude'                 => true,
            'inputType'               => 'imageSize',
//            'options'                 => array('px'),
            'options'                  => $imageSizes,
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50', 'mandatory'=>true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'popup_offset' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_offset'],
            'exclude'                 => true,
            'default'                 => array('0','0'),
            'inputType'               => 'imageSize',
//            'options'                 => array('px'),
            'options'                  => $imageSizes,
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'w50'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'onclick_zoomto' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onclick_zoomto'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'minzoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['minzoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'maxzoom' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['maxzoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'editor_icon' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_icon'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => array('fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png,svg', 'tl_class'=>'clr'),
            'sql'                     => "binary(16) NULL"
        ),
        'editor_sort' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_sort'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'digit', 'tl_class'=>'clr'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'editor_vars' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_vars'],
            'inputType'               => 'keyValueWizard',
            'exclude'                 => true,
            'sql'                     => "text NULL"
        ),

        'editor_collect' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_collect'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),


    )
);

/**
 * Class tl_c4g_map_locstyles
 */
class tl_c4g_map_locstyles extends Backend
{

    public function __construct()
    {
        parent::__construct();
    }


    public function setSizes($varValue, DataContainer $dc)
    {

        if ($dc->activeRecord->styletype == 'cust_icon') {
            $icon_src = $dc->activeRecord->icon_src;
            if ($icon_src) {
                if (\Validator::isUuid($icon_src))
                {
                   $iconSrc = \FilesModel::findByUuid($icon_src);
                    list($width, $height, $type, $attr) = getimagesize($iconSrc->path);
                    $icon_size = 'a:3:{i:0;s:'.strlen($width).':"'.$width.'";i:1;s:'.strlen($height).':"'.$height.'";i:2;s:2:"px";}';

                    $offsetWidth = '-'.($width / 2);
                    $offsetHeight = '-'.($height / 2);
                    $icon_offset = 'a:3:{i:0;s:'.strlen($offsetWidth).':"'.$offsetWidth.'";i:1;s:'.strlen($offsetHeight).':"'.$offsetHeight.'";i:2;s:2:"px";}';

                    $this->Database->prepare("UPDATE tl_c4g_map_locstyles SET icon_size=?, icon_offset=? WHERE id =?")
                        ->execute($icon_size, $icon_offset, $dc->id);
                }
            }
        }

        if ($dc->activeRecord->styletype == 'cust_icon_svg') {
            $icon_src = $dc->activeRecord->svgSrc;
            if ($icon_src) {
                if (\Validator::isUuid($icon_src))
                {
                    $iconSrc = \FilesModel::findByUuid($icon_src);
                    //list($width, $height, $type, $attr) = getimagesize($iconSrc->path);
                    $size = (new Contao\ImagineSvg\Imagine)->open($iconSrc->path)->getSize();
                    $width = $size->getWidth();
                    $height = $size->getHeight();

                    $icon_size = 'a:3:{i:0;s:'.strlen($width).':"'.$width.'";i:1;s:'.strlen($height).':"'.$height.'";i:2;s:2:"px";}';

                    $offsetWidth = '-'.($width / 2);
                    $offsetHeight = '-'.($height / 2);
                    $icon_offset = 'a:3:{i:0;s:'.strlen($offsetWidth).':"'.$offsetWidth.'";i:1;s:'.strlen($offsetHeight).':"'.$offsetHeight.'";i:2;s:2:"px";}';

                    $this->Database->prepare("UPDATE tl_c4g_map_locstyles SET icon_size=?, icon_offset=? WHERE id =?")
                        ->execute($icon_size, $icon_offset, $dc->id);
                }
            }
        }

        return $varValue;
    }

    /**
     * Return all Location Styles as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
            ->execute();
        $return[''] = '-';
        while ($locStyles->next())
        {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }
}
