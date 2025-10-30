import{p as m,f as r,a as f,n as h,s as d,b as c,d as g}from"./iframe-BjxEKEQH.js";import{c as v,d as _}from"./create-runtime-stories-HPq0r60h.js";import{i as y}from"./lifecycle-hO6jUP98.js";import{B as w}from"./Block-S085LgKA.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";const k='A basic content block with several width options. This helps when building a page layout if you\'d like to place your own components inside a container that aligns with the body well of a typical urban.org layout, a wider block, or a full width block.\n\n```js\nimport { Block } from "@urbaninstitute/dataviz-components";\n```\n',o=(e,s=h)=>{var t=B();c(e,t)},b={title:"Components/Block",component:w,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","wide","full"],control:"select"}},parameters:{docs:{description:{component:k}},githubLink:{url:"/Block/Block.svelte"}}},{Story:n}=_();var B=r('<div style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;">Block</div>'),x=r("<!> <!> <!>",1);function p(e,s){m(s,!1),y();var t=x(),i=f(t);n(i,{name:"Default",get template(){return o},parameters:{__svelteCsf:{rawCode:`<div
  style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
>
  Block
</div>`}}});var l=d(i,2);n(l,{name:"Full width",args:{width:"full"},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div
  style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
>
  Block
</div>`}}});var u=d(l,2);n(u,{name:"Wide",args:{width:"wide"},get template(){return o},parameters:{__svelteCsf:{rawCode:`<div
  style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
>
  Block
</div>`}}}),c(e,t),g()}p.__docgen={data:[],name:"Block.stories.svelte"};const a=v(p,b),S=["Default","FullWidth","Wide"],T={...a.Default,tags:["svelte-csf-v5"]},z={...a.FullWidth,tags:["svelte-csf-v5"]},A={...a.Wide,tags:["svelte-csf-v5"]};export{T as Default,z as FullWidth,A as Wide,S as __namedExportsOrder,b as default};
