<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
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
$strName = 'tl_c4g_routing_configuration';
$callbackClass = \con4gis\RoutingBundle\Classes\Callbacks\TlC4gRoutingConfiguration::class;
/**
 * Table tl_c4g_routing_configuration
 */
$GLOBALS['TL_DCA'][$strName] = array
(
    
    // Config
    'config' => array
    (
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onsubmit_callback'             => array(
            array('\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeLocationstyleApiCache')
        )
    ),
    
    // List
    'list' => array
    (
        'sorting' => array
        (
            'mode'                    => 1,
            'fields'                  => array('name','router_api_selection'),
            'headerFields'            => ['name','router_api_selection'],
            'flag'                    => 1,
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
        ),
        'label' => array
        (
            'fields'                  => array('name','router_api_selection'),
            //'format'                  => '%s',
            'showColumns'             => true
        ),
        'global_operations' => array
        (
            'all' => [
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            ],
            'back' => [
                'href'                => 'key=back',
                'class'               => 'header_back',
                'button_callback'     => ['\con4gis\CoreBundle\Classes\Helper\DcaHelper', 'back'],
                'icon'                => 'back.svg',
                'label'               => &$GLOBALS['TL_LANG']['MSC']['backBT'],
            ],
        ),
        'operations' => array
        (
            'edit' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.svg'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
            )
        )
    ),
    
    // Palettes
    'palettes' => array
    (
        '__selector__'                => array('router_api_selection', 'areaSearch'),
        'default'                     => '{general_legend},name,router_api_selection,router_viaroute_url,router_from_locstyle,router_to_locstyle,router_point_locstyle;'
                                        .'{extended_legend:hide},routerHeadline,router_attribution,router_interim_locstyle,router_alternative,enableOverPoints,enableTargetSwitch,routeStartButton,closeAfterSearch,showInstructions,instructionLabel;'
                                        .'{search_legend:hide},areaSearch,showFeatures,featureLabel,initialMode,initialResultMode,initialPosition,initialDestination,routerLayers,hideFeaturesWithoutLabel,minDetourArea,maxDetourArea,initialDetourArea,minDetourRoute,maxDetourRoute,initialDetourRoute,clickLocstyle,areaCenterLocstyle,priorityFeatures,priorityLocstyle,usePermalink;'
    ),
    
    
    // Subpalettes
    'subpalettes' => array
    (
        'router_api_selection_1' => 'customProfiles',
        'router_api_selection_2' => 'router_api_key,router_profiles,router_profiles_initial',
        'router_api_selection_3' => 'router_api_key,router_profiles,router_profiles_initial',
        'router_api_selection_4' => 'router_api_key,router_profiles,router_profiles_initial,pirate',
        'router_api_selection_5' => 'router_profiles,router_profiles_initial',
        'areaSearch'             => 'areaHeadline,areaSearchOnly'
    ),
    
    // Fields
    'fields' => array
    (
        'name' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['name'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
    
        'tstamp' => [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ],

        'importId' => [
            'eval'                    => ['doNotCopy' => true]
        ],
        
        'router_viaroute_url' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_viaroute_url'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
    
        'router_attribution' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
        ],
        'router_api_selection' => [
            'label'                   => $GLOBALS['TL_LANG'][$strName]['router_api_selection'],
            'exclude'                 => true,
            'inputType'               => 'radio',
            'default'                 => '5',
            'options'                 => ['5','3','2','1','4'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_api_selection'],
            'eval'                    => ['tl_class'=>'clr long','submitOnChange' => true],
        ],
        'router_alternative'=> [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_alternative'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['tl_class'=>'clr','submitOnChange' => true],
        ],
        'router_api_key' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_api_key'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
        'router_from_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_from_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => 0,
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true, 'mandatory' => true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'router_to_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_to_locstyle'],
            'exclude'                 => true,
            'default'                 => 0,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true, 'mandatory' => true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'router_point_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_point_locstyle'],
            'exclude'                 => true,
            'default'                 => 0,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true, 'mandatory' => true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'router_interim_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_interim_locstyle'],
            'exclude'                 => true,
            'default'                 => 0,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'router_profiles' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_profiles'],
            'exclude'                 => true,
            'default'                 => 'a:0:{}',
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass, 'getRouterProfiles'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_profiles'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true,'chosen'=>true, 'tl_class' => 'clr m12'],
        ],
        'router_profiles_initial' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_profiles_initial'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'pirate' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['pirate'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
        ],
        'minDetourArea' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['minDetourArea'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0.5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        ],
        'maxDetourArea' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['maxDetourArea'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '20',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
        ],
        'initialDetourArea' => [
        
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialDetourArea'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '10',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
        ],
        'routerLayers' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['routerLayers'],
            'exclude'                 => true,
            'default'                 => 'a:0:{}',
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'     => [$callbackClass,'getRouterLayer']
            ],
            'xlabel' => [['tl_c4g_routing_configuration', 'mapsLink']]
        ],
        'customProfiles' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['customProfiles'],
            'default'                 => 'a:0:{}',
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'     => [$callbackClass,'getCustomProfileStructure']
            ]
        ],
        'hideFeaturesWithoutLabel' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['hideFeaturesWithoutLabel'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'minDetourRoute' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['minDetourRoute'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0.5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        ],
        'maxDetourRoute' => [
        
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['maxDetourRoute'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        ],
        'initialDetourRoute' => [
        
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialDetourRoute'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '2.5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        ],
        'clickLocstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['clickLocstyle'],
            'exclude'                 => true,
            'default'                 => 0,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'areaCenterLocstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['areaCenterLocstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => 0,
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'enableOverPoints' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['enableOverPoints'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'enableTargetSwitch' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['enableTargetSwitch'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'routerHeadline' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['routerHeadline'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => 'Router',
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        'priorityFeatures' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['priorityFeatures'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit'],
        ],
        'priorityLocstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['priorityLocstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => 0,
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
            'xlabel'                  => [['tl_c4g_routing_configuration', 'locstylesLink']]
        ],
        'closeAfterSearch' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['closeAfterSearch'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'routeStartButton' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['routeStartButton'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'initialPosition' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialPosition'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'initialDestination' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialDestination'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'showFeatures' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['showFeatures'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'areaSearch' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['areaSearch'],
            'exclude'                 => true,
            'default'                 => false,
            'eval'                    => ['submitOnChange' => true],
            'inputType'               => 'checkbox',
        ],
        'areaSearchOnly' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['areaSearchOnly'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'areaHeadline' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['areaHeadline'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => $GLOBALS['TL_LANG'][$strName]['areaHeadlineDefault'],
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        
        'featureLabel' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['featureLabel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => 'In der Nähe',
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        'showInstructions' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['showInstructions'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'instructionLabel' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['instructionLabel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => 'Routenhinweise',
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        'initialMode' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialMode'],
            'exclude'                 => true,
            'default'                 => "route",
            'inputType'               => "select",
            'options'                 => ['area', 'route'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_modes'],
        ],
        'initialResultMode' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialResultMode'],
            'exclude'                 => true,
            'default'                 => "route",
            'inputType'               => "select",
            'options'                 => ['feat', 'instr'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_result_modes'],
        ],
        'usePermalink' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['usePermalink'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ]
    )
);

/**
 * Class tl_c4g_routing_configuration
 */
class tl_c4g_routing_configuration extends Backend
{
    public function locstylesLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_map_locstyles&amp;table=tl_c4g_map_locstyles&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editLocstyles']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editLocstyles'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

    public function mapsLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_maps&amp;table=tl_c4g_maps&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['editMaps']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['editMaps'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}
