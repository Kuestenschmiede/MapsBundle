<?php

namespace con4gis\MapsBundle\Classes\Contao\Callbacks;


use Contao\Database;
use Contao\Input;
use Contao\Versions;
use Contao\FilesModel;
use con4gis\CoreBundle\Classes\C4GVersionProvider;
use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use con4gis\MapsBundle\Classes\Utils;
use Contao\Image;
use Contao\StringUtil;
use Contao\Backend;
use Contao\BackendUser;
use Contao\DC_Table;
use Contao\System;

class TlC4gMaps extends Backend
{

    /**
     * value of first source table
     */
    protected $firstTabSource = null;

    /**
     * Import BackendUser object
     */
    public function __construct()
    {
        parent::__construct();

        $this->import(BackendUser::class, 'User');
    }

    /**
     * Return the copy page with subpages button
     * @param array
     * @param string
     * @param string
     * @param string
     * @param string
     * @param string
     * @param string
     * @return string
     */
    public function copyPageWithSubpages($row, $href, $label, $title, $icon, $attributes, $table)
    {

        $objSubpages = $this->Database->prepare("SELECT id FROM tl_c4g_maps WHERE pid=?")
            ->limit(1)
            ->execute($row['id']);

        if ($objSubpages->numRows > 0) {
            return '<a href="'.$this->addToUrl($href.'&amp;id='.$row['id']).'" title="'.StringUtil::specialchars($title).'"'.$attributes.'>'.Image::getHtml($icon, $label).'</a> ';
        } else {
            return Image::getHtml(preg_replace('/\.svg/i', '_.svg', $icon)).' ';
        }
    }

    /**
     * Return all Location Styles for current Maps Profile as array
     * @param object
     * @return array
     */
    public function getLocStyles(DC_TABLE $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")->execute();
        while ($locStyles->next()) {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }
    public function locstyleGeoJson($multiColumnWizard) {
        $activeRecord = $multiColumnWizard->__get('activeRecord');
        $dataFile = $activeRecord->data_file;
        $dataContent = $activeRecord->data_content;
        $arrLocstyles = $this->Database->prepare('SELECT * FROM tl_c4g_map_locstyles')
            ->execute()->fetchAllAssoc();
        $arrOptions = [];
        foreach ($arrLocstyles as $arrLocstyle) {
            $arrOptions[$arrLocstyle['id']] = $arrLocstyle['name'];
        }
        $arrColumnLocstyles =  [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyle'],
            'inputType' => 'select',
            'eval'      => ['chosen' => true, 'includeBlankOption' => true, 'style' => 'min-width:200px;width:200px;'],
            'options'   => $arrOptions
        ];
        if ($dataContent) {
            $arrGeojson = json_decode($dataContent, true) ;
        }
        else {
            $objFile = FilesModel::findByUuid($dataFile);
            $rootDir = System::getContainer()->getParameter('kernel.project_dir');
            $dataFile = $objFile ? ($rootDir . '/' . $objFile->path) : false;
            $data = file_exists($dataFile) ? file_get_contents($dataFile) : false;
            $arrGeojson = json_decode($data, true);
        }
        if ($arrGeojson['type'] === "FeatureCollection") {
            $arrOptionKeys = [];
            $arrOptionProps = ['*'];
            foreach ($arrGeojson['features'] as $feature){
                foreach ($feature['properties'] as $key => $property) {
                    if (array_search($key, $arrOptionKeys) === false) {
                        $arrOptionKeys[] = $key;
                    }
                    if (array_search($property, $arrOptionProps) === false) {
                        $arrOptionProps[] = $property;
                    }
                }
            }
        }
        $arrColumnKeys = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyleGeoJson']['keys'],
            'inputType' => 'select',
            'eval'      => ['chosen' => true, 'includeBlankOption' => true, 'style' => 'min-width:200px;width:200px;'],
            'options'   => $arrOptionKeys
        ];
        $arrColumnProps = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyleGeoJson']['props'],
            'inputType' => 'select',
            'eval'      => ['chosen' => true, 'includeBlankOption' => true, 'style' => 'min-width:200px;width:200px;'],
            'options'   => $arrOptionProps
        ];

