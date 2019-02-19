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

