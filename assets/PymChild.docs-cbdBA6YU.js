import{j as t}from"./jsx-runtime-0mqYSzCS.js";import{u as i}from"./index-D1_jMibn.js";import{S as s}from"./PymChild.stories-CySz7VEq.js";import{M as p,a as n,b as m}from"./index-BD5CtlDD.js";import"./index-CIjOG5ey.js";import"./iframe-CTGPT5OD.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dy1J9qof.js";import"./lifecycle-mCW1c9RL.js";import"./spread-CgU5AtxT.js";import"./PymChild-b1Kl_iKF.js";import"./collect-stories-DS3D1-He.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";function r(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:s}),`
`,t.jsx(o.h1,{id:"pymchild",children:"PymChild"}),`
`,t.jsxs(o.p,{children:["A component that adds ",t.jsx(o.a,{href:"http://blog.apps.npr.org/pym.js/",rel:"nofollow",children:"Pym.js"})," functionality to the current HTML web page."]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.p,{children:"In order to add PymChild functionality to your page, simply import and use this component in your top level component or route like this:"}),`
`,t.jsx(n,{dark:!0,code:`
<script>
  import { PymChild } from "@urbaninstitute/dataviz-components";
<\/script>
<PymChild />
`,language:"svelte"}),`
`,t.jsx(o.p,{children:"If you need to access the Pym child instance itself, you can access it by importing and using this component's store:"}),`
`,t.jsx(n,{dark:!0,code:`
import { pymChildStore } from "@urbaninstitute/dataviz-components/stores";

if ($pymChildStore) {
  $pymChildStore.sendHeight();
}
`,language:"js"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"PymChild"})," component has the following properties."]}),`
`,t.jsx(m,{})]})}function v(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(r,{...e})}):r(e)}export{v as default};
