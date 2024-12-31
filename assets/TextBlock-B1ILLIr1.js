import{S as _,i as h,s as k,c as v,a as b,m as g,t as p,b as m,d as w,q as B,u as S,v as T,w as x}from"./index-Dy1J9qof.js";import{e as z,a as V,b as q,d,j as c,z as f,f as u,i as D}from"./lifecycle-mCW1c9RL.js";import{B as $}from"./Block-xppMl_dt.js";function j(a){let e,n,o,i;const r=a[3].default,s=B(r,a,a[4],null);return{c(){e=z("p"),s&&s.c(),this.h()},l(t){e=V(t,"P",{class:!0,style:!0});var l=q(e);s&&s.l(l),l.forEach(d),this.h()},h(){c(e,"class",n="text-block "+a[1]+" svelte-1msozc0"),c(e,"style",o=`--color-override: ${a[2]}`),f(e,"color-override",a[2]),u(e,"color",a[2])},m(t,l){D(t,e,l),s&&s.m(e,null),i=!0},p(t,l){s&&s.p&&(!i||l&16)&&S(s,r,t,t[4],i?x(r,t[4],l,null):T(t[4]),null),(!i||l&2&&n!==(n="text-block "+t[1]+" svelte-1msozc0"))&&c(e,"class",n),(!i||l&4&&o!==(o=`--color-override: ${t[2]}`))&&c(e,"style",o),(!i||l&6)&&f(e,"color-override",t[2]);const y=l&4;(l&4||y)&&u(e,"color",t[2])},i(t){i||(p(s,t),i=!0)},o(t){m(s,t),i=!1},d(t){t&&d(e),s&&s.d(t)}}}function C(a){let e,n;return e=new $({props:{width:a[0],$$slots:{default:[j]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,i){g(e,o,i),n=!0},p(o,[i]){const r={};i&1&&(r.width=o[0]),i&22&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){n||(p(e.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),n=!1},d(o){w(e,o)}}}function E(a,e,n){let{$$slots:o={},$$scope:i}=e,{width:r="body"}=e,{variant:s="primary"}=e,{color:t=null}=e;return a.$$set=l=>{"width"in l&&n(0,r=l.width),"variant"in l&&n(1,s=l.variant),"color"in l&&n(2,t=l.color),"$$scope"in l&&n(4,i=l.$$scope)},[r,s,t,o,i]}class H extends _{constructor(e){super(),h(this,e,E,C,k,{width:0,variant:1,color:2})}}H.__docgen={version:3,name:"TextBlock.svelte",data:[{keywords:[{name:"type",description:'import("$lib/Block/Block.svelte").BlockWidth'}],visibility:"public",description:'The width of the text block. Defaults to "body" (max-width: 760px)',name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"body"},{keywords:[{name:"type",description:'{"primary" | "reverse"}'}],visibility:"public",description:'The theme of the text block. Defaults to "primary"',name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"primary" | "reverse"',type:[{kind:"type",text:'"primary"',type:'"primary"'},{kind:"type",text:'"reverse"',type:'"reverse"'}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{String | null} [color = null]"}],visibility:"public",description:"Optional override of variant to specify a color for the text block",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"String | null",type:[{kind:"type",text:"String",type:"String"},{kind:"type",text:"null",type:"null"}]},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"HTML or text content to render inside of the component",name:"default"}],refs:[]};export{H as T};