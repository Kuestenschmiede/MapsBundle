/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class GeoSearchResults extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const scope = this;
    let resultContainer = "";
    let firstResult = "";
    let detailBtnClass = "";
    let detailBtnCb = "";
    let closeBtnClass = "c4g-titlebar-close";
    let closeBtnCb = this.props.closeCb;

    resultContainer = <ul id={"resultcontainer"}>
      {this.props.results.map(function(element, index) {
        let buttonClass = "searchResultButton";
        if (element === scope.props.currentResult) {
          buttonClass += " c4g-active";
        }
        return (<li key={index}><button key={index} id={index} className={buttonClass} name={element} onMouseUp={() => scope.props.zoomFunc(index)}>{element}</button></li>)
      })}
    </ul>;

    if (this.props.extDiv && document.querySelector("." + this.props.extDiv)) {
      let extDiv = document.querySelector("." + this.props.extDiv);
      return ReactDOM.createPortal(
        (
          <div className={"c4g-geosearch-results-content c4g-external " + this.props.className + " c4g-beach"}>
            {/*<Titlebar wrapperClass={"c4g-geosearch-results-header c4g-beach-header"} header={this.props.headline} headerClass={"c4g-geosearch-results-headline c4g-beach-header-headline"}*/}
            {/*          detailBtnClass={detailBtnClass} detailBtnCb={detailBtnCb} closeBtnClass={closeBtnClass} closeBtnCb={closeBtnCb}/>*/}
            <div className={"c4g-beach-content"}>
              {resultContainer}
            </div>
          </div>
        ),
        extDiv
      );
    } else {
      return (
        <div className={"c4g-geosearch-results-content " + this.props.className + " c4g-beach"}>
          {/*<Titlebar wrapperClass={"c4g-geosearch-results-header c4g-beach-header"} header={this.props.headline} headerClass={"c4g-geosearch-results-headline c4g-beach-header-headline"}*/}
          {/*          detailBtnClass={detailBtnClass} detailBtnCb={detailBtnCb} closeBtnClass={closeBtnClass} closeBtnCb={closeBtnCb}/>*/}
          <div className={"c4g-beach-content"}>
            {resultContainer}
          </div>
        </div>
      );
    }

  }

}