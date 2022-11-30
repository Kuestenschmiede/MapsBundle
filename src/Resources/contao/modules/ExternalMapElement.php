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


use Contao\Module;

class ExternalMapElement extends Module
{
    
    protected $strTemplate = "c4g_external_map_element";
    
    public static $arrClasses = [
        'starboard' => "c4g-external-starboard-container",
        'baselayer' => "c4g-external-baselayer-container",
        'permalink' => "c4g-external-permalink-container",
        'search' => "c4g-external-search-container",
        'measuretools' => "c4g-external-measuretools-container",
        'legend' => "c4g-external-legend-container",
        'overviewmap' => "c4g-external-overviewmap-container",
        'filter' => "c4g-external-filter-container",
        'routing' => "c4g-external-router-container",
        'popup' => "c4g-external-popup-container",
        'results' => "c4g-external-results-container",
        'routingResults' => "c4g-external-router-results-container"
    ];
    
    /**
     * Display a wildcard in the back end
     * @return string
     */
    public function generate()
    {
        if (TL_MODE == 'BE') {
            $objTemplate = new \BackendTemplate('be_wildcard');
            
            $objTemplate->wildcard = '### ' . $GLOBALS['TL_LANG']['FMD']['c4g_external_map_element'][0] . ' ###';
            $objTemplate->title = $this->headline;
            $objTemplate->id = $this->id;
            $objTemplate->link = $this->title;
            $objTemplate->href = 'contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;
            
            return $objTemplate->parse();
        }
        
        return parent::generate();
    }
    
    /**
     * @inheritDoc
     */
    protected function compile()
    {
        $elementType = $this->c4g_element_type;
        $this->Template->className = self::$arrClasses[$elementType];
    }
}