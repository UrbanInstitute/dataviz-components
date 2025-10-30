import{j as e}from"./iframe-BjxEKEQH.js";import{useMDXComponents as s}from"./index-IebOMRBN.js";import{M as c,a as i}from"./blocks-BUt1p2bg.js";function o(n){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"context/usePymChildContext"}),`
`,e.jsx(t.h1,{id:"usepymchildcontext",children:"usePymChildContext"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/src/lib/Pym/context.svelte.js",rel:"nofollow",children:e.jsx(t.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsxs(t.p,{children:["A shared rune helper that exposes the active ",e.jsx(t.a,{href:"https://github.com/pymjs/pym.js/",rel:"nofollow",children:e.jsx(t.code,{children:"pym.js"})})," child instance created by the ",e.jsx(t.code,{children:"<PymChild />"})," component. Internally it uses Svelte context to share state between the ",e.jsx(t.code,{children:"<PymChild />"})," component and its descendants."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"<PymChild />"})," calls ",e.jsx(t.code,{children:"createPymChildContext()"})," automatically, so most projects can just call ",e.jsx(t.code,{children:"usePymChildContext()"})," to access the currently active child:"]}),`
`,e.jsx(i,{dark:!0,code:`
<script>
import { usePymChildContext } from "@urbaninstitute/dataviz-components/context";

const pymChild = usePymChildContext();

function resize() {
  pymChild?.sendHeight();
}
<\/script>
`,language:"svelte"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": ",e.jsx(t.code,{children:"usePymChildContext()"})," returns ",e.jsx(t.code,{children:"undefined"})," if called outside a ",e.jsx(t.code,{children:"<PymChild>"})," component tree. Use optional chaining (",e.jsx(t.code,{children:"?."}),") when calling methods on the returned context."]}),`
`,e.jsxs(t.p,{children:["Advanced scenarios that render the Pym child outside the ",e.jsx(t.code,{children:"<PymChild />"})," component can invoke ",e.jsx(t.code,{children:"createPymChildContext()"})," manually to seed the context before instantiating the child."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"/docs/components-pymchild--docs",children:"Read more about how to use the PymChild component here"}),"."]})]})}function r(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{r as default};
