import{S as j,i as w,s as D,c as l,a as f,m as c,t as $,b as u,d as g,k as N}from"./index-NH8Ck0Ec.js";import{s as v,c as T,i as S,d as C}from"./lifecycle-C5c7P8Xl.js";import{g as A,a as W}from"./spread-CgU5AtxT.js";import{N as h}from"./Navbar-DatL5ok2.js";import{p as U,T as x,S as P}from"./collect-stories-FKbactFq.js";import"./LogoUrbanBadge-Bdhmvtuy.js";import"./LogoTPCBadge-BH8d5s8W.js";function I(b){let a,o;const s=[b[0]];let m={};for(let e=0;e<s.length;e+=1)m=N(m,s[e]);return a=new h({props:m}),{c(){l(a.$$.fragment)},l(e){f(a.$$.fragment,e)},m(e,i){c(a,e,i),o=!0},p(e,i){const n=i&1?A(s,[W(e[0])]):{};a.$set(n)},i(e){o||($(a.$$.fragment,e),o=!0)},o(e){u(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function q(b){let a,o,s,m,e,i,n,d,p,y;return a=new x({props:{$$slots:{default:[I,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:b}}}),s=new P({props:{name:"Default"}}),e=new P({props:{name:"With title",args:{title:"Project title",projectUrl:"https://urban.org"}}}),n=new P({props:{name:"Sticky",args:{title:"Project title",projectUrl:"https://urban.org",sticky:!0}}}),p=new P({props:{name:"TPC",args:{title:"Project title",projectUrl:"https://urban.org",brand:"tpc"}}}),{c(){l(a.$$.fragment),o=v(),l(s.$$.fragment),m=v(),l(e.$$.fragment),i=v(),l(n.$$.fragment),d=v(),l(p.$$.fragment)},l(t){f(a.$$.fragment,t),o=T(t),f(s.$$.fragment,t),m=T(t),f(e.$$.fragment,t),i=T(t),f(n.$$.fragment,t),d=T(t),f(p.$$.fragment,t)},m(t,r){c(a,t,r),S(t,o,r),c(s,t,r),S(t,m,r),c(e,t,r),S(t,i,r),c(n,t,r),S(t,d,r),c(p,t,r),y=!0},p(t,[r]){const k={};r&3&&(k.$$scope={dirty:r,ctx:t}),a.$set(k)},i(t){y||($(a.$$.fragment,t),$(s.$$.fragment,t),$(e.$$.fragment,t),$(n.$$.fragment,t),$(p.$$.fragment,t),y=!0)},o(t){u(a.$$.fragment,t),u(s.$$.fragment,t),u(e.$$.fragment,t),u(n.$$.fragment,t),u(p.$$.fragment,t),y=!1},d(t){t&&(C(o),C(m),C(i),C(d)),g(a,t),g(s,t),g(e,t),g(n,t),g(p,t)}}}const E={title:"Components/Navbar",description:"A basic navbar",component:h,tags:["autodocs"],argTypes:{brand:{default:"urban",options:["urban","tpc"],control:"select"}},parameters:{docs:{description:{component:"Full width navigation bar for top of page. Includes <code>brand</code> and <code>sticky</code> properties for Urban/TPC logo and absolute position controls respectively."}}}};class F extends j{constructor(a){super(),w(this,a,null,q,D,{})}}const _=U(F,{meta:{title:"Components/Navbar",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:"<Navbar {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},WithTitle:{name:"With title",template:!1,source:"",hasArgs:!1},Sticky:{name:"Sticky",template:!1,source:"",hasArgs:!1},TPC:{name:"TPC",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},E),K=_.meta,L=["Default","WithTitle","Sticky","TPC"],Q=_.stories.Default,R=_.stories.WithTitle,V=_.stories.Sticky,X=_.stories.TPC;export{Q as Default,V as Sticky,X as TPC,R as WithTitle,L as __namedExportsOrder,K as default};
