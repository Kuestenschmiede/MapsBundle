<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\MapsBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class EditorConfiguration
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_configuration")
 * @package con4gis\MapsBundle\Entity
 */
class EditorConfiguration extends BaseEntity
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $tstamp = 0;

    /**
     * @var int
     * @ORM\Column(type="integer", options={"default":0})
     */
    protected $importId = 0;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $name = '';

    /**
     * @var null
     * @ORM\Column(type="array")
     */
    protected $types = [];

    /**
     * @var null
     * @ORM\Column(type="array")
     */
    protected $editor_vars = [];

    /**
     * @var string
     * @ORM\Column(type="string", name="editor_helpurl")
     */
    protected $editorHelpUrl = '';

    /**
     * @var int
     * @ORM\Column(type="integer", name="editor_project_group")
     */
    protected $editorProjectGroup = 0;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getTstamp()
    {
        return $this->tstamp;
    }

    /**
     * @param int $tstamp
     */
    public function setTstamp($tstamp)
    {
        $this->tstamp = $tstamp;
    }

    /**
     * @return int
     */
    public function getImportId()
    {
        return $this->importId;
    }

    /**
     * @param int $importId
     */
    public function setImportId($importId)
    {
        $this->importId = $importId;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return null
     */
    public function getTypes()
    {
        return $this->types;
    }

    /**
     * @param null $types
     */
    public function setTypes($types)
    {
        $this->types = $types;
    }

    /**
     * @return string
     */
    public function getEditorHelpUrl()
    {
        return $this->editorHelpUrl;
    }

    /**
     * @param string $editorHelpUrl
     */
    public function setEditorHelpUrl($editorHelpUrl)
    {
        $this->editorHelpUrl = $editorHelpUrl;
    }

    /**
     * @return int
     */
    public function getEditorProjectGroup()
    {
        return $this->editorProjectGroup;
    }

    /**
     * @param int $editorProjectGroup
     */
    public function setEditorProjectGroup($editorProjectGroup)
    {
        $this->editorProjectGroup = $editorProjectGroup;
    }

    /**
     * @return null
     */
    public function getEditorVars()
    {
        return $this->editor_vars;
    }

    /**
     * @param null $editor_vars
     */
    public function setEditorVars($editor_vars)
    {
        $this->editor_vars = $editor_vars;
    }
}