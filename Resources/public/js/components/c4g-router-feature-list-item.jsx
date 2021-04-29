/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    ¯\_(ツ)_/¯
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import Polygon from "ol/geom";
import Point from "ol/geom";
import {cssConstants} from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {transform, toLonLat, fromLonLat, transformExtent} from "ol/proj";
import * as popupFunctionsDE from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de";
import * as popupFunctionsEN from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-en";
import {utils} from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils";


export class RouterFeatureListItem extends Component {

  constructor(props) {
    super(props);
    this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    this.clickFeature = this.clickFeature.bind(this);

  }
  clickFeature (event) {
    const scope = this;
    scope.props.setActiveId(scope.props.feature.id);
    scope.props.featureSource.forEachFeature((tmpFeature) => {
      let layer = undefined;
      let routerLayers = scope.props.mapController.data.routerLayers;
      if (scope.props.routeMode === "area") {
        layer = routerLayers[scope.props.layerArea][scope.props.layerValueArea].layerData;
      } else if (scope.props.routeMode === "route") {
        layer = routerLayers[scope.props.layerRoute][scope.props.layerValueRoute].layerData;
      }
      if (tmpFeature.get('tid') === scope.props.feature.id) {
        let clickStyleId = scope.props.mapController.data.clickLocstyle;
        if (clickStyleId) {
          if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId]) {
            scope.props.mapController.proxy.locationStyleController.loadLocationStyles([clickStyleId], {
              done: function () {
                let style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
                // check if feature is still clicked
                scope.mapSelectInteraction.getFeatures().forEach(function (elem, index, array) {
                  if (elem === tmpFeature) {
                    // feature is still clicked, style it accordingly
                    tmpFeature.setStyle(style);
                  }
                });
              }
            });
          } else {
            let style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
            tmpFeature.setStyle(style);
            if (tmpFeature.getGeometry().getType() == "Polygon") {
              scope.props.mapController.map.getView().fit(tmpFeature.getGeometry().getExtent());
            }
            else {
              scope.props.mapController.map.getView().setCenter(tmpFeature.getGeometry().getCoordinates());
            }
          }
        }

      } else {
        if (false && scope.bestFeatureIds.includes(tmpFeature.get('tid'))) {
          let locstyle = scope.props.mapController.data.priorityLocstyle;
          tmpFeature.setStyle(scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
        } else {
          tmpFeature.setStyle(scope.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
        }
      }
    });
    // refresh css classes
    jQuery(this).parent().children('li').each(function (index, element) {
      jQuery(element).addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
    });
    jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
    // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
  }

  render() {
    const scope = this;
    let currentFeature = null;
    this.props.featureSource.forEachFeature(function (feature) {
      if (feature.get('tid') === scope.props.feature.id) {
        currentFeature = feature;
      }
    });
    let featureEntryContent = "";
    let objHook = null;
    if (currentFeature) {
      if (this.props.type === "overpass") {
        if (currentFeature.get('locstyle')) {
          let styleId = currentFeature.get('locstyle');
          let styleSrc = '';
          let locstyle = this.props.mapController.proxy.locationStyleController.arrLocStyles[styleId];
          if (locstyle && locstyle.locStyleArr) {
            styleSrc = locstyle.locStyleArr.styletype === "cust_icon" ? locstyle.locStyleArr.icon_src : locstyle.locStyleArr.styletype === "cust_icon_svg" ? locstyle.locStyleArr.svgSrc : "";
          }
          featureEntryContent = this.popupFunctions.fnStandardInfoPopup(currentFeature, styleSrc);
        }
      } else if (this.props.type === "notOverpass") {
        if (this.props.feature && this.props.feature.popup) {
          featureEntryContent = this.props.feature.popup;
        }
      } else {
        let layerValue = this.props.routeMode === "route" ? this.props.layerValueRoute : this.props.layerValueArea;
        objHook =  {
          entry: "",
          feature: this.props.feature,
          // values: values,
          labels: ['name'],
          // router: scope,
          activeLayerValue: layerValue
        };
        utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, objHook);
        featureEntryContent = objHook.entry;
      }
      let element = {__html: featureEntryContent + "<br>"};
      return (
        <li ref={this.props.refProp} dangerouslySetInnerHTML={element} className={this.props.active ? "route-features-list-element c4g-active": "route-features-list-element c4g-inactive"} onMouseUp={this.clickFeature}/>
      );
    }
    return null;
  }
}