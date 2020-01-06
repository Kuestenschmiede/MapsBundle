import ReactDOM from "react-dom";
import React from "react";
import {Search} from "./components/c4g-search.jsx";

ReactDOM.render(React.createElement(Search, {
    objSettings: window.objSettings,
}), document.querySelector("#c4g_search_" + window.objSettings.moduleId));
// document.querySelector('#searchStuff').append(this.reactContainer);