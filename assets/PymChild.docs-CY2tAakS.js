import{j as t}from"./iframe-Dh-CAoci.js";import{useMDXComponents as i}from"./index-DCqJ-R5M.js";import{S as s}from"./PymChild.stories-BrIjItIL.js";import{M as p,a as n,b as a}from"./blocks-BljGgDPn.js";import"./lifecycle-rtcBtEMy.js";import"./PymChild-BJyR1PNo.js";import"./create-runtime-stories-Ee3127Pv.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:s}),`
`,t.jsx(e.h1,{id:"pymchild",children:"PymChild"}),`
`,t.jsxs(e.p,{children:["A component that adds ",t.jsx(e.a,{href:"http://blog.apps.npr.org/pym.js/",rel:"nofollow",children:"Pym.js"})," functionality to the current HTML web page."]}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.p,{children:"In order to add PymChild functionality to your page, simply import and use this component in your top level component or route like this:"}),`
`,t.jsx(n,{dark:!0,code:`
<script>
import { PymChild } from "@urbaninstitute/dataviz-components";
<\/script>
<PymChild />
`,language:"svelte"}),`
`,t.jsx(e.p,{children:"If you need to access the Pym child instance itself, you can access it by importing and using this component's store:"}),`
`,t.jsx(n,{dark:!0,code:`
import { pymChildStore } from "@urbaninstitute/dataviz-components/stores";

if ($pymChildStore) {
$pymChildStore.sendHeight();
}
`,language:"js"}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"PymChild"})," component has the following properties."]}),`
`,t.jsx(a,{})]})}function y(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{y as default};
