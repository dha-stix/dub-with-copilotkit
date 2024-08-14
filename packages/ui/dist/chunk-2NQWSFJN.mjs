"use client"
import{a as F}from"./chunk-3QY3W3M7.mjs";import{i as r}from"./chunk-DGDXBKHW.mjs";import{cva as L}from"class-variance-authority";import{UploadCloud as M}from"lucide-react";import{useState as h}from"react";import{toast as N}from"sonner";import{Fragment as k,jsx as t,jsxs as u}from"react/jsx-runtime";var d={any:{types:[]},images:{types:["image/png","image/jpeg"],errorMessage:"File type not supported (.png or .jpg only)"},csv:{types:["text/csv"],errorMessage:"File type not supported (.csv only)"}},V=L("group relative isolate flex aspect-[1200/630] w-full flex-col items-center justify-center overflow-hidden bg-white transition-all hover:bg-gray-50",{variants:{variant:{default:"rounded-md border border-gray-300 shadow-sm",plain:""}},defaultVariants:{variant:"default"}});function K({readFile:x,onChange:s,variant:w,className:D,iconClassName:P,accept:l="any",imageSrc:n,loading:R=!1,clickToUpload:p=!0,showHoverOverlay:U=!0,content:g,maxFileSizeMB:c=0,accessibilityLabel:j="File upload",disabled:a=!1}){let[f,i]=h(!1),[T,z]=h(null),y=async e=>{let o="dataTransfer"in e?e.dataTransfer.files&&e.dataTransfer.files[0]:e.target.files&&e.target.files[0];if(!o)return;if(z(o.name),c>0&&o.size/1024/1024>c){N.error(`File size too big (max ${c} MB)`);return}let m=d[l].types;if(m.length&&!m.includes(o.type)){N.error(d[l].errorMessage??"File type not supported");return}if(x){let v=new FileReader;v.onload=E=>{var b;return s==null?void 0:s({src:(b=E.target)==null?void 0:b.result,file:o})},v.readAsDataURL(o);return}s==null||s({file:o})};return u("label",{className:r(V({variant:w}),a?"cursor-not-allowed":r(p&&"cursor-pointer"),D),children:[R&&t("div",{className:"absolute inset-0 z-[5] flex items-center justify-center rounded-[inherit] bg-white",children:t(F,{})}),t("div",{className:"absolute inset-0 z-[5]",onDragOver:e=>{e.preventDefault(),e.stopPropagation(),i(!0)},onDragEnter:e=>{e.preventDefault(),e.stopPropagation(),i(!0)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),i(!1)},onDrop:async e=>{e.preventDefault(),e.stopPropagation(),y(e),i(!1)}}),u("div",{className:r("absolute inset-0 z-[3] flex flex-col items-center justify-center rounded-[inherit] bg-white transition-all",a&&"bg-gray-50",f&&!a&&"cursor-copy border-2 border-black bg-gray-50 opacity-100",n?r("opacity-0",U&&!a&&"group-hover:opacity-100"):r(!a&&"group-hover:bg-gray-50")),children:[t(M,{className:r("size-7 transition-all duration-75",a?"text-gray-400":r("text-gray-500 group-hover:scale-110 group-active:scale-95",f?"scale-110":"scale-100"),P)}),g!==null&&t("div",{className:r("mt-2 text-center text-sm text-gray-500",a&&"text-gray-400"),children:g??t(k,{children:u("p",{children:["Drag and drop ",p&&"or click"," to upload."]})})}),t("span",{className:"sr-only",children:j})]}),n&&t("img",{src:n,alt:"Preview",className:"h-full w-full rounded-[inherit] object-cover"}),p&&t("div",{className:"sr-only mt-1 flex shadow-sm",children:t("input",{type:"file",accept:d[l].types.join(","),onChange:y,disabled:a},T)})]})}export{K as a};