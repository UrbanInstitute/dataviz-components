import{j as e}from"./jsx-runtime-0mqYSzCS.js";import{u as r}from"./index-D1_jMibn.js";import{M as s}from"./index-BD5CtlDD.js";import"./index-CIjOG5ey.js";import"./iframe-CTGPT5OD.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";function o(n){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Theming/Fonts"}),`
`,e.jsx(t.h1,{id:"font-loading",children:"Font loading"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/UrbanInstitute/dataviz-components/tree/b02e4223ae34b4d0c5d4e2b0ef30bde606801806/src/lib/Fonts",rel:"nofollow",children:e.jsx(t.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsx(t.p,{children:"If you need to load the Urban brand fonts in your SvelteKit-powered project, you can use the font components included in this library."}),`
`,e.jsxs(t.p,{children:["Import and use either ",e.jsx(t.code,{children:"<FontsUrban />"})," or ",e.jsx(t.code,{children:"<FontsWorkrise />"})," to add the necessary markup to the ",e.jsx(t.code,{children:"<head>"})," of you html like so:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-svelte",children:`<script>
  import { FontsUrban } from "@urbaninstitute/dataviz-components/fonts";
<\/script>
<FontsUrban />
`})}),`
`,e.jsxs(t.p,{children:["Note: these components take advantage of ",e.jsxs(t.a,{href:"https://svelte.dev/docs/special-elements#svelte-head",rel:"nofollow",children:["Svelte's built-in ",e.jsx(t.code,{children:"<svelte:head>"})," component"]})," to include the markup in the correct place. If you aren't using SvelteKit or some form of server-side rendering, you may want to add these fonts to your project with a more traditional method."]})]})}function j(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
