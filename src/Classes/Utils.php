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
namespace con4gis\MapsBundle\Classes;

use Contao\Controller;
use Contao\Database;
use Contao\PageModel;
use Contao\System;

/**
 * Class Utils
 * @package con4gis\MapsBundle\Classes
 */
class Utils
{
    private static $allLocstyles = false;

    /**
     * Validate a longitude coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateLon($value)
    {
        if (strpos($value, '{{') !== -1) {
            return true;
        }
        if (self::validateGeo($value)) {
            return (($value >= -180.0) && ($value <= 180.0));
        }

        return false;
    }

    /**
     * Validate a latitude coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateLat($value)
    {
        if (strpos($value, '{{') !== -1) {
            return true;
        }
        if (self::validateGeo($value)) {
            return (($value >= -90.0) && ($value <= 90.0));
        }

        return false;
    }

    /**
     * Validate a Geo Coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateGeo($value)
    {
        if (!isset($value)) {
            return false;
        }
        $value = floatval($value);
        if ($value == 0) {
            return false;
        }

        return true;
    }

    /**
     * Custom implementation of the replaceInsertTags function for the iflng and ifnlng tags to workaround
     * the issue that the global page object is null in the baselayer request.
     * @param $toReplace
     * @param $lang
     * @return string
     */
    public static function replaceInsertTags(string $toReplace, string $lang)
    {
        // convert string into a more parsable form
        $result = $toReplace;
        global $objPage;
        $pageWasNull = $objPage === null;
        $id = Database::getInstance()->prepare('SELECT id FROM tl_page WHERE language = ? LIMIT 1')->execute($lang)->fetchAssoc();
        $objPage = $objPage ?: PageModel::findByPk($id['id']);
        $objPage->title = '';

        $parser = System::getContainer()->get('contao.insert_tag.parser');
        $result = html_entity_decode($parser->replace($result));

        if ($pageWasNull) {
            $objPage = null;
        }

        return $result;
    }

    private static function processRegex($regex, $toReplace, $lang)
    {
        $matches = [];
        $result = $toReplace;
        preg_match_all($regex, $toReplace, $matches);
        // if there are inserttags, they are listed now in $matches
        foreach ($matches[0] as $match) {
            $replacement = static::replaceSingleLangTag($match, $lang);
            $result = str_replace($match, $replacement, $result);
        }

        return System::getContainer()->get('contao.insert_tag.parser')->replace($result);
    }

    private static function replaceSingleLangTag($toReplace, $lang)
    {
        $toReplace = str_replace('{{', '\\', $toReplace);
        $toReplace = str_replace('}}', '\\', $toReplace);
        $toReplace = str_replace('//', '\\', $toReplace);
        $arrReplace = explode('\\', $toReplace);
        $result = '';
        $cachedResult = '';
        foreach ($arrReplace as $key => $value) {
            if (strlen($value) > 6) {
                // check if the value contains a language tag
                if (substr($value, 0, 6) === 'ifnlng') {
                    $arrLang = explode('::', $value);
                    if ($arrLang[1] !== $lang) {
                        // language does not match, so get the value
                        $result .= $arrReplace[$key + 1];
                    }
                } elseif (substr($value, 0, 6) === 'iflng:') {
                    $arrLang = explode('::', $value);
                    if ($arrLang[1] === $lang) {
                        // language does match, so get the value
                        $result .= $arrReplace[$key + 1];
                    }
                }
            }
        }
        if ($result === '') {
            $result = $toReplace;
        }

        return $result;
    }

    /**
     * Returns an array of location types that are supported by maps per default.
     * @return array
     */
    public static function getLocationTypes()
    {
        return ['map','none','single','table','gpx','kml','geojson','osm','folder','overpass','wfs','link','con4gisio', 'startab'];
    }
}
