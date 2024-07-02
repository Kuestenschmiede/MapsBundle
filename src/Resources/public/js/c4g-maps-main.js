/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

// import {MapController} from "components/c4g-maps.jsx";

const MapController = React.lazy(() => import("./components/c4g-maps.jsx"));
const ConsentBanner = React.lazy(() => import("./components/c4g-consent-banner.jsx"));
import {getLanguage} from "./c4g-maps-i18n";
import ReactDOM from "react-dom";
import React, {Suspense} from "react";
import 'elm-pep';

window.initMap = function(mapData) {
  let mapDiv = null;
  if (mapData.mapDiv) {
    mapDiv = document.querySelector("#" + mapData.mapDiv);
  }
  if (!mapDiv) {
    mapDiv = jQuery("#c4g_map_" + mapData.mapId)[0];
  }

  if (mapDiv) {
    if (jQuery(mapDiv).find("div.ol-viewport")){
      let viewport = jQuery(mapDiv).find("div.ol-viewport");
      viewport.remove();
      $('*[class^="c4g-external"]').empty();
    }
    if (mapData["cookie"]) {
      let cookie = false;
      let arrCoookies = document.cookie.split(";");
      for (let i in arrCoookies) {
        if (arrCoookies.hasOwnProperty(i)) {
          if (arrCoookies[i].indexOf(mapData["cookie"]["name"]) > -1) { //the cookies exists
            if (!mapData["cookie"]["value"] || arrCoookies[i].indexOf(mapData["cookie"]["value"]) > -1) { //no value provided or matching value
              cookie = true;
            }
          }
        }
      }
      if (!cookie) {
        if (typeof klaro !== "undefined" && klaro.getManager && klaro.getManager()) {
          let manager = klaro.getManager();
          let watcher = {
            update: (watcher, action, consentStatus) => {
              let cookie = false;
              let arrCoookies = document.cookie.split(";");
              for (let i in arrCoookies) {
                if (arrCoookies.hasOwnProperty(i)) {
                  if (arrCoookies[i].indexOf(mapData["cookie"]["name"]) > -1) { //the cookies exists
                    if (!mapData["cookie"]["value"] || arrCoookies[i].indexOf(mapData["cookie"]["value"]) > -1) { //no value provided or matching value
                      cookie = true;
                    }
                  }
                }
              }
              if (cookie) {
                window.initMap(mapData);
              }
            }
          }
          manager.watch(watcher);
        }
        else if (typeof HofffConsentManager !== "undefined") {
          HofffConsentManager.addEventListener('consent:accepted', function (event) {
            let cookie = false;
            let arrCoookies = document.cookie.split(";");
            for (let i in arrCoookies) {
              if (arrCoookies.hasOwnProperty(i)) {
                if (arrCoookies[i].indexOf(mapData["cookie"]["name"]) > -1) { //the cookies exists
                  if (!mapData["cookie"]["value"] || arrCoookies[i].indexOf(mapData["cookie"]["value"]) > -1) { //no value provided or matching value
                    cookie = true;
                  }
                }
              }
            }
            if (cookie) {
              window.initMap(mapData);
            }
          });
        }
        return ReactDOM.render(
            <Suspense fallback={<div>Loading...</div>}>
              <ConsentBanner mapData={mapData}/>
            </Suspense>,
            jQuery("#c4g-map-container-" + mapData.mapId)[0]
        );
      }
    }
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          return ReactDOM.render(
              <Suspense fallback={<div>Loading...</div>}>
                <MapController mapData={mapData}/>
              </Suspense>,
              jQuery("#c4g-map-container-" + mapData.mapId)[0]
          );
        }
      });
    });
    observer.observe(mapDiv);

  }
};

