<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes;

use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use Contao\BackendUser;
use Contao\ContentModel;

/**
 * Class GeoPicker
 * @package con4gis\MapsBundle\Classes
 */
class GeoPicker extends \Backend
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
        $this->import('BackendUser', 'User');
        parent::__construct();

        $this->User->authenticate();
        $this->loadLanguageFile('default');

        //Load required JavaScript (for backend)
        if (!$GLOBALS['TL_JAVASCRIPT']['c4g-maps-backend']) {
            $GLOBALS['TL_JAVASCRIPT']['c4g-maps-backend'] = 'bundles/con4gismaps/js/c4g-maps-backend.js';
        }
    }

    public function getPickerLink(\DataContainer $dc)
    {
        $strField = 'ctrl_' . $dc->field . (($this->Input->get('act') == 'editAll') ? '_' . $dc->id : '');
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

        return ' <a href="' . $url . REQUEST_TOKEN .
        '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geopicker'] .
        '" style="padding-left:3px" onclick="c4g.maps.backend.showGeoPicker(this.href,' .
        $strFieldX . ',' . $strFieldY . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geopicker'] . '\'});return false">' .
        \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.svg',
            $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top"') . '</a>';
    }

    /**
     * Run controller and parse the template
     */
    public function run()
    {
        $this->Template = new \BackendTemplate('c4g_geopicker');

        $this->Template->theme = $this->getTheme();
        $this->Template->base = $this->Environment->base;
        $this->Template->language = $GLOBALS['TL_LANGUAGE'];
        $this->Template->title = $GLOBALS['TL_CONFIG']['websiteTitle'];
        $this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geopicker'];
        $this->Template->charset = $GLOBALS['TL_CONFIG']['characterSet'];

        $objMapData = MapDataConfigurator::prepareMapData($this, $this->Database, ['backend' => true, 'type' => 'geopicker']);

        $objMapData['geopicker'] = [
            'type' => 'backend',
            'input_geo_x' => '[name="geoX"]',
            'input_geo_y' => '[name="geoY"]',
        ];

        //ToDo check if this could be useful in backend (show other elements)
        //$objMapData['starboard']['enable'] = false;

        $this->Template->mapData = $objMapData;
        $this->Template->output();
    }

    public function generate()
    {
        $this->Template = new \BackendTemplate('c4g_geopicker');

        $this->Template->theme = $this->getTheme();
        $this->Template->base = $this->Environment->base;
        $this->Template->language = $GLOBALS['TL_LANGUAGE'];
        $this->Template->title = $GLOBALS['TL_CONFIG']['websiteTitle'];
        $this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geopicker'];
        $this->Template->charset = $GLOBALS['TL_CONFIG']['characterSet'];

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
        ];

        //ToDo check if this could be useful in backend (show other elements)
        //$objMapData['starboard']['enable'] = false;

        $this->Template->mapData = $objMapData;

        return ['data' => $this->Template->output(), '' => ''];
    }

    public function repInsertTags($str)
    {
        return parent::replaceInsertTags($str);
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
