import{S as T,i as q,s as z,h as D,b as g,j as I,t as v,c as N,a as A,m as B,d as P}from"./index-lamZ5WrB.js";import{e as y,s as O,a as k,b,d as p,c as F,j as d,z as E,i as w,k as h,m as L,t as C,g as R,l as S}from"./lifecycle-BNS46k4e.js";import{L as G}from"./LogoUrbanBadge-CR_0A0tk.js";import{L as H}from"./LogoTPCBadge-Bf8WNJ-3.js";function J(l){let e,n;return e=new H({props:{width:47}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,i){B(e,t,i),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function K(l){let e,n;return e=new G({props:{width:30}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,i){B(e,t,i),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function V(l){let e;function n(a,r){return a[1]?Q:M}let t=n(l),i=t(l);return{c(){i.c(),e=L()},l(a){i.l(a),e=L()},m(a,r){i.m(a,r),w(a,e,r)},p(a,r){t===(t=n(a))&&i?i.p(a,r):(i.d(1),i=t(a),i&&(i.c(),i.m(e.parentNode,e)))},d(a){a&&p(e),i.d(a)}}}function M(l){let e,n;return{c(){e=y("p"),n=C(l[0]),this.h()},l(t){e=k(t,"P",{class:!0});var i=b(e);n=R(i,l[0]),i.forEach(p),this.h()},h(){d(e,"class","nav--page-title svelte-m211ik")},m(t,i){w(t,e,i),h(e,n)},p(t,i){i&1&&S(n,t[0])},d(t){t&&p(e)}}}function Q(l){let e,n,t,i;return{c(){e=y("a"),n=y("p"),t=C(l[0]),this.h()},l(a){e=k(a,"A",{href:!0,class:!0});var r=b(e);n=k(r,"P",{class:!0});var c=b(n);t=R(c,l[0]),c.forEach(p),r.forEach(p),this.h()},h(){d(n,"class","nav--page-title svelte-m211ik"),d(e,"href",i=l[1]+"/"),d(e,"class","svelte-m211ik")},m(a,r){w(a,e,r),h(e,n),h(n,t)},p(a,r){r&1&&S(t,a[0]),r&2&&i!==(i=a[1]+"/")&&d(e,"href",i)},d(a){a&&p(e)}}}function W(l){let e,n,t,i,a,r,c;const f=[K,J],m=[];function U(s,u){return s[2]==="urban"?0:s[2]==="tpc"?1:-1}~(i=U(l))&&(a=m[i]=f[i](l));let o=l[0]&&V(l);return{c(){e=y("nav"),n=y("div"),t=y("a"),a&&a.c(),r=O(),o&&o.c(),this.h()},l(s){e=k(s,"NAV",{class:!0});var u=b(e);n=k(u,"DIV",{class:!0});var _=b(n);t=k(_,"A",{href:!0,class:!0});var j=b(t);a&&a.l(j),j.forEach(p),_.forEach(p),r=F(u),o&&o.l(u),u.forEach(p),this.h()},h(){d(t,"href",l[4]),d(t,"class","svelte-m211ik"),d(n,"class","logo svelte-m211ik"),d(e,"class","svelte-m211ik"),E(e,"sticky",l[3])},m(s,u){w(s,e,u),h(e,n),h(n,t),~i&&m[i].m(t,null),h(e,r),o&&o.m(e,null),c=!0},p(s,[u]){let _=i;i=U(s),i!==_&&(a&&(D(),g(m[_],1,1,()=>{m[_]=null}),I()),~i?(a=m[i],a||(a=m[i]=f[i](s),a.c()),v(a,1),a.m(t,null)):a=null),(!c||u&16)&&d(t,"href",s[4]),s[0]?o?o.p(s,u):(o=V(s),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!c||u&8)&&E(e,"sticky",s[3])},i(s){c||(v(a),c=!0)},o(s){g(a),c=!1},d(s){s&&p(e),~i&&m[i].d(),o&&o.d()}}}function X(l,e,n){let t,{title:i=""}=e,{projectUrl:a=""}=e,{brand:r="urban"}=e,{sticky:c=!1}=e;return l.$$set=f=>{"title"in f&&n(0,i=f.title),"projectUrl"in f&&n(1,a=f.projectUrl),"brand"in f&&n(2,r=f.brand),"sticky"in f&&n(3,c=f.sticky)},l.$$.update=()=>{l.$$.dirty&4&&n(4,t=r=="tpc"?"https://www.taxpolicycenter.org":"https://www.urban.org")},[i,a,r,c,t]}class Y extends T{constructor(e){super(),q(this,e,X,W,z,{title:0,projectUrl:1,brand:2,sticky:3})}}Y.__docgen={version:3,name:"Navbar.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Title to display in the navbar",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"URL to link to from the title",name:"projectUrl",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:'{"urban" | "tpc"}'}],visibility:"public",description:"Brand to use for the logo",name:"brand",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"urban" | "tpc"',type:[{kind:"type",text:'"urban"',type:'"urban"'},{kind:"type",text:'"tpc"',type:'"tpc"'}]},defaultValue:"urban"},{keywords:[{name:"type",description:"{boolean} [sticky=false]"}],visibility:"public",description:"Option to make the navbar sticky",name:"sticky",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{Y as N};
