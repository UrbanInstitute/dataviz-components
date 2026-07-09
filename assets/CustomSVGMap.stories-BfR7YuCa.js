import{p as P,f as _,b as u,c as a,s as o,n as M,d,t as w,a as G,e as v}from"./iframe-Dwb2GjWe.js";import{c as V,d as A}from"./create-runtime-stories-DVwOBNxa.js";import{i as E}from"./lifecycle-3B0MVNSh.js";import"./BasicDropdown-CFWVT9s3.js";import"./Block-D47UPx66.js";import"./DatawrapperIframe-DuJLO8KF.js";import"./HeadingAlt-qHX0v1h8.js";import"./IconPlus-BS2qGSwS.js";import"./IconMinus-DDNcG4RM.js";import"./IconClose-TLT1ITHP.js";import"./IconSearch-B9kLKKUq.js";import"./LogoTPCBadge-D5GIloNN.js";import"./LogoUrbanBadge-CMnPMwR8.js";import"./LogoUrbanAnimated-De8HvDXh.js";import"./LogoUrban-6uBA74eg.js";import"./LogoUrbanWide-wdW0x3Cm.js";import"./Navbar-DrH-cK34.js";import"./ProjectCredits-BNoTwCDN.js";import"./ReturnTop-CMA7O9_w.js";import"./Scorecard-CG2ZyHTp.js";import"./SocialShare-f0VqwH-I.js";import"./TextBlock-Erw45Wfx.js";import"./Button-DZfwZS_7.js";import{C as U}from"./ChartBlock-5WHioeBb.js";import"./Meta-DcX768Kr.js";import"./Toggle-DYeTfDLZ.js";import"./Scrolly-BAnKSuBk.js";import"./Analytics-BFmLC7xD.js";import"./Headline-DxH2Kdwp.js";import"./PymChild-BDDRnQYV.js";import"./LoadingWrapper-BjxfNT8W.js";import"./Tooltip-DPQpIiZF.js";import"./AxisY-BIeNEQrM.js";import"./AxisX-SOaZtpr5.js";import{c as z,S as W}from"./lib-DVBLuGZ2.js";import{S as B}from"./SVGPolygonLayer-CLtnGEKn.js";import{S as I}from"./SVGPointLayer-DmyCqDRx.js";import{S as Q}from"./SVGLabelLayer-BN4PjgZA.js";import{C as R}from"./ColorLegend-DxiJRrMp.js";import"./Tilemap-D00dFHgu.js";import{c as j,u as F}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-S0C424vw.js";import{q as N}from"./quantile-Bh9554at.js";import"./preload-helper-Dp1pzeXC.js";import"./each-VWhaf5kD.js";import"./attributes-6Paf-c-d.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./html-f01H_i9H.js";import"./this-PCuW4UVg.js";import"./svelte-head-ZLdo1g6q.js";import"./window-DlWNvtVu.js";import"./slot-BP_Qo1ZM.js";import"./size-B3ABQTmx.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=A();var H=_("<h5> </h5> <p>Air quality index: <strong> </strong></p>",1),J=_("<!> <!> <!>",1),K=_('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function S(C,x){P(x,!1),z();const f=topojson.feature(j,"county_air_quality"),c=topojson.feature(F,"us_cities");let y=N().domain(f.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(C,{name:"Primary",asChild:!0,children:(s,X)=>{U(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(b,Y)=>{var g=K(),h=u(g),k=a(h);R(k,{get scale(){return y},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=o(h,2);{const $=(p,m=M)=>{var t=H(),r=u(t),i=a(r),l=o(r,2),e=o(a(l)),q=a(e);w(()=>{v(i,`${m().NAME??""} county`),v(q,m().index_air_quality)}),d(p,t)};W(L,{zoomable:!0,get features(){return f.features},aspectRatio:4/2.5,tooltipContainParent:!0,tooltip:$,children:(p,m)=>{var t=J(),r=u(t);B(r,{fill:e=>y(e.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var i=o(r,2);I(i,{get features(){return c.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var l=o(i,2);Q(l,{get features(){return c.features},getLabel:e=>e.properties.name,fontSize:13,pointerEvents:!1}),d(p,t)},$$slots:{tooltip:!0,default:!0}})}d(b,g)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<ChartBlock
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
