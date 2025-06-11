import{p as L,f as P,a as w,U as C,g as h,h as v,s as x,b as O,d as W,V as E}from"./iframe-Dh-CAoci.js";import{i as F}from"./lifecycle-rtcBtEMy.js";import{b as n}from"./misc-5u4RouTI.js";import{S as B}from"./lib-BQYz-Dhu.js";import{S as _}from"./SVGPolygonLayer-C2dc7YDV.js";import{c as T,d as $}from"./create-runtime-stories-Ee3127Pv.js";import{s as S}from"./states_geo-DARvmaCd.js";import{u as s}from"./urbanColors-BkxYcPwH.js";import"./attributes-B9-bxW-k.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-CQlcWDwJ.js";import"./this-DSh4Tpv3.js";import"./string-BqOgh9tw.js";import"./Tooltip-h56YdRoj.js";import"./html-DHBEMhJs.js";import"./window-CwiMeM73.js";import"./each-r1C57-iw.js";const R='A polygon layer for use in an `<SVGMap>` component. Renders each `feature` as an svg `path` element, leveraging d3\'s geoPath function. If no `features` are passed directly to this layer, it will render the features of the parent `SVGMap` component.\n\n## Usage\n\n```svelte\n<script>\n  import { SVGMap, SVGPolygonLayer } from "@urbaninstitute/dataviz-components/maps";\n  import states from "./path/to/geojson/states.json";\n<\/script>\n\n<SVGMap features={states.features}>\n  <SVGPolygonLayer />\n</SVGMap>\n```\n',{userEvent:i,expect:l,fn:m}=__STORYBOOK_MODULE_TEST__,U={title:"Maps/SVGPolygonLayer",component:_,tags:["autodocs"],argTypes:{features:{control:"array"},fill:{control:"text"},stroke:{control:"number"}},parameters:{docs:{description:{component:R}},githubLink:{url:"/maps/SVGPolygonLayer/SVGPolygonLayer.svelte"}}},{Story:y}=$();var j=P("<!> <!>",1);function G(H,o){L(o,!1);const u=(a,r=C)=>{B(a,{get features(){return r().features},children:(e,q)=>{_(e,E(r,{$$events:{click:[function(t){n.call(this,o,t)},f],mouseout:[function(t){n.call(this,o,t)},c],mousemove:[function(t){n.call(this,o,t)},p]}}))},$$slots:{default:!0}})};let p=m(),c=m(),f=m();F();var g=j(),d=w(g);const k=v(()=>({features:S.features,fill:s.blue}));y(d,{name:"Simple",get args(){return h(k)},get template(){return u},play:async({canvasElement:a,args:r})=>{const e=a.querySelector(".polygon-feature");await i.hover(e),await l(p).toHaveBeenCalled(),await i.unhover(e),await l(c).toHaveBeenCalled(),await i.click(e),await l(f).toHaveBeenCalled()},parameters:{__svelteCsf:{rawCode:`<SVGMap features={args.features}>
  <SVGPolygonLayer
    {...args}
    on:click
    on:mouseout
    on:mousemove
    on:click={clickHandler}
    on:mouseout={mouseoutHandler}
    on:mousemove={mousemoveHandler}
  />
</SVGMap>`}}});var M=x(d,2);const b=v(()=>({features:S.features,fill:s.blue,hoverStroke:s.yellow,hoverStrokeWidth:3,highlightFeature:{GEOID:"06"}}));y(M,{name:"With highlighted feature",get template(){return u},get args(){return h(b)},parameters:{__svelteCsf:{rawCode:`<SVGMap features={args.features}>
  <SVGPolygonLayer
    {...args}
    on:click
    on:mouseout
    on:mousemove
    on:click={clickHandler}
    on:mouseout={mouseoutHandler}
    on:mousemove={mousemoveHandler}
  />
</SVGMap>`}}}),O(H,g),W()}G.__docgen={data:[],name:"SVGPolygonLayer.stories.svelte"};const V=T(G,U),le=["Simple","WithHighlightedFeature"],me={...V.Simple,tags:["svelte-csf-v5"]},ue={...V.WithHighlightedFeature,tags:["svelte-csf-v5"]};export{me as Simple,ue as WithHighlightedFeature,le as __namedExportsOrder,U as default};
