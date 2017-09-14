<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

/**
 * Table tl_c4g_map_themes
 */
$GLOBALS['TL_DCA']['tl_c4g_map_themes'] = array
(

    // Config
    'config' => array
    (
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
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),

    //Palettes
    'palettes' => array
    (
        '__selector__' => array('custom_buttons', 'custom_colors', 'custom_effects', 'custom_icons'),
        'default' => '{theme_legend}, name, buttons, custom_buttons, colors, custom_colors, effects, custom_effects, icons, custom_icons',
    ),

    //Subpalettes
    'subpalettes' => array
    (
        'custom_buttons' => 'external_buttons',
        'custom_colors'  => 'external_colors',
        'custom_effects' => 'external_effects',
        'custom_icons'   => 'external_icons'
    ),

    //Fields
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
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['name'],
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>75),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),
        'buttons' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttons'],
            'inputType'                 => 'select',
            'options_callback'          => array('tl_c4g_map_themes', 'getButtonOptions'),
            'eval'                      => array('mandatory' => false, 'includeBlankOption' => true),
            'sql'                       => "blob NULL"
        ),
        'custom_buttons' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_buttons'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => array('mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true),
            'sql'                       => "varchar(1) NOT NULL"
        ),
        'external_buttons' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_buttons'],
            'inputType'                 => 'fileTree',
            'eval'                      => array('mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'),
            'sql'                       => "blob NULL"
        ),
        'colors' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['colors'],
            'inputType'                 => 'select',
            'options_callback'          => array('tl_c4g_map_themes', 'getColorOptions'),
            'eval'                      => array('mandatory' => false, 'multiple' => false, 'includeBlankOption' => true),
            'sql'                       => "blob NULL"
        ),
        'custom_colors' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_colors'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => array('mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true),
            'sql'                       => "varchar(1) NOT NULL"
        ),
        'external_colors' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_colors'],
            'inputType'                 => 'fileTree',
            'eval'                      => array('mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'),
            'sql'                       => "blob NULL"
        ),
        'effects' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['effects'],
            'inputType'                 => 'select',
            'options_callback'          => array('tl_c4g_map_themes', 'getEffectOptions'),
            'eval'                      => array('mandatory' => false, 'multiple' => false, 'includeBlankOption' => true),
            'sql'                       => "blob NULL"
        ),
        'custom_effects' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_effects'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => array('mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true),
            'sql'                       => "varchar(1) NOT NULL"
        ),
        'external_effects' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_effects'],
            'inputType'                 => 'fileTree',
            'eval'                      => array('mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'),
            'sql'                       => "blob NULL"
        ),
        'icons' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons'],
            'inputType'                 => 'select',
            'options_callback'          => array('tl_c4g_map_themes', 'getIconOptions'),
            'eval'                      => array('mandatory' => false, 'multiple' => false, 'includeBlankOption' => true),
            'sql'                       => "blob NULL"
        ),
        'custom_icons' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_icons'],
            'inputType'                 => 'checkbox',
            'default'                   => '',
            'eval'                      => array('mandatory' => false, 'tl_class' => 'm12', 'submitOnChange' => true),
            'sql'                       => "varchar(1) NOT NULL"
        ),
        'external_icons' => array
        (
            'label'                     => &$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_icons'],
            'inputType'                 => 'fileTree',
            'eval'                      => array('mandatory' => false, 'filesOnly' => true, 'extensions' => 'css', 'fieldType' => 'radio'),
            'sql'                       => "blob NULL"
        ),
    )
);

/**
 * Class tl_c4g_map_themes
 */
class tl_c4g_map_themes extends Backend
{
    private function copyFolder($source, $dest)
    {
        $handle = @opendir($source);

        if(!$handle)
            return false;

        while ($file = @readdir ($handle))
        {
            copy($source.$file, $dest.$file);
        }

        @closedir($handle);

    }

    private function getFileArray($subDir) {
        $result = array();
        $maps3Path = TL_ROOT . '/bundles/con4gismaps/css/themes/'.$subDir.'/';

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

        $dir = TL_ROOT . '/files/con4gis/examples/themes/'.$subDir.'/';
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
            $this->copyFolder($maps3Path,$dir);
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
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_themes']['example_info']);
        return $this->getFileArray('icons');
    }
}