/*! For license information please see src_Resources_public_js_components_c4g-router-controls_jsx.bundle.e4a9faedec76a3244e1a.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-router-controls_jsx"],{"./src/Resources/public/js/components/c4g-autocomplete-input.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.AutocompleteInput=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./node_modules/ol/geom.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function m(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,h()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}t.AutocompleteInput=function(e){function t(e){var r;return(0,n.default)(this,t),(r=m(this,t,[e])).listenerRegistered=!1,r.state={arrAddresses:[]},r.wrapperRef=c.default.createRef(),r.handleClickOutside=r.handleClickOutside.bind((0,i.default)(r)),r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.setState({arrAddresses:[]})}},{key:"render",value:function(){var e=this,t=this,r=null;if(this.state.arrAddresses&&this.state.arrAddresses.length>0){var o=[],s=function(){if(e.state.arrAddresses.hasOwnProperty(n)){var r=e.state.arrAddresses[n],s=c.default.createElement("li",{key:n,className:"c4g-autocomplete-item",onMouseUp:function(e){!function(e){jQuery("#"+e.props.cssId).val(r.name),new d.Point([r.pos[1],r.pos[0]]),e.props.cssId.includes("From")?e.props.router.setRouteFrom(r.pos[1],r.pos[0],!0):e.props.cssId.includes("To")?e.props.router.setRouteTo(r.pos[1],r.pos[0],!0):e.props.cssId.includes("Over")?e.props.router.addOverPoint(r.pos[1],r.pos[0],e.props.index,!0):e.props.cssId.includes("area")&&e.props.router.setAreaPoint(r.pos[1],r.pos[0],!0),e.setState({arrAddresses:[]})}(t)}},r.name);o.push(s)}};for(var n in this.state.arrAddresses)s();r=c.default.createElement("ul",{className:"c4g-autocomplete"},o)}return c.default.createElement("div",{className:"c4g-autocomplete-wrapper",ref:this.wrapperRef},c.default.createElement("input",{id:this.props.cssId,type:"search",defaultValue:this.props.value,onKeyDown:function(e,r){var o,s,n;13===e.keyCode?((n=$("#"+t.props.cssId)).trigger("change"),-1!==t.props.cssId.indexOf("area")?(s="areaValue",o=function(){t.props.router.performArea()}):(s=-1!==t.props.cssId.indexOf("From")?"fromValue":"toValue",o=function(){t.props.router.performViaRoute()}),t.props.router.performSearch(n,s,o)):0!==$(e.currentTarget).val().length||e.keyCode?(t.counter=Math.floor(Date.now()),setTimeout((function(){if(t.counter&&t.counter+400<Math.floor(Date.now())){delete t.counter;var e=-1!==t.props.cssId.indexOf("area")?"areaValue":-1!==t.props.cssId.indexOf("From")?"fromValue":"toValue",r=$("#"+t.props.cssId);t.props.objSettings.proxyUrl&&t.props.objSettings.keyAutocomplete?(t.props.router.performSearch(r,e,!1),t.autocompleteAddress($("#"+t.props.cssId).val(),"#"+t.props.cssId)):t.props.router.performSearch(r,e)}}),500)):"function"==typeof t.props.objFunctions.deleteFunction?t.props.objFunctions.deleteFunction(e.currentTarget,e.currentTarget.id):t.props.objFunctions[t.props.index].deleteFunction(e.currentTarget,e.currentTarget.id)},autoComplete:"off"}),r)}},{key:"setCenter",value:function(e){this.objSettings.center=e}},{key:"autocompleteAddress",value:function(e,t){var r,o,s=this,n=s.props.objSettings;if(n.center)if("function"==typeof n.center){var a=n.center();r=a[0]+","+a[1]}else r=n.center[0]+","+n.center[1];else n.bBox&&(r=(parseFloat(n.bBox[0])+parseFloat(n.bBox[2]))/2+","+(parseFloat(n.bBox[1])+parseFloat(n.bBox[3]))/2);if(o=r?n.proxyUrl+"autocomplete.php?format=json&key="+n.keyAutocomplete+"&q="+e+"&center="+r:n.proxyUrl+"autocomplete.php?format=json&key="+n.keyAutocomplete+"&q="+e,n.geosearchParams)for(var l in n.geosearchParams)n.geosearchParams.hasOwnProperty(l)&&(o+="&"+l+"="+n.geosearchParams[l]);n.resultCount&&(o+="&limit="+n.resultCount),$.ajax({url:o}).done((function(e){var t,r=this;if(n.center?t=n.center:n.bBox&&(t=[(parseFloat(n.bBox[0])+parseFloat(n.bBox[2]))/2,(parseFloat(n.bBox[1])+parseFloat(n.bBox[3]))/2]),e.length>0){var o=[];if(n.bBox&&n.bBox[0]&&e[0]&&e[0].display_name&&t){var a=function(){if(e.hasOwnProperty(l)&&r.isInBoundingBox(e[l].lon,e[l].lat,n.bBox)){var s={dist:Math.sqrt((t[0]-e[l].lon)*(t[0]-e[l].lon)+(t[1]-e[l].lat)*(t[1]-e[l].lat)),pos:[e[l].lat,e[l].lon],name:e[l].display_name};-1===o.findIndex((function(e){return e.name===s.name}))&&o.push(s)}};for(var l in e)a();o.sort((function(e,t){return e.dist-t.dist}))}else if(e[0]&&e[0].display_name){var u=function(){if(e.hasOwnProperty(i)){var t={pos:[e[i].lat,e[i].lon],name:e[i].display_name};-1===o.findIndex((function(e){return e.name===t.name}))&&o.push(t)}};for(var i in e)u()}s.setState({arrAddresses:o})}}))}},{key:"isInBoundingBox",value:function(e,t,r){return"string"==typeof e&&(e=parseFloat(e)),"string"==typeof t&&(t=parseFloat(t)),r[0]<e&&e<r[2]&&r[1]<t&&t<r[3]}}]),t}(c.Component)},"./src/Resources/public/js/components/c4g-horizontal-panel.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalPanel=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./node_modules/ol/control.js"),f=r("./src/Resources/public/js/c4g-maps-constant.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function h(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,b()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}t.HorizontalPanel=function(e){function t(e){var r;(0,n.default)(this,t),r=h(this,t,[e]),(0,i.default)(r),r.element=document.createElement("div");var o=document.createElement("button");if(e.title&&(o.title=e.title),r.element.className=(e.className||"c4g-horizontal-panel")+"-button-"+(e.direction||"top")+" ol-control ol-unselectable",r.element.appendChild(o),e.mapController.data.themeData.controlLabels){var s=document.createElement("span");s.innerText=e.title,o.appendChild(s)}else o.title=e.title;r.clickControl=r.clickControl.bind((0,i.default)(r)),jQuery(o).on("click",r.clickControl),e.mapController;var a=new d.Control({element:r.element,target:e.target});return r.control=a,r.state={direction:e.direction||"top",open:e.open||!1,className:e.className||"c4g-horizontal-panel",childs:e.childs||[],control:a},r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.state.className+"-"+this.state.direction;return e+=" "+(this.state.open?"c4g-open":"c4g-close"),c.default.createElement("div",{className:e})}},{key:"clickControl",value:function(){this.state.open?this.close():this.open()}},{key:"open",value:function(){this.setState({open:!0}),this.slideOutCollidingElements()}},{key:"close",value:function(){this.setState({open:!1}),this.slideInCollidingElements()}},{key:"slideOutCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TL+" ."+f.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="100px"})),(e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="100px"}))}else{var t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BL+" ."+f.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="100px"})),(t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="100px"}))}}},{key:"slideInCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TL+" ."+f.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="0px"})),(e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="0px"}))}else{var t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BL+" ."+f.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="0px"})),(t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="0px"}))}}},{key:"addContent",value:function(e){this.state.childs.push(e)}}]),t}(c.Component)},"./src/Resources/public/js/components/c4g-router-address-field.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressField=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./src/Resources/public/js/components/c4g-autocomplete-input.jsx"),f=(r("./node_modules/ol/geom.js"),r("./src/Resources/public/js/routing-constant-i18n.js")),m=r("./node_modules/ol/proj.js");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function b(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,g()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}t.RouterAddressField=function(e){function t(e){var r;return(0,n.default)(this,t),(r=b(this,t,[e])).languageConstants=(0,f.getLanguage)(r.props.router.props.mapController.data),r.getPosition=r.getPosition.bind((0,i.default)(r)),r.removeContent=r.removeContent.bind((0,i.default)(r)),!e.router.mapData.initialPosition||"routingFrom"!==e.name&&"areaFrom"!==e.name?e.router.mapData.initialDestination&&"routingTo"===e.name&&(window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(t){var o=e.router.props.mapController.map.getView().getCenter(),s={coords:{}};s.coords.longitude=(0,m.transform)(o,"EPSG:3857","EPSG:4326")[0],s.coords.latitude=(0,m.transform)(o,"EPSG:3857","EPSG:4326")[1],r.handlePosition(s)}))):r.getPosition(),r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=null;return this.props.withPosition&&(e=c.default.createElement("button",{className:"c4g-router-position",onMouseUp:this.getPosition,title:this.languageConstants.ROUTE_POSITION})),c.default.createElement("div",{className:this.props.className},c.default.createElement("label",{htmlFor:this.props.name},this.props.label),e,c.default.createElement(d.AutocompleteInput,{type:"search",className:this.props.class,name:this.props.name,cssId:this.props.cssId,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,popup:this.props.popup,containerAddresses:this.props.containerAddresses,router:this.props.router,value:this.props.value,index:this.props.index}),c.default.createElement("button",{className:"c4g-router-input-clear",onMouseUp:this.removeContent,title:this.languageConstants.REMOVE_ADDRESS}))}},{key:"removeContent",value:function(e){jQuery("#"+this.props.cssId).val(""),this.props.clearInput(e)}},{key:"getPosition",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.handlePosition(t)})):console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.")}},{key:"handlePosition",value:function(e){var t=e.coords;"routingFrom"===this.props.name?this.props.router.setRouteFrom(t.longitude,t.latitude):"overValue"===this.props.name||"routingTo"===this.props.name&&this.props.router.setRouteTo(t.longitude,t.latitude),"areaFrom"===this.props.name&&this.props.router.setAreaPoint(t.longitude,t.latitude),this.props.router.recalculateRoute()}}]),t}(c.Component)},"./src/Resources/public/js/components/c4g-router-address-input.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressInput=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),c=r("./src/Resources/public/js/components/c4g-router-address-field.jsx"),d=(r("./src/Resources/public/js/components/c4g-router-profile-selection.jsx"),r("./src/Resources/public/js/components/c4g-router-layer-selection.jsx")),f=r("./src/Resources/public/js/components/c4g-router-detour-slider.jsx"),m=r("./src/Resources/public/js/routing-constant-i18n-de.js"),h=r("./src/Resources/public/js/routing-constant-i18n-en.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function g(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,y()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}t.RouterAddressInput=function(e){function t(e){var r;return(0,n.default)(this,t),r=g(this,t,[e]),e.router||console.warn("The routing component needs a router, it won't work correctly since none was passed..."),r.state={router:e.router},void 0!==e.router.props.mapController.data&&("de"===e.router.props.mapController.data.lang?r.langConstants=m.routingConstantsGerman:r.langConstants=h.routingConstantsEnglish),r}return(0,i.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e,t=this,r=this,o="";this.props.enableOverPoints&&"route"===this.props.mode&&(o=Object.keys(this.props.overSettings.overPoints).map((function(e){return p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-over-"+e,name:"overPoint-"+e,label:t.langConstants.ROUTER_Label_Interim,cssId:"routingOver-"+e,objFunctions:t.props.overSettings.objFunctions,objSettings:t.props.objSettings,containerAddresses:t.props.containerAddresses,value:t.props.overSettings.overAddresses[e],router:t.props.router,key:e,index:e,clearInput:function(){t.props.overSettings.objFunctions[e].deleteFunction()}})})));var s="",n="",a="";"route"===this.props.mode?a=" invisible":(s=" invisible",n=" invisible");var l="";this.props.switchTargets&&"route"===this.props.mode&&(l=p.default.createElement("button",{className:"c4g-router-switch",onMouseUp:function(){r.props.overSettings.swapPoints();var e=jQuery("#routingFrom").val();jQuery("#routingFrom").val(jQuery("#routingTo").val()),jQuery("#routingTo").val(e)}}));var u="";this.props.enableOverPoints&&"route"===this.props.mode&&(u=p.default.createElement("button",{className:"c4g-router-over",onMouseUp:this.props.overSettings.overFunction}));var i=this.props.overSettings.overPoints.length+1;e=p.default.createElement(p.default.Fragment,null,p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-from"+s,name:"routingFrom",label:this.langConstants.ROUTER_FROM,key:i,cssId:"routingFrom",objFunctions:this.props.objFunctions.fromFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.from,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.fromAddress,router:this.props.router}),o,p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-to"+n,name:"routingTo",label:this.langConstants.ROUTER_TO,key:i+1,cssId:"routingTo",objFunctions:this.props.objFunctions.toFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.to,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.toAddress,router:this.props.router}),p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-area"+a,name:"areaFrom",label:this.langConstants.ROUTER_CENTER,key:i+2,cssId:"areaInput",objFunctions:this.props.objFunctions.areaFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.area,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.areaAddress,router:this.props.router}));var m="",h="";this.props.router.props.mapController.data.showFeatures&&this.props.layers&&(h=p.default.createElement(p.default.Fragment,null,p.default.createElement(d.RouterLayerSelection,{layers:this.props.layers,router:this.props.router,activeLayerValue:"route"===this.props.router.state.mode?this.props.router.state.layerValueRoute:this.props.router.state.layerValueArea}),p.default.createElement(f.RouterDetourSlider,{min:this.props.sliderOptions.min,max:this.props.sliderOptions.max,value:this.props.sliderOptions.value,router:this.props.sliderOptions.router}))),"route"===this.props.mode?m=p.default.createElement("div",{className:"buttonbar"},u,l,h):"area"===this.props.mode&&(m=p.default.createElement("div",{className:"buttonbar"},h));var b=null;return this.props.router.props.mapController.data.routeStartButton&&(b=p.default.createElement("button",{className:"c4g-route-search-start",onMouseUp:this.props.router.recalculateRoute},this.langConstants.START_ROUTE)),p.default.createElement("div",{className:this.props.className},e,b,m)}}]),t}(p.Component)},"./src/Resources/public/js/components/c4g-router-controls.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./src/Resources/public/js/components/c4g-horizontal-panel.jsx"),f=r("./src/Resources/public/js/components/c4g-router-address-input.jsx"),m=r("./src/Resources/public/js/components/c4g-titlebar.jsx"),h=r("./src/Resources/public/js/routing-constant-i18n.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function g(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,y()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var v=c.default.lazy((function(){return Promise.resolve().then(r.bind(r,"./src/Resources/public/js/components/c4g-router-profile-selection.jsx"))}));t.default=function(e){function t(e){var r;(0,n.default)(this,t),(r=g(this,t,[e])).state.router=r.props.router,r.state.showForm=!0,r.setRouteMode=r.setRouteMode.bind((0,i.default)(r)),r.setAreaMode=r.setAreaMode.bind((0,i.default)(r)),r.close=r.close.bind((0,i.default)(r)),r.langConstants=(0,h.getLanguage)(e.mapController.data);var o=e.mapController.arrComponents.findIndex((function(e){return"router"===e.name}));return e.mapController.arrComponents[o].control=r.control,e.mapController.data.router_div&&r.element&&r.element.className&&(r.element.className+=" c4g-external"),r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"setRouteMode",value:function(e){e.stopPropagation(),this.props.router.setMode("route")}},{key:"setAreaMode",value:function(e){e.stopPropagation(),this.props.router.setMode("area")}},{key:"componentDidUpdate",value:function(e,t,r){this.slideOutCollidingElements()}},{key:"render",value:function(){var e=this,t="c4g-router-content"+(this.props.open?" c4g-open ":" c4g-close ")+this.props.mode,r=this.props.open;return this.state.showForm?c.default.createElement("div",{className:t},c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",null,'"loading..."')},c.default.createElement(v,{profiles:this.props.router.state.profiles,router:this.props.router,currentProfile:this.props.router.state.currentProfile})),c.default.createElement(f.RouterAddressInput,{className:"c4g-router-input-content",router:this.props.router,withPosition:!0,switchTargets:this.props.switchTargets,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,currentProfile:this.props.currentProfile,enableOverPoints:this.props.enableOverPoints,containerAddresses:this.props.containerAddresses,mode:this.props.mode,open:r,layers:this.props.layers,resetFunctions:this.props.resetFunctions,fromAddress:this.props.fromAddress,toAddress:this.props.toAddress,areaAddress:this.props.areaAddress,sliderOptions:this.props.sliderOptions,profiles:this.props.profiles,overSettings:this.props.overSettings})):c.default.createElement("div",{className:t},c.default.createElement(m.Titlebar,{wrapperClass:"c4g-router-header",header:headline,headerClass:"c4g-router-headline",detailBtnClass:"c4g-router-extended-options",detailBtnCb:this.toggleDetails,closeBtnClass:"c4g-router-close",closeBtnCb:this.close}),c.default.createElement("button",{className:"c4g-router-hide-form-button",onMouseUp:function(){e.setState({showForm:!e.state.showForm})}}))}},{key:"slideInCollidingElements",value:function(){}},{key:"slideOutCollidingElements",value:function(){var e=this.props.className+(this.props.open?" c4g-open":" c4g-close"),t=document.getElementsByClassName(e)[0];t&&t.offsetHeight}},{key:"open",value:function(){this.props.setOpen(!0),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open")}},{key:"close",value:function(){this.props.setOpen(!1),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"clickControl",value:function(e){var t=this.props.router.props.mapController.routerContainer.className.includes("c4g-close");this.props.open?t?jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open"):this.close():this.props.open||this.open()}}]),t}(d.HorizontalPanel)},"./src/Resources/public/js/components/c4g-router-detour-slider.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterDetourSlider=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./src/Resources/public/js/routing-constants.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function m(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,h()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}r("./src/Resources/public/js/c4g-maps-utils.js"),t.RouterDetourSlider=function(e){function t(e){var r;return(0,n.default)(this,t),(r=m(this,t,[e])).handleChange=r.handleChange.bind((0,i.default)(r)),r.updated=!1,r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("."+d.routingConstants.ROUTE_TOGGLE);t.on("input",(function(){var t=jQuery(this),r=t.attr("max")-t.attr("min"),o=(t.val()-t.attr("min"))/r*100,s=Math.round(50*o/100)-25;t.next("output").css("left","calc("+o+"% - "+s+"px)").text(t.val()+" km"),e.props.router.props.mapController.data.usePermalink&&e.props.router.permalink.updateLinkFragments("detour",t.val())})),t.on("change",(function(){"route"===e.props.router.state.mode?e.props.router.setState({detourRoute:t.val()},e.props.router.recalculateRoute):e.props.router.setState({detourArea:t.val()},(function(){e.props.router.performArea(e.props.router.state.areaValue)}))})),t.trigger("input")}},{key:"render",value:function(){var e=null;if(this.props.router.props.mapController.data.detourElement){var t=("route"===this.props.router.state.mode?this.props.router.props.mapController.data.arrDetourOptionsRoute:this.props.router.props.mapController.data.arrDetourOptionsArea).map((function(e){return c.default.createElement("option",{key:e,value:e},e," km")}));e=c.default.createElement("select",{className:"c4g-detour-selection",onChange:this.handleChange,value:this.props.value},t)}else e=c.default.createElement("div",{className:"c4g-router-detour-range"},c.default.createElement("p",null,d.routingConstants.ROUTE_DETOUR),c.default.createElement("input",{type:"range",className:d.routingConstants.ROUTE_TOGGLE,min:this.props.min,max:this.props.max,defaultValue:this.props.value,step:.5}),c.default.createElement("output",{className:d.routingConstants.OUTPUT_DETOUR},this.props.value+" km"));return e}},{key:"componentDidUpdate",value:function(e,t,r){var o=document.querySelector("."+d.routingConstants.ROUTE_TOGGLE),s=this;this.updated||(jQuery(o).on("input",(function(){var e=jQuery(this),t=e.attr("max")-e.attr("min"),r=(e.val()-e.attr("min"))/t*100,o=Math.round(50*r/100)-25;e.next("output").css("left","calc("+r+"% - "+o+"px)").text(e.val()+" km"),s.props.router.props.mapController.data.usePermalink&&s.props.router.permalink.updateLinkFragments("detour",e.val())})),jQuery(o).on("change",(function(){"route"===s.props.router.state.mode?s.props.router.setState({detourRoute:jQuery(o).val()},s.props.router.recalculateRoute):s.props.router.setState({detourArea:jQuery(o).val()},(function(){s.props.router.performArea(s.props.router.state.areaValue)}))})),jQuery(o).trigger("input"),this.updated=!0)}},{key:"handleChange",value:function(e){var t=this,r=e.target.value;"route"===this.props.router.state.mode?this.props.router.setState({detourRoute:r},this.props.router.recalculateRoute):this.props.router.setState({detourArea:r},(function(){t.props.router.performArea(t.props.router.state.areaValue)}))}}]),t}(c.Component)},"./src/Resources/public/js/components/c4g-router-layer-selection.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterLayerSelection=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js"));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function f(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,m()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}t.RouterLayerSelection=function(e){function t(e){var r;return(0,n.default)(this,t),(r=f(this,t,[e])).setLayer=r.setLayer.bind((0,i.default)(r)),r.setLayerValue=r.setLayerValue.bind((0,i.default)(r)),r.setLayerOrValue=r.setLayerOrValue.bind((0,i.default)(r)),r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"setLayer",value:function(e){var t=e.target.value;this.props.router.setLayer(parseInt(t,10))}},{key:"setLayerValue",value:function(e){var t=e.target.value;this.props.router.setLayerValue(t)}},{key:"setLayerOrValue",value:function(e){var t=JSON.parse(e.target.value),r="route"===this.props.router.state.mode?this.props.router.state.layerRoute:this.props.router.state.layerArea;parseInt(t.id)!==parseInt(r)&&this.props.router.setLayer(parseInt(t.id,10)),this.props.router.setLayerValue(t.name)}},{key:"render",value:function(){var e=this,t=0,r=this.props.router.objLayers,o="";if(this.props.router.props.mapController.data.layerChanger){"route"===this.props.router.state.mode?t=JSON.stringify({id:this.props.router.state.layerRoute,name:this.props.router.state.layerValueRoute}):"area"===this.props.router.state.mode&&(t=JSON.stringify({id:this.props.router.state.layerArea,name:this.props.router.state.layerValueArea}));var s;return s=Object.keys(this.props.layers).length>1?Object.keys(this.props.layers).map((function(t){var o=r[t].layerData;return Object.keys(e.props.layers[t]).length>1?c.default.createElement("optgroup",{key:t,style:{color:"var(--main-color)"},label:o.name},Object.keys(e.props.layers[t]).map((function(r){return e.props.layers[t][r],c.default.createElement("option",{key:r,style:{color:"var(--main-color)"},value:JSON.stringify({id:t,name:r})},r)}))):Object.keys(e.props.layers[t]).map((function(r){return e.props.layers[t][r],c.default.createElement("option",{key:r,style:{color:"var(--main-color)"},value:JSON.stringify({id:t,name:r})},r)}))})):Object.keys(this.props.layers).map((function(t){return r[t].layerData,Object.keys(e.props.layers[t]).map((function(r){return e.props.layers[t][r],c.default.createElement("option",{key:r,style:{color:"var(--main-color)"},value:JSON.stringify({id:t,name:r})},r)}))})),c.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayerOrValue,value:t},s)}return"route"===this.props.router.state.mode?t=this.props.router.state.layerRoute:"area"===this.props.router.state.mode&&(t=this.props.router.state.layerArea),this.props.layers&&Object.keys(this.props.layers[t]).length>1&&(o=c.default.createElement("div",{className:"c4g-router-layer-value-selection"},Object.keys(this.props.layers[t]).map((function(r){return c.default.createElement("button",{className:e.props.activeLayerValue===r?"c4g-active":"c4g-inactive",onMouseUp:e.setLayerValue,key:e.props.layers[t][r].mapLabel,value:r,title:r},r)})))),this.props.layers&&Object.keys(this.props.layers).length>1?c.default.createElement(c.default.Fragment,null,c.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayer,value:t},Object.keys(this.props.layers).map((function(e){var t=r[e].layerData;return c.default.createElement("option",{key:e,value:e},t.name)}))),o):c.default.createElement(c.default.Fragment,null,o)}}]),t}(c.Component)},"./src/Resources/public/js/components/c4g-router-profile-selection.jsx":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./src/Resources/public/js/routing-constant-i18n.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function m(e,t,r){return t=(0,u.default)(t),(0,l.default)(e,h()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}t.default=function(e){function t(e){var r;return(0,n.default)(this,t),(r=m(this,t,[e])).setProfile=r.setProfile.bind((0,i.default)(r)),r.profileTranslation={0:"car",1:"hgv",2:"bike",3:"roadbike",4:"bike",5:"mountainbike",6:"bike",7:"electricbike",8:"foot",9:"wander",10:"wheelchair",11:"hgv",12:"scooter",13:"motorbike"},r.languageConstants=(0,d.getLanguage)(e.router.props.mapController.data),r.profileLang={car:r.languageConstants.CAR,hgv:r.languageConstants.TRUCK,bike:r.languageConstants.BIKE,roadbike:r.languageConstants.ROADBIKE,mountainbike:r.languageConstants.MOUNTAINBIKE,electricbike:r.languageConstants.ELECTRICBIKE,foot:r.languageConstants.WALK,wander:r.languageConstants.WANDER,wheelchair:r.languageConstants.WHEEL,scooter:r.languageConstants.SCOOT,motorbike:r.languageConstants.MOTORBIKE},r.state={showPopup:!!e.router.mapData.router_profiles_initial},r}return(0,p.default)(t,e),(0,a.default)(t,[{key:"setProfile",value:function(e){this.props.router.setProfile(parseInt(e.id,10)),this.props.router.mapData.router_profiles_initial||this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this;return 1===this.props.profiles.length?null:this.state.showPopup?c.default.createElement("div",{className:"c4g-router-profile-wrapper c4g-popup"},c.default.createElement("button",{className:"c4g-titlebar-close",onMouseUp:function(){return e.setState({showPopup:!1})}}),this.props.profiles.map((function(t){return c.default.createElement("button",{onMouseUp:function(){return e.setProfile(t)},className:"c4g-router-profile-"+e.profileTranslation[t.id]+(parseInt(t.id,10)===parseInt(e.props.currentProfile,10)?" c4g-active":" c4g-inactive"),key:t.id,title:e.profileLang[e.profileTranslation[t.id]]})}))):c.default.createElement("div",{className:"c4g-router-profile-wrapper"},c.default.createElement("button",{onMouseUp:function(){return e.setState({showPopup:!0})},className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]}))}},{key:"showProfileSelection",value:function(){this.setState({showPopup:!0})}}]),t}(c.Component)}}]);