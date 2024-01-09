/*! For license information please see src_Resources_public_js_components_c4g-zoom-position_jsx.bundle.cdbee1f49f9ba9746e0d.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-zoom-position_jsx"],{"./src/Resources/public/js/components/c4g-zoom-position.jsx":(e,t,o)=>{var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),c=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var o=b(t);if(o&&o.has(e))return o.get(e);var n={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,o&&o.set(e,n),n}(o("./node_modules/react/index.js")),d=o("./node_modules/ol/control.js"),f=o("./src/Resources/public/js/c4g-maps-constant.js"),m=o("./src/Resources/public/js/c4g-maps-i18n.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(b=function(e){return e?o:t})(e)}o("./node_modules/ol/index.js"),t.default=function(e){(0,u.default)(r,e);var t,o,n=(t=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.default)(t);if(o){var r=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.default)(this,e)});function r(e){var t;(0,s.default)(this,r),t=n.call(this,e);var o,a,u=(0,l.default)(t),c=e.mapController,i=c.map.getView(),p=c.data,b=(0,m.getLanguage)(p),_=function(e){e.stopPropagation(),this.blur(),u.props.mapController.geolocation.once("change",(function(e){var t=u.props.mapController.geolocation.getPosition();t&&(i.setCenter(t),i.setZoom(18),c.map.setView(i))})),u.props.mapController.geolocation.getTracking()?u.props.mapController.geolocation.dispatchEvent("change"):u.props.mapController.geolocation.setTracking(!0)};if((o=document.createElement("div")).className=f.cssConstants.OL_ZOOM_POS+" "+f.cssConstants.OL_CONTROL+" "+f.cssConstants.OL_UNSELECTABLE,a=document.createElement("button"),e.mapController.data.themeData.controlLabels){var h=document.createElement("span");h.innerText=b.CTRL_ZOOM_POS,a.appendChild(h)}else a.title=b.CTRL_ZOOM_POS;o.appendChild(a),a.addEventListener("click",_,{useCapture:!1,passive:!0}),a.addEventListener("touchstart",_,{useCapture:!1,passive:!0});var C=new d.Control({element:o,target:t.props.target}),g=c.arrComponents.findIndex((function(e){return"zoomPosition"===e.name}));return c.arrComponents[g].control=C,c.mapsControls.controls.zoomPosition=C,t}return(0,a.default)(r,[{key:"render",value:function(){return null}}]),r}(p.Component)}}]);