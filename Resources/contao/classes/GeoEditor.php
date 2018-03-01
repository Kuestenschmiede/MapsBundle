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
 * Class GeoEditor
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class GeoEditor extends \Contao\Backend
{

	/**
	 * Initialize the controller
	 *
	 * 1. Import user
	 * 2. Call parent constructor
	 * 3. Authenticate user
	 * 4. Load language files
	 * DO NOT CHANGE THIS ORDER!
	 */
	public function __construct()
	{
		$this->import('BackendUser', 'User');
		parent::__construct();

		$this->User->authenticate();
		$this->loadLanguageFile('default');
	}


    public function getEditorLink(\DataContainer $dc)
    {

        $strField = 'ctrl_' . $dc->field . (($this->Input->get('act') == 'editAll') ? '_' . $dc->id : '');

        // return ($dc->value < 1) ? '' : ' <a href="bundles/con4gismaps/be/geoeditor.php?rt=' . REQUEST_TOKEN . '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '" style="padding-left:3px" onclick="c4g.maps.backend.showGeoEditor(this.href,' . $strFieldX . ',' . $strFieldY . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor']. '\'});return false">' . \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.png', $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top"') . '</a>';
        return ' <a href="bundles/con4gismaps/be/geoeditor.php?rt=' . REQUEST_TOKEN . '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '" style="padding-left:3px" onclick="c4g.maps.backend.showGeoEditor(this.href,' . $strField . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor']. '\'});return false">' . \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.png', $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top"') . '</a>';

    }

	/**
	 * Run controller and parse the template
	 */
	public function run()
	{
		$this->Template = new \BackendTemplate('c4g_geoeditor');

		$this->Template->theme = $this->getTheme();
		$this->Template->base = $this->Environment->base;
		$this->Template->language = $GLOBALS['TL_LANGUAGE'];
		$this->Template->title = $GLOBALS['TL_CONFIG']['websiteTitle'];
		$this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'];
		$this->Template->charset = $GLOBALS['TL_CONFIG']['characterSet'];
		$this->c4g_map_layer_switcher = true;

        // get base64 encoded geoData
        $geoData = $this->Input->get('geoData');

        // $this->Template->geoData = base64_decode(chunk_split($geoData));
        $this->Template->geoData = $geoData;

        $objMapData = MapDataConfigurator::prepareMapData($this, $this->Database, array('geoeditor' => true));

        $objMapData['editor']['enable'] = true;
        $objMapData['editor']['type'] = 'backend';
        $objMapData['editor']['open'] = true;
        $objMapData['editor']['data_field'] = '[name="geoData"]';

        $this->Template->mapData = $objMapData;

		$this->Template->output();
	}

	public function repInsertTags( $str )
	{
		return parent::replaceInsertTags($str);
	}

	public function import($strClass, $strKey=false, $blnForce=false)
	{
		parent::import($strClass, $strKey, $blnForce);
	}

	public function getInput() {
		return $this->Input;
	}

	public function getFrontendUrl($arrRow) {
		return parent::generateFrontendUrl($arrRow);
	}

}


/**
 * Instantiate controller
 */
//$objGeoPicker = new C4GGeoEditor();
//$objGeoEditor->run();