        $return = [
            'keys'      => $arrColumnKeys,
            'props'     => $arrColumnProps,
            'locstyle'  => $arrColumnLocstyles
        ];
        return $return;
    }

    public function locstyleWfs($multiColumnWizard)
    {
        $activeRecord = $multiColumnWizard->__get('activeRecord');
        $arrLocstyles = $this->Database->prepare('SELECT * FROM tl_c4g_map_locstyles')
            ->execute()->fetchAllAssoc();
        $arrOptions = [];
        foreach ($arrLocstyles as $arrLocstyle) {
            $arrOptions[$arrLocstyle['id']] = $arrLocstyle['name'];
        }
        $arrColumnLocstyles =  [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyle'],
            'inputType' => 'select',
            'eval'      => ['chosen' => true, 'includeBlankOption' => true, 'style' => 'min-width:200px;width:200px;'],
            'options'   => $arrOptions
        ];
        $arrColumnKey = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyleWfs']['key'],
            'inputType' => 'text'
        ];
        $arrCompareItem =  [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyleWfs']['compare'],
            'inputType' => 'select',
            'eval'      => ['chosen' => true, 'style' => 'min-width:150px;width:150px;'],
            'options'   => [
                "==",
                ">",
                "<"
            ]
        ];
        $arrColumnValue = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_maps']['locstyleWfs']['value'],
            'inputType' => 'text'
        ];

        $return = [
            'key'       => $arrColumnKey,
            'compare'   => $arrCompareItem,
            'value'     => $arrColumnValue,
            'locstyle'  => $arrColumnLocstyles
        ];
        return $return;
    }

    /**
     * Return all available Sources for Maps
     * @param object
     * @return array
     */
    public function getTabSources(DC_TABLE $dc)
    {
        $return = [];
        $objTables = C4gMapTablesModel::findAll();
        $language = BackendUser::getInstance()->language;
        while ($objTables && $objTables->next()) {
            if ($objTables->id && $objTables->name) {
                $return[$objTables->id] = Utils::replaceInsertTags($objTables->name, $language);
            }
        }
        return $return;
    }

    /**
     * Return all available locations types
     * @param object
     * @return array
     */
    public function getLocationTypes(DC_TABLE $dc)
    {
        $return = \con4gis\MapsBundle\Classes\Utils::getLocationTypes();
        if (C4GVersionProvider::isInstalled('con4gis/forum')) {
            $return[] = 'c4gForum';
        }
        if (isset($GLOBALS['c4g_locationtypes']) && is_array($GLOBALS['c4g_locationtypes']))
        {
            $return = array_merge($return, $GLOBALS['c4g_locationtypes']);
        }
        return $return;
    }
    public function getC4gIoDropdown(DC_TABLE $dc) {
        $currentType = $dc->activeRecord->c4gioType;
        $response = [];
        if ($currentType == 2) {
            $response = [
                "NDS"   => "Niedersachsen",
                "SH"    => "Schleswig-Holstein",
                "MV"    => "Mecklenburg-Vorpommern",
                "BB"    => "Brandenburg",
                "SN"    => "Sachsen",
                "ST"    => "Sachsen-Anhalt",
                "TH"    => "Thüringen",
                "BY"    => "Bayern",
                "BW"    => "Baden-Württemberg",
                "SL"    => "Saarland",
                "RLP"   => "Rheinland-Pfalz",
                "H"     => "Hessen",
                "NRW"   => "Nordrhein-Westfalen",
                "HB"    => "Bremen",
                "HH"    => "Hamburg",
                "B"     => "Berlin"
            ];
        }
        return $response;
    }


    /**
     * Return all available map enabled forums
     * @param object
     * @return array
     */
    public function getMapForums(DC_TABLE $dc)
    {
        //ToDo what if forum not installed?
        $forumHelper = new \con4gis\ForumBundle\Classes\C4GForumHelper($this->Database);
        $forums = $forumHelper->getMapForums();
        foreach ($forums AS $forum) {
            $return[$forum['id']] = $forum['name'];
        }
        return $return;
    }

    /**
     * Return all entries in the parent table for the selection
     * @param object
     * @return array
     */
    public function getTabParentList(DC_TABLE $dc)
    {
        $return = [];
        if ($dc->activeRecord->tab_source<>'') {
            $tabsource = C4gMapTablesModel::findByPk($dc->activeRecord->tab_source);
        } else {
            $objTables = C4gMapTablesModel::findAll();
            $tabsource = $objTables[0];
        }
        $ptable = \Contao\StringUtil::deserialize($tabsource->ptable)[0];
        $ptableOptions = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableOptions)[0]);
        $ptableCompareField = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableCompareField)[0]);
        if($ptable && $ptableOptions && $ptableCompareField) {
            $strSelect = "SELECT $ptableCompareField, $ptableOptions FROM $ptable";
            $objResult = $this->Database->prepare($strSelect)->execute();
            while ($objResult->next()) {
                $return[$objResult->$ptableCompareField] = $objResult->$ptableOptions;
            }
        }
        return $return;

    }

    /**
     * Return all entries in the parent table for the selection
     * @param object
     * @return array
     */
    public function getTabParentList1(DC_TABLE $dc)
    {
        $return = [];
        if ($dc->activeRecord->tab_source<>'') {
            $tabsource = C4gMapTablesModel::findByPk($dc->activeRecord->tab_source);
        } else {
            $objTables = C4gMapTablesModel::findAll();
            $tabsource = $objTables[0];
        }
        $ptable = \Contao\StringUtil::deserialize($tabsource->ptable)[1];
        $ptableOptions = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableOptions)[1]);
        $ptableCompareField = str_replace($ptable . '.','', \Contao\StringUtil::deserialize($tabsource->ptableCompareField)[1]);
        if($ptable && $ptableOptions && $ptableCompareField){
            $strSelect = "SELECT $ptableCompareField, $ptableOptions FROM $ptable";
            $objResult = $this->Database->prepare($strSelect)->execute();
            while ($objResult->next()) {
                $return[$objResult->$ptableCompareField] = $objResult->$ptableOptions;
            }
        }
        return $return;
    }

    /**
     * Recursively step through map item tree
     */
    private function getMapItemTree($tree, $return, $pid,$level)
    {
        if (array_key_exists($pid, $tree)) {
            foreach ($tree[$pid] AS $key=>$item) {
                $return[$key] = str_repeat('+',$level).$item;
                if (array_key_exists($key, $tree)) {
                    $return = $this->getMapItemTree($tree, $return, $key, $level+1);
                }
            }
        }
        return $return;
    }
    /**
     * Return options from WFS getCapabilties
     * @param object
     * @return array
     */
    public function getWfsOptions (DC_Table $dc) {
        $return = [];
        $return[0] = "-";
        if ($dc->activeRecord->wfsCapabilities) {
            $feed = simplexml_load_file($dc->activeRecord->wfsCapabilities);
            if ($feed && $feed->FeatureTypeList && $feed->FeatureTypeList->FeatureType)
            foreach ($feed->FeatureTypeList->FeatureType as $element) {
                $key = trim($element->Name);
                $value = trim($element->Title);
                $return[$key] = $value;
            }
        }
        return $return;
    }
    /**
     * Return all map items ready to be linked
     * @param object
     * @return array
     */
    public function get_link_items(DC_TABLE $dc)
    {

        $maps = $this->Database->prepare ( "SELECT id,pid,name FROM tl_c4g_maps WHERE published=1 AND location_type<>'link' ORDER BY pid,sorting" )->execute ();
        if ($maps->numRows > 0) {
            while ( $maps->next () ) {
                $tree [$maps->pid][$maps->id] = $maps->name;
            }
        }
        return $this->getMapItemTree($tree,array(),0,0);
    }

    /**
     * Generate the icons to be used
     */
    public function generateLabel($row, $label, $dc)
    {
        $image = 'bundles/con4gismaps/images/be-icons/';

        //Backwards compatibility (data < con4gis 7): so that maps are set as maps again. is_map can removed in later versions.
        if (($row['location_type'] == 'none') && ($row['is_map'] == '1')){
            $row['location_type'] = 'map';
            $row['is_map'] = '0';
            Database::getInstance()->prepare("UPDATE tl_c4g_maps SET location_type=?, is_map=? WHERE is_map=?")->execute($row['location_type'],$row['is_map'],'1');
        }

        switch ($row['location_type']) {
            case 'map':
                $image .= 'map';
                break;
            case 'none':
                $image .= 'mapfolder';
                break;
            case 'single':
                $image .= 'location';
                break;
            case 'table':
                $image .= 'table';
                break;
            case 'gpx':
                $image .= 'gpx';
                break;
            case 'kml':
                $image .= 'kml';
                break;
            case 'geojson':
                $image .= 'geojson';
                break;
            case 'osm':
                $image .= 'osm';
                break;
            case 'overpass':
                $image .= 'overpass';
                break;
            case 'link':
                $image .= 'link';
                break;
            case 'c4gForum':
                $image .= 'c4gforum';
                break;
            case 'startab':
                $image .= 'starboard';
                break;
            case 'folder':
                $image .= 'from_path';
                break;
            case 'gnrcPrjct':
                $image .= 'editor';
                break;
            case 'tPois':
                $image .= 'tracking_pois';
                break;
            case 'tTracks':
                $image .= 'tracking_tracks';
                break;
            case 'tLive':
                $image .= 'tracking_live';
                break;
            case 'ffOperat':
                $image .= 'operation';
                break;
            case 'mpCntnt':
                $image .= 'data_category';
                break;
            case 'mpCntnt_directory':
                $image .= 'data_directory';
                break;
            default:
                $image .= '';
                break;
        }

        if (!$row['published']) {
            $image .= '_1';
        }
        $image .= '.svg';

        if ($row['location_type'] != 'map') {
            $label = ' '.$row['name'];
        }

        return Image::getHtml($image) . $label;
    }

    /**
     * Update the palette information that depend on other values
     */
    public function updateDCA(DC_Table $dc)
    {
        if (!$dc->id) return;

        $objMap = $this->Database->prepare("SELECT location_type, show_locations, hover_location, restrict_area, geolocation, be_optimize_checkboxes_limit, popupType, popup_share_button, popup_share_destination FROM tl_c4g_maps WHERE id=?")
            ->limit(1)
            ->execute($dc->id);
        
        if ($objMap->numRows > 0) {
            if ($objMap->location_type == 'map' && $objMap->show_locations == '1') {
                $calcExtentFields = 'min_gap,';
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map'] = str_replace(",show_locations,", ",show_locations,".$calcExtentFields, $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map']);
            }

            if($objMap->hover_location == '1') {
                foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $paletteKey=>$paletteString)
                {
                    if (!is_array($paletteString) && strpos($paletteString, "hover_location")!==false)
                    {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$paletteKey] = str_replace("hover_location", "hover_location,hover_style", $paletteString);

                    }
                }
            }

            if ($objMap->location_type == 'map' && $objMap->geolocation) {
                $geolocationFields = 'geolocation_zoom,geolocation_bottomleft_geox,geolocation_bottomleft_geoy,geolocation_topright_geox,geolocation_topright_geoy,';
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map'] = str_replace(",geolocation,", ",geolocation,".$geolocationFields, $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map']);
            }

            if ($objMap->location_type == 'map' && $objMap->restrict_area) {
                $restrictAreaFields = ',restr_bottomleft_geox,restr_bottomleft_geoy,restr_topright_geox,restr_topright_geoy';
                $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map'] = str_replace(",restrict_area;", ",restrict_area".$restrictAreaFields.';', $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['map']);
            }

            //additional popup fields
            switch ($objMap->location_type) {
//ToDo where is showPopupOnActivate?
//                case 'single':
//                    $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "showPopupOnActivate,popup_info", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
//                    break;
                case 'gpx':
                case 'kml':
                    $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popup_info,popup_async", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    break;
                case 'osm':
                case 'overpass':
                    if ($objMap->popupType == "template") {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popupType,popupTemplate", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    } else if ($objMap->popupType == "popup_info") {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popupType", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    } else {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace("popup_info", "popupType,popup_info", $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    }

                    if (C4GVersionProvider::isInstalled('con4gis/forum')) {
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace('popup_info', 'popup_info,popup_extend', $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']);
                    }

                    break;
                default:
                    break;
            }

            if ($objMap->popup_share_button) {

                $fields = "popup_share_button,popup_share_type,popup_share_destination";

                $externalDestinations = [
                    'con4gis_map_external',
                    'con4gis_routing_external',
                    'osm',
                    'osm_routing',
                ];
                if (in_array($objMap->popup_share_destination, $externalDestinations)) {
                    $fields .= ",popup_share_external_link";
                }
                $fields .= ",popup_share_message";

                if ($objMap->location_type === "table") {
                    $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['table'] = str_replace(
                        'popup_share_button',
                        $fields,
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['table']
                    );
                } else {
                    $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = str_replace(
                        'popup_share_button',
                        $fields,
                        $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup']
                    );
                }



            }

            // convert checkboxes to chosenfields, if there are to many locationstyles
            if (intval($objMap->be_optimize_checkboxes_limit) > 0) {
                // subforums-options
                if (C4GVersionProvider::isInstalled('con4gis/forum')) {
                    $objForumCount = $this->Database->prepare("SELECT COUNT(id) AS entry_count FROM tl_c4g_forum WHERE enable_maps = 1")->execute();
                    if ($objForumCount->numRows > 0) {
                        if (intval($objForumCount->entry_count) > intval($objMap->be_optimize_checkboxes_limit)) {
                            $GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['forums']['inputType'] = 'select';
                            $GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['forums']['eval']['chosen'] = true;
                        }
                    }
                }
            }
        }

    }

    /**
     * determine the default profile
     */
    public function getDefaultProfile($varValue, DC_TABLE $dc)
    {
        if (!$varValue) {
            if ($dc->activeRecord->pid) {
                // take default profile from parent entry
                $objParent = $this->Database->prepare("SELECT profile FROM tl_c4g_maps WHERE id=?")
                    ->limit(1)->execute($dc->activeRecord->pid);
                if ($objParent->numRows > 0) {
                    $varValue = $objParent->profile;
                }
            }
            if (!$varValue) {
                // get default profile
                $settings = C4gSettingsModel::findAll();
                $varValue = $settings[0]->defaultprofile;
            }

            if (!$varValue) {
                $profiles = C4gMapProfilesModel::findAll();
                if ($profiles && (count($profiles) > 0)) {
                    $length = count($profiles);
                    $varValue = $profiles[$length-1]->id;
                }
            }
        }
        return $varValue;
    }


    /**
     * Validate Center Lon
     */
    public function setCenterLon($varValue, DC_TABLE $dc)
    {
        if ($dc->activeRecord->show_locations > 0) {
            if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate Center Lat
     */
    public function setCenterLat($varValue, DC_TABLE $dc)
    {
        if ($dc->activeRecord->show_locations > 0) {
            if (!\con4gis\MapsBundle\Classes\Utils::validateLat($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }


    /**
     * Validate restricted Lon
     */
    public function setRestrLon($varValue, DC_TABLE $dc)
    {
        if ($dc->activeRecord->restrict_area) {
            if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate restricted Lat
     */
    public function setRestrLat($varValue, DC_TABLE $dc)
    {
        if ($dc->activeRecord->restrict_area) {
            if (!\con4gis\MapsBundle\Classes\Utils::validateLat($varValue)) {
                throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate Location Lon
     */
    public function setLocLon($varValue, DC_TABLE $dc)
    {
        if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }

    /**
     * Validate Location Lat
     */
    public function setLocLat($varValue, DC_TABLE $dc)
    {
        if (!\con4gis\MapsBundle\Classes\Utils::validateLat($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
        }
        return $varValue;
    }

    /**
     * Return the "toggle visibility" button
     */
    public function toggleIcon($row, $href, $label, $title, $icon, $attributes)
    {
        if (strlen(Input::get('tid'))) {
            $this->toggleVisibility(Input::get('tid'), (Input::get('state') == 1));
            $this->redirect($this->getReferer());
        }

        // Check permissions AFTER checking the tid, so hacking attempts are logged
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_maps::published', 'alexf')) {
            return '';
        }

        $href .= '&amp;tid='.$row['id'].'&amp;state='.($row['published'] ? '' : 1);

        if (!$row['published']) {
            $icon = 'invisible.svg';
        }

        return '<a href="'.$this->addToUrl($href).'" title="'. StringUtil::specialchars($title) .'"'.$attributes.'>'.Image::getHtml($icon, $label).'</a> ';
    }


    /**
     * Disable/enable an element
     * @param integer
     * @param boolean
     */
    public function toggleVisibility($intId, $blnVisible, DC_TABLE $dc=null)
    {
        // Check permissions to publish
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_maps::published', 'alexf')) {
            C4gLogModel::addLogEntry('maps','Not enough permissions to publish/unpublish con4gis\MapsBundle\Classes\Utils ID "'.$intId.'"');
            $this->redirect(System::getContainer()->get('router')->generate('contao_backend').'?act=error');
        }

        $objVersions = new Versions('tl_c4g_maps', $intId);
        $objVersions->initialize();

        // Trigger the save_callback
        if (array_key_exists('save_callback', $GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['published']) &&
        is_array($GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['published']['save_callback'])) {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['published']['save_callback'] as $callback) {
                $str_class = $callback[0];
                $str_function = $callback[1];

                if ($str_class && $str_function) {
                    $this->import($str_class);
                    $blnVisible = $this->$str_class->$str_function($blnVisible, $this);
                }
            }
        }


        // Update the database
        $this->Database->prepare("UPDATE tl_c4g_maps SET tstamp=". time() .", published='" . ($blnVisible ? 1 : '') . "' WHERE id=?")
            ->execute($intId);

//ToDo Label Icons on toggle
//        // Trigger the label_callback
//        $callback = $GLOBALS['TL_DCA']['tl_c4g_maps']['list']['label']['label_callback'];
//        $row = ['id' => $intId];
//        $this->import($callback[0]);
//        $image = $this->{$callback[0]}->{$callback[1]}($row,'');

        // Trigger the onsubmit_callback
        if (is_array($GLOBALS['TL_DCA']['tl_c4g_maps']['config']['onsubmit_callback']))
        {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['config']['onsubmit_callback'] as $callback)
            {
                if (is_array($callback))
                {
                    $this->import($callback[0]);
                    $this->{$callback[0]}->{$callback[1]}($dc);
                }
                elseif (is_callable($callback))
                {
                    $callback($dc);
                }
            }
        }

        $objVersions = new Versions('tl_c4g_maps', $intId);
        $objVersions->initialize();
    }

    /**
     * Return the page pick wizard for the linkUrl
     * @param DC_TABLE $dc
     */
    public function pickUrl(DC_TABLE $dc)
    {
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'/page.php?do='.Input::get('do').'&amp;table='.$dc->table.'&amp;field='.$dc->field.'&amp;value='.str_replace(array('{{link_url::', '}}'), '', $dc->value).'" title="'.StringUtil::specialchars($GLOBALS['TL_LANG']['MSC']['pagepicker']).'" onclick="Backend.getScrollOffset();Backend.openModalSelector({\'width\':765,\'title\':\''.StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['MOD']['page'][0])).'\',\'url\':this.href,\'id\':\''.$dc->field.'\',\'tag\':\'ctrl_'.$dc->field . ((Input::get('act') == 'editAll') ? '_' . $dc->id : '').'\',\'self\':this});return false">' . Image::getHtml('pickpage.svg', $GLOBALS['TL_LANG']['MSC']['pagepicker'], 'style="vertical-align:top;cursor:pointer"') . '</a>';
    }

    //editLocationType
    /**
     * Return the edit location style wizard
     * @param DC_TABLE
     * @return string
     */
    public function editLocationStyle(DC_TABLE $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ($dc->value < 1) ? '' : ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_locstyles&amp;act=edit&amp;id=' . $dc->value . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . sprintf(StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1]), $dc->value) . '" style="padding-left:3px" onclick="Backend.openModalIframe({\'width\':768,\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", sprintf($GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][1], $dc->value))) . '\',\'url\':this.href});return false">' . Image::getHtml('alias.svg', $GLOBALS['TL_LANG']['tl_c4g_maps']['editalias'][0], 'style="vertical-align:top"') . '</a>';
    }

    /**
     * Return all navigation templates as array
     *
     * @return array
     */
    public function getPopupTemplates()
    {
        return $this->getTemplateGroup('popup_');
    }
    public function getAllBaseLayers(DC_TABLE $dc)
    {
        $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers ORDER BY name")
            ->execute();
        while ($baseLayers->next()) {
            $return[$baseLayers->id] = $baseLayers->name;
        }
        return $return;
    }

    public function baselayersLink(DC_TABLE $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_baselayers&amp;table=tl_c4g_map_baselayers&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editBaselayers']) . '" onclick="Backend.openModalIframe({\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_maps']['editBaselayers'])) . '\',\'url\':this.href});return false">' . Image::getHtml('edit.svg') . '</a>';
    }

    public function locstylesLink(DC_TABLE $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_locstyles&amp;table=tl_c4g_map_locstyles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editLocstyles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_maps']['editLocstyles'])) . '\',\'url\':this.href});return false">' . Image::getHtml('edit.svg') . '</a>';
    }

    public function profilesLink(DC_TABLE $dc)
    {
        $requestToken = System::getContainer()->get('contao.csrf.token_manager')->getDefaultTokenValue();
        return ' <a href="'.System::getContainer()->get('router')->generate('contao_backend') .'?do=c4g_map_profiles&amp;table=tl_c4g_map_profiles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . $requestToken . '" title="' . StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_maps']['editProfiles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_maps']['editProfiles'])) . '\',\'url\':this.href});return false">' . Image::getHtml('edit.svg') . '</a>';
    }


    /**
     * @param \Contao\DC_TABLE $dc
     */
    public function showInfoMessage(DC_TABLE $dc)
    {
        \Contao\Message::addInfo($GLOBALS['TL_LANG']['tl_c4g_maps']['infotext']);
    }

}