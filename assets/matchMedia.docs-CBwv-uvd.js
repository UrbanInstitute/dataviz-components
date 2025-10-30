import{j as e}from"./iframe-BjxEKEQH.js";import{useMDXComponents as o}from"./index-IebOMRBN.js";import{M as s}from"./blocks-BUt1p2bg.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"context/matchMedia"}),`
`,e.jsx(n.h1,{id:"media-query-context-matchmedia",children:"Media Query Context (matchMedia)"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/src/lib/context/matchMediaContext.svelte.js",rel:"nofollow",children:e.jsx(n.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsxs(n.p,{children:["A rune-based context module that tracks media query preferences using the browser's ",e.jsx(n.code,{children:"window.matchMedia()"})," API, adapted from ",e.jsx(n.a,{href:"https://geoffrich.net/posts/accessible-svelte-transitions/",rel:"nofollow",children:"Geoff Rich's Accessible Svelte Transitions article"}),"."]}),`
`,e.jsxs(n.p,{children:["This module currently tracks the user's ",e.jsx(n.code,{children:"prefers-reduced-motion"})," preference, with a design that supports adding additional media queries in the future (e.g., ",e.jsx(n.code,{children:"prefers-color-scheme"}),", ",e.jsx(n.code,{children:"prefers-contrast"}),", viewport sizes)."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"This module provides two functions for managing media query context:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"createMatchMediaContext()"})," - Creates and initializes the media query context. Call this once at the root of your component tree (e.g., in your app layout)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useMatchMediaContext()"})," - Gets the media query context. Call this in any child component that needs to access media query preferences."]}),`
`]}),`
`,e.jsx(n.h3,{id:"setup",children:"Setup"}),`
`,e.jsx(n.p,{children:"First, initialize the media query context in your root layout:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<!-- +layout.svelte -->
<script>
  import { createMatchMediaContext } from "@urbaninstitute/dataviz-components/context";

  // Initialize media query context for the entire app
  createMatchMediaContext();
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"using-in-components",children:"Using in Components"}),`
`,e.jsx(n.p,{children:"Then, in any child component, access the media query context:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { useMatchMediaContext } from "@urbaninstitute/dataviz-components/context";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const media = useMatchMediaContext();

  const tween = tweened(0, {
    duration: media.reducedMotion ? 0 : 500,
    easing: cubicOut
  });
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"available-properties",children:"Available Properties"}),`
`,e.jsx(n.p,{children:"The media query context currently provides:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reducedMotion"})," (boolean) - ",e.jsx(n.code,{children:"true"}),' when the user has enabled "prefers-reduced-motion" in their accessibility settings']}),`
`]}),`
`,e.jsx(n.h2,{id:"additional-css-for-prefers-reduced-motion",children:"Additional CSS for prefers-reduced-motion"}),`
`,e.jsxs(n.p,{children:["It's worth noting that CSS like the following will disable most native Svelte transitions and animations. The ",e.jsx(n.code,{children:"reducedMotion"})," state above is useful if an animation function is not covered by this media query."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation-delay: 0ms !important;
    animation-duration: 1ms !important;
    transition: none !important;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"deprecated-api",children:"Deprecated API"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Warning:"})," The legacy ",e.jsx(n.code,{children:"reducedMotion"})," readable store is deprecated and will be removed in a future major version. Please migrate to ",e.jsx(n.code,{children:"createMatchMediaContext()"}),"/",e.jsx(n.code,{children:"useMatchMediaContext()"})," as shown above."]}),`
`]}),`
`,e.jsx(n.p,{children:"For backward compatibility, the legacy Svelte 4 readable store is still available:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { reducedMotion } from "@urbaninstitute/dataviz-components/stores";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const tween = tweened(0, {
    duration: $reducedMotion ? 0 : 500,
    easing: cubicOut
  });
<\/script>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Migration path:"})}),`
`,e.jsxs(n.p,{children:["This legacy pattern requires no setup and uses Svelte's ",e.jsx(n.code,{children:"$store"})," subscription syntax. However, it does not clean up properly in all contexts and doesn't support multiple component trees."]}),`
`,e.jsx(n.p,{children:"To migrate:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"createMatchMediaContext()"})," to your root layout (one time setup)"]}),`
`,e.jsxs(n.li,{children:["Replace ",e.jsx(n.code,{children:"import { reducedMotion }"})," with ",e.jsx(n.code,{children:"import { useMatchMediaContext }"})," from ",e.jsx(n.code,{children:"@urbaninstitute/dataviz-components/context"})]}),`
`,e.jsxs(n.li,{children:["Replace ",e.jsx(n.code,{children:"$reducedMotion"})," with ",e.jsx(n.code,{children:"media.reducedMotion"})," (where ",e.jsx(n.code,{children:"const media = useMatchMediaContext()"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/docs/runes-breaking-changes.md",rel:"nofollow",children:"breaking changes log"})," for complete migration examples."]})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
