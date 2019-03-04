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

        // check wether default-data should be set
        $strSelectSettings = "SELECT * FROM tl_c4g_settings";
        $strSettings = $this->Database->prepare($strSelectSettings)->execute()->fetchAssoc();
        $arrSettings = unserialize($strSettings['defaultData']);
        if($arrSettings[0]){

            // set settings so this function is not triggered each time
            $arrSettings[0] = 0;
            $strSettings = serialize($arrSettings);
            $strUpdate = "UPDATE tl_c4g_settings SET defaultData = ?";
            $this->Database->prepare($strUpdate)->execute($strSettings);

            // set default-data for tl_calendar_events
            $this->translateArrToDB('tl_calendar_events', [
                'ptable'        => 'tl_calendar',
                'ptable_option' => 'title',
                'geox'          => 'c4g_loc_geox',
                'geoy'          => 'c4g_loc_geoy',
                'label'         => 'c4g_loc_label',
                'locstyle'      => 'c4g_locstyle',
                'tooltip'       => 'title',
                'popup'         => '{{event::[id]}},[startDate:date]',
                'linkurl'       => '{{event_url::[id]}}',
                'sqlwhere'      => 'published = 1',
                'alias_getparam'=> 'events',
                'title'         => 'title'
            ]);

            // set default data for tl_content
            $this->translateArrToDB('tl_content', [
                'geox'          => 'c4g_loc_geox',
                'geoy'          => 'c4g_loc_geoy',
                'label'         => 'c4g_loc_label',
                'locstyle'      => 'c4g_locstyle',
                'tooltip'       => 'c4g_loc_tooltip',
                'title'         => 'title'
            ]);

            // set default data for tl_member
            $this->translateArrToDB('tl_member', [
                'geox'          => 'c4g_loc_geox',
                'geoy'          => 'c4g_loc_geoy',
                'label'         => 'c4g_loc_label',
                'locstyle'      => 'c4g_locstyle',
                'popup'         => '[firstname:string],[lastname:string]',
                'tooltip'       => 'firstname'
            ]);

            // translate each sourcetable-element from config.php to tl_c4g_map_tables
            foreach($GLOBALS['con4gis']['maps']['sourcetable'] as $sourceTable => $arrConfig) {
                $this->translateArrToDB($sourceTable, $arrConfig);
            }
        }
    }
    private function translateArrToDB ($sourceTable, $arrConfig){
        $ptable = $arrConfig['ptable'] ? $arrConfig['ptable'] : "";
        if(strrpos($ptable, ',')) {
            $ptable = serialize(explode(',',$ptable));
        }
        else{
            $ptable = serialize([$ptable]);
        }
        $tableSource = $arrConfig['sourcetable'] ? $arrConfig['sourcetable'] : $sourceTable;
        $ptableOptions = $arrConfig['ptable_option'] ? $arrConfig['ptable_option'] : "";
        if(strrpos($ptableOptions, ',')) {
            $ptableOptions = serialize(explode(',',$ptableOptions));
        }
        else{
            $ptableOptions = serialize([$ptableOptions]);
        }
        $ptableField = $arrConfig['ptable_field'] ? $arrConfig['ptable_field'] : "";
        if(strrpos($ptableField, ',')) {
            $ptableField = serialize(explode(',',$ptableField));
        }
        else{
            $ptableField = serialize([$ptableField]);
        }
        $ptableCompareField = $arrConfig['ptable_compare_field'] ? $arrConfig['ptable_compare_field'] : "";
        if(strrpos($ptableCompareField, ',')) {
            $arrCompareField = explode($ptableCompareField, ',');
            $ptableCompareField = serialize([explode(',',$ptable)[0] . '.' . $arrCompareField[0], explode(',',$ptable)[1] . '.' . $arrCompareField[1]]);
        }
        else{
            $ptableCompareField = serialize([$arrConfig['ptable'] . '.' . $ptableCompareField]);
        }
        $ptableBlob = $arrConfig['ptable_blob'] ? $arrConfig['ptable_blob'] : "";
        $label = $arrConfig['label'] ? $arrConfig['label'] : "";
        $locstyle = $arrConfig['locstyle'] ? $arrConfig['locstyle'] : "";
        $popup = $arrConfig['popup'] ? $arrConfig['popup'] : "";
        $tooltip = $arrConfig['tooltip'] ? $arrConfig['tooltip'] : "";
        $geox = $arrConfig['geox'] ? $arrConfig['geox'] : "";
        $geoy = $arrConfig['geoy'] ? $arrConfig['geoy'] : "";
        $geolocation = $arrConfig['geolocation'] ? $arrConfig['geolocation'] : "";
        $time = time();
        $strInsert = "INSERT INTO tl_c4g_map_tables (name, tableSource, label, locstyle, popup, tooltip, tstamp, ptableCompareField, ptableField, ptableBlob, ptableOptions, ptable, geoy, geox, geolocation) VALUES ('$sourceTable', '$tableSource', '$label', '$locstyle', '$popup', '$tooltip', $time , '$ptableCompareField', '$ptableField', '$ptableBlob', '$ptableOptions', '$ptable', '$geoy', '$geox','$geolocation');";
        $result = $this->Database->prepare($strInsert)->execute();
        if($result && $result->insertId) {
            $insertId = $result->insertId;
            $strUpdate = "UPDATE tl_c4g_maps SET tab_source=$insertId WHERE tab_source='$tableSource'";
            $result = $this->Database->prepare($strUpdate)->execute();
        }
    }
}