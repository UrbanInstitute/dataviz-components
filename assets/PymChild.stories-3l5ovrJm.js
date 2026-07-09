import{p as j,f as g,b as u,s as t,k as A,l as M,d as i,a as U,m as q,c as n,u as E,o as I,t as L,q as a,r as R,e as v}from"./iframe-Dwb2GjWe.js";import{P as x,u as B}from"./PymChild-BDDRnQYV.js";import{c as D,d as F}from"./create-runtime-stories-DVwOBNxa.js";const _={title:"Components/PymChild",component:x,parameters:{githubLink:{url:"/Pym/PymChild.svelte"}}},{Story:y}=F();var G=(d,s,o)=>{var e;(e=a(s))==null||e.sendHeight(),R(o)},J=g('<div style="padding: 20px; border: 1px solid #ccc; border-radius: 4px;"><h3>Child Component Using Context</h3> <p>Status: <strong> </strong></p> <p>Send height called: <strong> </strong> times</p> <button style="padding: 8px 16px; border: 1px solid #1696d2; background: #1696d2; color: white; cursor: pointer;">Send Height via usePymChildContext()</button> <p style="margin-top: 16px; font-size: 14px; color: #666;">This component is a descendant of PymChild and can access the context.</p></div>'),K=g("<!> <!>",1);function f(d,s){j(s,!0);let o=I(0);var e=K(),l=u(e);y(l,{name:"Primary",parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:"<PymChild {...args} />"}}});var b=t(l,2);y(b,{name:"With Context Consumer",children:(S,X)=>{x(S,{children:($,Y)=>{var p=A(),w=u(p);{var k=r=>{var m=J();const c=E(B);var h=t(n(m),2),W=t(n(h)),H=n(W),C=t(h,2),z=t(n(C)),O=n(z),T=t(C,2);T.__click=[G,c,o],L(()=>{v(H,a(c)?"PymChild context available":"PymChild context unavailable"),v(O,a(o))}),i(r,m)};M(w,r=>{typeof window<"u"&&r(k)})}i($,p)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PymChild {...args}>
  <PymChild>
{#if typeof window !== "undefined"}
  {@const pymChild = usePymChildContext()}
  <div style="padding: 20px; border: 1px solid #ccc; border-radius: 4px;">
    <h3>Child Component Using Context</h3>
    <p>
      Status: <strong
        >{pymChild ? "PymChild context available" : "PymChild context unavailable"}</strong
      >
    </p>
    <p>Send height called: <strong>{sendCount}</strong> times</p>
    <button
      onclick={() => {
        pymChild?.sendHeight();
        sendCount++;
      }}
      style="padding: 8px 16px; border: 1px solid #1696d2; background: #1696d2; color: white; cursor: pointer;"
    >
      Send Height via usePymChildContext()
    </button>
    <p style="margin-top: 16px; font-size: 14px; color: #666;">
      This component is a descendant of PymChild and can access the context.
    </p>
  </div>
{/if}
</PymChild>
</PymChild>`}}}),i(d,e),U()}q(["click"]);f.__docgen={data:[],name:"PymChild.stories.svelte"};const P=D(f,_),N=["Primary","WithContextConsumer"],Q={...P.Primary,tags:["svelte-csf-v5"]},V={...P.WithContextConsumer,tags:["svelte-csf-v5"]},nt=Object.freeze(Object.defineProperty({__proto__:null,Primary:Q,WithContextConsumer:V,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{nt as S};
