/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";
import {projectEditorLang} from "./c4g-editor-i18n-de";
let mapsLang = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    mapsLang = langConstantsGerman;
  } else if (mapData.lang === "en") {
    mapsLang = langConstantsEnglish;
  } else {
    // fallback
    mapsLang = langConstantsGerman;
  }
}

export function getEditorLanguage(mapData) {
  if (mapData.lang === "de") {
    return projectEditorLang;
  } else if (mapData.lang === "en") {
    return projectEditorLang;
  } else {
    // fallback
    return projectEditorLang;
  }
}
export var langConstants = jQuery.extend(mapsLang, projectEditorLang);