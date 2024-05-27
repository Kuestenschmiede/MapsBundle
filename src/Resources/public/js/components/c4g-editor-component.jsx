/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import React, { Component,Suspense } from "react";
//import {EditorView} from "./c4g-editor-view.jsx";
const EditorView = React.lazy(() => import("./c4g-editor-view.jsx"));
import {getEditorLanguage} from "./../c4g-editor-i18n";
import {Control} from "ol/control";
import {Group, Vector} from "ol/layer";
import {GeoJSON} from "ol/format";
import {Draw} from "ol/interaction";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {Circle} from "ol/geom";
import {utils} from "./../c4g-maps-utils";
import {Fill, Style, Text} from "ol/style";
import {get, transform} from "ol/proj";
import {toStringHDMS} from "ol/coordinate";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));


export default class EditorComponent extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.countEditorId = this.countEditorId.bind(this);
    this.addFeature = this.addFeature.bind(this);
    this.removeFeature = this.removeFeature.bind(this);
    this.modifyFeature = this.modifyFeature.bind(this);
    this.changeJSON = this.changeJSON.bind(this);
    this.props.mapController.editor = this;

    const scope = this;
    let element = document.createElement('div');
    let button = document.createElement('button');

    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = "Editor";
      button.appendChild(span);
    }
    else {
      button.title = "Editor";
    }

    element.className = "c4g-editor-control ol-unselectable ol-control c4g-close";
    element.appendChild(button);
    jQuery(element).on('click', (event) => {
      let hidden = scope.props.mapController.editorContainer.className.includes('c4g-close');
      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        }
        else {
          jQuery(scope.props.mapController.editorContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      }
      else {
        scope.open();
      }
    });
    this.config = {};
    this.arrLocstyles = [];
    let mapController = props.mapController;

    if (props.config) {
      this.handleConfig(props.config);
    }
    else {
      this.getConfiguration(mapController.data.feEditorProfile || mapController.data.beEditorProfile, !!mapController.data.feEditorProfile);
    }

    this.langConstants = getEditorLanguage(mapController.data);
    let control = new Control({element: element, target: props.target});
    control.isOpen = () => {
      return false;
    }
    if (!mapController.mapsControls.controls.editor) {
      mapController.mapsControls.controls.editor = control;
    }
    let index = mapController.arrComponents.findIndex(element => element.name === "editor");
    mapController.arrComponents[index].control = control;
    this.modes = ["select", "Point", "LineString", "Polygon", "Circle"];
    let features;
    if (this.props.inputField && $(this.props.inputField).val() && $(this.props.inputField).val().length > 50) {
      features = $(this.props.inputField).val();
      setTimeout(()=> {
        this.reRender();
      }, 200)
    }
    else {
      features = '{"type": "FeatureCollection", "features": []}'
    }
    this.state = {
      open: props.open || false,
      currentMode: "select",
      styleData: {},
      control: control,
      range: 0,
      features: features,
      editorId: 0,
      addComponents: []
    };
    this.styleFunction = function(feature, resolution) {
      let size = false;
      let returnStyle = [];
      if (feature && feature.get && feature.get('features')) {
        let features = feature.get('features');
        size = features.length;
        feature = features[0];
      }
      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      }
      else if (feature && feature.get && feature.get('locstyle')) {
        let locstyle = feature.get('locstyle');
        if (scope.props.mapController.proxy.locationStyleController.arrLocStyles && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle]) {
          if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].getStyleFunction();
          }
          let style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          }
          else {
            returnStyle = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
      }
      if (returnStyle[0] && feature && feature.get('zIndex')) {
        returnStyle[0].setZIndex(feature.get('zIndex'));
      }
      return returnStyle
    };
    this.features = new Collection();
    this.editorLayer = new Vector({
      source: new VectorSource({format: new GeoJSON()}),
      style: this.styleFunction
    });
    if (this.props.open) {
      this.props.mapController.map.addLayer(this.editorLayer);
    }
  }

  open() {
    jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
    let layers = this.props.mapController.map.getLayers();
    let addLayer = true;
    layers.forEach((element, index, array) => {
      if (element === this.editorLayer) {
        addLayer = false;
      }
    })
    if (addLayer) {
      this.props.mapController.map.addLayer(this.editorLayer);
    }
    this.setState({
      open: true
    });
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
//    this.props.mapController.map.removeLayer(this.editorLayer);
    this.setState({
      open: false
    });
  }

  countEditorId () {
    let newCount = this.state.editorId + 1;
    this.setState({
      editorId: newCount
    })
  }

  getConfiguration (id, frontend = true) {
    let url;
    if (frontend) {
      url = "con4gis/editorService/" + id;
    }
    else {
      url = "con4gis/editorServiceBackend/" + id;
    }

    fetch(url).then(
      (response) => {
        response.json().then(
          (json) => {
            this.handleConfig(json);
          })
      })
  }

  handleConfig (json) {
    for (let i in json.drawStyles) {
      if (json.drawStyles.hasOwnProperty(i)) {
        this.config[i] = [];
        let drawStyle = json.drawStyles[i];
        for (let j in drawStyle.elements) {
          if (drawStyle.elements.hasOwnProperty(j)) {
            let element = drawStyle.elements[j];
            this.config[i].push(element);
            let checkLocstyle = this.arrLocstyles.findIndex((locstyle) => locstyle === element.styleId);
            if (checkLocstyle === -1 && element.styleId) {
              this.arrLocstyles.push(element.styleId);
            }
          }
        }
      }
    }
    this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles, {
      "done": (styleData) => {
        this.setState({
          styleData: styleData
        })
      }
    })
  }

  reRender(){
    try{
      if (this.state.features.length > 50) {
        // replace html special chars in geojson string
        this.state.features = this.state.features.replaceAll('&#34;', '"');

        this.linkInput();
        let geojson = JSON.parse(this.state.features);
        let features = new GeoJSON({
          featureProjection: "EPSG:3857"
        }).readFeatures(geojson);
        let source = this.editorLayer.getSource();
        source.forEachFeature((feature) => {
          source.removeFeature(feature);
        });
        for (let i in features) {
          if (features.hasOwnProperty(i)) {
            let jsonFeature = features[i];
            if (jsonFeature.get('radius')) {
              jsonFeature.setGeometry(new Circle(jsonFeature.getGeometry().getCoordinates(), jsonFeature.get('radius')));
            }
            source.addFeature(jsonFeature);
          }
        }
      }
    }
    catch(error) {
      console.log(error);
    }
    if (this.state.range) {
      let selection = window.getSelection();
      let range = selection.getRangeAt(0);
      let startContainer = range.startContainer.childNodes[0] || range.startContainer;
      range.setStart(startContainer, this.state.range);
      range.setEnd(startContainer, this.state.range);
      selection.removeRange(range);
      selection.addRange(range);
    }
  }

  changeJSON(event) {
    let range = window.getSelection().getRangeAt(0).startOffset;
    this.setState({features: event.target.innerText, range: range}, () => {
      this.reRender();
    })
  }

  addFeature (feature) {
    let arrFeatures = JSON.parse(this.state.features);

    arrFeatures.features.push(feature);
    let features = JSON.stringify(arrFeatures, null, 2);
    this.setState({
      features: features
    }, () => {this.linkInput()});
  }

  removeFeature (geojson) {
    let editorId = geojson.properties.editorId;
    let arrFeatures = JSON.parse(this.state.features);
    let featureId = arrFeatures.features.findIndex((element) => {
      return element.properties.editorId === editorId;
    });
    arrFeatures.features.splice(featureId, 1);
    let features = JSON.stringify(arrFeatures, null, 2);
    this.setState({
      features: features
    }, () => {this.linkInput()});
    utils.callHookFunctions(window.c4gMapsHooks.hook_editor_remove, geojson);
  }

  modifyFeature (geojson) {
    let editorId = geojson.properties.editorId;
    let objGeojson = JSON.parse(this.state.features);
    let arrFeatures = objGeojson.features;
    let featureId = arrFeatures.findIndex((element) => {
      return element.properties.editorId === editorId;
    });
    objGeojson.features[featureId] = geojson;
    let features = JSON.stringify(objGeojson, null, 2);
    this.setState({
      features: features
    }, () => {this.linkInput()});
  }

  linkInput () {
    if (this.props.inputField && this.state.features.length > 50) {
      $(this.props.inputField).val(this.state.features); //link to inputField
    }
  }

  setAddComps(conststr, config) {
    this.setState({
      config: config,
      conststr: conststr
    });
  }

  render() {
    const scope = this;
    let addComps;
    if (this.state.conststr) {
      addComps = <this.state.conststr config={this.state.config} get={get} transform={transform} toStringHDMS={toStringHDMS} source={this.editorLayer.getSource()} format={new GeoJSON()}/>;
    }
    return (
      <div className={"c4g-editor-wrapper"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-editor-header"} headerClass={"c4g-editor-headline"} hideContainer={".c4g-editor-container-right"}
                    header={this.langConstants.EDITOR} closeBtnTitle={this.langConstants.CTRL_EDITOR} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}>
          </Titlebar>
        </Suspense>
        <div className={"c4g-editor-mode-switcher"}>
          {this.modes.map(function(element, index) {
            if (element === "select" || (scope.config[element] && scope.config[element].length > 0)) {
              let title = scope.langConstants["EDITOR_VIEW_TRIGGER_DRAW_" + element.toUpperCase()];
              return <button key={index} className={"c4g-editor-" + element + "  " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive")}
                             title={title} onMouseUp={() => scope.setState({currentMode: element})}/>;
            }
            else {
              return null;
            }
          })}
        </div>
        <EditorView className={"c4g-editor-view"} styleFunction={this.styleFunction} mode={this.state.currentMode} styleData={this.state.styleData}
                    elements={this.config[this.state.currentMode] ? this.config[this.state.currentMode]: []} active={this.state.open}
                    features={this.features} editorVars={this.props.config.editorVars} removeFeature={this.removeFeature} modifyFeature={this.modifyFeature}
                    addFeature={this.addFeature} editorLayer={this.editorLayer} editorId={this.state.editorId} countEditorId={this.countEditorId}
                    updateFeatures={this.updateFeatures} mapController={this.props.mapController} editor={this} lang={this.langConstants}/>
        <div className={"c4g-editor-content"} style={{display: "none"}}>
          <pre contentEditable={true} style={{overflowY: "scroll", overflowX: "none"}} suppressContentEditableWarning={true} onInput={this.changeJSON}>{this.state.features}</pre>
        </div>
        {addComps}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ((prevProps.open && !this.props.open) || (prevState.open && !this.state.open)) {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
//      this.props.mapController.map.removeLayer(this.editorLayer);
    }
  }

  componentDidMount() {
    if (window.c4gMapsHooks.hook_editor_components && window.c4gMapsHooks.hook_editor_components.length > 0) {
      utils.callHookFunctions(window.c4gMapsHooks.hook_editor_components, {comp: this, container: "#c4g-editor-portal"});
    }
  }
}