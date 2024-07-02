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

class LoadInfoWindowEvent
{
    const NAME = 'maps.popup.load';

    /**
     * The content of the popup
     * @var string
     */
    private $popup = '';

    /**
     * The request string for the popup
     * @var string
     */
    private $popupString = '';

    /**
     * The request string for the popup
     * @var string
     */
    private $scope = '';

    /**
     * @return array
     */
    public function getPopup(): array
    {
        return $this->popup;
    }

    /**
     * @param array $popup
     */
    public function setPopup(array $popup): void
    {
        $this->popup = $popup;
    }

    /**
     * @return string
     */
    public function getPopupString(): string
    {
        return $this->popupString;
    }

    /**
     * @param string $popupString
     */
    public function setPopupString(string $popupString): void
    {
        $this->popupString = $popupString;
    }

    public function getScope(): string
    {
        return $this->scope;
    }

    public function setScope(string $scope): void
    {
        $this->scope = $scope;
    }
}
