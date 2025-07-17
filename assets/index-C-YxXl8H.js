(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();class b extends EventTarget{constructor(){super(),this.countries=[],this.isLoading=!0,this.error=null,this._dataPromise=null}static get instance(){return b._instance||(b._instance=new b),b._instance}loadData(){return this._dataPromise||(this._dataPromise=fetch("/data/population.json").then(t=>{if(!t.ok)throw new Error(`HTTP 오류! 상태: ${t.status}`);return t.json()}).then(t=>this.countries=Object.freeze(t)).catch(t=>this.error=t.message).finally(()=>{this.isLoading=!1,this.dispatchEvent(new CustomEvent("updated"))})),this._dataPromise}}const E=b.instance;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,q=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),J=new WeakMap;let ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}};const $t=r=>new ot(typeof r=="string"?r:r+"",void 0,V),nt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ot(e,r,V)},mt=(r,t)=>{if(q)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Z=q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:gt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:vt,getOwnPropertySymbols:At,getPrototypeOf:bt}=Object,k=globalThis,G=k.trustedTypes,Et=G?G.emptyScript:"",wt=k.reactiveElementPolyfillSupport,U=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},W=(r,t)=>!_t(r,t),Q={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const h=i?.call(this);o?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,s=[...vt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:L).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:L;this._$Em=i;const h=n.fromAttribute(e,o.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??W)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,o,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[U("elementProperties")]=new Map,A[U("finalized")]=new Map,wt?.({ReactiveElement:A}),(k.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,j=F.trustedTypes,X=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+$,St=`<${ht}>`,y=document,M=()=>y.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",K=Array.isArray,Pt=r=>K(r)||typeof r?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,_=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,ct=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),lt=Ct(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,g=y.createTreeWalker(y,129);function dt(r,t){if(!K(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=O;for(let h=0;h<e;h++){const a=r[h];let l,u,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===O?u[1]==="!--"?n=tt:u[1]!==void 0?n=et:u[2]!==void 0?(ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=_):u[3]!==void 0&&(n=_):n===_?u[0]===">"?(n=i??O,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,l=u[1],n=u[3]===void 0?_:u[3]==='"'?it:st):n===it||n===st?n=_:n===tt||n===et?n=O:(n=_,i=void 0);const f=n===_&&r[h+1].startsWith("/>")?" ":"";o+=n===O?a+St:c>=0?(s.push(l),a.slice(0,c)+at+a.slice(c)+$+f):a+$+(c===-2?h:f)}return[dt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[l,u]=xt(t,e);if(this.el=N.createElement(l,s),g.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=g.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(at)){const p=u[n++],f=i.getAttribute(c).split($),R=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:R[2],strings:f,ctor:R[1]==="."?Ut:R[1]==="?"?Mt:R[1]==="@"?Tt:I}),i.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(ct.test(i.tagName)){const c=i.textContent.split($),p=c.length-1;if(p>0){i.textContent=j?j.emptyScript:"";for(let f=0;f<p;f++)i.append(c[f],M()),g.nextNode(),a.push({type:2,index:++o});i.append(c[p],M())}}}else if(i.nodeType===8)if(i.data===ht)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)a.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function P(r,t,e=r,s){if(t===S)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=P(r,i._$AS(r,t.values),i,s)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);g.currentNode=i;let o=g.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new H(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new Nt(o,this,t)),this._$AV.push(l),a=s[++h]}n!==a?.index&&(o=g.nextNode(),n++)}return g.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(dt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new Ot(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new N(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new H(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const h=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=P(this,h[s+a],e,a),l===S&&(l=this._$AH[a]),n||=!T(l)||l!==this._$AH[a],l===d?t=d:t!==d&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Mt extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Tt extends I{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??d)===S)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Ht=F.litHtmlPolyfillSupport;Ht?.(N,H),(F.litHtmlVersions??=[]).push("3.3.1");const Rt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new H(t.insertBefore(M(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis;class w extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}}w._$litElement$=!0,w.finalized=!0,Y.litElementHydrateSupport?.({LitElement:w});const Dt=Y.litElementPolyfillSupport;Dt?.({LitElement:w});(Y.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:W},jt=(r=Lt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,r)},init(h){return h!==void 0&&this.C(n,void 0,r,h),h}}}if(s==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function pt(r){return(t,e)=>typeof e=="object"?jt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(r){return pt({...r,state:!0,attribute:!1})}var kt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,x=(r,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&kt(t,e,i),i};let m=class extends w{constructor(){super(...arguments),this.country={name:"대한민국",population:51207874,percentage:.59,year:2025,code:"kr"},this.countryName="대한민국",this.countryPercentage=.59,this.imageUrl="https://flagcdn.com/w640/kr.jpg",this.isLoading=!1}render(){return lt`
      <div class='container'>
        <h1>다시 태어날거야</h1>
        <p>실제 국가별 인구 수를 고려하여 다시 태어나면 어디서 태어날 지 랜덤으로 보여줍니다!</p>
        <div class="info">
          <div class='flag-image'>
            <img src=${this.imageUrl} onerror='this.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/1200px-Flag_with_question_mark.svg.png"'>
            </img>
          </div>
          <div class='country-name'>${this.countryName} (${this.countryPercentage}%)</div>
          <random-button ?disabled=${this.isLoading}></random-button>
        </div>
      </div>
    `}async connectedCallback(){super.connectedCallback(),await E.loadData()}firstUpdated(){this.addEventListener("country-selected",r=>{const{country:t}=r.detail;this.country=t,this.isLoading=!0;const e=new Image;e.src=`https://flagcdn.com/w320/${t.code}.jpg`;const s=750,i=250,o=setInterval(async()=>{await E.loadData();const h=E.countries,a=h[Math.floor(Math.random()*h.length)];this.countryName=a.name,this.countryPercentage=a.percentage},25),n=this.shadowRoot?.querySelector(".flag-image");n&&(n.animate([{opacity:1},{opacity:0}],{duration:s,easing:"ease-out"}),setTimeout(()=>{this.imageUrl=e.src,n.animate([{opacity:0},{opacity:1}],{duration:i,easing:"ease-out"})},s),setTimeout(()=>{this.isLoading=!1,clearInterval(o),this.countryName=this.country?.name||"",this.countryPercentage=this.country?.percentage||0},s+i))})}};m.styles=[nt`
      h1 {
        font-family: 'BMkkubulim', sans-serif;
        color: #66b984;
        margin: 0.5rem 0;
      }

      p {
        margin: 0;
      }

      .info {
        margin-top: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        & .flag-image {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 160px;
          height: 160px;
          
          & img {
            width: 100%;
            border-radius: 10px;
            border: 0 solid #66b984;
            transition: all 0.15s ease-out;

            &:hover {
              border: 4px solid #66b984;
            }
          }
        }
        
        & .country-name:not(:empty) {
          color: #578e63;
          padding: 0.5rem 0;
          font-weight: 600;
          border-bottom: 2px solid #578e63;
        }
      }
    `];x([v()],m.prototype,"country",2);x([v()],m.prototype,"countryName",2);x([v()],m.prototype,"countryPercentage",2);x([v()],m.prototype,"imageUrl",2);x([v()],m.prototype,"isLoading",2);m=x([ut("my-app")],m);function ft(r){return r.reduce((t,e)=>t+e.population,0)}function zt(r){const t=ft(r);let e=Math.floor(Math.random()*t);for(const s of r)if(e-=s.population,e<s.population)return s;return r[0]}var Bt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,z=(r,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Bt(t,e,i),i};let C=class extends w{constructor(){super(...arguments),this.totalPopulation=0,this.countryData=[],this.disabled=!1}render(){return lt`
      <button
        @click=${this.handleClick}
        ?disabled=${this.disabled}
      >부활</button>
    `}handleClick(){if(this.disabled||E.isLoading)return;const r=zt(this.countryData),t=new CustomEvent("country-selected",{bubbles:!0,composed:!0,detail:{country:r}});this.dispatchEvent(t)}async connectedCallback(){super.connectedCallback(),await E.loadData(),this.countryData=Array.from(E.countries),this.totalPopulation=ft(this.countryData)}};C.styles=nt`
    button {
      font-family: 'BMkkubulim', sans-serif;
      background-color: #66b984;
      box-shadow: 0 8px 0 0 #42905f;
      color: white;
      border: none;
      transition: all 0.1s ease-in-out;
      
      margin: 1rem 0;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 0.5rem;

      cursor: pointer;

      &:hover {
        transform: translateY(2px);
        box-shadow: 0 6px 0 0 #42905f;
      }
      
      &:active {
        transform: translateY(8px);
        box-shadow: 0 0 0 0 #42905f;
        background-color: #578e63;
      }

      &:disabled {
        background: #42905f;
        box-shadow: 0 8px 0 0 #214530;
        cursor: not-allowed;

        &:hover {
          transform: translateY(0);
        }
      }
    }
  `;z([v()],C.prototype,"totalPopulation",2);z([v()],C.prototype,"countryData",2);z([pt({type:Boolean})],C.prototype,"disabled",2);C=z([ut("random-button")],C);
