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
use Contao\System;
Contao\CoreBundle\DataContainer\PaletteManipulator::create()
    ->addLegend('c4g_maps_legend', 'con4gisIoLegend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_AFTER, true)
    ->addField(['defaultprofile','beGeopickerProfile','editorprofile','caching'], 'c4g_maps_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('default', 'tl_c4g_settings');


/**
 * Add fields
 */
$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['defaultprofile'] =
    [
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

$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['editorprofile'] = [
    'exclude'                 => true,
    'inputType'               => 'select',
    'foreignKey'              => 'tl_c4g_map_profiles.name',
    'eval'                    => ['tl_class'=>'clr',
        'includeBlankOption'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
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
        'inputType'               => 'checkbox',
        'options'                 => $GLOBALS['con4gis']['api-caching'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching'],
        'eval'                    => ['multiple'=>true],
        'sql'                     => "blob NULL"
    ];


/**
 * Class tl_settings_c4g_maps
 */
class tl_settings_c4g_maps
{
    public function profilesLink(Contao\DataContainer $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_profiles&amp;table=tl_c4g_map_profiles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_settings']['editProfiles'][0]) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_settings']['editProfiles'][0])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}
