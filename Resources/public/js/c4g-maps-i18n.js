/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";

export function getLanguage(mapData) {
  if (mapData.lang === "de") {
    return langConstantsGerman;
  } else if (mapData.lang === "en") {
    return langConstantsEnglish;
  } else {
    // fallback
    return langConstantsEnglish;
  }
}
