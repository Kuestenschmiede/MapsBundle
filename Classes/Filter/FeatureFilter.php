<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

namespace con4gis\MapsBundle\Classes\Filter;


class FeatureFilter
{
    /**
     * The name of the filter.
     * @var string
     */
    private $fieldName = "";
    
    /**
     * The options for the filter field.
     * @var array
     */
    private $values = [];
    
    public function addFilterValue($value)
    {
        if (!in_array($value, $this->values)) {
            $this->values[] = $value;
        }
    }
    
    /**
     * @return string
     */
    public function getFieldName(): string
    {
        return $this->fieldName;
    }
    
    /**
     * @param string $fieldName
     */
    public function setFieldName(string $fieldName): void
    {
        $this->fieldName = $fieldName;
    }
    
    /**
     * @return array
     */
    public function getValues(): array
    {
        return $this->values;
    }
    
    /**
     * @param array $values
     */
    public function setValues(array $values): void
    {
        $this->values = $values;
    }
    
    
}