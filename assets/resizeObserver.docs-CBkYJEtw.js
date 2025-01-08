import{j as e}from"./jsx-runtime-BzrWhhrd.js";import{u as s}from"./index-C1GH3jG5.js";import{M as r}from"./index-B8cAVSoT.js";import"./index-DTuXy3ho.js";import"./iframe-Cpq29p5a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Actions/resizeObserver"}),`
`,e.jsx(t.h1,{id:"resizeobserver-action",children:"resizeObserver action"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/src/lib/actions/resizeObserver.js",rel:"nofollow",children:e.jsx(t.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsxs(t.p,{children:["An action you can use to easily to check when a DOM element's dimensions change using the Resize Observer API. Sometimes is more efficient and less bug prone than Svelte's built-in ",e.jsx(t.code,{children:"bind:clientWidth"})," approach. This may change when ",e.jsx(t.a,{href:"https://github.com/sveltejs/svelte/issues/7583#issuecomment-1905763916",rel:"nofollow",children:"Svelte 5 switches to using resize observer instead of iframes under the hood"}),"."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`<script>
  import { resizeObserver } from '@urbaninstitute/dataviz-components/actions';

  let width = 0;
<\/script>

<div use:resizeObserver="{(el) => (width = el.clientWidth)}">
  My width is: {width}
</div>
`})})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default};
