import{S as F,i as W,s as T,c as u,a as i,m as p,t as c,b as g,d as _,o as k,n as D}from"./index-Dy1J9qof.js";import{s as I,c as v,i as b,d as S}from"./lifecycle-mCW1c9RL.js";import{g as j,a as q}from"./spread-CgU5AtxT.js";import{I as z}from"./IconPlus-aF7wFi5t.js";import{p as x,T as E,S as y}from"./collect-stories-DS3D1-He.js";import{u as L}from"./urbanColors-BkxYcPwH.js";function M(f){let t,a;const s=[f[0]];let o={};for(let n=0;n<s.length;n+=1)o=k(o,s[n]);return t=new z({props:o}),{c(){u(t.$$.fragment)},l(n){i(t.$$.fragment,n)},m(n,m){p(t,n,m),a=!0},p(n,m){const l=m&1?j(s,[q(n[0])]):{};t.$set(l)},i(n){a||(c(t.$$.fragment,n),a=!0)},o(n){g(t.$$.fragment,n),a=!1},d(n){_(t,n)}}}function O(f){let t,a;return t=new z({props:{fill:L.blue}}),{c(){u(t.$$.fragment)},l(s){i(t.$$.fragment,s)},m(s,o){p(t,s,o),a=!0},p:D,i(s){a||(c(t.$$.fragment,s),a=!0)},o(s){g(t.$$.fragment,s),a=!1},d(s){_(t,s)}}}function B(f){let t,a;return t=new z({props:{size:65}}),{c(){u(t.$$.fragment)},l(s){i(t.$$.fragment,s)},m(s,o){p(t,s,o),a=!0},p:D,i(s){a||(c(t.$$.fragment,s),a=!0)},o(s){g(t.$$.fragment,s),a=!1},d(s){_(t,s)}}}function G(f){let t,a,s,o,n,m,l,C,$,h;return t=new E({props:{$$slots:{default:[M,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:f}}}),s=new y({props:{name:"Default"}}),n=new y({props:{name:"ForCanvas"}}),l=new y({props:{name:"WithColor",$$slots:{default:[O]},$$scope:{ctx:f}}}),$=new y({props:{name:"ChangingSize",$$slots:{default:[B]},$$scope:{ctx:f}}}),{c(){u(t.$$.fragment),a=I(),u(s.$$.fragment),o=I(),u(n.$$.fragment),m=I(),u(l.$$.fragment),C=I(),u($.$$.fragment)},l(e){i(t.$$.fragment,e),a=v(e),i(s.$$.fragment,e),o=v(e),i(n.$$.fragment,e),m=v(e),i(l.$$.fragment,e),C=v(e),i($.$$.fragment,e)},m(e,r){p(t,e,r),b(e,a,r),p(s,e,r),b(e,o,r),p(n,e,r),b(e,m,r),p(l,e,r),b(e,C,r),p($,e,r),h=!0},p(e,[r]){const P={};r&3&&(P.$$scope={dirty:r,ctx:e}),t.$set(P);const w={};r&2&&(w.$$scope={dirty:r,ctx:e}),l.$set(w);const A={};r&2&&(A.$$scope={dirty:r,ctx:e}),$.$set(A)},i(e){h||(c(t.$$.fragment,e),c(s.$$.fragment,e),c(n.$$.fragment,e),c(l.$$.fragment,e),c($.$$.fragment,e),h=!0)},o(e){g(t.$$.fragment,e),g(s.$$.fragment,e),g(n.$$.fragment,e),g(l.$$.fragment,e),g($.$$.fragment,e),h=!1},d(e){e&&(S(a),S(o),S(m),S(C)),_(t,e),_(s,e),_(n,e),_(l,e),_($,e)}}}const H={title:"Icons/Icons/IconPlus",component:z,argTypes:{size:{default:40},fill:{control:{type:"color",presetColors:["#000","#1696D2","#fbdf11"]}}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:"Any of these icons can be pulled in as standalone components. They are intended as decorations, and do not include `onClick` parameters. "}},githubLink:{url:"/Icons/IconPlus.svelte"}}};class J extends F{constructor(t){super(),W(this,t,null,G,T,{})}}const d=x(J,{meta:{title:"Icons/Icons/IconPlus"},stories:{"tpl:default":{name:"default",template:!0,source:"<IconPlus {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},ForCanvas:{name:"ForCanvas",template:!1,source:"",hasArgs:!1},WithColor:{name:"WithColor",template:!1,source:"<IconPlus fill={urbanColors.blue} />",hasArgs:!1},ChangingSize:{name:"ChangingSize",template:!1,source:"<IconPlus size={65} />",hasArgs:!1}},allocatedIds:["default","Story","Template","urbanColors"]},H),X=d.meta,Y=["Default","ForCanvas","WithColor","ChangingSize"],Z=d.stories.Default,ee=d.stories.ForCanvas,te=d.stories.WithColor,se=d.stories.ChangingSize;export{se as ChangingSize,Z as Default,ee as ForCanvas,te as WithColor,Y as __namedExportsOrder,X as default};
