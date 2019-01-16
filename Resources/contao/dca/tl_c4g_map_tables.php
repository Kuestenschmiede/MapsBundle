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

/**
 * Table tl_c4g_map_tables
 */
$GLOBALS['TL_DCA']['tl_c4g_map_tables'] =
[

    // Config
    'config' =>
    [
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'sql'                         =>
        [
            'keys' =>
            [
                'id' => 'primary'
            ]
        ]
    ],
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
    'palletes' =>
    [
        '__selector__'                => array('styletype','line_arrows'),
        'default' => 'name, tableSource, tabPid'
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
            'sql'                     => "text NULL"
        ],
        'tableSource' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTable'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "text NULL"
        ],
        'tabPid' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getParentTables'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "text NULL"
        ],
        'tabPidOption' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getParentTablesFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true),
            'sql'                     => "text NULL"
        ],
        'tabPidBlob' =>
        [
            'sql'                     => "text NULL"
        ],
        'tabPidField' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "text NULL"
        ],
        'tabPidCompareField' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getParentTablesFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "text NULL"
        ],
        'label' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "text NULL"
        ],
        'locstyle' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "text NULL"
        ],
        'popup' =>
        [
            'sql'                     => "text NULL"
        ],
        'tooltip' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'],
            'exclude'                 => true,
            'inputType'               => 'checkbox',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false),
            'sql'                     => "text NULL"
        ]


    ]

];

class tl_c4g_map_tables extends Backend
{
    public function getSourceTable(DataContainer $dc) {
        $this->Database->prepare("SHOW TABLES")->execute();
    }
}