<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\MapsBundle\Resources\contao\modules\api;


if (!defined('TL_ROOT')) die('You cannot access this file directly!');

/**
 * Class LayerContentDataApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LayerContentDataApi extends \Frontend
{
    /**
     * Fetches the content data with a certain bounding box.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */

    public function __construct()
    {
        $this->import('con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi');
    }

    public function generate($layerId, $extent)
    {
        return $this->getLayerData($layerId, $extent);
    }

    /**
     * Returns the layer data, if in extent.
     *
     * @param int $id
     */
    protected function getLayerData($intId, $extent)
    {
        $minX = explode(',',explode(';',$extent)[0])[0];
        $minY = explode(',',explode(';',$extent)[0])[1];
        $maxX = explode(',',explode(';',$extent)[1])[0];
        $maxY = explode(',',explode(';',$extent)[1])[1];
        $strQuery = "SELECT * FROM tl_c4g_map_layer_content WHERE pid=". $intId . " AND geox>".$minX." AND geox<".$maxX." AND geoy>".$minY." AND geoy<".$maxY;
        $result = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
        $arrContent = [];
        foreach($result as $content)
        {
            $arrContent[] = $this->createContent($content);
        }
        return $arrContent;
    }
    public function createContent($contentFromDB){
        $content = array
        (
            'id'                => $contentFromDB['id'],
            'type'              => $contentFromDB['type'],
            'format'            => $contentFromDB['format'],
            'origType'          => $contentFromDB['origType'],
            'locationStyle'     => $contentFromDB['locstyle'],
            'cluster_fillcolor' => $contentFromDB['cluster_fillcolor'],
            'cluster_fontcolor' => $contentFromDB['cluster_fontcolor'],
            'cluster_distance'  => $contentFromDB['cluster_distance'],
            'cluster_zoom'      => $contentFromDB['cluster_zoom'],
            'cluster_popup'     => $contentFromDB['cluster_popup'],
            'data'              => array
            (
                'type'          => $contentFromDB['datatype'],
                'geometry'      => array
                (
                    'type'          => $contentFromDB['geotype'],
                    'coordinates'   => array
                    (
                        '0'             => $contentFromDB['geox'],
                        '1'             => $contentFromDB['geoy']
                    )
                ),
                'properties'    => array
                (
                    'projection'    => $contentFromDB['projection'],
                    'tooltip'       => $contentFromDB['tooltip'],
                    'tooltip_length'=> $contentFromDB['tooltip_length'],
                    'label'         => $contentFromDB['label'],
                    'loc_linkurl'   => $contentFromDB['loc_linkurl'],
                    'hover_loaction'=> $contentFromDB['hover_loaction'],
                    'hover_style'   => $contentFromDB['hover_style'],
                    'popup'         => array
                    (
                        'content'       =>$contentFromDB['popup_content'],
                        'routing_link'  =>$contentFromDB['routing_link'],
                        'async'         =>$contentFromDB['popup_async']
                    )

                ),
            )
        );
        return $content;
    }
}
