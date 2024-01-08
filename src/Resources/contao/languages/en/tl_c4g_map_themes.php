<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['new']     = array('New layout', 'Create a new layout');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['edit']    = array('Edit layout', 'Edit layout ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['copy']    = array('Copy layout', 'Copy layout ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['delete']  = array('Delete layout', 'Delete layout ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['show']    = array('Show layout', 'Show layout ID %s');

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['name']        = array('Name', 'Please choose a name for the layout.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['useglobal']   = array('Set global', 'Some css vars, like colors, will provided outside the map.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['controlLabels']   = array('Improved Labels for Controls', 'Improved labels for controls.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonradius']  = array('Button radius', 'Button radius in percent.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonsize'] = array('Button size', 'Specify the size of the buttons (controls on the left) in pixel here. Default is 36 px.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['button_fontsize'] = array('Size of the button font (icon)', 'Specify the size of the button font here. This changes the size of the icon. Default is 18 px.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons']   = array('Icons', 'Choose a style for the icons.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_icons'] = array('Custom icons', 'Check this options, if you want to use your own CSS.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_icons']  = array('Custom icons', 'Upload your own CSS-File.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['maincolor']  = array('Main color', 'Overwrites the CSS settings.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontcolor']  = array('Font color', 'Overwrites the CSS settings.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaincolor']  = array('Popup background color', 'Overwrites the CSS settings.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupFontcolor']  = array('Popup font color', 'Overwrites the CSS settings.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['popupMaxWidth'] = array('Maximum sideboard width (also popup)', 'Applies to all sideboards (so also the default popup). Default: 42%');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowcolor']  = array('Secondary color', 'Overwrites the CSS settings. For example, for hover effects, frames, or form elements.');

// Palettes
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['theme_legend']   = 'Layout settings';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttons_legend'] = 'Buttons';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['colors_legend']  = 'Colors';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['effects_legend'] = 'Effects';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons_legend']   = 'Icons';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['expert_legend']  = 'Expert settings';

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['infotext'] = 'The map layout gives you the possibility to easily override the colors of the map and shapes of the controls. '.
    'Mehr auf <a href="https://docs.con4gis.org/maplayout-con4gis-maps" title="con4gis Docs map layout" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';