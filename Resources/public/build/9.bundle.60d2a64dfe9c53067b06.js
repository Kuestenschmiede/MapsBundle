(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./Resources/public/js/components/c4g-fullscreen.jsx":function(e,l,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=p(s("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),t=p(s("./node_modules/babel-runtime/helpers/classCallCheck.js")),n=p(s("./node_modules/babel-runtime/helpers/createClass.js")),r=p(s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=p(s("./node_modules/babel-runtime/helpers/inherits.js")),a=s("./node_modules/react/index.js"),c=(p(a),s("./node_modules/ol/control.js")),d=(s("./Resources/public/js/c4g-maps-constant.js"),s("./Resources/public/js/c4g-maps-i18n.js"));function p(e){return e&&e.__esModule?e:{default:e}}
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
 */var i=function(e){function l(e){(0,t.default)(this,l);var s=(0,r.default)(this,(l.__proto__||(0,o.default)(l)).call(this,e)),n=(0,d.getLanguage)(e.mapController.data),u=new c.FullScreen({label:" ",labelActive:" ",tipLabel:n.CTRL_FULLSCREEN,target:s.props.target}),a=e.mapController;return a.mapsControls.controls.fullscreen=u,a.map.addControl(u),s}return(0,u.default)(l,e),(0,n.default)(l,[{key:"render",value:function(){return null}}]),l}(a.Component);l.default=i}}]);