/*! For license information please see src_Resources_public_js_components_c4g-starboard-scope_jsx.bundle.e491809f912ae463dfbb.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-starboard-scope_jsx"],{"./src/Resources/public/js/components/c4g-starboard-scope-item.jsx":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.StarboardScopeItem=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var o=m(t);if(o&&o.has(e))return o.get(e);var r={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}(o("./node_modules/react/index.js")),p=(o("./src/Resources/public/js/c4g-maps-constant.js"),o("./src/Resources/public/js/c4g-router-time-conversions.js")),d=o("./src/Resources/public/js/c4g-maps-utils.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(m=function(e){return e?o:t})(e)}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}t.StarboardScopeItem=function(e){function t(e){var o,r,n,a;return(0,s.default)(this,t),r=this,n=t,a=[e],n=(0,c.default)(n),(o=(0,l.default)(r,f()?Reflect.construct(n,a||[],(0,c.default)(r).constructor):n.apply(r,a))).state={html:"<div>Loading...</div>"},o.highlightFeature=o.highlightFeature.bind(o),o.ref=i.default.createRef(),o.loadPopup=o.loadPopup.bind(o),o.observerFunction=o.observerFunction.bind(o),o}return(0,u.default)(t,e),(0,a.default)(t,[{key:"observerFunction",value:function(e,t){var o=this;e.forEach((function(e){e.isIntersecting&&(o.props.lastElement&&o.props.loadMore&&o.props.loadMore(),o.loadPopup(),o.ref&&o.ref.current&&t.unobserve(o.ref.current))}))}},{key:"loadPopup",value:function(){var e=this,t=this.props.feature.get("popup");if(!t.contentStarboard&&t.async){var o=this.props.mapController.proxy.api_infowindow_url+"/"+t.content;o+=o.includes("?")?"&":"?",o+="scope=starboardscope",fetch(o).then((function(e){return e.json()})).then((function(o){o&&o.content&&(t.contentStarboard=o.content,e.setState({html:t.contentStarboard},(function(){d.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup,{popup:t,mapController:e.props.mapController})})))})).catch((function(e){console.log(e)}))}else this.setState({html:t.contentStarboard||t.content})}},{key:"highlightFeature",value:function(){var e=this;this.props.feature.set("markLocstyle",!0),window.setTimeout((function(){e.props.feature.set("markLocstyle",!1)}),3e3)}},{key:"componentDidUpdate",value:function(e,t,o){this.props.feature.ol_uid!==e.feature.ol_uid&&this.loadPopup()}},{key:"componentDidMount",value:function(){this.ref.current&&!this.observer&&(this.observer=new IntersectionObserver(this.observerFunction,{root:document,threshold:.1}),this.observer.observe(this.ref.current))}},{key:"componentWillUnmount",value:function(){this.observer=null}},{key:"render",value:function(){var e=null;return this.props.feature.get("distance")&&(e=i.default.createElement("div",{className:"c4g-element-distance"},this.props.langConstants.DIST,": ",(0,p.toHumanDistance)(this.props.feature.get("distanceMatrix")||this.props.feature.get("distance")))),this.state.html?i.default.createElement("li",{ref:this.ref,onMouseUp:this.highlightFeature},i.default.createElement("div",{className:"c4g-popup-wrapper",dangerouslySetInnerHTML:{__html:this.state.html}}),e):null}}])}(i.Component)},"./src/Resources/public/js/components/c4g-starboard-scope.jsx":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var o=C(t);if(o&&o.has(e))return o.get(e);var r={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}(o("./node_modules/react/index.js")),p=o("./node_modules/ol/control.js"),d=o("./src/Resources/public/js/c4g-maps-constant.js"),m=o("./node_modules/ol/source.js"),f=o("./src/Resources/public/js/components/c4g-starboard-scope-item.jsx"),h=o("./src/Resources/public/js/c4g-maps-i18n.js"),b=o("./src/Resources/public/js/c4g-maps-utils.js"),g=(o("./node_modules/ol/index.js"),o("./node_modules/ol/geom.js")),v=o("./node_modules/ol/proj.js"),y=o("./node_modules/ol/sphere.js");function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(C=function(e){return e?o:t})(e)}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var _=i.default.lazy((function(){return Promise.resolve().then(o.bind(o,"./src/Resources/public/js/components/c4g-titlebar.jsx"))}));t.default=function(e){function t(e){var o,r,n,a;(0,s.default)(this,t),r=this,n=t,a=[e],n=(0,c.default)(n);var u=o=(0,l.default)(r,S()?Reflect.construct(n,a||[],(0,c.default)(r).constructor):n.apply(r,a));o.lastTime=-1/0,o.preventAddReqs=!1;var i=document.createElement("div"),d=document.createElement("button");if(o.langConstants=(0,h.getLanguage)(e.mapController.data),e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var f=document.createElement("span");f.innerText=o.langConstants.ELEMENTS_SCOPE,d.appendChild(f)}else d.title=o.langConstants.ELEMENTS_SCOPE;i.className="c4g-starboardscope-control ol-unselectable ol-control ",e.open?i.className+="c4g-open":i.className+="c4g-close",i.appendChild(d),jQuery(i).on("click",(function(e){u.state.open?u.close():u.open()}));var b=e.mapController,g=null,v=e.open||!1;if(b.data.starboardscope.div)o.close=function(){},v=!0;else{g=new p.Control({element:i,target:e.target});var y=b.arrComponents.findIndex((function(e){return"starboardscope"===e.name}));b.arrComponents[y].control=g}o.open=o.open.bind(o),o.close=o.close.bind(o),o.loadMore=o.loadMore.bind(o),o.getFeaturesInScope=o.getFeaturesInScope.bind(o),o.view=e.mapController.map.getView();var C=e.mapController.proxy.layerController;return o.vectorSource=C.vectorSource instanceof m.Cluster?C.vectorSource.getSource():C.vectorSource,o.view.on("change:center",(function(e){o.getFeaturesInScope()})),o.view.on("change:resolution",(function(t){e.mapController.data.minZoomStarboardScope&&o.view.getZoom()<e.mapController.data.minZoomStarboardScope?o.setState({disable:!0}):e.mapController.data.minZoomStarboardScope&&o.state.disable&&o.setState({disable:!1}),o.getFeaturesInScope()})),window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(e){o.getFeaturesInScope()})),o.state={open:v,disable:!1,className:e.className||"c4g-starboardscope-panel",control:g,features:[],maxElements:20},o}return(0,u.default)(t,e),(0,a.default)(t,[{key:"getFeaturesInScope",value:function(){var e=this,t=Date.now(),o=this.props.mapController,r=o.proxy.layerController;if(this.state.open&&!this.state.disable&&this._isMounted&&t>this.lastTime+250){o.data.minZoomStarboardScope&&this.view.getZoom()<o.data.minZoomStarboardScope&&this.setState({features:[]}),this.lastTime=t;var n=this.view.calculateExtent(),s=this.vectorSource.getFeaturesInExtent(n);for(var a in r.vectorSources)if(r.vectorSources.hasOwnProperty(a)){var l=(r.vectorSources[a]instanceof m.Cluster?r.vectorSources[a].getSource():r.vectorSources[a]).getFeaturesInExtent(n);s=s.concat(l)}this.sortFeatures(s)||(this.lastTime=-1/0,window.setTimeout((function(){e.getFeaturesInScope()}),200)),this.setState({features:s})}}},{key:"sortFeatures",value:function(e){if(this.props.mapController.geolocation){var t=this.props.mapController.geolocation.getPosition();if(!t)return!1;var o=0;if(e.sort((function(e,r){var n=new g.LineString([t,e.getGeometry().getCoordinates()]),s=(0,y.getLength)(n);e.set("distance",s);var a=new g.LineString([t,r.getGeometry().getCoordinates()]),l=(0,y.getLength)(a);return o=l>(o=s>o?s:o)?l:o,s-l})),o<30&&this.props.mapController.data.matrixKey){var r=[],n=[];for(var s in n.push((0,v.toLonLat)(t)),e)e.hasOwnProperty(s)&&!e[s].get("distanceMatrix")&&(r.push(e[s]),n.push((0,v.toLonLat)(e[s].getGeometry().getCoordinates())));if(n.length>2&&!this.preventAddReqs){var a=this.props.mapController.data.proxyUrl+"matrix.php?language=de&profile=auto&key="+this.props.mapController.data.matrixKey,l=JSON.stringify({locations:n}),c=this;c.preventAddReqs=!0,fetch(a,{method:"POST",mode:"cors",headers:{"Content-Type":"text/plain"},body:l}).then((function(e){return c.preventAddReqs=!1,e.json().then((function(e){var t=e&&e.sources_to_targets?e.sources_to_targets[0]:[];for(var o in t)t.hasOwnProperty(o)&&r.hasOwnProperty(o)&&r[o].set("distanceMatrix",1e3*t[o].distance);c.sortFeatures(c.state.features),c.forceUpdate()}))}))}}}return e}},{key:"render",value:function(){var e=this;this.state.control&&(this.state.open?(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close")):(jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close")));var t=null;this.state.disable||(t=i.default.createElement("div",{className:"c4g-starboardscope-content-container"},i.default.createElement("ul",null,this.state.features.map((function(t,o){if(o<e.state.maxElements)return i.default.createElement(f.StarboardScopeItem,{mapController:e.props.mapController,langConstants:e.langConstants,index:o,key:o,feature:t,lastElement:o===e.state.maxElements-1,loadMore:e.loadMore})})))));var o=document.querySelector(".c4g-external-headline");return o&&(this.langConstants.ELEMENTS_SCOPE=o.textContent.trim()),i.default.createElement("div",{className:d.cssConstants.STARBOARD_WRAPPER},i.default.createElement(i.Suspense,{fallback:i.default.createElement("div",null,"Loading...")},i.default.createElement(_,{wrapperClass:"c4g-starboardscope-header",headerClass:"c4g-starboardscope-headline",header:this.langConstants.ELEMENTS_SCOPE,closeBtnClass:"c4g-starboardscope-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),t)}},{key:"open",value:function(){var e=this;this.setState({open:!0},(function(){e.view,e.getFeaturesInScope()})),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"loadMore",value:function(){this.setState({maxElements:this.state.maxElements+20})}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(e,t,o){if(this.props.mapController.data.caching&&!this.props.mapController.data.starboardscope.div){var r=b.utils.getValue("panel");"StarboardScope"!==r||this.state.open?"StarboardScope"!==r&&this.state.open&&b.utils.storeValue("panel","StarboardScope"):b.utils.storeValue("panel","")}}}])}(i.Component)}}]);