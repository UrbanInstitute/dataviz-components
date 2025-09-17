import{p as G,f as u,a as v,c as i,s as a,t as V,b as l,d as M,e as h,g as S,h as w}from"./iframe-DkBoYltS.js";import{i as E}from"./lifecycle-BcE5ET0k.js";import{c as A,d as U}from"./create-runtime-stories-CMVs6-vI.js";import"./BasicDropdown-C4qY06AW.js";import"./Block-DDCuwNNX.js";import"./DatawrapperIframe-j9h6--Rf.js";import"./HeadingAlt-yPPjNZ1T.js";import"./IconPlus-D5jAYbOs.js";import"./IconMinus-D2_Mesga.js";import"./IconClose-DVh-_UoF.js";import"./IconSearch-BF2P-8EM.js";import"./LogoTPCBadge-CTgAo-DU.js";import"./LogoUrbanBadge-2x3ndcVL.js";import"./LogoUrbanAnimated-zsDlVVib.js";import"./LogoUrban-DQUC9AJn.js";import"./LogoUrbanWide-BF1RHM2R.js";import"./Navbar-C2oMfON0.js";import"./ProjectCredits-DD5j8WIK.js";import"./ReturnTop-BzW5q2oN.js";import"./Scorecard-CjW48g5M.js";import"./SocialShare-BuQ_KOUn.js";import"./TextBlock-B0Xj6d3S.js";import"./Button-o7alI6Gb.js";import{C as z}from"./ChartBlock-CrdVgAIf.js";import"./Meta-BDAtdrSo.js";import"./Toggle-mHn1DHbT.js";import"./Scrolly-BR5g82LY.js";import"./Analytics-jYwRi8KP.js";import"./Headline-Ckcnp2V7.js";import"./PymChild-Cd4IeW84.js";import"./LoadingWrapper-EC7LODCS.js";import"./Tooltip-BEQr2ua9.js";import"./AxisY-DP4Eb0KM.js";import"./AxisX-BCAx4hf5.js";import{S as W}from"./lib-Df5Wr_Yk.js";import{S as B}from"./SVGPolygonLayer-C0uDQojp.js";import{S as Q}from"./SVGPointLayer-BjsY4LgB.js";import{S as R}from"./SVGLabelLayer-B7jzCpk9.js";import{C as j}from"./ColorLegend-DrAr_6i9.js";import"./Tilemap-aAAzoYIW.js";import{c as F,u as I}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./each-BeOUnWnH.js";import"./attributes-DhG7CSOU.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-DTsII0sD.js";import"./html-CdB9IZZU.js";import"./this-KQSS7Fg9.js";import"./svelte-head-B3BBJNu2.js";import"./window-BgJEi96I.js";import"./size-Ve3rr0Gf.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=U();var H=u("<!> <!> <!>",1),J=u('<div slot="tooltip"><h5> </h5> <p>Air quality index: <strong> </strong></p></div>'),K=u('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function C(x,b){G(b,!1);const d=topojson.feature(F,"county_air_quality"),_=topojson.feature(I,"us_cities");let f=N().domain(d.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(x,{name:"Primary",children:(s,X)=>{z(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(k,Y)=>{var c=K(),y=v(c),q=i(y);j(q,{get scale(){return f},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=a(y,2);W(L,{zoomable:!0,get features(){return d.features},aspectRatio:4/2.5,tooltipContainParent:!0,children:(p,g)=>{var t=H(),r=v(t);B(r,{fill:o=>f(o.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var e=a(r,2);Q(e,{get features(){return _.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var m=a(e,2);R(m,{get features(){return _.features},getLabel:o=>o.properties.name,fontSize:13,pointerEvents:!1}),l(p,t)},$$slots:{default:!0,tooltip:(p,g)=>{var t=J();const r=w(()=>g.props);var e=i(t),m=i(e),o=a(e,2),$=a(i(o)),P=i($);V(()=>{h(m,`${S(r).NAME??""} county`),h(P,S(r).index_air_quality)}),l(p,t)}}}),l(k,c)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
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
