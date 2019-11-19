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
import {Control} from "ol/control";
import {getLanguage} from "./../c4g-maps-i18n";
import {cssConstants} from "./../c4g-maps-constant";
import {Titlebar} from "./c4g-titlebar.jsx";
import ReactDOM from "react-dom";

export class GeoSearchResults extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const scope = this;
    let resultContainer = "";
    let closeBtnClass = "";
    let closeBtnCb = "";
    if (this.props.detailOpen) {
      closeBtnClass = "c4g-beach-options";
      closeBtnCb = this.props.closeResults;
      resultContainer = <ul id={"resultcontainer"}>
        {this.props.results.map(function(element, index) {
          return (<li key={index}><button key={index} id={index} className={"searchResultButton"} name={element} onMouseUp={() => scope.props.zoomFunc(index)}>{element}</button></li>)
        })}
      </ul>;
    }
    let firstResult = "";
    if (!this.props.detailOpen && this.props.results.length >= 1) {
      let element = this.props.currentResult;
      firstResult = <ul>
        <li><button id={0} className={"searchResultButton"} name={element} onMouseUp={() => scope.props.zoomFunc(0)}>{element}</button>
        </li>
      </ul>;
    }
    let detailBtnClass = "";
    let detailBtnCb = "";
    let resultsExist = this.props.results.length > 0;
    if (!this.props.detailOpen && this.props.results.length > 1) {
      detailBtnClass = "c4g-beach-options";
      detailBtnCb = this.props.openResults;
    }
    if (this.props.resultsDiv) {
      return ReactDOM.createPortal(
        (
          <div className={"c4g-geosearch-results external " + this.props.className + " c4g-beach"}>
            <Titlebar wrapperClass={"c4g-geosearch-results-header c4g-beach-header"} header={this.props.headline} headerClass={"c4g-geosearch-results-headline c4g-beach-header-headline"}
                      detailBtnClass={detailBtnClass} detailBtnCb={detailBtnCb} closeBtnClass={closeBtnClass} closeBtnCb={closeBtnCb}/>
            <div className={"c4g-beach-content"}>
              {resultContainer}
              {firstResult}
            </div>
          </div>
        ),
        this.props.resultsDiv
      );
    } else {
      return (
        <div className={"c4g-geosearch-results " + this.props.className + " c4g-beach"}>
          <Titlebar wrapperClass={"c4g-geosearch-results-header c4g-beach-header"} header={this.props.headline} headerClass={"c4g-geosearch-results-headline c4g-beach-header-headline"}
                    detailBtnClass={detailBtnClass} detailBtnCb={detailBtnCb} closeBtnClass={closeBtnClass} closeBtnCb={closeBtnCb}/>
          <div className={"c4g-beach-content"}>
            {resultContainer}
            {firstResult}
          </div>
        </div>
      );
    }

  }

}