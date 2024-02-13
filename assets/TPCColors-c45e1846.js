import{j as e}from"./jsx-runtime-21e5f1fb.js";import{M as i,C as t,b as a}from"./index-e873d95c.js";import{u as c}from"./index-b51d1c0d.js";import"./iframe-85855592.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";const r={blue_dark:"#174a7c",blue:"#008bb0",blue_shade_light:"#60a1b6",blue_shade_lighter:"#95c0cf",blue_shade_lightest:"#cae0e7",blue_shade_dark:"#1d5669",blue_shade_darker:"#0e2b35",orange:"#f0573e",gray:"#bcbec0",black:"#000000",yellow:"#fcb64b"};function d(){return[r.blue_shade_lightest,r.blue_shade_lighter,r.blue_shade_light,r.blue,r.blue_shade_dark,r.blue_shade_darker].slice()}const o={...r,getBlues:d};function n(l){const s=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},c(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"utils/tpcColors"}),`
`,e.jsx(s.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.p,{children:["The colors utility module provides easy access to the Tax Policy Center's brand colors. For best practices on selecting colors for data visualizations, see the ",e.jsx(s.a,{href:"https://apps.urban.org/tpc-styleguide/public.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tax Policy Center data visualizaton styleguide"}),"."]}),`
`,e.jsx(s.p,{children:"To use these, utilities, import the module like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { tpcColors } from "@urbaninstitute/dataviz-components/utils";
`})}),`
`,e.jsx(s.h2,{id:"primary-colors",children:"Primary Colors"}),`
`,e.jsx(t,{children:e.jsx(a,{title:"Primary Colors",subtitle:"",colors:{blue_dark:o.blue_dark,blue:o.blue,orange:o.orange,yellow:o.yellow,gray:o.gray,black:o.black}})}),`
`,e.jsxs(s.p,{children:["Any color can be used directly from the ",e.jsx(s.code,{children:"tpcColors"})," object:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// equal to "#008bb0"
const blue = tpcColors.blue;

// equal to "#fcb64b"
const yellow = tpcColors.yellow;
`})}),`
`,e.jsx(s.h2,{id:"color-shades",children:"Color shades"}),`
`,e.jsx(s.p,{children:"TPC Blue has an array of 6 shades for sequential usage."}),`
`,e.jsx(t,{children:e.jsx(a,{title:"Blue shades",subtitle:"",colors:o.getBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// returns ["#cae0e7","#95c0cf","#60a1b6","#008bb0","#1d5669","#0e2b35"]
tpcColors.getBlues();
`})})]})}function y(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?e.jsx(s,Object.assign({},l,{children:e.jsx(n,l)})):n(l)}export{y as default};
