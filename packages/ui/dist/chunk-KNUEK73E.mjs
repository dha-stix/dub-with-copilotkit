"use client"
import{b as u}from"./chunk-PAEPHHPP.mjs";import{a as l}from"./chunk-L775CDS5.mjs";import{o as r}from"./chunk-PTW2A7PR.mjs";import{cva as x}from"class-variance-authority";import{forwardRef as h}from"react";import{jsx as o,jsxs as p}from"react/jsx-runtime";var m=x("transition-all",{variants:{variant:{primary:"border-black bg-black text-white hover:bg-gray-800 hover:ring-4 hover:ring-gray-200",secondary:r("border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus-visible:border-gray-500 outline-none","data-[state=open]:border-gray-500 data-[state=open]:ring-4 data-[state=open]:ring-gray-200"),outline:"border-transparent text-gray-500 duration-75 hover:bg-gray-100",success:"border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:ring-4 hover:ring-blue-100",danger:"border-red-500 bg-red-500 text-white hover:bg-red-600 hover:ring-4 hover:ring-red-100","danger-outline":"border-transparent bg-white text-red-500 hover:bg-red-600 hover:text-white"}},defaultVariants:{variant:"primary"}}),c=h(({text:n,variant:e="primary",className:d,textWrapperClassName:b,loading:g,icon:i,shortcut:t,disabledTooltip:s,...a},y)=>s?o(u,{content:s,children:p("div",{className:r("flex h-10 w-full cursor-not-allowed items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-gray-100 px-4 text-sm text-gray-400 transition-all focus:outline-none",{"border-transparent bg-transparent":e==null?void 0:e.endsWith("outline")},d),children:[i,n&&o("div",{className:r("min-w-0 truncate",t&&"flex-1 text-left",b),children:n}),t&&o("kbd",{className:r("hidden rounded bg-gray-200 px-2 py-0.5 text-xs font-light text-gray-400 md:inline-block",{"bg-gray-100":e==null?void 0:e.endsWith("outline")}),children:t})]})}):p("button",{ref:y,type:a.onClick?"button":"submit",className:r("group flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 text-sm",a.disabled||g?"cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400":m({variant:e}),d),disabled:a.disabled||g,...a,children:[g?o(l,{}):i||null,n&&o("div",{className:r("min-w-0 truncate",t&&"flex-1 text-left",b),children:n}),t&&o("kbd",{className:r("hidden rounded px-2 py-0.5 text-xs font-light transition-all duration-75 md:inline-block",{"bg-gray-700 text-gray-400 group-hover:bg-gray-600 group-hover:text-gray-300":e==="primary","bg-gray-200 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-500":e==="secondary","bg-gray-100 text-gray-500 group-hover:bg-gray-200":e==="outline","bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white":e==="danger-outline"}),children:t})]}));c.displayName="Button";export{m as a,c as b};
