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
