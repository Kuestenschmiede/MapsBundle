<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\models;

/**
 * Class C4gMapSettingsModel
 * @package con4gis\MapsBundle\Resources\contao\models
 */
class C4gMapSettingsModel extends \Contao\Model
{
    // Table name
    protected static $strTable = 'tl_c4g_settings';
    public static function findOnly() {
        $collSettings = static::findAll();
        foreach ($collSettings as $objSettings) {
            return $objSettings;
        }
    }
}

