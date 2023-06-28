/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, { Component } from "react";
import {routingConstants} from "../routing-constants";
import {utils} from "./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils";

export class RouterDetourSlider extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updated = false;
  }

  componentDidMount() {
    const scope = this;
    const element = jQuery("." + routingConstants.ROUTE_TOGGLE);
    element.on('input', function () {
      let control = jQuery(this);
      let range = control.attr('max') - control.attr('min');
      let pos = ((control.val() - control.attr('min')) / range) * 100;
      let posOffset = Math.round(50 * pos / 100) - (25);
      let output = control.next('output');
      output
        .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
        .text(control.val() + " km");
      if (scope.props.router.props.mapController.data.usePermalink) {
        scope.props.router.permalink.updateLinkFragments("detour", control.val());
      }
    });
    element.on('change', function () {
      if (scope.props.router.state.mode === "route") {
        scope.props.router.setState({detourRoute: element.val()}, scope.props.router.recalculateRoute);
      } else {
        scope.props.router.setState({detourArea: element.val()}, () => {
          scope.props.router.performArea(scope.props.router.state.areaValue);
        });
      }
    });
    element.trigger('input');
  }

  render() {
    const scope = this;
    let detourElement = null
    if (!this.props.router.props.mapController.data.detourElement) {
      detourElement = <div className={"c4g-router-detour-range"}>
        <p>{routingConstants.ROUTE_DETOUR}</p>
        <input type="range" className={routingConstants.ROUTE_TOGGLE}
               min={this.props.min} max={this.props.max} defaultValue={this.props.value} step={0.5}/>
        <output className={routingConstants.OUTPUT_DETOUR}>{this.props.value + " km"}</output>
      </div>;
    }
    else {
      let arrOptions = scope.props.router.state.mode === "route"? this.props.router.props.mapController.data.arrDetourOptionsRoute : this.props.router.props.mapController.data.arrDetourOptionsArea;
      let options = arrOptions.map((elem) => {
        return <option key={elem} value={elem}>{elem} km</option>
      });
      detourElement = <select className="c4g-detour-selection" onChange={this.handleChange} value={this.props.value}>{options}
      </select>;
    }
    return detourElement;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let element = document.querySelector("." + routingConstants.ROUTE_TOGGLE);
    const scope = this;
    if (!this.updated) {
      jQuery(element).on('input', function () {
        let control = jQuery(this);
        let range = control.attr('max') - control.attr('min');
        let pos = ((control.val() - control.attr('min')) / range) * 100;
        let posOffset = Math.round(50 * pos / 100) - (25);
        let output = control.next('output');
        output
          .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
          .text(control.val() + " km");
        if (scope.props.router.props.mapController.data.usePermalink) {
          scope.props.router.permalink.updateLinkFragments("detour", control.val());
        }
      });
      jQuery(element).on('change', function () {
        if (scope.props.router.state.mode === "route") {
          scope.props.router.setState({detourRoute: jQuery(element).val()}, scope.props.router.recalculateRoute);
        } else {
          scope.props.router.setState({detourArea: jQuery(element).val()}, () => {
            scope.props.router.performArea(scope.props.router.state.areaValue);
          });
        }
      });
      jQuery(element).trigger('input');
      this.updated = true;
    }
  }
  handleChange (event) {
    let value = event.target.value;
    if (this.props.router.state.mode === "route") {
      this.props.router.setState({detourRoute: value}, this.props.router.recalculateRoute);
    } else {
      this.props.router.setState({detourArea: value}, () => {
        this.props.router.performArea(this.props.router.state.areaValue);
      });
    }
  }
}