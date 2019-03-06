<?php
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
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['name']           			= ['Name', 'Please enter the name of the data connection.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableSource']    			= ['Source table', 'Please enter the source table, which includes the data you want to display.'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptable']    			    = ['Parent tables', 'Please enter the parent tables to limit the data from the source table'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableOptions']    		= ['Fields of the parent tables in backend', 'Fields of the parent tables to display in backend'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableBlob']    			= ['Blob', 'Read the sourcecode.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableField']    			= ['Link to parent tables', 'Please choose the field from the source table which links to the parent tables (e.g. pid).'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableCompareField']      = ['Link to source table', 'Please choose the fields from the parent tables which links to the source table (e.g. ID).'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geox']                    = ['X-coordinate', 'Please choose the field, which represents the X-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoy']                    = ['Y-coordinate', 'Please choose the field, which represents the Y-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geolocation']             = ['Geolocation', 'Please choose the field, which represents the X- and Y-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['label']                   = ['Label', 'Please choose the field, which contains the label'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['locstyle']                = ['Lokationsstil', 'Please choose the field, which represents the Y-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popup']                   = ['Popup', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tooltip']                 = ['Tooltip', 'Please choose the field, which contains the tooltip'];



/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['new']        = ['New data connection', 'Create a new data connection'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['edit']       = ['Edit data connection', 'Edit data connection with ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['delete']     = ['Delete data connection', 'Delete data connection with ID %s'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['defaultLegend']		= 'General data';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['parentLegend']		= 'Parent tables (optional)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoLegend']		    = 'Location (set either the x- and y-coordinate or the geolocation)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableInformation']	= 'Assign table columns (optional)';
