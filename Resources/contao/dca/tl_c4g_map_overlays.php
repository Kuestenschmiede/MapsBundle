<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

/**
 * Table tl_c4g_map_overlays
*/
$GLOBALS['TL_DCA']['tl_c4g_map_overlays'] = array
(

    // Config
    'config' => array
    (
        'dataContainer'               => 'Table',
        'ptable'                      => 'tl_c4g_map_baselayers',
        'enableVersioning'            => true,
        'onsubmit_callback'             => array(
            array('\con4gis\CoreBundle\Resources\contao\classes\C4GAutomator', 'purgeApiCache')
        ),
        'sql'                         => array
        (
            'keys' => array
            (
                'id' => 'primary',
                'pid' => 'index'
            )
        )
    ),

    // List
    'list' => array
    (

    'sorting' => array
    (
        'mode'                    => 4,
        'fields'                  => array('name'),
        'panelLayout'             => 'filter;sort,search,limit',
        'headerFields'            => array('name'),
        'child_record_callback'   => array('tl_c4g_map_overlays', 'listOverlays'),
        'child_record_class'      => 'no_padding'
    ),

    'label' => array
    (
        'fields'                  => array('name'),
        'format'                  => '%s'
    ),

    'global_operations' => array
    (
        'all' => array
        (
            'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
            'href'                => 'act=select',
            'class'               => 'header_edit_all',
            'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
                            )
        ),

        'operations' => array
        (
            'edit' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),

            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),

            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),

            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),


    // Palettes
    'palettes' => array
    (
        '__selector__'                => array('provider'),
        'default'                     => 'name,provider,attribution',
        'custom'                      => 'name,provider,url1,url2,url3,url4,attribution',
        'wms'                         => 'name,provider,wms_url,wms_params_layers,wms_params_version,wms_params_format,wms_params_transparent,wms_params_srs,wms_gutter,attribution',
        'owm'                         => 'name,provider,api_key,app_id,api_port,attribution',
    ),

    // Fields
    'fields' => array
    (
        'id' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ),
        'pid' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'tstamp' => array
        (
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ),
        'name' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['name'],
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => array('mandatory'=>true, 'maxlength'=>50),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'provider' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider'],
            'filter'                  => true,
            'inputType'               => 'select',
            'default'                 => 'default',
            'options'                 => array('custom' => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom'],
                                               'wms' => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms'],
                                               'owm' => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm'],
                                            ),
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references'],
            'eval'                    => array('submitOnChange' => true),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'url1' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url1'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'url2' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url2'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'url3' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url3'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'url4' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url4'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'attribution' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'long clr', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'wms_url' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_url'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_layers' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_layers'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_version' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_version'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_format' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_format'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_params_transparent' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_transparent'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('submitOnChange' => false, 'tl_class'=>'w50 m12'),
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'wms_params_srs' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_srs'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'wms_gutter' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_gutter'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),

        'api_key' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_key'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'app_id' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['app_id'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'),
            'sql'                     => "varchar(100) NOT NULL default ''"
        ),

        'api_port' => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_port'],
            'filter'                  => false,
            'default'                 => '8099',
            'inputType'               => 'text',
            'eval'                    => array('decodeEntities'=>true, 'maxlength'=>4, 'tl_class'=>'long', 'mandatory'=>'true'),
            'sql'                     => "varchar(4) NOT NULL default '8099'"
        ),
    )
);

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


}
