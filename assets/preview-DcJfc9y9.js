import{v as D}from"./v4-CQkTLCs1.js";import{v as T,x as b,y as x}from"./lifecycle-BNS46k4e.js";const{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,{global:w}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var k="storybook/actions",V=`${k}/action-event`,B={depth:10,clearOnStoryChange:!0,limit:50},L=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:L(t,n)},C=e=>!!(typeof e=="object"&&e&&L(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),N=e=>{if(C(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?D():Date.now().toString(36)+Math.random().toString(36).substring(2);function A(e,n={}){let t={...B,...n},r=function(...g){var v,i;if(n.implicit){let c=(v="__STORYBOOK_PREVIEW__"in w?w.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(o=>o.phase==="playing"||o.phase==="rendering");if(c){let o=!((i=window==null?void 0:window.FEATURES)!=null&&i.disallowImplicitActionsInRenderV8),s=new j({phase:c.phase,name:e,deprecated:o});if(o)console.warn(s);else throw s}}let f=I.getChannel(),u=F(),_=5,d=g.map(N),O=g.length>1?d:d[0],m={id:u,count:0,data:{name:e,args:O},options:{...t,maxDepth:_+(t.depth||3),allowFunction:t.allowFunction||!1}};f.emit(V,m)};return r.isAction=!0,r.implicit=n.implicit,r}function M(e){b("after-navigate-args",e)}function y(e){return[{subscribe(n){let t=x(e);return n(t),()=>{}}},n=>{b(e,n)}]}var[G,P]=y("page-ctx"),[q,U]=y("navigating-ctx"),[W,Y]=y("updated-ctx");W.check=()=>{};var z=e=>typeof e=="function"?{callback:e,asRegex:!1}:e,J=[(e,n)=>{var r,g,f,u,_;let t=((r=n.parameters)==null?void 0:r.sveltekit_experimental)??{};return P((g=t==null?void 0:t.stores)==null?void 0:g.page),U((f=t==null?void 0:t.stores)==null?void 0:f.navigating),Y((u=t==null?void 0:t.stores)==null?void 0:u.updated),M((_=t==null?void 0:t.navigation)==null?void 0:_.afterNavigate),T(()=>{let d=i=>{let c=i.composedPath().findLast(o=>o instanceof HTMLElement&&o.tagName==="A");if(c&&c instanceof HTMLAnchorElement){let o=c.getAttribute("href");if(!o)return;i.preventDefault();let s=()=>A("navigate")(o,i);if(!t.hrefs){s();return}let a=!0;Object.entries(t.hrefs).forEach(([l,E])=>{let{callback:p,asRegex:h}=z(E);(h?new RegExp(l).test(o):o===l)&&(a=!1,p==null||p(o,i))}),a&&s()}};function O(i,c,o){let s=[];return c.forEach(a=>{var E;let l=((E=t[i])==null?void 0:E[a])&&t[i][a]instanceof Function;if(l||o){let p=({detail:R=[]})=>{let S=Array.isArray(R)?R:[];(l?t[i][a]:A(a))(...S)},h=`storybook:${a}`;s.push({eventType:h,listener:p}),window.addEventListener(h,p)}}),()=>{s.forEach(({eventType:a,listener:l})=>{window.removeEventListener(a,l)})}}let m=O("navigation",["goto","invalidate","invalidateAll","pushState","replaceState"],!0),v=O("forms",["enhance"]);return window.addEventListener("click",d),()=>{window.removeEventListener("click",d),m(),v()}}),e()}];export{J as decorators};
