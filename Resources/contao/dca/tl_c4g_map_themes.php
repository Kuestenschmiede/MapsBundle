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
            'headerFields'            => ['name'],
            'flag'                    => 1,
            ],
        'label' =>
            [
            'fields'                  => ['name'],
            'format'                  => '%s'
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
                'icon'                => 'show.gif'
                ]
            ]
        ],

    //Palettes
    'palettes' =>
        [
        '__selector__' => ['custom_colors', 'custom_buttons', 'custom_effects', 'custom_icons'],
        'default' => '{theme_legend}, name, useglobal; {colors_legend}, maincolor, mainopacity, fontcolor, fontopacity, shadowcolor, shadowopacity, popupMaincolor, popupMainopacity, popupFontcolor, popupFontopacity, colors, custom_colors; {buttons_legend}, buttonradius, buttonsize, buttons, custom_buttons; {effects_legend}, effects, custom_effects; {icons_legend}, icons, custom_icons',
        ],

    //Subpalettes
    'subpalettes' =>
        [
        'custom_buttons' => 'external_buttons',
        'custom_colors'  => 'external_colors',
        'custom_effects' => 'external_effects',
        'custom_icons'   => 'external_icons'
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
        'useglobal' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['useglobal'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'buttons' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttons'],
            'inputType'                 => 'select',
            'options_callback'          => ['tl_c4g_map_themes', 'getButtonOptions'],
            'eval'                      => ['mandatory' => false, 'includeBlankOption' => false],
            'sql'                       => "blob NULL"
            ],
        'custom_buttons' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_buttons'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => ['mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true],
            'sql'                       => "varchar(1) NOT NULL"
            ],
        'external_buttons' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_buttons'],
            'inputType'                 => 'fileTree',
            'eval'                      => ['mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'],
            'sql'                       => "blob NULL"
            ],
        'buttonradius' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonradius'],
            'inputType'               => 'inputUnit',
            'default'                 => '0',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'buttonsize' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonsize'],
            'inputType'               => 'inputUnit',
            'default'                 => '36',
            'options'                 => ['px'],
            'eval'                    => ['tl_class'=>'long', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default '36'"
            ],
        'colors' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['colors'],
            'inputType'                 => 'select',
            'options_callback'          => ['tl_c4g_map_themes', 'getColorOptions'],
            'eval'                      => ['mandatory' => false, 'multiple' => false, 'includeBlankOption' => false],
            'sql'                       => "blob NULL"
            ],
        'custom_colors' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_colors'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => ['mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true],
            'sql'                       => "varchar(1) NOT NULL"
            ],
        'external_colors' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_colors'],
            'inputType'                 => 'fileTree',
            'eval'                      => ['mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'],
            'sql'                       => "blob NULL"
            ],
        'maincolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['maincolor'],
            'default'                 => '103a5d',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>true],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'mainopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['mainopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'popupMaincolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaincolor'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>false],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'popupMainopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMainopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'fontcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontcolor'],
            'default'                 => 'ffffff',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>true],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'fontopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'popupFontcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupFontcolor'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>false],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'popupFontopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupFontopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'shadowcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowcolor'],
            'default'                 => '009bde',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>true],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'shadowopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '50',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'effects' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['effects'],
            'inputType'                 => 'select',
            'options_callback'          => ['tl_c4g_map_themes', 'getEffectOptions'],
            'eval'                      => ['mandatory' => false, 'multiple' => false, 'includeBlankOption' => false],
            'sql'                       => "blob NULL"
            ],
        'custom_effects' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_effects'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => ['mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true],
            'sql'                       => "varchar(1) NOT NULL"
            ],
        'external_effects' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_effects'],
            'inputType'                 => 'fileTree',
            'eval'                      => ['mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'],
            'sql'                       => "blob NULL"
            ],
        'icons' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons'],
            'inputType'                 => 'select',
            'options_callback'          => ['tl_c4g_map_themes', 'getIconOptions'],
            'eval'                      => ['mandatory' => false, 'multiple' => false, 'includeBlankOption' => false],
            'sql'                       => "blob NULL"
            ],
        'custom_icons' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_icons'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => ['mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true],
            'sql'                       => "varchar(1) NOT NULL"
            ],
        'external_icons' =>
            [
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_icons'],
            'inputType'                 => 'fileTree',
            'eval'                      => ['mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'],
            'sql'                       => "blob NULL"
            ],
        ]
    ];

/**
 * Class tl_c4g_map_themes
 */
class tl_c4g_map_themes extends Backend
{
//    private function copyFolder($source, $dest)
//    {
//        $handle = @opendir($source);
//
//        if(!$handle)
//            return false;
//
//        while ($file = @readdir($handle))
//        {
//            copy($source.$file, $dest.$file);
//        }
//
//        @closedir($handle);
//
//    }

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

//        try {
//            $dir = TL_ROOT . '/files/con4gis/examples/themes/'.$subDir.'/';
//            if (is_dir($dir)) {
//                foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
//                    if ($filename->isDir()) continue;
//                    unlink($filename);
//                }
//                rmdir($dir);
//            }
//
//            mkdir($dir, 0777, true);
//            $this->copyFolder($maps3Path,$dir);
//        }catch(Exception $e) {
//            //do nothing
//        }


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
//        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_themes']['example_info']);
        return $this->getFileArray('icons');
    }
}