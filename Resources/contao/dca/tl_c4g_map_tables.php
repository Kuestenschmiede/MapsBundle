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
 * Table tl_c4g_map_tables
 */
$GLOBALS['TL_DCA']['tl_c4g_map_tables'] =
[

    // Config
    'config' =>
    [
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'sql'                         =>
        [
            'keys' =>
            [
                'id' => 'primary'
            ]
        ],
        'onload_callback' => [['con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapSettings','addDefaultTables']]
    ],
    'list' =>
        [

        'sorting' =>
            [
            'mode'                    => 2,
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => ['id','name'],
            'icon'                    => 'bundels/con4gisMapsBundle/images/core.png'
            ],
        'label' =>
            [
            'fields'                  => ['name','tableSource'],
            'format'                  => '<span style="color:#303E4D"><b>%s</b></span> -> %s',
            'label_callback'          => ['tl_c4g_map_tables', 'getLabel'],
            'showColumns'             => true
            ],
        'global_operations' =>
            [
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
            ],
        'operations' =>
            [
            'edit' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.svg'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
                ]
            ]
        ],
    'palettes' =>
    [
        '__selector__' => ['popupSwitch', 'dataType'],
        'default' => '{defaultLegend},name,tableSource;{parentLegend},ptable,ptableOptions,ptableBackendField,ptableField,ptableCompareField;{geoLegend},dataType;{projLegend:hide},projName,projCode;{tableInformation},label,locstyle,tooltip,popupSwitch,cutTextAtLength;',
    ],
    
    'subpalettes' =>
    [
        'popupSwitch_default'   => 'popupSelection',
        'popupSwitch_expert'    => 'popup,openLinksInTab',
        'dataType_1'            => 'geox,geoy',
        'dataType_2'            => 'geolocation',
        'dataType_3'            => 'geolocation',
        'dataType_4'            => 'geolocation',

    ],

    // Fields
    'fields' =>
    [
        'id' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ],
        'tstamp' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ],
        'name' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['name'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '',
            'sql'                     => "text NULL default ''"
        ],
        'tableSource' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableSource'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getDatabaseTables'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'chosen' => true, 'submitOnChange' => true, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'ptable' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptable'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getDatabaseTables'],
            'save_callback'           => ['tl_c4g_map_tables', 'serializeResult'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true, 'size' => 2, 'chosen' => true, 'submitOnChange' => true],
            'sql'                     => "text NULL default ''"
        ],
        'ptableOptions' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableOptions'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getParentTablesFields'],
            'save_callback'           => ['tl_c4g_map_tables', 'serializeResult'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true,'size' => 2, 'chosen' => true, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'ptableBlob' =>
        [
            'default'                 => '',
            'sql'                     => "text NULL"
        ],
        'ptableField' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableField'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'save_callback'           => ['tl_c4g_map_tables', 'serializeResult'],
            'eval'                    => ['mandatory'=>false, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'ptableCompareField' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableCompareField'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getParentTablesFields'],
            'save_callback'           => ['tl_c4g_map_tables', 'serializeResult'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true, 'chosen' => true, 'size' => 2],
            'sql'                     => "text NULL default ''"
        ],
        'dataType' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataType'],
            'exclude'                 => true,
            'default'                 => '0',
            'inputType'               => 'radio',
            'options'                 => [1,2,3,4],
            'reference'               => $GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'],
            'eval'                    => ['mandatory'=>true, 'multiple'=>false, 'submitOnChange'=>true],
            'sql'                     => "varchar(1) default 0"
        ],
        'geolocation' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geolocation'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'geox' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geox'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'geoy' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoy'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'label' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['label'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'locstyle' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'projName' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projName'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['mandatory'=>false],
            'sql'                     => "varchar(10) NULL default ''"
        ],
        'projCode' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projCode'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['mandatory'=>false, 'decodeEntities'=>true],
            'sql'                     => "text NULL default ''"
        ],
        'popupSwitch' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch'],
            'exclude'                 => true,
            'inputType'               => 'radio',
            'default'                 => 'default',
            'options'                 => [
                'default' => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_default'],
                'expert' => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_expert'],
            ],
            'eval'                    => ['submitOnChange'=>true, 'tl_class'=>'clr'],
            'sql'                     => "varchar(10) NOT NULL default 'default'"
        ],
        
        'popup' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popup'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['mandatory'=>false],
            'sql'                     => "text NULL default ''"
        ],
        
        'openLinksInTab' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['openLinksInTab'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => ['tl_class'=>'clr'],
            'sql'                     => "char(1) NOT NULL default '0'"
        ],
        
        'popupSelection' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSelection'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => [],
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'save_callback'           => [['tl_c4g_map_tables', 'concatResult']],
            'load_callback'           => [['tl_c4g_map_tables', 'separateResult']],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true, 'chosen' => true, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'tooltip' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tooltip'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '',
            'options_callback'        => ['tl_c4g_map_tables','getSourceTableFields'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>false, 'chosen' => true, 'includeBlankOption' => true],
            'sql'                     => "text NULL default ''"
        ],
        'cutTextAtLength' => [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['cutTextAtLength'],
            'exclude'                 => true,
            'default'                 => '0',
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>false],
            'sql'                     => "varchar(10) NULL default '0'"
        ]
    ]

];

class tl_c4g_map_tables extends Backend
{
    public function getDatabaseTables(DataContainer $dc) {
        $options = $this->Database->listTables();
        return  $options;
    }
    
    public function getSourceTableFields(DataContainer $dc) {
        $tableName = $dc->activeRecord->tableSource;
        $options = $this->Database->getFieldNames($tableName);
        return $options;
    }
    
    public function getParentTablesFields(DataContainer $dc) {
        $tableNames = unserialize($dc->activeRecord->ptable);
        $options = [];
        foreach ($tableNames as $tableName){
            $tableOptions = $this->Database->getFieldNames($tableName);
            foreach ($tableOptions as $tableOption){
                $options[$tableName.'.'.$tableOption] = $tableName.'.'.$tableOption;
            }
        }
        return $options;
    }
    
    public function serializeResult($varValue, \Contao\DataContainer $dc)
    {
        return serialize($varValue);
    }
    
    public function getLabel($row, $label)
    {
        $label = [\Contao\Controller::replaceInsertTags($row['name']), $row['tableSource']];
        return $label;
    }
    
    public function concatResult($varValue)
    {
        $varValue = implode(",", unserialize($varValue));
        return $varValue;
    }
    
    public function separateResult($varValue)
    {
        return explode(",", $varValue);
    }
}