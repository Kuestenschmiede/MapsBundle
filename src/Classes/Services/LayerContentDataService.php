<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Services;


use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use Contao\Config;
use Contao\Controller;
use Contao\CoreBundle\Framework\ContaoFramework;
use Contao\Frontend;
use Contao\Database;
use Contao\FilesModel;
use Contao\Image;
use Contao\StringUtil;
use Contao\System;
use Contao\Validator;

/**
 * Class LayerContentDataService
 * @package con4gis\MapsBundle\Classes\Services
 */
class LayerContentDataService extends Frontend
{
    /**
     * Fetches the content data with a certain bounding box.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */

    public function __construct(ContaoFramework $framework)
    {
        $framework->initialize();
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
        if ($objLayer->location_type !== "table") {
            return [];
        }
        $objConfig = C4gMapTablesModel::findByPk($objLayer->tab_source);
        $minX = explode(',',explode(';',$extent)[0])[0];
        $minY = explode(',',explode(';',$extent)[0])[1];
        $maxX = explode(',',explode(';',$extent)[1])[0];
        $maxY = explode(',',explode(';',$extent)[1])[1];
        $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
        $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
        if ($objConfig->geox && $objConfig->geoy) {
            $sqlLoc = " WHERE ".$objConfig->geox.">".$minX." AND ".$objConfig->geox."<".$maxX." AND ".$objConfig->geoy.">".$minY." AND ".$objConfig->geoy."<".$maxY;
            $sqlSelect = $objConfig->tableSource.".". $objConfig->geox." AS geox,".$objConfig->tableSource.".".$objConfig->geoy." AS geoy";
        } else {
            $sqlSelect = $objConfig->tableSource.".". $objConfig->geolocation. " AS geolocation";
        }
        
        $sqlSelect = $objConfig->locstyle ? $sqlSelect . ", " .$objConfig->tableSource."." . $objConfig->locstyle . " AS locstyle" : $sqlSelect;
        $sqlSelect = $objConfig->label ? $sqlSelect . ", " . $objConfig->tableSource.".". $objConfig->label . " AS label" : $sqlSelect;
        $sqlSelect = $objConfig->tooltip ? $sqlSelect . ", ". $objConfig->tableSource."." . $objConfig->tooltip . " AS tooltip" : $sqlSelect;
        $sqlSelect .= $this->addPopupFields($objConfig);
        
        if ($objLayer->tab_pid && $objConfig->ptableField) {
            $pTableFields = StringUtil::deserialize($objConfig->ptableField, true);
            if (count($pTableFields) === 1) {
                $whereParent = " AND " . $pTableFields[0] . " = " . $objLayer->tab_pid;
            } else if (count($pTableFields) === 0) {
                $whereParent = "";
            } else {
                // multiple pid fields
                $whereParent = "";
                foreach ($pTableFields as $pTableField) {
                    $whereParent .= " AND " . $pTableField . " = " . $objLayer->tab_pid;
                }
            }
        }

        $strQuery = "SELECT ".$objConfig->tableSource.".id,". $sqlSelect ." FROM ".$objConfig->tableSource . $onClause . $sqlLoc . $andbewhereclause . $whereParent;
        $connectionParams = $objConfig->customDB ?[
            'dbDatabase' => $objConfig->customDB
        ] : [];
        // for non-utf8 charsets
        $connectionParams['dbCharset'] = "utf8mb4";
        $result = Database::getInstance($connectionParams)->prepare($strQuery)->execute()->fetchAllAssoc();
        foreach ($result as $key => $arrResult) {
            $arrResult['popup'] = $this->getPopup($objConfig, $arrResult);
            $arrCoords = explode(",", $arrResult['geolocation']);
            if ($arrResult['geolocation']) {
                $arrResult['geox'] = mb_convert_encoding($arrCoords[0], 'UTF-8', mb_detect_encoding($arrCoords[0]));
                $arrResult['geoy'] = mb_convert_encoding($arrCoords[1], 'UTF-8', mb_detect_encoding($arrCoords[1]));
            }
            foreach ($arrResult as $idx => $value) {
                // hotfix
                if (!is_array($value)) {
                    $arrResult[$idx] = mb_convert_encoding($value, 'UTF-8', mb_detect_encoding($value));
                }
                if (Validator::isBinaryUuid($value)) {
                    // unset binary fields as they break the json encoding
                    unset($arrResult[$idx]);
                }
            }
            $result[$key] = $arrResult;
        }

        return $result;
    }
    
