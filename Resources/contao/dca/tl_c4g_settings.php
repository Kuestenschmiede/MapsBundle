<?php
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

Contao\CoreBundle\DataContainer\PaletteManipulator::create()
    ->addLegend('c4g_maps_legend', 'con4gisIoLegend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_AFTER, true)
    ->addField(['defaultprofile','beGeopickerProfile','caching','disabledC4gMapObjects'], 'c4g_maps_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('default', 'tl_c4g_settings');


/**
 * Add fields
 */
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['defaultprofile'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultprofile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'foreignKey'              => 'tl_c4g_map_profiles.name',
    'eval'                    => ['tl_class'=>'clr',
        'includeBlankOption'=>true,  'chosen'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
        'submitOnChange' => true, 'alwaysSave' => true],
    'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'",
    'xlabel' => array
    (
        array('tl_settings_c4g_maps', 'profilesLink')
    )

    ];
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['beGeopickerProfile'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['beGeopickerProfile'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'foreignKey'              => 'tl_c4g_map_profiles.name',
        'eval'                    => ['tl_class'=>'clr',
            'includeBlankOption'=>true, 'chosen'=>true,'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
            'submitOnChange' => true, 'alwaysSave' => true],
        'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
        'sql'                     => "int(10) unsigned NOT NULL default '0'",
        'xlabel' => array
        (
            array('tl_settings_c4g_maps', 'profilesLink')
        )

    ];
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['caching'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['caching'],
        'inputType'               => 'checkbox',
        'options'                 => $GLOBALS['con4gis']['api-caching'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching'],
        'eval'                    => ['multiple'=>true],
        'sql'                     => "blob NULL"
    ];
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['disabledC4gMapObjects'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['disabledC4gMapObjects'],
        'inputType'               => 'checkbox',
        'options_callback'        => ['tl_settings_c4g_maps', 'getMapTables'],
        'eval'                    => ['multiple'=>true],
        'sql'                     => "blob NULL"
    ];

/**
 * Class tl_settings_c4g_maps
 */
class tl_settings_c4g_maps
{
    /**
     * Return available Map tables
     *
     * @return array Array of map tables
     */
    public function getMapTables()
    {
        $tables = [];

        if (is_array($GLOBALS['con4gis']['maps']['sourcetable']))
        {
            foreach ($GLOBALS['con4gis']['maps']['sourcetable'] as $key=>$sourcetable) {
                $tables[$key] = $GLOBALS['TL_LANG']['c4g_maps']['sourcetable'][$key]['name'];
            }
        }

        return $tables;
    }

    public function profilesLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_map_profiles&amp;table=tl_c4g_map_profiles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_settings']['editProfiles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_settings']['editProfiles'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}
