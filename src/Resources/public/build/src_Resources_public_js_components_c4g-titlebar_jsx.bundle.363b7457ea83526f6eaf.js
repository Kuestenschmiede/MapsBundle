/*! For license information please see src_Resources_public_js_components_c4g-titlebar_jsx.bundle.363b7457ea83526f6eaf.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-titlebar_jsx"],{"./src/Resources/public/js/components/c4g-titlebar.jsx":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),a=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var s=c(t);if(s&&s.has(e))return s.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}return r.default=e,s&&s.set(e,r),r}(s("./node_modules/react/index.js"));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(c=function(e){return e?s:t})(e)}function d(e,t,s){return t=(0,u.default)(t),(0,a.default)(e,f()?Reflect.construct(t,s||[],(0,u.default)(e).constructor):t.apply(e,s))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}t.default=function(e){function t(e){return(0,o.default)(this,t),d(this,t,[e])}return(0,p.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t="";this.props.detailBtnClass&&this.props.detailBtnCb&&(t=i.default.createElement("button",{className:this.props.detailBtnClass,onMouseUp:this.props.detailBtnCb}));var s="";this.props.closeBtnClass&&this.props.closeBtnCb&&(s=i.default.createElement("button",{className:this.props.closeBtnClass,onMouseUp:this.props.closeBtnCb,title:this.props.closeBtnTitle}));var r="";return this.props.hideContainer&&(r=i.default.createElement("button",{className:"c4g-sideboard-hide",onMouseUp:function(){jQuery(e.props.hideContainer).removeClass("c4g-open").addClass("c4g-close")}})),i.default.createElement("div",{className:this.props.wrapperClass},i.default.createElement("span",{className:this.props.headerClass},this.props.header),r,s,t,this.props.children)}}]),t}(i.Component)}}]);