<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */


/**
 * Register the namespaces
 */
ClassLoader::addNamespaces(array
(
	'\con4gis\MapsBundle',
));


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
//	// Classes
//	'con4gis\MapsBundle\Resources\contao\classes\GeoEditor'                   => '/con4gis/MapsBundle/Resources/contao/classes/GeoEditor.php',
//	'con4gis\MapsBundle\Resources\contao\classes\GeoPicker'                   => '/con4gis/MapsBundle/Resources/contao/classes/GeoPicker.php',
//	'con4gis\MapsBundle\Resources\contao\classes\ImageSize'                   => '/con4gis/MapsBundle/Resources/contao/classes/ImageSize.php',
//	'con4gis\MapsBundle\Resources\contao\classes\MapDataConfigurator'         => '/con4gis/MapsBundle/Resources/contao/classes/MapDataConfigurator.php',
//	'con4gis\MapsBundle\Resources\contao\classes\ResourceLoader'              => '/con4gis/MapsBundle/Resources/contao/classes/ResourceLoader.php',
//	'con4gis\MapsBundle\Resources\contao\classes\TextField'                   => '/con4gis/MapsBundle/Resources/contao/classes/TextField.php',
//    'con4gis\MapsBundle\Resources\contao\classes\Utils'                       => '/con4gis/MapsBundle/Resources/contao/classes/Utils.php',
//	'con4gis\MapsBundle\Resources\contao\classes\tl_calendar_events_c4g_maps' => '/con4gis/MapsBundle/Resources/contao/dca/tl_calendar_events.php',
//    'con4gis\MapsBundle\Resources\contao\classes\tl_member_c4g_maps'          => '/con4gis/MapsBundle/Resources/contao/dca/tl_member.php',
//
//	// Models
//	'con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel' => '/con4gis/MapsBundle/Resources/contao/models/C4gMapBaselayersModel.php',
//	'con4gis\MapsBundle\Resources\contao\models\C4gMapLocstylesModel'  => '/con4gis/MapsBundle/Resources/contao/models/C4gMapLocstylesModel.php',
//	'con4gis\MapsBundle\Resources\contao\models\C4gMapOverlaysModel'   => '/con4gis/MapsBundle/Resources/contao/models/C4gMapOverlaysModel.php',
//	'con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel'   => '/con4gis/MapsBundle/Resources/contao/models/C4gMapProfilesModel.php',
//	'con4gis\MapsBundle\Resources\contao\models\C4gMapsModel'          => '/con4gis/MapsBundle/Resources/contao/models/C4gMapsModel.php',
//	'con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel'	   => '/con4gis/MapsBundle/Resources/contao/models/C4gMapThemesModel.php',
//
//	// Modules
//	'con4gis\MapsBundle\Resources\contao\modules\BaseLayerApi'          => '/con4gis/MapsBundle/Resources/contao/modules/api/BaseLayerApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\EditorApi'             => '/con4gis/MapsBundle/Resources/contao/modules/api/EditorApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\InfoWindowApi'         => '/con4gis/MapsBundle/Resources/contao/modules/api/InfoWindowApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\LayerApi'              => '/con4gis/MapsBundle/Resources/contao/modules/api/LayerApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\LayerContentApi'       => '/con4gis/MapsBundle/Resources/contao/modules/api/LayerContentApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\LocationStyleApi'      => '/con4gis/MapsBundle/Resources/contao/modules/api/LocationStyleApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\NominatimApi'          => '/con4gis/MapsBundle/Resources/contao/modules/api/NominatimApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\ReverseNominatimApi'   => '/con4gis/MapsBundle/Resources/contao/modules/api/ReverseNominatimApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\RoutingApi'            => '/con4gis/MapsBundle/Resources/contao/modules/api/RoutingApi.php',
//	'con4gis\MapsBundle\Resources\contao\modules\ContentC4gMaps'        => '/con4gis/MapsBundle/Resources/contao/modules/ContentC4gMaps.php',
//	'con4gis\MapsBundle\Resources\contao\modules\ModuleC4gMaps'         => '/con4gis/MapsBundle/Resources/contao/modules/ModuleC4gMaps.php',
));


/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
	'c4g_geoeditor' => '/con4gis/MapsBundle/Resources/contao/templates/backend',
	'c4g_geopicker' => '/con4gis/MapsBundle/Resources/contao/templates/backend',
	'c4g_maps'      => '/con4gis/MapsBundle/Resources/contao/templates',
	'popup_default' => '/con4gis/MapsBundle/Resources/contao/templates/popup',
));
