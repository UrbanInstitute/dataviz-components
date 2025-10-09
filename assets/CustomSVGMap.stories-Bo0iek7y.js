import{p as G,f as u,a as v,c as i,s as a,t as V,b as l,d as M,e as h,g as S,h as w}from"./iframe-D_iF5c85.js";import{i as E}from"./lifecycle-DPT9lhMs.js";import{c as A,d as U}from"./create-runtime-stories-cJTTi5Jk.js";import"./BasicDropdown-BV9-kScM.js";import"./Block-DaVU3fpD.js";import"./DatawrapperIframe-CELrtceV.js";import"./HeadingAlt-B3s-cwVt.js";import"./IconPlus-H3PVDhId.js";import"./IconMinus-C_ALby8P.js";import"./IconClose-0BE569Ao.js";import"./IconSearch-D2taTaTp.js";import"./LogoTPCBadge-Cv3HojDc.js";import"./LogoUrbanBadge-Bi-xGI2B.js";import"./LogoUrbanAnimated-CMdd7yyu.js";import"./LogoUrban-BMoE0jVd.js";import"./LogoUrbanWide-BHp9lSVx.js";import"./Navbar-CuQe5N91.js";import"./ProjectCredits-ZoBGb6Qv.js";import"./ReturnTop-BZ2xwKgh.js";import"./Scorecard-BPpEdO58.js";import"./SocialShare-DP__719P.js";import"./TextBlock-DH-7zvxt.js";import"./Button-BaoQD_bw.js";import{C as z}from"./ChartBlock-BSxk159m.js";import"./Meta-UJtWWVZM.js";import"./Toggle-kFPVefLV.js";import"./Scrolly-B3tX4heq.js";import"./Analytics-BtQvuFGM.js";import"./Headline-FQMShgyj.js";import"./PymChild-DrAZ8mRg.js";import"./LoadingWrapper-BtRosSEG.js";import"./Tooltip-Dc-_iO2O.js";import"./AxisY-BU7-4rF7.js";import"./AxisX-D93YsPX7.js";import{S as W}from"./lib-SbtGGwAb.js";import{S as B}from"./SVGPolygonLayer-GsssbKkD.js";import{S as Q}from"./SVGPointLayer-CMVarROK.js";import{S as R}from"./SVGLabelLayer-CmNXNRlT.js";import{C as j}from"./ColorLegend-ST9eZb3y.js";import"./Tilemap-CyAPBYeh.js";import{c as F,u as I}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./each-B1oKFb8M.js";import"./attributes-BlXGg7Yy.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-B3v2RBLd.js";import"./html-HzSgVQlL.js";import"./this-BBCWgB8B.js";import"./svelte-head-CrqWe_fm.js";import"./window-DPTPwaep.js";import"./size-TzohQyBJ.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=U();var H=u("<!> <!> <!>",1),J=u('<div slot="tooltip"><h5> </h5> <p>Air quality index: <strong> </strong></p></div>'),K=u('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function C(x,b){G(b,!1);const d=topojson.feature(F,"county_air_quality"),_=topojson.feature(I,"us_cities");let f=N().domain(d.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(x,{name:"Primary",children:(s,X)=>{z(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(k,Y)=>{var c=K(),y=v(c),q=i(y);j(q,{get scale(){return f},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=a(y,2);W(L,{zoomable:!0,get features(){return d.features},aspectRatio:4/2.5,tooltipContainParent:!0,children:(p,g)=>{var t=H(),r=v(t);B(r,{fill:o=>f(o.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var e=a(r,2);Q(e,{get features(){return _.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var m=a(e,2);R(m,{get features(){return _.features},getLabel:o=>o.properties.name,fontSize:13,pointerEvents:!1}),l(p,t)},$$slots:{default:!0,tooltip:(p,g)=>{var t=J();const r=w(()=>g.props);var e=i(t),m=i(e),o=a(e,2),$=a(i(o)),P=i($);V(()=>{h(m,`${S(r).NAME??""} county`),h(P,S(r).index_air_quality)}),l(p,t)}}}),l(k,c)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
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
