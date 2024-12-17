import{j as e}from"./jsx-runtime-FTJKyVQ0.js";import{u as i}from"./index-B14ZinHf.js";import{M as s}from"./index-D6zoe723.js";import"./index-BbLjsSOQ.js";import"./iframe-BJfsxNw0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"stores/reducedMotion"}),`
`,e.jsx(t.h1,{id:"prefers-reduced-motion-svelte-store",children:"prefers-reduced-motion Svelte Store"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/UrbanInstitute/dataviz-components/blob/main/src/lib/stores/reducedMotion.js",rel:"nofollow",children:e.jsx(t.img,{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"github"})})}),`
`,e.jsxs(t.p,{children:["A Svelte store that tracks the user's preference for reduced motion, adapted from ",e.jsx(t.a,{href:"https://geoffrich.net/posts/accessible-svelte-transitions/",rel:"nofollow",children:"Geoff Rich's Accessible Svelte Transitions article"}),"."]}),`
`,e.jsxs(t.p,{children:['Sometimes users may turn on "prefers-reduced-motion" in their accessibility settings. If this is this is the case, they expect to see no animations or transitions. This store uses ',e.jsx(t.code,{children:"window.matchMedia()"})," to track the user's preference for reduced motion and can be used for conditional rendering."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"In the example below, the tweened store can be used to animate a component position. If the user has reduced motion enabled, the animation duration is reduced to 0."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { reducedMotion } from "@urbaninstitute/dataviz-components/stores";
import { tweened } from "svelte/motion";

const tween = tweened(0, {
  duration: $reducedMotion ? 0 : 500,
  easing: cubicOut
});
`})}),`
`,e.jsx(t.h2,{id:"additional-css-for-prefers-reduced-motion",children:"Additional CSS for prefers-reduced-motion"}),`
`,e.jsxs(t.p,{children:["It's worth noting that CSS like the following will disable most native Svelte transitions and animations. The ",e.jsx(t.code,{children:"$reducedMotion"})," store above is useful if an animation function is not covered by this media query."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation-delay: 0ms !important;
    animation-duration: 1ms !important;
    transition: none !important;
  }
}
`})})]})}function x(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
