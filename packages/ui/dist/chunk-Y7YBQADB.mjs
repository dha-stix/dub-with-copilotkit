"use client"
import{b as g}from"./chunk-2EXAOHUE.mjs";import{i as c}from"./chunk-DGDXBKHW.mjs";import{Command as s}from"cmdk";import{Lock as T}from"lucide-react";import{jsx as o,jsxs as w}from"react/jsx-runtime";var h=({presets:f,onSelect:p,currentValue:r})=>{let P=e=>"dateRange"in e,b=e=>"date"in e,a=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),y=(e,t)=>{let n=e.from,l=t.from,i=!1;n&&l&&a(n,l)&&(i=!0);let m=e.to,d=t.to,u=!1;return m&&d&&a(m,d)&&(u=!0),i&&u},x=e=>{if(P(e)){let t=r;return t&&y(t,e.dateRange)}else if(b(e)){let t=r;return t&&a(t,e.date)}return!1};return o(s,{className:"w-full rounded ring-gray-200 ring-offset-2 focus:outline-none",tabIndex:0,autoFocus:!0,loop:!0,children:o(s.List,{className:"[&>*]:flex [&>*]:w-full [&>*]:items-start [&>*]:gap-x-2 [&>*]:gap-y-0.5 [&>*]:sm:flex-col",children:f.map((e,t)=>w(s.Item,{disabled:e.requiresUpgrade,onSelect:()=>p(e),title:e.label,value:e.id,className:c("group relative flex cursor-pointer items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded border border-gray-200","px-2.5 py-1.5 text-left text-sm text-gray-700 shadow-sm outline-none sm:w-full sm:border-none sm:py-2 sm:shadow-none","disabled:pointer-events-none disabled:opacity-50","sm:data-[selected=true]:bg-gray-100",x(e)&&"font-semibold text-gray-800"),children:[o("span",{children:e.label}),e.requiresUpgrade?o(T,{className:"h-3.5 w-3.5","aria-hidden":"true"}):e.shortcut?o("kbd",{className:"text-gray-4000 hidden rounded bg-gray-100 px-2 py-0.5 text-xs font-light group-data-[selected=true]:bg-gray-200 md:block",children:e.shortcut.toUpperCase()}):null,e.requiresUpgrade&&e.tooltipContent&&o(g,{side:"bottom",content:e.tooltipContent,children:o("div",{className:"absolute inset-0 cursor-not-allowed"})})]},t))})})};h.displayName="DatePicker.Presets";export{h as a};