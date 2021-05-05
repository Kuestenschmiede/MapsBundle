/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {Control, OverviewMap as OvMap} from "ol/control";
import {cssConstants} from "../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";
import LayerGroup from "ol/layer/Group";
import {Titlebar} from "./c4g-titlebar";

export default class OverviewMap extends Component {

  constructor(props) {
    super(props);

    let element,
      trigger,
      triggerIcon;
    const scope = this;

    this.state = {
      open: !props.collapsed,
      layers: this.props.layers
    };
    this.langConstants = getLanguage(props.mapController.data);
    this.mapController = props.mapController;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    element = document.createElement('div');
    element.className = cssConstants.OVERVIEWMAP + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;
    if (props.collapsed) {
      element.className += ' ' + cssConstants.CLOSE;
    } else {
      element.className += ' ' + cssConstants.OPEN;
    }
    // props.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = this.langConstants.CTRL_OVERVIEWMAP;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = cssConstants.ICON;
    trigger.appendChild(triggerIcon);

    jQuery(trigger).click(function () {
      if (!scope.state.open) {
        scope.open();
      } else {
        scope.close();
      }
    });

    this.element = element;
    let control = new Control({
      element: element,
      target: props.target
    });
    this.baseLayerIds = [];
    this.mapController.mapsControls.controls.overviewMap = control;
    this.mapController.map.addControl(control);
  }

  render() {
    return <div className={"overview-map-wrapper"}>
      <Titlebar wrapperClass={"c4g-overwiev-header"} headerClass={"c4g-overview-headline"}
                header={this.langConstants.OVERVIEWMAP} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}>
      </Titlebar>
      <div id={"overview-map-target"} className={"c4g-overview-content"}>

      </div>
    </div>;
  }

  componentDidMount() {
  }

  createOverviewMap() {
    let ovmTarget = document.querySelector("#overview-map-target");
    this.ovm = new OvMap({
      collapsed: this.props.collapsed || true,
      collapsible: false,
      rotateWithView: true,
      className: 'ol-overviewmap ol-custom-overviewmap',
      target: ovmTarget,
      layers: this.state.layers
    });
    this.ovm.setMap(this.props.mapController.map);
  }

  removeFromMap() {
    this.element.parentNode.removeChild(this.element);
  }

  getOverviewMap() {
    return this.ovm;
  }

  isOpen() {
    if (jQuery(this.element).hasClass(cssConstants.OPEN)) {
      return true;
    } else {
      return false;
    }
  }

  open() {
    this.setState({open: true});
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.open && prevState.open) {
      jQuery(this.element).addClass(cssConstants.CLOSE).removeClass(cssConstants.OPEN);
      jQuery(this.props.ovmTarget).addClass(cssConstants.CLOSE).removeClass(cssConstants.OPEN);
    } else if (this.state.open) {
      jQuery(this.element).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
      jQuery(this.props.ovmTarget).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
    }
    if (prevState.layers.length !== this.state.layers.length) {
      if (!this.ovm) {
        this.createOverviewMap();
      } else {
        let layerGroup = new LayerGroup({layers: this.state.layers});
        this.ovm.getOverviewMap().setLayerGroup(layerGroup);
      }

    }
  }

  addLayer(layer, id) {
    if (!this.baseLayerIds.includes(id)) {
      this.baseLayerIds.push(id);
      let arrLayers = [...this.state.layers];
      arrLayers.push(layer);
      this.setState({layers: arrLayers})
    }
  }
}