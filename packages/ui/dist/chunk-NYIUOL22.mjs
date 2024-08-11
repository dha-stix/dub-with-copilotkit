"use client"
import{useEffect as a,useState as p}from"react";function m({pageSize:o,page:t,onPageChange:e}){let[i,n]=p({pageIndex:t,pageSize:o});return a(()=>{n(r=>({...r,pageIndex:t}))},[t]),a(()=>{e==null||e(i.pageIndex)},[i]),{pagination:i,setPagination:n}}export{m as a};
