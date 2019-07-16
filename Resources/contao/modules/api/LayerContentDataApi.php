<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\modules\api;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use Contao\Controller;

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
        $sqlSelect .= $this->addPopupFields($objConfig);
        
        if ($objLayer->tab_pid && $objConfig->ptableField) {
            $whereParent = " AND " . $objConfig->ptableField . " = " . $objLayer->tab_pid;
        }
        $strQuery = "SELECT ".$objConfig->tableSource.".id,". $sqlSelect ." FROM ".$objConfig->tableSource . $onClause . $sqlLoc . $andbewhereclause . $whereParent;
        $result = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
        foreach ($result as $key => $arrResult) {
            $arrResult['popup'] = $this->getPopup($objConfig, $arrResult);
            $result[$key] = $arrResult;
        }

        return $result;
    }
    
    public function getPopup($config, $arrElement)
    {
        $popupString = $config->popup ?: $config->popupSelection;
        $popupContent = '';
        $popupElements = explode(',', $popupString);
        $maxLength = intval($config->cutTextAtLength);
        if ($config->tableSource === 'tl_content') {
            $popupContent = Controller::getContentElement($arrElement['id']) ? Controller::replaceInsertTags(Controller::getContentElement($arrElement['id'])) : $popupContent;
        } else {
            if (!$popupString) {
                return false;
            }
            foreach ($popupElements as $key => $value) {
                if (substr($value, 0, 1) == '{' && substr($value, -1, 1) == '}') {
                    // we have an inserttag
                    $replacedValue = str_replace('[id]', $arrElement['id'], $value);
                    $popupContent .= $this->replaceInsertTags($replacedValue) . ' ';
                } else if (substr($value, 0, 1) == '[' && substr($value, -1, 1) == ']') {
                    // no insert tag
                    $replacedValue = str_replace('[', '', $value);
                    $replacedValue = str_replace(']', '', $replacedValue);
                    $elements = explode(':', $replacedValue);
                    $column = $elements[0];
                    $columnClass = 'c4g_maps_table_column_' . $column;
                    $dataType = $elements[1];
                    $additionalParam1 = $elements[2];
                    $additionalParam2 = $elements[3];
                    switch ($dataType) {
                        case 'date':
                            $popupContent .= '<div class="' . $columnClass . '">' . date('d.m.Y', $arrElement[$column]) . '</div>';
                            break;
                        case 'string':
                            $columnText = $arrElement[$column];
                            $columnText = str_replace('[nbsp]', ' ', $columnText);
                            $columnText = html_entity_decode(C4GUtils::secure_ugc($columnText));
                            if ($maxLength > 0 && strlen($columnText) > $maxLength) {
                                $idxWhitespace = strpos($columnText, ' ', $maxLength);
                                $columnText = substr($columnText, 0, $idxWhitespace);
                                $columnText .= '...';
                            }
                            $popupContent .= '<div class="' . $columnClass . '">' . $columnText . '</div>';
                            $popupContent = mb_convert_encoding($popupContent, 'UTF-8', mb_detect_encoding($popupContent));
                            break;
                        case 'pagelink':
                            if (!$additionalParam1) {
                                $additionalParam1 = 'details';
                            }
                            $aliasOrId = $arrElement[$column];
                            if (!$additionalParam2) {
                                $link = $this->replaceInsertTags('{{link_url::' . $aliasOrId . '}}');
                            } else {
                                if ($column == 'subdomain') {
                                    $link = 'https://' . $aliasOrId . '.' . $additionalParam2;
                                } else {
                                    $link = 'https://' . $additionalParam2;
                                    $link = $link . '/' . $aliasOrId . '.html';
                                }
                            }
                    
                            $popupContent .= '<a class="' . $columnClass . '" href="' . $link . '">' . $additionalParam1 . '</a>';
                            break;
                        case 'pagelink2':
                            if (!$additionalParam1) {
                                $additionalParam1 = 'details';
                            }
                            $aliasOrId = $arrElement[$column];
                            if (!$additionalParam2) {
                                $link = $this->replaceInsertTags('{{link_url::' . $aliasOrId . '}}');
                            } else {
                                if ($column == 'subdomain') {
                                    $link = 'https://' . $aliasOrId . '.' . $additionalParam2;
                                } else {
                                    $link = 'https://' . $additionalParam2;
                                    $link = $link . '/' . $aliasOrId . '.html';
                                }
                            }
                    
                            $popupContent .= '<a class="' . $columnClass . '" href="' . $link . '" target="_blank">' . $additionalParam1 . '</a>';
                            break;
                        case 'pagelink3':
                            if (!$additionalParam1) {
                                $additionalParam1 = 'details';
                            }
                            $linkPopup = $arrElement[$column];
                            if(!(substr($link,0,4) === "http")){
                                $linkPopup = 'https://' . $linkPopup;
                            }
                            $popupContent .= '<a class="' . $columnClass . '" href="' . $linkPopup . '" target="_blank">' . $additionalParam1 . '</a>';
                            break;
                        case 'responsiveImage':
                            $responsiveImage = false;
                            if ($additionalParam1) {
                                $responsiveImage = $additionalParam1;
                            }
                            $file = \FilesModel::findByUuid($arrElement[$column]);
                            if ($file) {
                                if (!$responsiveImage) {
                                    $image = \Image::get($file->path, 360, 240);
                                } else {
                                    $image = \Image::get($file->path, '', '', $responsiveImage);
                                }
                                if ($image) {
                                    $popupContent .= '<img src="' . $image . '">';
                                }
                            }
                            else{
                                $popupContent .= '<img src="' . $arrElement[$column] . '">';
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    // try to load other strings as columns
                    try {
                        $popupContent .= $arrElement[$value] . "<br>";
                    } catch(\Throwable $exception) {
                        // other stuff put in as text
                        $popupContent .= $value . ' ';
                    }
                    $popupContent = mb_convert_encoding($popupContent, 'UTF-8', mb_detect_encoding($popupContent));
                }
            }
        }
        
        $popup = [];
        $popup['content'] = $popupContent;
        $popup['async'] = false;
        $popup['routing_link'] = "";
        return $popup;
    }
    
    public function addPopupFields($config)
    {
        $addFieldsStr = '';
        if ($config->popup) {
            $popupString = $config->popup;
            $arrPopupElems = explode(',', $popupString);
            foreach ($arrPopupElems as $popupElem) {
                // check if current elem is an actual fieldname replacement or an insert tag
                if (strpos($popupElem, '{{') !== false) {
                    continue;
                }
                $popupElem = str_replace('[', '', $popupElem);
                $popupElem = str_replace(']', '', $popupElem);
                $arrElem = explode(':', $popupElem);
                if ($arrElem[0]) {
                    $addFieldsStr .= ", " .$config->tableSource."." . $arrElem[0] . " AS " . $arrElem[0];
                }
            }
        }
        return $addFieldsStr;
    }

}
