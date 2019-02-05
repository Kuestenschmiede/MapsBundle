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


use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;

if (!defined('TL_ROOT')) die('You cannot access this file directly!');

/**
 * Class LayerContentDataApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LayerContentDataApi extends \Frontend
{
    /**
     * Fetches the content data with a certain bounding box.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */

    public function __construct()
    {
        $this->import('con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi');
    }

    public function generate($layerId, $extent)
    {
        return $this->getLayerData($layerId, $extent);
    }

    /**
     * Returns the layer data, if in extent.
     *
     * @param int $id
     */
    protected function getLayerData($intId, $extent)
    {
        $objLayer = C4gMapsModel::findById($intId);
        $objConfig = C4gMapTablesModel::findByPk($objLayer->tab_source);
        $minX = explode(',',explode(';',$extent)[0])[0];
        $minY = explode(',',explode(';',$extent)[0])[1];
        $maxX = explode(',',explode(';',$extent)[1])[0];
        $maxY = explode(',',explode(';',$extent)[1])[1];
        $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
        $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
        $sqlLoc = " WHERE ".$objConfig->geox.">".$minX." AND ".$objConfig->geox."<".$maxX." AND ".$objConfig->geoy.">".$minY." AND ".$objConfig->geoy."<".$maxY;
        $sqlSelect = $objConfig->tableSource.".". $objConfig->geox." AS geox,".$objConfig->tableSource.".".$objConfig->geoy." AS geoy";
        $sqlSelect = $objConfig->locstyle ? $sqlSelect . ", " .$objConfig->tableSource."." . $objConfig->locstyle . " AS locstyle" : $sqlSelect;
        $sqlSelect = $objConfig->label ? $sqlSelect . ", " . $objConfig->tableSource.".". $objConfig->label . " AS label" : $sqlSelect;
        $sqlSelect = $objConfig->tooltip ? $sqlSelect . ", ". $objConfig->tableSource."." . $objConfig->tooltip . " AS tooltip" : $sqlSelect;
        $sqlWhere = $objConfig->sqlwhere ? $objConfig->sqlwhere : '';
        $sqlAnd = $sqlWhere ? ' AND ' : '';
        $strQuery = "SELECT ".$objConfig->tableSource.".id,". $sqlSelect ." FROM ".$objConfig->tableSource . $onClause . $sqlLoc . $sqlAnd . $sqlWhere . $andbewhereclause ;
        $result = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();

        return $result;
    }

}
