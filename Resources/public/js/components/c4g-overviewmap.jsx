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
import ReactDOM from "react-dom";
import {Control, OverviewMap as OvMap} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {utils} from "../c4g-maps-utils";
import {getLanguage} from "../c4g-maps-i18n";

export class OverviewMap extends Component {

  constructor(props) {
    super(props);

    let element,
      trigger,
      triggerIcon;
    const scope = this;

    this.state = {
      open: !props.collapsed
    };
    let langConstants = getLanguage(props.mapController.data);
    this.mapController = props.mapController;

    element = document.createElement('div');
    element.className = cssConstants.OVERVIEWMAP + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;
    if (props.collapsed) {
      element.className += ' ' + cssConstants.CLOSE;
    } else {
      element.className += ' ' + cssConstants.OPEN;
    }
    // props.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = langConstants.CTRL_OVERVIEWMAP;
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

    this.ovm = new OvMap({
      collapsed: props.collapsed || true,
      collapsible: false,
      rotateWithView: true,
      className: 'ol-overviewmap ol-custom-overviewmap',
      target: props.ovmTarget,
      layers: props.layers
    });

    this.element = element;
    let control = new Control({
      element: element,
      target: props.target
    });
    this.mapController.mapsControls.controls.overviewMap = control;
    this.mapController.map.addControl(control);
  }

  render() {
    return <div></div>;
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
    this.props.mapController.hideOtherComponents(this);
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
  }
}