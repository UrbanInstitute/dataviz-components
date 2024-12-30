import{j as e}from"./jsx-runtime-0mqYSzCS.js";import{u as s}from"./index-D1_jMibn.js";import{S as r,D as i}from"./Scrolly.stories-DA3QkRQb.js";import{M as d,S as l,b as c,d as a}from"./index-BD5CtlDD.js";import"./index-CIjOG5ey.js";import"./iframe-CTGPT5OD.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dy1J9qof.js";import"./lifecycle-mCW1c9RL.js";import"./spread-CgU5AtxT.js";import"./Scrolly-Bpdd43QL.js";import"./each-CjkgdRJJ.js";import"./globals-D0QH3NT1.js";import"./Block-xppMl_dt.js";import"./collect-stories-DS3D1-He.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{component:void 0,of:r}),`
`,e.jsx(o.h1,{id:"scrolly",children:"Scrolly"}),`
`,e.jsxs(o.p,{children:['A component that can be used to create "scrolly" sections and pages. This component is a wrapper around the ',e.jsx(o.a,{href:"https://github.com/sveltejs/svelte-scroller",rel:"nofollow",children:"svelte-scroller"})," library. If your project has needs that go beyond what this component can support, you should consider using ",e.jsx(o.code,{children:"svelte-scroller"})," directly. But for many common scenarious, the options provided here should have you covered."]}),`
`,e.jsx(o.p,{children:"Basic usage:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<script>
  import { Scrolly } from "@urbaninstitute/dataviz-components";

  const slides = ["Slide 1", "Slide 2", "Slide 3"];

<\/script>
<Scrolly slides={slides}>
  <div
    slot="background"
    style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
  >
    Scrolly background
  </div>
</Scrolly>
`})}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"background-components",children:"Background components"}),`
`,e.jsxs(o.p,{children:["While this component provides much of what you need to get started with a scrolly segment, you'll need to create your own backgound component. This can range from a very simple component that displays an image or a chart, to something highly complex with bespoke animations and transitions. The sky is the limit, and how you build your background component is up to you and the needs of your project. There are a few core pieces of functionality this component provides that will help you out. The ",e.jsx(o.code,{children:"<Scrolly>"})," component provides key information about the current state of the scrolly via ",e.jsx(o.a,{href:"https://svelte.dev/docs/svelte#setcontext",rel:"nofollow",children:"Svelte's context api"}),", with a key of ",e.jsx(o.code,{children:"scrolly"}),", in the form of Svelte stores. This means you don't need to worry about ",e.jsx(o.code,{children:"let"})," bindings or passing the correct props to your slotted ",e.jsx(o.code,{children:"background"})," component inside your app. The following stores can be accessed from inside your background component:"]}),`
`,e.jsx(a,{children:`| store  | description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| index       | The index of the current slide. This variable can be used to determine what content should be displayed in the \`background\`|
| offset      | How far the section has scrolled past the threshold, as a value between 0 and 1. |
| progress |   How far the foreground has travelled, where 0 is the top of the foreground crossing \`top\`, and 1 is the bottom crossing \`bottom\`.|
| slideHeight | The height in pixels of the current slide based on browser conditions. Can be used for sizing content in the background.|
| slideWidth | The width in pixels of the current slide based on browser conditions. Can be used for sizing content in the background.|
`}),`
`,e.jsxs(o.p,{children:["Since these values are passed as stores, they can should be referenced using Svelte's ",e.jsx(o.code,{children:"$"})," store syntax:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { getContext } from "svelte";

// access stores from scrolly context
const { index, slideWidth } = getContext("scrolly");

// use $ store syntax in your component
console.log("The current index is", $index);
console.log("The slideWidth is", $slideWidth);

`})}),`
`,e.jsx(o.h2,{id:"custom-foregrounds",children:"Custom foregrounds"}),`
`,e.jsxs(o.p,{children:["By default, the foreground expects a simple string in the ",e.jsx(o.code,{children:"slides"})," array, and it renders the provided string (including any HTML formatting) within a ",e.jsx(o.code,{children:"<p>"})," element inside a basic text box. This default behaviour will work for many scenarios, but you might need more flexibility beyond including simple inline HTML inside a ",e.jsx(o.code,{children:"<p>"}),". If this is the case, you can override the default markup by making use of the ",e.jsx(o.code,{children:"foreground"})," slot of this component. Additionally, you can pass more complex data structures through the ",e.jsx(o.code,{children:"slides"})," prop and specify how these data should be rendered with a custom ",e.jsx(o.code,{children:"foreground"})," slot. The contents of the corresponding item in the array will be passed to your foreground ",e.jsx(o.code,{children:"slot"})," as a ",e.jsx(o.code,{children:"slide"})," prop. You can use this data in your custom markup like so:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<script>
  import { Scrolly } from "@urbaninstitute/dataviz-components";

  let slides = [
    {
      title: "Slide 1",
      body: "This is the body of slide 1"
    }, 
    {
      title: "Slide 2",
      body: "This is the body of slide 2"
    }, 
    {
      title: "Slide 3",
      body: "This is the body of slide 3"
    }
  ];
<\/script>
<Scrolly>
  <div
    slot="background"
    style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
  >
    Scrolly background
  </div>
  <div slot="foreground" class="custom-foreground-text-box" let:slide>
    <h2>{slide.title}</h2>
    <p>{slide.body}</p>
  </div>
</Scrolly>
`})})]})}function W(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{W as default};
