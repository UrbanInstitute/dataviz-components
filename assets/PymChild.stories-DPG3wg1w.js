import{p as U,f as g,a as u,s as t,Q as j,y as A,b as i,d as M,R,c as n,x as E,T as I,t as L,i as a,U as Q,e as y}from"./iframe-BjxEKEQH.js";import{P as x,u as q}from"./PymChild-CO1HGkDt.js";import{c as B,d as D}from"./create-runtime-stories-HPq0r60h.js";const _={title:"Components/PymChild",component:x,parameters:{githubLink:{url:"/Pym/PymChild.svelte"}}},{Story:v}=D();var F=(d,s,o)=>{var e;(e=a(s))==null||e.sendHeight(),Q(o)},G=g('<div style="padding: 20px; border: 1px solid #ccc; border-radius: 4px;"><h3>Child Component Using Context</h3> <p>Status: <strong> </strong></p> <p>Send height called: <strong> </strong> times</p> <button style="padding: 8px 16px; border: 1px solid #1696d2; background: #1696d2; color: white; cursor: pointer;">Send Height via usePymChildContext()</button> <p style="margin-top: 16px; font-size: 14px; color: #666;">This component is a descendant of PymChild and can access the context.</p></div>'),J=g("<!> <!>",1);function f(d,s){U(s,!0);let o=I(0);var e=J(),l=u(e);v(l,{name:"Primary",parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:"<PymChild {...args} />"}}});var b=t(l,2);v(b,{name:"With Context Consumer",children:(S,X)=>{x(S,{children:($,Y)=>{var p=j(),w=u(p);{var k=r=>{var m=G();const c=E(q);var h=t(n(m),2),W=t(n(h)),H=n(W),C=t(h,2),T=t(n(C)),z=n(T),O=t(C,2);O.__click=[F,c,o],L(()=>{y(H,a(c)?"PymChild context available":"PymChild context unavailable"),y(z,a(o))}),i(r,m)};A(w,r=>{typeof window<"u"&&r(k)})}i($,p)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PymChild {...args}>
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
</PymChild>`}}}),i(d,e),M()}R(["click"]);f.__docgen={data:[],name:"PymChild.stories.svelte"};const P=B(f,_),K=["Primary","WithContextConsumer"],N={...P.Primary,tags:["svelte-csf-v5"]},V={...P.WithContextConsumer,tags:["svelte-csf-v5"]},nt=Object.freeze(Object.defineProperty({__proto__:null,Primary:N,WithContextConsumer:V,__namedExportsOrder:K,default:_},Symbol.toStringTag,{value:"Module"}));export{nt as S};
