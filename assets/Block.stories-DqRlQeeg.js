import{p as m,f as r,a as f,U as h,s as d,b as c,d as g}from"./iframe-Dqyympk2.js";import{i as v}from"./lifecycle-C4HJYyFW.js";import{B as _}from"./Block-BSHrHO9L.js";import{c as y,d as w}from"./create-runtime-stories-Dd1Bukbj.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";const k='A basic content block with several width options. This helps when building a page layout if you\'d like to place your own components inside a container that aligns with the body well of a typical urban.org layout, a wider block, or a full width block.\n\n```js\nimport { Block } from "@urbaninstitute/dataviz-components";\n```\n',o=(e,s=h)=>{var t=B();c(e,t)},b={title:"Components/Block",component:_,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","wide","full"],control:"select"}},parameters:{docs:{description:{component:k}},githubLink:{url:"/Block/Block.svelte"}}},{Story:a}=w();var B=r('<div style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;">Block</div>'),x=r("<!> <!> <!>",1);function p(e,s){m(s,!1),v();var t=x(),i=f(t);a(i,{name:"Default",get template(){return o},parameters:{__svelteCsf:{rawCode:`<div
  style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
>
  Block
</div>`}}});var l=d(i,2);a(l,{name:"Full width",args:{width:"full"},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div
  style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
>
  Block
</div>`}}});var u=d(l,2);a(u,{name:"Wide",args:{width:"wide"},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div
  style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
>
  Block
</div>`}}}),c(e,t),g()}p.__docgen={data:[],name:"Block.stories.svelte"};const n=y(p,b),S=["Default","FullWidth","Wide"],T={...n.Default,tags:["svelte-csf-v5"]},z={...n.FullWidth,tags:["svelte-csf-v5"]},A={...n.Wide,tags:["svelte-csf-v5"]};export{T as Default,z as FullWidth,A as Wide,S as __namedExportsOrder,b as default};
