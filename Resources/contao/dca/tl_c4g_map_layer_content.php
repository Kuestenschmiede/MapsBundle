<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');

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

/**
 * Table tl_c4g_map_layer_content
 */
$GLOBALS['TL_DCA']['tl_c4g_map_layer_content'] = array
(

    // Config
    'config' => array
    (
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'sql'                         => array
        (
            'keys' => array
            (
                'id' => 'primary',
                'pid' => 'index'
            )
        )
    ),

    // List
    'list' => array
    (

    ),

    // Fields
    'fields' => array
    (
        'id' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ),
        'pid' => array
        (
            'sql'                     => "varchar(100) unsigned"
        ),
        'type' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'format' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'origType' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'locstyle' => array(
            'sql'                     => "int(10)"
        ),
        'datatype' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'geotype' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'geox' => array
        (
            'sql'                     => "varchar(20)"
        ),
        'geoy' => array
        (
            'sql'                     => "varchar(20)"
        ),
        'projection' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'popup_content' => array
        (
            'sql'                     => "text default ''"
        ),
        'popup_routing_link' => array
        (
            'sql'                     => "int(10)"
        ),
        'popup_async' => array
        (
            'sql'                     => "varchar(100)"
        ),
        'tooltip' => array
        (
            'sql'                     => "text"
        ),
        'tooltip_length' => array
        (
            'sql'                     => "int(10)"
        ),
        'label' => array
        (
            'sql'                     => "text "
        ),
        'cluster_distance' => array
        (
            'sql'                     => "varchar(100) "
        ),
        'cluster_fillcolor' => array
        (
           'sql'                     => "varchar(6)"
        ),
        'cluster_fontcolor' => array
        (
             'sql'                     => "varchar(6)"
        ),
        'cluster_zoom' => array
        (
            'sql'                     => "int(10)"
        ),
        'cluster_popup' => array
        (
            'sql'                     => "char(1)"
        ),
        'loc_linkurl' => array
        (
            'sql'                     => "int(10)"
        ),
        'hover_location' => array
        (
            'sql'                     => "int(10)"
        ),
        'hover_style' => array
        (
            'sql'                     => "int(10)"
        ),
    )
);

class tl_c4g_map_layer_content extends Backend
{

}