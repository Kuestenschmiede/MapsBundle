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
import {Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {GeoJSON} from "ol/format";
import {Collection} from "ol";
import {Point, LineString, Polygon, Circle} from 'ol/geom'
import {Draw, Select, Modify} from "ol/interaction";
import {Feature} from "ol";
import {C4gStarboardStyle} from "./c4g-starboard-style.jsx";
import {C4gPopupController} from "./../c4g-popup-controller";


export class EditorView extends Component {
    constructor(props) {
        super(props);
        const scope = this;
        this.state = {
            freehand: false,
            features: "[]",
            activeElement: props.elements[0] ? props.elements[0].id : 0,
            activeStyle: props.elements[0] ? props.elements[0].styleId : 0,
            selectMode: "modify"
        };
        this.interaction;
        this.changeJSON = this.changeJSON.bind(this);
    }
    render() {
        if (this.props.mode !== "select" && this.props.active) {
            if (this.interaction) { //only one drawinteraction at a time
                if (Array.isArray(this.interaction)) {
                    this.props.mapController.map.removeInteraction(this.interaction[0]);
                    this.props.mapController.map.removeInteraction(this.interaction[1]);
                }
                else {
                    this.props.mapController.map.removeInteraction(this.interaction);
                }
            }
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
                stopclick: false,
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
        }
        else {
            if (this.interaction) { //only one drawinteraction at a time
                if (Array.isArray(this.interaction)) {
                    this.props.mapController.map.removeInteraction(this.interaction[0]);
                    this.props.mapController.map.removeInteraction(this.interaction[1]);
                }
                else {
                    this.props.mapController.map.removeInteraction(this.interaction);
                }
            }
            if (this.state.selectMode === "remove") {
                this.interaction = new Select({
                    layers: [this.props.editorLayer],
                    hitTolerance: 20
                });
                this.interaction.on('select', (e) => {
                    let feature = e.target.getFeatures().getArray()[0];
                    let geojson = new GeoJSON().writeFeatureObject(feature, {
                        dataProjection: "EPSG:4326",
                        featureProjection: "EPSG:3857"
                    })
                    this.props.removeFeature(geojson);
                    let source = this.props.editorLayer.getSource();
                    source.removeFeature(feature);
                });
                this.props.mapController.map.addInteraction(this.interaction);
            }
            else {
                this.interaction = [];
                this.interaction.push(new Select({
                    layers: [this.props.editorLayer],
                    hitTolerance: 20
                }));
                this.interaction.push(new Modify({
                    features: this.interaction[0].getFeatures(),
                    pixelTolerance: 20
                }));
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
        }
        let elements = null;
        if (this.props.elements && this.props.elements.length > 1) {
            elements = this.props.elements.map((element) => {
                return (<button key={element.id} style={{height: "32px", width: "32px"}}
                                onMouseUp={() =>{this.setState({activeElement: element.id, activeStyle: element.styleId})}}>
                    <C4gStarboardStyle styleData={this.props.styleData} styleId={element.styleId}/></button>)
            });
        }
        let customButton = null;
        if ("LineStringPolygon".includes(this.props.mode)) {
            let freehandClass = "c4g-editor-view ";
            freehandClass += this.state.freehand ? "c4g-active" : "c4g-inactive";
            customButton = (<a className={freehandClass} onMouseUp={() => {this.changeFreehand()}}>Freehand</a>);
        }
        else if (this.props.mode === "select") {
            customButton = (<div className={"c4g-editor-mode-switcher"}>
                <button title={"Modify"} className={"c4g-editor-feature-modify " + (this.state.selectMode === "modify" ? "c4g-active": "c4g-inactive")} onMouseUp={() => {this.changeSelectMode("modify")}}/>
                <button title={"Remove"} className={"c4g-editor-feature-delete " + (this.state.selectMode === "remove" ? "c4g-active": "c4g-inactive")} onMouseUp={() => {this.changeSelectMode("remove")}}/>
            </div>)
        }
        return (
            <div>
                {customButton}
                <div className={"c4g-editor-element-selection"}>
                    {elements}
                </div>
            </div>
        )

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

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("shouldComponentUpdate");
    // }
    changeSelectMode(string) {
        this.setState({
            selectMode: string
        });
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