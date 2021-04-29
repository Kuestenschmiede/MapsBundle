(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./Resources/public/js/components/c4g-zoom-position.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=m(o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),n=m(o("./node_modules/babel-runtime/helpers/classCallCheck.js")),a=m(o("./node_modules/babel-runtime/helpers/createClass.js")),r=m(o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),l=m(o("./node_modules/babel-runtime/helpers/inherits.js")),u=o("./node_modules/react/index.js"),i=(m(u),o("./node_modules/ol/control.js")),c=o("./Resources/public/js/c4g-maps-constant.js"),d=o("./Resources/public/js/c4g-maps-i18n.js"),p=o("./node_modules/ol/index.js");function m(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e){(0,n.default)(this,t);var o=(0,r.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e)),a=void 0,l=void 0,u=e.mapController,m=u.map.getView(),_=u.data,b=(0,d.getLanguage)(_),j=function(e){e.stopPropagation(),this.blur();var t=new p.Geolocation({tracking:!0,projection:m.getProjection()});t.on("change",(function(e){m.setCenter(t.getPosition()),m.setZoom(18),t.setTracking(!1),u.map.setView(m)}))};(a=document.createElement("div")).className=c.cssConstants.OL_ZOOM_POS+" "+c.cssConstants.OL_CONTROL+" "+c.cssConstants.OL_UNSELECTABLE,(l=document.createElement("button")).title=b.CTRL_ZOOM_POS,a.appendChild(l),l.addEventListener("click",j,{useCapture:!1,passive:!0}),l.addEventListener("touchstart",j,{useCapture:!1,passive:!0});var C=new i.Control({element:a,target:o.props.target});return u.mapsControls.controls.zoomPosition=C,u.map.addControl(C),o}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return null}}]),t}(u.Component);
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
                      */t.default=_}}]);