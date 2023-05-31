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

namespace con4gis\MapsBundle\Classes\Contao;

use con4gis\CoreBundle\Classes\ResourceLoader;
use con4gis\MapsBundle\Classes\MapDataConfigurator;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use Contao\BackendUser;
use Contao\BackendTemplate;
use Contao\Backend;
use Contao\DC_Table;
use Contao\System;
use Contao\Input;

/**
 * Class GeoEditor
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class GeoEditor extends Backend
{
    private $layerId;

    /**
     * Initialize the controller
     *
     * 1. Import user
     * 2. Call parent constructor
     * 3. Authenticate user
     * 4. Load language files
     * DO NOT CHANGE THIS ORDER!
     */
    public function __construct($layerId = 0)
    {
        parent::__construct();
        $this->import(BackendUser::class, 'User');
        $this->layerId = $layerId;
        $this->loadLanguageFile('default');
    }

    public function getEditorLink(DC_Table $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        $strField = 'ctrl_' . $dc->field . ((Input::get('act') == 'editAll') ? '_' . $dc->id : '');
        ResourceLoader::loadJavaScriptResource('bundles/con4gismaps/build/' . 'c4g-backend-helper.js', \con4gis\CoreBundle\Classes\ResourceLoader::JAVASCRIPT, 'c4g-backend-helper');
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ($dc->value < 1) ? '' : ' <a href="bundles/con4gismaps/be/geoeditor.php?rt=' . $requestToken . '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '" style="padding-left:3px" onclick="c4g.maps.backend.showGeoEditor(this.href,' . $strFieldX . ',' . $strFieldY . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor']. '\'});return false">' . \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.png', $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top"') . '</a>';
        return ' <a href="con4gis/beEditorService/' . $dc->id . '?rt=' . $requestToken . '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '" style="padding-left:3px" onclick="window.showGeoEditor(this.href,' . $strField . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '\'}, ' . $dc->id . ');return false">' . \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.svg', $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top; width: 32px; height: 32px;"') . '</a>';
    }

    /**
     * Run controller and parse the template
     */
    public function run()
    {
        $this->Template = new BackendTemplate('c4g_geoeditor');

        $this->Template->theme = $this->getTheme();
        $this->Template->base = $this->Environment->base;
        $this->Template->language = $GLOBALS['TL_LANGUAGE'];
        $this->Template->title = $GLOBALS['TL_CONFIG']['websiteTitle'];
        $this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'];
        $this->Template->charset = $GLOBALS['TL_CONFIG']['characterSet'];
        $this->c4g_map_layer_switcher = true;

        // get base64 encoded geoData
        $editedLayerId = $this->Input->get('layerId');
        $editedLayer = C4gMapsModel::findByPk($editedLayerId);
        $geoData = base64_encode($editedLayer->data_content);
        // $this->Template->geoData = base64_decode(chunk_split($geoData));
        $this->Template->geoData = $geoData;
        // 1. check if layer is child of a map element
        $mapId = $this->findMapId($this->layerId);
        if ($mapId > 0) {
            $this->id = $mapId;
            $this->c4g_map_id = $mapId;
        } else {
            // get any map
            $mapId = C4gMapsModel::findBy('location_type', 'map')->id;
            if ($mapId) {
                $this->id = $mapId;
                $this->c4g_map_id = $mapId;
            }
        }
        // we have to set these here so the map data will be configured correctly
        $objMapData = MapDataConfigurator::prepareMapData($this, $this->Database, ['geoeditor' => true]);
        ResourceLoader::loadCssResource('bundles/con4gismaps/dist/css/c4g-project-editor.min.css');
//        ResourceLoader::loadJavaScriptResource("bundles/con4giseditor/build/c4g-backend-editor.js|async|static");
        // load clipboard library if permalink is enabled
        if ($objMapData['permalink']['enable']) {
            ResourceLoader::loadJavaScriptResource('bundles/con4giscore/vendor/clipboard.min.js|async|static', $location = ResourceLoader::JAVASCRIPT, $key = 'clipboard');
        }

        $objMapData['editor']['enable'] = true;
        $objMapData['editor']['type'] = 'backend';
        $objMapData['editor']['open'] = true;
        $objMapData['editor']['data_field'] = '[name="geoData"]';
        $objMapData['lang'] = $GLOBALS['TL_LANGUAGE'];

        $this->Template->mapData = $objMapData;

        return $this->Template->getResponse();
    }

    private function findMapId($layerId)
    {
        $layer = C4gMapsModel::findByPk($layerId);

        //ToDO prüfen ob die pid immer die Karte trifft
        while ($layer && $layer->location_type != 'map'/* && $layer->location_type != 'none'*/) {
            $layer = C4gMapsModel::findByPk($layer->pid);
        }

        return $layer->id;
    }

    public function repInsertTags($str)
    {
        return System::getContainer()->get('contao.insert_tag.parser')->replace($str);
    }

    public function import($strClass, $strKey = false, $blnForce = false)
    {
        parent::import($strClass, $strKey, $blnForce);
    }

    public function getInput()
    {
        return $this->Input;
    }

    public function getFrontendUrl($arrRow)
    {
        return parent::generateFrontendUrl($arrRow);
    }
}
