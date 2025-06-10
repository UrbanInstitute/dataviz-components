import{p as C,i as x,f,a as B,k as S,m as k,l as p,s as j,b as m,d as O,n as I,w as L,t as E,e as z,g as u,c as H}from"./iframe-BcferWuU.js";import{e as M,i as P}from"./each-CZjc6dyk.js";import{i as R}from"./lifecycle-BcSUtK95.js";import{c as W,d as q}from"./create-runtime-stories-CHM6HO4D.js";import{B as A}from"./BasicDropdown-DJMtB7rs.js";import"./attributes-1snxx-6i.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-Axxag6g7.js";import"./urbanColors-BkxYcPwH.js";const F={title:"Examples/Stories/Dynamic Info With Stores"},{Story:G}=q();var J=f("<p> </p>"),K=f("<!> <!>",1);function D($,_){C(_,!1);const[r,v]=I(),b=()=>p(t,"$selected",r),l=()=>p(w,"$selectedData",r),a=[{label:"Bar Chart",value:"barChart",metric:100},{label:"Column Chart",value:"columnChart",metric:200},{label:"Heatmap",value:"heatmap",metric:300}];a.reduce((e,s)=>(e[s.value]=s,e),a);const h=a.map(e=>({value:e.value,label:e.label})),t=L("barChart"),w=x(t,e=>a[e]);R(),G($,{name:"Default",source:`
<script>
  import { BasicDropdown } from "@urbaninstitute/dataviz-components";
  import { selected, selectedData } from "$lib/stores/selected";
  import data from "$data/data.json";

  // create dropdown data
  const dropdownData = data.map((d) => {
    return {
      value: d.value,
      label: d.label
    };
  });
<\/script>

<!-- dropdown to control selected item -->
<BasicDropdown
    id="dropdown"
    data={dropdownData}
    inlineLabel="Dropdown"
    bind:value={$selected}
    placeholder={null}
  />

<!-- access data of selected using selectedData -->
{#each Object.keys($selectedData) as field}
  <p>{field}: {$selectedData[field]}</p>
{/each}
`,children:(e,s)=>{var d=K(),n=B(d);A(n,{id:"dropdown",get data(){return h},inlineLabel:"Dropdown",placeholder:null,get value(){return k(),b()},set value(o){S(t,o)},$$legacy:!0});var g=j(n,2);M(g,1,()=>Object.keys(l()),P,(o,i)=>{var c=J(),y=H(c);E(()=>z(y,`${u(i)??""}: ${l()[u(i)]??""}`)),m(o,c)}),m(e,d)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
   <BasicDropdown id="dropdown" data={dropdownData} inlineLabel="Dropdown" bind:value={$selected} placeholder={null} />
{#each Object.keys($selectedData) as field}
<p>{field}: {$selectedData[field]}</p>
{/each}
 </undefined>`}}}),O(),v()}D.__docgen={data:[],name:"DynamicInfoStores.stories.svelte"};const N=W(D,F),oe=["Default"],re={...N.Default,tags:["svelte-csf-v5"]};export{re as Default,oe as __namedExportsOrder,F as default};
