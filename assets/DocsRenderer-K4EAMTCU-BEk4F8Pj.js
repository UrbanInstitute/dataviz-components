function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-VjJb70r0.js","./index-UR4ZlisH.js","./index-C_XRhBvo.js","./iframe-BfVtOPWV.js","./_commonjsHelpers-Cpj98o6Y.js","./index-Bw8VTzHM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as h}from"./iframe-BfVtOPWV.js";import{e as d,R as o,r as a}from"./index-C_XRhBvo.js";import{f as E,A as R,H as x,D as f}from"./index-Bri16zoK.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BzJiga1e.js";import"./index-DrFu-skq.js";var c={},m=d;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},D=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},T=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},i=f;return new Promise((u,p)=>{h(()=>import("./index-VjJb70r0.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({MDXProvider:l})=>D(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{T as DocsRenderer,w as defaultComponents};
