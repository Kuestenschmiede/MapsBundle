/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
import {Cluster} from "ol/source";

export class StarboardScopeItem extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.state = {
    };
    this.highlightFeature = this.highlightFeature.bind(this);
  }
  highlightFeature () {
    this.props.feature.set("markLocstyle", true);
    window.setTimeout(() => {
      this.props.feature.set("markLocstyle", false);
    }, 3000);
  }

  render() {
    let popup = this.props.feature.get('popup');
    if (popup.async) {
      fetch(this.props.mapController.proxy.api_infowindow_url + '/' + popup.content)
        .then(response => response.json())
        .then(data => {
          let popupInfo = {
            async: false,
            content: data.content,
            routing_link: popup.routing_link
          };
          this.props.feature.set('popup', popupInfo);
          this.props.setSingleFeature(this.props.feature, this.props.index);
        })
    }
    return (
        <li onMouseUp={this.highlightFeature} className={"c4g-popup-wrapper"}dangerouslySetInnerHTML={{__html: this.props.feature.get('popup').content}}/>
    );
  }
}