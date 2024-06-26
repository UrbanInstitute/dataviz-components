import{j as e}from"./jsx-runtime-DHN5EbNM.js";import{u as c}from"./index-m63oy7Hv.js";import{M as b,d as l,e as r}from"./index-BKn5aWQS.js";import"./index-BBBE8JtA.js";import"./iframe-DGJshF_D.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";const m="#174a7c",a="#008bb0",i="#60a1b6",d="#95c0cf",u="#cae0e7",h="#1d5669",p="#0e2b35",j="#f0573e",x="#bcbec0",g="#000000",y="#fcb64b";function f(){return[u,d,i,a,h,p].slice()}const t={blue_dark:m,blue:a,blue_shade_light:i,blue_shade_lighter:d,blue_shade_lightest:u,blue_shade_dark:h,blue_shade_darker:p,orange:j,gray:x,black:g,yellow:y,getBlues:f};function n(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"utils/tpcColors"}),`
`,e.jsx(s.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.p,{children:["The colors utility module provides easy access to the Tax Policy Center's brand colors. For best practices on selecting colors for data visualizations, see the ",e.jsx(s.a,{href:"https://apps.urban.org/tpc-styleguide/public.html",rel:"nofollow",children:"Tax Policy Center data visualizaton styleguide"}),"."]}),`
`,e.jsx(s.p,{children:"To use these, utilities, import the module like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { tpcColors } from "@urbaninstitute/dataviz-components/utils";
`})}),`
`,e.jsx(s.h2,{id:"primary-colors",children:"Primary Colors"}),`
`,e.jsx(l,{children:e.jsx(r,{title:"Primary Colors",subtitle:"",colors:{blue_dark:t.blue_dark,blue:t.blue,orange:t.orange,yellow:t.yellow,gray:t.gray,black:t.black}})}),`
`,e.jsxs(s.p,{children:["Any color can be used directly from the ",e.jsx(s.code,{children:"tpcColors"})," object:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// equal to "#008bb0"
const blue = tpcColors.blue;

// equal to "#fcb64b"
const yellow = tpcColors.yellow;
`})}),`
`,e.jsx(s.h2,{id:"color-shades",children:"Color shades"}),`
`,e.jsx(s.p,{children:"TPC Blue has an array of 6 shades for sequential usage."}),`
`,e.jsx(l,{children:e.jsx(r,{title:"Blue shades",subtitle:"",colors:t.getBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// returns ["#cae0e7","#95c0cf","#60a1b6","#008bb0","#1d5669","#0e2b35"]
tpcColors.getBlues();
`})})]})}function z(o={}){const{wrapper:s}={...c(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(n,{...o})}):n(o)}export{z as default};
