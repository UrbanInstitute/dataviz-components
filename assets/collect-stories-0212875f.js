import{n as X,s as S,S as O,i as E,e as C,w,t as m,k as P,b as _,l as Y,v as $,p as he,x as M,f as ie,u as ae,g as ce,h as le,c as L,a as fe,m as D,d as F,o as Ce}from"./index-35729bac.js";import{n as Q,K as ue,p as de,y as b,i as G,d as U,D as K}from"./lifecycle-6f47ab4a.js";const h=[];function ee(s,e=X){let o;const t=new Set;function n(c){if(S(s,c)&&(s=c,o)){const f=!h.length;for(const a of t)a[1](),h.push(a,s);if(f){for(let a=0;a<h.length;a+=2)h[a][0](h[a+1]);h.length=0}}}function r(c){n(c(s))}function i(c,f=X){const a=[c,f];return t.add(a),t.size===1&&(o=e(n,r)||X),c(s),()=>{t.delete(a),t.size===0&&o&&(o(),o=null)}}return{set:n,update:r,subscribe:i}}const A="storybook-registration-context",J="storybook-registration-context-component";function me(s={}){Q(A,{render:!0,register:()=>{},meta:{},args:{},...s}),pe()}function Se(s){Q(A,{render:!1,register:e=>{s.stories.push(e)},set meta(e){s.meta=e},args:{}})}function Z(){return ue(A)||me(),de(A)}function pe(){Q(J,{argsStore:ee({}),storyContextStore:ee({})})}function H(){return ue(J)||pe(),de(J)}function we(s,e){const o=H();o.argsStore.set(s),o.storyContextStore.set(e)}function Oe(s,e,o){return Z().meta=e,s.$$set=t=>{o(0,e=C(C({},e),w(t)))},e=w(e),[]}class Ee extends O{constructor(e){super(),E(this,e,Oe,null,S,{})}}Ee.__docgen={version:3,name:"Meta.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Te=s=>s&2,Ne=s=>({context:s&4,args:s&2}),te=s=>({...s[1],context:s[2],args:s[1]});function ne(s){let e;const o=s[8].default,t=ie(o,s,s[7],te);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,r){t&&t.m(n,r),e=!0},p(n,r){t&&t.p&&(!e||r&134)&&ae(t,o,n,n[7],Te(r)||!e?ce(n[7]):le(o,n[7],r,Ne),te)},i(n){e||(m(t,n),e=!0)},o(n){_(t,n),e=!1},d(n){t&&t.d(n)}}}function Re(s){let e,o,t=s[0]&&ne(s);return{c(){t&&t.c(),e=b()},l(n){t&&t.l(n),e=b()},m(n,r){t&&t.m(n,r),G(n,e,r),o=!0},p(n,[r]){n[0]?t?(t.p(n,r),r&1&&m(t,1)):(t=ne(n),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(P(),_(t,1,1,()=>{t=null}),Y())},i(n){o||(m(t),o=!0)},o(n){_(t),o=!1},d(n){n&&U(e),t&&t.d(n)}}}function ve(s,e,o){let t;const n=["name","template"];let r=$(e,n),i,c,{$$slots:f={},$$scope:a}=e;const d=he(f),y=Z();let{name:p}=e,{template:l=null}=e;if(!p)throw new Error("Missing Story name");y.register({name:p,...r,template:l??(d.default?null:"default")});const x=H(),q=x.argsStore;M(s,q,u=>o(1,i=u));const k=x.storyContextStore;return M(s,k,u=>o(2,c=u)),s.$$set=u=>{e=C(C({},e),w(u)),o(12,r=$(e,n)),"name"in u&&o(5,p=u.name),"template"in u&&o(6,l=u.template),"$$scope"in u&&o(7,a=u.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&o(0,t=y.render&&!y.templateName&&y.storyName==p)},[t,i,c,q,k,p,l,a,f]}class Ie extends O{constructor(e){super(),E(this,e,ve,Re,S,{name:5,template:6})}}Ie.__docgen={version:3,name:"Story.svelte",data:[{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"template",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};const je=s=>s&2,Me=s=>({context:s&4,args:s&2}),se=s=>({...s[1],context:s[2],args:s[1]});function oe(s){let e;const o=s[7].default,t=ie(o,s,s[6],se);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,r){t&&t.m(n,r),e=!0},p(n,r){t&&t.p&&(!e||r&70)&&ae(t,o,n,n[6],je(r)||!e?ce(n[6]):le(o,n[6],r,Me),se)},i(n){e||(m(t,n),e=!0)},o(n){_(t,n),e=!1},d(n){t&&t.d(n)}}}function Le(s){let e,o,t=s[0]&&oe(s);return{c(){t&&t.c(),e=b()},l(n){t&&t.l(n),e=b()},m(n,r){t&&t.m(n,r),G(n,e,r),o=!0},p(n,[r]){n[0]?t?(t.p(n,r),r&1&&m(t,1)):(t=oe(n),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(P(),_(t,1,1,()=>{t=null}),Y())},i(n){o||(m(t),o=!0)},o(n){_(t),o=!1},d(n){n&&U(e),t&&t.d(n)}}}function De(s,e,o){let t,n,r,{$$slots:i={},$$scope:c}=e;const f=Z();let{id:a="default"}=e;f.register({id:a,isTemplate:!0});const d=H(),y=d.argsStore;M(s,y,l=>o(1,n=l));const p=d.storyContextStore;return M(s,p,l=>o(2,r=l)),s.$$set=l=>{"id"in l&&o(5,a=l.id),"$$scope"in l&&o(6,c=l.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&o(0,t=f.render&&f.templateId===a)},[t,n,r,y,p,a,c,i]}class Fe extends O{constructor(e){super(),E(this,e,De,Le,S,{id:5})}}Fe.__docgen={version:3,name:"Template.svelte",data:[{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"default"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};var re;(re=module==null?void 0:module.hot)!=null&&re.decline&&module.hot.decline();function Ke(s){let e,o,t;var n=s[0];function r(i,c){return{}}return n&&(e=K(n,r())),{c(){e&&L(e.$$.fragment),o=b()},l(i){e&&fe(e.$$.fragment,i),o=b()},m(i,c){e&&D(e,i,c),G(i,o,c),t=!0},p(i,[c]){if(c&1&&n!==(n=i[0])){if(e){P();const f=e;_(f.$$.fragment,1,0,()=>{F(f,1)}),Y()}n?(e=K(n,r()),L(e.$$.fragment),m(e.$$.fragment,1),D(e,o.parentNode,o)):e=null}},i(i){t||(e&&m(e.$$.fragment,i),t=!0)},o(i){e&&_(e.$$.fragment,i),t=!1},d(i){i&&U(o),e&&F(e,i)}}}function Ae(s,e,o){let{Stories:t}=e,{repositories:n}=e;return Se(n),s.$$set=r=>{"Stories"in r&&o(0,t=r.Stories),"repositories"in r&&o(1,n=r.repositories)},[t,n]}class ye extends O{constructor(e){super(),E(this,e,Ae,Ke,S,{Stories:0,repositories:1})}}ye.__docgen={version:3,name:"RegisterContext.svelte",data:[{visibility:"public",description:null,keywords:[],name:"Stories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"repositories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Pe(s){let e,o,t;var n=s[0];function r(i,c){return{props:{}}}return n&&(e=K(n,r()),s[4](e)),{c(){e&&L(e.$$.fragment),o=b()},l(i){e&&fe(e.$$.fragment,i),o=b()},m(i,c){e&&D(e,i,c),G(i,o,c),t=!0},p(i,[c]){if(c&1&&n!==(n=i[0])){if(e){P();const f=e;_(f.$$.fragment,1,0,()=>{F(f,1)}),Y()}n?(e=K(n,r()),i[4](e),L(e.$$.fragment),m(e.$$.fragment,1),D(e,o.parentNode,o)):e=null}else if(n){const f={};e.$set(f)}},i(i){t||(e&&m(e.$$.fragment,i),t=!0)},o(i){e&&_(e.$$.fragment,i),t=!1},d(i){i&&U(o),s[4](null),e&&F(e,i)}}}function Ye(s,e,o){let{Stories:t}=e,{args:n={}}=e,{storyContext:r={}}=e,i;me(e);const c=Object.fromEntries(Object.entries(r.argTypes).filter(([a,d])=>d.action&&n[a]!=null).map(([a,d])=>[d.action,n[a]]));function f(a){Ce[a?"unshift":"push"](()=>{i=a,o(1,i)})}return s.$$set=a=>{o(6,e=C(C({},e),w(a))),"Stories"in a&&o(0,t=a.Stories),"args"in a&&o(2,n=a.args),"storyContext"in a&&o(3,r=a.storyContext)},s.$$.update=()=>{s.$$.dirty&12&&we(n,r),s.$$.dirty&2&&i&&Object.entries(c).forEach(([a,d])=>i.$on(a,d))},e=w(e),[t,i,n,r,f]}class _e extends O{constructor(e){super(),E(this,e,Ye,Pe,S,{Stories:0,args:2,storyContext:3})}}_e.__docgen={version:3,name:"RenderContext.svelte",data:[{visibility:"public",description:null,keywords:[],name:"Stories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"args",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"storyContext",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}}],computed:[],methods:[],components:[],description:"@component",keywords:[{name:"component",description:""},{name:"wrapper",description:""}],events:[],slots:[],refs:[]};const{logger:Ge}=__STORYBOOK_MODULE_CLIENT_LOGGER__;function Ue(s){const e=s.split("").reduce((o,t)=>(o<<5)-o+t.charCodeAt(0)|0,0);return Math.abs(e).toString(16)}function qe({id:s,name:e},o=[]){if(s)return s;if(!e)throw new Error("Id or Name should be specified");let t=e.replace(/\W+(.|$)/g,(n,r)=>r.toUpperCase());return o.indexOf(t)>=0&&(Ge.warn(`Story name conflict with exports - Please add an explicit id for story ${e}`),t+=Ue(e)),t}const{combineParameters:j}=__STORYBOOK_MODULE_CLIENT_API__,{logger:W}=__STORYBOOK_MODULE_CLIENT_LOGGER__,Be=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Xe=(s,{stories:e={},meta:o={},allocatedIds:t=[]},n=void 0)=>{var d,y,p;const r={meta:null,stories:[]};try{new ye({target:Be(),props:{Stories:s,repositories:r}}).$destroy()}catch(l){W.error(`Error extracting stories ${l.toString()}`,l)}const i=n||r.meta;if(!i)return W.error("Missing module meta export or <Meta/> tag"),{};o.description&&!((p=(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.description)!=null&&p.component)&&(i.parameters=j(i.parameters,{docs:{description:{component:o.description}}}));const{component:c}=i,f=r.stories.filter(l=>l.isTemplate).map(l=>l.id),a=f.filter((l,x)=>f.indexOf(l)!==x);return a.length>0&&W.warn(`Found duplicates templates id for stories '${i.name}': ${a}`),{meta:i,stories:r.stories.filter(l=>!l.isTemplate).reduce((l,x)=>{const{id:q,name:k,template:u,component:ge,source:T=!1,...be}=x,N=qe(x,t);if(!N)return l;const xe=u!=null&&f.indexOf(u)<0,g=(z,V)=>{if(xe)throw new Error(`Story ${k} is referencing an unknown template ${u}`);return{Component:_e,props:{Stories:s,storyName:k,templateId:u,args:z,storyContext:V,sourceComponent:ge||c}}};g.storyName=k,Object.entries(be).forEach(([z,V])=>{g[z]=V});const R=e[u?`tpl:${u}`:N],ke=R?R.hasArgs:!0,B=R?R.source:null;B&&(g.parameters=j(g.parameters||{},{storySource:{source:B}}));let v;T===!0||T===!1&&!ke?v=B:typeof T=="string"&&(v=T),v&&(g.parameters=j(g.parameters||{},{docs:{source:{code:v}}}));const I=e[N];return I!=null&&I.description&&(g.parameters=j(g.parameters||{},{docs:{description:{story:I.description}}})),l[N]=g,l},{})}};export{Ie as S,Fe as T,Xe as p};
