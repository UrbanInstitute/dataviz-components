import{S as Vt,i as Pt,s as Et,y as ft,q as yt,u as mt,v as ht,w as gt,t as bt,b as kt,r as Ht,x as Bt,e as It}from"./index-Dy1J9qof.js";import{e as et,a as ot,b as it,d as Y,j as R,f as z,i as lt,v as dt,z as pt,k as Lt,H as Rt,m as ct,r as Xt}from"./lifecycle-mCW1c9RL.js";import{g as Yt}from"./globals-D0QH3NT1.js";const{window:X}=Yt,Mt=i=>({orientation:i[0]&4096}),ut=i=>({orientation:i[12]});function Dt(i){let t,o;return{c(){t=new Rt(!1),o=ct(),this.h()},l(f){t=Xt(f,!1),o=ct(),this.h()},h(){t.a=o},m(f,a){t.m(i[0],f,a),lt(f,o,a)},p(f,a){a[0]&1&&t.p(f[0])},d(f){f&&(Y(o),t.d())}}}function Ft(i){let t,o,f,a="1px",p;const b=i[30].default,h=yt(b,i,i[29],null),s=h||Dt(i);return{c(){t=et("div"),o=et("div"),s&&s.c(),this.h()},l(l){t=ot(l,"DIV",{class:!0});var d=it(t);o=ot(d,"DIV",{class:!0});var V=it(o);s&&s.l(V),V.forEach(Y),d.forEach(Y),this.h()},h(){R(o,"class","tooltip-text svelte-149rbfd"),R(t,"class",f="tooltip tooltip-"+i[12]+" tooltip-"+i[1]+" tooltip-"+i[2]+" svelte-149rbfd"),pt(t,"box-shadow",i[4]),z(t,"--tooltip-font-size",i[3]),z(t,"--tooltip-border-color",i[5]),z(t,"--tooltip-border-width",a),z(t,"--tooltip-font-color",i[15]),z(t,"--tooltip-background-color",i[14])},m(l,d){lt(l,t,d),Lt(t,o),s&&s.m(o,null),p=!0},p(l,d){h?h.p&&(!p||d[0]&536870912)&&mt(h,b,l,l[29],p?gt(b,l[29],d,null):ht(l[29]),null):s&&s.p&&(!p||d[0]&1)&&s.p(l,p?d:[-1,-1]),(!p||d[0]&4102&&f!==(f="tooltip tooltip-"+l[12]+" tooltip-"+l[1]+" tooltip-"+l[2]+" svelte-149rbfd"))&&R(t,"class",f),(!p||d[0]&4118)&&pt(t,"box-shadow",l[4]),d[0]&8&&z(t,"--tooltip-font-size",l[3]),d[0]&32&&z(t,"--tooltip-border-color",l[5]),d[0]&32768&&z(t,"--tooltip-font-color",l[15]),d[0]&16384&&z(t,"--tooltip-background-color",l[14])},i(l){p||(bt(s,l),p=!0)},o(l){kt(s,l),p=!1},d(l){l&&Y(t),s&&s.d(l)}}}function Wt(i){let t=!1,o=()=>{t=!1},f,a,p,b,h=`${i[17].tooltipOverride?0:i[6]}px`,s,l,d;ft(i[31]),ft(i[32]);const V=i[30].tooltipOverride,H=yt(V,i,i[29],ut),c=H||Ft(i);return{c(){a=et("div"),c&&c.c(),this.h()},l(r){a=ot(r,"DIV",{class:!0,style:!0});var u=it(a);c&&c.l(u),u.forEach(Y),this.h()},h(){R(a,"class",p="tooltip-outer tooltip-orientation-"+i[12]+" svelte-149rbfd"),R(a,"style",b=`left: ${i[13][0]}px; top: ${i[13][1]}px; width: ${i[16][i[2]]}px;`),z(a,"--tooltip-triangle-size",h)},m(r,u){lt(r,a,u),c&&c.m(a,null),i[33](a),s=!0,l||(d=[dt(X,"scroll",()=>{t=!0,clearTimeout(f),f=setTimeout(o,100),i[31]()}),dt(X,"resize",i[32])],l=!0)},p(r,u){u[0]&3072&&!t&&(t=!0,clearTimeout(f),scrollTo(r[11],r[10]),f=setTimeout(o,100)),H?H.p&&(!s||u[0]&536875008)&&mt(H,V,r,r[29],s?gt(V,r[29],u,Mt):ht(r[29]),ut):c&&c.p&&(!s||u[0]&536924223)&&c.p(r,s?u:[-1,-1]),(!s||u[0]&4096&&p!==(p="tooltip-outer tooltip-orientation-"+r[12]+" svelte-149rbfd"))&&R(a,"class",p),(!s||u[0]&8196&&b!==(b=`left: ${r[13][0]}px; top: ${r[13][1]}px; width: ${r[16][r[2]]}px;`))&&R(a,"style",b);const B=u[0]&8196;(u[0]&139332&&h!==(h=`${r[17].tooltipOverride?0:r[6]}px`)||B)&&z(a,"--tooltip-triangle-size",h)},i(r){s||(bt(c,r),s=!0)},o(r){kt(c,r),s=!1},d(r){r&&Y(a),c&&c.d(r),i[33](null),l=!1,Ht(d)}}}function jt(i){if(!i)return;let t=i.parentNode;for(;t&&t!==document.documentElement&&(t instanceof ShadowRoot&&(t=t.host),t instanceof Element);){const o=window.getComputedStyle(t).position;if(o==="relative"||o==="absolute"||o==="fixed")return t;t=t.parentNode}return null}function Nt(i,t,o){let f,a,p,b,h,s,{$$slots:l={},$$scope:d}=t;const V=Bt(l);let{content:H=""}=t,{style:c="light"}=t,{x:r=0}=t,{y:u=0}=t,{el:B=void 0}=t,{elOffset:y=0}=t,{size:G="small"}=t,{fontSize:nt="var(--font-size-small)"}=t,{boxShadow:rt=!1}=t,{backgroundColor:J=void 0}=t,{fontColor:F=void 0}=t,{borderColor:st="var(--color-gray)"}=t,{triangleSize:W=8}=t,{orientation:S="dynamic"}=t,{containParent:K=!1}=t;const at={small:138,large:198};let P;const _t={light:"var(--color-gray-shade-darkest)",dark:"var(--color-white)"},wt={light:"var(--color-white)",dark:"var(--color-black)"};let Q=0,U=0,I=0,L=0,Z,j;function vt(e,n){Z||(Z=P.parentNode);const m=Z.getBoundingClientRect();return{top:m.top+n,right:m.right+e,bottom:m.bottom+n,left:m.left+e}}function Ct(e,n,m){const T=jt(e);if(T){const g=window.getComputedStyle(T),k=parseInt(g.paddingLeft.replace("px","")),x=parseInt(g.paddingTop.replace("px","")),_=T.getBoundingClientRect(),E=n-_.left-L-k,w=m-_.top-I-x;return[E,w]}return[n,m]}function N(e,n){return e<f/2+n.left}function q(e,n){return e>n.right-f/2}function A(e,n){return e<a+W+n.top}function $(e,n){return e>n.bottom-(a/2+W)}function zt(e,n,m,T){const g=e.getBoundingClientRect(),k=g.left+m,x=g.right+m,_=g.top+T,E=g.bottom+T,w=k+g.width/2,tt=_+g.height/2;let v=w,C=tt,O="top";return S!=="dynamic"?(O=S,S.includes("left")&&(v=k-y),S.includes("right")&&(v=x+y),S.includes("bottom")&&(C=E+y),S.includes("top")&&(C=_-y)):A(_,n)&&N(w,n)?(v=x+y,C=E+y,O="bottom-right"):A(_,n)&&q(w,n)?(v=k-y,C=E+y,O="bottom-left"):$(E,n)&&N(w,n)?(v=x+y,C=_-y,O="top-right"):$(E,n)&&q(w,n)?(v=k-y,C=_-y,O="top-left"):N(w,n)?(v=x+y,C=tt,O="right"):q(w,n)?(v=k-y,C=tt,O="left"):A(_,n)?(v=w,C=E+y,O="bottom"):(v=w,C=_-y,O="top"),{x:v,y:C,orientation:O}}function St(e,n,m){const T=N(e,m),g=A(n,m),k=q(e,m),x=$(n,m);return T&&g?"bottom-right":k&&g?"bottom-left":x&&T?"top-right":x&&k?"top-left":T?"right":k?"left":g?"bottom":"top"}let M,D;function Tt(){o(10,I=X.pageYOffset),o(11,L=X.pageXOffset)}function Ot(){o(8,Q=X.innerWidth),o(9,U=X.innerHeight)}function xt(e){It[e?"unshift":"push"](()=>{P=e,o(7,P)})}return i.$$set=e=>{"content"in e&&o(0,H=e.content),"style"in e&&o(1,c=e.style),"x"in e&&o(18,r=e.x),"y"in e&&o(19,u=e.y),"el"in e&&o(20,B=e.el),"elOffset"in e&&o(21,y=e.elOffset),"size"in e&&o(2,G=e.size),"fontSize"in e&&o(3,nt=e.fontSize),"boxShadow"in e&&o(4,rt=e.boxShadow),"backgroundColor"in e&&o(22,J=e.backgroundColor),"fontColor"in e&&o(23,F=e.fontColor),"borderColor"in e&&o(5,st=e.borderColor),"triangleSize"in e&&o(6,W=e.triangleSize),"orientation"in e&&o(24,S=e.orientation),"containParent"in e&&o(25,K=e.containParent),"$$scope"in e&&o(29,d=e.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&4&&(f=at[G]),i.$$.dirty[0]&128&&(a=P?P.offsetHeight:20),i.$$.dirty[0]&8388610&&o(15,p=F||_t[c]),i.$$.dirty[0]&4194306&&o(14,b=J||wt[c]),i.$$.dirty[0]&33558400&&o(28,h=K&&P?vt(L,I):{top:I,right:Q+L,bottom:U+I,left:L}),i.$$.dirty[0]&269487104&&B){const{x:e,y:n,orientation:m}=zt(B,h,L,I);o(26,M=e),o(27,D=n),o(12,j=m)}i.$$.dirty[0]&488374272&&(B||(S==="dynamic"?o(12,j=St(M,D,h)):o(12,j=S),o(26,M=r),o(27,D=u))),i.$$.dirty[0]&201326720&&o(13,s=Ct(P,M,D))},[H,c,G,nt,rt,st,W,P,Q,U,I,L,j,s,b,p,at,V,r,u,B,y,J,F,S,K,M,D,h,d,l,Tt,Ot,xt]}class qt extends Vt{constructor(t){super(),Pt(this,t,Nt,Wt,Et,{content:0,style:1,x:18,y:19,el:20,elOffset:21,size:2,fontSize:3,boxShadow:4,backgroundColor:22,fontColor:23,borderColor:5,triangleSize:6,orientation:24,containParent:25},null,[-1,-1])}}qt.__docgen={version:3,name:"Tooltip.svelte",data:[{keywords:[{name:"type",description:"{ string }"}],visibility:"public",description:"Content to render inside the tooltip. This can include custom HTML.",name:"content",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:'{"dark" | "light"} [style = "light"]'}],visibility:"public",description:"The color style of the tooltip",name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"dark" | "light"',type:[{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"light"',type:'"light"'}]},defaultValue:"light"},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"The x position of the tooltip. This should be an absolute position relative to the page, like you would get from a pointer event's `pageX` property.",name:"x",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"The y position of the tooltip. This should be an absolute position relative to the page, like you would get from a pointer event's `pageY` property.",name:"y",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{HTMLElement} [el = undefined]"}],visibility:"public",description:"An optional HTMLElement to bind the tooltip position to",name:"el",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"HTMLElement",type:"HTMLElement"}},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"The offset distance from the el in pixels",name:"elOffset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:'{"small" | "large"}'},{name:"default",description:'"small"'}],visibility:"public",description:"whether to use a small (138px) or large (198px) width",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"small" | "large"',type:[{kind:"type",text:'"small"',type:'"small"'},{kind:"type",text:'"large"',type:'"large"'}]},defaultValue:"small"},{keywords:[{name:"type",description:'{string} [fontSize="--var(font-size-small)"]'}],visibility:"public",description:"Font size for tooltip as CSS string.",name:"fontSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"var(--font-size-small)"},{keywords:[{name:"type",description:"{boolean}"},{name:"default",description:"false"}],visibility:"public",description:"Whether to use a box shadow",name:"boxShadow",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{ string } [backgroundColor = undefined]"}],visibility:"public",description:"Color of tooltip background. Overrides the default style.",name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{ string } [fontColor = undefined]"}],visibility:"public",description:"Color of tooltip text. Overrides the default style.",name:"fontColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:'{ string } [borderColor = "var(--color-gray)"]'}],visibility:"public",description:"Color of tooltip border",name:"borderColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"var(--color-gray)"},{keywords:[{name:"type",description:"{ number } [triangleSize = 0]"}],visibility:"public",description:"Size of the tooltip triangle. Set to 0 for no triangle.",name:"triangleSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:8},{keywords:[{name:"type",description:'{"top" | "bottom" | "left" | "right" | "bottom-left" | "bottom-right" | "top-left" | "top-right" | "dynamic"} [orientation = "dynamic"]'}],visibility:"public",description:"Orientation of the tooltip. Default to dynamic, which attempts to prevent tooltip from overflowing the bounds of the viewport or parent element if `containParent` is true.",name:"orientation",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"top" | "bottom" | "left" | "right" | "bottom-left" | "bottom-right" | "top-left" | "top-right" | "dynamic"',type:[{kind:"type",text:'"top"',type:'"top"'},{kind:"type",text:'"bottom"',type:'"bottom"'},{kind:"type",text:'"left"',type:'"left"'},{kind:"type",text:'"right"',type:'"right"'},{kind:"type",text:'"bottom-left"',type:'"bottom-left"'},{kind:"type",text:'"bottom-right"',type:'"bottom-right"'},{kind:"type",text:'"top-left"',type:'"top-left"'},{kind:"type",text:'"top-right"',type:'"top-right"'},{kind:"type",text:'"dynamic"',type:'"dynamic"'}]},defaultValue:"dynamic"},{keywords:[{name:"type",description:"{ boolean } [ containParent = false ]"}],visibility:"public",description:"Should the tooltip contain with the parent element instead of the window?",name:"containParent",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"The tooltipOverride slot allows you to provide custom markup that will override all of the default styling of the tooltip while still adhering to the positioning logic",name:"tooltipOverride",params:[{name:"orientation",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"orientation",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Content in the default slot renders inside the styled tooltop",name:"default"}],refs:[]};export{qt as T};
