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

import React, { Component, Suspense } from "react";
// import {RouterInstructionsContainer} from "./c4g-router-instructions-container.jsx";
// import {RouterFeatureList} from "./c4g-router-feature-list.jsx";
import GPX from "ol/format/GPX";
import {toHumanDistance, toHumanTime} from "../c4g-router-time-conversions";
import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx";

const RouterInstructionsContainer = React.lazy(() => import('./c4g-router-instructions-container.jsx'));
const RouterFeatureList = React.lazy(() => import('./c4g-router-feature-list.jsx'));

export class RouterResultContainer extends Component {

  constructor(props) {
    super(props);

    this.clickControl = this.clickControl.bind(this);
    this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };
    window.c4gMapsHooks.hook_map_click = window.c4gMapsHooks.hook_map_click || [];
    let scrolltoElement = (clickEvent) => {
      let feature = this.props.mapController.map.forEachFeatureAtPixel(clickEvent.pixel,
          function (feature, layer) {
            return feature;
          }
      );
      if (feature && feature.get('tid')) {
        let zoomToId = feature.get('tid');
        this.props.setResultFeat(clickEvent);
        this.props.setActiveId(zoomToId);
      }
    };
    window.c4gMapsHooks.hook_map_click.push(scrolltoElement);
  }



  render() {
    let result = "";
    let time = "";
    let distance = "";
    let detour = "";
    let featureCount = "";
    if (this.props.routerInstructions && this.props.routerInstructions.instructions && this.props.mode === "route") {
      time = toHumanTime(this.props.routerInstructions.time);
      distance = toHumanDistance(this.props.routerInstructions.distance);
    } else if (this.props.featureList && this.props.mode === "area") {
      detour = this.props.detour;
      featureCount = this.props.featureList.features.length;
    }

    let routerHeaderContent = "";
    let printFunction = () => {
      let querySelector = this.props.resultMode === "instr" ? '.c4g-route-instructions-wrapper' : '.c4g-route-feature-wrapper';
      let prtContent = document.querySelector(querySelector).cloneNode(true);
      if (this.props.resultMode === "instr") {
        let fromAddress = this.props.router.state.fromAddress;
        let divFromAddress = document.createElement('div');
        let labelFromAddress = document.createElement('label');
        labelFromAddress.innerHTML = this.props.lang.ROUTER_FROM + ": ";
        let emFromAddress = document.createElement('em');
        emFromAddress.innerHTML = fromAddress;
        divFromAddress.appendChild(labelFromAddress);
        divFromAddress.appendChild(emFromAddress);
        divFromAddress.appendChild(document.createElement('em'));

        let toAddress = this.props.router.state.toAddress;
        let divToAddress = document.createElement('div');
        let labelToAddress = document.createElement('label');
        labelToAddress.innerHTML = this.props.lang.ROUTER_FROM + ": ";
        let emToAddress = document.createElement('em');
        emToAddress.innerHTML = toAddress;
        divToAddress.appendChild(labelToAddress);
        divToAddress.appendChild(emToAddress);
        divToAddress.appendChild(document.createElement('em'));

        prtContent.querySelector('.c4g-router-instructions-header').appendChild(divFromAddress);
        prtContent.querySelector('.c4g-router-instructions-header').appendChild(divToAddress);
      }

      prtContent.querySelector('.c4g-router-print').remove();
      let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    };
    if ((time && distance) && this.props.mode === "route") {

      routerHeaderContent = (
        <div className="c4g-router-instructions-header">
          <div className="c4g-router-route-time">
            <label>{this.props.lang.ROUTER_VIEW_LABEL_TIME}</label>
            <em>{time}</em>
          </div>
          <div className="c4g-router-route-distance">
            <label>{this.props.lang.ROUTER_VIEW_LABEL_DISTANCE}</label>
            <em>{distance}</em>
          </div>
          <button className={"c4g-router-download"} title={this.props.lang.ROUTER_DOWNLOAD} onMouseUp={()=>{this.exportGpx()}}/>
          <button className={"c4g-router-print"} title={this.props.lang.ROUTER_PRINT} onMouseUp={()=>{printFunction()}}/>
        </div>
      );
    } else if ((detour && featureCount) && this.props.mode === "area") {

      routerHeaderContent = (
        <div className="c4g-router-instructions-header">
          <div className="c4g-router-area-detour">
            <label>{this.props.lang.AREA_DETOUR}:</label>
            <em>{detour} km</em>
          </div>
          <div className="c4g-router-area-featurecount">
            <label>{this.props.lang.AREA_FEATURECOUNT}:</label>
            <em>{featureCount}</em>
          </div>
          <button className={"c4g-router-print"} onMouseUp={()=>{printFunction()}}/>
        </div>
      );
    }


    if ((this.props.resultMode === "instr" && this.props.routerInstructions && this.props.mode === "route")) {
      result = <Suspense fallback={<div>"loading.."</div>}>
          <RouterInstructionsContainer className={"c4g-route-instructions-wrapper"} mapController={this.props.mapController}
                                       routerInstructions={this.props.routerInstructions} routerWaySource={this.props.routerWaySource}
                                       routerHintSource={this.props.routerHintSource} open={this.props.open} header={routerHeaderContent}/>
        </Suspense>
    } else if (((this.props.resultMode === "feat" || this.props.mode === "area") || (!this.props.routerInstructions && this.props.featureList))) {
      result = <Suspense fallback={<div>"loading.."</div>}>
          <RouterFeatureList className={"c4g-route-feature-wrapper"} activeId={this.props.activeId} setActiveId={this.props.setActiveId}
                                  routeMode={this.props.mode} layerRoute={this.props.layerRoute} layerArea={this.props.layerArea}
                                  featureList={this.props.featureList} mapController={this.props.mapController} featureSource={this.props.featureSource}
                                  layerValueRoute={this.props.layerValueRoute} layerValueArea={this.props.layerValueArea} header={routerHeaderContent}/>
        </Suspense>
    }
    if (this.props.open) {
      return (
        <div className={this.props.className + (this.props.open ? " c4g-open" : " c4g-close")
        + (this.props.open ? " c4g-details-open" : "")}>
          {result}
        </div>
      );
    } else {
      return null;
    }
  }

  componentDidUpdate() {
    let className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
    let container = document.getElementsByClassName(className)[0];
    let controlContainer = document.querySelector(".c4g-router-panel.c4g-open");
    if (controlContainer) {
      controlContainer = controlContainer[0];
    }
    let mapContainer = document.querySelector(".c4g_map")[0];
    const scope = this;
    if (container) {
      if (controlContainer) {
        if (container.offsetHeight + controlContainer.offsetHeight + 84 > mapContainer.offsetHeight) {
          container.style.height = mapContainer.offsetHeight - controlContainer.offsetHeight;
        }
      }
    }

    if (this.props.mode === "area" && this.props.resultMode !== "feat") {
      this.props.router.setState({resultMode: "feat"});
    }
  }

  open() {
    this.props.setOpen(true);
  }

  close() {
    this.props.setOpen(false);
  }

  clickControl() {
    if (this.props.open) {
        this.close();
    } else {
        this.open();
    }
  }
  exportGpx() {
    let source = this.props.router.routerWaySource;
    let format = new GPX();
    if (source && source.getFeatures && source.getFeatures()) {
      let strExport = format.writeFeatures(source.getFeatures(), {
        featureProjection: "EPSG:3857",
        dataProjection: "EPSG:4326",
        decimals: 3
      });
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
      element.setAttribute('download', "route.gpx");

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
      console.log(strExport);
    }
  }

  slideInCollidingElements() {
    // override parent method
  }

  slideOutCollidingElements() {
    // override parent method
  }
}