import{p as y,g as p,z as v,d as m,A as s,s as i,a as n,y as _,b as o,f as r}from"./iframe-BjxEKEQH.js";import{h}from"./svelte-head-CaadU4Xw.js";var b=s(r(`<script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T");
    <\/script><!>`,1)),k=s(r(`<script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T", {
        send_page_view: false
      });
    <\/script><!>`,1)),A=s(r('<script async src="https://www.googletagmanager.com/gtag/js?id=G-N0EZ8ZMM8T"><\/script> <!>',1));function G(M,a){y(a,!0);let d=p(a,"sendPageview",3,!0),l=p(a,"mode",3,"production");v(()=>{typeof window>"u"||(window.ui_dataviz_config=window.ui_dataviz_config||{},window.ui_dataviz_config.analytics_title=a.title,window.ui_dataviz_config.analytics_mode=l(),l()=="development"&&console.log(d()?"You are sending page views to GA, as for a full page app.":"You are not sending page views to GA, as for an iframe embed."))}),h(w=>{var g=A(),c=i(n(g),2);{var f=e=>{var t=b();i(n(t)),o(e,t)},u=e=>{var t=k();i(n(t)),o(e,t)};_(c,e=>{d()?e(f):e(u,!1)})}o(w,g)}),m()}G.__docgen={data:[{name:"title",visibility:"public",description:"A descriptive, unique title for your project. Used to collect events within GA.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"sendPageview",visibility:"public",description:"Set to false to skip initial pageview. Useful for projects that are primarily embedded on pages with their own analytics.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"mode",visibility:"public",description:'If set to "development", logClickToGA will print debugging info rather than sending events to GA. Set to "production" to send actual events.',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"production"'}],name:"Analytics.svelte"};export{G as A};
