"use client"
import{a as h}from"./chunk-KNUEK73E.mjs";import{o as f}from"./chunk-PTW2A7PR.mjs";import{cva as A}from"class-variance-authority";import k from"embla-carousel-autoplay";import T from"embla-carousel-react";import{motion as L}from"framer-motion";import{ArrowLeft as D,ArrowRight as H,ChevronLeft as M,ChevronRight as z}from"lucide-react";import*as e from"react";import{jsx as o,jsxs as C}from"react/jsx-runtime";var w=2e3,E=e.createContext(null);function g(){let a=e.useContext(E);if(!a)throw new Error("useCarousel must be used within a <Carousel />");return a}var I=e.forwardRef(({orientation:a="horizontal",opts:l,setApi:s,autoplay:n,plugins:m,className:d,children:r,...c},v)=>{let[P,t]=T({...l,axis:a==="horizontal"?"x":"y"},[...n?[k(typeof n=="object"?n:{delay:w})]:[],...m||[]]),[b,y]=e.useState(!1),[N,R]=e.useState(!1),i=e.useCallback(p=>{!p||(y(p.canScrollPrev()),R(p.canScrollNext()))},[]),u=e.useCallback(()=>{t==null||t.scrollPrev()},[t]),x=e.useCallback(()=>{t==null||t.scrollNext()},[t]),S=e.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),u()):p.key==="ArrowRight"&&(p.preventDefault(),x())},[u,x]);return e.useEffect(()=>{!t||!s||s(t)},[t,s]),e.useEffect(()=>{if(!!t)return i(t),t.on("reInit",i),t.on("select",i),()=>{t==null||t.off("select",i)}},[t,i]),o(E.Provider,{value:{carouselRef:P,api:t,opts:l,orientation:a||((l==null?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:u,scrollNext:x,canScrollPrev:b,canScrollNext:N},children:o("div",{ref:v,onKeyDownCapture:S,className:f("relative",d),role:"region","aria-roledescription":"carousel",...c,children:r})})});I.displayName="Carousel";var U=e.forwardRef(({className:a,...l},s)=>{let{carouselRef:n,orientation:m}=g();return o("div",{ref:n,className:"overflow-hidden",children:o("div",{ref:s,className:f("flex",m==="horizontal"?"-ml-4":"-mt-4 flex-col",a),...l})})});U.displayName="CarouselContent";var B=e.forwardRef(({className:a,...l},s)=>{let{orientation:n}=g();return o("div",{ref:s,role:"group","aria-roledescription":"slide",className:f("min-w-0 shrink-0 grow-0 basis-full",n==="horizontal"?"pl-4":"pt-4",a),...l})});B.displayName="CarouselItem";var O=e.forwardRef(({className:a,...l},s)=>{let{orientation:n,scrollPrev:m,canScrollPrev:d}=g();return C("button",{ref:s,className:f("absolute",n==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",h({variant:"secondary",className:"p-2"}),a),disabled:!d,onClick:m,...l,children:[o(D,{className:"h-4 w-4"}),o("span",{className:"sr-only",children:"Previous slide"})]})});O.displayName="CarouselPrevious";var V=e.forwardRef(({className:a,...l},s)=>{let{orientation:n,scrollNext:m,canScrollNext:d}=g();return C("button",{ref:s,className:f("absolute",n==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",h({variant:"secondary",className:"p-2"}),a),disabled:!d,onClick:m,...l,children:[o(H,{className:"h-4 w-4"}),o("span",{className:"sr-only",children:"Next slide"})]})});V.displayName="CarouselNext";var K=A("flex items-center justify-center gap-3 sm:gap-6",{variants:{variant:{simple:"relative",floating:"absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-gray-800/10 bg-white sm:bottom-6 "}}}),W=({variant:a="simple",className:l})=>{var R;let{scrollNext:s,scrollPrev:n,canScrollNext:m,canScrollPrev:d,api:r}=g(),c=(R=r==null?void 0:r.plugins())==null?void 0:R.autoplay,[v,P]=e.useState(0),[t,b]=e.useState(!1),y=e.useCallback(i=>{P(i.selectedScrollSnap())},[]),N=e.useCallback(i=>()=>{c&&c.isPlaying()&&c.stop(),i()},[c]);return e.useEffect(()=>{!r||(y(r),b((c==null?void 0:c.isPlaying())??!1),r.on("reInit",y),r.on("select",y),r.on("autoplay:play",()=>b(!0)),r.on("autoplay:stop",()=>b(!1)))},[r,c,y]),C("div",{className:f(K({variant:a}),l),children:[a!=="simple"&&C("button",{className:"cursor-pointer rounded-full p-2 hover:bg-gray-50 active:bg-gray-100",disabled:!d,onClick:N(n),children:[o(M,{className:"h-4 w-4"}),o("span",{className:"sr-only",children:"Previous slide"})]}),r!=null&&o("div",{className:"flex items-center gap-1",children:r.slideNodes().map((i,u)=>C("button",{onClick:N(()=>r.scrollTo(u)),className:"rounded-full p-0.5 hover:bg-gray-100 active:bg-gray-200 sm:p-1.5",children:[o("div",{className:f("relative isolate h-1.5 w-1.5 overflow-hidden rounded-full transition-all",u===v?"bg-black":"bg-black/20",t&&u===v&&"w-6 bg-black/20"),children:t&&u===v&&o(L.div,{initial:{x:"-100%"},animate:{x:0},transition:{type:"tween",duration:((c==null?void 0:c.options.delay)??w)/1e3},className:"animate-fill-width h-full w-full rounded-full bg-black"})}),C("span",{className:"sr-only",children:["Slide ",u+1]})]},u))}),a!=="simple"&&C("button",{className:"cursor-pointer rounded-full p-2 hover:bg-gray-50 active:bg-gray-100",disabled:!m,onClick:N(s),children:[o(z,{className:"h-4 w-4"}),o("span",{className:"sr-only",children:"Next slide"})]})]})};export{g as a,I as b,U as c,B as d,O as e,V as f,W as g};