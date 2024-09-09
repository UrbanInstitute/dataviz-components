import{S as w,i as D,s as y,c as i,a as f,m as u,t as p,b as g,d as c,o as V}from"./index-Dy1J9qof.js";import{s as d,c as b,i as h,d as L}from"./lifecycle-mCW1c9RL.js";import{g as k,a as A}from"./spread-CgU5AtxT.js";import{L as v}from"./LogoUrban-DeHlqEDu.js";import{p as S,T,S as U}from"./collect-stories-DS3D1-He.js";const W='Urban Institute logo in full width format.\n\n```js\nimport { LogoUrban } from "@urbaninstitute/dataviz-components";\n```\n';function x(m){let a,s;const r=[m[0]];let o={};for(let e=0;e<r.length;e+=1)o=V(o,r[e]);return a=new v({props:o}),{c(){i(a.$$.fragment)},l(e){f(a.$$.fragment,e)},m(e,n){u(a,e,n),s=!0},p(e,n){const t=n&1?k(r,[A(e[0])]):{};a.$set(t)},i(e){s||(p(a.$$.fragment,e),s=!0)},o(e){g(a.$$.fragment,e),s=!1},d(e){c(a,e)}}}function j(m){let a,s,r,o,e,n;return a=new T({props:{$$slots:{default:[x,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:m}}}),r=new U({props:{name:"Default"}}),e=new U({props:{name:"Variant - white",args:{variant:"white"},parameters:{backgrounds:{default:"dark"}}}}),{c(){i(a.$$.fragment),s=d(),i(r.$$.fragment),o=d(),i(e.$$.fragment)},l(t){f(a.$$.fragment,t),s=b(t),f(r.$$.fragment,t),o=b(t),f(e.$$.fragment,t)},m(t,l){u(a,t,l),h(t,s,l),u(r,t,l),h(t,o,l),u(e,t,l),n=!0},p(t,[l]){const _={};l&3&&(_.$$scope={dirty:l,ctx:t}),a.$set(_)},i(t){n||(p(a.$$.fragment,t),p(r.$$.fragment,t),p(e.$$.fragment,t),n=!0)},o(t){g(a.$$.fragment,t),g(r.$$.fragment,t),g(e.$$.fragment,t),n=!1},d(t){t&&(L(s),L(o)),c(a,t),c(r,t),c(e,t)}}}const C={title:"Logos/LogoUrban",component:v,tags:["autodocs"],argTypes:{variant:{options:["color","white"],control:"select"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:W}},githubLink:{url:"/LogoUrban/LogoUrban.svelte"}}};class I extends w{constructor(a){super(),D(this,a,null,j,y,{})}}const $=S(I,{meta:{title:"Logos/LogoUrban",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:"<LogoUrban {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},VariantWhite:{name:"Variant - white",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},C),B=$.meta,F=["Default","VariantWhite"],G=$.stories.Default,H=$.stories.VariantWhite;export{G as Default,H as VariantWhite,F as __namedExportsOrder,B as default};
