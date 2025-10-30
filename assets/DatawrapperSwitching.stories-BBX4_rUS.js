import{as as N,at as Z,au as K,K as O,ad as R,ac as j,av as F,f as D,b as r,p as G,a as b,Z as v,i as a,T as A,s as c,y as I,P as _,d as V,x as y,Q as X}from"./iframe-BjxEKEQH.js";import{c as Y,d as aa}from"./create-runtime-stories-HPq0r60h.js";import{L as ea}from"./LoadingWrapper-DjGTokaM.js";import{D as Q}from"./DatawrapperIframe-DBrTT8wg.js";import{B as ta}from"./BasicDropdown-DBkXvpWy.js";import{B as w}from"./Button-DMhGQjzO.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./urbanColors-BkxYcPwH.js";import"./LogoUrbanAnimated-DtAU-OWH.js";import"./attributes-UJeNkN1P.js";import"./class-B9SFUanI.js";import"./each-DC_8OmU5.js";import"./this-DGLcOT4Q.js";function ra(n,m,B){var M=n,L=F,g,p=N()?Z:K;O(()=>{p(L,L=m())&&(g&&R(g),g=j(()=>B(M)))})}var na=D("<div></div>");function H(n){var m=na();r(n,m)}H.__docgen={data:[],name:"Placeholder.svelte"};const da={title:"Examples/Stories/Datawrapper Switching",component:H},{Story:P}=aa(),J=[{value:"AHpJL",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"91Q0t",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"eaD2D",label:"Chart #3",ariaLabel:"Quis id magna ut esse qui nostrud magna."}],oa=[{value:"Toh1S",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"rgLU1",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."}];let f=A("AHpJL"),u=y(()=>J.find(n=>n.value===a(f))),$=A("Toh1S"),k=y(()=>oa.find(n=>n.value===a($)));var la=D("<!> <!>",1),sa=D("<!> <!> <!> <!>",1),ia=D("<!> <!> <!>",1),ca=D("<!> <!> <!>",1);function T(n,m){G(m,!0);var B=ca(),M=b(B);P(M,{name:"Dropdown",asChild:!0,source:`
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
`,children:(p,q)=>{var l=la(),s=b(l);ta(s,{id:"dropdown",get data(){return J},inlineLabel:"Dropdown",placeholder:null,get value(){return a(f)},set value(d){v(f,d,!0)}});var h=c(s,2);{var C=d=>{Q(d,{get datawrapperId(){return a(u).value},get title(){return a(u).label},get ariaLabel(){return a(u).ariaLabel}})};I(h,d=>{a(u)&&d(C)})}r(p,l)},$$slots:{default:!0},parameters:{docs:{description:{story:`A generative AI model wrote or edited portions of this file with
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
{/if}`}}});var L=c(M,2);P(L,{name:"Buttons",asChild:!0,source:`
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
  `,children:(p,q)=>{var l=sa(),s=b(l);w(s,{onclick:()=>v(f,"AHpJL"),children:(e,i)=>{var t=_("Chart #1");r(e,t)},$$slots:{default:!0}});var h=c(s,2);w(h,{onclick:()=>v(f,"91Q0t"),children:(e,i)=>{var t=_("Chart #2");r(e,t)},$$slots:{default:!0}});var C=c(h,2);w(C,{onclick:()=>v(f,"eaD2D"),children:(e,i)=>{var t=_("Chart #3");r(e,t)},$$slots:{default:!0}});var d=c(C,2);{var o=e=>{Q(e,{get datawrapperId(){return a(u).value},get title(){return a(u).label},get ariaLabel(){return a(u).ariaLabel}})};I(d,e=>{a(u)&&e(o)})}r(p,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button onclick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button onclick={() => (selectedChart = "eaD2D")}>Chart #3</Button>
{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}`}}});var g=c(L,2);P(g,{name:"Loading",asChild:!0,source:`
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
`,children:(p,q)=>{var l=ia(),s=b(l);w(s,{onclick:()=>v($,"Toh1S"),children:(o,e)=>{var i=_("Chart #1");r(o,i)},$$slots:{default:!0}});var h=c(s,2);w(h,{onclick:()=>v($,"rgLU1"),children:(o,e)=>{var i=_("Chart #2");r(o,i)},$$slots:{default:!0}});var C=c(h,2);{var d=o=>{ea(o,{children:(i,t)=>{let W=()=>t==null?void 0:t().setChildLoading,U=()=>t==null?void 0:t().setChildLoaded;var x=X(),z=b(x);ra(z,()=>a($),E=>{Q(E,{get datawrapperId(){return a(k).value},get title(){return a(k).label},get ariaLabel(){return a(k).ariaLabel},get onstartrender(){return W()},get onvisrendered(){return U()}})}),r(i,x)},$$slots:{default:!0}})};I(C,o=>{a(k)&&o(d)})}r(p,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (selectedChartLoading = "Toh1S")}>Chart #1</Button>
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
{/if}`}}}),r(n,B),V()}T.__docgen={data:[],name:"DatawrapperSwitching.stories.svelte"};const S=Y(T,da),Ma=["Dropdown","Buttons","Loading"],ka={...S.Dropdown,tags:["svelte-csf-v5"]},$a={...S.Buttons,tags:["svelte-csf-v5"]},Ia={...S.Loading,tags:["svelte-csf-v5"]};export{$a as Buttons,ka as Dropdown,Ia as Loading,Ma as __namedExportsOrder,da as default};
