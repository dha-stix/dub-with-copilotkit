"use client"
import{b as P}from"./chunk-JMONP47A.mjs";import{a as S}from"./chunk-KM7HFRFI.mjs";import{a as h}from"./chunk-YIANSNHQ.mjs";import{i as c,j as w}from"./chunk-DGDXBKHW.mjs";import{flexRender as T,getCoreRowModel as A,useReactTable as B}from"@tanstack/react-table";import{AnimatePresence as I,motion as O}from"framer-motion";import{useEffect as N,useState as j}from"react";import{jsx as i,jsxs as a}from"react/jsx-runtime";var V=t=>c(["py-2.5 text-left text-sm leading-6 whitespace-nowrap border-gray-200 px-4 relative","border-l border-b",t==="menu"&&"bg-white border-l-transparent py-0 px-1"]);function ne(t){let{data:n,rowCount:s,columns:g,defaultColumn:x,columnPinning:b,pagination:y,onPaginationChange:f}=t,[l,p]=j(t.columnVisibility??{});N(()=>{t.columnVisibility&&!w(t.columnVisibility,l)&&p(t.columnVisibility??{})},[t.columnVisibility]),N(()=>{var m;(m=t.onColumnVisibilityChange)==null||m.call(t,l)},[l]);let v=B({data:n,rowCount:s,columns:g,defaultColumn:{minSize:120,size:0,maxSize:300,...x},getCoreRowModel:A(),onPaginationChange:f,onColumnVisibilityChange:m=>p(m),state:{pagination:y,columnVisibility:l,columnPinning:{left:[],right:[],...b}},manualPagination:!0,autoResetPageIndex:!1,manualSorting:!0});return{...t,columnVisibility:l,table:v}}function oe({columns:t,data:n,loading:s,error:g,emptyState:x,cellRight:b,sortBy:y,sortOrder:f,onSortChange:l,sortableColumns:p=[],className:v,thClassName:m,tdClassName:k,table:o,pagination:r,resourceName:u,rowCount:R,children:M}){return a("div",{className:"relative border border-gray-200 bg-white sm:rounded-xl",children:[!g&&!!(n!=null&&n.length)||s?a("div",{className:"relative min-h-[400px] overflow-x-auto rounded-[inherit]",children:[a("table",{className:c(["group/table w-full border-separate border-spacing-0 transition-[border-spacing,margin-top]","[&_tr>*:first-child]:border-l-transparent","[&_tr>*:last-child]:border-r-transparent"],v),children:[i("thead",{children:o.getHeaderGroups().map(d=>i("tr",{children:d.headers.map(e=>{let C=p.includes(e.column.id),W=C?"button":"div";return i("th",{className:c(V(e.id),"select-none font-medium",D(e.column,!o.getRowModel().rows.length),m),style:{minWidth:e.column.columnDef.minSize,maxWidth:e.column.columnDef.maxSize,width:e.column.columnDef.size||"auto",...z(e.column)},children:i("div",{className:"flex items-center justify-between gap-6 !pr-0",children:a(W,{className:"flex items-center gap-2",...C&&{type:"button",disabled:!C,"aria-label":"Sort by column",onClick:()=>l==null?void 0:l({sortBy:e.column.id,sortOrder:y!==e.column.id||f==="asc"?"desc":"asc"})},children:[i("span",{children:e.isPlaceholder?null:T(e.column.columnDef.header,e.getContext())}),C&&i(S,{order:y===e.column.id?f||"desc":null})]})})},e.id)})},d.id))}),i("tbody",{children:o.getRowModel().rows.map(d=>i("tr",{children:d.getVisibleCells().map(e=>i("td",{className:c(V(e.column.id),"group text-gray-600",D(e.column,d.index===o.getRowModel().rows.length-1),k),style:{minWidth:e.column.columnDef.minSize,maxWidth:e.column.columnDef.maxSize,width:e.column.columnDef.size||"auto",...z(e.column)},children:a("div",{className:"flex w-full items-center justify-between overflow-hidden truncate",children:[i("div",{className:"min-w-0 shrink grow",children:T(e.column.columnDef.cell,e.getContext())}),b==null?void 0:b(e)]})},e.id))},d.id))})]}),M]}):i("div",{className:"flex h-96 w-full items-center justify-center text-sm text-gray-500",children:g||x||`No ${(u==null?void 0:u(!0))||"items"} found.`}),r&&!g&&!!(n!=null&&n.length)&&!!R&&a("div",{className:"sticky bottom-0 mx-auto -mt-px flex w-full max-w-full items-center justify-between rounded-b-[inherit] border-t border-gray-200 bg-white px-4 py-3.5 text-sm leading-6 text-gray-600",children:[a("div",{children:[i("span",{className:"hidden sm:inline-block",children:"Viewing"})," ",a("span",{className:"font-medium",children:[r.pageIndex*r.pageSize+1,"-",Math.min(r.pageIndex*r.pageSize+r.pageSize,o.getRowCount())]})," ","of"," ",i("span",{className:"font-medium",children:o.getRowCount().toLocaleString()})," ",(u==null?void 0:u(o.getRowCount()!==1))||"items"]}),a("div",{className:"flex items-center gap-2",children:[i(P,{variant:"secondary",text:"Previous",className:"h-7 px-2",onClick:()=>o.previousPage(),disabled:!o.getCanPreviousPage()}),i(P,{variant:"secondary",text:"Next",className:"h-7 px-2",onClick:()=>o.nextPage(),disabled:!o.getCanNextPage()})]})]}),i(I,{children:s&&i(O.div,{initial:{opacity:0},animate:{opacity:1},className:"absolute inset-0 flex items-center justify-center rounded-xl bg-white/50",children:i(h,{})})})]})}var D=(t,n)=>{let s=t.getIsPinned();return c(s&&!n&&"animate-table-pinned-shadow [animation-timeline:scroll(inline)]")},z=t=>{let n=t.getIsPinned();return{left:n==="left"?`${t.getStart("left")}px`:void 0,right:n==="right"?`${t.getAfter("right")}px`:void 0,position:n?"sticky":"relative"}};export{ne as a,oe as b};
