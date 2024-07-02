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
namespace con4gis\MapsBundle\Classes\Services;

use con4gis\MapsBundle\Classes\Filter\FeatureFilter;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use Contao\Database;
use Detection\MobileDetect;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class FilterService
{
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;

    /**
     * FilterService constructor.
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    /**
     * @return FeatureFilter[]
     */
    public function createFilters($layerId)
    {
        $return = [];
        $database = Database::getInstance();
        $layer = C4gMapsModel::findByPk($layerId);
        $mobileDetection = new MobileDetect();
        if ($mobileDetection->isMobile() && ($layer->profile_mobile > 0)) {
            $isMobile = true;
            $profileId = $layer->profile_mobile;
        }
        else {
            $profileId = $layer->profile;
        }

        $mapsProfileModel = C4gMapProfilesModel::findById($profileId);
        $filterIds = \Contao\StringUtil::deserialize($mapsProfileModel->filters);
        if ($filterIds) {
            foreach ($filterIds as $filterId) {
                $filter = $database->prepare('SELECT * FROM tl_c4g_map_filters WHERE id=' . $filterId)
                    ->execute()->fetchAssoc();
                $objFilter = new FeatureFilter();
                $objFilter->setFieldName($filter['name']);
                $childs = \Contao\StringUtil::deserialize($filter['filters']);
                foreach ($childs as $child) {
                    $objFilter->addFilterValue($child);
                }
                $return[] = $objFilter;
            }

            return $return;
        }
    }
}
