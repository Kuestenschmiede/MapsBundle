<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Resources\contao\modules;


use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\CoreBundle\Classes\ResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use Contao\Controller;
use Contao\System;
use Contao\Module;
use Contao\StringUtil;
use Contao\BackendTemplate;

class ModuleC4gSearch extends Module
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
        if (System::getContainer()->get('contao.routing.scope_matcher')->isBackendRequest(System::getContainer()->get('request_stack')->getCurrentRequest() ?? Request::create('')))
        {
            $objTemplate = new BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### '.$GLOBALS['TL_LANG']['FMD']['c4g_travel_costs'][0].' ###';
            $objTemplate->title = $this->headline;
            $objTemplate->id = $this->id;
            $objTemplate->link = $this->title;
            $objTemplate->href = System::getContainer()->get('router')->generate('contao_backend') .'?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;
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
        $pageUrl = System::getContainer()->get('contao.insert_tag.parser')->replace("{{link_url::" . $pageId . "}}");
        ResourceLoader::loadJavaScriptDeferred('c4g-search', "/bundles/con4gismaps/build/c4g-search.js");
        ResourceLoader::loadCssResourceDeferred("/bundles/con4gismaps/dist/css/c4g-search-general.min.css");
        $template = $this->Template;
        $objSettings = C4gSettingsModel::findSettings();
        $objMapsProfile = C4gMapProfilesModel::findByPk($objSettings->defaultprofile);
        $urlMap = System::getContainer()->get('contao.insert_tag.parser')->replace("{{link_url::" . $this->c4g_map_site_id . "}}");
        $arrSettings = [];
        if($objMapsProfile->geosearchParams){
            $arrSettings['geosearchParams'] = [];
            foreach(StringUtil::deserialize($objMapsProfile->geosearchParams) as $geosearchParam){
                $arrSettings['geosearchParams'] = array_merge($arrSettings['geosearchParams'], [$geosearchParam['keys'] => $geosearchParam['params']]);
            }
        }
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