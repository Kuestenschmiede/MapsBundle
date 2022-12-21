<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Filter;

class FeatureFilter implements \JsonSerializable
{
    /**
     * The name of the filter.
     * @var string
     */
    private $fieldName = '';

    /**
     * Path to the image.
     * @var string
     */
    private $image = '';

    /**
     * Path to the link.
     * @var string
     */
    private $link = '';

    /**
     * The options for the filter field.
     * ToDo why this new translation way?
     * @var array
     */
    private $filters = [
        [
            'identifier' => 'all',
            'translation' => 'Alle anzeigen', //ToDo
        ],
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
            'name' => $this->fieldName,
            'image' => $this->image,
            'filters' => $this->filters,
            'link' => $this->link,
            'width' => $this->image && getimagesize($this->image) ? getimagesize($this->image)[0] : '100%',
            'height' => $this->image && getimagesize($this->image) ? getimagesize($this->image)[1] : '100%',

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
     * @return string
     */
    public function getImage(): string
    {
        return $this->image;
    }

    /**
     * @param string $fieldName
     */
    public function setImage(string $image): void
    {
        $this->image = $image;
    }

    /**
     * @return string
     */
    public function getLink(): string
    {
        return $this->link;
    }

    /**
     * @param string $link
     */
    public function setLink(string $link): void
    {
        $this->link = $link;
    }

    /**
     * @return array
     */
    public function getValues(): array
    {
        return $this->values ? $this->values : [];
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
        return $this->translations ? $this->translations : [];
    }

    /**
     * @param array $translations
     */
    public function setTranslations(array $translations): void
    {
        $this->translations = $translations;
    }
}
