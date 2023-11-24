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
import {cssConstants} from "./../c4g-maps-constant.js";
import {toHumanDistance} from "./../c4g-router-time-conversions";

export class StarboardScopeItem extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.state = {
      html: "<div>Loading...</div>"
    };
    this.loadPopup();
    this.highlightFeature = this.highlightFeature.bind(this);
  }
  loadPopup() {
    let popup = this.props.feature.get('popup');
    if (popup.async) {
      popup.async = false;
      let url = this.props.mapController.proxy.api_infowindow_url + '/' + popup.content;
      url += url.includes("?") ? "&" : "?";
      url += "scope=starboardscope";
      fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data && data.content) {
              this.setState({
                'html': data.content
              });
            }
            // this.props.setSingleFeature(this.props.feature, this.props.index);
          });
    }
  }
  highlightFeature () {
    this.props.feature.set("markLocstyle", true);
    window.setTimeout(() => {
      this.props.feature.set("markLocstyle", false);
    }, 3000);
  }

  render() {
    let distance = null;
    if (this.props.feature.get('distance')) {
      distance = <div className={"c4g-element-distance"}>
          {this.props.langConstants.DIST}: {toHumanDistance(this.props.feature.get('distanceMatrix') || this.props.feature.get('distance'))}
      </div>
    }
    return (
        <li onMouseUp={this.highlightFeature}>
          <div className={"c4g-popup-wrapper"} dangerouslySetInnerHTML={{__html: this.state.html}}/>
            {distance}
        </li>
    );
  }
}