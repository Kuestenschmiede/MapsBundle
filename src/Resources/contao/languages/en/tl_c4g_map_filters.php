<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


$strName = "tl_c4g_map_filters";

/**
 * Fields
 */
$GLOBALS['TL_LANG'][$strName]['name'] = ["Name"];
$GLOBALS['TL_LANG'][$strName]['filters'] = ["Filters"];
$GLOBALS['TL_LANG'][$strName]['translation'] = ["Translation"];
$GLOBALS['TL_LANG'][$strName]['identifier'] = ["Identifier"];
$GLOBALS['TL_LANG'][$strName]['value'] = ["Value"];


/**
 * Legends
 */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = "Filter settings";

/**
 * Operations
 */
$GLOBALS['TL_LANG'][$strName]['new']        = array('New filter', 'Create a new filter');
$GLOBALS['TL_LANG'][$strName]['edit']       = array('Edit filter', 'Edit filter ID %s');
$GLOBALS['TL_LANG'][$strName]['copy']       = array('Copy filter', 'Copy filter ID %s');
$GLOBALS['TL_LANG'][$strName]['delete']     = array('Delete filter', 'Delete filter ID %s');
$GLOBALS['TL_LANG'][$strName]['show']       = array('Show filter', 'Show details of filter ID %s');

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_filters']['infotext'] = 'With the map filters you can offer additional filters outside the map with the help of the filter component (see expert settings in the map profile) - i.e. filter data that have a certain key/value pair. '.
    'This can be done for example with queries from OpenStreetMap or map structural elements in GeoJson format. Furthermore the con4gis module Data uses this function. '.
    'More on <a href="https://docs.con4gis.org/mapfilter-con4gis-maps" title="con4gis Docs map filter" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';