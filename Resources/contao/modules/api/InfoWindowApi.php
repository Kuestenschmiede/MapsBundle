<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\MapsBundle\Resources\contao\modules\api;
use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;

/**
 * Class InfoWindowApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class InfoWindowApi extends \Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  string $strInput Fragments from request uri
     * @return mixed           JSON data
     */
    public function generate($strInput)
    {
        $arrInputExploded = explode(':', $strInput);
        $strTable = $arrInputExploded[0];
        $intId = $arrInputExploded[1];
        return $this->getInfoWindowContent($strTable, $intId);
    }

    public function getPopupConfiguration($strTable, $intId, $objLayer=false)
    {
        $arrData = array();

        if ($objLayer->popupType == "popup_info")
        {
            $objLayer->popup_info = '${FNfnStandardInfoPopup}';
            $arrData['content'] = $objLayer->popup_info;
            $arrData['routing_link'] = $objLayer->routing_to;
            $arrData['async'] = false;
        }
        else if ($objLayer->popup_info)
        {
            $arrData['content'] = $objLayer->popup_info;
            $arrData['routing_link'] = $objLayer->routing_to;
            $arrData['async'] = false;
        }

        return $arrData;
    }

    /**
     * Returns the layer data.
     *
     * @param int $id
     */
    protected function getInfoWindowContent($strTable, $intId)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrData = array();
        $strInfoWindowContent = "";

        switch ($strTable)
        {
            case "tl_c4g_maps":

                $objLayer = C4gMapsModel::findById($intId);

                if ($objLayer !== null)
                {
                    if ($objLayer->popup_info)
                    {
                        $arrData['routing_link'] = $objLayer->routing_to;
                        $strInfoWindowContent = $objLayer->popup_info;
                        // Clean the RTE output
                        global $objPage;
                        if ($objPage->outputFormat == 'xhtml')
                        {
                            $strInfoWindowContent = $stringClass::toXhtml($strInfoWindowContent);
                        }
                        else
                        {
                            $strInfoWindowContent = $stringClass::toHtml5($strInfoWindowContent);
                        }

                        $strInfoWindowContent = $this->replaceInsertTags($strInfoWindowContent, false);
                        $strInfoWindowContent = str_replace(array('{{request_token}}', '[{]', '[}]'), array(REQUEST_TOKEN, '{{', '}}'), $strInfoWindowContent);
                        $strInfoWindowContent = $this->replaceDynamicScriptTags($strInfoWindowContent); // see #4203
                    }
                }

                break;

            case "tl_c4g_forum_post":

                $this->import("Database");
                $objForumPost = $this->Database->prepare("SELECT * FROM tl_c4g_forum_post WHERE id=?")
                                               ->limit(1)
                                               ->execute($intId);
                if ($objForumPost->numRows)
                {
                    $strInfoWindowContent = nl2br($objForumPost->subject . "\n\n");
                    $strInfoWindowContent .= $objForumPost->text;
                    $objComments = new \Comments();
                    $strInfoWindowContent = $objComments->parseBbCode($strInfoWindowContent);
                }
                break;

            default:

                break;
        }
        $arrData['content'] = $strInfoWindowContent;

        // HOOK: add custom logic
        if (isset($GLOBALS['TL_HOOKS']['c4gPostGetInfoWindowContent']) && is_array($GLOBALS['TL_HOOKS']['c4gPostGetInfoWindowContent']))
        {
            foreach ($GLOBALS['TL_HOOKS']['c4gPostGetInfoWindowContent'] as $callback)
            {

                $str_class = $callback[0];
                $str_function = $callback[1];

                if ($str_class && $str_function) {
                    $this->import($str_class);
                    $arrDataFromHook = $this->$str_class->$str_function($strTable, $intId, $arrData);
                    if ($arrDataFromHook && is_array($arrDataFromHook) && sizeof($arrDataFromHook)>0)
                    {
                        $arrData = $arrDataFromHook;
                    }
                }


            }
        }



        return $arrData;
    }
}
