import{p as W,z as w,Z as x,f as p,a as D,i as L,T as I,s as f,b as o,d as E}from"./iframe-BjxEKEQH.js";import{L as n}from"./LoadingWrapper-DjGTokaM.js";import{L as z}from"./LogoUrbanWide-BI_7HiH4.js";import{D as A}from"./DatawrapperIframe-DBrTT8wg.js";import{c as T,d as y}from"./create-runtime-stories-HPq0r60h.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./urbanColors-BkxYcPwH.js";import"./LogoUrbanAnimated-DtAU-OWH.js";import"./attributes-UJeNkN1P.js";import"./class-B9SFUanI.js";const O='Wrapper to display a loading spinner graphic while content is loading. Exposes `setChildLoading()` and `setChildLoaded()` to be used by children as an alternative method of setting `isChildLoading` boolean. Accepts an alternative graphic via the `graphic` snippet.\n\n```js\nimport { LoadingWrapper } from "@urbaninstitute/dataviz-components";\n```\n\n```svelte\n<LoadingWrapper>\n  {#snippet graphic()}\n    <CustomSpinner />\n  {/snippet}\n  {#snippet children({ setChildLoading, setChildLoaded })}\n    <RemoteViz oninitializing={setChildLoading} onready={setChildLoaded} />\n  {/snippet}\n</LoadingWrapper>\n```\n',$={title:"Components/LoadingWrapper",component:n,tags:["autodocs"],parameters:{docs:{description:{component:O}},githubLink:{url:"/LoadingWrapper/LoadingWrapper.svelte"}}},{Story:d}=y();var G=p(`<span>Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
        Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
        cupidatat aliqua magna. Ipsum irure anim commodo Lorem.</span>`),P=p(`<span>Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
        Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
        cupidatat aliqua magna. Ipsum irure anim commodo Lorem.</span>`),S=p("<!> <!> <!>",1);function g(v,C){W(C,!0);const _=t=>new Promise(a=>setTimeout(a,t));let r=I(!0);w(()=>{let t=!1;return _(2500).then(()=>{t||x(r,!1)}),()=>{t=!0}});var m=S(),u=D(m);d(u,{name:"Default",asChild:!0,children:(t,a)=>{n(t,{get isChildLoading(){return L(r)},children:i=>{var e=G();o(i,e)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<LoadingWrapper {isChildLoading}>
  {#snippet children()}
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  {/snippet}
</LoadingWrapper>`}}});var c=f(u,2);d(c,{name:"Custom graphic",asChild:!0,children:(t,a)=>{n(t,{get isChildLoading(){return L(r)},graphic:e=>{z(e,{})},children:e=>{var s=P();o(e,s)},$$slots:{graphic:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper {isChildLoading}>
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
</LoadingWrapper>`}}});var b=f(c,2);d(b,{name:"Datawrapper example",asChild:!0,children:(t,a)=>{n(t,{children:(i,e)=>{let s=()=>e==null?void 0:e().setChildLoading,q=()=>e==null?void 0:e().setChildLoaded;A(i,{title:"This is a title for the visualization",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"qF5No",get onstartrender(){return s()},get onvisrendered(){return q()}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LoadingWrapper>
  {#snippet children({ setChildLoading, setChildLoaded })}
    <DatawrapperIframe
      title="This is a title for the visualization"
      ariaLabel="This is an accessible title for the visualization"
      datawrapperId="qF5No"
      onstartrender={setChildLoading}
      onvisrendered={setChildLoaded}
    />
  {/snippet}
</LoadingWrapper>`}}}),o(v,m),E()}g.__docgen={data:[],name:"LoadingWrapper.stories.svelte"};const l=T(g,$),J=["Default","CustomGraphic","DatawrapperExample"],K={...l.Default,tags:["svelte-csf-v5"]},Q={...l.CustomGraphic,tags:["svelte-csf-v5"]},X={...l.DatawrapperExample,tags:["svelte-csf-v5"]};export{Q as CustomGraphic,X as DatawrapperExample,K as Default,J as __namedExportsOrder,$ as default};
