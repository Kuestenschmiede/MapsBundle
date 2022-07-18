<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

$strName = 'tl_c4g_editor_configuration';
$cbClass = \con4gis\MapsBundle\Classes\Contao\Callbacks\TlEditorConfiguration::class;

$GLOBALS['TL_DCA'][$strName] = array
(
    'config' => array
    (
        'dataContainer'     => 'Table',
        'enableVersioning'  => 'true',
    ),
    'list' => array
    (
        'sorting' => array
        (
            'mode'              => 2,
            'fields'            => array('name ASC'),
            'panelLayout'       => 'filter;sort,search,limit',
            'headerFields'      => array('name', 'type'),
            'icon'              => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
        ),

        'label' => array
        (
            'fields'            => array('name', 'type'),
            'showColumns'       => true,
        ),
        'global_operations' => array
        (
            'all' => [
                'label'         => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'          => 'act=select',
                'class'         => 'header_edit_all',
                'attributes'    => 'onclick="Backend.getScrollOffSet()" accesskey="e"'
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
                'label'         => &$GLOBALS['TL_LANG'][$strName]['edit'],
                'href'          => 'act=edit',
                'icon'          => 'edit.svg',
            ),
            'copy' => array
            (
                'label'         => &$GLOBALS['TL_LANG'][$strName]['copy'],
                'href'          => 'act=copy',
                'icon'          => 'copy.svg',
            ),
            'delete' => array
            (
                'label'         => &$GLOBALS['TL_LANG'][$strName]['delete'],
                'href'          => 'act=delete',
                'icon'          => 'delete.svg',
                'attributes'    => 'onclick="if(!confirm(\'' . ((($GLOBALS['TL_LANG']['MSC']['deleteConfirm'] ?? null) ?? null) ?? null) . '\')) return false;Backend.getScrollOffset()"',
            ),
            'show' => array
            (
                'label'         => &$GLOBALS['TL_LANG'][$strName]['show'],
                'href'          => 'act=show',
                'icon'          => 'show.svg',
            )
        )
    ),
    'palettes' => array
    (
        '__selector__' => ['type'],
        'default'   =>  '{data_legend},name,types,editor_helpurl,editor_vars;',
    ),
    'fields' => array
    (
        'name' => array
        (
            'flag'              => 1,
            'sorting'           => true,
            'default'           => '',
            'search'            => true,
            'inputType'         => 'text',
            'eval'              => array('mandatory' => true, 'tl_class' => 'long')
        ),
        'importId' =>
        [
            'eval'                    => array('doNotCopy' => true)
        ],
        'types' => [
            'exclude'                 => true,
            'default'                 => 'a:0:{}',
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'     => [$cbClass,'getTypes']
            ]
        ],
        'editor_helpurl' => array
        (
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'),
        ),
        'editor_vars' => [
            'exclude'                 => true,
            'default'                 => 'a:0:{}',
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'     => [$cbClass,'getEditorVars']
            ]
        ],
        'editor_project_group' => [
            'exclude'                 => true,
            'default'                 => 0,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_member_group.name',
            'relation'                => array('type'=>'belongsToMany', 'load'=>'lazy'),
            'eval'                    => array('tl_class'=>'clr'),
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references'],
        ],

    )
);

