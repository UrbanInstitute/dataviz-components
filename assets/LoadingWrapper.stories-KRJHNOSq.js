import{p as W,F as w,Z as x,o as D,f as p,b as I,q as L,s as f,d as s,a as E}from"./iframe-Dwb2GjWe.js";import{L as r}from"./LoadingWrapper-BjxfNT8W.js";import{L as z}from"./LogoUrbanWide-wdW0x3Cm.js";import{D as A}from"./DatawrapperIframe-DuJLO8KF.js";import{c as y,d as O}from"./create-runtime-stories-DVwOBNxa.js";import"./preload-helper-Dp1pzeXC.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./urbanColors-S0C424vw.js";import"./LogoUrbanAnimated-De8HvDXh.js";import"./attributes-6Paf-c-d.js";import"./class-B9SFUanI.js";const T='Wrapper to display a loading spinner graphic while content is loading. Exposes `setChildLoading()` and `setChildLoaded()` to be used by children as an alternative method of setting `isChildLoading` boolean. Accepts an alternative graphic via the `graphic` snippet.\n\n```js\nimport { LoadingWrapper } from "@urbaninstitute/dataviz-components";\n```\n\n```svelte\n<LoadingWrapper>\n  {#snippet graphic()}\n    <CustomSpinner />\n  {/snippet}\n  {#snippet children({ setChildLoading, setChildLoaded })}\n    <RemoteViz oninitializing={setChildLoading} onready={setChildLoaded} />\n  {/snippet}\n</LoadingWrapper>\n```\n',$={title:"Components/LoadingWrapper",component:r,tags:["autodocs"],parameters:{docs:{description:{component:T}},githubLink:{url:"/LoadingWrapper/LoadingWrapper.svelte"}}},{Story:d}=O();var G=p(`<span>Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
        Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
        cupidatat aliqua magna. Ipsum irure anim commodo Lorem.</span>`),P=p(`<span>Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
        Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
        cupidatat aliqua magna. Ipsum irure anim commodo Lorem.</span>`),F=p("<!> <!> <!>",1);function g(v,C){W(C,!0);const _=t=>new Promise(a=>setTimeout(a,t));let n=D(!0);w(()=>{let t=!1;return _(2500).then(()=>{t||x(n,!1)}),()=>{t=!0}});var m=F(),u=I(m);d(u,{name:"Default",asChild:!0,children:(t,a)=>{r(t,{get isChildLoading(){return L(n)},children:i=>{var e=G();s(i,e)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<LoadingWrapper {isChildLoading}>
  {#snippet children()}
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  {/snippet}
</LoadingWrapper>`}}});var c=f(u,2);d(c,{name:"Custom graphic",asChild:!0,children:(t,a)=>{r(t,{get isChildLoading(){return L(n)},graphic:e=>{z(e,{})},children:e=>{var o=P();s(e,o)},$$slots:{graphic:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper {isChildLoading}>
  {#snippet graphic()}
    <LogoUrbanWide />
  {/snippet}
  {#snippet children()}
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  {/snippet}
</LoadingWrapper>`}}});var b=f(c,2);d(b,{name:"Datawrapper example",asChild:!0,children:(t,a)=>{r(t,{children:(i,e)=>{let o=()=>e==null?void 0:e().setChildLoading,q=()=>e==null?void 0:e().setChildLoaded;A(i,{title:"This is a title for the visualization",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"qF5No",get onstartrender(){return o()},get onvisrendered(){return q()}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper>
  {#snippet children({ setChildLoading, setChildLoaded })}
    <DatawrapperIframe
      title="This is a title for the visualization"
      ariaLabel="This is an accessible title for the visualization"
      datawrapperId="qF5No"
      onstartrender={setChildLoading}
      onvisrendered={setChildLoaded}
    />
  {/snippet}
</LoadingWrapper>`}}}),s(v,m),E()}g.__docgen={data:[],name:"LoadingWrapper.stories.svelte"};const l=y(g,$),K=["Default","CustomGraphic","DatawrapperExample"],Q={...l.Default,tags:["svelte-csf-v5"]},X={...l.CustomGraphic,tags:["svelte-csf-v5"]},Y={...l.DatawrapperExample,tags:["svelte-csf-v5"]};export{X as CustomGraphic,Y as DatawrapperExample,Q as Default,K as __namedExportsOrder,$ as default};
