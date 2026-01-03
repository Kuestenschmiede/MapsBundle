/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {getLanguage} from "../c4g-maps-i18n";
import {Control} from "ol/control";
import {MeasuretoolsView} from "./c4g-measuretools-view.jsx";
import {Group, Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {utils} from "../c4g-maps-utils";

export default class Measuretools extends Component {

  constructor(props) {
    super(props);

    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = this.langConstants.CTRL_MEASURETOOLS;
      button.appendChild(span);
    }
    else {
      button.title = this.langConstants.CTRL_MEASURETOOLS;
    }
    element.className = "c4g-measuretools-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      let hidden = scope.props.mapController.measuretoolsContainer.className.includes('c4g-close');
      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        }
        else {
          jQuery(scope.props.mapController.measuretoolsContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    let index = mapController.arrComponents.findIndex(element => element.name === "measuretools");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.measuretools = control;
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.addMeasuredFeature = this.addMeasuredFeature.bind(this);
    this.modifyMeasuredFeature = this.modifyMeasuredFeature.bind(this);
    this.removeMeasuredFeature = this.removeMeasuredFeature.bind(this);
    this.incrementFeatureId = this.incrementFeatureId.bind(this);
    this.modes = ["select", "line", "polygon", "circle", "freehand"];

    this.state = {
      open: props.open || false,
      currentMode: "select",
      control: control,
      measuredFeatures: [],
      featureIdCtr: 0
    };
    this.init();
  }

  render() {
    const scope = this;
    let arrTooltips = {
      "select": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
      "line": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
      "polygon": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
      "circle": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
      "freehand": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
    };
    
    return (
      <div className={"c4g-measuretools-wrapper"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-measuretools-header"} headerClass={"c4g-measuretools-headline"} hideContainer={".c4g-measuretools-container"}
                    header={this.langConstants.MEASURETOOLS} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}>
          </Titlebar>
        </Suspense>
        <div className={"c4g-measuretools-mode-switcher"}>
          {this.modes.map(function(element, index) {
            return <button key={index} className={"c4g-measure-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive")}
                           onMouseUp={() => scope.setState({currentMode: element})} title={arrTooltips[element]}/>;
          })}
        </div>
        <MeasuretoolsView mode={"select"} measureTools={this} active={this.state.currentMode === "select" && this.state.open} featureId={this.state.featureIdCtr}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures} incrFeatId={this.incrementFeatureId}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController} removeFeature={this.removeMeasuredFeature}/>
        <MeasuretoolsView mode={"line"} measureTools={this} active={this.state.currentMode === "line" && this.state.open} featureId={this.state.featureIdCtr}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures} incrFeatId={this.incrementFeatureId}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController} removeFeature={this.removeMeasuredFeature}/>
        <MeasuretoolsView mode={"polygon"} measureTools={this} active={this.state.currentMode === "polygon" && this.state.open} featureId={this.state.featureIdCtr}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures} incrFeatId={this.incrementFeatureId}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController} removeFeature={this.removeMeasuredFeature}/>
        <MeasuretoolsView mode={"circle"} measureTools={this} active={this.state.currentMode === "circle" && this.state.open} featureId={this.state.featureIdCtr}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures} incrFeatId={this.incrementFeatureId}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController} removeFeature={this.removeMeasuredFeature}/>
        <MeasuretoolsView mode={"freehand"} measureTools={this} active={this.state.currentMode === "freehand" && this.state.open} featureId={this.state.featureIdCtr}
                          lang={this.langConstants} addFeature={this.addMeasuredFeature} features={this.state.measuredFeatures} incrFeatId={this.incrementFeatureId}
                          modifyFeature={this.modifyMeasuredFeature} mapController={this.props.mapController} removeFeature={this.removeMeasuredFeature}/>
      </div>
    );
  }

  incrementFeatureId() {
    this.setState({featureIdCtr: this.state.featureIdCtr + 1});
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

  removeMeasuredFeature(id) {
    let features = this.state.measuredFeatures;
    for (let i = 0; i < features.length; i++) {
      if (features[i].id === id) {
        features.splice(i, 1);
        break;
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.open && !this.state.open) {
      // measuretools were closed
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close");
      this.props.mapController.map.removeLayer(this.measureLayerGroup);
      this.removeTooltips();
      this.removedOnce = true;
    } else if (!prevState.open && this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close");
      if (this.removedOnce) {
        try {
          this.props.mapController.map.addLayer(this.measureLayerGroup);
        } catch(e) {
          console.warn(e);
        }
      }
      this.addTooltips();
    }
    if (this.props.mapController.data.caching) {
      let panelVal = utils.getValue('panel');
      if (panelVal === "Measuretools" && !this.state.open) {
        utils.storeValue('panel', "");
      }
      else if (panelVal !== "Measuretools" && this.state.open) {
        utils.storeValue('panel', "Measuretools")
      }
    }
  }

  removeTooltips() {
    let arrLayers = this.measureLayerGroup.getLayersArray();
    for (let i = 0; i < arrLayers.length; i++) {
      let layer = arrLayers[i];
      let arrFeatures = layer.getSource().getFeatures();
      if (arrFeatures) {
        for (let j = 0; j < arrFeatures.length; j++) {
          let feature = arrFeatures[j];
          feature.get('tooltip').hide();
        }
      }
    }
  }

  addTooltips() {
    let arrLayers = this.measureLayerGroup.getLayersArray();
    for (let i = 0; i < arrLayers.length; i++) {
      let layer = arrLayers[i];
      let arrFeatures = layer.getSource().getFeatures();
      if (arrFeatures) {
        for (let j = 0; j < arrFeatures.length; j++) {
          let feature = arrFeatures[j];
          feature.get('tooltip').show();
        }
      }
    }
  }

}