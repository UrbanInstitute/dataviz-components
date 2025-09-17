import{p as m,i as a,C as v,d as _,D as r,s as n,a as o,B as h,b as s,f as d}from"./iframe-DkBoYltS.js";import{h as b}from"./svelte-head-B3BBJNu2.js";import{i as k}from"./lifecycle-BcE5ET0k.js";var A=r(d(`<script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T");
    <\/script><!>`,1)),G=r(d(`<script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T", {
        send_page_view: false
      });
    <\/script><!>`,1)),M=r(d('<script async src="https://www.googletagmanager.com/gtag/js?id=G-N0EZ8ZMM8T"><\/script> <!>',1));function L(Z,i){m(i,!1);let c=a(i,"title",8),l=a(i,"sendPageview",8,!0),g=a(i,"mode",8,"production");v(()=>{window.ui_dataviz_config=window.ui_dataviz_config||{},window.ui_dataviz_config.analytics_title=c(),window.ui_dataviz_config.analytics_mode=g(),g()=="development"&&console.log(l()?"You are sending page views to GA, as for a full page app.":"You are not sending page views to GA, as for an iframe embed.")}),k(),b(w=>{var p=M(),f=n(o(p),2);{var u=e=>{var t=A();n(o(t)),s(e,t)},y=e=>{var t=G();n(o(t)),s(e,t)};h(f,e=>{l()?e(u):e(y,!1)})}s(w,p)}),_()}L.__docgen={data:[{name:"title",visibility:"public",description:"A descriptive title for your project. Used to collect events within GA.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"sendPageview",visibility:"public",description:`Set to false to skip initial pageview. Useful for projects that are primarily embedded on pages with their own analytics.
[true]`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"mode",visibility:"public",description:`If set to "development", logClickToGA will print debugging info rather than sending events to GA. Set to "production" to send actual events.
["production"]`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"production"'}],name:"Analytics.svelte"};export{L as A};
