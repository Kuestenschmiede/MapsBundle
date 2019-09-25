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


class FeatureFilter implements \JsonSerializable
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
    private $filters = [
        [
            "value" => "all",
            "translation" => "Alle anzeigen"
        ]
    ];
    
    public function addFilterValue($value)
    {
        if (!in_array($value, $this->filters)) {
            $this->filters[] = $value;
        }
    }
    
    public function addTranslation($key, $translation)
    {
        $this->translations[$key] = $translation;
    }
    
    /**
     * Specify data which should be serialized to JSON
     * @link https://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        return [
            "name" => $this->fieldName,
            "filters" => $this->filters,
        ];
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
    
    /**
     * @return array
     */
    public function getTranslations(): array
    {
        return $this->translations;
    }
    
    /**
     * @param array $translations
     */
    public function setTranslations(array $translations): void
    {
        $this->translations = $translations;
    }
}