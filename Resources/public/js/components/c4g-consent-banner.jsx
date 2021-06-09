/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, { Component } from "react";

export default class ConsentBanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let settings = this.props.mapData.cookie;
        return <React.Fragment>
            <div dangerouslySetInnerHTML={{__html: settings.info}}></div>
            <button className={"btn"}onClick={()=> this.clickEvent(this)}> Akzeptieren</button>
        </React.Fragment>
    }
    clickEvent (scope) {
        let settings = scope.props.mapData.cookie;

        scope.setCookie(settings.name, settings.value);
        window.initMaps(window.mapData);
    }
    setCookie (name, value) {
        document.cookie = name + "=" + value + "; Session"
    }
}