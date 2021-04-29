(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./Resources/public/js/components/c4g-zoom.jsx":function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=p(s("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),n=p(s("./node_modules/babel-runtime/helpers/classCallCheck.js")),l=p(s("./node_modules/babel-runtime/helpers/createClass.js")),r=p(s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=p(s("./node_modules/babel-runtime/helpers/inherits.js")),a=s("./node_modules/react/index.js"),d=(p(a),s("./node_modules/ol/control.js")),c=(s("./Resources/public/js/c4g-maps-constant.js"),s("./Resources/public/js/c4g-maps-i18n.js"));function p(e){return e&&e.__esModule?e:{default:e}}
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
 */var i=function(e){function o(e){(0,n.default)(this,o);var s=(0,r.default)(this,(o.__proto__||(0,t.default)(o)).call(this,e)),l=(0,c.getLanguage)(e.mapController.data),u=new d.Zoom({zoomInLabel:" ",zoomOutLabel:" ",zoomInTipLabel:l.CTRL_ZOOM_IN,zoomOutTipLabel:l.CTRL_ZOOM_OUT,target:s.props.target}),a=e.mapController;return a.mapsControls.controls.zoom=u,a.map.addControl(u),s}return(0,u.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){return null}}]),o}(a.Component);o.default=i}}]);