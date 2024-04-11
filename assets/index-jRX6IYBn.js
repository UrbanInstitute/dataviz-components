var R=Object.defineProperty;var z=(t,n,e)=>n in t?R(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var x=(t,n,e)=>(z(t,typeof n!="symbol"?n+"":n,e),e);import{G as h,I as V,k as B,d as G,J,K}from"./lifecycle-DGPdAwEn.js";function m(){}function L(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function I(){return Object.create(null)}function g(t){t.forEach(C)}function M(t){return typeof t=="function"}function et(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let y;function rt(t,n){return t===n?!0:(y||(y=document.createElement("a")),y.href=n,t===y.href)}function U(t){return Object.keys(t).length===0}function A(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(A(n,e))}function ot(t,n,e,r){if(t){const s=N(t,n,e,r);return t[0](s)}}function N(t,n,e,r){return t[1]&&r?L(e.ctx.slice(),t[1](r(n))):e.ctx}function ut(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const u=[],a=Math.max(n.dirty.length,s.length);for(let i=0;i<a;i+=1)u[i]=n.dirty[i]|s[i];return u}return n.dirty|s}return n.dirty}function ft(t,n,e,r,s,u){if(s){const a=N(n,e,r,u);t.p(a,s)}}function it(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function ct(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function at(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function dt(t){const n={};for(const e in t)n[e]=!0;return n}const l=[],q=[];let _=[];const w=[],D=Promise.resolve();let v=!1;function F(){v||(v=!0,D.then(P))}function E(t){_.push(t)}function lt(t){w.push(t)}const b=new Set;let d=0;function P(){if(d!==0)return;const t=V;do{try{for(;d<l.length;){const n=l[d];d++,h(n),H(n.$$)}}catch(n){throw l.length=0,d=0,n}for(h(null),l.length=0,d=0;q.length;)q.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(l.length);for(;w.length;)w.pop()();v=!1,b.clear(),h(t)}function H(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}function Q(t){const n=[],e=[];_.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),_=n}const $=new Set;let c;function _t(){c={r:0,c:[],p:c}}function ht(){c.r||g(c.c),c=c.p}function T(t,n){t&&t.i&&($.delete(t),t.i(n))}function gt(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),c.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}else r&&r()}function pt(t,n,e){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function yt(t){t&&t.c()}function $t(t,n){t&&t.l(n)}function W(t,n,e){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),E(()=>{const u=t.$$.on_mount.map(C).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),s.forEach(E)}function X(t,n){const e=t.$$;e.fragment!==null&&(Q(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(t,n){t.$$.dirty[0]===-1&&(l.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function mt(t,n,e,r,s,u,a=null,i=[-1]){const p=V;h(t);const o=t.$$={fragment:null,ctx:[],props:u,update:m,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:I(),dirty:i,skip_bound:!1,root:n.target||p.$$.root};a&&a(o.root);let S=!1;if(o.ctx=e?e(t,n.props||{},(f,k,...j)=>{const O=j.length?j[0]:k;return o.ctx&&s(o.ctx[f],o.ctx[f]=O)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](O),S&&Y(t,f)),k}):[],o.update(),S=!0,g(o.before_update),o.fragment=r?r(o.ctx):!1,n.target){if(n.hydrate){J();const f=B(n.target);o.fragment&&o.fragment.l(f),f.forEach(G)}else o.fragment&&o.fragment.c();n.intro&&T(t.$$.fragment),W(t,n.target,n.anchor),K(),P()}h(p)}class xt{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){X(this,1),this.$destroy=m}$on(n,e){if(!M(e))return m;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const bt="4.2.12",Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{xt as S,bt as V,$t as a,gt as b,yt as c,X as d,q as e,pt as f,lt as g,_t as h,mt as i,ht as j,L as k,E as l,W as m,m as n,ot as o,it as p,ut as q,g as r,et as s,T as t,ft as u,dt as v,rt as w,at as x,ct as y,st as z};
