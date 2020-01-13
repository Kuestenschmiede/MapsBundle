<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\classes;

/**
 * Class ImageSize
 * @package con4gis\MapsBundle\Resources\contao\classes
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
