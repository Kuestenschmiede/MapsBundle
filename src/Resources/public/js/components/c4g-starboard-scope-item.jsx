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
import {utils} from "../c4g-maps-utils";

export class StarboardScopeItem extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.state = {
      html: "<div>Loading...</div>"
    };
    this.highlightFeature = this.highlightFeature.bind(this);
    this.ref = React.createRef();
    this.loadPopup = this.loadPopup.bind(this);
    this.observerFunction = this.observerFunction.bind(this);
  }
  observerFunction (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (this.props.lastElement && this.props.loadMore) {
          this.props.loadMore();
        }
        this.loadPopup();
        observer.unobserve(this.ref.current)
      }
    })
  }
  loadPopup() {
    let popup = this.props.feature.get('popup');
    if (!popup.contentStarboard && popup.async) {
      let url = this.props.mapController.proxy.api_infowindow_url + '/' + popup.content;
      url += url.includes("?") ? "&" : "?";
      url += "scope=starboardscope";
      fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data) {
              if (data.content) {
                popup.contentStarboard = data.content
                this.setState({
                  'html': popup.contentStarboard
                }, ()=> {
                  utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {popup: popup, mapController: this.props.mapController});

                });
              }

            }
            // this.props.setSingleFeature(this.props.feature, this.props.index);
          })
          .catch((err) => {
            console.log(err)
          });
    }
    else {
      this.setState({
        'html': popup.contentStarboard || popup.content
      });
    }
  }
  highlightFeature () {
    this.props.feature.set("markLocstyle", true);
    window.setTimeout(() => {
      this.props.feature.set("markLocstyle", false);
    }, 3000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.feature.ol_uid !== prevProps.feature.ol_uid) {
      this.loadPopup()
    }
  }
  componentDidMount() {
    if (this.ref.current && !this.observer) {
      this.observer = new IntersectionObserver(this.observerFunction, {root:document, threshold: 0.1});
      this.observer.observe(this.ref.current)
    }
  }

  componentWillUnmount() {
    this.observer = null;
  }

  render() {
    let distance = null;
    if (this.props.feature.get('distance')) {
      distance = <div className={"c4g-element-distance"}>
          {this.props.langConstants.DIST}: {toHumanDistance(this.props.feature.get('distanceMatrix') || this.props.feature.get('distance'))}
      </div>
    }
    if (this.state.html) {
      return (
          <li ref={this.ref} onMouseUp={this.highlightFeature}>
            <div className={"c4g-popup-wrapper"} dangerouslySetInnerHTML={{__html: this.state.html}}/>
            {distance}
          </li>
      );
    }
    return null;
  }
}