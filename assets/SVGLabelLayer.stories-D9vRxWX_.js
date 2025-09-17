import{p as T,f as U,a as B,V as D,s as O,a5 as h,U as b,t as L,b as f,d as q,W as j,e as y,g,h as G}from"./iframe-DkBoYltS.js";import{i as A}from"./lifecycle-BcE5ET0k.js";import{b as r}from"./misc-DTsII0sD.js";import{S as V}from"./lib-Df5Wr_Yk.js";import{S}from"./SVGLabelLayer-B7jzCpk9.js";import{c as I,d as R}from"./create-runtime-stories-CMVs6-vI.js";import{s as w}from"./states_geo-DARvmaCd.js";import"./attributes-DhG7CSOU.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-Ve3rr0Gf.js";import"./this-KQSS7Fg9.js";import"./string-BqOgh9tw.js";import"./Tooltip-BEQr2ua9.js";import"./html-CdB9IZZU.js";import"./window-BgJEi96I.js";import"./each-BeOUnWnH.js";import"./urbanColors-BkxYcPwH.js";const z='A layer that works inside an `SVGMap` component that displays data as a text label layer. If polygon features are passed to this layer, the centroid will be computed with `d3.geoPath.centroid`.\n\n## Basic usage\n\nImport `SVGLabelLayer` and `SVGMap` from this library:\n\n```js\nimport { SVGMap, SVGLabelLayer } from "@urbaninstitute/dataviz-components/maps";\n```\n\nAdd your own GeoJSON data and specify configuration and props seen below. Either use the `getLabel` prop as a function that receives a `feature` as an argument and returns a string to be displayed on the map, or use the default slot and bind to the `props` object with `let:props`.\n',{expect:n,fn:d}=__STORYBOOK_MODULE_TEST__,J={title:"Maps/SVGLabelLayer",component:S,tags:["autodocs"],argTypes:{features:{control:"array"},stroke:{control:"text"}},parameters:{docs:{description:{component:z}},githubLink:{url:"/maps/SVGLabelLayer/SVGLabelLayer.svelte"}}},{Story:H}=R();var K=U("<!> <!>",1);function k($,s){T(s,!1);const x=(o,a=D)=>{V(o,{get features(){return w.features},children:(t,P)=>{S(t,j(a,{$$events:{click:[function(e){r.call(this,s,e)},u],mouseout:[function(e){r.call(this,s,e)},p],mousemove:[function(e){r.call(this,s,e)},i]},children:h,$$slots:{default:(e,m)=>{const c=G(()=>m.props);var l=b();L(()=>y(l,g(c).STUSPS)),f(e,l)}}}))},$$slots:{default:!0}})};let i=d(),p=d(),u=d();A();var v=K(),_=B(v);H(_,{name:"Default",args:{getLabel:o=>o.properties.STUSPS},get template(){return x},play:async({canvasElement:o,userEvent:a})=>{const t=o.querySelector(".label-feature text");await a.hover(t),await n(i).toHaveBeenCalled(),await a.unhover(t),await n(p).toHaveBeenCalled(),await a.click(t),await n(u).toHaveBeenCalled()},source:`<SVGMap features={states.features}>
  <SVGLabelLayer getLabel={(feature) => feature.properties.STUSPS}>
    <svelte:fragment let:props>{props.STUSPS}</svelte:fragment>
  </SVGLabelLayer>
</SVGMap>`,parameters:{__svelteCsf:{rawCode:`<SVGMap features={states.features}>
  <SVGLabelLayer
    {...args}
    on:click
    on:mouseout
    on:mousemove
    on:click={clickHandler}
    on:mouseout={mouseoutHandler}
    on:mousemove={mousemoveHandler}
  >
    <svelte:fragment let:props>{props.STUSPS}</svelte:fragment>
  </SVGLabelLayer>
</SVGMap>`}}});var C=O(_,2);H(C,{name:"Slot","}}":!0,asChild:!0,play:async({canvasElement:o,userEvent:a})=>{const t=o.querySelector(".label-feature text");await a.hover(t),await n(i).toHaveBeenCalled(),await a.unhover(t),await n(p).toHaveBeenCalled(),await a.click(t),await n(u).toHaveBeenCalled()},children:(o,a)=>{V(o,{get features(){return w.features},children:(t,P)=>{S(t,{$$events:{click:[function(e){r.call(this,s,e)},u],mouseout:[function(e){r.call(this,s,e)},p],mousemove:[function(e){r.call(this,s,e)},i]},children:h,$$slots:{default:(e,m)=>{const c=G(()=>m.props);var l=b();L(()=>y(l,g(c).STUSPS)),f(e,l)}}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SVGMap features={states.features}>
  <SVGLabelLayer
    on:click
    on:mouseout
    on:mousemove
    on:click={clickHandler}
    on:mouseout={mouseoutHandler}
    on:mousemove={mousemoveHandler}
    ><svelte:fragment let:props>{props.STUSPS}</svelte:fragment></SVGLabelLayer
  >
</SVGMap>`}}}),f($,v),q()}k.__docgen={data:[],name:"SVGLabelLayer.stories.svelte"};const M=I(k,J),me=["Default","Slot"],ce={...M.Default,tags:["svelte-csf-v5"]},fe={...M.Slot,tags:["svelte-csf-v5"]};export{ce as Default,fe as Slot,me as __namedExportsOrder,J as default};
