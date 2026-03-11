import{p as P,f as _,a as u,c as a,s as o,n as M,b as d,t as w,d as G,e as v}from"./iframe-BFmjYyCP.js";import{c as V,d as A}from"./create-runtime-stories-DnSfEJ6v.js";import{i as E}from"./lifecycle-BylW-Lo5.js";import"./BasicDropdown-CuacMnub.js";import"./Block-BtJscoEf.js";import"./DatawrapperIframe-jBo6raiE.js";import"./HeadingAlt-cknztKp5.js";import"./IconPlus-v6mzMoad.js";import"./IconMinus-CYUqdFq0.js";import"./IconClose-DIKbmsc4.js";import"./IconSearch-Dl8dg4MW.js";import"./LogoTPCBadge-DqaGFFod.js";import"./LogoUrbanBadge-CavSyuP2.js";import"./LogoUrbanAnimated-DayiJdW_.js";import"./LogoUrban-D2N_YMLb.js";import"./LogoUrbanWide-BZ3RW5Gs.js";import"./Navbar-Dvxw-Ynr.js";import"./ProjectCredits-Dbiyj830.js";import"./ReturnTop-CxCftb1Y.js";import"./Scorecard-CzMo6Ml4.js";import"./SocialShare-CUa-Z7kt.js";import"./TextBlock-DZQFmjnB.js";import"./Button-Du0iiGg9.js";import{C as U}from"./ChartBlock-DkuyX0Fv.js";import"./Meta-DGy0Rwlf.js";import"./Toggle-CPF40qgY.js";import"./Scrolly-mfNLySj4.js";import"./Analytics-BLW4rvip.js";import"./Headline-Bo0YD6ap.js";import"./PymChild-DnMynLYx.js";import"./LoadingWrapper-Dg9ivyZT.js";import"./Tooltip-CMDO6aXx.js";import"./AxisY-CdwqNgAa.js";import"./AxisX-DrZik9k_.js";import{c as z,S as W}from"./lib-C-iIVLEu.js";import{S as B}from"./SVGPolygonLayer-B2iROtJ9.js";import{S as I}from"./SVGPointLayer-Cfiwe5NZ.js";import{S as Q}from"./SVGLabelLayer-BSSFO4n-.js";import{C as R}from"./ColorLegend-T9hAV9X9.js";import"./Tilemap-BmrzSl35.js";import{c as j,u as F}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./each-DXXm_h2k.js";import"./attributes-C5AdEZsc.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./html-D2vYHOMs.js";import"./this-X0dQIlNe.js";import"./svelte-head-j_ztYC77.js";import"./window-DU9NUv4i.js";import"./slot-BP_Qo1ZM.js";import"./size-CQgmdqM7.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=A();var H=_("<h5> </h5> <p>Air quality index: <strong> </strong></p>",1),J=_("<!> <!> <!>",1),K=_('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function S(C,x){P(x,!1),z();const f=topojson.feature(j,"county_air_quality"),c=topojson.feature(F,"us_cities");let y=N().domain(f.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(C,{name:"Primary",asChild:!0,children:(s,X)=>{U(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(b,Y)=>{var g=K(),h=u(g),k=a(h);R(k,{get scale(){return y},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=o(h,2);{const $=(p,m=M)=>{var t=H(),r=u(t),i=a(r),l=o(r,2),e=o(a(l)),q=a(e);w(()=>{v(i,`${m().NAME??""} county`),v(q,m().index_air_quality)}),d(p,t)};W(L,{zoomable:!0,get features(){return f.features},aspectRatio:4/2.5,tooltipContainParent:!0,tooltip:$,children:(p,m)=>{var t=J(),r=u(t);B(r,{fill:e=>y(e.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var i=o(r,2);I(i,{get features(){return c.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var l=o(i,2);Q(l,{get features(){return c.features},getLabel:e=>e.properties.name,fontSize:13,pointerEvents:!1}),d(p,t)},$$slots:{tooltip:!0,default:!0}})}d(b,g)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<ChartBlock
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
</ChartBlock>`}}}),G()}S.__docgen={data:[],name:"CustomSVGMap.stories.svelte"};const T=V(S,D),ir=["Primary"],ar={...T.Primary,tags:["svelte-csf-v5"]};export{ar as Primary,ir as __namedExportsOrder,D as default};
