import{p as G,f as u,a as v,c as i,s as a,t as V,b as l,d as M,e as h,g as S,h as w}from"./iframe-Bc23XYIh.js";import{i as E}from"./lifecycle-BvYk3ZZi.js";import{c as A,d as U}from"./create-runtime-stories-DZzrqf4P.js";import"./BasicDropdown-BgkKq8Kt.js";import"./Block-JqUM8jDW.js";import"./DatawrapperIframe-ZoEbBxqL.js";import"./HeadingAlt-B260iPKW.js";import"./IconPlus-jybn67Or.js";import"./IconMinus-B-TwGzPd.js";import"./IconClose-DkF-Y6n0.js";import"./IconSearch-CDgvIMyo.js";import"./LogoTPCBadge-BJ8dny9R.js";import"./LogoUrbanBadge-D1jlwPVH.js";import"./LogoUrbanAnimated-CDL3zKW8.js";import"./LogoUrban-Bqh9mA3G.js";import"./LogoUrbanWide-BbvKhpga.js";import"./Navbar-DQ4hlGXP.js";import"./ProjectCredits-DGAPcPku.js";import"./ReturnTop-2JM--Ido.js";import"./Scorecard-Cfkxka4A.js";import"./SocialShare-C0A9GCXd.js";import"./TextBlock-B6Enknb-.js";import"./Button-BQQOPGYe.js";import{C as z}from"./ChartBlock-CwNnU1EB.js";import"./Meta-BaEDUEaD.js";import"./Toggle-oFO_p8_E.js";import"./Scrolly-Bp65kZiM.js";import"./Analytics-BJpqrrXV.js";import"./Headline-BH3gxB7H.js";import"./PymChild-CbVXHw2-.js";import"./LoadingWrapper-CXnhrKyX.js";import"./Tooltip-CccS1ffk.js";import"./AxisY-vwaRprKw.js";import"./AxisX-CksETu_T.js";import{S as W}from"./lib-mA1ZguQ8.js";import{S as B}from"./SVGPolygonLayer-gT17uqiG.js";import{S as Q}from"./SVGPointLayer-yXkLTRsR.js";import{S as R}from"./SVGLabelLayer-x8n6ZGzo.js";import{C as j}from"./ColorLegend-7qtolMPm.js";import"./Tilemap-NxTcc3wm.js";import{c as F,u as I}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./each-DS5tR5n2.js";import"./attributes-Cxy0te-K.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-BRFKecNi.js";import"./html-DU1KLMhD.js";import"./this-Us5rr2fM.js";import"./svelte-head-D-GpmO5A.js";import"./window-tHS_M_WQ.js";import"./size-G7kC_8ZN.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=U();var H=u("<!> <!> <!>",1),J=u('<div slot="tooltip"><h5> </h5> <p>Air quality index: <strong> </strong></p></div>'),K=u('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function C(x,b){G(b,!1);const d=topojson.feature(F,"county_air_quality"),_=topojson.feature(I,"us_cities");let f=N().domain(d.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(x,{name:"Primary",children:(s,X)=>{z(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(k,Y)=>{var c=K(),y=v(c),q=i(y);j(q,{get scale(){return f},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=a(y,2);W(L,{zoomable:!0,get features(){return d.features},aspectRatio:4/2.5,tooltipContainParent:!0,children:(p,g)=>{var t=H(),r=v(t);B(r,{fill:o=>f(o.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var e=a(r,2);Q(e,{get features(){return _.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var m=a(e,2);R(m,{get features(){return _.features},getLabel:o=>o.properties.name,fontSize:13,pointerEvents:!1}),l(p,t)},$$slots:{default:!0,tooltip:(p,g)=>{var t=J();const r=w(()=>g.props);var e=i(t),m=i(e),o=a(e,2),$=a(i(o)),P=i($);V(()=>{h(m,`${S(r).NAME??""} county`),h(P,S(r).index_air_quality)}),l(p,t)}}}),l(k,c)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
  <ChartBlock
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
  <div slot="tooltip" let:props>
    <h5>{props.NAME} county</h5>
    <p>Air quality index: <strong>{props.index_air_quality}</strong></p>
  </div>
</SVGMap>
</ChartBlock>
</undefined>`}}}),M()}C.__docgen={data:[],name:"CustomSVGMap.stories.svelte"};const T=A(C,D),ir=["Primary"],ar={...T.Primary,tags:["svelte-csf-v5"]};export{ar as Primary,ir as __namedExportsOrder,D as default};
