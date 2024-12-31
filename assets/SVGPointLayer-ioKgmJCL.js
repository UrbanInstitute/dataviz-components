import{S as he,i as pe,s as ke,t as _,j as te,b as O,r as ie,x as me,l as j,h as ne,n as U,q as be,u as ge,v as _e,w as ve}from"./index-Dy1J9qof.js";import{o as le,p as re,b as oe,d as S,j as y,f as m,i as L,v as W,n as we,x as Oe,A as Se,m as K,z as V}from"./lifecycle-mCW1c9RL.js";import{e as Q}from"./each-CjkgdRJJ.js";import{u as A}from"./urbanColors-BkxYcPwH.js";import{g as Fe,b as je,a as Ve,r as X,d as Y,c as Z}from"./lib-CRabK7jd.js";function x(t,e,n){const l=t.slice();l[40]=e[n];const o=l[12].centroid(l[40]);l[41]=o[0],l[42]=o[1];const d=je(l[40],l[4]);l[43]=d;const u=Ve(l[40],l[1],l[3]);return l[44]=u,l}const We=t=>({feature:t[0]&16385,x:t[0]&20481,y:t[0]&20481}),$=t=>({feature:t[40],x:t[41],y:t[42]});function Ae(t){let e,n,l,o,d,u,a,f,r,c;function s(...p){return t[32](t[40],...p)}function b(...p){return t[33](t[40],...p)}return{c(){e=le("circle"),this.h()},l(p){e=re(p,"circle",{class:!0,role:!0,label:!0,cx:!0,cy:!0,opacity:!0,fill:!0,r:!0,"stroke-width":!0,stroke:!0}),oe(e).forEach(S),this.h()},h(){y(e,"class","point-feature svelte-149ch8y"),y(e,"role",t[9]),y(e,"label",n=t[21](t[40])),y(e,"cx",l=t[41]),y(e,"cy",o=t[42]),y(e,"opacity",t[8]),y(e,"fill",d=t[44]),y(e,"r",u=t[22](t[40])/t[13].k),y(e,"stroke-width",a=t[6]/t[13].k),y(e,"stroke",f=t[43]),V(e,"highlight",Z(t[40],t[15],t[10])),V(e,"hover-fill",typeof t[2]<"u"),m(e,"--hover-fill",t[2]||t[44]),m(e,"--hover-stroke",t[5]||t[43])},m(p,h){L(p,e,h),r||(c=[W(e,"mousemove",s),W(e,"click",b)],r=!0)},p(p,h){t=p,h[0]&512&&y(e,"role",t[9]),h[0]&16385&&n!==(n=t[21](t[40]))&&y(e,"label",n),h[0]&20481&&l!==(l=t[41])&&y(e,"cx",l),h[0]&20481&&o!==(o=t[42])&&y(e,"cy",o),h[0]&256&&y(e,"opacity",t[8]),h[0]&16395&&d!==(d=t[44])&&y(e,"fill",d),h[0]&24577&&u!==(u=t[22](t[40])/t[13].k)&&y(e,"r",u),h[0]&8256&&a!==(a=t[6]/t[13].k)&&y(e,"stroke-width",a),h[0]&16401&&f!==(f=t[43])&&y(e,"stroke",f),h[0]&50177&&V(e,"highlight",Z(t[40],t[15],t[10])),h[0]&4&&V(e,"hover-fill",typeof t[2]<"u"),h[0]&16399&&m(e,"--hover-fill",t[2]||t[44]),h[0]&16433&&m(e,"--hover-stroke",t[5]||t[43])},i:U,o:U,d(p){p&&S(e),r=!1,ie(c)}}}function Le(t){let e;const n=t[31].default,l=be(n,t,t[30],$);return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,d){l&&l.m(o,d),e=!0},p(o,d){l&&l.p&&(!e||d[0]&1073762305)&&ge(l,n,o,o[30],e?ve(n,o[30],d,We):_e(o[30]),$)},i(o){e||(_(l,o),e=!0)},o(o){O(l,o),e=!1},d(o){l&&l.d(o)}}}function ee(t){let e,n,l,o;const d=[Le,Ae],u=[];function a(f,r){return f[25].default?0:1}return e=a(t),n=u[e]=d[e](t),{c(){n.c(),l=K()},l(f){n.l(f),l=K()},m(f,r){u[e].m(f,r),L(f,l,r),o=!0},p(f,r){let c=e;e=a(f),e===c?u[e].p(f,r):(ne(),O(u[c],1,1,()=>{u[c]=null}),te(),n=u[e],n?n.p(f,r):(n=u[e]=d[e](f),n.c()),_(n,1),n.m(l.parentNode,l))},i(f){o||(_(n),o=!0)},o(f){O(n),o=!1},d(f){f&&S(l),u[e].d(f)}}}function Ee(t){let e,n=`${(t[7]||t[6])/t[13].k}px`,l,o,d,u=Q(t[0]||t[14]),a=[];for(let r=0;r<u.length;r+=1)a[r]=ee(x(t,u,r));const f=r=>O(a[r],1,1,()=>{a[r]=null});return{c(){e=le("g");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=re(r,"g",{class:!0});var c=oe(e);for(let s=0;s<a.length;s+=1)a[s].l(c);c.forEach(S),this.h()},h(){y(e,"class","point-layer map-layer svelte-149ch8y"),m(e,"pointe-events",t[11]?"auto":"none"),m(e,"--hover-stroke-width",n)},m(r,c){L(r,e,c);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);l=!0,o||(d=[W(e,"mouseout",t[34]),W(e,"blur",t[35])],o=!0)},p(r,c){if(c[0]&1138816895){u=Q(r[0]||r[14]);let s;for(s=0;s<u.length;s+=1){const b=x(r,u,s);a[s]?(a[s].p(b,c),_(a[s],1)):(a[s]=ee(b),a[s].c(),_(a[s],1),a[s].m(e,null))}for(ne(),s=u.length;s<a.length;s+=1)f(s);te()}c[0]&2048&&m(e,"pointe-events",r[11]?"auto":"none"),c[0]&8384&&n!==(n=`${(r[7]||r[6])/r[13].k}px`)&&m(e,"--hover-stroke-width",n)},i(r){if(!l){for(let c=0;c<u.length;c+=1)_(a[c]);l=!0}},o(r){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)O(a[c]);l=!1},d(r){r&&S(e),we(a,r),o=!1,ie(d)}}}function Ce(t,e,n){let l,o,d,u,a,{$$slots:f={},$$scope:r}=e;const c=me(f),{projection:s,features:b,transform:p,handleLayerClick:h,handleLayerMousemove:ae,stickyHighlight:E}=Oe("map");j(t,s,i=>n(29,o=i)),j(t,b,i=>n(14,u=i)),j(t,p,i=>n(13,d=i)),j(t,E,i=>n(15,a=i));let{features:C=void 0}=e,{fill:G=A.white}=e,{hoverFill:P=void 0}=e,{naFill:R=A.gray_shade_light}=e,{stroke:B=A.black}=e,{hoverStroke:D=void 0}=e,{strokeWidth:q=0}=e,{hoverStrokeWidth:H=void 0}=e,{r:v=4}=e,{opacity:M=1}=e,{ariaRole:N=void 0}=e,{ariaLabel:g=void 0}=e,{highlightFeature:I=void 0}=e,{pointerEvents:z=!0}=e,{tooltip:F=!1}=e;const w=Se();function se(i){return typeof g=="string"||typeof g>"u"?g:g(i)}function ue(i){return typeof v=="number"?v:v(i)}function J(i,k){X(i.target),F&&ae(Y(i,k)),w("mousemove",{e:i,props:k.properties})}function T(i,k){X(i.target),F&&h(Y(i,k)),w("click",{e:i,props:k.properties})}const fe=(i,k)=>J(k,i),ce=(i,k)=>T(k,i),de=i=>w("mouseout"),ye=i=>w("mouseout");return t.$$set=i=>{"features"in i&&n(0,C=i.features),"fill"in i&&n(1,G=i.fill),"hoverFill"in i&&n(2,P=i.hoverFill),"naFill"in i&&n(3,R=i.naFill),"stroke"in i&&n(4,B=i.stroke),"hoverStroke"in i&&n(5,D=i.hoverStroke),"strokeWidth"in i&&n(6,q=i.strokeWidth),"hoverStrokeWidth"in i&&n(7,H=i.hoverStrokeWidth),"r"in i&&n(26,v=i.r),"opacity"in i&&n(8,M=i.opacity),"ariaRole"in i&&n(9,N=i.ariaRole),"ariaLabel"in i&&n(27,g=i.ariaLabel),"highlightFeature"in i&&n(10,I=i.highlightFeature),"pointerEvents"in i&&n(11,z=i.pointerEvents),"tooltip"in i&&n(28,F=i.tooltip),"$$scope"in i&&n(30,r=i.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&536870912&&n(12,l=Fe(o))},[C,G,P,R,B,D,q,H,M,N,I,z,l,d,u,a,s,b,p,E,w,se,ue,J,T,c,v,g,F,o,r,f,fe,ce,de,ye]}class Ge extends he{constructor(e){super(),pe(this,e,Ce,Ee,ke,{features:0,fill:1,hoverFill:2,naFill:3,stroke:4,hoverStroke:5,strokeWidth:6,hoverStrokeWidth:7,r:26,opacity:8,ariaRole:9,ariaLabel:27,highlightFeature:10,pointerEvents:11,tooltip:28},null,[-1,-1])}}Ge.__docgen={version:3,name:"SVGPointLayer.svelte",data:[{visibility:"public",description:"A list of GeoJSON features. By default this component will render the features set in the parent SVGMap, but if `features` is defined, it plots those instead. Points are rendered as SVG `circle` elements by default. Polygon features are converted to points with `d3.geoPath().centroid`.",keywords:[{name:"type",description:"{Array} [features]"}],name:"features",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"Array",type:"Array"}},{keywords:[{name:"type",description:"{ (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers fill color."}],visibility:"public",description:"A color string or a function that takes a feature and returns a color string. Use in combination with a D3 scale for a dynamic color encoding.",name:"fill",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"(Object) => string | string",type:[{kind:"type",text:"(Object) => string",type:"(Object) => string"},{kind:"type",text:"string",type:"string"}]}},{keywords:[{name:"type",description:"{ string }"}],visibility:"public",description:"Optional color to use for a feature's fill when hovered",name:"hoverFill",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{ string }"}],visibility:"public",description:"Color to use for values that are NA or otherwise undefined in the color scale",name:"naFill",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{ (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers stroke color."}],visibility:"public",description:"A color string or a function that takes a feature and returns a color string",name:"stroke",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"(Object) => string | string",type:[{kind:"type",text:"(Object) => string",type:"(Object) => string"},{kind:"type",text:"string",type:"string"}]}},{keywords:[{name:"type",description:"{ string }"}],visibility:"public",description:"Optional color string for hovered feature stroke",name:"hoverStroke",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{ number } [strokeWidth = 0.5]"}],visibility:"public",description:"Stroke width of each feature",name:"strokeWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{ number } [strokeWidth = undefined]"}],visibility:"public",description:"Stroke width of each feature when hovered",name:"hoverStrokeWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"}},{keywords:[{name:"type",description:"{number | (Object) => number}"}],visibility:"public",description:"Function or static value to use for radius of circle",name:"r",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"number | (Object) => number",type:[{kind:"type",text:"number",type:"number"},{kind:"type",text:"(Object) => number",type:"(Object) => number"}]},defaultValue:4},{keywords:[{name:"type",description:"{ number }"}],visibility:"public",description:"Opacity of point circles",name:"opacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[{name:"type",description:"{ string } [ariaRole = undefined]"}],visibility:"public",description:"Optional aria role string to be applied to each feature. Defaults to no role, assuming that SVG is hidden from the accessiblity tree.",name:"ariaRole",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{ string | (Object) => string } [ariaLabel = undefined]"}],visibility:"public",description:"Optional aria label string or function to be applied to each feature. Defaults to no label, assuming that SVG is hidden from the accessiblity tree. If a function is passed, it should take a `feature` as an argument and return a label string.",name:"ariaLabel",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"string | (Object) => string",type:[{kind:"type",text:"string",type:"string"},{kind:"type",text:"(Object) => string",type:"(Object) => string"}]}},{keywords:[{name:"type",description:"{{ string: any }}"}],visibility:"public",description:"Optional object that will be compared with each `feature` displayed in the layer. If all of the key/value pairs in `highlightFeature` are equal to the properties of a given `feature`, set that `feature` to a highlighted state.",name:"highlightFeature",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"{ string: any }",type:"{ string: any }"}},{keywords:[{name:"type",description:"{boolean} [pointerEvents = true]"}],visibility:"public",description:"Boolean that determines if this layer should respond to pointer events and dispatch events.",name:"pointerEvents",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:"{boolean} [tooltip = false]"}],visibility:"public",description:"Boolean that determines if this layer should populate the tooltip slot when interacted with.",name:"tooltip",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"mousemove"},{visibility:"public",description:null,keywords:[],name:"click"},{visibility:"public",description:null,keywords:[],name:"mouseout"}],slots:[{keywords:[],visibility:"public",description:"Optional slot that renders once for each feature. Overrides default SVG `<circle>` element.",name:"default",params:[{name:"{feature}",type:{kind:"type",text:"*",type:"any"}},{name:"{x}",type:{kind:"type",text:"*",type:"any"}},{name:"{y}",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{feature}",type:{kind:"type",text:"*",type:"any"}},{name:"{x}",type:{kind:"type",text:"*",type:"any"}},{name:"{y}",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};export{Ge as S};