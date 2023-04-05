/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, { Component } from "react";
import Polygon from "ol/geom";
import Point from "ol/geom";
import {cssConstants} from "./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-constant";
import {transform, toLonLat, fromLonLat, transformExtent} from "ol/proj";
import * as popupFunctionsDE from "./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de";
import * as popupFunctionsEN from "./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en";
import {utils} from "./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils";


export class RouterFeatureListItem extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    this.clickFeature = this.clickFeature.bind(this);
    let element = null;
    if (props.layerValueRoute || props.layerValueArea) {
      element = this.getElement();
    }
    this.state = {
      element: element
    };
  }
  clickFeature (event) {
    const scope = this;
    scope.props.setActiveId(scope.props.feature.id);
    let feature = scope.props.featureSource.getFeatureById(scope.props.feature.id)
    let extent = feature.getGeometry().getExtent();
    let width = jQuery(".c4g-sideboard.c4g-open").css('width');
    if (width) {
      width = width.split(".");
      width = Array.isArray(width) ? width[0] : width;
      width = parseInt(width) +  50;
    }
    else {
      width = 50;
    }
    let padding = [50, width, 50, 50];
    if (!scope.props.mapController.proxy.mapData.preventZoomResults) {
      scope.props.mapController.map.getView().fit(extent, {
        padding: padding,
        maxZoom: scope.props.mapController.map.getView().getZoom || 16
      });
    }
    else {
      scope.props.mapController.map.getView().setCenter([extent[0], extent[1]])
    }
    // refresh css classes
    jQuery(this).parent().children('li').each(function (index, element) {
      jQuery(element).addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
    });
    jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
    // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.element ||
        this.props.layerValueRoute !== prevProps.layerValueRoute ||
        this.props.layerValueArea !== prevProps.layerValueArea){ //only get popup if not already set or layer changes
      let element = this.getElement();
      if (element) {
        this.setState({
          element: this.getElement()
        })
      }
    }

  }
  getElement () {
    const scope = this;
    let currentFeature = null;
    if (this.props.featureSource && this.props.featureSource.forEachFeature) {
      this.props.featureSource.forEachFeature(function (feature) {
        if (feature.get('tid') === scope.props.feature.id) {
          currentFeature = feature;
        }
      });
    }
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
          id: this.props.counter,
          feature: this.props.feature,
          // values: values,
          labels: ['name'],
          activeLayerValue: layerValue
        };
        utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, objHook);
        featureEntryContent = objHook.entry;
      }
      let element = {__html: featureEntryContent + "<br>"};
      return element;
    }
  }
  render() {
    if (this.state.element) {
      return (
          <li ref={this.props.refProp} dangerouslySetInnerHTML={this.state.element} className={this.props.active ? "route-features-list-element c4g-active": "route-features-list-element c4g-inactive"} onMouseUp={this.clickFeature}/>
      );
    }
    return null;
  }
}