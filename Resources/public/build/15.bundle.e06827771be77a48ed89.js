(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./Resources/public/js/components/c4g-rotate.jsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=p(o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=p(o("./node_modules/babel-runtime/helpers/classCallCheck.js")),n=p(o("./node_modules/babel-runtime/helpers/createClass.js")),r=p(o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=p(o("./node_modules/babel-runtime/helpers/inherits.js")),u=o("./node_modules/react/index.js"),c=(p(u),o("./node_modules/ol/control.js")),d=(o("./Resources/public/js/c4g-maps-constant.js"),o("./Resources/public/js/c4g-maps-i18n.js"));function p(e){return e&&e.__esModule?e:{default:e}}
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
 */var i=function(e){function t(e){(0,l.default)(this,t);var o=(0,r.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e)),n=(0,d.getLanguage)(e.mapController.data),a=new c.Rotate({label:" ",labelActive:" ",tipLabel:n.CTRL_RESET_ROTATION,target:o.props.target}),u=e.mapController;return u.mapsControls.controls.rotate=a,u.map.addControl(a),o}return(0,a.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){return null}}]),t}(u.Component);t.default=i}}]);