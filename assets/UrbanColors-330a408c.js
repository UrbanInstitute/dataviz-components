import{j as e}from"./jsx-runtime-4e5bfad5.js";import{M as i,C as l,b as n}from"./index-3f27f9eb.js";import{u as r}from"./urbanColors-b6c7ec8a.js";import{u as t}from"./index-49c0e550.js";import"./iframe-b62f3a35.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";function a(o){const s=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"utils/urbanColor"}),`
`,e.jsx(s.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.p,{children:["The colors utility module provides easy access to the Urban Institute's brand colors. For best practices on selecting colors for data visualizations, see the ",e.jsx(s.a,{href:"https://urbaninstitute.github.io/graphics-styleguide/#color",target:"_blank",rel:"nofollow noopener noreferrer",children:"Urban Institute Data Visualizaton Styleguide"}),"."]}),`
`,e.jsx(s.p,{children:"To use these, utilities, import the module like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { urbanColors } from "@urbaninstitute/dataviz-components/utils";
`})}),`
`,e.jsx(s.h2,{id:"primary-colors",children:"Primary Colors"}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Primary Colors",subtitle:"",colors:{blue:r.blue,gray:r.gray,black:r.black,yellow:r.yellow,magenta:r.magenta,green:r.green,space_gray:r.space_gray,red:r.red}})}),`
`,e.jsxs(s.p,{children:["Any color can be used directly from the ",e.jsx(s.code,{children:"urbanColors"})," object:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`// equal to "#1696D2"
const blue = urbanColors.blue;

// equal to "#EC00BB"
const magenta = urbanColors.magenta;
`})}),`
`,e.jsx(s.h2,{id:"color-shades",children:"Color shades"}),`
`,e.jsx(s.p,{children:"Each of Urban's primary colors also comes in a range of different shades. These can be useful for different data visualization scenarios."}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Blue shades",subtitle:"",colors:r.getBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getBlues();
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Gray shades",subtitle:"",colors:r.getGrays()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getGrays();
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Yellow shades",subtitle:"",colors:r.getYellows()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getYellows();
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Magenta shades",subtitle:"",colors:r.getMagentas()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getMagentas();
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Green shades",subtitle:"",colors:r.getGreens()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getGreens();
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Space gray shades",subtitle:"",colors:r.getSpaceGrays()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getSpaceGrays();
`})}),`
`,e.jsx(s.h2,{id:"dataviz-helpers",children:"DataViz Helpers"}),`
`,e.jsx(s.p,{children:"Below are a few helper functions to generate some useful default color palettes."}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Categorical colors",subtitle:"",colors:r.getCategoricalColors()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors();
`})}),`
`,e.jsx(s.p,{children:"This function generates a 6 color palette by default, but you can specify any number between 2 and 6."}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Categorical colors",subtitle:"2 colors",colors:r.getCategoricalColors(2)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(2);
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Categorical colors",subtitle:"3 colors",colors:r.getCategoricalColors(3)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(3);
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Categorical colors",subtitle:"4 colors",colors:r.getCategoricalColors(4)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(4);
`})}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Categorical colors",subtitle:"5 colors",colors:r.getCategoricalColors(5)})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getCategoricalColors(5);
`})}),`
`,e.jsx(s.h2,{id:"diverging-colors",children:"Diverging colors"}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Diverging colors",subtitle:"Useful for maps with diverging data",colors:r.getDivergingColors()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getDivergingColors();
`})}),`
`,e.jsx(s.h2,{id:"blues-for-maps",children:"Blues for maps"}),`
`,e.jsx(s.p,{children:"The style guide specifies a specific set of colors for usage in choropleth maps."}),`
`,e.jsx(l,{children:e.jsx(n,{title:"Blue colors for maps",subtitle:"",colors:r.getMapBlues()})}),`
`,e.jsx(s.p,{children:"Usage:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`urbanColors.getMapBlues();
`})})]})}function C(o={}){const{wrapper:s}=Object.assign({},t(),o.components);return s?e.jsx(s,Object.assign({},o,{children:e.jsx(a,o)})):a(o)}export{C as default};
