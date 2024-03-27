import{j as e}from"./jsx-runtime-587a15cc.js";import{M as s}from"./index-85c0d2fa.js";import"./DatawrapperIframe-70ad2fb3.js";import{u as r}from"./index-69d9fc06.js";import"./iframe-cf1817b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";import"./index-e3b48b1c.js";import"./lifecycle-6e31b59c.js";import"./spread-8a54911c.js";function o(t){const n=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",pre:"pre",code:"code"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"urbaninstitutedataviz-components",children:"@UrbanInstitute/dataviz-components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})}),`
`,e.jsx(n.a,{href:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components.svg",alt:"npm version"})}),`
`,e.jsx(n.img,{src:"https://github.com/UrbanInstitute/dataviz-components/actions/workflows/storybook-tests.yml/badge.svg",alt:"tests"})]}),`
`,e.jsxs(n.p,{children:["Welcome to the documentation for the ",e.jsx(n.a,{href:"https://www.urban.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Urban Institute"}),"'s data visualization component library. This library contains ",e.jsx(n.a,{href:"https://svelte.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Svelte"})," components for building custom data visualization projects."]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Install this library by running the following command in your own project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @urbaninstitute/dataviz-components
`})}),`
`,e.jsx(n.h2,{id:"using-components-in-your-svelte-project",children:"Using components in your Svelte project"}),`
`,e.jsxs(n.p,{children:["These components depend on a set of CSS styles to render as they are documented here. In order to use them in your own project, you'll need to import the components you want to use, along with the ",e.jsx(n.code,{children:"<Theme />"})," component, which provides the necessary CSS defaults."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script>
  import { Theme, BasicDropdown } from "@UrbanInstitute/dataviz-components";

  const data = [
    { value: "Ohio", label: "Ohio" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "New York", label: "New York" },
    { value: "Maryland", label: "Maryland" }
  ];
<\/script>
<Theme>
  <BasicDropdown
    {data}
    inline_label="Select a state"
    id="state-select"
  />
</Theme>
`})}),`
`,e.jsxs(n.p,{children:["You can either wrap your entire page with a ",e.jsx(n.code,{children:"<Theme>"})," instance, or you can wrap just the components you are using from this library to avoid conflicts with other project CSS."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/theming-theme--docs",children:"Read more about the Theme component here."})})]})}function f(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{f as default};
