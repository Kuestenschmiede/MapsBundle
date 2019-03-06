<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
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
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'type' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'format' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'origType' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'locstyle' => array(
            'sql'                     => "int(10) default '0'",
            'default'                 => '0'
        ),
        'datatype' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'geotype' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'geox' => array
        (
            'sql'                     => "varchar(20) default ''",
            'default'                 => ''
        ),
        'geoy' => array
        (
            'sql'                     => "varchar(20) default ''",
            'default'                 => ''
        ),
        'projection' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'popup_content' => array
        (
            'sql'                     => "text default ''",
            'default'                 => ''
        ),
        'popup_routing_link' => array
        (
            'sql'                     => "int(10) default '0'",
            'default'                 => '0'
        ),
        'popup_async' => array
        (
            'sql'                     => "varchar(100) default ''",
            'default'                 => ''
        ),
        'tooltip' => array
        (
            'sql'                     => "text default ''",
            'default'                 => ''
        ),
        'tooltip_length' => array
        (
            'sql'                     => "int(10) default '0'",
            'default'                 => '0'
        ),
        'label' => array
        (
            'sql'                     => "text  default ''",
            'default'                 => ''
        ),
        'cluster_distance' => array
        (
            'sql'                     => "varchar(100)  default ''",
            'default'                 => ''
        ),
        'cluster_fillcolor' => array
        (
            'sql'                     => "varchar(6) default ''",
            'default'                 => ''
        ),
        'cluster_fontcolor' => array
        (
            'sql'                     => "varchar(6) default ''",
            'default'                 => ''
        ),
        'cluster_zoom' => array
        (
            'sql'                     => "int(10) default '0'",
            'default'                 => ''
        ),
        'cluster_popup' => array
        (
            'sql'                     => "char(1) default ''",
            'default'                 => false
        ),
        'loc_linkurl' => array
        (
            'sql'                     => "int(10) default '0'",
            'default'                 => '0'
        ),
        'hover_location' => array
        (
            'sql'                     => "int(10) default '0'",
            'default'                 => '0'
        ),
        'hover_style' => array
        (
            'sql'                     => "int(10) default '0'",
            'default'                 => '0'
        ),
    )
);

class tl_c4g_map_layer_content extends Backend
{

}