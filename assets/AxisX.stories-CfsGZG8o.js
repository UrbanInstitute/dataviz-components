import{p as l,n as m,a as p,f as c,w as f,c as d,d as x}from"./iframe-Dwb2GjWe.js";import{c as y,d as u}from"./create-runtime-stories-DVwOBNxa.js";import{i as k}from"./lifecycle-3B0MVNSh.js";import{A as n}from"./AxisX-SOaZtpr5.js";import{L as v,S as g,d as h}from"./data-DB2cB3Vk.js";import"./preload-helper-Dp1pzeXC.js";import"./each-VWhaf5kD.js";import"./attributes-6Paf-c-d.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./slot-BP_Qo1ZM.js";import"./size-B3ABQTmx.js";import"./this-PCuW4UVg.js";import"./index-_doEQLKC.js";import"./init-DewmRu03.js";import"./linear-zaFmwBME.js";import"./string-BqOgh9tw.js";import"./pow-BRLi4QyV.js";const _=`## Usage

\`\`\`js
import { AxisX } from "@urbaninstitute/dataviz-components";
\`\`\`

## Want to update axis style straight from the Layercake repo?

Use this css instead:

\`\`\`js
<style>
     .tick {
      font-size: 12px;
      font-weight: 400;
      font-family: var(--font-family-sans-serif);
    }
    line,
    .tick line {
      stroke: #DEDDDD;
    }
    .tick text {
      fill: #000000;
    }
    .tick .tick-mark,
    .baseline {
      stroke: #000000;
    }
    /* This looks slightly better */
    .axis.snapTicks .tick:last-child text {
      transform: translateX(3px);
    }
    .axis.snapTicks .tick.tick-0 text {
      transform: translateX(-3px);
    }
    .axis-label {
      font-size: 12px;
    }
</style>
\`\`\`

## Story
`,D=(t,e=m)=>{var a=b(),i=d(a);v(i,{get data(){return h},xDomain:[0,20],yDomain:[0,10],y:A,x:$,children:(o,C)=>{g(o,{children:(r,K)=>{n(r,f(e))},$$slots:{default:!0}})},$$slots:{default:!0}}),x(t,a)},$="value",A="year",L={title:"Layercake/AxisX",component:n,tags:["autodocs"],argTypes:{ticks:{control:{type:"range",min:1,max:20}},axisLabel:{control:"text"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:_}},githubLink:{url:"/Layercake/AxisX.svelte"}}},{Story:X}=u();var b=c('<div style="height: 150px;"><!></div>');function s(t,e){l(e,!1),k(),X(t,{name:"Default",get template(){return D},parameters:{__svelteCsf:{rawCode:`<div style="height: 150px;">
  <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
    <Svg>
      <AxisX {...args} />
    </Svg>
  </LayerCake>
</div>`}}}),p()}s.__docgen={data:[],name:"AxisX.stories.svelte"};const S=y(s,L),Q=["Default"],V={...S.Default,tags:["svelte-csf-v5"]};export{V as Default,Q as __namedExportsOrder,L as default};
