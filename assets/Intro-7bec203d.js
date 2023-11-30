import{d as u,M as h}from"./index-320d99ff.js";import{u as p}from"./index-742a5bd6.js";import"./iframe-86ea6fd9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=u,f=Symbol.for("react.element"),j=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,g=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function m(t,n,i){var r,o={},a=null,l=null;i!==void 0&&(a=""+i),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)x.call(n,r)&&!v.hasOwnProperty(r)&&(o[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:f,type:t,key:a,ref:l,props:o,_owner:g.current}}s.Fragment=j;s.jsx=m;s.jsxs=m;d.exports=s;var e=d.exports;function c(t){const n=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"urbaninstitutedataviz-components",children:"@UrbanInstitute/dataviz-components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})}),`
`,e.jsx(n.a,{href:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badge.fury.io/js/@urbaninstitute%2Fdataviz-components.svg",alt:"npm version"})}),`
`,e.jsx(n.img,{src:"https://github.com/UrbanInstitute/dataviz-components/actions/workflows/storybook-tests.yml/badge.svg",alt:"tests"})]}),`
`,e.jsxs(n.p,{children:["Welcome to the documentation for the ",e.jsx(n.a,{href:"https://www.urban.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Urban Institute"}),"'s data visualization component library. This library contains ",e.jsx(n.a,{href:"https://svelte.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Svelte"})," components for building custom data visualization projects."]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Install"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @urbaninstitute/dataviz-components
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Import components, and use them in your projects"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script>
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
`})})]})}function M(t={}){const{wrapper:n}=Object.assign({},p(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(c,t)})):c(t)}export{M as default};
