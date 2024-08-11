"use client"
import{useEffect as c,useState as i}from"react";function v(r){let[t,n]=i(),o=([e])=>{n(e)};return c(()=>{let e=r==null?void 0:r.current;if(!e)return;let s=new ResizeObserver(o);return s.observe(e),()=>s.disconnect()},[r]),t}export{v as a};
