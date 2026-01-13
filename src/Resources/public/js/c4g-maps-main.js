/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

// import {MapController} from "components/c4g-maps.jsx";

import {utils} from "./c4g-maps-utils";

const MapController = React.lazy(() => import("./components/c4g-maps.jsx"));
const ConsentBanner = React.lazy(() => import("./components/c4g-consent-banner.jsx"));
import {getLanguage} from "./c4g-maps-i18n";
import ReactDOM from "react-dom";
import React, {Suspense} from "react";
import {toLonLat} from 'ol/proj';
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
        } else if (typeof window.CCM !== "undefined") {
          window.addEventListener("ccm19EmbeddingAccepted", (event) => {
            console.log(event);
          });
        }
        console.log(window);
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
  let renderMap = true;
  for (let key in mapData) {
    if (mapData.hasOwnProperty(key)) {
      renderMap = true;
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

          // handle ccm19 first since it requires different handling and uses their own cookie widget
          if (typeof window.CCM !== "undefined" && mapData[key]['cookie'].enableCCM19) {
            let acceptedCookies = window.CCM.acceptedCookies;
            if (acceptedCookies.includes(mapData[key]['cookie']['name'])) {
              cookie = true;
              document.cookie = mapData[key]['cookie']['name'] + "=1; Secure; Session";
            } else {
              window.addEventListener("ccm19EmbeddingAccepted", (event) => {
                document.cookie = mapData[key]['cookie']['name'] + "=1; Secure; Session";
                window.initMap(mapData[key]);
              });
              renderMap = false;

              ReactDOM.render(
                  <Suspense fallback={<div>Loading...</div>}>
                    <ConsentBanner mapData={mapData[key]} hintOnly={true}/>
                    <MapController mapData={mapData[key]}/>
                  </Suspense>,
                  jQuery("#c4g-map-container-" + mapData[key].mapId)[0]
              );

              return null;
            }
          } else {
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
            }

            if (!cookie && !mapData[key]['cookie'].enableCCM19) {
              ReactDOM.render(
                  <Suspense fallback={<div>Loading...</div>}>
                    <ConsentBanner mapData={mapData[key]}/>
                    <MapController mapData={mapData[key]}/>
                  </Suspense>,
                  jQuery("#c4g-map-container-" + mapData[key].mapId)[0]
              );
              renderMap = false;
            }
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

        if (renderMap) {
          console.log("renderMap true");
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
                  console.log("map rendered");
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
  }
};

window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.proxy_appendPopup = window.c4gMapsHooks.proxy_appendPopup || [];
window.c4gMapsHooks.proxy_appendPopup.push(function(objPopup) {
  let feature = objPopup.popup.feature;
  let featureName = feature.get('name');
  let layerUid = objPopup.popup.layer.get('ol_uid') || objPopup.popup.layer.ol_uid;
  let featureId = feature.get('ol_uid') || feature.ol_uid;
  if (layerUid || featureId) {
    let layer = null;
    let layerId = null;
    let checkChilds = false;

    let layers = objPopup.mapController.proxy.layerController.arrLayers || [];
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].vectorLayer) {
        if (layers[i].vectorLayer && layers[i].vectorLayer.get('ol_uid') === layerUid) {
          layerId = layers[i].id;
          break;
        } else if (layers[i].vectorLayer && layers[i].vectorLayer.ol_uid === layerUid) {
          layerId = layers[i].id;
          break;
        }
      } else if (layers[i].features && layers[i].features.length > 0) {
        for (let j = 0; j < layers[i].features.length; j++) {
          if (layers[i].features[j].get('ol_uid') === featureId) {
            layerId = layers[i].id;
            break;
          } else if (layers[i].features[j].ol_uid === featureId) {
            layerId = layers[i].id;
            break;
          }
        }
      }

    }

    if (layerId === null) {

      const searchLayerId = (layer) => {
        let layerId = null;
        // check if layer has features
        if (layer.features.length > 0) {
          for (let k = 0; k < layer.features.length; k++) {
            if (layer.features[k].ol_uid === featureId) {
              // match found, exit loop
              layerId = layer.id;
              break;
            }
            if (layer.features[k].get('ol_uid') === featureId) {
              // match found, exit loop
              layerId = layer.id;
              break;
            }
          }
        }

        if (layerId) {
          return layerId;
        }

        if (layer.childs.length > 0) {
          for (let i = 0; i < layer.childs.length; i++) {
            layerId = searchLayerId(layer.childs[i]);
            if (layerId) {
              break;
            }
          }
        }

        return layerId;
      }; //

      // traverse layer tree and look for layerId match
      for (let i = 0; i < layers.length; i++) {
        layerId = searchLayerId(layers[i]);
        if (layerId) {
          checkChilds = true;
          break;
        }
      }
    }

    let objLayers = objPopup.mapController.proxy.layerController.objLayers;
    if (!objLayers) {
      // shouldn't happen
      return;
    }

    const searchLayer = (layerId, layers) => {
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].id === layerId) {
          return layers[i];
        }
        if (layers[i].childs && layers[i].childs.length > 0) {
          let res = searchLayer(layerId, layers[i].childs);
          if (res !== null) {
            return res;
          }
        }
      }
      return null;
    }; //

    if (checkChilds) {
      layer = searchLayer(layerId, objLayers);
    } else {
      for (let i = 0; i < objLayers.length; i++) {
        if (objLayers[i].id === layerId) {
          layer = objLayers[i];
          break;
        }
      }
    }

    if (layer && layer.popup_share) {

      let destUrl = "";
      let methods = layer.popup_share.methods || ['whatsapp', 'copylink', 'email'];
      let destType = layer.popup_share.destType || "google_map";
      let addCoords = true;
      let mapData = objPopup.mapController.data;
      let permalink = [];

      let geom = feature.getGeometry();
      let coords;
      if (addCoords) {
        if (geom.getType() === "Point") {
          coords = geom.getCoordinates();
          coords = toLonLat(coords);
        } else if (geom.getType() === "Circle") {
          coords = geom.getCenter();
          coords = toLonLat(coords);
        }
      }

      switch (destType) {
        case "google_map":
          destUrl = layer.popup_share.baseUrl || "https://www.google.com/maps/dir/";
          break;
        case "con4gis_map":
          permalink.push(coords[0]);
          permalink.push(coords[1]);
          permalink.push(mapData.center.zoom);
          utils.setUrlParam(permalink.join('/'), mapData.permalink.get_parameter, true);
          destUrl = window.location;
          addCoords = false; // since we do it already in the permalink
          break;
        case "con4gis_map_external":
          permalink.push(coords[0]);
          permalink.push(coords[1]);
          permalink.push(mapData.center.zoom);
          destUrl = layer.popup_share.baseUrl + "#" + permalink.join('/');
          addCoords = false; // since we do it already in the permalink
          break;
        case "osm":
        case "osm_routing":
          destUrl = layer.popup_share.baseUrl + "?lon=" + coords[1] + "&lat=" + coords[0];
          addCoords = false;
          break;

        default:
          destUrl = layer.popup_share.baseUrl;
      }

      if (addCoords) {
        destUrl += coords[1] + "," + coords[0] + "";
      }

      let buttonNodes = document.createElement('div');
      buttonNodes.classList.add("c4g-popup-share-button-wrapper");
      let additionalMessage = layer.popup_share.additionalMessage || "";
      let destLink = `<a href='${destUrl}'>${destUrl}</a>`;

      for (let i = 0; i < methods.length; i++) {
        let node = null;

        switch (methods[i]) {
          case "whatsapp":
            let waUrl = "https://api.whatsapp.com/send?text=" + additionalMessage + " " + encodeURIComponent(destUrl);
            node = document.createElement('a');
            node.href = waUrl;
            node.classList.add("btn", "btn-primary", "whatsapp");
            node.innerText = "Auf WhatsApp teilen";
            break;
          case "email":
            let mailUrl = "mailto:?subject=&body=" + additionalMessage + " " + encodeURIComponent(destUrl);
            node = document.createElement('a');
            node.href = mailUrl;
            node.classList.add("btn", "btn-primary", "email");
            node.innerText = "Per E-Mail senden";
            break;
          case "copylink":
            node = document.createElement('a');
            node.innerText = "Link kopieren";
            node.href = "#";
            node.classList.add("btn", "btn-primary", "clipboard");
            node.id = "copylink-button";
            break;
        }

        buttonNodes.appendChild(node);

      }

      objPopup.callback = () => {
        let copyButton = document.querySelector("#copylink-button");
        if (copyButton) {
          copyButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (navigator.clipboard) {
              navigator.clipboard.writeText(destUrl).then(() => {
                console.log("copied to clipboard!");
              });
            } else {
              console.warn("clipboard not supported in this context...");
            }
          });
        }
      }
      objPopup.div.appendChild(buttonNodes);
    }
  }
});

jQuery(document).ready(function() {
  if (typeof window.mapData !== "undefined") {
    window.initMaps(window.mapData);
  }
});

