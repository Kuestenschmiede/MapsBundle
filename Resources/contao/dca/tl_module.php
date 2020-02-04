<?php use con4gis\CoreBundle\Classes\C4GVersionProvider;

if (!defined('TL_ROOT')) die('You can not access this file directly!');
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

/***
 * Palettes
 */
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_maps']         =   '{title_legend},name,headline,type;'.
                                                                    '{c4g_map_legend},c4g_map_id;'.
                                                                    '{protected_legend:hide},protected;'.
                                                                    '{expert_legend:hide},guests,cssID,space';
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_search']       =   '{title_legend},name,headline,type;'.
                                                                    '{c4g_search_legend},c4g_map_site_id,c4g_map_zoomlevel,c4g_map_placeholder;'.
                                                                    '{protected_legend:hide},protected;'.
                                                                    '{expert_legend:hide},guests,cssID,space';
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_external_map_element'] = '{title_legend},name,headline,type,c4g_element_type;';

if (C4GVersionProvider::isInstalled('con4gis/forum'))
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
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_element_type'] =
[
    'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_element_type'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options'                 => $GLOBALS['TL_LANG']['tl_module']['element_type_refs'],
    'sql'                     => "varchar(25) NOT NULL default ''"
];

/**
 * Class tl_module_c4g_maps
 */
class tl_module_c4g_maps extends Backend
{
    protected $firstMapId = null;

    /**
     * Return all defined maps
     * @param object
     * @return array
     */
    public function get_maps(DataContainer $dc)
    {

        $maps = $this->Database->prepare ( "SELECT * FROM tl_c4g_maps WHERE location_type='map' AND published=1" )->execute ();
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

    public function mapsLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_maps&amp;table=tl_c4g_maps&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_modules']['editMaps']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_modules']['editMaps'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}
