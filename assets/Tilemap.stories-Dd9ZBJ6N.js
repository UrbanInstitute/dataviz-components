import{p as Y,f as H,b,n as $,q as p,u as k,s as o,w as I,Z,o as G,d as x,a as J,t as M,e as u,c as O}from"./iframe-BSNeHIWM.js";import{c as V,d as X}from"./create-runtime-stories-Dud3s7q5.js";import{T as F}from"./Tilemap-B7j1rzG_.js";import{u as a}from"./urbanColors-BkxYcPwH.js";import{q as ee}from"./quantile-Bh9554at.js";import"./preload-helper-Dp1pzeXC.js";import"./each-BPfT6BHD.js";import"./attributes-C2_-M8W4.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-DVi4Qlxa.js";import"./Tooltip-BshIKBGA.js";import"./html-BZxi3yaE.js";import"./this-DSe5mVJo.js";import"./window-CIc_mUa8.js";import"./init-DewmRu03.js";import"./quantile-Dc72mZUz.js";const s=[{map_id:"01",value:37},{map_id:"02",value:12},{map_id:"04",value:44},{map_id:"05",value:5},{map_id:"06",value:28},{map_id:"08",value:19},{map_id:"09",value:41},{map_id:"10",value:8},{map_id:"11",value:21},{map_id:"12",value:23},{map_id:"13",value:50},{map_id:"15",value:2},{map_id:"16",value:33},{map_id:"17",value:16},{map_id:"18",value:27},{map_id:"19",value:39},{map_id:"20",value:14},{map_id:"21",value:47},{map_id:"22",value:6},{map_id:"23",value:25},{map_id:"24",value:31},{map_id:"25",value:10},{map_id:"26",value:46},{map_id:"27",value:21},{map_id:"28",value:3},{map_id:"29",value:35},{map_id:"30",value:18},{map_id:"31",value:49},{map_id:"32",value:7},{map_id:"33",value:30},{map_id:"34",value:1},{map_id:"35",value:43},{map_id:"36",value:13},{map_id:"37",value:40},{map_id:"38",value:24},{map_id:"39",value:36},{map_id:"40",value:9},{map_id:"41",value:20},{map_id:"42",value:48},{map_id:"44",value:4},{map_id:"45",value:26},{map_id:"46",value:11},{map_id:"47",value:32},{map_id:"48",value:15},{map_id:"49",value:22},{map_id:"50",value:29},{map_id:"51",value:38},{map_id:"53",value:17},{map_id:"54",value:34},{map_id:"55",value:45},{map_id:"56",value:42}],te=`A tilemap component for displaying state-level data using hex or rect tiles. Accepts FIPS codes for state identification and supports custom coloring, tooltips, and interactivity.

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
`,{userEvent:W,expect:l,fn:B}=__STORYBOOK_MODULE_TEST__,C=(d,U=$)=>{F(d,I(U,{tooltip:(w,_=$)=>{var S=re(),h=b(S),A=O(h),T=o(h,1,!0);M(()=>{u(A,`${_().map_id??""}:`),u(T,_().value)}),x(w,S)},$$slots:{tooltip:!0}}))},ae={title:"Maps/Tilemap",component:F,tags:["autodocs"],argTypes:{shape:{default:"hex",options:["hex","rect"],control:"select"},stroke:{control:"color"},width:{control:"number"}},parameters:{docs:{description:{component:te}},githubLink:{url:"/maps/Tilemap/Tilemap.svelte"}}},{Story:n}=X(),m=ee().domain(s.map(d=>d.value)).range(a.getMapBlues()).unknown(a.gray_shade_lighter);let j=B(),P=B(),z=B(),ie=B();var re=H("<strong> </strong> ",1),le=H("<strong> </strong> ",1),oe=H("<strong> </strong> ",1),se=H("<!> <!> <!> <!> <!> <!>",1);function L(d,U){Y(U,!0);let f=G(null);var w=se(),_=b(w);const S=k(()=>({data:s,shape:"hex",stroke:a.white,fill:e=>m(e==null?void 0:e.value),hoverStroke:a.yellow,hoverStrokeWidth:3,ariaTitle:"U.S. state-level tilemap showing sample values by state",onBgclick:ie,onMousemove:j,onMouseout:P,onClick:z}));n(_,{name:"Basic",get args(){return p(S)},play:async({canvasElement:e})=>{const r=e.querySelector(".tile-shape");await W.hover(r),await l(j).toHaveBeenCalled(),await W.unhover(r),await l(P).toHaveBeenCalled(),await W.click(r),await l(z).toHaveBeenCalled()},get template(){return C},parameters:{__svelteCsf:{rawCode:`<Tilemap {...args}>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var h=o(_,2);const A=k(()=>({data:s,shape:"rect",fill:e=>m(e==null?void 0:e.value),stroke:a.white,hoverStroke:a.yellow,hoverStrokeWidth:3,ariaTitle:"U.S. state-level tilemap using rectangular tiles showing sample values by state"}));n(h,{name:"Rect States",get args(){return p(A)},get template(){return C},parameters:{__svelteCsf:{rawCode:`<Tilemap {...args}>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var T=o(h,2);n(T,{name:"Territories Example",asChild:!0,children:(e,r)=>{F(e,I(()=>({data:s,shape:"hex",featureOption:"territories",fill:t=>m(t==null?void 0:t.value),stroke:a.white,hoverStroke:a.yellow,hoverStrokeWidth:3,ariaTitle:"U.S. state and territory tilemap showing sample values"}),{tooltip:(t,i=$)=>{var c=le(),g=b(c),D=O(g),E=o(g,1,!0);M(()=>{u(D,`${i().map_id??""}:`),u(E,i().value)}),x(t,c)},$$slots:{tooltip:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Tilemap
  {...{
    data: testData,
    shape: "hex",
    featureOption: "territories",
    fill: (d) => mapColorScale(d?.value),
    stroke: urbanColors.white,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
    ariaTitle: "U.S. state and territory tilemap showing sample values"
  }}
>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var R=o(T,2);n(R,{name:"Highlight Feature",asChild:!0,children:(e,r)=>{F(e,{get data(){return s},shape:"hex",fill:t=>m(t==null?void 0:t.value),get stroke(){return a.white},get hoverStroke(){return a.yellow},hoverStrokeWidth:3,get highlightFeature(){return p(f)},ariaTitle:"U.S. state-level tilemap — click a state to highlight it",onClick:(t,i)=>{Z(f,p(f)===(i==null?void 0:i.map_id)?null:i==null?void 0:i.map_id,!0)},tooltip:(t,i=$)=>{var c=oe(),g=b(c),D=O(g),E=o(g,1,!0);M(()=>{u(D,`${i().map_id??""}:`),u(E,i().value)}),x(t,c)},$$slots:{tooltip:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Tilemap
  data={testData}
  shape="hex"
  fill={(d) => mapColorScale(d?.value)}
  stroke={urbanColors.white}
  hoverStroke={urbanColors.yellow}
  hoverStrokeWidth={3}
  highlightFeature={highlightedFips}
  ariaTitle="U.S. state-level tilemap — click a state to highlight it"
  onClick={(_, props) => {
    highlightedFips = highlightedFips === props?.map_id ? null : props?.map_id;
  }}
>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var q=o(R,2);const Q=k(()=>({data:s,shape:"hex",fill:e=>m(e==null?void 0:e.value),stroke:a.white,hoverFill:a.yellow,hoverStroke:a.yellow,hoverStrokeWidth:3,highlightFeature:"06",ariaTitle:"U.S. state-level tilemap demonstrating hover fill — California is pre-highlighted"}));n(q,{name:"Hover Fill",get args(){return p(Q)},get template(){return C},parameters:{__svelteCsf:{rawCode:`<Tilemap {...args}>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}});var K=o(q,2);const N=k(()=>({data:s,shape:"hex",fill:e=>m(e==null?void 0:e.value),stroke:a.white,hoverStroke:a.yellow,hoverStrokeWidth:3,ariaTitle:"U.S. state-level tilemap showing sample values by state",ariaDescription:"States in the Northeast and West Coast tend to have higher values in this dataset."}));n(K,{name:"Accessibility",get args(){return p(N)},play:async({canvasElement:e})=>{const r=e.querySelector("svg");await l(r).toHaveAttribute("role","img"),await l(r).not.toHaveAttribute("aria-hidden");const y=r.getAttribute("aria-labelledby");await l(y).toBeTruthy();const t=e.querySelector(`#${y.split(" ")[0]}`);await l(t).toBeTruthy(),await l(t.textContent).toBe("U.S. state-level tilemap showing sample values by state")},get template(){return C},parameters:{__svelteCsf:{rawCode:`<Tilemap {...args}>
  {#snippet tooltip(props)}
    <strong>{props.map_id}: </strong>{props.value}
  {/snippet}
</Tilemap>`}}}),x(d,w),J()}L.__docgen={data:[],name:"Tilemap.stories.svelte"};const v=V(L,ae),xe=["Basic","RectStates","TerritoriesExample","HighlightFeature","HoverFill","Accessibility"],$e={...v.Basic,tags:["svelte-csf-v5"]},Fe={...v.RectStates,tags:["svelte-csf-v5"]},He={...v.TerritoriesExample,tags:["svelte-csf-v5"]},Be={...v.HighlightFeature,tags:["svelte-csf-v5"]},Ue={...v.HoverFill,tags:["svelte-csf-v5"]},Ae={...v.Accessibility,tags:["svelte-csf-v5"]};export{Ae as Accessibility,$e as Basic,Be as HighlightFeature,Ue as HoverFill,Fe as RectStates,He as TerritoriesExample,xe as __namedExportsOrder,ae as default};
