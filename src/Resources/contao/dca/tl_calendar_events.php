<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

use con4gis\MapsBundle\Classes\GeoPicker;
use con4gis\MapsBundle\Classes\Utils;
use Contao\Backend;
use Contao\CalendarBundle\ContaoCalendarBundle;
use Contao\CoreBundle\DataContainer\PaletteManipulator;
use Contao\DataContainer;
use Contao\DC_Table;
use Contao\System;

if (
    @class_exists(ContaoCalendarBundle::class)
) {

    /**
     * Change palettes
     */

    try {
        PaletteManipulator::create()
            ->addLegend('c4g_maps_legend', 'expert_legend', PaletteManipulator::POSITION_BEFORE)
            ->addField(array('c4g_loc_geox', 'c4g_loc_geoy', 'c4g_loc_label', 'c4g_locstyle'), 'c4g_maps_legend', PaletteManipulator::POSITION_APPEND)
            ->applyToPalette('default', 'tl_calendar_events');
    } catch (\Exception $e) {}

    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_loc_geox'] =
        [
        'exclude'                 => true,
        'inputType'               => 'c4g_text',
        'eval'                    => ['mandatory'=>false, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
        'save_callback'           => [['tl_calendar_events_c4g_maps','setLocLon']],
        'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
        'sql'                     => "varchar(20) NOT NULL default ''"
        ];

    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_loc_geoy'] =
        [
        'exclude'                 => true,
        'inputType'               => 'c4g_text',
        'eval'                    => ['mandatory'=>false, 'maxlength'=>20, 'tl_class'=>'w50 wizard'],
        'save_callback'           => [['tl_calendar_events_c4g_maps','setLocLat']],
        'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
        'sql'                     => "varchar(20) NOT NULL default ''"
        ];

    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_loc_label'] =
        [
        'exclude'                 => true,
        'inputType'               => 'text',
        'eval'                    => ['tl_class'=>'clr'],
        'sql'                     => "varchar(100) NOT NULL default ''"
        ];

    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_locstyle'] =
        [
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_calendar_events_c4g_maps','getLocStyles'],
        'eval'                    => array('chosen' => true, 'includeBlankOption'=>true),
        'sql'                     => "int(10) unsigned NOT NULL default '0'",
        'xlabel' => array
        (
            array('tl_calendar_events_c4g_maps', 'locstylesLink')
        )
        ];

    /**
     * Class tl_calendar_events_c4g_maps
     */
    class tl_calendar_events_c4g_maps extends Backend
    {
        /**
         * @param DataContainer $dc
         * @return array
         */
        public function getLocStyles(DataContainer $dc)
        {
            $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
                ->execute();
            $return[''] = '-';
            while ($locStyles->next())
            {
                $return[$locStyles->id] = $locStyles->name;
            }
            return $return;
        }
        
        /**
         * Validate Longitude
         */
        public function setLocLon($varValue, DC_Table $dc)
        {
            if ($varValue != 0)
            {
                if (!Utils::validateLon($varValue))
                {
                    throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
                }
            }
            return $varValue;
        }
        
        /**
         * Validate Latitude
         */
        public function setLocLat($varValue, DataContainer $dc)
        {
            if ($varValue != 0)
            {
                if (!Utils::validateLat($varValue))
                {
                    throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
                }
            }
            return $varValue;
        }

        public function locstylesLink(DataContainer $dc)
        {
            $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
            return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_locstyles&amp;table=tl_c4g_map_locstyles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_calendar_events']['editLocstyles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_calendar_events']['editLocstyles'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
        }
    }
}
