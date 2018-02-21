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

namespace con4gis\MapsBundle\Resources\contao\modules\api;
use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;

/**
 * Class EditorApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class EditorApi extends \Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  $intProfileId
     * @return mixed           JSON data
     */
    public function generate($intProfileId)
    {
        return $this->getEditorConfigForProfile($intProfileId);
    }

    /**
     * Returns the editor configuration from a given profile.
     * @param $intId integer the profileId
     * @return array
     */
    protected function getEditorConfigForProfile($intId)
    {

        $arrEditorConfig = array();

        // Find the requested profile
        $objProfile = C4gMapProfilesModel::findById($intId);
        if ($objProfile == null) {
            HttpResultHelper::NotFound();
        }

        // Get editor config from profile
        $arrEditorConfig['styles_point'] = unserialize($objProfile->editor_styles_point);
        $arrEditorConfig['styles_line'] = unserialize($objProfile->editor_styles_line);
        $arrEditorConfig['styles_polygon'] = unserialize($objProfile->editor_styles_polygon);
        $arrEditorConfig['styles_circle'] = unserialize($objProfile->editor_styles_circle);
        $arrEditorConfig['styles_freehand'] = unserialize($objProfile->editor_styles_freehand);
        $arrEditorConfig['vars'] = $objProfile->editor_vars;
        $arrEditorConfig['show_items'] = $objProfile->editor_show_items;
        $arrEditorConfig['helpurl'] = $objProfile->editor_helpurl;

        return $arrEditorConfig;
    }



}
