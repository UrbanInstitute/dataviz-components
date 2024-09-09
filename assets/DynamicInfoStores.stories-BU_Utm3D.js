import{S as W,i as q,s as z,c as B,a as C,m as j,t as I,b as O,d as E,l as w,e as A,f as H,g as M}from"./index-Dy1J9qof.js";import{s as N,m as v,c as P,i as $,d as m,n as F,e as G,t as _,a as J,b as K,g as b,k as h,l as g}from"./lifecycle-mCW1c9RL.js";import{e as y}from"./each-CjkgdRJJ.js";import{p as Q,S as R,d as T,w as U}from"./collect-stories-DS3D1-He.js";import{B as V}from"./BasicDropdown-D5Xnl74M.js";import"./urbanColors-BkxYcPwH.js";function S(s,t,n){const a=s.slice();return a[7]=t[n],a}function k(s){let t,n=s[7]+"",a,r,i=s[1][s[7]]+"",u;return{c(){t=G("p"),a=_(n),r=_(": "),u=_(i)},l(c){t=J(c,"P",{});var o=K(t);a=b(o,n),r=b(o,": "),u=b(o,i),o.forEach(m)},m(c,o){$(c,t,o),h(t,a),h(t,r),h(t,u)},p(c,o){o&2&&n!==(n=c[7]+"")&&g(a,n),o&2&&i!==(i=c[1][c[7]]+"")&&g(u,i)},d(c){c&&m(t)}}}function X(s){let t,n,a,r,i;function u(e){s[5](e)}let c={id:"dropdown",data:s[2],inlineLabel:"Dropdown",placeholder:null};s[0]!==void 0&&(c.value=s[0]),t=new V({props:c}),A.push(()=>H(t,"value",u));let o=y(Object.keys(s[1])),l=[];for(let e=0;e<o.length;e+=1)l[e]=k(S(s,o,e));return{c(){B(t.$$.fragment),a=N();for(let e=0;e<l.length;e+=1)l[e].c();r=v()},l(e){C(t.$$.fragment,e),a=P(e);for(let d=0;d<l.length;d+=1)l[d].l(e);r=v()},m(e,d){j(t,e,d),$(e,a,d);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,d);$(e,r,d),i=!0},p(e,d){const f={};if(!n&&d&1&&(n=!0,f.value=e[0],M(()=>n=!1)),t.$set(f),d&2){o=y(Object.keys(e[1]));let p;for(p=0;p<o.length;p+=1){const D=S(e,o,p);l[p]?l[p].p(D,d):(l[p]=k(D),l[p].c(),l[p].m(r.parentNode,r))}for(;p<l.length;p+=1)l[p].d(1);l.length=o.length}},i(e){i||(I(t.$$.fragment,e),i=!0)},o(e){O(t.$$.fragment,e),i=!1},d(e){e&&(m(a),m(r)),E(t,e),F(l,e)}}}function Y(s){let t,n;return t=new R({props:{name:"Default",source:`
<script>
  import { BasicDropdown } from "@urbaninstitute/dataviz-components";
  import { selected, selectedData } from "$lib/stores/selected";
  import data from "$data/data.json";

  // create dropdown data
  const dropdownData = data.map((d) => {
    return {
      value: d.value,
      label: d.label
    };
  });
<\/script>

<!-- dropdown to control selected item -->
<BasicDropdown
    id="dropdown"
    data={dropdownData}
    inlineLabel="Dropdown"
    bind:value={$selected}
    placeholder={null}
  />

<!-- access data of selected using selectedData -->
{#each Object.keys($selectedData) as field}
  <p>{field}: {$selectedData[field]}</p>
{/each}
`,$$slots:{default:[X]},$$scope:{ctx:s}}}),{c(){B(t.$$.fragment)},l(a){C(t.$$.fragment,a)},m(a,r){j(t,a,r),n=!0},p(a,[r]){const i={};r&1027&&(i.$$scope={dirty:r,ctx:a}),t.$set(i)},i(a){n||(I(t.$$.fragment,a),n=!0)},o(a){O(t.$$.fragment,a),n=!1},d(a){E(t,a)}}}const Z={title:"Examples/Stories/Dynamic Info With Stores"};function x(s,t,n){let a,r;const i=[{label:"Bar Chart",value:"barChart",metric:100},{label:"Column Chart",value:"columnChart",metric:200},{label:"Heatmap",value:"heatmap",metric:300}];i.reduce((e,d)=>(e[d.value]=d,e),i);const u=i.map(e=>({value:e.value,label:e.label})),c=U("barChart");w(s,c,e=>n(0,a=e));const o=T(c,e=>i[e]);w(s,o,e=>n(1,r=e));function l(e){a=e,c.set(a)}return[a,r,u,c,o,l]}class ee extends W{constructor(t){super(),q(this,t,x,Y,z,{})}}const L=Q(ee,{meta:{title:"Examples/Stories/Dynamic Info With Stores"},stories:{Default:{name:"Default",template:!1,source:`<BasicDropdown
  id="dropdown"
  data={dropdownData}
  inlineLabel="Dropdown"
  bind:value={$selected}
  placeholder={null}
/>
{#each Object.keys($selectedData) as field}
  <p>{field}: {$selectedData[field]}</p>
{/each}`,hasArgs:!1}},allocatedIds:["default","Story","writable","derived","BasicDropdown"]},Z),re=L.meta,ie=["Default"],ce=L.stories.Default;export{ce as Default,ie as __namedExportsOrder,re as default};
