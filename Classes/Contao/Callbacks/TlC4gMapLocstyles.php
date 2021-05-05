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
namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

use Contao\Backend;
use Contao\DataContainer;
use Contao\FilesModel;
use Contao\ImagineSvg\Imagine;

class TlC4gMapLocstyles extends Backend
{
    public function editSvgIcon(DataContainer $dc)
    {
        if (($dc->activeRecord->styletype == 'cust_icon_svg') && ($dc->activeRecord->svg_add_attributes === '1')) {
            $svgSrc = $dc->activeRecord->svgSrc;
            $svgFile = FilesModel::findByUuid($svgSrc);
            if (!$svgFile) {
                return;
            }

            $imagine = new Imagine();
            $image = $imagine->open($svgFile->path);
            $svg = $image->getDomDocument()->documentElement;
            // check if the file has already defined height and width
            $width = $svg->getAttribute('width');
            $height = $svg->getAttribute('height');

            if ($width && $height) {
                // no modification needed
                return;
            }

            // Absolute dimensions
            $viewBox = preg_split('/[\s,]+/', $svg->getAttribute('viewBox') ?: '');
            $viewBoxWidth = isset($viewBox[2]) ? (float) $viewBox[2] : 0;
            $viewBoxHeight = isset($viewBox[3]) ? (float) $viewBox[3] : 0;

            if ($viewBoxWidth != 0 && $viewBoxHeight != 0) {
                $svg->setAttribute('width', $viewBoxWidth);
                $svg->setAttribute('height', $viewBoxHeight);
            }
            $image->save($svgFile->path);
        }
    }

    /**
     * Return all Location Styles as array
     * @param object
     * @return array
     */
    public function getLocStyles(\DataContainer $dc)
    {
        $locStyles = $this->Database->prepare('SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name')
            ->execute();
        $return[''] = '-';
        while ($locStyles->next()) {
            $return[$locStyles->id] = $locStyles->name;
        }

        return $return;
    }
}