window.initMaps = function(mapData) {
  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      let mapDiv;
      if (mapData[key].mapDiv) {
        mapDiv = jQuery(mapData[key].mapDiv)[0] || jQuery("#" + mapData[key].mapDiv)[0] || jQuery( "." + mapData[key].mapDiv)[0]
      }
      if (!mapDiv) {
        mapDiv = jQuery("#c4g_map_" + mapData[key].mapId)[0];
      }
      if (mapDiv) {
        if (mapData[key]["cookie"]) {
          let cookie = false;
          let arrCoookies = document.cookie.split(";");
          for (let i in arrCoookies) {
            if (arrCoookies.hasOwnProperty(i)) {
              if (arrCoookies[i].indexOf(mapData[key]["cookie"]["name"]) > -1) { //the cookies exists
                if (!mapData[key]["cookie"]["value"] || arrCoookies[i].indexOf(mapData[key]["cookie"]["value"]) > -1) { //no value provided or matching value
                  cookie = true;
                }
              }
            }
          }
          if (!cookie) {
            if (typeof klaro !== "undefined" && klaro.getManager && klaro.getManager()) {
              let manager = klaro.getManager();
              let watcher = {
                update: (watcher, action, consentStatus) => {
                  let cookie = false;
                  let arrCoookies = document.cookie.split(";");
                  for (let i in arrCoookies) {
                    if (arrCoookies.hasOwnProperty(i)) {
                      if (arrCoookies[i].indexOf(mapData[key]["cookie"]["name"]) > -1) { //the cookies exists
                        if (!mapData[key]["cookie"]["value"] || arrCoookies[i].indexOf(mapData[key]["cookie"]["value"]) > -1) { //no value provided or matching value
                          cookie = true;
                        }
                      }
                    }
                  }
                  if (cookie) {
                    window.initMap(mapData[key]);
                  }
                }
              }
              manager.watch(watcher);
            }
            else if (typeof HofffConsentManager !== "undefined") {
              HofffConsentManager.addEventListener('consent:accepted', function (event) {
                let cookie = false;
                let arrCoookies = document.cookie.split(";");
                for (let i in arrCoookies) {
                  if (arrCoookies.hasOwnProperty(i)) {
                    if (arrCoookies[i].indexOf(mapData[key]["cookie"]["name"]) > -1) { //the cookies exists
                      if (!mapData[key]["cookie"]["value"] || arrCoookies[i].indexOf(mapData[key]["cookie"]["value"]) > -1) { //no value provided or matching value
                        cookie = true;
                      }
                    }
                  }
                }
                if (cookie) {
                  window.initMap(mapData[key]);
                }
              });
            }
            else if (typeof cookiebar !== "undefined") {
              const language = getLanguage(mapData[key]);
              cookiebar.addModule(parseInt(mapData[key]["cookie"]["value"]), () => {
                mapData[key]['cookie'] = false;
                window.initMap(mapData[key])
              }, {
                selector: "#c4g-map-container-" + mapData[key].mapId,
                message: mapData[key]['cookie']['info'],
                button: {
                  show: true,                 // Extends the output by a confirmation button,
                  text: language.ACCEPT, // Button text
                  type: 'button',             // Button type
                }
              });
              return null;
            }
            return ReactDOM.render(
                <Suspense fallback={<div>Loading...</div>}>
                  <ConsentBanner mapData={mapData[key]}/>
                  <MapController mapData={mapData[key]}/>
                </Suspense>,
                jQuery("#c4g-map-container-" + mapData[key].mapId)[0]
            );
          }
        }

        mapData[key].renderAsObserver = true;

        if (Object.keys(mapData).length > 1) {
          // multiple maps
          // if (Object.keys(mapData)[0] === key) {
          //   mapData[key].renderAsObserver = true;
          // } else {
          //   mapData[key].renderAsObserver = false;
          // }
          // TODO this should be true for optimal page performance
          // TODO that leads to errors with certain configurations though
          mapData[key].renderAsObserver = false;
        }

        if (mapData[key].renderAsObserver) {
          let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.intersectionRatio > 0) {
                ReactDOM.render(
                    <Suspense fallback={<div>Loading...</div>}>
                      <MapController mapData={mapData[key]}/>
                    </Suspense>,
                    entry.target
                );
              }
            });

          });
          observer.observe(mapDiv);
        } else {
          ReactDOM.render(
              <Suspense fallback={<div>Loading...</div>}>
                <MapController mapData={mapData[key]}/>
              </Suspense>,
              document.querySelector("#c4g-map-container-" + mapData[key].mapId)
          );
        }
      }
    }
  }
};
jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

