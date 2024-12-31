import{S,i as C,s as M,o as m,p as V,n as w,B as k,C as q}from"./index-Dy1J9qof.js";import{e as A,a as B,b as H,d as v,C as E,i as T,A as F,B as O,D as P}from"./lifecycle-mCW1c9RL.js";import{g as R}from"./spread-CgU5AtxT.js";typeof window<"u"&&typeof window.datawrapper>"u"&&(window.datawrapper={});let l={};typeof window<"u"&&(l=window.datawrapper);let s={};typeof window<"u"&&window.addEventListener("message",U,!1);function U(t){t.data&&t.data.source==="datawrapper"&&t.data.chartId&&s[t.data.type]&&s[t.data.type].forEach(function(e){typeof e=="function"&&e(t.data)})}l.on=function(t,e){if(typeof t!="string")throw new Error("event name must be a string");if(typeof e!="function")throw new Error("callback must be a function");return s[t]||(s[t]=[]),s[t].push(e),l};l.one=function(t,e){l.on(t,function r(){e.apply(null,arguments),l.off(t,r)})};l.off=function(t,e){if(s[t]){e||(s[t].length=0);var r=s[t].indexOf(e);return r>-1&&s[t].splice(r,1),l}};const I=l,L=["bar.click","bar.mouseenter","bar.mouseleave","line.click","line.mouseenter","line.mouseleave","area.click","area.mouseenter","area.mouseleave","tooltip","highlight.set","highlight.clear","column:change","region.click","region.mouseenter","region.mouseleave","symbol.click","symbol.mouseenter","symbol.mouseleave","hash.changed","download","social-sharing.click","embed.modal.open","embed.modal.close","embed.copy","source.click","vis.rendered"];function W(t){let e,r,d,f=[{title:t[0]},{"aria-label":t[1]},{id:r="datawrapper-chart-"+t[2]},{src:d="https://datawrapper.dwcdn.net/"+t[2]},{scrolling:t[3]},{frameborder:t[4]},{style:t[6]},{height:t[5]},{"data-external":"1"},t[7]],o={};for(let a=0;a<f.length;a+=1)o=m(o,f[a]);return{c(){e=A("iframe"),this.h()},l(a){e=B(a,"IFRAME",{title:!0,"aria-label":!0,id:!0,src:!0,scrolling:!0,frameborder:!0,style:!0,height:!0,"data-external":!0}),H(e).forEach(v),this.h()},h(){E(e,o)},m(a,n){T(a,e,n)},p(a,[n]){E(e,o=R(f,[n&1&&{title:a[0]},n&2&&{"aria-label":a[1]},n&4&&r!==(r="datawrapper-chart-"+a[2])&&{id:r},n&4&&!V(e.src,d="https://datawrapper.dwcdn.net/"+a[2])&&{src:d},n&8&&{scrolling:a[3]},n&16&&{frameborder:a[4]},n&64&&{style:a[6]},n&32&&{height:a[5]},{"data-external":"1"},n&128&&a[7]]))},i:w,o:w,d(a){a&&v(e)}}}function j(t,e,r){const d=["title","ariaLabel","datawrapperId","scrolling","frameborder","height","style"];let f=k(e,d),{title:o}=e,{ariaLabel:a}=e,{datawrapperId:n}=e,{scrolling:u="no"}=e,{frameborder:y="0"}=e,{height:h="500"}=e,{style:g="width: 0; min-width: 100% !important; border: none;"}=e;const b=F();return L.forEach(i=>{I.on(i,c=>{b(i.replace(".",""),c)})}),typeof window<"u"&&window.addEventListener("message",function(i){if(i.data["datawrapper-height"]!==void 0){var c=document.querySelectorAll("iframe");for(var _ in i.data["datawrapper-height"])for(var p=0;p<c.length;p++)if(c[p].contentWindow===i.source){var D=i.data["datawrapper-height"][_]+"px";c[p].style.height=D}}}),O(()=>{b("startrender")}),P(()=>{typeof window<"u"&&L.forEach(i=>{I.off(i)})}),t.$$set=i=>{e=m(m({},e),q(i)),r(7,f=k(e,d)),"title"in i&&r(0,o=i.title),"ariaLabel"in i&&r(1,a=i.ariaLabel),"datawrapperId"in i&&r(2,n=i.datawrapperId),"scrolling"in i&&r(3,u=i.scrolling),"frameborder"in i&&r(4,y=i.frameborder),"height"in i&&r(5,h=i.height),"style"in i&&r(6,g=i.style)},[o,a,n,u,y,h,g,f]}class z extends S{constructor(e){super(),C(this,e,j,W,M,{title:0,ariaLabel:1,datawrapperId:2,scrolling:3,frameborder:4,height:5,style:6})}}z.__docgen={version:3,name:"DatawrapperIframe.svelte",data:[{keywords:[{name:"type",description:"{string} HTML title of the iframe"}],visibility:"public",description:"*",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string} HTML aria-label of the iframe"}],visibility:"public",description:"*",name:"ariaLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string} Datawrapper chart ID"}],visibility:"public",description:"*",name:"datawrapperId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string} iframe scrolling attribute"}],visibility:"public",description:"*",name:"scrolling",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"no"},{keywords:[{name:"type",description:"{string} iframe frameborder attribute"}],visibility:"public",description:"*",name:"frameborder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"0"},{keywords:[{name:"type",description:"{string} iframe height attribute (placeholder since reactivity is enabled)"}],visibility:"public",description:"*",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"500"},{keywords:[{name:"type",description:"{string} CSS styles of the iframe"}],visibility:"public",description:"*",name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"width: 0; min-width: 100% !important; border: none;"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[]},{visibility:"public",description:null,keywords:[],name:"startrender"}],slots:[],refs:[]};export{z as D};