import{j as e}from"./iframe-BjxEKEQH.js";import{useMDXComponents as s}from"./index-IebOMRBN.js";import{S as r,$ as i}from"./Scrolly.stories-DGZiO7RI.js";import{M as l,S as d,b as c,d as a}from"./blocks-BUt1p2bg.js";import"./create-runtime-stories-HPq0r60h.js";import"./lifecycle-hO6jUP98.js";import"./Scrolly-dlw8WA2s.js";import"./each-DC_8OmU5.js";import"./html-CDri68dQ.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./style-CNURdi_Z.js";import"./window-C-tkelu3.js";import"./slot-BP_Qo1ZM.js";import"./this-DGLcOT4Q.js";import"./Block-S085LgKA.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"scrolly",children:"Scrolly"}),`
`,e.jsxs(n.p,{children:['A component that can be used to create "scrolly" sections and pages. This component is a wrapper around the ',e.jsx(n.a,{href:"https://github.com/sveltejs/svelte-scroller",rel:"nofollow",children:"svelte-scroller"})," library with a rune-based ",e.jsx(n.code,{children:"ScrollyContext"})," under the hood. If you need behavior beyond what is provided here, compose directly with ",e.jsx(n.code,{children:"svelte-scroller"}),", but for most editorial scrollytelling use cases this component is designed to be the starting point. Customization happens through snippet props and the context helper described below."]}),`
`,e.jsx(n.p,{children:"Basic usage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { Scrolly } from "@urbaninstitute/dataviz-components";

  const slides = ["Slide 1", "Slide 2", "Slide 3"];
<\/script>

<Scrolly {slides}>
  {#snippet background()}
    <div
      style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
    >
      Scrolly background
    </div>
  {/snippet}
</Scrolly>
`})}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"background-components",children:"Background components"}),`
`,e.jsxs(n.p,{children:["While this component provides much of what you need to get started with a scrolly segment, you'll supply your own background functionality via the ",e.jsx(n.code,{children:"background"})," snippet. The ",e.jsx(n.code,{children:"<Scrolly>"})," component creates a rune-based context class (",e.jsx(n.code,{children:"createScrollyContext()"}),") and exposes it through the ",e.jsx(n.code,{children:"useScrollyContext()"})," helper. Call that helper inside any descendant (for example, your background component) to read reactive values without juggling stores or prop drilling. The context instance exposes the following properties:"]}),`
`,e.jsx(a,{children:`| property    | description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| index       | The zero-based index of the active slide. Use this to coordinate scene changes in the background.|
| offset      | How far the current slide has scrolled past the threshold (0–1). Useful for triggering progressive animations.|
| progress    | How far the foreground has travelled overall, where 0 is the top crossing \`top\` and 1 is the bottom crossing \`bottom\`.|
| slideHeight | The height in pixels of the current slide. Use for sizing or positioning background content.|
| slideWidth  | The width in pixels of the current slide.|
| innerHeight | The viewport height in pixels.|
`}),`
`,e.jsxs(n.p,{children:["Access these values by calling the ",e.jsx(n.code,{children:"useScrollyContext()"})," helper function from within a descendant component or snippet:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { useScrollyContext } from "@urbaninstitute/dataviz-components/context";
  const scrolly = useScrollyContext();
<\/script>

<div>
  <p>Current slide: {scrolly.index + 1}</p>
  <p>Progress: {Math.round(scrolly.progress * 100)}%</p>
</div>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This is a breaking change from previous versions. The old API using ",e.jsx(n.code,{children:'getContext("scrolly")'})," with Svelte stores is no longer supported. See the migration guide below for upgrade instructions."]}),`
`,e.jsx(n.h2,{id:"custom-foregrounds",children:"Custom foregrounds"}),`
`,e.jsxs(n.p,{children:["By default, the foreground expects a simple string in the ",e.jsx(n.code,{children:"slides"})," array, and it renders the provided string (including any HTML formatting) within a ",e.jsx(n.code,{children:"<p>"})," element inside a basic text box. This default behaviour will work for many scenarios, but you might need more flexibility beyond including simple inline HTML inside a ",e.jsx(n.code,{children:"<p>"}),". If this is the case, you can override the default markup by making use of the ",e.jsx(n.code,{children:"foreground"})," snippet prop. Additionally, you can pass more complex data structures through the ",e.jsx(n.code,{children:"slides"})," prop and specify how these data should be rendered with a custom ",e.jsx(n.code,{children:"foreground"})," snippet. The contents of the corresponding item in the array will be passed to your foreground snippet along with the slide index. You can use this data in your custom markup like so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
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

<Scrolly {slides}>
  {#snippet background()}
    <div
      style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
    >
      Scrolly background
    </div>
  {/snippet}

  {#snippet foreground(slide, index)}
    <div class="custom-foreground-text-box">
      <h2>{slide.title}</h2>
      <p>{slide.body}</p>
      <small>Slide {index + 1}</small>
    </div>
  {/snippet}
</Scrolly>
`})}),`
`,e.jsx(n.h2,{id:"migration-guide",children:"Migration Guide"}),`
`,e.jsx(n.p,{children:"If you're upgrading from a previous version of this component, here are the breaking changes and how to update your code:"}),`
`,e.jsx(n.h3,{id:"1-background-slot--background-snippet",children:"1. Background slot → background snippet"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<Scrolly {slides}>
  <div slot="background">Background content</div>
</Scrolly>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<Scrolly {slides}>
  {#snippet background()}
    <div>Background content</div>
  {/snippet}
</Scrolly>
`})}),`
`,e.jsx(n.h3,{id:"2-foreground-slot--foreground-snippet",children:"2. Foreground slot → foreground snippet"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<Scrolly {slides}>
  <div slot="foreground" let:slide>
    <h2>{slide.title}</h2>
  </div>
</Scrolly>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<Scrolly {slides}>
  {#snippet foreground(slide, index)}
    <div>
      <h2>{slide.title}</h2>
    </div>
  {/snippet}
</Scrolly>
`})}),`
`,e.jsx(n.h3,{id:"3-context-api-getcontext--usescrollycontext",children:"3. Context API: getContext → useScrollyContext"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { getContext } from "svelte";

  const { index, offset, progress, slideHeight, slideWidth } = getContext("scrolly");

  // Use with $ store syntax
  console.log($index);
<\/script>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  import { useScrollyContext } from "@urbaninstitute/dataviz-components/context";

  const scrolly = useScrollyContext();

  // Use properties directly (reactive)
  console.log(scrolly.index);
<\/script>
`})})]})}function M(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{M as default};
