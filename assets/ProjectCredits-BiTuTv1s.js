import{S as L,i as D,s as N,q as z,c as H,a as E,m as A,u as F,v as J,w as K,t as _,h as M,b as d,j as O,d as C}from"./index-lamZ5WrB.js";import{e as y,s as $,a as v,b as w,c as k,d as m,j as g,i as b,k as p,n as Q,t as j,g as U,H as R,u as W,l as X}from"./lifecycle-BNS46k4e.js";import{e as V}from"./each-CxU73AbR.js";import{H as Y}from"./HeadingAlt-Chpw3Ewv.js";import{T as Z}from"./TextBlock-DteTF_oO.js";import{B}from"./Block-CN5G-V4Q.js";function G(o,e,n){const t=o.slice();return t[5]=e[n],t}const x=o=>({}),S=o=>({});function ee(o){let e,n;return e=new Y({props:{content:o[0]}}),{c(){H(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){A(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.content=t[0]),e.$set(i)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function q(o){let e,n,t=o[5].label+"",l,i,s,u=o[5].content+"",h;return{c(){e=y("li"),n=y("span"),l=j(t),i=$(),s=new R(!1),h=$(),this.h()},l(c){e=v(c,"LI",{class:!0});var a=w(e);n=v(a,"SPAN",{class:!0});var r=w(n);l=U(r,t),r.forEach(m),i=k(a),s=W(a,!1),h=k(a),a.forEach(m),this.h()},h(){g(n,"class","label svelte-1afphvf"),s.a=h,g(e,"class","svelte-1afphvf")},m(c,a){b(c,e,a),p(e,n),p(n,l),p(e,i),s.m(u,e),p(e,h)},p(c,a){a&2&&t!==(t=c[5].label+"")&&X(l,t),a&2&&u!==(u=c[5].content+"")&&s.p(u)},d(c){c&&m(e)}}}function te(o){let e,n=V(o[1]),t=[];for(let l=0;l<n.length;l+=1)t[l]=q(G(o,n,l));return{c(){e=y("ul");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"UL",{class:!0});var i=w(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(m),this.h()},h(){g(e,"class","credits-list svelte-1afphvf")},m(l,i){b(l,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,i){if(i&2){n=V(l[1]);let s;for(s=0;s<n.length;s+=1){const u=G(l,n,s);t[s]?t[s].p(u,i):(t[s]=q(u),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&m(e),Q(t,l)}}}function I(o){let e,n;return e=new Z({props:{$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){H(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){A(e,t,l),n=!0},p(t,l){const i={};l&20&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ne(o){let e,n,t,l;return{c(){e=j("View the project on "),n=y("a"),t=j("Github"),l=j("."),this.h()},l(i){e=U(i,"View the project on "),n=v(i,"A",{href:!0,target:!0});var s=w(n);t=U(s,"Github"),s.forEach(m),l=U(i,"."),this.h()},h(){g(n,"href",o[2]),g(n,"target","_blank")},m(i,s){b(i,e,s),b(i,n,s),p(n,t),b(i,l,s)},p(i,s){s&4&&g(n,"href",i[2])},d(i){i&&(m(e),m(n),m(l))}}}function le(o){let e,n,t,l,i,s,u;n=new B({props:{$$slots:{default:[ee]},$$scope:{ctx:o}}});const h=o[3].intro,c=z(h,o,o[4],S);i=new B({props:{$$slots:{default:[te]},$$scope:{ctx:o}}});let a=o[2]&&I(o);return{c(){e=y("div"),H(n.$$.fragment),t=$(),c&&c.c(),l=$(),H(i.$$.fragment),s=$(),a&&a.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var f=w(e);E(n.$$.fragment,f),t=k(f),c&&c.l(f),l=k(f),E(i.$$.fragment,f),s=k(f),a&&a.l(f),f.forEach(m),this.h()},h(){g(e,"class","project-credits-wrapper svelte-1afphvf")},m(r,f){b(r,e,f),A(n,e,null),p(e,t),c&&c.m(e,null),p(e,l),A(i,e,null),p(e,s),a&&a.m(e,null),u=!0},p(r,[f]){const P={};f&17&&(P.$$scope={dirty:f,ctx:r}),n.$set(P),c&&c.p&&(!u||f&16)&&F(c,h,r,r[4],u?K(h,r[4],f,x):J(r[4]),S);const T={};f&18&&(T.$$scope={dirty:f,ctx:r}),i.$set(T),r[2]?a?(a.p(r,f),f&4&&_(a,1)):(a=I(r),a.c(),_(a,1),a.m(e,null)):a&&(M(),d(a,1,1,()=>{a=null}),O())},i(r){u||(_(n.$$.fragment,r),_(c,r),_(i.$$.fragment,r),_(a),u=!0)},o(r){d(n.$$.fragment,r),d(c,r),d(i.$$.fragment,r),d(a),u=!1},d(r){r&&m(e),C(n),c&&c.d(r),C(i),a&&a.d()}}}function se(o,e,n){let{$$slots:t={},$$scope:l}=e,{heading:i}=e,{items:s}=e,{githubUrl:u=null}=e;return o.$$set=h=>{"heading"in h&&n(0,i=h.heading),"items"in h&&n(1,s=h.items),"githubUrl"in h&&n(2,u=h.githubUrl),"$$scope"in h&&n(4,l=h.$$scope)},[i,s,u,t,l]}class ie extends L{constructor(e){super(),D(this,e,se,le,N,{heading:0,items:1,githubUrl:2})}}ie.__docgen={version:3,name:"ProjectCredits.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Heading to display above credits block",name:"heading",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{{label: string, content: string}[]}"}],visibility:"public",description:"The credit items to display",name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"{label: string, content: string}[]",type:"{label: string, content: string}[]"}},{keywords:[{name:"type",description:"{string | null} [githubUrl=null]"}],visibility:"public",description:"An optional link to a Github repo to display",name:"githubUrl",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"string | null",type:[{kind:"type",text:"string",type:"string"},{kind:"type",text:"null",type:"null"}]},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Content to render between the heading and the items",name:"intro"}],refs:[]};export{ie as P};
