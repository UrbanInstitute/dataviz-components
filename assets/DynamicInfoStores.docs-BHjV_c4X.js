import{j as e}from"./jsx-runtime-DnHq08u5.js";import{u as r}from"./index-BtaKmp4G.js";import{M as s,C as o}from"./index-DxXe6SnR.js";import{Default as i}from"./DynamicInfoStores.stories-C7HIMbBR.js";import"./index-BqTris2N.js";import"./iframe-BAcLuist.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";import"./index-DSboKh2c.js";import"./lifecycle-SLBqfn5_.js";import"./each-BJWUklFz.js";import"./collect-stories-C9w2Zg6J.js";import"./BasicDropdown-CCqT9gkr.js";import"./urbanColors-BkxYcPwH.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Examples/Dynamic Info With Stores"}),`
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
`,e.jsx(o,{of:i,sourceState:"shown"})]})}function M(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{M as default};
