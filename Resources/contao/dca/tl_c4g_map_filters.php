<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
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
 * Table tl_c4g_stufffilters
 */
$GLOBALS['TL_DCA']['tl_c4g_map_filters'] =
    [
        // Config
        'config' =>
            [
                'dataContainer'               => 'Table',
                'enableVersioning'            => true,
                'onload_callback' => [['tl_c4g_map_filters', 'showInfoMessage']],

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
                        'flag'                    => 1,
                        'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
                    ],
                'label' =>
                    [
                        'fields'                  => ['icon','name'],
                        'label_callback'          => ['tl_c4g_map_filters', 'addIcon'],
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
                                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['edit'],
                                'href'                => 'act=edit',
                                'icon'                => 'edit.svg',
                            ],
                        'copy' =>
                            [
                                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['copy'],
                                'href'                => 'act=copy',
                                'icon'                => 'copy.svg'
                            ],
                        'delete' =>
                            [
                                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['delete'],
                                'href'                => 'act=delete',
                                'icon'                => 'delete.svg',
                                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                            ],
                        'show' =>
                            [
                                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['show'],
                                'href'                => 'act=show',
                                'icon'                => 'show.svg'
                            ]
                    ]
            ],

        // Palettes
        'palettes' =>
            [
                '__selector__'                => [],
                'default'                     => '{general_legend},name,filters;'
            ],


        // Subpalettes
        'subpalettes' =>
            [

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
                'importId' =>
                    [
                        'sql'                     => "bigint(20) unsigned NOT NULL default '0'"
                    ],
                'name' =>
                    [
                        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['name'],
                        'exclude'                 => true,
                        'inputType'               => 'text',
                        'eval'                    => ['mandatory'=>true, 'maxlength'=>30, 'tl_class'=>'clr'],
                        'sql'                     => "varchar(255) NOT NULL default ''"
                    ],

                'filters' =>
                    [
                        'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['filters'],
                        'exclude'   => true,
                        'inputType' => 'multiColumnWizard',
                        'eval'      => [
                            'columnFields' => [
                                'translation'      => [
                                    'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['translation'],
                                    'exclude'   => true,
                                    'inputType' => 'text',
//                                    'eval'      => ['style' => 'width:250px'],
                                ],
                                'identifier' => [
                                    'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['identifier'],
                                    'exclude'   => true,
                                    'inputType' => 'text',
//                                    'eval'      => [ 'style' => 'width:180px' ],
                                ],
                                'value' => [
                                    'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_filters']['value'],
                                    'exclude'   => true,
                                    'inputType' => 'text',
//                                    'eval'      => [ 'style' => 'width:180px' ],
                                ],

                            ],
                        ],
                        'sql'       => 'blob NULL'
                    ],
            ]
    ];

/**
 * Class tl_c4g_map_filters
 */
class tl_c4g_map_filters extends Backend
{
    /**
     * Add an image to each record
     *
     * @param array                $row
     * @param string               $label
     * @param Contao\DataContainer $dc
     * @param array                $args
     *
     * @return array
     */
    public function addIcon($row, $label, Contao\DataContainer $dc, $args)
    {
        $image = 'bundles/con4gismaps/images/be-icons/mapfilter.svg';
        $args[0] = '<div class="list_icon_new" style="background-image:url('.$image.')" data-icon="'.$image.'">&nbsp;</div>';
        return $args;
    }

    /**
     * @param \Contao\DataContainer $dc
     */
    public function showInfoMessage(Contao\DataContainer $dc)
    {
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_filters']['infotext']);
    }

}
