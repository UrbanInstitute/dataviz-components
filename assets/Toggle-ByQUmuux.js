import{S as w,i as P,s as T,n as g}from"./index-Dy1J9qof.js";import{e as h,t as E,s as V,a as p,b as k,g as q,d as y,c as L,h as S,j as r,f as _,i as A,k as u,v as C,l as H,A as M}from"./lifecycle-mCW1c9RL.js";function N(s){let e,t,d,o,c,n,f='<span class="circle svelte-10o3bbs"></span>',b,a,m;return{c(){e=h("button"),t=h("p"),d=E(s[1]),c=V(),n=h("span"),n.innerHTML=f,this.h()},l(i){e=p(i,"BUTTON",{class:!0,role:!0,"aria-checked":!0});var l=k(e);t=p(l,"P",{class:!0});var v=k(t);d=q(v,s[1]),v.forEach(y),c=L(l),n=p(l,"SPAN",{class:!0,"aria-hidden":!0,"data-svelte-h":!0}),S(n)!=="svelte-eavkwk"&&(n.innerHTML=f),l.forEach(y),this.h()},h(){r(t,"class",o="label "+s[2]+" svelte-10o3bbs"),r(n,"class","toggle svelte-10o3bbs"),r(n,"aria-hidden","true"),r(e,"class",b="container "+s[2]+" svelte-10o3bbs"),e.disabled=s[3],r(e,"role","switch"),r(e,"aria-checked",s[0]),_(e,"direction",s[2]==="right"?"rtl":"ltr")},m(i,l){A(i,e,l),u(e,t),u(t,d),u(e,c),u(e,n),a||(m=C(e,"click",s[5]),a=!0)},p(i,[l]){l&2&&H(d,i[1]),l&4&&o!==(o="label "+i[2]+" svelte-10o3bbs")&&r(t,"class",o),l&4&&b!==(b="container "+i[2]+" svelte-10o3bbs")&&r(e,"class",b),l&8&&(e.disabled=i[3]),l&1&&r(e,"aria-checked",i[0]),l&4&&_(e,"direction",i[2]==="right"?"rtl":"ltr")},i:g,o:g,d(i){i&&y(e),a=!1,m()}}}function W(s,e,t){const d=M();let{active:o=!1}=e,{label:c="Enim id qui labore labore"}=e,{labelPosition:n="left"}=e,{disabled:f=!1}=e;const b=()=>{d("click"),t(0,o=!o)};return s.$$set=a=>{"active"in a&&t(0,o=a.active),"label"in a&&t(1,c=a.label),"labelPosition"in a&&t(2,n=a.labelPosition),"disabled"in a&&t(3,f=a.disabled)},[o,c,n,f,d,b]}class j extends w{constructor(e){super(),P(this,e,W,N,T,{active:0,label:1,labelPosition:2,disabled:3})}}j.__docgen={version:3,name:"Toggle.svelte",data:[{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Whether the toggle is active or not",name:"active",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Label for the toggle",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Enim id qui labore labore"},{keywords:[{name:"type",description:'{"left" | "right"}'}],visibility:"public",description:"Position of the label relative to the toggle",name:"labelPosition",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"left" | "right"',type:[{kind:"type",text:'"left"',type:'"left"'},{kind:"type",text:'"right"',type:'"right"'}]},defaultValue:"left"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Whether the toggle is disabled or not",name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"click"}],slots:[],refs:[]};export{j as T};