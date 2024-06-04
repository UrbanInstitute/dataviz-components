import{S as re,i as ae,s as pe,c as y,a as T,m as b,t as $,b as _,d as k,h as A,j as B,r as G,e as fe,o as me,n as ue}from"./index-lamZ5WrB.js";import{s as C,c as w,i as h,d as c,e as H,m as L,a as P,h as O,j as I,f as u,w as X,b as F,k as z,t as N,g as q,l as ce}from"./lifecycle-BNS46k4e.js";import{g as $e,a as de}from"./spread-CgU5AtxT.js";import{T as Y}from"./Tooltip-BmgvXhKp.js";import{p as ge,T as he,S}from"./collect-stories-D1soPxiK.js";import"./BasicDropdown-COTLUXo0.js";import"./Block-CN5G-V4Q.js";import"./DatawrapperIframe-SqihcKC5.js";import"./HeadingAlt-Chpw3Ewv.js";import"./LogoTPCBadge-Bf8WNJ-3.js";import"./LogoUrbanBadge-CR_0A0tk.js";import"./LogoUrbanAnimated-Cj19p1G-.js";import"./LogoUrban-j2Vgbv99.js";import"./LogoUrbanWide-wwBnjK-G.js";import"./Navbar-BhNdvCo7.js";import"./ProjectCredits-BiTuTv1s.js";import"./ReturnTop-DG5W3baA.js";import"./Scorecard-DMm5Em_w.js";import"./SocialShare-JT7OF9Z9.js";import"./TextBlock-DteTF_oO.js";import{B as le}from"./Button-fr5-eJVH.js";import"./ChartBlock-OrJbUbdL.js";import"./Theme-BawX-Xjl.js";import"./Headline-C-n8nf0L.js";import"./Meta-QYbSpCi9.js";import"./Toggle-BDuA58JS.js";import"./Scrolly-DEVw05dX.js";import"./Analytics-Bob8DgDW.js";import"./PymChild-BqKIFHPn.js";import"./LoadingWrapper-BpYNSzAk.js";import{u as ee}from"./urbanColors-BkxYcPwH.js";function te(a){let e,s;const t=[a[9],{x:a[0]},{y:a[1]}];let l={$$slots:{default:[_e]},$$scope:{ctx:a}};for(let i=0;i<t.length;i+=1)l=me(l,t[i]);return e=new Y({props:l}),{c(){y(e.$$.fragment)},l(i){T(e.$$.fragment,i)},m(i,m){b(e,i,m),s=!0},p(i,m){const p=m&515?$e(t,[m&512&&de(i[9]),m&1&&{x:i[0]},m&2&&{y:i[1]}]):{};m&1536&&(p.$$scope={dirty:m,ctx:i}),e.$set(p)},i(i){s||($(e.$$.fragment,i),s=!0)},o(i){_(e.$$.fragment,i),s=!1},d(i){k(e,i)}}}function _e(a){let e=(a[9].content||"This is a tooltip")+"",s;return{c(){s=N(e)},l(t){s=q(t,e)},m(t,l){h(t,s,l)},p(t,l){l&512&&e!==(e=(t[9].content||"This is a tooltip")+"")&&ce(s,e)},d(t){t&&c(s)}}}function ve(a){let e,s="<p>Hover me to see tooltip</p>",t,l,i,m,p,o=a[0]&&a[1]&&te(a);return{c(){e=H("div"),e.innerHTML=s,t=C(),o&&o.c(),l=L(),this.h()},l(n){e=P(n,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),O(e)!=="svelte-49y4rg"&&(e.innerHTML=s),t=w(n),o&&o.l(n),l=L(),this.h()},h(){I(e,"class","wrapper"),u(e,"background","var(--color-gray-shade-lighter)"),u(e,"width","100%"),u(e,"height","300px"),u(e,"display","grid"),u(e,"place-content","center")},m(n,f){h(n,e,f),h(n,t,f),o&&o.m(n,f),h(n,l,f),i=!0,m||(p=[X(e,"mousemove",a[4]),X(e,"mouseout",a[5])],m=!0)},p(n,f){n[0]&&n[1]?o?(o.p(n,f),f&3&&$(o,1)):(o=te(n),o.c(),$(o,1),o.m(l.parentNode,l)):o&&(A(),_(o,1,1,()=>{o=null}),B())},i(n){i||($(o),i=!0)},o(n){_(o),i=!1},d(n){n&&(c(e),c(t),c(l)),o&&o.d(n),m=!1,G(p)}}}function oe(a){let e,s;return e=new Y({props:{x:a[0],y:a[1],size:"large",$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){b(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.x=t[0]),l&2&&(i.y=t[1]),l&1024&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function ye(a){let e,s="HTML Formatting",t,l,i="For <em>fancier</em> tooltip structure";return{c(){e=H("h2"),e.textContent=s,t=C(),l=H("p"),l.innerHTML=i},l(m){e=P(m,"H2",{"data-svelte-h":!0}),O(e)!=="svelte-sqkpaa"&&(e.textContent=s),t=w(m),l=P(m,"P",{"data-svelte-h":!0}),O(l)!=="svelte-aaq2xe"&&(l.innerHTML=i)},m(m,p){h(m,e,p),h(m,t,p),h(m,l,p)},p:ue,d(m){m&&(c(e),c(t),c(l))}}}function Te(a){let e,s="<p>Hover me to see tooltip</p>",t,l,i,m,p,o=a[0]&&a[1]&&oe(a);return{c(){e=H("div"),e.innerHTML=s,t=C(),o&&o.c(),l=L(),this.h()},l(n){e=P(n,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),O(e)!=="svelte-sgrgyc"&&(e.innerHTML=s),t=w(n),o&&o.l(n),l=L(),this.h()},h(){I(e,"class","wrapper"),u(e,"background","var(--color-gray-shade-lighter)"),u(e,"width","100%"),u(e,"height","300px"),u(e,"display","grid"),u(e,"place-content","center")},m(n,f){h(n,e,f),h(n,t,f),o&&o.m(n,f),h(n,l,f),i=!0,m||(p=X(e,"mousemove",a[4]),m=!0)},p(n,f){n[0]&&n[1]?o?(o.p(n,f),f&3&&$(o,1)):(o=oe(n),o.c(),$(o,1),o.m(l.parentNode,l)):o&&(A(),_(o,1,1,()=>{o=null}),B())},i(n){i||($(o),i=!0)},o(n){_(o),i=!1},d(n){n&&(c(e),c(t),c(l)),o&&o.d(n),m=!1,p()}}}function ne(a){let e,s;return e=new Y({props:{content:"This tooltip is contained by parent",containParent:!0,x:a[0],y:a[1]}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){b(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.x=t[0]),l&2&&(i.y=t[1]),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function be(a){let e,s,t="Hover me to see tooltip",l,i,m,p,o=a[0]&&a[1]&&ne(a);return{c(){e=H("div"),s=H("p"),s.textContent=t,l=C(),o&&o.c(),this.h()},l(n){e=P(n,"DIV",{class:!0,style:!0});var f=F(e);s=P(f,"P",{"data-svelte-h":!0}),O(s)!=="svelte-rgzz51"&&(s.textContent=t),l=w(f),o&&o.l(f),f.forEach(c),this.h()},h(){I(e,"class","wrapper"),u(e,"display","grid"),u(e,"place-content","center"),u(e,"background","var(--color-gray-shade-lighter)"),u(e,"position","relative"),u(e,"width","800px"),u(e,"height","300px"),u(e,"border","solid 1px black"),u(e,"margin","100px")},m(n,f){h(n,e,f),z(e,s),z(e,l),o&&o.m(e,null),i=!0,m||(p=[X(e,"mousemove",a[4]),X(e,"mouseout",a[5])],m=!0)},p(n,f){n[0]&&n[1]?o?(o.p(n,f),f&3&&$(o,1)):(o=ne(n),o.c(),$(o,1),o.m(e,null)):o&&(A(),_(o,1,1,()=>{o=null}),B())},i(n){i||($(o),i=!0)},o(n){_(o),i=!1},d(n){n&&c(e),o&&o.d(),m=!1,G(p)}}}function ke(a){let e;return{c(){e=N("Click me")},l(s){e=q(s,"Click me")},m(s,t){h(s,e,t)},d(s){s&&c(e)}}}function se(a){let e,s;return e=new Y({props:{elOffset:5,el:a[2],$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){b(e,t,l),s=!0},p(t,l){const i={};l&4&&(i.el=t[2]),l&1024&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Ce(a){let e;return{c(){e=N("This tooltip is pinned to an existing element")},l(s){e=q(s,"This tooltip is pinned to an existing element")},m(s,t){h(s,e,t)},d(s){s&&c(e)}}}function we(a){let e,s,t,l,i,m;t=new le({props:{$$slots:{default:[ke]},$$scope:{ctx:a}}}),t.$on("click",a[6]);let p=a[3]&&se(a);return{c(){e=H("div"),s=H("div"),y(t.$$.fragment),l=C(),p&&p.c(),i=L(),this.h()},l(o){e=P(o,"DIV",{class:!0,style:!0});var n=F(e);s=P(n,"DIV",{style:!0});var f=F(s);T(t.$$.fragment,f),f.forEach(c),n.forEach(c),l=w(o),p&&p.l(o),i=L(),this.h()},h(){u(s,"display","inline-block"),I(e,"class","wrapper"),u(e,"position","relative"),u(e,"width","800px"),u(e,"height","300px"),u(e,"display","grid"),u(e,"place-content","center")},m(o,n){h(o,e,n),z(e,s),b(t,s,null),a[7](s),h(o,l,n),p&&p.m(o,n),h(o,i,n),m=!0},p(o,n){const f={};n&1024&&(f.$$scope={dirty:n,ctx:o}),t.$set(f),o[3]?p?(p.p(o,n),n&8&&$(p,1)):(p=se(o),p.c(),$(p,1),p.m(i.parentNode,i)):p&&(A(),_(p,1,1,()=>{p=null}),B())},i(o){m||($(t.$$.fragment,o),$(p),m=!0)},o(o){_(t.$$.fragment,o),_(p),m=!1},d(o){o&&(c(e),c(l),c(i)),k(t),a[7](null),p&&p.d(o)}}}function ie(a){let e,s;return e=new Y({props:{x:a[0],y:a[1],size:"large",$$slots:{tooltipOverride:[He,({orientation:t})=>({8:t}),({orientation:t})=>t?256:0]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){b(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.x=t[0]),l&2&&(i.y=t[1]),l&1280&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function Me(a){let e;return{c(){e=N("Custom")},l(s){e=q(s,"Custom")},m(s,t){h(s,e,t)},d(s){s&&c(e)}}}function He(a){let e,s,t="This is a completely custom tooltip",l,i,m="Markup and style is up to me, but positioning is still provided by the component.",p,o,n,f;return o=new le({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){e=H("div"),s=H("h5"),s.textContent=t,l=C(),i=H("p"),i.textContent=m,p=C(),y(o.$$.fragment),this.h()},l(g){e=P(g,"DIV",{class:!0,style:!0});var v=F(e);s=P(v,"H5",{style:!0,"data-svelte-h":!0}),O(s)!=="svelte-1e776ho"&&(s.textContent=t),l=w(v),i=P(v,"P",{style:!0,"data-svelte-h":!0}),O(i)!=="svelte-uxkwsn"&&(i.textContent=m),p=w(v),T(o.$$.fragment,v),v.forEach(c),this.h()},h(){u(s,"margin","0"),u(i,"font-size","var(--font-size-small)"),I(e,"class",n="custom-tooltip "+a[8]),u(e,"background",ee.gray_shade_lighter),u(e,"padding","var(--spacing-2)"),u(e,"border","solid 2px "+ee.magenta)},m(g,v){h(g,e,v),z(e,s),z(e,l),z(e,i),z(e,p),b(o,e,null),f=!0},p(g,v){const M={};v&1024&&(M.$$scope={dirty:v,ctx:g}),o.$set(M),(!f||v&256&&n!==(n="custom-tooltip "+g[8]))&&I(e,"class",n)},i(g){f||($(o.$$.fragment,g),f=!0)},o(g){_(o.$$.fragment,g),f=!1},d(g){g&&c(e),k(o)}}}function Pe(a){let e,s="<p>Hover me to see tooltip</p>",t,l,i,m,p,o=a[0]&&a[1]&&ie(a);return{c(){e=H("div"),e.innerHTML=s,t=C(),o&&o.c(),l=L(),this.h()},l(n){e=P(n,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),O(e)!=="svelte-49y4rg"&&(e.innerHTML=s),t=w(n),o&&o.l(n),l=L(),this.h()},h(){I(e,"class","wrapper"),u(e,"background","var(--color-gray-shade-lighter)"),u(e,"width","100%"),u(e,"height","300px"),u(e,"display","grid"),u(e,"place-content","center")},m(n,f){h(n,e,f),h(n,t,f),o&&o.m(n,f),h(n,l,f),i=!0,m||(p=[X(e,"mousemove",a[4]),X(e,"mouseout",a[5])],m=!0)},p(n,f){n[0]&&n[1]?o?(o.p(n,f),f&3&&$(o,1)):(o=ie(n),o.c(),$(o,1),o.m(l.parentNode,l)):o&&(A(),_(o,1,1,()=>{o=null}),B())},i(n){i||($(o),i=!0)},o(n){_(o),i=!1},d(n){n&&(c(e),c(t),c(l)),o&&o.d(n),m=!1,G(p)}}}function Ee(a){let e,s,t,l,i,m,p,o,n,f,g,v,M,V,E,j;return e=new he({props:{$$slots:{default:[ve,({args:r})=>({9:r}),({args:r})=>r?512:0]},$$scope:{ctx:a}}}),t=new S({props:{name:"Mouse event",args:{x:a[0],y:a[1]}}}),i=new S({props:{name:"Dark mode",args:{content:"This is a dark style tooltip",style:"dark",x:a[0],y:a[1]}}}),p=new S({props:{name:"Custom HTML",$$slots:{default:[Te]},$$scope:{ctx:a}}}),n=new S({props:{name:"Static orientation",args:{content:"This tooltip is oriented to the left",style:"dark",orientation:"left",x:a[0],y:a[1]}}}),g=new S({props:{name:"Contain inside parent",$$slots:{default:[be]},$$scope:{ctx:a}}}),M=new S({props:{name:"Pinned to element",$$slots:{default:[we]},$$scope:{ctx:a}}}),E=new S({props:{name:"Tooltip override",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment),s=C(),y(t.$$.fragment),l=C(),y(i.$$.fragment),m=C(),y(p.$$.fragment),o=C(),y(n.$$.fragment),f=C(),y(g.$$.fragment),v=C(),y(M.$$.fragment),V=C(),y(E.$$.fragment)},l(r){T(e.$$.fragment,r),s=w(r),T(t.$$.fragment,r),l=w(r),T(i.$$.fragment,r),m=w(r),T(p.$$.fragment,r),o=w(r),T(n.$$.fragment,r),f=w(r),T(g.$$.fragment,r),v=w(r),T(M.$$.fragment,r),V=w(r),T(E.$$.fragment,r)},m(r,d){b(e,r,d),h(r,s,d),b(t,r,d),h(r,l,d),b(i,r,d),h(r,m,d),b(p,r,d),h(r,o,d),b(n,r,d),h(r,f,d),b(g,r,d),h(r,v,d),b(M,r,d),h(r,V,d),b(E,r,d),j=!0},p(r,[d]){const J={};d&1539&&(J.$$scope={dirty:d,ctx:r}),e.$set(J);const K={};d&3&&(K.args={x:r[0],y:r[1]}),t.$set(K);const Q={};d&3&&(Q.args={content:"This is a dark style tooltip",style:"dark",x:r[0],y:r[1]}),i.$set(Q);const R={};d&1027&&(R.$$scope={dirty:d,ctx:r}),p.$set(R);const U={};d&3&&(U.args={content:"This tooltip is oriented to the left",style:"dark",orientation:"left",x:r[0],y:r[1]}),n.$set(U);const W={};d&1027&&(W.$$scope={dirty:d,ctx:r}),g.$set(W);const Z={};d&1036&&(Z.$$scope={dirty:d,ctx:r}),M.$set(Z);const x={};d&1027&&(x.$$scope={dirty:d,ctx:r}),E.$set(x)},i(r){j||($(e.$$.fragment,r),$(t.$$.fragment,r),$(i.$$.fragment,r),$(p.$$.fragment,r),$(n.$$.fragment,r),$(g.$$.fragment,r),$(M.$$.fragment,r),$(E.$$.fragment,r),j=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),_(i.$$.fragment,r),_(p.$$.fragment,r),_(n.$$.fragment,r),_(g.$$.fragment,r),_(M.$$.fragment,r),_(E.$$.fragment,r),j=!1},d(r){r&&(c(s),c(l),c(m),c(o),c(f),c(v),c(V)),k(e,r),k(t,r),k(i,r),k(p,r),k(n,r),k(g,r),k(M,r),k(E,r)}}}const Le={title:"Components/Tooltip",component:Y,argTypes:{style:{control:"select",options:["light","dark"]},size:{control:"select",options:["small","large"]},orientation:{control:"select",options:["dynamic","left","right","top","bottom","bottom-left","bottom-right","top-left","top-right"]}},parameters:{docs:{description:{component:"A basic tooltip."}}}};function Oe(a,e,s){let t,l,i,m=!1;function p(g){const v=g.pageX,M=g.pageY;s(0,t=v),s(1,l=M)}function o(g){s(0,t=null),s(1,l=null)}const n=()=>s(3,m=!m);function f(g){fe[g?"unshift":"push"](()=>{i=g,s(2,i)})}return[t,l,i,m,p,o,n,f]}class De extends re{constructor(e){super(),ae(this,e,Oe,Ee,pe,{})}}const D=ge(De,{meta:{title:"Components/Tooltip"},stories:{"tpl:default":{name:"default",template:!0,source:`<div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;" on:mousemove={handleMousemove} on:mouseout={handleMouseout}>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
<Tooltip {...args} x={tooltipX} y={tooltipY}>{args.content || "This is a tooltip"}</Tooltip>
{/if}`,hasArgs:!0},MouseEvent:{name:"Mouse event",template:!1,source:"",hasArgs:!1},DarkMode:{name:"Dark mode",template:!1,source:"",hasArgs:!1},CustomHTML:{name:"Custom HTML",template:!1,source:`<div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;" on:mousemove={handleMousemove}>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip x={tooltipX} y={tooltipY} size="large">
    <h2>HTML Formatting</h2>
    <p>For <em>fancier</em> tooltip structure</p>
  </Tooltip>
{/if}`,hasArgs:!1},StaticOrientation:{name:"Static orientation",template:!1,source:"",hasArgs:!1},ContainInsideParent:{name:"Contain inside parent",template:!1,source:`<div
  class="wrapper"
  style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"
  on:mousemove={handleMousemove}
  on:mouseout={handleMouseout}
>
  <p>Hover me to see tooltip</p>
  {#if tooltipX && tooltipY}
  <Tooltip
    content="This tooltip is contained by parent"
    containParent
    x={tooltipX}
    y={tooltipY}
  />
  {/if}
</div>`,hasArgs:!1},PinnedToElement:{name:"Pinned to element",template:!1,source:`<div
  class="wrapper"
  style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
>
  <div bind:this={pinEl} style="display: inline-block">
    <Button on:click={() => (showPinned = !showPinned)}>Click me</Button>
  </div>
</div>
{#if showPinned}
  <Tooltip elOffset={5} el={pinEl} >This tooltip is pinned to an existing element</Tooltip>
{/if}`,hasArgs:!1},TooltipOverride:{name:"Tooltip override",template:!1,source:`<div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;" on:mousemove={handleMousemove} on:mouseout={handleMouseout}>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip x={tooltipX} y={tooltipY} size="large">
    <svelte:fragment let:orientation slot="tooltipOverride">
      <div
        class="custom-tooltip {orientation}"
        style="background: {urbanColors.gray_shade_lighter}; padding: var(--spacing-2); border: solid 2px {urbanColors.magenta}"
      >
        <h5 style="margin: 0;">This is a completely custom tooltip</h5>
        <p style="font-size: var(--font-size-small);">
          Markup and style is up to me, but positioning is still provided by the component.
        </p>
        <Button>Custom</Button>
      </div>
    </svelte:fragment>
  </Tooltip>
{/if}`,hasArgs:!1}},allocatedIds:["default","Story","Template","Button","urbanColors"]},Le),Se=D.meta,ze=["MouseEvent","DarkMode","CustomHTML","StaticOrientation","ContainInsideParent","PinnedToElement","TooltipOverride"],Ie=D.stories.MouseEvent,Xe=D.stories.DarkMode,Ye=D.stories.CustomHTML,Ae=D.stories.StaticOrientation,Be=D.stories.ContainInsideParent,Ve=D.stories.PinnedToElement,je=D.stories.TooltipOverride,vt=Object.freeze(Object.defineProperty({__proto__:null,ContainInsideParent:Be,CustomHTML:Ye,DarkMode:Xe,MouseEvent:Ie,PinnedToElement:Ve,StaticOrientation:Ae,TooltipOverride:je,__namedExportsOrder:ze,default:Se},Symbol.toStringTag,{value:"Module"}));export{Ye as C,Xe as D,Ie as M,Ve as P,Ae as S,je as T,Be as a,vt as s};
