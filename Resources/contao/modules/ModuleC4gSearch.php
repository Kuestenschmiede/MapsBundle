<?php


namespace con4gis\MapsBundle\Resources\contao\modules;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\classes\ResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use Contao\Controller;
use Contao\System;

class ModuleC4gSearch extends \Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'c4g_search';

    /**
     * Generate content element
     */
    public function generate()
    {
        if (TL_MODE == 'BE') {
            $objTemplate = new \BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### '.$GLOBALS['TL_LANG']['FMD']['c4g_travel_costs'][0].' ###';
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
        $pageId = $this->mapPage;
        $pageUrl = Controller::replaceInsertTags("{{link_url::" . $pageId . "}}");
        ResourceLoader::loadJavaScriptDeferred('c4g-search', "/bundles/con4gismaps/build/c4g-search.js");
        $template = $this->Template;
        $objSettings = C4gSettingsModel::findSettings();
        $urlMap = Controller::replaceInsertTags("{{link_url::" . $this->c4g_map_site_id . "}}");
        $arrSettings = [];
        $arrSettings['mapUrl'] = $urlMap;
        $arrSettings['moduleId'] = $this->id;
        $arrSettings['searchPlaceholder'] = $this->c4g_map_placeholder;
        $arrSettings['zoomLevel'] = $this->c4g_map_zoomlevel ?: 10;
        $arrSettings['proxyUrl'] = $objSettings->con4gisIoUrl;
        $arrSettings['keyForward'] = C4GUtils::getKey($objSettings,2);
        $arrSettings['keyAutocomplete'] = C4GUtils::getKey($objSettings,7);

        $template->objSettings = $arrSettings;
    }
}