import{p as tt,f as v,a as b,U as et,g as t,h as w,s as r,z as k,A as C,b as a,X as S,y as T,T as P,c as H,d as ot,Y as nt,V as it,t as q,e as rt}from"./iframe-Bc23XYIh.js";import{s as st}from"./class-B9SFUanI.js";import{s as at}from"./style-CNURdi_Z.js";import{b as lt}from"./this-Us5rr2fM.js";import{i as pt}from"./lifecycle-BvYk3ZZi.js";import{T as $}from"./Tooltip-CccS1ffk.js";import{c as dt,d as mt}from"./create-runtime-stories-DZzrqf4P.js";import"./BasicDropdown-BgkKq8Kt.js";import"./Block-JqUM8jDW.js";import"./DatawrapperIframe-ZoEbBxqL.js";import"./HeadingAlt-B260iPKW.js";import"./IconPlus-jybn67Or.js";import"./IconMinus-B-TwGzPd.js";import"./IconClose-DkF-Y6n0.js";import"./IconSearch-CDgvIMyo.js";import"./LogoTPCBadge-BJ8dny9R.js";import"./LogoUrbanBadge-D1jlwPVH.js";import"./LogoUrbanAnimated-CDL3zKW8.js";import"./LogoUrban-Bqh9mA3G.js";import"./LogoUrbanWide-BbvKhpga.js";import"./Navbar-DQ4hlGXP.js";import"./ProjectCredits-DGAPcPku.js";import"./ReturnTop-2JM--Ido.js";import"./Scorecard-Cfkxka4A.js";import"./SocialShare-C0A9GCXd.js";import"./TextBlock-B6Enknb-.js";import{B as R}from"./Button-BQQOPGYe.js";import"./ChartBlock-CwNnU1EB.js";import"./Meta-BaEDUEaD.js";import"./Toggle-oFO_p8_E.js";import"./Scrolly-Bp65kZiM.js";import"./Analytics-BJpqrrXV.js";import"./Headline-BH3gxB7H.js";import"./PymChild-CbVXHw2-.js";import"./LoadingWrapper-CXnhrKyX.js";import"./AxisY-vwaRprKw.js";import"./AxisX-CksETu_T.js";import{u as U}from"./urbanColors-BkxYcPwH.js";const V={title:"Components/Tooltip",component:$,argTypes:{style:{control:"select",options:["light","dark"]},size:{control:"select",options:["small","large"]},orientation:{control:"select",options:["dynamic","left","right","top","bottom","bottom-left","bottom-right","top-left","top-right"]}},parameters:{docs:{description:{component:"A basic tooltip."}},githubLink:{url:"/Tooltip/Tooltip.svelte"}}},{Story:_}=mt();function O(M,X,x){const o=M.pageX,n=M.pageY;T(X,o),T(x,n)}var ct=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),vt=v("<h2>HTML Formatting</h2> <p>For <em>fancier</em> tooltip structure</p>",1),ut=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),gt=v('-- <div class="wrapper" style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"><p>Hover me to see tooltip</p> <!></div>',1),_t=v('<div class="wrapper" style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"><div style="display: inline-block"><!></div></div> <!>',1),ht=v('<div><h5 style="margin: 0;">This is a completely custom tooltip</h5> <p style="font-size: var(--font-size-small);">Markup and style is up to me, but positioning is still provided by the component.</p> <!></div>'),ft=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),yt=v("<!> <!> <!> <!> <!> <!> <!>",1);function G(M,X){tt(X,!1);const x=(p,y=et)=>{var s=ct(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=f;var d=r(e,2);{var m=i=>{$(i,it(y,{get x(){return t(o)},get y(){return t(n)},children:(u,l)=>{var c=P();q(()=>rt(c,y().content||"This is a tooltip")),a(u,c)},$$slots:{default:!0}}))};C(d,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,f),a(p,s)};let o=k(),n=k(),Y=k(),E=k(!1);function f(p){T(o,null),T(n,null)}pt();var L=yt(),B=b(L);const J=w(()=>({x:t(o),y:t(n)}));_(B,{name:"Mouse event",get args(){return t(J)},get template(){return x},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}});var D=r(B,2);const K=w(()=>({content:"This is a dark style tooltip",style:"dark",x:t(o),y:t(n)}));_(D,{name:"Dark mode",get args(){return t(K)},get template(){return x},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}});var F=r(D,2);_(F,{name:"Custom HTML",asChild:!0,children:(p,y)=>{var s=ut(),e=r(b(s));e.__mousemove=[O,o,n];var d=r(e,2);{var m=i=>{$(i,{get x(){return t(o)},get y(){return t(n)},size:"large",children:(u,l)=>{var c=vt();a(u,c)},$$slots:{default:!0}})};C(d,i=>{t(o)&&t(n)&&i(m)})}a(p,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}});var I=r(F,2);const N=w(()=>({content:"This tooltip is oriented to the left",style:"dark",orientation:"left",x:t(o),y:t(n)}));_(I,{name:"Static orientation",get args(){return t(N)},get template(){return x},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}});var j=r(I,2);_(j,{name:"Contain inside parent",asChild:!0,children:(p,y)=>{var s=gt(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=f;var d=r(H(e),2);{var m=i=>{$(i,{content:"This tooltip is contained by parent",containParent:!0,get x(){return t(o)},get y(){return t(n)}})};C(d,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,f),a(p,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
</div>`}}});var A=r(j,2);_(A,{name:"Pinned to element",asChild:!0,children:(p,y)=>{var s=_t(),e=b(s),d=H(e),m=H(d);R(m,{onClick:()=>T(E,!t(E)),children:(l,c)=>{var g=P("Click me");a(l,g)},$$slots:{default:!0}}),lt(d,l=>T(Y,l),()=>t(Y));var i=r(e,2);{var u=l=>{$(l,{elOffset:5,get el(){return t(Y)},children:(c,g)=>{var z=P("This tooltip is pinned to an existing element");a(c,z)},$$slots:{default:!0}})};C(i,l=>{t(E)&&l(u)})}a(p,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
  class="wrapper"
  style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
>
  <div bind:this={pinEl} style="display: inline-block">
    <Button onClick={() => (showPinned = !showPinned)}>Click me</Button>
  </div>
</div>
{#if showPinned}
  <Tooltip elOffset={5} el={pinEl}>This tooltip is pinned to an existing element</Tooltip>
{/if}`}}});var Q=r(A,2);_(Q,{name:"Tooltip override",asChild:!0,children:(p,y)=>{var s=ft(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=f;var d=r(e,2);{var m=i=>{$(i,{get x(){return t(o)},get y(){return t(n)},size:"large",$$slots:{tooltipOverride:(u,l)=>{const c=w(()=>l.orientation);var g=ht(),z=r(H(g),4);R(z,{children:(W,Pt)=>{var Z=P("Custom");a(W,Z)},$$slots:{default:!0}}),q(()=>{st(g,1,`custom-tooltip ${t(c)??""}`),at(g,`background: ${U.gray_shade_lighter}; padding: var(--spacing-2); border: solid 2px ${U.magenta}`)}),a(u,g)}}})};C(d,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,f),a(p,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}}),a(M,L),ot()}nt(["mousemove","mouseout"]);G.__docgen={data:[],name:"Tooltip.stories.svelte"};const h=dt(G,V),bt=["MouseEvent","DarkMode","CustomHTML","StaticOrientation","ContainInsideParent","PinnedToElement","TooltipOverride"],$t={...h.MouseEvent,tags:["svelte-csf-v5"]},Tt={...h.DarkMode,tags:["svelte-csf-v5"]},xt={...h.CustomHTML,tags:["svelte-csf-v5"]},Ct={...h.StaticOrientation,tags:["svelte-csf-v5"]},Mt={...h.ContainInsideParent,tags:["svelte-csf-v5"]},wt={...h.PinnedToElement,tags:["svelte-csf-v5"]},kt={...h.TooltipOverride,tags:["svelte-csf-v5"]},ve=Object.freeze(Object.defineProperty({__proto__:null,ContainInsideParent:Mt,CustomHTML:xt,DarkMode:Tt,MouseEvent:$t,PinnedToElement:wt,StaticOrientation:Ct,TooltipOverride:kt,__namedExportsOrder:bt,default:V},Symbol.toStringTag,{value:"Module"}));export{$t as $,Tt as a,xt as b,Ct as c,Mt as d,wt as e,kt as f,ve as s};
