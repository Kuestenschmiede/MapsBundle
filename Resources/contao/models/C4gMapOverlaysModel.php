<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Resources\contao\models;

use con4gis\CoreBundle\Classes\C4GUtils;

/**
 * Class C4gMapOverlaysModel
 * @package con4gis\MapsBundle\Resources\contao\models
 */
class C4gMapOverlaysModel extends \Model
{
    // Table name
    protected static $strTable = 'tl_c4g_map_overlays';
    
    public static function findPublishedByPid($intPid, array $arrOptions = array())
    {
        $t = static::$strTable;
        $arrColumns = array("$t.pid=?");
        $arrValues = array($intPid);
        
//        if (!C4GUtils::checkBackendUserLogin()) {
//            $time = time();
//            $arrColumns[] = "$t.published=1";
//        }
        $arrColumns[] = "$t.published=1";
        
        return static::findBy($arrColumns, $arrValues, $arrOptions);
    }
    
}
