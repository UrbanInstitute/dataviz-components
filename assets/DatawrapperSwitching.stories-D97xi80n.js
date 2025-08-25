import{av as O,aw as R,ax as Z,N as j,ag as F,af as G,ay as K,f as $,b as t,p as V,a as b,y as m,g as a,az as H,s as i,A as y,T as w,d as X,a8 as I,a4 as Y,a6 as aa}from"./iframe-Dqyympk2.js";import{c as ea,d as ta}from"./create-runtime-stories-Dd1Bukbj.js";import{L as ra}from"./LoadingWrapper-CRJW0ZrU.js";import{D as S}from"./DatawrapperIframe-Cp16-0GF.js";import{B as da}from"./BasicDropdown-KCfn5aYK.js";import{B as D}from"./Button-CeX9r_33.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./lifecycle-C4HJYyFW.js";import"./urbanColors-BkxYcPwH.js";import"./LogoUrbanAnimated-DJIoQOhm.js";import"./attributes-xMEigVYC.js";import"./class-B9SFUanI.js";import"./each-b5KgxJAA.js";import"./misc-DdO7Bh0o.js";import"./this-Cf322X-W.js";function na(r,f,B){var k=r,g=K,L,u=O()?R:Z;j(()=>{u(g,g=f())&&(L&&F(L),L=G(()=>B(k)))})}var oa=$("<div></div>");function J(r){var f=oa();t(r,f)}J.__docgen={data:[],name:"Placeholder.svelte"};const sa={title:"Examples/Stories/Datawrapper Switching",component:J},{Story:q}=ta(),W=[{value:"AHpJL",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"91Q0t",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"eaD2D",label:"Chart #3",ariaLabel:"Quis id magna ut esse qui nostrud magna."}],la=[{value:"Toh1S",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"rgLU1",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."}];let C=H("AHpJL"),h=I(()=>W.find(r=>r.value===a(C))),M=H("Toh1S"),T=I(()=>la.find(r=>r.value===a(M)));var ia=$("<!> <!>",1),ua=$("<!> <!> <!> <!>",1),pa=$("<!> <!> <!>",1),ca=$("<!> <!> <!>",1);function U(r,f){V(f,!0);var B=ca(),k=b(B);q(k,{name:"Dropdown",asChild:!0,source:`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart = $state();

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

{#if selectedChartMetaData}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
`,children:(u,P)=>{var s=ia(),l=b(s);da(l,{id:"dropdown",get data(){return W},inlineLabel:"Dropdown",placeholder:null,get value(){return a(C)},set value(d){m(C,d,!0)}});var p=i(l,2);{var v=d=>{S(d,{get datawrapperId(){return a(h).value},get title(){return a(h).label},get ariaLabel(){return a(h).ariaLabel}})};y(p,d=>{a(h)&&d(v)})}t(u,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<BasicDropdown
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
{/if}`}}});var g=i(k,2);q(g,{name:"Buttons",asChild:!0,source:`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
<\/script>

<Button onClick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button onClick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button onClick={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
  `,children:(u,P)=>{var s=ua(),l=b(s);D(l,{onClick:()=>m(C,"AHpJL"),children:(e,o)=>{var c=w("Chart #1");t(e,c)},$$slots:{default:!0}});var p=i(l,2);D(p,{onClick:()=>m(C,"91Q0t"),children:(e,o)=>{var c=w("Chart #2");t(e,c)},$$slots:{default:!0}});var v=i(p,2);D(v,{onClick:()=>m(C,"eaD2D"),children:(e,o)=>{var c=w("Chart #3");t(e,c)},$$slots:{default:!0}});var d=i(v,2);{var n=e=>{S(e,{get datawrapperId(){return a(h).value},get title(){return a(h).label},get ariaLabel(){return a(h).ariaLabel}})};y(d,e=>{a(C)&&e(n)})}t(u,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onClick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button onClick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button onClick={() => (selectedChart = "eaD2D")}>Chart #3</Button>
{#if selectedChart}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}`}}});var L=i(g,2);q(L,{name:"Loading",asChild:!0,source:`
<script>
  import { Button, DatawrapperIframe, LoadingWrapper } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
<\/script>

<Button onClick={() => (selectedChart = "Toh1S")}>Chart #1</Button>
<Button onClick={() => (selectedChart = "rgLU1")}>Chart #2</Button>

  {#if selectedChartMetadata}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      {#key selectedChart}
        <DatawrapperIframe
          datawrapperId={selectedChartMetadata.value}
          title={selectedChartMetadata.label}
          ariaLabel={selectedChartMetadata.ariaLabel}
          onstartrender={setChildLoading}
          onvisrendered={setChildLoaded}
        />
      {/key}
    </LoadingWrapper>
  {/if}
`,children:(u,P)=>{var s=pa(),l=b(s);D(l,{onClick:()=>m(M,"Toh1S"),children:(n,e)=>{var o=w("Chart #1");t(n,o)},$$slots:{default:!0}});var p=i(l,2);D(p,{onClick:()=>m(M,"rgLU1"),children:(n,e)=>{var o=w("Chart #2");t(n,o)},$$slots:{default:!0}});var v=i(p,2);{var d=n=>{ra(n,{children:Y,$$slots:{default:(e,o)=>{const c=I(()=>o.setChildLoaded),z=I(()=>o.setChildLoading);var A=aa(),E=b(A);na(E,()=>a(M),N=>{S(N,{get datawrapperId(){return a(T).value},$$events:{startrender(...Q){var _;(_=a(z))==null||_.apply(this,Q)},visrendered(...Q){var _;(_=a(c))==null||_.apply(this,Q)}}})}),t(e,A)}}})};y(v,n=>{a(T)&&n(d)})}t(u,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onClick={() => (selectedChartLoading = "Toh1S")}>Chart #1</Button>
<Button onClick={() => (selectedChartLoading = "rgLU1")}>Chart #2</Button>

{#if selectedChartLoadingMetadata}
  <LoadingWrapper let:setChildLoaded let:setChildLoading>
    {#key selectedChartLoading}
      <DatawrapperIframe
        datawrapperId={selectedChartLoadingMetadata.value}
        on:startrender={setChildLoading}
        on:visrendered={setChildLoaded}
      />
    {/key}
  </LoadingWrapper>
{/if}`}}}),t(r,B),X()}U.__docgen={data:[],name:"DatawrapperSwitching.stories.svelte"};const x=ea(U,sa),Qa=["Dropdown","Buttons","Loading"],ya={...x.Dropdown,tags:["svelte-csf-v5"]},Sa={...x.Buttons,tags:["svelte-csf-v5"]},qa={...x.Loading,tags:["svelte-csf-v5"]};export{Sa as Buttons,ya as Dropdown,qa as Loading,Qa as __namedExportsOrder,sa as default};
