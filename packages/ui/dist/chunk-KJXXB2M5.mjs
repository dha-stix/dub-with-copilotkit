"use client"
import{a as p}from"./chunk-NWME2ANF.mjs";import{o as d}from"./chunk-PTW2A7PR.mjs";import*as o from"@radix-ui/react-popover";import{Drawer as r}from"vaul";import{jsx as e,jsxs as i}from"react/jsx-runtime";function u({children:t,content:n,align:m="center",openPopover:a,setOpenPopover:l,mobileOnly:v,popoverContentClassName:c,collisionBoundary:g,sticky:P,onEscapeKeyDown:s}){let{isMobile:b}=p();return v||b?i(r.Root,{open:a,onOpenChange:l,children:[e(r.Trigger,{className:"sm:hidden",asChild:!0,children:t}),e(r.Overlay,{className:"fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur"}),i(r.Portal,{children:[i(r.Content,{className:"fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white",onEscapeKeyDown:s,children:[e("div",{className:"sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit",children:e("div",{className:"my-3 h-1 w-12 rounded-full bg-gray-300"})}),e("div",{className:"flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white pb-8 align-middle shadow-xl",children:n})]}),e(r.Overlay,{})]})]}):i(o.Root,{open:a,onOpenChange:l,children:[e(o.Trigger,{className:"sm:inline-flex",asChild:!0,children:t}),e(o.Portal,{children:e(o.Content,{sideOffset:8,align:m,className:d("animate-slide-up-fade z-50 items-center rounded-lg border border-gray-200 bg-white drop-shadow-lg sm:block",c),sticky:P,collisionBoundary:g,onEscapeKeyDown:s,children:n})})]})}export{u as a};
