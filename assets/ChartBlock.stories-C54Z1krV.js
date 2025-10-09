import{p as f,f as p,a as v,V as g,s as l,b as d,d as _,W as w}from"./iframe-D_iF5c85.js";import{i as k}from"./lifecycle-DPT9lhMs.js";import{C as n}from"./ChartBlock-BSxk159m.js";import{D}from"./DatawrapperIframe-CELrtceV.js";import{c as b,d as $}from"./create-runtime-stories-cJTTi5Jk.js";import"./html-HzSgVQlL.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./Block-DaVU3fpD.js";import"./class-B9SFUanI.js";import"./attributes-BlXGg7Yy.js";const y='A basic wrapper for charts that includes, title, description, source, and notes. The default slot can be used to include any type of content or visualization between the provided text.\n\n```js\nimport { ChartBlock } from "@urbaninstitute/dataviz-components";\n```\n',c=(a,r=g)=>{n(a,w(r,{children:(t,o)=>{var e=F();d(t,e)},$$slots:{default:!0}}))},x={title:"Chart title",description:"Chart description",source:"Chart source",notes:"Chart notes"},B={title:"Components/ChartBlock",component:n,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","wide","full"],control:"select"}},args:x,parameters:{docs:{description:{component:y}},githubLink:{url:"/ChartBlock/ChartBlock.svelte"}}},{Story:s}=$();var F=p('<div style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;">Chart area</div>'),T=p("<!> <!> <!>",1);function h(a,r){f(r,!1),k();var t=T(),o=v(t);s(o,{name:"Default",get template(){return c},parameters:{__svelteCsf:{rawCode:`<ChartBlock {...args}>
  <div
    style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
  >
    Chart area
  </div>
</ChartBlock>`}}});var e=l(o,2);s(e,{name:"Custom text color",globals:{backgrounds:{value:"dark"}},args:{color:"#FFFFFF"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<ChartBlock {...args}>
  <div
    style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
  >
    Chart area
  </div>
</ChartBlock>`}}});var u=l(e,2);s(u,{name:"With a Datawrapper chart",args:{color:"#FFFFFF"},asChild:!0,children:(m,A)=>{n(m,{title:"Datawrapper chart",description:"This is what a Datawrapper looks like inside this component.",source:"Chart source",notes:"Chart notes",children:(C,W)=>{D(C,{title:"Datawrapper title",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"RMnkX"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ChartBlock
  title="Datawrapper chart"
  description="This is what a Datawrapper looks like inside this component."
  source="Chart source"
  notes="Chart notes"
>
  <DatawrapperIframe
    title="Datawrapper title"
    ariaLabel="This is an accessible title for the visualization"
    datawrapperId="RMnkX"
  />
</ChartBlock>`}}}),d(a,t),_()}h.__docgen={data:[],name:"ChartBlock.stories.svelte"};const i=b(h,B),V=["Default","CustomTextColor","WithADatawrapperChart"],q={...i.Default,tags:["svelte-csf-v5"]},G={...i.CustomTextColor,tags:["svelte-csf-v5"]},H={...i.WithADatawrapperChart,tags:["svelte-csf-v5"]};export{G as CustomTextColor,q as Default,H as WithADatawrapperChart,V as __namedExportsOrder,B as default};
