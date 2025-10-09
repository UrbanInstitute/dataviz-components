import{p as L,f as P,a as w,V as C,g as h,h as v,s as W,b as x,d as O,W as E}from"./iframe-D_iF5c85.js";import{i as F}from"./lifecycle-DPT9lhMs.js";import{b as n}from"./misc-B3v2RBLd.js";import{S as B}from"./lib-SbtGGwAb.js";import{S as _}from"./SVGPolygonLayer-GsssbKkD.js";import{c as T,d as $}from"./create-runtime-stories-cJTTi5Jk.js";import{s as S}from"./states_geo-DARvmaCd.js";import{u as s}from"./urbanColors-BkxYcPwH.js";import"./attributes-BlXGg7Yy.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-TzohQyBJ.js";import"./this-BBCWgB8B.js";import"./string-BqOgh9tw.js";import"./Tooltip-Dc-_iO2O.js";import"./html-HzSgVQlL.js";import"./window-DPTPwaep.js";import"./each-B1oKFb8M.js";const R='A polygon layer for use in an `<SVGMap>` component. Renders each `feature` as an svg `path` element, leveraging d3\'s geoPath function. If no `features` are passed directly to this layer, it will render the features of the parent `SVGMap` component.\n\n## Usage\n\n```svelte\n<script>\n  import { SVGMap, SVGPolygonLayer } from "@urbaninstitute/dataviz-components/maps";\n  import states from "./path/to/geojson/states.json";\n<\/script>\n\n<SVGMap features={states.features}>\n  <SVGPolygonLayer />\n</SVGMap>\n```\n',{userEvent:i,expect:l,fn:m}=__STORYBOOK_MODULE_TEST__,j={title:"Maps/SVGPolygonLayer",component:_,tags:["autodocs"],argTypes:{features:{control:"array"},fill:{control:"text"},stroke:{control:"number"}},parameters:{docs:{description:{component:R}},githubLink:{url:"/maps/SVGPolygonLayer/SVGPolygonLayer.svelte"}}},{Story:y}=$();var q=P("<!> <!>",1);function G(H,o){L(o,!1);const u=(a,r=C)=>{B(a,{get features(){return r().features},children:(e,D)=>{_(e,E(r,{$$events:{click:[function(t){n.call(this,o,t)},f],mouseout:[function(t){n.call(this,o,t)},c],mousemove:[function(t){n.call(this,o,t)},p]}}))},$$slots:{default:!0}})};let p=m(),c=m(),f=m();F();var g=q(),d=w(g);const k=v(()=>({features:S.features,fill:s.blue}));y(d,{name:"Simple",get args(){return h(k)},get template(){return u},play:async({canvasElement:a,args:r})=>{const e=a.querySelector(".polygon-feature");await i.hover(e),await l(p).toHaveBeenCalled(),await i.unhover(e),await l(c).toHaveBeenCalled(),await i.click(e),await l(f).toHaveBeenCalled()},parameters:{__svelteCsf:{rawCode:`<SVGMap features={args.features}>
  <SVGPolygonLayer
    {...args}
    on:click
    on:mouseout
    on:mousemove
    on:click={clickHandler}
    on:mouseout={mouseoutHandler}
    on:mousemove={mousemoveHandler}
  />
</SVGMap>`}}});var M=W(d,2);const b=v(()=>({features:S.features,fill:s.blue,hoverStroke:s.yellow,hoverStrokeWidth:3,highlightFeature:{GEOID:"06"}}));y(M,{name:"With highlighted feature",get template(){return u},get args(){return h(b)},parameters:{__svelteCsf:{rawCode:`<SVGMap features={args.features}>
  <SVGPolygonLayer
    {...args}
    on:click
    on:mouseout
    on:mousemove
    on:click={clickHandler}
    on:mouseout={mouseoutHandler}
    on:mousemove={mousemoveHandler}
  />
</SVGMap>`}}}),x(H,g),O()}G.__docgen={data:[],name:"SVGPolygonLayer.stories.svelte"};const V=T(G,j),le=["Simple","WithHighlightedFeature"],me={...V.Simple,tags:["svelte-csf-v5"]},ue={...V.WithHighlightedFeature,tags:["svelte-csf-v5"]};export{me as Simple,ue as WithHighlightedFeature,le as __namedExportsOrder,j as default};
