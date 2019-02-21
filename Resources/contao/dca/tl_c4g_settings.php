<?php

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

$GLOBALS['TL_DCA']['tl_c4g_settings']['palettes']['default'] .= '{c4g_maps_legend},disabledC4gMapObjects,defaultprofile,caching,defaultData;{c4g_io_legend},con4gisIoUrl,con4gisIoKey;';

/**
 * Add fields
 */
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['disabledC4gMapObjects'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['disabledC4gMapObjects'],
    'inputType'               => 'checkbox',
    'options_callback'        => ['tl_settings_c4g_maps', 'getMapTables'],
    'eval'                    => ['multiple'=>true],
    'sql'                     => "blob NULL"
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
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['defaultprofile'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultprofile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'foreignKey'              => 'tl_c4g_map_profiles.name',
    'eval'                    => ['tl_class'=>'clr',
        'includeBlankOption'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
        'submitOnChange' => true, 'alwaysSave' => true],
    'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'"

    ];
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['defaultData'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['defaultData'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'options'                 => &$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['defaultData'],
    'eval'                    => array('mandatory'=>false, 'multiple'=>true),
    'sql'                     => "blob NULL"
];
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['con4gisIoUrl'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['con4gisIoUrl'],
    'exclude'                 => true,
    'inputType'               => 'text',
    'eval'                    => ['maxlength' => 100],
    'sql'                     => "varchar(100) default ''"
];$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['con4gisIoKey'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['con4gisIoKey'],
    'exclude'                 => true,
    'inputType'               => 'text',
    'eval'                    => ['maxlength' => 32],
    'sql'                     => "varchar(32) default ''"
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
}
