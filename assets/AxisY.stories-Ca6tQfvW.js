import{p as l,n as m,a as p,f as d,w as c,c as f,d as y}from"./iframe-Dwb2GjWe.js";import{c as u,d as x}from"./create-runtime-stories-DVwOBNxa.js";import{i as v}from"./lifecycle-3B0MVNSh.js";import{A as o}from"./AxisY-BIeNEQrM.js";import{L as g,S as h,d as k}from"./data-DB2cB3Vk.js";import"./preload-helper-Dp1pzeXC.js";import"./each-VWhaf5kD.js";import"./attributes-6Paf-c-d.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./slot-BP_Qo1ZM.js";import"./size-B3ABQTmx.js";import"./this-PCuW4UVg.js";import"./index-_doEQLKC.js";import"./init-DewmRu03.js";import"./linear-zaFmwBME.js";import"./string-BqOgh9tw.js";import"./pow-BRLi4QyV.js";const _=`## Usage

\`\`\`js
import { AxisY } from "@urbaninstitute/dataviz-components";
\`\`\`

## Want to update axis style straight from the Layercake repo?

Use this css instead:

\`\`\`js
<style>
    .tick, .axis-label {
      font-size: 12px;
      font-family: var(--font-family-sans-serif);
    }

    .tick line {
      stroke: #dedddd;
    }
    .tick:first-of-type line {
      stroke: #000000;
    }
</style>
\`\`\`

## Story
`,A=(t,e=m)=>{var a=S(),n=f(a);g(n,{get data(){return k},xDomain:[0,20],yDomain:[0,10],y:L,x:$,children:(r,b)=>{h(r,{children:(i,w)=>{o(i,c(e))},$$slots:{default:!0}})},$$slots:{default:!0}}),y(t,a)},$="value",L="year",D={title:"Layercake/AxisY",component:o,tags:["autodocs"],argTypes:{ticks:{control:{type:"range",min:1,max:10}},textAnchor:{control:"select",options:["start","middle","end"]},axisLabel:{control:"text"},tickLabelColor:{control:{type:"color"}}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:_}},githubLink:{url:"/Layercake/AxisY.svelte"}}},{Story:C}=x();var S=d('<div style="height: 150px; width:100%;"><!></div>');function s(t,e){l(e,!1),v(),C(t,{name:"Default",get template(){return A},parameters:{__svelteCsf:{rawCode:`<div style="height: 150px; width:100%;">
  <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
    <Svg>
      <AxisY {...args} />
    </Svg>
  </LayerCake>
</div>`}}}),p()}s.__docgen={data:[],name:"AxisY.stories.svelte"};const Y=u(s,D),Q=["Default"],V={...Y.Default,tags:["svelte-csf-v5"]};export{V as Default,Q as __namedExportsOrder,D as default};
