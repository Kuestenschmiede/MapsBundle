/*! For license information please see src_Resources_public_js_components_c4g-zoom-extent_jsx.bundle.474ac7c7dd69c13838e8.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-zoom-extent_jsx"],{"./src/Resources/public/js/components/c4g-zoom-extent.jsx":(e,t,n)=>{var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(n("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=r(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(n("./node_modules/@babel/runtime/helpers/inherits.js")),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var u=l?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n("./node_modules/react/index.js")),p=n("./node_modules/ol/control.js"),d=(n("./src/Resources/public/js/c4g-maps-constant.js"),n("./src/Resources/public/js/c4g-maps-i18n.js"));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function m(e,t,n){return t=(0,s.default)(t),(0,u.default)(e,b()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}t.default=function(e){function t(e){var n;(0,l.default)(this,t),n=m(this,t,[e]);var r=(0,d.getLanguage)(e.mapController.data),o=new p.ZoomToExtent({label:" ",tipLabel:r.CTRL_ZOOM_EXT,target:n.props.target});if(o&&o.element&&o.element.children&&o.element.children[0]){var a=o.element.children[0];if(e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var u=document.createElement("span");a.title="",u.innerText=r.CTRL_ZOOM_EXT,a.appendChild(u)}}var s=e.mapController,c=s.arrComponents.findIndex((function(e){return"zoomExtent"===e.name}));return s.arrComponents[c].control=o,s.mapsControls.controls.zoomExtent=o,n}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return null}}])}(i.Component)}}]);