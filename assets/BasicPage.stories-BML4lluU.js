import{f as u,b as t,p as N,a as P,s as a,T as l,d as B}from"./iframe-Dqyympk2.js";import{i as $}from"./lifecycle-C4HJYyFW.js";import{c as k,d as I}from"./create-runtime-stories-Dd1Bukbj.js";import"./BasicDropdown-KCfn5aYK.js";import"./Block-BSHrHO9L.js";import{D as T}from"./DatawrapperIframe-Cp16-0GF.js";import"./HeadingAlt-CWjHUSRH.js";import"./IconPlus-CdOQk2tY.js";import"./IconMinus-CHWhkMbC.js";import"./IconClose-D3HuK-zu.js";import"./IconSearch-DAhXzHAo.js";import"./LogoTPCBadge-BEn6xp8r.js";import"./LogoUrbanBadge-ByposCRZ.js";import"./LogoUrbanAnimated-DJIoQOhm.js";import"./LogoUrban-BKIY5GAx.js";import"./LogoUrbanWide-BGaLAgyU.js";import{N as _}from"./Navbar-Bns10E6o.js";import{P as y}from"./ProjectCredits-DyxX0il0.js";import"./ReturnTop-B4go5R6U.js";import"./Scorecard-J6ieElTI.js";import"./SocialShare-CoFjccqK.js";import{T as r}from"./TextBlock-Drhrl7Sp.js";import"./Button-CeX9r_33.js";import{C as w}from"./ChartBlock-tkrA_yAf.js";import"./Meta-DtYZnlzw.js";import"./Toggle-DM3q5n77.js";import"./Scrolly-8Ssl0yrj.js";import"./Analytics-C8k4NmYj.js";import{H as D}from"./Headline-g970p-Kw.js";import"./PymChild-BAP2wV8r.js";import"./LoadingWrapper-CRJW0ZrU.js";import"./Tooltip-EWoO9MUJ.js";import"./AxisY-CvEwPR75.js";import"./AxisX-BwhAjkyc.js";import"./each-b5KgxJAA.js";import"./attributes-xMEigVYC.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-DdO7Bh0o.js";import"./urbanColors-BkxYcPwH.js";import"./html-ChHC6x19.js";import"./this-Cf322X-W.js";import"./svelte-head-Pi3_QH8V.js";import"./window-YB_lIYsg.js";var z=u("<div></div>");function g(n){var o=z();t(n,o)}g.__docgen={data:[],name:"BasicPage.svelte"};const A={title:"Examples/Stories/BasicPage",component:g},{Story:S}=I();var E=u("<h4>About the data</h4>"),U=u("<em>Example credits data text.</em>"),j=u('<!> <div style="margin-bottom: var(--spacing-12);"></div> <!> <div style="margin-bottom: var(--spacing-12);"></div> <!> <!> <div style="margin-bottom: var(--spacing-8);"></div> <!> <!> <!>',1);function f(n,o){N(o,!1),$(),S(n,{name:"BasicPage",asChild:!0,source:`
<script>
  import { Theme, Navbar, ChartBlock, DatawrapperIframe, Headline, TextBlock, SocialShare, ProjectCredits } from "@urbaninstitute/dataviz-components";
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
  <TextBlock slot="intro"><em>Example credits data text.</em></TextBlock>
  </ProjectCredits>
</Theme>
`,children:(x,V)=>{var c=j(),m=P(c);_(m,{sticky:!0});var d=a(m,4);D(d,{headline:"Basic Page Example Headline",eyebrow:"Data tool",date:"January 1, 1968",shareUrl:"https://urban.org"});var p=a(d,4);r(p,{children:(e,s)=>{var i=l(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies sit amet ex eget
    accumsan. Morbi vel libero dolor. Phasellus ipsum leo, rhoncus sed ipsum quis, finibus porttitor
    sem. Vestibulum luctus turpis sed nibh porttitor, id malesuada ex fringilla. Sed ac nisl porta,
    congue lacus non, convallis metus. In a dolor efficitur, scelerisque felis vitae, vulputate
    libero. Mauris tristique purus lectus, ut convallis libero volutpat ac. In nec scelerisque
    ipsum. Sed luctus lacus nibh, nec rutrum erat faucibus consectetur. Nullam tempor condimentum
    leo et consequat. Ut finibus arcu ex, quis congue risus imperdiet vitae. Sed rhoncus, lectus
    vitae gravida faucibus, urna leo dictum neque, eu semper dolor dolor ut leo. Donec id malesuada
    nisi. Aliquam lobortis egestas sollicitudin. Nullam ut tempus nisl.`);t(e,i)},$$slots:{default:!0}});var b=a(p,2);w(b,{title:"Medical Debt in Colorado Is Concentrated in Immigrant-Dense Communities",source:"February 2022 Urban Institute credit bureau data and the 2018–22 American Community Survey.",notes:"Each bubble represents a zip code in Colorado. The percentage with medical debt in collections is the share of adults in the zip code with medical debt in collections in their credit file. Percentage not citizen is the share of the population in the zip code who are not American citizens. Immigrant-dense communities are zip codes where noncitizens make up more than 15 percent of the population. The straight black line is a linear best fit. The size of the bubble is proportional to the number of consumers with a credit report in our credit bureau data. We only report statistics for zip codes with more than 50 consumers.",children:(e,s)=>{T(e,{datawrapperId:"xff5j"})},$$slots:{default:!0}});var h=a(b,4);r(h,{children:(e,s)=>{var i=l(`Vestibulum quis eros ipsum. In finibus risus nec felis tincidunt placerat. Fusce eu egestas
    tortor, ac porttitor tortor. Vestibulum vestibulum, diam vitae cursus ullamcorper, enim risus
    luctus purus, id porttitor ex quam imperdiet arcu. Nunc mollis, elit ut accumsan dictum, est
    enim facilisis eros, in malesuada quam augue vitae nibh. Duis sed mi ut nisi facilisis fringilla
    a eget purus. Nunc finibus velit augue, et convallis sapien ultricies sit amet.`);t(e,i)},$$slots:{default:!0}});var v=a(h,2);r(v,{children:(e,s)=>{var i=l(`Pellentesque hendrerit libero vitae mi sollicitudin cursus. Aenean congue ac sem in auctor.
    Donec vulputate quam quis lacus aliquet gravida. Phasellus fermentum bibendum est ac egestas.
    Cras fringilla, orci ac pellentesque lobortis, elit nisl dignissim nibh, id rhoncus mauris purus
    et mauris. Ut at tincidunt turpis. In sagittis ultricies tellus at congue. Nullam a dapibus
    nisl. Curabitur consectetur nisl maximus, sollicitudin lacus dapibus, vulputate purus. Nulla vel
    sagittis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Integer semper sapien libero, at pulvinar nibh gravida non. Etiam laoreet
    dignissim posuere. Nulla sed placerat ligula.`);t(e,i)},$$slots:{default:!0}});var q=a(v,2);y(q,{heading:"Credits",items:[{label:"Credits",content:"Name Name"},{label:"Credits",content:"Name Name"},{label:"Credits",content:"Name Name"}],children:(e,s)=>{var i=E();t(e,i)},$$slots:{default:!0,intro:(e,s)=>{r(e,{slot:"intro",children:(i,H)=>{var C=U();t(i,C)},$$slots:{default:!0}})}}}),t(x,c)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Navbar sticky={true} />
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
  <TextBlock slot="intro"><em>Example credits data text.</em></TextBlock>
</ProjectCredits>`}}}),B()}f.__docgen={data:[],name:"BasicPage.stories.svelte"};const M=k(f,A),ze=["BasicPage"],Ae={...M.BasicPage,tags:["svelte-csf-v5"]};export{Ae as BasicPage,ze as __namedExportsOrder,A as default};
