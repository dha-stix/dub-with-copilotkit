"use client"
import{i as r}from"./chunk-DGDXBKHW.mjs";import"./chunk-AUBFB4SI.mjs";import{LayoutGroup as u,motion as a}from"framer-motion";import{useId as d}from"react";import{jsx as e,jsxs as g}from"react/jsx-runtime";function b({options:i,selected:o,selectAction:n}){let l=d();return e(u,{id:l,children:e(a.div,{layout:!0,className:"relative inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-white p-1",children:i.map(t=>g("button",{type:"button",className:r("relative z-10 block px-3 py-1 text-sm font-medium capitalize",{"transition-all hover:text-gray-500":t.value!==o}),onClick:()=>n(t.value),children:[e("p",{children:t.label}),t.value===o&&e(a.div,{layoutId:l,className:"absolute left-0 top-0 -z-[1] h-full w-full rounded-lg border border-gray-200 bg-gray-50",transition:{duration:.25}})]},t.value))})})}export{b as ToggleGroup};