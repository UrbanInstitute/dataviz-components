import{S as z,i as B,s as D,c as $,a as _,m as c,t as y,b as g,d,n as N}from"./index-Dy1J9qof.js";import{s as L,c as q,i as h,d as m,e as C,a as b,b as k,f as A,t as G,g as w,j as Q,k as f,l as U}from"./lifecycle-mCW1c9RL.js";import{p as T,T as W,S as j}from"./collect-stories-DS3D1-He.js";import"./BasicDropdown-D5Xnl74M.js";import"./Block-xppMl_dt.js";import"./DatawrapperIframe-DXnIm9vI.js";import"./HeadingAlt-COsEM8ug.js";import"./IconPlus-aF7wFi5t.js";import"./IconMinus-BewX7zVG.js";import"./IconClose-Czc3-o5k.js";import"./IconSearch-ByOfku5F.js";import"./LogoTPCBadge-AGHrsGsz.js";import"./LogoUrbanBadge-NdkKTBNt.js";import"./LogoUrbanAnimated-ww49eVg9.js";import"./LogoUrban-DeHlqEDu.js";import"./LogoUrbanWide-y9liITHc.js";import"./Navbar-BOeekF-F.js";import"./ProjectCredits-bKrbDlUv.js";import"./ReturnTop-CeqsbFrT.js";import"./Scorecard-BeQOnHGq.js";import"./SocialShare-ziO-Uw4n.js";import"./TextBlock-B1ILLIr1.js";import"./Button-EJV1Zdii.js";import{C as R}from"./ChartBlock-DGbmSnNt.js";import"./Theme-Du9Wdghg.js";import"./Headline-COJG6eAo.js";import"./Meta-eLSgIxvh.js";import"./Toggle-ByQUmuux.js";import"./Scrolly-Bpdd43QL.js";import"./Analytics-D8Rz5hz7.js";import"./PymChild-b1Kl_iKF.js";import"./LoadingWrapper-CBHI7ntG.js";import"./Tooltip-DEA9aP6W.js";import"./AxisY-BH9SCbqx.js";import"./AxisX-B7w1ow_6.js";import{S as F}from"./lib-CRabK7jd.js";import{S as O}from"./SVGPolygonLayer-CIVQTgms.js";import{S as H}from"./SVGPointLayer-ioKgmJCL.js";import{S as J}from"./SVGLabelLayer-DXqEP5-b.js";import{C as K}from"./ColorLegend-B2h784Vv.js";import{c as X,u as Y,q as Z}from"./us_cities-D4hZlMCj.js";import{u as x}from"./urbanColors-BkxYcPwH.js";import"./each-CjkgdRJJ.js";import"./spread-CgU5AtxT.js";import"./globals-D0QH3NT1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./string-Cinc0syZ.js";import"./linear-CIErNTRy.js";import"./index-_doEQLKC.js";import"./quantile-08mpu7mT.js";function tt(s){let t,i,a,n,r,o;return t=new O({props:{fill:s[3],hoverStroke:x.magenta,hoverStrokeWidth:2,tooltip:!0,stroke:x.gray_shade_dark}}),a=new H({props:{features:s[1].features,pointerEvents:!1,fill:x.gray_shade_lighter}}),r=new J({props:{features:s[1].features,getLabel:nt,fontSize:13,pointerEvents:!1}}),{c(){$(t.$$.fragment),i=L(),$(a.$$.fragment),n=L(),$(r.$$.fragment)},l(e){_(t.$$.fragment,e),i=q(e),_(a.$$.fragment,e),n=q(e),_(r.$$.fragment,e)},m(e,l){c(t,e,l),h(e,i,l),c(a,e,l),h(e,n,l),c(r,e,l),o=!0},p:N,i(e){o||(y(t.$$.fragment,e),y(a.$$.fragment,e),y(r.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),g(a.$$.fragment,e),g(r.$$.fragment,e),o=!1},d(e){e&&(m(i),m(n)),d(t,e),d(a,e),d(r,e)}}}function et(s){let t,i,a=s[4].NAME+"",n,r,o,e,l,S,v=s[4].index_air_quality+"",V;return{c(){t=C("div"),i=C("h5"),n=G(a),r=G(" county"),o=L(),e=C("p"),l=G("Air quality index: "),S=C("strong"),V=G(v),this.h()},l(u){t=b(u,"DIV",{slot:!0});var p=k(t);i=b(p,"H5",{});var E=k(i);n=w(E,a),r=w(E," county"),E.forEach(m),o=q(p),e=b(p,"P",{});var P=k(e);l=w(P,"Air quality index: "),S=b(P,"STRONG",{});var M=k(S);V=w(M,v),M.forEach(m),P.forEach(m),p.forEach(m),this.h()},h(){Q(t,"slot","tooltip")},m(u,p){h(u,t,p),f(t,i),f(i,n),f(i,r),f(t,o),f(t,e),f(e,l),f(e,S),f(S,V)},p(u,p){p&16&&a!==(a=u[4].NAME+"")&&U(n,a),p&16&&v!==(v=u[4].index_air_quality+"")&&U(V,v)},d(u){u&&m(t)}}}function rt(s){let t,i,a,n,r;return i=new K({props:{scale:s[2],height:10,tickLineColor:"white",tickLineWidth:"2"}}),n=new F({props:{zoomable:!0,features:s[0].features,aspectRatio:4/2.5,tooltipContainParent:!0,$$slots:{tooltip:[et,({props:o})=>({4:o}),({props:o})=>o?16:0],default:[tt]},$$scope:{ctx:s}}}),{c(){t=C("div"),$(i.$$.fragment),a=L(),$(n.$$.fragment),this.h()},l(o){t=b(o,"DIV",{style:!0});var e=k(t);_(i.$$.fragment,e),e.forEach(m),a=q(o),_(n.$$.fragment,o),this.h()},h(){A(t,"max-width","300px"),A(t,"margin","1em auto 0")},m(o,e){h(o,t,e),c(i,t,null),h(o,a,e),c(n,o,e),r=!0},p(o,e){const l={};e&48&&(l.$$scope={dirty:e,ctx:o}),n.$set(l)},i(o){r||(y(i.$$.fragment,o),y(n.$$.fragment,o),r=!0)},o(o){g(i.$$.fragment,o),g(n.$$.fragment,o),r=!1},d(o){o&&(m(t),m(a)),d(i),d(n,o)}}}function at(s){let t,i;return t=new R({props:{title:"Air quality index by U.S. county",source:"Urban Institute Upward Mobility Framework",$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){$(t.$$.fragment)},l(a){_(t.$$.fragment,a)},m(a,n){c(t,a,n),i=!0},p(a,n){const r={};n&32&&(r.$$scope={dirty:n,ctx:a}),t.$set(r)},i(a){i||(y(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){d(t,a)}}}function ot(s){let t,i,a,n;return t=new W({}),a=new j({props:{name:"Primary",$$slots:{default:[at]},$$scope:{ctx:s}}}),{c(){$(t.$$.fragment),i=L(),$(a.$$.fragment)},l(r){_(t.$$.fragment,r),i=q(r),_(a.$$.fragment,r)},m(r,o){c(t,r,o),h(r,i,o),c(a,r,o),n=!0},p(r,[o]){const e={};o&32&&(e.$$scope={dirty:o,ctx:r}),a.$set(e)},i(r){n||(y(t.$$.fragment,r),y(a.$$.fragment,r),n=!0)},o(r){g(t.$$.fragment,r),g(a.$$.fragment,r),n=!1},d(r){r&&m(i),d(t,r),d(a,r)}}}const it={title:"Examples/Stories/CustomSVGMap"},nt=s=>s.properties.name;function st(s){const t=topojson.feature(X,"county_air_quality"),i=topojson.feature(Y,"us_cities");let a=Z().domain(t.features.map(r=>r.properties.index_air_quality)).range(x.getDivergingColors());return[t,i,a,r=>a(r.properties.index_air_quality)]}class lt extends z{constructor(t){super(),B(this,t,st,ot,D,{})}}const I=T(lt,{meta:{title:"Examples/Stories/CustomSVGMap"},stories:{"tpl:default":{name:"default",template:!0,source:"",hasArgs:!1},Primary:{name:"Primary",template:!1,source:`<ChartBlock
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
</ChartBlock>`,hasArgs:!1}},allocatedIds:["default","Story","Template","ChartBlock","SVGPolygonLayer","SVGLabelLayer","SVGPointLayer","SVGMap","ColorLegend","county_air_quality_topo","urbanColors","us_cities","scaleQuantile"]},it),ie=I.meta,ne=["Primary"],se=I.stories.Primary;export{se as Primary,ne as __namedExportsOrder,ie as default};
