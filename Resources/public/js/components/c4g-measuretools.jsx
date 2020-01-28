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

import React, { Component } from "react";
import {Titlebar} from "./c4g-titlebar.jsx";
import {getLanguage} from "../c4g-maps-i18n";
import {Control} from "ol/control";
import {MeasuretoolsView} from "./c4g-measuretools-view.jsx";
import {Group, Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";

export class Measuretools extends Component {

  constructor(props) {
    super(props);

    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    button.title = "Messwerkzeuge öffnen/schließen"; // TODO i18n
    element.className = "c4g-measuretools-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.measuretools = control;
    mapController.map.addControl(control);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.addMeasuredFeature = this.addMeasuredFeature.bind(this);
    this.modifyMeasuredFeature = this.modifyMeasuredFeature.bind(this);
    this.modes = ["select", "line", "polygon", "circle", "freehand"];

    this.state = {
      open: false,
      currentMode: "select",
      control: control,
      measuredFeatures: []
    };
    this.init();
  }

  render() {
    const scope = this;
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close");
    }
    return (
      <div className={"c4g-measuretools-wrapper"}>
        <Titlebar wrapperClass={"c4g-measuretools-header"} headerClass={"c4g-measuretools-headline"}
                  header={"Messwerkzeuge"} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close}>

        </Titlebar>
        <div className={"c4g-measuretools-mode-switcher"}>
          {this.modes.map(function(element, index) {
            return <button key={index} className={"c4g-measure-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive")}
                           onMouseUp={() => scope.setState({currentMode: element})} />;
          })}
        </div>
        <MeasuretoolsView mode={"select"} measureTools={this} active={this.state.currentMode === "select"}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController}/>
        <MeasuretoolsView mode={"line"} measureTools={this} active={this.state.currentMode === "line"}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController}/>
        <MeasuretoolsView mode={"polygon"} measureTools={this} active={this.state.currentMode === "polygon"}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController}/>
        <MeasuretoolsView mode={"circle"} measureTools={this} active={this.state.currentMode === "circle"}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController}/>
        <MeasuretoolsView mode={"freehand"} measureTools={this} active={this.state.currentMode === "freehand"}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController}/>
      </div>
    );
  }

  addMeasuredFeature(feature) {
    let features = this.state.measuredFeatures;
    features.push(feature);
    this.setState({measuredFeatures: features});
  }

  modifyMeasuredFeature(newFeature, id) {
    let features = this.state.measuredFeatures;
    for (let i = 0; i < features.length; i++) {
      if (features[i].id === id) {
        features[i] = newFeature;
      }
    }
    this.setState({measuredFeatures: features});
  }

  setCurrentMode(newMode) {
    if (this.modes.includes(newMode)) {
      this.setState({currentMode: newMode});
    } else {
      console.warn("The specified mode is not available");
    }
  }

  open() {
    this.setState({open: true});
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }

  /**
   * Executed when the panel will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */
  init() {
    // Add measure layers
    this.measureLineLayer = new Vector({source: new VectorSource()});
    this.measurePolygonLayer = new Vector({source: new VectorSource()});
    this.measureCircleLayer = new Vector({source: new VectorSource()});
    this.measureFreehandLayer = new Vector({source: new VectorSource()});

    this.measureLayerGroup = new Group({
      layers: new Collection([
        this.measureFreehandLayer,
        this.measureCircleLayer,
        this.measurePolygonLayer,
        this.measureLineLayer,
      ]),
      visible: true
    });
    this.props.mapController.map.addLayer(this.measureLayerGroup);

    // this.spinner.hide();
    return true;
  } // end of "init()"

}