import{S as N,i as O,s as P,n as I,l as M}from"./index-Dy1J9qof.js";import{o as p,m as x,p as g,b as v,d as y,j as l,z as C,i as w,k as T,x as Q,t as H,g as G,l as J}from"./lifecycle-mCW1c9RL.js";import{e as R,u as U,d as W}from"./each-CjkgdRJJ.js";function X(r,e,t){const a=r.slice();return a[20]=e[t],a[22]=t,a}function j(r){let e,t;return{c(){e=p("line"),this.h()},l(a){e=g(a,"line",{class:!0,y1:!0,y2:!0,x1:!0,x2:!0}),v(e).forEach(y),this.h()},h(){l(e,"class","gridline svelte-1f0s80k"),l(e,"y1",t=r[12]*-1),l(e,"y2","0"),l(e,"x1","0"),l(e,"x2","0")},m(a,i){w(a,e,i)},p(a,i){i&4096&&t!==(t=a[12]*-1)&&l(e,"y1",t)},d(a){a&&y(e)}}}function q(r){let e,t,a;return{c(){e=p("line"),this.h()},l(i){e=g(i,"line",{class:!0,y1:!0,y2:!0,x1:!0,x2:!0}),v(e).forEach(y),this.h()},h(){l(e,"class","tick-mark svelte-1f0s80k"),l(e,"y1",0),l(e,"y2",6),l(e,"x1",t=r[8]?r[9].bandwidth()/2:0),l(e,"x2",a=r[8]?r[9].bandwidth()/2:0)},m(i,s){w(i,e,s)},p(i,s){s&768&&t!==(t=i[8]?i[9].bandwidth()/2:0)&&l(e,"x1",t),s&768&&a!==(a=i[8]?i[9].bandwidth()/2:0)&&l(e,"x2",a)},d(i){i&&y(e)}}}function z(r,e){let t,a,i,s=e[4](e[20])+"",k,_,u,d,o,n=e[0]!==!1&&j(e),f=e[1]===!0&&q(e);return{key:r,first:null,c(){t=p("g"),n&&n.c(),a=x(),f&&f.c(),i=p("text"),k=H(s),this.h()},l(m){t=g(m,"g",{class:!0,transform:!0});var h=v(t);n&&n.l(h),a=x(),f&&f.l(h),i=g(h,"text",{x:!0,y:!0,dx:!0,dy:!0,"text-anchor":!0,class:!0});var A=v(i);k=G(A,s),A.forEach(y),h.forEach(y),this.h()},h(){l(i,"x",_=e[8]?e[9].bandwidth()/2+e[5]:e[5]),l(i,"y",e[6]),l(i,"dx",""),l(i,"dy",""),l(i,"text-anchor",u=e[18](e[22])),l(i,"class","svelte-1f0s80k"),l(t,"class",d="tick tick-"+e[22]+" svelte-1f0s80k"),l(t,"transform",o="translate("+e[9](e[20])+","+Math.max(...e[11])+")"),this.first=t},m(m,h){w(m,t,h),n&&n.m(t,null),T(t,a),f&&f.m(t,null),T(t,i),T(i,k)},p(m,h){e=m,e[0]!==!1?n?n.p(e,h):(n=j(e),n.c(),n.m(t,a)):n&&(n.d(1),n=null),e[1]===!0?f?f.p(e,h):(f=q(e),f.c(),f.m(t,i)):f&&(f.d(1),f=null),h&1040&&s!==(s=e[4](e[20])+"")&&J(k,s),h&800&&_!==(_=e[8]?e[9].bandwidth()/2+e[5]:e[5])&&l(i,"x",_),h&64&&l(i,"y",e[6]),h&1024&&u!==(u=e[18](e[22]))&&l(i,"text-anchor",u),h&1024&&d!==(d="tick tick-"+e[22]+" svelte-1f0s80k")&&l(t,"class",d),h&3584&&o!==(o="translate("+e[9](e[20])+","+Math.max(...e[11])+")")&&l(t,"transform",o)},d(m){m&&y(t),n&&n.d(),f&&f.d()}}}function B(r){let e,t,a;return{c(){e=p("line"),this.h()},l(i){e=g(i,"line",{class:!0,y1:!0,y2:!0,x1:!0,x2:!0}),v(e).forEach(y),this.h()},h(){l(e,"class","baseline svelte-1f0s80k"),l(e,"y1",t=r[12]+.5),l(e,"y2",a=r[12]+.5),l(e,"x1","0"),l(e,"x2",r[13])},m(i,s){w(i,e,s)},p(i,s){s&4096&&t!==(t=i[12]+.5)&&l(e,"y1",t),s&4096&&a!==(a=i[12]+.5)&&l(e,"y2",a),s&8192&&l(e,"x2",i[13])},d(i){i&&y(e)}}}function D(r){let e,t,a,i;return{c(){e=p("text"),t=H(r[7]),this.h()},l(s){e=g(s,"text",{class:!0,x:!0,y:!0,dy:!0,fill:!0,"text-anchor":!0});var k=v(e);t=G(k,r[7]),k.forEach(y),this.h()},h(){l(e,"class","axis-label svelte-1f0s80k"),l(e,"x",a=r[13]/2),l(e,"y",i=r[12]+40),l(e,"dy","-4"),l(e,"fill","#000"),l(e,"text-anchor","middle")},m(s,k){w(s,e,k),T(e,t)},p(s,k){k&128&&J(t,s[7]),k&8192&&a!==(a=s[13]/2)&&l(e,"x",a),k&4096&&i!==(i=s[12]+40)&&l(e,"y",i)},d(s){s&&y(e)}}}function Y(r){let e,t=[],a=new Map,i,s,k=R(r[10]);const _=o=>o[20];for(let o=0;o<k.length;o+=1){let n=X(r,k,o),f=_(n);a.set(f,t[o]=z(f,n))}let u=r[2]===!0&&B(r),d=r[7]&&D(r);return{c(){e=p("g");for(let o=0;o<t.length;o+=1)t[o].c();i=x(),u&&u.c(),s=x(),d&&d.c(),this.h()},l(o){e=g(o,"g",{class:!0});var n=v(e);for(let f=0;f<t.length;f+=1)t[f].l(n);i=x(),u&&u.l(n),s=x(),d&&d.l(n),n.forEach(y),this.h()},h(){l(e,"class","axis x-axis svelte-1f0s80k"),C(e,"snapTicks",r[3])},m(o,n){w(o,e,n);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);T(e,i),u&&u.m(e,null),T(e,s),d&&d.m(e,null)},p(o,[n]){n&270195&&(k=R(o[10]),t=U(t,n,_,1,o,k,a,e,W,z,i,X)),o[2]===!0?u?u.p(o,n):(u=B(o),u.c(),u.m(e,s)):u&&(u.d(1),u=null),o[7]?d?d.p(o,n):(d=D(o),d.c(),d.m(e,null)):d&&(d.d(1),d=null),n&8&&C(e,"snapTicks",o[3])},i:I,o:I,d(o){o&&y(e);for(let n=0;n<t.length;n+=1)t[n].d();u&&u.d(),d&&d.d()}}}function Z(r,e,t){let a,i,s,k,_,u;const{width:d,height:o,xScale:n,yRange:f}=Q("LayerCake");M(r,d,c=>t(13,u=c)),M(r,o,c=>t(12,_=c)),M(r,n,c=>t(9,s=c)),M(r,f,c=>t(11,k=c));let{gridlines:m=!1}=e,{tickMarks:h=!0}=e,{baseline:A=!0}=e,{snapTicks:E=!1}=e,{formatTick:V=c=>c}=e,{ticks:b=void 0}=e,{xTick:F=0}=e,{yTick:L=16}=e,{axisLabel:S=""}=e;function K(c){if(E===!0){if(c===0)return"start";if(c===i.length-1)return"end"}return"middle"}return r.$$set=c=>{"gridlines"in c&&t(0,m=c.gridlines),"tickMarks"in c&&t(1,h=c.tickMarks),"baseline"in c&&t(2,A=c.baseline),"snapTicks"in c&&t(3,E=c.snapTicks),"formatTick"in c&&t(4,V=c.formatTick),"ticks"in c&&t(19,b=c.ticks),"xTick"in c&&t(5,F=c.xTick),"yTick"in c&&t(6,L=c.yTick),"axisLabel"in c&&t(7,S=c.axisLabel)},r.$$.update=()=>{r.$$.dirty&512&&t(8,a=typeof s.bandwidth=="function"),r.$$.dirty&525056&&t(10,i=Array.isArray(b)?b:a?s.domain():typeof b=="function"?b(s.ticks()):s.ticks(b))},[m,h,A,E,V,F,L,S,a,s,i,k,_,u,d,o,n,f,K,b]}class $ extends N{constructor(e){super(),O(this,e,Z,Y,P,{gridlines:0,tickMarks:1,baseline:2,snapTicks:3,formatTick:4,ticks:19,xTick:5,yTick:6,axisLabel:7})}}$.__docgen={version:3,name:"AxisX.svelte",data:[{keywords:[{name:"type",description:"{boolean} [gridlines=true]"}],visibility:"public",description:"Extend lines from the ticks into the chart space",name:"gridlines",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean} [tickMarks=false]"}],visibility:"public",description:"Show a vertical mark for each tick.",name:"tickMarks",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:"{boolean} [baseline=false]"}],visibility:"public",description:"Show a solid line at the bottom.",name:"baseline",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:"{boolean} [snapTicks=false]"}],visibility:"public",description:"Instead of centering the text on the first and the last items, align them to the edges of the chart.",name:"snapTicks",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{Function} [formatTick=d => d]"}],visibility:"public",description:"A function that passes the current tick value and expects a nicely formatted value in return.",name:"formatTick",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"Function",type:"Function"}},{keywords:[{name:"type",description:"{number|Array|Function} [ticks]"}],visibility:"public",description:"If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. If nothing, it uses the default ticks supplied by the D3 function.",name:"ticks",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"number|Array|Function",type:[{kind:"type",text:"number",type:"number"},{kind:"type",text:"Array",type:"Array"},{kind:"type",text:"Function",type:"Function"}]}},{keywords:[{name:"type",description:"{number} [xTick=0]"}],visibility:"public",description:"How far over to position the text marker.",name:"xTick",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{number} [yTick=16]"}],visibility:"public",description:"The distance from the baseline to place each tick value.",name:"yTick",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:16},{keywords:[{name:"type",description:"{string|null} [axisLabel=null]"}],visibility:"public",description:"An optional label for the y axis",name:"axisLabel",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"string|null",type:[{kind:"type",text:"string",type:"string"},{kind:"type",text:"null",type:"null"}]},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{$ as A};
