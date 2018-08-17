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

use Contao\System;

/**
 * Class C4gMapsModel
 * @package con4gis\MapsBundle\Resources\contao\models
 */
class C4gMapsModel extends \Model
{
    // Table name
    protected static $strTable = 'tl_c4g_maps';

    //ToDo Funktioniert unter contao 4 offensichtlich nicht mehr so wie es soll.
    public static function findPublishedByPid($intPid, array $arrOptions = array())
    {
        $t = static::$strTable;
        $arrColumns = array("$t.pid=?");
        $arrValues = array($intPid);

        if (!System::getContainer()->get("contao.security.token_checker")->hasBackendUser()) {
            $time = time();
            $arrColumns[] = "$t.published=1";
        }

        if (!isset($arrOptions['order'])) {
            $arrOptions['order'] = "$t.sorting";
        }

        return static::findBy($arrColumns, $arrValues, $arrOptions);
    }

}
