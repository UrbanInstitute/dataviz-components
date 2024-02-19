import{S as q,i as H,s as C,e as y,p as G,n as T,q as A,v as J,c as _,a as v,m as k,t as D,b as I,d as E}from"./index-fbbcc6cf.js";import{e as V,a as z,j,d as u,E as M,i as b,x as K,s as O,c as P,t as Q,m as U,l as Y,q as Z,A as w}from"./lifecycle-6f47ab4a.js";import{g as R,a as N}from"./spread-8a54911c.js";import{p as x,T as $,S as ee}from"./collect-stories-25b0f495.js";typeof window<"u"&&typeof window.datawrapper>"u"&&(window.datawrapper={});let m={};typeof window<"u"&&(m=window.datawrapper);let f={};typeof window<"u"&&window.addEventListener("message",te,!1);function te(t){t.data&&t.data.source==="datawrapper"&&t.data.chartId&&f[t.data.type]&&f[t.data.type].forEach(function(e){typeof e=="function"&&e(t.data)})}m.on=function(t,e){if(typeof t!="string")throw new Error("event name must be a string");if(typeof e!="function")throw new Error("callback must be a function");return f[t]||(f[t]=[]),f[t].push(e),m};m.one=function(t,e){m.on(t,function i(){e.apply(null,arguments),m.off(t,i)})};m.off=function(t,e){if(f[t]){e||(f[t].length=0);var i=f[t].indexOf(e);return i>-1&&f[t].splice(i,1),m}};const ae=m,re=["bar.click","bar.mouseenter","bar.mouseleave","line.click","line.mouseenter","line.mouseleave","area.click","area.mouseenter","area.mouseleave","tooltip","highlight.set","highlight.clear","column:change","region.click","region.mouseenter","region.mouseleave","symbol.click","symbol.mouseenter","symbol.mouseleave","hash.changed","download","social-sharing.click","embed.modal.open","embed.modal.close","embed.copy","source.click"];function ie(t){let e,i,n,d=[{title:t[0]},{"aria-label":t[1]},{id:i="datawrapper-chart-"+t[2]},{src:n="https://datawrapper.dwcdn.net/"+t[2]},{scrolling:t[3]},{frameborder:t[4]},{style:t[6]},{height:t[5]},{"data-external":"1"},t[7]],a={};for(let r=0;r<d.length;r+=1)a=y(a,d[r]);return{c(){e=V("iframe"),this.h()},l(r){e=z(r,"IFRAME",{title:!0,"aria-label":!0,id:!0,src:!0,scrolling:!0,frameborder:!0,style:!0,height:!0,"data-external":!0}),j(e).forEach(u),this.h()},h(){M(e,a)},m(r,o){b(r,e,o)},p(r,[o]){M(e,a=R(d,[o&1&&{title:r[0]},o&2&&{"aria-label":r[1]},o&4&&i!==(i="datawrapper-chart-"+r[2])&&{id:i},o&4&&!G(e.src,n="https://datawrapper.dwcdn.net/"+r[2])&&{src:n},o&8&&{scrolling:r[3]},o&16&&{frameborder:r[4]},o&64&&{style:r[6]},o&32&&{height:r[5]},{"data-external":"1"},o&128&&r[7]]))},i:T,o:T,d(r){r&&u(e)}}}function ne(t,e,i){const n=["title","ariaLabel","datawrapperId","scrolling","frameborder","height","style"];let d=A(e,n),{title:a}=e,{ariaLabel:r}=e,{datawrapperId:o}=e,{scrolling:s="no"}=e,{frameborder:p="0"}=e,{height:c="500"}=e,{style:S="width: 0; min-width: 100% !important; border: none;"}=e;const W=K();return re.forEach(l=>{ae.on(l,g=>{W(l.replace(".",""),g)})}),typeof window<"u"&&window.addEventListener("message",function(l){if(l.data["datawrapper-height"]!==void 0){var g=document.querySelectorAll("iframe");for(var X in l.data["datawrapper-height"])for(var h=0;h<g.length;h++)if(g[h].contentWindow===l.source){var B=l.data["datawrapper-height"][X]+"px";g[h].style.height=B}}}),t.$$set=l=>{e=y(y({},e),J(l)),i(7,d=A(e,n)),"title"in l&&i(0,a=l.title),"ariaLabel"in l&&i(1,r=l.ariaLabel),"datawrapperId"in l&&i(2,o=l.datawrapperId),"scrolling"in l&&i(3,s=l.scrolling),"frameborder"in l&&i(4,p=l.frameborder),"height"in l&&i(5,c=l.height),"style"in l&&i(6,S=l.style)},[a,r,o,s,p,c,S,d]}class L extends q{constructor(e){super(),H(this,e,ne,ie,C,{title:0,ariaLabel:1,datawrapperId:2,scrolling:3,frameborder:4,height:5,style:6})}}L.__docgen={version:3,name:"DatawrapperIframe.svelte",data:[{keywords:[{name:"type",description:"{string} HTML title of the iframe"}],visibility:"public",description:"*",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string} HTML aria-label of the iframe"}],visibility:"public",description:"*",name:"ariaLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string} Datawrapper chart ID"}],visibility:"public",description:"*",name:"datawrapperId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string} iframe scrolling attribute"}],visibility:"public",description:"*",name:"scrolling",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"no"},{keywords:[{name:"type",description:"{string} iframe frameborder attribute"}],visibility:"public",description:"*",name:"frameborder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"0"},{keywords:[{name:"type",description:"{string} iframe height attribute (placeholder since reactivity is enabled)"}],visibility:"public",description:"*",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"500"},{keywords:[{name:"type",description:"{string} CSS styles of the iframe"}],visibility:"public",description:"*",name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"width: 0; min-width: 100% !important; border: none;"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[]}],slots:[],refs:[]};function se(t){let e,i,n,d,a;const r=[t[7]];let o={};for(let s=0;s<r.length;s+=1)o=y(o,r[s]);return e=new L({props:o}),e.$on("regionclick",t[1]),e.$on("regionmouseenter",t[2]),e.$on("regionmouseleave",t[3]),e.$on("regionclick",t[4]),e.$on("regionmouseenter",t[5]),e.$on("regionmouseleave",t[6]),{c(){_(e.$$.fragment),i=O(),n=V("p"),d=Q(t[0])},l(s){v(e.$$.fragment,s),i=P(s),n=z(s,"P",{});var p=j(n);d=U(p,t[0]),p.forEach(u)},m(s,p){k(e,s,p),b(s,i,p),b(s,n,p),Y(n,d),a=!0},p(s,p){const c=p&128?R(r,[N(s[7])]):{};e.$set(c),(!a||p&1)&&Z(d,s[0])},i(s){a||(D(e.$$.fragment,s),a=!0)},o(s){I(e.$$.fragment,s),a=!1},d(s){s&&(u(i),u(n)),E(e,s)}}}function oe(t){let e,i,n,d;return e=new $({props:{$$slots:{default:[se,({args:a})=>({7:a}),({args:a})=>a?128:0]},$$scope:{ctx:t}}}),n=new ee({props:{name:"Default",args:{title:"This is a title for the visualization",ariaLabel:"This is an accessible title for the visualization",datawrapperId:"RMnkX"}}}),{c(){_(e.$$.fragment),i=O(),_(n.$$.fragment)},l(a){v(e.$$.fragment,a),i=P(a),v(n.$$.fragment,a)},m(a,r){k(e,a,r),b(a,i,r),k(n,a,r),d=!0},p(a,[r]){const o={};r&385&&(o.$$scope={dirty:r,ctx:a}),e.$set(o)},i(a){d||(D(e.$$.fragment,a),D(n.$$.fragment,a),d=!0)},o(a){I(e.$$.fragment,a),I(n.$$.fragment,a),d=!1},d(a){a&&u(i),E(e,a),E(n,a)}}}const le={title:"Components/DatawrapperIframe",description:"Datawrapper iframe",component:L,tags:["autodocs"],parameters:{docs:{description:{component:"Datawrapper iframe with <a href='https://developer.datawrapper.de/docs/listening-to-chart-interaction-events' target='_blank'>event dispatching</a> enabled. All interaction events are accessible via <code>on:eventname</code> (<b>no periods</b>) on the `DatawrapperIframe` Svelte component itself.<br/><br/>The complete event list and associated descriptions can be found <a href='https://developer.datawrapper.de/docs/listening-to-chart-interaction-events#visualization-events' target='_blank'>here</a>."}}}};function de(t,e,i){let n;function d(c){w.call(this,t,c)}function a(c){w.call(this,t,c)}function r(c){w.call(this,t,c)}const o=c=>i(0,n=c.detail.data.fips),s=c=>i(0,n=c.detail.data.fips),p=()=>i(0,n="Hover over a region to change this text");return i(0,n="Hover over a region to change this text"),[n,d,a,r,o,s,p]}class pe extends q{constructor(e){super(),H(this,e,de,oe,C,{})}}const F=x(pe,{meta:{title:"Components/DatawrapperIframe",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<DatawrapperIframe
  {...args}
  on:regionclick
  on:regionmouseenter
  on:regionmouseleave
  on:regionclick={(e) => (test = e.detail.data.fips)}
  on:regionmouseenter={(e) => (test = e.detail.data.fips)}
  on:regionmouseleave={() => (test = "Hover over a region to change this text")}
/>
<p>{test}</p>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},le),ge=F.meta,he=["Default"],ye=F.stories.Default;export{ye as Default,he as __namedExportsOrder,ge as default};
