import{S as x,i as h,s as v,c as i,a as l,m,t as c,b as f,d as p,o as k}from"./index-Dy1J9qof.js";import{s as A,c as D,i as g,d as $,e as L,a as S,b,f as d}from"./lifecycle-mCW1c9RL.js";import{g as Y,a as w}from"./spread-CgU5AtxT.js";import{A as y}from"./AxisY-BH9SCbqx.js";import{p as C,T as K,S as T}from"./collect-stories-DS3D1-He.js";import{L as j,d as z,S as E}from"./data-0psrxs7F.js";import"./each-CjkgdRJJ.js";import"./index-_doEQLKC.js";import"./linear-CIErNTRy.js";import"./string-Cinc0syZ.js";import"./pow-BdkU5FPm.js";const I=`## Usage

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

## Story`;function U(o){let t,n;const a=[o[0]];let s={};for(let e=0;e<a.length;e+=1)s=k(s,a[e]);return t=new y({props:s}),{c(){i(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){m(t,e,r),n=!0},p(e,r){const u=r&1?Y(a,[w(e[0])]):{};t.$set(u)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){f(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function q(o){let t,n;return t=new E({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment)},l(a){l(t.$$.fragment,a)},m(a,s){m(t,a,s),n=!0},p(a,s){const e={};s&3&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){n||(c(t.$$.fragment,a),n=!0)},o(a){f(t.$$.fragment,a),n=!1},d(a){p(t,a)}}}function M(o){let t,n,a;return n=new j({props:{data:z,xDomain:[0,20],yDomain:[0,10],y:B,x:W,$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){t=L("div"),i(n.$$.fragment),this.h()},l(s){t=S(s,"DIV",{style:!0});var e=b(t);l(n.$$.fragment,e),e.forEach($),this.h()},h(){d(t,"height","150px"),d(t,"width","100%")},m(s,e){g(s,t,e),m(n,t,null),a=!0},p(s,e){const r={};e&3&&(r.$$scope={dirty:e,ctx:s}),n.$set(r)},i(s){a||(c(n.$$.fragment,s),a=!0)},o(s){f(n.$$.fragment,s),a=!1},d(s){s&&$(t),p(n)}}}function O(o){let t,n,a,s;return t=new K({props:{$$slots:{default:[M,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:o}}}),a=new T({props:{name:"Default"}}),{c(){i(t.$$.fragment),n=A(),i(a.$$.fragment)},l(e){l(t.$$.fragment,e),n=D(e),l(a.$$.fragment,e)},m(e,r){m(t,e,r),g(e,n,r),m(a,e,r),s=!0},p(e,[r]){const u={};r&3&&(u.$$scope={dirty:r,ctx:e}),t.$set(u)},i(e){s||(c(t.$$.fragment,e),c(a.$$.fragment,e),s=!0)},o(e){f(t.$$.fragment,e),f(a.$$.fragment,e),s=!1},d(e){e&&$(n),p(t,e),p(a,e)}}}const V={title:"Layercake/AxisY",component:y,tags:["autodocs"],argTypes:{ticks:{control:{type:"range",min:1,max:10}},textAnchor:{control:"select",options:["start","middle","end"]},axisLabel:{control:"text"},tickLabelColor:{control:{type:"color"}}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:I}},githubLink:{url:"/Layercake/AxisY.svelte"}}},W="value",B="year";class F extends x{constructor(t){super(),h(this,t,null,O,v,{})}}const _=C(F,{meta:{title:"Layercake/AxisY",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<div style="height: 150px; width:100%;">
  <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
    <Svg>
      <AxisY {...args} />
    </Svg>
  </LayerCake>
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template","LayerCake","Svg","data"]},V),ae=_.meta,se=["Default"],ne=_.stories.Default;export{ne as Default,se as __namedExportsOrder,ae as default};
