<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes;

/**
 * Class TextField
 * @package con4gis\MapsBundle\Classes
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
