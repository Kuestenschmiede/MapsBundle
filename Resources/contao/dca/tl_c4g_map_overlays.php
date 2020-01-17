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

/**
 * Table tl_c4g_map_overlays
 */
$GLOBALS['TL_DCA']['tl_c4g_map_overlays'] =
[
    
    // Config
    'config' =>
    [
        'dataContainer'               => 'Table',
        'ptable'                      => 'tl_c4g_map_baselayers',
        'enableVersioning'            => true,
        'onsubmit_callback'             => [
            [\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator::class, 'purgeBaselayerApiCache']
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
    
    // List
    'list' =>
    [
        
        'sorting' =>
        [
            'mode'                    => 4,
            'fields'                  => ['name'],
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => ['name'],
            'child_record_callback'   => ['tl_c4g_map_overlays', 'listOverlays'],
            'child_record_class'      => 'no_padding',
            'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis.org_dark.svg',
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
            ]/*,
            'back' =>
                [
                    'href'                => 'key=back',
                    'class'               => 'header_back',
                    'button_callback'     => ['\con4gis\CoreBundle\Classes\Helper\DcaHelper', 'back'],
                    'icon'                => 'back.svg',
                    'label'               => &$GLOBALS['TL_LANG']['MSC']['backBT'],
                ],*/
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
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ],
    
            'toggle' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['toggle'],
                'icon'                => 'visible.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset(); return AjaxRequest.toggleVisibility(this, %s);"',
                'button_callback'     => ['tl_c4g_map_overlays', 'toggleIcon']
            ],
            
            'show' =>
            [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
            ]
        ]
    ],
    
    
    // Palettes
    'palettes' =>
    [
        '__selector__'                => ['provider'],
        'default'                     => 'name,provider,opacity,attribution,published',
//        'custom'                      => 'name,provider,url1,url2,url3,url4,opacity,attribution',
//        'wms'                         => 'name,provider,wms_url,wms_params_layers,wms_params_version,wms_params_format,wms_params_transparent,wms_params_srs,wms_gutter,opacity,attribution',
//        'owm'                         => 'name,provider,api_key,app_id,api_port,opacity,attribution',
    ],
    
    'subpalettes' => [
        'provider_custom' => 'url1,url2,url3,url4',
        'provider_wms' => 'wms_url,wms_params_layers,wms_params_version,wms_params_format,wms_params_transparent,wms_params_srs,wms_gutter',
        'provider_owm' => 'api_key,app_id,api_port',
        'provider_geoimage' => 'image_src,geoimage_json'
    ],
    
    // Fields
    'fields' =>
    [
        'id' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ],
        'uuid' =>
        [
            'sql'                     => "bigint(20) unsigned NOT NULL default '0'"
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
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['name'],
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
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider'],
            'filter'                  => true,
            'inputType'               => 'select',
            'default'                 => 'custom',
            'options'                 =>
            [
                'custom'    => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom'],
                'wms'       => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms'],
                'owm'       => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm'],
                'geoimage'  => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geoimage']
            ],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references'],
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ],
        
        'url1' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url1'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        
        'url2' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url2'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        
        'url3' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url3'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        
        'url4' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url4'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        
        'attribution' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'long clr', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        
        'wms_url' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_url'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'wms_params_layers' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_layers'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'wms_params_version' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_version'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'wms_params_format' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_format'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'wms_params_transparent' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_transparent'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => false, 'tl_class'=>'w50 m12'],
            'sql'                     => "char(1) NOT NULL default ''"
        ],
        'wms_params_srs' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_srs'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        'wms_gutter' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_gutter'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
            'sql'                     => "varchar(255) NOT NULL default ''"
        ],
        
        'api_key' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_key'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ],
        
        'app_id' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['app_id'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ],
        'opacity' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['opacity'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '100',
            'eval'                    => ['tl_class'=>'clr','rgxp'=>'prcnt'],
            'sql'                     => "int(20) NOT NULL default '100'"
        ],
        
        'api_port' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_port'],
            'filter'                  => false,
            'default'                 => '8099',
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>4, 'tl_class'=>'long', 'mandatory'=>'true'],
            'sql'                     => "varchar(4) NOT NULL default '8099'"
        ],
        'image_src' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['image_src'],
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
                'sql'                     => "binary(16) NULL"
            ],
        'geoimage_json' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['geoimage_json'],
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['style'=>'height:120px;', 'preserveTags'=>true],
                'sql'                     => "text NULL"
            ],
        'published' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['published'],
                'exclude'                 => true,
                'default'                 => true,
                'inputType'               => 'checkbox',
                'eval'                    => ['tl_class'=>'clr'],
                'sql'                     => "char(1) NOT NULL default '1'"
            ]
    ]
];

/**
 * Class tl_c4g_map_overlays
 */
class tl_c4g_map_overlays extends Backend
{
    
    /**
     *
     */
    public function __construct()
    {
        parent::__construct();
    }
    
    /**
     * List a Location Style
     * @param array
     * @return string
     */
    public function listOverlays($row)
    {
        return '<div style="float:left;">' . $row ['name'] . "</div>\n";
    }
    
    public function toggleIcon($row, $href, $label, $title, $icon, $attributes)
    {
        $this->import('BackendUser', 'User');
        
        if (strlen($this->Input->get('tid')))
        {
            $this->toggleVisibility($this->Input->get('tid'), ($this->Input->get('state') == 0));
            $this->redirect($this->getReferer());
        }
        
        // Check permissions AFTER checking the tid, so hacking attempts are logged
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_map_overlays::published', 'alexf'))
        {
            return '';
        }
        
        $href .= '&amp;id='.$this->Input->get('id').'&amp;tid='.$row['id'].'&amp;state='.$row[''];
        
        if (!$row['published'])
        {
            $icon = 'invisible.svg';
        }
        
        return '<a href="'.$this->addToUrl($href).'" title="'.specialchars($title).'"'.$attributes.'>'.$this->generateImage($icon, $label).'</a> ';
    }
    
    public function toggleVisibility($intId, $blnPublished)
    {
        // Check permissions to publish
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_map_overlays::published', 'alexf'))
        {
            $this->log('Not enough permissions to show/hide record ID "'.$intId.'"', 'tl_c4g_map_overlays toggleVisibility', TL_ERROR);
            $this->redirect('contao/main.php?act=error');
        }
        
        $this->createInitialVersion('tl_c4g_map_overlays', $intId);
        
        // Trigger the save_callback
        if (is_array($GLOBALS['TL_DCA']['tl_c4g_map_overlays']['fields']['published']['save_callback']))
        {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_map_overlays']['fields']['published']['save_callback'] as $callback)
            {
                $this->import($callback[0]);
                $blnPublished = $this->$callback[0]->$callback[1]($blnPublished, $this);
            }
        }
        
        // Update the database
        $this->Database->prepare("UPDATE tl_c4g_map_overlays SET tstamp=". time() .", published='" . ($blnPublished ? '' : '1') . "' WHERE id=?")
            ->execute($intId);
        $this->createNewVersion('tl_c4g_map_overlays', $intId);
        con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator::purgeBaselayerApiCache();
    }
    
}
