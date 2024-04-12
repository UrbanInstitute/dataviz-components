import{j as e}from"./jsx-runtime-Dmoxc5pY.js";import{u as a}from"./index-D2tyETxd.js";import{S as r}from"./Analytics.stories-dE5C8Y8v.js";import{M as s,d as c,e as o}from"./index-qsAWcS1s.js";import"./index-NH8Ck0Ec.js";import"./lifecycle-C5c7P8Xl.js";import"./spread-CgU5AtxT.js";import"./Analytics--XEbc9LT.js";import"./collect-stories-FKbactFq.js";import"./iframe-YnZF_xLk.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Analytics",of:r}),`
`,e.jsx(t.h1,{id:"analytics",children:"Analytics"}),`
`,e.jsx(t.p,{children:"A component that adds Urban Institute's Google Analytics to your page. This will enable tracking of page views and custom events in your project."}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Analytics"})," component has the following properties."]}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["By default, this will add Google analytics' ",e.jsx(t.code,{children:"gtag"})," to your page and fire a page view. If you are using Urban Institute's dataviz project template, you'll likely want to include this in your ",e.jsx(t.code,{children:"+layout.svelte"})," or on your ",e.jsx(t.code,{children:"+page.svelte"})," routes."]}),`
`,e.jsx(o,{dark:!0,code:`
<script>
import { Analytics } from "@urban-institute/dataviz-components";
<\/script>
<Analytics title="My project title" />
`,language:"html"}),`
`,e.jsxs(t.p,{children:["If you'd like to avoid firing a pageview because you're creating an en embed or for any other reason, you can do so by setting ",e.jsx(t.code,{children:"sendPageview"})," to ",e.jsx(t.code,{children:"false"}),"."]}),`
`,e.jsx(o,{dark:!0,code:`
<script>
import { Analytics } from "@urban-institute/dataviz-components";
<\/script>
<Analytics title="My project title" sendPageview={false}/>
`,language:"html"}),`
`,e.jsx(t.p,{children:"Anytime you have an event handler, use this one-line function call to send relevant data through to Google Analytics:"}),`
`,e.jsx(o,{dark:!0,code:`
import { logClickToGA } from "@urban-institute/dataviz-components";

/**
 * sends event data to GTM and GA. call in event handlers for each event type you wish to track.
 * A function that logs a click event to Google Analytics.
 * @param {HTMLElement} target The DOM element that triggered the event.
 * @param {string} eventName A string in the format "event_name--event_specifics" where "event_name is the type of event, such as "map_click" or "dropdown_select" and "event_specifics" refers to the selected option, region, or specific function.
 */
logClickToGA(target, eventName);
`,language:"js"}),`
`,e.jsx(t.p,{children:"An example of logClickToGA in action:"}),`
`,e.jsx(o,{dark:!0,code:`
import { logClickToGA } from "@urban-institute/dataviz-components";

myElement.addEventListener("click", (e) => {
  logClickToGA(
    e.target,
    "map_click--" + e.detail.hoverData.hoverCounty + ", " + e.detail.hoverData.hoverStateName
  );
});
`,language:"js"})]})}function C(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{C as default};
