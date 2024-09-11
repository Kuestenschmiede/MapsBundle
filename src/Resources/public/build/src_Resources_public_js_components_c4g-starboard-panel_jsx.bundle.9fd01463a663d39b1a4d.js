/*! For license information please see src_Resources_public_js_components_c4g-starboard-panel_jsx.bundle.9fd01463a663d39b1a4d.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-starboard-panel_jsx"],{"./src/Resources/public/js/components/c4g-starboard-layer-element.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardLayerElement=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),l=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),u=g(r("./node_modules/react/index.js")),d=(g(r("./node_modules/ol/extent.js")),r("./src/Resources/public/js/c4g-maps-constant.js")),h=r("./src/Resources/public/js/components/c4g-starboard-style.jsx"),y=r("./node_modules/ol/layer.js"),f=a(r("./node_modules/ol/Feature.js"));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var n=o?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(a,l,n):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}function b(e,t,r){return t=(0,c.default)(t),(0,i.default)(e,C()?Reflect.construct(t,r||[],(0,c.default)(e).constructor):t.apply(e,r))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}t.C4gStarboardLayerElement=function(e){function t(e){var r;return(0,l.default)(this,t),(r=b(this,t,[e])).layerClick=r.layerClick.bind(r),r.layerZoomTo=r.layerZoomTo.bind(r),r.spanClick=r.spanClick.bind(r),r.changeCollapseState=r.changeCollapseState.bind(r),r.parentCallback=r.parentCallback.bind(r),r}return(0,p.default)(t,e),(0,n.default)(t,[{key:"showLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,r=!1,a=!1;e?Array.isArray(e)?r=e:e instanceof y.Vector&&(a=e):(r=r||t.props.layer.features,a=a||t.props.layer.vectorLayer),r=r||t.props.layer.features;var s=t.props.mapController.proxy.layerController;r&&r.length>0?s.show(t.props.layer.loader,r,t.props.id,t.props.layerKey?t.props.layerKey:t.props.id):a?s.show(t.props.layer.loader,a,t.props.id,t.props.layerKey?t.props.layerKey:t.props.id):e?s.show(t.props.layer.loader,e,e.id,e.key?e.key:e.id):s.show(!1,!1,t.props.id,t.props.layerKey?t.props.layerKey:t.props.id),t.props.mapController.setLayerStateWithId(t.props.id,!0)}},{key:"hideLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,r=!1,a=!1;e?Array.isArray(e)?r=e:e instanceof y.Vector&&(a=e):(r=r||t.props.layer.features,a=a||t.props.layer.vectorLayer);var s=t.props.mapController.proxy.layerController;r&&r.length>0?s.hide(t.props.layer.loader,r,t.props.id,t.props.layerKey?t.props.layerKey:t.props.id):a?s.hide(t.props.layer.loader,a,t.props.id,t.props.layerKey?t.props.layerKey:t.props.id):e?s.hide(t.props.layer.loader,e,e.id,e.key?e.key:e.id):s.hide(!1,!1,t.props.id,t.props.layerKey?t.props.layerKey:t.props.id),t.props.mapController.setLayerStateWithId(t.props.id,!1)}},{key:"changeChildState",value:function(e,t,r){if(r?this.showLayer(e.features||e.vectorLayer):this.hideLayer(e.features||e.vectorLayer),e.childs&&e.childs.length>0)for(var a in e.childs)e.childs.hasOwnProperty(a)&&t.childStates[a].active!==r&&(t.childStates[a]=this.changeChildState(e.childs[a],t.childStates[a],r));return this.props.mapController.setLayerStateWithId(t.id,r),t.active=r,t}},{key:"parentCallback",value:function(e,t){var r=this.props.layerStates;r.childStates[e]=t,r.active!=t.active&&(t.active?this.showLayer():this.hideLayer()),this.props.parentCallback(this.props.keyId,r)}},{key:"layerEnter",value:function(e){13===e.which&&this.layerClick(e)}},{key:"layerClick",value:function(e){if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.layerStates.greyed)return!1;var t=!1;if(this.props.layerStates.active)this.hideLayer();else if(this.showLayer(),t=!0,this.props.layerStates.collapsed){var r=this.props.layerStates;r.collapsed=!1,this.props.changeCollapseState(this.props.keyId,r)}var a=this.props.layerStates;if(this.props.layer.childs&&this.props.layer.childs.length>0&&!this.props.layer.ignoreChilds){var s=this.props.layer.childs;for(var o in s)s.hasOwnProperty(o)&&(a.childStates[o].active,s[o].key&&s[o].key!=s[o].id?t?this.showLayer(s[o]):this.hideLayer(s[o]):a.childStates[o]=this.changeChildState(s[o],a.childStates[o],a.active))}}},{key:"layerZoomTo",value:function(e){var t,r,a=this;this.props.layerStates.active||this.layerClick(e),this.props.mapController.proxy.layerController.zoomTo(this.props.layer)&&(this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer,"markLocstyle",!0),window.setTimeout((function(){a.props.mapController.proxy.layerController.setChildFeatureFlag(a.props.layer,"markLocstyle",!1)}),3e3)),this.props.mapController.proxy.mapData.starboard.openPopup&&(this.props.layer.popup?(t=new f.default,r=new y.Vector,t.set("popup",this.props.layer.popup)):this.props.layer.features&&1===this.props.layer.features.length&&(r=new y.Vector,t=this.props.layer.features[0]),this.props.mapController.proxy.handlePopup(t,r))}},{key:"layerZoomToEnter",value:function(e){13===e.which&&this.layerZoomTo(e)}},{key:"changeCollapseState",value:function(e,t){this.props.layerStates.childStates[e]=t,this.props.changeCollapseState(this.props.keyId,this.props.layerStates)}},{key:"spanClick",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.layerStates.collapsed=!this.props.layerStates.collapsed,this.props.changeCollapseState(this.props.keyId,this.props.layerStates)}},{key:"render",value:function(){var e=this,r=null,a=null;"1"===this.props.mapController.data.starboard.showLocstyles&&this.props.layer.locstyle&&this.props.styleData&&this.props.styleData.arrLocStyles&&this.props.styleData.arrLocStyles[this.props.layer.locstyle]?r=this.props.layer.zoomTo?u.default.createElement(h.C4gStarboardStyle,{styleData:this.props.styleData,styleId:this.props.layer.locstyle,tooltip:this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,clickEvent:this.layerZoomTo}):u.default.createElement(h.C4gStarboardStyle,{styleData:this.props.styleData,styleId:this.props.layer.locstyle,tooltip:this.props.layer.name}):this.props.layer.zoomTo&&!this.props.mapController.data.starboard.invertZoomActivate&&(a=u.default.createElement("span",{className:"c4g-geojson-button",title:this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,onMouseUp:function(t){return e.layerZoomTo(t)}}));var s=this.props.layerStates.active?d.cssConstants.ACTIVE:d.cssConstants.INACTIVE;this.props.layerStates.greyed&&(s+=" "+d.cssConstants.DISABLED);var l,n,i=this.props.layerStates.collapsed?d.cssConstants.CLOSE:d.cssConstants.OPEN,c=this.props.layer.childs;if(this.props.mapController.data.starboard.invertZoomActivate&&this.props.layer.zoomTo?(l=u.default.createElement(u.default.Fragment,null,u.default.createElement("a",(0,o.default)({tabIndex:1,title:this.props.layer.name,alt:this.props.lang.STARBOARD_ELEMENT_TRIGGER_1+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_TRIGGER_2,className:"c4g-starboard-text",onKeyPress:function(t){return e.layerEnter(t)},onMouseUp:function(t){return e.layerZoomTo(t)}},"onKeyPress",(function(t){return e.layerZoomToEnter(t)})),u.default.createElement("span",{className:"c4g-starboard-list-element__text"},this.props.layer.name))),n=u.default.createElement("a",{className:s+" c4g-starboard-checkbox-icon",onMouseUp:function(t){return e.layerClick(t)}})):l=u.default.createElement("a",{tabIndex:1,title:this.props.layer.name,alt:this.props.lang.STARBOARD_ELEMENT_TRIGGER_1+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_TRIGGER_2,className:s,onKeyPress:function(t){return e.layerEnter(t)},onMouseUp:function(t){return e.layerClick(t)}},u.default.createElement("span",{className:"c4g-starboard-list-element__text"},this.props.layer.name)),c&&c.length){var p=u.default.createElement("span",{alt:this.props.lang.STARBOARD_ELEMENT_CHILDS,className:d.cssConstants.ICON,onMouseUp:function(t){return e.spanClick(t)}});return u.default.createElement("li",{"data-layer-id":this.props.id,className:i+" c4g-starboard-list-element"},p,r,a,l,n,u.default.createElement("ul",null,c.map((function(r,a){if(e.props.byPassChilds||e.props.filterFunc(e.props.strFilter,r,e.props.layerStates.childStates[a]))return u.default.createElement(t,{key:a,keyId:a,id:r.id,layerKey:r.key,mapController:e.props.mapController,parentCallback:e.parentCallback,strFilter:e.props.strFilter,filterFunc:e.props.filterFunc,changeCollapseState:e.changeCollapseState,lang:e.props.lang,byPassChilds:e.props.byPassChilds||e.props.filterFunc(e.props.strFilter,r,!1,!1),layerStates:e.props.layerStates.childStates[a],layer:r,styleData:e.props.styleData,fnResize:e.props.fnResize})}))))}return this.layerClick,this.props.layer.zoomTo&&(this.layerZoomTo,s="c4g-geojson-button",n=null),u.default.createElement("li",{"data-layer-id":this.props.id,tabIndex:1,className:i+" c4g-starboard-list-element"},r,a,l,n)}}])}(u.Component)},"./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.StarboardLayerswitcher=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=a(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),u=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var n=o?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(a,l,n):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),d=r("./src/Resources/public/js/c4g-maps-constant.js"),h=r("./src/Resources/public/js/components/c4g-starboard-layer-element.jsx"),y=a(r("./node_modules/@ungap/structured-clone/cjs/index.js"));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function m(e,t,r){return t=(0,i.default)(t),(0,n.default)(e,g()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}t.StarboardLayerswitcher=function(e){function t(e){var r;(0,o.default)(this,t),r=m(this,t,[e]),(0,p.default)(r,"getInitialStates",(function(){for(var e in r.initialCounterOff=0,r.initialCounterOn=0,r.props.layerStates)if(r.props.layerStates.hasOwnProperty(e)&&(r.props.layerStates[e].active?r.initialCounterOn++:r.initialCounterOff++,r.props.layerStates[e].childStates))for(var t in r.props.layerStates[e].childStates)r.props.layerStates[e].childStates.hasOwnProperty(t)&&r.getInitialStateChild(r.props.layerStates[e].childStates[t]);return r.initialCounterOn>r.initialCounterOff})),(0,p.default)(r,"callbackFunction",(function(e,t){var a=r.props.layerStates;a[e]=t,r.props.parentCallback(a)}));var a=e.mapController.arrComponents.findIndex((function(e){return"layerswitcher"===e.name}));return e.mapController.arrComponents[a].component=r,r.setLayerFilter=r.setLayerFilter.bind(r),r.toggleAllLayers=r.toggleAllLayers.bind(r),r.toggleSpecificLayers=r.toggleSpecificLayers.bind(r),r.changeCollapseState=r.changeCollapseState.bind(r),r.states={},r.state={initialized:!1,layerFilter:""},r}return(0,c.default)(t,e),(0,l.default)(t,[{key:"getInitialStateChild",value:function(e){if(e.active?this.initialCounterOn++:this.initialCounterOff++,e.childStates)for(var t in e.childStates)e.childStates.hasOwnProperty(t)&&this.getInitialStateChild(e.childStates[t])}},{key:"setLayerFilter",value:function(){var e=jQuery(".c4g-starboard-layertree-filter-field").val()||"";this.setState({layerFilter:e})}},{key:"filterFunc",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=!1;if(t&&t.name&&(-1!==t.name.toLowerCase().indexOf(e.toLowerCase())||-1!==t.name.toUpperCase().indexOf(e.toUpperCase())))s=!0,e&&r&&(r.collapsed=!1);else if(t.tags&&t.tags.find((function(t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())})))s=!0,e&&r&&(r.collapsed=!1);else if(a)for(var o in t.childs)t.childs.hasOwnProperty(o)&&!s&&(s=this.filterFunc(e,t.childs[o],r.childStates[o]),e&&s&&r&&(r.collapsed=!1));return s}},{key:"applyOldState",value:function(e){var t=this,r=this.props.objLayers,a=this.props.layerStates,s=this.states[e];!function e(r,a,s){for(var o=0;o<a.length;o++)a[o].active!==s[o].active&&(s[o].active?t.props.mapController.proxy.layerController.show(r[o].loader,r[o].features||r[o].vectorLayer):t.props.mapController.proxy.layerController.hide(r[o].loader,r[o].features||r[o].vectorLayer)),a[o].childStates&&a[o].childStates.length>0&&e(r[o].childs,a[o].childStates,s[o].childStates)}(r,a,s),this.props.parentCallback(s)}},{key:"toggleSpecificLayers",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this,a=this.props.objLayers,s=this.props.layerStates;t&&(this.states[t]=(0,y.default)(s)),s=function t(a,s){for(var o=0;o<s.length;o++)e.includes(a[o].id)?(s[o].active||r.props.mapController.proxy.layerController.show(a[o].loader,a[o].features||a[o].vectorLayer),s[o].active=!0):(s[o].active&&r.props.mapController.proxy.layerController.hide(a[o].loader,a[o].features||a[o].vectorLayer),s[o].active=!1),s[o].childStates&&s[o].childStates.length>0&&(s[o].childStates=t(a[o].childs,s[o].childStates));return s}(a,s),this.props.parentCallback(s)}},{key:"toggleAllLayers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,r=this.props.layerStates,a=this.props.objLayers;e&&(this.states[e]=(0,y.default)(r)),t.buttonEnabled?(t.props.mapController.map.getView().dispatchEvent({type:"change:resolution"}),t.props.mapController.proxy.layerController.vectorCollection.clear(),r=function e(r,a){for(var s=0;s<a.length;s++)a[s].active&&(r[s].vectorLayer||r[s].loader)&&t.props.mapController.proxy.layerController.hide(r[s].loader,r[s].vectorLayer),a[s].active=!1,a[s].childStates&&a[s].childStates.length>0&&(a[s].childStates=e(r[s].childs,a[s].childStates));return t.buttonEnabled=!1,a}(a,r)):r=function e(r,a){for(var s=0;s<a.length;s++)a[s].active||t.props.mapController.proxy.layerController.show(r[s].loader,r[s].features||r[s].vectorLayer),a[s].active=!0,a[s].childStates&&a[s].childStates.length>0&&(a[s].childStates=e(r[s].childs,a[s].childStates));return t.buttonEnabled=!0,a}(a,r),this.props.parentCallback(r)}},{key:"changeCollapseState",value:function(e,t){}},{key:"render",value:function(){var e,t,r,a=this;if(!(this.props.layerStates&&this.props.layerStates.length>0)||this.initialCounterOff&&this.initialCounterOn||(this.states.initial=(0,y.default)(this.props.layerStates),this.buttonEnabled=this.getInitialStates()),e=this.props.objLayers,t=this.props.layerStates,!this.props.active)return null;if(r="",this.props.mapController.data.layerswitcher.filter){var s=this.props.mapController.data.layerswitcher.filter_placeholder||"";r=u.default.createElement("div",{className:"c4g-starboard-layertree-filter without-button"},u.default.createElement("input",{className:"c4g-starboard-layertree-filter-field",type:"text",onInput:this.setLayerFilter,placeholder:s}))}var o;return o=this.props.mapController.data.starboard.button?u.default.createElement("a",{className:"c4g-starboard-headline-link "+(this.buttonEnabled?"c4g-active":"c4g-inactive"),onMouseUp:this.toggleAllLayers},this.props.headline||this.props.lang.LAYERSWITCHER_TOGGLE_ALL):u.default.createElement("div",{className:"contentHeadline"},this.props.headline),u.default.createElement(u.default.Fragment,null,o,r,u.default.createElement("div",{className:"c4g-content-layertree"},u.default.createElement("div",{className:d.cssConstants.STARBOARD_LAYERTREE},u.default.createElement("ul",null,e.map((function(e,r){if(a.filterFunc(a.state.layerFilter,e,t[r]))return u.default.createElement(h.C4gStarboardLayerElement,{key:r,keyId:r,id:e.id,mapController:a.props.mapController,parentCallback:a.callbackFunction,layer:e,styleData:a.props.styleData,changeCollapseState:a.props.changeCollapseState,layerStates:t[r],lang:a.props.lang,byPassChilds:a.filterFunc(a.state.layerFilter,e,!1,!1),strFilter:a.state.layerFilter,filterFunc:a.filterFunc,fnResize:a.props.fnResize})}))))))}}])}(u.Component)},"./src/Resources/public/js/components/c4g-starboard-panel.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var n=o?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(a,l,n):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),u=r("./node_modules/ol/control.js"),d=r("./src/Resources/public/js/c4g-maps-constant.js"),h=r("./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx"),y=r("./src/Resources/public/js/c4g-maps-i18n.js"),f=r("./src/Resources/public/js/c4g-maps-utils.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function g(e,t,r){return t=(0,i.default)(t),(0,n.default)(e,b()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var C=p.default.lazy((function(){return Promise.resolve().then(r.bind(r,"./src/Resources/public/js/components/c4g-titlebar.jsx"))}));t.default=function(e){function t(e){var r;(0,o.default)(this,t);var a=r=g(this,t,[e]),s=document.createElement("div"),l=document.createElement("button");if(s.className="c4g-starboard-control ol-unselectable ol-control ",r.langConstants=(0,y.getLanguage)(e.mapController.data),e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var n=document.createElement("span");n.innerText=r.langConstants.CTRL_STARBOARD,l.appendChild(n)}else l.title=r.langConstants.CTRL_STARBOARD;e.open?s.className+="c4g-open":s.className+="c4g-close",e.external&&(s.className+=" c4g-external"),s.appendChild(l),jQuery(s).on("click",(function(e){a.state.open?a.close():a.open()}));var i=e.mapController,c=new u.Control({element:s,target:e.target}),p=i.arrComponents.findIndex((function(e){return"layerswitcher"===e.name}));return i.arrComponents[p].control=c,i.mapsControls.controls.horizontalPanel=c,r.open=r.open.bind(r),r.slideOutCollidingElements=r.slideOutCollidingElements.bind(r),r.resizeFunction=r.resizeFunction.bind(r),r.close=r.close.bind(r),r.createStylingForIcon=r.createStylingForIcon.bind(r),r.state={direction:e.direction||"right",open:e.open||!1,className:e.className||"c4g-starboard-panel",childs:e.childs||[],control:c,activeTab:0},r}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){}},{key:"setActiveTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.mapController.data;this.state.className,this.state.direction,this.state.open,this.state.open?jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"):jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");var r="",a=[];if(this.props.tabLayers.length>0){var s=p.default.createElement("button",{key:this.props.tabLayers.length,title:this.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,className:"c4g-starboard-view-trigger-layerswitcher",onMouseUp:function(){e.setActiveTab(0)}});a.push(s),a.push(this.props.tabLayers.map((function(t,r){var a=t.awesomeIcon;return e.createStylingForIcon(a,r),p.default.createElement("button",{key:r,title:t[0].name,className:"c4g-starboard-view-trigger-tab-"+r,onMouseUp:function(){e.setActiveTab(r+1)}})}))),r=p.default.createElement("div",{className:"c4g-starboard-switcher"},a)}var o="";return this.props.tabLayers.length>0&&(o=p.default.createElement(p.default.Fragment,null,this.props.tabLayers.map((function(t,r){return p.default.createElement(h.StarboardLayerswitcher,{key:r,mapController:e.props.mapController,objLayers:e.props.tabLayers[r],parentCallback:e.props.tabCallback,layerStates:e.props.tabStates,openfunc:e.open,headline:t[0].name,open:e.state.open,active:r+1===e.state.activeTab})})))),p.default.createElement("div",{className:d.cssConstants.STARBOARD_WRAPPER},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(C,{wrapperClass:"c4g-starboard-header",headerClass:d.cssConstants.STARBOARD_HEADLINE,header:t.starboard.label||this.langConstants.STARBOARD,closeBtnClass:d.cssConstants.STARBOARD_CLOSE,closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),r,p.default.createElement("div",{className:d.cssConstants.STARBOARD_CONTENT_CONTAINER},p.default.createElement(h.StarboardLayerswitcher,{key:this.props.tabLayers.length,mapController:this.props.mapController,lang:this.langConstants,objLayers:this.props.objLayers,styleData:this.props.styleData,parentCallback:this.props.parentCallback,layerStates:this.props.layerStates,changeCollapseState:this.props.changeCollapseState,openfunc:this.open,headline:t.layerswitcher.label,open:this.state.open,active:0===e.state.activeTab}),o))}},{key:"createStylingForIcon",value:function(e,t){var r=document.createElement("style");r.appendChild(document.createTextNode("")),document.head.appendChild(r),r.sheet.insertRule("button.c4g-starboard-view-trigger-tab-"+t+':before {\n  content: "\\'+e+"\";\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  font-size: inherit;\n}")}},{key:"open",value:function(){var e=this;this.setState({open:!0},(function(){return e.slideOutCollidingElements()})),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){var e=this;this.setState({open:!1},(function(){return e.slideInCollidingElements()}))}},{key:"resizeFunction",value:function(){var e=this;window.requestAnimationFrame((function(){e.slideOutCollidingElements()}))}},{key:"componentDidUpdate",value:function(e,t,r){if(this.state.open?this.slideOutCollidingElements():this.slideInCollidingElements(),this.props.mapController.data.caching){var a=f.utils.getValue("panel");"StarboardPanel"!==a||this.state.open?"StarboardPanel"!==a&&this.state.open&&f.utils.storeValue("panel","StarboardPanel"):f.utils.storeValue("panel","")}}},{key:"slideOutCollidingElements",value:function(){jQuery(".c4g-starboard-container").addClass("c4g-open").removeClass("c4g-close")}},{key:"slideInCollidingElements",value:function(){jQuery(".c4g-starboard-container").addClass("c4g-close").removeClass("c4g-open")}}])}(p.Component)},"./src/Resources/public/js/components/c4g-starboard-style.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var n=o?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(a,l,n):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),u=a(r("./node_modules/ol/Feature.js")),d=r("./node_modules/ol/geom.js"),h=r("./src/Resources/public/js/c4g-maps-constant.js"),y=r("./src/Resources/public/js/c4g-maps-utils.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function m(e,t,r){return t=(0,i.default)(t),(0,n.default)(e,g()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}t.C4gStarboardStyle=function(e){function t(e){return(0,o.default)(this,t),m(this,t,[e])}return(0,c.default)(t,e),(0,l.default)(t,[{key:"enterEvent",value:function(e){13===e.which&&this.props.clickEvent(e)}},{key:"render",value:function(){var e=this,t=null,r=this.props.styleData.arrLocStyles[this.props.styleId],a=r.locStyleArr,s=r.style&&r.style(new u.default({geometry:new d.Point(0,0)}),"EPSG:4326")?r.style(new u.default({geometry:new d.Point(0,0)}),"EPSG:4326"):null,o=Array.isArray(s)?s[0]:s,l=a?a.styletype:"default",n=this.props.tooltip||"";if(!a||"cust_icon"!==l&&"cust_icon_svg"!==l&&"photo"!==l){var i,c,f;switch(l){case"point":i=h.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":i=h.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":i=h.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":i=h.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":i=h.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":i=h.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:i=h.cssConstants.STARBOARD_LOCSTYLE}o&&o.getFill()&&o.getStroke()?(c=o.getFill().getColor(),f=o.getStroke().getColor()):a&&a.fillcolor&&a.strokecolor&&(c=y.utils.getRgbaFromHexAndOpacity(a.fillcolor[0],a.fillcolor[1]),f=y.utils.getRgbaFromHexAndOpacity(a.strokecolor[0],a.strokecolor[1]));var m={"--var-color":c,"--var-bordercolor":f};t=this.props.clickEvent?p.default.createElement("span",{className:i,style:m,title:n,onMouseUp:function(t){return e.props.clickEvent(t)}}):p.default.createElement("span",{className:i,style:m,title:n})}else{var g,b=null;if(a.icon_src&&-1!==a.icon_src.indexOf(".")||a.svgSrc&&-1!==a.svgSrc.indexOf("."))g="cust_icon"===l||"photo"===l?a.icon_src:a.svgSrc,b=p.default.createElement("img",{src:g,style:{height:25,width:25}});else if(o){var C=o.getImage&&"function"==typeof o.getImage&&o.getImage()?o.getImage():null;if(!C||!C.getSrc())return null;b=p.default.createElement("img",{src:C.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent?p.default.createElement("span",{tabIndex:1,className:h.cssConstants.STARBOARD_LOCSTYLE,title:n,onKeyPress:function(t){return e.enterEvent(t)},onMouseUp:function(t){return e.props.clickEvent(t)}},b):p.default.createElement("span",{className:h.cssConstants.STARBOARD_LOCSTYLE,title:n},b)}return t}}])}(p.Component)},"./node_modules/@ungap/structured-clone/cjs/deserialize.js":(e,t,r)=>{const{VOID:a,PRIMITIVE:s,ARRAY:o,OBJECT:l,DATE:n,REGEXP:i,MAP:c,SET:p,ERROR:u,BIGINT:d}=r("./node_modules/@ungap/structured-clone/cjs/types.js"),h="object"==typeof self?self:globalThis;t.deserialize=e=>((e,t)=>{const r=(t,r)=>(e.set(r,t),t),y=f=>{if(e.has(f))return e.get(f);const[m,g]=t[f];switch(m){case s:case a:return r(g,f);case o:{const e=r([],f);for(const t of g)e.push(y(t));return e}case l:{const e=r({},f);for(const[t,r]of g)e[y(t)]=y(r);return e}case n:return r(new Date(g),f);case i:{const{source:e,flags:t}=g;return r(new RegExp(e,t),f)}case c:{const e=r(new Map,f);for(const[t,r]of g)e.set(y(t),y(r));return e}case p:{const e=r(new Set,f);for(const t of g)e.add(y(t));return e}case u:{const{name:e,message:t}=g;return r(new h[e](t),f)}case d:return r(BigInt(g),f);case"BigInt":return r(Object(BigInt(g)),f)}return r(new h[m](g),f)};return y})(new Map,e)(0)},"./node_modules/@ungap/structured-clone/cjs/index.js":(e,t,r)=>{const{deserialize:a}=r("./node_modules/@ungap/structured-clone/cjs/deserialize.js"),{serialize:s}=r("./node_modules/@ungap/structured-clone/cjs/serialize.js");Object.defineProperty(t,"__esModule",{value:!0}).default="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?a(s(e,t)):structuredClone(e):(e,t)=>a(s(e,t)),t.deserialize=a,t.serialize=s},"./node_modules/@ungap/structured-clone/cjs/serialize.js":(e,t,r)=>{const{VOID:a,PRIMITIVE:s,ARRAY:o,OBJECT:l,DATE:n,REGEXP:i,MAP:c,SET:p,ERROR:u,BIGINT:d}=r("./node_modules/@ungap/structured-clone/cjs/types.js"),h="",{toString:y}={},{keys:f}=Object,m=e=>{const t=typeof e;if("object"!==t||!e)return[s,t];const r=y.call(e).slice(8,-1);switch(r){case"Array":return[o,h];case"Object":return[l,h];case"Date":return[n,h];case"RegExp":return[i,h];case"Map":return[c,h];case"Set":return[p,h]}return r.includes("Array")?[o,r]:r.includes("Error")?[u,r]:[l,r]},g=([e,t])=>e===s&&("function"===t||"symbol"===t);t.serialize=(e,{json:t,lossy:r}={})=>{const u=[];return((e,t,r,u)=>{const h=(e,t)=>{const a=u.push(e)-1;return r.set(t,a),a},y=u=>{if(r.has(u))return r.get(u);let[b,C]=m(u);switch(b){case s:{let t=u;switch(C){case"bigint":b=d,t=u.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+C);t=null;break;case"undefined":return h([a],u)}return h([b,t],u)}case o:{if(C)return h([C,[...u]],u);const e=[],t=h([b,e],u);for(const t of u)e.push(y(t));return t}case l:{if(C)switch(C){case"BigInt":return h([C,u.toString()],u);case"Boolean":case"Number":case"String":return h([C,u.valueOf()],u)}if(t&&"toJSON"in u)return y(u.toJSON());const r=[],a=h([b,r],u);for(const t of f(u))!e&&g(m(u[t]))||r.push([y(t),y(u[t])]);return a}case n:return h([b,u.toISOString()],u);case i:{const{source:e,flags:t}=u;return h([b,{source:e,flags:t}],u)}case c:{const t=[],r=h([b,t],u);for(const[r,a]of u)(e||!g(m(r))&&!g(m(a)))&&t.push([y(r),y(a)]);return r}case p:{const t=[],r=h([b,t],u);for(const r of u)!e&&g(m(r))||t.push(y(r));return r}}const{message:v}=u;return h([b,{name:C,message:v}],u)};return y})(!(t||r),!!t,new Map,u)(e),u}},"./node_modules/@ungap/structured-clone/cjs/types.js":(e,t)=>{t.VOID=-1,t.PRIMITIVE=0,t.ARRAY=1,t.OBJECT=2,t.DATE=3,t.REGEXP=4,t.MAP=5,t.SET=6,t.ERROR=7,t.BIGINT=8}}]);