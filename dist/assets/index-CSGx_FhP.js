const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LandingView-QeCzkyso.js","assets/AppLayout-CSQkLy5a.js","assets/AppLayout-Bg_k5l4h.css","assets/AuthView-DjJqNVZy.js","assets/AuthView-BFh0JypU.css","assets/ChatView-DlKuFmQy.js","assets/translate-CCt-zSEw.js","assets/ChatView-C_R7WoGs.css","assets/DashboardView-CjmxkZv9.js","assets/HistoryView-qTY1HvOI.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},os=[],an=()=>{},Cp=()=>!1,Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ia=t=>t.startsWith("onUpdate:"),ze=Object.assign,Kl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tv=Object.prototype.hasOwnProperty,be=(t,e)=>tv.call(t,e),ne=Array.isArray,as=t=>Ki(t)==="[object Map]",Ps=t=>Ki(t)==="[object Set]",tf=t=>Ki(t)==="[object Date]",fe=t=>typeof t=="function",xe=t=>typeof t=="string",Lt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Np=t=>(Se(t)||fe(t))&&fe(t.then)&&fe(t.catch),kp=Object.prototype.toString,Ki=t=>kp.call(t),nv=t=>Ki(t).slice(8,-1),Dp=t=>Ki(t)==="[object Object]",wa=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rv=/-\w/g,bt=Aa(t=>t.replace(rv,e=>e.slice(1).toUpperCase())),sv=/\B([A-Z])/g,pr=Aa(t=>t.replace(sv,"-$1").toLowerCase()),Ra=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=Aa(t=>t?`on${Ra(t)}`:""),on=(t,e)=>!Object.is(t,e),Lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e},iv=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let nf;const Sa=()=>nf||(nf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?lv(r):Gl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Se(t))return t}const ov=/;(?![^(]*\))/g,av=/:([^]+)/,cv=/\/\*[^]*?\*\//g;function lv(t){const e={};return t.replace(cv,"").split(ov).forEach(n=>{if(n){const r=n.split(av);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pa(t){let e="";if(xe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=Pa(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hv=Wl(uv);function Vp(t){return!!t||t===""}function fv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Cs(t[r],e[r]);return n}function Cs(t,e){if(t===e)return!0;let n=tf(t),r=tf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Lt(t),r=Lt(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?fv(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Cs(t[o],e[o]))return!1}}return String(t)===String(e)}function zl(t,e){return t.findIndex(n=>Cs(n,e))}const xp=t=>!!(t&&t.__v_isRef===!0),Xc=t=>xe(t)?t:t==null?"":ne(t)||Se(t)&&(t.toString===kp||!fe(t.toString))?xp(t)?Xc(t.value):JSON.stringify(t,Lp,2):String(t),Lp=(t,e)=>xp(e)?Lp(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rc(r,i)+" =>"]=s,n),{})}:Ps(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rc(n))}:Lt(e)?Rc(e):Se(e)&&!ne(e)&&!Dp(e)?String(e):e,Rc=(t,e="")=>{var n;return Lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Mp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){if(this._on>0&&--this._on===0){if(Ze===this)Ze=this.prevScope;else{let e=Ze;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fp(t){return new Mp(t)}function Up(){return Ze}function dv(t,e=!1){Ze&&Ze.cleanups.push(t)}let De;const bc=new WeakSet;class Bp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bc.has(this)&&(bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rf(this),$p(this);const e=De,n=Kt;De=this,Kt=!0;try{return this.fn()}finally{Hp(this),De=e,Kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jl(e);this.deps=this.depsTail=void 0,rf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zc(this)&&this.run()}get dirty(){return Zc(this)}}let jp=0,di,pi;function qp(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=di,di=t}function Ql(){jp++}function Yl(){if(--jp>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function $p(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jl(r),pv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi)||(t.globalVersion=bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Zc(t))))return;t.flags|=2;const e=t.dep,n=De,r=Kt;De=t,Kt=!0;try{$p(t);const s=t.fn(t._value);(e.version===0||on(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Kt=r,Hp(t),t.flags&=-3}}function Jl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function pv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kt=!0;const Kp=[];function Cn(){Kp.push(Kt),Kt=!1}function Nn(){const t=Kp.pop();Kt=t===void 0?!0:t}function rf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let bi=0;class gv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!Kt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new gv(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Gp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){Ql();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yl()}}}function Gp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Qo=new WeakMap,Or=Symbol(""),el=Symbol(""),Si=Symbol("");function dt(t,e,n){if(Kt&&De){let r=Qo.get(t);r||Qo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xl),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const o=Qo.get(t);if(!o){bi++;return}const c=l=>{l&&l.trigger()};if(Ql(),e==="clear")o.forEach(c);else{const l=ne(t),u=l&&wa(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Si||!Lt(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Si)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Or)),as(t)&&c(o.get(el)));break;case"delete":l||(c(o.get(Or)),as(t)&&c(o.get(el)));break;case"set":as(t)&&c(o.get(Or));break}}Yl()}function mv(t,e){const n=Qo.get(t);return n&&n.get(e)}function Xr(t){const e=Ee(t);return e===t?e:(dt(e,"iterate",Si),xt(t)?e:e.map(Qt))}function Ca(t){return dt(t=Ee(t),"iterate",Si),t}function rn(t,e){return kn(t)?ps(An(t)?Qt(e):e):Qt(e)}const _v={__proto__:null,[Symbol.iterator](){return Sc(this,Symbol.iterator,t=>rn(this,t))},concat(...t){return Xr(this).concat(...t.map(e=>ne(e)?Xr(e):e))},entries(){return Sc(this,"entries",t=>(t[1]=rn(this,t[1]),t))},every(t,e){return pn(this,"every",t,e,void 0,arguments)},filter(t,e){return pn(this,"filter",t,e,n=>n.map(r=>rn(this,r)),arguments)},find(t,e){return pn(this,"find",t,e,n=>rn(this,n),arguments)},findIndex(t,e){return pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pn(this,"findLast",t,e,n=>rn(this,n),arguments)},findLastIndex(t,e){return pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pc(this,"includes",t)},indexOf(...t){return Pc(this,"indexOf",t)},join(t){return Xr(this).join(t)},lastIndexOf(...t){return Pc(this,"lastIndexOf",t)},map(t,e){return pn(this,"map",t,e,void 0,arguments)},pop(){return zs(this,"pop")},push(...t){return zs(this,"push",t)},reduce(t,...e){return sf(this,"reduce",t,e)},reduceRight(t,...e){return sf(this,"reduceRight",t,e)},shift(){return zs(this,"shift")},some(t,e){return pn(this,"some",t,e,void 0,arguments)},splice(...t){return zs(this,"splice",t)},toReversed(){return Xr(this).toReversed()},toSorted(t){return Xr(this).toSorted(t)},toSpliced(...t){return Xr(this).toSpliced(...t)},unshift(...t){return zs(this,"unshift",t)},values(){return Sc(this,"values",t=>rn(this,t))}};function Sc(t,e,n){const r=Ca(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const yv=Array.prototype;function pn(t,e,n,r,s,i){const o=Ca(t),c=o!==t&&!xt(t),l=o[e];if(l!==yv[e]){const p=l.apply(t,i);return c?Qt(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,rn(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function sf(t,e,n,r){const s=Ca(t),i=s!==t&&!xt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=rn(t,u)),n.call(this,u,rn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?rn(t,l):l}function Pc(t,e,n){const r=Ee(t);dt(r,"iterate",Si);const s=r[e](...n);return(s===-1||s===!1)&&Na(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function zs(t,e,n=[]){Cn(),Ql();const r=Ee(t)[e].apply(t,n);return Yl(),Nn(),r}const vv=Wl("__proto__,__v_isRef,__isVue"),zp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function Ev(t){Lt(t)||(t=String(t));const e=Ee(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Qp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Nv:Zp:i?Xp:Jp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!s){let l;if(o&&(l=_v[n]))return l;if(n==="hasOwnProperty")return Ev}const c=Reflect.get(e,n,qe(e)?e:r);if((Lt(n)?zp.has(n):vv(n))||(s||dt(e,"get",n),i))return c;if(qe(c)){const l=o&&wa(n)?c:c.value;return s&&Se(l)?nl(l):l}return Se(c)?s?nl(c):Gi(c):c}}class Yp extends Qp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ne(e)&&wa(n);if(!this._isShallow){const u=kn(i);if(!xt(r)&&!kn(r)&&(i=Ee(i),r=Ee(r)),!o&&qe(i)&&!qe(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,qe(e)?e:s);return e===Ee(s)&&(c?on(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Lt(n)||!zp.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",ne(e)?"length":Or),Reflect.ownKeys(e)}}class Tv extends Qp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Iv=new Yp,wv=new Tv,Av=new Yp(!0);const tl=t=>t,So=t=>Reflect.getPrototypeOf(t);function Rv(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=as(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?tl:e?ps:Qt;return!e&&dt(i,"iterate",l?el:Or),ze(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function Po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function bv(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);t||(on(s,c)&&dt(o,"get",s),dt(o,"get",c));const{has:l}=So(o),u=e?tl:t?ps:Qt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(Ee(s),"iterate",Or),s.size},has(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);return t||(on(s,c)&&dt(o,"has",s),dt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ee(c),u=e?tl:t?ps:Qt;return!t&&dt(l,"iterate",Or),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ze(n,t?{add:Po("add"),set:Po("set"),delete:Po("delete"),clear:Po("clear")}:{add(s){const i=Ee(this),o=So(i),c=Ee(s),l=!e&&!xt(s)&&!kn(s)?c:s;return o.has.call(i,l)||on(s,l)&&o.has.call(i,s)||on(c,l)&&o.has.call(i,c)||(i.add(l),yn(i,"add",l,l)),this},set(s,i){!e&&!xt(i)&&!kn(i)&&(i=Ee(i));const o=Ee(this),{has:c,get:l}=So(o);let u=c.call(o,s);u||(s=Ee(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?on(i,f)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:c}=So(i);let l=o.call(i,s);l||(s=Ee(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&yn(i,"delete",s,void 0),u},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Rv(s,t,e)}),n}function Zl(t,e){const n=bv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Sv={get:Zl(!1,!1)},Pv={get:Zl(!1,!0)},Cv={get:Zl(!0,!1)};const Jp=new WeakMap,Xp=new WeakMap,Zp=new WeakMap,Nv=new WeakMap;function kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dv(t){return t.__v_skip||!Object.isExtensible(t)?0:kv(nv(t))}function Gi(t){return kn(t)?t:eu(t,!1,Iv,Sv,Jp)}function eg(t){return eu(t,!1,Av,Pv,Xp)}function nl(t){return eu(t,!0,wv,Cv,Zp)}function eu(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Dv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function An(t){return kn(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function Na(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function tu(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Op(t,"__v_skip",!0),t}const Qt=t=>Se(t)?Gi(t):t,ps=t=>Se(t)?nl(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function Pi(t){return tg(t,!1)}function Ov(t){return tg(t,!0)}function tg(t,e){return qe(t)?t:new Vv(t,e)}class Vv{constructor(e,n){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:Qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||kn(e);e=r?e:Ee(e),on(e,n)&&(this._rawValue=e,this._value=r?e:Qt(e),this.dep.trigger())}}function Rn(t){return qe(t)?t.value:t}const xv={get:(t,e,n)=>e==="__v_raw"?t:Rn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ng(t){return An(t)?t:new Proxy(t,xv)}function Lv(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Fv(t,n);return e}class Mv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Lt(n)?n:String(n),this._raw=Ee(e);let s=!0,i=e;if(!ne(e)||Lt(this._key)||!wa(this._key))do s=!Na(i)||xt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Rn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&qe(this._raw[this._key])){const n=this._object[this._key];if(qe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return mv(this._raw,this._key)}}function Fv(t,e,n){return new Mv(t,e,n)}class Uv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return qp(this,!0),!0}get value(){const e=this.dep.track();return Wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bv(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Uv(r,s,n)}const Co={},Yo=new WeakMap;let Rr;function jv(t,e=!1,n=Rr){if(n){let r=Yo.get(n);r||Yo.set(n,r=[]),r.push(t)}}function qv(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=$=>s?$:xt($)||s===!1||s===0?vn($,1):vn($);let f,p,g,_,S=!1,C=!1;if(qe(t)?(p=()=>t.value,S=xt(t)):An(t)?(p=()=>u(t),S=!0):ne(t)?(C=!0,S=t.some($=>An($)||xt($)),p=()=>t.map($=>{if(qe($))return $.value;if(An($))return u($);if(fe($))return l?l($,2):$()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Cn();try{g()}finally{Nn()}}const $=Rr;Rr=f;try{return l?l(t,3,[_]):t(_)}finally{Rr=$}}:p=an,e&&s){const $=p,X=s===!0?1/0:s;p=()=>vn($(),X)}const k=Up(),M=()=>{f.stop(),k&&k.active&&Kl(k.effects,f)};if(i&&e){const $=e;e=(...X)=>{$(...X),M()}}let O=C?new Array(t.length).fill(Co):Co;const q=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const X=f.run();if(s||S||(C?X.some((se,w)=>on(se,O[w])):on(X,O))){g&&g();const se=Rr;Rr=f;try{const w=[X,O===Co?void 0:C&&O[0]===Co?[]:O,_];O=X,l?l(e,3,w):e(...w)}finally{Rr=se}}}else f.run()};return c&&c(q),f=new Bp(p),f.scheduler=o?()=>o(q,!1):q,_=$=>jv($,!1,f),g=f.onStop=()=>{const $=Yo.get(f);if($){if(l)l($,4);else for(const X of $)X();Yo.delete(f)}},e?r?q(!0):O=f.run():o?o(q.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function vn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,qe(t))vn(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(Ps(t)||as(t))t.forEach(r=>{vn(r,e,n)});else if(Dp(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zi(t,e,n,r){try{return r?t(...r):t()}catch(s){ka(s,e,n)}}function Yt(t,e,n,r){if(fe(t)){const s=zi(t,e,n,r);return s&&Np(s)&&s.catch(i=>{ka(i,e,n)}),s}if(ne(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function ka(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Cn(),zi(i,null,10,[t,l,u]),Nn();return}}$v(t,n,s,r,o)}function $v(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let tn=-1;const cs=[];let Jn=null,ts=0;const rg=Promise.resolve();let Jo=null;function Da(t){const e=Jo||rg;return t?e.then(this?t.bind(this):t):e}function Hv(t){let e=tn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=Ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function nu(t){if(!(t.flags&1)){const e=Ci(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=Ci(n)?At.push(t):At.splice(Hv(e),0,t),t.flags|=1,sg()}}function sg(){Jo||(Jo=rg.then(og))}function Wv(t){ne(t)?cs.push(...t):Jn&&t.id===-1?Jn.splice(ts+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),sg()}function of(t,e,n=tn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ig(t){if(cs.length){const e=[...new Set(cs)].sort((n,r)=>Ci(n)-Ci(r));if(cs.length=0,Jn){Jn.push(...e);return}for(Jn=e,ts=0;ts<Jn.length;ts++){const n=Jn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,ts=0}}const Ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function og(t){try{for(tn=0;tn<At.length;tn++){const e=At[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<At.length;tn++){const e=At[tn];e&&(e.flags&=-2)}tn=-1,At.length=0,ig(),Jo=null,(At.length||cs.length)&&og()}}let it=null,ag=null;function Xo(t){const e=it;return it=t,ag=t&&t.type.__scopeId||null,e}function cg(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ta(-1);const i=Xo(e);let o;try{o=t(...s)}finally{Xo(i),r._d&&ta(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hC(t,e){if(it===null)return t;const n=Fa(it),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Cn(),Yt(l,n,8,[t.el,c,t,e]),Nn())}}function Mo(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=Ma();if(r||Vr){let s=Vr?Vr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Kv(){return!!(Ma()||Vr)}const Gv=Symbol.for("v-scx"),zv=()=>jt(Gv);function gi(t,e,n){return lg(t,e,n)}function lg(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=ze({},n),l=e&&r||!e&&i!=="post";let u;if(Oi){if(i==="sync"){const _=zv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=an,_.resume=an,_.pause=an,_}}const f=_t;c.call=(_,S,C)=>Yt(_,f,S,C);let p=!1;i==="post"?c.scheduler=_=>{It(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():nu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=qv(t,e,c);return Oi&&(u?u.push(g):l&&g()),g}function Qv(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?ug(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Qi(this),c=lg(s,i.bind(r),n);return o(),c}function ug(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zn=new WeakMap,hg=Symbol("_vte"),fg=t=>t.__isTeleport,Sr=t=>t&&(t.disabled||t.disabled===""),Yv=t=>t&&(t.defer||t.defer===""),af=t=>typeof SVGElement<"u"&&t instanceof SVGElement,cf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,rl=(t,e)=>{const n=t&&t.to;return xe(n)?e?e(n):null:n},Jv={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:p,pbc:g,o:{insert:_,querySelector:S,createText:C,createComment:k,parentNode:M}}=u,O=Sr(e.props);let{dynamicChildren:q}=e;const $=(w,v,y)=>{w.shapeFlag&16&&f(w.children,v,y,s,i,o,c,l)},X=(w=e)=>{const v=Sr(w.props),y=w.target=rl(w.props,S),I=sl(y,w,C,_);y&&(o!=="svg"&&af(y)?o="svg":o!=="mathml"&&cf(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),v||($(w,y,I),ni(w,!1)))},se=w=>{const v=()=>{if(zn.get(w)===v){if(zn.delete(w),Sr(w.props)){const y=M(w.el)||n;$(w,y,w.anchor),ni(w,!0)}X(w)}};zn.set(w,v),It(v,i)};if(t==null){const w=e.el=C(""),v=e.anchor=C("");if(_(w,n,r),_(v,n,r),Yv(e.props)||i&&i.pendingBranch){se(e);return}O&&($(e,n,v),ni(e,!0)),X()}else{e.el=t.el;const w=e.anchor=t.anchor,v=zn.get(t);if(v){v.flags|=8,zn.delete(t),se(e);return}e.targetStart=t.targetStart;const y=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Sr(t.props),A=b?n:y,E=b?w:I;if(o==="svg"||af(y)?o="svg":(o==="mathml"||cf(y))&&(o="mathml"),q?(g(t.dynamicChildren,q,A,s,i,o,c),ou(t,e,!0)):l||p(t,e,A,E,s,i,o,c,!1),O)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):No(e,n,w,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Te=e.target=rl(e.props,S);Te&&No(e,Te,null,u,0)}else b&&No(e,y,I,u,1);ni(e,O)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:p,props:g}=t;let _=i||!Sr(g);const S=zn.get(t);if(S&&(S.flags|=8,zn.delete(t),_=!1),p&&(s(u),s(f)),i&&s(l),o&16)for(let C=0;C<c.length;C++){const k=c[C];r(k,e,n,_,!!k.dynamicChildren)}},move:No,hydrate:Xv};function No(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!zn.has(t)&&(!p||Sr(f))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function Xv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},p){function g(k,M){let O=M;for(;O;){if(O&&O.nodeType===8){if(O.data==="teleport start anchor")e.targetStart=O;else if(O.data==="teleport anchor"){e.targetAnchor=O,k._lpa=e.targetAnchor&&o(e.targetAnchor);break}}O=o(O)}}function _(k,M){M.anchor=p(o(k),M,c(k),n,r,s,i)}const S=e.target=rl(e.props,l),C=Sr(e.props);if(S){const k=S._lpa||S.firstChild;e.shapeFlag&16&&(C?(_(t,e),g(S,k),e.targetAnchor||sl(S,e,f,u,c(t)===S?t:null)):(e.anchor=o(t),g(S,k),e.targetAnchor||sl(S,e,f,u),p(k&&o(k),e,S,n,r,s,i))),ni(e,C)}else C&&e.shapeFlag&16&&(_(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Zv=Jv;function ni(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function sl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[hg]=o,t&&(r(i,t,s),r(o,t,s)),o}const nn=Symbol("_leaveCb"),Qs=Symbol("_enterCb");function dg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tg(()=>{t.isMounted=!0}),wg(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],pg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},gg=t=>{const e=t.subTree;return e.component?gg(e.component):e},eE={name:"BaseTransition",props:pg,setup(t,{slots:e}){const n=Ma(),r=dg();return()=>{const s=e.default&&ru(e.default(),!0),i=s&&s.length?mg(s):n.subTree?KE():void 0;if(!i)return;const o=Ee(t),{mode:c}=o;if(r.isLeaving)return Cc(i);const l=lf(i);if(!l)return Cc(i);let u=Ni(l,o,r,n,p=>u=p);l.type!==mt&&Mr(l,u);let f=n.subTree&&lf(n.subTree);if(f&&f.type!==mt&&!Pr(f,l)&&gg(n).type!==mt){let p=Ni(f,o,r,n);if(Mr(f,p),c==="out-in"&&l.type!==mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Cc(i);c==="in-out"&&l.type!==mt?p.delayLeave=(g,_,S)=>{const C=_g(r,f);C[String(f.key)]=f,g[nn]=()=>{_(),g[nn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function mg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==mt){e=n;break}}return e}const tE=eE;function _g(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ni(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:_,onAfterLeave:S,onLeaveCancelled:C,onBeforeAppear:k,onAppear:M,onAfterAppear:O,onAppearCancelled:q}=e,$=String(t.key),X=_g(n,t),se=(y,I)=>{y&&Yt(y,r,9,I)},w=(y,I)=>{const b=I[1];se(y,I),ne(y)?y.every(A=>A.length<=1)&&b():y.length<=1&&b()},v={mode:o,persisted:c,beforeEnter(y){let I=l;if(!n.isMounted)if(i)I=k||l;else return;y[nn]&&y[nn](!0);const b=X[$];b&&Pr(t,b)&&b.el[nn]&&b.el[nn](),se(I,[y])},enter(y){if(X[$]===t)return;let I=u,b=f,A=p;if(!n.isMounted)if(i)I=M||u,b=O||f,A=q||p;else return;let E=!1;y[Qs]=$e=>{E||(E=!0,$e?se(A,[y]):se(b,[y]),v.delayedLeave&&v.delayedLeave(),y[Qs]=void 0)};const Te=y[Qs].bind(null,!1);I?w(I,[y,Te]):Te()},leave(y,I){const b=String(t.key);if(y[Qs]&&y[Qs](!0),n.isUnmounting)return I();se(g,[y]);let A=!1;y[nn]=Te=>{A||(A=!0,I(),Te?se(C,[y]):se(S,[y]),y[nn]=void 0,X[b]===t&&delete X[b])};const E=y[nn].bind(null,!1);X[b]=t,_?w(_,[y,E]):E()},clone(y){const I=Ni(y,e,n,r,s);return s&&s(I),I}};return v}function Cc(t){if(Oa(t))return t=lr(t),t.children=null,t}function lf(t){if(!Oa(t))return fg(t.type)&&t.children?mg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Mr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ru(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===pt?(o.patchFlag&128&&s++,r=r.concat(ru(o.children,e,c))):(e||o.type!==mt)&&r.push(c!=null?lr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function yg(t,e){return fe(t)?ze({name:t.name},e,{setup:t}):t}function vg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function uf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Zo=new WeakMap;function mi(t,e,n,r,s=!1){if(ne(t)){t.forEach((C,k)=>mi(C,e&&(ne(e)?e[k]:e),n,r,s));return}if(ls(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,g=Ee(p),_=p===ke?Cp:C=>uf(f,C)?!1:be(g,C),S=(C,k)=>!(k&&uf(f,k));if(u!=null&&u!==l){if(hf(e),xe(u))f[u]=null,_(u)&&(p[u]=null);else if(qe(u)){const C=e;S(u,C.k)&&(u.value=null),C.k&&(f[C.k]=null)}}if(fe(l))zi(l,c,12,[o,f]);else{const C=xe(l),k=qe(l);if(C||k){const M=()=>{if(t.f){const O=C?_(l)?p[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)ne(O)&&Kl(O,i);else if(ne(O))O.includes(i)||O.push(i);else if(C)f[l]=[i],_(l)&&(p[l]=f[l]);else{const q=[i];S(l,t.k)&&(l.value=q),t.k&&(f[t.k]=q)}}else C?(f[l]=o,_(l)&&(p[l]=o)):k&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const O=()=>{M(),Zo.delete(t)};O.id=-1,Zo.set(t,O),It(O,n)}else hf(t),M()}}}function hf(t){const e=Zo.get(t);e&&(e.flags|=8,Zo.delete(t))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const ls=t=>!!t.type.__asyncLoader,Oa=t=>t.type.__isKeepAlive;function nE(t,e){Eg(t,"a",e)}function rE(t,e){Eg(t,"da",e)}function Eg(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&sE(r,e,n,s),s=s.parent}}function sE(t,e,n,r){const s=Va(e,t,r,!0);Ag(()=>{Kl(r[e],s)},n)}function Va(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cn();const c=Qi(n),l=Yt(e,n,t,o);return c(),Nn(),l});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=_t)=>{(!Oi||t==="sp")&&Va(t,(...r)=>e(...r),n)},iE=Ln("bm"),Tg=Ln("m"),oE=Ln("bu"),Ig=Ln("u"),wg=Ln("bum"),Ag=Ln("um"),aE=Ln("sp"),cE=Ln("rtg"),lE=Ln("rtc");function uE(t,e=_t){Va("ec",t,e)}const hE="components";function fE(t,e){return pE(hE,t,!0,e)||t}const dE=Symbol.for("v-ndc");function pE(t,e,n=!0,r=!1){const s=it||_t;if(s){const i=s.type;{const c=tT(i,!1);if(c&&(c===e||c===bt(e)||c===Ra(bt(e))))return i}const o=ff(s[t]||i[t],e)||ff(s.appContext[t],e);return!o&&r?i:o}}function ff(t,e){return t&&(t[e]||t[bt(e)]||t[Ra(bt(e))])}function gE(t,e,n,r){let s;const i=n,o=ne(t);if(o||xe(t)){const c=o&&An(t);let l=!1,u=!1;c&&(l=!xt(t),u=kn(t),t=Ca(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?ps(Qt(t[f])):Qt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function fC(t,e,n={},r,s){if(it.ce||it.parent&&ls(it.parent)&&it.parent.ce){const u=Object.keys(n).length>0;return xr(),na(pt,null,[Je("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),xr();const o=i&&Rg(i(n)),c=n.key||o&&o.key,l=na(pt,{key:(c&&!Lt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Rg(t){return t.some(e=>Di(e)?!(e.type===mt||e.type===pt&&!Rg(e.children)):!0)?t:null}const il=t=>t?Hg(t)?Fa(t):il(t.parent):null,_i=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sg(t),$forceUpdate:t=>t.f||(t.f=()=>{nu(t.update)}),$nextTick:t=>t.n||(t.n=Da.bind(t.proxy)),$watch:t=>Qv.bind(t)}),Nc=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),mE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Nc(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];ol&&(o[e]=0)}}const u=_i[e];let f,p;if(u)return e==="$attrs"&&dt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Nc(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==ke&&c[0]!=="$"&&be(t,c)||Nc(e,c)||be(i,c)||be(r,c)||be(_i,c)||be(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function df(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ol=!0;function _E(t){const e=Sg(t),n=t.proxy,r=t.ctx;ol=!1,e.beforeCreate&&pf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:S,activated:C,deactivated:k,beforeDestroy:M,beforeUnmount:O,destroyed:q,unmounted:$,render:X,renderTracked:se,renderTriggered:w,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:b,components:A,directives:E,filters:Te}=e;if(u&&yE(u,r,null),o)for(const le in o){const me=o[le];fe(me)&&(r[le]=me.bind(n))}if(s){const le=s.call(n,n);Se(le)&&(t.data=Gi(le))}if(ol=!0,i)for(const le in i){const me=i[le],Nt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):an,$t=!fe(me)&&fe(me.set)?me.set.bind(n):an,Mt=Rt({get:Nt,set:$t});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Le=>Mt.value=Le})}if(c)for(const le in c)bg(c[le],r,n,le);if(l){const le=fe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(me=>{Mo(me,le[me])})}f&&pf(f,t,"c");function Pe(le,me){ne(me)?me.forEach(Nt=>le(Nt.bind(n))):me&&le(me.bind(n))}if(Pe(iE,p),Pe(Tg,g),Pe(oE,_),Pe(Ig,S),Pe(nE,C),Pe(rE,k),Pe(uE,v),Pe(lE,se),Pe(cE,w),Pe(wg,O),Pe(Ag,$),Pe(aE,y),ne(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(le,me,{get:()=>n[me],set:Nt=>n[me]=Nt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===an&&(t.render=X),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),E&&(t.directives=E),y&&vg(t)}function yE(t,e,n=an){ne(t)&&(t=al(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pf(t,e,n){Yt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bg(t,e,n,r){let s=r.includes(".")?ug(n,r):()=>n[r];if(xe(t)){const i=e[t];fe(i)&&gi(s,i)}else if(fe(t))gi(s,t.bind(n));else if(Se(t))if(ne(t))t.forEach(i=>bg(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&gi(s,i,t)}}function Sg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ea(l,u,o,!0)),ea(l,e,o)),Se(e)&&i.set(e,l),l}function ea(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ea(t,i,n,!0),s&&s.forEach(o=>ea(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=vE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const vE={data:gf,props:mf,emits:mf,methods:ri,computed:ri,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:ri,directives:ri,watch:TE,provide:gf,inject:EE};function gf(t,e){return e?t?function(){return ze(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function EE(t,e){return ri(al(t),al(e))}function al(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function ri(t,e){return t?ze(Object.create(null),t,e):e}function mf(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:ze(Object.create(null),df(t),df(e??{})):e}function TE(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function Pg(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IE=0;function wE(t,e){return function(r,s=null){fe(r)||(r=ze({},r)),s!=null&&!Se(s)&&(s=null);const i=Pg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:IE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const _=u._ceVNode||Je(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),l=!0,u._container=f,f.__vue_app__=u,Fa(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Yt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Vr;Vr=u;try{return f()}finally{Vr=p}}};return u}}let Vr=null;const AE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${pr(e)}Modifiers`];function RE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&AE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>xe(f)?f.trim():f)),o.number&&(s=n.map(ba)));let c,l=r[c=Ac(e)]||r[c=Ac(bt(e))];!l&&i&&(l=r[c=Ac(pr(e))]),l&&Yt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yt(u,t,6,s)}}const bE=new WeakMap;function Cg(t,e,n=!1){const r=n?bE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=Cg(u,e,!0);f&&(c=!0,ze(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(ne(i)?i.forEach(l=>o[l]=null):ze(o,i),Se(t)&&r.set(t,o),o)}function xa(t,e){return!t||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,pr(e))||be(t,e))}function _f(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:S,inheritAttrs:C}=t,k=Xo(t);let M,O;try{if(n.shapeFlag&4){const $=s||r,X=$;M=sn(u.call(X,$,f,p,_,g,S)),O=c}else{const $=e;M=sn($.length>1?$(p,{attrs:c,slots:o,emit:l}):$(p,null)),O=e.props?c:SE(c)}}catch($){yi.length=0,ka($,t,1),M=Je(mt)}let q=M;if(O&&C!==!1){const $=Object.keys(O),{shapeFlag:X}=q;$.length&&X&7&&(i&&$.some(Ia)&&(O=PE(O,i)),q=lr(q,O,!1,!0))}return n.dirs&&(q=lr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Mr(q,n.transition),M=q,Xo(k),M}const SE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ta(n))&&((e||(e={}))[n]=t[n]);return e},PE=(t,e)=>{const n={};for(const r in t)(!Ia(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function CE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?yf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Ng(o,r,g)&&!xa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?yf(r,o,u):!0:!!o;return!1}function yf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Ng(e,t,i)&&!xa(n,i))return!0}return!1}function Ng(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!Cs(r,s):r!==s}function NE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const kg={},Dg=()=>Object.create(kg),Og=t=>Object.getPrototypeOf(t)===kg;function kE(t,e,n,r=!1){const s={},i=Dg();t.propsDefaults=Object.create(null),Vg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:eg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function DE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ee(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(xa(t.emitsOptions,g))continue;const _=e[g];if(l)if(be(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const S=bt(g);s[S]=cl(l,c,S,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Vg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!be(e,p)&&((f=pr(p))===p||!be(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=cl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&yn(t.attrs,"set","")}function Vg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(fi(l))continue;const u=e[l];let f;s&&be(s,f=bt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ee(n),u=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=cl(s,l,p,u[p],t,!be(u,p))}}return o}function cl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Qi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===pr(n))&&(r=!0))}return r}const OE=new WeakMap;function xg(t,e,n=!1){const r=n?OE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[g,_]=xg(p,e,!0);ze(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,os),os;if(ne(i))for(let f=0;f<i.length;f++){const p=bt(i[f]);vf(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=bt(f);if(vf(p)){const g=i[f],_=o[p]=ne(g)||fe(g)?{type:g}:ze({},g),S=_.type;let C=!1,k=!0;if(ne(S))for(let M=0;M<S.length;++M){const O=S[M],q=fe(O)&&O.name;if(q==="Boolean"){C=!0;break}else q==="String"&&(k=!1)}else C=fe(S)&&S.name==="Boolean";_[0]=C,_[1]=k,(C||be(_,"default"))&&c.push(p)}}const u=[o,c];return Se(t)&&r.set(t,u),u}function vf(t){return t[0]!=="$"&&!fi(t)}const su=t=>t==="_"||t==="_ctx"||t==="$stable",iu=t=>ne(t)?t.map(sn):[sn(t)],VE=(t,e,n)=>{if(e._n)return e;const r=cg((...s)=>iu(e(...s)),n);return r._c=!1,r},Lg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(su(s))continue;const i=t[s];if(fe(i))e[s]=VE(s,i,r);else if(i!=null){const o=iu(i);e[s]=()=>o}}},Mg=(t,e)=>{const n=iu(e);t.slots.default=()=>n},Fg=(t,e,n)=>{for(const r in e)(n||!su(r))&&(t[r]=e[r])},xE=(t,e,n)=>{const r=t.slots=Dg();if(t.vnode.shapeFlag&32){const s=e._;s?(Fg(r,e,n),n&&Op(r,"_",s,!0)):Lg(e,r)}else e&&Mg(t,e)},LE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Fg(s,e,n):(i=!e.$stable,Lg(e,s)),o=e}else e&&(Mg(t,e),o={default:1});if(i)for(const c in s)!su(c)&&o[c]==null&&delete s[c]},It=jE;function ME(t){return FE(t)}function FE(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=an,insertStaticContent:S}=t,C=(T,R,P,V=null,U=null,L=null,G=void 0,K=null,H=!!R.dynamicChildren)=>{if(T===R)return;T&&!Pr(T,R)&&(V=x(T),Le(T,U,L,!0),T=null),R.patchFlag===-2&&(H=!1,R.dynamicChildren=null);const{type:B,ref:ie,shapeFlag:Q}=R;switch(B){case La:k(T,R,P,V);break;case mt:M(T,R,P,V);break;case Fo:T==null&&O(R,P,V,G);break;case pt:A(T,R,P,V,U,L,G,K,H);break;default:Q&1?X(T,R,P,V,U,L,G,K,H):Q&6?E(T,R,P,V,U,L,G,K,H):(Q&64||Q&128)&&B.process(T,R,P,V,U,L,G,K,H,ee)}ie!=null&&U?mi(ie,T&&T.ref,L,R||T,!R):ie==null&&T&&T.ref!=null&&mi(T.ref,null,L,T,!0)},k=(T,R,P,V)=>{if(T==null)r(R.el=c(R.children),P,V);else{const U=R.el=T.el;R.children!==T.children&&u(U,R.children)}},M=(T,R,P,V)=>{T==null?r(R.el=l(R.children||""),P,V):R.el=T.el},O=(T,R,P,V)=>{[T.el,T.anchor]=S(T.children,R,P,V,T.el,T.anchor)},q=({el:T,anchor:R},P,V)=>{let U;for(;T&&T!==R;)U=g(T),r(T,P,V),T=U;r(R,P,V)},$=({el:T,anchor:R})=>{let P;for(;T&&T!==R;)P=g(T),s(T),T=P;s(R)},X=(T,R,P,V,U,L,G,K,H)=>{if(R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),T==null)se(R,P,V,U,L,G,K,H);else{const B=T.el&&T.el._isVueCE?T.el:null;try{B&&B._beginPatch(),y(T,R,U,L,G,K,H)}finally{B&&B._endPatch()}}},se=(T,R,P,V,U,L,G,K)=>{let H,B;const{props:ie,shapeFlag:Q,transition:te,dirs:oe}=T;if(H=T.el=o(T.type,L,ie&&ie.is,ie),Q&8?f(H,T.children):Q&16&&v(T.children,H,null,V,U,kc(T,L),G,K),oe&&Ir(T,null,V,"created"),w(H,T,T.scopeId,G,V),ie){for(const pe in ie)pe!=="value"&&!fi(pe)&&i(H,pe,null,ie[pe],L,V);"value"in ie&&i(H,"value",null,ie.value,L),(B=ie.onVnodeBeforeMount)&&Zt(B,V,T)}oe&&Ir(T,null,V,"beforeMount");const ae=UE(U,te);ae&&te.beforeEnter(H),r(H,R,P),((B=ie&&ie.onVnodeMounted)||ae||oe)&&It(()=>{try{B&&Zt(B,V,T),ae&&te.enter(H),oe&&Ir(T,null,V,"mounted")}finally{}},U)},w=(T,R,P,V,U)=>{if(P&&_(T,P),V)for(let L=0;L<V.length;L++)_(T,V[L]);if(U){let L=U.subTree;if(R===L||jg(L.type)&&(L.ssContent===R||L.ssFallback===R)){const G=U.vnode;w(T,G,G.scopeId,G.slotScopeIds,U.parent)}}},v=(T,R,P,V,U,L,G,K,H=0)=>{for(let B=H;B<T.length;B++){const ie=T[B]=K?_n(T[B]):sn(T[B]);C(null,ie,R,P,V,U,L,G,K)}},y=(T,R,P,V,U,L,G)=>{const K=R.el=T.el;let{patchFlag:H,dynamicChildren:B,dirs:ie}=R;H|=T.patchFlag&16;const Q=T.props||ke,te=R.props||ke;let oe;if(P&&wr(P,!1),(oe=te.onVnodeBeforeUpdate)&&Zt(oe,P,R,T),ie&&Ir(R,T,P,"beforeUpdate"),P&&wr(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(K,""),B?I(T.dynamicChildren,B,K,P,V,kc(R,U),L):G||me(T,R,K,null,P,V,kc(R,U),L,!1),H>0){if(H&16)b(K,Q,te,P,U);else if(H&2&&Q.class!==te.class&&i(K,"class",null,te.class,U),H&4&&i(K,"style",Q.style,te.style,U),H&8){const ae=R.dynamicProps;for(let pe=0;pe<ae.length;pe++){const Ae=ae[pe],Fe=Q[Ae],We=te[Ae];(We!==Fe||Ae==="value")&&i(K,Ae,Fe,We,U,P)}}H&1&&T.children!==R.children&&f(K,R.children)}else!G&&B==null&&b(K,Q,te,P,U);((oe=te.onVnodeUpdated)||ie)&&It(()=>{oe&&Zt(oe,P,R,T),ie&&Ir(R,T,P,"updated")},V)},I=(T,R,P,V,U,L,G)=>{for(let K=0;K<R.length;K++){const H=T[K],B=R[K],ie=H.el&&(H.type===pt||!Pr(H,B)||H.shapeFlag&198)?p(H.el):P;C(H,B,ie,null,V,U,L,G,!0)}},b=(T,R,P,V,U)=>{if(R!==P){if(R!==ke)for(const L in R)!fi(L)&&!(L in P)&&i(T,L,R[L],null,U,V);for(const L in P){if(fi(L))continue;const G=P[L],K=R[L];G!==K&&L!=="value"&&i(T,L,K,G,U,V)}"value"in P&&i(T,"value",R.value,P.value,U)}},A=(T,R,P,V,U,L,G,K,H)=>{const B=R.el=T?T.el:c(""),ie=R.anchor=T?T.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:oe}=R;oe&&(K=K?K.concat(oe):oe),T==null?(r(B,P,V),r(ie,P,V),v(R.children||[],P,ie,U,L,G,K,H)):Q>0&&Q&64&&te&&T.dynamicChildren&&T.dynamicChildren.length===te.length?(I(T.dynamicChildren,te,P,U,L,G,K),(R.key!=null||U&&R===U.subTree)&&ou(T,R,!0)):me(T,R,P,ie,U,L,G,K,H)},E=(T,R,P,V,U,L,G,K,H)=>{R.slotScopeIds=K,T==null?R.shapeFlag&512?U.ctx.activate(R,P,V,G,H):Te(R,P,V,U,L,G,H):$e(T,R,H)},Te=(T,R,P,V,U,L,G)=>{const K=T.component=YE(T,V,U);if(Oa(T)&&(K.ctx.renderer=ee),JE(K,!1,G),K.asyncDep){if(U&&U.registerDep(K,Pe,G),!T.el){const H=K.subTree=Je(mt);M(null,H,R,P),T.placeholder=H.el}}else Pe(K,T,R,P,U,L,G)},$e=(T,R,P)=>{const V=R.component=T.component;if(CE(T,R,P))if(V.asyncDep&&!V.asyncResolved){le(V,R,P);return}else V.next=R,V.update();else R.el=T.el,V.vnode=R},Pe=(T,R,P,V,U,L,G)=>{const K=()=>{if(T.isMounted){let{next:Q,bu:te,u:oe,parent:ae,vnode:pe}=T;{const ct=Ug(T);if(ct){Q&&(Q.el=pe.el,le(T,Q,G)),ct.asyncDep.then(()=>{It(()=>{T.isUnmounted||B()},U)});return}}let Ae=Q,Fe;wr(T,!1),Q?(Q.el=pe.el,le(T,Q,G)):Q=pe,te&&Lo(te),(Fe=Q.props&&Q.props.onVnodeBeforeUpdate)&&Zt(Fe,ae,Q,pe),wr(T,!0);const We=_f(T),Ft=T.subTree;T.subTree=We,C(Ft,We,p(Ft.el),x(Ft),T,U,L),Q.el=We.el,Ae===null&&NE(T,We.el),oe&&It(oe,U),(Fe=Q.props&&Q.props.onVnodeUpdated)&&It(()=>Zt(Fe,ae,Q,pe),U)}else{let Q;const{el:te,props:oe}=R,{bm:ae,m:pe,parent:Ae,root:Fe,type:We}=T,Ft=ls(R);wr(T,!1),ae&&Lo(ae),!Ft&&(Q=oe&&oe.onVnodeBeforeMount)&&Zt(Q,Ae,R),wr(T,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(We,T.parent?T.parent.type:void 0);const ct=T.subTree=_f(T);C(null,ct,P,V,T,U,L),R.el=ct.el}if(pe&&It(pe,U),!Ft&&(Q=oe&&oe.onVnodeMounted)){const ct=R;It(()=>Zt(Q,Ae,ct),U)}(R.shapeFlag&256||Ae&&ls(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&T.a&&It(T.a,U),T.isMounted=!0,R=P=V=null}};T.scope.on();const H=T.effect=new Bp(K);T.scope.off();const B=T.update=H.run.bind(H),ie=T.job=H.runIfDirty.bind(H);ie.i=T,ie.id=T.uid,H.scheduler=()=>nu(ie),wr(T,!0),B()},le=(T,R,P)=>{R.component=T;const V=T.vnode.props;T.vnode=R,T.next=null,DE(T,R.props,V,P),LE(T,R.children,P),Cn(),of(T),Nn()},me=(T,R,P,V,U,L,G,K,H=!1)=>{const B=T&&T.children,ie=T?T.shapeFlag:0,Q=R.children,{patchFlag:te,shapeFlag:oe}=R;if(te>0){if(te&128){$t(B,Q,P,V,U,L,G,K,H);return}else if(te&256){Nt(B,Q,P,V,U,L,G,K,H);return}}oe&8?(ie&16&&St(B,U,L),Q!==B&&f(P,Q)):ie&16?oe&16?$t(B,Q,P,V,U,L,G,K,H):St(B,U,L,!0):(ie&8&&f(P,""),oe&16&&v(Q,P,V,U,L,G,K,H))},Nt=(T,R,P,V,U,L,G,K,H)=>{T=T||os,R=R||os;const B=T.length,ie=R.length,Q=Math.min(B,ie);let te;for(te=0;te<Q;te++){const oe=R[te]=H?_n(R[te]):sn(R[te]);C(T[te],oe,P,null,U,L,G,K,H)}B>ie?St(T,U,L,!0,!1,Q):v(R,P,V,U,L,G,K,H,Q)},$t=(T,R,P,V,U,L,G,K,H)=>{let B=0;const ie=R.length;let Q=T.length-1,te=ie-1;for(;B<=Q&&B<=te;){const oe=T[B],ae=R[B]=H?_n(R[B]):sn(R[B]);if(Pr(oe,ae))C(oe,ae,P,null,U,L,G,K,H);else break;B++}for(;B<=Q&&B<=te;){const oe=T[Q],ae=R[te]=H?_n(R[te]):sn(R[te]);if(Pr(oe,ae))C(oe,ae,P,null,U,L,G,K,H);else break;Q--,te--}if(B>Q){if(B<=te){const oe=te+1,ae=oe<ie?R[oe].el:V;for(;B<=te;)C(null,R[B]=H?_n(R[B]):sn(R[B]),P,ae,U,L,G,K,H),B++}}else if(B>te)for(;B<=Q;)Le(T[B],U,L,!0),B++;else{const oe=B,ae=B,pe=new Map;for(B=ae;B<=te;B++){const tt=R[B]=H?_n(R[B]):sn(R[B]);tt.key!=null&&pe.set(tt.key,B)}let Ae,Fe=0;const We=te-ae+1;let Ft=!1,ct=0;const jn=new Array(We);for(B=0;B<We;B++)jn[B]=0;for(B=oe;B<=Q;B++){const tt=T[B];if(Fe>=We){Le(tt,U,L,!0);continue}let Ut;if(tt.key!=null)Ut=pe.get(tt.key);else for(Ae=ae;Ae<=te;Ae++)if(jn[Ae-ae]===0&&Pr(tt,R[Ae])){Ut=Ae;break}Ut===void 0?Le(tt,U,L,!0):(jn[Ut-ae]=B+1,Ut>=ct?ct=Ut:Ft=!0,C(tt,R[Ut],P,null,U,L,G,K,H),Fe++)}const xs=Ft?BE(jn):os;for(Ae=xs.length-1,B=We-1;B>=0;B--){const tt=ae+B,Ut=R[tt],uo=R[tt+1],Gr=tt+1<ie?uo.el||Bg(uo):V;jn[B]===0?C(null,Ut,P,Gr,U,L,G,K,H):Ft&&(Ae<0||B!==xs[Ae]?Mt(Ut,P,Gr,2):Ae--)}}},Mt=(T,R,P,V,U=null)=>{const{el:L,type:G,transition:K,children:H,shapeFlag:B}=T;if(B&6){Mt(T.component.subTree,R,P,V);return}if(B&128){T.suspense.move(R,P,V);return}if(B&64){G.move(T,R,P,ee);return}if(G===pt){r(L,R,P);for(let Q=0;Q<H.length;Q++)Mt(H[Q],R,P,V);r(T.anchor,R,P);return}if(G===Fo){q(T,R,P);return}if(V!==2&&B&1&&K)if(V===0)K.beforeEnter(L),r(L,R,P),It(()=>K.enter(L),U);else{const{leave:Q,delayLeave:te,afterLeave:oe}=K,ae=()=>{T.ctx.isUnmounted?s(L):r(L,R,P)},pe=()=>{L._isLeaving&&L[nn](!0),Q(L,()=>{ae(),oe&&oe()})};te?te(L,ae,pe):pe()}else r(L,R,P)},Le=(T,R,P,V=!1,U=!1)=>{const{type:L,props:G,ref:K,children:H,dynamicChildren:B,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:oe,memo:ae}=T;if(Q===-2&&(U=!1),K!=null&&(Cn(),mi(K,null,P,T,!0),Nn()),oe!=null&&(R.renderCache[oe]=void 0),ie&256){R.ctx.deactivate(T);return}const pe=ie&1&&te,Ae=!ls(T);let Fe;if(Ae&&(Fe=G&&G.onVnodeBeforeUnmount)&&Zt(Fe,R,T),ie&6)kt(T.component,P,V);else{if(ie&128){T.suspense.unmount(P,V);return}pe&&Ir(T,null,R,"beforeUnmount"),ie&64?T.type.remove(T,R,P,ee,V):B&&!B.hasOnce&&(L!==pt||Q>0&&Q&64)?St(B,R,P,!1,!0):(L===pt&&Q&384||!U&&ie&16)&&St(H,R,P),V&&Me(T)}const We=ae!=null&&oe==null;(Ae&&(Fe=G&&G.onVnodeUnmounted)||pe||We)&&It(()=>{Fe&&Zt(Fe,R,T),pe&&Ir(T,null,R,"unmounted"),We&&(T.el=null)},P)},Me=T=>{const{type:R,el:P,anchor:V,transition:U}=T;if(R===pt){Bn(P,V);return}if(R===Fo){$(T);return}const L=()=>{s(P),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(T.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:K}=U,H=()=>G(P,L);K?K(T.el,L,H):H()}else L()},Bn=(T,R)=>{let P;for(;T!==R;)P=g(T),s(T),T=P;s(R)},kt=(T,R,P)=>{const{bum:V,scope:U,job:L,subTree:G,um:K,m:H,a:B}=T;Ef(H),Ef(B),V&&Lo(V),U.stop(),L&&(L.flags|=8,Le(G,T,R,P)),K&&It(K,R),It(()=>{T.isUnmounted=!0},R)},St=(T,R,P,V=!1,U=!1,L=0)=>{for(let G=L;G<T.length;G++)Le(T[G],R,P,V,U)},x=T=>{if(T.shapeFlag&6)return x(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=g(T.anchor||T.el),P=R&&R[hg];return P?g(P):R};let J=!1;const z=(T,R,P)=>{let V;T==null?R._vnode&&(Le(R._vnode,null,null,!0),V=R._vnode.component):C(R._vnode||null,T,R,null,null,null,P),R._vnode=T,J||(J=!0,of(V),ig(),J=!1)},ee={p:C,um:Le,m:Mt,r:Me,mt:Te,mc:v,pc:me,pbc:I,n:x,o:t};return{render:z,hydrate:void 0,createApp:wE(z)}}function kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function UE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ou(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=_n(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ou(o,c)),c.type===La&&(c.patchFlag===-1&&(c=s[i]=_n(c)),c.el=o.el),c.type===mt&&!c.el&&(c.el=o.el)}}function BE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ug(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ug(e)}function Ef(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Bg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Bg(e.subTree):null}const jg=t=>t.__isSuspense;function jE(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Wv(t)}const pt=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),yi=[];let Ot=null;function xr(t=!1){yi.push(Ot=t?null:[])}function qE(){yi.pop(),Ot=yi[yi.length-1]||null}let ki=1;function ta(t,e=!1){ki+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function qg(t){return t.dynamicChildren=ki>0?Ot||os:null,qE(),ki>0&&Ot&&Ot.push(t),t}function ll(t,e,n,r,s,i){return qg(Cr(t,e,n,r,s,i,!0))}function na(t,e,n,r,s){return qg(Je(t,e,n,r,s,!0))}function Di(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const $g=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||qe(t)||fe(t)?{i:it,r:t,k:e,f:!!n}:t:null);function Cr(t,e=null,n=null,r=0,s=null,i=t===pt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$g(e),ref:e&&Uo(e),scopeId:ag,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return c?(au(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),ki>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const Je=$E;function $E(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dE)&&(t=mt),Di(t)){const c=lr(t,e,!0);return n&&au(c,n),ki>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(nT(t)&&(t=t.__vccOpts),e){e=HE(e);let{class:c,style:l}=e;c&&!xe(c)&&(e.class=Pa(c)),Se(l)&&(Na(l)&&!ne(l)&&(l=ze({},l)),e.style=Gl(l))}const o=xe(t)?1:jg(t)?128:fg(t)?64:Se(t)?4:fe(t)?2:0;return Cr(t,e,n,r,s,o,i,!0)}function HE(t){return t?Na(t)||Og(t)?ze({},t):t:null}function lr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?GE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&$g(u),ref:e&&e.ref?n&&i?ne(i)?i.concat(Uo(e)):[i,Uo(e)]:Uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lr(t.ssContent),ssFallback:t.ssFallback&&lr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Mr(f,l.clone(f)),f}function WE(t=" ",e=0){return Je(La,null,t,e)}function dC(t,e){const n=Je(Fo,null,t);return n.staticCount=e,n}function KE(t="",e=!1){return e?(xr(),na(mt,null,t)):Je(mt,null,t)}function sn(t){return t==null||typeof t=="boolean"?Je(mt):ne(t)?Je(pt,null,t.slice()):Di(t)?_n(t):Je(La,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lr(t)}function au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Og(e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[WE(e)]):n=8);t.children=e,t.shapeFlag|=n}function GE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pa([e.class,r.class]));else if(s==="style")e.style=Gl([e.style,r.style]);else if(Ta(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Ia(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){Yt(t,e,7,[n,r])}const zE=Pg();let QE=0;function YE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zE,i={uid:QE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xg(r,s),emitsOptions:Cg(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=RE.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const Ma=()=>_t||it;let ra,ul;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ra=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),ul=e("__VUE_SSR_SETTERS__",n=>Oi=n)}const Qi=t=>{const e=_t;return ra(t),t.scope.on(),()=>{t.scope.off(),ra(e)}},Tf=()=>{_t&&_t.scope.off(),ra(null)};function Hg(t){return t.vnode.shapeFlag&4}let Oi=!1;function JE(t,e=!1,n=!1){e&&ul(e);const{props:r,children:s}=t.vnode,i=Hg(t);kE(t,r,i,e),xE(t,s,n||e);const o=i?XE(t,e):void 0;return e&&ul(!1),o}function XE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mE);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?eT(t):null,i=Qi(t),o=zi(r,t,0,[t.props,s]),c=Np(o);if(Nn(),i(),(c||t.sp)&&!ls(t)&&vg(t),c){if(o.then(Tf,Tf),e)return o.then(l=>{If(t,l)}).catch(l=>{ka(l,t,0)});t.asyncDep=o}else If(t,o)}else Wg(t)}function If(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=ng(e)),Wg(t)}function Wg(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=Qi(t);Cn();try{_E(t)}finally{Nn(),s()}}}const ZE={get(t,e){return dt(t,"get",""),t[e]}};function eT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ZE),slots:t.slots,emit:t.emit,expose:e}}function Fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ng(tu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}})):t.proxy}function tT(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function nT(t){return fe(t)&&"__vccOpts"in t}const Rt=(t,e)=>Bv(t,e,Oi);function cu(t,e,n){try{ta(-1);const r=arguments.length;return r===2?Se(e)&&!ne(e)?Di(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Di(n)&&(n=[n]),Je(t,e,n))}finally{ta(1)}}const rT="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const wf=typeof window<"u"&&window.trustedTypes;if(wf)try{hl=wf.createPolicy("vue",{createHTML:t=>t})}catch{}const Kg=hl?t=>hl.createHTML(t):t=>t,sT="http://www.w3.org/2000/svg",iT="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,Af=mn&&mn.createElement("template"),oT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(sT,t):e==="mathml"?mn.createElementNS(iT,t):n?mn.createElement(t,{is:n}):mn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Af.innerHTML=Kg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Af.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wn="transition",Ys="animation",gs=Symbol("_vtc"),Gg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zg=ze({},pg,Gg),aT=t=>(t.displayName="Transition",t.props=zg,t),pC=aT((t,{slots:e})=>cu(tE,Qg(t),e)),Ar=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rf=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Qg(t){const e={};for(const A in t)A in Gg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=cT(s),C=S&&S[0],k=S&&S[1],{onBeforeEnter:M,onEnter:O,onEnterCancelled:q,onLeave:$,onLeaveCancelled:X,onBeforeAppear:se=M,onAppear:w=O,onAppearCancelled:v=q}=e,y=(A,E,Te,$e)=>{A._enterCancelled=$e,Qn(A,E?f:c),Qn(A,E?u:o),Te&&Te()},I=(A,E)=>{A._isLeaving=!1,Qn(A,p),Qn(A,_),Qn(A,g),E&&E()},b=A=>(E,Te)=>{const $e=A?w:O,Pe=()=>y(E,A,Te);Ar($e,[E,Pe]),bf(()=>{Qn(E,A?l:i),en(E,A?f:c),Rf($e)||Sf(E,r,C,Pe)})};return ze(e,{onBeforeEnter(A){Ar(M,[A]),en(A,i),en(A,o)},onBeforeAppear(A){Ar(se,[A]),en(A,l),en(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,E){A._isLeaving=!0;const Te=()=>I(A,E);en(A,p),A._enterCancelled?(en(A,g),fl(A)):(fl(A),en(A,g)),bf(()=>{A._isLeaving&&(Qn(A,p),en(A,_),Rf($)||Sf(A,r,k,Te))}),Ar($,[A,Te])},onEnterCancelled(A){y(A,!1,void 0,!0),Ar(q,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Ar(v,[A])},onLeaveCancelled(A){I(A),Ar(X,[A])}})}function cT(t){if(t==null)return null;if(Se(t))return[Dc(t.enter),Dc(t.leave)];{const e=Dc(t);return[e,e]}}function Dc(t){return iv(t)}function en(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[gs]||(t[gs]=new Set)).add(e)}function Qn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[gs];n&&(n.delete(e),n.size||(t[gs]=void 0))}function bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lT=0;function Sf(t,e,n,r){const s=t._endId=++lT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Yg(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=_=>{_.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,g)}function Yg(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${Wn}Delay`),i=r(`${Wn}Duration`),o=Pf(s,i),c=r(`${Ys}Delay`),l=r(`${Ys}Duration`),u=Pf(c,l);let f=null,p=0,g=0;e===Wn?o>0&&(f=Wn,p=o,g=i.length):e===Ys?u>0&&(f=Ys,p=u,g=l.length):(p=Math.max(o,u),f=p>0?o>u?Wn:Ys:null,g=f?f===Wn?i.length:l.length:0);const _=f===Wn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Wn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:_}}function Pf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Cf(n)+Cf(t[r])))}function Cf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function fl(t){return(t?t.ownerDocument:document).body.offsetHeight}function uT(t,e,n){const r=t[gs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Nf=Symbol("_vod"),hT=Symbol("_vsh"),fT=Symbol(""),dT=/(?:^|;)\s*display\s*:/;function pT(t,e,n){const r=t.style,s=xe(n);let i=!1;if(n&&!s){if(e)if(xe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&si(r,c,"")}else for(const o in e)n[o]==null&&si(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?mT(t,o,!xe(e)&&e?e[o]:void 0,c)||si(r,o,c):si(r,o,"")}}else if(s){if(e!==n){const o=r[fT];o&&(n+=";"+o),r.cssText=n,i=dT.test(n)}}else e&&t.removeAttribute("style");Nf in t&&(t[Nf]=i?r.display:"",t[hT]&&(r.display="none"))}const kf=/\s*!important$/;function si(t,e,n){if(ne(n))n.forEach(r=>si(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gT(t,e);kf.test(n)?t.setProperty(pr(r),n.replace(kf,""),"important"):t[r]=n}}const Df=["Webkit","Moz","ms"],Oc={};function gT(t,e){const n=Oc[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Oc[e]=r;r=Ra(r);for(let s=0;s<Df.length;s++){const i=Df[s]+r;if(i in t)return Oc[e]=i}return e}function mT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&xe(r)&&n===r}const Of="http://www.w3.org/1999/xlink";function Vf(t,e,n,r,s,i=hv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Of,e.slice(6,e.length)):t.setAttributeNS(Of,e,n):n==null||i&&!Vp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Lt(n)?String(n):n)}function xf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function er(t,e,n,r){t.addEventListener(e,n,r)}function _T(t,e,n,r){t.removeEventListener(e,n,r)}const Lf=Symbol("_vei");function yT(t,e,n,r,s=null){const i=t[Lf]||(t[Lf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=vT(e);if(r){const u=i[e]=IT(r,s);er(t,c,u,l)}else o&&(_T(t,c,o,l),i[e]=void 0)}}const Mf=/(?:Once|Passive|Capture)$/;function vT(t){let e;if(Mf.test(t)){e={};let r;for(;r=t.match(Mf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pr(t.slice(2)),e]}let Vc=0;const ET=Promise.resolve(),TT=()=>Vc||(ET.then(()=>Vc=0),Vc=Date.now());function IT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(wT(r,n.value),e,5,[r])};return n.value=t,n.attached=TT(),n}function wT(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ff=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uT(t,r,o):e==="style"?pT(t,n,r):Ta(e)?Ia(e)||yT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RT(t,e,r,o))?(xf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vf(t,e,r,o,i,e!=="value")):t._isVueCE&&(bT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!xe(r)))?xf(t,bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vf(t,e,r,o))};function RT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ff(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ff(e)&&xe(n)?!1:e in t}function bT(t,e){const n=t._def.props;if(!n)return!1;const r=bt(e);return Array.isArray(n)?n.some(s=>bt(s)===r):Object.keys(n).some(s=>bt(s)===r)}const Jg=new WeakMap,Xg=new WeakMap,sa=Symbol("_moveCb"),Uf=Symbol("_enterCb"),ST=t=>(delete t.props.mode,t),PT=ST({name:"TransitionGroup",props:ze({},zg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ma(),r=dg();let s,i;return Ig(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!OT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(NT),s.forEach(kT);const c=s.filter(DT);fl(n.vnode.el),c.forEach(l=>{const u=l.el,f=u.style;en(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[sa]=g=>{g&&g.target!==u||(!g||g.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[sa]=null,Qn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ee(t),c=Qg(o);let l=o.tag||pt;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),Mr(f,Ni(f,c,r,n)),Jg.set(f,Zg(f.el)))}i=e.default?ru(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&Mr(f,Ni(f,c,r,n))}return Je(l,null,i)}}}),CT=PT;function NT(t){const e=t.el;e[sa]&&e[sa](),e[Uf]&&e[Uf]()}function kT(t){Xg.set(t,Zg(t.el))}function DT(t){const e=Jg.get(t),n=Xg.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el,o=i.style,c=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=c.width/i.offsetWidth),i.offsetHeight&&(u=c.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),o.transform=o.webkitTransform=`translate(${r/l}px,${s/u}px)`,o.transitionDuration="0s",t}}function Zg(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function OT(t,e,n){const r=t.cloneNode(),s=t[gs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Yg(r);return i.removeChild(r),o}const ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Lo(e,n):e};function VT(t){t.target.composing=!0}function Bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bn=Symbol("_assign");function jf(t,e,n){return e&&(t=t.trim()),n&&(t=ba(t)),t}const gC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bn]=ms(s);const i=r||s.props&&s.props.type==="number";er(t,e?"change":"input",o=>{o.target.composing||t[bn](jf(t.value,n,i))}),(n||i)&&er(t,"change",()=>{t.value=jf(t.value,n,i)}),e||(er(t,"compositionstart",VT),er(t,"compositionend",Bf),er(t,"change",Bf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bn]=ms(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ba(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},mC={deep:!0,created(t,e,n){t[bn]=ms(n),er(t,"change",()=>{const r=t._modelValue,s=Vi(t),i=t.checked,o=t[bn];if(ne(r)){const c=zl(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Ps(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(em(t,i))})},mounted:qf,beforeUpdate(t,e,n){t[bn]=ms(n),qf(t,e,n)}};function qf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ne(e))s=zl(e,r.props.value)>-1;else if(Ps(e))s=e.has(r.props.value);else{if(e===n)return;s=Cs(e,em(t,!0))}t.checked!==s&&(t.checked=s)}const _C={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ps(e);er(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ba(Vi(o)):Vi(o));t[bn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Da(()=>{t._assigning=!1})}),t[bn]=ms(r)},mounted(t,{value:e}){$f(t,e)},beforeUpdate(t,e,n){t[bn]=ms(n)},updated(t,{value:e}){t._assigning||$f(t,e)}};function $f(t,e){const n=t.multiple,r=ne(e);if(!(n&&!r&&!Ps(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Vi(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=zl(e,c)>-1}else o.selected=e.has(c);else if(Cs(Vi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vi(t){return"_value"in t?t._value:t.value}function em(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const xT=["ctrl","shift","alt","meta"],LT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xT.some(n=>t[`${n}Key`]&&!e.includes(n))},yC=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=LT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},MT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vC=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=pr(s.key);if(e.some(o=>o===i||MT[o]===i))return t(s)})},FT=ze({patchProp:AT},oT);let Hf;function UT(){return Hf||(Hf=ME(FT))}const BT=(...t)=>{const e=UT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qT(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let tm;const Ua=t=>tm=t,nm=Symbol();function dl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vi||(vi={}));function $T(){const t=Fp(!0),e=t.run(()=>Pi({}));let n=[],r=[];const s=tu({install(i){Ua(s),s._a=i,i.provide(nm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const rm=()=>{};function Wf(t,e,n,r=rm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Up()&&dv(s),s}function Zr(t,...e){t.slice().forEach(n=>{n(...e)})}const HT=t=>t(),Kf=Symbol(),xc=Symbol();function pl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];dl(s)&&dl(r)&&t.hasOwnProperty(n)&&!qe(r)&&!An(r)?t[n]=pl(s,r):t[n]=r}return t}const WT=Symbol();function KT(t){return!dl(t)||!t.hasOwnProperty(WT)}const{assign:Yn}=Object;function GT(t){return!!(qe(t)&&t.effect)}function zT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=Lv(n.state.value[t]);return Yn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=tu(Rt(()=>{Ua(n);const _=n._s.get(t);return o[g].call(_,_)})),p),{}))}return l=sm(t,u,e,n,r,!0),l}function sm(t,e,n={},r,s,i){let o;const c=Yn({actions:{}},n),l={deep:!0};let u,f,p=[],g=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let C;function k(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:vi.patchFunction,storeId:t,events:_}):(pl(r.state.value[t],v),y={type:vi.patchObject,payload:v,storeId:t,events:_});const I=C=Symbol();Da().then(()=>{C===I&&(u=!0)}),f=!0,Zr(p,y,r.state.value[t])}const M=i?function(){const{state:y}=n,I=y?y():{};this.$patch(b=>{Yn(b,I)})}:rm;function O(){o.stop(),p=[],g=[],r._s.delete(t)}const q=(v,y="")=>{if(Kf in v)return v[xc]=y,v;const I=function(){Ua(r);const b=Array.from(arguments),A=[],E=[];function Te(le){A.push(le)}function $e(le){E.push(le)}Zr(g,{args:b,name:I[xc],store:X,after:Te,onError:$e});let Pe;try{Pe=v.apply(this&&this.$id===t?this:X,b)}catch(le){throw Zr(E,le),le}return Pe instanceof Promise?Pe.then(le=>(Zr(A,le),le)).catch(le=>(Zr(E,le),Promise.reject(le))):(Zr(A,Pe),Pe)};return I[Kf]=!0,I[xc]=y,I},$={_p:r,$id:t,$onAction:Wf.bind(null,g),$patch:k,$reset:M,$subscribe(v,y={}){const I=Wf(p,v,y.detached,()=>b()),b=o.run(()=>gi(()=>r.state.value[t],A=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:vi.direct,events:_},A)},Yn({},l,y)));return I},$dispose:O},X=Gi($);r._s.set(t,X);const w=(r._a&&r._a.runWithContext||HT)(()=>r._e.run(()=>(o=Fp()).run(()=>e({action:q}))));for(const v in w){const y=w[v];if(qe(y)&&!GT(y)||An(y))i||(S&&KT(y)&&(qe(y)?y.value=S[v]:pl(y,S[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const I=q(y,v);w[v]=I,c.actions[v]=y}}return Yn(X,w),Yn(Ee(X),w),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:v=>{k(y=>{Yn(y,v)})}}),r._p.forEach(v=>{Yn(X,o.run(()=>v({store:X,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(X.$state,S),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function im(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const u=Kv();return c=c||(u?jt(nm,null):null),c&&Ua(c),c=tm,c._s.has(r)||(i?sm(r,e,s,c):zT(r,s,c)),c._s.get(r)}return o.$id=r,o}var Gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(om(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new YT;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JT=function(t){const e=om(t);return am.encodeByteArray(e,!0)},ia=function(t){return JT(t).replace(/\./g,"")},cm=function(t){try{return am.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=()=>XT().__FIREBASE_DEFAULTS__,eI=()=>{if(typeof process>"u"||typeof Gf>"u")return;const t=Gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cm(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return ZT()||eI()||tI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lm=t=>{var e,n;return(n=(e=Ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nI=t=>{const e=lm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},um=()=>{var t;return(t=Ba())===null||t===void 0?void 0:t.config},hm=t=>{var e;return(e=Ba())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ia(JSON.stringify(n)),ia(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function oI(){var t;const e=(t=Ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uI(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hI(){return!oI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fI(){try{return typeof indexedDB=="object"}catch{return!1}}function dI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pI,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,c,r)}}function gI(t,e){return t.replace(mI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mI=/\{\$([^}]+)}/g;function _I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zf(i)&&zf(o)){if(!oa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yI(t,e){const n=new vI(t,e);return n.subscribe.bind(n)}class vI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lc),s.error===void 0&&(s.error=Lc),s.complete===void 0&&(s.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:II(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function II(t){return t===br?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const RI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},bI=ye.INFO,SI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},PI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=SI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lu{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=PI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const CI=(t,e)=>e.some(n=>t instanceof n);let Qf,Yf;function NI(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kI(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fm=new WeakMap,gl=new WeakMap,dm=new WeakMap,Mc=new WeakMap,uu=new WeakMap;function DI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fm.set(n,t)}).catch(()=>{}),uu.set(e,t),e}function OI(t){if(gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VI(t){ml=t(ml)}function xI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return dm.set(r,e.sort?e.sort():[e]),ir(r)}:kI().includes(t)?function(...e){return t.apply(Fc(this),e),ir(fm.get(this))}:function(...e){return ir(t.apply(Fc(this),e))}}function LI(t){return typeof t=="function"?xI(t):(t instanceof IDBTransaction&&OI(t),CI(t,NI())?new Proxy(t,ml):t)}function ir(t){if(t instanceof IDBRequest)return DI(t);if(Mc.has(t))return Mc.get(t);const e=LI(t);return e!==t&&(Mc.set(t,e),uu.set(e,t)),e}const Fc=t=>uu.get(t);function MI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const FI=["get","getKey","getAll","getAllKeys","count"],UI=["put","add","delete","clear"],Uc=new Map;function Jf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=UI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||FI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Uc.set(e,i),i}VI(t=>({...t,get:(e,n,r)=>Jf(e,n)||t.get(e,n,r),has:(e,n)=>!!Jf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",Xf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new lu("@firebase/app"),qI="@firebase/app-compat",$I="@firebase/analytics-compat",HI="@firebase/analytics",WI="@firebase/app-check-compat",KI="@firebase/app-check",GI="@firebase/auth",zI="@firebase/auth-compat",QI="@firebase/database",YI="@firebase/data-connect",JI="@firebase/database-compat",XI="@firebase/functions",ZI="@firebase/functions-compat",ew="@firebase/installations",tw="@firebase/installations-compat",nw="@firebase/messaging",rw="@firebase/messaging-compat",sw="@firebase/performance",iw="@firebase/performance-compat",ow="@firebase/remote-config",aw="@firebase/remote-config-compat",cw="@firebase/storage",lw="@firebase/storage-compat",uw="@firebase/firestore",hw="@firebase/vertexai-preview",fw="@firebase/firestore-compat",dw="firebase",pw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="[DEFAULT]",gw={[_l]:"fire-core",[qI]:"fire-core-compat",[HI]:"fire-analytics",[$I]:"fire-analytics-compat",[KI]:"fire-app-check",[WI]:"fire-app-check-compat",[GI]:"fire-auth",[zI]:"fire-auth-compat",[QI]:"fire-rtdb",[YI]:"fire-data-connect",[JI]:"fire-rtdb-compat",[XI]:"fire-fn",[ZI]:"fire-fn-compat",[ew]:"fire-iid",[tw]:"fire-iid-compat",[nw]:"fire-fcm",[rw]:"fire-fcm-compat",[sw]:"fire-perf",[iw]:"fire-perf-compat",[ow]:"fire-rc",[aw]:"fire-rc-compat",[cw]:"fire-gcs",[lw]:"fire-gcs-compat",[uw]:"fire-fst",[fw]:"fire-fst-compat",[hw]:"fire-vertex","fire-js":"fire-js",[dw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,mw=new Map,vl=new Map;function Zf(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(vl.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of aa.values())Zf(n,t);for(const n of mw.values())Zf(n,t);return!0}function hu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Yi("app","Firebase",_w);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=pw;function pm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw or.create("bad-app-name",{appName:String(s)});if(n||(n=um()),!n)throw or.create("no-options");const i=aa.get(s);if(i){if(oa(n,i.options)&&oa(r,i.config))return i;throw or.create("duplicate-app",{appName:s})}const o=new AI(s);for(const l of vl.values())o.addComponent(l);const c=new yw(n,r,o);return aa.set(s,c),c}function gm(t=yl){const e=aa.get(t);if(!e&&t===yl&&um())return pm();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){var r;let s=(r=gw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(c.join(" "));return}_s(new Fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebase-heartbeat-database",Ew=1,xi="firebase-heartbeat-store";let Bc=null;function mm(){return Bc||(Bc=MI(vw,Ew,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function Tw(t){try{const n=(await mm()).transaction(xi),r=await n.objectStore(xi).get(_m(t));return await n.done,r}catch(e){if(e instanceof Mn)Dn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function ed(t,e){try{const r=(await mm()).transaction(xi,"readwrite");await r.objectStore(xi).put(e,_m(t)),await r.done}catch(n){if(n instanceof Mn)Dn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function _m(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=1024,ww=30*24*60*60*1e3;class Aw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=td();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ww}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=td(),{heartbeatsToSend:r,unsentEntries:s}=Rw(this._heartbeatsCache.heartbeats),i=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function td(){return new Date().toISOString().substring(0,10)}function Rw(t,e=Iw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fI()?dI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nd(t){return ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){_s(new Fr("platform-logger",e=>new BI(e),"PRIVATE")),_s(new Fr("heartbeat",e=>new Aw(e),"PRIVATE")),ar(_l,Xf,t),ar(_l,Xf,"esm2017"),ar("fire-js","")}Sw("");function fu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pw=ym,vm=new Yi("auth","Firebase",ym());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new lu("@firebase/auth");function Cw(t,...e){ca.logLevel<=ye.WARN&&ca.warn(`Auth (${Ns}): ${t}`,...e)}function Bo(t,...e){ca.logLevel<=ye.ERROR&&ca.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw pu(t,...e)}function Gt(t,...e){return pu(t,...e)}function du(t,e,n){const r=Object.assign(Object.assign({},Pw()),{[e]:n});return new Yi("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return du(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),du(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vm.create(t,...e)}function ce(t,e,...n){if(!t)throw pu(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function On(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kw(){return rd()==="http:"||rd()==="https:"}function rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kw()||cI()||"connection"in navigator)?navigator.onLine:!0}function Ow(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=iI()||lI()}get(){return Dw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new Xi(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,s={}){return Tm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return aI()||(u.referrerPolicy="no-referrer"),Em.fetch()(Im(t,t.config.apiHost,n,c),u)})}async function Tm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vw),e);try{const s=new Mw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ko(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw du(t,f,u);qt(t,f)}}catch(s){if(s instanceof Mn)throw s;qt(t,"network-request-failed",{message:String(s)})}}async function Zi(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Im(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gu(t.config,s):`${t.config.apiScheme}://${s}`}function Lw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),xw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function sd(t){return t!==void 0&&t.enterprise!==void 0}class Fw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Uw(t,e){return Fn(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function wm(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jw(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),s=mu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ei(jc(s.auth_time)),issuedAtTime:Ei(jc(s.iat)),expirationTime:Ei(jc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jc(t){return Number(t)*1e3}function mu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cm(n);return s?JSON.parse(s):(Bo("Failed to decode base64 JWT payload"),null)}catch(s){return Bo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function id(t){const e=mu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&qw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ys(t,wm(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Am(i.providerUserInfo):[],c=Ww(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Tl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Hw(t){const e=Qe(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ww(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Am(t){return t.map(e=>{var{providerId:n}=e,r=fu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t,e){const n=await Tm(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Im(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Em.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gw(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new us;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $w(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jw(this,e)}reload(){return Hw(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await ys(this,Bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:$,isAnonymous:X,providerData:se,stsTokenManager:w}=n;ce(q&&w,e,"internal-error");const v=us.fromJSON(this.name,w);ce(typeof q=="string",e,"internal-error"),Kn(p,e.name),Kn(g,e.name),ce(typeof $=="boolean",e,"internal-error"),ce(typeof X=="boolean",e,"internal-error"),Kn(_,e.name),Kn(S,e.name),Kn(C,e.name),Kn(k,e.name),Kn(M,e.name),Kn(O,e.name);const y=new In({uid:q,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:X,photoURL:S,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:M,lastLoginAt:O});return se&&Array.isArray(se)&&(y.providerData=se.map(I=>Object.assign({},I))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new us;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await la(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Am(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new us;c.updateFromIdToken(r);const l=new In({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;function wn(t){On(t instanceof Function,"Expected a class definition");let e=od.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,od.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rm.type="NONE";const ad=Rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(wn(ad),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||wn(ad);const o=jo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=In._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(km(e))return"Blackberry";if(Dm(e))return"Webos";if(Sm(e))return"Safari";if((e.includes("chrome/")||Pm(e))&&!e.includes("edge/"))return"Chrome";if(Nm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bm(t=vt()){return/firefox\//i.test(t)}function Sm(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pm(t=vt()){return/crios\//i.test(t)}function Cm(t=vt()){return/iemobile/i.test(t)}function Nm(t=vt()){return/android/i.test(t)}function km(t=vt()){return/blackberry/i.test(t)}function Dm(t=vt()){return/webos/i.test(t)}function _u(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zw(t=vt()){var e;return _u(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qw(){return uI()&&document.documentMode===10}function Om(t=vt()){return _u(t)||Nm(t)||Dm(t)||km(t)||/windows phone/i.test(t)||Cm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=cd(vt());break;case"Worker":n=`${cd(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=6;class Zw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Xw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ld(this),this.idTokenSubscription=new ld(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wm(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ow()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(Sn(this));const n=e?Qe(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jw(this),n=new Zw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mr(t){return Qe(t)}class ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=yI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tA(t){ja=t}function xm(t){return ja.loadJS(t)}function nA(){return ja.recaptchaEnterpriseScript}function rA(){return ja.gapiScript}function sA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iA="recaptcha-enterprise",oA="NO_RECAPTCHA";class aA{constructor(e){this.type=iA,this.auth=mr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Uw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Fw(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;sd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(oA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&sd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=nA();l.length!==0&&(l+=c),xm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function ud(t,e,n,r=!1){const s=new aA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Il(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ud(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ud(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t,e){const n=hu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oa(i,e??{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function lA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uA(t,e,n){const r=mr(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Lm(e),{host:o,port:c}=hA(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),fA()}function Lm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hA(t){const e=Lm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:hd(o)}}}function hd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function dA(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return Zi(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e){return Zi(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function mA(t,e){return Zi(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends yu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,n,"signInWithPassword",pA);case"emailLink":return gA(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,r,"signUpPassword",dA);case"emailLink":return mA(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Zi(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="http://localhost";class Ur extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:_A,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vA(t){const e=ii(oi(t)).link,n=e?ii(oi(e)).deep_link_id:null,r=ii(oi(t)).deep_link_id;return(r?ii(oi(r)).link:null)||r||n||e||t}class vu{constructor(e){var n,r,s,i,o,c;const l=ii(oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=yA((s=l.mode)!==null&&s!==void 0?s:null);ce(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=vA(e);try{return new vu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vu.parseLink(n);return ce(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends eo{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends eo{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends eo{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return Zi(t,"POST","/v1/accounts:signUp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=fd(r);return new Br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fd(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ua(e,n,r,s)}}function Mm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(t,i,e,r):i})}async function TA(t,e,n=!1){const r=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(Sn(r));const s="reauthenticate";try{const i=await ys(t,Mm(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=mu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(t,e,n=!1){if(Wt(t.app))return Promise.reject(Sn(t));const r="signIn",s=await Mm(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function wA(t,e){return Fm(mr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(t){const e=mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AA(t,e,n){if(Wt(t.app))return Promise.reject(Sn(t));const r=mr(t),o=await Il(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Um(t),l}),c=await Br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function RA(t,e,n){return Wt(t.app)?Promise.reject(Sn(t)):wA(Qe(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Um(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Qe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ys(r,bA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function PA(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function CA(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function NA(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function kA(t){return Qe(t).signOut()}const ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1e3,OA=10;class jm extends Bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Qw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jm.type="LOCAL";const VA=jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qm.type="SESSION";const $m=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await xA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Tu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function MA(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function FA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BA(){return Hm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="firebaseLocalStorageDb",jA=1,fa="firebaseLocalStorage",Km="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function qA(){const t=indexedDB.deleteDatabase(Wm);return new to(t).toPromise()}function wl(){const t=indexedDB.open(Wm,jA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:Km})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await qA(),e(await wl()))})})}async function dd(t,e,n){const r=$a(t,!0).put({[Km]:e,value:n});return new to(r).toPromise()}async function $A(t,e){const n=$a(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function pd(t,e){const n=$a(t,!0).delete(e);return new to(n).toPromise()}const HA=800,WA=3;class Gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(BA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await dd(e,ha,"1"),await pd(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$A(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new to(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gm.type="LOCAL";const KA=Gm;new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e){return e?wn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GA(t){return Fm(t.auth,new Iu(t),t.bypassAuthState)}function zA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),IA(n,new Iu(t),t.bypassAuthState)}async function QA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),TA(n,new Iu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GA;case"linkViaPopup":case"linkViaRedirect":return QA;case"reauthViaPopup":case"reauthViaRedirect":return zA;default:qt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Xi(2e3,1e4);async function JA(t,e,n){if(Wt(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=mr(t);Nw(t,e,Eu);const s=zm(r,n);return new Nr(r,"signInViaPopup",e,s).executeNotNull()}class Nr extends Qm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YA.get())};e()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="pendingRedirect",qo=new Map;class ZA extends Qm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const r=await e0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qo.set(this.auth._key(),e)}return this.bypassAuthState||qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e0(t,e){const n=r0(e),r=n0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function t0(t,e){qo.set(t._key(),e)}function n0(t){return wn(t._redirectPersistence)}function r0(t){return jo(XA,t.config.apiKey,t.name)}async function s0(t,e,n=!1){if(Wt(t.app))return Promise.reject(Sn(t));const r=mr(t),s=zm(r,e),o=await new ZA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=10*60*1e3;class o0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ym(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i0&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ym({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ym(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u0=/^https?/;async function h0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await c0(t);for(const n of e)try{if(f0(n))return}catch{}qt(t,"unauthorized-domain")}function f0(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!u0.test(n))return!1;if(l0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Xi(3e4,6e4);function md(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function p0(t){return new Promise((e,n)=>{var r,s,i;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{md(),n(Gt(t,"network-request-failed"))},timeout:d0.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const c=sA("iframefcb");return cn()[c]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},xm(`${rA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw $o=null,e})}let $o=null;function g0(t){return $o=$o||p0(t),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Xi(5e3,15e3),_0="__/auth/iframe",y0="emulator/auth/iframe",v0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T0(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gu(e,y0):`https://${t.config.authDomain}/${_0}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=E0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ji(r).slice(1)}`}async function I0(t){const e=await g0(t),n=cn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:T0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},m0.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A0=500,R0=600,b0="_blank",S0="http://localhost";class _d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P0(t,e,n,r=A0,s=R0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},w0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=vt().toLowerCase();n&&(c=Pm(u)?b0:n),bm(u)&&(e=e||S0,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(zw(u)&&c!=="_self")return C0(e||"",c),new _d(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new _d(p)}function C0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="__/auth/handler",k0="emulator/auth/handler",D0=encodeURIComponent("fac");async function yd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof Eu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_I(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${D0}=${encodeURIComponent(l)}`:"";return`${O0(t)}?${Ji(c).slice(1)}${u}`}function O0({config:t}){return t.emulator?gu(t,k0):`https://${t.authDomain}/${N0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="webStorageSupport";class V0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$m,this._completeRedirectFn=s0,this._overrideRedirectResult=t0}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await yd(e,n,r,El(),s);return P0(e,o,Tu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await yd(e,n,r,El(),s);return MA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await I0(e),r=new o0(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Om()||Sm()||_u()}}const x0=V0;var vd="@firebase/auth",Ed="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F0(t){_s(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},u=new eA(r,s,i,l);return lA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_s(new Fr("auth-internal",e=>{const n=mr(e.getProvider("auth").getImmediate());return(r=>new L0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(vd,Ed,M0(t)),ar(vd,Ed,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=5*60,B0=hm("authIdTokenMaxAge")||U0;let Td=null;const j0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B0)return;const s=n==null?void 0:n.token;Td!==s&&(Td=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function q0(t=gm()){const e=hu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cA(t,{popupRedirectResolver:x0,persistence:[KA,VA,$m]}),r=hm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=j0(i.toString());CA(n,o,()=>o(n.currentUser)),PA(n,c=>o(c))}}const s=lm("auth");return s&&uA(n,`http://${s}`),n}function $0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F0("Browser");var Id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,Jm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function y(){}y.prototype=v.prototype,w.D=v.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(I,b,A){for(var E=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)E[Te-2]=arguments[Te];return v.prototype[b].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)I[b]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(b=0;16>b;++b)I[b]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=w.g[0],y=w.g[1],b=w.g[2];var A=w.g[3],E=v+(A^y&(b^A))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[2]+606105819&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(A^y&(b^A))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[6]+2821735955&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(A^y&(b^A))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[10]+4294925233&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(A^y&(b^A))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(b^v&(y^b))+I[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=b+(y^A&(v^y))+I[14]+2792965006&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(v^b&(A^v))+I[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=v+(b^A&(y^b))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[11]+643717713&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^A&(y^b))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[15]+3634488961&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^A&(y^b))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[3]+4107603335&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(b^A&(y^b))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(v^y))+I[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=b+(v^y&(A^v))+I[7]+1735328473&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(b^A))+I[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=v+(y^b^A)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[11]+1839030562&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^A)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[7]+4139469664&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^A)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[3]+3572445317&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(y^b^A)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^b)+I[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=b+(A^v^y)+I[15]+530742520&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^v)+I[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=v+(b^(y|~A))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[14]+2878612391&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~A))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[10]+4293915773&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~A))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[6]+2734768916&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=v+(b^(y|~A))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~b))+I[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=b+(v^(A|~y))+I[2]+718787259&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~v))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var y=v-this.blockSize,I=this.B,b=this.h,A=0;A<v;){if(b==0)for(;A<=y;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<v;)if(I[b++]=w.charCodeAt(A++),b==this.blockSize){s(this,I),b=0;break}}else for(;A<v;)if(I[b++]=w[A++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var y=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=y&255,y/=256;for(this.u(w),w=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)w[y++]=this.g[v]>>>I&255;return w};function i(w,v){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=v(w)}function o(w,v){this.h=v;for(var y=[],I=!0,b=w.length-1;0<=b;b--){var A=w[b]|0;I&&A==v||(y[b]=A,I=!1)}this.g=y}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(u(-w));for(var v=[],y=1,I=0;w>=y;I++)v[I]=w/y|0,y*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return k(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=p,b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+A),v);8>A?(A=u(Math.pow(v,A)),I=I.j(A).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-k(this).m();for(var w=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);w+=(0<=I?I:4294967296+I)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(C(this))return"-"+k(this).toString(w);for(var v=u(Math.pow(w,6)),y=this,I="";;){var b=$(y,v).g;y=M(y,b.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=b,S(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=M(this,w),C(w)?-1:S(w)?0:1};function k(w){for(var v=w.g.length,y=[],I=0;I<v;I++)y[I]=~w.g[I];return new o(y,~w.h).add(g)}t.abs=function(){return C(this)?k(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],I=0,b=0;b<=v;b++){var A=I+(this.i(b)&65535)+(w.i(b)&65535),E=(A>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=E>>>16,A&=65535,E&=65535,y[b]=E<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function M(w,v){return w.add(k(v))}t.j=function(w){if(S(this)||S(w))return p;if(C(this))return C(w)?k(this).j(k(w)):k(k(this).j(w));if(C(w))return k(this.j(k(w)));if(0>this.l(_)&&0>w.l(_))return u(this.m()*w.m());for(var v=this.g.length+w.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<w.g.length;b++){var A=this.i(I)>>>16,E=this.i(I)&65535,Te=w.i(b)>>>16,$e=w.i(b)&65535;y[2*I+2*b]+=E*$e,O(y,2*I+2*b),y[2*I+2*b+1]+=A*$e,O(y,2*I+2*b+1),y[2*I+2*b+1]+=E*Te,O(y,2*I+2*b+1),y[2*I+2*b+2]+=A*Te,O(y,2*I+2*b+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function O(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function q(w,v){this.g=w,this.h=v}function $(w,v){if(S(v))throw Error("division by zero");if(S(w))return new q(p,p);if(C(w))return v=$(k(w),v),new q(k(v.g),k(v.h));if(C(v))return v=$(w,k(v)),new q(k(v.g),v.h);if(30<w.g.length){if(C(w)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(w);)y=X(y),I=X(I);var b=se(y,1),A=se(I,1);for(I=se(I,2),y=se(y,2);!S(I);){var E=A.add(I);0>=E.l(w)&&(b=b.add(y),A=E),I=se(I,1),y=se(y,1)}return v=M(w,b.j(v)),new q(b,v)}for(b=p;0<=w.l(v);){for(y=Math.max(1,Math.floor(w.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),E=A.j(v);C(E)||0<E.l(w);)y-=I,A=u(y),E=A.j(v);S(A)&&(A=g),b=b.add(A),w=M(w,E)}return new q(b,w)}t.A=function(w){return $(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&w.i(I);return new o(y,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|w.i(I);return new o(y,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^w.i(I);return new o(y,this.h^w.h)};function X(w){for(var v=w.g.length+1,y=[],I=0;I<v;I++)y[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(y,w.h)}function se(w,v){var y=v>>5;v%=32;for(var I=w.g.length-y,b=[],A=0;A<I;A++)b[A]=0<v?w.i(A+y)>>>v|w.i(A+y+1)<<32-v:w.i(A+y);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Lr=o}).apply(typeof Id<"u"?Id:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xm,ai,Zm,Ho,Al,e_,t_,n_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in d))break e;d=d[N]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,m=!1,N={next:function(){if(!m&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,N,D){for(var W=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)W[Ne-2]=arguments[Ne];return h.prototype[N].apply(m,W)}}function C(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function k(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const N=a.length||0,D=m.length||0;a.length=N+D;for(let W=0;W<D;W++)a[N+W]=m[W]}else a.push(m)}}class M{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var X=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function se(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(d in m)a[d]=m[d];for(let D=0;D<y.length;D++)d=y[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function E(){var a=Nt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Te{constructor(){this.h=this.g=null}add(h,d){const m=$e.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new M(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,Nt=new Te,$t=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){A(d)}var h=$e;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}me=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function kt(a,h){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{$(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&kt.aa.h.call(this)}}S(kt,Me);var St={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,h,d,m,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=N,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ge(a){this.src=a,this.g={},this.h=0}ge.prototype.add=function(a,h,d,m,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var W=R(a,h,m,N);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new z(h,this.src,D,!!m,N),h.fa=d,a.push(h)),h};function T(a,h){var d=h.type;if(d in a.g){var m=a.g[d],N=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=N)&&Array.prototype.splice.call(m,N,1),D&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function R(a,h,d,m){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==m)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),V={};function U(a,h,d,m,N){if(Array.isArray(h)){for(var D=0;D<h.length;D++)U(a,h[D],d,m,N);return null}return d=oe(d),a&&a[x]?a.K(h,d,u(m)?!!m.capture:!1,N):L(a,h,d,!1,m,N)}function L(a,h,d,m,N,D){if(!h)throw Error("Invalid event type");var W=u(N)?!!N.capture:!!N,Ne=Q(a);if(Ne||(a[P]=Ne=new ge(a)),d=Ne.add(h,d,m,W,D),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Bn||(N=W),N===void 0&&(N=!1),a.addEventListener(h.toString(),m,N);else if(a.attachEvent)a.attachEvent(B(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,m,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)K(a,h[D],d,m,N);else m=u(m)?!!m.capture:!!m,d=oe(d),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=R(D,d,m,N),-1<d&&(ee(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=R(h,d,m,N)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])T(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(B(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Q(h))?(T(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function B(a){return a in V?V[a]:V[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new kt(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&H(a),a=d.call(m,h)}return a}function Q(a){return a=a[P],a instanceof ge?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){Le.call(this),this.i=new ge(this),this.M=this,this.F=null}S(ae,Le),ae.prototype[x]=!0,ae.prototype.removeEventListener=function(a,h,d,m){K(this,a,h,d,m)};function pe(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Me(h,a);else if(h instanceof Me)h.target=h.target||a;else{var N=h;h=new Me(m,a),I(h,N)}if(N=!0,d)for(var D=d.length-1;0<=D;D--){var W=h.g=d[D];N=Ae(W,m,!0,h)&&N}if(W=h.g=a,N=Ae(W,m,!0,h)&&N,N=Ae(W,m,!1,h)&&N,d)for(D=0;D<d.length;D++)W=h.g=d[D],N=Ae(W,m,!1,h)&&N}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ee(d[m]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},ae.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Ae(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,D=0;D<h.length;++D){var W=h[D];if(W&&!W.da&&W.capture==d){var Ne=W.listener,nt=W.ha||W.src;W.fa&&T(a.i,W),N=Ne.call(nt,m)!==!1&&N}}return N&&!m.defaultPrevented}function Fe(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function We(a){a.g=Fe(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends Le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(a){Le.call(this),this.h=a,this.g={}}S(ct,Le);var jn=[];function xs(a){se(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}ct.prototype.N=function(){ct.aa.N.call(this),xs(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=c.JSON.stringify,Ut=c.JSON.parse,uo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Gr(){}Gr.prototype.h=null;function uh(a){return a.h||(a.h=a.i())}function hh(){}var Ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uc(){Me.call(this,"d")}S(uc,Me);function hc(){Me.call(this,"c")}S(hc,Me);var yr={},fh=null;function ho(){return fh=fh||new ae}yr.La="serverreachability";function dh(a){Me.call(this,yr.La,a)}S(dh,Me);function Ms(a){const h=ho();pe(h,new dh(h))}yr.STAT_EVENT="statevent";function ph(a,h){Me.call(this,yr.STAT_EVENT,a),this.stat=h}S(ph,Me);function Et(a){const h=ho();pe(h,new ph(h,a))}yr.Ma="timingevent";function gh(a,h){Me.call(this,yr.Ma,a),this.size=h}S(gh,Me);function Fs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function Dy(a,h,d,m,N,D){a.info(function(){if(a.g)if(D)for(var W="",Ne=D.split("&"),nt=0;nt<Ne.length;nt++){var Ie=Ne[nt].split("=");if(1<Ie.length){var lt=Ie[0];Ie=Ie[1];var ut=lt.split("_");W=2<=ut.length&&ut[1]=="type"?W+(lt+"="+Ie+"&"):W+(lt+"=redacted&")}}else W=null;else W=D;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+d+`
`+W})}function Oy(a,h,d,m,N,D,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+d+`
`+D+" "+W})}function zr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xy(a,d)+(m?" "+m:"")})}function Vy(a,h){a.info(function(){return"TIMEOUT: "+h})}Us.prototype.info=function(){};function xy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var W=1;W<N.length;W++)N[W]=""}}}}return tt(d)}catch{return h}}var fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fc;function po(){}S(po,Gr),po.prototype.g=function(){return new XMLHttpRequest},po.prototype.i=function(){return{}},fc=new po;function qn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _h}function _h(){this.i=null,this.g="",this.h=!1}var yh={},dc={};function pc(a,h,d){a.L=1,a.v=yo(fn(h)),a.m=d,a.P=!0,vh(a,null)}function vh(a,h){a.F=Date.now(),go(a),a.A=fn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Oh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new _h,a.g=Jh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ft(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(jn[0]=N.toString()),N=jn);for(var D=0;D<N.length;D++){var W=U(d,N[D],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ms(),Dy(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&dn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=dn(this.g);var h=this.g.Ba();const Jr=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Bh(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Jr?Ms(3):Ms(2)),gc(this);var d=this.g.Z();this.X=d;t:if(Eh(this)){var m=Bh(this.g);a="";var N=m.length,D=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),Bs(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==N-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Oy(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,nt=this.g;if((Ne=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ne)){var Ie=Ne;break t}}Ie=null}if(d=Ie)zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mc(this,d);else{this.o=!1,this.s=3,Et(12),vr(this),Bs(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<W.length;)if(Ht=Ly(this,W),Ht==dc){ut==4&&(this.s=4,Et(14),d=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==yh){this.s=4,Et(15),zr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else zr(this.i,this.l,Ht,null),mc(this,Ht);if(Eh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||W.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)zr(this.i,this.l,W,"[Invalid Chunked Response]"),vr(this),Bs(this);else if(0<W.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ic(lt),lt.M=!0,Et(11))}}else zr(this.i,this.l,W,null),mc(this,W);ut==4&&vr(this),this.o&&!this.J&&(ut==4?Gh(this.j,this):(this.o=!1,go(this)))}else Zy(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),vr(this),Bs(this)}}}catch{}finally{}};function Eh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ly(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?dc:(d=Number(h.substring(d,m)),isNaN(d)?yh:(m+=1,m+d>h.length?dc:(h=h.slice(m,m+d),a.C=m+d,h)))}qn.prototype.cancel=function(){this.J=!0,vr(this)};function go(a){a.S=Date.now()+a.I,Th(a,a.I)}function Th(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Fs(g(a.ba,a),h)}function gc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Vy(this.i,this.A),this.L!=2&&(Ms(),Et(17)),vr(this),this.s=2,Bs(this)):Th(this,this.S-a)};function Bs(a){a.j.G==0||a.J||Gh(a.j,a)}function vr(a){gc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function mc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||_c(d.h,a))){if(!a.K&&_c(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ao(d),Io(d);else break e;Tc(d),Et(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fs(g(d.Za,d),6e3));if(1>=Ah(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Tr(d,11)}else if((a.K||d.g==a)&&Ao(d),!O(h))for(N=d.Da.g.parse(h),h=0;h<N.length;h++){let Ie=N[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const lt=Ie[3];lt!=null&&(d.la=lt,d.j.info("VER="+d.la));const ut=Ie[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const Jr=Ie[5];Jr!=null&&typeof Jr=="number"&&0<Jr&&(m=1.5*Jr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ht=a.g;if(Ht){const bo=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bo){var D=m.h;D.g||bo.indexOf("spdy")==-1&&bo.indexOf("quic")==-1&&bo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(yc(D,D.h),D.h=null))}if(m.D){const wc=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(m.ya=wc,Ve(m.I,m.D,wc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=a;if(m.qa=Yh(m,m.J?m.ia:null,m.W),W.K){Rh(m.h,W);var Ne=W,nt=m.L;nt&&(Ne.I=nt),Ne.B&&(gc(Ne),go(Ne)),m.g=W}else Wh(m);0<d.i.length&&wo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||Tr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Tr(d,7):Ec(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Ms(4)}catch{}}var My=class{constructor(a,h){this.g=a,this.map=h}};function Ih(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ah(a){return a.h?1:a.g?a.g.size:0}function _c(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yc(a,h){a.g?a.g.add(h):a.h=h}function Rh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ih.prototype.cancel=function(){if(this.i=bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return C(a.i)}function Fy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function Uy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Sh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Uy(a),m=Fy(a),N=m.length,D=0;D<N;D++)h.call(void 0,m[D],d&&d[D],a)}var Ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function By(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),N=null;if(0<=m){var D=a[d].substring(0,m);N=a[d].substring(m+1)}else D=a[d];h(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,mo(this,a.j),this.o=a.o,this.g=a.g,_o(this,a.s),this.l=a.l;var h=a.i,d=new $s;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Ch(this,d),this.m=a.m}else a&&(h=String(a).match(Ph))?(this.h=!1,mo(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),_o(this,h[4]),this.l=js(h[5]||"",!0),Ch(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}Er.prototype.toString=function(){var a=[],h=this.j;h&&a.push(qs(h,Nh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qs(h,Nh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(qs(d,d.charAt(0)=="/"?$y:qy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",qs(d,Wy)),a.join("")};function fn(a){return new Er(a)}function mo(a,h,d){a.j=d?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function _o(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ch(a,h,d){h instanceof $s?(a.i=h,Ky(a.i,a.h)):(d||(h=qs(h,Hy)),a.i=new $s(h,a.h))}function Ve(a,h,d){a.i.set(h,d)}function yo(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,jy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nh=/[#\/\?@]/g,qy=/[#\?:]/g,$y=/[#\?]/g,Hy=/[#\?@]/g,Wy=/#/g;function $s(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&By(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=$s.prototype,t.add=function(a,h){$n(this),this.i=null,a=Qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function kh(a,h){$n(a),h=Qr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Dh(a,h){return $n(a),h=Qr(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(d,m){d.forEach(function(N){a.call(h,N,m,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const N=a[m];for(let D=0;D<N.length;D++)d.push(h[m])}return d},t.V=function(a){$n(this);let h=[];if(typeof a=="string")Dh(this,a)&&(h=h.concat(this.g.get(Qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return $n(this),this.i=null,a=Qr(this,a),Dh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Oh(a,h,d){kh(a,h),0<d.length&&(a.i=null,a.g.set(Qr(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const D=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var N=D;W[m]!==""&&(N+="="+encodeURIComponent(String(W[m]))),a.push(N)}}return this.i=a.join("&")};function Qr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ky(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(d,m){var N=m.toLowerCase();m!=N&&(kh(this,m),Oh(this,N,d))},a)),a.j=h}function Gy(a,h){const d=new Us;if(c.Image){const m=new Image;m.onload=_(Hn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=_(Hn,d,"TestLoadImage: error",!1,h,m),m.onabort=_(Hn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(Hn,d,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function zy(a,h){const d=new Us,m=new AbortController,N=setTimeout(()=>{m.abort(),Hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(N),D.ok?Hn(d,"TestPingServer: ok",!0,h):Hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Hn(d,"TestPingServer: error",!1,h)})}function Hn(a,h,d,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(d)}catch{}}function Qy(){this.g=new uo}function Yy(a,h,d){const m=d||"";try{Sh(a,function(N,D){let W=N;u(N)&&(W=tt(N)),h.push(m+D+"="+encodeURIComponent(W))})}catch(N){throw h.push(m+"type="+encodeURIComponent("_badmap")),N}}function vo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(vo,Gr),vo.prototype.g=function(){return new Eo(this.l,this.j)},vo.prototype.i=function(a){return function(){return a}}({});function Eo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Eo,ae),t=Eo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Hs(this):Ws(this),this.readyState==3&&Vh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hs(this))},t.Qa=function(a){this.g&&(this.response=a,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ws(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xh(a){let h="";return se(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function vc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=xh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,h,d))}function Be(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Be,ae);var Jy=/^https?$/i,Xy=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fc.g(),this.v=this.o?uh(this.o):uh(fc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Lh(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)d.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),N=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xy,h,void 0))||m||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of d)this.g.setRequestHeader(D,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Lh(this,D)}};function Lh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Mh(a),To(a)}function Mh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),To(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fh(this):this.bb())},t.bb=function(){Fh(this)};function Fh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)Fe(a.Ea,0,a);else if(pe(a,"readystatechange"),dn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var N=String(a.D).match(Ph)[1]||null;!N&&c.self&&c.self.location&&(N=c.self.location.protocol.slice(0,-1)),m=!Jy.test(N?N.toLowerCase():"")}d=m}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var D=2<dn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Mh(a)}}finally{To(a)}}}}function To(a,h){if(a.g){Uh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Uh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function Bh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zy(a){const h={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(O(a[m]))continue;var d=b(a[m]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[N]||[];h[N]=D,D.push(d)}w(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function jh(a){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ih(a&&a.concurrentRequestLimit),this.Da=new Qy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){Et(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Yh(this,null,this.W),wo(this)};function Ec(a){if(qh(a),a.G==3){var h=a.U++,d=fn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",h),Ve(d,"TYPE","terminate"),Gs(a,d),h=new qn(a,a.j,h),h.L=2,h.v=yo(fn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=Jh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),go(h)}Qh(a)}function Io(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function qh(a){Io(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ao(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function wo(a){if(!wh(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||$t(),me||(le(),me=!0),Nt.add(h,a),a.B=0}}function ev(a,h){return Ah(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Fs(g(a.Ga,a,h),zh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new qn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Hh(this,N,h),d=fn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Gs(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(xh(D)))+"&"+h:this.m&&vc(d,this.m,D)),yc(this.h,N),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",h),Ve(d,"SID","null"),N.T=!0,pc(N,d,null)):pc(N,d,h),this.G=2}}else this.G==3&&(a?$h(this,a):this.i.length==0||wh(this.h)||$h(this))};function $h(a,h){var d;h?d=h.l:d=a.U++;const m=fn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),Gs(a,m),a.m&&a.o&&vc(m,a.m,a.o),d=new qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Hh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yc(a.h,d),pc(d,m,h)}function Gs(a,h){a.H&&se(a.H,function(d,m){Ve(h,m,d)}),a.l&&Sh({},function(d,m){Ve(h,m,d)})}function Hh(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const W=["count="+d];D==-1?0<d?(D=N[0].g,W.push("ofs="+D)):D=0:W.push("ofs="+D);let Ne=!0;for(let nt=0;nt<d;nt++){let Ie=N[nt].g;const lt=N[nt].map;if(Ie-=D,0>Ie)D=Math.max(0,N[nt].g-100),Ne=!1;else try{Yy(lt,W,"req"+Ie+"_")}catch{m&&m(lt)}}if(Ne){m=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function Wh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||$t(),me||(le(),me=!0),Nt.add(h,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Fs(g(a.Fa,a),zh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Fs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Io(this),Kh(this))};function Ic(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Kh(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);Ve(h,"RID","rpc"),Ve(h,"SID",a.K),Ve(h,"AID",a.T),Ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(h,"TO",a.ja),Ve(h,"TYPE","xmlhttp"),Gs(a,h),a.m&&a.o&&vc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=yo(fn(h)),d.m=null,d.P=!0,vh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Io(this),Tc(this),Et(19))};function Ao(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Gh(a,h){var d=null;if(a.g==h){Ao(a),Ic(a),a.g=null;var m=2}else if(_c(a.h,h))d=h.D,Rh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;m=ho(),pe(m,new gh(m,d)),wo(a)}else Wh(a);else if(N=h.s,N==3||N==0&&0<h.X||!(m==1&&ev(a,h)||m==2&&Tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function zh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Tr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const N=!m;m=new Er(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mo(m,"https"),yo(m),N?Gy(m.toString(),d):zy(m.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(h),Qh(a),qh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Qh(a){if(a.G=0,a.ka=[],a.l){const h=bh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Yh(a,h,d){var m=d instanceof Er?fn(d):new Er(d);if(m.g!="")h&&(m.g=h+"."+m.g),_o(m,m.s);else{var N=c.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var D=new Er(null);m&&mo(D,m),h&&(D.g=h),N&&_o(D,N),d&&(D.l=d),m=D}return d=a.D,h=a.ya,d&&h&&Ve(m,d,h),Ve(m,"VER",a.la),Gs(a,m),m}function Jh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new vo({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xh(){}t=Xh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){ae.call(this),this.g=new jh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Yr(this)}S(Dt,ae),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ec(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tt(a),a=d);h.i.push(new My(h.Ya++,a)),h.G==3&&wo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,Dt.aa.N.call(this)};function Zh(a){uc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Zh,uc);function ef(){hc.call(this),this.status=1}S(ef,hc);function Yr(a){this.g=a}S(Yr,Xh),Yr.prototype.ua=function(){pe(this.g,"a")},Yr.prototype.ta=function(a){pe(this.g,new Zh(a))},Yr.prototype.sa=function(a){pe(this.g,new ef)},Yr.prototype.ra=function(){pe(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,n_=function(){return new Ro},t_=function(){return ho()},e_=yr,Al={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fo.NO_ERROR=0,fo.TIMEOUT=8,fo.HTTP_ERROR=6,Ho=fo,mh.COMPLETE="complete",Zm=mh,hh.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",ae.prototype.listen=ae.prototype.K,ai=hh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Xm=Be}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new lu("@firebase/firestore");function Js(){return jr.logLevel}function Z(t,...e){if(jr.logLevel<=ye.DEBUG){const n=e.map(wu);jr.debug(`Firestore (${Ds}): ${t}`,...n)}}function Vn(t,...e){if(jr.logLevel<=ye.ERROR){const n=e.map(wu);jr.error(`Firestore (${Ds}): ${t}`,...n)}}function vs(t,...e){if(jr.logLevel<=ye.WARN){const n=e.map(wu);jr.warn(`Firestore (${Ds}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Ce(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class H0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class W0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class K0{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new r_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ft(e)}}class G0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class z0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new G0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Q0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Q0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=J0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Xe(0,0))}static max(){return new he(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Mi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const X0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Mi{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return X0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Oe.fromString(e))}static fromName(e){return new re(Oe.fromString(e).popFirst(5))}static empty(){return new re(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Oe(e.slice()))}}function Z0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new ur(s,re.empty(),e)}function eR(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(he.min(),re.empty(),-1)}static max(){return new ur(he.max(),re.empty(),-1)}}function tR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==nR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function sR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Au.oe=-1;function Ha(t){return t==null}function da(t){return t===0&&1/t==-1/0}function iR(t){return typeof t=="number"&&Number.isInteger(t)&&!da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rd(this.data.getIterator())}getIteratorFrom(e){return new Rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new ot(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new o_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const oR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=oR.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bu(t){const e=t.mapValue.fields.__previous_value__;return Ru(e)?bu(e):e}function Fi(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo={mapValue:{}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ru(t)?4:lR(t)?9007199254740991:cR(t)?10:11:ue()}function hn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fi(t).isEqual(Fi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),c=hr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return qr(s.bytesValue).isEqual(qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?da(o)===da(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ad(o)!==Ad(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!hn(o[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function Bi(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return bd(t.timestampValue,e.timestampValue);case 4:return bd(Fi(t),Fi(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const c=qr(i),l=qr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=we(c[u],l[u]);if(f!==0)return f}return we(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=we(He(i.latitude),He(o.latitude));return c!==0?c:we(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},g=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,C=we(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Sd(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vo.mapValue&&o===Vo.mapValue)return 0;if(i===Vo.mapValue)return 1;if(o===Vo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=we(l[p],f[p]);if(g!==0)return g;const _=Ts(c[l[p]],u[f[p]]);if(_!==0)return _}return we(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=hr(t),r=hr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function Sd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ts(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Is(t){return Rl(t)}function Rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Rl(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Pd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bl(t){return!!t&&"integerValue"in t}function Su(t){return!!t&&"arrayValue"in t}function Cd(t){return!!t&&"nullValue"in t}function Nd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wo(t){return!!t&&"mapValue"in t}function cR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ti(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(Ti(this.value))}}function a_(t){const e=[];return Hr(t.fields,(n,r)=>{const s=new st([n]);if(Wo(r)){const i=a_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,he.min(),he.min(),he.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,he.min(),he.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,he.min(),he.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function kd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function uR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{}class Ge extends c_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fR(e,n,r):n==="array-contains"?new gR(e,r):n==="in"?new mR(e,r):n==="not-in"?new _R(e,r):n==="array-contains-any"?new yR(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dR(e,r):new pR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ts(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends c_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jt(e,n)}matches(e){return l_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function l_(t){return t.op==="and"}function u_(t){return hR(t)&&l_(t)}function hR(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Sl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(u_(t))return t.filters.map(e=>Sl(e)).join(",");{const e=t.filters.map(n=>Sl(n)).join(",");return`${t.op}(${e})`}}function h_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&h_(o,s.filters[c]),!0):!1}(t,e):void ue()}function f_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(f_).join(" ,")+"}"}(t):"Filter"}class fR extends Ge{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class dR extends Ge{constructor(e,n){super(e,"in",n),this.keys=d_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=d_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class gR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Su(n)&&Bi(n.arrayValue,this.value)}}class mR extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class _R extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bi(this.value.arrayValue,n)}}class yR extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Su(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Od(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vR(t,e,n,r,s,i,o)}function Pu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ue=n}return e.ue}function Cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function Pl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ER(t,e,n,r,s,i,o,c){return new Wr(t,e,n,r,s,i,o,c)}function Wa(t){return new Wr(t)}function Vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p_(t){return t.collectionGroup!==null}function Ii(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ot(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ji(i,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new ji(st.keyField(),r))}return e.ce}function ln(t){const e=de(t);return e.le||(e.le=TR(e,Ii(t))),e.le}function TR(t,e){if(t.limitType==="F")return Od(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ji(s.field,i)});const n=t.endAt?new pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pa(t.startAt.position,t.startAt.inclusive):null;return Od(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cl(t,e){const n=t.filters.concat([e]);return new Wr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nl(t,e,n){return new Wr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ka(t,e){return Cu(ln(t),ln(e))&&t.limitType===e.limitType}function g_(t){return`${Pu(ln(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>f_(s)).join(", ")}]`),Ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Ga(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=kd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ii(r),s)||r.endAt&&!function(o,c,l){const u=kd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ii(r),s))}(t,e)}function IR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function m_(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=wR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ts(l,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return i_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new Ue(re.comparator);function xn(){return AR}const __=new Ue(re.comparator);function ci(...t){let e=__;for(const n of t)e=e.insert(n.key,n);return e}function y_(t){let e=__;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return wi()}function v_(){return wi()}function wi(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const RR=new Ue(re.comparator),bR=new ot(re.comparator);function _e(...t){let e=bR;for(const n of t)e=e.add(n);return e}const SR=new ot(we);function PR(){return SR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:da(e)?"-0":e}}function E_(t){return{integerValue:""+t}}function CR(t,e){return iR(e)?E_(e):Nu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this._=void 0}}function NR(t,e,n){return t instanceof qi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ru(i)&&(i=bu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof $i?I_(t,e):t instanceof Hi?w_(t,e):function(s,i){const o=T_(s,i),c=xd(o)+xd(s.Pe);return bl(o)&&bl(s.Pe)?E_(c):Nu(s.serializer,c)}(t,e)}function kR(t,e,n){return t instanceof $i?I_(t,e):t instanceof Hi?w_(t,e):n}function T_(t,e){return t instanceof ga?function(r){return bl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qi extends za{}class $i extends za{constructor(e){super(),this.elements=e}}function I_(t,e){const n=A_(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Hi extends za{constructor(e){super(),this.elements=e}}function w_(t,e){let n=A_(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class ga extends za{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xd(t){return He(t.integerValue||t.doubleValue)}function A_(t){return Su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.field=e,this.transform=n}}function OR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof $i&&s instanceof $i||r instanceof Hi&&s instanceof Hi?Es(r.elements,s.elements,hn):r instanceof ga&&s instanceof ga?hn(r.Pe,s.Pe):r instanceof qi&&s instanceof qi}(t.transform,e.transform)}class VR{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function R_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S_(t.key,zt.none()):new so(t.key,t.data,zt.none());{const n=t.data,r=Pt.empty();let s=new ot(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(t.key,r,new Vt(s.toArray()),zt.none())}}function xR(t,e,n){t instanceof so?function(s,i,o){const c=s.value.clone(),l=Md(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(s,i,o){if(!Ko(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Md(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(b_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ai(t,e,n,r){return t instanceof so?function(i,o,c,l){if(!Ko(i.precondition,o))return c;const u=i.value.clone(),f=Fd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,o,c,l){if(!Ko(i.precondition,o))return c;const u=Fd(i.fieldTransforms,l,o),f=o.data;return f.setAll(b_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function LR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=T_(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function Ld(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Es(r,s,(i,o)=>OR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Md(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,kR(o,c,n[s]))}return r}function Fd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,NR(i,o,e))}return r}class S_ extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MR extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=R_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>Ld(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>Ld(n,r))}}class ku{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return RR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ku(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ve;function jR(t){switch(t){default:return ue();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function P_(t){if(t===void 0)return Vn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ke.OK:return F.OK;case Ke.CANCELLED:return F.CANCELLED;case Ke.UNKNOWN:return F.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return F.INTERNAL;case Ke.UNAVAILABLE:return F.UNAVAILABLE;case Ke.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ke.NOT_FOUND:return F.NOT_FOUND;case Ke.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ke.ABORTED:return F.ABORTED;case Ke.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ke.DATA_LOSS:return F.DATA_LOSS;default:return ue()}}(ve=Ke||(Ke={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new Lr([4294967295,4294967295],0);function Ud(t){const e=qR().encode(t),n=new Jm;return n.update(e),new Uint8Array(n.digest())}function Bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([s,i],0)]}class Du{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new li(`Invalid padding: ${n}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new li(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Lr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Lr.fromNumber(r)));return s.compare($R)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Du(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ya(he.min(),s,new Ue(we),xn(),_e())}}class io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class C_{constructor(e,n){this.targetId=e,this.me=n}}class N_{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jd{constructor(){this.fe=0,this.ge=$d(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new io(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=$d()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class HR{constructor(e){this.Le=e,this.Be=new Map,this.ke=xn(),this.qe=qd(),this.Qe=new Ue(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Pl(i))if(r===0){const o=new re(i.path);this.Ue(n,o,gt.newNoDocument(o,he.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=qr(r).toUint8Array()}catch(l){if(l instanceof o_)return vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Du(o,s,i)}catch(l){return vs(l instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Pl(c.target)){const l=new re(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.Qe,this.ke,r);return this.ke=xn(),this.qe=qd(),this.Qe=new Ue(we),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qd(){return new Ue(re.comparator)}function $d(){return new Ue(re.comparator)}const WR={asc:"ASCENDING",desc:"DESCENDING"},KR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GR={and:"AND",or:"OR"};class zR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kl(t,e){return t.useProto3Json||Ha(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function k_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QR(t,e){return ma(t,e.toTimestamp())}function un(t){return Ce(!!t),he.fromTimestamp(function(n){const r=hr(n);return new Xe(r.seconds,r.nanos)}(t))}function Ou(t,e){return Dl(t,e).canonicalString()}function Dl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function D_(t){const e=Oe.fromString(t);return Ce(M_(e)),e}function Ol(t,e){return Ou(t.databaseId,e.path)}function $c(t,e){const n=D_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(V_(n))}function O_(t,e){return Ou(t.databaseId,e)}function YR(t){const e=D_(t);return e.length===4?Oe.emptyPath():V_(e)}function Vl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hd(t,e,n){return{name:Ol(t,e),fields:n.value.mapValue.fields}}function JR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?F.UNKNOWN:P_(u.code);return new Y(f,u.message||"")}(o);n=new N_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$c(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):he.min(),c=new Pt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Go(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$c(t,r.document),i=r.readTime?un(r.readTime):he.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Go([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$c(t,r.document),i=r.removedTargetIds||[];n=new Go([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BR(s,i),c=r.targetId;n=new C_(c,o)}}return n}function XR(t,e){let n;if(e instanceof so)n={update:Hd(t,e.key,e.value)};else if(e instanceof S_)n={delete:Ol(t,e.key)};else if(e instanceof _r)n={update:Hd(t,e.key,e.data),updateMask:ab(e.fieldMask)};else{if(!(e instanceof MR))return ue();n={verify:Ol(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ga)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:QR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function ZR(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(he.min())&&(o=un(i)),new VR(o,s.transformResults||[])}(n,e))):[]}function eb(t,e){return{documents:[O_(t,e.path)]}}function tb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=O_(t,s);const i=function(u){if(u.length!==0)return L_(Jt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:rs(g.field),direction:sb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=kl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function nb(t){let e=YR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=x_(p);return g instanceof Jt&&u_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new ji(ss(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ha(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new pa(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new pa(_,g)}(n.endAt)),ER(e,s,o,i,c,"F",l,u)}function rb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ss(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ss(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ss(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>x_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function sb(t){return WR[t]}function ib(t){return KR[t]}function ob(t){return GR[t]}function rs(t){return{fieldPath:t.canonicalString()}}function ss(t){return st.fromServerFormat(t.fieldPath)}function L_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Nd(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(Cd(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nd(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(Cd(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:ib(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>L_(s));return r.length===1?r[0]:{compositeFilter:{op:ob(n.op),filters:r}}}(t):ue()}function ab(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function M_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.ct=e}}function lb(t){const e=nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.un=new hb}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ur.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class hb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ws(0)}static kn(){return new ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ai(r.mutation,s,Vt.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ci();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=xn();const o=wi(),c=function(){return wi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof _r)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ai(f.mutation,u,f.mutation.getFieldMask(),Xe.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new db(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new Ue((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Vt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=v_();f.forEach(g=>{if(!i.has(g)){const _=R_(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(kr());let c=-1,l=i;return o.next(u=>j.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(f=>({batchId:c,changes:y_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=ci();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,l=>{const u=function(p,g){return new Wr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))});let c=ci();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Ai(f.mutation,u,Vt.empty(),Xe.now()),Ga(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:lb(s.bundledQuery),readTime:un(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.overlays=new Ue(re.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=kr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return j.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UR(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.Tr=new ot(et.Er),this.dr=new ot(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new et(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Oe([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Oe([])),r=new et(n,e),s=new et(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ot(et.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(we);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new et(new re(i),0);let c=new ot(we);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),j.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new et(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.Mr=e,this.docs=function(){return new Ue(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xn();const o=n.path,c=new re(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tR(eR(f),r)<=0||(s.has(f.key)||Ga(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Eb(this)}getSize(e){return j.resolve(this.size)}}class Eb extends fb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.persistence=e,this.Nr=new Os(n=>Pu(n),Cu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Vu,this.targetCount=0,this.kr=ws.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Au(0),this.Kr=!1,this.Kr=!0,this.$r=new _b,this.referenceDelegate=e(this),this.Ur=new Tb(this),this.indexManager=new ub,this.remoteDocumentCache=function(s){return new vb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new cb(n),this.Gr=new gb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new yb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new wb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class wb extends rR{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Jr=new Vu,this.Yr=null}static Zr(e){return new xu(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hI()?8:sR(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ab;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Js()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Js()<=ye.DEBUG&&Z("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Js()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):j.resolve())}Yi(e,n){if(Vd(n))return j.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,Nl(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return Vd(n)||s.isEqual(he.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(Js()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ns(n)),this.rs(e,o,n,Z0(s,-1)).next(c=>c))})}ts(e,n){let r=new ot(m_(e));return n.forEach((s,i)=>{Ga(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Js()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ns(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ue(we),this._s=new Os(i=>Pu(i),Cu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Sb(t,e,n,r){return new bb(t,e,n,r)}async function F_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function Pb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,g=p.keys();let _=j.resolve();return g.forEach(S=>{_=_.next(()=>f.getEntry(l,S)).next(C=>{const k=u.docVersions.get(S);Ce(k!==null),C.version.compareTo(k)<0&&(p.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),f.addEntry(C)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function U_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Cb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(at.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(C,k,M){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(g,_,f)&&c.push(n.Ur.updateTargetData(i,_))});let l=xn(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Nb(i,o,e.documentUpdates).next(f=>{l=f.Ps,u=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function Nb(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function kb(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Db(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function xl(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ro(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Wd(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=de(l),g=p._s.get(f);return g!==void 0?j.resolve(p.os.get(g)):p.Ur.getTargetData(u,f)}(r,o,ln(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(c=>(Ob(r,IR(e),c),{documents:c,Ts:i})))}function Ob(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Kd{constructor(){this.activeTargetIds=PR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vb{constructor(){this.so=new Kd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Kd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo=null;function Hc(){return xo===null?xo=function(){return 268435456+Math.round(2147483648*Math.random())}():xo++,"0x"+xo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Fb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Hc(),l=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw vs("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Lb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Hc();return new Promise((o,c)=>{const l=new Xm;l.setWithCredentials(!0),l.listenOnce(Zm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ho.NO_ERROR:const f=l.getResponseJson();Z(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ho.TIMEOUT:Z(ht,`RPC '${e}' ${i} timed out`),c(new Y(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const p=l.getStatus();if(Z(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const S=function(k){const M=k.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(M)>=0?M:F.UNKNOWN}(_.status);c(new Y(S,_.message))}else c(new Y(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(F.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(ht,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(ht,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Hc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=n_(),c=t_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(ht,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,_=!1;const S=new Mb({Io:k=>{_?Z(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(Z(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(ht,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),C=(k,M,O)=>{k.listen(M,q=>{try{O(q)}catch($){setTimeout(()=>{throw $},0)}})};return C(p,ai.EventType.OPEN,()=>{_||(Z(ht,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),C(p,ai.EventType.CLOSE,()=>{_||(_=!0,Z(ht,`RPC '${e}' stream ${s} transport closed`),S.So())}),C(p,ai.EventType.ERROR,k=>{_||(_=!0,vs(ht,`RPC '${e}' stream ${s} transport errored:`,k),S.So(new Y(F.UNAVAILABLE,"The operation could not be completed")))}),C(p,ai.EventType.MESSAGE,k=>{var M;if(!_){const O=k.data[0];Ce(!!O);const q=O,$=q.error||((M=q[0])===null||M===void 0?void 0:M.error);if($){Z(ht,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let se=function(y){const I=Ke[y];if(I!==void 0)return P_(I)}(X),w=$.message;se===void 0&&(se=F.INTERNAL,w="Unknown error status: "+X+" with message "+$.message),_=!0,S.So(new Y(se,w)),p.close()}else Z(ht,`RPC '${e}' stream ${s} received:`,O),S.bo(O)}}),C(c,e_.STAT_EVENT,k=>{k.stat===Al.PROXY?Z(ht,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Al.NOPROXY&&Z(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new zR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new B_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ub extends j_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=JR(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?un(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Pl(l)?{documents:eb(i,l)}:{query:tb(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=k_(i,o.resumeToken);const u=kl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=ma(i,o.snapshotVersion.toTimestamp());const u=kl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=rb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vl(this.serializer),n.removeTarget=e,this.a_(n)}}class Bb extends j_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ZR(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Dl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Dl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=de(l);u.L_.add(4),await oo(u),u.q_.set("Unknown"),u.L_.delete(4),await Xa(u)}(this))})}),this.q_=new qb(r,s)}}async function Xa(t){if(Kr(t))for(const e of t.B_)await e(!0)}async function oo(t){for(const e of t.B_)await e(!1)}function q_(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bu(n)?Uu(n):Vs(n).r_()&&Fu(n,e))}function Mu(t,e){const n=de(t),r=Vs(n);n.N_.delete(e),r.r_()&&$_(n,e),n.N_.size===0&&(r.r_()?r.o_():Kr(n)&&n.q_.set("Unknown"))}function Fu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).A_(e)}function $_(t,e){t.Q_.xe(e),Vs(t).R_(e)}function Uu(t){t.Q_=new HR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.q_.v_()}function Bu(t){return Kr(t)&&!Vs(t).n_()&&t.N_.size>0}function Kr(t){return de(t).L_.size===0}function H_(t){t.Q_=void 0}async function Hb(t){t.q_.set("Online")}async function Wb(t){t.N_.forEach((e,n)=>{Fu(t,e)})}async function Kb(t,e){H_(t),Bu(t)?(t.q_.M_(e),Uu(t)):t.q_.set("Unknown")}async function Gb(t,e,n){if(t.q_.set("Online"),e instanceof N_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _a(t,r)}else if(e instanceof Go?t.Q_.Ke(e):e instanceof C_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await U_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),$_(i,l);const p=new sr(f.target,l,u,f.sequenceNumber);Fu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await _a(t,r)}}async function _a(t,e,n){if(!ro(e))throw e;t.L_.add(1),await oo(t),t.q_.set("Offline"),n||(n=()=>U_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Xa(t)})}function W_(t,e){return e().catch(n=>_a(t,n,e))}async function Za(t){const e=de(t),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zb(e);)try{const s=await kb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Qb(e,s)}catch(s){await _a(e,s)}K_(e)&&G_(e)}function zb(t){return Kr(t)&&t.O_.length<10}function Qb(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function K_(t){return Kr(t)&&!fr(t).n_()&&t.O_.length>0}function G_(t){fr(t).start()}async function Yb(t){fr(t).p_()}async function Jb(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function Xb(t,e,n){const r=t.O_.shift(),s=ku.from(r,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function Zb(t,e){e&&fr(t).V_&&await async function(r,s){if(function(o){return jR(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();fr(r).s_(),await W_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Za(r)}}(t,e),K_(t)&&G_(t)}async function zd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.L_.add(3),await oo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Xa(n)}async function eS(t,e){const n=de(t);e?(n.L_.delete(2),await Xa(n)):e||(n.L_.add(2),await oo(n),n.q_.set("Unknown"))}function Vs(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new Ub(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Hb.bind(null,t),Ro:Wb.bind(null,t),mo:Kb.bind(null,t),d_:Gb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bu(t)?Uu(t):t.q_.set("Unknown")):(await t.K_.stop(),H_(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new Bb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Yb.bind(null,t),mo:Zb.bind(null,t),f_:Jb.bind(null,t),g_:Xb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Za(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ju(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),ro(t))return new Y(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=ci(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.W_=new Ue(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new As(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class nS{constructor(){this.queries=Yd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Yd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Y(F.ABORTED,"Firestore shutting down"))}}function Yd(){return new Os(t=>g_(t),Ka)}async function $u(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new tS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=qu(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Wu(n)}async function Hu(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Wu(n)}function sS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Wu(t){t.Y_.forEach(e=>{e.next()})}var Ll,Jd;(Jd=Ll||(Ll={})).ea="default",Jd.Cache="cache";class Ku{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ll.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class iS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=m_(e),this.Ra=new ds(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=Ga(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;g&&_?g.data.isEqual(_.data)?S!==C&&(r.track({type:3,doc:_}),k=!0):this.ga(g,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),k=!0):g&&!_&&(r.track({type:1,doc:g}),k=!0,(l||u)&&(c=!0)),k&&(_?(o=o.add(_),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,S){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return C(_)-C(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new As(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Q_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new z_(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return As.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aS{constructor(e){this.key=e,this.va=!1}}class cS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Os(c=>g_(c),Ka),this.Ma=new Map,this.xa=new Set,this.Oa=new Ue(re.comparator),this.Na=new Map,this.La=new Vu,this.Ba={},this.ka=new Map,this.qa=ws.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function lS(t,e,n=!0){const r=ty(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Y_(r,e,n,!0),s}async function uS(t,e){const n=ty(t);await Y_(n,e,!0,!1)}async function Y_(t,e,n,r){const s=await Db(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await hS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&q_(t.remoteStore,s),c}async function hS(t,e,n,r,s){t.Ka=(p,g,_)=>async function(C,k,M,O){let q=k.view.ma(M);q.ns&&(q=await Wd(C.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,q)));const $=O&&O.targetChanges.get(k.targetId),X=O&&O.targetMismatches.get(k.targetId)!=null,se=k.view.applyChanges(q,C.isPrimaryClient,$,X);return Zd(C,k.targetId,se.wa),se.snapshot}(t,p,g,_);const i=await Wd(t.localStore,e,!0),o=new iS(e,i.Ts),c=o.ma(i.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Zd(t,n,u.wa);const f=new oS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function fS(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ka(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Mu(r.remoteStore,s.targetId),Ml(r,s.targetId)}).catch(no)):(Ml(r,s.targetId),await xl(r.localStore,s.targetId,!0))}async function dS(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mu(n.remoteStore,r.targetId))}async function pS(t,e,n){const r=TS(t);try{const s=await function(o,c){const l=de(o),u=Xe.now(),f=c.reduce((_,S)=>_.add(S.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=xn(),C=_e();return l.cs.getEntries(_,f).next(k=>{S=k,S.forEach((M,O)=>{O.isValidDocument()||(C=C.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(k=>{p=k;const M=[];for(const O of c){const q=LR(O,p.get(O.key).overlayedDocument);q!=null&&M.push(new _r(O.key,q,a_(q.value.mapValue),zt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,M,c)}).next(k=>{g=k;const M=k.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(_,k.batchId,M)})}).then(()=>({batchId:g.batchId,changes:y_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ue(we)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ao(r,s.changes),await Za(r.remoteStore)}catch(s){const i=qu(s,"Failed to persist write");n.reject(i)}}async function J_(t,e){const n=de(t);try{const r=await Cb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await ao(n,r,e)}catch(r){await no(r)}}function Xd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(u=!0)}),u&&Wu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gS(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ue(re.comparator);o=o.insert(i,gt.newNoDocument(i,he.min()));const c=_e().add(i),l=new Ya(he.min(),new Map,new Ue(we),o,c);await J_(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Gu(r)}else await xl(r.localStore,e,!1).then(()=>Ml(r,e,n)).catch(no)}async function mS(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Pb(n.localStore,e);Z_(n,r,null),X_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,s)}catch(s){await no(s)}}async function _S(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ce(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);Z_(r,e,n),X_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,s)}catch(s){await no(s)}}function X_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Z_(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ey(t,r)})}function ey(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Mu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Gu(t))}function Zd(t,e,n){for(const r of n)r instanceof z_?(t.La.addReference(r.key,e),yS(t,r)):r instanceof Q_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ey(t,r.key)):ue()}function yS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Gu(t))}function Gu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new aS(n)),t.Oa=t.Oa.insert(n,r),q_(t.remoteStore,new sr(ln(Wa(n.path)),r,"TargetPurposeLimboResolution",Au.oe))}}async function ao(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Lu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,g=>j.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>j.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!ro(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.os.get(g),S=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,C)}}}(r.localStore,i))}async function vS(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await F_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Y(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.hs)}}function ES(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function ty(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=J_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ES.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gS.bind(null,e),e.Ca.d_=rS.bind(null,e.eventManager),e.Ca.$a=sS.bind(null,e.eventManager),e}function TS(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_S.bind(null,e),e}class ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Sb(this.persistence,new Rb,e.initialUser,this.serializer)}Ga(e){return new Ib(xu.Zr,this.serializer)}Wa(e){return new Vb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ya.provider={build:()=>new ya};class Fl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vS.bind(null,this.syncEngine),await eS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nS}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new Fb(i)}(e.databaseInfo);return function(i,o,c,l){return new jb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new $b(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Xd(this.syncEngine,n,0),function(){return Gd.D()?new Gd:new xb}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new cS(s,i,o,c,l,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await oo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Fl.provider={build:()=>new Fl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=s_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await F_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ep(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wS(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zd(e.remoteStore,s)),t._onlineComponents=e}async function wS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new ya)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new ya);return t._offlineComponents}async function ny(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await ep(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await ep(t,new Fl))),t._onlineComponents}function AS(t){return ny(t).then(e=>e.syncEngine)}async function va(t){const e=await ny(t),n=e.eventManager;return n.onListen=lS.bind(null,e.syncEngine),n.onUnlisten=fS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dS.bind(null,e.syncEngine),n}function RS(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new zu({next:g=>{f.Za(),o.enqueueAndForget(()=>Hu(i,p));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new Y(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new Y(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Ku(Wa(c.path),f,{includeMetadataChanges:!0,_a:!0});return $u(i,p)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function bS(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new zu({next:g=>{f.Za(),o.enqueueAndForget(()=>Hu(i,p)),g.fromCache&&l.source==="server"?u.reject(new Y(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Ku(c,f,{includeMetadataChanges:!0,_a:!0});return $u(i,p)}(await va(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){if(!n)throw new Y(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SS(t,e,n,r){if(e===!0&&r===!0)throw new Y(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function np(t){if(!re.isDocumentKey(t))throw new Y(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rp(t){if(re.isDocumentKey(t))throw new Y(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new Y(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ry((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class co{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new H0;switch(r.type){case"firstParty":return new z0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tp.get(n);r&&(Z("ComponentProvider","Removing Datastore"),tp.delete(n),r.terminate())}(this),Promise.resolve()}}function PS(t,e,n,r={}){var s;const i=(t=Ct(t,co))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ft.MOCK_USER;else{c=sI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(u)}t._authCredentials=new W0(new r_(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Un(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class cr extends Un{constructor(e,n,r){super(e,n,Wa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new re(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function Gc(t,e,...n){if(t=Qe(t),Qu("collection","path",e),t instanceof co){const r=Oe.fromString(e,...n);return rp(r),new cr(t,null,r)}{if(!(t instanceof yt||t instanceof cr))throw new Y(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return rp(r),new cr(t.firestore,null,r)}}function wC(t,e){if(t=Ct(t,co),Qu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Y(F.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Un(t,null,function(r){return new Wr(Oe.emptyPath(),r)}(e))}function Ul(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=s_.newId()),Qu("doc","path",e),t instanceof co){const r=Oe.fromString(e,...n);return np(r),new yt(t,null,new re(r))}{if(!(t instanceof yt||t instanceof cr))throw new Y(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return np(r),new yt(t.firestore,t instanceof cr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new B_(this,"async_queue_retry"),this.Vu=()=>{const r=Wc();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Wc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ro(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=ju.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function op(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class dr extends co{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ip,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ip(e),this._firestoreClient=void 0,await e}}}function CS(t,e){const n=typeof t=="object"?t:gm(),r=typeof t=="string"?t:"(default)",s=hu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nI("firestore");i&&PS(s,...i)}return s}function tc(t){if(t._terminated)throw new Y(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NS(t),t._firestoreClient}function NS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new aR(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ry(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new IS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(at.fromBase64String(e))}catch(n){throw new Y(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=/^__.*__$/;class DS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class sy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ea(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iy(this.Cu)&&kS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class OS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}Qu(e,n,r,s=!1){return new Xu({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new OS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oy(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);eh("Data must be an object, but it was:",o,r);const c=ay(r,o);let l,u;if(i.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Bl(e,p,n);if(!o.contains(g))throw new Y(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ly(f,g)||f.push(g)}l=new Vt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new DS(new Pt(c),l,u)}class ic extends rc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}class Zu extends rc{_toFieldTransform(e){return new DR(e.path,new qi)}isEqual(e){return e instanceof Zu}}function VS(t,e,n,r){const s=t.Qu(1,e,n);eh("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Hr(r,(l,u)=>{const f=th(e,l,n);u=Qe(u);const p=s.Nu(f);if(u instanceof ic)i.push(f);else{const g=lo(u,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Vt(i);return new sy(o,c,s.fieldTransforms)}function xS(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Bl(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Bl(e,i[g])),l.push(i[g+1]);const u=[],f=Pt.empty();for(let g=c.length-1;g>=0;--g)if(!ly(u,c[g])){const _=c[g];let S=l[g];S=Qe(S);const C=o.Nu(_);if(S instanceof ic)u.push(_);else{const k=lo(S,C);k!=null&&(u.push(_),f.set(_,k))}}const p=new Vt(u);return new sy(f,p,o.fieldTransforms)}function LS(t,e,n,r=!1){return lo(n,t.Qu(r?4:3,e))}function lo(t,e){if(cy(t=Qe(t)))return eh("Unsupported field value:",e,t),ay(t,e);if(t instanceof rc)return function(r,s){if(!iy(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=lo(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:ma(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(s.serializer,i)}}if(r instanceof Yu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rs)return{bytesValue:k_(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ou(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ju)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Nu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ec(r)}`)}(t,e)}function ay(t,e){const n={};return i_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,s)=>{const i=lo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Yu||t instanceof Rs||t instanceof yt||t instanceof rc||t instanceof Ju)}function eh(t,e,n){if(!cy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ec(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Bl(t,e,n){if((e=Qe(e))instanceof nc)return e._internalPath;if(typeof e=="string")return th(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const MS=new RegExp("[~\\*/\\[\\]]");function th(t,e,n){if(e.search(MS)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(F.INVALID_ARGUMENT,c+t+l)}function ly(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FS extends uy{data(){return super.data()}}function oc(t,e){return typeof e=="string"?th(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nh{}class fy extends nh{}function US(t,e,...n){let r=[];e instanceof nh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof rh).length,c=i.filter(l=>l instanceof ac).length;if(o>1||o>0&&c>0)throw new Y(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ac extends fy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ac(e,n,r)}_apply(e){const n=this._parse(e);return dy(e._query,n),new Un(e.firestore,e.converter,Cl(e._query,n))}_parse(e){const n=sc(e.firestore);return function(i,o,c,l,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){cp(p,f);const _=[];for(const S of p)_.push(ap(l,i,S));g={arrayValue:{values:_}}}else g=ap(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||cp(p,f),g=LS(c,o,p,f==="in"||f==="not-in");return Ge.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function BS(t,e,n){const r=e,s=oc("where",t);return ac._create(s,r,n)}class rh extends nh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)dy(o,l),o=Cl(o,l)}(e._query,n),new Un(e.firestore,e.converter,Cl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sh extends fy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ji(i,o)}(e._query,this._field,this._direction);return new Un(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Wr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function AC(t,e="asc"){const n=e,r=oc("orderBy",t);return sh._create(r,n)}function ap(t,e,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new Y(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p_(e)&&n.indexOf("/")!==-1)throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!re.isDocumentKey(r))throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pd(t,new re(r))}if(n instanceof yt)return Pd(t,n._key);throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function cp(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jS{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new Ju(i)}convertGeoPoint(e){return new Yu(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fi(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ce(M_(r));const s=new Ui(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gy extends uy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zo extends gy{data(e={}){return super.data(e)}}class my{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ui(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zo(this._firestore,this._userDataWriter,r.key,r,new ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:qS(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t){t=Ct(t,yt);const e=Ct(t.firestore,dr);return RS(tc(e),t._key).then(n=>_y(e,t,n))}class ih extends jS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function $S(t){t=Ct(t,Un);const e=Ct(t.firestore,dr),n=tc(e),r=new ih(e);return hy(t._query),bS(n,t._query).then(s=>new my(e,r,t,s))}function up(t,e,n){t=Ct(t,yt);const r=Ct(t.firestore,dr),s=py(t.converter,e);return oh(r,[oy(sc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zt.none())])}function RC(t,e,n,...r){t=Ct(t,yt);const s=Ct(t.firestore,dr),i=sc(s);let o;return o=typeof(e=Qe(e))=="string"||e instanceof nc?xS(i,"updateDoc",t._key,e,n,r):VS(i,"updateDoc",t._key,e),oh(s,[o.toMutation(t._key,zt.exists(!0))])}function hp(t,e){const n=Ct(t.firestore,dr),r=Ul(t),s=py(t.converter,e);return oh(n,[oy(sc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function bC(t,...e){var n,r,s;t=Qe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||op(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(op(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof yt)u=Ct(t.firestore,dr),f=Wa(t._key.path),l={next:p=>{e[o]&&e[o](_y(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ct(t,Un);u=Ct(p.firestore,dr),f=p._query;const g=new ih(u);l={next:_=>{e[o]&&e[o](new my(u,g,p,_))},error:e[o+1],complete:e[o+2]},hy(t._query)}return function(g,_,S,C){const k=new zu(C),M=new Ku(_,k,S);return g.asyncQueue.enqueueAndForget(async()=>$u(await va(g),M)),()=>{k.Za(),g.asyncQueue.enqueueAndForget(async()=>Hu(await va(g),M))}}(tc(u),f,c,l)}function oh(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>pS(await AS(r),s,i)),i.promise}(tc(t),e)}function _y(t,e,n){const r=n.docs.get(e._key),s=new ih(t);return new gy(t,s,e._key,r,new ui(n.hasPendingWrites,n.fromCache),e.converter)}function Xs(){return new Zu("serverTimestamp")}(function(e,n=!0){(function(s){Ds=s})(Ns),_s(new Fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new dr(new K0(r.getProvider("auth-internal")),new Y0(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ar(wd,"4.7.3",e),ar(wd,"4.7.3","esm2017")})();var HS="firebase",WS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(HS,WS,"app");const KS={apiKey:"AIzaSyCtotcdqOgNLvch6svfRpsUBfz0yd8WDpE",authDomain:"test-project-10bfb.firebaseapp.com",projectId:"test-project-10bfb",storageBucket:"test-project-10bfb.firebasestorage.app",messagingSenderId:"471056601614",appId:"1:471056601614:web:5ed9cf598141a66b8e225f",measurementId:"G-4ZQ4HNGHER"},yy=pm(KS),Zs=q0(yy),ei=CS(yy),GS=new En,hi=im("notifications",()=>{const t=Pi([]);let e=0;function n(s,i="info",o=3500){const c=++e;t.value.push({id:c,message:s,type:i}),setTimeout(()=>r(c),o)}function r(s){t.value=t.value.filter(i=>i.id!==s)}return{toasts:t,add:n,remove:r}}),zS="modulepreload",QS=function(t){return"/"+t},fp={},es=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=QS(l),l in fp)return;fp[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":zS,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const is=typeof document<"u";function vy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function YS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&vy(t.default)}const Re=Object.assign;function zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const Ri=()=>{},Xt=Array.isArray;function dp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Ey=/#/g,JS=/&/g,XS=/\//g,ZS=/=/g,eP=/\?/g,Ty=/\+/g,tP=/%5B/g,nP=/%5D/g,Iy=/%5E/g,rP=/%60/g,wy=/%7B/g,sP=/%7C/g,Ay=/%7D/g,iP=/%20/g;function ah(t){return t==null?"":encodeURI(""+t).replace(sP,"|").replace(tP,"[").replace(nP,"]")}function oP(t){return ah(t).replace(wy,"{").replace(Ay,"}").replace(Iy,"^")}function jl(t){return ah(t).replace(Ty,"%2B").replace(iP,"+").replace(Ey,"%23").replace(JS,"%26").replace(rP,"`").replace(wy,"{").replace(Ay,"}").replace(Iy,"^")}function aP(t){return jl(t).replace(ZS,"%3D")}function cP(t){return ah(t).replace(Ey,"%23").replace(eP,"%3F")}function lP(t){return cP(t).replace(XS,"%2F")}function Wi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const uP=/\/$/,hP=t=>t.replace(uP,"");function Qc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=gP(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Wi(o)}}function fP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bs(e.matched[r],n.matched[s])&&Ry(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ry(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!pP(t[n],e[n]))return!1;return!0}function pP(t,e){return Xt(t)?gp(t,e):Xt(e)?gp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function gp(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ql=function(t){return t.pop="pop",t.push="push",t}({}),Yc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function mP(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hP(t)}const _P=/^[^#]+#/;function yP(t,e){return t.replace(_P,"#")+e}function vP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const cc=()=>({left:window.scrollX,top:window.scrollY});function EP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mp(t,e){return(history.state?history.state.position-e:-1)+t}const $l=new Map;function TP(t,e){$l.set(t,e)}function IP(t){const e=$l.get(t);return $l.delete(t),e}function wP(t){return typeof t=="string"||t&&typeof t=="object"}function by(t){return typeof t=="string"||typeof t=="symbol"}let je=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Sy=Symbol("");je.MATCHER_NOT_FOUND+"",je.NAVIGATION_GUARD_REDIRECT+"",je.NAVIGATION_ABORTED+"",je.NAVIGATION_CANCELLED+"",je.NAVIGATION_DUPLICATED+"";function Ss(t,e){return Re(new Error,{type:t,[Sy]:!0},e)}function gn(t,e){return t instanceof Error&&Sy in t&&(e==null||!!(t.type&e))}const AP=["params","query","hash"];function RP(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of AP)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function bP(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ty," "),i=s.indexOf("="),o=Wi(i<0?s:s.slice(0,i)),c=i<0?null:Wi(s.slice(i+1));if(o in e){let l=e[o];Xt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function _p(t){let e="";for(let n in t){const r=t[n];if(n=aP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(s=>s&&jl(s)):[r&&jl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function SP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const PP=Symbol(""),yp=Symbol(""),lc=Symbol(""),ch=Symbol(""),Hl=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Ss(je.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):wP(g)?l(Ss(je.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(vy(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Xn(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=YS(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&Xn(g,n,r,o,c,s)()}))}}return i}function CP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>bs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>bs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let NP=()=>location.protocol+"//"+location.host;function Py(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),pp(c,"")}return pp(n,t)+r+s}function kP(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Py(t,location),S=n.value,C=e.value;let k=0;if(g){if(n.value=_,e.value=g,o&&o===S){o=null;return}k=C?g.position-C.position:0}else r(_);s.forEach(M=>{M(n.value,S,{delta:k,type:ql.pop,direction:k?k>0?Yc.forward:Yc.back:Yc.unknown})})};function l(){o=n.value}function u(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Re({},g.state,{scroll:cc()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?cc():null}}function DP(t){const{history:e,location:n}=window,r={value:Py(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:NP()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,u){i(l,Re({},e.state,vp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:cc()});i(f.current,f,!0),i(l,Re({},vp(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function OP(t){t=mP(t);const e=DP(t),n=kP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:yP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Dr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Ye=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Ye||{});const VP={type:Dr.Static,value:""},xP=/[a-zA-Z0-9_]/;function LP(t){if(!t)return[[]];if(t==="/")return[[VP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Ye.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Ye.Static?i.push({type:Dr.Static,value:u}):n===Ye.Param||n===Ye.ParamRegExp||n===Ye.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Dr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ye.ParamRegExp){r=n,n=Ye.EscapeNext;continue}switch(n){case Ye.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Ye.Param):g();break;case Ye.EscapeNext:g(),n=r;break;case Ye.Param:l==="("?n=Ye.ParamRegExp:xP.test(l)?g():(p(),n=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ye.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ye.ParamRegExpEnd:f+=l;break;case Ye.ParamRegExpEnd:p(),n=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ye.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Ep="[^/]+?",MP={sensitive:!1,strict:!1,start:!0,end:!0};var wt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(wt||{});const FP=/[.+*?^${}()[\]/\\]/g;function UP(t,e){const n=Re({},MP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[wt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=wt.Segment+(n.sensitive?wt.BonusCaseSensitive:0);if(g.type===Dr.Static)p||(s+="/"),s+=g.value.replace(FP,"\\$&"),_+=wt.Static;else if(g.type===Dr.Param){const{value:S,repeatable:C,optional:k,regexp:M}=g;i.push({name:S,repeatable:C,optional:k});const O=M||Ep;if(O!==Ep){_+=wt.BonusCustomRegExp;try{`${O}`}catch($){throw new Error(`Invalid custom RegExp for param "${S}" (${O}): `+$.message)}}let q=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(q=k&&u.length<2?`(?:/${q})`:"/"+q),k&&(q+="?"),s+=q,_+=wt.Dynamic,k&&(_+=wt.BonusOptional),C&&(_+=wt.BonusRepeatable),O===".*"&&(_+=wt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=wt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",S=i[g-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===Dr.Static)f+=_.value;else if(_.type===Dr.Param){const{value:S,repeatable:C,optional:k}=_,M=S in u?u[S]:"";if(Xt(M)&&!C)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const O=Xt(M)?M.join("/"):M;if(!O)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=O}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function BP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===wt.Static+wt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===wt.Static+wt.Segment?1:-1:0}function Cy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=BP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Tp(r))return 1;if(Tp(s))return-1}return s.length-r.length}function Tp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jP={strict:!1,end:!0,sensitive:!1};function qP(t,e,n){const r=UP(LP(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $P(t,e){const n=[],r=new Map;e=dp(jP,e);function s(p){return r.get(p)}function i(p,g,_){const S=!_,C=wp(p);C.aliasOf=_&&_.record;const k=dp(e,p),M=[C];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of $)M.push(wp(Re({},C,{components:_?_.record.components:C.components,path:X,aliasOf:_?_.record:C})))}let O,q;for(const $ of M){const{path:X}=$;if(g&&X[0]!=="/"){const se=g.record.path,w=se[se.length-1]==="/"?"":"/";$.path=g.record.path+(X&&w+X)}if(O=qP($,g,k),_?_.alias.push(O):(q=q||O,q!==O&&q.alias.push(O),S&&p.name&&!Ap(O)&&o(p.name)),Ny(O)&&l(O),C.children){const se=C.children;for(let w=0;w<se.length;w++)i(se[w],O,_&&_.children[w])}_=_||O}return q?()=>{o(q)}:Ri}function o(p){if(by(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=KP(p,n);n.splice(g,0,p),p.record.name&&!Ap(p)&&r.set(p.record.name,p)}function u(p,g){let _,S={},C,k;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ss(je.MATCHER_NOT_FOUND,{location:p});k=_.record.name,S=Re(Ip(g.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Ip(p.params,_.keys.map(q=>q.name))),C=_.stringify(S)}else if(p.path!=null)C=p.path,_=n.find(q=>q.re.test(C)),_&&(S=_.parse(C),k=_.record.name);else{if(_=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!_)throw Ss(je.MATCHER_NOT_FOUND,{location:p,currentLocation:g});k=_.record.name,S=Re({},g.params,p.params),C=_.stringify(S)}const M=[];let O=_;for(;O;)M.unshift(O.record),O=O.parent;return{name:k,path:C,params:S,matched:M,meta:WP(M)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Ip(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:HP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ap(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WP(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function KP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Cy(t,e[i])<0?r=i:n=i+1}const s=GP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GP(t){let e=t;for(;e=e.parent;)if(Ny(e)&&Cy(t,e)===0)return e}function Ny({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Rp(t){const e=jt(lc),n=jt(ch),r=Rt(()=>{const l=Rn(t.to);return e.resolve(l)}),s=Rt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(bs.bind(null,f));if(g>-1)return g;const _=bp(l[u-2]);return u>1&&bp(f)===_&&p[p.length-1].path!==_?p.findIndex(bs.bind(null,l[u-2])):g}),i=Rt(()=>s.value>-1&&XP(n.params,r.value.params)),o=Rt(()=>s.value>-1&&s.value===n.matched.length-1&&Ry(n.params,r.value.params));function c(l={}){if(JP(l)){const u=e[Rn(t.replace)?"replace":"push"](Rn(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function zP(t){return t.length===1?t[0]:t}const QP=yg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rp,setup(t,{slots:e}){const n=Gi(Rp(t)),{options:r}=jt(lc),s=Rt(()=>({[Sp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zP(e.default(n));return t.custom?i:cu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YP=QP;function JP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sp=(t,e,n)=>t??e??n,ZP=yg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(Hl),s=Rt(()=>t.route||r.value),i=jt(yp,0),o=Rt(()=>{let u=Rn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Rt(()=>s.value.matched[o.value]);Mo(yp,Rt(()=>o.value+1)),Mo(PP,c),Mo(Hl,s);const l=Pi();return gi(()=>[l.value,c.value,t.name],([u,f,p],[g,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!bs(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Pp(n.default,{Component:g,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,k=cu(g,Re({},S,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Pp(n.default,{Component:k,route:u})||k}}});function Pp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eC=ZP;function tC(t){const e=$P(t.routes,t),n=t.parseQuery||bP,r=t.stringifyQuery||_p,s=t.history,i=ti(),o=ti(),c=ti(),l=Ov(Gn);let u=Gn;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zc.bind(null,x=>""+x),p=zc.bind(null,lP),g=zc.bind(null,Wi);function _(x,J){let z,ee;return by(x)?(z=e.getRecordMatcher(x),ee=J):ee=x,e.addRoute(ee,z)}function S(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function C(){return e.getRoutes().map(x=>x.record)}function k(x){return!!e.getRecordMatcher(x)}function M(x,J){if(J=Re({},J||l.value),typeof x=="string"){const P=Qc(n,x,J.path),V=e.resolve({path:P.path},J),U=s.createHref(P.fullPath);return Re(P,V,{params:g(V.params),hash:Wi(P.hash),redirectedFrom:void 0,href:U})}let z;if(x.path!=null)z=Re({},x,{path:Qc(n,x.path,J.path).path});else{const P=Re({},x.params);for(const V in P)P[V]==null&&delete P[V];z=Re({},x,{params:p(P)}),J.params=p(J.params)}const ee=e.resolve(z,J),ge=x.hash||"";ee.params=f(g(ee.params));const T=fP(r,Re({},x,{hash:oP(ge),path:ee.path})),R=s.createHref(T);return Re({fullPath:T,hash:ge,query:r===_p?SP(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:R})}function O(x){return typeof x=="string"?Qc(n,x,l.value.path):Re({},x)}function q(x,J){if(u!==x)return Ss(je.NAVIGATION_CANCELLED,{from:J,to:x})}function $(x){return w(x)}function X(x){return $(Re(O(x),{replace:!0}))}function se(x,J){const z=x.matched[x.matched.length-1];if(z&&z.redirect){const{redirect:ee}=z;let ge=typeof ee=="function"?ee(x,J):ee;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=O(ge):{path:ge},ge.params={}),Re({query:x.query,hash:x.hash,params:ge.path!=null?{}:x.params},ge)}}function w(x,J){const z=u=M(x),ee=l.value,ge=x.state,T=x.force,R=x.replace===!0,P=se(z,ee);if(P)return w(Re(O(P),{state:typeof P=="object"?Re({},ge,P.state):ge,force:T,replace:R}),J||z);const V=z;V.redirectedFrom=J;let U;return!T&&dP(r,ee,z)&&(U=Ss(je.NAVIGATION_DUPLICATED,{to:V,from:ee}),Mt(ee,ee,!0,!1)),(U?Promise.resolve(U):I(V,ee)).catch(L=>gn(L)?gn(L,je.NAVIGATION_GUARD_REDIRECT)?L:$t(L):me(L,V,ee)).then(L=>{if(L){if(gn(L,je.NAVIGATION_GUARD_REDIRECT))return w(Re({replace:R},O(L.to),{state:typeof L.to=="object"?Re({},ge,L.to.state):ge,force:T}),J||V)}else L=A(V,ee,!0,R,ge);return b(V,ee,L),L})}function v(x,J){const z=q(x,J);return z?Promise.reject(z):Promise.resolve()}function y(x){const J=Bn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function I(x,J){let z;const[ee,ge,T]=CP(x,J);z=Jc(ee.reverse(),"beforeRouteLeave",x,J);for(const P of ee)P.leaveGuards.forEach(V=>{z.push(Xn(V,x,J))});const R=v.bind(null,x,J);return z.push(R),St(z).then(()=>{z=[];for(const P of i.list())z.push(Xn(P,x,J));return z.push(R),St(z)}).then(()=>{z=Jc(ge,"beforeRouteUpdate",x,J);for(const P of ge)P.updateGuards.forEach(V=>{z.push(Xn(V,x,J))});return z.push(R),St(z)}).then(()=>{z=[];for(const P of T)if(P.beforeEnter)if(Xt(P.beforeEnter))for(const V of P.beforeEnter)z.push(Xn(V,x,J));else z.push(Xn(P.beforeEnter,x,J));return z.push(R),St(z)}).then(()=>(x.matched.forEach(P=>P.enterCallbacks={}),z=Jc(T,"beforeRouteEnter",x,J,y),z.push(R),St(z))).then(()=>{z=[];for(const P of o.list())z.push(Xn(P,x,J));return z.push(R),St(z)}).catch(P=>gn(P,je.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(x,J,z){c.list().forEach(ee=>y(()=>ee(x,J,z)))}function A(x,J,z,ee,ge){const T=q(x,J);if(T)return T;const R=J===Gn,P=is?history.state:{};z&&(ee||R?s.replace(x.fullPath,Re({scroll:R&&P&&P.scroll},ge)):s.push(x.fullPath,ge)),l.value=x,Mt(x,J,z,R),$t()}let E;function Te(){E||(E=s.listen((x,J,z)=>{if(!kt.listening)return;const ee=M(x),ge=se(ee,kt.currentRoute.value);if(ge){w(Re(ge,{replace:!0,force:!0}),ee).catch(Ri);return}u=ee;const T=l.value;is&&TP(mp(T.fullPath,z.delta),cc()),I(ee,T).catch(R=>gn(R,je.NAVIGATION_ABORTED|je.NAVIGATION_CANCELLED)?R:gn(R,je.NAVIGATION_GUARD_REDIRECT)?(w(Re(O(R.to),{force:!0}),ee).then(P=>{gn(P,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===ql.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(z.delta&&s.go(-z.delta,!1),me(R,ee,T))).then(R=>{R=R||A(ee,T,!1),R&&(z.delta&&!gn(R,je.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===ql.pop&&gn(R,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,T,R)}).catch(Ri)}))}let $e=ti(),Pe=ti(),le;function me(x,J,z){$t(x);const ee=Pe.list();return ee.length?ee.forEach(ge=>ge(x,J,z)):console.error(x),Promise.reject(x)}function Nt(){return le&&l.value!==Gn?Promise.resolve():new Promise((x,J)=>{$e.add([x,J])})}function $t(x){return le||(le=!x,Te(),$e.list().forEach(([J,z])=>x?z(x):J()),$e.reset()),x}function Mt(x,J,z,ee){const{scrollBehavior:ge}=t;if(!is||!ge)return Promise.resolve();const T=!z&&IP(mp(x.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return Da().then(()=>ge(x,J,T)).then(R=>R&&EP(R)).catch(R=>me(R,x,J))}const Le=x=>s.go(x);let Me;const Bn=new Set,kt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:C,resolve:M,options:t,push:$,replace:X,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Pe.add,isReady:Nt,install(x){x.component("RouterLink",YP),x.component("RouterView",eC),x.config.globalProperties.$router=kt,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Rn(l)}),is&&!Me&&l.value===Gn&&(Me=!0,$(s.location).catch(ee=>{}));const J={};for(const ee in Gn)Object.defineProperty(J,ee,{get:()=>l.value[ee],enumerable:!0});x.provide(lc,kt),x.provide(ch,eg(J)),x.provide(Hl,l);const z=x.unmount;Bn.add(x),x.unmount=function(){Bn.delete(x),Bn.size<1&&(u=Gn,E&&E(),E=null,l.value=Gn,Me=!1,le=!1),z()}}};function St(x){return x.reduce((J,z)=>J.then(()=>y(z)),Promise.resolve())}return kt}function SC(){return jt(lc)}function PC(t){return jt(ch)}const nC=[{path:"/",component:()=>es(()=>import("./LandingView-QeCzkyso.js"),__vite__mapDeps([0,1,2]))},{path:"/auth",component:()=>es(()=>import("./AuthView-DjJqNVZy.js"),__vite__mapDeps([3,4])),meta:{requiresGuest:!0}},{path:"/chat",component:()=>es(()=>import("./ChatView-DlKuFmQy.js"),__vite__mapDeps([5,1,2,6,7])),meta:{requiresAuth:!0}},{path:"/chat/:id",component:()=>es(()=>import("./ChatView-DlKuFmQy.js"),__vite__mapDeps([5,1,2,6,7])),meta:{requiresAuth:!0}},{path:"/dashboard",component:()=>es(()=>import("./DashboardView-CjmxkZv9.js"),__vite__mapDeps([8,1,2,6]))},{path:"/history",component:()=>es(()=>import("./HistoryView-qTY1HvOI.js"),__vite__mapDeps([9,1,2])),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}],Zn=tC({history:OP(),routes:nC,scrollBehavior:()=>({top:0})});Zn.beforeEach(async t=>{const e=ky();if(await e.initAuth(),t.meta.requiresAuth&&!e.user)return{path:"/auth",query:{redirect:t.fullPath}};if(t.meta.requiresGuest&&e.user)return"/chat"});const ky=im("auth",()=>{const t=Pi(null),e=Pi(!0);let n=null;const r=Rt(()=>!!t.value),s=Rt(()=>{var _,S,C;return((_=t.value)==null?void 0:_.displayName)||((C=(S=t.value)==null?void 0:S.email)==null?void 0:C.split("@")[0])||"User"}),i=Rt(()=>{var _;return((_=t.value)==null?void 0:_.photoURL)??null});function o(){return n||(n=new Promise(_=>{NA(Zs,async S=>{S?(t.value=S,await c(S)):t.value=null,e.value=!1,_(S)})}),n)}async function c(_){const S=Ul(ei,"users",_.uid);(await lp(S)).exists()||await up(S,{uid:_.uid,displayName:_.displayName||_.email.split("@")[0],email:_.email,photoURL:_.photoURL??null,createdAt:Xs()}),l(_).catch(k=>console.error("[BotSetup]",k))}async function l(_){var X;const S=Ul(ei,"users","binarysync-bot");(await lp(S)).exists()||await up(S,{uid:"binarysync-bot",displayName:"BinarySync Bot",email:"bot@binarysync.app",photoURL:null,isBot:!0,createdAt:Xs()});const k=[_.uid,"binarysync-bot"].sort(),M=k.join("_"),O=US(Gc(ei,"conversations"),BS("participantsSorted","==",M));if(!(await $S(O)).empty)return;const $=await hp(Gc(ei,"conversations"),{participants:k,participantsSorted:M,participantDetails:{[_.uid]:{uid:_.uid,displayName:_.displayName||((X=_.email)==null?void 0:X.split("@")[0])||"User",photoURL:_.photoURL??null},"binarysync-bot":{uid:"binarysync-bot",displayName:"BinarySync Bot",photoURL:null,isBot:!0}},lastMessage:"Hi! I'm BinarySync Bot. Send me a message!",lastMessageBinary:"01001000 01101001",isBot:!0,updatedAt:Xs(),createdAt:Xs()});await hp(Gc(ei,"conversations",$.id,"messages"),{senderId:"binarysync-bot",senderName:"BinarySync Bot",binary:"01001000 01101001 00100001 00100000 01001001 00100111 01101101 00100000 01000010 01101001 01101110 01100001 01110010 01111001 01010011 01111001 01101110 01100011 00100000 01000010 01101111 01110100 00101110",text:"Hi! I'm BinarySync Bot. Send me a binary string or plain text — I'll always reply!",translatedText:null,language:"en",timestamp:Xs()})}async function u(){const _=hi();try{const S=await JA(Zs,GS);t.value=S.user,await c(S.user),_.add("Signed in successfully!","success");const C=Zn.currentRoute.value.query.redirect;Zn.push(typeof C=="string"?C:"/chat")}catch(S){S.code!=="auth/popup-closed-by-user"&&_.add(S.message,"error")}}async function f(_,S){const C=hi();try{const k=await RA(Zs,_,S);t.value=k.user,C.add("Signed in successfully!","success");const M=Zn.currentRoute.value.query.redirect;Zn.push(typeof M=="string"?M:"/chat")}catch(k){const M=k.code==="auth/invalid-credential"?"Invalid email or password.":k.message;throw C.add(M,"error"),k}}async function p(_,S,C){const k=hi();try{const M=await AA(Zs,_,S);await SA(M.user,{displayName:C}),t.value=M.user,await c(M.user),k.add("Account created! Welcome to BinarySync.","success"),Zn.push("/chat")}catch(M){const O=M.code==="auth/email-already-in-use"?"That email is already registered.":M.message;throw k.add(O,"error"),M}}async function g(){const _=hi();await kA(Zs),t.value=null,_.add("Signed out.","info"),Zn.push("/")}return{user:t,loading:e,isAuthenticated:r,displayName:s,photoURL:i,initAuth:o,signInWithGoogle:u,signInWithEmail:f,registerWithEmail:p,logout:g,ensureBotSetup:l}}),rC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sC={class:"fixed bottom-6 right-6 flex flex-col gap-2 z-[100] pointer-events-none"},iC={class:"material-symbols-outlined text-[20px] flex-shrink-0",style:{"font-variation-settings":'"FILL" 1'}},oC={class:"font-body-sm font-medium flex-1"},aC=["onClick"],cC={__name:"NotificationToast",setup(t){const e=hi();function n(s){return{success:"bg-white border-green-200 text-green-900",error:"bg-white border-error-container text-error",warning:"bg-white border-tertiary-fixed text-tertiary",info:"bg-white border-secondary-fixed text-secondary"}[s]??"bg-white border-outline-variant text-on-surface"}function r(s){return{success:"check_circle",error:"error",warning:"warning",info:"info"}[s]??"info"}return(s,i)=>(xr(),na(Zv,{to:"body"},[Cr("div",sC,[Je(CT,{name:"toast"},{default:cg(()=>[(xr(!0),ll(pt,null,gE(Rn(e).toasts,o=>(xr(),ll("div",{key:o.id,class:Pa(["pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-xl shadow-xl min-w-[260px] max-w-sm border",n(o.type)])},[Cr("span",iC,Xc(r(o.type)),1),Cr("p",oC,Xc(o.message),1),Cr("button",{onClick:c=>Rn(e).remove(o.id),class:"flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"},[...i[0]||(i[0]=[Cr("span",{class:"material-symbols-outlined text-[18px]"},"close",-1)])],8,aC)],2))),128))]),_:1})])]))}},lC=rC(cC,[["__scopeId","data-v-6f39bbc9"]]),uC={__name:"App",setup(t){return ky().initAuth(),(n,r)=>{const s=fE("RouterView");return xr(),ll(pt,null,[Je(lC),Je(s)],64)}}},lh=BT(uC);lh.use($T());lh.use(Zn);lh.mount("#app");export{AC as A,BS as B,Gc as C,bC as D,hi as E,pt as F,hp as G,ei as H,Xs as I,RC as J,Ul as K,$S as L,lp as M,Tg as N,Ag as O,SC as P,Gl as Q,Zv as R,Da as S,pC as T,_C as U,wC as V,wg as W,fC as X,rC as _,Cr as a,WE as b,na as c,Je as d,ll as e,gE as f,hC as g,mC as h,KE as i,dC as j,yC as k,Pi as l,PC as m,Pa as n,xr as o,gi as p,Rn as q,fE as r,Rt as s,Xc as t,ky as u,gC as v,cg as w,vC as x,im as y,US as z};
