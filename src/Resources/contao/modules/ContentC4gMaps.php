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
namespace con4gis\MapsBundle\Resources\contao\modules;

use con4gis\MapsBundle\Classes\MapDataConfigurator;

/**
 * Class ContentC4gMaps
 * @package \con4gis\MapsBundle\Resources\contao\modules
 */
class ContentC4gMaps extends \Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'c4g_maps';

    /**
     * Generate content element
     */
    public function generate()
    {
        if (TL_MODE == 'BE') {
            $objMap = $this->Database->prepare("SELECT * FROM tl_c4g_maps WHERE id=?")
                           ->limit(1)
                           ->execute($this->c4g_map_id);
            $return = '<h1>' . $objMap->name . '<img src="bundles/con4gismaps/images/be-icons/logo_con4gis-maps.svg" style="float:right"></h1>';

            return $return;
        }

        return parent::generate();
    }

    /**
     * Generate module
     */
    protected function compile()
    {
        $this->Template->mapData = MapDataConfigurator::prepareMapData($this, $this->Database);
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
