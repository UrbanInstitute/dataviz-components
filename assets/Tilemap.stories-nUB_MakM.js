import{p as z,f as k,a as S,U as w,g as E,h as M,s as n,V as j,b as x,d as A,t as q,e as u,c as W}from"./iframe-Bc23XYIh.js";import{i as I}from"./lifecycle-BvYk3ZZi.js";import{c as L,d as Q}from"./create-runtime-stories-DZzrqf4P.js";import{T as C}from"./Tilemap-NxTcc3wm.js";import{u as a}from"./urbanColors-BkxYcPwH.js";import{q as K}from"./quantile-Bh9554at.js";import"./each-DS5tR5n2.js";import"./attributes-Cxy0te-K.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-G7kC_8ZN.js";import"./this-Us5rr2fM.js";import"./Tooltip-CccS1ffk.js";import"./html-DU1KLMhD.js";import"./window-tHS_M_WQ.js";import"./init-DewmRu03.js";import"./quantile-Dc72mZUz.js";const m=[{map_id:"01",value:37},{map_id:"02",value:12},{map_id:"04",value:44},{map_id:"05",value:5},{map_id:"06",value:28},{map_id:"08",value:19},{map_id:"09",value:41},{map_id:"10",value:8},{map_id:"11",value:21},{map_id:"12",value:23},{map_id:"13",value:50},{map_id:"15",value:2},{map_id:"16",value:33},{map_id:"17",value:16},{map_id:"18",value:27},{map_id:"19",value:39},{map_id:"20",value:14},{map_id:"21",value:47},{map_id:"22",value:6},{map_id:"23",value:25},{map_id:"24",value:31},{map_id:"25",value:10},{map_id:"26",value:46},{map_id:"27",value:21},{map_id:"28",value:3},{map_id:"29",value:35},{map_id:"30",value:18},{map_id:"31",value:49},{map_id:"32",value:7},{map_id:"33",value:30},{map_id:"34",value:1},{map_id:"35",value:43},{map_id:"36",value:13},{map_id:"37",value:40},{map_id:"38",value:24},{map_id:"39",value:36},{map_id:"40",value:9},{map_id:"41",value:20},{map_id:"42",value:48},{map_id:"44",value:4},{map_id:"45",value:26},{map_id:"46",value:11},{map_id:"47",value:32},{map_id:"48",value:15},{map_id:"49",value:22},{map_id:"50",value:29},{map_id:"51",value:38},{map_id:"53",value:17},{map_id:"54",value:34},{map_id:"55",value:45},{map_id:"56",value:42}],V=`A tilemap component for displaying state-level data using hex or rect tiles. Accepts FIPS codes for state identification and supports custom coloring, tooltips, and interactivity.

## Usage

\`\`\`svelte
<script>
  import { Tilemap } from "@urbaninstitute/dataviz-components/maps";
  import { getMapBlues } from "@urbaninstitute/dataviz-components/utils";
  import mapData from "./docs/test_data.json";
  import { scaleQuantile } from "d3-scale";

  const colorScale = scaleQuantile().domain(mapData.map((d) => d.value)).range(urbanColors.getMapBlues())
<\/script>

<Tilemap data={mapData} shape="hex" fill={(feature) => colorScale(feature.properties.value)} stroke={urbanColors.white}" />
\`\`\`

## Data Format

The \`data\` prop should be an array of objects with a \`map_id\` (FIPS code) property. This property will be used to join your data to the correct states:

\`\`\`json
[
  { "map_id": "06", "value": 28 },
  { "map_id": "36", "value": 13 },
  ...
]
\`\`\`
`,{userEvent:h,expect:f,fn:d}=__STORYBOOK_MODULE_TEST__,D=(t,v=w)=>{C(t,j(v,{tooltip:(i,s=w)=>{var o=J(),p=S(o),c=W(p),e=n(p,1,!0);q(()=>{u(c,`${s().map_id??""}:`),u(e,s().value)}),x(i,o)},$$slots:{tooltip:!0}}))},Y={title:"Maps/Tilemap",component:C,tags:["autodocs"],argTypes:{shape:{default:"hex",options:["hex","rect"],control:"select"},stroke:{control:"color"},width:{control:"number"}},parameters:{docs:{description:{component:V}},githubLink:{url:"/maps/Tilemap/Tilemap.svelte"}}},{Story:g}=Q(),T=K().domain(m.map(t=>t.value)).range(a.getMapBlues()).unknown(a.gray_shade_lighter);let H=d(),O=d(),R=d(),G=d();var J=k("<strong> </strong> ",1),N=k("<strong> </strong> ",1),X=k("<!> <!> <!>",1);function F(t,v){z(v,!1),I();var _=X(),i=S(_);const s=M(()=>({data:m,shape:"hex",stroke:a.white,fill:e=>T(e==null?void 0:e.value),hoverStroke:a.yellow,hoverStrokeWidth:3,onBgclick:G,onMousemove:H,onMouseout:O,onClick:R}));g(i,{name:"Basic",get args(){return E(s)},play:async({canvasElement:e})=>{const l=e.querySelector(".tile-shape");await h.hover(l),await f(H).toHaveBeenCalled(),await h.unhover(l),await f(O).toHaveBeenCalled(),await h.click(l),await f(R).toHaveBeenCalled()},get template(){return D},parameters:{__svelteCsf:{rawCode:`<Tilemap {...args}>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var o=n(i,2);const p=M(()=>({data:m,shape:"rect",fill:e=>T(e==null?void 0:e.value),stroke:a.white,hoverStroke:a.yellow,hoverStrokeWidth:3}));g(o,{name:"Rect States",get args(){return E(p)},get template(){return D},parameters:{__svelteCsf:{rawCode:`<Tilemap {...args}>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var c=n(o,2);g(c,{name:"Territories Example",asChild:!0,children:(e,l)=>{C(e,j(()=>({data:m,shape:"hex",featureOption:"territories",fill:r=>T(r==null?void 0:r.value),stroke:a.white,hoverStroke:a.yellow,hoverStrokeWidth:3}),{tooltip:(r,b=w)=>{var $=N(),B=S($),P=W(B),U=n(B,1,!0);q(()=>{u(P,`${b().map_id??""}:`),u(U,b().value)}),x(r,$)},$$slots:{tooltip:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Tilemap
  {...{
    data: testData,
    shape: "hex",
    featureOption: "territories",
    fill: (d) => mapColorScale(d?.value),
    stroke: urbanColors.white,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3
  }}
>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}}),x(t,_),A()}F.__docgen={data:[],name:"Tilemap.stories.svelte"};const y=L(F,Y),ge=["Basic","RectStates","TerritoriesExample"],Te={...y.Basic,tags:["svelte-csf-v5"]},Se={...y.RectStates,tags:["svelte-csf-v5"]},we={...y.TerritoriesExample,tags:["svelte-csf-v5"]};export{Te as Basic,Se as RectStates,we as TerritoriesExample,ge as __namedExportsOrder,Y as default};
