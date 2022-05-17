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
namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

use Contao\Backend;
use Contao\DataContainer;
use Contao\Image;
use con4gis\MapsBundle\Classes\Utils;
class TlC4gMapBaselayers extends Backend
{
    public function pasteElement(DataContainer $dc, $row, $table, $cr, $arrClipboard=null)
    {
        if ($row['id'] > 0) {
            $imagePasteAfter = Image::getHtml('pasteafter.svg', sprintf($GLOBALS['TL_LANG'][$table]['pasteafter'][1], $row['id']));
            return '<a href="'.$this->addToUrl('act='.$arrClipboard["mode"].'&mode=1&childs=1&pid='.$row['id']).'" title="'.
                specialchars(sprintf($GLOBALS['TL_LANG'][$table]['pasteafter'][1], $row['id'])).'" onclick="Backend.getScrollOffset()">'.$imagePasteAfter.'</a> ';
        } else {
            $imagePasteInto = Image::getHtml('pasteinto.svg', sprintf($GLOBALS['TL_LANG'][$table]['pasteinto'][1], $row['id']));
            return '<a href="'.$this->addToUrl('act='.$arrClipboard["mode"].'&mode=2&childs=1&pid='.$row['id']).'" title="'.
                specialchars(sprintf($GLOBALS['TL_LANG'][$table]['pasteafter'][1], $row['id'])).'" onclick="Backend.getScrollOffset()">'.$imagePasteInto.'</a> ';
        }
    }

    public function addIcon($row, $label, DataContainer $dc=null, $imageAttribute='', $blnReturnImage=false, $blnProtected=false)
    {
        return \Image::getHtml('bundles/con4gismaps/images/be-icons/baselayers.svg', '', $imageAttribute).' '.$label;
    }

    public function toggleIcon($row, $href, $label, $title, $icon, $attributes)
    {
        $this->import('BackendUser', 'User');

        if (strlen($this->Input->get('tid')))
        {
            $this->toggleVisibility($this->Input->get('tid'), ($this->Input->get('state') == 0));
            $this->redirect($this->getReferer());
        }

        // Check permissions AFTER checking the tid, so hacking attempts are logged
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_map_baselayers::published', 'alexf'))
        {
            return '';
        }

        $href .= '&amp;id='.$this->Input->get('id').'&amp;tid='.$row['id'].'&amp;state='.$row[''];

        if (!$row['published'])
        {
            $icon = 'invisible.svg';
        }

        return '<a href="'.$this->addToUrl($href).'" title="'.specialchars($title).'"'.$attributes.'>'.Image::getHtml($icon, $label).'</a> ';
    }
    public function toggleVisibility($intId, $blnPublished)
    {
        // Check permissions to publish
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_map_baselayers::published', 'alexf'))
        {
            $this->log('Not enough permissions to show/hide record ID "'.$intId.'"', 'tl_c4g_map_baselayers toggleVisibility', TL_ERROR);
            $this->redirect('contao/main.php?act=error');
        }

        $this->createInitialVersion('tl_c4g_map_baselayers', $intId);

        // Trigger the save_callback
        if (is_array($GLOBALS['TL_DCA']['tl_c4g_map_baselayers']['fields']['published']['save_callback']))
        {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_map_baselayers']['fields']['published']['save_callback'] as $callback)
            {
                $this->import($callback[0]);
                $blnPublished = $this->$callback[0]->$callback[1]($blnPublished, $this);
            }
        }

        // Update the database
        $this->Database->prepare("UPDATE tl_c4g_map_baselayers SET tstamp=". time() .", published='" . ($blnPublished ? '' : '1') . "' WHERE id=?")
            ->execute($intId);
        $this->createNewVersion('tl_c4g_map_baselayers', $intId);
        con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator::purgeBaselayerApiCache();
    }
    public function groupColumns( $multiColumnWizard){
        $arrColumnBaselayers = array(
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['baselayers'],
            'inputType' => 'select'
        );
        $arrBaselayers = $this->Database->prepare("SELECT * FROM tl_c4g_map_baselayers WHERE published=1")
            ->execute()->fetchAllAssoc();
        $arrOptions =[];
        foreach ($arrBaselayers as $arrBaselayer){
            $arrOptions[$arrBaselayer['id']] = $arrBaselayer['name'];
        }
        $arrColumnBaselayers['options'] = $arrOptions;
        $arrColumMinZoom = array(
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['minZoom'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => array('mandatory'=>'true', 'tl_class'=>'w50', 'rgxp'=>'digit')
        );
        $arrColumMaxZoom = array(
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['maxZoom'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '18',
            'eval'                    => array('mandatory'=>'true', 'tl_class'=>'w50', 'rgxp'=>'digit')
        );
        $return = array(
            'baselayers'    => $arrColumnBaselayers,
            'minZoom'       => $arrColumMinZoom,
            'maxZoom'       => $arrColumMaxZoom,
        );
        return $return;
    }
    public function getCon4gisIoBaselayers(){
        $objSettings = \con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel::findOnly();
        if ($objSettings->con4gisIoUrl && $objSettings->con4gisIoKey) {
            $baselayerUrl = rtrim($objSettings->con4gisIoUrl, "/") . "/" . "getBaselayers.php";
            $baselayerUrl .= "?key=" . $objSettings->con4gisIoKey;
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($baselayerUrl);
            if ($REQUEST->response) {
                $responses = \GuzzleHttp\json_decode($REQUEST->response);
            } else {
                $responses = [];
            }
            $arrReturn= [];
            $language = \Contao\BackendUser::getInstance()->language;
            foreach ($responses as $response){
                if ($response->name && $response->name) {
                    $arrReturn[$response->id] = Utils::replaceInsertTags($response->name, $language);
                }
            }

            return $arrReturn;
        }
    }

    /**
     * @param $dc
     */
    public function showInfoMessage($dc)
    {
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['infotext']);
    }
}
