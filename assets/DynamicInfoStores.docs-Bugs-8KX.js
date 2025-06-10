import{j as e}from"./iframe-BcferWuU.js";import{useMDXComponents as r}from"./index-H96FX0fs.js";import{M as s,C as o}from"./blocks-DRbiSvrO.js";import{Default as i}from"./DynamicInfoStores.stories-BDx6jlQj.js";import"./each-CZjc6dyk.js";import"./lifecycle-BcSUtK95.js";import"./create-runtime-stories-CHM6HO4D.js";import"./BasicDropdown-DJMtB7rs.js";import"./attributes-1snxx-6i.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-Axxag6g7.js";import"./urbanColors-BkxYcPwH.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Examples/Dynamic Info With Stores"}),`
`,e.jsx(t.h1,{id:"dynamic-info-with-stores",children:"Dynamic Info With Stores"}),`
`,e.jsx(t.p,{children:"Here is a basic writable/derived Svelte store setup for displaying dynamic information, based on source data."}),`
`,e.jsx(t.h2,{id:"srcdatadatajson",children:"src/data/data.json"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`[
  {
    "label": "Bar Chart",
    "value": "barChart",
    "metric": 100
  },
  {
    "label": "Column Chart",
    "value": "columnChart",
    "metric": 200
  },
  {
    "label": "Heatmap",
    "value": "heatmap",
    "metric": 300
  }
]
`})}),`
`,e.jsx(t.h2,{id:"srclibstoresselectedjs",children:"src/lib/stores/selected.js"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { writable, derived } from "svelte/store";
import data from "$data/data.json";

// use key to access object (instead of .find())
const dataLookup = data.reduce((map, d) => {
  map[d.value] = d;
  return map;
}, {});

// create writable and derived stores
export const selected = writable("barChart"); // initial value set to bar Chart
export const selectedData = derived(selected, ($selected) => {
  return dataLookup[$selected]; // access source data using key
});
`})}),`
`,e.jsx(t.h2,{id:"srclibcomponentsdatadisplaysvelte",children:"src/lib/components/DataDisplay.svelte"}),`
`,e.jsx(o,{of:i,sourceState:"shown"})]})}function D(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{D as default};
