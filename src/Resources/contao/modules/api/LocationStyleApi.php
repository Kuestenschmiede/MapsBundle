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
namespace con4gis\MapsBundle\Resources\contao\modules\api;
use con4gis\CoreBundle\Classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapLocstylesModel;
use Contao\StringUtil;
use Contao\System;
use Contao\Validator;
use Contao\FilesModel;

/**
 * Class LocationStyleApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LocationStyleApi
{
    /**
     * Determines the request method and selects the appropriate data result.
     * @param $arrIds
     * @return array
     */
    public function generate($arrIds)
    {
        return $this->getStyleData($arrIds);
    }

    /**
     * Returns the layer data.
     *
     * @param int $id
     */
    protected function getStyleData($arrIds)
    {
        $arrLocationsStyles = array();

        $objLocationStyles = C4gMapLocstylesModel::findMultipleByIds($arrIds);


        if ($objLocationStyles == null) {
            return [];
        }

        while($objLocationStyles->next())
        {
            $arrLocationsStyles[] = $this->prepareStyleData($objLocationStyles->row());
        }

        return $arrLocationsStyles;
    }

    private function prepareStyleData($arrData)
    {
        $originalData = $arrData;
        $arrKeyOutOfUse = array('ol_icon');

        foreach ($arrData as $key=>$value)
        {
            if (in_array($key, $arrKeyOutOfUse))
            {
                unset($arrData[$key]);
                continue;
            }

            $val = $value;
            $originalValue = $value;
            
            // Determine if it's a binary UUID
            $isBinary = (is_string($val) && strlen($val) === 16 && !mb_check_encoding($val, 'UTF-8'));
            
            // Also check for 16 bytes that might be UTF-8 but contain null bytes
            if (!$isBinary && is_string($val) && strlen($val) === 16 && strpos($val, "\0") !== false) {
                $isBinary = true;
            }
            
            if ($isBinary) {
                try {
                    $uuid = StringUtil::binToUuid($val);
                    if (Validator::isUuid($uuid) || Validator::isStringUuid($uuid)) {
                        $val = $uuid;
                    }
                } catch (\Exception $e) {}
            } elseif (is_string($val) && strlen($val) === 32 && preg_match('/^[0-9a-f]{32}$/i', $val)) {
                $val = substr($val, 0, 8) . '-' . substr($val, 8, 4) . '-' . substr($val, 12, 4) . '-' . substr($val, 16, 4) . '-' . substr($val, 20);
            }

            if (is_string($val) && (Validator::isUuid($val) || Validator::isStringUuid($val) || strpos($val, 'files/') === 0 || (strpos($val, '.') !== false && strlen($val) > 3)))
            {
                // If it's already a path, use it directly
                if (strpos($val, 'files/') === 0 || strpos($val, 'assets/') === 0 || strpos($val, 'bundles/') === 0) {
                    $arrData[$key] = '/' . $val;
                    continue;
                }

                // add ressource link
                $objFile = FilesModel::findByUuid($val);
                if ($objFile !== null && $objFile->path) {
                    $arrData[$key] = '/' . $objFile->path;
                } else {
                    // Try without braces if it has them
                    $val2 = trim($val, '{}');
                    $objFile = FilesModel::findByUuid($val2);
                    if ($objFile !== null && $objFile->path) {
                        $arrData[$key] = '/' . $objFile->path;
                    } else {
                        // Raw SQL fallback for tl_files
                        try {
                            $db = \Contao\Database::getInstance();
                            $res = null;
                            $binUuid = null;
                            if ($isBinary) {
                                $binUuid = $originalValue;
                            } else {
                                try {
                                    $binUuid = StringUtil::uuidToBin($val);
                                } catch (\Exception $e) {}
                            }

                            if ($binUuid) {
                                $res = $db->prepare("SELECT path FROM tl_files WHERE uuid=?")->execute($binUuid);
                            }
                            
                            if (!$res || !$res->numRows) {
                                // Try searching by string UUID if it's stored as text (unlikely but possible)
                                $res = $db->prepare("SELECT path FROM tl_files WHERE uuid=?")->execute($val);
                            }
                            
                            if ($res && $res->numRows) {
                                $arrData[$key] = '/' . $res->path;
                            } else {
                                // If search failed, try to see if it's already a path or looks like a filename
                                if (is_string($originalValue) && (strpos($originalValue, 'files/') === 0 || strpos($originalValue, '/') === 0)) {
                                    $path = (strpos($originalValue, '/') === 0) ? substr($originalValue, 1) : $originalValue;
                                    $arrData[$key] = '/' . $path;
                                } else {
                                    $arrData[$key] = "";
                                }
                            }
                        } catch (\Throwable $e) {
                            $arrData[$key] = "";
                        }
                    }
                }
            } else {
                // Not a UUID or already processed
                $deserialized = StringUtil::deserialize($value);
                if (is_array($deserialized)) {
                    $arrData[$key] = $deserialized;
                } else {
                    $arrData[$key] = $value;
                }
            }
        }

            // FALLBACK for Project 3: try to resolve by name if empty or path is still a UUID (meaning resolution failed)
            $currentPath = $arrData['icon_src'] ?: $arrData['svgSrc'];

            if ((empty($currentPath) || strpos($currentPath, '/') !== 0) && !empty($arrData['name'])) {
                $styleName = $arrData['name'];
                if (strpos($styleName, 'io_') === 0) {
                    $styleName = substr($styleName, 3);
                }
                $styleName = str_replace(' ', '_', $styleName);
                $projectDir = class_exists(System::class) ? System::getContainer()->getParameter('kernel.project_dir') : '';
                $basePaths = glob($projectDir . '/files/con4gis_import_data/*/icons/Kategorie_Icons', GLOB_ONLYDIR);
                $basePath = !empty($basePaths) ? str_replace($projectDir . '/', '', $basePaths[0]) . '/' : 'files/con4gis_import_data/60/icons/Kategorie_Icons/';

                $found = false;
                foreach (['.svg', '.png', '.jpg'] as $ext) {
                    if ($projectDir && file_exists($projectDir . '/' . $basePath . $styleName . $ext)) {
                        if ($ext === '.svg') {
                            $arrData['svgSrc'] = '/' . $basePath . $styleName . $ext;
                            $arrData['icon_src'] = "";
                            $arrData['styletype'] = 'cust_icon_svg';
                        } else {
                            $arrData['icon_src'] = '/' . $basePath . $styleName . $ext;
                            $arrData['svgSrc'] = "";
                            $arrData['styletype'] = 'cust_icon';
                        }
                        $found = true;
                        break;
                    }
                }
            }

            // POST-PROCESSING: Fix styletype if we have an icon but it's set to square
            if (($arrData['styletype'] ?? '') === 'square' || empty($arrData['styletype'])) {
                if (!empty($arrData['icon_src'])) {
                    $arrData['styletype'] = 'cust_icon';
                } elseif (!empty($arrData['svgSrc'])) {
                    $arrData['styletype'] = 'cust_icon_svg';
                }
            }



        // Normalize essential fields for frontend rendering
        $this->normalizeField($arrData, 'strokecolor', ['ee0016', '100']);
        $this->normalizeField($arrData, 'fillcolor', ['ee0011', '100']);
        $this->normalizeField($arrData, 'font_color', ['000000', '100']);
        $this->normalizeField($arrData, 'strokewidth', ['value' => 2, 'unit' => 'px']);
        $this->normalizeField($arrData, 'radius', ['value' => 7, 'unit' => 'px']);
        $this->normalizeField($arrData, 'icon_opacity', ['value' => 100, 'unit' => '%']);
        // Don't overwrite icon_size if it's already an array/serialized
        if (empty($arrData['icon_size'])) {
            $arrData['icon_size'] = [24, 24];
        } else {
            $arrData['icon_size'] = StringUtil::deserialize($arrData['icon_size']);
            if (!is_array($arrData['icon_size'])) $arrData['icon_size'] = [24, 24];
        }
        
        if (empty($arrData['icon_scale'])) {
            $arrData['icon_scale'] = 1;
        }

        if (empty($arrData['icon_offset'])) {
            $arrData['icon_offset'] = [0, 0];
        } else {
            $arrData['icon_offset'] = StringUtil::deserialize($arrData['icon_offset']);
            if (!is_array($arrData['icon_offset'])) $arrData['icon_offset'] = [0, 0];
        }

        return $this->cleanDataRecursive($arrData);
    }

    private function normalizeField(array &$data, string $field, $default): void
    {
        if (empty($data[$field])) {
            $data[$field] = $default;
            return;
        }

        if ($field === 'strokecolor' || $field === 'fillcolor' || $field === 'font_color') {
            if (!is_array($data[$field])) {
                $data[$field] = [(string)$data[$field], '100'];
            } elseif (count($data[$field]) < 2) {
                $data[$field][1] = '100';
            }
        } elseif ($field === 'strokewidth' || $field === 'radius' || $field === 'icon_opacity') {
            if (!is_array($data[$field])) {
                $data[$field] = ['value' => $data[$field], 'unit' => ($field === 'icon_opacity' ? '%' : 'px')];
            } elseif (!isset($data[$field]['value'])) {
                $data[$field]['value'] = $data[$field]['value'] ?? $default['value'];
                $data[$field]['unit'] = $data[$field]['unit'] ?? $default['unit'];
            }
        } elseif ($field === 'icon_size' || $field === 'icon_offset') {
            if (!is_array($data[$field])) {
                $data[$field] = $default;
            }
        }
    }

    private function cleanDataRecursive(array $data): array
    {
        $clean = [];
        foreach ($data as $key => $value) {
            $cleanKey = $key;
            if (is_string($key) && !mb_check_encoding($key, 'UTF-8')) {
                $cleanKey = bin2hex($key);
            }

            if (is_array($value)) {
                $clean[$cleanKey] = $this->cleanDataRecursive($value);
            } elseif (is_string($value)) {
                if (!mb_check_encoding($value, 'UTF-8')) {
                    $clean[$cleanKey] = bin2hex($value); // Convert to hex to avoid data loss and encoding errors
                } else {
                    // Remove null bytes which cause issues in JSON and frontend
                    $clean[$cleanKey] = str_replace("\0", '', $value);
                }
            } elseif (is_object($value)) {
                // Try to convert objects to array if possible, or remove
                if (method_exists($value, 'row')) {
                    $clean[$cleanKey] = $this->cleanDataRecursive($value->row());
                } else {
                    // ignore objects
                }
            } elseif (is_scalar($value) || $value === null) {
                $clean[$cleanKey] = $value;
            }
        }
        return $clean;
    }
}
