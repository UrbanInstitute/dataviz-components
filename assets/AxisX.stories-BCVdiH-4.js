import{p as l,V as m,d as p,f as c,W as f,c as d,b as x}from"./iframe-D_iF5c85.js";import{i as y}from"./lifecycle-DPT9lhMs.js";import{A as s}from"./AxisX-D93YsPX7.js";import{c as u,d as k}from"./create-runtime-stories-cJTTi5Jk.js";import{L as v,S as g,d as h}from"./data-DUxaj_WD.js";import"./each-B1oKFb8M.js";import"./attributes-BlXGg7Yy.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-TzohQyBJ.js";import"./this-BBCWgB8B.js";import"./index-_doEQLKC.js";import"./init-DewmRu03.js";import"./linear-zaFmwBME.js";import"./string-BqOgh9tw.js";import"./pow-BRLi4QyV.js";const _=`## Usage

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
`,D=(t,e=m)=>{var a=b(),i=d(a);v(i,{get data(){return h},xDomain:[0,20],yDomain:[0,10],y:A,x:$,children:(o,C)=>{g(o,{children:(r,K)=>{s(r,f(e))},$$slots:{default:!0}})},$$slots:{default:!0}}),x(t,a)},$="value",A="year",L={title:"Layercake/AxisX",component:s,tags:["autodocs"],argTypes:{ticks:{control:{type:"range",min:1,max:20}},axisLabel:{control:"text"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:_}},githubLink:{url:"/Layercake/AxisX.svelte"}}},{Story:X}=k();var b=c('<div style="height: 150px;"><!></div>');function n(t,e){l(e,!1),y(),X(t,{name:"Default",get template(){return D},parameters:{__svelteCsf:{rawCode:`<div style="height: 150px;">
  <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
    <Svg>
      <AxisX {...args} />
    </Svg>
  </LayerCake>
</div>`}}}),p()}n.__docgen={data:[],name:"AxisX.stories.svelte"};const S=u(n,L),I=["Default"],J={...S.Default,tags:["svelte-csf-v5"]};export{J as Default,I as __namedExportsOrder,L as default};
