<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

use Contao\Database;
use Contao\System;
use con4gis\MapsBundle\Entity\EditorConfiguration;

class TlEditorConfiguration
{
    private $db = null;

    /**
     * TlC4gMapProfiles constructor.
     */
    public function __construct()
    {
        $this->db = Database::getInstance();
    }
    /**
     * Get a list of all available scenarios
     * @return array()
     */
    public function getTypes($multiColumnWizard)
    {
        $arrColumnCaption = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['caption'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['style' => 'min-width:175px;'],
        ];
        $arrColumnLocs = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['locstyle'],
            'inputType' => 'select',
            'eval' => ['chosen' => true, 'includeBlankOption' => true, 'style' => 'min-width:175px;width:100%;'],
        ];
        $arrLocs = $this->db->prepare('SELECT * FROM tl_c4g_map_locstyles')
            ->execute()->fetchAllAssoc();
        $arrOptions = [];
        foreach ($arrLocs as $arrLoc) {
            $arrOptions[$arrLoc['id']] = $arrLoc['name'];
        }
        $arrColumnLocs['options'] = $arrOptions;
        $arrColumnTypes = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['type'],
            'inputType' => 'select',
            'eval' => ['chosen' => true,'style' => 'min-width:175px;width:100%;'],
            'options' => [
                'point' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['references']['point'],
                'linestring' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['references']['linestring'],
                'polygon' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['references']['polygon'],
                'circle' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['references']['circle'],
            ],
        ];

        return [
            'type' => $arrColumnTypes,
            'caption' => $arrColumnCaption,
            'locstyle' => $arrColumnLocs,
        ];
    }
    public function getEditorProfiles()
    {
        $configRepo = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository((EditorConfiguration::class));
        $configs = $configRepo->findAll();
        uasort($configs, function ($a, $b) {
            return strcmp($a->getName(), $b->getName());
        });
        $return = [];
        foreach ($configs as $config) {
            $return[$config->getId()] = $config->getName();
        }

        return $return;
    }
    public function getEditorVars($multiColumnWizard)
    {
        $arrColumnCaption = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['caption'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $arrColumnKey = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_editor_configuration']['types']['key'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $return = [
            'caption' => $arrColumnCaption,
            'key' => $arrColumnKey,
        ];

        return $return;
    }
}
