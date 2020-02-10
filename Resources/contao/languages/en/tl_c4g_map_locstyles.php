<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['name']             = array('Name', 'Please enter a name for the location style.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['styletype']        = array('Style type','Select the style type to be used.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokecolor']      = array('Stroke color','Please define a stroke color.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokewidth']      = array('Stroke width','Choose the width of the stroke.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillcolor']        = array('Fill color','Choose the fill color.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['radius']           = array('Radius','Enter the radius in pixel.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon']          = array('OpenLayers Icon','Select from the internal OpenLayers icons.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon_size']     = array('Icon size','Size of the icon. Is scaled when needed.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon_offset']   = array('Offset for icon in pixel (X/Y)','An offset of "0" means, the upper left corner is printed on the location. X>0 => shifts icon to the right. X<0 => to the left. Y>0 => to the bottom. Y<0 => to the top.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSrc']           = array('SVG source','Select the svg to be displayed for the location from the list. Please note that for Firefox the height and width of the icon must be set within the SVG file ("height" and "width" attributes).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svg_add_attributes']           = array('Add SVG attributes','When set, the SVG image will be edited on submit so that it\'s compatible with Firefox.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['givenSvgWidth']    = array('Known svg size','Choose, if the size of the svg is specified with "width" and "height" or not.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_src']         = array('Icon source','Select the icon to be displayed for the location from the list.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSize']          = array('SVG size','Choose the size of the SVG in pixels.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_size']        = array('Icon size','Size of the icon. Is scaled when needed.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_scale']       = array('Scale icon','1.0 = 100%');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_zoom']         = array('Rescale icon on zoom', 'Set this checkbox if the icon should also be rescaled when zooming.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_src_zoom']     = array('Initial zoom level','Specify the zoom level for which the icon should have the specified dimensions and scaling.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_scale_factor'] = array('Scaling factor','Enter a value (0-1) by which the icon should be scaled per zoom level.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_min_scale']    = array('minimum scaling','Specify a scaling factor that should not be undercut.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_max_scale']    = array('Maximum scaling','Specify a scaling factor that should not be exceeded.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_offset']      = array('Offset for icon in pixel (X/Y)','An offset of "0" means, the upper left corner is printed on the location. X>0 => shifts icon to the right. X<0 => to the left. Y>0 => to the bottom. Y<0 => to the top.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_opacity']     = array('Icon opacity','Enter the opacity of the icon in %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['iconcolor']        = array('Icon color','Do you want to change the icon color?');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['photoKind']        = array('Kind of photo','Please choose the photo-style for your location.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onhover_locstyle'] = array('Location style for mouse hover','Select the location style to be used when the mouse rests over a location.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['style_function_js']   = array('Code for StyleFunction','Enter code for your custom OpenLayers StyleFunction (Enter only the function\'s body. Your function should change the feature\'s style or return an instance of ol.style)');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows']      = array('Activate line direction arrows','Arrows for lines');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_back'] = array('Show back arrows','To display arrows in both directions.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_radius']= array('Radius of arrowheads (pixel)','Arrowheads are displayed as triangle symbols (">"). Enter the radius in pixel.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_minzoom'] = array('Min. zoomlevel','Shows arrowheads only when the zoomlevel is at least the entered value. If this value is below zero, the arrowheads will only be visible, when they are not greater than their arrowline. (0=show always, -1=auto)');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label'] 		 	 = array('Label', 'Label to be displayed on map together with the location marker. Overrides label defined at map structure items.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_hor']  = array('Horizontal alignment ','Define the horizontal alignment of the label relative to the location.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_ver']  = array('Vertical alignment ','Define the vertical alignment of the label relative to the location.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_offset']     = array('Offset for label in pixel (X/Y)','Please enter the offset of the label in pixel.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_family']      = array('Font family','The font family for the label, to be provided like in CSS.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_color']       = array('Font color','The font color for the label.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_size']        = array('Font size','The font size for the label, to be provided like in CSS.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_color'] = array('Label outline color','Enter a color for the outline of the label, if desired.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_box']   = array('Sort of label outline','While the label outline usualy follows the font, with checking the box the outline is transformed to a box.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_width'] = array('Label outline width','Enter a width for the outline of the label, if desired.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_style']       = array('Font style','The font style for the label, to be provided like in CSS.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_weight']      = array('Font weight','The font weight for the label, to be provided like in CSS.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['tooltip'] 		 = array('Tooltip for icons', 'Tooltip to be displayed when mouse pointer rests on the location for a while. Overrides tooltip defined at map structure items.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_info'] 		 = array('Popup information', 'Information to be displayed in a popup after clicking with the mouse on a location or via mouse hover (depending on the map profile settings). Overrides popup defined at map structure items.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_kind']       = array('Popup kind','Please choose which popup kind is to be used.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_size']       = array('Popup size','Please enter the size of a popup.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_offset']     = array('Offset for popup in pixel (X/Y)','An offset of "0" means, the upper left corner is printed on the location. X>0 => shifts popup to the right. X<0 => to the left. Y>0 => to the bottom. Y<0 => to the top.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onclick_zoomto'] 	 = array('On mouse click zoom to zoom level', 'Enter a zoom level, to which is zoomed when an item has been clicked. Works only when there is no direct link. Overrides setting defined at map structure items.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['minzoom'] 		 = array('Min. zoom level', 'Enter the minimum zoom level, on which the items are shown. 0 means no restriction.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['maxzoom'] 		 = array('Max. zoom level', 'Enter the maximum zoom level, on which the items are shown. 0 means no restriction.');

//xlabel buttons
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editLocstyles'] = ['Edit locstyles'];

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['point']       = 'Point';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['square']      = 'Square';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['star']        = 'Star';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['x']           = 'X';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cross']       = 'Cross';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['triangle']    = 'Triangle';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['ol_icon']     = 'OpenLayers internal icon';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cust_icon']   = 'Custom icon - Pixel';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cust_icon_svg']   = 'Custom Icon - Vector';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['style_function'] = 'Style function';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['photo']       = 'Photo';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker.png']        = 'Red marker';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-blue.png']   = 'Blue marker';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-gold.png']   = 'Golden marker';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-green.png']  = 'Green marker';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['left']              = 'Location to the left of label';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['center']            = 'Center';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['right']             = 'Location to the right of label';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['top']               = 'Location above label';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['middle']            = 'Middle';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['bottom']            = 'Location below label';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['bubble']            = 'Bubble';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cloud']             = 'Cloud';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['vector']            = 'Vector';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['pixel']             = 'Raster';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['default']           = 'Default';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['square']            = 'Square';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['round']             = 'Round';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['anchored']          = 'Anchored';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['folio']             = 'Portfolio';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['true']              = 'Known Size';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['none']              = 'Unknown Size';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['new']        = array('New location style', 'Create a new location style');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['edit']       = array('Edit location style', 'Edit location style ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['copy']       = array('Duplicate location style', 'Duplicate location style ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['delete']     = array('Delete location style', 'Delete location style ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['show']       = array('Details', 'Show details of location style ID %s');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['arrow_legend'] 	= 'Line direction arrows';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_legend'] 	= 'Label settings';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_legend'] 	= 'Popup settings';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['zoom_legend']  	= 'Zoom settings';


/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Editor label';

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['infotext'] = 'Location styles describe the way a map element is displayed. For example, a location can be displayed as a photo, icon or symbol. '.
    'Colors for lines and areas are also defined here as well as the exact position of the images and labels (position offset). '.
    'More on <a href="https://docs.con4gis.org/lokationsstile-in-con4gis-maps" title="con4gis Docs location styles" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';
