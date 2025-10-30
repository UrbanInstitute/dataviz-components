import{j as e}from"./iframe-BjxEKEQH.js";import{useMDXComponents as i}from"./index-IebOMRBN.js";import{S as r}from"./PymChild.stories-DPG3wg1w.js";import{M as d,a as s,b as c}from"./blocks-BUt1p2bg.js";import"./PymChild-CO1HGkDt.js";import"./create-runtime-stories-HPq0r60h.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(n.h1,{id:"pymchild",children:"PymChild"}),`
`,e.jsxs(n.p,{children:["A component that adds ",e.jsx(n.a,{href:"http://blog.apps.npr.org/pym.js/",rel:"nofollow",children:"Pym.js"})," functionality to the current HTML web page."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"In order to add PymChild functionality to your page, simply import and use this component in your top level component or route like this:"}),`
`,e.jsx(s,{dark:!0,code:`
<script>
import { PymChild } from "@urbaninstitute/dataviz-components";
<\/script>
<PymChild />
`,language:"svelte"}),`
`,e.jsxs(n.p,{children:["If you need to access the Pym child instance itself, grab the shared rune context and read the ",e.jsx(n.code,{children:"child"})," property:"]}),`
`,e.jsx(s,{dark:!0,code:`
import { usePymChildContext } from "@urbaninstitute/dataviz-components/context";

const pymChild = usePymChildContext();

pymChild?.child?.sendHeight();
`,language:"js"}),`
`,e.jsx(n.h3,{id:"context-requirement",children:"Context Requirement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"usePymChildContext()"})," must be called within a component tree that has a ",e.jsx(n.code,{children:"<PymChild>"})," component as an ancestor. If called outside this context, it returns ",e.jsx(n.code,{children:"undefined"}),". Always use optional chaining when accessing properties or methods:"]}),`
`,e.jsx(s,{dark:!0,code:`
const pymChild = usePymChildContext();
pymChild?.sendHeight(); // Safe
pymChild?.child?.sendHeight(); // Also safe
`,language:"js"}),`
`,e.jsx(n.h3,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Wrapper Pattern (Recommended)"})}),`
`,e.jsxs(n.p,{children:["When descendant components need to access ",e.jsx(n.code,{children:"usePymChildContext()"}),", wrap them with ",e.jsx(n.code,{children:"<PymChild>"}),":"]}),`
`,e.jsx(s,{dark:!0,code:`
<script>
import { PymChild } from "@urbaninstitute/dataviz-components";
import MyChart from "./MyChart.svelte";
<\/script>

<PymChild>
<MyChart />
</PymChild>
`,language:"svelte"}),`
`,e.jsxs(n.p,{children:["Inside ",e.jsx(n.code,{children:"MyChart.svelte"}),", you can then safely call ",e.jsx(n.code,{children:"usePymChildContext()"}),":"]}),`
`,e.jsx(s,{dark:!0,code:`
<script>
import { usePymChildContext } from "@urbaninstitute/dataviz-components/context";

const pymChild = usePymChildContext();

function notifyResize() {
pymChild?.sendHeight();
}

<\/script>
`,language:"svelte"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Standalone Pattern"})}),`
`,e.jsx(n.p,{children:"If no descendants need context access, you can use it standalone:"}),`
`,e.jsx(s,{dark:!0,code:`
<PymChild />
`,language:"svelte"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": Context only flows down to descendants, not across to siblings. If you place ",e.jsx(n.code,{children:"<PymChild />"})," as a sibling to components that need ",e.jsx(n.code,{children:"usePymChildContext()"}),", those components won't be able to access the context."]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PymChild"})," component has the following properties."]}),`
`,e.jsx(c,{})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
