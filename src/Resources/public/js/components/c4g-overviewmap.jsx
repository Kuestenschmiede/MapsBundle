/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {Control, OverviewMap as OvMap} from "ol/control";
import {cssConstants} from "../c4g-maps-constant";
import {getLanguage} from "../c4g-maps-i18n";
import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));

export default class OverviewMap extends Component {

  constructor(props) {
    super(props);

    let element,
      trigger,
      triggerIcon;
    const scope = this;

    this.state = {
      open: !props.collapsed,
    };
    this.langConstants = getLanguage(props.mapController.data);
    this.mapController = props.mapController;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.layer = new TileLayer({ source: new OSM() });
    element = document.createElement('div');
    element.className = cssConstants.OVERVIEWMAP + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;
    if (props.collapsed) {
      element.className += ' ' + cssConstants.CLOSE;
    } else {
      element.className += ' ' + cssConstants.OPEN;
    }
    // props.target.appendChild(element);

    trigger = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      let span = document.createElement('span');
      span.innerText = this.langConstants.CTRL_OVERVIEWMAP;
      trigger.appendChild(span);
    }
    else {
      trigger.title = this.langConstants.CTRL_OVERVIEWMAP;
    }
    element.appendChild(trigger);

    // triggerIcon = document.createElement('span');
    // triggerIcon.className = cssConstants.ICON;
    // trigger.appendChild(triggerIcon);

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
    let index = this.mapController.arrComponents.findIndex(element => element.name === "overview");
    this.mapController.arrComponents[index].control = control;
    this.mapController.mapsControls.controls.overviewMap = control;
  }

  render() {
    return <div className={"overview-map-wrapper"}>
      <Suspense fallback={<div>Loading...</div>}>
        <Titlebar wrapperClass={"c4g-overwiev-header"} headerClass={"c4g-overview-headline"}
                  header={this.langConstants.OVERVIEWMAP} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}>
        </Titlebar>
      </Suspense>
      <div id={"overview-map-target"} className={"c4g-overview-content"}>

      </div>
    </div>;
  }

  componentDidMount() {
    this.createOverviewMap();
  }

  createOverviewMap() {
    let ovmTarget = document.querySelector("#overview-map-target");
    this.ovm = new OvMap({
      collapsed: this.props.collapsed || true,
      collapsible: false,
      rotateWithView: true,
      className: 'ol-overviewmap ol-custom-overviewmap',
      target: ovmTarget,
      layers: [this.layer]
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
    if (prevProps.source !== this.props.source) {
      this.layer.setSource(this.props.source);
    }
  }
}