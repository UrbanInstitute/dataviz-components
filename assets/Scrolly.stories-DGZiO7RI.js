import{p as _,n as b,i as o,k as r,d as x,V as w,f as k,s as d,c as i,t as $,e as p,b as P}from"./iframe-BjxEKEQH.js";import{c as C,d as j}from"./create-runtime-stories-HPq0r60h.js";import{i as M}from"./lifecycle-hO6jUP98.js";import{S as v,u as A}from"./Scrolly-dlw8WA2s.js";const O=(s,e=b)=>{v(s,w(e,{background:y=>{var n=q();const a=r(A),f=r(()=>{var t;return((t=e().slides)==null?void 0:t.length)??0});var c=d(i(n),2),m=i(c),h=d(c,2),S=i(h);$(t=>{p(m,`Slide ${o(a).index+1} of ${o(f)??""}`),p(S,`Progress: ${t??""}%`)},[()=>Math.round(o(a).progress*100)],r),P(y,n)},$$slots:{background:!0}}))},g={title:"Components/Scrolly",component:v,argTypes:{slides:{control:"array"},foregroundWidth:{options:["body","wide","full"],control:{type:"select"}},textLayout:{options:["center","left","right"],control:{type:"select"}},textAlign:{options:["center","left","right"],control:{type:"select"}}},parameters:{githubLink:{url:"/Scrolly/Scrolly.svelte"}}},{Story:L}=j(),T=["Slide 1","Slide 2","Slide 3"];var q=k('<div style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; justify-content: center;"><div>Scrolly background</div> <div> </div> <div> </div></div>');function u(s,e){_(e,!1),M();const l=r(()=>({slides:T}));L(s,{name:"Primary",get args(){return o(l)},get template(){return O},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<Scrolly {...args}>
  {#snippet background()}
    {@const scrolly = useScrollyContext()}
    {@const totalSlides = args.slides?.length ?? 0}
    <div
      style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; justify-content: center;"
    >
      <div>Scrolly background</div>
      <div>
        Slide {scrolly.index + 1} of {totalSlides}
      </div>
      <div>Progress: {Math.round(scrolly.progress * 100)}%</div>
    </div>
  {/snippet}
</Scrolly>`}}}),x()}u.__docgen={data:[],name:"Scrolly.stories.svelte"};const z=C(u,g),E=["Primary"],I={...z.Primary,tags:["svelte-csf-v5"]},D=Object.freeze(Object.defineProperty({__proto__:null,Primary:I,__namedExportsOrder:E,default:g},Symbol.toStringTag,{value:"Module"}));export{I as $,D as S};
