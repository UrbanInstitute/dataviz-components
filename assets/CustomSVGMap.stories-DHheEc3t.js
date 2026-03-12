import{p as P,f as _,b as u,c as a,s as o,n as M,d,t as w,a as G,e as v}from"./iframe-BSNeHIWM.js";import{c as V,d as A}from"./create-runtime-stories-Dud3s7q5.js";import{i as E}from"./lifecycle-DxG7lrqh.js";import"./BasicDropdown-D3AFGzP-.js";import"./Block-Cb1GzloE.js";import"./DatawrapperIframe-Dkn3PU7M.js";import"./HeadingAlt-DMDAIde5.js";import"./IconPlus-BOtTePwb.js";import"./IconMinus-DKJDtoNP.js";import"./IconClose-CINaJkm1.js";import"./IconSearch-D8ywVg_f.js";import"./LogoTPCBadge-CGxeyPTu.js";import"./LogoUrbanBadge-D1w-fpf7.js";import"./LogoUrbanAnimated-1kxOMPw2.js";import"./LogoUrban-D2npQMbq.js";import"./LogoUrbanWide-CxEEjUFx.js";import"./Navbar-md4f1Axe.js";import"./ProjectCredits-Bkj-NYtG.js";import"./ReturnTop-D_SFIVZj.js";import"./Scorecard-j5q54Vhs.js";import"./SocialShare-gwnGFumW.js";import"./TextBlock-THguvSAD.js";import"./Button-hq-i-rL6.js";import{C as U}from"./ChartBlock-6d-tDiFs.js";import"./Meta-C3qJdcqh.js";import"./Toggle-BRQy71gd.js";import"./Scrolly-DsFPtwIQ.js";import"./Analytics-B3lBKIHX.js";import"./Headline-BxVNLm1K.js";import"./PymChild-D1rwYEKr.js";import"./LoadingWrapper-D8MBkUX2.js";import"./Tooltip-BshIKBGA.js";import"./AxisY-Cpoz7B5y.js";import"./AxisX-ODBUd79b.js";import{c as z,S as W}from"./lib-Ct516mMl.js";import{S as B}from"./SVGPolygonLayer-hky75AXY.js";import{S as I}from"./SVGPointLayer-BzS3UYjM.js";import{S as Q}from"./SVGLabelLayer-DKGIAqpI.js";import{C as R}from"./ColorLegend-DotlPTWP.js";import"./Tilemap-B7j1rzG_.js";import{c as j,u as F}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./preload-helper-Dp1pzeXC.js";import"./each-BPfT6BHD.js";import"./attributes-C2_-M8W4.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./html-BZxi3yaE.js";import"./this-DSe5mVJo.js";import"./svelte-head-CUB0ahRU.js";import"./window-CIc_mUa8.js";import"./slot-BP_Qo1ZM.js";import"./size-DVi4Qlxa.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=A();var H=_("<h5> </h5> <p>Air quality index: <strong> </strong></p>",1),J=_("<!> <!> <!>",1),K=_('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function S(C,x){P(x,!1),z();const f=topojson.feature(j,"county_air_quality"),c=topojson.feature(F,"us_cities");let y=N().domain(f.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(C,{name:"Primary",asChild:!0,children:(s,X)=>{U(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(b,Y)=>{var g=K(),h=u(g),k=a(h);R(k,{get scale(){return y},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=o(h,2);{const $=(p,m=M)=>{var t=H(),r=u(t),i=a(r),l=o(r,2),e=o(a(l)),q=a(e);w(()=>{v(i,`${m().NAME??""} county`),v(q,m().index_air_quality)}),d(p,t)};W(L,{zoomable:!0,get features(){return f.features},aspectRatio:4/2.5,tooltipContainParent:!0,tooltip:$,children:(p,m)=>{var t=J(),r=u(t);B(r,{fill:e=>y(e.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var i=o(r,2);I(i,{get features(){return c.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var l=o(i,2);Q(l,{get features(){return c.features},getLabel:e=>e.properties.name,fontSize:13,pointerEvents:!1}),d(p,t)},$$slots:{tooltip:!0,default:!0}})}d(b,g)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<ChartBlock
  title="Air quality index by U.S. county"
  source="Urban Institute Upward Mobility Framework"
>
  <div style="max-width: 300px; margin: 1em auto 0;">
    <ColorLegend scale={airQualityScale} height={10} tickLineColor={"white"} tickLineWidth="2" />
  </div>
  <SVGMap
    zoomable
    features={county_air_quality.features}
    aspectRatio={4 / 2.5}
    tooltipContainParent={true}
  >
    <SVGPolygonLayer
      fill={(d) => airQualityScale(d.properties.index_air_quality)}
      hoverStroke={urbanColors.magenta}
      hoverStrokeWidth={2}
      tooltip
      stroke={urbanColors.gray_shade_dark}
    />
    <SVGPointLayer
      features={us_cities_geo.features}
      pointerEvents={false}
      fill={urbanColors.gray_shade_lighter}
    />
    <SVGLabelLayer
      features={us_cities_geo.features}
      getLabel={(d) => d.properties.name}
      fontSize={13}
      pointerEvents={false}
    />
    {#snippet tooltip(props)}
      <h5>{props.NAME} county</h5>
      <p>Air quality index: <strong>{props.index_air_quality}</strong></p>
    {/snippet}
  </SVGMap>
</ChartBlock>`}}}),G()}S.__docgen={data:[],name:"CustomSVGMap.stories.svelte"};const T=V(S,D),ar=["Primary"],nr={...T.Primary,tags:["svelte-csf-v5"]};export{nr as Primary,ar as __namedExportsOrder,D as default};
