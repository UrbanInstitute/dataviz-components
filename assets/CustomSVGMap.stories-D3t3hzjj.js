import{p as P,f as _,a as u,c as a,s as o,n as M,b as d,t as w,d as G,e as v}from"./iframe-BjxEKEQH.js";import{c as V,d as A}from"./create-runtime-stories-HPq0r60h.js";import{i as E}from"./lifecycle-hO6jUP98.js";import"./BasicDropdown-DBkXvpWy.js";import"./Block-S085LgKA.js";import"./DatawrapperIframe-DBrTT8wg.js";import"./HeadingAlt-BNBRxhWQ.js";import"./IconPlus-YnuXZYeX.js";import"./IconMinus-D_9s7pId.js";import"./IconClose-CEHIYMGE.js";import"./IconSearch-Ca3yJXEQ.js";import"./LogoTPCBadge-COm6_I7f.js";import"./LogoUrbanBadge-BvBpghVV.js";import"./LogoUrbanAnimated-DtAU-OWH.js";import"./LogoUrban-DTc3tii8.js";import"./LogoUrbanWide-BI_7HiH4.js";import"./Navbar-B9xI0hn-.js";import"./ProjectCredits-DQdZQmvn.js";import"./ReturnTop-T156Z9Q5.js";import"./Scorecard-D3J3Rqpq.js";import"./SocialShare-DWn1HI4c.js";import"./TextBlock-ByoZU-dy.js";import"./Button-DMhGQjzO.js";import{C as U}from"./ChartBlock-BzdRr3rw.js";import"./Meta-BtHKPa1P.js";import"./Toggle-Cdb9dgAr.js";import"./Scrolly-dlw8WA2s.js";import"./Analytics-kwMMLO-n.js";import"./Headline-Cb6guEuf.js";import"./PymChild-CO1HGkDt.js";import"./LoadingWrapper-DjGTokaM.js";import"./Tooltip-DQtD7qmK.js";import"./AxisY-C1gfo3-v.js";import"./AxisX-B5hCexcB.js";import{c as z,S as W}from"./lib-CgGEPiW4.js";import{S as B}from"./SVGPolygonLayer-BgMp1_rr.js";import{S as I}from"./SVGPointLayer-Dudgp-WP.js";import{S as Q}from"./SVGLabelLayer-DlN-Z4yY.js";import{C as R}from"./ColorLegend-BZtwLofT.js";import"./Tilemap-CclD0V5n.js";import{c as j,u as F}from"./us_cities-DYyFK5C6.js";import{u as n}from"./urbanColors-BkxYcPwH.js";import{q as N}from"./quantile-Bh9554at.js";import"./each-DC_8OmU5.js";import"./attributes-UJeNkN1P.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./html-CDri68dQ.js";import"./this-DGLcOT4Q.js";import"./svelte-head-CaadU4Xw.js";import"./window-C-tkelu3.js";import"./slot-BP_Qo1ZM.js";import"./size-C1syiTDZ.js";import"./string-BqOgh9tw.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";const D={title:"Examples/Stories/CustomSVGMap"},{Story:O}=A();var H=_("<h5> </h5> <p>Air quality index: <strong> </strong></p>",1),J=_("<!> <!> <!>",1),K=_('<div style="max-width: 300px; margin: 1em auto 0;"><!></div> <!>',1);function S(C,x){P(x,!1),z();const f=topojson.feature(j,"county_air_quality"),c=topojson.feature(F,"us_cities");let y=N().domain(f.features.map(s=>s.properties.index_air_quality)).range(n.getDivergingColors());E(),O(C,{name:"Primary",asChild:!0,children:(s,X)=>{U(s,{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",children:(b,Y)=>{var g=K(),h=u(g),k=a(h);R(k,{get scale(){return y},height:10,tickLineColor:"white",tickLineWidth:"2"});var L=o(h,2);{const $=(p,m=M)=>{var t=H(),r=u(t),i=a(r),l=o(r,2),e=o(a(l)),q=a(e);w(()=>{v(i,`${m().NAME??""} county`),v(q,m().index_air_quality)}),d(p,t)};W(L,{zoomable:!0,get features(){return f.features},aspectRatio:4/2.5,tooltipContainParent:!0,tooltip:$,children:(p,m)=>{var t=J(),r=u(t);B(r,{fill:e=>y(e.properties.index_air_quality),get hoverStroke(){return n.magenta},hoverStrokeWidth:2,tooltip:!0,get stroke(){return n.gray_shade_dark}});var i=o(r,2);I(i,{get features(){return c.features},pointerEvents:!1,get fill(){return n.gray_shade_lighter}});var l=o(i,2);Q(l,{get features(){return c.features},getLabel:e=>e.properties.name,fontSize:13,pointerEvents:!1}),d(p,t)},$$slots:{tooltip:!0,default:!0}})}d(b,g)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review."}},__svelteCsf:{rawCode:`<ChartBlock
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
