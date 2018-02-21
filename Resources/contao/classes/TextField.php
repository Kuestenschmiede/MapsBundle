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
namespace con4gis\MapsBundle\Resources\contao\classes;

/**
 * Class TextField
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class TextField extends \Contao\TextField
{

    /**
     * Check custom setting 'require_input', which implements custom mandatory handling possibility
     * @return string
     */
    public function generateLabel()
    {
        if (($this->require_input) && ($this->value == '')) {
            $this->required = true;
        }
        return parent::generateLabel();
    }

}
