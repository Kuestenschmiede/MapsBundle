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
