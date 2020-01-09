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
namespace con4gis\MapsBundle\Resources\contao\models;

use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use Contao\Model;
use Contao\System;

/**
 * Class C4gMapsModel
 * @package con4gis\MapsBundle\Resources\contao\models
 */
class C4gMapsModel extends Model
{
    // Table name
    protected static $strTable = 'tl_c4g_maps';
    
    public static function findPublishedByPid($intPid, array $arrOptions = array())
    {
        $t = static::$strTable;
        $arrColumns = array("$t.pid=?");
        $arrValues = array($intPid);

        if (!C4GUtils::checkBackendUserLogin()) {
            $time = time();
            $arrColumns[] = "$t.published=1 AND ($t.publishStart='' OR $t.publishStart <= $time) AND ($t.publishStop='' OR $t.publishStop >= $time)";
        }

        if (!isset($arrOptions['order'])) {
            $arrOptions['order'] = "$t.sorting";
        }

        return static::findBy($arrColumns, $arrValues, $arrOptions);
    }

    //ToDo Hier nur hotfix für das Laden der richtigen Filter
    public static function findPublishedByProfile($intProfile, array $arrOptions = array())
    {
        $t = static::$strTable;
        $arrColumns = array("$t.profile=?");
        $arrValues = array($intProfile);

        if (!C4GUtils::checkBackendUserLogin()) {
            $time = time();
            $arrColumns[] = "$t.published=1";
        }

        if (!isset($arrOptions['order'])) {
            $arrOptions['order'] = "$t.sorting";
        }

        return static::findBy($arrColumns, $arrValues, $arrOptions);
    }
}
