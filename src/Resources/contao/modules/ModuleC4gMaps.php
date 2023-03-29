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
use Contao\Module;

/**
 * Class ModuleC4gMaps
 * @package \con4gis\MapsBundle\Resources\contao\modules
 */
class ModuleC4gMaps extends Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'c4g_maps';

    /**
     * Display a wildcard in the back end
     * @return string
     */
    public function generate()
    {
        if (System::getContainer()->get('contao.routing.scope_matcher')->isBackendRequest(System::getContainer()->get('request_stack')->getCurrentRequest() ?? Request::create(''))) {
            $objTemplate = new \BackendTemplate('be_wildcard');

            $objTemplate->wildcard = '### ' . $GLOBALS['TL_LANG']['FMD']['c4g_maps'][0] . ' ###<img src="bundles/con4gismaps/images/be-icons/logo_con4gis-maps.svg" style="float:right">';
            $objTemplate->title = $this->headline;
            $objTemplate->id = $this->id;
            $objTemplate->link = $this->title;
            $objTemplate->href = 'contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;

            return $objTemplate->parse();
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
