import{S as O,i as P,s as q,c as G,a as L,m as M,t as D,b as I,d as R,q as j,u as W,v as z,w as A}from"./index-Dy1J9qof.js";import{e as h,s as b,a as m,b as y,c as v,d as u,j as p,f as C,i as k,k as _,H as g,r as w,h as N}from"./lifecycle-mCW1c9RL.js";import{B as F}from"./Block-xppMl_dt.js";function T(o){let e,s,t=o[1]&&B(o),l=o[2]&&E(o);return{c(){e=h("div"),t&&t.c(),s=b(),l&&l.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var n=y(e);t&&t.l(n),s=v(n),l&&l.l(n),n.forEach(u),this.h()},h(){p(e,"class","chart-header svelte-1yl9e8o")},m(i,n){k(i,e,n),t&&t.m(e,null),_(e,s),l&&l.m(e,null)},p(i,n){i[1]?t?t.p(i,n):(t=B(i),t.c(),t.m(e,s)):t&&(t.d(1),t=null),i[2]?l?l.p(i,n):(l=E(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&u(e),t&&t.d(),l&&l.d()}}}function B(o){let e,s;return{c(){e=h("h4"),s=new g(!1),this.h()},l(t){e=m(t,"H4",{class:!0});var l=y(e);s=w(l,!1),l.forEach(u),this.h()},h(){s.a=null,p(e,"class","chart-title svelte-1yl9e8o")},m(t,l){k(t,e,l),s.m(o[1],e)},p(t,l){l&2&&s.p(t[1])},d(t){t&&u(e)}}}function E(o){let e,s;return{c(){e=h("p"),s=new g(!1),this.h()},l(t){e=m(t,"P",{class:!0});var l=y(e);s=w(l,!1),l.forEach(u),this.h()},h(){s.a=null,p(e,"class","chart-description svelte-1yl9e8o")},m(t,l){k(t,e,l),s.m(o[2],e)},p(t,l){l&4&&s.p(t[2])},d(t){t&&u(e)}}}function H(o){let e,s,t=o[3]&&S(o),l=o[4]&&V(o);return{c(){e=h("div"),t&&t.c(),s=b(),l&&l.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var n=y(e);t&&t.l(n),s=v(n),l&&l.l(n),n.forEach(u),this.h()},h(){p(e,"class","chart-footer svelte-1yl9e8o")},m(i,n){k(i,e,n),t&&t.m(e,null),_(e,s),l&&l.m(e,null)},p(i,n){i[3]?t?t.p(i,n):(t=S(i),t.c(),t.m(e,s)):t&&(t.d(1),t=null),i[4]?l?l.p(i,n):(l=V(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&u(e),t&&t.d(),l&&l.d()}}}function S(o){let e,s,t="Source:",l,i;return{c(){e=h("p"),s=h("strong"),s.textContent=t,l=b(),i=new g(!1),this.h()},l(n){e=m(n,"P",{class:!0});var a=y(e);s=m(a,"STRONG",{class:!0,"data-svelte-h":!0}),N(s)!=="svelte-myawrp"&&(s.textContent=t),l=v(a),i=w(a,!1),a.forEach(u),this.h()},h(){p(s,"class","svelte-1yl9e8o"),i.a=null,p(e,"class","svelte-1yl9e8o")},m(n,a){k(n,e,a),_(e,s),_(e,l),i.m(o[3],e)},p(n,a){a&8&&i.p(n[3])},d(n){n&&u(e)}}}function V(o){let e,s,t="Notes:",l,i;return{c(){e=h("p"),s=h("strong"),s.textContent=t,l=b(),i=new g(!1),this.h()},l(n){e=m(n,"P",{class:!0});var a=y(e);s=m(a,"STRONG",{class:!0,"data-svelte-h":!0}),N(s)!=="svelte-5k9uvd"&&(s.textContent=t),l=v(a),i=w(a,!1),a.forEach(u),this.h()},h(){p(s,"class","svelte-1yl9e8o"),i.a=null,p(e,"class","svelte-1yl9e8o")},m(n,a){k(n,e,a),_(e,s),_(e,l),i.m(o[4],e)},p(n,a){a&16&&i.p(n[4])},d(n){n&&u(e)}}}function J(o){let e,s,t,l,i=(o[1]||o[2])&&T(o);const n=o[6].default,a=j(n,o,o[7],null);let c=(o[3]||o[4])&&H(o);return{c(){e=h("div"),i&&i.c(),s=b(),a&&a.c(),t=b(),c&&c.c(),this.h()},l(r){e=m(r,"DIV",{class:!0});var f=y(e);i&&i.l(f),s=v(f),a&&a.l(f),t=v(f),c&&c.l(f),f.forEach(u),this.h()},h(){p(e,"class","chart-wrapper svelte-1yl9e8o"),C(e,"--current-color",o[5])},m(r,f){k(r,e,f),i&&i.m(e,null),_(e,s),a&&a.m(e,null),_(e,t),c&&c.m(e,null),l=!0},p(r,f){r[1]||r[2]?i?i.p(r,f):(i=T(r),i.c(),i.m(e,s)):i&&(i.d(1),i=null),a&&a.p&&(!l||f&128)&&W(a,n,r,r[7],l?A(n,r[7],f,null):z(r[7]),null),r[3]||r[4]?c?c.p(r,f):(c=H(r),c.c(),c.m(e,null)):c&&(c.d(1),c=null),f&32&&C(e,"--current-color",r[5])},i(r){l||(D(a,r),l=!0)},o(r){I(a,r),l=!1},d(r){r&&u(e),i&&i.d(),a&&a.d(r),c&&c.d()}}}function K(o){let e,s;return e=new F({props:{width:o[0],$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){M(e,t,l),s=!0},p(t,[l]){const i={};l&1&&(i.width=t[0]),l&190&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Q(o,e,s){let{$$slots:t={},$$scope:l}=e,{width:i="body"}=e,{title:n}=e,{description:a}=e,{source:c}=e,{notes:r}=e,{color:f="var(--color-black)"}=e;return o.$$set=d=>{"width"in d&&s(0,i=d.width),"title"in d&&s(1,n=d.title),"description"in d&&s(2,a=d.description),"source"in d&&s(3,c=d.source),"notes"in d&&s(4,r=d.notes),"color"in d&&s(5,f=d.color),"$$scope"in d&&s(7,l=d.$$scope)},[i,n,a,c,r,f,t,l]}class U extends O{constructor(e){super(),P(this,e,Q,K,q,{width:0,title:1,description:2,source:3,notes:4,color:5})}}U.__docgen={version:3,name:"ChartBlock.svelte",data:[{keywords:[{name:"type",description:'import("../Block/Block.svelte").BlockWidth'}],visibility:"public",description:'The width of the text block. Defaults to "body" (max-width: 760px)',name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"body"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The title of the chart block",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The description of the chart block",name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The source to include below the chart body - accepts HTML",name:"source",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The notes line to include below source - accepts HTML",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Optional color override for text",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"var(--color-black)"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{U as C};
