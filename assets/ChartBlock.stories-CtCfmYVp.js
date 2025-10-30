import{p as f,f as c,a as v,n as w,s as l,b as d,d as g,V as _}from"./iframe-BjxEKEQH.js";import{c as k,d as D}from"./create-runtime-stories-HPq0r60h.js";import{i as b}from"./lifecycle-hO6jUP98.js";import{C as n}from"./ChartBlock-BzdRr3rw.js";import{D as y}from"./DatawrapperIframe-DBrTT8wg.js";import"./html-CDri68dQ.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./Block-S085LgKA.js";import"./class-B9SFUanI.js";import"./attributes-UJeNkN1P.js";const x=`A basic wrapper for charts that includes, title, description, source, and notes. The \`children\` snippet can be used to include any type of content or visualization between the provided text.

\`\`\`js
import { ChartBlock } from "@urbaninstitute/dataviz-components";
\`\`\`

**Example:**

\`\`\`svelte
<ChartBlock title="My Chart" description="Chart description">
  {#snippet children()}
    <!-- Your chart content here -->
  {/snippet}
</ChartBlock>
\`\`\`
`,p=(a,r=w)=>{n(a,_(r,{children:t=>{var e=F();d(t,e)},$$slots:{default:!0}}))},B={title:"Chart title",description:"Chart description",source:"Chart source",notes:"Chart notes"},$={title:"Components/ChartBlock",component:n,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","wide","full"],control:"select"}},args:B,parameters:{docs:{description:{component:x}},githubLink:{url:"/ChartBlock/ChartBlock.svelte"}}},{Story:s}=D();var F=c('<div style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;">Chart area</div>'),T=c("<!> <!> <!>",1);function h(a,r){f(r,!1),b();var o=T(),t=v(o);s(t,{name:"Default",get template(){return p},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<ChartBlock {...args}>
  {#snippet children()}
    <div
      style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
    >
      Chart area
    </div>
  {/snippet}
</ChartBlock>`}}});var e=l(t,2);s(e,{name:"Custom text color",globals:{backgrounds:{value:"dark"}},args:{color:"#FFFFFF"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<ChartBlock {...args}>
  {#snippet children()}
    <div
      style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
    >
      Chart area
    </div>
  {/snippet}
</ChartBlock>`}}});var u=l(e,2);s(u,{name:"With a Datawrapper chart",args:{color:"#FFFFFF"},asChild:!0,children:(m,A)=>{n(m,{title:"Datawrapper chart",description:"This is what a Datawrapper looks like inside this component.",source:"Chart source",notes:"Chart notes",children:C=>{y(C,{title:"Datawrapper title",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"RMnkX"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ChartBlock
  title="Datawrapper chart"
  description="This is what a Datawrapper looks like inside this component."
  source="Chart source"
  notes="Chart notes"
>
  {#snippet children()}
    <DatawrapperIframe
      title="Datawrapper title"
      ariaLabel="This is an accessible title for the visualization"
      datawrapperId="RMnkX"
    />
  {/snippet}
</ChartBlock>`}}}),d(a,o),g()}h.__docgen={data:[],name:"ChartBlock.stories.svelte"};const i=k(h,$),V=["Default","CustomTextColor","WithADatawrapperChart"],Y={...i.Default,tags:["svelte-csf-v5"]},q={...i.CustomTextColor,tags:["svelte-csf-v5"]},G={...i.WithADatawrapperChart,tags:["svelte-csf-v5"]};export{q as CustomTextColor,Y as Default,G as WithADatawrapperChart,V as __namedExportsOrder,$ as default};
