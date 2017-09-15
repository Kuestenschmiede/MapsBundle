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

namespace con4gis\MapsBundle\Resources\contao\modules;

use con4gis\MapsBundle\Resources\contao\classes\MapDataConfigurator;

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
            $return = '<h1>' . $objMap->name . '<img src="bundles/con4gismaps/images/logo_con4gis-maps.png" style="float:right"></h1>';

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
