/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import ReactDOM from "react-dom";
import React from "react";
import {Search} from "./components/c4g-search.jsx";

ReactDOM.render(React.createElement(Search, {
    objSettings: window.objSettings,
}), document.querySelector("#c4g_search_" + window.objSettings.moduleId));