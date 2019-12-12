<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/***
 * Palettes
 */
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_maps']         =   '{title_legend},name,headline,type;'.
                                                                    '{c4g_map_legend},c4g_map_id,c4g_map_default_mapservice,c4g_map_width,c4g_map_height,c4g_map_zoom;'.
                                                                    '{protected_legend:hide},protected;'.
                                                                    '{expert_legend:hide},guests,cssID,space';
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_search']       =   '{title_legend},name,headline,type;'.
                                                                    '{c4g_search_legend},c4g_map_site_id,c4g_map_zoomlevel,c4g_map_placeholder;'.
                                                                    '{protected_legend:hide},protected;'.
                                                                    '{expert_legend:hide},guests,cssID,space';
if ($GLOBALS['con4gis']['forum']['installed'])
{
    $insert = '{c4g_forum_maps_legend},c4g_forum_enable_maps;{expert_legend:hide}';
    //insert c4g-maps support when forum is installed
    $GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_forum'] = str_replace('{expert_legend:hide}', $insert, $GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_forum']);
    $GLOBALS['TL_DCA']['tl_module']['fields']['c4g_forum_enable_maps'] =
        [
        'label' => &$GLOBALS['TL_LANG']['tl_module']['c4g_forum_enable_maps'],
        'exclude' => true,
        'default' => '',
        'inputType' => 'checkbox',
        'sql' => "char(1) NOT NULL default ''"
        ];
}
/***
 * Fields
 */
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_id'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_id'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => ['tl_module_c4g_maps', 'get_maps'],
    'eval'                    => ['submitOnChange'=>true],
    'sql'                     => "int(10) unsigned NOT NULL default '0'",
    'xlabel' => array
    (
        array('tl_module_c4g_maps', 'mapsLink')
    )
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_width'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_width'],
    'exclude'                 => true,
    'inputType'               => 'inputUnit',
    'options'                 => ['px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'],
    'eval'                    => [
                                    'rgxp'=>'digit_auto_inherit',
                                    'tl_class'=>'w50',
                                    'includeBlankOption'=>true
    ],
    'sql'                     => "varchar(64) NOT NULL default ''"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_height'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_height'],
    'exclude'                 => true,
    'inputType'               => 'inputUnit',
    'options'                 => ['px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'],
    'eval'                    => [
                                    'rgxp'=>'digit_auto_inherit',
                                    'tl_class'=>'w50',
                                    'includeBlankOption'=>true
    ],
    'sql'                     => "varchar(64) NOT NULL default ''"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_zoom'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoom'],
    'exclude'                 => true,
    'inputType'               => 'text',
    'eval'                    => ['mandatory'=>false, 'rgxp'=>'digit'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_default_mapservice'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_default_mapservice'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => ['tl_module_c4g_maps', 'get_baselayers'],
    'eval'                    => [
                                    'mandatory'=>false,
                                    'chosen'=>true,
                                    'includeBlankOption'=>true],
    'sql'                     => "int(10) unsigned NOT NULL default '0'",
    'xlabel' => array
    (
        array('tl_module_c4g_maps', 'baselayersLink')
    )

    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_site_id'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_site_id'],
        'exclude'                 => true,
        'inputType'               => 'pageTree',
        'eval'                    => ['fieldType'=>'radio'],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_zoomlevel'] =
    [
            'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoomlevel'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => '10',
            'eval'                    => ['tl_class'=>'clr'],
            'sql'                     => "varchar(20) NOT NULL default '10'"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_placeholder'] =
    [
            'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_placeholder'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'default'                 => 'Suche',
            'eval'                    => ['tl_class'=>'clr'],
            'sql'                     => "varchar(20) NOT NULL default '10'"
    ];

/**
 * Class tl_module_c4g_maps
 */
class tl_module_c4g_maps extends Backend
{
    protected $firstMapId = null;

    /**
     * Return all base layers for current Map Profile as array
     * @param object
     * @return array
     */
    public function get_baselayers(DataContainer $dc)
    {
        $id = 0;
        if ($dc->activeRecord->c4g_map_id != 0) {
            $id = $dc->activeRecord->c4g_map_id;
        } else {
            // take firstMapId, because it will be chosen as DEFAULT value for c4g_map_id
            $id = $this->firstMapId;
        }

        $profile = $this->Database->prepare(
                "SELECT b.baselayers ".
                "FROM tl_c4g_maps a, tl_c4g_map_profiles b ".
                "WHERE a.id = ? and a.profile = b.id")
                ->execute($id);

        $ids = deserialize($profile->baselayers,true);
        if (count($ids)>0) {
            $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers WHERE id IN (".implode(',',$ids).") ORDER BY name")->execute();
        } else {
            $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers ORDER BY name")->execute();
        }


        if ($baseLayers->numRows > 0) {
            while ( $baseLayers->next () ) {
                $return [$baseLayers->id] = $baseLayers->name;
            }
        }
        return $return;
    }

    /**
     * Return all defined maps
     * @param object
     * @return array
     */
    public function get_maps(DataContainer $dc)
    {

        $maps = $this->Database->prepare ( "SELECT * FROM tl_c4g_maps WHERE is_map=1 AND published=1" )->execute ();
        if ($maps->numRows > 0) {
            while ( $maps->next () ) {
                if (!isset($this->firstMapId)) {
                    // save first map id
                    $this->firstMapId = $maps->id;
                }
                $return [$maps->id] = $maps->name;
            }
        }
        return $return;
    }

    public function baselayersLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_map_baselayers&amp;table=tl_c4g_map_baselayers&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_modules']['editBaselayers']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_modules']['editBaselayers'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    public function mapsLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_maps&amp;table=tl_c4g_maps&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_modules']['editMaps']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_modules']['editMaps'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}
