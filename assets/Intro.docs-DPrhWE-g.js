import{j as e}from"./jsx-runtime-WiDF21rh.js";import{u as s}from"./index-UR4ZlisH.js";import{M as i}from"./index-Bri16zoK.js";import"./DatawrapperIframe-QmnsR3dQ.js";import"./index-C_XRhBvo.js";import"./iframe-BfVtOPWV.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";import"./index-CF9TYszN.js";import"./lifecycle-DDpknddb.js";import"./spread-CgU5AtxT.js";function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx(t.h1,{id:"urbaninstitutedataviz-components",children:"@UrbanInstitute/dataviz-components"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/UrbanInstitute/dataviz-components",rel:"nofollow",children:e.jsx(t.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})}),`
`,e.jsx(t.a,{href:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components",rel:"nofollow",children:e.jsx(t.img,{src:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components.svg",alt:"npm version"})}),`
`,e.jsx(t.img,{src:"https://github.com/UrbanInstitute/dataviz-components/actions/workflows/storybook-tests.yml/badge.svg",alt:"tests"})]}),`
`,e.jsxs(t.p,{children:["Welcome to the documentation for the ",e.jsx(t.a,{href:"https://www.urban.org",rel:"nofollow",children:"Urban Institute"}),"'s data visualization component library. This library contains ",e.jsx(t.a,{href:"https://svelte.dev/",rel:"nofollow",children:"Svelte"})," components for building custom data visualization projects."]}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.p,{children:"Install this library by running the following command in your own project:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @urbaninstitute/dataviz-components
`})}),`
`,e.jsx(t.h2,{id:"using-components-in-your-svelte-project",children:"Using components in your Svelte project"}),`
`,e.jsxs(t.p,{children:["These components depend on a set of CSS styles to render as they are documented here. In order to use them in your own project, you'll need to import the components you want to use, along with the ",e.jsx(t.code,{children:"<Theme />"})," component, which provides the necessary CSS defaults."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-svelte",children:`<script>
  import { Theme, BasicDropdown } from "@UrbanInstitute/dataviz-components";

  const data = [
    { value: "Ohio", label: "Ohio" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "New York", label: "New York" },
    { value: "Maryland", label: "Maryland" }
  ];
<\/script>

<Theme>
  <BasicDropdown {data} inlineLabel="Select a state" id="state-select" />
</Theme>
`})}),`
`,e.jsxs(t.p,{children:["You can either wrap your entire page with a ",e.jsx(t.code,{children:"<Theme>"})," instance, or you can wrap just the components you are using from this library to avoid conflicts with other project CSS."]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"/docs/theming-theme--docs",children:"Read more about the Theme component here."})})]})}function f(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{f as default};
