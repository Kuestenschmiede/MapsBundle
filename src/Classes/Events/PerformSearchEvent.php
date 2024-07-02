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

namespace con4gis\MapsBundle\Classes\Events;

class PerformSearchEvent
{
    const NAME = 'maps.search.perform';

    /**
     * The profileId of the request
     * @var integer
     */
    private $profileId = 0;

    /**
     * The request params of the request
     * @var array
     */
    private $arrParams = [];

    /**
     * The request response
     * @var array
     */
    private $response = [];

    /**
     * @return int
     */
    public function getProfileId()
    {
        return $this->profileId;
    }

    /**
     * @param int $profileId
     */
    public function setProfileId($profileId)
    {
        $this->profileId = $profileId;
    }

    /**
     * @return array
     */
    public function getArrParams()
    {
        return $this->arrParams;
    }

    /**
     * @param array $arrParams
     */
    public function setArrParams($arrParams)
    {
        $this->arrParams = $arrParams;
    }

    /**
     * @return array
     */
    public function getResponse() :array
    {
        return $this->response;
    }

    /**
     * @param array $response
     */
    public function setResponse(array $response)
    {
        $this->response = $response;
    }
}
