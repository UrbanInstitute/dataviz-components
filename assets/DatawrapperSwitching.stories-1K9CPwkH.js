import{S as M,i as O,s as v,c as w,a as h,m as D,t as f,b as d,d as k,e as F,f as G,g as K,h as j,n as z,j as N}from"./index-DSboKh2c.js";import{s as b,c as C,i as $,d as m,j as g,t as I,g as y}from"./lifecycle-SLBqfn5_.js";import{p as P,S as J}from"./collect-stories-C9w2Zg6J.js";import{D as q}from"./DatawrapperIframe-BZnOH9Bw.js";import{B as R}from"./BasicDropdown-CCqT9gkr.js";import{B}from"./Button-BeoVZhHb.js";import"./spread-CgU5AtxT.js";import"./each-BJWUklFz.js";import"./urbanColors-BkxYcPwH.js";function Q(s){let e,a;return e=new q({props:{datawrapperId:s[0]}}),{c(){w(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){D(e,t,l),a=!0},p(t,l){const n={};l&1&&(n.datawrapperId=t[0]),e.$set(n)},i(t){a||(f(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){k(e,t)}}}function T(s){let e,a,t,l=s[0],n,c;function _(o){s[2](o)}let u={id:"dropdown",data:s[1],inlineLabel:"Dropdown",placeholder:null};s[0]!==void 0&&(u.value=s[0]),e=new R({props:u}),F.push(()=>G(e,"value",_));let i=Q(s);return{c(){w(e.$$.fragment),t=b(),i.c(),n=g()},l(o){h(e.$$.fragment,o),t=C(o),i.l(o),n=g()},m(o,r){D(e,o,r),$(o,t,r),i.m(o,r),$(o,n,r),c=!0},p(o,r){const p={};!a&&r&1&&(a=!0,p.value=o[0],K(()=>a=!1)),e.$set(p),r&1&&v(l,l=o[0])?(j(),d(i,1,1,z),N(),i=Q(o),i.c(),f(i,1),i.m(n.parentNode,n)):i.p(o,r)},i(o){c||(f(e.$$.fragment,o),f(i),c=!0)},o(o){d(e.$$.fragment,o),d(i),c=!1},d(o){o&&(m(t),m(n)),k(e,o),i.d(o)}}}function U(s){let e;return{c(){e=I("Chart #1")},l(a){e=y(a,"Chart #1")},m(a,t){$(a,e,t)},d(a){a&&m(e)}}}function V(s){let e;return{c(){e=I("Chart #2")},l(a){e=y(a,"Chart #2")},m(a,t){$(a,e,t)},d(a){a&&m(e)}}}function W(s){let e;return{c(){e=I("Chart #3")},l(a){e=y(a,"Chart #3")},m(a,t){$(a,e,t)},d(a){a&&m(e)}}}function E(s){let e,a;return e=new q({props:{datawrapperId:s[0]}}),{c(){w(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,l){D(e,t,l),a=!0},p(t,l){const n={};l&1&&(n.datawrapperId=t[0]),e.$set(n)},i(t){a||(f(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){k(e,t)}}}function X(s){let e,a,t,l,n,c,_=s[0],u,i;e=new B({props:{$$slots:{default:[U]},$$scope:{ctx:s}}}),e.$on("click",s[3]),t=new B({props:{$$slots:{default:[V]},$$scope:{ctx:s}}}),t.$on("click",s[4]),n=new B({props:{$$slots:{default:[W]},$$scope:{ctx:s}}}),n.$on("click",s[5]);let o=E(s);return{c(){w(e.$$.fragment),a=b(),w(t.$$.fragment),l=b(),w(n.$$.fragment),c=b(),o.c(),u=g()},l(r){h(e.$$.fragment,r),a=C(r),h(t.$$.fragment,r),l=C(r),h(n.$$.fragment,r),c=C(r),o.l(r),u=g()},m(r,p){D(e,r,p),$(r,a,p),D(t,r,p),$(r,l,p),D(n,r,p),$(r,c,p),o.m(r,p),$(r,u,p),i=!0},p(r,p){const L={};p&64&&(L.$$scope={dirty:p,ctx:r}),e.$set(L);const A={};p&64&&(A.$$scope={dirty:p,ctx:r}),t.$set(A);const H={};p&64&&(H.$$scope={dirty:p,ctx:r}),n.$set(H),p&1&&v(_,_=r[0])?(j(),d(o,1,1,z),N(),o=E(r),o.c(),f(o,1),o.m(u.parentNode,u)):o.p(r,p)},i(r){i||(f(e.$$.fragment,r),f(t.$$.fragment,r),f(n.$$.fragment,r),f(o),i=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),d(n.$$.fragment,r),d(o),i=!1},d(r){r&&(m(a),m(l),m(c),m(u)),k(e,r),k(t,r),k(n,r),o.d(r)}}}function Y(s){let e,a,t,l;return e=new J({props:{name:"Dropdown",source:`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart;

  const dropdownData = [
    { value: "AHpJL", label: "Chart #1" },
    { value: "91Q0t", label: "Chart #2" },
    { value: "eaD2D", label: "Chart #3" }
  ];
<\/script>

<BasicDropdown
  id="dropdown"
  data={dropdownData}
  inlineLabel="Dropdown"
  bind:value={selectedChart}
  placeholder={null}
/>

{#key selectedChart}
  <DatawrapperIframe datawrapperId={selectedChart} />
{/key}
`,$$slots:{default:[T]},$$scope:{ctx:s}}}),t=new J({props:{name:"Buttons",source:`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart;
<\/script>

<Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#key selectedChart}
  <DatawrapperIframe datawrapperId={selectedChart} />
{/key}
  `,$$slots:{default:[X]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment),a=b(),w(t.$$.fragment)},l(n){h(e.$$.fragment,n),a=C(n),h(t.$$.fragment,n)},m(n,c){D(e,n,c),$(n,a,c),D(t,n,c),l=!0},p(n,[c]){const _={};c&65&&(_.$$scope={dirty:c,ctx:n}),e.$set(_);const u={};c&65&&(u.$$scope={dirty:c,ctx:n}),t.$set(u)},i(n){l||(f(e.$$.fragment,n),f(t.$$.fragment,n),l=!0)},o(n){d(e.$$.fragment,n),d(t.$$.fragment,n),l=!1},d(n){n&&m(a),k(e,n),k(t,n)}}}const Z={title:"Examples/Stories/Datawrapper Switching",description:"Examples of switching between Datawrapper iframes"};function x(s,e,a){let t="AHpJL";const l=[{value:"AHpJL",label:"Chart #1"},{value:"91Q0t",label:"Chart #2"},{value:"eaD2D",label:"Chart #3"}];function n(i){t=i,a(0,t)}return[t,l,n,()=>a(0,t="AHpJL"),()=>a(0,t="91Q0t"),()=>a(0,t="eaD2D")]}class ee extends M{constructor(e){super(),O(this,e,x,Y,v,{})}}const S=P(ee,{meta:{title:"Examples/Stories/Datawrapper Switching"},stories:{Dropdown:{name:"Dropdown",template:!1,source:`<BasicDropdown
  id="dropdown"
  data={dropdownData}
  inlineLabel="Dropdown"
  bind:value={selectedChart}
  placeholder={null}
/>
{#key selectedChart}
  <DatawrapperIframe datawrapperId={selectedChart} />
{/key}`,hasArgs:!1},Buttons:{name:"Buttons",template:!1,source:`<Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>
{#key selectedChart}
  <DatawrapperIframe datawrapperId={selectedChart} />
{/key}`,hasArgs:!1}},allocatedIds:["default","Story","DatawrapperIframe","BasicDropdown","Button"]},Z),ie=S.meta,ue=["Dropdown","Buttons"],fe=S.stories.Dropdown,de=S.stories.Buttons;export{de as Buttons,fe as Dropdown,ue as __namedExportsOrder,ie as default};
