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
use con4gis\MapsBundle\Classes\Services\ImageMetadataService;
use con4gis\MapsBundle\Classes\Utils;
use Contao\Backend;
use Contao\CoreBundle\DataContainer\PaletteManipulator;
use Contao\DataContainer;
use Contao\FilesModel;
use Contao\System;

// Load backend javascript for GeoPicker
if (!isset($GLOBALS['TL_JAVASCRIPT']['c4g-maps-backend'])) {
    $GLOBALS['TL_JAVASCRIPT']['c4g-maps-backend'] = 'bundles/con4gismaps/js/c4g-maps-backend.js';
}

try {
    PaletteManipulator::create()
        ->addLegend('c4g_maps_legend', null, PaletteManipulator::POSITION_AFTER)
        ->addField(['c4g_loc_geox', 'c4g_loc_geoy'], 'c4g_maps_legend', PaletteManipulator::POSITION_APPEND)
        ->applyToPalette('default', 'tl_files');
} catch (\Exception $e) {
}

$GLOBALS['TL_DCA']['tl_files']['fields']['c4g_loc_geox'] = [
    'exclude'                 => true,
    'inputType'               => 'c4g_text',
    'eval'                    => ['mandatory' => false, 'maxlength' => 20, 'tl_class' => 'w50 wizard'],
    'load_callback'           => [['tl_files_c4g_maps', 'loadLocLon']],
    'save_callback'           => [['tl_files_c4g_maps', 'setLocLon']],
    'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
    'sql'                     => "varchar(20) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_files']['fields']['c4g_loc_geoy'] = [
    'exclude'                 => true,
    'inputType'               => 'c4g_text',
    'eval'                    => ['mandatory' => false, 'maxlength' => 20, 'tl_class' => 'w50 wizard'],
    'load_callback'           => [['tl_files_c4g_maps', 'loadLocLat']],
    'save_callback'           => [['tl_files_c4g_maps', 'setLocLat']],
    'wizard'                  => [[GeoPicker::class, 'getPickerLink']],
    'sql'                     => "varchar(20) NOT NULL default ''"
];

/**
 * Class tl_files_c4g_maps
 */
class tl_files_c4g_maps extends Backend
{
    /**
     * Load Longitude and prefill from EXIF if not set yet
     */
    public function loadLocLon($varValue, DataContainer $dc)
    {
        if ($varValue === null || $varValue === '') {
            if ($dc->id && !is_dir(System::getContainer()->getParameter('kernel.project_dir') . '/' . $dc->id)) {
                $fullPath = System::getContainer()->getParameter('kernel.project_dir') . '/' . $dc->id;
                $gps = ImageMetadataService::extractGpsCoordinates($fullPath);
                if ($gps && isset($gps['lng'])) {
                    return (string)$gps['lng'];
                }
            }
        }
        return $varValue;
    }

    /**
     * Load Latitude and prefill from EXIF if not set yet
     */
    public function loadLocLat($varValue, DataContainer $dc)
    {
        if ($varValue === null || $varValue === '') {
            if ($dc->id && !is_dir(System::getContainer()->getParameter('kernel.project_dir') . '/' . $dc->id)) {
                $fullPath = System::getContainer()->getParameter('kernel.project_dir') . '/' . $dc->id;
                $gps = ImageMetadataService::extractGpsCoordinates($fullPath);
                if ($gps && isset($gps['lat'])) {
                    return (string)$gps['lat'];
                }
            }
        }
        return $varValue;
    }

    /**
     * Validate Longitude
     */
    public function setLocLon($varValue, DataContainer $dc)
    {
        if ($varValue != 0 && $varValue !== '' && $varValue !== null) {
            if (!Utils::validateLon($varValue)) {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid'] ?? 'Invalid longitude');
            }
        }
        return $varValue;
    }

    /**
     * Validate Latitude
     */
    public function setLocLat($varValue, DataContainer $dc)
    {
        if ($varValue != 0 && $varValue !== '' && $varValue !== null) {
            if (!Utils::validateLat($varValue)) {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid'] ?? 'Invalid latitude');
            }
        }
        return $varValue;
    }
}
