import{S as y,i as B,s as w,c as d,a as f,m as $,t as g,b as _,d as b,e as E,n as M}from"./index-35729bac.js";import{s as h,c as k,i as m,d as c,t as C,e as H,m as D,a as P,g as R,k as V}from"./lifecycle-6f47ab4a.js";import{g as U,a as O}from"./spread-8a54911c.js";import{T as L}from"./TextBlock-2b2fa6b4.js";import{p as S,T as j,S as T}from"./collect-stories-0212875f.js";/* empty css            */import"./Block-119b8492.js";function I(u){let e;return{c(){e=C(`Enim id qui labore labore quis ut enim tempor sint quis proident voluptate ex. Duis nisi minim
    et occaecat do ullamco nisi dolore ipsum proident tempor aute exercitation duis. Proident
    pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est cillum ut dolore quis
    consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore incididunt sint
    eiusmod ullamco mollit consequat.`)},l(s){e=D(s,`Enim id qui labore labore quis ut enim tempor sint quis proident voluptate ex. Duis nisi minim
    et occaecat do ullamco nisi dolore ipsum proident tempor aute exercitation duis. Proident
    pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est cillum ut dolore quis
    consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore incididunt sint
    eiusmod ullamco mollit consequat.`)},m(s,i){m(s,e,i)},d(s){s&&c(e)}}}function z(u){let e,s;const i=[u[0]];let a={$$slots:{default:[I]},$$scope:{ctx:u}};for(let o=0;o<i.length;o+=1)a=E(a,i[o]);return e=new L({props:a}),{c(){d(e.$$.fragment)},l(o){f(e.$$.fragment,o)},m(o,r){$(e,o,r),s=!0},p(o,r){const l=r&1?U(i,[O(o[0])]):{};r&2&&(l.$$scope={dirty:r,ctx:o}),e.$set(l)},i(o){s||(g(e.$$.fragment,o),s=!0)},o(o){_(e.$$.fragment,o),s=!1},d(o){b(e,o)}}}function F(u){let e,s,i="labore labore quis",a;return{c(){e=C("Enim id qui "),s=H("a"),s.textContent=i,a=C(` ut enim tempor sint
    quis proident voluptate ex. Duis nisi minim et occaecat do ullamco nisi dolore ipsum proident tempor
    aute exercitation duis. Proident pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est
    cillum ut dolore quis consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore
    incididunt sint eiusmod ullamco mollit consequat.`),this.h()},l(o){e=D(o,"Enim id qui "),s=P(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),R(s)!=="svelte-1utc50y"&&(s.textContent=i),a=D(o,` ut enim tempor sint
    quis proident voluptate ex. Duis nisi minim et occaecat do ullamco nisi dolore ipsum proident tempor
    aute exercitation duis. Proident pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est
    cillum ut dolore quis consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore
    incididunt sint eiusmod ullamco mollit consequat.`),this.h()},h(){V(s,"href","https://urban.org"),V(s,"target","_blank")},m(o,r){m(o,e,r),m(o,s,r),m(o,a,r)},p:M,d(o){o&&(c(e),c(s),c(a))}}}function G(u){let e,s;return e=new L({props:{$$slots:{default:[F]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment)},l(i){f(e.$$.fragment,i)},m(i,a){$(e,i,a),s=!0},p(i,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:i}),e.$set(o)},i(i){s||(g(e.$$.fragment,i),s=!0)},o(i){_(e.$$.fragment,i),s=!1},d(i){b(e,i)}}}function J(u){let e,s,i,a,o,r,l,v,p,q;return e=new j({props:{$$slots:{default:[z,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:u}}}),i=new T({props:{name:"Default"}}),o=new T({props:{name:"With HTML content",$$slots:{default:[G]},$$scope:{ctx:u}}}),l=new T({props:{name:"Reversed variant",parameters:{backgrounds:{default:"dark"}},args:{variant:"reverse"}}}),p=new T({props:{name:"With color override",args:{color:"#0a4c6a"}}}),{c(){d(e.$$.fragment),s=h(),d(i.$$.fragment),a=h(),d(o.$$.fragment),r=h(),d(l.$$.fragment),v=h(),d(p.$$.fragment)},l(t){f(e.$$.fragment,t),s=k(t),f(i.$$.fragment,t),a=k(t),f(o.$$.fragment,t),r=k(t),f(l.$$.fragment,t),v=k(t),f(p.$$.fragment,t)},m(t,n){$(e,t,n),m(t,s,n),$(i,t,n),m(t,a,n),$(o,t,n),m(t,r,n),$(l,t,n),m(t,v,n),$(p,t,n),q=!0},p(t,[n]){const W={};n&3&&(W.$$scope={dirty:n,ctx:t}),e.$set(W);const A={};n&2&&(A.$$scope={dirty:n,ctx:t}),o.$set(A)},i(t){q||(g(e.$$.fragment,t),g(i.$$.fragment,t),g(o.$$.fragment,t),g(l.$$.fragment,t),g(p.$$.fragment,t),q=!0)},o(t){_(e.$$.fragment,t),_(i.$$.fragment,t),_(o.$$.fragment,t),_(l.$$.fragment,t),_(p.$$.fragment,t),q=!1},d(t){t&&(c(s),c(a),c(r),c(v)),b(e,t),b(i,t),b(o,t),b(l,t),b(p,t)}}}const K={title:"Components/TextBlock",description:"A basic text block",component:L,tags:["autodocs"],argTypes:{width:{default:"body",options:["body","full"],control:"select"},variant:{default:"primary",options:["primary","reverse"],control:"select"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0A4C6A"}]},docs:{description:{component:"A basic text block."}}}};class N extends y{constructor(e){super(),B(this,e,null,J,w,{})}}const x=S(N,{meta:{title:"Components/TextBlock",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<TextBlock {...args}>
  Enim id qui labore labore quis ut enim tempor sint quis proident voluptate ex. Duis nisi minim
  et occaecat do ullamco nisi dolore ipsum proident tempor aute exercitation duis. Proident
  pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est cillum ut dolore quis
  consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore incididunt sint
  eiusmod ullamco mollit consequat.
</TextBlock>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},WithHTMLContent:{name:"With HTML content",template:!1,source:`<TextBlock>
  Enim id qui <a href="https://urban.org" target="_blank">labore labore quis</a> ut enim tempor sint
  quis proident voluptate ex. Duis nisi minim et occaecat do ullamco nisi dolore ipsum proident tempor
  aute exercitation duis. Proident pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est
  cillum ut dolore quis consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore
  incididunt sint eiusmod ullamco mollit consequat.
</TextBlock>`,hasArgs:!1},ReversedVariant:{name:"Reversed variant",template:!1,source:"",hasArgs:!1},WithColorOverride:{name:"With color override",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},K),st=x.meta,it=["Default","WithHTMLContent","ReversedVariant","WithColorOverride"],at=x.stories.Default,rt=x.stories.WithHTMLContent,nt=x.stories.ReversedVariant,ut=x.stories.WithColorOverride;export{at as Default,nt as ReversedVariant,ut as WithColorOverride,rt as WithHTMLContent,it as __namedExportsOrder,st as default};