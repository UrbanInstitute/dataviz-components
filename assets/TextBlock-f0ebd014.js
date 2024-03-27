import{S as y,i as _,s as h,c as k,a as v,m as b,t as p,b as m,d as g,f as w,u as B,g as T,h as x}from"./index-e3b48b1c.js";import{e as S,a as V,f as z,d,o as c,x as f,b as u,i as D}from"./lifecycle-6e31b59c.js";import{B as $}from"./Block-814cd1a8.js";function q(a){let e,n,o,s;const r=a[3].default,i=w(r,a,a[4],null);return{c(){e=S("p"),i&&i.c(),this.h()},l(t){e=V(t,"P",{class:!0,style:!0});var l=z(e);i&&i.l(l),l.forEach(d),this.h()},h(){c(e,"class",n="text-block "+a[1]+" svelte-1msozc0"),c(e,"style",o=`--color-override: ${a[2]}`),f(e,"color-override",a[2]),u(e,"color",a[2])},m(t,l){D(t,e,l),i&&i.m(e,null),s=!0},p(t,l){i&&i.p&&(!s||l&16)&&B(i,r,t,t[4],s?x(r,t[4],l,null):T(t[4]),null),(!s||l&2&&n!==(n="text-block "+t[1]+" svelte-1msozc0"))&&c(e,"class",n),(!s||l&4&&o!==(o=`--color-override: ${t[2]}`))&&c(e,"style",o),(!s||l&6)&&f(e,"color-override",t[2]),l&4&&u(e,"color",t[2])},i(t){s||(p(i,t),s=!0)},o(t){m(i,t),s=!1},d(t){t&&d(e),i&&i.d(t)}}}function C(a){let e,n;return e=new $({props:{width:a[0],$$slots:{default:[q]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,s){b(e,o,s),n=!0},p(o,[s]){const r={};s&1&&(r.width=o[0]),s&22&&(r.$$scope={dirty:s,ctx:o}),e.$set(r)},i(o){n||(p(e.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),n=!1},d(o){g(e,o)}}}function E(a,e,n){let{$$slots:o={},$$scope:s}=e,{width:r="body"}=e,{variant:i="primary"}=e,{color:t=null}=e;return a.$$set=l=>{"width"in l&&n(0,r=l.width),"variant"in l&&n(1,i=l.variant),"color"in l&&n(2,t=l.color),"$$scope"in l&&n(4,s=l.$$scope)},[r,i,t,o,s]}class H extends y{constructor(e){super(),_(this,e,E,C,h,{width:0,variant:1,color:2})}}H.__docgen={version:3,name:"TextBlock.svelte",data:[{keywords:[{name:"type",description:'import("$lib/Block/Block.svelte").BlockWidth'}],visibility:"public",description:'The width of the text block. Defaults to "body" (max-width: 760px)',name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"body"},{keywords:[{name:"type",description:'{"primary" | "reverse"}'}],visibility:"public",description:'The theme of the text block. Defaults to "primary"',name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"primary" | "reverse"',type:[{kind:"type",text:'"primary"',type:'"primary"'},{kind:"type",text:'"reverse"',type:'"reverse"'}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{String | null} [color = null]"}],visibility:"public",description:"Optional override of variant to specify a color for the text block",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"String | null",type:[{kind:"type",text:"String",type:"String"},{kind:"type",text:"null",type:"null"}]},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"HTML or text content to render inside of the component",name:"default"}],refs:[]};export{H as T};
