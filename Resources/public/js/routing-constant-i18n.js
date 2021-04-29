/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import {routingConstantsGerman} from "./routing-constant-i18n-de";
import {routingConstantsEnglish} from "./routing-constant-i18n-en";

export function getLanguage(mapData) {
  if (typeof mapData !== 'undefined') {
    switch (mapData.lang) {
      case "de":
        return routingConstantsGerman;
      case "en":
        return routingConstantsEnglish;
      default:
        return routingConstantsEnglish;
    }
  }
}