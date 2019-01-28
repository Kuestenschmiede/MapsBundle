<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 21.01.19
 * Time: 14:17
 */
namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

class TlC4gMapSettings extends \Backend
{
    public function addDefaultTables($dc){
        $strSelectSettings = "SELECT * FROM tl_c4g_settings";
        $strSettings = $this->Database->prepare($strSelectSettings)->execute()->fetchAssoc();
        $arrSettings = unserialize($strSettings['defaultData']);
        if(array_search('Table',$arrSettings) > -1){
            array_splice($arrSettings,array_search($arrSettings),1);
            $strSettings = serialize($arrSettings);
            $strInsert = 'INSERT INTO tl_c4g_map_tables (name, tableSource, label, locstyle, popup, tooltip, tstamp, ptableCompareField, ptableField, ptableBlob, ptableOptions, ptable, geoy, geox) VALUES (\'Events\', \'tl_calendar_events\', \'c4g_loc_label\', \'c4g_locstyle\', null, \'title\', 1548082620, \'a:1:{i:0;s:14:"tl_calendar:id";}\', \'a:1:{i:0;s:3:"pid";}\', null, null, \'a:1:{i:0;s:11:"tl_calendar";}\', \'c4g_loc_geoy\', \'c4g_loc_geox\');';
            $this->Database->prepare($strInsert)->execute();
            $strUpdate = "UPDATE tl_c4g_settings SET defaultData = ?";
            $this->Database->prepare($strUpdate)->execute($strSettings);
        }
        
    }
}