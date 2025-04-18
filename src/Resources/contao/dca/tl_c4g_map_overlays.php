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
use Contao\DC_Table;
use con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapOverlays;
use con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator;

$cbClass = TlC4gMapOverlays::class;
$GLOBALS['TL_DCA']['tl_c4g_map_overlays'] =
[
    'config' =>
    [
        'dataContainer'               => DC_Table::class,
        'ptable'                      => 'tl_c4g_map_baselayers',
        'enableVersioning'            => true,
        'onsubmit_callback'             => [
            [C4GMapsAutomator::class, 'purgeBaselayerApiCache']
        ],
        'sql'                         =>
            [
                'keys' =>
                    [
                        'id' => 'primary',
                        'pid' => 'index'
                    ]
            ]
    ],
    'list' =>
    [
        
        'sorting' =>
        [
            'mode'                    => 4,
            'fields'                  => ['name'],
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => ['name'],
            'child_record_callback'   => [$cbClass, 'listOverlays'],
            'child_record_class'      => 'no_padding',
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
            'markAsCopy'              => 'name',
        ],
        
        'label' =>
        [
            'fields'                  => ['name'],
            'format'                  => '%s'
        ],
        
        'global_operations' =>
        [
            'all' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            ]
        ],
        
        'operations' =>
        [
            'edit' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
            ],
            
            'copy' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.svg'
            ],
            
            'delete' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . ($GLOBALS['TL_LANG']['MSC']['deleteConfirm'] ?? null) . '\')) return false; Backend.getScrollOffset();"'
            ],
    
            'toggle' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['toggle'],
                'icon'                => 'visible.svg',
                'button_callback'     => [$cbClass, 'toggleIcon']
            ],
            
            'show' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
            ]
        ]
    ],
    'palettes' =>
    [
        '__selector__'                => ['provider'],
        'default'                     => 'name,provider,opacity,attribution,infopage,published',
    ],
    
    'subpalettes' => [
        'provider_custom' => 'url1,url2,url3,url4',
        'provider_wms' => 'wms_url,wms_params_layers,wms_params_version,wms_params_format,wms_params_transparent,wms_params_srs,wms_gutter',
        'provider_owm' => 'api_key,app_id,api_port',
        'provider_sea' => '',
        'provider_geoimage' => 'image_src,geoimage_json',
        'provider_geotiff' => 'image_src'
    ],
    'fields' =>
    [
        'id' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ],
        'importId' =>
        [
            'sql'                     => "bigint(20) unsigned NOT NULL default '0'",
            'eval'                    => ['doNotCopy' => true]
        ],
        'pid' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ],
        'tstamp' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ],
        'name' =>
        [
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>true, 'maxlength'=>50],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ],
        'provider' =>
        [
            'exclude'                 => true,
            'filter'                  => true,
            'inputType'               => 'radio',
            'default'                 => 'custom',
            'options'                 =>
            [
                'custom'    => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom'],
                'wms'       => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms'],
                'owm'       => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm'],
                'sea'       => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_sea'],
                'geoimage'  => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geoimage'],
                'geotiff'   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geotiff']
            ],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references'],
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ],
        'url1' =>
        [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'url2' =>
        [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'url3' =>
        [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'url4' =>
        [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'wms_url' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_layers' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_version' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_format' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_transparent' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => false, 'tl_class'=>'w50 m12'],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'wms_params_srs' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_gutter' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'image_src' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png,tif,tiff', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
                'sql'                     => "binary(16) NULL"
            ],
        'geoimage_json' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['style'=>'height:120px;', 'preserveTags'=>true],
                'sql'                     => "text NULL"
            ],
        'api_key' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'app_id' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'api_port' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'default'                 => '8099',
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>4, 'tl_class'=>'long', 'mandatory'=>'true'],
                'sql'                     => "varchar(4) NOT NULL default '8099'"
            ],
        'opacity' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => '100',
                'eval'                    => ['tl_class'=>'clr','rgxp'=>'prcnt'],
                'sql'                     => "int(20) NOT NULL default '100'"
            ],
        'attribution' =>
        [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'long clr', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'infopage' =>
            [
                'exclude'               => true,
                'search'				=> false,
                'inputType'				=> 'textarea',
                'eval'                  => ['mandatory'=>false, 'rte'=>'tinyMCE', 'helpwizard'=>true],
                'explanation'           => 'insertTags',
                'sql'                   => "text NULL"
            ],
        'published' =>
            [
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class'=>'clr'],
                'sql'                     => "char(1) NOT NULL default '1'"
            ]
    ]
];
