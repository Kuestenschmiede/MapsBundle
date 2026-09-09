<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Classes\Services;

use Contao\FilesModel;
use Contao\StringUtil;
use Contao\Validator;

class ImageMetadataService
{
    /**
     * Extracts GPS coordinates from an image file if available.
     *
     * @param string $filePath Absolute path to image file
     * @return array|null Array with 'lat' and 'lng' / 'lon' keys, or null
     */
    public static function extractGpsCoordinates(string $filePath): ?array
    {
        if (!file_exists($filePath) || !is_readable($filePath)) {
            return null;
        }

        if (!function_exists('exif_read_data')) {
            return null;
        }

        $exif = @exif_read_data($filePath, 'GPS');
        if (!$exif || !isset($exif['GPSLatitude'], $exif['GPSLongitude'], $exif['GPSLatitudeRef'], $exif['GPSLongitudeRef'])) {
            return null;
        }

        $lat = self::gpsToDecimal($exif['GPSLatitude'], $exif['GPSLatitudeRef']);
        $lng = self::gpsToDecimal($exif['GPSLongitude'], $exif['GPSLongitudeRef']);

        if ($lat === null || $lng === null) {
            return null;
        }

        return [
            'lat' => $lat,
            'lng' => $lng,
            'lon' => $lng,
        ];
    }

    /**
     * Extracts full metadata (GPS, IPTC title, description, timestamp, camera, dimensions) from an image.
     *
     * @param string $filePath Absolute path to image file
     * @return array
     */
    public static function extractMetadata(string $filePath): array
    {
        $meta = [
            'gps' => null,
            'title' => '',
            'description' => '',
            'datetime' => null,
            'width' => 0,
            'height' => 0,
            'camera' => '',
        ];

        if (!file_exists($filePath) || !is_readable($filePath)) {
            return $meta;
        }

        $info = [];
        $imgSize = @getimagesize($filePath, $info);
        if ($imgSize) {
            $meta['width'] = $imgSize[0] ?? 0;
            $meta['height'] = $imgSize[1] ?? 0;

            if (isset($info['APP13'])) {
                $iptc = @iptcparse($info['APP13']);
                if (is_array($iptc)) {
                    if (!empty($iptc['2#005'][0])) {
                        $meta['title'] = trim($iptc['2#005'][0]);
                    } elseif (!empty($iptc['2#105'][0])) {
                        $meta['title'] = trim($iptc['2#105'][0]);
                    }
                    if (!empty($iptc['2#120'][0])) {
                        $meta['description'] = trim($iptc['2#120'][0]);
                    }
                }
            }
        }

        if (function_exists('exif_read_data')) {
            $exif = @exif_read_data($filePath);
            if (is_array($exif)) {
                if (isset($exif['GPSLatitude'], $exif['GPSLongitude'], $exif['GPSLatitudeRef'], $exif['GPSLongitudeRef'])) {
                    $lat = self::gpsToDecimal($exif['GPSLatitude'], $exif['GPSLatitudeRef']);
                    $lng = self::gpsToDecimal($exif['GPSLongitude'], $exif['GPSLongitudeRef']);
                    if ($lat !== null && $lng !== null) {
                        $meta['gps'] = [
                            'lat' => $lat,
                            'lng' => $lng,
                            'lon' => $lng,
                        ];
                    }
                }

                if (empty($meta['title']) && !empty($exif['ImageDescription'])) {
                    $meta['title'] = is_string($exif['ImageDescription']) ? trim($exif['ImageDescription']) : '';
                }
                if (empty($meta['title']) && !empty($exif['Title'])) {
                    $meta['title'] = is_string($exif['Title']) ? trim($exif['Title']) : '';
                }
                if (empty($meta['description']) && !empty($exif['UserComment'])) {
                    $comment = $exif['UserComment'];
                    if (is_string($comment)) {
                        $meta['description'] = trim(preg_replace('/^ASCII\x00\x00\x00/i', '', $comment));
                    }
                }

                if (!empty($exif['DateTimeOriginal'])) {
                    $meta['datetime'] = $exif['DateTimeOriginal'];
                } elseif (!empty($exif['DateTime'])) {
                    $meta['datetime'] = $exif['DateTime'];
                }

                $cameraParts = [];
                if (!empty($exif['Make'])) {
                    $cameraParts[] = trim($exif['Make']);
                }
                if (!empty($exif['Model'])) {
                    $cameraParts[] = trim($exif['Model']);
                }
                if ($cameraParts) {
                    $meta['camera'] = implode(' ', array_unique($cameraParts));
                }
            }
        }

        if (empty($meta['title'])) {
            $meta['title'] = pathinfo($filePath, PATHINFO_FILENAME);
        }

        return $meta;
    }

