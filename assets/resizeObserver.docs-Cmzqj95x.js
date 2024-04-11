import{j as e}from"./jsx-runtime-DoO6cB-U.js";import{u as i}from"./index-DVFiLL-L.js";import{M as r}from"./index-BZZn_uMy.js";import"./iframe-Bm-fr-FC.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Actions/resizeObserver"}),`
`,e.jsx(n.h1,{id:"resizeobserver-action",children:"resizeObserver action"}),`
`,e.jsxs(n.p,{children:["An action you can use to easily to check when a DOM element's dimensions change using the Resize Observer API. Sometimes is more efficient and less bug prone than Svelte's built-in ",e.jsx(n.code,{children:"bind:clientWidth"})," approach. This may change when ",e.jsx(n.a,{href:"https://github.com/sveltejs/svelte/issues/7583#issuecomment-1905763916",rel:"nofollow",children:"Svelte 5 switches to using resize observer instead of iframes under the hood"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<script>
  import { resizeObserver } from '@urbaninstitute/dataviz-components/actions';

  let width = 0;
<\/script>

<div use:resizeObserver="{(el) => (width = el.clientWidth)}">
  My width is: {width}
</div>
`})})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
