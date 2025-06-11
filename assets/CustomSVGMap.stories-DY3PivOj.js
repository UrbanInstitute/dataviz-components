import{p as G,f as u,a as v,c as i,s as a,t as V,b as l,d as M,e as h,g as S,h as w}from"./iframe-Dh-CAoci.js";import{i as E}from"./lifecycle-rtcBtEMy.js";import{c as A,d as U}from"./create-runtime-stories-Ee3127Pv.js";import"./BasicDropdown-ki4VQxIZ.js";import"./Block-lzT8NwNI.js";import"./DatawrapperIframe-CmAOYjiY.js";import"./HeadingAlt-CW4-JlWS.js";import"./IconPlus-BiBUDJOi.js";import"./IconMinus-DvvkJcpW.js";import"./IconClose-Bg2oiCTx.js";import"./IconSearch-BHjXSpzq.js";import"./LogoTPCBadge-CwvgPEYg.js";import"./LogoUrbanBadge-CZBqoxP6.js";import"./LogoUrbanAnimated-CbxzZTeG.js";import"./LogoUrban-tuQMJXFl.js";import"./LogoUrbanWide-zARIolsI.js";import"./Navbar-ByFt8iDr.js";import"./ProjectCredits-5z9UXoRM.js";import"./ReturnTop-cVqUZkLY.js";import"./Scorecard-B5Jwm-8Z.js";import"./SocialShare-BoNZAPhf.js";import"./TextBlock-DrHbokY9.js";import"./Button-DVUjT6MI.js";import{C as z}from"./ChartBlock-BtN3OLhX.js";import"./Meta-Cedr9NXa.js";import"./Toggle-E9JZk-ib.js";import"./Scrolly-DW0Aa5uP.js";import"./Analytics-CAoKpTYU.js";import"./Headline-lDCJ29Zu.js";import"./PymChild-BJyR1PNo.js";import"./LoadingWrapper-BT9kf3mz.js";import"./Tooltip-h56YdRoj.js";import"./AxisY-XdvqyoI3.js";import"./AxisX-DkdXdmmH.js";import{S as W}from"./lib-BQYz-Dhu.js";import{S as B}from"./SVGPolygonLayer-C2dc7YDV.js";import{S as Q}from"./SVGPointLayer-D2KigM0v.js";import{S as R}from"./SVGLabelLayer-B2CweUnf.js";import{C as j}from"./ColorLegend-CXLyaeCK.js";import"./Tilemap-COnqW5TX.js";import{c as F,u as I}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./each-r1C57-iw.js";import"./attributes-B9-bxW-k.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-5u4RouTI.js";import"./html-DHBEMhJs.js";import"./this-DSh4Tpv3.js";import"./svelte-head-yQCJ0hxi.js";import"./window-CwiMeM73.js";import"./size-CQlcWDwJ.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=U();var H=u("<!> <!> <!>",1),J=u('<div slot="tooltip"><h5> </h5> <p>Air quality index: <strong> </strong></p></div>'),K=u('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function C(x,b){G(b,!1);const d=topojson.feature(F,"county_air_quality"),_=topojson.feature(I,"us_cities");let f=N().domain(d.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(x,{name:"Primary",children:(s,X)=>{z(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(k,Y)=>{var c=K(),y=v(c),q=i(y);j(q,{get scale(){return f},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=a(y,2);W(L,{zoomable:!0,get features(){return d.features},aspectRatio:4/2.5,tooltipContainParent:!0,children:(p,g)=>{var t=H(),r=v(t);B(r,{fill:o=>f(o.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var e=a(r,2);Q(e,{get features(){return _.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var m=a(e,2);R(m,{get features(){return _.features},getLabel:o=>o.properties.name,fontSize:13,pointerEvents:!1}),l(p,t)},$$slots:{default:!0,tooltip:(p,g)=>{var t=J();const r=w(()=>g.props);var e=i(t),m=i(e),o=a(e,2),$=a(i(o)),P=i($);V(()=>{h(m,`${S(r).NAME??""} county`),h(P,S(r).index_air_quality)}),l(p,t)}}}),l(k,c)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
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