    /**
     * Converts EXIF GPS coordinates (degrees, minutes, seconds) into decimal degrees.
     *
     * @param array $coordinate
     * @param string $hemisphere
     * @return float|null
     */
    public static function gpsToDecimal($coordinate, string $hemisphere): ?float
    {
        if (!is_array($coordinate) || count($coordinate) < 3) {
            return null;
        }

        $degrees = self::gpsFractionToFloat($coordinate[0]);
        $minutes = self::gpsFractionToFloat($coordinate[1]);
        $seconds = self::gpsFractionToFloat($coordinate[2]);

        $decimal = $degrees + ($minutes / 60) + ($seconds / 3600);
        $hemisphere = strtoupper(trim($hemisphere));
        if ($hemisphere === 'S' || $hemisphere === 'W') {
            $decimal *= -1;
        }

        return round($decimal, 7);
    }

    /**
     * Converts a fraction string or number to float.
     *
     * @param mixed $fraction
     * @return float
     */
    private static function gpsFractionToFloat($fraction): float
    {
        if (is_numeric($fraction)) {
            return (float) $fraction;
        }
        if (is_string($fraction) && strpos($fraction, '/') !== false) {
            $parts = explode('/', $fraction);
            if (count($parts) === 2 && (float)$parts[1] != 0) {
                return (float)$parts[0] / (float)$parts[1];
            }
        }
        return (float) $fraction;
    }

    /**
     * Scans a directory (and optionally subdirectories) for image files and parses metadata.
     *
     * @param string $folderUuidOrPath UUID or relative folder path
     * @param string $rootDir Contao project root directory
     * @param string $lang Language for Contao tl_files metadata
     * @return array
     */
    public static function getImagesInFolder(string $folderUuidOrPath, string $rootDir, string $lang = 'de'): array
    {
        $dirRelPath = '';
        if (Validator::isUuid($folderUuidOrPath)) {
            $objFolder = FilesModel::findByUuid($folderUuidOrPath);
            if ($objFolder) {
                $dirRelPath = $objFolder->path;
            }
        } else {
            $dirRelPath = $folderUuidOrPath;
        }

        if (!$dirRelPath) {
            return [];
        }

        $fullDirPath = $rootDir . '/' . ltrim($dirRelPath, '/');
        if (!is_dir($fullDirPath)) {
            return [];
        }

        $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'tif', 'tiff'];
        $images = [];

        $files = @scandir($fullDirPath);
        if (!$files) {
            return [];
        }

        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            $filePath = $fullDirPath . '/' . $file;
            $relFilePath = ltrim($dirRelPath, '/') . '/' . $file;

            if (is_file($filePath)) {
                $ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
                if (in_array($ext, $allowedExtensions, true)) {
                    $meta = self::extractMetadata($filePath);

                    // Check Contao FilesModel metadata and custom coordinates if available
                    $objFileModel = FilesModel::findByPath($relFilePath);
                    if ($objFileModel) {
                        if (!empty($objFileModel->c4g_loc_geox) && !empty($objFileModel->c4g_loc_geoy)) {
                            $meta['gps'] = [
                                'lat' => (float) $objFileModel->c4g_loc_geoy,
                                'lng' => (float) $objFileModel->c4g_loc_geox,
                                'lon' => (float) $objFileModel->c4g_loc_geox,
                            ];
                        }
                        if ($objFileModel->meta) {
                            $contaoMeta = StringUtil::deserialize($objFileModel->meta);
                            if (is_array($contaoMeta)) {
                                $metaForLang = $contaoMeta[$lang] ?? reset($contaoMeta);
                                if (!empty($metaForLang['title'])) {
                                    $meta['title'] = $metaForLang['title'];
                                }
                                if (!empty($metaForLang['caption'])) {
                                    $meta['description'] = $metaForLang['caption'];
                                }
                            }
                        }
                    }

                    $images[] = [
                        'filename' => $file,
                        'path' => $relFilePath,
                        'fullPath' => $filePath,
                        'metadata' => $meta,
                    ];
                }
            }
        }

        return $images;
    }
}
