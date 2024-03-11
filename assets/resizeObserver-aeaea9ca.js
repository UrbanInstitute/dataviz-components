import{j as e}from"./jsx-runtime-64bfaf1c.js";import{M as r}from"./index-70040bfe.js";import{u as i}from"./index-98b0715a.js";import"./iframe-e4f5d201.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";function t(s){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"actions/resizeObserver"}),`
`,e.jsx(n.h1,{id:"resizeobserver-action",children:"resizeObserver action"}),`
`,e.jsxs(n.p,{children:["An action you can use to easily to check when a DOM element's dimensions change using the Resize Observer API. Sometimes is more efficient and less bug prone than Svelte's built-in ",e.jsx(n.code,{children:"bind:clientWidth"})," approach. This may change when ",e.jsx(n.a,{href:"https://github.com/sveltejs/svelte/issues/7583#issuecomment-1905763916",target:"_blank",rel:"nofollow noopener noreferrer",children:"Svelte 5 switches to using resize observer instead of iframes under the hood"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<script>
  import { resizeObserver } from '@urbaninstitute/dataviz-components/actions';

  let width = 0;
<\/script>

<div use:resizeObserver="{(el) => (width = el.clientWidth)}">
  My width is: {width}
</div>
`})})]})}function j(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{j as default};
