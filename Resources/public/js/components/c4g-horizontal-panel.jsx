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
import {Control} from "ol/control";

export class HorizontalPanel extends Component {
  constructor(direction, open, className, childs, target) {
    super();
    let element = document.createElement('div');
    let button = document.createElement('button');
    element.className = "c4g-horizontal-panel ol-control";
    element.appendChild(button);
    let control = new Control({element: element, target: target});
    // state variables (every property that has influence on this component)
    this.state = {
      // either "top" or "bottom"
      direction: direction || "top",
      open: open || false,
      className: className || "c4g-horizontal-panel",
      childs: childs || [],
      control: control
    };
  }

  render() {
    let className = this.state.className + "-" + this.state.direction;
    className += " " + (this.state.open ? "c4g-open" : "c4g-close");
    const scope = this;
    function createChilds () {
      let div = document.createElement('div');
      scope.state.childs.forEach(function (element) {
        div.appendChild(element);
      });
      return div;
    }
    // const direction = this.state.direction;
    return (
      <div
        class={className}
        dangerouslySetInnerHTML={{__html: createChilds()}}
      ></div>
    );
  }

  open() {
    this.state.open = true;
  }

  close() {
    this.state.open = false;
  }

  /**
   * Adds the given HTML content to the panel.
   * @param content   Must be a HTML element.
   */
  addContent(content) {
    this.state.childs.push(content);
  }
}
