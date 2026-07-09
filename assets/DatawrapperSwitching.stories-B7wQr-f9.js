import{aH as N,aI as Z,aJ as K,Q as O,ap as R,ao as j,aK as F,f as D,d as r,p as G,b,Z as v,o as x,q as a,s as u,l as $,i as _,a as V,u as y,k as X}from"./iframe-Dwb2GjWe.js";import{c as Y,d as aa}from"./create-runtime-stories-DVwOBNxa.js";import{L as ea}from"./LoadingWrapper-BjxfNT8W.js";import{D as Q}from"./DatawrapperIframe-DuJLO8KF.js";import{B as ta}from"./BasicDropdown-CFWVT9s3.js";import{B as w}from"./Button-DZfwZS_7.js";import"./preload-helper-Dp1pzeXC.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./urbanColors-S0C424vw.js";import"./LogoUrbanAnimated-De8HvDXh.js";import"./attributes-6Paf-c-d.js";import"./class-B9SFUanI.js";import"./each-VWhaf5kD.js";import"./this-PCuW4UVg.js";function ra(n,f,B){var k=n,L=F,g,p=N()?Z:K;O(()=>{p(L,L=f())&&(g&&R(g),g=j(()=>B(k)))})}var na=D("<div></div>");function H(n){var f=na();r(n,f)}H.__docgen={data:[],name:"Placeholder.svelte"};const da={title:"Examples/Stories/Datawrapper Switching",component:H},{Story:q}=aa(),J=[{value:"AHpJL",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"91Q0t",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"eaD2D",label:"Chart #3",ariaLabel:"Quis id magna ut esse qui nostrud magna."}],oa=[{value:"Toh1S",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"rgLU1",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."}];let m=x("AHpJL"),c=y(()=>J.find(n=>n.value===a(m))),I=x("Toh1S"),M=y(()=>oa.find(n=>n.value===a(I)));var la=D("<!> <!>",1),sa=D("<!> <!> <!> <!>",1),ia=D("<!> <!> <!>",1),ua=D("<!> <!> <!>",1);function T(n,f){G(f,!0);var B=ua(),k=b(B);q(k,{name:"Dropdown",asChild:!0,source:`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart = $state("AHpJL");

  const dropdownData = [
    {
      value: "AHpJL",
      label: "Chart #1",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "91Q0t",
      label: "Chart #2",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "eaD2D",
      label: "Chart #3",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    }
  ];

  // look up metadata based on selected chart
  let selectedChartMetadata = $derived(dropdownData.find((d) => d.value === selectedChart));
<\/script>

<BasicDropdown
  id="dropdown"
  data={dropdownData}
  inlineLabel="Dropdown"
  bind:value={selectedChart}
  placeholder={null}
/>

{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
`,children:(p,A)=>{var l=la(),s=b(l);ta(s,{id:"dropdown",get data(){return J},inlineLabel:"Dropdown",placeholder:null,get value(){return a(m)},set value(d){v(m,d,!0)}});var h=u(s,2);{var C=d=>{Q(d,{get datawrapperId(){return a(c).value},get title(){return a(c).label},get ariaLabel(){return a(c).ariaLabel}})};$(h,d=>{a(c)&&d(C)})}r(p,l)},$$slots:{default:!0},parameters:{docs:{description:{story:`A generative AI model wrote or edited portions of this file with
    the supervision of a human developer and careful human review.`}},__svelteCsf:{rawCode:`<BasicDropdown
  id="dropdown"
  data={dropdownData}
  inlineLabel="Dropdown"
  bind:value={selectedChart}
  placeholder={null}
/>
{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}`}}});var L=u(k,2);q(L,{name:"Buttons",asChild:!0,source:`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
<\/script>

<Button onclick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button onclick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button onclick={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
  `,children:(p,A)=>{var l=sa(),s=b(l);w(s,{onclick:()=>v(m,"AHpJL"),children:(e,i)=>{var t=_("Chart #1");r(e,t)},$$slots:{default:!0}});var h=u(s,2);w(h,{onclick:()=>v(m,"91Q0t"),children:(e,i)=>{var t=_("Chart #2");r(e,t)},$$slots:{default:!0}});var C=u(h,2);w(C,{onclick:()=>v(m,"eaD2D"),children:(e,i)=>{var t=_("Chart #3");r(e,t)},$$slots:{default:!0}});var d=u(C,2);{var o=e=>{Q(e,{get datawrapperId(){return a(c).value},get title(){return a(c).label},get ariaLabel(){return a(c).ariaLabel}})};$(d,e=>{a(c)&&e(o)})}r(p,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button onclick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button onclick={() => (selectedChart = "eaD2D")}>Chart #3</Button>
{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}`}}});var g=u(L,2);q(g,{name:"Loading",asChild:!0,source:`
<script>
  import { Button, DatawrapperIframe, LoadingWrapper } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
<\/script>

<Button onclick={() => (selectedChartLoading = "Toh1S")}>Chart #1</Button>
<Button onclick={() => (selectedChartLoading = "rgLU1")}>Chart #2</Button>

  {#if selectedChartLoadingMetadata}
    <LoadingWrapper>
      {#snippet children({ setChildLoading, setChildLoaded })}
        {#key selectedChartLoading}
          <DatawrapperIframe
            datawrapperId={selectedChartLoadingMetadata.value}
            title={selectedChartLoadingMetadata.label}
            ariaLabel={selectedChartLoadingMetadata.ariaLabel}
            onstartrender={setChildLoading}
            onvisrendered={setChildLoaded}
          />
        {/key}
      {/snippet}
    </LoadingWrapper>
  {/if}
`,children:(p,A)=>{var l=ia(),s=b(l);w(s,{onclick:()=>v(I,"Toh1S"),children:(o,e)=>{var i=_("Chart #1");r(o,i)},$$slots:{default:!0}});var h=u(s,2);w(h,{onclick:()=>v(I,"rgLU1"),children:(o,e)=>{var i=_("Chart #2");r(o,i)},$$slots:{default:!0}});var C=u(h,2);{var d=o=>{ea(o,{children:(i,t)=>{let W=()=>t==null?void 0:t().setChildLoading,U=()=>t==null?void 0:t().setChildLoaded;var P=X(),z=b(P);ra(z,()=>a(I),E=>{Q(E,{get datawrapperId(){return a(M).value},get title(){return a(M).label},get ariaLabel(){return a(M).ariaLabel},get onstartrender(){return W()},get onvisrendered(){return U()}})}),r(i,P)},$$slots:{default:!0}})};$(C,o=>{a(M)&&o(d)})}r(p,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (selectedChartLoading = "Toh1S")}>Chart #1</Button>
<Button onclick={() => (selectedChartLoading = "rgLU1")}>Chart #2</Button>

{#if selectedChartLoadingMetadata}
  <LoadingWrapper>
    {#snippet children({ setChildLoading, setChildLoaded })}
      {#key selectedChartLoading}
        <DatawrapperIframe
          datawrapperId={selectedChartLoadingMetadata.value}
          title={selectedChartLoadingMetadata.label}
          ariaLabel={selectedChartLoadingMetadata.ariaLabel}
          onstartrender={setChildLoading}
          onvisrendered={setChildLoaded}
        />
      {/key}
    {/snippet}
  </LoadingWrapper>
{/if}`}}}),r(n,B),V()}T.__docgen={data:[],name:"DatawrapperSwitching.stories.svelte"};const S=Y(T,da),Ma=["Dropdown","Buttons","Loading"],Ia={...S.Dropdown,tags:["svelte-csf-v5"]},$a={...S.Buttons,tags:["svelte-csf-v5"]},Qa={...S.Loading,tags:["svelte-csf-v5"]};export{$a as Buttons,Ia as Dropdown,Qa as Loading,Ma as __namedExportsOrder,da as default};
