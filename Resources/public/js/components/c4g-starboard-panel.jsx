/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	    con4gis
 * @version         6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {StarboardLayerswitcher} from "./c4g-starboard-layerswitcher";
import {getLanguage} from "./../c4g-maps-i18n";

export class StarboardPanel extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    let langConstants = getLanguage(props.mapController.data);
    button.title = langConstants.CTRL_STARBOARD;
    element.className = "c4g-starboard-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    element.appendChild(button);
    jQuery(element).on('click', function(event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    this.open = this.open.bind(this);
    this.slideOutCollidingElements = this.slideOutCollidingElements.bind(this);
    this.resizeFunction = this.resizeFunction.bind(this);
    // state variables (every property that has influence on this component)
    this.state = {
      // either "top" or "bottom"
      direction: props.direction || "right",
      open: props.open || false,
      className: props.className || "c4g-starboard-panel",
      childs: props.childs || [],
      control: control
    };
  }

  componentDidMount() {

  }

  render() {
    let className = this.state.className + "-" + this.state.direction;
    className += " " + (this.state.open ? "c4g-open" : "c4g-close");
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
    }
    const scope = this;
    return (
      <StarboardLayerswitcher key={this.props.mapController.id} mapController ={this.props.mapController}
                              objLayers={this.props.objLayers} parentCallback={this.props.parentCallback}
                              layerStates={this.props.layerStates} openfunc={this.open}
                              open={this.state.open} />
    )
  }

  open() {
    this.setState({open: true}, () => this.slideOutCollidingElements());
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false}, () => this.slideInCollidingElements());
  }

  resizeFunction() {
    const scope = this;
    window.requestAnimationFrame(function() {
      scope.slideOutCollidingElements();
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.open) {
      this.slideOutCollidingElements();
    } else {
      this.slideInCollidingElements();
    }
  }

  /**
   * Moves the buttons that would collide with the panel.
   */
  slideOutCollidingElements() {
    jQuery(".c4g-starboard-container").css("right","0%");
  }

  /**
   * Undoes the previous button movement.
   */
  slideInCollidingElements() {
    jQuery(".c4g-starboard-container").css("right","-100%");
  }
}
