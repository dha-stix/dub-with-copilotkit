"use client"
import{jsx as t,jsxs as n}from"react/jsx-runtime";function e(){return n("div",{style:a.backgroundMain,children:[t("div",{style:a.backgroundMainBefore}),t("div",{style:a.backgroundMainAfter}),t("div",{style:a.backgroundContent})]})}var a={backgroundMain:{width:"100vw",minHeight:"100vh",position:"fixed",zIndex:1,display:"flex",justifyContent:"center",padding:"120px 24px 160px 24px",pointerEvents:"none"},backgroundMainBefore:{background:"radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%)",position:"absolute",content:'""',zIndex:2,width:"100%",height:"100%",top:0},backgroundMainAfter:{content:'""',backgroundImage:"url(https://assets.dub.co/misc/grid.svg)",zIndex:1,position:"absolute",width:"100%",height:"100%",top:0,opacity:.4,filter:"invert(1)"},backgroundContent:{zIndex:3,width:"100%",maxWidth:"640px",backgroundImage:`radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%), 
                      radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
                      radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
                      radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
                      radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
                      radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
                      radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)`,position:"absolute",height:"100%",filter:"blur(100px) saturate(150%)",top:"80px",opacity:.15}};export{e as a};