<?php

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

namespace con4gis\MapsBundle\Resources\contao\modules\api;

use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Contao\StringUtil;

/**
 * Class LayerApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class ContentApi extends \Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    protected $arrLayers = array();
    protected $arrConfig = array();
    protected $arrReassignedLayer = array();

    public function generate($layerId, $bbox)
    {
        $this->import('FrontendUser', 'User');
        $layer = C4gMapsModel::findById($layerId);





        return ;

    }
}