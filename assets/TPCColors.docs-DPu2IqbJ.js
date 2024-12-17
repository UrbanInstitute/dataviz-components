import{j as e}from"./jsx-runtime-FTJKyVQ0.js";import{u as c}from"./index-B14ZinHf.js";import{M as p,e as l,f as n}from"./index-D6zoe723.js";import"./index-BbLjsSOQ.js";import"./iframe-BJfsxNw0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";const m="#174a7c",a="#008bb0",i="#60a1b6",d="#95c0cf",u="#cae0e7",h="#1d5669",b="#0e2b35",j="#f0573e",g="#bcbec0",x="#000000",f="#fcb64b";function y(){return[u,d,i,a,h,b].slice()}const t={blue_dark:m,blue:a,blue_shade_light:i,blue_shade_lighter:d,blue_shade_lightest:u,blue_shade_dark:h,blue_shade_darker:b,orange:j,gray:g,black:x,yellow:f,getBlues:y};function r(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"utils/tpcColors"}),`
`,e.jsx(s.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/src/lib/utils/tpcColors.js",rel:"nofollow",children:e.jsx(s.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsxs(s.p,{children:["The colors utility module provides easy access to the Tax Policy Center's brand colors. For best practices on selecting colors for data visualizations, see the ",e.jsx(s.a,{href:"https://apps.urban.org/tpc-styleguide/public.html",rel:"nofollow",children:"Tax Policy Center data visualizaton styleguide"}),"."]}),`
`,e.jsx(s.p,{children:"To use these, utilities, import the module like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { tpcColors } from "@urbaninstitute/dataviz-components/utils";
`})}),`
`,e.jsx(s.h2,{id:"primary-colors",children:"Primary Colors"}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Primary Colors",subtitle:"",colors:{blue_dark:t.blue_dark,blue:t.blue,orange:t.orange,yellow:t.yellow,gray:t.gray,black:t.black}})}),`
`,e.jsxs(s.p,{children:["Any color can be used directly from the ",e.jsx(s.code,{children:"tpcColors"})," object:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// equal to "#008bb0"
const blue = tpcColors.blue;

// equal to "#fcb64b"
const yellow = tpcColors.yellow;
`})}),`
`,e.jsx(s.h2,{id:"color-shades",children:"Color shades"}),`
`,e.jsx(s.p,{children:"TPC Blue has an array of 6 shades for sequential usage."}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Blue shades",subtitle:"",colors:t.getBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// returns ["#cae0e7","#95c0cf","#60a1b6","#008bb0","#1d5669","#0e2b35"]
tpcColors.getBlues();
`})})]})}function q(o={}){const{wrapper:s}={...c(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(r,{...o})}):r(o)}export{q as default};
