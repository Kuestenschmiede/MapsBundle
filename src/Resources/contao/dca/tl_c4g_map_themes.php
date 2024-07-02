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
use Contao\Backend;
use Contao\DC_Table;
use Contao\System;

$GLOBALS['TL_DCA']['tl_c4g_map_themes'] =
    [
    'config' =>
        [
        'dataContainer'               => DC_Table::class,
        'enableVersioning'            => true,
        'markAsCopy'                  => 'name',
        'onload_callback' => [['tl_c4g_map_themes', 'showInfoMessage']],
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
            'headerFields'            => ['name','maincolor','shadowcolor','fontcolor'],
            'flag'                    => 1,
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
            ],
        'label' =>
            [
            'fields'                  => ['icon','name','maincolor','shadowcolor','fontcolor'],
            'label_callback'          => ['tl_c4g_map_themes', 'addIcon'],
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.svg'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . ($GLOBALS['TL_LANG']['MSC']['deleteConfirm'] ?? null) . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
                ]
            ]
        ],
    'palettes' =>
        [
        'default' => '{theme_legend}, name; {colors_legend}, maincolor, fontcolor, shadowcolor, popupMaincolor, popupFontcolor; {buttons_legend}, buttonradius, buttonsize, button_fontsize, controlLabels; {expert_legend}, popupMaxWidth, useglobal;',
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
        'maincolor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'fontcolor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'shadowcolor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popupMaincolor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popupFontcolor' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'buttonradius' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '0',
                'options'                 => ['%'],
                'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'buttonsize' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '36',
                'options'                 => ['px'],
                'eval'                    => ['tl_class'=>'long', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:2:\"px\";s:5:\"value\";s:2:\"36\";}'"
            ],
        'button_fontsize' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '18',
                'options'                 => ['px'],
                'eval'                    => ['tl_class'=>'long', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:2:\"px\";s:5:\"value\";s:2:\"18\";}'"
            ],
        'popupMaxWidth' =>
            [
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '42',
                'options'                 => ['%'],
                'eval'                    => ['tl_class'=>'long', 'mandatory'=>false],
                'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:1:\"%\";s:5:\"value\";s:2:\"42\";}'"
            ],
        'controlLabels' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'useglobal' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'sql'                     => "char(1) NOT NULL default ''"
            ]
        ]
    ];

/**
 * Class tl_c4g_map_themes
 */
class tl_c4g_map_themes extends Backend
{
    private function getFileArray($subDir) {
        $result = array();
        $rootDir = System::getContainer()->getParameter('kernel.project_dir');
        $maps3Path = $rootDir . '/web/bundles/con4gismaps/css/themes/'.$subDir.'/';
        if (!is_dir($maps3Path)) {
            $maps3Path = $rootDir . '/public/bundles/con4gismaps/css/themes/'.$subDir.'/';
        }

        if (is_dir($maps3Path)) {
            $file = \scan($maps3Path);

            $getLastFile = $file;
            $lastFile = max(array_keys($getLastFile));

            $hiddenName = array('.','..','.DS_Store');

            $x = 0;

            while($x <= $lastFile) {

                If(!in_array($file[$x], $hiddenName)){
                    $pathinfo=pathinfo($file[$x]);
                    if (strtolower($pathinfo['extension'])!="css")
                    {
                        continue;
                    }
                    $result[] = $file[$x];
                }
                $x++;
            }

        }

        return $result;
    }

    public function getButtonOptions()
    {
        return $this->getFileArray('buttons');
    }

    public function getColorOptions()
    {
        return $this->getFileArray('colors');
    }

    public function getEffectOptions()
    {
        return $this->getFileArray('effects');
    }

    public function getIconOptions()
    {
        return $this->getFileArray('icons');
    }

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
        $image = 'bundles/con4gismaps/images/be-icons/maplayout.svg';
        $args[0] = '<div class="list_icon_new" style="background-image:url('.$image.')" data-icon="'.$image.'">&nbsp;</div>';

        $maincolor = '#'.substr($args[2],0,strpos($args[2],','));
        $mainopacity = substr($args[2],strpos($args[2],',')+1);
        $mainopacity = trim($mainopacity) ? ' / '.trim($mainopacity).'%' : ' / 100%';
        $args[2] = '<div style="color:'.$maincolor.';text-shadow: 1px 1px #000000;">'.$maincolor.$mainopacity.'</div>';

        $shadowcolor = '#'.substr($args[3],0,strpos($args[3],','));
        $shadowopacity = substr($args[3],strpos($args[3],',')+1);
        $shadowopacity = trim($shadowopacity) ? ' / '.trim($shadowopacity).'%' : ' / 100%';
        $args[3] = '<div style="color:'.$shadowcolor.';text-shadow: 1px 1px #000000;">'.$shadowcolor.$shadowopacity.'</div>';

        $fontcolor = '#'.substr($args[4],0,strpos($args[4],','));
        $fontopacity = substr($args[4],strpos($args[4],',')+1);
        $fontopacity = trim($fontopacity) ? ' / '.trim($fontopacity).'%' : ' / 100%';
        $args[4] = '<div style="color:'.$fontcolor.';text-shadow: 1px 1px #000000;">'.$fontcolor.$fontopacity.'</div>';

        return $args;
    }


    /**
     * @param \Contao\DataContainer $dc
     */
    public function showInfoMessage(Contao\DataContainer $dc)
    {
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_themes']['infotext']);
    }
}