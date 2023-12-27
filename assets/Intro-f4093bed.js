import{j as n}from"./jsx-runtime-5b6cb7c6.js";import{M as r}from"./index-37ab4802.js";import{u as a}from"./index-2b0483b3.js";import"./iframe-a0d74383.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";function o(e){const t=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code"},a(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Introduction"}),`
`,n.jsx(t.h1,{id:"urbaninstitutedataviz-components",children:"@UrbanInstitute/dataviz-components"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://github.com/UrbanInstitute/dataviz-components",target:"_blank",rel:"nofollow noopener noreferrer",children:n.jsx(t.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})}),`
`,n.jsx(t.a,{href:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components",target:"_blank",rel:"nofollow noopener noreferrer",children:n.jsx(t.img,{src:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components.svg",alt:"npm version"})}),`
`,n.jsx(t.img,{src:"https://github.com/UrbanInstitute/dataviz-components/actions/workflows/storybook-tests.yml/badge.svg",alt:"tests"})]}),`
`,n.jsxs(t.p,{children:["Welcome to the documentation for the ",n.jsx(t.a,{href:"https://www.urban.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Urban Institute"}),"'s data visualization component library. This library contains ",n.jsx(t.a,{href:"https://svelte.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Svelte"})," components for building custom data visualization projects."]}),`
`,n.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsx(t.li,{children:"Install"}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-bash",children:`npm install @urbaninstitute/dataviz-components
`})}),`
`,n.jsxs(t.ol,{start:"2",children:[`
`,n.jsx(t.li,{children:"Import components, and use them in your projects"}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<script>
  import { BasicDropdown } from "@UrbanInstitute/dataviz-components";

  const data = [
    { value: "Ohio", label: "Ohio" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "New York", label: "New York" },
    { value: "Maryland", label: "Maryland" }
  ];
<\/script>
<BasicDropdown
  {data}
  inline_label="Select a state"
  id="state-select"
/>
`})})]})}function b(e={}){const{wrapper:t}=Object.assign({},a(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{b as default};
