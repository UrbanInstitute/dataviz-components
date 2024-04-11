import{j as e}from"./jsx-runtime-DoO6cB-U.js";import{u as s}from"./index-DVFiLL-L.js";import{M as i}from"./index-BZZn_uMy.js";import"./DatawrapperIframe-CYfFQ1e1.js";import"./iframe-Bm-fr-FC.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";import"./index-jRX6IYBn.js";import"./lifecycle-DGPdAwEn.js";import"./spread-CgU5AtxT.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"urbaninstitutedataviz-components",children:"@UrbanInstitute/dataviz-components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components",rel:"nofollow",children:e.jsx(n.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})}),`
`,e.jsx(n.a,{href:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components",rel:"nofollow",children:e.jsx(n.img,{src:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components.svg",alt:"npm version"})}),`
`,e.jsx(n.img,{src:"https://github.com/UrbanInstitute/dataviz-components/actions/workflows/storybook-tests.yml/badge.svg",alt:"tests"})]}),`
`,e.jsxs(n.p,{children:["Welcome to the documentation for the ",e.jsx(n.a,{href:"https://www.urban.org",rel:"nofollow",children:"Urban Institute"}),"'s data visualization component library. This library contains ",e.jsx(n.a,{href:"https://svelte.dev/",rel:"nofollow",children:"Svelte"})," components for building custom data visualization projects."]}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/theming-theme--docs",children:"Read more about the Theme component here."})})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{f as default};
