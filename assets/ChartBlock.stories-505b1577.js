import{S as O,i as R,s as z,c as v,a as C,m as D,t as y,b as k,d as T,f as K,u as Q,g as U,h as Y,e as Z,n as N}from"./index-e3b48b1c.js";import{e as h,s as $,a as m,f as B,c as b,d as u,o as w,b as g,i as d,j as _,t as P,h as q,k as G,H as X,g as E,w as J}from"./lifecycle-6e31b59c.js";import{g as x,a as ee}from"./spread-8a54911c.js";import{D as te}from"./DatawrapperIframe-70ad2fb3.js";import{B as se}from"./Block-814cd1a8.js";import{p as ae,T as le,S as I}from"./collect-stories-7274ab70.js";function W(n){let e,l,t=n[1]&&H(n),s=n[2]&&V(n);return{c(){e=h("div"),t&&t.c(),l=$(),s&&s.c(),this.h()},l(a){e=m(a,"DIV",{class:!0});var i=B(e);t&&t.l(i),l=b(i),s&&s.l(i),i.forEach(u),this.h()},h(){w(e,"class","chart-header svelte-1y53tly")},m(a,i){d(a,e,i),t&&t.m(e,null),_(e,l),s&&s.m(e,null)},p(a,i){a[1]?t?t.p(a,i):(t=H(a),t.c(),t.m(e,l)):t&&(t.d(1),t=null),a[2]?s?s.p(a,i):(s=V(a),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(a){a&&u(e),t&&t.d(),s&&s.d()}}}function H(n){let e,l;return{c(){e=h("h4"),l=P(n[1]),this.h()},l(t){e=m(t,"H4",{class:!0});var s=B(e);l=q(s,n[1]),s.forEach(u),this.h()},h(){w(e,"class","chart-title svelte-1y53tly")},m(t,s){d(t,e,s),_(e,l)},p(t,s){s&2&&G(l,t[1])},d(t){t&&u(e)}}}function V(n){let e,l;return{c(){e=h("p"),l=P(n[2]),this.h()},l(t){e=m(t,"P",{class:!0});var s=B(e);l=q(s,n[2]),s.forEach(u),this.h()},h(){w(e,"class","chart-description svelte-1y53tly")},m(t,s){d(t,e,s),_(e,l)},p(t,s){s&4&&G(l,t[2])},d(t){t&&u(e)}}}function M(n){let e,l,t=n[3]&&j(n),s=n[4]&&L(n);return{c(){e=h("div"),t&&t.c(),l=$(),s&&s.c(),this.h()},l(a){e=m(a,"DIV",{class:!0});var i=B(e);t&&t.l(i),l=b(i),s&&s.l(i),i.forEach(u),this.h()},h(){w(e,"class","chart-footer svelte-1y53tly")},m(a,i){d(a,e,i),t&&t.m(e,null),_(e,l),s&&s.m(e,null)},p(a,i){a[3]?t?t.p(a,i):(t=j(a),t.c(),t.m(e,l)):t&&(t.d(1),t=null),a[4]?s?s.p(a,i):(s=L(a),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(a){a&&u(e),t&&t.d(),s&&s.d()}}}function j(n){let e,l,t="Source:",s,a;return{c(){e=h("p"),l=h("strong"),l.textContent=t,s=$(),a=new X(!1),this.h()},l(i){e=m(i,"P",{class:!0});var o=B(e);l=m(o,"STRONG",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-myawrp"&&(l.textContent=t),s=b(o),a=J(o,!1),o.forEach(u),this.h()},h(){w(l,"class","svelte-1y53tly"),a.a=null,w(e,"class","svelte-1y53tly")},m(i,o){d(i,e,o),_(e,l),_(e,s),a.m(n[3],e)},p(i,o){o&8&&a.p(i[3])},d(i){i&&u(e)}}}function L(n){let e,l,t="Notes:",s,a;return{c(){e=h("p"),l=h("strong"),l.textContent=t,s=$(),a=new X(!1),this.h()},l(i){e=m(i,"P",{class:!0});var o=B(e);l=m(o,"STRONG",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-5k9uvd"&&(l.textContent=t),s=b(o),a=J(o,!1),o.forEach(u),this.h()},h(){w(l,"class","svelte-1y53tly"),a.a=null,w(e,"class","svelte-1y53tly")},m(i,o){d(i,e,o),_(e,l),_(e,s),a.m(n[4],e)},p(i,o){o&16&&a.p(i[4])},d(i){i&&u(e)}}}function re(n){let e,l,t,s,a=(n[1]||n[2])&&W(n);const i=n[6].default,o=K(i,n,n[7],null);let f=(n[3]||n[4])&&M(n);return{c(){e=h("div"),a&&a.c(),l=$(),o&&o.c(),t=$(),f&&f.c(),this.h()},l(r){e=m(r,"DIV",{class:!0});var c=B(e);a&&a.l(c),l=b(c),o&&o.l(c),t=b(c),f&&f.l(c),c.forEach(u),this.h()},h(){w(e,"class","chart-wrapper svelte-1y53tly"),g(e,"--current-color",n[5])},m(r,c){d(r,e,c),a&&a.m(e,null),_(e,l),o&&o.m(e,null),_(e,t),f&&f.m(e,null),s=!0},p(r,c){r[1]||r[2]?a?a.p(r,c):(a=W(r),a.c(),a.m(e,l)):a&&(a.d(1),a=null),o&&o.p&&(!s||c&128)&&Q(o,i,r,r[7],s?Y(i,r[7],c,null):U(r[7]),null),r[3]||r[4]?f?f.p(r,c):(f=M(r),f.c(),f.m(e,null)):f&&(f.d(1),f=null),c&32&&g(e,"--current-color",r[5])},i(r){s||(y(o,r),s=!0)},o(r){k(o,r),s=!1},d(r){r&&u(e),a&&a.d(),o&&o.d(r),f&&f.d()}}}function ie(n){let e,l;return e=new se({props:{width:n[0],$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){D(e,t,s),l=!0},p(t,[s]){const a={};s&1&&(a.width=t[0]),s&190&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function ne(n,e,l){let{$$slots:t={},$$scope:s}=e,{width:a="body"}=e,{title:i}=e,{description:o}=e,{source:f}=e,{notes:r}=e,{color:c="var(--color-black)"}=e;return n.$$set=p=>{"width"in p&&l(0,a=p.width),"title"in p&&l(1,i=p.title),"description"in p&&l(2,o=p.description),"source"in p&&l(3,f=p.source),"notes"in p&&l(4,r=p.notes),"color"in p&&l(5,c=p.color),"$$scope"in p&&l(7,s=p.$$scope)},[a,i,o,f,r,c,t,s]}class A extends O{constructor(e){super(),R(this,e,ne,ie,z,{width:0,title:1,description:2,source:3,notes:4,color:5})}}A.__docgen={version:3,name:"ChartBlock.svelte",data:[{keywords:[{name:"type",description:'import("../Block/Block.svelte").BlockWidth'}],visibility:"public",description:'The width of the text block. Defaults to "body" (max-width: 760px)',name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"body"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The title of the chart block",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The description of the chart block",name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The source to include below the chart body - accepts HTML",name:"source",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"The notes line to include below source - accepts HTML",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Optional color override for text",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"var(--color-black)"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function oe(n){let e,l="Chart area";return{c(){e=h("div"),e.textContent=l,this.h()},l(t){e=m(t,"DIV",{style:!0,"data-svelte-h":!0}),E(e)!=="svelte-1sq91v1"&&(e.textContent=l),this.h()},h(){g(e,"height","350px"),g(e,"width","100%"),g(e,"background","#dededd"),g(e,"color","#000000"),g(e,"display","flex"),g(e,"align-items","center"),g(e,"justify-content","center")},m(t,s){d(t,e,s)},p:N,d(t){t&&u(e)}}}function ce(n){let e,l;const t=[n[1]];let s={$$slots:{default:[oe]},$$scope:{ctx:n}};for(let a=0;a<t.length;a+=1)s=Z(s,t[a]);return e=new A({props:s}),{c(){v(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,i){D(e,a,i),l=!0},p(a,i){const o=i&2?x(t,[ee(a[1])]):{};i&4&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){l||(y(e.$$.fragment,a),l=!0)},o(a){k(e.$$.fragment,a),l=!1},d(a){T(e,a)}}}function fe(n){let e,l;return e=new te({props:{title:"Datawrapper title",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"RMnkX"}}),{c(){v(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){D(e,t,s),l=!0},p:N,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function ue(n){let e,l;return e=new A({props:{title:"Datawrapper chart",description:"This is what a Datawrapper looks like inside this component.",source:"Chart source",notes:"Chart notes",$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){D(e,t,s),l=!0},p(t,s){const a={};s&4&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function pe(n){let e,l,t,s,a,i,o,f;return e=new le({props:{$$slots:{default:[ce,({args:r})=>({1:r}),({args:r})=>r?2:0]},$$scope:{ctx:n}}}),t=new I({props:{name:"Default",args:n[0]}}),a=new I({props:{name:"Custom text color",parameters:{backgrounds:{default:"dark"}},args:{...n[0],color:"#FFFFFF"}}}),o=new I({props:{name:"With a Datawrapper chart",args:{...n[0],color:"#FFFFFF"},$$slots:{default:[ue]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment),l=$(),v(t.$$.fragment),s=$(),v(a.$$.fragment),i=$(),v(o.$$.fragment)},l(r){C(e.$$.fragment,r),l=b(r),C(t.$$.fragment,r),s=b(r),C(a.$$.fragment,r),i=b(r),C(o.$$.fragment,r)},m(r,c){D(e,r,c),d(r,l,c),D(t,r,c),d(r,s,c),D(a,r,c),d(r,i,c),D(o,r,c),f=!0},p(r,[c]){const p={};c&6&&(p.$$scope={dirty:c,ctx:r}),e.$set(p);const S={};c&4&&(S.$$scope={dirty:c,ctx:r}),o.$set(S)},i(r){f||(y(e.$$.fragment,r),y(t.$$.fragment,r),y(a.$$.fragment,r),y(o.$$.fragment,r),f=!0)},o(r){k(e.$$.fragment,r),k(t.$$.fragment,r),k(a.$$.fragment,r),k(o.$$.fragment,r),f=!1},d(r){r&&(u(l),u(s),u(i)),T(e,r),T(t,r),T(a,r),T(o,r)}}}const de={title:"Components/ChartBlock",description:"A basic wrapper for charts that includes, title, description, source, and notes.",component:A,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","wide","full"],control:"select"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:"A basic wrapper for charts that includes, title, description, source, and notes. The default slot can be used to include any type of content or visualization between the provided text."}}}};function he(n){return[{title:"Chart title",description:"Chart description",source:"Chart source",notes:"Chart notes"}]}class me extends O{constructor(e){super(),R(this,e,he,pe,z,{})}}const F=ae(me,{meta:{title:"Components/ChartBlock",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<ChartBlock {...args}>
  <div
    style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
  >
    Chart area
  </div>
</ChartBlock>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},CustomTextColor:{name:"Custom text color",template:!1,source:"",hasArgs:!1},WithADatawrapperChart:{name:"With a Datawrapper chart",template:!1,source:`<ChartBlock title="Datawrapper chart" description="This is what a Datawrapper looks like inside this component." source="Chart source" notes="Chart notes">
  <DatawrapperIframe
    title="Datawrapper title"
    ariaLabel="This is an accessible title for the visualization"
    datawrapperId="RMnkX"
  />
</ChartBlock>`,hasArgs:!1}},allocatedIds:["default","Story","Template"]},de),we=F.meta,ve=["Default","CustomTextColor","WithADatawrapperChart"],Ce=F.stories.Default,De=F.stories.CustomTextColor,Te=F.stories.WithADatawrapperChart;export{De as CustomTextColor,Ce as Default,Te as WithADatawrapperChart,ve as __namedExportsOrder,we as default};