<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes;

use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use Contao\BackendUser;
use Contao\BackendTemplate;
use Contao\Backend;
use Contao\ContentModel;
use Contao\Environment;
use Contao\FrontendTemplate;
use Contao\System;
use Contao\DC_Table;
use Contao\Input;
use Contao\Image;

/**
 * Class GeoPicker
 * @package con4gis\MapsBundle\Classes
 */
class GeoPicker extends Backend
{
    /**
     * Initialize the controller
     *
     * 1. Import user
     * 2. Call parent constructor
     * 3. Authenticate user
     * 4. Load language files
     * DO NOT CHANGE THIS ORDER!
     */
    public function __construct()
    {
        $this->loadLanguageFile('default');

        //Load required JavaScript (for backend)
        if (!isset($GLOBALS['TL_JAVASCRIPT']['c4g-maps-backend'])) {
            $GLOBALS['TL_JAVASCRIPT']['c4g-maps-backend'] = 'bundles/con4gismaps/js/c4g-maps-backend.js';
        }
    }

    public function getPickerLink(DC_Table $dc)
    {
        $strField = 'ctrl_' . $dc->field . ((Input::get('act') == 'editAll') ? '_' . $dc->id : '');
        if (strtoupper(substr($strField, -1, 1)) === 'Y') {
            $strFieldX = substr($strField, 0, -1) . 'x';
            $strFieldY = $strField;
        } elseif (strtoupper(substr($strField, -1, 1)) === 'X') {
            $strFieldX = $strField;
            $strFieldY = substr($strField, 0, -1) . 'y';
        } elseif ($strField === 'ctrl_longitude' || $strField === 'ctrl_latitude') {
            $strFieldX = 'ctrl_longitude';
            $strFieldY = 'ctrl_latitude';
        } else {
            // default
            $strFieldX = 'ctrl_longitude';
            $strFieldY = 'ctrl_latitude';
        }

        $url = $GLOBALS['con4gis']['maps']['api']['geopicker'] . '?rt=';
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="' . $url . $requestToken .
        '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geopicker'] .
        '" style="padding-left:3px" onclick="c4g.maps.backend.showGeoPicker(this.href,' .
        $strFieldX . ',' . $strFieldY . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geopicker'] . '\'});return false">' .
        Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.svg',
            $GLOBALS['TL_LANG']['tl_content']['editalias'][0] ?? null, 'style="vertical-align:top"') . '</a>';
    }

    /**
     * Run controller and parse the template
     */
    public function run()
    {
        $this->Template = new BackendTemplate('c4g_geopicker');

        $this->Template->theme = $this->getTheme();
        $this->Template->base = Environment::get('base');
        $this->Template->language = $GLOBALS['TL_LANGUAGE'];
        $this->Template->title = Environment::get('websiteTitle');
        $this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geopicker'];
        $this->Template->charset = Environment::get('characterSet');

        $objMapData = MapDataConfigurator::prepareMapData($this, $this->Database, ['backend' => true, 'type' => 'geopicker']);

        $objMapData['geopicker'] = [
            'type' => 'backend',
            'input_geo_x' => '[name="geoX"]',
            'input_geo_y' => '[name="geoY"]',
            'value_geoX' => Input::get('geoX'),
            'value_geoY' => Input::get('geoY')
        ];

        //ToDo check if this could be useful in backend (show other elements)
        //$objMapData['starboard']['enable'] = false;

        $this->Template->mapData = $objMapData;
        $response = $this->Template->getResponse();
        $response->sendContent();
    }

    public function generate()
    {
        $this->Template = new BackendTemplate('c4g_geopicker');

        $this->Template->theme = $this->getTheme();
        $this->Template->base = Environment::get('base');
        $this->Template->language = $GLOBALS['TL_LANGUAGE'];
        $this->Template->title = Environment::get('websiteTitle');
        $this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geopicker'];
        $this->Template->charset = Environment::get('characterSet');

        $c4gSettings = C4gSettingsModel::findSettings();
        $objMap = ContentModel::findByPk($c4gSettings->position_map);
        if (!$objMap) {
            $objMap = (object) [
                'User' => BackendUser::getInstance(),
            ];
        } else {
            $objMap->User = BackendUser::getInstance();
        }
        $objMapData = MapDataConfigurator::prepareMapData($objMap, $this->Database, ['backend' => true, 'type' => 'geopicker']);

        $objMapData['geopicker'] = [
            'type' => 'backend',
            'input_geo_x' => '[name="geoX"]',
            'input_geo_y' => '[name="geoY"]',
            'value_geoX' => Input::get('geoX'),
            'value_geoY' => Input::get('geoY')
        ];

        //ToDo check if this could be useful in backend (show other elements)
        //$objMapData['starboard']['enable'] = false;

        $this->Template->mapData = $objMapData;
        $response = $this->Template->getResponse();
        $response->sendContent();
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
