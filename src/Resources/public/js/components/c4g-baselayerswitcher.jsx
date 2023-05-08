/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {Control} from "ol/control";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {getLanguage} from "./../c4g-maps-i18n";
import {OverlayControls} from "./c4g-overlay-controls.jsx";
import {utils} from "../c4g-maps-utils";

export default class BaselayerSwitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    button.title = this.langConstants.CTRL_BASELAYER;
    element.className = "c4g-baselayer-control ol-unselectable ol-control ";
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
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    let index = mapController.arrComponents.findIndex(element => element.name === "baselayerswitcher");
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.baselayerSwitcher = control;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    let baselayerLoaded = false;
    if (props.mapController.proxy.baselayerLoaded) {
      baselayerLoaded = true;
    } else {
      props.mapController.proxy.hook_baselayer_loaded = props.mapController.proxy.hook_baselayer_loaded || [];
      props.mapController.proxy.hook_baselayer_loaded.push(function() {
        scope.setState({baselayerLoaded: true, currentBaselayer: props.mapController.state.activeBaselayerId});
      });
    }
    // state variables (every property that has influence on this component)
    this.state = {
      open: props.open || false,
      className: props.className || "c4g-baselayerswitcher-panel",
      control: control,
      baselayerLoaded: baselayerLoaded,
      currentBaselayer: 0,
      baselayerFilter: ""
    };
  }

  componentDidMount() {

  }

  getFilteredBaselayerIds() {
    let arrBaselayers = this.props.baselayerController.arrBaselayers;
    let ids = this.props.baselayerController.baselayerIds;
    let returnIds = [];
    if (this.state.baselayerFilter === "") {
      returnIds = ids;
    } else {
      for (let i = 0; i < ids.length; i++) {
        let baselayer = arrBaselayers[ids[i]];
        if (baselayer.name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
          returnIds.push(ids[i]);
        } else {
          // check if an overlay matches
          let overlays = baselayer.overlayController.arrOverlays;
          let overlayKeys = Object.keys(overlays);
          if (overlayKeys.length > 0) {
            for (let j = 0; j < overlayKeys.length; j++) {
              if (overlays[overlayKeys[j]].name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
                returnIds.push(ids[i]);
                break;
              }
            }
          }
        }
      }
    }
    return returnIds;
  }

  render() {
    let arrBaselayers = this.props.baselayerController.arrBaselayers;
    let baseLayerIds = this.getFilteredBaselayerIds();
    let filter = '';
    if (this.props.mapController.data.baselayerswitcher.filter) {
      filter = <div className={"c4g-baselayer-filter without-button"}>
        <input className={"c4g-baselayer-filter-field"} type="text" placeholder={"\uf002"}
               onInput={() => {this.filterBaselayers(this.value)}}/>
      </div>
    }
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-baselayer-container").addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-baselayer-container").removeClass("c4g-open").addClass("c4g-close");
    }
    const scope = this;
    let headline = this.props.mapController.data.baselayerswitcher.label ? this.props.mapController.data.baselayerswitcher.label : "Basiskarten";
    return (
      <div className={"c4g-baselayer-wrapper"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-baselayer-header"} headerClass={"c4g-baselayer-headline"}
                    header={headline} closeBtnClass={"c4g-baselayer-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}/>
        </Suspense>
        {filter}
        <div className={"c4g-baselayertree-content"}>
          <ul>
            {baseLayerIds.map(function(element, index) {
              let baselayer = arrBaselayers[element];
              let currentCls = scope.state.currentBaselayer === element ? "c4g-active" : "c4g-inactive";
              let preview = "";
              if (baselayer.preview_image) {
                preview = <img className={"c4g-baselayer-preview"} src={baselayer.preview_image} alt=""/>
              }
              let overlays = "";
              if (baselayer.overlayController.arrOverlays.length > 0 && scope.state.currentBaselayer === element) {
                overlays = <OverlayControls overlayController={baselayer.overlayController}/>;
              }
              let nameNode = baselayer.name;
              if (preview) {
                nameNode = <span>{baselayer.name}</span>
              }
              return (<li key={index} className={preview ? "with-image" : "without-image"}>
                <a onMouseUp={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    scope.entryClick(element);
                  }
                } className={currentCls}>{nameNode}
                {preview}
                </a>
                {overlays}
              </li>);
            })}
          </ul>
        </div>
      </div>
    )
  }

  filterBaselayers(fieldValue) {
    let filterValue = jQuery(".c4g-baselayer-filter-field").val();
    this.setState({baselayerFilter: filterValue});
  }

  entryClick(id) {
    this.props.baselayerController.showBaseLayer(id);
    this.props.changeActiveLayers(id);
    this.setState({currentBaselayer: id});
  }

  open() {
    this.setState({open: true});
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mapController.data.caching) {
      let panelVal = utils.getValue('panel');
      if (panelVal === "BaselayerSwitcher" && !this.state.open) {
        utils.storeValue('panel', "");
      }
      else if (panelVal !== "BaselayerSwitcher" && this.state.open) {
        utils.storeValue('panel', "BaselayerSwitcher")
      }
    }
  }
}