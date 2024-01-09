/*! For license information please see src_Resources_public_js_components_c4g-geosearch_jsx.bundle.0608ec5d0201395bfe8b.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-geosearch_jsx"],{"./src/Resources/public/js/components/c4g-geosearch.jsx":(e,t,o)=>{var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/typeof.js")),r=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),i=n(o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),h=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var o=E(t);if(o&&o.has(e))return o.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}return n.default=e,o&&o.set(e,n),n}(o("./node_modules/react/index.js")),d=o("./node_modules/ol/control.js"),f=o("./src/Resources/public/js/c4g-maps-i18n.js"),m=o("./src/Resources/public/js/c4g-maps-constant.js"),g=o("./node_modules/ol/proj.js"),C=o("./node_modules/ol/easing.js"),y=o("./node_modules/ol/source.js"),v=o("./node_modules/ol/layer.js"),b=o("./node_modules/ol/style.js"),k=o("./node_modules/ol/index.js"),S=o("./node_modules/ol/geom.js"),R=o("./node_modules/ol/render.js"),j=o("./node_modules/ol/Observable.js"),w=o("./src/Resources/public/js/c4g-maps-utils.js"),_=o("./node_modules/ol/extent.js");function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(E=function(e){return e?o:t})(e)}var x=h.default.lazy((function(){return o.e("src_Resources_public_js_components_c4g-geosearch-results_jsx").then(o.bind(o,"./src/Resources/public/js/components/c4g-geosearch-results.jsx"))})),O=h.default.lazy((function(){return Promise.resolve().then(o.bind(o,"./src/Resources/public/js/components/c4g-titlebar.jsx"))}));t.default=function(e){(0,c.default)(s,e);var t,o,n=(t=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,p.default)(t);if(o){var s=(0,p.default)(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return(0,u.default)(this,e)});function s(e){var t;(0,r.default)(this,s),(t=n.call(this,e)).langConstants=(0,f.getLanguage)(e.mapController.data),t.clickControl=t.clickControl.bind((0,i.default)(t)),t.doneFunction=t.doneFunction.bind((0,i.default)(t));var o=document.createElement("div"),a=document.createElement("button");if(e.mapController.data.themeData.controlLabels){var l=document.createElement("span");l.innerText=t.langConstants.CTRL_GEOSEARCH,a.appendChild(l)}else a.setAttribute("aria-label",t.langConstants.CTRL_GEOSEARCH),a.setAttribute("title",t.langConstants.CTRL_GEOSEARCH);if(o.className="c4g-geosearch ol-control ol-unselectable",o.appendChild(a),jQuery(a).on("click",(function(){t.clickControl()})),e.external&&(o.className+=" c4g-external"),e.mapController.data.geosearch.inputCssSelector){var c=document.querySelector(e.mapController.data.geosearch.inputCssSelector);c.setAttribute("id","c4g-geosearch-input"),c.addEventListener("keydown",(function(e){t.inputCallback(e)})),c.addEventListener("input",(function(e){t.deleteCallback(e)})),t.input=c}else{var u=document.createElement("input");u.setAttribute("id","c4g-geosearch-input"),e.collapsed?jQuery(u).addClass("c4g-close"):jQuery(u).addClass("c4g-open"),u.addEventListener("keydown",(function(e){t.inputCallback(e)})),u.addEventListener("input",(function(e){t.deleteCallback(e)})),o.appendChild(u),t.input=u;var p=document.createElement("span");p.addEventListener("click",(function(){t.clickControl(!0)})),jQuery(p).addClass("searchSpan");var h=document.createElement("i");h.innerHTML='<i class="far fa-times-circle"></i>',p.appendChild(h),o.appendChild(p)}t.controlElement=o;var m=new d.Control({element:o,target:e.target}),g=e.mapController.arrComponents.findIndex((function(e){return"geosearch"===e.name}));if(e.mapController.arrComponents[g].control=m,e.mapController.mapsControls.controls.geosearch=m,t.config={},e.mapController.data.geosearch.searchKey&&e.mapController.data.geosearch.url?(t.config.url=e.mapController.data.geosearch.url+"search.php",t.config.key=e.mapController.data.geosearch.searchKey,t.config.params=e.mapController.data.geosearch.params):t.config.url=e.mapController.data.api.geosearch+"/"+e.mapController.data.profile,t.config.zoomlevel=e.searchZoom,t.config.zoombounds=e.zoomBounds,t.config.quicksearch=e.quicksearch||!0,t.config.animate=e.animate,t.config.markResult=e.markResult,t.config.animateDuration=e.animateDuration,t.config.resultDuration=e.resultDuration,t.config.popup=e.popup,t.config.autopick=e.autopick,t.config.mapController=e.mapController,t.config.results=e.results,t.config.resultStyle=e.resultStyle,t.config.resultStyle&&parseInt(t.config.resultStyle,10)>0){var C=(0,i.default)(t);e.mapController.proxy.locationStyleController.arrLocStyles[t.config.resultStyle]?t.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[t.config.resultStyle].style:e.mapController.proxy.locationStyleController.loadLocationStyles([t.config.resultStyle],{done:function(){C.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[C.config.resultStyle].style}})}return t.config.collapsed=e.collapsed,t.config.resultCount=e.resultCount,t.config.caching=e.caching,t.config.placeholder=e.placeholder,t.state={open:!e.collapsed,query:"",results:[],currentCoordinate:[],openResults:!1,currentResult:null},t.inputCallback=t.inputCallback.bind((0,i.default)(t)),t.deleteCallback=t.deleteCallback.bind((0,i.default)(t)),t.startSearch=t.startSearch.bind((0,i.default)(t)),t.zoomTo=t.zoomTo.bind((0,i.default)(t)),t.closeResults=t.closeResults.bind((0,i.default)(t)),t.openResults=t.openResults.bind((0,i.default)(t)),t.close=t.close.bind((0,i.default)(t)),t.closeResultsCompletely=t.closeResultsCompletely.bind((0,i.default)(t)),t}return(0,l.default)(s,[{key:"render",value:function(){var e=this,t=this.state.open&&this.state.openResults?"c4g-open":"c4g-close";this.props.extDiv&&(t+=" external ");var o="";this.state.openResults&&this.config.results&&(o=h.default.createElement(x,{className:t,results:this.state.results,extDiv:this.props.extResultsDiv,zoomFunc:function(t){e.setState({currentResult:e.state.results[t]}),e.zoomTo(t)},closeResults:this.closeResults,headline:this.props.resultsHeadline,currentResult:this.state.currentResult,resultsDiv:this.props.resultsDiv,open:this.state.results.length>0,openResults:this.openResults,closeCb:this.closeResultsCompletely}));var n="",s="";this.props.external||(n="c4g-titlebar-close",s=this.clickControl);var a=this.props.headline;a||(a=this.langConstants.GEOSEARCH);var r=null;return this.props.external&&(r=h.default.createElement("div",{className:"c4g-geosearch-filter"},h.default.createElement("input",{type:"text",onInput:this.deleteCallback,onKeyDown:this.inputCallback,id:"c4g-geosearch-input",placeholder:this.config.placeholder,"aria-label":this.config.placeholder}),h.default.createElement("button",{className:m.cssConstants.GEOSEARCH_START,type:"button",title:this.langConstants.CTRL_START_SEARCH,onMouseUp:this.startSearch}))),this.props.external||this.state.open&&this.state.openResults?h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:m.cssConstants.GEOSEARCH_WRAPPER+" "+t+" c4g-horizon"},h.default.createElement(h.Suspense,{fallback:h.default.createElement("div",null,"Loading...")},h.default.createElement(O,{wrapperClass:"c4g-geosearch-header",header:a,headerClass:"c4g-geosearch-headline",detailBtnClass:"",detailBtnCb:"",closeBtnClass:n,closeBtnCb:s,closeBtnTitle:this.langConstants.CLOSE})),r,o)):null}},{key:"closeResultsCompletely",value:function(){this.setState({openResults:!1})}},{key:"componentDidUpdate",value:function(e,t,o){if(this.props.mapController&&this.props.mapController.data&&this.props.mapController.data.geosearch&&this.props.mapController.data.geosearch.results&&(this.state.open?(t.open!==this.state.open&&this.state.results&&this.state.results.length&&this.props.mapController.setOpenComponent(this),this.state.openResults&&!this.props.extResultsDiv&&jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close")):jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open"),this.props.mapController.data.caching)){var n=w.utils.getValue("panel");"GeoSearch"!==n||this.state.open?"GeoSearch"!==n&&this.state.open&&w.utils.storeValue("panel","GeoSearch"):w.utils.storeValue("panel","")}}},{key:"close",value:function(){this.setState({open:!1})}},{key:"startSearch",value:function(e){e.stopPropagation();var t=document.querySelector(m.cssConstants.GEOSEARCH_START);try{t.blur()}catch(e){}var o=jQuery("#c4g-geosearch-input");o.val()&&this.findLocation(o.val())}},{key:"inputCallback",value:function(e){if(e.stopPropagation(),13===e.which){var t=jQuery("#c4g-geosearch-input");return t.val()&&this.findLocation(t.val()),!1}}},{key:"deleteCallback",value:function(e){e.stopPropagation();var t=jQuery("#c4g-geosearch-input").val();if(this.lastVal!==t&&(this.lastVal=t,t.length<1)){var o=this.props.mapController.arrComponents.findIndex((function(e){return"layerswitcher"===e.name}));o&&this.props.mapController.arrComponents[o]&&this.props.mapController.arrComponents[o].component.toggleAllLayers(!1)}}},{key:"clickControl",value:function(e){(void 0!==e?e:this.state.open)?(this.setState({open:!1}),this.props.external||jQuery(this.input).addClass("c4g-close").removeClass("c4g-open")):(this.setState({open:!0}),this.props.external||(jQuery(this.input).removeClass("c4g-close").addClass("c4g-open"),this.input.focus()))}},{key:"closeResults",value:function(){this.setState({detailOpenResults:!1})}},{key:"openResults",value:function(){this.setState({detailOpenResults:!0})}},{key:"findLocation",value:function(e,t){var o,n=this;if((o=this.props.mapController).map,o.spinner.show(),this.config.animate,this.config.animateDuration,this.config.markResult,"object"===(0,a.default)(t)&&(void 0!==t.animate&&t.animate,void 0!==t.markResult&&t.markResult),this.config.quicksearch){var s={format:"json",q:e};if(this.config.resultCount&&(s.limit=this.config.resultCount),this.config.key&&(s.key=this.config.key),this.config.params)for(var r in this.config.params)this.config.params.hasOwnProperty(r)&&(s[r]=this.config.params[r]);var l=w.utils.callHookFunctions(window.c4gMapsHooks.hook_search,[s,this]);if(l&&l.length>0)for(var i in this.config.mapController.spinner.hide(),l)l.hasOwnProperty(i)&&this.doneFunction(l[i]);else{jQuery.ajax({dataType:"json",url:this.config.url,data:s}).done(this.doneFunction).fail((function(){})).always((function(){n.config.mapController.spinner.hide()}));var c=o.arrComponents.findIndex((function(e){return"layerswitcher"===e.name}));if(c&&o.arrComponents[c]){var u=o.arrComponents[c].component;u.buttonEnabled&&u.toggleAllLayers()}}}}},{key:"doneFunction",value:function(e){var t,o,n,s,a=this.props.mapController,r=a.map,l=this.config.animate,i=(this.config.animateDuration,this.config.markResult);if(e&&e.length&&e.length>0){if(t=r.getView(),e[0])if(s=e[0],this.results=e,s.hasOwnProperty("uuid")){var c=a.arrComponents.findIndex((function(e){return"layerswitcher"===e.name})),u=!1;c&&a.arrComponents[c]&&(u=a.arrComponents[c].component);var p=[],h=[];for(var d in this.results)this.results.hasOwnProperty(d)&&(this.results[d].hasOwnProperty("uuid")&&p.push(this.results[d].uuid),this.results[d].hasOwnProperty("lon")&&this.results[d].hasOwnProperty("lat")&&h.push((0,g.transform)([parseFloat(this.results[d].lon),parseFloat(this.results[d].lat)],"EPSG:4326","EPSG:3857")));u&&u.toggleAllLayers(!0,p);var m=r.getSize(),C=(0,_.boundingExtent)(h),y={duration:250,padding:[m[1]/10,m[0]/10,m[1]/10,m[0]/10]};r.getView().fit(C,y)}else o=t.getCenter(),n=(0,g.transform)([parseFloat(s.lon),parseFloat(s.lat)],"EPSG:4326","EPSG:3857"),l?this.flyTo(r,n,this.config.zoomlevel,this.config.zoombounds,s.bounding_box,i,this.config.resultDuration,l,this.config.animateDuration,r.getView()):(this.completeSearch(this.config.markResult,this.config.animate,void 0,this.config.animateDuration,n,this.config.resultDuration),t.setCenter(n),this.config.zoomlevel>=0&&r.getView().setZoom(this.config.zoomlevel)),this.config.autopick&&this.config.mapController.geopicker&&"function"==typeof this.config.mapController.geopicker.pick&&this.config.mapController.geopicker.pick(n);else{var v=(0,f.getLanguage)(this.options.mapController.data);alert(v.SEARCH_NOT_FOUND)}this.results&&(this.props.mapController.hideOtherComponents(this),this.setState({results:this.results,open:!0,currentCoordinate:o,openResults:!0,currentResult:e[0]}),this.props.mapController.setOpenComponent(this))}}},{key:"flyTo",value:function(e,t,o,n,s,a,r,l,i,c){var u,p=i,h=o,d=2,f=!1,m=this;function y(o){if(--d,!(f||0!==d&&o)){if(f=!0,n&&s&&null!==s[0]&&null!==s[1]&&null!==s[2]&&null!==s[3]){var y=[];y.push(parseFloat(s[2])),y.push(parseFloat(s[0])),y.push(parseFloat(s[3])),y.push(parseFloat(s[1])),u=(0,g.transformExtent)(y,"EPSG:4326","EPSG:3857"),window.setTimeout((function(){c.fit(u,e.getSize(),{minZoom:c.get("minZoom")||2,maxZoom:h||c.get("maxZoom")||18,duration:p/2,easing:C.easeOut})}),p)}m.completeSearch(a,l,"bounce",i,t,r)}}e.getView().animate({center:t,duration:p},y),e.getView().animate({zoom:h-1,duration:p/2},{zoom:h,duration:p/2},y)}},{key:"completeSearch",value:function(e,t,o,n,s,a){var r=this;if(e){var l,i,c,u;i=new y.Vector;var p=this.config.resultStyle;p&&"0"!==p||(p=[new b.Style({image:new b.Circle({radius:7,snapToPixel:!1,stroke:new b.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new b.Style({image:new b.Circle({radius:20,snapToPixel:!1,stroke:new b.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new b.Style({image:new b.Circle({radius:33,snapToPixel:!1,stroke:new b.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})})]),c=new v.Vector({style:p,source:i,zIndex:99999}),this.props.mapController.map.addLayer(c),l=function(){i.addFeature(new k.Feature(new S.Point(s)))},u=function(e){var t,o,n,s;o=(new Date).getTime(),n=a,t=function(t){var a,r,l,c,u;a=(0,R.getVectorContext)(t),r=t.frameState,u=e.getGeometry().clone(),c=(l=r.time-o)/n,(0,C.linear)(1-c),(0,C.linear)(c);var p=new b.Style;if(a.setStyle(p),a.drawGeometry(u,null),l>n)return i.clear(),void(0,j.unByKey)(s);r.animate=!0},s=c.on("postrender",t)},i.on("addfeature",(function(e){u(e.feature)})),t?window.setTimeout(l,n/2):l()}if(this.config.popup){var h=this.props.mapController.map.getPixelFromCoordinate(s);window.setTimeout((function(){r.props.mapController.map.dispatchEvent({type:"click",pixel:h},100)}))}}},{key:"zoomTo",value:function(e){var t,o,n,s,a=(t=this.props.mapController.map).getView(),r=this.state.currentCoordinate;if(o=this.results[e],n=(0,g.transform)([parseFloat(o.lon),parseFloat(o.lat)],"EPSG:4326","EPSG:3857"),this.config.animate){a.getResolution();var l=a.calculateExtent(t.getSize());if((0,_.containsCoordinate)(l,n))s="zoom";else{if(Math.abs(r[0]-n[0])>Math.abs(r[1]-n[1]))Math.abs(r[0]-n[0]),(0,_.getWidth)(l);else Math.abs(r[1]-n[1]),(0,_.getHeight)(l);s="bounce"}this.flyTo(t,n,this.config.zoomlevel,this.config.zoombounds,o.bounding_box,this.config.markResult,this.config.resultDuration,this.config.animate,this.config.animateDuration,a)}else this.completeSearch(this.config.markResult,this.config.animate,s,this.config.animateDuration,n,this.config.resultDuration),t.getView().setCenter(n),this.config.zoomlevel>=0&&t.getView().setZoom(this.config.zoomlevel)}}]),s}(h.Component)}}]);