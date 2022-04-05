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
import {getLanguage} from "../c4g-maps-i18n";

export default class ConsentBanner extends Component {

    constructor(props) {
        super(props);
        this.language = getLanguage(props.mapData);
    }

    render() {
        let settings = this.props.mapData.cookie;
        return <React.Fragment>
            <div className={"c4g-maps-consent-overlay"}>
                <div className={"c4g-maps-consent-info"} dangerouslySetInnerHTML={{__html: settings.info}}></div>
                <button className={"c4g-maps-consent-button btn"} onClick={()=> this.clickEvent(this)}> {this.language.ACCEPT}</button>
            </div>
        </React.Fragment>
    }
    clickEvent (scope) {
        let settings = scope.props.mapData.cookie;

        scope.setCookie(settings.name, settings.value);
        window.initMap(this.props.mapData);
    }
    setCookie (name, value) {
        document.cookie = name + "=" + value + "; Session"
    }
}