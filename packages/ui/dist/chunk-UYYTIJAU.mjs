"use client"
import{e as N}from"./chunk-VVRGE42S.mjs";import{a as x}from"./chunk-ZVRXVWBO.mjs";import{a as v}from"./chunk-3GNN3TAS.mjs";import{a as b}from"./chunk-RDTDBK2K.mjs";import{a as y}from"./chunk-HTNORLOJ.mjs";import{a as f}from"./chunk-RACAQ3EU.mjs";import{a as h}from"./chunk-ALEYOCBW.mjs";import{b as o,i as n,k as d,m as g,n as p}from"./chunk-DGDXBKHW.mjs";import C from"next/image";import s from"next/link";import{useParams as T}from"next/navigation";import{useEffect as F,useState as _}from"react";import D from"swr";import{jsx as e,jsxs as r}from"react/jsx-runtime";var m={features:x.map(({title:t,href:a})=>({name:t,href:a})),product:[{name:"Blog",href:"/blog"},{name:"Brand",href:"/brand"},{name:"Changelog",href:"/changelog"},{name:"Customers",href:"/customers"},{name:"Enterprise",href:"/enterprise"},{name:"Pricing",href:"/pricing"},{name:"Help Center",href:"/help"}],compare:p.map(({name:t,slug:a})=>({name:t,href:`/compare/${a}`})),legal:[{name:"Privacy",href:"/privacy"},{name:"Terms",href:"/terms"},{name:"Abuse",href:"/abuse"}],tools:g.map(({name:t,slug:a})=>({name:t,href:`/tools/${a}`}))};function R(){let{domain:t="dub.co"}=T();return e("footer",{children:r(v,{className:"relative z-10 overflow-hidden border border-b-0 border-gray-200 bg-white/50 pb-60 pt-16 backdrop-blur-lg md:rounded-t-2xl",children:[r("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[r("div",{className:"space-y-6",children:[r(s,{href:o("/",t,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:t,utm_content:"Logo"}),className:"block max-w-fit",children:[r("span",{className:"sr-only",children:[process.env.NEXT_PUBLIC_APP_NAME," Logo"]}),e(N,{className:"h-8 text-gray-800"})]}),e("p",{className:"max-w-xs text-sm text-gray-500",children:"Giving modern marketing teams superpowers with short links that stand out."}),r("p",{className:"text-sm leading-5 text-gray-400",children:["\xA9 ",new Date().getFullYear()," Dub Technologies, Inc."]}),r("div",{className:"flex items-center space-x-3",children:[r("a",{href:"https://twitter.com/dubdotco",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"Twitter"}),e(b,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-black"})]}),r("a",{href:"https://github.com/dubinc/dub",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"Github"}),e(h,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-black"})]}),r("a",{href:"https://www.linkedin.com/company/dubinc",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"LinkedIn"}),e(f,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-[#0077b5]"})]}),r("a",{href:"https://www.youtube.com/@dubdotco",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"YouTube"}),e(y,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-[#ff0000]"})]})]}),e(P,{})]}),r("div",{className:"mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0",children:[r("div",{className:"md:grid md:grid-cols-2",children:[r("div",{children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Features"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.features.map(a=>e("li",{children:e(s,{href:o(a.href,t,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:t,utm_content:a.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:a.name})},a.name))})]}),r("div",{className:"mt-10 md:mt-0",children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Product"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.product.map(a=>e("li",{children:e(s,{href:o(a.href,t,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:t,utm_content:a.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:a.name})},a.name))})]})]}),r("div",{className:"md:grid md:grid-cols-2",children:[r("div",{className:"flex flex-col space-y-8",children:[r("div",{children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Compare"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.compare.map(a=>e("li",{children:e(s,{href:o(a.href,t,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:t,utm_content:a.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:a.name})},a.name))})]}),r("div",{children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Legal"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.legal.map(a=>e("li",{children:e(s,{href:o(a.href,t,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:t,utm_content:a.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:a.name})},a.name))})]})]}),r("div",{className:"mt-10 md:mt-0",children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Tools"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.tools.map(a=>e("li",{children:e(s,{href:o(a.href,t,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:t,utm_content:a.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:a.name})},a.name))})]})]})]})]}),e(C,{src:"https://assets.dub.co/footer.png",alt:"Dub Technologies, Inc. Logo",width:1959,height:625,className:"pointer-events-none absolute inset-x-0 bottom-0 z-0"})]})})}function P(){let{data:t}=D("https://status.dub.co/api/v1/summary",d),[a,l]=_("bg-gray-200"),[i,c]=_("Loading status...");return F(()=>{if(!t)return;let{ongoing_incidents:u}=t;if(u.length>0){let{current_worst_impact:w,name:k}=u[0],L=w==="degraded_performance"?"bg-yellow-500":"bg-red-500";c(k),l(L)}else c("All systems operational"),l("bg-green-500")},[t]),r(s,{href:"https://status.dub.co",target:"_blank",className:"group flex max-w-fit items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-colors hover:bg-gray-100",children:[r("div",{className:"relative h-3 w-3",children:[e("div",{className:n("absolute inset-0 m-auto h-3 w-3 animate-ping items-center justify-center rounded-full group-hover:animate-none",a,i==="Loading status..."&&"animate-none")}),e("div",{className:n("absolute inset-0 z-10 m-auto h-3 w-3 rounded-full",a)})]}),e("p",{className:"text-sm font-medium text-gray-800",children:i})]})}export{R as a};