    public function getPopup($config, $arrElement)
    {
        // check which field has to be used
        if ($config->popupSwitch === "off") {
            return false;
        }
        $popupString = $config->popupSwitch === 'expert' ? $config->popup : $config->popupSelection;
        if (!$popupString && $config->tableSource !== 'tl_content') {
            return false;
        }
        $popupContent = '';
        $popupElements = explode(',', $popupString);
        $maxLength = intval($config->cutTextAtLength);
        if ($config->tableSource === 'tl_content') {
            $popupContent = Controller::getContentElement($arrElement['id']) ? System::getContainer()->get('contao.insert_tag.parser')->replace(Controller::getContentElement($arrElement['id'])) : $popupContent;
            $popupContent = str_replace('TL_FILES_URL', '', $popupContent);
        } else {
            if ($config->popupSwitch === 'expert') {
                $lastClass = '';
                foreach ($popupElements as $key => $value) {
                    if (substr($value, 0, 1) == '{' && substr($value, -1, 1) == '}') {
                        // we have an inserttag
                        $replacedValue = str_replace('[id]', $arrElement['id'], $value);
                        $popupContent .= System::getContainer()->get('contao.insert_tag.parser')->replace($replacedValue);// . ' LayerContentDataApi.php';
                    } else if (substr($value, 0, 1) == '[' && substr($value, -1, 1) == ']') {
                        // no insert tag
                        $replacedValue = str_replace('[', '', $value);
                        $replacedValue = str_replace(']', '', $replacedValue);

                        $elements = false;
                        if ($replacedValue && strpos($replacedValue,':')) {
                            $elements = explode(':', $replacedValue);
                        }

                        if ($elements && count($elements) > 1) {
                            $column = $elements[0];
                            $columnClass = 'c4g_maps_table_column_' . $column;
                            $dataType = $elements[1];
                            $additionalParam1 = $elements[2];
                            $additionalParam2 = $elements[3];
                            $lastClass = $columnClass;
                        } else {
                            $columnClass = 'c4g_maps_table_label';
                            $dataType = 'label';
                        }

                        switch ($dataType) {
                            case 'date':
                                $popupContent .= '<div id="' . $columnClass . '" class="' . $columnClass . '">' . date('d.m.Y', $arrElement[$column]) . '</div>';
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
                                $popupContent .= '<div id="' . $columnClass . '" class="' . $columnClass . '">' . $columnText . '</div>';
                                $popupContent = mb_convert_encoding($popupContent, 'UTF-8', mb_detect_encoding($popupContent));
                                break;
                            case 'pagelink':
                                if (!$additionalParam1) {
                                    $additionalParam1 = 'details';
                                }
                                $aliasOrId = $arrElement[$column];
                                if (!$additionalParam2) {
                                    $link = System::getContainer()->get('contao.insert_tag.parser')->replace('{{link_url::' . $aliasOrId . '}}');
                                } else {
                                    if ($column == 'subdomain') {
                                        $link = 'https://' . $aliasOrId . '.' . $additionalParam2;
                                    } else {
                                        // check if its a relative link (starts with /)
                                        if (strpos($additionalParam2, '/') === 0) {
                                            $link = $additionalParam2;
                                        } else {
                                            $link = 'https://' . $additionalParam2;
                                        }
                                        // check for ? or # and do not append slash if it exists
                                        $appendWithoutSlash = strpos($additionalParam2, '?') || strpos($additionalParam2, '#');
                                        if (!$appendWithoutSlash) {
                                            $link = $link . '/';
                                        }
                            
                                        $link .= $aliasOrId;
                                        // append html when it's not there
                                        if (!strpos($link, Config::get('url_suffix'))) {
                                            $link .= Config::get('url_suffix');
                                        }
                                    }
                                }
                                if ($config->openLinksInTab) {
                                    $strTarget = ' rel="noopener" target="_blank" ';
                                } else {
                                    $strTarget = ' rel="noopener" ';
                                }
                                
                                $popupContent .= '<a  id="' . $columnClass .'" class="' . $columnClass .'"' . $strTarget . 'href="' . $link . '">' . $additionalParam1 . '</a>';
                                break;
                            case 'pagelink2':
                                if (!$additionalParam1) {
                                    $additionalParam1 = 'details';
                                }
                                $aliasOrId = $arrElement[$column];
                                if (!$additionalParam2) {
                                    $link = System::getContainer()->get('contao.insert_tag.parser')->replace('{{link_url::' . $aliasOrId . '}}');
                                } else {
                                    if ($column == 'subdomain') {
                                        $link = 'https://' . $aliasOrId . '.' . $additionalParam2;
                                    } else {
                                        $link = 'https://' . $additionalParam2;
                                        $link = $link . '/' . $aliasOrId . Config::get('url_suffix');
                                    }
                                }
                    
                                $popupContent .= '<a id="' . $columnClass . '" class="' . $columnClass . '" href="' . $link . '" target="_blank" rel="noopener">' . $additionalParam1 . '</a>';
                                break;
                            case 'pagelink3':
                                if (!$additionalParam1) {
                                    $additionalParam1 = 'details';
                                }
                                $linkPopup = $arrElement[$column];
                                if(!(substr($linkPopup,0,4) === "http")){
                                    $linkPopup = 'https://' . $linkPopup;
                                }
                                $popupContent .= '<a id="' . $columnClass . '" class="' . $columnClass . '" href="' . $linkPopup . '" target="_blank" rel="noopener">' . $additionalParam1 . '</a>';
                                break;
                            case 'responsiveImage':
                                $responsiveImage = false;
                                if ($additionalParam1) {
                                    $responsiveImage = $additionalParam1;
                                }
                                if ($arrElement[$column]) {
                                    $file = FilesModel::findByUuid($arrElement[$column]);
                                    if (!$file) {
                                        $file = FilesModel::findByUuid(StringUtil::binToUuid($arrElement[$column]));
                                    }
                                    if ($file) {
                                        if (!$responsiveImage) {
                                            $image = Image::getPath($file->path, 360, 240);
                                        } else {
                                            $image = Image::getPath($file->path, '', '', $responsiveImage);
                                        }
                                        if ($image) {
                                            $popupContent .= '<img src="' . $image . '">';
                                        }
                                    } else if (!Validator::isBinaryUuid($arrElement[$column])) {
                                        $popupContent .= '<img src="' . $arrElement[$column] . '">';
                                    }
                                }

                                break;
                            case 'label':
                                if ($replacedValue) {
                                    //ToDo Klassen setzen und prüfen
                                    //ToDo Entscheidung Label am Feld oder eigenständiger Text nicht möglich
                                    if ($lastClass) {
                                        $popupContent = substr($popupContent, 0, strlen($popupContent)-6);
                                        $popupContent .= ' '.$replacedValue.'</div>';
                                    } else {
                                        $popupContent .= $replacedValue;
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            } else {
                foreach ($popupElements as $key => $value) {
                    // try to load other strings as columns
                    try {
                        $popupContent .= $arrElement[$value] . "<br>";
                    } catch(\Throwable $exception) {
                        // other stuff put in as text
                        $popupContent .= $value . ' ';
                    }
                    $supportedEncodings = ['UTF-8', 'ISO-8859-1', 'ASCII', 'Windows-1252'];
                    $currentEncoding = mb_detect_encoding($popupContent);
                    if (in_array($currentEncoding, $supportedEncodings)) {
                        $popupContent = mb_convert_encoding($popupContent, 'UTF-8', $currentEncoding);
                    }
                }
            }
        }
        
        $popup = [];
        $popup['content'] = $popupContent;
        $popup['async'] = false;
        $popup['routing_link'] = "";
        $popup['tmpDirectLink'] = $link;
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
                if ($arrElem && count($arrElem) > 1) {
                    $addFieldsStr .= ", " .$config->tableSource."." . $arrElem[0] . " AS " . $arrElem[0];
                }
            }
        }
        return $addFieldsStr;
    }

}
