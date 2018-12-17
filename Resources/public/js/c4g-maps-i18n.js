/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
import {langConstantsGerman} from "./c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./c4g-maps-constant-i18n-en";

let language = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    language = langConstantsGerman;
  } else if (mapData.lang === "en") {
    language = langConstantsEnglish;
  } else {
    // fallback
    language = langConstantsEnglish;
  }
} else {
  language = langConstantsEnglish;
}

export let langConstants = language;
