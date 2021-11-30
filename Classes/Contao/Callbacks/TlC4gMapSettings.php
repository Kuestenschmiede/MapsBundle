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
namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

class TlC4gMapSettings extends \Backend
{
    public function addDefaultTables($dc)
    {

        // check wether default-data should be set
        $strSelectTables = 'SELECT * FROM tl_c4g_map_tables';
        $strTables = $this->Database->prepare($strSelectTables)->execute()->fetchAssoc();
        if (!$strTables) {
            // set default-data for tl_calendar_events
            if (@class_exists("Contao\CalendarBundle\ContaoCalendarBundle")) {
                $this->translateArrToDB('tl_calendar_events', [
                    'name' => 'Events',
                    'ptable' => 'tl_calendar',
                    'ptable_option' => 'tl_calendar.title',
                    'ptable_compare_field' => 'id',
                    'ptable_field' => 'pid',
                    'geox' => 'c4g_loc_geox',
                    'geoy' => 'c4g_loc_geoy',
                    'label' => 'c4g_loc_label',
                    'locstyle' => 'c4g_locstyle',
                    'tooltip' => 'title',
                    'popup' => '{{event::[id]}},[startDate:date]',
                    'linkurl' => '{{event_url::[id]}}',
                    'sqlwhere' => 'published = 1',
                    'alias_getparam' => 'events',
                    'title' => 'title',
                ]);
            }
            // set default data for tl_content
            $this->translateArrToDB('tl_content', [
                'name' => 'Content elements',
                'geox' => 'c4g_loc_geox',
                'geoy' => 'c4g_loc_geoy',
                'label' => 'c4g_loc_label',
                'locstyle' => 'c4g_locstyle',
                'tooltip' => 'c4g_loc_tooltip',
                'title' => 'title',
            ]);

            // set default data for tl_member
            $this->translateArrToDB('tl_member', [
                'name' => 'Members',
                'geox' => 'c4g_loc_geox',
                'geoy' => 'c4g_loc_geoy',
                'label' => 'c4g_loc_label',
                'locstyle' => 'c4g_locstyle',
                'popup' => '[firstname:string],[lastname:string]',
                'tooltip' => 'firstname',
            ]);

            // translate each sourcetable-element from config.php to tl_c4g_map_tables
            foreach ($GLOBALS['con4gis']['maps']['sourcetable'] as $sourceTable => $arrConfig) {
                $this->translateArrToDB($sourceTable, $arrConfig);
            }
        }
    }
    private function translateArrToDB($sourceTable, $arrConfig)
    {
        $ptable = $arrConfig['ptable'] ? $arrConfig['ptable'] : '';
        if (strrpos($ptable, ',')) {
            $ptable = serialize(explode(',', $ptable));
        } else {
            $ptable = serialize([$ptable]);
        }
        $tableSource = $arrConfig['sourcetable'] ? $arrConfig['sourcetable'] : $sourceTable;
        $ptableOptions = $arrConfig['ptable_option'] ? $arrConfig['ptable_option'] : '';
        if (strrpos($ptableOptions, ',')) {
            $ptableOptions = serialize(explode(',', $ptableOptions));
        } else {
            $ptableOptions = serialize([$ptableOptions]);
        }
        $ptableField = $arrConfig['ptable_field'] ? $arrConfig['ptable_field'] : '';
        if (strrpos($ptableField, ',')) {
            $ptableField = serialize(explode(',', $ptableField));
        } else {
            $ptableField = serialize([$ptableField]);
        }
        $ptableCompareField = $arrConfig['ptable_compare_field'] ? $arrConfig['ptable_compare_field'] : '';
        if ($ptableCompareField) {
            // only set when the compare field is not empty
            if (strrpos($ptableCompareField, ',')) {
                $arrCompareField = explode($ptableCompareField, ',');
                $ptableCompareField = serialize([explode(',', $ptable)[0] . '.' . $arrCompareField[0], explode(',', $ptable)[1] . '.' . $arrCompareField[1]]);
            } else {
                $ptableCompareField = serialize([$arrConfig['ptable'] . '.' . $ptableCompareField]);
            }
        }

        $ptableBlob = $arrConfig['ptable_blob'] ? $arrConfig['ptable_blob'] : '';
        $label = $arrConfig['label'] ? $arrConfig['label'] : '';
        $locstyle = $arrConfig['locstyle'] ? $arrConfig['locstyle'] : '';
        $popup = $arrConfig['popup'] ? $arrConfig['popup'] : '';
        $popupSwitch = $popup ? 'expert' : 'default';
        $tooltip = $arrConfig['tooltip'] ? $arrConfig['tooltip'] : '';
        $geox = $arrConfig['geox'] ? $arrConfig['geox'] : '';
        $geoy = $arrConfig['geoy'] ? $arrConfig['geoy'] : '';
        $geolocation = $arrConfig['geolocation'] ? $arrConfig['geolocation'] : '';
        $dbName = $arrConfig['name'];

        $time = time();
        $strInsert = "INSERT INTO tl_c4g_map_tables (name, tableSource, label, locstyle, popup, tooltip, tstamp, ptableCompareField, ptableField, ptableBlob, ptableOptions, ptable, geoy, geox, geolocation, popupSwitch) VALUES ('$dbName', '$tableSource', '$label', '$locstyle', '$popup', '$tooltip', $time , '$ptableCompareField', '$ptableField', '$ptableBlob', '$ptableOptions', '$ptable', '$geoy', '$geox','$geolocation','$popupSwitch');";
        $result = $this->Database->prepare($strInsert)->execute();
        if ($result && $result->insertId) {
            $insertId = $result->insertId;
            $strUpdate = "UPDATE tl_c4g_maps SET tab_source=$insertId WHERE tab_source='$tableSource'";
            $result = $this->Database->prepare($strUpdate)->execute();
        }
    }
}
