import{f as u,d as a,p as P,b as B,s,i as l,a as $}from"./iframe-Dwb2GjWe.js";import{c as k,d as I}from"./create-runtime-stories-DVwOBNxa.js";import{i as _}from"./lifecycle-3B0MVNSh.js";import"./BasicDropdown-CFWVT9s3.js";import"./Block-D47UPx66.js";import{D as T}from"./DatawrapperIframe-DuJLO8KF.js";import"./HeadingAlt-qHX0v1h8.js";import"./IconPlus-BS2qGSwS.js";import"./IconMinus-DDNcG4RM.js";import"./IconClose-TLT1ITHP.js";import"./IconSearch-B9kLKKUq.js";import"./LogoTPCBadge-D5GIloNN.js";import"./LogoUrbanBadge-CMnPMwR8.js";import"./LogoUrbanAnimated-De8HvDXh.js";import"./LogoUrban-6uBA74eg.js";import"./LogoUrbanWide-wdW0x3Cm.js";import{N as y}from"./Navbar-DrH-cK34.js";import{P as w}from"./ProjectCredits-BNoTwCDN.js";import"./ReturnTop-CMA7O9_w.js";import"./Scorecard-CG2ZyHTp.js";import"./SocialShare-f0VqwH-I.js";import{T as r}from"./TextBlock-Erw45Wfx.js";import"./Button-DZfwZS_7.js";import{C as D}from"./ChartBlock-5WHioeBb.js";import"./Meta-DcX768Kr.js";import"./Toggle-DYeTfDLZ.js";import"./Scrolly-BAnKSuBk.js";import"./Analytics-BFmLC7xD.js";import{H as z}from"./Headline-DxH2Kdwp.js";import"./PymChild-BDDRnQYV.js";import"./LoadingWrapper-BjxfNT8W.js";import"./Tooltip-DPQpIiZF.js";import"./AxisY-BIeNEQrM.js";import"./AxisX-SOaZtpr5.js";import"./preload-helper-Dp1pzeXC.js";import"./each-VWhaf5kD.js";import"./attributes-6Paf-c-d.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./urbanColors-S0C424vw.js";import"./html-f01H_i9H.js";import"./this-PCuW4UVg.js";import"./svelte-head-ZLdo1g6q.js";import"./window-DlWNvtVu.js";import"./slot-BP_Qo1ZM.js";var A=u("<div></div>");function f(n){var o=A();a(n,o)}f.__docgen={data:[],name:"BasicPage.svelte"};const E={title:"Examples/Stories/BasicPage",component:f},{Story:S}=I();var U=u("<em>Example credits data text.</em>"),j=u("<h4>About the data</h4>"),M=u('<!> <div style="margin-bottom: var(--spacing-12);"></div> <!> <div style="margin-bottom: var(--spacing-12);"></div> <!> <!> <div style="margin-bottom: var(--spacing-8);"></div> <!> <!> <!>',1);function x(n,o){P(o,!1),_(),S(n,{name:"BasicPage",asChild:!0,source:`
<script>
  import { Theme, Navbar, ChartBlock, DatawrapperIframe, Headline, TextBlock, ProjectCredits } from "@urbaninstitute/dataviz-components";
<\/script>
<Theme>
  <Navbar sticky={true}/>
  <Headline headline="Basic Page Example Headline" shareUrl="https://urban.org" eyebrow="Data tool" date="January 1, 1968"/>
  <div style="margin-bottom: var(--spacing-12);"></div>
  <TextBlock>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies sit amet ex eget accumsan. Morbi vel libero dolor. Phasellus ipsum leo, rhoncus sed ipsum quis, finibus porttitor sem. Vestibulum luctus turpis sed nibh porttitor, id malesuada ex fringilla. Sed ac nisl porta, congue lacus non, convallis metus. In a dolor efficitur, scelerisque felis vitae, vulputate libero. Mauris tristique purus lectus, ut convallis libero volutpat ac. In nec scelerisque ipsum. Sed luctus lacus nibh, nec rutrum erat faucibus consectetur. Nullam tempor condimentum leo et consequat. Ut finibus arcu ex, quis congue risus imperdiet vitae. Sed rhoncus, lectus vitae gravida faucibus, urna leo dictum neque, eu semper dolor dolor ut leo. Donec id malesuada nisi. Aliquam lobortis egestas sollicitudin. Nullam ut tempus nisl.
  </TextBlock>
  <ChartBlock title="Example Chart" source="Chart source example" notes="Chart notes example">
    <DatawrapperIframe datawrapperId="xff5j" />
  </ChartBlock>
  <div style="margin-bottom: var(--spacing-8);"></div>
  <TextBlock>
  Vestibulum quis eros ipsum. In finibus risus nec felis tincidunt placerat. Fusce eu egestas tortor, ac porttitor tortor. Vestibulum vestibulum, diam vitae cursus ullamcorper, enim risus luctus purus, id porttitor ex quam imperdiet arcu. Nunc mollis, elit ut accumsan dictum, est enim facilisis eros, in malesuada quam augue vitae nibh. Duis sed mi ut nisi facilisis fringilla a eget purus. Nunc finibus velit augue, et convallis sapien ultricies sit amet.
  </TextBlock>
  <TextBlock>
  Pellentesque hendrerit libero vitae mi sollicitudin cursus. Aenean congue ac sem in auctor. Donec vulputate quam quis lacus aliquet gravida. Phasellus fermentum bibendum est ac egestas. Cras fringilla, orci ac pellentesque lobortis, elit nisl dignissim nibh, id rhoncus mauris purus et mauris. Ut at tincidunt turpis. In sagittis ultricies tellus at congue. Nullam a dapibus nisl. Curabitur consectetur nisl maximus, sollicitudin lacus dapibus, vulputate purus. Nulla vel sagittis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer semper sapien libero, at pulvinar nibh gravida non. Etiam laoreet dignissim posuere. Nulla sed placerat ligula. 
  </TextBlock>
  <ProjectCredits heading="Credits" items={[{label: "Credits", content: "Name Name"}, {label: "Credits", content: "Name Name"}, {label: "Credits", content: "Name Name"}]}>
  <h4>About the data</h4>
  {#snippet intro()}
    <TextBlock><em>Example credits data text.</em></TextBlock>
  {/snippet}
  </ProjectCredits>
</Theme>
`,children:(q,H)=>{var c=M(),m=B(c);y(m,{sticky:!0});var d=s(m,4);z(d,{headline:"Basic Page Example Headline",eyebrow:"Data tool",date:"January 1, 1968",shareUrl:"https://urban.org"});var p=s(d,4);r(p,{children:(e,t)=>{var i=l(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies sit amet ex eget
    accumsan. Morbi vel libero dolor. Phasellus ipsum leo, rhoncus sed ipsum quis, finibus porttitor
    sem. Vestibulum luctus turpis sed nibh porttitor, id malesuada ex fringilla. Sed ac nisl porta,
    congue lacus non, convallis metus. In a dolor efficitur, scelerisque felis vitae, vulputate
    libero. Mauris tristique purus lectus, ut convallis libero volutpat ac. In nec scelerisque
    ipsum. Sed luctus lacus nibh, nec rutrum erat faucibus consectetur. Nullam tempor condimentum
    leo et consequat. Ut finibus arcu ex, quis congue risus imperdiet vitae. Sed rhoncus, lectus
    vitae gravida faucibus, urna leo dictum neque, eu semper dolor dolor ut leo. Donec id malesuada
    nisi. Aliquam lobortis egestas sollicitudin. Nullam ut tempus nisl.`);a(e,i)},$$slots:{default:!0}});var b=s(p,2);D(b,{title:"Medical Debt in Colorado Is Concentrated in Immigrant-Dense Communities",source:"February 2022 Urban Institute credit bureau data and the 2018–22 American Community Survey.",notes:"Each bubble represents a zip code in Colorado. The percentage with medical debt in collections is the share of adults in the zip code with medical debt in collections in their credit file. Percentage not citizen is the share of the population in the zip code who are not American citizens. Immigrant-dense communities are zip codes where noncitizens make up more than 15 percent of the population. The straight black line is a linear best fit. The size of the bubble is proportional to the number of consumers with a credit report in our credit bureau data. We only report statistics for zip codes with more than 50 consumers.",children:(e,t)=>{T(e,{datawrapperId:"xff5j"})},$$slots:{default:!0}});var h=s(b,4);r(h,{children:(e,t)=>{var i=l(`Vestibulum quis eros ipsum. In finibus risus nec felis tincidunt placerat. Fusce eu egestas
    tortor, ac porttitor tortor. Vestibulum vestibulum, diam vitae cursus ullamcorper, enim risus
    luctus purus, id porttitor ex quam imperdiet arcu. Nunc mollis, elit ut accumsan dictum, est
    enim facilisis eros, in malesuada quam augue vitae nibh. Duis sed mi ut nisi facilisis fringilla
    a eget purus. Nunc finibus velit augue, et convallis sapien ultricies sit amet.`);a(e,i)},$$slots:{default:!0}});var v=s(h,2);r(v,{children:(e,t)=>{var i=l(`Pellentesque hendrerit libero vitae mi sollicitudin cursus. Aenean congue ac sem in auctor.
    Donec vulputate quam quis lacus aliquet gravida. Phasellus fermentum bibendum est ac egestas.
    Cras fringilla, orci ac pellentesque lobortis, elit nisl dignissim nibh, id rhoncus mauris purus
    et mauris. Ut at tincidunt turpis. In sagittis ultricies tellus at congue. Nullam a dapibus
    nisl. Curabitur consectetur nisl maximus, sollicitudin lacus dapibus, vulputate purus. Nulla vel
    sagittis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Integer semper sapien libero, at pulvinar nibh gravida non. Etiam laoreet
    dignissim posuere. Nulla sed placerat ligula.`);a(e,i)},$$slots:{default:!0}});var C=s(v,2);w(C,{heading:"Credits",items:[{label:"Credits",content:"Name Name"},{label:"Credits",content:"Name Name"},{label:"Credits",content:"Name Name"}],intro:t=>{r(t,{children:(i,g)=>{var N=U();a(i,N)},$$slots:{default:!0}})},children:(t,i)=>{var g=j();a(t,g)},$$slots:{intro:!0,default:!0}}),a(q,c)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Navbar sticky={true} />
<div style="margin-bottom: var(--spacing-12);"></div>
<Headline
  headline="Basic Page Example Headline"
  eyebrow="Data tool"
  date="January 1, 1968"
  shareUrl="https://urban.org"
/>
<div style="margin-bottom: var(--spacing-12);"></div>
<TextBlock>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies sit amet ex eget
  accumsan. Morbi vel libero dolor. Phasellus ipsum leo, rhoncus sed ipsum quis, finibus porttitor
  sem. Vestibulum luctus turpis sed nibh porttitor, id malesuada ex fringilla. Sed ac nisl porta,
  congue lacus non, convallis metus. In a dolor efficitur, scelerisque felis vitae, vulputate
  libero. Mauris tristique purus lectus, ut convallis libero volutpat ac. In nec scelerisque
  ipsum. Sed luctus lacus nibh, nec rutrum erat faucibus consectetur. Nullam tempor condimentum
  leo et consequat. Ut finibus arcu ex, quis congue risus imperdiet vitae. Sed rhoncus, lectus
  vitae gravida faucibus, urna leo dictum neque, eu semper dolor dolor ut leo. Donec id malesuada
  nisi. Aliquam lobortis egestas sollicitudin. Nullam ut tempus nisl.
</TextBlock>
<ChartBlock
  title="Medical Debt in Colorado Is Concentrated in Immigrant-Dense Communities"
  source="February 2022 Urban Institute credit bureau data and the 2018–22 American Community Survey."
  notes="Each bubble represents a zip code in Colorado. The percentage with medical debt in collections is the share of adults in the zip code with medical debt in collections in their credit file. Percentage not citizen is the share of the population in the zip code who are not American citizens. Immigrant-dense communities are zip codes where noncitizens make up more than 15 percent of the population. The straight black line is a linear best fit. The size of the bubble is proportional to the number of consumers with a credit report in our credit bureau data. We only report statistics for zip codes with more than 50 consumers."
>
  <DatawrapperIframe datawrapperId="xff5j" />
</ChartBlock>
<div style="margin-bottom: var(--spacing-8);"></div>
<TextBlock>
  Vestibulum quis eros ipsum. In finibus risus nec felis tincidunt placerat. Fusce eu egestas
  tortor, ac porttitor tortor. Vestibulum vestibulum, diam vitae cursus ullamcorper, enim risus
  luctus purus, id porttitor ex quam imperdiet arcu. Nunc mollis, elit ut accumsan dictum, est
  enim facilisis eros, in malesuada quam augue vitae nibh. Duis sed mi ut nisi facilisis fringilla
  a eget purus. Nunc finibus velit augue, et convallis sapien ultricies sit amet.
</TextBlock>
<TextBlock>
  Pellentesque hendrerit libero vitae mi sollicitudin cursus. Aenean congue ac sem in auctor.
  Donec vulputate quam quis lacus aliquet gravida. Phasellus fermentum bibendum est ac egestas.
  Cras fringilla, orci ac pellentesque lobortis, elit nisl dignissim nibh, id rhoncus mauris purus
  et mauris. Ut at tincidunt turpis. In sagittis ultricies tellus at congue. Nullam a dapibus
  nisl. Curabitur consectetur nisl maximus, sollicitudin lacus dapibus, vulputate purus. Nulla vel
  sagittis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus. Integer semper sapien libero, at pulvinar nibh gravida non. Etiam laoreet
  dignissim posuere. Nulla sed placerat ligula.
</TextBlock>
<ProjectCredits
  heading="Credits"
  items={[
    { label: "Credits", content: "Name Name" },
    { label: "Credits", content: "Name Name" },
    { label: "Credits", content: "Name Name" }
  ]}
>
  <h4>About the data</h4>
  {#snippet intro()}
    <TextBlock><em>Example credits data text.</em></TextBlock>
  {/snippet}
</ProjectCredits>`}}}),$()}x.__docgen={data:[],name:"BasicPage.stories.svelte"};const V=k(x,E),Ae=["BasicPage"],Ee={...V.BasicPage,tags:["svelte-csf-v5"]};export{Ee as BasicPage,Ae as __namedExportsOrder,E as default};
