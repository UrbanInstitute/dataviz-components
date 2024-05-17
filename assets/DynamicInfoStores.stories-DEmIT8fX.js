import{S as W,i as q,s as z,c as B,a as C,m as j,t as E,b as I,d as O,l as w,e as A,f as H,g as M}from"./index-BaWpflLG.js";import{s as N,j as v,c as P,i as $,d as m,k as x,e as F,t as _,a as G,b as J,g as b,l as h,m as g}from"./lifecycle-w2Z4hyCF.js";import{e as y}from"./each-D2PHN98N.js";import{p as K,S as Q,d as R,w as T}from"./collect-stories-DRVXZ_cd.js";import{B as U}from"./BasicDropdown-DlAi19-S.js";import"./urbanColors-BkxYcPwH.js";function S(s,t,o){const a=s.slice();return a[7]=t[o],a}function k(s){let t,o=s[7]+"",a,r,i=s[1][s[7]]+"",u;return{c(){t=F("p"),a=_(o),r=_(": "),u=_(i)},l(c){t=G(c,"P",{});var l=J(t);a=b(l,o),r=b(l,": "),u=b(l,i),l.forEach(m)},m(c,l){$(c,t,l),h(t,a),h(t,r),h(t,u)},p(c,l){l&2&&o!==(o=c[7]+"")&&g(a,o),l&2&&i!==(i=c[1][c[7]]+"")&&g(u,i)},d(c){c&&m(t)}}}function V(s){let t,o,a,r,i;function u(e){s[5](e)}let c={id:"dropdown",data:s[2],inlineLabel:"Dropdown",placeholder:null};s[0]!==void 0&&(c.value=s[0]),t=new U({props:c}),A.push(()=>H(t,"value",u));let l=y(Object.keys(s[1])),n=[];for(let e=0;e<l.length;e+=1)n[e]=k(S(s,l,e));return{c(){B(t.$$.fragment),a=N();for(let e=0;e<n.length;e+=1)n[e].c();r=v()},l(e){C(t.$$.fragment,e),a=P(e);for(let d=0;d<n.length;d+=1)n[d].l(e);r=v()},m(e,d){j(t,e,d),$(e,a,d);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,d);$(e,r,d),i=!0},p(e,d){const f={};if(!o&&d&1&&(o=!0,f.value=e[0],M(()=>o=!1)),t.$set(f),d&2){l=y(Object.keys(e[1]));let p;for(p=0;p<l.length;p+=1){const D=S(e,l,p);n[p]?n[p].p(D,d):(n[p]=k(D),n[p].c(),n[p].m(r.parentNode,r))}for(;p<n.length;p+=1)n[p].d(1);n.length=l.length}},i(e){i||(E(t.$$.fragment,e),i=!0)},o(e){I(t.$$.fragment,e),i=!1},d(e){e&&(m(a),m(r)),O(t,e),x(n,e)}}}function X(s){let t,o;return t=new Q({props:{name:"Default",source:`
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
`,$$slots:{default:[V]},$$scope:{ctx:s}}}),{c(){B(t.$$.fragment)},l(a){C(t.$$.fragment,a)},m(a,r){j(t,a,r),o=!0},p(a,[r]){const i={};r&1027&&(i.$$scope={dirty:r,ctx:a}),t.$set(i)},i(a){o||(E(t.$$.fragment,a),o=!0)},o(a){I(t.$$.fragment,a),o=!1},d(a){O(t,a)}}}const Y={title:"Examples/Stories/Dynamic Info With Stores",description:"Example of writable/derived Svelte store for dynamic data lookup"};function Z(s,t,o){let a,r;const i=[{label:"Bar Chart",value:"barChart",metric:100},{label:"Column Chart",value:"columnChart",metric:200},{label:"Heatmap",value:"heatmap",metric:300}];i.reduce((e,d)=>(e[d.value]=d,e),i);const u=i.map(e=>({value:e.value,label:e.label})),c=T("barChart");w(s,c,e=>o(0,a=e));const l=R(c,e=>i[e]);w(s,l,e=>o(1,r=e));function n(e){a=e,c.set(a)}return[a,r,u,c,l,n]}class ee extends W{constructor(t){super(),q(this,t,Z,X,z,{})}}const L=K(ee,{meta:{title:"Examples/Stories/Dynamic Info With Stores"},stories:{Default:{name:"Default",template:!1,source:`<BasicDropdown
  id="dropdown"
  data={dropdownData}
  inlineLabel="Dropdown"
  bind:value={$selected}
  placeholder={null}
/>
{#each Object.keys($selectedData) as field}
  <p>{field}: {$selectedData[field]}</p>
{/each}`,hasArgs:!1}},allocatedIds:["default","Story","writable","derived","BasicDropdown"]},Y),re=L.meta,ie=["Default"],ce=L.stories.Default;export{ce as Default,ie as __namedExportsOrder,re as default};
