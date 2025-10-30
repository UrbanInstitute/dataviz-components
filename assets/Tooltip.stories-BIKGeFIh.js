import{p as et,f as v,a as b,n as ot,i as t,k as z,s as r,X as k,y as w,b as a,Y as S,Z as x,P,c as H,d as nt,R as it,V as rt,t as R,e as st}from"./iframe-BjxEKEQH.js";import{c as at,d as lt}from"./create-runtime-stories-HPq0r60h.js";import{s as pt}from"./class-B9SFUanI.js";import{s as dt}from"./style-CNURdi_Z.js";import{b as ct}from"./this-DGLcOT4Q.js";import{i as mt}from"./lifecycle-hO6jUP98.js";import{T}from"./Tooltip-DQtD7qmK.js";import"./BasicDropdown-DBkXvpWy.js";import"./Block-S085LgKA.js";import"./DatawrapperIframe-DBrTT8wg.js";import"./HeadingAlt-BNBRxhWQ.js";import"./IconPlus-YnuXZYeX.js";import"./IconMinus-D_9s7pId.js";import"./IconClose-CEHIYMGE.js";import"./IconSearch-Ca3yJXEQ.js";import"./LogoTPCBadge-COm6_I7f.js";import"./LogoUrbanBadge-BvBpghVV.js";import"./LogoUrbanAnimated-DtAU-OWH.js";import"./LogoUrban-DTc3tii8.js";import"./LogoUrbanWide-BI_7HiH4.js";import"./Navbar-B9xI0hn-.js";import"./ProjectCredits-DQdZQmvn.js";import"./ReturnTop-T156Z9Q5.js";import"./Scorecard-D3J3Rqpq.js";import"./SocialShare-DWn1HI4c.js";import"./TextBlock-ByoZU-dy.js";import{B as q}from"./Button-DMhGQjzO.js";import"./ChartBlock-BzdRr3rw.js";import"./Meta-BtHKPa1P.js";import"./Toggle-Cdb9dgAr.js";import"./Scrolly-dlw8WA2s.js";import"./Analytics-kwMMLO-n.js";import"./Headline-Cb6guEuf.js";import"./PymChild-CO1HGkDt.js";import"./LoadingWrapper-DjGTokaM.js";import"./AxisY-C1gfo3-v.js";import"./AxisX-B5hCexcB.js";import{u as V}from"./urbanColors-BkxYcPwH.js";const Z={title:"Components/Tooltip",component:T,argTypes:{style:{control:"select",options:["light","dark"]},size:{control:"select",options:["small","large"]},orientation:{control:"select",options:["dynamic","left","right","top","bottom","bottom-left","bottom-right","top-left","top-right"]}},parameters:{docs:{description:{component:"A basic tooltip."}},githubLink:{url:"/Tooltip/Tooltip.svelte"}}},{Story:u}=lt();function O(M,X,$){const o=M.pageX,n=M.pageY;x(X,o),x($,n)}var vt=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),ut=v("<h2>HTML Formatting</h2> <p>For <em>fancier</em> tooltip structure</p>",1),gt=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),ht=v('-- <div class="wrapper" style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"><p>Hover me to see tooltip</p> <!></div>',1),_t=v('<div class="wrapper" style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"><div style="display: inline-block"><!></div></div> <!>',1),ft=v('<div><h5 style="margin: 0;">This is a completely custom tooltip</h5> <p style="font-size: var(--font-size-small);">Markup and style is up to me, but positioning is still provided by the component.</p> <!></div>'),yt=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),bt=v("<!> <!> <!> <!> <!> <!> <!>",1);function G(M,X){et(X,!1);const $=(d,_=ot)=>{var s=vt(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=h;var c=r(e,2);{var m=i=>{T(i,rt(_,{get x(){return t(o)},get y(){return t(n)},children:(f,l)=>{var p=P();R(()=>st(p,_().content||"This is a tooltip")),a(f,p)},$$slots:{default:!0}}))};w(c,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,h),a(d,s)};let o=k(),n=k(),Y=k(),E=k(!1);function h(d){x(o,null),x(n,null)}mt();var L=bt(),B=b(L);const J=z(()=>({x:t(o),y:t(n)}));u(B,{name:"Mouse event",get args(){return t(J)},get template(){return $},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
<div
  class="wrapper"
  style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
  onmousemove={handleMousemove}
  onmouseout={handleMouseout}
  onblur={handleMouseout}
>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip {...args} x={tooltipX} y={tooltipY}>{args.content || "This is a tooltip"}</Tooltip>
{/if}`}}});var D=r(B,2);const K=z(()=>({content:"This is a dark style tooltip",style:"dark",x:t(o),y:t(n)}));u(D,{name:"Dark mode",get args(){return t(K)},get template(){return $},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
<div
  class="wrapper"
  style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
  onmousemove={handleMousemove}
  onmouseout={handleMouseout}
  onblur={handleMouseout}
>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip {...args} x={tooltipX} y={tooltipY}>{args.content || "This is a tooltip"}</Tooltip>
{/if}`}}});var I=r(D,2);u(I,{name:"Custom HTML",asChild:!0,children:(d,_)=>{var s=gt(),e=r(b(s));e.__mousemove=[O,o,n];var c=r(e,2);{var m=i=>{T(i,{get x(){return t(o)},get y(){return t(n)},size:"large",children:(f,l)=>{var p=ut();a(f,p)},$$slots:{default:!0}})};w(c,i=>{t(o)&&t(n)&&i(m)})}a(d,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
<div
  class="wrapper"
  style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
  onmousemove={handleMousemove}
>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip x={tooltipX} y={tooltipY} size="large">
    <h2>HTML Formatting</h2>
    <p>For <em>fancier</em> tooltip structure</p>
  </Tooltip>
{/if}`}}});var F=r(I,2);const N=z(()=>({content:"This tooltip is oriented to the left",style:"dark",orientation:"left",x:t(o),y:t(n)}));u(F,{name:"Static orientation",get args(){return t(N)},get template(){return $},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
<div
  class="wrapper"
  style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
  onmousemove={handleMousemove}
  onmouseout={handleMouseout}
  onblur={handleMouseout}
>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip {...args} x={tooltipX} y={tooltipY}>{args.content || "This is a tooltip"}</Tooltip>
{/if}`}}});var A=r(F,2);u(A,{name:"Contain inside parent",asChild:!0,children:(d,_)=>{var s=ht(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=h;var c=r(H(e),2);{var m=i=>{T(i,{content:"This tooltip is contained by parent",containParent:!0,get x(){return t(o)},get y(){return t(n)}})};w(c,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,h),a(d,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
<div
  class="wrapper"
  style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"
  onmousemove={handleMousemove}
  onmouseout={handleMouseout}
  onblur={handleMouseout}
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
</div>`}}});var j=r(A,2);u(j,{name:"Pinned to element",asChild:!0,children:(d,_)=>{var s=_t(),e=b(s),c=H(e),m=H(c);q(m,{onclick:()=>x(E,!t(E)),children:(l,p)=>{var C=P("Click me");a(l,C)},$$slots:{default:!0}}),ct(c,l=>x(Y,l),()=>t(Y));var i=r(e,2);{var f=l=>{T(l,{elOffset:5,get el(){return t(Y)},children:(p,C)=>{var y=P("This tooltip is pinned to an existing element");a(p,y)},$$slots:{default:!0}})};w(i,l=>{t(E)&&l(f)})}a(d,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
  class="wrapper"
  style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
>
  <div bind:this={pinEl} style="display: inline-block">
    <Button onclick={() => (showPinned = !showPinned)}>Click me</Button>
  </div>
</div>
{#if showPinned}
  <Tooltip elOffset={5} el={pinEl}>This tooltip is pinned to an existing element</Tooltip>
{/if}`}}});var Q=r(j,2);u(Q,{name:"Tooltip override",asChild:!0,children:(d,_)=>{var s=yt(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=h;var c=r(e,2);{var m=i=>{T(i,{get x(){return t(o)},get y(){return t(n)},size:"large",tooltipOverride:(l,p)=>{let C=()=>p==null?void 0:p().orientation;var y=ft(),U=r(H(y),4);q(U,{children:(W,Ht)=>{var tt=P("Custom");a(W,tt)},$$slots:{default:!0}}),R(()=>{pt(y,1,`custom-tooltip ${C()??""}`),dt(y,`background: ${V.gray_shade_lighter}; padding: var(--spacing-2); border: solid 2px ${V.magenta}`)}),a(l,y)},$$slots:{tooltipOverride:!0}})};w(c,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,h),a(d,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
<div
  class="wrapper"
  style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
  onmousemove={handleMousemove}
  onmouseout={handleMouseout}
  onblur={handleMouseout}
>
  <p>Hover me to see tooltip</p>
</div>
{#if tooltipX && tooltipY}
  <Tooltip x={tooltipX} y={tooltipY} size="large">
    {#snippet tooltipOverride({ orientation })}
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
    {/snippet}
  </Tooltip>
{/if}`}}}),a(M,L),nt()}it(["mousemove","mouseout"]);G.__docgen={data:[],name:"Tooltip.stories.svelte"};const g=at(G,Z),Tt=["MouseEvent","DarkMode","CustomHTML","StaticOrientation","ContainInsideParent","PinnedToElement","TooltipOverride"],xt={...g.MouseEvent,tags:["svelte-csf-v5"]},$t={...g.DarkMode,tags:["svelte-csf-v5"]},wt={...g.CustomHTML,tags:["svelte-csf-v5"]},Mt={...g.StaticOrientation,tags:["svelte-csf-v5"]},Ct={...g.ContainInsideParent,tags:["svelte-csf-v5"]},kt={...g.PinnedToElement,tags:["svelte-csf-v5"]},Pt={...g.TooltipOverride,tags:["svelte-csf-v5"]},ue=Object.freeze(Object.defineProperty({__proto__:null,ContainInsideParent:Ct,CustomHTML:wt,DarkMode:$t,MouseEvent:xt,PinnedToElement:kt,StaticOrientation:Mt,TooltipOverride:Pt,__namedExportsOrder:Tt,default:Z},Symbol.toStringTag,{value:"Module"}));export{xt as $,$t as a,wt as b,Mt as c,Ct as d,kt as e,Pt as f,ue as s};
