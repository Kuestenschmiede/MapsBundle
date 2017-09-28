<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');

use \con4gis\MapsBundle\Resources\contao\classes\GeoPicker;

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

if (@class_exists("tl_calendar_events")) {

    /**
     * Change palettes
     */
    $disabledObjects = deserialize($GLOBALS['TL_CONFIG']['disabledC4gMapObjects'], true);

    if (!in_array('tl_calendar_events', $disabledObjects)) {

        //Neu
        foreach( $GLOBALS['TL_DCA']['tl_calendar_events']['palettes'] as $name => $palette )
        {
            if ($name == '__selector__')
                continue;

            $GLOBALS['TL_DCA']['tl_calendar_events']['palettes'][$name] = str_replace(
                array(
                    ';{expert_legend'
                ),
                array(
                    ';{c4g_maps_legend},c4g_loc_geox,c4g_loc_geoy,c4g_loc_label,c4g_locstyle;{expert_legend'
                    ),
                $palette
                );
        }

        //Alt
        //foreach ($GLOBALS['TL_DCA']['tl_calendar_events']['palettes'] as $key=>$palette) {
            //if ($key != '__selector__') {
                //$palette = str_replace(';{expert_legend', ';{c4g_maps_legend},c4g_loc_geox,c4g_loc_geoy,c4g_loc_label,c4g_locstyle;{expert_legend', $palette);
            //}
        //}

        $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_loc_geox'] = array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_calendar_events']['c4g_loc_geox'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('mandatory'=>false, 'maxlength'=>20, 'tl_class'=>'w50 wizard' ),
            'save_callback'           => array(array('tl_calendar_events_c4g_maps','setLocLon')),
            'wizard'                  => array(array('\con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        );

        $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_loc_geoy'] = array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_calendar_events']['c4g_loc_geoy'],
            'exclude'                 => true,
            'inputType'               => 'c4g_text',
            'eval'                    => array('mandatory'=>false, 'maxlength'=>20, 'tl_class'=>'w50 wizard' ),
            'save_callback'           => array(array('tl_calendar_events_c4g_maps','setLocLat')),
            'wizard'                  => array(array('\con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink')),
            'sql'                     => "varchar(20) NOT NULL default ''"
        );

        $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_loc_label'] = array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_calendar_events']['c4g_loc_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('tl_class'=>'clr' ),
            'sql'                     => "varchar(100) NOT NULL default ''"
        );

        $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['c4g_locstyle'] = array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_calendar_events']['c4g_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_calendar_events_c4g_maps','getLocStyles'),
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        );
    }
}

/**
 * Class tl_calendar_events_c4g_maps
 */
class tl_calendar_events_c4g_maps extends \Backend
{
    /**
     * Return all Location Styles as array
     * @param object
     * @return array
     */
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
            if (!Utils::validateLon($varValue))
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
            if (!Utils::validateLat($varValue))
            {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }

}

?>