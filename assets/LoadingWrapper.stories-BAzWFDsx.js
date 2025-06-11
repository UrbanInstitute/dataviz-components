import{p as w,B as D,y as L,w as I,x as E,f as u,a as y,b as p,g as n,z,s as _,a4 as P,h as v,d as A}from"./iframe-Dh-CAoci.js";import{i as O}from"./lifecycle-rtcBtEMy.js";import{L as l}from"./LoadingWrapper-BT9kf3mz.js";import{L as T}from"./LogoUrbanWide-zARIolsI.js";import{D as G}from"./DatawrapperIframe-CmAOYjiY.js";import{c as F,d as M}from"./create-runtime-stories-Ee3127Pv.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./urbanColors-BkxYcPwH.js";import"./LogoUrbanAnimated-CbxzZTeG.js";import"./attributes-B9-bxW-k.js";import"./class-B9SFUanI.js";const N='Wrapper to display a loading spinner graphic while content is loading. Exposes `setChildLoading()` and `setChildLoaded()` to be used by children as an alternative method of setting `isChildLoading` boolean. Accepts an alternative graphic for the "graphic" named slot.\n\n```js\nimport { LoadingWrapper } from "@urbaninstitute/dataviz-components";\n```\n',S={title:"Components/LoadingWrapper",component:l,tags:["autodocs"],parameters:{docs:{description:{component:N}},githubLink:{url:"/LoadingWrapper/LoadingWrapper.svelte"}}},{Story:m}=M();var U=u(`<span>Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.</span>`),j=u(`<span>Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.</span>`),k=u("<!> <!> <!>",1);function C($,b){w(b,!1);const s=z();function q(e){return new Promise(o=>setTimeout(o,e))}D(()=>{q(2500).then(()=>{L(s,!1)})}),I(()=>{},()=>{L(s,!0)}),E(),O();var f=k(),h=y(f);m(h,{name:"Default",asChild:!0,children:(e,o)=>{l(e,{get isChildLoading(){return n(s)},children:(a,t)=>{var i=U();p(a,i)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper {isChildLoading}>
  <span
    >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
    Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
    cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
  </span>
</LoadingWrapper>`}}});var g=_(h,2);m(g,{name:"Custom graphic",asChild:!0,children:(e,o)=>{l(e,{get isChildLoading(){return n(s)},children:(a,t)=>{var i=j();p(a,i)},$$slots:{default:!0,graphic:(a,t)=>{T(a,{slot:"graphic"})}}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper {isChildLoading}>
  <LogoUrbanWide slot="graphic" />
  <span
    >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
    Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
    cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
  </span>
</LoadingWrapper>`}}});var x=_(g,2);m(x,{name:"Datawrapper example",asChild:!0,children:(e,o)=>{l(e,{children:P,$$slots:{default:(a,t)=>{const i=v(()=>t.setChildLoading),W=v(()=>t.setChildLoaded);G(a,{title:"This is a title for the visualization",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"qF5No",$$events:{startrender(...d){var r;(r=n(i))==null||r.apply(this,d)},visrendered(...d){var r;(r=n(W))==null||r.apply(this,d)}}})}}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper let:setChildLoading let:setChildLoaded>
  <DatawrapperIframe
    title="This is a title for the visualization"
    ariaLabel="This is an accessible title for the visualization"
    datawrapperId="qF5No"
    on:startrender={setChildLoading}
    on:visrendered={setChildLoaded}
  />
</LoadingWrapper>`}}}),p($,f),A()}C.__docgen={data:[],name:"LoadingWrapper.stories.svelte"};const c=F(C,S),te=["Default","CustomGraphic","DatawrapperExample"],ie={...c.Default,tags:["svelte-csf-v5"]},re={...c.CustomGraphic,tags:["svelte-csf-v5"]},se={...c.DatawrapperExample,tags:["svelte-csf-v5"]};export{re as CustomGraphic,se as DatawrapperExample,ie as Default,te as __namedExportsOrder,S as default};
