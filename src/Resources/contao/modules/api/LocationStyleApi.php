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
namespace con4gis\MapsBundle\Resources\contao\modules\api;
use con4gis\CoreBundle\Classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapLocstylesModel;

/**
 * Class LocationStyleApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LocationStyleApi
{
    /**
     * Determines the request method and selects the appropriate data result.
     * @param $arrIds
     * @return array
     */
    public function generate($arrIds)
    {
        return $this->getStyleData($arrIds);
    }

    /**
     * Returns the layer data.
     *
     * @param int $id
     */
    protected function getStyleData($arrIds)
    {
        $arrLocationsStyles = array();

        $objLocationStyles = C4gMapLocstylesModel::findMultipleByIds($arrIds);

        if ($objLocationStyles == null) {
            HttpResultHelper::NotFound();
        }

        while($objLocationStyles->next())
        {
            $arrLocationsStyles[] = $this->prepareStyleData($objLocationStyles->row());
        }

        return $arrLocationsStyles;
    }

    private function prepareStyleData($arrData)
    {
        $arrKeyOutOfUse = array('ol_icon');

        foreach ($arrData as $key=>$value)
        {
            if (in_array($key, $arrKeyOutOfUse))
            {
                unset($arrData[$key]);
                continue;
            }

            if (is_array(deserialize($value))){
                $arrData[$key] = deserialize($value);
            }

            if (\Validator::isUuid($value))
            {
                // add ressource link
                $objFile = \FilesModel::findByUuid($value);
                if ($objFile !== null) {
                    $arrData[$key] =  $objFile->path;
                } else {
                    $arrData[$key] = "";
                }
            }
        }

        return $arrData;
    }
}
