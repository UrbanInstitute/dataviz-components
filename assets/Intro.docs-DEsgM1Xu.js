import{j as e}from"./iframe-DkBoYltS.js";import{useMDXComponents as s}from"./index-Bzf7KsXA.js";import{M as i}from"./blocks-BbrjO7ga.js";import"./DatawrapperIframe-j9h6--Rf.js";import"./attributes-DhG7CSOU.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./lifecycle-BcE5ET0k.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
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
`,e.jsxs(n.p,{children:["You can either wrap your entire page with a ",e.jsx(n.code,{children:"<Theme>"})," instance, or you can wrap just the components you are using from this library to avoid conflicts with other project CSS."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/theming-theme--docs",children:"Read more about the Theme component here."})}),`
`,e.jsx(n.h2,{id:"contributing-to-this-library",children:"Contributing to this library"}),`
`,e.jsxs(n.p,{children:["We welcome contributions to this library! The ",e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/.github/pull_request_template.md",rel:"nofollow",children:"pull request template"})," requires explanation of changes and provides a checklist of tasks to ensure clean code and documentation. Please name all branches in ",e.jsx(n.code,{children:"kebab-case"}),', beginning with "patch", "feature", or "bugfix", and provide insightful commit messages.']}),`
`,e.jsx(n.h3,{id:"cli-based-command-for-creating-new-component-boilerplate",children:"CLI-based command for creating new component boilerplate"}),`
`,e.jsxs(n.p,{children:["To create three boilerplate files for a new component (",e.jsx(n.code,{children:"ComponentName.svelte"}),", ",e.jsx(n.code,{children:"ComponentName.stories.svelte"}),", and ",e.jsx(n.code,{children:"ComponentName.docs.md"}),"), run the following command:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run create-component
`})})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default};
