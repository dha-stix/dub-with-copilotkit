"use client"
import{k as y}from"./chunk-PTW2A7PR.mjs";import{createContext as S,useCallback as h,useContext as K,useEffect as d,useId as L,useRef as f,useState as k}from"react";import{jsx as m}from"react/jsx-runtime";var u=S({listeners:[],setListeners:()=>{}});function x({children:c}){let[t,i]=k([]),r=h(e=>{let s=e.target,a=document.getElementById("modal-backdrop");if(e.metaKey||e.ctrlKey||s.tagName==="INPUT"||s.tagName==="TEXTAREA"||a)return;let o=t.filter(n=>n.enabled!==!1&&(Array.isArray(n.key)?n.key.includes(e.key):n.key===e.key));if(!o.length)return;let l=y(o,(n,b)=>(b.priority??0)-(n.priority??0)).slice(-1)[0];e.preventDefault(),l.callback(e)},[t]);return d(()=>(document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)),[r]),m(u.Provider,{value:{listeners:t,setListeners:i},children:c})}function C(c,t,i={}){let r=L(),{setListeners:e}=K(u),s=f(t);d(()=>{s.current=t},[t]),d(()=>(e(a=>[...a.filter(o=>o.id!==r),{id:r,key:c,callback:s.current,...i}]),()=>e(a=>a.filter(o=>o.id!==r))),[JSON.stringify(c),i.enabled,i.priority])}export{u as a,x as b,C as c};
