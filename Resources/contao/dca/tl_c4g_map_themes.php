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
 * Table tl_c4g_map_themes
 */
$GLOBALS['TL_DCA']['tl_c4g_map_themes'] =
    [

    // Config
    'config' =>
        [
        'dataContainer'               => 'Table',
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

    // List
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
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
                ]
            ]
        ],

    //Palettes
    'palettes' =>
        [
        'default' => '{theme_legend}, name; {colors_legend}, maincolor, fontcolor, shadowcolor, popupMaincolor, popupFontcolor; {buttons_legend}, buttonradius, buttonsize, button_fontsize; {expert_legend}, popupMaxWidth, useglobal;',
        ],

    //Fields
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
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['name'],
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
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['maincolor'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'fontcolor' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontcolor'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'shadowcolor' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowcolor'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popupMaincolor' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaincolor'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popupFontcolor' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupFontcolor'],
                'exclude'                 => true,
                'inputType'               => 'text',
                'eval'                    => array('maxlength'=>6, 'multiple'=>true, 'size'=>2, 'colorpicker'=>true, 'isHexColor'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'),
                'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'popupMaxWidth' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaxWidth'],
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '42',
                'options'                 => ['%'],
                'eval'                    => ['tl_class'=>'long', 'mandatory'=>false],
                'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:1:\"%\";s:5:\"value\";s:2:\"42\";}'"
            ],
        'buttonradius' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonradius'],
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '0',
                'options'                 => ['%'],
                'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'buttonsize' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonsize'],
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '36',
                'options'                 => ['px'],
                'eval'                    => ['tl_class'=>'long', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:2:\"px\";s:5:\"value\";s:2:\"36\";}'"
            ],
        'button_fontsize' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['button_fontsize'],
                'exclude'                 => true,
                'inputType'               => 'inputUnit',
                'default'                 => '18',
                'options'                 => ['px'],
                'eval'                    => ['tl_class'=>'long', 'mandatory'=>true],
                'sql'                     => "varchar(100) NOT NULL default 'a:2:{s:4:\"unit\";s:2:\"px\";s:5:\"value\";s:2:\"18\";}'"
            ],
        'useglobal' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['useglobal'],
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
        $maps3Path = TL_ROOT . '/web/bundles/con4gismaps/css/themes/'.$subDir.'/';

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

                    $fileobj = new \File($file[$x], true); //needed for $file[$x] too!
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
        $args[2] = '<div style="color:'.$maincolor.';text-shadow: 1px 1px #000000;">'.$maincolor.'</div>';

        $shadowcolor = '#'.substr($args[3],0,strpos($args[3],','));
        $args[3] = '<div style="color:'.$shadowcolor.';text-shadow: 1px 1px #000000;">'.$shadowcolor.'</div>';

        $fontcolor = '#'.substr($args[4],0,strpos($args[4],','));
        $args[4] = '<div style="color:'.$fontcolor.';text-shadow: 1px 1px #000000;">'.$fontcolor.'</div>';

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