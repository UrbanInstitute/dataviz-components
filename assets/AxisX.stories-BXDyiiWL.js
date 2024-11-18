import{S as _,i as y,s as k,c as i,a as l,m,t as f,b as c,d as p,o as h}from"./index-Dy1J9qof.js";import{s as v,c as D,i as g,d as $,e as A,a as L,b as S,f as b}from"./lifecycle-mCW1c9RL.js";import{g as X,a as T}from"./spread-CgU5AtxT.js";import{A as d}from"./AxisX-B7w1ow_6.js";import{p as w,T as C,S as K}from"./collect-stories-DS3D1-He.js";import{L as j,d as z,S as E}from"./data-0psrxs7F.js";import"./each-CjkgdRJJ.js";import"./index-_doEQLKC.js";import"./linear-CIErNTRy.js";import"./string-Cinc0syZ.js";import"./pow-BdkU5FPm.js";const I=`## Usage

\`\`\`js
import { AxisX } from "@urbaninstitute/dataviz-components";
\`\`\`

## Want to update axis style straight from the Layercake repo?

Use this css instead:

\`\`\`js
<style>
     .tick {
      font-size: 12px;
      font-weight: 400;
      font-family: var(--font-family-sans-serif);
    }
    line,
    .tick line {
      stroke: #DEDDDD;
    }
    .tick text {
      fill: #000000;
    }
    .tick .tick-mark,
    .baseline {
      stroke: #000000;
    }
    /* This looks slightly better */
    .axis.snapTicks .tick:last-child text {
      transform: translateX(3px);
    }
    .axis.snapTicks .tick.tick-0 text {
      transform: translateX(-3px);
    }
    .axis-label {
      font-size: 12px;
    }
</style>
\`\`\`

## Story
`;function U(o){let t,n;const a=[o[0]];let s={};for(let e=0;e<a.length;e+=1)s=h(s,a[e]);return t=new d({props:s}),{c(){i(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){m(t,e,r),n=!0},p(e,r){const u=r&1?X(a,[T(e[0])]):{};t.$set(u)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function q(o){let t,n;return t=new E({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment)},l(a){l(t.$$.fragment,a)},m(a,s){m(t,a,s),n=!0},p(a,s){const e={};s&3&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){n||(f(t.$$.fragment,a),n=!0)},o(a){c(t.$$.fragment,a),n=!1},d(a){p(t,a)}}}function M(o){let t,n,a;return n=new j({props:{data:z,xDomain:[0,20],yDomain:[0,10],y:B,x:W,$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){t=A("div"),i(n.$$.fragment),this.h()},l(s){t=L(s,"DIV",{style:!0});var e=S(t);l(n.$$.fragment,e),e.forEach($),this.h()},h(){b(t,"height","150px")},m(s,e){g(s,t,e),m(n,t,null),a=!0},p(s,e){const r={};e&3&&(r.$$scope={dirty:e,ctx:s}),n.$set(r)},i(s){a||(f(n.$$.fragment,s),a=!0)},o(s){c(n.$$.fragment,s),a=!1},d(s){s&&$(t),p(n)}}}function O(o){let t,n,a,s;return t=new C({props:{$$slots:{default:[M,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:o}}}),a=new K({props:{name:"Default"}}),{c(){i(t.$$.fragment),n=v(),i(a.$$.fragment)},l(e){l(t.$$.fragment,e),n=D(e),l(a.$$.fragment,e)},m(e,r){m(t,e,r),g(e,n,r),m(a,e,r),s=!0},p(e,[r]){const u={};r&3&&(u.$$scope={dirty:r,ctx:e}),t.$set(u)},i(e){s||(f(t.$$.fragment,e),f(a.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),c(a.$$.fragment,e),s=!1},d(e){e&&$(n),p(t,e),p(a,e)}}}const V={title:"Layercake/AxisX",component:d,tags:["autodocs"],argTypes:{ticks:{control:{type:"range",min:1,max:20}},axisLabel:{control:"text"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:I}},githubLink:{url:"/Layercake/AxisX.svelte"}}},W="value",B="year";class F extends _{constructor(t){super(),y(this,t,null,O,k,{})}}const x=w(F,{meta:{title:"Layercake/AxisX",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<div style="height: 150px;">
  <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
    <Svg>
      <AxisX {...args} />
    </Svg>
  </LayerCake>
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template","LayerCake","Svg","data"]},V),ae=x.meta,se=["Default"],ne=x.stories.Default;export{ne as Default,se as __namedExportsOrder,ae as default};
