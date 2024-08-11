"use client"
import{a as o}from"./chunk-7TBGFJM2.mjs";import{useCallback as i,useEffect as f,useState as g}from"react";function p(e){let[c,l]=g(1),r=i(()=>{if(!e.current)return;let{scrollTop:u,scrollHeight:s,clientHeight:t}=e.current;l(s===t?1:Math.min(u/(s-t),1))},[]),n=o(e);return f(r,[n]),{scrollProgress:c,updateScrollProgress:r}}export{p as a};
