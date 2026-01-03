<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Classes;

/**
 * Class ImageSize
 * @package con4gis\MapsBundle\Classes
 */
class ImageSize extends \Contao\ImageSize
{
    /**
     * Trim values
     * @param   mixed
     * @return  mixed
     */
    protected function validator($varInput)
    {
        $validatedInput = parent::validator($varInput);
        $validatedInput[2] = preg_replace('/[^a-z0-9_%]+/', '', $varInput[2]);

        return $validatedInput;
    }
}
