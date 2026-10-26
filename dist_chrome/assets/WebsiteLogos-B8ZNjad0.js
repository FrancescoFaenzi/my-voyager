import{a as m,r as u,u as f,j as h,B as k}from"./button-20xJTOu8.js";import{f as y}from"./scheme-B5yDGcZu.js";import{h as w,j as M,k as x,m as b,P as S}from"./platformLogos-C_rj4t9Y.js";import{r as _}from"./index-B8l5mBgX.js";/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],V=m("check",v);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],U=m("chevron-down",I);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],q=m("globe",T);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],j=m("moon",L);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],F=m("pin",E);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],N=m("sun",P);function C(){return w()?"unsupported":M()?"edge":x()?"firefox":b()?"chrome":"unsupported"}function g(){const e=y.action;return e?.getUserSettings?e:globalThis.chrome?.action}async function D(){const e=g();if(!e?.getUserSettings)return null;try{const o=await e.getUserSettings();return typeof o?.isOnToolbar=="boolean"?o.isOnToolbar:null}catch{return null}}const $=1e3;function O(e,o=$){let n=!1,t,a;const i=r=>{n||r===a||(a=r,e(r))},l=g()?.onUserSettingsChanged,d=r=>{typeof r?.isOnToolbar=="boolean"&&i(r.isOnToolbar)};let c=!1;try{l?.addListener(d),c=!!l}catch{c=!1}const p=async()=>{const r=await D();n||(i(r),r===!1&&!c&&(t=setTimeout(()=>void p(),o)))};return p(),()=>{if(n=!0,t!==void 0&&clearTimeout(t),c)try{l?.removeListener(d)}catch{}}}function H(){const e=u.useMemo(()=>C(),[]),[o,n]=u.useState({ready:!1,pinned:null});return u.useEffect(()=>{if(e==="unsupported"){n({ready:!0,pinned:null});return}return O(t=>n({ready:!0,pinned:t}))},[e]),{browser:e,ready:o.ready,pinned:o.pinned}}function Q(e){const o=`color-mix(in srgb, ${e} 14%, transparent)`,n=_(e);return{"--primary":e,"--color-primary":e,"--primary-foreground":n,"--color-primary-foreground":n,"--ring":e,"--color-ring":e,"--accent":o,"--color-accent":o}}function A(){const[e,o]=u.useState(()=>{const t=localStorage.getItem("darkMode");return t!==null?t==="true":window.matchMedia("(prefers-color-scheme: dark)").matches});u.useEffect(()=>{document.documentElement.classList.toggle("dark",e),localStorage.setItem("darkMode",String(e))},[e]),u.useEffect(()=>{const t=window.matchMedia("(prefers-color-scheme: dark)"),a=i=>{localStorage.getItem("darkMode")===null&&o(i.matches)};return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[]);const n=u.useCallback(t=>{const a=!e,i=()=>{document.documentElement.classList.toggle("dark",a),localStorage.setItem("darkMode",String(a)),o(a)},l=document.startViewTransition;if(!t||!l||window.matchMedia("(prefers-reduced-motion: reduce)").matches){i();return}const d=t.clientX,c=t.clientY,p=Math.hypot(Math.max(d,window.innerWidth-d),Math.max(c,window.innerHeight-c));l.call(document,i).ready.then(()=>{document.documentElement.animate({clipPath:[`circle(0px at ${d}px ${c}px)`,`circle(${p}px at ${d}px ${c}px)`]},{duration:500,easing:"ease-in-out",pseudoElement:"::view-transition-new(root)"})})},[e]);return{isDark:e,toggleDarkMode:n}}const K=()=>{const{isDark:e,toggleDarkMode:o}=A(),{t:n}=f(),t=n(e?"pm_theme_light":"pm_theme_dark");return h.jsx(k,{variant:"ghost",size:"icon",onClick:a=>o(a),title:t,"aria-label":t,className:"h-9 w-9",children:e?h.jsx(N,{className:"h-4 w-4"}):h.jsx(j,{className:"h-4 w-4"})})};function s(e){const{viewBox:o,paths:n}=S[e];return()=>h.jsx("svg",{viewBox:o,width:"100%",height:"100%",fill:"currentColor",children:n.map(a=>h.jsx("path",{d:a},a.slice(0,24)))})}const W=s("chatgpt"),X=s("claude"),Y=s("deepseek"),J=s("qwen"),Z=s("kimi"),ee=s("aistudio"),te=s("gemini"),oe=s("notebooklm"),ne=s("midjourney");s("perplexity");export{U as C,K as D,q as G,te as I,F as P,V as a,H as b,Q as c,ee as d,X as e,W as f,Y as g,Z as h,J as i,oe as j,ne as k,A as u};
