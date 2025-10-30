import{p as x,f as C,a as P,n as u,s as T,P as h,t as v,b as c,d as B,V as U,e as y}from"./iframe-BjxEKEQH.js";import{c as D,d as O}from"./create-runtime-stories-HPq0r60h.js";import{i as A}from"./lifecycle-hO6jUP98.js";import{c as I,S as L}from"./lib-CgGEPiW4.js";import{S as m}from"./SVGLabelLayer-DlN-Z4yY.js";import{s as _}from"./states_geo-DARvmaCd.js";import"./attributes-UJeNkN1P.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-C1syiTDZ.js";import"./this-DGLcOT4Q.js";import"./string-BqOgh9tw.js";import"./Tooltip-DQtD7qmK.js";import"./html-CDri68dQ.js";import"./window-C-tkelu3.js";import"./each-DC_8OmU5.js";import"./urbanColors-BkxYcPwH.js";const j='A layer that works inside an `SVGMap` component that displays data as a text label layer. If polygon features are passed to this layer, the centroid will be computed with `d3.geoPath.centroid`.\n\n## Basic usage\n\nImport `SVGLabelLayer` and `SVGMap` from this library:\n\n```js\nimport { SVGMap, SVGLabelLayer } from "@urbaninstitute/dataviz-components/maps";\n```\n\nAdd your own GeoJSON data and specify configuration and props seen below. Either use the `getLabel` prop as a function that receives a `feature` as an argument and returns a string to be displayed on the map, or use the default slot and bind to the `props` object with `let:props`.\n',{expect:r,fn:d}=__STORYBOOK_MODULE_TEST__,q={title:"Maps/SVGLabelLayer",component:m,tags:["autodocs"],argTypes:{features:{control:"array"},stroke:{control:"text"}},parameters:{docs:{description:{component:j}},githubLink:{url:"/maps/SVGLabelLayer/SVGLabelLayer.svelte"}}},{Story:b}=O();var R=C("<!> <!>",1);function g(V,w){x(w,!1);const $=(a,t=u)=>{L(a,{get features(){return _.features},children:(e,M)=>{m(e,U(t,{get onclick(){return l},get onmouseout(){return n},get onmousemove(){return s},children:(i,p=u)=>{var o=h();v(()=>y(o,p().STUSPS)),c(i,o)},$$slots:{default:!0}}))},$$slots:{default:!0}})};let s=d(),n=d(),l=d();I(),A();var f=R(),S=P(f);b(S,{name:"Default",args:{getLabel:a=>a.properties.STUSPS},get template(){return $},play:async({canvasElement:a,userEvent:t})=>{const e=a.querySelector(".label-feature text");await t.hover(e),await r(s).toHaveBeenCalled(),await t.unhover(e),await r(n).toHaveBeenCalled(),await t.click(e),await r(l).toHaveBeenCalled()},source:`<SVGMap features={states.features}>
  <SVGLabelLayer
    getLabel={(feature) => feature.properties.STUSPS}
  >
    {#snippet children(props)}
      {props.STUSPS}
    {/snippet}
  </SVGLabelLayer>
</SVGMap>`,parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<SVGMap features={states.features}>
  <SVGLabelLayer
    {...args}
    onclick={clickHandler}
    onmouseout={mouseoutHandler}
    onmousemove={mousemoveHandler}
  >
    {#snippet children(props)}
      {props.STUSPS}
    {/snippet}
  </SVGLabelLayer>
</SVGMap>`}}});var H=T(S,2);b(H,{name:"Slot",asChild:!0,play:async({canvasElement:a,userEvent:t})=>{const e=a.querySelector(".label-feature text");await t.hover(e),await r(s).toHaveBeenCalled(),await t.unhover(e),await r(n).toHaveBeenCalled(),await t.click(e),await r(l).toHaveBeenCalled()},children:(a,t)=>{L(a,{get features(){return _.features},children:(e,M)=>{m(e,{get onclick(){return l},get onmouseout(){return n},get onmousemove(){return s},children:(i,p=u)=>{var o=h();v(()=>y(o,p().STUSPS)),c(i,o)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SVGMap features={states.features}>
  <SVGLabelLayer
    onclick={clickHandler}
    onmouseout={mouseoutHandler}
    onmousemove={mousemoveHandler}
  >
    {#snippet children(props)}
      {props.STUSPS}
    {/snippet}
  </SVGLabelLayer>
</SVGMap>`}}}),c(V,f),B()}g.__docgen={data:[],name:"SVGLabelLayer.stories.svelte"};const G=D(g,q),le=["Default","Slot"],ie={...G.Default,tags:["svelte-csf-v5"]},pe={...G.Slot,tags:["svelte-csf-v5"]};export{ie as Default,pe as Slot,le as __namedExportsOrder,q as default};
