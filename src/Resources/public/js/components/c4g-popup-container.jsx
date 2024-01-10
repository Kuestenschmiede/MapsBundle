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
import {getLanguage} from "./../c4g-maps-i18n";
import {utils} from './../c4g-maps-utils'
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));

export class PopupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      open: props.open,
      detailsOpen: false,
      activeComps: props.activeComps,
      conststr: false
    };
    props.hideOther(this);
    this.routeButtons = "";
    this.language = getLanguage(this.props.mapData);
    this.close = this.close.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);

  }

  render() {
    let detailBtnClass = "";
    let detailBtnCb = "";
    let className = this.props.external ? "c4g-popup-container " : "c4g-sideboard c4g-popup-container ";

    if (this.state.open) {
      className += "c4g-open ";
    } else {
      className += "c4g-close";
    }
    if (this.props.alwaysExtended) {
      className += " c4g-details-open";
    } else {
      if (this.state.detailsOpen) {
        className += " c4g-details-open";
      } else {
        className += " c4g-details-closed";
      }
    }
    let headerClass = "c4g-popup-header";
    let addButtons = <div/>;
    if (this.state.conststr) {
      headerClass += " c4g-routing";
      addButtons = <this.state.conststr config={this.state.config}/>;
    }
    if (this.state.content) {
      return (
          <div className={className}>
            <div className={"c4g-popup-wrapper"}>
              <Suspense fallback={<div>Loading...</div>}>
                <Titlebar wrapperClass={headerClass} headerClass={"c4g-popup-header-headline"} header={this.props.mapData.popupHeadline || ""}
                          closeBtnClass={"c4g-titlebar-close"} closeBtnCb={() => {this.close(true)}} closeBtnTitle={this.language.CLOSE}
                          detailBtnClass={""} detailBtnCb={""}>
                  {addButtons}
                </Titlebar>
              </Suspense>
              <div className={"c4g-popup-content"} dangerouslySetInnerHTML={{__html: this.state.content}}/>

            </div>
          </div>
      );
    }
    else {
      return null;
    }
  }

  setAddButtons(conststr, config) {
    this.setState({
      config: config,
      conststr: conststr
    });
  }

  setContent(content) {
    this.setState({content: content});
  }

  open(activeComps) {
    if (!this.props.external) {
      this.props.hideOther();
    }
    this.setState({
      open: true,
      activeComps: activeComps
    });
  }

  close(boolean = false) {
    if (this.props.mapData.caching) {
      utils.storeValue('popupInfos', "");
    }
    if (boolean && this.state.activeComps) {
      for (let i in this.state.activeComps) {
        if (this.state.activeComps.hasOwnProperty(i)) {
          let comp = this.state.activeComps[i];
          comp.setState({open: true});
        }
      }
    }
    let newState = {
      open: false,
      content: this.props.external ? "": this.state.content
    };
    this.setState(newState);
  }

  toggleDetails() {
    this.setState({detailsOpen: !this.state.detailsOpen});
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.open && !this.state.open && this.props.mapData.caching) {
      utils.storeValue('popupInfos', "");
    }
  }
}
