import{j as e}from"./jsx-runtime-e4e18e17.js";import{M as s}from"./index-1539735a.js";import{u as i}from"./index-8c989e1f.js";import"./iframe-d54a418e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"stores/reducedMotion"}),`
`,e.jsx(n.h1,{id:"prefers-reduced-motion-svelte-store",children:"prefers-reduced-motion Svelte Store"}),`
`,e.jsxs(n.p,{children:["A Svelte store that tracks the user's preference for reduced motion, adapted from ",e.jsx(n.a,{href:"https://geoffrich.net/posts/accessible-svelte-transitions/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Geoff Rich's Accessible Svelte Transitions article"}),"."]}),`
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
`})})]})}function f(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{f as default};
