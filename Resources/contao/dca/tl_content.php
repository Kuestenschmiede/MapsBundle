<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
use Contao\CoreBundle\DataContainer\PaletteManipulator;


/***
 * Palettes
 */
$GLOBALS['TL_DCA']['tl_content']['palettes']['c4g_maps']        =   '{type_legend},type,headline;'.
                                                                    '{c4g_map_legend},c4g_map_id,c4g_map_default_mapservice,c4g_map_width,c4g_map_height,c4g_map_zoom;'.
                                                                    '{protected_legend:hide},protected;'.
                                                                    '{expert_legend:hide},guests,cssID,space';

/***
 * Fields
 */
$GLOBALS['TL_DCA']['tl_content']['fields']['c4g_map_id'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_content']['c4g_map_id'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => ['tl_content_c4g_maps', 'get_maps'],
    'eval'                    => ['submitOnChange'=>true],
    'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];
$GLOBALS['TL_DCA']['tl_content']['fields']['c4g_map_width'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_content']['c4g_map_width'],
    'exclude'                 => true,
    'inputType'               => 'inputUnit',
    'options'                 => ['px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'],
    'eval'                    => [
                                    'rgxp'=>'digit_auto_inherit',
                                    'tl_class'=>'w50',
                                    'includeBlankOption'=>true
    ],
    'sql'                     => "varchar(64) NOT NULL default ''"
    ];
$GLOBALS['TL_DCA']['tl_content']['fields']['c4g_map_height'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_content']['c4g_map_height'],
    'exclude'                 => true,
    'inputType'               => 'inputUnit',
    'options'                 => ['px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'],
    'eval'                    => [
                                    'rgxp'=>'digit_auto_inherit',
                                    'tl_class'=>'w50',
                                    'includeBlankOption'=>true
    ],
    'sql'                     => "varchar(64) NOT NULL default ''"
    ];
$GLOBALS['TL_DCA']['tl_content']['fields']['c4g_map_zoom'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_content']['c4g_map_zoom'],
    'exclude'                 => true,
    'inputType'               => 'text',
    'eval'                    => ['mandatory'=>false, 'rgxp'=>'digit', 'tl_class'=>'clr'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];
$GLOBALS['TL_DCA']['tl_content']['fields']['c4g_map_default_mapservice'] =
    [
    'label'                   => &$GLOBALS['TL_LANG']['tl_content']['c4g_map_default_mapservice'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => ['tl_content_c4g_maps', 'get_baselayers'],
    'eval'                    => [
                                    'mandatory'=>false,
                                    'chosen'=>true,
                                    'includeBlankOption'=>true],
    'sql'                     => "int(10) unsigned NOT NULL default '0'"

    ];
if (@class_exists("tl_content")) {

    /**
     * Change palettes
     */


        // Palettes
        try {
           PaletteManipulator::create()
                ->addLegend('c4g_maps_legend', 'expert_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_BEFORE)
                ->addField(array('c4g_loc_geox', 'c4g_loc_geoy', 'c4g_loc_tooltip', 'c4g_loc_label', 'c4g_locstyle'), 'c4g_maps_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_APPEND)
                ->applyToPalette('text', 'tl_content')
                ->applyToPalette('html', 'tl_content')
                ->applyToPalette('module', 'tl_content')
                ->applyToPalette('youtube', 'tl_content');
            error_log('try');
        } catch (\Exception $e) {
            error_log('catch');
            //error >= Contao 4.4.14
            //do nothing
        }
        $GLOBALS['TL_DCA']['tl_content']['fields']['c4g_loc_geox'] =
            [
            'label' => &$GLOBALS['TL_LANG']['tl_content']['c4g_loc_geox'],
            'exclude' => true,
            'inputType' => 'c4g_text',
            'eval' => ['mandatory' => false, 'maxlength' => 20, 'tl_class' => 'w50 wizard'],
            'save_callback' => [['tl_content_c4g_maps', 'setLocLon']],
            'wizard' => [['\con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink']],
            'sql' => "varchar(20) NOT NULL default ''"
            ];

        $GLOBALS['TL_DCA']['tl_content']['fields']['c4g_loc_geoy'] =
            [
            'label' => &$GLOBALS['TL_LANG']['tl_content']['c4g_loc_geoy'],
            'exclude' => true,
            'inputType' => 'c4g_text',
            'eval' => ['mandatory' => false, 'maxlength' => 20, 'tl_class' => 'w50 wizard'],
            'save_callback' => [['tl_content_c4g_maps', 'setLocLat']],
            'wizard' => [['\con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink']],
            'sql' => "varchar(20) NOT NULL default ''"
            ];

        $GLOBALS['TL_DCA']['tl_content']['fields']['c4g_loc_tooltip'] =
            [
            'label' => &$GLOBALS['TL_LANG']['tl_content']['c4g_loc_tooltip'],
            'exclude' => true,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'clr'],
            'sql' => "varchar(254) NOT NULL default ''"
            ];

        $GLOBALS['TL_DCA']['tl_content']['fields']['c4g_loc_label'] =
            [
            'label' => &$GLOBALS['TL_LANG']['tl_content']['c4g_loc_label'],
            'exclude' => true,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'clr'],
            'sql' => "varchar(100) NOT NULL default ''"
            ];

        $GLOBALS['TL_DCA']['tl_content']['fields']['c4g_locstyle'] =
            [
            'label' => &$GLOBALS['TL_LANG']['tl_content']['c4g_locstyle'],
            'exclude' => true,
            'inputType' => 'select',
            'options_callback' => ['tl_content_c4g_maps', 'getLocStyles'],
            'sql' => "int(10) unsigned NOT NULL default '0'"
            ];
    }
    

/**
 * Class tl_content_c4g_maps
 */
class tl_content_c4g_maps extends Backend
{

    protected $firstMapId = null;

    /**
     * Return all base layers for current Map Profile as array
     * @param object
     * @return array
     */
    public function get_baselayers(DataContainer $dc)
    {
        $id = 0;
        if ($dc->activeRecord->c4g_map_id != 0) {
            $id = $dc->activeRecord->c4g_map_id;
        } else {
            // take firstMapId, because it will be chosen as DEFAULT value for c4g_map_id
            $id = $this->firstMapId;
        }

        $profile = $this->Database->prepare(
                "SELECT b.baselayers ".
                "FROM tl_c4g_maps a, tl_c4g_map_profiles b ".
                "WHERE a.id = ? and a.profile = b.id")
                ->execute($id);

        $ids = deserialize($profile->baselayers,true);
        if (count($ids)>0) {
            $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers WHERE id IN (".implode(',',$ids).") ORDER BY name")->execute();
        } else {
            $baseLayers = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_baselayers ORDER BY name")->execute();
        }


        if ($baseLayers->numRows > 0) {
            while ( $baseLayers->next () ) {
                $return [$baseLayers->id] = $baseLayers->name;
            }
        }
        return $return;
    }

    /**
     * Return all defined maps
     * @param object
     * @return array
     */
    public function get_maps(DataContainer $dc)
    {
        $maps = $this->Database->prepare ( "SELECT * FROM tl_c4g_maps WHERE is_map=1 AND published=1" )->execute ();
        if ($maps->numRows > 0) {
            while ( $maps->next () ) {
                if (!isset($this->firstMapId)) {
                    // save first map id
                    $this->firstMapId = $maps->id;
                }
                $return [$maps->id] = $maps->name;
            }
        }
        return $return;
    }
    public function getLocStyles(\DataContainer $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
            ->execute();
        $return[''] = '-';
        while ($locStyles->next())
        {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }

    /**
     * Validate Longitude
     */
    public function setLocLon($varValue, \DataContainer $dc)
    {
        if ($varValue != 0)
        {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue))
            {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate Latitude
     */
    public function setLocLat($varValue, \DataContainer $dc)
    {
        if ($varValue != 0)
        {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLat($varValue))
            {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }
}
