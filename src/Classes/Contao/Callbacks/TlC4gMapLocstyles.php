<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

use Contao\Backend;
use Contao\BackendUser;
use Contao\DataContainer;
use Contao\FilesModel;
use Contao\System;
use Contao\Validator;
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
    public function setSizes($varValue, DataContainer $dc)
    {
        if ($dc->activeRecord->styletype == 'cust_icon') {
            $icon_src = $dc->activeRecord->icon_src;
            $icon_size = \Contao\StringUtil::deserialize($dc->activeRecord->icon_size);
            $id = $dc->id;
            if ($icon_src && !($icon_size && $icon_size[0])) {
                if (Validator::isUuid($icon_src)) {
                    $iconSrc = FilesModel::findByUuid($icon_src);
                    list($width, $height, $type, $attr) = getimagesize($iconSrc->path);
                    $icon_size = 'a:3:{i:0;s:' . strlen($width) . ':"' . $width . '";i:1;s:' . strlen($height) . ':"' . $height . '";i:2;s:2:"px";}';
                    $dc->activeRecord->icon_size = $icon_size;
                    $offsetWidth = '-' . ($width / 2);
                    $offsetHeight = '-' . ($height / 2);
                    $icon_offset = 'a:3:{i:0;s:' . strlen($offsetWidth) . ':"' . $offsetWidth . '";i:1;s:' . strlen($offsetHeight) . ':"' . $offsetHeight . '";i:2;s:2:"px";}';
                    $dc->activeRecord->icon_offset = $icon_offset;
                    $this->Database->prepare('UPDATE tl_c4g_map_locstyles SET icon_size=?, icon_offset=? WHERE id =?')
                        ->execute($icon_size, $icon_offset, $id);
                }
            }
        }

        if ($dc->activeRecord->styletype == 'cust_icon_svg') {
            $icon_src = $dc->activeRecord->svgSrc;
            $icon_size = $dc->activeRecord->icon_size;
            if ($icon_src && ! $icon_size) {
                if (Validator::isUuid($icon_src)) {
                    $iconSrc = FilesModel::findByUuid($icon_src);
                    //list($width, $height, $type, $attr) = getimagesize($iconSrc->path);
                    $size = (new Contao\ImagineSvg\Imagine)->open($iconSrc->path)->getSize();
                    $width = $size->getWidth();
                    $height = $size->getHeight();

                    $icon_size = 'a:3:{i:0;s:' . strlen($width) . ':"' . $width . '";i:1;s:' . strlen($height) . ':"' . $height . '";i:2;s:2:"px";}';

                    $offsetWidth = '-' . ($width / 2);
                    $offsetHeight = '-' . ($height / 2);
                    $icon_offset = 'a:3:{i:0;s:' . strlen($offsetWidth) . ':"' . $offsetWidth . '";i:1;s:' . strlen($offsetHeight) . ':"' . $offsetHeight . '";i:2;s:2:"px";}';

                    $this->Database->prepare('UPDATE tl_c4g_map_locstyles SET icon_size=?, icon_offset=? WHERE id =?')
                        ->execute($icon_size, $icon_offset, $dc->id);
                }
            }
        }

        return is_string($icon_size) ? $icon_size : serialize($icon_size) ;
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

    //ToDo Rework without proportional
    public static function getFilteredSizes() {
        $filteredSizes = [];

        $user = BackendUser::getInstance();
        if (!$user instanceof BackendUser || !$user->id) {
            return [];
        }
        $imageSizes = \Contao\System::getContainer()->get('contao.image.sizes')->getOptionsForUser($user);
        $just = 'proportional';

        if ($imageSizes !== false) {
            foreach ($imageSizes as $group => $custom) {
                if (key_exists('custom', $custom) && $group !== 'custom') {
                    continue;
                }
                foreach ($custom as $key => $size) {
                    //Contao 5
                    if ($size == $just) {
                        $filteredSizes[$group][$size] = $size;
                        break;
                    }
                    //Contao 4
                    if ($key == $just) {
                        $filteredSizes[$group][$size] = $size;
                        break;
                    }
                }
            }

            $imageSizes = $filteredSizes;
        }

        return $imageSizes;
    }
}
