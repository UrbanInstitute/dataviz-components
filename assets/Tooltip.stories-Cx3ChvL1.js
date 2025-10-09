import{p as tt,f as v,a as b,V as et,g as t,h as w,s as r,z as k,B as C,b as a,Y as S,y as T,U as P,c as H,d as ot,Z as nt,W as it,t as A,e as rt}from"./iframe-D_iF5c85.js";import{s as st}from"./class-B9SFUanI.js";import{s as at}from"./style-CNURdi_Z.js";import{b as lt}from"./this-BBCWgB8B.js";import{i as pt}from"./lifecycle-DPT9lhMs.js";import{T as $}from"./Tooltip-Dc-_iO2O.js";import{c as dt,d as mt}from"./create-runtime-stories-cJTTi5Jk.js";import"./BasicDropdown-BV9-kScM.js";import"./Block-DaVU3fpD.js";import"./DatawrapperIframe-CELrtceV.js";import"./HeadingAlt-B3s-cwVt.js";import"./IconPlus-H3PVDhId.js";import"./IconMinus-C_ALby8P.js";import"./IconClose-0BE569Ao.js";import"./IconSearch-D2taTaTp.js";import"./LogoTPCBadge-Cv3HojDc.js";import"./LogoUrbanBadge-Bi-xGI2B.js";import"./LogoUrbanAnimated-CMdd7yyu.js";import"./LogoUrban-BMoE0jVd.js";import"./LogoUrbanWide-BHp9lSVx.js";import"./Navbar-CuQe5N91.js";import"./ProjectCredits-ZoBGb6Qv.js";import"./ReturnTop-BZ2xwKgh.js";import"./Scorecard-BPpEdO58.js";import"./SocialShare-DP__719P.js";import"./TextBlock-DH-7zvxt.js";import{B as R}from"./Button-BaoQD_bw.js";import"./ChartBlock-BSxk159m.js";import"./Meta-UJtWWVZM.js";import"./Toggle-kFPVefLV.js";import"./Scrolly-B3tX4heq.js";import"./Analytics-BtQvuFGM.js";import"./Headline-FQMShgyj.js";import"./PymChild-DrAZ8mRg.js";import"./LoadingWrapper-BtRosSEG.js";import"./AxisY-BU7-4rF7.js";import"./AxisX-D93YsPX7.js";import{u as U}from"./urbanColors-BkxYcPwH.js";const V={title:"Components/Tooltip",component:$,argTypes:{style:{control:"select",options:["light","dark"]},size:{control:"select",options:["small","large"]},orientation:{control:"select",options:["dynamic","left","right","top","bottom","bottom-left","bottom-right","top-left","top-right"]}},parameters:{docs:{description:{component:"A basic tooltip."}},githubLink:{url:"/Tooltip/Tooltip.svelte"}}},{Story:_}=mt();function O(M,Y,x){const o=M.pageX,n=M.pageY;T(Y,o),T(x,n)}var ct=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),vt=v("<h2>HTML Formatting</h2> <p>For <em>fancier</em> tooltip structure</p>",1),ut=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),gt=v('-- <div class="wrapper" style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"><p>Hover me to see tooltip</p> <!></div>',1),_t=v('<div class="wrapper" style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"><div style="display: inline-block"><!></div></div> <!>',1),ht=v('<div><h5 style="margin: 0;">This is a completely custom tooltip</h5> <p style="font-size: var(--font-size-small);">Markup and style is up to me, but positioning is still provided by the component.</p> <!></div>'),ft=v('-- <div class="wrapper" style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"><p>Hover me to see tooltip</p></div> <!>',1),yt=v("<!> <!> <!> <!> <!> <!> <!>",1);function W(M,Y){tt(Y,!1);const x=(p,y=et)=>{var s=ct(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=f;var d=r(e,2);{var m=i=>{$(i,it(y,{get x(){return t(o)},get y(){return t(n)},children:(u,l)=>{var c=P();A(()=>rt(c,y().content||"This is a tooltip")),a(u,c)},$$slots:{default:!0}}))};C(d,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,f),a(p,s)};let o=k(),n=k(),X=k(),E=k(!1);function f(p){T(o,null),T(n,null)}pt();var L=yt(),B=b(L);const Z=w(()=>({x:t(o),y:t(n)}));_(B,{name:"Mouse event",get args(){return t(Z)},get template(){return x},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}});var D=r(B,2);const G=w(()=>({content:"This is a dark style tooltip",style:"dark",x:t(o),y:t(n)}));_(D,{name:"Dark mode",get args(){return t(G)},get template(){return x},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}});var I=r(F,2);const J=w(()=>({content:"This tooltip is oriented to the left",style:"dark",orientation:"left",x:t(o),y:t(n)}));_(I,{name:"Static orientation",get args(){return t(J)},get template(){return x},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
</div>`}}});var q=r(j,2);_(q,{name:"Pinned to element",asChild:!0,children:(p,y)=>{var s=_t(),e=b(s),d=H(e),m=H(d);R(m,{onClick:()=>T(E,!t(E)),children:(l,c)=>{var g=P("Click me");a(l,g)},$$slots:{default:!0}}),lt(d,l=>T(X,l),()=>t(X));var i=r(e,2);{var u=l=>{$(l,{elOffset:5,get el(){return t(X)},children:(c,g)=>{var z=P("This tooltip is pinned to an existing element");a(c,z)},$$slots:{default:!0}})};C(i,l=>{t(E)&&l(u)})}a(p,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
  class="wrapper"
  style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
>
  <div bind:this={pinEl} style="display: inline-block">
    <Button onClick={() => (showPinned = !showPinned)}>Click me</Button>
  </div>
</div>
{#if showPinned}
  <Tooltip elOffset={5} el={pinEl}>This tooltip is pinned to an existing element</Tooltip>
{/if}`}}});var K=r(q,2);_(K,{name:"Tooltip override",asChild:!0,children:(p,y)=>{var s=ft(),e=r(b(s));e.__mousemove=[O,o,n],e.__mouseout=f;var d=r(e,2);{var m=i=>{$(i,{get x(){return t(o)},get y(){return t(n)},size:"large",$$slots:{tooltipOverride:(u,l)=>{const c=w(()=>l.orientation);var g=ht(),z=r(H(g),4);R(z,{children:(N,Pt)=>{var Q=P("Custom");a(N,Q)},$$slots:{default:!0}}),A(()=>{st(g,1,`custom-tooltip ${t(c)??""}`),at(g,`background: ${U.gray_shade_lighter}; padding: var(--spacing-2); border: solid 2px ${U.magenta}`)}),a(u,g)}}})};C(d,i=>{t(o)&&t(n)&&i(m)})}S("blur",e,f),a(p,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- svelte-ignore a11y_no_static_element_interactions --> --
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
{/if}`}}}),a(M,L),ot()}nt(["mousemove","mouseout"]);W.__docgen={data:[],name:"Tooltip.stories.svelte"};const h=dt(W,V),bt=["MouseEvent","DarkMode","CustomHTML","StaticOrientation","ContainInsideParent","PinnedToElement","TooltipOverride"],$t={...h.MouseEvent,tags:["svelte-csf-v5"]},Tt={...h.DarkMode,tags:["svelte-csf-v5"]},xt={...h.CustomHTML,tags:["svelte-csf-v5"]},Ct={...h.StaticOrientation,tags:["svelte-csf-v5"]},Mt={...h.ContainInsideParent,tags:["svelte-csf-v5"]},wt={...h.PinnedToElement,tags:["svelte-csf-v5"]},kt={...h.TooltipOverride,tags:["svelte-csf-v5"]},ve=Object.freeze(Object.defineProperty({__proto__:null,ContainInsideParent:Mt,CustomHTML:xt,DarkMode:Tt,MouseEvent:$t,PinnedToElement:wt,StaticOrientation:Ct,TooltipOverride:kt,__namedExportsOrder:bt,default:V},Symbol.toStringTag,{value:"Module"}));export{$t as $,Tt as a,xt as b,Ct as c,Mt as d,wt as e,kt as f,ve as s};
