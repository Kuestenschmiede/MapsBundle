(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./Resources/public/js/components/c4g-print.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=f(o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),n=f(o("./node_modules/babel-runtime/helpers/classCallCheck.js")),a=f(o("./node_modules/babel-runtime/helpers/createClass.js")),l=f(o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),r=f(o("./node_modules/babel-runtime/helpers/inherits.js")),u=o("./node_modules/react/index.js"),c=(f(u),o("./node_modules/ol/control.js")),d=o("./Resources/public/js/c4g-maps-constant.js"),i=o("./Resources/public/js/c4g-maps-i18n.js"),m=o("./node_modules/dom-to-image-more/src/dom-to-image-more.js"),p=o("./node_modules/file-saver/dist/FileSaver.min.js");function f(e){return e&&e.__esModule?e:{default:e}}
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
 */var b=function(e){function t(e){(0,n.default)(this,t);var o=(0,l.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e)),a=void 0,r=void 0,u=(0,i.getLanguage)(e.mapController.data),f=e.mapController.map,b=(e.mapController.data,{filter:function(e){return!e.className||(-1===e.className.indexOf("ol-control")||-1!==e.className.indexOf("ol-uncollapsible"))&&-1===e.className.indexOf("c4g-open")},bgcolor:"#000000"}),g=function(e){if(e.stopPropagation(),f.getTarget()){var t=document.getElementById(f.getTarget());(0,m.toBlob)(t,b).then((function(e){(0,p.saveAs)(e,"map.png")}))}};(a=document.createElement("div")).className=d.cssConstants.PRINT+" "+d.cssConstants.OL_UNSELECTABLE+" c4g-portside-control ol-control",(r=document.createElement("button")).title=u.CTRL_PRINT,r.className=d.cssConstants.PRINT,a.appendChild(r),r.addEventListener("click",g,{useCapture:!1,passive:!0}),r.addEventListener("touchstart",g,{useCapture:!1,passive:!0});var C=new c.Control({element:a,target:o.props.target}),_=e.mapController;return _.mapsControls.controls.print=C,_.map.addControl(C),o}return(0,r.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return null}}]),t}(u.Component);t.default=b}}]);