"use client"
import{useEffect as w,useState as n}from"react";function o(){return typeof window>"u"?null:window.matchMedia("(min-width: 1024px)").matches?"desktop":window.matchMedia("(min-width: 640px)").matches?"tablet":"mobile"}function d(){return typeof window>"u"?null:{width:window.innerWidth,height:window.innerHeight}}function l(){let[t,r]=n(o()),[e,u]=n(d());return w(()=>{let i=()=>{r(o()),u(d())};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),{device:t,width:e==null?void 0:e.width,height:e==null?void 0:e.height,isMobile:t==="mobile",isTablet:t==="tablet",isDesktop:t==="desktop"}}export{l as a};