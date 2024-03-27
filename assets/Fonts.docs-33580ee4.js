import{j as e}from"./jsx-runtime-587a15cc.js";import{M as s}from"./index-85c0d2fa.js";import{u as r}from"./index-69d9fc06.js";import"./iframe-cf1817b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";function o(n){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",a:"a"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Theming/Fonts"}),`
`,e.jsx(t.h1,{id:"font-loading",children:"Font loading"}),`
`,e.jsx(t.p,{children:"If you need to load the Urban brand fonts in your SvelteKit-powered project, you can use the font components included in this library."}),`
`,e.jsxs(t.p,{children:["Import and use either ",e.jsx(t.code,{children:"<FontsUrban />"})," or ",e.jsx(t.code,{children:"<FontsWorkrise />"})," to add the necessary markup to the ",e.jsx(t.code,{children:"<head>"})," of you html like so:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<script>
  import { FontsUrban } from "@urbaninstitute/dataviz-components/fonts";
<\/script>
<FontsUrban />
`})}),`
`,e.jsxs(t.p,{children:["Note: these components take advantage of ",e.jsxs(t.a,{href:"https://svelte.dev/docs/special-elements#svelte-head",target:"_blank",rel:"nofollow noopener noreferrer",children:["Svelte's built-in ",e.jsx(t.code,{children:"<svelte:head>"})," component"]})," to include the markup in the correct place. If you aren't using SvelteKit or some form of server-side rendering, you may want to add these fonts to your project with a more traditional method."]})]})}function j(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{j as default};
