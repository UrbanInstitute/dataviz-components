import{j as t}from"./iframe-D_iF5c85.js";import{useMDXComponents as l}from"./index-hTQgkHaY.js";import{M as r,a as n,b as a,C as e}from"./blocks-BjWm_H-J.js";import{s as p,$ as d,a as h,b as c,c as m,d as u,e as x,f as g}from"./Tooltip.stories-Cx3ChvL1.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./style-CNURdi_Z.js";import"./this-BBCWgB8B.js";import"./lifecycle-DPT9lhMs.js";import"./Tooltip-Dc-_iO2O.js";import"./html-HzSgVQlL.js";import"./window-DPTPwaep.js";import"./create-runtime-stories-cJTTi5Jk.js";import"./BasicDropdown-BV9-kScM.js";import"./each-B1oKFb8M.js";import"./attributes-BlXGg7Yy.js";import"./misc-B3v2RBLd.js";import"./urbanColors-BkxYcPwH.js";import"./Block-DaVU3fpD.js";import"./DatawrapperIframe-CELrtceV.js";import"./HeadingAlt-B3s-cwVt.js";import"./IconPlus-H3PVDhId.js";import"./IconMinus-C_ALby8P.js";import"./IconClose-0BE569Ao.js";import"./IconSearch-D2taTaTp.js";import"./LogoTPCBadge-Cv3HojDc.js";import"./LogoUrbanBadge-Bi-xGI2B.js";import"./LogoUrbanAnimated-CMdd7yyu.js";import"./LogoUrban-BMoE0jVd.js";import"./LogoUrbanWide-BHp9lSVx.js";import"./Navbar-CuQe5N91.js";import"./ProjectCredits-ZoBGb6Qv.js";import"./TextBlock-DH-7zvxt.js";import"./ReturnTop-BZ2xwKgh.js";import"./Scorecard-BPpEdO58.js";import"./SocialShare-DP__719P.js";import"./Button-BaoQD_bw.js";import"./ChartBlock-BSxk159m.js";import"./Meta-UJtWWVZM.js";import"./svelte-head-CrqWe_fm.js";import"./Toggle-kFPVefLV.js";import"./Scrolly-B3tX4heq.js";import"./Analytics-BtQvuFGM.js";import"./Headline-FQMShgyj.js";import"./PymChild-DrAZ8mRg.js";import"./LoadingWrapper-BtRosSEG.js";import"./AxisY-BU7-4rF7.js";import"./AxisX-D93YsPX7.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Tooltip",of:p}),`
`,t.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,t.jsx(o.p,{children:"A component that displays text or other HTML content inside a small, tooltip-style popup box that can be positioned dynamically on the page. By default, the tooltip calculates its position relative to the edges of the viewport and will adjust its orientation to avoid overflowing the viewport if possible."}),`
`,t.jsx(o.h2,{id:"basic-usage",children:"Basic usage"}),`
`,t.jsx(o.p,{children:"First, import the component into your project:"}),`
`,t.jsx(n,{language:"javascript",dark:!0,code:`
import { Tooltip } from "@urbaninstitute/dataviz-components";
`}),`
`,t.jsx(o.p,{children:"At minimum you'll need to provide a position and content for the tooltip. The simplest form of this is to specify an x and y position (relative to the dimensions of the HTML document itselt) and some text content as the primary slot/child of the component:"}),`
`,t.jsx(n,{language:"svelte",dark:!0,code:`
<Tooltip x={200} y={200} >
This is a tooltip
</Tooltip>
`}),`
`,t.jsx(o.p,{children:"This will render a tooltip positioned 200px from the left edge and 200px from the top of the document. But this is unlikely to be useful in a real-world context. Its much more common that you will want to position a tooltip based on either a pointer event or aligned to an existing element on the page. More on that below."}),`
`,t.jsx(o.h3,{id:"a-note-on-the-following-examples",children:"A note on the following examples"}),`
`,t.jsxs(o.p,{children:["StorybookJS (the tool that this library uses to create the documentation and examples you are reading right now) wraps all of the following examples indside a container with ",t.jsx(o.code,{children:"overflow: hidden;"}),". This means that some of the tooltips may be cut off in a way that makes them seem like they aren't functioning correctly. Since most project code can easily avoid the situation where a tooltip is inside an ",t.jsx(o.code,{children:"overflow: hidden"}),' container, the examples will mostly ignore this. If your project does need to handle for this situation, take a look at the "Contain in parent" example below.']}),`
`,t.jsx(o.h2,{id:"component-props",children:"Component props"}),`
`,t.jsx(o.p,{children:"In addition to content and position, this component supports a good bit of customization through the varius props it exposes:"}),`
`,t.jsx(a,{}),`
`,t.jsx(o.h2,{id:"rendering-tooltips-based-on-a-mouse-event",children:"Rendering tooltips based on a mouse event"}),`
`,t.jsxs(o.p,{children:["One of the most common uses for tooltips is to display some type of detail or help text when a user mouses over certain elements on a page. To set this up, first create some variables in your component to hold the current state of the tooltip, as well as some callback functions that will update these variables. Note that you'll want to capture the ",t.jsx(o.code,{children:"pageX"})," and ",t.jsx(o.code,{children:"pageY"})," properties from the pointer event to position your tooltip correctly."]}),`
`,t.jsx(n,{dark:!0,code:`
let tooltipX;
let tooltipY;
let tooltipContent = "This is a tooltip";

function handleMousemove(e) {
tooltipX = e.pageX;
tooltipY = e.pageY;
}

function handleMouseout(e) {
tooltipX = undefined;
tooltipY = undefined;
}
`,language:"javascript"}),`
`,t.jsx(o.p,{children:"Next, attach some event listeners to the elements you'd like to use to trigger a tooltip."}),`
`,t.jsx(n,{language:"svelte",dark:!0,code:`
<div on:mousemove={handleMousemove} on:mouseout={handleMouseout}>
<p>Hover me to see tooltip</p>
</div>
`}),`
`,t.jsxs(o.p,{children:["And finally, add the tooltip to your page by rendering it conditionally based on the ",t.jsx(o.code,{children:"tooltipX"})," and ",t.jsx(o.code,{children:"tooltipY"})," variables:"]}),`
`,t.jsx(n,{language:"svelte",dark:!0,code:`
{#if tooltipX && tooltipY}
<Tooltip x={tooltipX} y={tooltipY}>
  {tooltipContent}
</Tooltip>
{/if}
`}),`
`,t.jsx(o.p,{children:"Putting this all together (with a few extra CSS rules to make this usable), a simple tooltip implementation might look like this:"}),`
`,t.jsx(e,{sourceState:"shown",of:d,source:{code:`
<div class="wrapper" on:mousemove={handleMousemove} on:mouseout={handleMouseout} style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;">
<p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
<Tooltip x={tooltipX} y={tooltipY}>{tooltipContent}</Tooltip>
{/if}
`}}),`
`,t.jsx(o.h2,{id:"dark-style-tooltip",children:"Dark style tooltip"}),`
`,t.jsxs(o.p,{children:["Setting the ",t.jsx(o.code,{children:"style"})," prop to ",t.jsx(o.code,{children:'"dark"'})," will render the tooltip in Urban's standard dark style:"]}),`
`,t.jsx(e,{sourceState:"shown",of:h,source:{code:`
<div class="wrapper" on:mousemove={handleMousemove} on:mouseout={handleMouseout} style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;">
<p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
<Tooltip x={tooltipX} y={tooltipY}>{tooltipContent}</Tooltip>
{/if}
`}}),`
`,t.jsx(o.h2,{id:"custom-html",children:"Custom HTML"}),`
`,t.jsx(o.p,{children:"The content of the tooltip can include custom HTML rather than just text:"}),`
`,t.jsx(e,{sourceState:"shown",of:c}),`
`,t.jsx(o.h2,{id:"static-orientation",children:"Static orientation"}),`
`,t.jsxs(o.p,{children:["You can override the automatic edge detection and dynamic orientation calculations and force the tooltip to orient itself with any of the valid ",t.jsx(o.code,{children:"orientation"})," prop values."]}),`
`,t.jsx(e,{sourceState:"shown",of:m,source:{code:`
<div class="wrapper" on:mousemove={handleMousemove} on:mouseout={handleMouseout} style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;">
<p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
<Tooltip x={tooltipX} y={tooltipY} orientation="left" style="dark">This tooltip is oriented to the left</Tooltip>
{/if}
`}}),`
`,t.jsx(o.h2,{id:"contain-in-parent",children:"Contain in parent"}),`
`,t.jsxs(o.p,{children:["Sometimes you'll encounter a use case where the viewport edge detection isn't quite enough to prevent the tooltip from being obscured. One such case is when the tooltip is placed inside a containing element with ",t.jsx(o.code,{children:"overflow"})," set to ",t.jsx(o.code,{children:"hidden"}),". For these situations, you can force the tooltip to adjust its orientation based on its parent element rather than the viewport by setting ",t.jsx(o.code,{children:"containParent"})," to ",t.jsx(o.code,{children:"true"}),"."]}),`
`,t.jsx(e,{sourceState:"shown",of:u,source:{code:`
<div
class="wrapper"
style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"
on:mousemove={handleMousemove}
on:mouseout={handleMouseout}
>
<p>Hover me to see tooltip</p>
{#if tooltipX && tooltipY}
<Tooltip
  content="This tooltip is contained by parent"
  containParent
  x={tooltipX}
  y={tooltipY}
/>
{/if}
</div>
`}}),`
`,t.jsx(o.h2,{id:"pin-to-element",children:"Pin to element"}),`
`,t.jsxs(o.p,{children:["Sometimes you'll want to position a tooltip based on another DOM node rather than a cursor position. Instead of passing ",t.jsx(o.code,{children:"x"})," and ",t.jsx(o.code,{children:"y"})," props, this component also supports positioning by providing an ",t.jsx(o.code,{children:"el"})," property. The tooltip will calculate the position of the element and position itself accordingly. Creating a tooltip that shows and hides when a button is clicked could be acheived by creating a variable to track the state of the tooltip, as well as the element to be used for positioning."]}),`
`,t.jsx(n,{language:"javascript",dark:!0,code:`
let pinEl;
let showPinned = false;
`}),`
`,t.jsx(e,{sourceState:"shown",of:x,source:{code:`
<div
class="wrapper"
style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
>
<div bind:this={pinEl} style="display: inline-block">
  <Button on:click={() => (showPinned = !showPinned)}>Click me</Button>
</div>
</div>
{#if showPinned}
<Tooltip elOffset={5} el={pinEl} >This tooltip is pinned to an existing element</Tooltip>
{/if}
`}}),`
`,t.jsx(o.h2,{id:"tooltip-override",children:"Tooltip override"}),`
`,t.jsxs(o.p,{children:["Finally, if you want to take advantage of this component's positioning logic and edge detection, but you need more custom control of the markup, style and content of the tooltip itself, you can override all of the default HTML with the ",t.jsx(o.code,{children:"tooltipOverride"})," slot."]}),`
`,t.jsx(e,{sourceState:"shown",of:g,source:{code:`
<div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;" on:mousemove={handleMousemove} on:mouseout={handleMouseout}>
<p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
<Tooltip x={tooltipX} y={tooltipY} size="large">
  <svelte:fragment let:orientation slot="tooltipOverride">
    <div
      class="custom-tooltip {orientation}"
      style="background: {urbanColors.gray_shade_lighter}; padding: var(--spacing-2); border: solid 2px {urbanColors.magenta}"
    >
      <h5 style="margin: 0;">This is a completely custom tooltip</h5>
      <p style="font-size: var(--font-size-small);">
        Markup and style is up to me, but positioning is still provided by the component.
      </p>
      <Button>Custom</Button>
    </div>
  </svelte:fragment>
</Tooltip>
{/if}
`}})]})}function ht(i={}){const{wrapper:o}={...l(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(s,{...i})}):s(i)}export{ht as default};
