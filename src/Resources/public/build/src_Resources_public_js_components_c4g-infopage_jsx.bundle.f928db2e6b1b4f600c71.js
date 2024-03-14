/*! For license information please see src_Resources_public_js_components_c4g-infopage_jsx.bundle.f928db2e6b1b4f600c71.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-infopage_jsx"],{"./src/Resources/public/js/components/c4g-infopage.jsx":(e,t,n)=>{var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=o(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=s?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(o,l,r):o[l]=e[l]}return o.default=e,n&&n.set(e,o),o}(n("./node_modules/react/index.js")),d=n("./src/Resources/public/js/c4g-maps-i18n.js"),f=n("./node_modules/ol/control.js"),m=n("./src/Resources/public/js/c4g-maps-utils.js");function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function b(e,t,n){return t=(0,c.default)(t),(0,r.default)(e,h()?Reflect.construct(t,n||[],(0,c.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var C=p.default.lazy((function(){return Promise.resolve().then(n.bind(n,"./src/Resources/public/js/components/c4g-titlebar.jsx"))}));t.default=function(e){function t(e){var n;(0,s.default)(this,t),n=b(this,t,[e]);var o=(0,u.default)(n),a=document.createElement("div"),l=document.createElement("button");if(n.langConstants=(0,d.getLanguage)(e.mapController.data),e.mapController.data.themeData.controlLabels){var r=document.createElement("span");r.innerText=n.langConstants.CTRL_INFOAREA,l.appendChild(r)}else l.title=n.langConstants.CTRL_INFOAREA;a.className="c4g-infopage-control ol-unselectable ol-control ",e.open?a.className+="c4g-open":a.className+="c4g-close",e.external&&(a.className+=" c4g-external"),a.appendChild(l),jQuery(a).on("click",(function(e){o.state.open?o.close():o.open()}));var c=e.mapController,i=new f.Control({element:a,target:e.target}),p=c.arrComponents.findIndex((function(e){return"legend"===e.name}));return p&&c.arrComponents[p]?(c.arrComponents[p].control=i,c.mapsControls.controls.infoPage=i):c.map.addControl(i),n.close=n.close.bind((0,u.default)(n)),n.open=n.open.bind((0,u.default)(n)),n.state={open:e.open||!1,control:i},n}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.state.open?(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close")):(jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close")),p.default.createElement("div",{className:"c4g-infopage-wrapper"},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(C,{wrapperClass:"c4g-infopage-header",headerClass:"c4g-infopage-headline",header:this.langConstants.INFOPAGE,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),p.default.createElement("div",{className:"c4g-infopage-content",dangerouslySetInnerHTML:{__html:this.props.infoContent}}))}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,n){if(this.props.mapController.data.caching){var o=m.utils.getValue("panel");"Infopage"!==o||this.state.open?"Infopage"!==o&&this.state.open&&m.utils.storeValue("panel","Infopage"):m.utils.storeValue("panel","")}}}]),t}(p.Component)}}]);