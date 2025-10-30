import{f as u,b as a,p as P,a as B,s,P as l,d as $}from"./iframe-BjxEKEQH.js";import{c as k,d as I}from"./create-runtime-stories-HPq0r60h.js";import{i as _}from"./lifecycle-hO6jUP98.js";import"./BasicDropdown-DBkXvpWy.js";import"./Block-S085LgKA.js";import{D as T}from"./DatawrapperIframe-DBrTT8wg.js";import"./HeadingAlt-BNBRxhWQ.js";import"./IconPlus-YnuXZYeX.js";import"./IconMinus-D_9s7pId.js";import"./IconClose-CEHIYMGE.js";import"./IconSearch-Ca3yJXEQ.js";import"./LogoTPCBadge-COm6_I7f.js";import"./LogoUrbanBadge-BvBpghVV.js";import"./LogoUrbanAnimated-DtAU-OWH.js";import"./LogoUrban-DTc3tii8.js";import"./LogoUrbanWide-BI_7HiH4.js";import{N as y}from"./Navbar-B9xI0hn-.js";import{P as w}from"./ProjectCredits-DQdZQmvn.js";import"./ReturnTop-T156Z9Q5.js";import"./Scorecard-D3J3Rqpq.js";import"./SocialShare-DWn1HI4c.js";import{T as r}from"./TextBlock-ByoZU-dy.js";import"./Button-DMhGQjzO.js";import{C as D}from"./ChartBlock-BzdRr3rw.js";import"./Meta-BtHKPa1P.js";import"./Toggle-Cdb9dgAr.js";import"./Scrolly-dlw8WA2s.js";import"./Analytics-kwMMLO-n.js";import{H as z}from"./Headline-Cb6guEuf.js";import"./PymChild-CO1HGkDt.js";import"./LoadingWrapper-DjGTokaM.js";import"./Tooltip-DQtD7qmK.js";import"./AxisY-C1gfo3-v.js";import"./AxisX-B5hCexcB.js";import"./each-DC_8OmU5.js";import"./attributes-UJeNkN1P.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./urbanColors-BkxYcPwH.js";import"./html-CDri68dQ.js";import"./this-DGLcOT4Q.js";import"./svelte-head-CaadU4Xw.js";import"./window-C-tkelu3.js";import"./slot-BP_Qo1ZM.js";var A=u("<div></div>");function f(n){var o=A();a(n,o)}f.__docgen={data:[],name:"BasicPage.svelte"};const E={title:"Examples/Stories/BasicPage",component:f},{Story:S}=I();var U=u("<em>Example credits data text.</em>"),j=u("<h4>About the data</h4>"),M=u('<!> <div style="margin-bottom: var(--spacing-12);"></div> <!> <div style="margin-bottom: var(--spacing-12);"></div> <!> <!> <div style="margin-bottom: var(--spacing-8);"></div> <!> <!> <!>',1);function x(n,o){P(o,!1),_(),S(n,{name:"BasicPage",asChild:!0,source:`
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
</ProjectCredits>`}}}),$()}x.__docgen={data:[],name:"BasicPage.stories.svelte"};const V=k(x,E),ze=["BasicPage"],Ae={...V.BasicPage,tags:["svelte-csf-v5"]};export{Ae as BasicPage,ze as __namedExportsOrder,E as default};
