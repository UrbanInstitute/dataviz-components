import{j as e}from"./iframe-Dh-CAoci.js";import{useMDXComponents as i}from"./index-DCqJ-R5M.js";import{M as s}from"./blocks-BljGgDPn.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"stores/reducedMotion"}),`
`,e.jsx(n.h1,{id:"prefers-reduced-motion-svelte-store",children:"prefers-reduced-motion Svelte Store"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/src/lib/stores/reducedMotion.js",rel:"nofollow",children:e.jsx(n.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsxs(n.p,{children:["A Svelte store that tracks the user's preference for reduced motion, adapted from ",e.jsx(n.a,{href:"https://geoffrich.net/posts/accessible-svelte-transitions/",rel:"nofollow",children:"Geoff Rich's Accessible Svelte Transitions article"}),"."]}),`
`,e.jsxs(n.p,{children:['Sometimes users may turn on "prefers-reduced-motion" in their accessibility settings. If this is this is the case, they expect to see no animations or transitions. This store uses ',e.jsx(n.code,{children:"window.matchMedia()"})," to track the user's preference for reduced motion and can be used for conditional rendering."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"In the example below, the tweened store can be used to animate a component position. If the user has reduced motion enabled, the animation duration is reduced to 0."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { reducedMotion } from "@urbaninstitute/dataviz-components/stores";
import { tweened } from "svelte/motion";

const tween = tweened(0, {
  duration: $reducedMotion ? 0 : 500,
  easing: cubicOut
});
`})}),`
`,e.jsx(n.h2,{id:"additional-css-for-prefers-reduced-motion",children:"Additional CSS for prefers-reduced-motion"}),`
`,e.jsxs(n.p,{children:["It's worth noting that CSS like the following will disable most native Svelte transitions and animations. The ",e.jsx(n.code,{children:"$reducedMotion"})," store above is useful if an animation function is not covered by this media query."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation-delay: 0ms !important;
    animation-duration: 1ms !important;
    transition: none !important;
  }
}
`})})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{c as default};
