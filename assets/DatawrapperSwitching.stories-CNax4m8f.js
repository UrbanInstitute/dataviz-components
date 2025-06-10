import{a9 as F,aa as G,ab as O,U as R,ac as j,ad as K,ae as V,p as X,C as T,D as Y,f as D,a as _,E as u,g as a,F as w,s as p,G as Q,b as d,Z as b,d as aa,af as ea,ag as ta,h as U}from"./iframe-BcferWuU.js";import{i as ra}from"./lifecycle-BcSUtK95.js";import{c as da,d as sa}from"./create-runtime-stories-CHM6HO4D.js";import{L as na}from"./LoadingWrapper-CpRnKu88.js";import{D as y}from"./DatawrapperIframe-BBFhdL5B.js";import{B as oa}from"./BasicDropdown-DJMtB7rs.js";import{B as $}from"./Button-CeUI2gWw.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./urbanColors-BkxYcPwH.js";import"./LogoUrbanAnimated-D8omdrsf.js";import"./attributes-1snxx-6i.js";import"./class-B9SFUanI.js";import"./each-CZjc6dyk.js";import"./misc-Axxag6g7.js";import"./this-XyIzL1DC.js";function la(B,k,r){var m=B,t=V,C,M=F()?G:O;R(()=>{M(t,t=k())&&(C&&j(C),C=K(()=>r(m)))})}const ia={title:"Examples/Stories/Datawrapper Switching"},{Story:q}=sa();var ca=D("<!> <!>",1),ua=D("<!> <!> <!> <!>",1),pa=D("<!> <!> <!>",1),ha=D("<!> <!> <!>",1);function W(B,k){X(k,!1);const r=w(),m=w();let t=w("AHpJL");const C=[{value:"AHpJL",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"91Q0t",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"eaD2D",label:"Chart #3",ariaLabel:"Quis id magna ut esse qui nostrud magna."}],M=[{value:"Toh1S",label:"Chart #1",ariaLabel:"Quis id magna ut esse qui nostrud magna."},{value:"rgLU1",label:"Chart #2",ariaLabel:"Quis id magna ut esse qui nostrud magna."}];let g=w("Toh1S");T(()=>a(t),()=>{u(r,C.find(s=>s.value===a(t)))}),T(()=>a(g),()=>{u(m,M.find(s=>s.value===a(g)))}),Y(),ra();var x=ha(),A=_(x);q(A,{name:"Dropdown",source:`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart;

  // look up metadata based on selected chart
  $: selectedChartMetadata = dropdownData.find((d) => d.value === selectedChart);

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
`,children:(s,H)=>{var i=ca(),c=_(i);oa(c,{id:"dropdown",get data(){return C},inlineLabel:"Dropdown",placeholder:null,get value(){return a(t)},set value(n){u(t,n)},$$legacy:!0});var h=p(c,2);{var v=n=>{y(n,{get datawrapperId(){return a(r).value},get title(){return a(r).label},get ariaLabel(){return a(r).ariaLabel}})};Q(h,n=>{a(r)&&n(v)})}d(s,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
   <BasicDropdown id="dropdown" data={dropdownData} inlineLabel="Dropdown" bind:value={selectedChart} placeholder={null} />
{#if selectedChartMetadata}
<DatawrapperIframe datawrapperId={selectedChartMetadata.value} title={selectedChartMetadata.label} ariaLabel={selectedChartMetadata.ariaLabel} />
{/if}
 </undefined>`}}});var P=p(A,2);q(P,{name:"Buttons",source:`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
<\/script>

<Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
  `,children:(s,H)=>{var i=ua(),c=_(i);$(c,{$$events:{click:()=>u(t,"AHpJL")},children:(e,l)=>{var f=b("Chart #1");d(e,f)},$$slots:{default:!0}});var h=p(c,2);$(h,{$$events:{click:()=>u(t,"91Q0t")},children:(e,l)=>{var f=b("Chart #2");d(e,f)},$$slots:{default:!0}});var v=p(h,2);$(v,{$$events:{click:()=>u(t,"eaD2D")},children:(e,l)=>{var f=b("Chart #3");d(e,f)},$$slots:{default:!0}});var n=p(v,2);{var o=e=>{y(e,{get datawrapperId(){return a(r).value},get title(){return a(r).label},get ariaLabel(){return a(r).ariaLabel}})};Q(n,e=>{a(t)&&e(o)})}d(s,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
   <Button on:click={() => selectedChart = "AHpJL"}>Chart #1</Button> <Button on:click={() => selectedChart = "91Q0t"}>Chart #2</Button> <Button on:click={() => selectedChart = "eaD2D"}>Chart #3</Button> 	{#if selectedChart}
<DatawrapperIframe datawrapperId={selectedChartMetadata.value} title={selectedChartMetadata.label} ariaLabel={selectedChartMetadata.ariaLabel} />
{/if}
 </undefined>`}}});var E=p(P,2);q(E,{name:"Loading",source:`
<script>
  import { Button, DatawrapperIframe, LoadingWrapper } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
<\/script>

<Button on:click={() => (selectedChart = "Toh1S")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "rgLU1")}>Chart #2</Button>

  {#if selectedChartMetadata}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      {#key selectedChart}
        <DatawrapperIframe
          datawrapperId={selectedChartMetadata.value}
          title={selectedChartMetadata.label}
          ariaLabel={selectedChartMetadata.ariaLabel}
          on:startrender={setChildLoading}
          on:visrendered={setChildLoaded}
        />
      {/key}
    </LoadingWrapper>
  {/if}
`,children:(s,H)=>{var i=pa(),c=_(i);$(c,{$$events:{click:()=>u(g,"Toh1S")},children:(o,e)=>{var l=b("Chart #1");d(o,l)},$$slots:{default:!0}});var h=p(c,2);$(h,{$$events:{click:()=>u(g,"rgLU1")},children:(o,e)=>{var l=b("Chart #2");d(o,l)},$$slots:{default:!0}});var v=p(h,2);{var n=o=>{na(o,{children:ea,$$slots:{default:(e,l)=>{const f=U(()=>l.setChildLoaded),z=U(()=>l.setChildLoading);var J=ta(),N=_(J);la(N,()=>a(g),Z=>{y(Z,{get datawrapperId(){return a(m).value},$$events:{startrender(...I){var L;(L=a(z))==null||L.apply(this,I)},visrendered(...I){var L;(L=a(f))==null||L.apply(this,I)}}})}),d(e,J)}}})};Q(v,o=>{a(m)&&o(n)})}d(s,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
   <Button on:click={() => selectedChartLoading = "Toh1S"}>Chart #1</Button> <Button on:click={() => selectedChartLoading = "rgLU1"}>Chart #2</Button> 	{#if selectedChartLoadingMetadata}
<LoadingWrapper let:setChildLoaded let:setChildLoading>
	{#key selectedChartLoading}
		<DatawrapperIframe datawrapperId={selectedChartLoadingMetadata.value} on:startrender={setChildLoading} on:visrendered={setChildLoaded} />
	{/key}
</LoadingWrapper>
{/if}
 </undefined>`}}}),d(B,x),aa()}W.__docgen={data:[],name:"DatawrapperSwitching.stories.svelte"};const S=da(W,ia),ya=["Dropdown","Buttons","Loading"],qa={...S.Dropdown,tags:["svelte-csf-v5"]},Sa={...S.Buttons,tags:["svelte-csf-v5"]},xa={...S.Loading,tags:["svelte-csf-v5"]};export{Sa as Buttons,qa as Dropdown,xa as Loading,ya as __namedExportsOrder,ia as default};
