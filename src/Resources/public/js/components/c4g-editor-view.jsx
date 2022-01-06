/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import React, { Component } from "react";
import {Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {GeoJSON} from "ol/format";
import {Collection} from "ol";
import {Point, LineString, Polygon, Circle} from 'ol/geom'
import {Draw, Select, Modify} from "ol/interaction";
import {Feature} from "ol";
import {C4gStarboardStyle} from "./c4g-starboard-style.jsx";
import {C4gPopupController} from "./../c4g-popup-controller";
import {utils} from "../c4g-maps-utils";


export default class EditorView extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.state = {
      freehand: false,
      selectedFeature: false,
      features: "[]",
      activeElement: props.elements[0] ? props.elements[0].id : 0,
      activeStyle: props.elements[0] ? props.elements[0].styleId : 0,
      selectMode: "modify"
    };
    this.interaction = null;
    this.changeJSON = this.changeJSON.bind(this);
    this.resetInteraction = this.resetInteraction.bind(this);
  }

  render() {
    if (this.props.mode !== "select" && this.props.active) {
      this.resetInteraction();
      let geometry;
      switch(this.props.mode) {
        case "Point":
          geometry = new Point(0,0);
          break
        case "LineString":
          geometry = new LineString([[0,0], [1,1]]);
          break;
        case "Polygon":
          geometry = new Polygon([[0,0], [1,1]])
      }
      let feature = new Feature(geometry);
      feature.set('locstyle', this.state.activeStyle)
      this.interaction = new Draw({
        // features: this.props.features,
        source: this.props.editorLayer.getSource(),
        type: this.props.mode,
        stopClick: false,
        snapTolerance: 0,
        style: this.props.styleFunction(feature),
        freehand: this.state.freehand
      });
      this.interaction.on('drawend',
        (event) => {
          event.feature.set('editorId', this.props.editorId);
          event.feature.set('locstyle', this.state.activeStyle);
          event.feature.set('elementId', this.state.activeElement);
          let geojson;
          if (this.props.mode === "Circle") { //turn Circle into valid GeoJSON
            let geometry = event.feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");
            let center = geometry.getCenter();
            let radius = event.feature.getGeometry().getRadius();
            geojson = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              properties: {
                editorId: this.props.editorId,
                elementId: this.state.activeElement,
                locstyle: this.state.activeStyle,
                radius: radius
              }
            }
          }
          else {
            geojson = new GeoJSON().writeFeatureObject(event.feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }
          this.props.addFeature(geojson)
          this.props.countEditorId();
        }
      );
      this.props.mapController.map.addInteraction(this.interaction);
    } else if (this.props.mode === "select" && this.props.active) {
      this.resetInteraction();
      this.interaction = [];
      this.interaction.push(new Select({
        layers: [this.props.editorLayer],
        hitTolerance: 20
      }));
      this.interaction.push(new Modify({
        features: this.state.selectedFeature ? new Collection([this.state.selectedFeature]) : new Collection([new Feature()]),
        // source: this.props.editorLayer.getSource(),
        pixelTolerance: 20
      }));
      this.interaction[0].on('select', (e) => {
        let feature = e.selected[0];
        this.setState({selectedFeature: feature});
      });
      this.interaction[1].on('modifyend', (e) => {
        let feature = e.features.getArray()[0];
        let geojson = new GeoJSON().writeFeatureObject(feature, {
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857"
        })
        this.props.modifyFeature(geojson);
      });
      this.props.mapController.map.addInteraction(this.interaction[0]);
      this.props.mapController.map.addInteraction(this.interaction[1]);

    }
    else {
      this.resetInteraction();
    }
    let elements = null;
    if (this.props.elements && this.props.elements.length > 1) {
      elements = this.props.elements.map((element) => {
        let color, styleTriggerLabel;
        let locstyle = this.props.styleData.arrLocStyles[element.styleId];
        let styleData = locstyle.locStyleArr;
        let styleType = styleData ? styleData.styletype : "default";
        if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
          styleTriggerLabel = <C4gStarboardStyle tooltip={element.name} styleData={this.props.styleData} styleId={element.styleId}/>
        } else {
          let stylor = locstyle.style && locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326") ? locstyle.style(new Feature({geometry: new Point(0,0)}), "EPSG:4326"): null;
          let featureStyle = Array.isArray(stylor) ? stylor[0]: stylor;
          if (featureStyle && featureStyle.getFill() && featureStyle.getStroke()) {
            color = featureStyle.getFill().getColor();
          } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
            color = utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
          }

          styleTriggerLabel = <span title={element.name} className={"c4g-editor-locstyle"} style={{
            "backgroundColor" : color
          }}/>;
        }


        return (<button key={element.id} style={{height: "32px", width: "32px"}}
                        onMouseUp={() =>{this.setState({activeElement: element.id, activeStyle: element.styleId})}}>
          {styleTriggerLabel}
        </button>)
      });


    }
    let customButton = null;
    if ("LineStringPolygon".includes(this.props.mode)) {
      let freehandClass = "c4g-editor-view ";
      freehandClass += this.state.freehand ? "c4g-active" : "c4g-inactive";
      customButton = (<a className={freehandClass} title={this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND} onMouseUp={() => {this.changeFreehand()}}>{this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND}</a>);
    }
    let arrFormEditorVars = [];
    if (this.state.selectedFeature && this.props.mode === "select") {
      customButton = (<div className={"c4g-editor-mode-switcher"}>
        <button title={this.props.lang.EDITOR_FEATURE_DELETE} className={"c4g-editor-feature-delete " + (this.state.selectMode === "remove" ? "c4g-active": "c4g-inactive")} onMouseUp={() => {this.removeActiveFeature()}}/>
      </div>);
      for (let i in this.props.editorVars) {
        if (this.props.editorVars.hasOwnProperty(i)) {
          let editorVar = this.props.editorVars[i];
          if (editorVar.caption && editorVar.key) {
            let value = this.state.selectedFeature.get(editorVar.key) ? this.state.selectedFeature.get(editorVar.key) : "";
            arrFormEditorVars.push(
                <form className={"c4g-editor-vars-input"} key={i} onSubmit={(event) => {event.preventDefault()}}>
                  <label>
                    {editorVar.caption}:
                    <input type="text" value={value} name={editorVar.key} onChange={(event)=>{this.handleVarChange(event)}}/>
                  </label>
                </form>
            );
          }
        }
      }

    }
    return (
      <React.Fragment>
        <div>
          {customButton}
          <div className={"c4g-editor-element-selection"}>
            {elements}
          </div>
        </div>
        <div className={"c4g-editor-vars"}>
          {arrFormEditorVars}
        </div>
      </React.Fragment>
    )
  }

  resetInteraction() {
    if (this.interaction) { //only one drawinteraction at a time
      if (Array.isArray(this.interaction)) {
        this.props.mapController.map.removeInteraction(this.interaction[0]);
        this.props.mapController.map.removeInteraction(this.interaction[1]);
      }
      else {
        this.props.mapController.map.removeInteraction(this.interaction);
      }
    }
  }
  removeActiveFeature () {
    let geojson = new GeoJSON().writeFeatureObject(this.state.selectedFeature, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857"
    })
    this.props.removeFeature(geojson);
    let source = this.props.editorLayer.getSource();
    source.removeFeature(this.state.selectedFeature);
    this.setState({
      selectedFeature: false
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.elements[0] && prevProps.mode !== this.props.mode) {
      if (this.state.activeElement === 0) {
        this.setState({
          activeElement: this.props.elements[0].id,
          activeStyle: this.props.elements[0].styleId
        });
        //  this.state.activeElement = this.props.elements[0].id
        //  this.state.activeStyle = this.props.elements[0].styleId
      }
      else if (!this.props.elements.find(element => element.id === this.state.activeElement)) {
        this.setState({
          activeElement: this.props.elements[0].id,
          activeStyle: this.props.elements[0].styleId
        });
        // this.state.activeElement = this.props.elements[0].id
        // this.state.activeStyle = this.props.elements[0].styleId
      }
    }
  }

  changeSelectMode(string) {
    this.setState({
      selectMode: string
    });
  }

  handleVarChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.state.selectedFeature.set(name, value);
    let geojson = new GeoJSON().writeFeatureObject(this.state.selectedFeature, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857"
    })
    this.props.modifyFeature(geojson);
    this.setState({"selectedFeature" : this.state.selectedFeature});
  }

  changeFreehand() {
    this.setState({
      freehand: !this.state.freehand
    })
  }

  changeJSON(event) {
    this.setState({features: event.target.value})
  }
}