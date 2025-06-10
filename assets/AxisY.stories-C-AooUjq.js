import{p as l,_ as m,d as p,f as d,a0 as c,c as f,b as y}from"./iframe-BcferWuU.js";import{i as u}from"./lifecycle-BcSUtK95.js";import{A as s}from"./AxisY-L_iQ3sGL.js";import{c as x,d as v}from"./create-runtime-stories-CHM6HO4D.js";import{L as g,S as h,d as _}from"./data-B-Pk5JAn.js";import"./each-CZjc6dyk.js";import"./attributes-1snxx-6i.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./string-D6zLExca.js";import"./this-XyIzL1DC.js";import"./index-_doEQLKC.js";import"./linear-DqoPPvqX.js";import"./pow-CPJu5x8O.js";const k=`## Usage

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
`,A=(t,e=m)=>{var a=C(),n=f(a);g(n,{get data(){return _},xDomain:[0,20],yDomain:[0,10],y:L,x:$,children:(r,Y)=>{h(r,{children:(i,K)=>{s(i,c(e))},$$slots:{default:!0}})},$$slots:{default:!0}}),y(t,a)},$="value",L="year",D={title:"Layercake/AxisY",component:s,tags:["autodocs"],argTypes:{ticks:{control:{type:"range",min:1,max:10}},textAnchor:{control:"select",options:["start","middle","end"]},axisLabel:{control:"text"},tickLabelColor:{control:{type:"color"}}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:k}},githubLink:{url:"/Layercake/AxisY.svelte"}}},{Story:b}=v();var C=d('<div style="height: 150px; width:100%;"><!></div>');function o(t,e){l(e,!1),u(),b(t,{name:"Default",get template(){return A},parameters:{__svelteCsf:{rawCode:`<div style="height: 150px; width:100%;">
	<LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
		<Svg>
			<AxisY {...args} />
		</Svg>
	</LayerCake>
</div>`}}}),p()}o.__docgen={data:[],name:"AxisY.stories.svelte"};const S=x(o,D),H=["Default"],I={...S.Default,tags:["svelte-csf-v5"]};export{I as Default,H as __namedExportsOrder,D as default};
