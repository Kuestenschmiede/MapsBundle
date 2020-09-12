<?php


namespace con4gis\MapsBundle\Classes\Events;


class LoadInfoWindowEvent
{
    const NAME = 'maps.popup.load';

    /**
     * The content of the popup
     * @var string
     */
    private $popup = "";

    /**
     * The request string for the popup
     * @var string
     */
    private $popupString = "";

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
}