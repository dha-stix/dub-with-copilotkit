"use client"
import{a as v,b as g}from"./chunk-PUBVZVSP.mjs";import{a as c,c as u,d as N}from"./chunk-DF4U7KHP.mjs";import{a as l}from"./chunk-UIYZUXSH.mjs";import{b as o,h as d,o as i}from"./chunk-PTW2A7PR.mjs";import{ChevronRight as h}from"lucide-react";import _ from"next/link";import{jsx as t,jsxs as a}from"react/jsx-runtime";function y({domain:e}){return a("div",{className:"grid w-[40rem] grid-cols-2",children:[a("div",{className:"p-5",children:[t("p",{className:i(c,"mb-2"),children:"Features"}),t("div",{className:"-mx-2 -mb-2 grid grid-cols-1 gap-0.5",children:v.map(({icon:m,title:r,description:s,href:n})=>t(u,{href:o(n,e,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:e,utm_content:r}),icon:t(N,{icon:m}),title:r,description:s},n))})]}),a("div",{className:"border-l border-gray-200 p-5 dark:border-white/20",children:[a(_,{href:o("/customers",e,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:e,utm_content:"Customer Stories"}),className:i(c,"group mb-2 flex items-center transition-colors hover:text-black dark:hover:text-white"),children:["Customer Stories",t(h,{className:"ml-0.5 h-2.5 w-2.5 transition-transform group-hover:translate-x-px"})]}),t("div",{className:"grid grid-cols-1",children:g.map(({icon:m,iconClassName:r,title:s,description:n,href:p})=>t(u,{href:o(p,e,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:e,utm_content:s}),className:"-mx-2",icon:t(m,{className:i("h-7 w-7 shrink-0 text-gray-600 transition-colors dark:text-white/60",r)}),title:s,description:n,descriptionLines:2},p))}),t("p",{className:i(c,"my-4"),children:"Compare"}),t("div",{className:"flex flex-col gap-1.5",children:d.map(({name:m,slug:r})=>a(_,{href:o(`/compare/${r}`,e,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:e,utm_content:`Dub vs. ${m}`}),className:"group flex items-center gap-0.5 text-gray-500 transition-colors hover:text-gray-700 dark:text-white/60 dark:hover:text-white/80",children:[a("p",{className:"text-sm font-medium",children:["Dub vs. ",m]})," ",t(l,{className:"h-3 w-3"})]},r))})]})]})}export{y as a};
