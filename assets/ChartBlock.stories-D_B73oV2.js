import{S as x,i as B,s as F,c as f,a as m,m as u,t as $,b as h,d,o as I,n as T}from"./index-Dy1J9qof.js";import{s as k,c as b,i as C,d as _,e as W,a as S,h as j,f as p}from"./lifecycle-mCW1c9RL.js";import{g as z,a as L}from"./spread-CgU5AtxT.js";import{D as M}from"./DatawrapperIframe-DXnIm9vI.js";import{C as v}from"./ChartBlock-CRxDCqXI.js";import{p as q,T as R,S as D}from"./collect-stories-DS3D1-He.js";import"./Block-xppMl_dt.js";const X='A basic wrapper for charts that includes, title, description, source, and notes. The default slot can be used to include any type of content or visualization between the provided text.\n\n```js\nimport { ChartBlock } from "@urbaninstitute/dataviz-components";\n```\n';function E(n){let t,s="Chart area";return{c(){t=W("div"),t.textContent=s,this.h()},l(e){t=S(e,"DIV",{style:!0,"data-svelte-h":!0}),j(t)!=="svelte-1sq91v1"&&(t.textContent=s),this.h()},h(){p(t,"height","350px"),p(t,"width","100%"),p(t,"background","#dededd"),p(t,"color","#000000"),p(t,"display","flex"),p(t,"align-items","center"),p(t,"justify-content","center")},m(e,o){C(e,t,o)},p:T,d(e){e&&_(t)}}}function O(n){let t,s;const e=[n[1]];let o={$$slots:{default:[E]},$$scope:{ctx:n}};for(let r=0;r<e.length;r+=1)o=I(o,e[r]);return t=new v({props:o}),{c(){f(t.$$.fragment)},l(r){m(t.$$.fragment,r)},m(r,c){u(t,r,c),s=!0},p(r,c){const i=c&2?z(e,[L(r[1])]):{};c&4&&(i.$$scope={dirty:c,ctx:r}),t.$set(i)},i(r){s||($(t.$$.fragment,r),s=!0)},o(r){h(t.$$.fragment,r),s=!1},d(r){d(t,r)}}}function V(n){let t,s;return t=new M({props:{title:"Datawrapper title",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"RMnkX"}}),{c(){f(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,o){u(t,e,o),s=!0},p:T,i(e){s||($(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function G(n){let t,s;return t=new v({props:{title:"Datawrapper chart",description:"This is what a Datawrapper looks like inside this component.",source:"Chart source",notes:"Chart notes",$$slots:{default:[V]},$$scope:{ctx:n}}}),{c(){f(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,o){u(t,e,o),s=!0},p(e,o){const r={};o&4&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){d(t,e)}}}function H(n){let t,s,e,o,r,c,i,g;return t=new R({props:{$$slots:{default:[O,({args:a})=>({1:a}),({args:a})=>a?2:0]},$$scope:{ctx:n}}}),e=new D({props:{name:"Default",args:n[0]}}),r=new D({props:{name:"Custom text color",parameters:{backgrounds:{default:"dark"}},args:{...n[0],color:"#FFFFFF"}}}),i=new D({props:{name:"With a Datawrapper chart",args:{...n[0],color:"#FFFFFF"},$$slots:{default:[G]},$$scope:{ctx:n}}}),{c(){f(t.$$.fragment),s=k(),f(e.$$.fragment),o=k(),f(r.$$.fragment),c=k(),f(i.$$.fragment)},l(a){m(t.$$.fragment,a),s=b(a),m(e.$$.fragment,a),o=b(a),m(r.$$.fragment,a),c=b(a),m(i.$$.fragment,a)},m(a,l){u(t,a,l),C(a,s,l),u(e,a,l),C(a,o,l),u(r,a,l),C(a,c,l),u(i,a,l),g=!0},p(a,[l]){const y={};l&6&&(y.$$scope={dirty:l,ctx:a}),t.$set(y);const A={};l&4&&(A.$$scope={dirty:l,ctx:a}),i.$set(A)},i(a){g||($(t.$$.fragment,a),$(e.$$.fragment,a),$(r.$$.fragment,a),$(i.$$.fragment,a),g=!0)},o(a){h(t.$$.fragment,a),h(e.$$.fragment,a),h(r.$$.fragment,a),h(i.$$.fragment,a),g=!1},d(a){a&&(_(s),_(o),_(c)),d(t,a),d(e,a),d(r,a),d(i,a)}}}const J={title:"Components/ChartBlock",component:v,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","wide","full"],control:"select"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:X}},githubLink:{url:"/ChartBlock/ChartBlock.svelte"}}};function K(n){return[{title:"Chart title",description:"Chart description",source:"Chart source",notes:"Chart notes"}]}class N extends x{constructor(t){super(),B(this,t,K,H,F,{})}}const w=q(N,{meta:{title:"Components/ChartBlock",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<ChartBlock {...args}>
  <div
    style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
  >
    Chart area
  </div>
</ChartBlock>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},CustomTextColor:{name:"Custom text color",template:!1,source:"",hasArgs:!1},WithADatawrapperChart:{name:"With a Datawrapper chart",template:!1,source:`<ChartBlock
  title="Datawrapper chart"
  description="This is what a Datawrapper looks like inside this component."
  source="Chart source"
  notes="Chart notes"
>
  <DatawrapperIframe
    title="Datawrapper title"
    ariaLabel="This is an accessible title for the visualization"
    datawrapperId="RMnkX"
  />
</ChartBlock>`,hasArgs:!1}},allocatedIds:["default","Story","Template"]},J),at=w.meta,rt=["Default","CustomTextColor","WithADatawrapperChart"],st=w.stories.Default,ot=w.stories.CustomTextColor,nt=w.stories.WithADatawrapperChart;export{ot as CustomTextColor,st as Default,nt as WithADatawrapperChart,rt as __namedExportsOrder,at as default};
