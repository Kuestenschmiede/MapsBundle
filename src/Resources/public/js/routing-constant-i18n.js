/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {routingConstantsGerman} from "./routing-constant-i18n-de";
import {routingConstantsEnglish} from "./routing-constant-i18n-en";
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";
export function getLanguage(mapData) {
  if (typeof mapData !== 'undefined') {
    switch (mapData.lang) {
      case "de":
        return jQuery.extend(routingConstantsGerman, langConstantsGerman);
      case "en":
      default:
        return jQuery.extend(routingConstantsEnglish, langConstantsEnglish);
    }
  }
}