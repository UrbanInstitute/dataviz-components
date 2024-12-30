import{S as N,i as P,s as T,q as C,u as z,v as B,w as E,t as y,h as W,b as _,j as L,r as O,x as U,e as F}from"./index-Dy1J9qof.js";import{e as S,s as G,a as V,b as D,c as H,d as m,j as b,i as h,k as J,v as k,A as K,y as Q,t as R,g as X}from"./lifecycle-mCW1c9RL.js";const Y=t=>({iconColor:t&16}),g=t=>({iconColor:t[4]});function Z(t){let e;return{c(){e=R("Default button text")},l(s){e=X(s,"Default button text")},m(s,c){h(s,e,c)},d(s){s&&m(e)}}}function w(t){let e,s;const c=t[10].icon,a=C(c,t,t[9],g);return{c(){e=S("span"),a&&a.c(),this.h()},l(l){e=V(l,"SPAN",{class:!0});var d=D(e);a&&a.l(d),d.forEach(m),this.h()},h(){b(e,"class","button-icon svelte-uwvsn3")},m(l,d){h(l,e,d),a&&a.m(e,null),s=!0},p(l,d){a&&a.p&&(!s||d&528)&&z(a,c,l,l[9],s?E(c,l[9],d,Y):B(l[9]),g)},i(l){s||(y(a,l),s=!0)},o(l){_(a,l),s=!1},d(l){l&&m(e),a&&a.d(l)}}}function x(t){let e,s,c,a,l,d;const f=t[10].default,p=C(f,t,t[9],null),u=p||Z();let n=t[7].icon&&w(t);return{c(){e=S("button"),u&&u.c(),s=G(),n&&n.c(),this.h()},l(i){e=V(i,"BUTTON",{class:!0,"aria-disabled":!0});var r=D(e);u&&u.l(r),s=H(r),n&&n.l(r),r.forEach(m),this.h()},h(){b(e,"class",c="variant-"+t[0]+" size-"+t[1]+" svelte-uwvsn3"),e.disabled=t[2],b(e,"aria-disabled",t[2])},m(i,r){h(i,e,r),u&&u.m(e,null),J(e,s),n&&n.m(e,null),t[12](e),a=!0,l||(d=[k(e,"click",t[11]),k(e,"mouseenter",t[5]),k(e,"mouseleave",t[6])],l=!0)},p(i,[r]){p&&p.p&&(!a||r&512)&&z(p,f,i,i[9],a?E(f,i[9],r,null):B(i[9]),null),i[7].icon?n?(n.p(i,r),r&128&&y(n,1)):(n=w(i),n.c(),y(n,1),n.m(e,null)):n&&(W(),_(n,1,1,()=>{n=null}),L()),(!a||r&3&&c!==(c="variant-"+i[0]+" size-"+i[1]+" svelte-uwvsn3"))&&b(e,"class",c),(!a||r&4)&&(e.disabled=i[2]),(!a||r&4)&&b(e,"aria-disabled",i[2])},i(i){a||(y(u,i),y(n),a=!0)},o(i){_(u,i),_(n),a=!1},d(i){i&&m(e),u&&u.d(i),n&&n.d(),t[12](null),l=!1,O(d)}}}function $(t,e,s){let c,{$$slots:a={},$$scope:l}=e;const d=U(a);let{variant:f="primary"}=e,{size:p="standard"}=e,{disabled:u=!1}=e,n,i=!1,r=K();function j(o,te,v){return v?getComputedStyle(v).getPropertyValue("--button-color"):void 0}function q(o){s(8,i=!0),r("mouseenter",o)}function A(o){s(8,i=!1),r("mouseleave",o)}function I(o){Q.call(this,t,o)}function M(o){F[o?"unshift":"push"](()=>{n=o,s(3,n)})}return t.$$set=o=>{"variant"in o&&s(0,f=o.variant),"size"in o&&s(1,p=o.size),"disabled"in o&&s(2,u=o.disabled),"$$scope"in o&&s(9,l=o.$$scope)},t.$$.update=()=>{t.$$.dirty&265&&s(4,c=j(f,i,n))},[f,p,u,n,c,q,A,d,i,l,a,I,M]}class ee extends N{constructor(e){super(),P(this,e,$,x,T,{variant:0,size:1,disabled:2})}}ee.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"type",description:'{"primary" | "primary-black" | "secondary" | "secondary-black" | "tertiary"}'}],visibility:"public",description:"Which variant of button to use",name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"primary" | "primary-black" | "secondary" | "secondary-black" | "tertiary"',type:[{kind:"type",text:'"primary"',type:'"primary"'},{kind:"type",text:'"primary-black"',type:'"primary-black"'},{kind:"type",text:'"secondary"',type:'"secondary"'},{kind:"type",text:'"secondary-black"',type:'"secondary-black"'},{kind:"type",text:'"tertiary"',type:'"tertiary"'}]},defaultValue:"primary"},{keywords:[{name:"type",description:'{"standard" | "small" }'}],visibility:"public",description:"Which size of button to use",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"standard" | "small"',type:[{kind:"type",text:'"standard"',type:'"standard"'},{kind:"type",text:'"small"',type:'"small"'}]},defaultValue:"standard"},{keywords:[{name:"type",description:"{ boolean }"}],visibility:"public",description:"Is the button disabled?",name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"mouseenter"},{visibility:"public",description:null,keywords:[],name:"mouseleave"},{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[{keywords:[],visibility:"public",description:"",name:"default"},{keywords:[],visibility:"public",description:"",name:"icon",params:[{name:"{iconColor}",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{iconColor}",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};export{ee as B};