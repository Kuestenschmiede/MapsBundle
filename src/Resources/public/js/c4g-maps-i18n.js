/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";

export function getLanguage(mapData) {
  if (mapData && mapData.lang === "de") {
    return langConstantsGerman;
  } else if (mapData && mapData.lang === "en") {
    return langConstantsEnglish;
  } else {
    // fallback
    return langConstantsEnglish;
  }
}
